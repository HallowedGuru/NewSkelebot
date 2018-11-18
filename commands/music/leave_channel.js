const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command {
	constructor(client) {
		super(client,{
			name: 'leave',
			group: 'music',
			memberName: 'leave',
			description: 'Leaves the voice channel.'
		});
	}

	async run(message, args) {
		if (message.member.voiceChannel) {
			if (message.guild.voiceConnection) {
				message.guild.voiceConnection.disconnect();
			}
			else {
				message.reply("I must be in a voice channel to leave.");
			}
		}
		else {
			message.reply("You must be in a voice channel to use this command.");
		}
	}
}

module.exports = LeaveChannelCommand;