function timeLoop() {
let theTime = new Date();
let theHour = theTime.getHours();
let theMinutes = theTime.getMinutes();
let theSeconds = theTime.getSeconds();


if(theHour <10){
    theHour = "0"+theHour;
}
if(theMinutes <10){
    theMinutes = "0"+theMinutes;
}
if(theSeconds <10){
    theSeconds = "0"+theSeconds;
}
document.getElementById('theClock').innerHTML = "current time = "+theHour+":"+theMinutes+":"+theSeconds;

setTimeout(timeLoop, 1000);
}
timeLoop();
document.querySelector('body').addEventListener('click', whichButton);

function whichButton(event){
    if(event.target.id === 'q1y' || event.target.id === 'q2n') {
        changeBackground('green');
    }
    
    if(event.target.id ===  'q2y' || event.target.id ===  'q1n'){
        changeBackground('red');
    }
    


    


function changeBackground(theColor){
    document.querySelector('body').style.backgroundColor = theColor;

      setTimeout(whiteBG, 1000);
    console.log(theColor);
  
}
    
    function whiteBG(){
        
        document.querySelector('body').style.backgroundColor = 'white';
    }
    
}