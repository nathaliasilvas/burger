import { MenuItem, MenuModel } from '../models/menu.model';
import moment from 'moment/moment';

class MenuService {
    async list(): Promise<MenuModel[]> {
        return MenuModel.findAll();
    }

    async create(menuItem: MenuItem): Promise<MenuModel> {
        return MenuModel.create({ ...menuItem, createdAt: moment(), updatedAt: moment() });
    }

    async find(id: number): Promise<MenuModel|null> {
        return MenuModel.findByPk(id);
    }

    async update(id: number, menuItem: Partial<MenuItem>): Promise<MenuModel|null> {
        const { name, description, price } = menuItem;

        await MenuModel.update({
            ...(name && { name }),
            ...(description && { description }),
            ...(price && { price }),
            updatedAt: moment(),
        }, {
            where: { id },
        });

        return MenuModel.findByPk(id);
    }

    async destroy(id: number): Promise<void> {
        await MenuModel.destroy({ where: { id } });
    }
}

export default new MenuService();
