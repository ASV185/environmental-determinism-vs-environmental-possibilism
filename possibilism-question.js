//function that receives a selected answer and responds according to selected answer
function getSelectedAnswer(event){
  if (event.target.value === "possibilism") {
    alert("Yes, congratulations!");
  }
  if (event.target.value === "determinism") {
    alert("No, you should try again.");
  }
}
//selector for form
let form = document.querySelector("#question-form");
// eventlistener to change answer
form.addEventListener("change", getSelectedAnswer);