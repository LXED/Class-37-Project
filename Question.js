class Question {
    constructor() {
      this.option1 = createElement("h4");
      this.option2 = createElement("h4");
      this.question = createElement('h3');
      this.title = createElement('h1');
      this.input1 = createInput("name");
      this.input2 = createInput("Enter Correct Option No.")
      this.button = createButton("Submit");
    }
    
    hide(){
      
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ")
        this.question.position(150,80);
        this.option1.html("1: Everyone ");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);
        this.button.position(350,350);

        this.input1.position(150,230);
        this.input2.position(450,230);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount +=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }

    
}