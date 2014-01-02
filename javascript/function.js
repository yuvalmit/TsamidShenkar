function eyal(){

	alert("eyal is not gay");
}

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

