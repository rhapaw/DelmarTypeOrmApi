import "reflect-metadata";
import {createConnection} from "typeorm";
import {Employee} from "./entity/employee";
import { Listing } from './entity/Listing';
import { Colorset } from './entity/colorset';
import { Seed } from './misc/Seed';
import bodyparser from 'body-parser';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import createServer from 'connect';
import { EmployeeController } from './controller/employee.controller';
import { ListingController } from './controller/Listing.controller';
import { ColorsetController } from './controller/colorset.controller';

const app: Application = express();
const jsonParser: createServer.NextHandleFunction = bodyparser.json();
const urlEncodedParser: createServer.NextHandleFunction = bodyparser.urlencoded({ extended: false });

const basePath: string = '/api/v1';



createConnection().then(async connection => {

    const empCount = await connection.manager.count(Employee);
    const propCount = await connection.manager.count(Listing);
    const colCount = await connection.manager.count(Colorset);
    console.log(`There are ${empCount} employeees, ${propCount} Listings and ${colCount} colorsets.`);
    if (empCount === 0 || propCount === 0 || colCount === 0) {
        const seed = new Seed();
        if (empCount === 0) {
            await seed.seedEmployees();
        }
        if (propCount === 0) {
            await seed.seedListings();
        }
        if (colCount === 0) {
            await seed.seedColorsets();
        }

/*         const emps = await connection.manager.find(Employee);
        console.log("All employees: ", emps);

        const props = await connection.manager.find(Listing);
        console.log("All Listings: ", props); */

    }

    app.use(cors());
    // app.options('localhost', cors());

    new EmployeeController(basePath, app, jsonParser, urlEncodedParser);
    new ListingController(basePath, app, jsonParser, urlEncodedParser);
    new ColorsetController(basePath, app, jsonParser, urlEncodedParser);

    app.listen(5000, () => {console.log('server listening on 5000')});
    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));

console.log('got to end');