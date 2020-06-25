import { LightningElement, wire, track } from 'lwc';
import getIdea from '@salesforce/apex/ideaController.getIdeas';

export default class IdeaContainer extends LightningElement {

    @wire(getIdea)ideas;

}