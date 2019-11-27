import { ColorSet } from '../entity/colorset';
import { getManager } from 'typeorm';
import express, { Application, Request, Response, NextFunction } from 'express';
import createServer from 'connect';
import { Z_STREAM_END } from 'zlib';
//import { QueryExpressionMap } from 'typeorm/query-builder/QueryExpressionMap';

export class ColorSetController {

    constructor(basePath: string, app: Application, jsonParser: createServer.NextHandleFunction, 
        urlEncodedParser: createServer.NextHandleFunction) {
        // Register routers
        app.get(basePath + '/colorset/:id', this.getColorSet);
        app.get(basePath + '/colorset', this.getAllColorSets);
        app.post(basePath + '/colorset', jsonParser, this.createColorSet);
        
    }

    async getColorSet(req: Request, resp: Response , next: NextFunction ) {
        const repo = getManager().getRepository(ColorSet);
        const id: any = parseInt(req.params.id);
        console.log('ColorSet id: ', id);
        const rec: ColorSet[] = await repo.findByIds([id], {take: 1});
        const json: string = JSON.stringify(rec);
        resp.send(json);
        console.log('found ColorSet: ', rec);
    }

    async getAllColorSets(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(ColorSet);
        const rec: ColorSet[] = await repo.find();
        const json: string = JSON.stringify(rec);
        resp.status(200).send(json);
        console.log('found ColorSets: ', rec);
    }

    async createColorSet(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(ColorSet);
        const rec: ColorSet = req.body;
        await repo.save(rec);
        console.log("created ColorSet: ", rec);
    }

    async updateColorSet(req: Request, resp: Response , next: NextFunction) {

    }

    async deleteColorSet(req: Request, resp: Response , next: NextFunction) {

    }

}

