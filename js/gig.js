$(document).ready(function(){
 
    $('body').append("<div class='gig-overlay'></div><div class='gig-lightbox'><div class='gig-lightbox-image'></div><div class='gig-lightbox-title'></div><div class='gig-lightbox-caption'></div><div class='gig-lightbox-button'></div></div>")

    $(".gig-image").click(function(){
        $(".gig-overlay").css({"display": "initial"});
        $(".gig-lightbox").css({"display": "initial"});
        var img = $(this).find(".gig-fullsize").attr("src");
        var img_title = $(this).find(".gig-title").text();
        var img_caption = $(this).find(".gig-caption").text();
        var img_link = $(this).find(".gig-link").text();
        $(".gig-lightbox-image").html("<img src='"+img+"' />");
        $(".gig-lightbox-title").text(img_title);
        $(".gig-lightbox-caption").text(img_caption);
        if (img_link != "") {
            $(".gig-lightbox-button").html("<a href='"+img_link+"' style='font-size:1.3em;'>View</a>");
        } else {
            $(".gig-lightbox-button").html("<a onclick='dismiss()' style='font-size:1.3em;'> X</a>");
        }
    });

    $(".gig-overlay").click(function(){
        $(".gig-overlay").css({"display": "none"});
        $(".gig-lightbox").css({"display": "none"});
    });

});

function dismiss(){
    $(".gig-overlay").css({"display": "none"});
    $(".gig-lightbox").css({"display": "none"});
}