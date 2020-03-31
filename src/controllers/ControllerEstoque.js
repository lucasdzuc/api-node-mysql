const database = require('../config/database');


module.exports = {


    // INSERE UM LOCAL DE ESTOQUE
    async insert(req, res){

        try {
            const { tipo_etoque, id_empresa_estoque_fk } = req.body;
            let datas = {
                tipo_etoque: tipo_etoque,
                id_empresa_estoque_fk: id_empresa_estoque_fk
            } 
            let response = await database.query(`INSERT INTO local_estoque SET ?`, [datas]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // ATUALIZA OS DADOS DO LOCAL DE ESTOQUE
    async update(req, res){
        try {
            const { tipo_etoque, id_empresa_estoque_fk } = req.body;
            let id = req.params.id;
            let datas = {
                tipo_etoque: tipo_etoque,
                id_empresa_estoque_fk: id_empresa_estoque_fk
            }
            let response = await database.query(`UPDATE local_estoque SET ? WHERE id_local_estoque = ?`, [datas, id]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // LISTA TODOS OS LOCAIS DE ESTOQUE
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM local_estoque');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA UM LOCAL DE ESTOQUE PELO ID
    async findById(req, res){
        
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM local_estoque WHERE id_local_estoque = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETA UM LOCAL DE ESTOQUE
    async delete(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM local_estoque WHERE id_local_estoque = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

