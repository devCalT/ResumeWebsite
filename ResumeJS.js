
//Animated scroll to div

$("button").click(function() {
    $('html,body').animate({ //Animates the scroll
        scrollTop: $(".ExperienceTab").offset().top}, //Scrolls to ID
        'slow');
});
