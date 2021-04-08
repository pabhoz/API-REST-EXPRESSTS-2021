import { Router } from "express";
import usersRouter from "./users.routes";
import loansRouter from "./loans.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/loans", loansRouter);

export default routes;
