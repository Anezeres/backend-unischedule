import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {

    //TODO Borrar despues

    private users: any[] = [];


    getUsers (){
        return this.users;
    }

    getUserById(id: number){
        const userFinded = this.users.find(user => user.id === id);

        if(!userFinded){
            return new NotFoundException("No se encontró el user con el id " + id)
        }
        return userFinded;
    }

    createUser(newUser: CreateUserDto){
        console.log("createUser: ", newUser)
        this.users.push({
            id: this.users.length + 1,
            ...newUser
        });
        return "Usuario created successfully";
    }

    updateUser(id: number, infoUser: UpdateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException("No se encontró el usuario con el id " + id);
        }
        this.users[userIndex] = { ...this.users[userIndex], ...infoUser };
        return this.users[userIndex];
    }

    updateUserItem(id: number, infoUser: UpdateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException("No se encontró el usuario con el id " + id);
        }
        Object.keys(infoUser).forEach(key => {
            if (infoUser[key] !== undefined) {
                this.users[userIndex][key] = infoUser[key];
            }
        });
        return this.users[userIndex];
    }

    deleteUser(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException("No se encontró el usuario con el id " + id);
        }
        this.users.splice(userIndex, 1);
        return { message: `Usuario con ID ${id} eliminado correctamente` };
    }


}
