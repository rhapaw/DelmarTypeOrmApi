import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, BaseEntity } from "typeorm";

class ColorsetBase {
    colorsetName: string = 'Unknown';
    isDefault: boolean = false;
    primaryColor: string = '000000';
    primaryBg: string = '000000';
    secondaryColor: string = '000000';
    secondaryBg: string = '000000';
    infoColor: string = '000000';
    brandColor: string = 'FFFFFF';
    brandBg: string = 'FFFFFF';
    navbarColor: string = '000000';
    navbarBg: string = '000000';
    navbarColorActive: string = '000000';
    description: string = 'none';
    createdAt?: Date;
    updatedAt?: Date;
    version?: number;

    constructor() {
        // super();
    }
}



@Entity('colorsets')
export class Colorset extends ColorsetBase {

    @PrimaryColumn({
        length: 24
    })
    colorsetName: string = 'Unknown';

    @Column()
    isDefault: boolean = false;

    @Column({
        length: 16
    })
    primaryColor: string = '000000';

    @Column({
        length: 16
    })
    primaryBg: string = '000000';

    @Column({
        length: 16
    })
    secondaryColor: string = '000000';

    @Column({
        length: 16
    })
    secondaryBg: string = '000000';

    @Column({
        length: 16
    })
    infoColor: string = '000000';

    @Column({
        length: 16
    })
    brandColor: string = 'FFFFFF';

    @Column({
        length: 16
    })
    brandBg: string = 'FFFFFF';

    @Column({
        length: 16
    })
    navbarColor: string = '000000';

    @Column({
        length: 16
    })
    navbarBg: string = '000000';

    @Column({
        length: 16
    })
    navbarColorActive: string = '000000';

    @Column({
        length: 100
    })
    description: string = 'none';

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


