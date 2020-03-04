'use strict'
function run_robot(instructions){
    let command = instructions.split("")
    let res={'x':0 , 'y':0, 'bearing':"North"}
    let post = res['bearing'];
    command.forEach(element => {
        if (element=="R" && element!="A")
            post = post=="North"? "East":post=="East"? "South":post=="South"? "West":"North"
        else if (element=="L" && element!="A")
            post = post=="North"? "West":post=="West"? "South":post=="South"? "East":"North"
        else{
            if (post =="West" || post=="East"){
                res['x'] = post=="West"? res['x']-=1:res['x']+=1
            }else{
                res['y'] = post=="North"? res['y']+=1:res['y']-=1 
            }
        }
        res['bearing'] = post;
    });
    return res
}

console.log(run_robot("RAALALL"));
