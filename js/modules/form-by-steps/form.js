import FormEvents from './form_events.js';
import FormValidation from './form_validation.js';

export default class Form {

    constructor() {
        this.formEvents = new FormEvents();
        this.initSendFormAction();
        this.formValidation = new FormValidation();
    }

    initSendFormAction() {
        this.formEvents.initSendFormEvent(this.sendForm.bind(this));
    }

    initValidForm() {
        this.formValidation.initValidForm(this.sendForm.bind(this));
    }

    sendForm() {
        // Escribir aquí el código para enviar todos los datos del formulario.
        // enviar a https://reqres.in/api/users (Esta web sirve para realizar pruebas REST API, por lo tanto NO ENVIAR DATOS REALES)
        // la API retorna un JSON con el id del usuario creado y la info guardada.
        // Para mas info ver en https://reqres.in
        let data = {};
        
        $("#form1").serializeArray().forEach(element => data[element.name] = element.value);
        console.trace('We are trying to send... ' ,data);
        
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then( resp => {
            console.info(resp.json().then( rp => console.log('Server response: \n',rp)));
            // Success message
            $('.success-alert').html(`<div class="alert alert-success" role="alert"><h2>Data was sended OK!</h2></div>`);
        }).catch(function(error) {
            // Error message
            $('.success-alert').html(`<div class="alert alert-danger" role="alert"><h2>Data wasnt sended :(</h2></div>`);
            console.error('There was an error executing the request:' + error.message);
          });
        
    }

}
