import { Telegraf } from "telegraf";
import { botApiKey } from "../config";
// import { message } from "telegraf/filters";

let bot = new Telegraf(botApiKey);
bot.command("oldschool", (ctx) => ctx.reply("Hello"));
// bot.command("hipster", Telegraf.reply("λ"));
bot.launch();

export default defineEventHandler(async (e) => {
	// let date = await Date.now();

	return {
		dateTime: Date.now(),
		hello: botApiKey,
	};
});
