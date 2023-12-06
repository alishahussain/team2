// pos is position of where the user is up to in the quiz (which question they're up to)
var pos = 0, quiz, quiz_status, question, selectedAnswer, options, optionA, optionB, optionC, correct = 0;

// this is a multi-dimensional array with objects containing each question
var questions = [
  {
      question: "What is",
      a: "64",
      b: "78",
      c: "76",
      answer: "B"
    },
  {
      question: "What is 7 x 4?",
      a: "21",
      b: "27",
      c: "28",
      answer: "C"
    },
  {
      question: "What is 16 / 4?",
      a: "4",
      b: "6",
      c: "3",
      answer: "A"
    },
  {
      question: "What is 8 x 12?",
      a: "88",
      b: "112",
      c: "96",
      answer: "C"
    },
  ];

// this get function is short for the getElementById function	
function get(x){
  return document.getElementById(x);
}

// this function renders a question for display on the page
function renderQuestion(){
  quiz = get("quiz");
  if(pos >= questions.length){
    quiz.innerHTML = "<h2>You answered "+correct+" of "+questions.length+" questions correctly.</h2><br><button onclick='renderQuestion()'>Play again</button>";
    get("quiz_status").innerHTML = "Quiz completed";
    // resets the variable to allow users to restart the quiz
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when quiz is completed
    return false;
  }

  get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  optionA = questions[pos].a;
  optionB = questions[pos].b;
  optionC = questions[pos].c;

  // display the current question
  quiz.innerHTML = "<h3>"+question+"</h3>";

  // display the answer options
  // the += appends to the data we started on the line above
  quiz.innerHTML += "<label> <input type='radio' name='options' value='A'> "+optionA+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='options' value='B'> "+optionB+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='options' value='C'> "+optionC+"</label><br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  options = document.getElementsByName("options");
  for(var i=0; i < options.length; i++){
    if(options[i].checked){
      selectedAnswer = options[i].value;
    }
  }
  // checks if selected answer matches the correct answer
  if(selectedAnswer == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which questions user is up to
  pos++;
  // then the renderQuestion function is called again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);