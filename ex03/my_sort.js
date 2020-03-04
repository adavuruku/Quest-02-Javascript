'use strict'
function my_sort(array,order){
    if (order == "asc")
        array.sort((a,b)=> a-b)
    else if (order == "desc")
        array.sort((a,b)=> a-b).reverse()
    return array
}

let a =[4, 7, 0, 3]
console.log(my_sort(a, "asc"));