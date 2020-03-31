const express = require('express');
const app = express();


app.use(express.json());


const ControllerUsuario = require('./controllers/ControllerUsuario');
const ControllerFornecedor = require('./controllers/ControllerFornecedor');
const ControllerFuncionario = require('./controllers/ControllerFuncionario');
const ControllerEstoque = require('./controllers/ControllerEstoque');
const ControllerEmpresa = require('./controllers/ControllerEmpresa');
const ControllerSecao = require('./controllers/ControllerSecao');
const ControllerCategoria = require('./controllers/ControllerCategoria');
const ControllerMarca = require('./controllers/ControllerMarca');
const ControllerEndereco = require('./controllers/ControllerEndereco');
const ControllerProdutos = require('./controllers/ControllerProdutos');


// USUARIO
app.post('/usuario/insert', ControllerUsuario.insert);
app.put('/usuario/update/:id', ControllerUsuario.update);
app.get('/usuario', ControllerUsuario.findAll);
app.get('/usuario/:id', ControllerUsuario.findById);
app.delete('/usuario/:id', ControllerUsuario.delete);


//FORNECEDOR
app.post('/fornecedor/insert', ControllerFornecedor.insert);
app.put('/fornecedor/update/:id', ControllerFornecedor.update);
app.get('/fornecedor', ControllerFornecedor.findAll);
app.get('/fornecedor/:id', ControllerFornecedor.findById);
app.delete('/fornecedor/:id', ControllerFornecedor.delete);


//FUNCIONARIO
app.post('/funcionario/insert', ControllerFuncionario.insert);
app.put('/funcinario/update/:id', ControllerFuncionario.update);
app.get('/funcionario', ControllerFuncionario.findAll);
app.get('/funcionario/:id', ControllerFuncionario.findById);
app.delete('/funcionario/:id', ControllerFuncionario.delete);


//LOCAL DE ESTOQUE
app.post('/estoque/insert', ControllerEstoque.insert);
app.put('/estoque/update/:id', ControllerEstoque.update);
app.get('/estoque', ControllerEstoque.findAll);
app.get('/estoque/:id', ControllerEstoque.findById);
app.delete('/estoque/:id', ControllerEstoque.delete);


//EMPRESA
app.post('/empresa/insert', ControllerEmpresa.insert);
app.put('/empresa/update/:id', ControllerEmpresa.update);
app.get('/empresa', ControllerEmpresa.findAll);
app.get('/empresa/:id', ControllerEmpresa.findById);
app.delete('/empresa/:id', ControllerEmpresa.delete);


//SEÇÕES DO ESTOQUE
app.post('/secao/insert', ControllerSecao.insert);
app.put('/secao/update/:id', ControllerSecao.update);
app.get('/secao', ControllerSecao.findAll);
app.get('/secao/:id', ControllerSecao.delete);


//CATEGORIAS
app.post('/categoria/insert', ControllerCategoria.insert);
app.put('/categoria/update/:id', ControllerCategoria.update);
app.get('/categoria', ControllerCategoria.findAll);
app.get('/categoria/:id', ControllerCategoria.delete);


//MARCA
app.post('/marca/insert', ControllerMarca.insert);
app.put('/marca/update/:id', ControllerMarca.update);
app.get('/marca', ControllerMarca.findAll);
app.get('/marca/:id', ControllerMarca.delete);


//ENDEREÇO
app.post('/endereco/insert', ControllerEndereco.insert);
app.put('/endereco/update/:id', ControllerEndereco.update);
app.get('/endereco', ControllerEndereco.findAll);
app.get('/endereco/:id', ControllerEndereco.delete);


//PRODUTO
app.post('/produto/insert', ControllerProdutos.insert);
app.put('/produto/update/:id', ControllerProdutos.update);
app.get('/produto', ControllerProdutos.findAll);
app.get('/produto/:id', ControllerProdutos.findById);
app.delete('/produto/:id', ControllerProdutos.delete);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('API RUN');
})
