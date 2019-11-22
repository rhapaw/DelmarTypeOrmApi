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

    async getEmployee(req: Request, resp: Response , next: NextFunction ) {
        const repoEmp = getManager().getRepository(Employee);
        const empId: any = parseInt(req.params.id);
        console.log('empid: ', empId);
        const emp: Employee[] = await repoEmp.findByIds([empId], {take: 1});
        const empstr: string = JSON.stringify(emp);
        resp.send(empstr);
        console.log('found emp: ', emp);
    }

    async getAllEmployees(req: Request, resp: Response , next: NextFunction) {
        const repoEmp = getManager().getRepository(Employee);
        const emps: Employee[] = await repoEmp.find();
        const empstr: string = JSON.stringify(emps);
        resp.status(200).send(empstr);
        console.log('found emps: ', emps);
    }

    async createEmployee(req: Request, resp: Response , next: NextFunction) {
        const repoEmp = getManager().getRepository(Employee);
        const emp: Employee = req.body;
        await repoEmp.save(emp);
        console.log("created employee: ", emp);
    }

    async updateEmployee(req: Request, resp: Response , next: NextFunction) {

    }

    async deleteEmployee(req: Request, resp: Response , next: NextFunction) {

    }




}

