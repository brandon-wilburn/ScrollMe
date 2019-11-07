var scrollPercent = null;

$('.content').on('scroll', function(){
    var s = $('.content').scrollTop(),
        d = $(document.body).height(),
        c = $('.content').height();
    // console.log("s"+s);
    // console.log("d"+d);
    // console.log("c"+c);
    scrollPercent = (s / ((d*20) - c)) * 100;
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
    // autoplay: true,
    // loop: true,
    rotate: '1080deg',
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
        {value: 1.2, duration: 1000},
        {value: .2},
        {value: .8},
        {value: 1}
      ],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: anime.stagger(60, {grid: [4, 6], axis: 'y'})
});

var fullCircle = anime ({
    targets: '.blocker',
    autoplay: false,
    easing: 'easeOutSine',
    height: [
        {value: '10.5vw'},
        {value: '1vw'},
        {value: '22vw'}
    ],
    // easing: 'steps(30)',
    duration: 1000,
    delay: anime.stagger(30, {grid: [4, 6], axis: 'y'})
});

// var reverseFullCircle = anime ({
//     targets: '.blocker',
//     autoplay: false,
//     easing: 'easeOutSine',
//     height: [
//         // {value: '1vw'},
//         {value: '22vw'}
//     ],
//     // easing: 'steps(30)',
//     duration: 1000,
//     delay: anime.stagger(30, {grid: [4, 6], axis: 'y'})
// })

var letsGetSquare = anime ({
    targets: '.bigCircle',
    autoplay: false,
    easing: 'easeOutSine',
    borderRadius: [
        {value: '50%'},
        {value: '0%'}
    ],
    delay: anime.stagger(30, {grid: [4, 6], axis: 'y'})
})

var dyingBreath = anime({
    targets: '.smallWhite',
    autoplay: false,
    height: [
        {value: '4vw'},
        {value: '0vw'}
      ],
    easing: 'easeOutSine',
    duration: 1000,
    delay: anime.stagger(200, {grid: [4, 6], axis: 'y'})
});

var issaLine = anime ({
    targets: '.blocker',
    autoplay: false,
    height: [
        {value: '22vw'},
        {value: '1vw'}
    ],
    easing: 'easeOutSine',
    // easing: 'steps(30)',
    // duration: 1000,
    delay: anime.stagger(30, {grid: [4, 6], axis: 'y'})
})

var reverseRotato = anime ({
    targets: '.thisBall',
    autoplay: false,
    // loop: true,
    rotate: [
        {value: '1080deg'},
        {value: '0deg'}
    ],
    easing: 'easeOutSine',
    // easing: 'steps(30)',
    // duration: 1000,
    delay: anime.stagger(30, {grid: [4, 6], axis: 'center'})
});

$('.content').on('scroll', function(){
    console.log("Percent: "+scrollPercent+"%");
    // if (scrollPercent>0 && scrollPercent<33.9){
        // First set
        // console.log(rotato.duration);
        console.log(scrollPercent/33);
        rotato.seek(scrollPercent/33 * rotato.duration);
        fullCircle.seek(scrollPercent/33 * fullCircle.duration);
        // console.log(scrollPercent/33 * fullCircle.duration);
    // }
    // Second set
    // if (scrollPercent>33 && scrollPercent<66.9) {
        // console.log("Higher than 50%");
        // console.log(scrollPercent/75 * reverseFullCircle.duration);
        console.log(scrollPercent/33 - 1);
        letsGetSquare.seek(((scrollPercent/33)-1) * letsGetSquare.duration);
        dyingBreath.seek(((scrollPercent/33)-1) * dyingBreath.duration);
    // }
    // if (scrollPercent>66) {
        console.log((scrollPercent/33)-2);
        // console.log(issaLine.duration);
        // console.log(scrollPercent/33);
        issaLine.seek(((scrollPercent/33)-2) * issaLine.duration);
        reverseRotato.seek(((scrollPercent/33)-2) * reverseRotato.duration);
    // }
})