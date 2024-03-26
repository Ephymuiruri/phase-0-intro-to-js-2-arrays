// Write your solution here!
// create cats array
const cats =["Milo", "Otis", "Garfield"]
// destructively Add new Cat name
function destructivelyAppendCat(name) {
    cats.push(name)}
function destructivelyPrependCat (name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift() 
}
function appendCat (name){
   const newCats =[...cats]
   newCats.push(name)
   return newCats
}
function  prependCat(name){
    const newCats2=[...cats]
    newCats2.unshift(name)
    return newCats2
}
function removeLastCat(){
    const newCats3=[...cats]
    newCats3.pop()
    return newCats3
}
removeLastCat()
function removeFirstCat(){
   const newCats4=[...cats]
     newCats4.shift()
    return newCats4
}
