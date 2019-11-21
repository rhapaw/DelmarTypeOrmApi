import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        length: 20
    })
    propertyType!: string;

     @Column({
        length: 20,
        nullable: true
    })
    subType?: string;

    @Column({
        length: 20
    })
    zoning!: string;

    @Column({
        length: 20,
        nullable: true
    })
    usage?: string;

    @Column({
        length: 1
    })
    buildingClass: string = 'A';

    @Column({
        length: 20,
        nullable: true
    })
    saleType?: string;

    @Column({
        length: 20
    })
    parcelNumber!: string;

    @Column()
    salePrice: number = 0;

    @Column()
    rentalPrice: number = 0;

    @Column()
    sizeSf: number = 0;

    @Column()
    numberOfUnits: number = 1;

    @Column()
    numberOfFloors: number = 1;

    @Column()
    typicalFloorSizeSf: number = 0;

    @Column()
    yearBuilt!: number;

    @Column()
    lotSize: number = 0;

    @Column({
        length: 6
    })
    lotSizeUnits: string = 'sf';

    @Column()
    parkingSpaces: number = 0;

    @Column({
        length: 1000
    })
    description: string = 'describe property';

    @Column({
        length: 300
    })
    highlights: string = 'property highlights';

    @Column()
    dockingHighDoors: number = 0;

    @Column()
    buildingSpace: number = 0;

    @Column({
        length: 6
    })
    buildingSpaceUnits: string = 'sf';

    @Column()
    leaseOfficeSizeSf: number = 0;

    @Column()
    leaseFloor: number = 1;

    @Column(
        {nullable: true}
    )
    leaseFrom?: Date;

    @Column(
        {nullable: true}
    )
    leaseTo?: Date;

    @Column({
        length: 260,
        nullable: true
    })
    pictureUrl?: string;

    @Column({
        length: 260,
        nullable: true
    })
    brochureUrl?: string;  

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @VersionColumn()
    version?: number;
    
    constructor() {}
}