import { getRepository } from "typeorm";


// const repo = getRepository(Client);

// repo.save

interface IClientRepository{
    
    save(Client):void; 

}