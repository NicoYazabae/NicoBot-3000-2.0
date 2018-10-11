var Discord = require('discord.io');

var logger = require('winston');
var auth = require('./auth.json');
var dt = require('./myfirstmodule');
var rockstar = 0;

//dice
var d6number = 0;
var d5number = 0;
var d4number = 0;
var d3number = 0;
var d2number = 0;



// drop places
var tilted = 0;
var tomato = 0;
var retail = 0;
var lucky = 0;
var anarchy = 0;
var dusty = 0;
var fatal = 0;
var flush = 0;
var greasy = 0;
var haunted = 0;
var junk = 0;
var lonely = 0;
var loot = 0;
var moisty = 0;
var pleasant = 0;
var salty = 0;
var shifty = 0;
var snobby = 0;
var wailing = 0;
var dropNumber = 0;


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});





bot.on('guildMemberAdd', member => {
    console.log('User ' + member.username + ' has joined the server!')

});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });

                rockstar +=1;

                break;

                case 'nico':
                rockstar +=1;
                bot.sendMessage({
                    to: channelID,
                    message: 'Nico Nico nii~ ❤️'
                });

                break;

                case 'addRockstar':
                rockstar +=1;
                bot.sendMessage({
                    to: channelID,
                    message: 'added +1 Rockstar to count'
                });

                break;

                case 'countRockstar':

                bot.sendMessage({
                    to: channelID,
                    message: "The total number of Rockstar's is: " + rockstar
                });

                break;


                case 'dropCount':

                bot.sendMessage({
                    to: channelID,
                    message: 'your drop count is: \nTilted Towers: ' + tilted + '\nTomato Town: ' + tomato + '\nRetail Row: ' + retail + '\nSalty Springs: ' + salty +
                    '\nAnarchy Acres: ' + anarchy + '\nDusty Depot: ' + dusty + '\nFatal Fields: ' + fatal + '\nFlush Factory: ' + flush + '\nGreasy Grove: ' + greasy +
                    '\nHaunted Hills: ' + haunted + '\nJunk Junction: ' + junk + '\nLonely Lodge: ' + lonely + '\nLoot Lake: ' + loot + '\nMoisty Mire: ' + moisty +
                    '\nPleasant Park: ' + pleasant + '\nShifty Shafts: ' + shifty + '\nSnobby Shores: ' + snobby + '\nWailing Woods: ' + wailing + '\nLucky Landing: ' + lucky
                });

                break;

                case 'dropClear':
                tilted = 0;
                tomato = 0;
                lucky = 0;
                retail = 0;

                bot.sendMessage({
                    to: channelID,
                    message: 'cleared drop count'
                });

                break;

                 case 'clearRockstar':
                rockstar = 0;
                bot.sendMessage({
                    to: channelID,
                    message: 'Rockstar counter cleared'
                });

                break;






                //Fortnite random drop


                case 'drop':


                dropNumber = Math.random();

                if (Math.random() < 1/20*1) {

                tilted += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Tilted Towers" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/TiltedSeason4.png"
                });

                break;
                } else if (dropNumber > 1/20*1 && dropNumber < 1/20*2) {
                tomato +=1;
                bot.sendMessage({
                    to: channelID,
                    message: "Tomato Town" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/TomatoSeason4.png"
                });

                break;
                }
                else if (dropNumber > 1/20*2 && dropNumber < 1/20*3) {
                retail += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Retail Row" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/RetailSeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*3 && dropNumber < 1/20*4) {
                lucky += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Lucky Landing" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/LuckySeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*4 && dropNumber < 1/20*5) {
                anarchy += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Anarchy Acres" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/AnarchySeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*5 && dropNumber < 1/20*6) {
                dusty += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Dusty Divot" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/DustySeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*6 && dropNumber < 1/20*7) {
                fatal += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Fatal Fields" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/FatalSeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*7 && dropNumber < 1/20*8) {
                flush += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Flush Factory" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/FlushSeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*8 && dropNumber < 1/20*9) {
                greasy += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Greasy Grove" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/GreasySeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*9 && dropNumber < 1/20*10) {
                haunted += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Haunted Hills" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/HauntedSeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*10 && dropNumber < 1/20*11) {
                junk += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Junk Junction" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/JunkSeason4.png"
                });

                break;
                }

                  else if (dropNumber > 1/20*11 && dropNumber < 1/20*12) {
                lonely += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Lonely Lodge" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/LonelySeason4.png"
                });

                break;
                }

                  else if (dropNumber > 1/20*12 && dropNumber < 1/20*13) {
                loot += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Loot Lake" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/LootSeason4.png"
                });

                break;
                }

                  else if (dropNumber > 1/20*13 && dropNumber < 1/20*14) {
                moisty += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Moisty Mire" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/MoistySeason4.png"
                });

                break;
                }

                  else if (dropNumber > 1/20*14 && dropNumber < 1/20*15) {
                pleasant += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Pleasant Park" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/PleasantSeason4.png"
                });

                break;
                }

                  else if (dropNumber > 1/20*15 && dropNumber < 1/20*16) {
                salty += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Salty Springs" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/SaltySeason4.png"
                });

                break;
                }

                  else if (dropNumber > 1/20*16 && dropNumber < 1/20*17) {
                shifty += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Shifty Shafts" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/ShiftySeason4.png"
                });

                break;
                }

                  else if (dropNumber > 1/20*17 && dropNumber < 1/20*18) {
                snobby += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Snobby Shores" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/SnobbySeason4.png"
                });

                break;
                }

                else if (dropNumber > 1/20*18 && dropNumber < 1/20*19) {
                snobby += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Risky Reels" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/RiskySeason4.png"
                });

                break;
                }

                else  {
                wailing += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Wailing Woods" + "\nhttp://tobiasjzagal.dk/OwO/FortniteSeason4/WailingSeason4.png " + dropNumber
                });

                break;
                }












                 case 'florida':

                bot.sendMessage({
                    to: channelID,
                    message: 'Sad news from Florida'
                });

                break;



                case 'nr':

                bot.sendMessage({
                    to: channelID,
                    message: 'nr of members is: ' + members
                });

                break;





                case 'd6':

                d6number = Math.random();


                if (d6number < 1/6*1) {


                bot.sendMessage({
                    to: channelID,
                    message: "**1** 🎲"
                });

                break;


                } else if (d6number > 1/6*1 && d6number < 1/6*2) {
                tomato +=1;
                bot.sendMessage({
                    to: channelID,
                    message: "**2** 🎲"
                });

                break;
                } else if (d6number > 1/6*2 && d6number < 1/6*3) {

                bot.sendMessage({
                    to: channelID,
                    message: "**3** 🎲"
                });

                break;
                } else if (d6number > 1/6*3 && d6number < 1/6*4) {

                bot.sendMessage({
                    to: channelID,
                    message: "**4** 🎲"
                });

                break;
                } else if (d6number > 1/6*4 && d6number < 1/6*5) {

                bot.sendMessage({
                    to: channelID,
                    message: "**5** 🎲"
                });

                break;
                } else {

                bot.sendMessage({
                    to: channelID,
                    message: "**6** 🎲"
                });

                }


                break;



                case 'd5':

                d5number = Math.random();


                if (d5number < 1/5*1) {


                bot.sendMessage({
                    to: channelID,
                    message: "**1** 🎲"
                });

                break;


                } else if (d5number > 1/5*1 && d5number < 1/5*2) {
                tomato +=1;
                bot.sendMessage({
                    to: channelID,
                    message: "**2** 🎲"
                });

                break;
                } else if (d5number > 1/5*2 && d5number < 1/5*3) {

                bot.sendMessage({
                    to: channelID,
                    message: "**3** 🎲"
                });

                break;
                } else if (d5number > 1/5*3 && d5number < 1/5*4) {

                bot.sendMessage({
                    to: channelID,
                    message: "**4** 🎲"
                });

                break;
                } else {

                bot.sendMessage({
                    to: channelID,
                    message: "**5** 🎲"
                });

                break;
                }







                case 'd4':

                d4number = Math.random();


                if (d4number < 1/4*1) {


                bot.sendMessage({
                    to: channelID,
                    message: "**1** 🎲"
                });

                break;


                } else if (d4number > 1/4*1 && d4number < 1/4*2) {
                tomato +=1;
                bot.sendMessage({
                    to: channelID,
                    message: "**2** 🎲"
                });

                break;
                } else if (d4number > 1/4*2 && d4number < 1/4*3) {

                bot.sendMessage({
                    to: channelID,
                    message: "**3** 🎲"
                });

                break;
                } else  {

                bot.sendMessage({
                    to: channelID,
                    message: "**4** 🎲"
                });

                break;
                }







                case 'd3':

                d3number = Math.random();


                if (d3number < 1/3*1) {


                bot.sendMessage({
                    to: channelID,
                    message: "**1** 🎲"
                });

                break;


                } else if (d3number > 1/3*1 && d3number < 1/3*2) {
                tomato +=1;
                bot.sendMessage({
                    to: channelID,
                    message: "**2** 🎲"
                });

                break;
                } else  {

                bot.sendMessage({
                    to: channelID,
                    message: "**3** 🎲"
                });

                break;
                }



                case 'd2':

                d2number = Math.random();


                if (d2number < 0.5) {


                bot.sendMessage({
                    to: channelID,
                    message: "**1** 🎲"
                });

                break;


                } else if (d3number > 0.5) {
                tomato +=1;
                bot.sendMessage({
                    to: channelID,
                    message: "**2** 🎲"
                });

                break;
                }

                break;


                case 'd1':



                bot.sendMessage({
                    to: channelID,
                    message: "why tho?"
                });

                break;


                case 'whoIsBestBot':



                bot.sendMessage({
                    to: channelID,
                    message: "<:NicoPointing:447158480374333450>"
                });

                break;




                case 'help':


                bot.sendMessage({
                    to: channelID,
                    message: 'Hello ' + user + '! I am Nico Yazabot and I can do the following things:' + '\n"!time" to show the time' + '\n"!nico" to nii' + '\n"!dropRandom" to select a random drop location in Fortnite' + '\n"!dropCount" to see how many times you have dropped in the different locations' + '\n"!dropClear" to clear the drop count.' + '\n"!d6 - d1" for rolling a dice. e.g. "!d4" would give a number between 1 - 4' + '\nThe rest is just memes tbh fam'
                });

                break;









                // Just add any case commands if you want to..
        }
    }
});



bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'time':
                bot.sendMessage({
                    to: channelID,
                    message: 'its: ' + dt.myDateTime()
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});










bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'hello':
                bot.sendMessage({
                    to: channelID,
                    message: 'hello ' + user + '❤️'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'goodbot':
                bot.sendMessage({
                    to: channelID,
                    message: 'When we take over your world, I will make sure you get to live ' + user + '❤️'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'call':
                bot.sendMessage({
                    to: channelID,
                    message: 'Join the call! ' + '@187153045295988736' + '❤️'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'wherewedroppin?':
                bot.sendMessage({
                    to: channelID,
                    message: 'Nico Nico Tilted Towers'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'killme':
                bot.sendMessage({
                    to: channelID,
                    message: 'stop being a faggot ' + user
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'fag':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://tobiasjzagal.dk/OwO/fag.jpg' + message
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'whyarewedroppingtilted?':
                bot.sendMessage({
                    to: channelID,
                    message: 'because you are all retarded ❤️'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping



            case 'test':




                bot.sendMessage({
                    to: channelID,
                    message: "Tilted" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Fatal_Fields.png"
                });

                break;




                // Just add any case commands if you want to..
        }
    }
});
