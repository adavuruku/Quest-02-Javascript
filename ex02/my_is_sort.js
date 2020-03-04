'use strict'
function my_is_sort(array){
    let newArr = [...array]
    newArr.sort((a,b)=> a-b)
    return (JSON.stringify(array) == JSON.stringify(newArr) || JSON.stringify(array) == JSON.stringify(newArr.reverse()))? true:false
}

let a =[4, 7, 0, 3]
console.log(my_is_sort(a));
 