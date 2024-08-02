// Obtener los elementos del DOM
const modal = document.getElementById("myModal");
const yape = document.getElementById("myYape");
const yapeactivity = document.getElementById("activityyape");
const btn = document.getElementById("openModal");
const span2 = document.getElementsByClassName("closee")[0];
const span = document.getElementsByClassName("close")[0];   


// Cuando se hace clic en el botón, se muestra el modal
btn.onclick = function() {
  modal.style.display = "block";
}


// Cuando se hace clic en la "x", se cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando se hace clic fuera del modal, se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// script.js
let intervalId;
let timeLeft;

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const timeSelect = document.querySelector("#time");
    const paidCheckbox = document.querySelector("#bluetooth");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const time = parseInt(timeSelect.value);
        const paid = paidCheckbox.checked;
        timeLeft = time * 60; // convertir minutos a segundos
        startTimer(paid);
    });
});

const form = document.querySelector('form');
const containerAutoOne = document.querySelector('.container_auto_one');

// ...
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tiempo = document.querySelector('#time').value;
    const pagado = document.querySelector('#bluetooth').checked;
    const datos = `
  <div class="Container_Car">
      <div class="container_left">
        <h3>Tiempo: ${tiempo} minutos</h3>
        <p class="pagado ${pagado ? 'pagado-verde' : 'pagado-rojo'}"> Pagado: ${pagado ? 'Sí' : 'No'}</p>
      </div>
      <div class="container_right">
        <img src="img/image.png" alt="Not Image">
      </div> </div>
    `;
    containerAutoOne.innerHTML += datos;
  });