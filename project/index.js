const R = require('../node_modules/ramda')

// Select a Subset of Properties from a Collection of Objects in Ramda

const products = [
  { name: 'jeans', price: 49, category: 'clothes' },
  { name: 'xbox', price: 249, category: 'games' },
  { name: 'Hoodie', price: 20, category: 'clothes' },
  { name: 'iphone', price: 500, category: 'electronics' },
  { name: 'speakers', price: 55, category: 'electronics' },
  { name: 'sox', price: 10, category: 'clothes' },
  { name: 'shorts', price: 78, category: 'clothes' },
]

// const result = products

// vanilla way of extracting is mapping
// const result = products.map((p) => ({ name: p.name, price: p.price }))

// small refactoring using ramda pick function will make it less verbose
// const result = products.map((p) => R.pick(['name', 'price'], p))

// since ramda's functions are curried we can use pick without the second parameter
// const result = products.map(R.pick(['name', 'price']))

// more refactoring
// const nameAndPrice = R.map(R.pick(['name', 'price']))
// const result = nameAndPrice(products)

// above function is so common ramda has the project function
// so it is the merge of map and pick
// [k] → [{k: v}] → [{k: v}]
const nameAndPrice = R.project(['name', 'price'])
const result = nameAndPrice(products)

console.log(result)
