const express = require("express");// Importando o express
const app = express(); // Iniciando o express

app.get("/",function(req,res){
    res.send("Bem vindo a rota home!")
})

app.get("/ola/:nome/:empresa",function(req, res){
    //REQ => DADOS ENVIADOS PELO USUÁRIO
    //RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>oi " + nome + " do " + empresa + "</h1>");
});

app.get("/blog/:artigo?",function(req,res){//parametro opcional(?)
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h3>Artigo: " + artigo + "<h3/>");
    }else{
        res.send("Bem vindo ao meu blog!");
    }
})

app.get("/canal/youtube",function(req,res){
    res.send("<h1>Bem vindo ao meu canal!<h1/>")
})


app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})