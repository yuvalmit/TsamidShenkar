

$( document ).ready(function() {
  alert("document ready");
   var user = new User;
    var userName = user.getCurrentUser();
    alert(userName);
    alert(getCurrentUser().getName());

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



        
  });
 