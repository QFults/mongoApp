const { Animal } = require('../models')

module.exports = app => {
  app.get('/animals', (req, res) => {
    Animal.find({}, (e, animals) => {
      if (e) throw e
      res.json(animals)
    })
  })
  app.get('/animals/:id', (req, res) => {
    Animal.findById(req.params.id, (e, animal) => {
      if (e) throw e
      res.json(animal)
    })
  })
  app.post('/animals', (req, res) => {
    Animal.create(req.body, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
  app.put('/animals/:id', (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
  app.delete('/animals/:id', (req, res) => {
    Animal.findByIdAndDelete(req.params.id, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
}
