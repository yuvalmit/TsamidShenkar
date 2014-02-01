$(document).ready(function() {
	
	logIn(sge, "Etay", 1234);

	function sge(elem) {
		console.log(elem);
	}

	getCurrentUser(currentUser);

	function currentUser(user) {

		$(".avatarWrapper .title").append("<h1>" + user.name + "</h1>");
		getAllUserBadges(userBadges, user);
		getAllUserAchievements (userAchievements, user);
		getAllUserFavoriteFood (userFavoriteFood, user);
		getUserAvatar (buildAvatar, user.getAvatar(), 2);
	}

	function userBadges(badges) {

		badges.forEach(function(item){
	 		$("#badgesImages").append("<img src=" + item.path +">");
	 	});
	}

	 function userAchievements (achievements) {

	 	achievements.forEach(function(item){
	 		$("#achievementsImages").append("<img src=" + item.path +">");
	 	});
	 }

	 function userFavoriteFood (favoriteFood) {

	 	favoriteFood.forEach(function(item){
	 		$("#foodImages").append("<img src=" + item.path +">");
	 	});
	 	
	 }

	 function buildAvatar(avatar)
	 {
	 	console.log(avatar);
	 	$(".head").attr("src", avatar.head);
	 	 $(".hair").attr("src", avatar.hair);
	 	 $(".mouth").attr("src", avatar.mouth);
	 	 $(".eyes").attr("src", avatar.eyes);
	 	 $(".extra").attr("src", avatar.extra);

	 }

	function navLeft(element)
	{
		var offset = -105;
		var currContainer = $(element);
		var currLeft = parseInt($(currContainer).css("left"));
		currContainer.css("left", currLeft + offset + "px");
	}
	
	function navRight(element)
	{
		var offset = +105;
		var currContainer = $(element);
		var currLeft = parseInt($(currContainer).css("left"));
		currContainer.css("left", currLeft + offset + "px");
	}
	
	$(".prev.navFood").click(function() {
		navLeft(".favoritesWrapper .imagesContainer:nth(0)");
	});
	
	$(".prev.navBadges").click(function() {
		navLeft(".favoritesWrapper .imagesContainer:nth(1)");
	});
	
	$(".next.navFood").click(function() {
		navRight(".favoritesWrapper .imagesContainer:nth(0)");
	});
	
	$(".next.navBadges").click(function() {
		navRight(".favoritesWrapper .imagesContainer:nth(1)");
	});
	
	$("#editBtn").click(function() {
		window.location="edit-avatar.html";
	});

});