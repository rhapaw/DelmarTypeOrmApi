import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

class ColorsetBase {
    id?: number;
    colorsetName: string;
    isDefault: boolean;
    isProtected: boolean;
    primaryColor: string;
    primaryBg: string;
    primaryBgIsNone: boolean;
    secondaryColor: string;
    secondaryBg: string;
    secondaryBgIsNone: boolean;
    infoColor: string;
    infoBg: string;
    brandColor: string;
    brandBg: string;
    navbarColor: string;
    navbarColorActive: string;
    navbarBg: string;
    navbarBgIsNone: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    version?: number;

    constructor() {
        this.colorsetName = 'Unknown';
        this.isDefault = false;
        this.isProtected = false;
        this.primaryColor = '000000';
        this.primaryBg = '000000';
        this.primaryBgIsNone = false;
        this.secondaryColor = '000000';
        this.secondaryBg = '000000';
        this.secondaryBgIsNone = false;
        this.infoColor = '000000';
        this.infoBg = '000000';
        this.brandColor = 'FFFFFF';
        this.brandBg = 'FFFFFF';
        this.navbarColor = '000000';
        this.navbarColorActive = '000000';
        this.navbarBg = '000000';
        this.navbarBgIsNone = false;
    }
}



@Entity('colorsets')
export class Colorset extends ColorsetBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({
        length: 40
    })
    colorsetName: string = 'Unknown';

    @Column()
    isDefault: boolean = false;

    @Column()
    isProtected: boolean = false;

    @Column({
        length: 16
    })
    primaryColor: string = '000000';

    @Column({
        length: 16
    })
    primaryBg: string = '000000';

    @Column()
    primaryBgIsNone: boolean = false;

    @Column({
        length: 16
    })
    secondaryColor: string = '000000';

    @Column({
        length: 16
    })
    secondaryBg: string = '000000';

    @Column()
    secondaryBgIsNone: boolean = false;

    @Column({
        length: 16
    })
    infoColor: string = '000000';

    @Column({
        length: 16
    })
    infoBg: string = '000000';

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
    navbarColorActive: string = '000000';

    @Column({
        length: 16
    })
    navbarBg: string = '000000';

    @Column()
    navbarBgIsNone: boolean = false;

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


