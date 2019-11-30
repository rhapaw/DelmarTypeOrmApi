import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { ByteRange } from 'express-serve-static-core';

class EmployeeBase {
    id?: number;
    isContact: boolean = true;
    isUser: boolean = true;
    firstName: string = '';
    lastName: string = '';
    photoUrl?: string;
    phoneOffice?: string;
    phoneMobile?: string;
    email?: string;
    userEmail?: string;
    passwordHash?: string;
    passwordSalt?: string;
    contactGroupSeq: number = 0;
    department: string = 'Commercial';
    position: string = 'Broker';
    specialization: string = 'Commercial/Industrial';
    blurb?: string;
    createdAt?: Date;
    updatedAt?: Date;
    version?: number;

    constructor() {}
}



@Entity('employees')
export class Employee extends EmployeeBase{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    isContact: boolean = true;

    @Column()
    isUser: boolean = true;

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
        length:150,
        nullable: true
    })
    userEmail?: string;

    @Column({
        length:260,
        nullable: true
    })
    passwordHash?: string;

    @Column({
        length:260,
        nullable: true
    })
    passwordSalt?: string;

    @Column()
    contactGroupSeq: number = 0;

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
        super();
    }
}


