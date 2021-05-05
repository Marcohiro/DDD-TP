import { getRepository } from "typeorm";


export interface IRoomRepository{
    save(room):void; 
}

export class RoomRepository implements IRoomRepository{
    private readonly _repository: any;

    constructor(){
        this._repository = getRepository(Client);
    }

    save(room: Room): void {
        this._repository.save(room).catch((err) => console.log(err));
    }
}