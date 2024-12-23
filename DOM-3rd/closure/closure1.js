// function main(){
//     const name="souradip pramanik"
//     function saymyname(){
//         console.log(name);
//     }
//     saymyname();


// }

// main();
 


// function adder(num){

//     function add(b){
//         console.log(num+b);
//     }

//     return add;

// }
// const addto5=adder(5);
// const addto10=adder(10);
// addto5(2);
// addto5(3);
// addto10(56);
// addto10(70);



const myname=document.getElementById("my-name")
const buton=document.getElementById('my-btn')

// function makeTextSizer(size){
//     function changeSize(){
//         myname.style.fontSize=`${size}px`;
//     }
//     return changeSize;

// }
// const size12=makeTextSizer(12);
// const size20=makeTextSizer(20);
// const size52=makeTextSizer(52);
// const size70=makeTextSizer(70);


// buton.addEventListener("click",size70);


function makeCounter(){
    let count=1;
    function increment(){
        console.log(count++);

    }
    return increment;
}

const counter1=makeCounter();
counter1();
counter1();
counter1();
