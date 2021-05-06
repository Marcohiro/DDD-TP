import { IClientRepository } from "./ClientRepository";
import { IRoomRepository } from "./RoomRepository";
import { IRentRepository } from "./RentRepository";

import Room from '../model/Room';
import Client from '../model/Client';
import Rent from "../model/Rent";
import Equipment from "../model/Equipment";

export class RoomRent {

    private clients: IClientRepository;
    private rooms: IRoomRepository;
    private rents: IRentRepository;

    constructor(
        clients: IClientRepository,
        rooms: IRoomRepository,
        rents: IRentRepository
    ) {
        this.clients = clients;
        this.rooms = rooms;
        this.rents = rents;
    }

    rentWithoutEquipments(clientId: number, roomId: number, date: any): Rent {
        const rent: Rent = new Rent();
        const client: Client = this.clients.findById(clientId); //Shared state
        const room: Room = this.rooms.findById(roomId); //Shared state

        rent.client = client;
        rent.date = date;
        rent.room = this.rooms.findSuitable(room);

        this.rents.save(rent); //Shared state
        return rent;
    }

    rentWithEquipments(clientId: number, roomId: number, date: any, equipments: Equipment[]): Rent {
        const rent: Rent = new Rent();
        const client: Client = this.clients.findById(clientId); //Shared state
        const room: Room = this.rooms.findById(roomId); //Shared state

        rent.client = client;
        rent.date = date;
        rent.room = this.rooms.findSuitable(room);
        rent.equipements = equipments;

        this.rents.save(rent); //Shared state
        return rent;

    }

}