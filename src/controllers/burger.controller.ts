import { Controller, Delete, Get, Patch, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('burger')
export class BurgerController {
    @Get()
    async list(req: Request, res: Response) {

    }

    @Post()
    async create(req: Request, res: Response) {

    }

    @Get(':id')
    async find(req: Request, res: Response) {

    }

    @Patch(':id')
    async update(req: Request, res: Response) {

    }

    @Delete(':id')
    async delete(req: Request, res: Response) {

    }
}
