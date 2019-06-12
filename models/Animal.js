module.exports = (Schema, model) => model('Animal', new Schema({
  name: String,
  age: Number,
  type: String
}))