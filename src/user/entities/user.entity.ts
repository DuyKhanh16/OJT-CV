import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({
        type: "varchar",
        length: 100,
    })
    userName: string;

    @Column({
        type: "varchar",
        length: 100,
    })
    email: string;
    
    @Column({
        type: "varchar",
        length: 100,
    })
    password: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
    })
    createdAt: Date;

}
