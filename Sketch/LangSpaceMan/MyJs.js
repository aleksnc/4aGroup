if ($('div').hasClass('langSwitch')) {
    arr = [];
    var ltr = true;
    var sin = true;
    var Point = $('.langSwitch');
    var NewY;
    var NewX;
    var PoinPosX = Point.position().left;
    var PoinPosY = Point.position().top;
    var i = 0;
    var vectorY = 1;
    var rotate = 0;

    arr = [PoinPosX, PoinPosY, 0.7];
    var timerId = setInterval(function () {
        (ltr == true) ? i += 0.1 : i -= 0.1;
        vectorY = (sin == true) ? 1 : -1;

        NewX = arr[0] + i * 3;

        NewY = (arr[1] - Math.abs(NewX - arr[0]) * Math.sin(arr[2] * vectorY));

        Point.css({
            'left': NewX,
            'top': NewY
        });

        rotate += i / 180;
        $('.spaceman').css({
            'transform': 'rotate(0' + rotate + 'deg)'
        });
        Collision();
    }, 1000 / 120);

    function Collision() {
        var a = Point;
        var b = $('.langSwitch-wrapper');
        //
        //console.log(a.position().top + 72);
        //var bpos = b.position().top + b.height();
        //console.log(bpos);
        //console.log(ltr);

        if (a.position().left + 90 >= b.position().left + b.width()) {
            arr[0] = NewX;
            arr[1] = NewY;
            i = 0;
            arr[2] += 0.1;
            ltr = false;

        }
        if (a.position().left <= b.position().left) {
            ltr = true;
            i = 0;
            i = 0;
            arr[0] = NewX;
            arr[1] = NewY;
            arr[2] += 0.1;
        }

        if (a.position().top <= b.position().top) {
            sin = false;
            i = 0;
            arr[0] = NewX;
            arr[1] = NewY;
            arr[2] -= 0.1;
        }

        if (a.position().top + 72 >= b.position().top + b.height()) {
            sin = true;
            i = 0;
            arr[0] = NewX;
            arr[1] = NewY;
            arr[2] -= 0.1;
        }
    }
}


var thisX=0;
var thisY=0;

var translateInterval;
var translateOberInterval;


$('.spaceman2').hover(
    function () {
        translateInterval = setInterval(function () {
            var thisTransform = $('.spaceman2').css('transform');
            var MatrixTransform = thisTransform.replace(/^\w*\(/, '').replace(')', '').split(/\s*,\s*/);
            thisX = MatrixTransform[4];
            thisY = MatrixTransform[5];
          // console.log(thisTransform);

        }, 1000 / 60);
    },
    function () {
        clearInterval(translateInterval);

        $('.spaceman2').removeClass('animation');

        translateOberInterval = setInterval(function () {
            thisX = 0.15+thisX*1;
            thisY = 0.15+ thisY*1;
            console.log(thisX);
            console.log(thisY);

            $('.spaceman2').css({
                'transform': 'translateX(' + thisX + 'px) translateY(' + thisY + 'px)  rotate(-45deg)'
            });
            if (thisX >= 0 || thisY >= 0) {

                $('.spaceman2').css({
                    'transform': 'rotate(-45deg)'
                });
                $('.spaceman2').addClass('animation');

                clearInterval(translateOberInterval);
            }
        }, 1000 / 60);
    }
);

$('.langSwitch, .spaceman2').click(function () {
    $('.spaceman').toggleClass('spaceman--en');
    $('.text').empty();
    if ($('.spaceman').hasClass('spaceman--en')) {
        $('.text').html('click on the astronaut');
    } else {
        $('.text').html('нажми на космонавта');
    }
});


