import "reflect-metadata";
import {createConnection} from "typeorm";
import {Employee} from "./entity/Employee";
import { Property } from './entity/Property';
import { Seed } from './.helpers/Seed';

createConnection().then(async connection => {

    const empCount = await connection.manager.count(Employee);
    const propCount = await connection.manager.count(Property);
    console.log(`There are ${empCount}' employeees and ${propCount} properties.`);
    if (empCount === 0 || propCount === 0) {
        const seed = new Seed();
        if (empCount === 0) {
            await seed.seedEmployees();
        }
        if (propCount === 0) {
            await seed.seedProperties();
        }

        const emps = await connection.manager.find(Employee);
        console.log("All employees: ", emps);

        const props = await connection.manager.find(Property);
        console.log("All properties: ", props);
    }

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
