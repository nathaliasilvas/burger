import { DataTypes, Model, Optional } from 'sequelize';
import dbService from '../services/db.service';

export type MenuItem = {
    name: string;
    description: string;
    price: number;
}

type MenuItemAttributes = MenuItem & {
    id: number;
    createdAt: any;
    updatedAt: any;
}

export class MenuModel extends Model<MenuItemAttributes, Optional<MenuItemAttributes, 'id'>> {
    declare name: string;
    declare description: string;
    declare price: number;
}

MenuModel.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
}, {
    modelName: 'Menu',
    sequelize: dbService,
    freezeTableName: true,
});
