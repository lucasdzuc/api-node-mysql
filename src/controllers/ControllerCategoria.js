const database = require('../config/database');


module.exports = {

    // INSERE UMA CATEGORIA
    async insert(req, res){

        try {
            const { nome_categoria, id_secao_categoria_fk } = req.body;
            let datas = {
                nome_categoria: nome_categoria,
                id_secao_categoria_fk: id_secao_categoria_fk
            }
            let response = await database.query(`INSERT INTO categoria SET ?`, [datas]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // ATUALIZA OS DADOS DA CATEGORIA PELO ID
    async update(req, res){
        try {
            const { nome_categoria, id_secao_categoria_fk } = req.body;
            let id = req.params.id;
            let datas = {
                nome_categoria: nome_categoria,
                id_secao_categoria_fk: id_secao_categoria_fk
            }
            let response = await database.query(`UPDATE categoria SET ? WHERE id_categoria = ?`, [datas, id]);
            res.json(response);

        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA TODAS AS CATEGORIAS
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM categoria');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA UMA CATEGORIA PELO ID
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM categoria WHERE id_categoria = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETA OS DADOS DA CATEGORIA PELO ID
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM categoria WHERE id_categoria = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

