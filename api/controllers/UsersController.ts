import { Request, Response } from "express";
import { UserI } from "../../interfaces/UserI";
import { User } from "../../models/User";
import { checkKeys } from "../../shared/Validators";
const fs = require('fs')

const UsersController = {
    getAll: (req: Request, res: Response) => {
        
        fs.readFile('./db/users.json', 'utf8' , (err:any, data:any) => {
            if (err) {
                res.send(`${err}`).status(500);
            }
            data = JSON.parse(data);
            res.send(data);
        })
        
    },

    saludar: (req: Request, res: Response) => {
        res.send(`Hola ${req.params.name}`);
    },

    create: (req: Request, res: Response) => {
        try {
            checkKeys(["name", "lname"], req.body);
            const user: User = new User(req.body.name, req.body.lname);
            user.save();
            res.send(user).status(201);
        } catch (error) {
            res.send({error: true, msj: error.stack && error.stack || error }).status(500);
        }
        
    }
}

export default UsersController;
