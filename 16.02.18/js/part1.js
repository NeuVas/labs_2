//FIRST
function myFunction() {
    console.log('without brackets');
}
//SECOND
var object = {
    get myFunction2() {
        console.log('without brackets');
    }
}
object.myFunction2;