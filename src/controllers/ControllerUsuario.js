const database = require('../config/database');


module.exports = {

    //INSERIR USUARIO
    async insert(req, res){
        //protege todo codigo
        try{
        //desestrutura os campos que estão vindo do body
        const { usuario, email, senha, nivel } = req.body;
            let datas = {
                usuario: usuario,
                email: email,
                senha: senha,
                nivel: nivel
        }
        let response = await database.query(`INSERT INTO usuario SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            // trata o error de forma mais sugestiva
            console.log(`O error gerado é: ${error}`);
        }
    },
    
    // ATUALIZAR USUARIO
    async update(req, res){
        //protege todo codigo
        try {
            //desestrutura os campos que estão vindo do body
            const { usuario, email, senha } = req.body;
            let id = req.params.id;
            let datas = {
                usuario: usuario,
                email: email,
                senha: senha
            }
            
            let response = await database.query(`UPDATE usuario SET ? WHERE id_usuario = ?`, [datas, id]);
            res.json(response);

        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM usuario');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    async findById(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM usuario WHERE id_usuario = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETA UM USUÁRIO PELO ID
    async delete(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM usuario WHERE id_usuario = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

