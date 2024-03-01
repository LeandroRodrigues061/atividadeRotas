const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor está ativo!")
})

app.get("/", function(req,res){
    console.log("Pagina principal!")
    res.send("Pagina principal!")
})

app.get("/Cadastrar", function(req,res){
    console.log("Cadastrar produto")
    res.send("Cadastro: " + req.params.produto)
})

app.get("/celular/:modelo/:ano/:marca", function(req,res){
    res.send("/Celular: " + req.params.modelo + "ano: " + req.params.ano + "marca: " + req.params.marca)
})

app.get("/Contato", function(req,res){
    console.log("Pagina de contato")
})

