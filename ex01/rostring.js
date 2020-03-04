function rostring(string){
    if (string.length > 0){
        allValues = string.split(" ").filter((t)=> t.length > 0 )
        return (allValues.splice(1).join(" ") + " " + allValues[0]).trim()
    }else{
        return ""
    }
}

console.log(rostring(""));
 