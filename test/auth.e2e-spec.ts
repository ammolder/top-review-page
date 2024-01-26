import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { USER_NOT_FOUND, WRONG_PASSWORD_ERROR } from '../src/auth/auth.constans';
import { disconnect } from 'mongoose';

const loginDto: AuthDto = {
   "login": "ammolder@gmail.com",
    "password": "YouAreTheBest"
}

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

  });

  it('/auth/login (POST) - success', async () => {
     return request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto)
      .expect(200)
      .then(({body}: request.Response) => {
        expect(body.access_token).toBeDefined()
      })
  });
	
	 it('/auth/login (POST) - fail', async () => {
     return request(app.getHttpServer())
      .post('/auth/login')
		 .send({ ...loginDto, login:'badlogin@gmail.com'})
      .expect(401, {
		  statusCode: 401,
		  error: 'Unauthorized',
        message: USER_NOT_FOUND
      })
	 });
	
	it('/auth/login (POST) - fail', async () => {
     return request(app.getHttpServer())
      .post('/auth/login')
		 .send({ ...loginDto, password:'BadPawssword'})
      .expect(401, {
		  statusCode: 401,
		  error: 'Unauthorized',
        message: WRONG_PASSWORD_ERROR
      })
	 });
	
	afterAll(() => {
    disconnect();
  })
});
