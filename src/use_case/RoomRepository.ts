import { getRepository } from "typeorm";

import Room from '../model/Room';

export interface IRoomRepository{
    save(rent):void; 
}

export class RoomRepository implements IRoomRepository{
    
    private readonly _repository: any;

    constructor(){
        this._repository = getRepository(Room);
    }

    save(room:Room): void {
        this._repository.save(room).catch((err) => console.log(err));
    }
}