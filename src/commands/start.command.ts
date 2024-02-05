import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class Start extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }

    handle(): void {
        this.bot.start( (ctx) => {
            console.log(ctx.session)
            ctx.reply("Реплика бота", Markup.inlineKeyboard([
                Markup.button.callback('Кнопка колбек 1', 'first_button'),
                Markup.button.callback('Кнопка колбек 2', 'second_button')
            ]))
        })

        this.bot.action('first_button', (ctx) => {
            ctx.session.like = true
            ctx.editMessageText('Ответ первой кнопки')
        })

        this.bot.action('second_button', (ctx) => {
            ctx.session.like = false
            ctx.editMessageText('Ответ второй кнопки')
        })
    }
    
}