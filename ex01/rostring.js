'use strict'
function rostring(string){
    if (string.length > 0){
        let allValues = string.split(" ").filter((t)=> t.length > 0 )
        return (allValues.splice(1).join(" ") + " " + allValues[0]).trim()
    }else{
        return ""
    }
}

console.log(rostring("bat come home"));
 