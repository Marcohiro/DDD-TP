class RoomRent{

    private clients:ClientRepository ;
    private rooms:RoomRepository ;


    constructor(
        clients:ClientRepository ,
        rooms:RoomRepository
    ){
        this.clients = clients;
        this.rooms = rooms;
    }



    // function execute():void{

    // }
}