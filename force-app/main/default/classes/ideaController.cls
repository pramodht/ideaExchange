public with sharing class ideaController{
	public static list<IdeaDetail> ideaDetailList {get;set;}

	@AuraEnabled(cacheable = true)
	public static List<IdeaDetail>  getIdeas(){
		//select id,Body, Title, CreatorFullPhotoUrl, CreatorSmallPhotoUrl,
		 //CreatedDate, CreatorName,VoteTotal, VoteScore,(select id from Votes where CreatedById= user ) from Idea
		 ideaDetailList = new list<IdeaDetail>();
		 IdeaDetail detail ;
		 for(Idea i : [SELECT id,Body, Title, CreatorFullPhotoUrl, 
		 				CreatorSmallPhotoUrl,NumComments,
						CreatedDate, CreatorName,VoteTotal, VoteScore,
						(select id,Type from Votes where CreatedById=: UserInfo.getUserId() limit 1) 
						FROM Idea 
						LIMIT 10])
		{
			System.debug(i.Votes);
			System.debug(i.Votes);
			ideaDetailList.add(new IdeaDetail(i,i.Votes));
		}
		system.debug(ideaDetailList);
		return ideaDetailList;
	}

	public class IdeaDetail{
		@AuraEnabled
		public Idea ideaItem {get;set;}
		@AuraEnabled
		public vote voteItem {get;set;}

		public IdeaDetail(Idea ideaItem, vote voteItem){
			this.ideaItem = ideaItem;
			this.voteItem = voteItem;
		}
		public IdeaDetail(Idea ideaItem){
			this.ideaItem = ideaItem;
		}
	}

	@AuraEnabled(cacheable = true)
	public static Idea getIdea(Id ideaId){
		
		return [SELECT Id,Body, Title, CreatorFullPhotoUrl,Categories,
		CreatorSmallPhotoUrl,NumComments,
	   	CreatedDate, CreatorName,VoteTotal, VoteScore from Idea where Id =: ideaId limit 1];
	}
}