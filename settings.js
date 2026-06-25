const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By [NazrilBot]
	* Follow Tiktok @Nzrlhahah1456
	* Whatsapp : [6283862149722]
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\


global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(',').map(v => v.trim()) : ['6283862149722'];

global.packname = process.env.PACKNAME || 'BOT';
global.author = process.env.AUTHOR || 'NazrilBot';
global.botname = process.env.BOT_NAME || 'NazrilBog';
global.listprefix = process.env.PREFIX ? process.env.PREFIX.split(',') : ['+','!','.'];
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆'];

global.tempatDB = process.env.MONGODB_URI || 'database.json';
global.tempatStore = process.env.MONGODB_URI || 'baileys_store.json';
global.timezone = process.env.TIME_ZONE || 'UTC'
global.pairing_code = process.env.PAIRING_CODE !== 'false';
global.number_bot = process.env.BOT_NUMBER || '';

global.my = {
	yt: process.env.MY_YOUTUBE || '@Nazril_Bot',
	gh: process.env.MY_GITHUB || '@Nazril_Bot',
	gc: process.env.MY_GROUP || '@Nazril_Bot',
	ch: process.env.MY_CHANNEL || '@Nazril_Bot'
}
global.limit = {
	free: 100,
	premium: 999,
	vip: 9999
}
global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}
global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/global.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}
global.mess = {
    key: 'Your API key has expired, please visit\nhttps://my.hitori.pw',
    owner: '*Owner-only feature!*',
    admin: '*Admin-only feature!*',
    botAdmin: '*Bot is not an admin!*',
    group: '*Use this in a group!*',
    private: '*Use this in private chat!*',
    limit: '*Your limit has been exhausted!*',
    prem: '*Premium users only!*',
    wait: '*Loading...*',
    error: '*Error!*',
    done: '*Done*'
}
global.APIs = {
	hitori: 'https://api.hitori.pw',
}
global.APIKeys = {
	'https://api.hitori.pw': 'htrkey-77eb83c0eeb39d40',
	geminiApikey: ['AIzaSyD0lkGz6ZhKi_MHSSmJcCX3wXoDZhELPaQ','AIzaSyDnBPd_EhBfr73NssnThVQZYiKZVhGZewU','AIzaSyA94OZD-0V4quRbzPb2j75AuzSblPHE75M','AIzaSyB5aTYbUg2VQ0oXr5hdJPN8AyLJcmM84-A','AIzaSyB1xYZ2YImnBdi2Bh-If_8lj6rvSkabqlA']
}
global.badWords = ['tolol','goblok','asu','pantek','kampret','ngentot','jancok','kontol','memek','lonte']
global.chatLength = 1000

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
