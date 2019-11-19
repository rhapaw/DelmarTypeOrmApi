import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        length: 20
    })
    propertyType: string;

/*     @Column({
        length: 20
    })
    subType: string;

    @Column({
        length: 20
    })
    zoning: string;

    @Column({
        length: 20
    })
    usage: string;

    @Column({
        length: 20
    })
    buildingClass: string;

    @Column({
        length: 20
    })
    saleType: string;

    @Column({
        length: 20
    })
    parcelId: string;

    @Column()
    salePrice: number;

    @Column()
    rentalPrice: number;

    @Column()
    sizeSf: number;

    @Column()
    numberOfUnits: number;

    @Column()
    numberOfFloors: number;

    @Column()
    typicalFloorSizeSf: number;

    @Column()
    yearBuilt: number;

    @Column()
    lotSize: number;

    @Column({
        length: 6
    })
    lotSizeUnits: string;

    @Column()
    parkingSpaces: number;

    @Column()
    parkingPer1000sf: number;

    @Column({
        length: 1000
    })
    description: string;

    @Column({
        length: 300
    })
    highlights: string;

    @Column()
    dockingHighDoors: number;

    @Column()
    buildingSpace: number;

    @Column({
        length: 6
    })
    buildingSpaceUnits: string;

    @Column()
    leaseOfficeSizeSf: number;

    @Column()
    leaseFloor: number;

    @Column()
    leaseFrom: Date;

    @Column()
    leaseTo: Date;

    @Column({
        length: 260
    })
    pictureUrl: string;

    @Column({
        length: 260
    })
    brochureUrl: string; */    

    /**
     *
     */
    constructor() {
        this.propertyType = 'A';
    }
}