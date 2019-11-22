import "reflect-metadata";
import {createConnection} from "typeorm";
import {Employee} from "./entity/employee";
import { Property } from './entity/property';
import { Seed } from './misc/Seed';
import bodyparser from 'body-parser';
import express, { Application, Request, Response, NextFunction } from 'express';
import createServer from 'connect';
import { EmployeeController } from './controller/employee.controller';

const app: Application = express();
const jsonParser: createServer.NextHandleFunction = bodyparser.json();
const urlEncodedParser: createServer.NextHandleFunction = bodyparser.urlencoded({ extended: false });

const basePath: string = '/app/v1';



createConnection().then(async connection => {

    const empCount = await connection.manager.count(Employee);
    const propCount = await connection.manager.count(Property);
    console.log(`There are ${empCount} employeees and ${propCount} properties.`);
    if (empCount === 0 || propCount === 0) {
        const seed = new Seed();
        if (empCount === 0) {
            await seed.seedEmployees();
        }
        if (propCount === 0) {
            await seed.seedProperties();
        }

/*         const emps = await connection.manager.find(Employee);
        console.log("All employees: ", emps);

        const props = await connection.manager.find(Property);
        console.log("All properties: ", props); */

    }

 new EmployeeController(basePath, app, jsonParser, urlEncodedParser);

app.listen(5000, () => {console.log('server listening on 5000')});
console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));

console.log('got to end');