import "reflect-metadata";
import {createConnection} from "typeorm";
import {Professional} from "./entity/Professional";
import { Property } from './entity/Property';

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const pro = new Professional();
    pro.firstName = "Timber";
    pro.lastName = "Saw";
    await connection.manager.save(pro);
    console.log("Saved a new professional with id: " + pro.id);

    console.log("Loading professionals from the database...");
    const pros = await connection.manager.find(Professional);
    console.log("Loaded pros: ", pros);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
