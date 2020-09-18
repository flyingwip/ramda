const R = require('../node_modules/ramda')

const person = {
  firstName: 'Fred',
  lastName: 'Flintstone',
}

// const flens = R.lens(R.prop('firstName'), R.assoc('firstName'))
const flens = R.lensProp('firstName')

// const result = R.view(flens, person)
// const result = R.set(flens, 'Wilma', person)

// const firstName = R.view(flens, person)
// const upperName = R.toUpper(firstName)
// const result = R.set(flens, upperName, person)

const result = R.over(flens, R.toUpper, person)

// console.log(person)
// console.log(result)

const xLens = R.lens(R.prop('x'), R.assoc('x'))

const obj = { x: 1, y: 2 }

const a = R.view(xLens, obj) //=> 1
const b = R.set(xLens, 4, obj) //=> {x: 4, y: 2}
const c = R.over(xLens, R.negate, obj) //=> {x: -1, y: 2}

console.log(obj)
console.log(a)
console.log(b)
console.log(c)
