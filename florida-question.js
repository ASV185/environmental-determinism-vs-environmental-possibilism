function getSelectedAnswer(event){
  if (event.target.value.length > 0) {
    if (event.target.value === "possibilism") {
      alert("Yes, congratulations!");
    }
    if (event.target.value === "determinism") {
      alert("No, you should try again.");
    }
  }
}

let form = document.querySelector("#question-form");
form.addEventListener("change", getSelectedAnswer);