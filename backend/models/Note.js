const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Note = sequelize.define('Note', {
    note_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
}, {
    tableName: "notes",
    timestamps: false,
})
module.exports = Note;