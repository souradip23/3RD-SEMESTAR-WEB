var student = {
    firstName:"Abc",
    lastName:"Xyz",
    age:20,
    grade:[20,30,40,20,10],
    fullName:function(){
        return this.firstName+this.lastName;
    }
}



// console.log(student.fullName());
// delete student.lastName;
// console.log(student)

// console.log(student.hasOwnProperty('ae'));
// for(key in student){
//     console.log(key+":"+student[key]);
// }