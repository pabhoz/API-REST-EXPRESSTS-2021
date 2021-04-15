import { Request, Response } from "express";
import { Loan } from "../../models/Loan";
// import { checkKeys } from "../../shared/Validators";

const LoansController = {
    getAll: async (req: Request, res: Response) => {
        const loans = await Loan.find({});
        res.status(200).send(loans);
    },

    create: (req: Request, res: Response) => {
        
    }
}

export default LoansController;
