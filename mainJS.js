var scrollPercent = null;

$(window).on('scroll', function(){
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
  
    scrollPercent = (s / (d - c)) * 100;
})

var balls = document.getElementsByClassName("thisBall");
// console.log(balls);
var innerCircles = document.getElementsByClassName("smallWhite");
// console.log(innerCircles);

// var ballCounter = 0;
// for (i=0; i<balls.length; ++i) {
//     thisRotate = ballCounter*20;
//     var rotateString = "rotate("+thisRotate+"deg)";
//     // console.log(rotateString);
//     ballCounter += 1;
//     balls[i].style.transform = rotateString;
// }

var breath = anime({
    targets: '.smallWhite',
    autoplay: true,
    loop: true,
    easing: 'easeOutSine',
    easing: 'steps(30)',
    duration: 1000,
    scale: [
        {value: 1},
        {value: 3},
        {value: 1}
      ],
    delay: anime.stagger(200, {grid: [4, 6], axis: 'y'})
});

var rotato = anime ({
    targets: '.thisBall',
    autoplay: false,
    rotate: '720deg',
    easing: 'easeOutSine',
    // easing: 'steps(30)',
    // duration: 1000,
    delay: anime.stagger(30, {grid: [4, 6], axis: 'center'})
});

$(window).on('scroll', function(){
    rotato.seek(scrollPercent/100 * rotato.duration);
})