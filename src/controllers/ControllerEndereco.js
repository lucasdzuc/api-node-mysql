const database = require('../config/database');


module.exports = {

    // INSERE UM ENDEREÇO
    async insert(req, res){
        try {
            const { rua, numero, bairro, estado, cidade, cep, id_fornecedor_endereco_fk, id_funcionario_endereco_fk, id_local_estoque_endereco_fk, id_empresa_endereco_fk } = req.body;
            let datas = {
                rua: rua,
                numero: numero,
                bairro: bairro,
                estado: estado,
                cidade: cidade,
                cep: cep,
                id_fornecedor_endereco_fk: id_fornecedor_endereco_fk,
                id_funcionario_endereco_fk: id_funcionario_endereco_fk,
                id_local_estoque_endereco_fk: id_local_estoque_endereco_fk,
                id_empresa_endereco_fk: id_empresa_endereco_fk
            }
            let response = await database.query(`INSERT INTO endereco SET ?`, [datas]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // ATUALIZA O ENDEREÇO
    async update(req, res){
        try {
            const { rua, numero, bairro, estado, cidade, cep, id_fornecedor_endereco_fk, id_funcionario_endereco_fk, id_local_estoque_endereco_fk, id_empresa_endereco_fk } = req.body;
            let id = req.params.id;
            let datas = {
                rua: rua,
                    numero: numero,
                    bairro: bairro,
                    estado: estado,
                    cidade: cidade,
                    cep: cep,
                    id_fornecedor_endereco_fk: id_fornecedor_endereco_fk,
                    id_funcionario_endereco_fk: id_funcionario_endereco_fk,
                    id_local_estoque_endereco_fk: id_local_estoque_endereco_fk,
                    id_empresa_endereco_fk: id_empresa_endereco_fk
            }
            let response = await database.query(`UPDATE endereco SET ? WHERE id_endereco = ?`, [datas, id]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // LISTA TODOS OS ENDEREÇOS
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM endereco');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA UM ENDEREÇO PELO ID 
    async findById(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM endereco WHERE id_endereco = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETE UM ENDEREÇO PELO ID
    async delete(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM endereco WHERE id_endereco = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

