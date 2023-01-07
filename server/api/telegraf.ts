import { Telegraf } from "telegraf";
import { botApiKey } from "../config";
// import { message } from "telegraf/filters";
let bot = new Telegraf(botApiKey);
bot.command("oldschool", (ctx) => ctx.reply("成功了"));
bot.command("hello", (ctx) => ctx.reply("成功了不用测试了1"));
bot.command("test", Telegraf.reply("λ"));
bot.launch();

// import { H3Event } from "h3";

// import {useBody} from "nitro"
export default eventHandler(async (e) => {
	// let date = await Date.now();

	//@ts-ignore
	const body = await readBody(e);
	console.log(body);

	// bot.context.sendMessage();
	return {
		dateTime: Date.now(),
		// hello: botApiKey,
		body,
	};
});

// {
//     "update_id": 210560781,
//     "message": {
//         "message_id": 347,
//         "from": {
//             "id": 1603929421,
//             "is_bot": false,
//             "first_name": "BSCStation Community",
//             "username": "time_dolphin",
//             "language_code": "zh-hans"
//         },
//         "chat": {
//             "id": 1603929421,
//             "first_name": "BSCStation Community",
//             "username": "time_dolphin",
//             "type": "private"
//         },
//         "date": 1671551536,
//         "text": "/hello",
//         "entities": [
//             {
//                 "offset": 0,
//                 "length": 6,
//                 "type": "bot_command"
//             }
//         ]
//     }
// }
