import Client from "./Client";
import Equipment from "./Equipment";
import Room from "./Room";
import { Column, OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "RentsTable" })
class Rent {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    client: Client;

    @Column()
    date: string;

    @Column()
    room: Room;

    @OneToMany()
    equipements?: Equipment[];

}

export default Rent;