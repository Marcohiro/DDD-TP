import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "RoomsTable"})
class Room{
    @PrimaryGeneratedColumn("uuid")
    id:number;

    @Column()
    area:number;

    @Column()
    price:number;
    
    @Column()
    location:string;
    
    @Column()
    capacity:number;
    
    @Column()
    name: string;

    @Column()
    available: boolean;

}

export default Room;