/**
 * Created by Avi on 16/01/14.
 */
// Shorthand for $( document ).ready()
$(function() {

    var lessonName;
    var lessonDate;
    var badgeId;
    var youtubId;
    var googleDoc;



    $(".input-icon-wrapper input").on({
        focus: function() { $(this).datepicker().toString() }

    });


    $(".input-icon-wrapper input").datepicker(
        {
            onSelect: function()
            {
                lessonDate = $(this).datepicker('getDate');
            }
        });



    $('#google-doc').focus(function(){
        $(this).attr('placeholder','');

    });


    $('#google-doc').blur(function(){
        $(this).attr('placeholder','work');

    });

    //getAllBadges sending badges ass callback
    getAllItems(badges, "Badges");


//all the badges insert into arr this how we bind the data inside the badges array
    function badges (arr) {
        console.log("test function was called.");
        console.log(arr);
        var a;
        if (arr)
        {
            var ddData=[];
            $.each(arr, function(index, val) {
                 /* iterate through array or object */
                 console.log(this.id);
                 console.log(this.path);
                 console.log(index);
                  var tempObj = {
                    text: "badge name  "+index,
                    value: this.id ,
                    selected: false,
                    description: "badge description",
                    imageSrc:"../"+this.path
                };
                ddData.push(tempObj);
            });


            $('#myDropdown').ddslick({

                data:ddData,
                width:300,
                selectText: "Select Badge",
                imagePosition:"right",
                onSelected: function(data){
                    //callback function: do something with selectedData;
                    badgeId  = data.selectedData.valueOf($(this)).value;
                    console.log(badgeId);
                }

            });
        }
        else
            console.log("There are no args.")
    }



$("#sendForm").click(function(){

    lessonName = $("#lessonName").val();
    var url = $("#youtube").val();

   if(url!=null){
     youtubId = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    if(youtubId != null) {
        alert("video id = "+youtubId[1]);
    } else {
        alert("The youtube url is not valid.");
    }
   }else{
    alert("empty");
    }

    googleDoc = $('#google-doc').val();
    console.log("lesson name:"+lessonName);
    console.log("lesson date:"+lessonDate);
    console.log("badge Id:"+badgeId);
    console.log("youtube Id:"+youtubId);
    console.log("google doc:"+googleDoc); 
    
   //createNewLesson (name, date, badge, youtube, google)
   createNewLesson(lessonName , lessonDate, badgeId, youtubId[1] , googleDoc);
});



});




