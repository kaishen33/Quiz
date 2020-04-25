
const question = document.getElementById("question");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const userAnswer = quizContainer.querySelectorAll("choices")

var timeLeft = 30;
var clock = "";

  let questionsGame = [

{
    question: "What is the other name for the castle of Helm's Deep",
    A: "Hornburg",
    B: "Edoras",
    C: "Dunnharrow",
    D: "Westfold",
    correctAnswer: "A"
    },
    
    {
    question: "The ram used in the siege of Minas Tirith, what inspired its name, Grond",
    A: "A werewolf",
    B: "A Warhammer",
    C: "A Maiar",
    D: "A Valar",
    correctAnswer: "B"
    },
    
    {
    question: "The corsairs of Umbar spoke which language",
    A: "Sindarin",
    B: "Quenya",
    C: "Rhunic",
    D: "Adunaic",
    correctAnswer: "D"
    },
    
    { 
    question: "Which Elven kingdom was Legolas from",
    A: "Mithlond",
    B: "Imladris",
    C: "Woodland Realm",
    D: "Galadhrim",
    correctAnswer: "C"
    },
    
    {
    question: "One of these Numenorian kingdoms joined the Witch King's Army during the fall of Arnor",
    A: "Arthadain",
    B: "Cardolan",
    C: "Rhudaur",
    D: "Gondor",
    correctAnswer: "C"
    },
    
    {
    question: "Saruman resides in which tower",
    A: "Isengard",
    B: "Barad-Dur",
    C: "Orthanc",
    D: "Dol Guldur",
    correctAnswer: "C"
    },
    
    { 
    question: "What is the name of Gandalf's sword",
    A: "Glamdring",
    B: "Narsil",
    C: "Anduril",
    D: "Sting",
    correctAnswer: "A"
    },
    
    {
    question: "The white city of Minas Tirith had another name, what was it",
    A: "Minas Ithil",
    B: "Minas Anor",
    C: "Minas Morgul",
    D: "Pelargir",
    correctAnswer: "B"
    },
    
    {
    question: "Which faction controlled the Mumaks",
    A: "Easterlings of Rhun",
    B: "Haradrim Tribes",
    C: "Variags of Khand",
    D: "Corsairs of Umbar",
    correctAnswer: "B"
    },
    
    {
    question: "One of these is not A montain range",
    A: "Ered Mithrin",
    B: "Orocarni",
    C: "Ered Luin",
    D: "Moria",
    correctAnswer: "D"
    }

];

const lastQuestion = questionsGame.length - 1;
let runningQuestion = 0;
let numCorrect = 0;


//show the pseudocode
function renderQuestion(){
    let q = questionsGame[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    A.innerHTML = "<p>" + q.A +"</p>";
    B.innerHTML = "<p>" + q.B +"</p>";
    C.innerHTML = "<p>" + q.C +"</p>";
    D.innerHTML = "<p>" + q.D +"</p>";
}


function checkAnswer(userAnswer){
    
    console.log(userAnswer);

    //set timeout 

    if (userAnswer === questionsGame[runningQuestion].correctAnswer) {

        question.style.color = "green";

        numCorrect++;
    
        //you took two hours to try make a function and a new variable and all that had to happen was put it here.
        resultsContainer.innerHTML = "Score: " + numCorrect + " /10"; 

      } else {

        question.style.color = "red";

      }

      // set time out gives time and the reset stuff needed. ++ 
      setTimeout(function(){ 

        resetStats();

        runningQuestion++;

        startQuestion();
        
         }, 3000); //3000 = 3 sec  


}



//key part of the js
function startQuestion(){

    renderQuestion();

    clock = setInterval(function() {

     timeLeft--;

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = "Time Remaining: " + timeLeft;
  
    

    // If the count down is finished, write some text 
    if (timeLeft < 0) {
      clearInterval(clock);
      document.getElementById("timer").innerHTML = "Finished!";
      checkAnswer();
    }

  }, 1000);
    
}


//be thorough
function resetStats(){
    timeLeft = 30;

    question.style.color = "black";

    clearInterval(clock);
}






  startQuestion();

 



