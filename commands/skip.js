exports.run = async(client ,message,args, ops) => {

    let fetched = ops.active.get(message.guild.id);

if(!fetched) return message.channel.send('There currently isnt any music playing in this guild!')

if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, you are not connected to the same voice channel as the bot')

let userCount = message.member.voiceChannel.members.size;

let required = Math.ceil(userCount/2) -1;

if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [ ];
if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you already voted to skip ${fetched.queue[0].voteSkips.length}/${required} required.`)


fetched.queue[0].voteSkips.push(message.member.id);

ops.active.set(message.guild.id, fetched);


if(fetched.queue[0].voteSkips.length >= required){
    message.channel.send("Skipped!");
    return fetched.dispatcher.end();

    

}

message.channel.send(`Successfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required}`)

}