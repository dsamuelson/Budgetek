const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Income extends Model {};

Income.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pay: {
            type: DataTypes.DECIMAL(20,2),
            defaultValue: "00.00",
            validate: {
                isNumeric: true
            }
        },
        frequency: {
            type: DataTypes.STRING,
            defaultValue: "once",
            allowNull: false
        },
        is_primary: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'income'
    }
);

module.exports = Income;