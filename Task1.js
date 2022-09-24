//a.Print odd numbers in an array
//Anonymous
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var variable = function(a){
        for(var i = 0 ; i< a.length ; i++){
                        if(a[i]%2!=0){
                           console.log(a[i]);
                        } 
                   }
                   return ;
}
console.log(variable(a));

//IIFE
(function (array){
    for(let i=0; i<array.length; i++){
        if(array[i]%2!=0){
            console.log(array[i])
         }
    }
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

//Arrow function
var oddnumbers = (array)=>{
    for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
           console.log(array[i])
}
    }
    return;
}

//b.Convert all the strings to title caps in a string array
//Anonymous
var str = "guvi is one of the best learning platform";
var sentence = function(str){
    str = str.toLowerCase().split(" ");
    for (var i=0; i<str.length; i++){
        str[i]=str[i][0].toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
}
console.log(sentence(str));

//IIFE
(function sentence(){
  var str = "guvi is one of the best learning platform";
  str = str.toLowerCase().split(" ");
  for (var i=0; i<str.length; i++){
      str[i]=str[i][0].toUpperCase()+str[i].slice(1);
  }
  console.log(str.join(" "));
})();

//Arrow function
var str = "guvi is one of the best learning platform";
var titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }            

//C.Sum of all numbers in an array
//Anonymous
var arr1 = [2,4,5,10,8,3,15];
var sum = function(arr1){
    var sum = 0;
    for (var i=0; i<arr1.length; i++){
        sum += arr1[i];
    }
    return sum ;
}
console.log(sum(arr1));
//IIFE
(function sum(arr1){
  var sum = 0;
  for (var i=0; i<arr1.length; i++){
      sum += arr1[i];
  }
console.log(sum);
})([2,4,5,10,8,3,15]);

//Arrow function
var sum = (arr1)=>{
    var sum = 0;
         for(var i = 0 ; i< arr1.length ; i++){
            sum = sum + arr1[i];
          }
          return sum;
          }



//d.Return all the prime numbers in an array
//Anonymous
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var prime = [];
var isprime = function(item){
    var identifier = item / 2;
    for (var j = 2; j <= identifier; j++) {
     if ((item % j) == 0) { // modulous
      return false;
     } 
   }
   return true;
}
for (var index = 0; index < a.length; index++) {
if (isprime(a[index])) {
    prime.push(a[index])
}
}
console.log(prime);
// function(numArray){
//     numArray = numArray.filter((number) => {
//       for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//       }
//       return true;
//     });
//     console.log(numArray);
// }

//IIFE
 
    (function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    
   //Arrow function
   primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}



//e.Return all the palindromes in an array    
//Anonymous
var array = ["hope"];
var p = array.toString();
var result=function(p){

var str = p.split("").reverse().join("");
if(str===p){
  return p;
}
else{
  return "not a palindrome";
}
}
console.log(result(p));

// function isPalindrome(N)
//     {
//         let str = "" + N;
//         let len = str.length;
//         for (let i = 0; i < parseInt(len / 2, 10); i++)
//         {
//             if (str[i] != str[len - 1 - i ])
//                 return false;
//         }
//         return true;
//     }
// // Anonymous Function :  
// function (arr, n)
//     {
//         // Traversing each element of the array
//         // and check if it is palindrome or not
//         for (let i = 0; i < n; i++)
//         {
//             let ans = isPalindrome(arr[i]);
//             if (ans == false)
//                 return false;
//         }
//         return true;
//     }
//IIFE
(function  result(){
    var array = ["hope"];
var p = array.toString();
var str = p.split("").reverse().join("");
if(str===p){
  console.log(p);
}
else{
  console.log("not a palindrome") ;
}
})();
// (  function (arr, n)
//         {
//             // Traversing each element of the array
//             // and check if it is palindrome or not
//             for (let i = 0; i < n; i++)
//             {
//                 let ans = isPalindrome(arr[i]);
//                 if (ans == false)
//                     return false;
//             }
//             return true;
//         })(["civic","madam","nope"] , 3)

  //Arrow function
  Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }


//f.Return median of two sorted arrays of the same size.
//Anonymous

//IIFE

//g.Remove duplicates from an array
//Anonymous
var array =  ["apple", "mango", "apple","orange", "mango", "mango"];

var removeDuplicates = function(array){
    
    return array.filter((item,index) => array.indexOf(item)===index);
}
console.log(removeDuplicates(array));

//IIFE
(function removeDuplicates(){
  var array =  ["apple", "mango", "apple","orange", "mango", "mango"];
  array = array.filter((item,index) => array.indexOf(item)===index);
console.log(array);
})();

//Arrow Function


//h.Rotate an array by k times
//Anonymous
var array =[1,2,3,4,5];
var rotate = function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    }
    

//IIFE
(function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)
    
