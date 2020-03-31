const database = require('../config/database');


module.exports = {

    async insert(req, res){
        //protege todo codigo
        try{
            //desestrutura os campos que estão vindo do body
        const { usario, email, senha, nivel } = req.body;
            let datas = {
                "usario": usario,
                "email": email,
                "senha": senha,
                "nivel": nivel
        }
        let response = await database.query(`INSERT INTO usuario SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            // trata o error de forma mais sugestiva
            console.log(`O error gerado é: ${error}`);
        }
    },

    /*
    async insert(req, res){
        let datas = {
            "usario": req.body.usario,
            "email": req.body.email,
            "senha": req.body.senha,
            "nivel": req.body.nivel
        }
        try{
            let response = await database.query(`INSERT INTO usuario SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },
    */

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "usario": req.body.usario,
            "email": req.body.email,
            "senha": req.body.senha,
            "nivel": req.body.nivel
        }

        try{
            let response = await database.query(`UPDATE usuario SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM usuario');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM usuario WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM usuario WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

