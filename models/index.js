const Post = require('./Post')
const User = require('./User')
const Comment = require('./Comment')
const Expense = require('./Expense')
const Income = require('./Income')

//associations

User.hasMany(Post, {
    foreignKey: 'user_id',
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL',
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
})

User.hasMany(Expense, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
})

User.hasMany(Income, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
})

Income.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

Expense.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

module.exports = { User, Post, Comment, Income, Expense }
