import {ClientRepository} from "./ClientRepository";
import {RoomRepository} from "./RoomRepository";
import { RentRepository } from "./RentRepository";

import Room from '../model/Room';
import Client from '../model/Client';
import Rent from "../model/Rent";

export class RoomRent{

    private clients: ClientRepository;
    private rooms: RoomRepository;
    private rents: RentRepository;

    constructor(
        clients: ClientRepository,
        rooms: RoomRepository,
        rents: RentRepository
    ){
        this.clients = clients;
        this.rooms = rooms;
        this.rents = rents;
    }

    rentWithoutEquipments(client:Client, room:Room):void{
        const rent:Rent = new Rent();
        rent.client = client;
        rent.room = room;
        rent.date = Date.now().toString();
        this.rents.save(rent);
    }

}