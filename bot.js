const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = ".pew ";

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

const Discord = require
("discord.js");
const bot = new Discord.Client();
require("dotenv").config();
require("./server.js");


let memberlog = "737271277089194027";

bot.on("ready", () =>  {
  console.log("bot siap")
 // bot.user.setActivity("")
});

bot.on("guildMemberAdd", member => {
        if (member.guild.id !== "737271277089194024") return;
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setImage("https://i.gifer.com/2e9L.gif")
          .setFooter(`${member.guild.name}`)
          .setTimestamp(new date())
          .setThumbnail(member.user.avatarURL())
          .setTitle(`WELCOME TO ${member.guild.name}`)
          .setDescription("**HEWWO WHAT'S GOOD?!**\n" +
                  "\n" +
                  `Supp <@!${member.user.id}>, welcome aboard to ${member.guild.name}! 💯\n` +
                  "\n" +
                  "▬ Check out our Rules of the server here:\n" +
                  "<#737278282143367208>\n" +
                  "\n" +
                  "If there's any questions or any personal role request, feel free to send our MOD a message and you will be assisted shortly. Cheers! loveeyes\n")
    bot.channel.cache.get(memberlog).send(embed)
 
})

bot.on("guildMemberRemove", member => {
      if (member.guild.id !== "737271277089194024") return;
      const embeded = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter(`${member.user.id}`)
        .setTimestamp(new date())
        .setThumbnail(member.user.avatarURL())
        .setTitle("${member.user.tag}")
        .setDescription(`<@!${member.user.id}> Left ;-;`)
    bot.channel.cache.get(memberlog).send(embeded)
})

bot.on('message', async message => {
   if (message.content === "ping") {
    try {
      const m = await message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...)
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM") // Tired of choosing the embed colors? Just type "RANDOM" on it!
      .setTimestamp(new Date())
      .addField("⌛ Latency", `**${m.createdTimestamp -  message.createdTimestamp}ms**`)
      .addField("💓 HeartBreak", `**${Math.floor(bot.ws.ping)}ms**`) // Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0
      return m.edit(`🏓 Pong!`, embed);
    } catch (error) {
      return message.channel.send(`Something went wrong: ${error.message}`);
      // Restart the bot as usual.
    }
  } // easy way.
});

function doKissAction() {
    var rand = [
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
        'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0]) {
                   case 'kiss':
                const personTagged = message.mentions.members.first();
                const embed = new Discord.MessageEmbed()
                .setDescription(`${message.author.username} Kissed` + personTagged.displayName + `soo sweet UwU` + doKissAction())
                .setColor("RANDOM")
                .setFooter(":o ;-; TwT")
 
                if(!args[1]) {
                    message.channel.send('Please Mention Someone to Kiss UwU')
                }else{
                    message.channel.send(embed)
                }
 
            break;
 
   }
})

bot.login("NzM3MjgwNjQ0NTM4Njk1NzEy.Xx7EGw.6jfm5dKl5UtLX78SUs6NC7N-fWc")
