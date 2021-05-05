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


    constructor(area:number, price:number, location:string, capacity: number, name:string){
        this.area = area;
        this.price = price;
        this.location = location;
        this.capacity = capacity;
        this.name = name;
    }


    //

}