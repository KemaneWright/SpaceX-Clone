$(window).scroll(function() {
    var winScroll = $(this).scrollTop();

    //commented out console.log so it's not
    //logging all the time! Uncomment to debug.
    console.log(winScroll);
    var parallaxRatio = 850;
    //parallaxRatio variable not fully implemented yet
    // ^^ DO NOT USE ^^

    // Nose
    // if (winScroll > parallaxRatio) {
    //     $('.nose').css({
    //         'position': 'fixed',
    //         'top': 300
    //     });
    // } else {
    //     $('.nose').css({
    //         'position': 'static'
    //     });
    // };
    // Spacecraft
    if (winScroll > parallaxRatio) {
        $('.dragon-spacecraft').css({
            'position': 'fixed',
            'top': 275
        });
    } else {
        $('.dragon-spacecraft').css({
            'position': 'absolute',
            'top': 41,
        });
    }
    if (winScroll > parallaxRatio + 300) {
        $('.dragon-spacecraft').css({
            'position': 'absolute',
            'top': 350
        });
    }
    // Trunk
    if (winScroll > parallaxRatio) {
        $('.trunk').css({
            'position': 'fixed',
            'top': 455
        });
    } else {
        $('.trunk').css({
            'position': 'absolute',
            'top': 212
        });
    };
    if (winScroll > parallaxRatio + 420) {
        $('.trunk').css({
            'position': 'absolute',
            'top': 600
        });
      }
    // Solace Sequence
    // if (winScroll > parallaxRatio) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 5
    //     });
    // } else {
    //     $('.solar-sequence').css({
    //         'position': 'static'
    //     });
    // };
    // if (winScroll > parallaxRatio + 5) {
    //     $('.solar-sequence').css({
    //         'position': 'absolute',
    //         'top': 5
    //     });
    // };





    // USE
    // if (winScroll > parallaxRatio + 5) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 5
    //     });
    // };
    //




    // if (winScroll > 50) {
    //     $('.solar-sequence').css({
    //         'position': 'absolute',
    //         'top': '1515px'
    //     });
    // }
    // if (winScroll > 150) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': '241px'
    //     });
    // }
    // if (winScroll > 200) {
    //     $('.solar-sequence').css({
    //         'position': 'absolute',
    //         'top': '1670px'
    //     });
    // }
})
