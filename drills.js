const Array = require ("./array");

function main(){

    Array.SIZE_RATIO = 3;
    let arr = new Array();
    console.log(arr);
    arr.push(3);
    arr.push(5);
    arr.push(5);
    arr.push(5);
    console.log(arr);
  /*   arr.push(19);
    arr.push(45); */
    
    /* arr.pop();
    arr.pop(); 
    
     console.log(arr); */
    //console.log(arr.get(0));//first item */
    /* arr.push("tauhida");
    console.log(arr);
    console.log(arr.get(0));//last item */
}


main();
