import { Employee } from '../entity/employee';
import { getManager } from 'typeorm';
import express, { Application, Request, Response, NextFunction } from 'express';
import createServer from 'connect';
import { Z_STREAM_END } from 'zlib';
//import { QueryExpressionMap } from 'typeorm/query-builder/QueryExpressionMap';

export class EmployeeController {

    constructor(basePath: string, app: Application, jsonParser: createServer.NextHandleFunction,
        urlEncodedParser: createServer.NextHandleFunction) {
        // Register routers
        app.get(basePath + '/employee/:id', this.getEmployee);
        app.get(basePath + '/employee', this.getAllEmployees);
        app.post(basePath + '/employee', jsonParser, this.createEmployee);

    }

    async getEmployee(req: Request, resp: Response, next: NextFunction) {
        const repo = getManager().getRepository(Employee);
        const id: any = parseInt(req.params.id);
        console.log('Employee id: ', id);
        const rec: Employee[] = await repo.findByIds([id], { take: 1 });
        const json: string = JSON.stringify(rec);
        resp.send(json);
        console.log('found Employee: ', rec);
    }

    async getAllEmployees(req: Request, resp: Response, next: NextFunction) {
        const repo = getManager().getRepository(Employee);
        const rec: Employee[] = await repo.find();
        const json: string = JSON.stringify(rec);
        resp.status(200).send(json);
        console.log('found Employees: ', rec);
    }

    async createEmployee(req: Request, resp: Response, next: NextFunction) {
        const repo = getManager().getRepository(Employee);
        const rec: Employee = req.body;
        await repo.save(rec);
        console.log("created Employee: ", rec);
    }

    async updateEmployee(req: Request, resp: Response, next: NextFunction) {

    }

    async deleteEmployee(req: Request, resp: Response, next: NextFunction) {

    }

}
