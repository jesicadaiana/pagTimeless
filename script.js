//Comportamiento de los botones del form
document.addEventListener('DOMContentLoaded', function () {

         // Accede al formulario y agrega un evento cuando se envía
         var form = document.getElementById('contactForm');
         form.addEventListener('submit', function (event) {
                  event.preventDefault(); // Evita que se envíe el formulario por defecto
                  alert("El mensaje será enviado")
                  form.submit();
         });

         //Reseteat formulario 
         var resetButton = document.getElementById('button_reset');
         resetButton.addEventListener('click', function () {
                  var confirmReset = confirm("¿Estás seguro de que deseas resetear el formulario?");
                  if (confirmReset) {
                           form.reset();
                  }
         });
});
