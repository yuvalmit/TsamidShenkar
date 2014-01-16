

$( document ).ready(function() {
  logIn('Etay' , '1234');
  var userAvatar;
  var user = getCurrentUser();
  getUserInfo(user);
   

   function getAvatarLayout(avatar) {
        userAvatar = avatar;
        console.log(userAvatar.getHead());

   };
  

    getUserAvatar(getAvatarLayout , 1);

   $( "#my_zone_image" ).click(function() {
 
});

    $( "#video_image" ).click(function() {
          $("#main_iframe").attr('src' , 'video-player.html');
         
});

    $( "#game_image" ).click(function() {
                
});
    $( "#home" ).click(function() {
          $("#main_iframe").attr('src' , 'start_page.html');
});

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


        
  });
 