const { Schema, model } = require('mongoose')

const db = {
  Animal: require('./Animal.js')(Schema, model)
}

module.exports = db
