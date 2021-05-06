import {ClientRepository, IClientRepository} from "./ClientRepository";
import {IRoomRepository, RoomRepository} from "./RoomRepository";
import { IRentRepository, RentRepository } from "./RentRepository";

import Room from '../model/Room';
import Client from '../model/Client';
import Rent from "../model/Rent";

export class RoomRent{

    private clients: IClientRepository;
    private rooms: IRoomRepository;
    private rents: IRentRepository;

    constructor(
        clients: IClientRepository,
        rooms: IRoomRepository,
        rents: IRentRepository
    ){
        this.clients = clients;
        this.rooms = rooms;
        this.rents = rents;
    }

    rentWithoutEquipments(client:Client, room:Room, date: any):void{
        const rent:Rent = new Rent();
        rent.client = client;
        rent.room = room;
        rent.date = date;
        this.rents.save(rent);
    }

}