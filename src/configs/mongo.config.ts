import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (ConfigService: ConfigService): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(ConfigService)
	}
}

const getMongoString = (ConfigService: ConfigService) =>
	'mongodb+srv://' +
	ConfigService.get('MONGO_LOGIN') +
	':' +
	ConfigService.get('MONGO_PASSWORD') +
	'@' +
	ConfigService.get('MONGO_ADDRESS') +
	'/'

	// ConfigService.get('MONGO_PORT') +
	// '/' +
	// ConfigService.get('MONGO_AUTHDATABASE');

const getMongoOptions = () => ({
	// useNewUrlParse: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
})