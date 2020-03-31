const database = require('../config/database');


module.exports = {

    // INSERE UM PRODUTO
    async insert(req, res){
         //protege todo codigo
        try {
            //desestrutura os campos que estão vindo do body
            const { codigo,data_validade,nome_produto, valor,lucro,valor_venda,icms,sub_tributario,cst_nfe,ncm_nfe, unidade_medida, origem, codigo_barras } = req.body;

                let datas = {
                    codigo: codigo,
                    data_validade: data_validade,
                    nome_produto: nome_produto,
                    valor: valor,
                    lucro: lucro,
                    valor_venda: valor_venda,
                    icms: icms,
                    sub_tributario: sub_tributario,
                    cst_nfe: cst_nfe,
                    ncm_nfe: ncm_nfe,
                    unidade_medida: unidade_medida,
                    origem: origem,
                    codigo_barras
                }

                let response = await database.query(`INSERT INTO produto SET ?`, [datas])
                    res.json(response);
        } catch (error) {
            // trata o error de forma mais sugestiva
            console.log(`O error gerado é: ${error}`);
        }
    },

    // ATUALIZA OS DADOS DO PRODUTO
    async update(req, res){

        try {
            //desestrutura os campos que estão vindo do body
            const { codigo,data_validade,nome_produto, valor,lucro,valor_venda,icms,sub_tributario,cst_nfe,ncm_nfe, unidade_medida, origem, codigo_barras } = req.body;
            let id = req.params.id;
            let datas = {
                codigo: codigo,
                data_validade: data_validade,
                nome_produto: nome_produto,
                valor: valor,
                lucro: lucro,
                valor_venda: valor_venda,
                icms: icms,
                sub_tributario: sub_tributario,
                cst_nfe: cst_nfe,
                ncm_nfe: ncm_nfe,
                unidade_medida: unidade_medida,
                origem: origem,
                codigo_barras
            }

            let response = await database.query(`UPDATE produto SET ? WHERE id_produto = ?`, [datas, id]);
            res.json(response);

        } catch (error) {
            // trata o error de forma mais sugestiva
            console.log(`O error gerado é: ${error}`);
        }

    },

    // LISTA TODOS OS PRODUTOS
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM produto');
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    },

    // LISTA UM PRODUTO PELO ID
    async findById(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`SELECT * FROM produto WHERE id_produto = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }

    },

    // DELETA UM PRODUTO PELO ID
    async delete(req, res){
        try {
            let id = req.params.id;
            let response = await database.query(`DELETE FROM produto WHERE id_produto = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(`O error gerado é: ${error}`);
        }
    }
}

