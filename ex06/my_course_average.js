'use strict'
function my_courses_average(courses){
    let sumAll = 0, size = 0
    courses.forEach(element => {
        sumAll = Object.values(element).reduce((sum,k)=> sum +k,sumAll)
        size += Object.values(element).length
    });
    return sumAll/size
}

function calculate_statistics() {
   let class_csci101 = {
      "margot": 17,
      "june": 8,
      "colin": 14,
      "lewis": 9 
    }
   let class_csci102 = {
      "quentin": 16,
      "julie": 15,
      "mark": 8,
      "stephanie": 13
    }

    let class_csci103 = {
        "quentin": 1000,
        "julie": 20
      }
    let courses = [class_csci101, class_csci102, class_csci103];
    console.log("Average mark for the CSCI courses: "+ my_courses_average(courses));
  }

  calculate_statistics()