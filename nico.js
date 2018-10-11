const botconfig = require("./botconfig.json");
const { Client , Attachment } = require("discord.js");

const bot = new Client({
    disableEveryone: true,
    autorun: true
});

bot.on("ready", async ()=> {
    console.log( bot.user.username + " is online!");
    bot.user.setGame("nico nico nii~");
});


bot.login(botconfig.token);


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);



    if (cmd === prefix + "nico") {
        return message.channel.send("Nico Nico nii~ ❤️");
    }

    if (cmd === prefix + "Hello") {

        return message.channel.send("Hello " + `${message.author},`);
    }

     if (cmd === prefix + "oof") {


        const attachment = new Attachment('https://ih0.redbubble.net/image.564965245.1274/flat,800x800,070,f.u1.jpg');

        message.channel.send( `${message.author},`, attachment);
    }

    if (cmd === prefix + "OpPick") {

        RandomNum = Math.random();

        if (RandomNum < 1/3*1) {
            return message.channel.send("Blitz");
        }

        if (RandomNum > 1/3*1 && RandomNum < 1/3*2) {
            return message.channel.send("IQ");
        }

        if (RandomNum > 1/3*2 && RandomNum < 1/3*3) {
            return message.channel.send("Sledge");
        }


    }


})


//test123
bot.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }


});


bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '!avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});


