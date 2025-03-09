import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
    userService:UsersService;

    constructor(userService:UsersService){
        this.userService = userService;
    }

    @Get("/getUsers")
    getAllUsers(){
        return this.userService.getUsers();
    }

    @Get("/getUser/:id")
    getUserById(@Param("id", ParseIntPipe) id:number) { 
        return this.userService.getUserById(id);
    }

    @Post("/createUser")
    createUser(@Body() newUser: CreateUserDto){
        return this.userService.createUser(newUser);
    }


    @Put("/updateUser/:id")
    updateUser(@Param("id", ParseIntPipe) id:number, @Body() infoUser: UpdateUserDto){
        return this.userService.updateUser(id, infoUser);
    }


    @Patch("/updateUser/:id")
    updateUserItem(@Param("id", ParseIntPipe) id:number, @Body() infoUser: UpdateUserDto){
        return this.userService.updateUserItem(id, infoUser);
    }

    @Delete("/deleteUser/:id")
    deleteUser(@Param("id",ParseIntPipe) id:number){
        return this.userService.deleteUser(id);
    }
}
