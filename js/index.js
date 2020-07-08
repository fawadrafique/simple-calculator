let number1, number2;

function calculate() {
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;

  if (document.getElementById("operators").value == "+") {
    document.getElementById("output").innerHTML = number1 + number2;
  } else if (document.getElementById("operators").value == "-") {
    return (document.getElementById("output").innerHTML = number1 - number2);
  } else if (document.getElementById("operators").value == "*") {
    return (document.getElementById("output").innerHTML = number1 * number2);
  } else if (document.getElementById("operators").value == "/") {
    return (document.getElementById("output").innerHTML = number1 / number2);
  }
}
