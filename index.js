require("dotenv").config()
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let apiRoutes = require("./api-routes");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const port = process.env.TOKEN_SERVER_PORT 


app.get('/', (req, res) => res.send('Hello World with Expresss1dsdddddsdsd'));

app.use('/', apiRoutes);


app.listen(port, () => { 
    console.log(`Authorization Server running on ${port}`)
})