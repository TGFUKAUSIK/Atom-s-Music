const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite LavaMusic",
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
            .addField('invite Atoms Music', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
				}