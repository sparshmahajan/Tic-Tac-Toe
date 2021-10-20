let turn ="X";
let isGameActive = true;
    
 // function to change turn
 function changeTurn(){
   return turn ==='X' ? 'O' : 'X';
 }

//function to check win
function checkWinner(){
  let boxtext = document.getElementsByClassName("text");

    let wins = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e =>{

                 
     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) {
      document.querySelector(".announcer").classList.remove("hide");
      document.querySelector(".announcer").innerHTML = "Player" + changeTurn() + " Won";
       isGameActive = false;
}
})
let tie=true;
boxes.forEach(element=>{
  let text = element.querySelector(".text"); 
  if(text.innerHTML === ""){
    tie=false;
  }
})
if(tie && isGameActive){
  document.querySelector(".announcer").classList.remove("hide");
  document.querySelector(".announcer").innerHTML = "TIE";
  isGameActive = false;
}

};


// Reset Button
function resetButton(){
  boxes.forEach(element =>{
    text = element.querySelector(".text");
    text.classList.remove("playerX");
    text.classList.remove("playerO"); document.querySelector(".display_player").classList.remove("playerO");
    text.innerHTML="";  
  });
  isGameActive=true;  
  document.querySelector(".announcer").classList.add("hide"); document.querySelector(".announcer").innerHTML ="";
  turn="X";
  document.querySelector(".display_player").innerHTML="X";
  document.querySelector(".display_player").classList.add("playerX");  
};

// Game Logic
let boxes = Array.from(document.getElementsByClassName("tile"));
boxes.forEach(element=>{
  let text = element.querySelector(".text"); 
  element.addEventListener("click", function(){
   if(text.innerHTML === "" && isGameActive){
     text.innerHTML=turn;     document.querySelector(".display_player").classList.remove("player"+turn);  
     text.classList.add("player"+turn);
     turn = changeTurn();   
     document.querySelector(".display_player").innerHTML=turn;    document.querySelector(".display_player").classList.add("player"+turn);  
     checkWinner();
   }
  });
});

document.querySelector("button").addEventListener("click",resetButton);