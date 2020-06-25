import { LightningElement,api } from 'lwc';

export default class IdeaCreator extends LightningElement {
    name
    @api 
    set fullname(value){
        this.name = value;
    }

    get fullname(){
        return this.name;
    }

}