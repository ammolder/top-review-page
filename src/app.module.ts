import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [AuthModule, TopPageModule, ProductModule, ReviewModule], //dependens
  controllers: [AppController], //controllers
  providers: [AppService], //Service, repository, another providers
})
export class AppModule {}
