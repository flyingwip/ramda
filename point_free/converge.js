// https://ramdajs.com/docs/#converge
const R = require('../node_modules/ramda')

// translation of converge => convergeren, samenlopen, op één punt samenkomen

// Accepts a converging function and a list of branching functions and returns a new function. (documentation)
fn = R.converge(console.log, [() => 1, () => 2, () => 3])
// console.log is the converging function,
// and the array of functions that return 1, 2, 3 is the list of branching functions.

fn()

// now with a parameter as a point free (tacit programming)
fnDeluxe = R.converge(console.log, [(p) => p * 2, (p) => p * 3, (p) => p * 4])

fnDeluxe(2)
