'use strict'
function my_split(string, charset)
{
    let ch = charset.split(" ").filter(el => el !=="")
    let v =[]
    if(charset[charset.length-1] == " ")
    {
         v = string.split(" ").map(n => v = n == charset.trim() ? n.split('') : n)
         return v.flat()
    }  
    else if(charset[0] == " ")
    {
        return string.replace(ch, ' ').split(' ')
    }
    else{
        let str = string.split(charset)
        let firstEl = str.shift().replace(/\s/g,"") 
        str.unshift(firstEl)
         return str
    }
}

console.log(my_split("abc def gh\t!", "def "));
// let g = []
// g = "def".split("e")
// g.push("e")
// console.log(g);
