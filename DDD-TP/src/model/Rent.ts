import Client from "./Client";
import Equipment from "./Equipment";
import Room from "./Room";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "RentsTable"})
class Rent{
    
    @PrimaryGeneratedColumn("uuid")
    id:number;

    @Column()
    client: Client;

    @Column()
    date: string;

    @Column()
    room: Room;

    @Column()
    equipements?: Equipment;    

} 

export default Rent;