class quizziz{
constructor(){}
  
getState(){
  var gameStateRef  = database.ref('gameState');
  gameStateRef.on("value",function(data){
     gameState = data.val();
  })
 
}

update(state){
  database.ref('/').update({
    gameState: state
  });
}

async start(){
  if(gameState === 0){
    contestant = new Contestant();
    var contestantCountRef = await database.ref('contestantCount').once("value");
    if(contestantCountRef.exists()){
      contestantCount = contestantCountRef.val();
      contestant.getCount();
    }
    question = new Question()
    question.display();


  }

}

play(){
    
    background("yellow");
    textSize(25)
    fill("black");
    text("Result of the Quiz!",320,50);
   
    Contestant.getContestantInfo();
    if(allContestants != undefined){
    textSize(18)
    fill("blue");
    text("Note:Contestants who answered correct are highlited in green color!",150,230);

    for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill("Green");
        else
        fill("red");
    }

}



}

}