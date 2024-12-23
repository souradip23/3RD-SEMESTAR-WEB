
//  console.log("hello soura")


let fetchBtn=document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
console.log("You have clicked the fetchBtn button");

//Instantiate an xhr object
    const xhr=new XMLHttpRequest();


    //open the object

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    // xhr.open('GET','soura.txt',true);
    
 // USE THIS FOR POST REQUEST
 xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
 xhr.getResponseHeader('Content-type', 'application/json');




    //what to do on progress(optional)
xhr.onprogress=function(){
    console.log('on Progress')

}

// //for state change (optinal)
// xhr.onreadystatechange=function(){
//     console.log('ready state is ',xhr.readyState);
// }



//what to do when the response is ready
xhr.onload=function(){
    if(this.status==200){
        console.log(this.responseText);
    }else{
        console.error("Some error Occured");   
    }
}


//send the request
// xhr.send();
// send the request
params = `{"name":"test34sad545","salary":"123","age":"23"}`;
xhr.send(params);

console.log("We are done!");


}





let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}


//tommorow classwork studywork


//clousure
//Program 
//async/await
//React
