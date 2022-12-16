import { Sequelize } from 'sequelize';

class DbService {
    connection: Sequelize;

    constructor() {
        this.connection = new Sequelize({
            database: String(process.env.MYSQL_DATABASE),
            dialect: 'mysql',
            host: String(process.env.MYSQL_HOST),
            password: String(process.env.MYSQL_PASS),
            port: Number(process.env.MYSQL_PORT),
            username: String(process.env.MYSQL_USER),
        });
    }
}

const instance = new DbService();
export default instance.connection;
