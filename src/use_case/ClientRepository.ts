import { getRepository } from "typeorm";
import Client from "../model/Client";


export interface IClientRepository{
    
    save(client):void; 
    findById(id):Client;
}

