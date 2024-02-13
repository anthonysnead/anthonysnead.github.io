const  sreenMd = window.matchMedia( ' ( min-width: 768px ) ' )
var screenSize = $(window).width();

function renderTwitter (height) {
    //Render twitter widget 
    twttr.widgets.createTimeline(
        {
        sourceType: "profile",
        screenName: "AnthonyASnead"
        },
        document.getElementById("twt-block"),
        {
        height: height,
        chrome: "nofooter",
        }
    );
};

// Register event listener
sreenMd.addEventListener("change", (e) => {
    // Check if the media query is true
    console.log(e);
    if (e.matches) {
        $("#twt-block").empty();
        renderTwitter($('.new-section').outerHeight()-100);
    } else {
        $("#twt-block").empty();
        renderTwitter(400);
    }
});

if(screenSize > 768 ) {
    renderTwitter($('.new-section').outerHeight()-100);
} else {
    renderTwitter (400);
}