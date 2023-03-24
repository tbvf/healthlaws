var Questions = [
  "Can a 15 year old give consent",
  "If someone gave you consent an hour ago, would you still have consent",
  "Do parents have rights to control their teen's children",
  "If a teen is in the foster system, will they have custody of their child",
];
var Answers0 = ["Definitely", "It's been too long", "Usually No", "they have the right to"];
var Answers1 = ["Absolutely Not", "I'd still have it from earlier", "In most cases yes", "the child will be forced into adoption"];
var CorrectAnswers = [1, 0, 0, 1];
var IncorrectMessage = [
  "Until a person has reached the age of consent (16yrs) they are not considered mentally developed enough to give consent",
  'Remember, "If someone wanted a cup of tea earlier, it does not mean they want one now", you must always re-ask and regain consent',
  "Generally no, teens will usually be given the right to choose for their children, only in some states do the teen's parent's make the decision. Some states still let the teens decide but for big decisions have council to make sure the teen is making the right decision for their child",
  "The government considers this an environment in which there could be harm to the child so they generally take custody of the child soon after it is born",
];
var i = 0;

var score = 0;

// var StartButton = document.getElementById('Start_Button');
// var Header = document.getElementById('Header');

function begin() {
  document.getElementById("Start_Button").style = "display: none;"; 
  document.getElementById("Answer0").style.paddingInline = '2rem';
  document.getElementById("Answer1").style.paddingInline = '2rem';
  document.getElementById("Header").innerHTML = Questions[i] + "?";
  document.getElementById("Answer0").innerHTML = Answers0[i];
  document.getElementById("Answer1").innerHTML = Answers1[i];
}

function next() {
  i += 1;

  if (i < Questions.length) {
    document.getElementById("Header").innerHTML = Questions[i] + "?";
    document.getElementById("Answer0").innerHTML = Answers0[i];
    document.getElementById("Answer1").innerHTML = Answers1[i];
  } else{
    endgame();
  }
}

function answered0() {
  if (CorrectAnswers[i] == 0) {
    alert("Yay!!! That Was Correct!");
    score += 1;
  } else {
    alert(IncorrectMessage[i]);
  }
  next();
}

function answered1() {
  if (CorrectAnswers[i] == 1) {
    alert("Yay!!! That Was Correct!");
    score += 1;
  } else {
    alert(IncorrectMessage[i]);
  }
  next();
}

function endgame(){
    document.getElementById('Header').innerHTML = 'Well Played!!';
    document.getElementById('Answer0').style = 'display: none;';
    document.getElementById('Answer1').style = 'display: none;';
    document.getElementById('Results').innerHTML = `You got ${score} out of ${i} questions correct!`;
}