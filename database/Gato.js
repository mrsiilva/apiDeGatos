
const Sequelize = require("sequelize")
const conexao = require("./database")

const Gato = conexao.define('gatos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

//Gato.sync({force:false}).then(() => {
//
//})

module.exports = Gato