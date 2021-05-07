import Client from "./Client";
import Equipment from "./Equipment";
import Room from "./Room";
import { Column, OneToMany, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";


@Entity({ name: "RentsTable" })
class Rent {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @OneToOne(()=> Client, client=>client.id)
    client: Client;

    @Column()
    date: string;

    @OneToOne(()=> Room, room=>room.id)
    room: Room;

    @OneToMany(()=> Equipment, equipment => equipment.rent)
    equipements?: Equipment[];

}

export default Rent;