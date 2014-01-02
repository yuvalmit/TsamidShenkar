//Global Vars
var game_click = false;
var video_click = false;
var myzone_click = false;






//Document Ready
$(document).ready(function(){


//Event handler
/*********************/
//game button click
	$('#game_button').click(function(){
		if(game_click)
		{
			$(this).attr("src","assets/images/main/game-room-icon-open.png");
			game_click = !game_click;
		}
		else
		{
			$(this).attr("src","assets/images/main/game-room-icon-close.png");
			game_click = !game_click;
		}
	});

	//video button click
	$('#video_button').click(function(){
		if(video_click)
		{
			$(this).attr("src","assets/images/main/movie-room-icon-open.png");
			video_click = !video_click;
		}
		else
		{
			$(this).attr("src","assets/images/main/movie-room-icon-close.png");
			video_click = !video_click;
		}
	});
	// my zone button click
	$('#myzone_button').click(function(){
		if(myzone_click)
		{
			$(this).attr("src","assets/images/main/my-zone-icon-open.png");
			myzone_click = !myzone_click;
		}
		else
		{
			$(this).attr("src","assets/images/main/my-zone-icon-close.png");
			myzone_click = !myzone_click;
		}
	});

});

