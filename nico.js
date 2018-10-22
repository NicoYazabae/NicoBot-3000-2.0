//Important bot configurations
const botconfig = require("./botconfig.json");
const Operators = require("./Ops.json");
const TestOp = require("./TestOp.json");
const {
    Client,
    Attachment
} = require("discord.js");
const Jimp = require('jimp');

const bot = new Client({
    disableEveryone: true,
    autorun: true
});

//Nico bot online response
bot.on("ready", async () => {
    console.log(bot.user.username + " is online!");
    bot.user.setActivity("nico nico nii~");
});
bot.login(botconfig.token);


//Random stuff

let lol = 0;

//Bot regular messages
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    //Bot message configs
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let cmd2 = messageArray[1];
    let args = messageArray.slice(1);
    let send = 0;


    //Nicobot messages & responds
    if (cmd === prefix + "nico") {
        return message.channel.send("Nico Nico nii~ ❤️");
    }

    if (cmd === prefix + "Hello") {

        return message.channel.send("Hello " + `${message.author},`);
    }

    if (cmd === prefix + "oof") {

        let attachment = new Attachment('./otherpics/oof.png');

        message.channel.send(`${message.author},`, attachment);
    }



    //Help Commands
    if (cmd === preffix + "Help"){
        return messege.channel.send(
            "Here's a list of Commands followed by a Description of said commands usage." +
            "\n"+
            "In the bottom there is a list of regular Commands."+
            "\n"+
            "Function: 'PickOp'"+
            "\n"+
            "Description: When the OpPick function is entered, the Bot will randomly choose "+
            "\n"+
            "\n"+
            "Function: 'PickOp'; aditional: 'atk' or 'def'"+
            "\n"+
            "Description: When the OpPick function is entered, the Bot will randomly choose an Operator for the game Rainbow Six: Siege."+
            "\n"+
            "If 'atk' is entered, a random attacking Operator is chosen and outputted, with his or hers loadout randomly chosen too."
            "\n"+
            "If 'def' is entered, a random defending Operator is chosen and outputted, with his or hers loadout randomly chosen too."
            "\n"+
            "\n"+
            "Function: 'nico'"+
            "\n"+
            "Description: Outputs 'nico nico niiiiii'"+
            "\n"+
            "Function: 'Oof'"+
            "\n"+
            "Description: Outputs a picture saying 'oof'+
            "\n"+
            "Function: 'Hello'"+
            "\n"+
            "Description: Outputs ''"+
            "\n"+
            "Function: 'Ping'"+
            "\n"+
            "Description: Outputs ''"+
            "\n"+
            "Function: '!Avatar'"+
            "\n"+
            "Description: Outputs ''"+
            "\n"+
        )
    }


    //Testgrounds
    if (cmd === prefix + "PickOp") {




        if ((cmd === prefix + "PickOp" && cmd2 === "Atk") || (cmd === prefix + "PickOp" && cmd2 === "atk")) {
            statCheckAtk();
        }


            function statCheckAtk() {

                let Op = Math.ceil(Math.random() * Operators.length) - 1;
                if (Operators[Op].stat === "Def") {

                    statCheckAtk();


                } else if (Operators[Op].stat === "Atk") {
                            let WeaponNum = Math.ceil(Math.random() * Operators[Op].primaryWeapon.length) - 1;
                            let WeaponNumSec = Math.ceil(Math.random() * Operators[Op].secondaryWeapon.length) - 1;


                            let attachment = new Attachment("./Siege/Operators_icon/" + Operators[Op].name + ".png");
                            return message.channel.send("```md" +
                                    "\n" +
                                    ">Your Operator is " +
                                    "\n" +
                                    "/* " +
                                    Operators[Op].name +
                                    "*\n>And you loadout is:" +
                                    "\n" +
                                    "/* " +
                                    (Operators[Op]).primaryWeapon[WeaponNum] +
                                    "*\n>And " +
                                    "\n" +
                                    "/* " +
                                    (Operators[Op]).secondaryWeapon[WeaponNumSec] +
                                    "*```", attachment);
                }
        }







        if ((cmd === prefix + "PickOp" && cmd2 === "Def") || (cmd === prefix + "PickOp" && cmd2 === "def" )){
            statCheckDef();
        }




            function statCheckDef() {

                let Op = Math.ceil(Math.random() * Operators.length) - 1;
                if (Operators[Op].stat === "Atk") {

                    statCheckDef();


                } else if (Operators[Op].stat === "Def") {
                            let WeaponNum = Math.ceil(Math.random() * Operators[Op].primaryWeapon.length) - 1;
                            let WeaponNumSec = Math.ceil(Math.random() * Operators[Op].secondaryWeapon.length) - 1;


                            let attachment = new Attachment("./Siege/Operators_icon/" + Operators[Op].name + ".png");
                            return message.channel.send("```md" +
                                    "\n" +
                                    ">Your Operator is " +
                                    "\n" +
                                    "/* " +
                                    Operators[Op].name +
                                    "*\n>And you loadout is:" +
                                    "\n" +
                                    "/* " +
                                    (Operators[Op]).primaryWeapon[WeaponNum] +
                                    "*\n>And " +
                                    "\n" +
                                    "/* " +
                                    (Operators[Op]).secondaryWeapon[WeaponNumSec] +
                                    "*```", attachment);
                }
        }




         if (cmd === prefix + "PickOp" && cmd2 !=="Atk" && cmd2 !== "Def" && cmd2 !== "def" && cmd2 !=="atk"){

             let Op = Math.ceil(Math.random() * Operators.length) - 1;

             let WeaponNum = Math.ceil(Math.random() * Operators[Op].primaryWeapon.length) - 1;
            let WeaponNumSec = Math.ceil(Math.random() * Operators[Op].secondaryWeapon.length) - 1;


            let attachment = new Attachment("./Siege/Operators_icon/" + Operators[Op].name + ".png");
            return message.channel.send("```md" +
                                    "\n" +
                                    ">Your Operator is " +
                                    "\n" +
                                    "/* " +
                                    Operators[Op].name +
                                    "*\n>And you loadout is:" +
                                    "\n" +
                                    "/* " +
                                    (Operators[Op]).primaryWeapon[WeaponNum] +
                                    "*\n>And " +
                                    "\n" +
                                    "/* " +
                                    (Operators[Op]).secondaryWeapon[WeaponNumSec] +
                                    "*```", attachment);
            }
    }


        if (cmd === prefix + "test" && cmd2 === "atk") {
            return message.channel.send("Nico Nico nii");

    }


    //Sends random Siege Operator
    if (cmd === prefix + ("OpPick" || "opPick" || "oppick" || "op" || "oP" || "OP" || "Op")) {

        let Num = Math.ceil(Math.random() * Operators.length) - 1;
        let attachment = new Attachment("./Operators/" + Operators[Num].image + ".png");

        return message.channel.send(Operators[Num].Name + " " + Num, attachment);
    }

    //Sends 2 random operators for Siege with images
    if (cmd === prefix + "Op2") {
        let Num1 = Math.ceil(Math.random() * Operators.length) - 1;

        let Num2 = Math.ceil(Math.random() * Operators.length) - 1;

        if (Num2 === Num1) {
            let Num2 = Math.ceil(Math.random() * Operators.length) - 1;
        } else {

            let attachment = new Attachment("./Operators/" + Operators[Num1].image + ".png");
            let attachment2nd = new Attachment("./Operators/" + Operators[Num2].image + ".png");

            return message.channel.send("Your two Operators are: " + Operators[Num1].name + " and " + Operators[Num2].name + ".");
        }
    }


    if (cmd === prefix + "OpTest") {
        let Op = Math.ceil(Math.random() * Operators.length) - 1;

        let WeaponNum = Math.ceil(Math.random() * Operators[Op].primaryWeapon.length) - 1;
        let WeaponNumSec = Math.ceil(Math.random() * Operators[Op].secondaryWeapon.length) - 1;


        let attachment = new Attachment("./Siege/Operators_icon/" + Operators[Op].name + ".png");
        return message.channel.send("```md" +
                                    "\n" +
                                    ">Your Operator is " +
                                    "\n" +
                                    "/* " +
                                    Operators[Op].name +
                                    "*\n>And you loadout is:" +
                                    "\n" +
                                    "/* " +
                                    (Operators[Op]).primaryWeapon[WeaponNum] +
                                    "*\n>And " +
                                    "\n" +
                                    "/* " +
                                    (Operators[Op]).secondaryWeapon[WeaponNumSec] +
                                    "*```", attachment);

    }

    if (cmd === prefix + "Op2") {
        let Num1 = Math.ceil(Math.random() * Operators.length) - 1;

        let Num2 = Math.ceil(Math.random() * Operators.length) - 1;

        if (Num2 === Num1) {
            let Num2 = Math.ceil(Math.random() * Operators.length) - 1;
        } else {


            let attachment = new Attachment("./Operators/" + Operators[Num1].image + ".png");
            let attachment2nd = new Attachment("./Operators/" + Operators[Num2].image + ".png");



            return message.channel.send("Your two Operators are: " + Operators[Num1].Name + " and " + Operators[Num2].Name + ".", attachment);

        }
    }


    //Image merging testgrounds

    if (cmd === prefix + "imageTest") {


        let images = ['./testImage/wallpaper.jpg', './Siege/Operators_icon/Ash.png', './Siege/Operators_icon/Smoke.png', './testImage/NicoPointing.png']
        let Jimps = [];

        for (var i = 0; i < images.length; i++) {
            Jimps.push(Jimp.read(images[i]));

        }

        Promise.all(Jimps).then(function (data) {
            return Promise.all(Jimps);
        }).then(function (data) {
            data[0].composite(data[1], 60, 0);
            data[0].composite(data[2], 0, 0);
            data[0].composite(data[3], 600, 600);

            data[0].write('final-images/test.png', function () {
                console.log("wrote the image");
                let attachment = new Attachment('final-images/test.png');

                return message.channel.send("hello", attachment);
            });
        });
    }


});




//Discord Bot standard replies that we don't actually use
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


/* MARKED FOR DELETION! MARKED FOR DELETION! MARKED FOR DELETION! MARKED FOR DELETION! MARKED FOR DELETION! MARKED FOR DELETION! MARKED FOR DELETION! MARKED FOR DELETION!

