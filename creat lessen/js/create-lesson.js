/**
 * Created by Avi on 16/01/14.
 */
// Shorthand for $( document ).ready()
var ddData = [
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

$(function() {



    $('#activity-start-date').focus(function(){
       $(this).datepicker();

    });


    $('#google-doc').focus(function(){
        $(this).attr('placeholder','');

    });


    $('#google-doc').blur(function(){
        $(this).attr('placeholder','work');

    });

    $('#myDropdown').ddslick({
    data:ddData,
    width:300,
    selectText: "Select your preferred social network",
    imagePosition:"right",
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
    getAllBages(badgesCallback);
});


});

function badgesCallback(allBadges)
{
    console.log(allBadges);
}

//Dropdown plugin data

