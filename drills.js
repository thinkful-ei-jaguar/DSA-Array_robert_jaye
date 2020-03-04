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


function lessthan5(array) {
  let result = []
  for(let i = 0; i < array.length; i++){
    if(array[i] > 5) {
      result.push(array[i])
    }
  }
  return result;
}

//console.log(lessthan5([7,7,7,8,8,1,2,3,6]))

function product(array){
  let result = [];
  for(let i = 0; i < array.length; i++){
    //get product
    let product = 0;
    let smol; // = every otheer number in array except current index
    //iterate through smol array
      product *= smol[i]
    //save product
    result.push(product)
  }
}
//console.log(product([1, 3, 9, 4]))