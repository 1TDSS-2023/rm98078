const textField = document.querySelector("#text-field");

function inserirValor(num) {
  let operatorBefore = false;
  if (num == "*" || num == "/" || num == "+" || num == "-") {
    if (!operatorBefore) {
      textField.value += num;
      operatorBefore = true;
      return;
    } else {
      textField.value =
        textField.value.slice(0, textField.value.length - 1) + num;
    }
  } else {
    textField.value += num;
    operatorBefore = false;
  }
}

function calcular() {
  let newNumber = eval(textField.value);
  newNumber = Math.round(newNumber * 100000000) / 100000000;
  textField.value = newNumber;
}

function limpar() {
  textField.value = "";
}
