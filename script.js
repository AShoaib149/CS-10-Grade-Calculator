//
document.getElementById("calc-btn").addEventListener("click", caculator);

// input

function caculator() {
  let number1 = +document.getElementById("client-side").value;
  let number2 = +document.getElementById("struc-prog1").value;
  let number3 = +document.getElementById("struc-prog2").value;
  let number4 = +document.getElementById("script").value;
  let number5 = +document.getElementById("project-a").value;

  //
  let total = (number1 + number2 + number3 + number4 + number5) / 5;

  // output
  document.getElementById("btn").innerHTML = total;
}
