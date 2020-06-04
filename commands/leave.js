exports.run = async(client,message,args, ops) => {

    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel')
    if(!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is not connected to the guild')
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, you are not connected to the same channel')

    message.guild.me.voiceChannel.leave();
    message.channel.send('Successfully disconnected')
    
    ops.active.get(message.guild.id).queue = []
}