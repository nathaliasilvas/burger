import { MenuItem, MenuModel } from '../models/menu.model';
import moment from 'moment/moment';

class MenuService {
    async list(): Promise<MenuModel[]> {
        return MenuModel.findAll();
    }

    async create(menuItem: MenuItem): Promise<MenuModel> {
        return MenuModel.create({ ...menuItem, createdAt: moment(), updatedAt: moment() });
    }

    async find(id: number): Promise<MenuModel> {
        const menuItem = await MenuModel.findByPk(id);

        if (!menuItem) throw new Error(`No menu item found for id ${id}.`);

        return menuItem;
    }

    async update(id: number, updatedMenuItem: Partial<MenuItem>): Promise<MenuModel|null> {
        const menuItem = await this.find(id);

        const { name, description, price } = updatedMenuItem;

        menuItem.name = name ?? menuItem.name;
        menuItem.description = description ?? menuItem.description;
        menuItem.price = price ?? menuItem.price;

        if (name ?? description ?? price) {
            menuItem.updatedAt = moment();
            await menuItem.save();
        } else {
            throw new Error('At least one of the menu fields are required.');
        }

        return menuItem;
    }

    async destroy(id: number): Promise<void> {
        const menuItem = await this.find(id);
        await menuItem.destroy();
    }
}

export default new MenuService();
