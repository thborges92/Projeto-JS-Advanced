//console.log("node ok");
const express = require('express');
const path = require('path');
const app = express();
const connectToDatabase = require('./DATABASE/connect');
const routes = require('./ROUTES/routes')
const dotenv = require('dotenv');
const port = 3000;

dotenv.config();
connectToDatabase();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.urlencoded({ extend: true })); 
app.use(routes);
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));
