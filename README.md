<h1>Implementação API para Despensa<h1>

- O repositório possui a API implementada e os scripts de criação do banco de dados MySQL.
- Repositório destinado ao armazenado de uma API desenvolvida em Node.js por estudo com a proposta de gerenciar uma aplicação de uma despensa.
- No desenvolvimento foram utilizadas as bibliotecas Express, Cors, Nodemon e Sequelize, e para banco foi utilizado o MySQL.

<h3>Subindo a API</h3>

- Inicialmente para colocar em execução a API é necessário editar o arquivo ```src/database/config.js```, nele estão as configurações de conexão ao banco de dados.
  
  ```javascript
  database: 'baseDespensa',
  user: 'user',
  password: '123456'
  ```
No trecho acima estão as entradas que necessitam de configuração de acordo com o ambiente, sendo que o database informado necessita ser criado previamente. Os campos user e password são as credenciais de acesso ao banco.<br/>
- Para criação do banco de dados é possível utilizar os scripts incluídos na pasta `Banco de Dados`. A pasta possui scripts do S.1 ao S.5.
> Obs¹: para facilitar é interessante abrir um terminal para acessar o BD dentro do diretório onde estão os scripts.
- Após estar logado no ambiente(MySQL) basta utilizar o comando: source "script a executar".
- Importante: O script S.1.sql é o de criação do BD e das tabelas, de maneira que deve ser o primeiro a ser executado, seguido do script S.2.sql que é o responsável por popular as tabelas.
Com as tabelas criadas podemos colocar a API em execução através do comando: `npm run dev`.<br/>
> Obs²: A API está definida para responder as solicitações na porta 3001, ou seja, localhost:3001 ou 127.0.0.1:3001, a porta pode ser editada dentro do arquivo ´server.js´.<br/>
- O repositório também possui em sua raiz um arquivo exportado dos testes realizados no Insomnia, de maneira que é necessário apenas importar este arquivo para facilitar os testes as rotas. 
