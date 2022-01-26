const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "247",
  aliases: ["24h", "24/7", "24*7"],
  category: "Music",
  description: "24/7 in voice channel",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {


    const player = message.client.manager.players.get(message.guild.id);
    if (player.twentyFourSeven) {
player.twentyFourSeven = false;
const db = require("../../schema/reconnect.js")
const query = {
      ChannelID: player.voiceChannel,
      TextChannelID: message.channel.id,
      GuildID: message.guild.id,
    }
db.findOne(query, async(data) => {
       if(data) {
    await db.findOneAndDelete(query)
}} ) 
      
      const embed = new MessageEmbed()
       .setColor(client.embedColor)
       .setDescription(`24/7 mode is now off.`)
      return message.reply({embeds: [embed]});
    }
    else {
const autoReconnect = require("../../schema/reconnect.js")
  player.twentyFourSeven = true;
const newAutoReconnect = new autoReconnect({
      ChannelID: player.voiceChannel,
      TextChannelID: message.channel.id,
      GuildID: message.guild.id,
    });
    newAutoReconnect.save();
      
      const embed = new MessageEmbed()
       .setColor(client.embedColor)
       .setDescription(`24/7 mode is now on.`)
      
      return message.reply({embeds: [embed]});
    }
  }
};