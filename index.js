const Commando = require('discord.js-commando');
const bot = new Commando.Client({
	commandPrefix: '$'
});

const BOT_TOKEN = process.env.TOKEN;

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('conversion', 'Conversion');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(BOT_TOKEN);

bot.on('ready', function(){
	bot.user.setPresence({
        game: {
            name: '$help | @Skelebot help',
            type: 0
        }
    });
    console.log('Ready!');
});

bot.on('message', function(message){
	
});
