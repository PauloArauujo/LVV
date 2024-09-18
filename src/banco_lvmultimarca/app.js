const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db_multimarca = require("./src/CatalagoProduto");
const db_multimarca = require("./src/ExibeProduto");
const db_multimarca = require("./src/ItemCamisa");
const db_multimarca = require("./src/Login");

app.use(bodyParser.json());
app.use(express.json());

app.use('/', CatalagoProduto);
app.use('/', ExibeProduto);
app.use('/', ItemCamisa);
app.use('/', Login);

app.get("/", (req, res) => {
    res.send("Deu bom :) !");
});


//configurando a porta do server
app.listen(port, () => {
    console.log('Servidor rodando na porta: ', port);
});
