const Commando = require('discord.js-commando');
const bot = new Commando.Client({
	commandPrefix: '$'
});

const TOKEN = 'NTEyODA5OTQ5OTA3MTI0MjQ5.Ds-3Wg.YStemY1ra6cCLYv-7vZE5_bKXgA';

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
