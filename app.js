// Import the Express.js framework and the home route.
import './src/database';
import express from 'express';
import home from './src/routes/home';
import 'dotenv/config';

// Create a new Express.js application.
class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	// Register the middlewares.
	middlewares() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
	}

	// Register the routes.
	routes() {
		this.app.use('/', home);
	}
}

// Export the application.
export default new App().app;
