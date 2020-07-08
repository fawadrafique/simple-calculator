let number1, number2, result;

function calculate() {
  number1 = Number(document.getElementById("number1").value);
  number2 = Number(document.getElementById("number2").value);
  if (document.getElementById("operators").value == "+") {
    result = number1 + number2;
    if (Number.isNaN(result)) {
      return (document.getElementById("output").innerHTML = "n/a");
    } else {
      return (document.getElementById("output").innerHTML = result);
    }
  } else if (document.getElementById("operators").value == "-") {
    result = number1 - number2;
    if (Number.isNaN(result)) {
      return (document.getElementById("output").innerHTML = "n/a");
    } else {
      return (document.getElementById("output").innerHTML = result);
    }
  } else if (document.getElementById("operators").value == "*") {
    result = number1 * number2;
    if (Number.isNaN(result)) {
      return (document.getElementById("output").innerHTML = "n/a");
    } else {
      return (document.getElementById("output").innerHTML = result);
    }
  } else if (document.getElementById("operators").value == "/") {
    result = number1 / number2;
    if (Number.isNaN(result) || result === Number.POSITIVE_INFINITY) {
      return (document.getElementById("output").innerHTML = "n/a");
    } else {
      return (document.getElementById("output").innerHTML = result);
    }
  }
}
