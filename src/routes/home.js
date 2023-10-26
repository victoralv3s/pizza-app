// Import the Router class from the Express.js framework and the home controller.
// Create a new router object.
import { Router } from 'express';
import homeController from '../controllers/HomeController';
const router = new Router();

// Define a route for the root path (`/`). This route will be handled by the home controller.
router.get('/', homeController.index);

// Export the router object.
export default router;
