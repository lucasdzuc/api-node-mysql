const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "nome_categoria": req.body.nome_categoria,
            "id_secao_categoria_fk": req.body.id_secao_categoria_fk
        }

        try{
            let response = await database.query(`INSERT INTO categoria SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "nome_categoria": req.body.nome_categoria,
            "id_secao_categoria_fk": req.body.id_secao_categoria_fk
        }

        try{
            let response = await database.query(`UPDATE categoria SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM categoria');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM categoria WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM categoria WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

