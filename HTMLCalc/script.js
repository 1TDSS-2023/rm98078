const textField = document.querySelector("#text-field");

function inserirValor(num) {
  let operatorBefore = false;
  if (textField.value == "" && ["*", "/", "+", "-", "0"].includes(num)) {
    return
  }
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

function changeSymbol() {
  if (textField.value[0] == "-") {
    textField.value = textField.value.slice(1, textField.value.length);
  } else {
    textField.value = "-" + textField.value;
  }
}

function porcentageCalc() {
  textField.value = Math.round((textField.value / 100) * 1000000) / 1000000;
}