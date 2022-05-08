const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Expense extends Model {}

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cost: {
            type: DataTypes.DECIMAL(20, 2),
            defaultValue: '00.00',
            validate: {
                isNumeric: true,
            },
        },
        frequency: {
            type: DataTypes.STRING,
            defaultValue: 'once',
            allowNull: false,
        },
        is_vital: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'expense',
    }
)

module.exports = Expense
