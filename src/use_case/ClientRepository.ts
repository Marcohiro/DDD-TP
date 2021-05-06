import { getRepository } from "typeorm";
import Client from "../model/Client";


export interface IClientRepository{
    
    save(client):void; 

}

export class ClientRepository implements IClientRepository{
    
    private readonly _repository: any;

    constructor(){
        this._repository = getRepository(Client);
    }

    save(client: Client): void {
        this._repository.save(client).catch((err) => console.log(err));
    }


}
