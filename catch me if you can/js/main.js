class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
        var dt = new Date();
        this.recordDate =  dt.getDay() + "." + (dt.getMonth() + 1) + "." + dt.getFullYear();
    } 
}

var gameActive;
var level;
var badClicksCounter;
var score;
var clicksToNextLevel;
var success;
var time;
var spinSpeed;
var hoverSpeed;
var stoper;

onload = initGame();

function initGame(){
    gameActive = false;
    level = 1;
    badClicksCounter = 0;
    score = 0;
    clicksToNextLevel = 10;
    success = false;
    time = 60;
    spinSpeed = 2000;
    hoverSpeed = 300;
    updateLeaderBoard(getLeaderPlayers());
    resetProp();
}

function resetProp(){
    document.getElementById("score-value").innerHTML=score;
    document.getElementById("clicksToNextLevel").innerHTML=clicksToNextLevel;
    document.getElementById("level-value").innerHTML=level;
    document.getElementById("miss-value").innerHTML=badClicksCounter;
}


function start(button) {
    initGame();
    gameActive = true;
    button.disabled = true;
    button.style.backgroundColor = "gray";
    document.getElementById("clickMe").style.animation="spin " + spinSpeed +"ms linear infinite";
    stoper = setInterval(function() {
        if (time > 0) { 
		    time--; 			 
            document.getElementById("timer-value").innerHTML = time;
        }
		else {
           stopGame(false);
        }
    }, 1000); 
}

function getFinalScore() {
    return (score - badClicksCounter);  
}

function stopGame(win){
    let button = document.getElementById("start");
    clearInterval(stoper);
    button.disabled = false;
    button.style.backgroundColor = "#8f2424";
    gameActive = false;
    document.getElementById("clickMe").style.animation = null;
    let endGameText;
    if (win) {
        endGameText = "YOU WON!!!";
    }
    else {
        endGameText = "Game Over";
    }
    setTimeout(()=>{
        alert(endGameText + "\nYour Final Score is " + getFinalScore()); 
        checkScore();
    }, 100);
}

function moveButton(button) {
    if (gameActive){
        maxTop = button.parentElement.offsetHeight - 50;
        maxLeft = button.parentElement.offsetWidth - 50;
        setTimeout(()=>{
            button.style.top=(Math.random()*maxTop)+"px";
            button.style.left=(Math.random()*maxLeft)+"px";
        },hoverSpeed);   
    }    
}

function goodClicks(){
    if (gameActive){
        success = true;
        score += 10*level; 
        document.getElementById("score-value").innerHTML=score;
        clicksToNextLevel--;
        document.getElementById("clicksToNextLevel").innerHTML=clicksToNextLevel;
        if (clicksToNextLevel == 0 && level < 5){
            goToNextLevel();
        }
        else if ((clicksToNextLevel == 0 && level == 5)){
            stopGame(true);
        }
    }
}

function goToNextLevel(){
    level++;
    spinSpeed -= 250;
    document.getElementById("clickMe").style.animation=null;
    document.getElementById("clickMe").style.animation="spin " + spinSpeed +"ms linear infinite";
    time += 10;
    hoverSpeed -= 50;
    document.getElementById("level-value").innerHTML=level;
    clicksToNextLevel = 10;
    document.getElementById("clicksToNextLevel").innerHTML=clicksToNextLevel;
}

function badClicks(){
    if (gameActive){
        if (!success) {
            badClicksCounter += level;
            document.getElementById("miss-value").innerHTML=badClicksCounter;
        }
        else {
            success = false;
        }    
    }
}

function checkScore(){
    let leaderPlayers = getLeaderPlayers();
    if (leaderPlayers.length < 5) {
        addPlayerToList(leaderPlayers);
    }
    else if (getFinalScore() > leaderPlayers[4].score){
        leaderPlayers.pop();
        addPlayerToList(leaderPlayers);
    }
}
    
function addPlayerToList(leaderPlayers) {
    let playerName =  prompt ("What is Your Name?")
    let newPlayer = new Player(playerName, getFinalScore());
    leaderPlayers.push(newPlayer);
    leaderPlayers.sort((a, b) => {
        return b.score - a.score;
    })
    localStorage.setItem("leaderPlayers", JSON.stringify(leaderPlayers));

    updateLeaderBoard(leaderPlayers);
}

function updateLeaderBoard(leaderPlayers){
    for (let i = 0; i < leaderPlayers.length; i++) {
        const currentPlayer = leaderPlayers[i];
        document.getElementById("name" + (i + 1)).innerHTML=leaderPlayers[i].name;
        document.getElementById("score" + (i + 1)).innerHTML=leaderPlayers[i].score;
        document.getElementById("name" + (i + 1)).setAttribute("title", leaderPlayers[i].recordDate);             
    }       
}
 
function getLeaderPlayers() {
    let leaderPlayers = JSON.parse(localStorage.getItem("leaderPlayers"));
    if (!leaderPlayers) {
        leaderPlayers = new Array(); 
    }
    return leaderPlayers;
}

