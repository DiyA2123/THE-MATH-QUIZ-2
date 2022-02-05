function addNumber(){
    player1_name=document.getElementById("player1_no_input").value;
    player2_name=document.getElementById("player2_no_input").value;
    localStorage.setItem("player1",player1_no);
    localStorage.setItem("player2",player2_no);
}

var Score= 0;
function updateScore(){
    Score=Score+1;
    document.getElementById("Score_label").innerHTML="Score= "+Score;
}

function SaveScore(){
    localStorage.setItem("SaveScore",Score);
}

function Next(){
    window.location= "activity_2.html";
}