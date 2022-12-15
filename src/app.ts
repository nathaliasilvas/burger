import { Server } from '@overnightjs/core';

export class Application extends Server {
    constructor() {
        super(process.env.NODE_ENV === 'development');
        this.setupControllers();
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server listening on port: ${port}`);
        })
    }

    private setupControllers() {
        super.addControllers([]);
    }
}
