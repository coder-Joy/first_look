import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
    @Get()
    showHome():string{
        return `
        Ohh you are finally here!
        We are exited to have you here 
        `
    }
}
