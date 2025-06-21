// // Function for fpara (paragraph)
// function changetext(event) {
//     console.log(event); // Logs the click event
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello yatin";
// }

// const { Fragment } = require("react/jsx-runtime");

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changetext);

// // Function for fanchor (anchor)
// function metadata(event) {
//     console.log(event); // Logs the click event
//     let anchor = document.getElementById('fanchor');
//     anchor.textContent = "Clicked anchor!"; // Example action
// }

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', metadata);

// let anchorElement = document.getElementById('fanchor');


// anchorElement.addEventListener('click', function (event){
//     event.preventDefault();
//     anchorElement.textContent = "click done!";
// });





// let paras = document.querySelectorAll('p');

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("You clicked on para: "+ i);
//     })
// }




// Code 1

// for(let i=1; i<=100; i++ ){
//     let para = document.createElement('p');
//     para.textContent = "This is Para" + i;
//     document.body.appendChild(para);
// }




//Code 2


//Best code

// for (let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is para "+ i;
//     Fragment.appendChild(para);
// }
// document.body.appendChild(Fragmentragement)




//Synchronous and asynchronous programming

// console.log("Hello there!");

// function say(){
//     console.log("Hi there!");
// }

// setTimeout(say,3000);

// console.log("Hello there! after the setTimeout function call !");




// const promise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Operation successful!");
//   } else {
//     reject("Something went wrong.");
//   }
// });

// promise
//   .then((result) => {
//     console.log("Resolved:", result);
//   })
//   .catch((error) => {
//     console.log("Rejected:", error);
//   });


// async function getData() {
//   setTimeout(function(){
//     console.log("I'm inside the timeout block")
//   },300);
// }

// getData();


// async function getDatas(){
//   let response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//   let data = await response.json();
//   console.log(data);
// }

// getDatas();



// Process data - Async

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

// const options = {
//   method: "POST",
//   body: JSON.stringify({ username: "Yatin kabadwal" }),
//   headers: myHeaders,
// };
// console.log("I'm inside the api and testing the end points");

// console.log("testing is completed and the data is showing porperly because of the async fucntion that we have craeted and haave been testin")

// async function postData() {
//   const response = await fetch(url, options);
//   let data = await response.json();
//   console.log("My data: ", data);

// }

// postData();




// function outerFunction(){
//   let name = "Yatin";
//   function innerFunction (){
//     console.log(name);
//   }
//   innerFunction()
  
  
  
  
//   ;
// }
// outerFunction();




function outerFunction(){
  let name = "Yatin kabadwal" ;
  function innerFunction(){
    console.log(name);
  }
  innerFunction();
}
outerFunction();