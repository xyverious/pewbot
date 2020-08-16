const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "pew";

let m = require("moment-duration-format"),
   os = require("os"),
   cpustat = require("cpu-stat"),
   ms = require("ms"),
   moment = require("moment"),
   fetch = require("node-fetch")

bot.on("ready", () => {
  function randomStatus() {
    let status = ["uwu", ":o", "nwoo ;-;", "pewww uwuu"]
    let rstatus = Math.floor(Math.random() * status.length);
    //bot.user.setActivity(status[rstatus], {type: "PLAYING"});
    bot.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://twitch.tv/itspewwpew/"});
  }; setInterval(randomStatus, 30000)
  console.log("online")
  
});
client.on('message', async message => {
   if (message.startsWith(prefix + "ping")) {
    try {
      const m = await message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...)
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM") // Tired of choosing the embed colors? Just type "RANDOM" on it!
      .addField("⌛ Latency", `**${m.createdTimestamp -  message.createdTimestamp}ms**`)
      .addField("💓 HeartBreak", `**${Math.floor(client.ws.ping)}ms**`) // Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0
      return m.edit(`🏓 Pong!`, embed);
    } catch (error) {
      return message.channel.send(`Something went wrong: ${error.message}`);
      // Restart the bot as usual.
    }
  } // easy way.
});

bot.login("NzM3MjgwNjQ0NTM4Njk1NzEy.Xx7EGw.6jfm5dKl5UtLX78SUs6NC7N-fWc")
