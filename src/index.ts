import { Application } from './app';

const port = Number(process.env.PORT ?? 8080);
const app = new Application();

app.start(port);
