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
        app.get(basePath + '/colorset/:name', this.getColorSet);
        app.get(basePath + '/colorset', this.getAllColorSets);
        app.post(basePath + '/colorset', jsonParser, this.createColorSet);
        
    }

    async getColorSet(req: Request, resp: Response , next: NextFunction ) {
        const repoColor = getManager().getRepository(ColorSet);
        const colorName: any = parseInt(req.params.name);
        console.log('colorName: ', colorName);
        const cset: ColorSet[] = await repoColor.findByIds([colorName], {take: 1});
        const colorstr: string = JSON.stringify(cset);
        resp.send(colorstr);
        console.log('found color set: ', cset);
    }

    async getAllColorSets(req: Request, resp: Response , next: NextFunction) {
        const repoColor = getManager().getRepository(ColorSet);
        const csets: ColorSet[] = await repoColor.find();
        const colorstr: string = JSON.stringify(csets);
        resp.status(200).send(colorstr);
        console.log('found color sets: ', csets);
    }

    async createColorSet(req: Request, resp: Response , next: NextFunction) {
        const repoColor = getManager().getRepository(ColorSet);
        const cset: ColorSet = req.body;
        await repoColor.save(cset);
        console.log("created ColorSet: ",   cset);
    }

    async updateColorSet(req: Request, resp: Response , next: NextFunction) {

    }

    async deleteColorSet(req: Request, resp: Response , next: NextFunction) {

    }




}

