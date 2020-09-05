const R = require('../node_modules/ramda')

// The ecercise is to refactor to point free funtions using compose and converge

// What is point free? wikipedia =>
// Tacit programming (point-free programming) is a programming paradigm in which a
// function definition does not include information regarding its arguments,
// using combinators and function composition [...] instead of variables
// https://dzone.com/articles/real-world-uses-of-tacit-programming-part-1-of-2

const person = {
  id: 1,
  name: 'Joe',
}
const person1 = {
  name: 'Joe',
}
const generateUrl = (id) => `https://img.socialnetwork.com/avatar/${id}.png`

const getUrlFromPerson = R.compose(generateUrl, R.propOr('default', 'id'))
const getUpdatedPerson = R.converge(R.assoc('avatar'), [
  getUrlFromPerson,
  R.identity,
])

// const getUrlFromPerson = R.compose(generateUrl, R.propOr('default', 'id'))

// const getUpdatedPerson = (person) => {
//   // this will throw an arror when there is no id we will get undefined
//   // const url = generateUrl(person.id)
//   // console.log(url)

//   // it will be better if there an default image i.c no id
//   // now refactor
//   // propOr
//   // const url = generateUrl(R.propOr('default', 'id')(person))

//   // clean more up using compose
//   // const url = getUrlFromPerson(person)
//   // console.log(url)

//   // assoc assigns the property avatar to the object person
//   // and returns a shallow clone of an object so person stays immutable
//   return R.assoc('avatar', getUrlFromPerson(person), person)
// }

// getUpdatedPerson = (person) =>
//   R.assoc('avatar', getUrlFromPerson(person), person)

// const getUpdatedPerson = R.converge(R.assoc('avatar'), [
//   getUrlFromPerson,
//   R.identity,
// ])

const result = getUpdatedPerson(person)
console.log(person)
console.log(result)

// console.log(R)

//   document.getElementById('output').innerHTML = `${JSON.stringify(result)}`
