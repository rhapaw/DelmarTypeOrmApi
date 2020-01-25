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
        app.get(basePath + '/employees/:id', this.getEmployee);
        app.get(basePath + '/employees', this.getEmployees);
        app.post(basePath + '/employees', jsonParser, this.createEmployee);
        app.put(basePath + '/employees/:id', jsonParser, this.updateEmployee);
        app.delete(basePath + '/employees/:id', jsonParser, this.deleteEmployee);
        app.get(basePath + '/contacts', this.getContacts);
    }

    async getEmployee(req: Request, resp: Response, next: NextFunction) {
        const repo = getManager().getRepository(Employee);
        const id: any = parseInt(req.params.id);
        console.log('Employee id: ', id);
        const rec: Employee[] = await repo.findByIds([id], { take: 1 });
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Employee: ', rec);
    }

    async getEmployees(req: Request, resp: Response, next: NextFunction) {
        const repo = getManager().getRepository(Employee);
        const rec: Employee[] = await repo.find();
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found Employees: ', rec);
    }

    async createEmployee(req: Request, resp: Response, next: NextFunction) {
        const repo = getManager().getRepository(Employee);
        const rec: Employee = req.body;
        await repo.save(rec);
        console.log("created Employee: ", rec);
        resp.status(201).send();
    }

    async updateEmployee(req: Request, resp: Response, next: NextFunction) {
        const repo = getManager().getRepository(Employee);
        const id: any = parseInt(req.params.id);
        console.log('Update employee id: ', id);
        await repo.update(id, req.body);
        resp.status(200).send();
        console.log('updated Employee: ', id);
    }

    async deleteEmployee(req: Request, resp: Response, next: NextFunction) {
        const repo = getManager().getRepository(Employee);
        const id: any = parseInt(req.params.id);
        console.log('Delete employee id: ', id);
        await repo.delete(id);
        resp.status(200).send();
        console.log('deleted Employee: ', id);
    }

    async getContacts(req: Request, resp: Response, next: NextFunction) {
        var pageNumber: number = 1;
        var pageSize: number = 20;
        var skip: number;

        console.log('Params: ', req.params);

        if (req.params.pageNumber != null) {
            pageNumber = parseInt(req.params.pageNumber);
        }
        if (req.params.pageSize != null) {
            pageSize = parseInt(req.params.pageSize);
        }
        skip = pageSize * (pageNumber - 1);
        console.log(`pageNumber: ${pageNumber}, pageSize: ${pageSize}, skip: ${skip}`);
        const repo = getManager().getRepository(Employee);
        console.log('Looking for contacts');
        const rec: Employee[] = await repo.createQueryBuilder("employee")
        .where("employee.isContact = true")
        .orderBy('contactGroupSeq', 'ASC')
        .addOrderBy('lastName', 'ASC')
        .addOrderBy('firstName', 'ASC')
        .skip(skip)
        .take(pageSize)
        .getMany();
        const json: string = JSON.stringify(rec);
        resp.status(200).contentType('application/json').send(json);
        console.log('found contacts: ', rec);
    }

}
