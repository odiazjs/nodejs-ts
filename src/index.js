"use strict";
/* app/controllers/welcome.controller.ts */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
// Import everything from express and assign it to the express variable
var express = __importStar(require("express"));
// Assign router to the express.Router() instance
var router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send('Basic request');
});
router.get('/:name', function (req, res) {
    var name = req.params.name;
    console.log('asdfasdasdas');
    // Greet the given name
    res.send("Hello there, " + name);
});
var BaseController = router;
// Create a new express application instance
var app = express.default();
// The port the express app will listen on
var port = process.env.PORT || 9000;
// Mount the WelcomeController at the /welcome route
app.use('/welcome', BaseController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
