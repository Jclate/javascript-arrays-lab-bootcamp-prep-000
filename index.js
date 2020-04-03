var kittens = ["Milo", "Otis", "Garfield"] //define your array here
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(kitten) {
  kittens.pop(kitten);
}

function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten)
}

function appendKitten(name) {
  kittens.concat(name);
  return kittens
}
// Add your functions and code here
