const User = require('./user')
// !!Reminder to require Product
// const Product = require(path name)

// Associations
Product.belongsToMany(User, {through: 'Product_Users'})
User.belongsToMany(Product, {through: 'User_Products'})

// Robot.belongsToMany(Project, { through: 'Robot_Projects' })
// Project.belongsToMany(Robot, { through: 'Robot_Projects'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User
  // !!Reminder to export Product
}
