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


// let fullname = "Yatin kabadwal";
// for(let val of fullname){
//     console.log(val);
// }

// const arr = [10,20,30,40,50];
// function getsum(arr){
//     let length = arr.length;
//     let sum =0;

//     //Done by tradational for loop method
//     for (i=0; i<length; i++){
//         sum += arr[i];
//     }

//     //done by for each loop
//     let num = 0 ;
//     arr.forEach(element => {
//         num = num + element
//     });
//     console.log("Your total sum is: ",sum)
//     console.log("Your total num is: ",num)

// }

// getsum(arr);



//New topic  variable hoisting;


// Printname();

// function Printname(){
//     console.log("Yatin kabadwal");
// }

// printname();
// let printname = function(){
//     console.log("Hi how are you all");
// }

// console.log(nam);

// var nam = "Yatin";

// Always remember that the hoisting can only be performed on the normal function it will not work in the expression one or the arrow one ();



// class abc {
//     d() {
//         console.log("In function d");
//     }c() {
//         console.log("In function c");
//        this. d();
//     }b() {
//         console.log("In function b");
//        this. c();
//     }a() {
//         console.log("In function a");
//        this. b();
//     }
// }


// const ex = new abc();
// ex.a();


// function greetMe(greet, fullname){
//     console.log("Hello ",fullname);
//     greet();
// }

// function greet() {
//     console.log("Greetings of the day");
// }

// greetMe(greet,"Yatin");





//Function inside a function
// function outer() {
//     console.log("Hello from outer function");
//     return function inner() {
//       console.log("Hello from inner function!");
//     }
//   }
//   const result = outer(); // result is now the inner function
// result(); 




//Functions inside the array;

// const arr = [
//     function a(a,b){
//         return a+b;
//     },
//     function b(a,b){
//         return a-b;
//     },
//     function c(a,b){
//         return a*b;
//     }
// ];

// let first = arr[0];
// let ans = first(10,23);
// console.log(ans);


// let num ;
// for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     console.log("The function is:", num);
//     console.log("Result of calling function with 5, 3:", num(5, 3));
// }



//VAriable scoping : 


//global scope

// var age = 12; 

// console.log(age)


// {
//     console.log(age)
// }


// if(true)
//     console.log(age);

// for( let i=0; i<=2; i++){
//     console.log(age , "This is from for loop");
// }


// function sayHello(){
//     console.log("Hi",age);
// }

// sayHello();


//Function scope

// function sayHello(){
//     let name = "Hello world";
//     console.log(name);
// }

// sayHello();


// Block scope ; Always remember that var is not the block scope :

// {
//     var na = "Yatin";
// }
// console.log(na);


// If we don't mark any variable like private of other os by default it will be public .
// class a {
    
   
//     gender = "xyz"
// }

// class b {
//    #age = 25;  //Private;
    
//    ag(){
//     console.log(this.#age);
//    }

//    get fetchange(){
//     return this.#age;
//    }

//    set modifyage(a){
//     this.#age = a;
//    }
// }

// let ab = new b();

// console.log(ab.age);
// ab.ag();


// let g = ab.fetchange;

// console.log(g);

// ab.modifyage(40);
// console.log(ab.fetchange);



// class Human{
//     weight;
//     #age = 34;
//     ht = 332;

//     constructor (age, weight){
//         this.#age = age;
//         this.weight = weight;
//     }
    
//     abc(){
//         console.log(this.#age);
//     }
// }

// let obj = new Human(55,23);
// console.log(obj.ht);
// console.log(obj.weight);
// console.log(obj.age);
// obj.abc();


//Default parameters

// function xyz (h="Default value") {
//     console.log(h)
// }
// xyz();
// xyz("Yatin kabadwal");
// xyz(null);
// xyz(undefined);
// xyz(23423);


// console.log


// Using function in default parameter;
// function getage(){
//     return 23;
// }

// function utility(name = "Rana",age=getage()){
//     console.log(name, " ", age);
// }

// utility();
// utility("xyz",44);
// utility("Ji")




// console.log(Math.PI);
// console.log(Math.sin);

// let arr = [ 2,3,4,5,6,7,8,0];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// console.log(Math.round(...arr));
// console.log(Math.E);


// let current = new Date();
// console.log(current);
// let date = new Date('june 23 1993 32:32');
// console.log(date);


//Objects are dynamic in nature 
// let obj = {
//     age : 23,
//     wt : 34,
//     ht : 232
// };
// obj.age = 34;
// console.log(obj);
// obj.age= 23;
// obj.color = "yellow";
// console.log(obj);

// let clone = {...obj};
// obj.age = 19;
// console.log("clone: ",clone);
// console.log("obj: ",obj);
// //Another type of cloning is there known as destination cloning also known as assign method;
//  let dest = Object.assign({},obj);
//  console.log(dest);


// try{
//     console.log("Try block start here");
//     console.log(x);
//     console.log(f);

//     console.log("Try block ends here");
// }
// catch(e){
//     console.log("I'm iniside the catch Block");
//     console.log("You got your error here: ",e);
// }


// //Finally block -> this will run everytime


// finally{
//     console.log("I will run everytime no matter there is any kind of a error or not");
// }




//Let's create our  own error by using throw keyword

try{
    console.log(x);
}

catch(err){
    throw new Error ("Bhai mere pahle declare krr le phir print mai dalna isko yrr!");
}




// Let's create an another error 
let errorcode = 100;
if(errorcode == 100){
    throw new Error("Invalid Json");
} 



