$(document).ready(function(){

	
	var uploadBtn = $("#upload-btn");
	uploadBtn.click(function(){
		var input = $("#you-tube-input");
		var embedCode = input.val();
		var src="http://www.youtube.com/embed/EDVrTYW2l84";
		var youtubeIframe = $(".youtube-player");
		if(embedCode !== "undefined")
		{
		//	src = "http:"+embedCode;
			youtubeIframe.src = src;
		}
		else
		{
			//TODO: show error
		}
	});

});

function videoPageInit(youtubeLink)
{
	 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
     
      
      function onYouTubeIframeAPIReady() {
      var youtubeId = youtube_parser(youtubeLink);
      if(youtubeId == null)
      	youtubeId = EDVrTYW2l84;
      
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
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
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

