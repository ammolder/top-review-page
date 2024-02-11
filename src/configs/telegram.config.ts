import { ConfigService } from '@nestjs/config'
import { ITelegramOptions } from 'src/telegram/telegraf.intarface'

export const getTelegramConfig = (configService: ConfigService): ITelegramOptions => {
	const token = configService.get('TELEGRAM_TOKEN')

	if (!token) {
		throw new Error(`Telegram token не знайдено`)
	}
	return {
		token,
		chatId: configService.get('CHAT_ID') ?? ''
	}
}