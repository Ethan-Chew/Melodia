exports.run = async(client,message,args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if(!fetched) return message.channel.send('There currently isnt any music playing in this guild!')
    let queue = ops.active.get(message.guild.id).queue; 
    let NowPlaying = queue[0]
    
    
    

    let resp = (`__**Now Playing**__\n**${NowPlaying.songTitle}** -- **Requested By :** *${NowPlaying.requester}*\n\n__**Queue**__\n`)
    
    
    
    

      
    
    
    for (var i = 1; i < queue.length;i++) {
        
        
       resp += `${i}. **${queue[i].songTitle}** -- **Requested by:** *${queue[i].requester}*\n'`;
    }
    message.channel.send(resp)






}