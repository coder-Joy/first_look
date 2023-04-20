import { Controller, Get, Param } from '@nestjs/common';
import { userInformation } from '../users/users'

@Controller('profile')
export class ProfileController {
    @Get()
    showText():string{
        return "To select a user, navigate to this page with a /id to select the person";
    }
    @Get(':id')
    greetUser( @Param('id') id: number):string{
       const theUser = userInformation[id - 1]; 
        return `Hello! how are you doing? Hope it's ${theUser.name}`;
    }
}
