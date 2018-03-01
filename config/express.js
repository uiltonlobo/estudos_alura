var express = require("express");
var load = require("express-load");

module.exports = function () {
    var app = express();

    app.set("view engine", "ejs");
    app.set("views", "./app/views")

    load("routes", {cwd : "app"})   //Carregando rotas da pasta de rotas (routes) e a pasta 'infra'
        .then("infra")            //O JSON cwd: "app" especifica a partir de qual pasta ('app') devo encontrar 
        .into(app);                //as pastas especificadas antes (routes e infra, neste caso) 

    return app;
}