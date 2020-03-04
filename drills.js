const Array = require ("./array");

function main(){

    Array.SIZE_RATIO = 3;


    let arr = new Array();
    console.log(arr);
    arr.push(3);

    console.log(arr);
}

main();
