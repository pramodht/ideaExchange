public with sharing class ideaCommentsController {
    

    @AuraEnabled(cacheable= true)
    public static SetupCommentInfo getIdeaComments(String ideaId, Integer queryLimit, Integer offset){
        return new SetupCommentInfo([SELECT count() FROM IdeaComment where IdeaId =: ideaId],
        [SELECT Id,CommentBody,CreatorSmallPhotoUrl, CreatorName, CreatedDate 
                FROM IdeaComment
                Where IdeaId =: ideaId 
                ORDER BY CreatedDate DESC 
                LIMIT : queryLimit 
                OFFSET : Offset]);
    }

    public class SetupCommentInfo{

        @AuraEnabled
        public Integer totalRecordCount {get;set;}

        @AuraEnabled
        public List<IdeaComment> IdeaCommentsRecords{get;set;}

        public SetupCommentInfo(Integer totalRecordCount, List<IdeaComment> IdeaCommentsRecords){
            this.totalRecordCount = totalRecordCount;
            this.IdeaCommentsRecords = IdeaCommentsRecords;
        }
    }
}