module.exports = function(app) {
    app.get("/produtos", function(req, res){
        
        var connection = app.infra.connectionFactory();     //Devido a ter configurado a carga de arquivos através das pastas
                                                            //(express-load) é possível acessar um objeto de um arquivo através
                                                            //do caminho de pastas deste arquivo

        var produtosBanco = app.infra.produtosBanco;

        // connection.query('select * from livros', function(err, results){
        //     res.render("produtos/lista", {lista: results});
        // });

        produtosBanco.lista(connection, function(err, results){
            res.render("produtos/lista", {lista: results});
        });

        connection.end();
        
    });
}