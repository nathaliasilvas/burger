import { Server } from '@overnightjs/core';
import { BurgerController } from './controllers/burger.controller';
import express from 'express';

export class Application extends Server {
    constructor() {
        super(process.env.NODE_ENV === 'development');
        this.setupMiddlewares();
        this.setupControllers();
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server listening on port: ${port}`);
        })
    }

    private setupControllers() {
        super.addControllers([new BurgerController()]);
    }

    private setupMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
}
