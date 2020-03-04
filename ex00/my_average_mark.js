function my_average_mark(class_results){
    let values = Object.values(class_results);
    return values.length > 0 ? values.reduce((k,l)=>k+l)/values.length : (0.0).toFixed(1);
}
class_results =    {
    "Quentin": 1,
    "Fred": 1,
    "Julia": 18,
    "stephanie": 13
    }
console.log(my_average_mark(class_results));
 