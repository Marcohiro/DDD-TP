import {ClientRepository} from "./ClientRepository";
import {RoomRepository} from "./RoomRepository";

export class RoomRent{

    private clients: ClientRepository;
    private rooms: RoomRepository;


    constructor(
        clients: ClientRepository,
        rooms: RoomRepository
    ){
        this.clients = clients;
        this.rooms = rooms;
    }



    function rent():void{

    }
}