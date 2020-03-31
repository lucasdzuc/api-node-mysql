const database = require('../config/database');


module.exports = {

    // INSERE UMA EMPRESA
    async insert(req, res){
        try {
            const { nome_empresa } = req.bory;
            let datas = {
                nome_empresa: nome_empresa
            }
            let response = await database.query(`INSERT INTO empresa SET ?`, [datas]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // ATUALIZA OS DADOS DA EMPRESA
    async update(req, res){
        try {
            const { nome_empresa } = req.body;
            let id = req.params.id;
            let datas = {
                nome_empresa: nome_empresa
            }
            let response = await database.query(`UPDATE empresa SET ? WHERE id_empresa = ?`, [datas, id]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // LISTA TODAS AS EMPRESAS
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM empresa');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA UMA EMPRESA PELO ID
    async findById(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM empresa WHERE id_empresa = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETA OS DADOS DA EMPRESA
    async delete(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM empresa WHERE id_empresa = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

