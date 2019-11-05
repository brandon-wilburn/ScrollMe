var scrollPercent = null;

$('.content').on('scroll', function(){
    var s = $('.content').scrollTop(),
        d = $(document.body).height(),
        c = $('.content').height();
    // console.log("s"+s);
    // console.log("d"+d);
    // console.log("c"+c);
    scrollPercent = (s / ((d*10) - c)) * 100;
    // console.log(scrollPercent);
    
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
    duration: 1000,
    scale: [
        {value: 1},
        {value: 3},
        {value: 1, duration: 500}
      ],
    delay: anime.stagger(200, {grid: [4, 6], axis: 'y'})
});

var rotato = anime ({
    targets: '.thisBall',
    autoplay: true,
    loop: true,
    rotate: '360deg',
    easing: 'easeOutSine',
    // easing: 'steps(30)',
    // duration: 1000,
    delay: anime.stagger(30, {grid: [4, 6], axis: 'center'})
});

var gradient = anime ({
    // targets: '.bigCircle',
    // autoplay: false,
    // rotate: '720deg',
    // easing: 'easeOutSine',
    // // easing: 'steps(30)',
    // // duration: 1000,
    // delay: anime.stagger(30, {grid: [4, 6], axis: 'center'})
});

var blurMe = anime ({
    targets: '.thisBall',
    autoplay: true,
    loop: true,
    filter: [
        {value: 'blur(0px)'},
        {value: 'blur(10px)'},
        {value: 'blur(0px)', duration: 500}
    ],
    easings: 'easeOutSine',
    duration: 1000,
    delay: anime.stagger(200, {grid: [4, 6], axis: 'y'})
});

var blockBoiJB = anime ({
    targets: '.blocker',
    autoplay: true,
    loop: true,
    // easing: 'steps(30)',
    scale: [
        {value: 1},
        {value: 1.2},
        {value: .2},
        {value: .8},
        {value: 1}
      ],
    easing: 'easeInOutSine',
    // duration: 1000,
    delay: anime.stagger(60, {grid: [4, 6], axis: 'y'})
});

var fullCircle = anime ({
    targets: '.blocker',
    autoplay: false,
    easing: 'easeOutSine',
    height: [
        {value: '10.5vw'},
        {value: '1vw'}
    ],
    // easing: 'steps(30)',
    // duration: 1000,
    delay: anime.stagger(30, {grid: [4, 6], axis: 'y'})
});

var c

$('.content').on('scroll', function(){

    rotato.seek(scrollPercent/100 * rotato.duration);
    gradient.seek(scrollPercent/100 * gradient.duration);
    // blockBoiJB.seek(scrollPercent/100 * blockBoiJB.duration);
    fullCircle.seek(scrollPercent/100 * fullCircle.duration);
})