// Year
let yearEl = document.getElementById('year')
let date = new Date()
let year = date.getFullYear()
yearEl.textContent = year

// Smooth Scroll Effect
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

function heroAni() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to(".boundingElem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
    })
    .from("#heroFooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    });
}

var timeout;

function skewCircle() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
        
        timeout = setTimeout(function () {
            document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px) scale(1, 1)`
        }, 100)
    });
}
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px) scale(${xscale}, ${yscale})`
    })
}



heroAni()
skewCircle()
circleMouseFollower()


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        document.getElementById("miniCircle").classList.remove("link");
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        document.getElementById("miniCircle").classList.add("link");
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            display: "block",
            ease: Power3,
            top: diff,
            left: dets.clientX,
            opacity: 1,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});

