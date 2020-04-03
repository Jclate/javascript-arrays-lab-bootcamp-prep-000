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
  kitten2 = name;
  kitten3 = kittens.concat(name);
  return kitten3
}
// Add your functions and code here
