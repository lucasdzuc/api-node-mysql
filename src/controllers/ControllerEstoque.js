const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "tipo_etoque": req.body.tipo_etoque,
            "id_empresa_estoque_fk": req.body.id_empresa_estoque_fk
        }

        try{
            let response = await database.query(`INSERT INTO local_estoque SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "tipo_etoque": req.body.tipo_etoque,
            "id_empresa_estoque_fk": req.body.id_empresa_estoque_fk
        }

        try{
            let response = await database.query(`UPDATE local_estoque SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM local_estoque');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM local_estoque WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM local_estoque WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

