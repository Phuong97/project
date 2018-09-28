$(function(){

    //scrollspy
    $('body').scrollspy({
        target :'.navbar'
    });

    //WOW

    new WOW().init();

    // Gallery
    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery();
    });
          
});