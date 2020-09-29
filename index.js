const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token; // ' 이쪽이 봇 토큰 '

client.on('ready', () => {
  console.log('THIS BOT IS MADE BY HAKUNA'); // 제작자 ( 수정금지 )
  client.user.setPresence({ game: { name: '서버 관리중..' }, status: 'online' }) // name: ' 이쪽이 봇 상태메세지 '
});

client.on('message', (message) => {
  if(message.content === '!출') {
    let img = 'https://cdn.discordapp.com/attachments/759499022431420516/760580580978065498/f643e80e5a358a5a.png'; // 임베드에 나오는 사진
    let embed = new Discord.RichEmbed()
      .setTitle('아우라 경찰청 강북')// 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
      .setThumbnail(img)
      .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 출근하셨습니다 **') //  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다 , + 뒤에 있는건 수정하셔도 됩니다 
      .setTimestamp()
      .setFooter('MADE BY.한원규', img) // 제작자 ( 수정금지 )

    message.channel.send(embed)
  }
  if(message.content === '!퇴') {
    let img = 'https://cdn.discordapp.com/attachments/759499022431420516/760580580978065498/f643e80e5a358a5a.png'; // 임베드에 나오는 사진
    let embed = new Discord.RichEmbed()
      .setTitle('아우라 경찰청 강북')// 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
      .setThumbnail(img)
      .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 퇴근하셨습니다 **')//  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다, + 뒤에 있는건 수정하셔도 됩니다 
      .setTimestamp()
      .setFooter('MADE BY.한원규', img) // 제작자 ( 수정금지 )

    message.channel.send(embed)
  }
  if(message.content === '!잠퇴') {
    let img = 'https://cdn.discordapp.com/attachments/759499022431420516/760580580978065498/f643e80e5a358a5a.png';
    let embed = new Discord.RichEmbed()
      .setTitle('아우라 경찰청 강북')
      .setThumbnail(img)
      .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 임시퇴근하셨습니다 **')//  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다
      .addField('** 문의확인시 답변해드리겠습니다 . **', ' ** 문의 남겨주세요 **  ') // 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
      .setTimestamp()
      .setFooter('MADE BY.한원규', img)// 제작자 ( 수정금지 )

    message.channel.send(embed)
  }
});

client.login(token);