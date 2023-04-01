//console.log("node ok");
const express = require('express');
const path = require('path');
const app = express();
const connectToDatabase = require('./DATABASE/connect');
const routes = require('./ROUTES/routes')
const dotenv = require('dotenv');
const port = 3000;

dotenv.config(); //identifica que o arquivo .env
connectToDatabase();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //achar a pasta public
app.use(express.urlencoded({ extend: true })); //ler os aquivos dentro da pasta public
app.use(routes);

//rota de teste de requicisação get
// app.get('/', function (req, res) {
//     res.send('Olá Mundo!!');
// });

//rota para renderizar a página principal do site(aplicação) - index.ejs
// app.get('/', function (req, res) { http://localhost:3000/home
//     res.render('index');
// })

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));
