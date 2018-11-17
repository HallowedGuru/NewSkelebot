const Commando = require('discord.js-commando');
const bot = new Commando.Client({
	commandPrefix: '$'
});

const BOT_TOKEN = "NDUzNzI4MDI3MTU1ODkwMTk2.Ds-3eA.8tOsQzbplbN3ZO3jWb-cV5vsYi4";

bot.registry.registerGroup('simple', 'simple');
bot.registry.registerGroup('conversion', 'conversion');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(BOT_TOKEN);

bot.on('ready', function(){
	bot.user.setGame('$help | @Skelebot help');
    console.log('Ready!');
});

bot.on('message', function(message){
	
});
