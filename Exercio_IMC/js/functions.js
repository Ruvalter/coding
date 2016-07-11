function alertInputValue() {
  var valor1 = document.getElementById('peso').value
  var valor2 = document.getElementById('altura').value
  document.getElementById('result').innerHTML = (valor1/(valor2*valor2)).toFixed(2) + ' kg/m^2'
  // frm.reset()
  return false
}
