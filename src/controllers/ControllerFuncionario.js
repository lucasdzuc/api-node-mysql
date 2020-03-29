const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "nome": req.body.nome,
            "cpf": req.body.cpf,
            "vinculo": req.body.vinculo,
            "cargo": req.body.cargo,
            "vinculo": req.body.vinculo,
            "id_usuario_funcionario_fk": req.body.id_usuario_funcionario_fk
        }

        try{
            let response = await database.query(`INSERT INTO funcionario SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "nome": req.body.nome,
            "cpf": req.body.cpf,
            "vinculo": req.body.vinculo,
            "cargo": req.body.cargo,
            "vinculo": req.body.vinculo,
            "id_usuario_funcionario_fk": req.body.id_usuario_funcionario_fk
        }

        try{
            let response = await database.query(`UPDATE funcionario SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM funcionario');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM funcionario WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM funcionario WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

