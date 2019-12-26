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
        app.get(basePath + '/colorsetdefault', this.getDefaultColorset);
        app.put(basePath + '/colorsetdefault/:id', this.setDefaultColorset);
        app.get(basePath + '/colorset/:id', this.getColorset);
        app.get(basePath + '/colorset', this.getColorsets);
        app.post(basePath + '/colorset', jsonParser, this.createColorset);
        app.put(basePath + '/colorset/:id', jsonParser, this.updateColorset);
        app.delete(basePath + '/colorset/:id', this.deleteColorset);
    }

    async getDefaultColorset(req: Request, resp: Response , next: NextFunction ) {
        console.log('Get default Colorset');
        // const rec: Colorset[] = await Colorset.find({isDefault: true});
        const conn = getConnection();
        const rec: Colorset[] = await conn.createQueryBuilder()
            .select('cs')
            .from(Colorset, 'cs')
            .where('cs.IsDefault = true')
            .getMany();

        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Colorset: ', rec);
    }

    async setDefaultColorset(req: Request, resp: Response , next: NextFunction ) {
        const id: any = req.params.id.toUpperCase();
        console.log('Set Colorset: ' + id + ' as default');
        const conn = getConnection();
        await conn.createQueryBuilder()
            .update(Colorset)
            .set({isDefault: true})
            .where('colorsetName = :id', {id: id})
            .execute();

        await conn.createQueryBuilder()
            .update(Colorset)
            .set({isDefault: false})
            .where('colorsetName != :id', {id: id})
            .execute();

        resp.status(200).contentType('application/json').send();
        console.log('Set default Colorset: ', id);
    }

    async getColorset(req: Request, resp: Response , next: NextFunction ) {
        const repo = getManager().getRepository(Colorset);
        const id: any = req.params.id.toUpperCase();
        console.log('Colorset name: ', id);
        const rec: Colorset[] = await repo.findByIds([id], {take: 1});
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Colorset: ', rec);
    }

    async getColorsets(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const skippy = 0;
        const takey = 100;
        const rec: Colorset[] = await repo.find({skip: skippy, take: takey});
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Colorsets: ', rec);
    }

    async createColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const rec: Colorset = req.body;
        rec.colorsetName = rec.colorsetName.toUpperCase();
        rec.isDefault = false;
        await repo.save(rec);
        console.log("created Colorset: ", rec);
        resp.status(200).send();
    }

    async updateColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const id: any = req.params.id.toUpperCase();
        console.log('update colorset name: ', id);
        const rec: Colorset = req.body;
        rec.colorsetName = rec.colorsetName.toUpperCase();
        rec.isDefault = false;
        await repo.update(id, rec);
        resp.status(200).send();
        console.log('updated Colorset: ', id);
    }

    async deleteColorset(req: Request, resp: Response , next: NextFunction) {
        const repo = getManager().getRepository(Colorset);
        const id: any = req.params.id.toUpperCase();
        console.log('delete colorset name: ', id);
        await repo.delete(id);
        resp.status(200).send();
        console.log('deleted Colorset: ', id);
    }

}

