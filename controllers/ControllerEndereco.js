const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "rua": req.body.rua,
            "numero": req.body.nome_empresa,
            "bairro": req.body.bairro,
            "estado": req.body.estado,
            "cidade": req.body.cidade,
            "cep": req.body.cep,
            "id_fornecedor_endereco_fk": req.body.id_fornecedor_endereco_fk,
            "id_funcionario_endereco_fk": req.body.id_funcionario_endereco_fk,
            "id_local_estoque_endereco_fk": req.body.id_local_estoque_endereco_fk,
            "id_empresa_endereco_fk": req.body.id_empresa_endereco_fk
            
        }

        try{
            let response = await database.query(`INSERT INTO endereco SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "rua": req.body.rua,
            "numero": req.body.nome_empresa,
            "bairro": req.body.bairro,
            "estado": req.body.estado,
            "cidade": req.body.cidade,
            "cep": req.body.cep,
            "id_fornecedor_endereco_fk": req.body.id_fornecedor_endereco_fk,
            "id_funcionario_endereco_fk": req.body.id_funcionario_endereco_fk,
            "id_local_estoque_endereco_fk": req.body.id_local_estoque_endereco_fk,
            "id_empresa_endereco_fk": req.body.id_empresa_endereco_fk
        }

        try{
            let response = await database.query(`UPDATE endereco SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM endereco');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM endereco WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM endereco WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

