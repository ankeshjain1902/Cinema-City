const express= require('express');
const bodyParser= require('body-parser');
const router = require('./routes/routing');
const errorLogger = require('./utilities/errorLogger');
const requestLogger = require('./utilities/reqestLogger');
const cors = require("cors");
const app = express();
// const create = require('./model/dbsetup')


app.use(cors());
app.use(bodyParser.json());
app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);

// app.get("/", function(req, res){
//     res.send("<h1> Hello </h1>"); 
//  });

// ye routing routes ki routing.js m kr di 
// app.get('/setupDb', (req, res, next) => {
//     create.setupDb().then((data) => {
//         res.send(data);
//     }).catch((err) => {
//         next(err);
//     });
// });

app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
})

module.exports = app;