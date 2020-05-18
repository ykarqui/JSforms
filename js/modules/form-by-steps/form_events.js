export default class Form_Events {
    constructor() {
        this.buttonsControl();
    }

    preventDefaultaction (evt) {
        evt.preventDefault();
    }

    buttonsControl() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        let $finishButton= $('.js-finish');

        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
        $finishButton.click(this.preventDefaultaction);
    }

    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    goToStep(step, direction = 'next') {
        const FIRST_STEP_VALUE = 33;
        const SECOND_STEP_VALUE = 66;
        const THIRD_STEP_VALUE = 99;
        console.trace(`Step values are 1st: ${FIRST_STEP_VALUE}, 2nd: ${SECOND_STEP_VALUE}, 3rd ${THIRD_STEP_VALUE}`);
        // 2) Simplifica esta función para que sean menos líneas.
        let currentStep = step.replace(/^step\-/, '');
        let goToStep = '.step-';
        if (currentStep === '2') {
            if ('prev' === direction) {
                goToStep += '1';
                this.progressBar(FIRST_STEP_VALUE);
            } else {
                goToStep += '3';
                this.progressBar(THIRD_STEP_VALUE);
            }
        } else {
            goToStep += '2';
            this.progressBar(SECOND_STEP_VALUE);
        }
        return goToStep;
    }

    changeAction(evt,direction='next'){
        let current = $(evt.currentTarget);
        let formStep = current.parents('.form-step');
        
        formStep.addClass('d-none');
        this.preventDefaultaction(evt);
        let step = $(this.goToStep(formStep[0].classList[1], direction));
        step.removeClass('d-none');
    }
    previousAction(evt) {this.changeAction(evt,'prev');}

    nextAction(evt) {this.changeAction(evt);}

    progressBar(percent) {
        // 1) Escribir aqui como sería la lógica para incrementar la barra de porcentaje.
        let $progressBar = $('.progress-bar');
        
        $progressBar
            .css('width', percent + '%')
            .html( percent + '%');
    }
    
}
