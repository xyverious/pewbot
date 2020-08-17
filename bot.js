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
  console.log(`Logged in as ${bot.user.tag}!`);
  
});

bot.on("guildMemberAdd", member => {
        if (member.guild.id !== "737271277089194024") return;
        let memberlog = "737271277089194027";
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setImage("https://i.gifer.com/2e9L.gif")
          .setFooter("Pew Army")
          .setThumbnail(member.user.avatarURL())
          .setTitle("WELCOME TO 🍑PEW ARMY🍑")
          .setDescription("**HEWWO WHAT'S GOOD?!**\n" +
                  "\n" +
                  `Supp <@!${member.user.id}>, welcome aboard to 🍑PEW ARMY🍑! 💯\n` +
                  "\n" +
                  "▬ Check out our Rules of the server here:\n" +
                  "<#737278282143367208>\n" +
                  "\n" +
                  "If there's any questions or any personal role request, feel free to send our MOD a message and you will be assisted shortly. Cheers! loveeyes\n")
    bot.channels.cache.get(memberlog).send(embed);
 
})

bot.on("guildMemberRemove", member => {
      if (member.guild.id !== "737271277089194024") return;
      let memberlog = "737271277089194027";
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter("Pew Army")
        .setThumbnail(member.user.avatarURL())
        .setTitle(`${member.user.tag}`)
        .setDescription(`<@!${member.user.id}> Left ;-;`)
    bot.channels.cache.get(memberlog).send(embed);
})

bot.on('message', async message => {
   if (message.content === "ping") {
    try {
      const m = await message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...)
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM") // Tired of choosing the embed colors? Just type "RANDOM" on it!
      .addField("⌛ Latency", `**${m.createdTimestamp -  message.createdTimestamp}ms**`)
      .addField("💓 HeartBreak", `**${Math.floor(bot.ws.ping)}ms**`) // Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0
      return m.edit(`🏓 Pong!`, embed);
    } catch (error) {
      return message.channel.send(`Something went wrong: ${error.message}`);
      // Restart the bot as usual.
    }
  } // easy way.
});

bot.login("NzM3MjgwNjQ0NTM4Njk1NzEy.Xx7EGw.6jfm5dKl5UtLX78SUs6NC7N-fWc")
