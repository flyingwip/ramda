const R = require('../node_modules/ramda')
const _ = require('../node_modules/lodash')

const products = [
  { id: 1, name: 'Jeans', price: 80, category: 'clothes', stock: 100 },
  { id: 2, name: 'Hoodie', price: 50, category: 'clothes', stock: 20 },
  { id: 3, name: 'Sneakers', price: 120, category: 'clothes', stock: 30 },
  { id: 4, name: 'Cards', price: 35, category: 'games', stock: 10 },
  { id: 5, name: 'iPhone', price: 649, category: 'electronics', stock: 5 },
  { id: 6, name: 'Sauce Pan', price: 100, category: 'housewares', stock: 200 },
]

// console.log(products, 'id')
// console.log(_.mapKeys(products, 'id'))

// the ramda version
// helpers
