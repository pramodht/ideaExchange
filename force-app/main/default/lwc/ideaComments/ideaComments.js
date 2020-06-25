import { LightningElement, track } from 'lwc';
import getComments from '@salesforce/apex/ideaCommentsController.getIdeaComments'

export default class IdeaComments extends LightningElement {
    @track comments = [];
    @track error ;
    offset;
    queryLimit;
    totalRecordCount;

    constructor(){
        super();
        this.offset =0;
        this.queryLimit = 10;
        this.loadComments();
    }

    loadComments(){
        let data;
        return getComments({ideaId : '0873F00000002MV', queryLimit : this.queryLimit, offset : this.offset})
        .then(result =>{
            this.totalRecordCount = result.totalRecordCount;
            data = JSON.parse(JSON.stringify( result.IdeaCommentsRecords ));
            let updatedRecords = [ ...this.comments, ...data];
            this.comments = updatedRecords;
        })
        .catch(error =>{
            this.error = error;
        })
    }
    
}