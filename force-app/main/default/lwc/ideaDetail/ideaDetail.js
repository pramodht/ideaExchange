import { LightningElement, wire } from 'lwc';
import getideaDetailInfo from '@salesforce/apex/ideaController.getIdea';
import { getSObjectValue } from '@salesforce/apex';
import BODY_FIELD from '@salesforce/schema/Idea.Body';
import TITLE_FIELD from '@salesforce/schema/Idea.Title';
import CATEGORIES_FIELD from '@salesforce/schema/Idea.Categories';

export default class IdeaDetail extends LightningElement {
    @wire(getideaDetailInfo, {ideaId : '0873F00000002MV'} ) ideaInfo;

    get body() {
        return this.ideaInfo.data ? getSObjectValue(this.ideaInfo.data, BODY_FIELD) : '';
    }
    get title() {
        return this.ideaInfo.data ? getSObjectValue(this.ideaInfo.data, TITLE_FIELD) : '';
    }
    get categories() {
        return this.ideaInfo.data ? getSObjectValue(this.ideaInfo.data, CATEGORIES_FIELD) : '';
    }
    
}