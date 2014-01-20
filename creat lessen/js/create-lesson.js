/**
 * Created by Avi on 16/01/14.
 */
// Shorthand for $( document ).ready()

/*var ddData = [
    {
        text: "Facebook",
        value: 1,
        selected: false,
        description: "Description with Facebook",
        imageSrc: "http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png"
    },
    {
        text: "Twitter",
        value: 2,
        selected: false,
        description: "Description with Twitter",
        imageSrc: "http://dl.dropbox.com/u/40036711/Images/twitter-icon-32.png"
    },
    {
        text: "LinkedIn",
        value: 3,
        selected: true,
        description: "Description with LinkedIn",
        imageSrc: "http://dl.dropbox.com/u/40036711/Images/linkedin-icon-32.png"
    },
    {
        text: "Foursquare",
        value: 4,
        selected: false,
        description: "Description with Foursquare",
        imageSrc: "http://dl.dropbox.com/u/40036711/Images/foursquare-icon-32.png"
    }
];
*/
$(function() {


    $(".input-icon-wrapper input").on({
        focus: function() { $(this).datepicker() }

    });





    $('#google-doc').focus(function(){
        $(this).attr('placeholder','');

    });


    $('#google-doc').blur(function(){
        $(this).attr('placeholder','work');

    });

    //getAllBadges sending badges ass callback
    getAllBadges(badges);


//all the badges insert into arr this how we bind the data inside the badges array
    function badges (arr) {
        console.log("test function was called.");
        var a;
        if (arr)
        {
            var ddData=[];
            arr.badgesArray.forEach(function(item,index){
                console.log(item.path);
                console.log(item.id);
                var tempObj = {
                    text: "badge name  "+index,
                    value:item.id ,
                    selected: false,
                    description: "badge description",
                    imageSrc:"../"+item.path
                };
                ddData.push(tempObj);

            });

            $('#myDropdown').ddslick({

                data:ddData,
                width:300,
                selectText: "Select Badge",
                imagePosition:"right",
                onSelected: function(selectedData){
                    //callback function: do something with selectedData;
                }

            });
        }
        else
            console.log("There are no args.")
    }




});


//Dropdown plugin data

