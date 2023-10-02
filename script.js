const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;
function skewCircle(){
    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout)
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale)
        
        timeout = setTimeout(function(){
            document.querySelector('#miniCircle').style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px) scale(1, 1)`
        }, 100)

    })
}
function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector('#miniCircle').style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px) scale(${xscale}, ${yscale})`
    })
}

function heroAni(){
    var tl = gsap.timeline();
    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to('.boundingElem', {
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from('#heroFooter',{
        y: '-10',
        opacity: 0,
        duration: 1,
        delay: -1,
        ease: Expo.easeInOut
    })
}

heroAni()
skewCircle()
circleMouseFollower()