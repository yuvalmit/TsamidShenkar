 function getCurrentLesson(data){
 		if(data){
 				console.log(data);
 		}else{
 			
 			alert("No Misson for today !");
 		}
        
    }


$( document ).ready(function() {
	$(".upload_button").click(function() {
        alert("Getting Today Mission");
        getTodayLesson(getCurrentLesson);
    })


});