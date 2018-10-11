const botconfig = require("./botconfig.json");
const Operators = require("./Operators.json");
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

        var Num = Math.ceil(Math.random()*3) - 1;

        return message.channel.send(Operators[Num]);


    }


    if (cmd === prefix + "OpPickOld") {

        RandomNum = Math.random();

        if (RandomNum < 1/22*1) {
            return message.channel.send("Blitz");
        }

        if (RandomNum > 1/22*1 && RandomNum < 1/22*2) {
            return message.channel.send("IQ");
        }

        if (RandomNum > 1/22*2 && RandomNum < 1/22*3) {
            return message.channel.send("Sledge");
        }

        if (RandomNum > 1/22*3 && RandomNum < 1/22*4) {
            return message.channel.send("Kapkan");
        }

        if (RandomNum > 1/22*4 && RandomNum < 1/22*5) {
            return message.channel.send("Tachanka");
        }

        if (RandomNum > 1/22*5 && RandomNum < 1/22*6) {
            return message.channel.send("Glaz");
        }

        if (RandomNum > 1/22*6 && RandomNum < 1/22*7) {
            return message.channel.send("Fuze");
        }

        if (RandomNum > 1/22*7 && RandomNum < 1/22*8) {
            return message.channel.send("Blitz");
        }

        if (RandomNum > 1/22*8 && RandomNum < 1/22*9) {
            return message.channel.send("Bandit");
        }

        if (RandomNum > 1/22*9 && RandomNum < 1/22*10) {
            return message.channel.send("Jäger");
        }

        if (RandomNum > 1/22*10 && RandomNum < 1/22*11) {
            return message.channel.send("Rook");
        }

        if (RandomNum > 1/22*11 && RandomNum < 1/22*12) {
            return message.channel.send("Doc");
        }

        if (RandomNum > 1/22*12 && RandomNum < 1/22*13) {
            return message.channel.send("Twitch");
        }

        if (RandomNum > 1/22*13 && RandomNum < 1/22*14) {
            return message.channel.send("Montagne");
        }

        if (RandomNum > 1/22*14 && RandomNum < 1/22*15) {
            return message.channel.send("Thermite");
        }

        if (RandomNum > 1/22*15 && RandomNum < 1/22*16) {
            return message.channel.send("Pulse");
        }

        if (RandomNum > 1/22*16 && RandomNum < 1/22*17) {
            return message.channel.send("Castle");
        }

        if (RandomNum > 1/22*17 && RandomNum < 1/22*18) {
            return message.channel.send("Ash");
        }

        if (RandomNum > 1/22*18 && RandomNum < 1/22*19) {
            return message.channel.send("Thatcher");
        }

        if (RandomNum > 1/22*19 && RandomNum < 1/22*20) {
            return message.channel.send("Smoke");
        }

        if (RandomNum > 1/22*20 && RandomNum < 1/22*21) {
            return message.channel.send("Sledge");
        }

        if (RandomNum > 1/22*21 && RandomNum < 1/22*22) {
            return message.channel.send("Mute");
        }

        }

});


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


