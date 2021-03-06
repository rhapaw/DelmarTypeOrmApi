import { Colorset } from '../entity/colorset';
import { getConnection, getManager } from 'typeorm';
import express, { Application, Request, Response, NextFunction } from 'express';
import createServer from 'connect';
import { Z_STREAM_END } from 'zlib';
//import { QueryExpressionMap } from 'typeorm/query-builder/QueryExpressionMap';

export class ColorsetController {

    constructor(basePath: string, app: Application, jsonParser: createServer.NextHandleFunction, 
        urlEncodedParser: createServer.NextHandleFunction) {
        // Register routers
        app.get(basePath + '/colorsetsdefault', this.getDefaultColorset);
        app.put(basePath + '/colorsetsdefault/:id', this.setDefaultColorset);
        app.get(basePath + '/colorsets/:id', this.getColorset);
        app.get(basePath + '/colorsets', this.getColorsets);
        app.post(basePath + '/colorsets', jsonParser, this.createColorset);
        app.put(basePath + '/colorsets/:id', jsonParser, this.updateColorset);
        app.delete(basePath + '/colorsets/:id', this.deleteColorset);
    }

    async getDefaultColorset(req: Request, resp: Response , next: NextFunction ) {
        console.log('Get default Colorset');
        const conn = getConnection();
        const rec: Colorset[] = await conn.createQueryBuilder()
            .select('cs')
            .from(Colorset, 'cs')
            .where('cs.IsDefault = true')
            .getMany();

        if (rec.length >= 1) {
            const json: string = JSON.stringify(rec);
            resp.status(200).contentType('application/json').send(json);
            console.log('Found default Colorset: ', rec);
        } else {
            resp.status(404).send();
            console.log('No default Colorset found');
        }
    }

    async setDefaultColorset(req: Request, resp: Response , next: NextFunction ) {
        const id: any = parseInt(req.params.id);
        console.log('Set Colorset: ' + id + ' as default');
        const conn = getConnection();
        await conn.createQueryBuilder()
            .update(Colorset)
            .set({isDefault: true})
            .where('id = :id', {id: id})
            .execute();

        await conn.createQueryBuilder()
            .update(Colorset)
            .set({isDefault: false})
            .where('id != :id', {id: id})
            .execute();

        resp.status(200).contentType('application/json').send();
        console.log('Set default Colorset: ', id);
    }

    async getColorset(req: Request, resp: Response , next: NextFunction ) {
        const id: any = parseInt(req.params.id);
        console.log('Get Colorset id: ', id);
        const conn = getConnection();
        const rec: Colorset[] = await conn.createQueryBuilder()
            .select('cs')
            .from(Colorset, 'cs')
            .where('id = :id)', {id: id})
            .getMany();

        if (rec.length >= 1) {
            const json: string = JSON.stringify(rec);
            resp.status(200).contentType('application/json').send(json);
            console.log('Found Colorset: ', rec);
        }

    }

    async getColorsets(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const skippy = 0;
        const takey = 100;
        const rec: Colorset[] = await repo.find({order: {colorsetName: 'ASC'}, skip: skippy, take: takey});
/*             .sort( (a: Colorset, b: Colorset) => {
                return a.colorsetName == b.colorsetName? 0 : a.colorsetName < b.colorsetName? -1: 1;
            }) ; */
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Colorsets: ', rec);
    }

    async createColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const rec: Colorset = req.body;
        rec.isDefault = false;
        rec.isProtected = false;
        await repo.save(rec);
        const json: string = JSON.stringify(rec);
        console.log('created json rec: ' + json);
        resp.status(201).contentType('application/json').send(json);
        console.log("created Colorset: ", rec);
    }

    async updateColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const id: any = parseInt(req.params.id);
        console.log('update colorset id: ', id);
        const rec: Colorset = req.body;
        await repo.update(id, rec);
        resp.status(200).send();
        console.log('updated Colorset: ', id);
    }

    async deleteColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const id: any = parseInt(req.params.id);
        console.log('delete colorset id: ', id);
        await repo.delete(id);
        resp.status(200).send();
        console.log('deleted Colorset: ', id);
    }

}

