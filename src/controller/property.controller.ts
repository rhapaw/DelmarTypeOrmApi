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
        app.get(basePath + '/property', this.getProperties);
        app.post(basePath + '/property', jsonParser, this.createProperty);
        app.put(basePath + '/property/:id', jsonParser, this.updateProperty);
        app.delete(basePath + '/property/:id', jsonParser, this.deleteProperty);
    }

    async getProperty(req: Request, resp: Response , next: NextFunction ) {
        const repo = getManager().getRepository(Property);
        const id: any = parseInt(req.params.id);
        console.log('property id: ', id);
        const rec: Property[] = await repo.findByIds([id], {take: 1});
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found property: ', rec);
    }

    async getProperties(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Property);
        const rec: Property[] = await repo.find();
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found properties: ', rec);
    }

    async createProperty(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Property);
        const rec: Property = req.body;
        await repo.save(rec);
        resp.status(200).send();
        console.log("created Property: ", rec);
    }

    async updateProperty(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Property);
        const id: any = parseInt(req.params.id);
        console.log('update property id: ', id);
        await repo.update(id, req.body);
        resp.status(200).send();
        console.log('updated property: ', id);
    }

    async deleteProperty(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Property);
        const id: any = parseInt(req.params.id);
        console.log('delete property id: ', id);
        await repo.delete(id);
        resp.status(200).send();
        console.log('deleted property: ', id);
    }

}

