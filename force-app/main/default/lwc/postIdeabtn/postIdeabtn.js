import { LightningElement } from 'lwc';

export default class PostIdeabtn extends LightningElement {
    handleKeyPress({code}) {

        if ('Escape' === code) {
            this.template.querySelector('c-modal').hide();
        }
    }

    showModal() {

        const elm = this.template.querySelector('c-modal');

        elm.show();
        setTimeout(() => {
            elm.focus();
        })
    }
}