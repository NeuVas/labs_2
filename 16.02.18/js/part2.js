//FIRST
(function() {console.log('IIFE 1')})()
//SECOND
console.log((f => f())(() => 'IIFE 2'))