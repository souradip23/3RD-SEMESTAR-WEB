// console.log("Ajax tutorial in one video")
let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener("click",butttonClickHandler);


function butttonClickHandler(){
    console.log("You have clicked the fetch button")

    //Insantiate an xhr object 

    const xhr=new XMLHttpRequest();
    
    //open the object 
    xhr.open('GET','soura.txt',true);

    //what to do on progress
    xhr.onprogress=function(){
        //for spinner loader or other things
          
        console.log('On progress');
    }

xhr.onreadystatechange=function(){
    console.log('ready state is ',xhr.readyState);

}




    //what to do when responce to be ready

    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText); 
        }else{
            console.log("Some error occured");
        }
        
    }
    //send the request 

    xhr.send();


}