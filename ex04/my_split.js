function my_split(string, charset){
    newst = []
    prep = []
    f = charset.split("")
    console.log(f);
    
    f.forEach(element => {
        prep = string.split(element)
        if(newst.length <= 0){
            newst.push(prep)
        }else{
            newst.forEach(el=>{
                if (el.includes(element)){
                    prep = el.split(i)
                    newst.slice(el)
                    newst.push(prep)
                }   
            })
        }
        console.log(newst, element);
    });

    return newst.flat()
}

console.log(my_split("abc def gh\t!", "\t "));
