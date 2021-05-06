import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "ClientsTable"})
class Client{
    @PrimaryGeneratedColumn("uuid")
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;
    
}

export default Client;