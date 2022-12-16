import { Controller, Delete, Get, Patch, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import menuService from '../services/menu.service';
import { Error } from 'sequelize';

@Controller('burgers')
export class BurgerController {
    @Get()
    async list(req: Request, res: Response) {
        try {
            res.json(await menuService.list());
        } catch (error: Error|any) {
            res.status(400).json({ message: error.message ?? error });
        }
    }

    @Post()
    async create(req: Request, res: Response) {
        try {
            res.status(201).json(await menuService.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
            }));
        } catch (error: Error|any) {
            res.status(400).json({ message: error.message ?? error });
        }
    }

    @Get(':id')
    async find(req: Request, res: Response) {
        try {
            res.json(await menuService.find(Number(req.params.id)));
        } catch (error: Error|any) {
            res.status(400).json({ message: error.message ?? error });
        }
    }

    @Patch(':id')
    async update(req: Request, res: Response) {
        try {
            res.json(await menuService.update(Number(req.params.id), {
                ...(req.body.name && { name: req.body.name}),
                ...(req.body.description && { description: req.body.description}),
                ...(req.body.price && { price: req.body.price}),
            }));
        } catch (error: Error|any) {
            res.status(400).json({ message: error.message ?? error });
        }
    }

    @Delete(':id')
    async destroy(req: Request, res: Response) {
        try {
            await menuService.destroy(Number(req.params.id));
            res.send();
        } catch (error: Error|any) {
            res.status(400).json({ message: error.message ?? error });
        }
    }
}
