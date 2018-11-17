const Commando = require('discord.js-commando');
const bot = new Commando.Client({
	commandPrefix: '$'
});

const TOKEN = PROCESS.ENV.TOKEN;

bot.registry.registerGroup('simple', 'simple');
bot.registry.registerGroup('conversion', 'conversion');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(TOKEN);

bot.on('ready', function(){
    console.log('Ready!');
});

bot.on('message', function(message){
	if (message.content == "hello") {
		message.reply("Hi, how are you?");
	}
});
