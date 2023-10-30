const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const formulario = document.querySelector("#formulario");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

// formulario.addEventListener("submit", sumarInputs);

// function sumarInputs(event) {
//   console.log(event)
//   event.preventDefault()
//   const suma = Number(input1.value) + Number(input2.value);
//   resultado.innerText = "Resultado: " + suma;
// }

btn.addEventListener("click", sumarInputs);

function sumarInputs() {
  const suma = Number(input1.value) + Number(input2.value);
  resultado.innerText = "Resultado: " + suma;
}
