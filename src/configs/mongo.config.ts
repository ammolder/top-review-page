import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (ConfigService: ConfigService): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(ConfigService)
	}
}

const getMongoString = (ConfigService: ConfigService) =>
	'mongodb+srv://' +
	ConfigService.getOrThrow('MONGO_LOGIN') +
	':' +
	ConfigService.getOrThrow('MONGO_PASSWORD') +
	'@' +
	ConfigService.getOrThrow('MONGO_ADDRESS') +
	'/'

	// ConfigService.get('MONGO_PORT') +
	// '/' +
	// ConfigService.get('MONGO_AUTHDATABASE');

const getMongoOptions = () => ({
	// useNewUrlParse: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
})