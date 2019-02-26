const commando = require('discord.js-commando');

class SayCommand extends commando.Command {
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
}

module.exports = SayCommand;