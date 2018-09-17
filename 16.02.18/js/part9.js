const logged = function(f) {
    return function() {
        console.log('atgs ->',arguments);
        return f.apply(this, arguments);
    }
}

let q = x => x * x;
q = logged(q);

console.log(q(6));