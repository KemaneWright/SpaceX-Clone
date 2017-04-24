$(window).scroll(function() {
    var winScroll = $(this).scrollTop();

    //commented out console.log so it's not
    //logging all the time! Uncomment to debug.
    // console.log(winScroll);
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
            'top': 355
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
            'top': 527
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
            'top': 885
        });
      }

    // Solace Sequence
    if (winScroll < parallaxRatio + 700) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'left': 213,
            'background-position': 0
        });
    }
    if (winScroll > parallaxRatio) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
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
            'top': 501,
            'background-position': - 4096
        });
    };
    if (winScroll > parallaxRatio + 720) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 5120
        });
    };
    if (winScroll > parallaxRatio + 740) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 6144
        });
    };
    if (winScroll > parallaxRatio + 760) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 7168
        });
    };
    if (winScroll > parallaxRatio + 780) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 8192
        });
    };
    if (winScroll > parallaxRatio + 800) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 9216
        });
    };
    if (winScroll > parallaxRatio + 820) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 10240
        });
    };
    if (winScroll > parallaxRatio + 840) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 11264
        });
    };
    // if (winScroll > parallaxRatio + 000) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 501,
    //         'background-position': - 0000
    //     });
    // };
    if (winScroll > parallaxRatio + 860) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 13312
        });
    };
    // if (winScroll > parallaxRatio + 000) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 501,
    //         'background-position': - 0000
    //     });
    // };
    if (winScroll > parallaxRatio + 880) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 15360
        });
    };
    if (winScroll > parallaxRatio + 900) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 17408
        });
    };
    if (winScroll > parallaxRatio + 920) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 19456
        });
    };
    if (winScroll > parallaxRatio + 940) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 21504
        });
    };
    if (winScroll > parallaxRatio + 960) {
        $('.solar-sequence').css({
            'position': 'fixed',
            'top': 501,
            'background-position': - 23552
        });
    };
    // if (winScroll > parallaxRatio + 1000) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 472,
    //         'background-position': - 25600
    //     });
    // };
    // if (winScroll > parallaxRatio + 810) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 472,
    //         'background-position': - 15525
    //     });
    // };
    // if (winScroll > parallaxRatio + 820) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 472,
    //         'background-position': - 16525
    //     });
    // };
    // if (winScroll > parallaxRatio + 830) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 472,
    //         'background-position': - 17525
    //     });
    // };
    // if (winScroll > parallaxRatio + 840) {
    //     $('.solar-sequence').css({
    //         'position': 'fixed',
    //         'top': 472,
    //         'background-position': -19525
    //     });
    // };
    // Solar Final
    if (winScroll > parallaxRatio + 970) {
        $('.solar-sequence').css({
            'position': 'absolute',
            'top': 1200,
            'left': -393
        });
      }

      var width = $(window).width()
      if (width === 1024) {
        // Spacecraft
        if (winScroll > parallaxRatio) {
            $('.dragon-spacecraft').css({
                'position': 'fixed',
                'top': 217
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
                'top': 388
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
                'top': 885
            });
          }
          // Solace Sequence
          if (winScroll < parallaxRatio + 700) {
              $('.solar-sequence').css({
                  'position': 'fixed',
                  'top': 368,
                  'left': 7,
                  'background-position': 0
              });
          }
          if (winScroll > parallaxRatio) {
              $('.solar-sequence').css({
                  'position': 'fixed',
                  'top': 368,
                  'left': 7
              });
          } else {
              $('.solar-sequence').css({
                  'position': 'absolute',
                  'top': 238,
                  'left': -393
              });
          };
          if (winScroll > parallaxRatio + 970) {
              $('.solar-sequence').css({
                  'position': 'absolute',
                  'top': 1200,
                  'left': -393
              });
            }
          }
})

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
