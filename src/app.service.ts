import { Injectable } from '@nestjs/common';
import { HomeService } from './home/home.service'

@Injectable()
export class AppService {
  constructor(private readonly homeController: HomeService){}
  getHello(): string {
    return this.homeController.showHome();
  }
}
