// Define the home controller.
class HomeController {
	index(req, res) {
		res.json({message: 'This is the home page'});
	}
}

// Export the home controller.
export default new HomeController();

