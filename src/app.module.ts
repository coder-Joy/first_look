import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeService } from './home/home.service';
import { HomeController } from './home/home.controller';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [],
  controllers: [AppController, HomeController, ProfileController],
  providers: [AppService, HomeService, ProfileService],
})
export class AppModule {}
