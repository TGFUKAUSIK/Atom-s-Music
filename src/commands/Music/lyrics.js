// Install node fetch 2.6.1 //

const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: "lyrics",
    aliases: ["ly"],
    category: "Music",
    description: "Get song lyrics",
    args: false,
    usage: "m.lyrics <song>",
    permission: [],
    owner: false,
	 execute: async (message, args, client, prefix) => {
    function substring(length, value) {
      const replaced = value.replace(/\n/g, "--");
      const regex = `.{1,${length}}`;
      const lines = replaced
          .match(new RegExp(regex, "g"))
          .map((line) => line.replace(/--/g, "\n"));

  return lines;
  }

        const query =  args.join(' ');
        if(!query) return message.channel.send("**Please specify a title. I can\'t find any lyrics**")

        const data = await fetch(`https://some-random-api.ml/lyrics?title=${encodeURI(query)}`)
        .then(res => res.json())
        .catch(() => null);
    
        try {
          const embeds = substring(4000, data.lyrics).map((value, index) => {
            const isFirst = index === 0;

            return new MessageEmbed({ 
                title: isFirst ? `${data.title} - ${data.author}` : null,
                thumbnail: isFirst ? { url: data.thumbnail.genius } : null,
                description: value,
                url: data.links.genius,
                color: 'BLURPLE',
            });
        });

        return message.channel.send( { embeds } );
      } catch(err){
        return message.channel.send({ content: 'Sorry but I could not find lyrics for thats song' })
    };
     }
    }