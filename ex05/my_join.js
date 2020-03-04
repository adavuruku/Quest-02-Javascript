'use strict'
function my_join(string, charset){
    return [string.join(charset)]
}

console.log(my_join(["abc", "def", "gh","!"], ""));
