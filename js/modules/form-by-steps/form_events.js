export default class Form_Events {
    constructor() {
        this.initPrevNextButtons();
    }

    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');

        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
    }

    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    goToStep(step, direction = 'next') {
        const FIRST_STEP_VALUE = 33;
        const SECOND_STEP_VALUE = 66;
        const THIRD_STEP_VALUE = 99;
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

    previousAction(evt) {
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        
        $formStep.addClass('d-none');

        let $prevStep = $(this.goToStep($formStep[0].classList[1], 'prev'));
        $prevStep.removeClass('d-none');
    }

    nextAction(evt) {
        // 3) ¿Se puede evitar repetir mismas líneas que en previousAction?
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        
        $formStep.addClass('d-none');

        let $nextStep = $(this.goToStep($formStep[0].classList[1]));
        $nextStep.removeClass('d-none');
    }

    getCurrentStep(evt) {
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        
        $formStep.addClass('d-none');
    }

    progressBar(percent) {
        // 1) Escribir aqui como sería la lógica para incrementar la barra de porcentaje.
        let $progressBar = $('.progress-bar');
        
        $progressBar
            .css('width', percent + '%')
            .html( percent + '%');
    }
    
}
