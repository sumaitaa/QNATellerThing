function getPrediction() {
    
    var eightBallResult = Math.floor(Math.random() * 7);
    
    document.getElementById("result").style.visibility = "visible";
    
    if (eightBallResult === 0){
        document.getElementById("ballResult").innerHTML = "It ain't looking good for you";
    } else if (eightBallResult === 1){
        document.getElementById("ballResult").innerHTML = "Can't tell, <br> but it looks pretty bad for you"
    } else if (eightBallResult === 2){
        document.getElementById("ballResult").innerHTML = "Don't know, <br> try again"
    } else if (eightBallResult === 3){
        document.getElementById("ballResult").innerHTML = "Such a stupid question, <br> what are you, <br> a flat earther?"
    } else if (eightBallResult === 4){
        document.getElementById("ballResult").innerHTML = "It's uncertain"
    } else if (eightBallResult === 5) {
        document.getElementById("ballResult").innerHTML = "Sorry, couldn't hear you,<br> ask again"
    } else {
        document.getElementById("ballResult").innerHTML = "You better hope the <br> dumbest person on Earth <br> doesn't die soon"
    }
     

}

function openCredits() {
    document.getElementById("the-credits").style.visibility = "visible";
}

function closeCredits() {
    document.getElementById("the-credits").style.visibility = "hidden";
}
    
    


