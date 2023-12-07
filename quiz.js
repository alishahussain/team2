// pos is position of where the user is up to in the quiz (which question they're up to)
var pos = 0, quiz, quiz_status, question, selectedAnswer, options, optionA, optionB, optionC, correct = 0;

// this is a multi-dimensional array with objects containing each question
var questions = [
  {
      question: "How is the concept of 0 and 1 represented in the binary number system?",
      a: "Positive and Negative",
      b: "On and Off",
      c: "True and False",
      answer: "B"
    },
  {
      question: "What is the term used to describe a single digit in the binary system?",
      a: "byte",
      b: "dot",
      c: "bit",
      answer: "C"
    },
  {
      question: "What is the correct Binary conversion of 25",
      a: "11001",
      b: "10101",
      c: "10010",
      answer: "A"
    },
  {
      question: "What is the decimal equivalent to the binary number 1101",
      a: "15",
      b: "12",
      c: "13",
      answer: "C"
    },
    {
      question: "In binary addition, what is the result when adding 1 and 1?",
      a: "10",
      b: "100",
      c: "2",
      answer: "A"
    },
    {
      question: "What is the base of the binary number system?",
      a: "1",
      b: "2",
      c: "10",
      answer: "B"
    },
    {
      question: "In binary, what function does a left shift involve?",
      a: "Doubling the value",
      b: "Dividing the value by 2",
      c: "Subtracting one digit from the value",
      answer: "A"
    },
    {
      question: "What is the result of adding the binary numbers 1011 and 1101?",
      a: "1100",
      b: "0011",
      c: "0111",
      answer: "C"
    },
    {
      question: "What is the correct conversion of the number 42 into binary?",
      a: "101001",
      b: "101010",
      c: "1010011",
      answer: "B"
    },
    {
      question: "How many unique values can be represented with 8 bits in the binary system?",
      a: "128",
      b: "64",
      c: "256",
      answer: "A"
    },   
    {
      question: "What is the result of adding the binary numbers 110 and 011?",
      ",
      a: "111",
      b: "101",
      c: "100",
      answer: "A"
    },
    {
      question: "How many values can a single binary digit/bit represent?",
      a: "88",
      b: "112",
      c: "96",
      answer: "C"
    },
    {
      question: "Which of the following is not a binary operation?",
      a: "AND",
      b: "THEN",
      c: "XOR",
      answer: "B"
    },
    {
      question: "What is the correct binary representation for the number 12?",
      a: "1100",
      b: "1001",
      c: "0110",
      answer: "A"
    },
    {
      question: "What decimal number does the binary representation 10010 correspond to?",
      a: "22",
      b: "12",
      c: "18",
      answer: "B"
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