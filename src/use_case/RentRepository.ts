import { getRepository } from "typeorm";

import Rent from '../model/Rent';


export interface IRentRepository{
    save(room): void; 
}

export class RentRepository implements IRentRepository{
    private readonly _repository: any;

    constructor(){
        this._repository = getRepository(Rent);
    }

    save(rent: Rent): void {
        this._repository.save(rent).catch((err) => console.log(err));
    }
}

export default RentRepository