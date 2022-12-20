import { Telegraf } from "telegraf";
import { botApiKey } from "../config";
// import { message } from "telegraf/filters";

export default defineEventHandler(async (e) => {
	// let date = await Date.now();
	let bot = new Telegraf(botApiKey);
	bot.command("oldschool", (ctx) => ctx.reply("成功了"));
	bot.command("hello", (ctx) => ctx.reply("成功了不用测试了"));
	bot.command("test", Telegraf.reply("λ"));
	bot.launch();
	return {
		dateTime: Date.now(),
		hello: botApiKey,
	};
});
