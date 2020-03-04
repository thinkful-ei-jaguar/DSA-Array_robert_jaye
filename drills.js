const Array = require ("./array");

function main(){

    Array.SIZE_RATIO = 3;

    console.log("ok");
    let arr = new Array();
    console.log(arr);
    arr.push(3);
    /*the length is 1 and memory adress 1 */
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    /*the length is 6 and memory adress 15 i just pushed the numbers att the end using set*/
    console.log(arr);
    arr.pop();
    arr.pop();
    /*the length is 4 and memory adress 15 it just pops from the end using get and returns value*/
    console.log(arr);
    console.log(arr.get(0));//first item
    arr.push("tauhida");
    console.log(arr.get(4));//last item
    //resize just resizes the array
}


main();
