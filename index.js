const Commando = require('discord.js-commando');
const bot = new Commando.Client({
	commandPrefix: '$'
});

const BOT_TOKEN = process.env.TOKEN;

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
	if (message.content == "setgame") {
		bot.user.setGame('$help | @Skelebot help');
	}
});
