import Rent from './Rent';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity({ name: "EquipmentsTable" })
class Equipment{

    @PrimaryGeneratedColumn("uuid")
    id:number;

    @Column()
    price:number;

    @Column()
    location:string;

    @Column()
    name: string;

    @ManyToOne(()=>Rent, rent=>rent.equipements)
    rent:Rent

}

export default Equipment;