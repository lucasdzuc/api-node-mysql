const database = require('../config/database');


module.exports = {
    async insert(req, res){
        let datas = {
            "codigo": req.body.codigo,
            "data_validade": req.body.data_validade,
            "nome_produto": req.body.nome_produto,
            "valor": req.body.valor,
            "lucro": req.body.lucro,
            "valor_venda": req.body.valor_venda,
            "icms": req.body.icms,
            "sub_tributario": req.body.sub_tributario,
            "cst_nfe": req.body.cst_nfe,
            "ncm_nfe": req.body.ncm_nfe,
            "unidade_medida": req.body.unidade_medida,
            "origem": req.body.origem,
            "codigo_barras": req.body.codigo_barras
               
        }

        try{
            let response = await database.query(`INSERT INTO produto SET ?`, [datas]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }
    },

    async update(req, res){
        let id = req.params.id;

        let datas = {
            "nome": req.body.codigo,
            "email": req.body.data_validade,
            "nome": req.body.nome,
            "valor": req.body.valor,
            "lucro": req.body.lucro,
            "valor_venda": req.body.valor_venda,
            "icms": req.body.icms,
            "sub_tributario": req.body.sub_tributario,
            "cst_nfe": req.body.cst_nfe,
            "ncm_nfe": req.body.ncm_nfe,
            "unidade_medida": req.body.unidade_medida,
            "origem": req.body.origem,
            "codigo_barrass": req.body.codigo_barras,
            "marca_fk": req.body.marca_fk,
            "categoria_fk": req.body.categoria_fk,
        }

        try{
            let response = await database.query(`UPDATE produto SET ? WHERE id = ?`, [datas, id]);
            res.json(response);
        }catch (error) {
            console.log(error);
        }

    },
    async findAll(req, res){
        try {
            let response = await database.query('SELECT * FROM produto');
            res.json(response[0]);
        } catch (error) {
            console.log(erro);
        }
    },
    async findById(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`SELECT * FROM produto WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            
        }

    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await database.query(`DELETE FROM produto WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error)
        }
    }
}

