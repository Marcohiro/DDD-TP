import { getRepository } from "typeorm";


// const repo = getRepository(Room);

// repo.save

interface IRoomRepository{
    
    save(Room):void; 

}