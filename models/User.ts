import { UserI } from "../interfaces/UserI";
const fs = require('fs');

export class User {

    private _name: string;
    private _lname: string;

    constructor(name: string, lname: string) {
        this._name = name;
        this._lname = lname;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get lname(): string {
        return this._lname;
    }

    set lname(value: string) {
        this._lname = value;
    }

    save() {
        fs.readFile('./db/users.json', 'utf8' , (err:any, data:any) => {
            if (err) {
                throw err;
            }
            data = JSON.parse(data);

            const flatData: UserI = {
                name: this.name,
                lname: this.lname
            };
            const newData = [...data, flatData];
            fs.writeFile('./db/users.json', JSON.stringify(newData), function (err: any) {
                if (err) throw err;
            });
        })
        
    }

}
