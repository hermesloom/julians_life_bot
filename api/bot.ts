import { Bot, webhookCallback } from "grammy";

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("Hello, world!");
});

bot.on("message", (ctx) => {
  const newCtx = JSON.parse(JSON.stringify(ctx));
  delete newCtx.api;
  ctx.reply(JSON.stringify(ctx, null, 2));
});

export default webhookCallback(bot, "https");
