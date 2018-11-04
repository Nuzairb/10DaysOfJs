let myFavoriteNumber = 7
let myFavoriteNumbers =[
  9,2,9,5,7,4
]
let myWords = ["red", "orange", "yellow"]
let myPets = [
  {name: "Mewosalot", species: "cat"}, 
  {name: "Barkalot", species: "dog"}
]
myWords.push("green")
console.log(myWords)

// let myName = "Nuzair"
// console.log(myName.toUpperCase())

// let myNumber = 7.89
// console.log(myNumber.toFixed())

myWords.splice(0, 1)
console.log(myWords)

console.log(myFavoriteNumbers[2])
console.log(myPets[1].species)
