let lecture=10;
let section=3;
let title="JavaScript";
// const course={
//     lecture:10,
//     section:3,
//     title:'Javascript',
//     notes:{
//         introduction:"Welcome to JS course"
//     },
//     enroll(){
//         console.log('you are successfully enrolled');

//     }
// }
// Create an another object

// const course2={
//     lecture:20,
//     section:4,
//     title:'Hello',
//     notes:{
//         introduction:"Welcome to JS course"
//     },
//     enroll(){
//         console.log('you are successfully enrolled');

//     }
// }

//Objects are dynamic 

//Factory Function
// function createCourse(title){
    // return {
    //     lecture:10,
    //     section:3,
    //     title:'Javascript',
    //     notes:{
    //         introduction:"Welcome to JS course"
    //     },
    //     enroll(){
    //         console.log('you are successfully enrolled');
    
    //     }
    // }
    // return course;
//     return {
//         title:title,
//         enroll(){
//             console.log('You are successfully enrolled');
//         }
//     }
// }
// const course=createCourse();
// course.enroll();



// course.enroll();
// console.log(course.title);
// console.log(course);
// course.price=999;
// console.log(course);


// Constructor function
// function Course(title){
//     this.title=title;
//     this.enroll=function(){
//         console.log("You are Successfully Enrolled");
//     }
// }
// const course= new Course('Javascript');
// delete course.title;
// course.checkEnrollment=function(){
//     console.log('Js Users are sharp');
// }
// course.enroll();
// console.log(course);
// console.log(course.constructor);


//Reference 

let obj={number:10};
let obj2=obj;
obj.number=15;
console.log(obj);
console.log(obj2);
const course={ 
    title: 'Javascript',
    enroll(){
        console.log('You are successfullyenrolled');
    }
}
// const course_1={...course};
// // ...(spread operator)
// course_1.title="c++";
// console.log(course_1);


// const course_1=Object.assign({},course);
// course_1.title="c++";
// console.log(course_1);


for(let key in course){
    console.log(key,course[key]);

}
const course_1={};

for(let key of Object.keys(course)){
// console.log(key,course[key]);
course_1[key]=course[key];


}