import { Loan } from "../models/Loan"

const LoansService = {

    getAll: async () => {
        console.log("Pidiendo los datos")
        return await Loan.find({});
    }

}

export default LoansService;
