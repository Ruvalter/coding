// function alertInputValue() {
//   var valor = document.getElementById('minha-id').value
//   alert(valor)
// }

// function ligaLampada() {
//   document.all.ligada.style.visibility="visible";
//   document.all.desligada.style.visibility="hidden";
// }

// function desligaLampada() {
//   document.all.ligada.style.visibility="hidden";
//   document.all.desligada.style.visibility="visible";
// }


var lampOn = false

function toggleLamp() {
  if (lampOn) {
    document.getElementById('lampada').src = 'images/bulb_PNG1243.png'
    document.getElementById('my-button').value = 'Ligar'
  } else {
    document.getElementById('lampada').src = 'images/Yellow Light Bulb-512x512.png'
    document.getElementById('my-button').value = 'Desligar'
  }
  lampOn = !lampOn
}