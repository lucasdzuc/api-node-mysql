const database = require('../config/database');


module.exports = {

    // INSERIR SEÇÃO
    async insert(req, res){
         //protege todo codigo
        try {
            //desestrutura os campos que estão vindo do body
            const { nome_secao, id_local_estoque_secao_fk } = req.body;

            let datas = {
                nome_secao: nome_secao,
                id_local_estoque_secao_fk: id_local_estoque_secao_fk
            }

            let response = await database.query(`INSERT INTO secao SET ?`, [datas]);
                res.json(response);

        } catch (error) {
            // trata o error de forma mais sugestiva
            console.log(`O error gerado é: ${error}`);
        }

    },

    // ATUALIZAR SEÇÃO
    async update(req, res){
        try {
            //desestrutura os campos que estão vindo do body
            const { nome_secao, id_local_estoque_secao_fk } = req.body;
            let id = req.params.id;
            let datas = {
                nome_secao: nome_secao,
                id_local_estoque_secao_fk: id_local_estoque_secao_fk
            }
            let response = await database.query(`UPDATE secao SET ? WHERE id_secao = ?`, [datas, id]);
            res.json(response);
            
        } catch (error) {
            // trata o error de forma mais sugestiva
            console.log(`O error gerado é: ${error}`);
        }

    },

    // LISTAR TODAS AS SEÇÕES
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM secao');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTAR A SEÇÃO PELO ID
    async findById(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM secao WHERE id_secao = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETAR UMA SEÇÃO PELO ID
    async delete(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM secao WHERE id_secao = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

