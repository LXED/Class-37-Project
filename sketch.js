var canvas;
var database;
var contestantCount,quiz,question,contestant,allContestants;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new quizziz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  }

  if(gameState===1){
    clear();
    quiz.play();
  }
  
}
