const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

class PlayCommand extends commando.Command {
	constructor(client) {
		super(client,{
			name: 'say',
			group: 'simple',
			memberName: 'say',
			description: ('Says something.')
		});
	}

	async run(message, args) {
		message.channel.send(args.trim());
}

module.exports = SayCommand;