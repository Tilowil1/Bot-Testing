const Discord = require("Discord.js");
const bot = new Discord.Client();
const cfg = require('./index.json');
const prefix = ("/");

bot.on('ready', function () {
    console.log("Wesh je fontionne :D");
    bot.user.setActivity('Dokkan Battle')
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur' + member.displayName + ' ;)')
        console.log(`${member.displayName} à rejoint le serveur.`)
    }).catch(console.error)
});

bot.on('message', msg => {
    if (msg.content --- "Salut ^^"){
    msg.reply("Wesh ça vas ?")
} 
});

bot.login(cfg.token);