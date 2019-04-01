/**
* randomInt:
* Returns a random positive integer from min to max
* @Parameters: min - the smallest possible number, max - largest possible number
* @Return: Int
* @Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/* This example shows how to get a random number from 1 to 10. */

// Check the console to see the result.
// console.log('Random Number', example)
//Samantha's work
const domino = []


for(let f = 0; f < 101; f++) {
    const example = randomInt(0, 6)
const $example = randomInt(1, 6)
domino.push(`<div class="domino">`)
domino.push(` <div class="dots dots-${example}">`) 
for(let i = 0; i < example; i++) {
domino.push(`<div class="dot"></div>`) 
}   
domino.push(`</div>`)
domino.push(` <div class="dots dots-${$example}">`) 
for(let j = 0; j < $example; j++) {
domino.push(`<div class="dot"></div>`) 
}   
domino.push(`</div>`)
domino.push(`</div>`) }
const $dominoes = document.getElementById('dominoes')
$dominoes.innerHTML = domino.join('')