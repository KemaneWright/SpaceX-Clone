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
            'top': 325
        });
    } else {
        $('.dragon-spacecraft').css({
            'position': 'absolute',
            'top': 91,
        });
    }
    if (winScroll > parallaxRatio + 335) {
        $('.dragon-spacecraft').css({
            'position': 'absolute',
            'top': 425
        });
    }

    // Trunk
    if (winScroll > parallaxRatio) {
        $('.trunk').css({
            'position': 'fixed',
            'top': 497
        });
    } else {
        $('.trunk').css({
            'position': 'absolute',
            'top': 262
        });
    };
    if (winScroll > parallaxRatio + 625) {
        $('.trunk').css({
            'position': 'absolute',
            'top': 890
        });
      }

    // Solace Sequence
    if (winScroll > parallaxRatio) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'left': 213
        });
    } else {
        $('.solar-sequence').css({
            'position': 'absolute',
            'top': 238,
            'left': -393
        });
    };
    // The sequence of the solar sequence
    if (winScroll > parallaxRatio + 700) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 4000
        });
    };
    if (winScroll > parallaxRatio + 710) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 5000
        });
    };
    if (winScroll > parallaxRatio + 720) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 6000
        });
    };
    if (winScroll > parallaxRatio + 730) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 7000
        });
    };
    if (winScroll > parallaxRatio + 740) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 8000
        });
    };
    if (winScroll > parallaxRatio + 750) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 9000
        });
    };
    if (winScroll > parallaxRatio + 760) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 10000
        });
    };
    if (winScroll > parallaxRatio + 770) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 11000
        });
    };
    if (winScroll > parallaxRatio + 780) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 12000
        });
    };
    if (winScroll > parallaxRatio + 790) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 13000
        });
    };
    if (winScroll > parallaxRatio + 800) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 14000
        });
    };
    if (winScroll > parallaxRatio + 810) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 15000
        });
    };
    if (winScroll > parallaxRatio + 820) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 16000
        });
    };
    if (winScroll > parallaxRatio + 830) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 17000
        });
    };
    if (winScroll > parallaxRatio + 840) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 472,
            'background-position': - 26000
        });
    };













    // Solar Final
    if (winScroll > parallaxRatio + 1004) {
        $('.solar-sequence').css({
            'position': 'absolute',
            'top': 1240,
            'left': -393
        });
      }
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
