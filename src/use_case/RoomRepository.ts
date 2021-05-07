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

