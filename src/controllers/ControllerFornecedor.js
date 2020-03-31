const database = require('../config/database');


module.exports = {

    // INSERE UM FORNECEDOR
    async insert(req, res){

        try {
            const { nome_fantasia, razao_social, cnpj, id_usuario_fornecedor_fk } = req.body;
            let datas = {
                nome_fantasia: nome_fantasia,
                razao_social: razao_social,
                cnpj: cnpj,
                id_usuario_fornecedor_fk: id_usuario_fornecedor_fk
            }
            let response = await database.query(`INSERT INTO fornecedor SET ?`, [datas]);
                res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // ATUALIZA OS DADOS DO FORNECEDOR
    async update(req, res){

        try {
            const { nome_fantasia, razao_social, cnpj, id_usuario_fornecedor_fk } = req.body;
            let id = req.params.id;
            let datas = {
                nome_fantasia: nome_fantasia,
                razao_social: razao_social,
                cnpj: cnpj,
                id_usuario_fornecedor_fk: id_usuario_fornecedor_fk
            }
            let response = await database.query(`UPDATE fornecedor SET ? WHERE id_fornecedor = ?`, [datas, id]);
                res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA TODOS OS FORNECEDORES
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM fornecedor');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA O FORNECEDOR PELO ID
    async findById(req, res){
        
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM fornecedor WHERE id_fornecedor = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETE O FORNECEDOR PELO ID
    async delete(req, res){
        
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM fornecedor WHERE id_fornecedor = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

