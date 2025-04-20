// function sayMyname() {
//     console.log("My name is yatin kabadwal")
// }

// sayMyname();


// console.log("Hello world");


// let sentence = "Hi \\how  \\are you \\all"

// let words = sentence.split('\\')

// console.log(words)


// function counting(a) {
//     for (let i = 1; i <= a; i++) {
//         console.log(i);
//     }
// }

// counting(5);



// function getaverage(a,b){
//     let average = (a+b)/2;
//     console.log("Your average of is:", average);
// }

// getaverage(5,10);


// function get(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }

// let ans = get(5,5,5);

// console.log("Answer is: ",ans )



// const getmulti = function(a,b){
//     return a*b;
// }

// console.log("Your Multiplication is:",getmulti(2,4))


// there are many ways to print the functions or we can say that there are many ways to perfrom some task on functions



// this is known as arrow function this is also basically a type of writing down the function

// const getmulti = (a,b) =>{
//     return a*b;
// }

// console.log("Your Multiplication is:",getmulti(2,4))




//Arrays in jS

// let obj = {
//     name : "Yatin kabadwah",
//     age : 23,
//     Id : 3234234,
//     address : "xyz",

//     greet : function(){
//         console.log("Hi how are you all!");
//     }
// };

// console.log(obj);
// obj. greet();

// console.log(typeof(obj))


//Arrays

// let arr = [1,2,3,4,5,5];
// console.log(arr);
// console.log(typeof(arr))

// console.log()

// let brr = new Array(2,3,4,5,7);
// console.log(brr);
// console.log(typeof(brr))

// console.log(arr[2]);


// arr.map((number)=>{
//     console.log(number+10);
// })

// arr.map((number)=>{
//     console.log(number+10);
// })




// const Arr = [1,2,3,4,5,6];

// let ansArray = Arr.map ((number)=>{
//     return number*number
// })

// console.log(ansArray)





// function Arrayanswer(arr,index) {
//     return arr.map(number => number * number);
// }

// console.log(Arrayanswer(Arr)); 



// let arr = [22,33,44,55,66,77,10,20,30,40,50,60]
// let evenarray = arr.filter((Number)=>{
//     if(Number%2 === 0){
//         return true;
//     }
//     else{
//         return false ;
//     }
// })


// let evenarray = arr.filter((Number)=>{
//     return Number%2 === 0
// })

// console.log(evenarray)



// const arr = [1,2,'Yatin',"Kabadwal", null]


// let namearr= arr.filter((names)=>{
//     return typeof(names) === 'string';
// })

// console.log(namearr);



// let arr = [ 10,20,30,40,50];
// console.log(arr.indexOf(40));
// console.log(arr.find(20));


// let ans = arr.reduce((acc,curr)=>{
//     return acc + curr;
    
// },0)

// console.log(ans);


// arr.sort();

// console.log(arr)
// arr.sort((a, b) => b - a); 
// console.log(arr);




// const arr = [1,2,3,4,5,6,67,7,7,0];
// let length = arr.length;
// console.log("The Length of the array is: ",length);

//for each loop 

// arr.forEach((value,index)=>{
//     console.log("Number: ",value, "Inedex: ",index);
// })


//Traditional loop 
// for(let index = 0; index<arr.length ; index++){
//     console.log(arr[index]);
// }


//for in loop
// let obj = {
//     name : "Yatin kabadwal",
//     age : 23,
//     Id : 3234234,
//     address : "xyz",
// };


// for (let key in obj){
//     console.log("Your key's are: ",key);
// }

// console.log("\n");

// for (let value in obj ){
//     console.log("Your values are: ",obj[value])
// }


let fullname = "Yatin kabadwal";
for(let val of fullname){
    console.log(val);
}

const arr = [10,20,30,40,50];
function getsum(arr){
    let length = arr.length;
    let sum =0;

    //Done by tradational for loop method
    for (i=0; i<length; i++){
        sum += arr[i];
    }

    //done by for each loop
    let num = 0 ;
    arr.forEach(element => {
        num = num + element
    });
    console.log("Your total sum is: ",sum)
    console.log("Your total num is: ",num)

}

getsum(arr);