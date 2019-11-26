import { Property } from '../entity/Property';
import { getManager } from 'typeorm';
import express, { Application, Request, Response, NextFunction } from 'express';
import createServer from 'connect';
import { Z_STREAM_END } from 'zlib';
//import { QueryExpressionMap } from 'typeorm/query-builder/QueryExpressionMap';

export class PropertyController {

    constructor(basePath: string, app: Application, jsonParser: createServer.NextHandleFunction, 
        urlEncodedParser: createServer.NextHandleFunction) {
        // Register routers
        app.get(basePath + '/property/:id', this.getProperty);
        app.get(basePath + '/property', this.getAllProperties);
        app.post(basePath + '/property', jsonParser, this.createProperty);
        
    }

    async getProperty(req: Request, resp: Response , next: NextFunction ) {
        const repoProp = getManager().getRepository(Property);
        const propId: any = parseInt(req.params.id);
        console.log('propid: ', propId);
        const prop: Property[] = await repoProp.findByIds([propId], {take: 1});
        const propstr: string = JSON.stringify(prop);
        resp.send(propstr);
        console.log('found prop: ', prop);
    }

    async getAllProperties(req: Request, resp: Response , next: NextFunction) {
        const repoProp = getManager().getRepository(Property);
        const props: Property[] = await repoProp.find();
        const propstr: string = JSON.stringify(props);
        resp.status(200).send(propstr);
        console.log('found props: ', props);
    }

    async createProperty(req: Request, resp: Response , next: NextFunction) {
        const repoProp = getManager().getRepository(Property);
        const prop: Property = req.body;
        await repoProp.save(prop);
        console.log("created Property: ", prop);
    }

    async updateProperty(req: Request, resp: Response , next: NextFunction) {

    }

    async deleteProperty(req: Request, resp: Response , next: NextFunction) {

    }




}

