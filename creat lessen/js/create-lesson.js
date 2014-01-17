/**
 * Created by Avi on 16/01/14.
 */
// Shorthand for $( document ).ready()
$(function() {
    alert( "ready!" );

    $('#activity-start-date').focus(function(){
       $(this).datepicker();

    });


    $('#google-doc').focus(function(){
        $(this).attr('placeholder','');

    });


    $('#google-doc').blur(function(){
        $(this).attr('placeholder','work');

    });


});