const Discord = require("discord.js");
const self = new Discord.Client();

self.on("ready", () => {
  console.log("Sunt online 24/7 acum.");
});

self.login(process.env.TOKEN);
