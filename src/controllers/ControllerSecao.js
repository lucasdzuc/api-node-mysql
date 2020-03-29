const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "nome_secao": req.body.nome_secao,
            "id_local_estoque_secao_fk": req.body.id_local_estoque_secao_fk
        }

        try{
            let response = await database.query(`INSERT INTO secao SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "nome_secao": req.body.nome_secao,
            "id_local_estoque_secao_fk": req.body.id_local_estoque_secao_fk
        }

        try{
            let response = await database.query(`UPDATE secao SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM secao');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM secao WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM secao WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

