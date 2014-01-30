 var counter = 0;

 function getCurrentLesson(data){
 		if(data){
 				console.log(data);
 		}else{
 			
 			alert("No Misson for today !");
 		}
        
    }

function getUsersAvatarLayout(avatar) {
        counter++;
        if(counter < 7){
        	userAvatar = avatar;
        	var head   = userAvatar.getHead();
	        var eyes   = userAvatar.getEyes();
	        var mouth  = userAvatar.getMouth();
	        var hair   = userAvatar.getHair();
	        var extra  = userAvatar.getExtra();
	        console.log("counter " +counter);
	        var domElement = $('#'+counter);

	       $(domElement).find("#avatar_head").attr( "src" , head);
	       $(domElement).find("#avatar_eyes").attr( "src" , eyes);
	       $(domElement).find("#avatar_mouth").attr( "src" , mouth);
	       $(domElement).find("#avatar_hair").attr( "src" , hair);
	       $(domElement).find("#avatar_extra").attr( "src" , extra);
        }else{
        	alert("Full !! Too many users online");
        }
        
       
   };

function getOnlineUsers(usersArray){
    usersArray.forEach(function (userInstance) {
    	 
         getUserAvatar(getUsersAvatarLayout , userInstance.getAvatar() , 1); 
    });
}




$( document ).ready(function() {
	$(".upload_button").click(function() {
        alert("Getting Today Mission");
        getTodayLesson(getCurrentLesson);
    })

	getAllOnlineUsers(getOnlineUsers);
     


});