/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
// Import everything from express and assign it to the express variable
import * as express from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Basic request');
});

router.get('/:name', (req: Request, res: Response) => {
    
    let { name } = req.params;
    // Greet the given name
    res.send(`Hello there, ${name}`);
});

const BaseController: Router = router;

// Create a new express application instance
const app: express.Application = express.default()
// The port the express app will listen on
const port: number = process.env.PORT as any || 9000;

// Mount the WelcomeController at the /welcome route
app.use('/welcome', BaseController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});