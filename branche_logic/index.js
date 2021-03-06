const R = require('../node_modules/ramda')

const products = [
  { name: 'Jeans', price: 80, category: 'clothes' },
  { name: 'Cards', price: 5, category: 'games' },
  { name: 'iPhone', price: 649, category: 'electronics' },
  { name: 'Freakonomics', price: 30, category: 'books' },
]

// Returns a lens whose focus is the specified property
const pLens = R.lensProp('price')
const applyDiscount = R.curry((perc, amt) => amt - amt * (perc / 100))

// v0 - Apply discount to all products
// const adjustPrice = R.over(pLens, applyDiscount(50))

// Predicate functions are functions that return a single TRUE or FALSE
// this is the first argument of the ramda ifElse
// v1 - ifElse to apply 2 different discounts
// const adjustPrice = R.ifElse(
//   R.propEq('category', 'clothes'),
//   R.over(pLens, applyDiscount(50)),
//   R.over(pLens, applyDiscount(10))
// )

// v2 - ifElse to apply only one discount
// const adjustPrice = R.ifElse(
//   R.propEq('category', 'clothes'),
//   R.over(pLens, applyDiscount(50)),
//   R.identity
// )

// even more succinct
// v3 - Use when for a single condition
// const adjustPrice = R.when(
//   R.propEq('category', 'clothes'),
//   R.over(pLens, applyDiscount(50))
// )

// v4 - use unless for a single condition (opposite behavior of when)
// const adjustPrice = R.unless(
//   R.propEq('category', 'clothes'),
//   R.over(pLens, applyDiscount(50))
// )

// v5 - Handle multiple conditions with cond
// const adjustPrice = R.cond([
//   [R.propEq('category', 'clothes'), R.over(pLens, applyDiscount(50))],
//   [R.propEq('category', 'electronics'), R.over(pLens, applyDiscount(10))],
//   [R.propEq('category', 'books'), R.over(pLens, applyDiscount(100))],
//   [R.T, R.identity],
// ])

// const result = R.map(adjustPrice, products)
// console.log(result)
