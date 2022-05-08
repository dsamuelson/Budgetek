const sequelize = require('../config/connection')
const { User } = require('../models')

// used only for testing to seed users

const userdata = [
    {
        username: 'alesmonde0',
        email: 'ales@monde.com',
        password: 'password123',
    },
    {
        username: 'jwilloughway1',
        email: 'jwill@way.com',
        password: 'password123',
    },
    {
        username: 'iboddam2',
        email: 'ibod@dam.com',
        password: 'password123',
    },
    {
        username: 'dstanmer3',
        email: 'dstan@mer.com',
        password: 'password123',
    },
    {
        username: 'djiri4',
        email: 'djiri@four.com',
        password: 'password123',
    },
    {
        username: 'msprague5',
        email: 'ms@prague.com',
        password: 'password123',
    },
    {
        username: 'mpergens6',
        email: 'mper@gens.com',
        password: 'password123',
    },
    {
        username: 'tpenniell7',
        email: 'tpen@niell.com',
        password: 'password123',
    },
    {
        username: 'msabbins8',
        email: 'msab@bins.com',
        password: 'password123',
    },
    {
        username: 'jmacarthur9',
        email: 'jmac@arthur.com',
        password: 'password123',
    },
]

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true })

module.exports = seedUsers
