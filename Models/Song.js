const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Song = sequelize.define('Song', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    writer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    totalListened: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Song;



