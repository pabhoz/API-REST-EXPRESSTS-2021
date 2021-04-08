import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.get("/", UsersController.getAll);
usersRouter.get("/saludar/:name", UsersController.saludar);

usersRouter.post("/", UsersController.create);

export default usersRouter;
