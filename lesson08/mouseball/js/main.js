var $document = $(document);
var $body     = $('body');

var $container = $('<div></div>');
$body.append($container);

$container.css({
    'background-color': 'pink',
    'height':   '100%',
    'width':    '100%',
    'position': 'absolute'
});


var $balls     = [];
var numOfBalls = 100;

for (var i = 0; i < numOfBalls; i++ ) {
    $ball  = $('<div class="ball"></div>');
    $container.append($ball);
    $balls.push($ball);
}

function moveBallTo($ball, x, y, duration) {

    $ball.animate({
      "top":  y + "px",
      "left": x + "px",
    },{
        queue: false,
        duration: duration,
        easing: 'linear'
    });

}

$document.on('mousemove', function(e) {
    //moveBallTo($ball1, e.clientX, e.clientY, 500);
    for (var i = 0; i < numOfBalls; i++ ) {
        moveBallTo($balls[i], e.clientX, e.clientY, 100 * (i+1));
    }
});