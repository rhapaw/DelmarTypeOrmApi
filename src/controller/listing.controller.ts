import { Listing } from '../entity/Listing';
import { getManager } from 'typeorm';
import express, { Application, Request, Response, NextFunction } from 'express';
import createServer from 'connect';
import { Z_STREAM_END } from 'zlib';
//import { QueryExpressionMap } from 'typeorm/query-builder/QueryExpressionMap';

export class ListingController {

    constructor(basePath: string, app: Application, jsonParser: createServer.NextHandleFunction, 
        urlEncodedParser: createServer.NextHandleFunction) {
        // Register routers
        app.get(basePath + '/Listing/:id', this.getListing);
        app.get(basePath + '/Listing', this.getListings);
        app.post(basePath + '/Listing', jsonParser, this.createListing);
        app.put(basePath + '/Listing/:id', jsonParser, this.updateListing);
        app.delete(basePath + '/Listing/:id', jsonParser, this.deleteListing);
    }

    async getListing(req: Request, resp: Response , next: NextFunction ) {
        const repo = getManager().getRepository(Listing);
        const id: any = parseInt(req.params.id);
        console.log('Listing id: ', id);
        const rec: Listing[] = await repo.findByIds([id], {take: 1});
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Listing: ', rec);
    }

    async getListings(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Listing);
        const rec: Listing[] = await repo.find();
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Listings: ', rec);
    }

    async createListing(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Listing);
        const rec: Listing = req.body;
        await repo.save(rec);
        resp.status(200).send();
        console.log("created Listing: ", rec);
    }

    async updateListing(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Listing);
        const id: any = parseInt(req.params.id);
        console.log('update Listing id: ', id);
        await repo.update(id, req.body);
        resp.status(200).send();
        console.log('updated Listing: ', id);
    }

    async deleteListing(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Listing);
        const id: any = parseInt(req.params.id);
        console.log('delete Listing id: ', id);
        await repo.delete(id);
        resp.status(200).send();
        console.log('deleted Listing: ', id);
    }

}

