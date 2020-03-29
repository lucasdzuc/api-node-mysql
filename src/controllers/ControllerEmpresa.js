const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "nome_empresa": req.body.nome_empresa
        }

        try{
            let response = await database.query(`INSERT INTO empresa SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "nome_empresa": req.body.nome_empresa
        }

        try{
            let response = await database.query(`UPDATE empresa SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM empresa');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM empresa WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM empresa WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

