import { DataTypes, Model } from 'sequelize';
import dbService from '../services/db.service';

export class MenuModel extends Model {
    declare name: string;
    declare description: string;
    declare price: number;
}

MenuModel.init({
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
}, {
    modelName: 'Menu',
    sequelize: dbService,
});
