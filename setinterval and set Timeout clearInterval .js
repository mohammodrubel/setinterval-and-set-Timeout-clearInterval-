console.log('hello world')
console.log('hello programmer')
setTimeout( () =>{
    console.log('this is timeout')
},5000)
console.log('Hello ....')
console.log('today is saturday')



console.log('hello world')
console.log('hello programmer')
setInterval(() => {
    console.log('I AM INTERVAL')
}, 5000);
console.log('Hello ....')
console.log('today is saturday')



console.log('hello world')
console.log('hello programmer')
let seconds =0
const timeId = setInterval(() => {
    seconds++;
    console.log(seconds)
    if(seconds >20){
        clearInterval(timeId)
    }

}, 1000);

console.log('Hello ....')
console.log('today is saturday')





console.log('hello world')
console.log('hello programmer')
let seconds =0
const timeId = setInterval(() => {
    // seconds++;
    console.log(seconds++)
    if(seconds >20){
        clearInterval(timeId)
    }

}, 1000);

console.log('Hello ....')
console.log('today is saturday')

