
var user;

function initMain(){
    var userAvatar;
    var currentLesson;
    getCurrentUser(getUser);
    

    
};

function loginTest(success){
    
}

function getUser(result){

  user = result;
  getUserInfo(user);
  getUserAvatar( getAvatarLayout , user.getAvatar() , 1);
 
}

function getOnlineUsers(usersArray){
    usersArray.forEach(function (userInstance) {
        //if (userInstance["name"] !== user["name"]) {
           getUserAvatar(getAvatarLayout , userInstance.getAvatar() , 1);
        //}
       
    });
}


function getAvatarLayout(avatar) {
        userAvatar = avatar;
        var head   = userAvatar.getHead();
        var eyes   = userAvatar.getEyes();
        var mouth  = userAvatar.getMouth();
        var hair   = userAvatar.getHair();
        var extra  = userAvatar.getExtra();

       $("#avatar").find("#avatar_head").attr( "src" , head);
       $("#avatar").find("#avatar_eyes").attr( "src" , eyes);
       $("#avatar").find("#avatar_mouth").attr( "src" , mouth);
       $("#avatar").find("#avatar_hair").attr( "src" , hair);
       $("#avatar").find("#avatar_extra").attr( "src" , extra);
       
   };

  function getUserInfo(currentUser){

       var name = currentUser.getName();
       var email = currentUser.getEmail();
       var gender = currentUser.getGender();
       var privileges = currentUser.getPrivileges();
       if (privileges == "1"){
          $(".user_level").text("Scout");
       }
       else{
          $(".user_level").text("Admin");
       }
         $(".user_name").text(name);
       
    }

   



$( document ).ready(function() {
   $( "#my_zone" ).click(function() {
        $("#main_iframe").attr('src' , 'MyZone.html');
});

    $( "#video_page" ).click(function() {
         
          $("#main_iframe").attr('src' , 'video-player.html');
         
});

    $( "#game_page" ).click(function() {
           $("#main_iframe").attr('src' , 'game_zone.html');
});
    $( "#home" ).click(function() {
          $("#main_iframe").attr('src' , 'start_page.html');
});

  
    initMain();


        
  });


 