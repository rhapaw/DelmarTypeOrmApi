import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export class ListingBase {
    // For all Listings (sale or lease)
    id?: number;
    saleOrLease: string = 'lease';
    ListingName!: string;
    addressLine1!: string;
    addressCity!: string;
    addressState: string = 'CA';
    addressZip!: string;
    validLatLong: boolean = false;
    latitude: number = 0;
    longitude: number = 0;
    ListingType!: string;
    subType?: string;
    zoning!: string;
    usage?: string;
    buildingClass: string = 'A';
    parcelNumber!: string;
    sizeSf: number = 0;
    numberOfUnits: number = 1;
    numberOfFloors: number = 1;
    typicalFloorSizeSf: number = 0;
    yearBuilt!: number;
    lotSize: number = 0;
    lotSizeUnits: string = 'sf';
    parkingSpaces: number = 0;
    description: string = 'describe Listing';
    highlights: string = 'Listing highlights';
    dockingHighDoors: number = 0;
    buildingSpace: number = 0;
    buildingSpaceUnits: string = 'sf';
    primaryPhotoUrl?: string;
    brochureUrl?: string;  

    // For Listings that are for sale
    saleType?: string;
    salePrice: number = 0;

    // For Listings that are for lease
    leasePrice: number = 0;
    leasePriceTerm: string = 'month';
    leaseOfficeSizeSf: number = 0;
    leaseFloor: number = 1;
    leaseFrom?: Date;
    leaseTo?: Date;

    // Audit fields
    createdAt?: Date;
    updatedAt?: Date;
    version?: number;
    
    constructor() {}
}

@Entity('Listings')
export class Listing extends ListingBase {

    @PrimaryGeneratedColumn()
    id?: number;

    // For all Listings (sale or lease)    id?: number;

    @Column({
        length: 8
    })
    saleOrLease: string = 'lease';

    @Column({
        length: 30
    })
    ListingName!: string;

    @Column({
        length: 40
    })
    addressLine1!: string;

    @Column({
        length: 24
    })
    addressCity!: string;

    @Column({
        length: 2
    })
    addressState: string = 'CA';

    @Column({
        length: 10
    })
    addressZip!: string;

    @Column()
    validLatLong: boolean = false;

    @Column()
    latitude: number = 0;

    @Column()
    longitude: number = 0;

    @Column({
        length: 20
    })
    ListingType!: string;

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
        length: 20
    })
    parcelNumber!: string;

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
    description: string = 'describe Listing';

    @Column({
        length: 300
    })
    highlights: string = 'Listing highlights';

    @Column()
    dockingHighDoors: number = 0;

    @Column()
    buildingSpace: number = 0;

    @Column({
        length: 6
    })
    buildingSpaceUnits: string = 'sf';

    @Column({
        length: 260,
        nullable: true
    })
    primaryPhotoUrl?: string;

    @Column({
        length: 260,
        nullable: true
    })
    brochureUrl?: string;  

    // For Listings that are for sale

    @Column({
        length: 20,
        nullable: true
    })
    saleType?: string;

    @Column()
    salePrice: number = 0;

    // For Listings that are for lease

    @Column()
    leasePrice: number = 0;

    @Column({
        length: 12
    })
    leasePriceTerm: string = 'month';

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


    // Audit fields

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @VersionColumn()
    version?: number;
    
    constructor() {
        super()
    }
}