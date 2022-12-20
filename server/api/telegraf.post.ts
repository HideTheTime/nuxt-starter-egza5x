import { Telegraf } from "telegraf";
import { botApiKey } from "../config";
// import { message } from "telegraf/filters";
let bot = new Telegraf(botApiKey);
bot.command("oldschool", (ctx) => ctx.reply("成功了"));
bot.command("hello", (ctx) => ctx.reply("成功了不用测试了1"));
bot.command("test", Telegraf.reply("λ"));
bot.launch();
export default defineEventHandler(async (e) => {
	// let date = await Date.now();

    const body =await useBody(e)
    console.log(body)
	return {
		dateTime: Date.now(),
		hello: botApiKey,
        body
	};
});