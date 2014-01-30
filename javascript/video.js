var youtubeId;

$(document).ready(function(){

  getTodayLesson(getYoutubeLink);
  getAllOnlineUsers(setAvatars);
  //videoPageInit("JaAWdljhD5o");   
});

function getYoutubeLink(lesson)
{
  yt = lesson.getYoutubeLink();
  console.log(yt);
  videoPageInit(yt);
}

function setAvatars(usersArray)
{
  var avatersSection = $("#video-bottom-section");
  var avatarsImages = new Array();
  avatarsImages[0] = "assets/images/viewingPage/siting-avatar-flip.png";
  avatarsImages[1] = "assets/images/viewingPage/siting-avatar-2-flip.png";
  avatarsImages[2] = "assets/images/viewingPage/siting-avatar-3-flip.png";
  avatarsImages[3] = "assets/images/viewingPage/siting-avatar.png";
  avatarsImages[5] = "assets/images/viewingPage/siting-avatar-2.png";
  avatarsImages[6] = "assets/images/viewingPage/siting-avatar-3.png";
  $.each(usersArray, function(index, val) {
    var avatar = "<section class='avatar' name='"+this.name+"'><img src="+avatarsImages[index]+"></section>";
    avatersSection.append(avatar);
  });
}

function videoPageInit(youtubeLink)
{
	   console.log("video page init");
   // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;

      youtubeId = youtubeLink;
     
      
      
}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
        return match[7];
    }else{
        console.log("incorrect youtube Url");
        return null;
    }
}

function onYouTubeIframeAPIReady() {
      console.log("im ready");
     // youtubeId = youtube_parser(youtubeLink);
      if(youtubeId == null)
        youtubeId = "EDVrTYW2l84";
      
        player = new YT.Player('embed-player-section', {
          height: '390',
          width: '640',
          videoId: youtubeId,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {

      }
      function stopVideo() {
        player.stopVideo();
      }