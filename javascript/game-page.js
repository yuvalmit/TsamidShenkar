$(document).ready(function(){
});


var youtubeId;
function gameZoneInit()
{
	gameZomeVideoInit();	
}

function gameZomeVideoInit()
{
	   console.log("game page init");
   // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;    
      // Set here the id for the presentation
        youtubeId = "EDVrTYW2l84";
      
}

function onYouTubeIframeAPIReady() {
		
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