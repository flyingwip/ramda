const {
  identity,
  compose,
  fromPairs,
  map,
  split,
  tail,
} = require('../node_modules/ramda')

const querystring = '?page=2&pageSize=10&total=365'

// Step 1
// tail Returns all but the first element of the given list or string
// const parseQs = tail

// Step 2 and use compose to chain functions
// break apart the key/value pairs into strings => [ 'page=2', 'pageSize=10', 'total=365' ]
// const parseQs = compose(split('&'), tail)

// step 3
// take each one of those strings from key value pairs
// so that we can seperate key from value using map to iterate through the strings and
// split again each of those strings
//const parseQs = compose(map(split('=')), split('&'), tail)

// now convert the strings into objects. Ramba has the fromPairs function to do this
// Creates a new object from a list key-value pairs. [[k,v]] → {k: v}
// If a key appears in multiple pairs,
// the rightmost pair is included in the object
// => { page: '2', pageSize: '10', total: '365' }
const parseQs = compose(fromPairs, map(split('=')), split('&'), tail)

const result = parseQs(querystring)
console.log(result)
