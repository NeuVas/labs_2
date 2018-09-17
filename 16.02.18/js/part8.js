console.time('1');
setTimeout(
    () => {
        console.timeEnd('1');
        console.time('2');
        setTimeout(
        () => {
            console.timeEnd('2');
            console.time('3');
            setTimeout(
            () => {
                console.timeEnd('3');
            },  10000)
        }, 7000)
    }, 3000);