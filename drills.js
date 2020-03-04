const Memory = require ("./memory");

function main(){

    Memory.SIZE_RATIO = 3;


    let arr = new Memory();
    console.log(arr);
    arr.push(3);

    console.log(arr);
}

main();
