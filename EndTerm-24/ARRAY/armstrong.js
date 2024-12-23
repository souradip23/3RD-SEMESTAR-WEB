function armstrong(n){
    let num1=n;
    let num2=n;
    let count=0;
    while(num1>0){
        num1=Math.floor(num1/10);
        count++;
    }
    let sum=0;
    while(num2>0){
        let rem=num2%10;
         sum+=Math.pow(rem,count);
        num2=Math.floor(num2/10);
    }
    if(sum==n){
       return "yes"
    }else return "No";
}
console.log(armstrong(153))