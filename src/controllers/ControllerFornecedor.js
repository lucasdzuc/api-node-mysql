const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "nome_fantasia": req.body.nome_fantasia,
            "razao_social": req.body.razao_social,
            "cnpj": req.body.cnpj,
            "id_usuario_fornecedor_fk": req.body.id_usuario_fornecedor_fk
        }

        try{
            let response = await database.query(`INSERT INTO fornecedor SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "nome_fantasia": req.body.nome_fantasia,
            "razao_social": req.body.razao_social,
            "cnpj": req.body.cnpj,
            "id_usuario_fornecedor_fk": req.body.id_usuario_fornecedor_fk
        }

        try{
            let response = await database.query(`UPDATE fornecedor SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM fornecedor');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM fornecedor WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM fornecedor WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

