function tdigit(n){
let count=0;

while(n!=0){
    let lastdigit=n%10;


    n = (n - lastdigit) / 10; 
    count++;

}
console.log(count);
return count;
}


let num=1108972;
tdigit(num);
