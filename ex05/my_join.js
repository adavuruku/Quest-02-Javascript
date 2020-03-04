function my_join(string, charset){
    return string.map(x => x+=charset.replace("$\","$\\")).join('')
}

console.log(my_join(["abc", "def", "gh"], "\n"));
