const express = require ('express');

const holamundo = express()

holamundo.get ('/', (reg, res) => res.send ('Hola Mundo!'))

module.exports = holamundo