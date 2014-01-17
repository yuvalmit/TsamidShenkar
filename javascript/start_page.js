 function getCurrentLesson(data){
        console.log(data);
    }


$( document ).ready(function() {
	$(".upload_button").click(function() {
        alert("Getting Today Mission");
        getTodayLesson(getCurrentLesson());
    })


});