let playing = false;
let score;
let trialsLeft;
let step;
let action;
let fruits = ['dino1', 'dino2', 'dino3', 'dino4', 'dino5', 'dino6', 'dino7', 'dino8', 'dino9'];

$(function(){

//click on start reset button
$("#startreset").click(function(){
//we are playing
if(playing == true){

//reooad page
location.reload();
}else{
   //we are not playing
   playing = true; // game initiated
   //set score to 0
   score = 0;
   $("scorevalue").html(score);

   //show trials left
   $("#trialsLeft").show();
   trialsLeft = 3;
   addHearts();

   //hide game over
   $("#gameOver").hide();

   //change button text to reset game
   $("#startreset").html("Reset Game");


    
    
    
    
    
    
    
    
   // start sending fruits
startAction();   
}
});

$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //score update
    
    
    //play soung
    document.getElementById("slicesound").play();
    
    //stop fruit and hide it
   clearInterval(action);
    
    //hide fruit
    $("#fruit1").hide("explode", 500); //slice fruit
    
    //sent new fruit
    setTimeout(startAction, 500);
    
    startAction();
});
    
    
    
    
//funtions

     function addHearts(){
$("#trialsLeft").empty();
for(i = 0; i < trialsLeft; i++){
$("#trialsLeft").append('<img src="images/heart.png" class="life">');
}
}




// this function use the src directli from the web 

/*
function startAction(){
$("#fruitsContainer").append('<img src="https://openclipart.org/image/800px/281337"  height="100px" class="fruits">');
}

*/


function startAction(){
$("#fruit1").show();
chooseFruit();
$("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});


step = 1+ Math.round(5*Math.random());

action = setInterval(function(){
$("#fruit1").css('top', $("#fruit1").position().top + step);

//check if is too low
if ($("#fruit1").position().top >
    $("#fruitsContainer").height()){

    //check if we have trials left
    if(trialsLeft > 1 ){
           $("#fruit1").show();
chooseFruit();//choose a random fruit
$("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
        //random position

//generete a  ramdom step
step = 1+ Math.round(5*Math.random());  //change step


        //reduce trials by one
        trialsLeft --;

        //populate trialsleft box
        addHearts();

       }else{ // game over
          playing = false; // we are no playing
          $("#startreset").html("Start Game"); // change button to start game
           $("#gameOver").show();
           $("#gameOver").html('<p>Game Over Samir!</p><p>Your score is '+ score + '</p>');
           $("#trialsLeft").hide();


           stopAction();

       }

}


//check if the fruit is t

}, 10);
}

//genereate a ramdom fruit img

function chooseFruit(){
$("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] + '.png');
}

function stopAction(){
clearInterval(action);
$('#fruit1').hide();
}    


});    



    
    
    
    
