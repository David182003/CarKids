// Obtener los elementos del DOM
const modal = document.getElementById("myModal");
const yape = document.getElementById("myYape");
const yapeactivity = document.getElementById("activityyape");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];   

yapeactivity.onclick = function(){
    yape.style.display = "block";
}
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
    const paidCheckbox = document.querySelector("#paid");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const time = parseInt(timeSelect.value);
        const paid = paidCheckbox.checked;
        timeLeft = time * 60; // convertir minutos a segundos
        startTimer(paid);
    });
});

function startTimer(paid) {
    intervalId = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            console.log(`Tiempo restante: ${minutes} minutos ${seconds} segundos`);
        } else {
            clearInterval(intervalId);
            if (!paid) {
                alert("El tiempo ha expirado y no ha pagado. Por favor, pague para continuar.");
            } else {
                alert("El tiempo ha expirado. Gracias por pagar.");
            }
        }
    }, 1000); // cada segundo
}

const form = document.querySelector('form');
const containerAutoOne = document.querySelector('.Container_Car');

// ...

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tiempo = document.querySelector('#time').value;
    const pagado = document.querySelector('#paid').checked;
  
    const datos = `
  
      <div class="container_left">
        <h3>Tiempo: ${tiempo} minutos</h3>
        <p class="pagado ${pagado ? 'pagado-verde' : 'pagado-rojo'}"> Pagado: ${pagado ? 'Sí' : 'No'}</p>
      </div>
      <div class="container_right">
        <img src="img/image.png" alt="Not Image">
      </div> 
    `;
  
    containerAutoOne.innerHTML += datos;
  });