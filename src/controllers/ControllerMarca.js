const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "nome_catnome_marcaegoria": req.body.nome_marca
        }

        try{
            let response = await database.query(`INSERT INTO marca SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "nome_marca": req.body.nome_marca
        }

        try{
            let response = await database.query(`UPDATE marca SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM marca');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM marca WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM marca WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

