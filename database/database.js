const Sequelize = require("sequelize")

const conexao = new Sequelize('cats', 'root', 'muitos27que', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conexao