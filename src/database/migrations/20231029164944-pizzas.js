/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('pizzas', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
			},
			price: {
				type: Sequelize.DECIMAL(10, 2),
				allowNull: false,
			},
			size: {
				type: Sequelize.STRING,
			},
			category: {
				type: Sequelize.STRING,
			},
			ingredients: {
				type: Sequelize.TEXT,
			},
			prep_time: {
				type: Sequelize.INTEGER,
			},
			reviews: {
				type: Sequelize.TEXT,
			},
			image: {
				type: Sequelize.STRING,
			},
			availability: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('pizzas');
	},
};

