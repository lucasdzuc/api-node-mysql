const database = require('../config/database');


module.exports = {

    // INSERE UM FUNCIONÁRIO
    async insert(req, res){

        try {
            const { nome, cpf, vinculo, cargo, id_usuario_funcionario_fk } = req.body;
            let datas = {
                nome: nome,
                cpf: cpf,
                vinculo: vinculo,
                cargo: cargo,
                id_usuario_funcionario_fk: id_usuario_funcionario_fk
            }
            let response = await database.query(`INSERT INTO funcionario SET ?`, [datas]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // ATUALIZA OS DADOS DO FUNCIONÁRIO
    async update(req, res){
        try {
            const { nome, cpf, vinculo, cargo, id_usuario_funcionario_fk } = req.body;
            let id = req.params.id;
            let datas = {
                nome: nome,
                cpf: cpf,
                vinculo: vinculo,
                cargo: cargo,
                id_usuario_funcionario_fk: id_usuario_funcionario_fk
            }
            let response = await database.query(`UPDATE funcionario SET ? WHERE id_funcionario = ?`, [datas, id]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA TODOS OS FUNCIONÁRIOS
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM funcionario');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA O FUNCIONÁRIO PELO ID
    async findById(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM funcionario WHERE id_funcionario = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETA UM FUNCIONÁRIO PELO ID
    async delete(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM funcionario WHERE id_funcionario = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

