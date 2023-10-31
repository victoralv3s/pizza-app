import Pizza from '../models/Pizza';

// Define the home controller.
class HomeController {
	async index(req, res) {
		const newPizza = await Pizza.create({
			name: '4 queijos',
			description:
				'Receita de Pizza 4 Queijos deliciosa e cremosa feita com farinha de trigo, fermento em pó, molho de tomate, muçarela, provolone, gorgonzola e parmesão ralado',
			price: 35.5,
			size: 'Big',
			category: 'Creamy',
			ingredients:
				'farinha de trigo, fermento em pó, molho de tomate, muçarela, provolone, gorgonzola e parmesão ralado',
			prep_time: 50,
			reviews:
				'Wood oven, nice atmosphere and great pizzas and entrees, as wel as good wine list. Recomendo options for pizza with artichokes and the one with goat cheese',
			image:
				'https://img.freepik.com/fotos-gratis/close-up-em-uma-deliciosa-pizza_23-2150852113.jpg?size=626&ext=jpg&ga=GA1.1.1340339033.1694894005&semt=sph',
			availability: true,
		});
		return res.json(newPizza);
	}
}

// Export the home controller.
export default new HomeController();
