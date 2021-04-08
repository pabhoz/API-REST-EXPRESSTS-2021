import { Router, Request, Response } from 'express';

const loansRouter = Router();

loansRouter.get("/", (req, res) => {
    res.send(`Prestamos works`);
});

export default loansRouter;
