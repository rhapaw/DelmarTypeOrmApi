import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";


@Entity('Employees')
export class Employee {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        length:30
    })
    firstName: string = '';

    @Column({
        length:30
    })
    lastName: string = '';

    @Column({
        length:260,
        nullable: true
    })
    photoUrl?: string;

    @Column({
        length:15,
        nullable: true
    })
    phoneOffice?: string;

    @Column({
        length:15,
        nullable: true
    })
    phoneMobile?: string;

    @Column({
        length:150,
        nullable: true
    })
    email?: string;

    @Column({
        length:15
    })
    department: string = 'Commercial';

    @Column({
        length:15
    })
    position: string = 'Broker';

    @Column({
        length:30
    })
    specialization: string = 'Commercial/Industrial';

    @Column({
        length:600,
        nullable: true
    })
    blurb?: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @VersionColumn()
    version?: number;
    
    constructor() {
//        this.firstName = 'A';
        //this.lastName = 'B';
        
    }
}


