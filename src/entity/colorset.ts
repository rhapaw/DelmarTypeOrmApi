import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

class ColorSetBase {
    colorSetName: string = 'Unknown';
    primaryColor: string = '000000';
    primaryBg: string = '000000';
    secondaryColor: string = '000000';
    secondaryBg: string = '000000';
    infoColor: string = '000000';
    navbarColor: string = '000000';
    navbarBg: string = '000000';
    navbarColorActive: string = '000000';
    description: string = 'none';
    createdAt?: Date;
    updatedAt?: Date;
    version?: number;

    constructor() {}
}



@Entity('ColorSets')
export class ColorSet extends ColorSetBase{

    @PrimaryColumn({
        length: 24
    })
    colorSetName: string = 'Unknown';

    @Column({
        length: 6
    })
    primaryColor: string = '000000';

    @Column({
        length: 6
    })
    primaryBg: string = '000000';

    @Column({
        length: 6
    })
    secondaryColor: string = '000000';

    @Column({
        length: 6
    })
    secondaryBg: string = '000000';

    @Column({
        length: 6
    })
    infoColor: string = '000000';

    @Column({
        length: 6
    })
    navbarColor: string = '000000';

    @Column({
        length: 6
    })
    navbarBg: string = '000000';

    @Column({
        length: 6
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


