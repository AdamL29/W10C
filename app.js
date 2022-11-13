function colorOne(event){
    event.target.style.color = `orange`;
}
let cOne = document.getElementById(`one`);
cOne.addEventListener(`mouseover`, colorOne);

function underTwo(event){
    event.target.style.color = `red`;
}
let cTwo = document.getElementById(`five`);
cTwo.addEventListener(`click`, underTwo);


document.onkeypress = function (space){
    if (document.activeElement.nodeName.toLocaleUpperCase() != `input`){
            document.body.style.border = `thick solid limegreen`;
    }
}

setTimeout(() => {
    document.body.style.backgroundImage = 
    `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIRzrebpgt4uF79ewd_AjUjjJ8vqp9PwW6Q&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIRzrebpgt4uF79ewd_AjUjjJ8vqp9PwW6Q&usqp=CAU")`;
}, `15000`);




// Below is my attempt at intervals. Will be working a little more to try and get it finished.
// let intervalId = setInterval(changeSize, 3000)

// function changeSize (){
//     if (!intervalId) {
//         intervalId = setInterval(flashText, 3000);
//     }
// }
// function growText(){
//     let gText = document.getElementById(`whole`);
//     gText.className = gText.className === `go` ? `stop` 
//     : `go`;
// }
// function stopgrowText(){
//     clearInterval(intervalId); 
//     interval = null;
// }

// document.getElementById(`four`).style.transform = `rotate(2deg)`;
