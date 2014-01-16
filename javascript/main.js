function initMain(){
    logIn('Etay' , '1234');
    var userAvatar;
    var user = getCurrentUser();

    getUserInfo(user);
    getUserAvatar(getAvatarLayout , 1);
};

function getAvatarLayout(avatar) {
        userAvatar = avatar;
        var head   = userAvatar.getHead();
        var eyes   = userAvatar.getEyes();
        var mouth  = userAvatar.getMouth();
        var hair   = userAvatar.getHair();
        var extra  = userAvatar.getExtra();

       $("#avatar_head").attr( "src" , head);
       $("#avatar_eyes").attr( "src" , eyes);
       $("#avatar_mouth").attr( "src" , mouth);
       $("#avatar_hair").attr( "src" , hair);
       $("#avatar_extra").attr( "src" , extra);
       
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


    initMain();


        
  });


 