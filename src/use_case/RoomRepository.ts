import { getRepository } from "typeorm";

import Room from '../model/Room';

export interface IRoomRepository{
    save(rent):void; 
    findById(id):Room;
    findAllAvailable():Room[];
    setAvailable(room):void;
    setUnavailable(room):void;
    isAvailable(room):boolean;
    findSuitable(room):Room;
}

export class RoomRepository implements IRoomRepository{
    
    private readonly _repository: any;

    constructor(){
        this._repository = getRepository(Room);
    }

    save(room:Room): void {
        this._repository.save(room).catch((err) => console.log(err));
    }

    findById(id:number):Room{
        return this._repository.findById(id).catch((err) => console.log(err));
    }

    findAllAvailable():Room[]{
        return this._repository.find({where: { available:true }});
    }

    setAvailable(room:Room):void{
        room.available = true;
        this._repository.save(room);
    }

    setUnavailable(room:Room):void{
        room.available = false;
        this._repository.save(room);
    }

    isAvailable(room:Room):boolean{
        return this._repository.find(room).available
    }

    findSuitable(room:Room):Room{
        var res:Room;
        if(this.isAvailable(room))res=room
        else{
            res=this.findAllAvailable()[0]
        }
        return res;
    }

}