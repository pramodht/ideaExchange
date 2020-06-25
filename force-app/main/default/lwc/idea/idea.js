import { LightningElement,api } from 'lwc';

export default class Idea extends LightningElement {
    @api idea;
    @api vote

}