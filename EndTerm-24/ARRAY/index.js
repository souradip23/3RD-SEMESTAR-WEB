//factorial


// function fact(n){
//     if(n==0||n==1)return 1;
    
//     return n*fact(n-1);
// }
// console.log(fact(5));



//Pallendrome

// function palindrome( str){
//  let s=0;
//  let e=str.length-1;
//  let str1=str.split("");
//  while(s<=e){
//     let temp=str1[s];
//     str1[s]=str1[e];
//     str1[e]=temp;
//     s++;
//     e--;
//  }
//  let rev=str1.join('');
//  return rev==str;
// }
// console.log(palindrome("sooys"));


//pyramid

// function pyramid(n){
//     for(let i=1;i<=n;i++){
//         let r="";
//         for(let j=1;j<=i;j++){
//             r+=j;
//         }
//         console.log(r);
//     }
  
// }


// pyramid(5);


//Sum of Digits

// function sumofDigits(n){
//     let sum=0;
//     while(n>0){
//         let rem=n%10;
//         sum+=rem;
//         n=Math.floor(n/10);
//     }
// return sum;

// }


// console.log(sumofDigits(1488891))


//Total String Elements

// function totalStringElements(arr){
// let count=0;
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]=="string"){
//         count++;
//     }
// }
// return count;

// }
// console.log(totalStringElements(["soura",1,2,3,"vnv","wfbuf","dwhfw",'r']));


//Filter Element from an Array


// function filterInRange(arr,a,b){ 
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<a||arr[i]>b){
//             arr.splice(i,1);
//             i--;
//         }
//     }
// return arr;
// }

// console.log(filterInRange([1,4,20,10,4,6,2,3,5,8],1,5))


//Remove Duplicates Value

// function removeDuplicates(arr){
 
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 arr.splice(i,1);
//             }
//         }
//     }
//     let sum=0;
  
//     for(let i=0;i<arr.length;i++){
// sum+=arr[i];
//     }
//     return sum;
// }
// console.log(removeDuplicates([2,3,4,5,6,5,3,3,2,2,2,2,2]))



// Calculate sum

// function calculateSum(arr){
//     let sum=0;

// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]=="number"){
//         sum+=arr[i];
//     }
// }
// return sum;
// }

// console.log(calculateSum([1,8,'A',9,"Hello",1,true])); 

