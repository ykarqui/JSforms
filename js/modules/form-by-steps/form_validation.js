export default class Form_Validation {

    constructor() {}

    // Crear métodos para validar aqui.
    // Mirar documentación de Bootstrap si es necesario:
    // https://getbootstrap.com/docs/4.0/components/forms/#validation
    function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
    };
}