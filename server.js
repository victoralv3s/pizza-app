// Import the Express.js framework and the dotenv package.
import app from './app';
import 'dotenv/config';

// Get the port number from the environment variables, or use 3000 as a fallback.
const port = process.env.PORT || 3000;

// Start the Express.js server on the specified port.
app.listen(port, () => {
	console.log();
	console.log(`Listening in port ${port}`);
	console.log(`You can see it at http://localhost:${port}`);
});
