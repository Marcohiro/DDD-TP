import { getRepository } from "typeorm";

import Rent from '../model/Rent';


export interface IRentRepository{
    save(room): void; 
    getById(id): Rent;
    getByRent(rent): Rent;
}

export class RentRepository implements IRentRepository{
    private readonly _repository: any;

    constructor(){
        this._repository = getRepository(Rent);
    }

    save(rent: Rent): void {
        this._repository.save(rent).catch((err) => console.log(err));
    }

    getById(id:number):Rent{
        return this._repository.getById(id).catch((err) => console.log(err));
    }

    getByRent(rent:Rent):Rent{
        return this._repository.getByRent(rent).catch((err)=>console.log(err));
    }
}

export default RentRepository