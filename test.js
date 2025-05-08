// // Function for fpara (paragraph)
// function changetext(event) {
//     console.log(event); // Logs the click event
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello yatin";
// }

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

let paras = document.querySelectorAll('p');

for(let i=0; i<paras.length; i++){
    let para = paras[i];
    para.addEventListener('click',function(){
        alert("You clicked on para: "+ i);
    })
}