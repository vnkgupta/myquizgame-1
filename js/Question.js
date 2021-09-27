class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number

    this.input2 = createInput("Answer Letter Goes Here");

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3")

    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter E, but has only one letter inside?")
    this.question.position(150, 50);

    this.option1.html("a. Everyone")
    this.option2.html("b. Envelope")
    this.option3.html("c. Estimate")
    this.option4.html("d. Example")

    this.option1.position(150, 100);
    this.option2.position(150, 120);
    this.option3.position(150, 140);
    this.option4.position(150, 160);

    this.input2.position(350, 250)


    this.input1.position(150, 250);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
        this.message = createElement("h2")
        this.message.html("Thank you, your answer has been submitted. ")
        this.message.position(170, 350)
    })


  }
}
