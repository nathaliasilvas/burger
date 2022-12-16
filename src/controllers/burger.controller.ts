import { Controller, Delete, Get, Patch, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import menuService from '../services/menu.service';

@Controller('burgers')
export class BurgerController {
    @Get()
    async list(req: Request, res: Response) {
        res.json(await menuService.list());
    }

    @Post()
    async create(req: Request, res: Response) {
        res.status(201).json(await menuService.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }));
    }

    @Get(':id')
    async find(req: Request, res: Response) {
        res.json(await menuService.find(Number(req.params.id)));
    }

    @Patch(':id')
    async update(req: Request, res: Response) {
        res.json(await menuService.update(Number(req.params.id), {
            ...(req.body.name && { name: req.body.name}),
            ...(req.body.description && { description: req.body.description}),
            ...(req.body.price && { price: req.body.price}),
        }));
    }

    @Delete(':id')
    async destroy(req: Request, res: Response) {
        await menuService.destroy(Number(req.params.id));
        res.send();
    }
}
