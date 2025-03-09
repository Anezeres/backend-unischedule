import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    const { method, path } = req;

    if (path.startsWith('/users/getUsers') && method === 'GET') {
      console.log("Debe ser usuario Admin para esta función");
    } 
    
    else if (
      (path.startsWith('/users/deleteUser') ||
      path.startsWith('/users/updateUser') ||
      path.startsWith('/users/getUser')) && 
      (method === 'DELETE' || method === 'PATCH' || method === 'PUT' || method === 'GET')
    ) {
      console.log("El usuario debe estar logeado para ejecutar esta función");
    } 
    
    else if (path.startsWith('/users/createUser') && method === 'POST') {
      console.log("Bienvenido, nuevo usuario");
    }

    next();
  }
}
