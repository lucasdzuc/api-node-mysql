const database = require('../config/database');


module.exports = {

    // INSERE UMA MARCA
    async insert(req, res){
        try {
            const { nome_marca } = req.body;
            let datas = {
                nome_marca: nome_marca
            }
            let response = await database.query(`INSERT INTO marca SET ?`, [datas]);
            res.json(response);

        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    //ATUALIZA OS DADOS DA MARCA
    async update(req, res){

        try {
            const { nome_marca } = req.body;
            let id = req.params.id;
            let datas = {
                nome_marca: nome_marca
            }
            let response = await database.query(`UPDATE marca SET ? WHERE id_marca = ?`, [datas, id]);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA TODAS AS MARCAS
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM marca');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA UMA MARCA POR ID
    async findById(req, res){
        
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM marca WHERE id_marca = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`); 
        }

    },

    // DELETA UMA MARCA POR ID
    async delete(req, res){
        
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM marca WHERE id_marca = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

