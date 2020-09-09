const R = require('../node_modules/ramda')

const products = [
  { name: 'Jeans', price: 80, category: 'clothes', vat: 0.1 },
  { name: 'Cards', price: 5, category: 'games', vat: 0.2 },
  { name: 'iPhone', price: 649, category: 'electronics', vat: 0.2 },
  { name: 'Freakonomics', price: 30, category: 'books', vat: 0.1 },
]

// Returns a lens whose focus is the specified property
const pLens = R.lensProp('price')
const applyDiscount = R.curry((perc, amt) => amt - amt * (perc / 100))
const applyVat = R.curry((perc, price) => perc * price)

const adjustPrice = R.over(pLens, applyDiscount(50))
const adjustVat = R.over(pLens, applyVat(0.1))
const result = R.map(adjustVat, products)
console.log(result)

// v0 - Apply discount to all products
// const adjustPrice = R.over(pLens, applyDiscount(50))

// playing around with the R.curry

// const setPriceForVat = curriedVat(100)

// console.log(setPriceForVat(0.15))

// now loop through products

// const addFourNumbers = (a, b, c, d) => a + b + c + d

// const curriedAddFourNumbers = R.curry(addFourNumbers)
// const f = curriedAddFourNumbers(1, 2)
// const g = f(3)
// const h = g(4) //=> 10
// console.log(h)
