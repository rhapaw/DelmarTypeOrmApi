import { Colorset } from '../entity/colorset';
import { getManager } from 'typeorm';
import express, { Application, Request, Response, NextFunction } from 'express';
import createServer from 'connect';
import { Z_STREAM_END } from 'zlib';
//import { QueryExpressionMap } from 'typeorm/query-builder/QueryExpressionMap';

export class ColorsetController {

    constructor(basePath: string, app: Application, jsonParser: createServer.NextHandleFunction, 
        urlEncodedParser: createServer.NextHandleFunction) {
        // Register routers
        app.get(basePath + '/colorset/:id', this.getColorset);
        app.get(basePath + '/colorset', this.getColorsets);
        app.post(basePath + '/colorset', jsonParser, this.createColorset);
        app.put(basePath + '/colorset/:id', jsonParser, this.updateColorset);
        app.delete(basePath + '/colorset/:id', this.deleteColorset);
    }

    async getColorset(req: Request, resp: Response , next: NextFunction ) {
        const repo = getManager().getRepository(Colorset);
        const id: any = req.params.id;
        console.log('Colorset name: ', id);
        const rec: Colorset[] = await repo.findByIds([id], {take: 1});
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Colorset: ', rec);
    }

    async getColorsets(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const rec: Colorset[] = await repo.find();
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Colorsets: ', rec);
    }

    async createColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const rec: Colorset = req.body;
        await repo.save(rec);
        console.log("created Colorset: ", rec);
        resp.status(200).send();
    }

    async updateColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const id: any = req.params.id;
        console.log('update colorset name: ', id);
        await repo.update(id, req.body);
        resp.status(200).send();
        console.log('updated Colorset: ', id);
    }

    async deleteColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const id: any = req.params.id;
        console.log('delete colorset name: ', id);
        await repo.delete(id);
        resp.status(200).send();
        console.log('deleted Colorset: ', id);
    }

}

