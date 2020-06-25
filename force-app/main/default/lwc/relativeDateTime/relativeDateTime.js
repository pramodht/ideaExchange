import { LightningElement, api } from 'lwc';

export default class RelativeDateTime extends LightningElement {
    date

    @api 
    set time(value){
        var d = new Date(value);
        this.date = d;
    }

    get time(){
        return this.date;
    }
}