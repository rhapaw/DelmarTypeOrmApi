import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professional {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        length:30
    })
    firstName: string;

    @Column({
        length:30
    })
    lastName: string;

    @Column({
        length:260
    })
    photoUrl?: string;

/*    @Column({
        length:15
    })
    phoneOffice?: string;

    @Column({
        length:15
    })
    phoneMobile: string;

    @Column({
        length:150
    })
    email: string;

    @Column({
        length:15
    })
    department: string;

    @Column({
        length:15
    })
    position: string;

    @Column({
        length:15
    })
    specialization: string;

    @Column({
        length:600
    })
    blurb?: string; */
    
    /**
     *
     */
    constructor() {
        this.firstName = 'A';
        this.lastName = 'B';
        this.photoUrl = 'C';
        
    }
}


