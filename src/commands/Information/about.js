const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/TGFUKAUSIK"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/hJspBJer2T")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Atoms Music', 'https://cdn.discordapp.com/attachments/807141495806492673/911633649911353364/Avatar')
            .setThumbnail('https://cdn.discordapp.com/attachments/807141495806492673/911633649911353364/Avatar')
            .setColor('#303236')
            .addField('Creator', '[TGFUKAUSIK#3132](https://github.com/brblacky) And [TGFUKAUSIK#3132](https://github.com/TGFUKAUSIK#3132)', true)
            .addField('Organization', '[N/A](N/A)', true)
            .addField('Repository', '[Here](N/A)', true)
            .addField('\u200b',
                `[Atom's Music](https://github.com/TGFUKAUSIK) is [TGFUKAUSIK](https://github.com/TGFUKAUSIK) and [TGFUKAUSIK](https://github.com/TGFUKAUSIK)'s Was created by TGFUKAUSIK#3132. I really wanted to make a music bot which needs to provide a good music quality and need to support almost every music streaming platforms , im newbie at codes , made my first scrap bot with several open source scripts , but it doesnt gave me satisfaction , so i invested time and made this Atom's Music with less bugs and optimised bot , hope you love it, btw sorry for spamming my names😅😅`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}