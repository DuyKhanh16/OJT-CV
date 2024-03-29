import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companny")
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    job: string;

    @Column()
    offer: string;
}
