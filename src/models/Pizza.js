import Sequelize, { Model } from 'sequelize';

export default class Pizza extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				description: Sequelize.TEXT,
				price: Sequelize.DECIMAL(10, 2),
				size: Sequelize.STRING,
				category: Sequelize.STRING,
				ingredients: Sequelize.TEXT,
				prep_time: Sequelize.INTEGER,
				reviews: Sequelize.TEXT,
				image: Sequelize.STRING,
				availability: Sequelize.BOOLEAN,
			},
			{ sequelize },
		);
		return this;
	}
}
