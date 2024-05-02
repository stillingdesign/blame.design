import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

if(document.querySelector('[data-page="blog-post"]')) {

    function setScrub() {
        let scrub = 0;
        if (window.innerWidth > 768) {
            scrub = 1;
        } else {
            scrub = 0;
        }
        return scrub;
    }

    function swapSubheader() {
        const tmln = gsap.timeline({
            scrollTrigger: {
                trigger: '[data-hero-img]',
                start: 'bottom top',
                toggleActions: 'play none reverse none',
            }
        });
        tmln
            .to('[data-subheader-hide]', { y: -22, autoAlpha:0, duration:1, ease: 'power3.inOut' }, 0)
            .to('[data-subheader-show]', { y: 2, autoAlpha:1, duration:1, ease: 'power3.inOut' }, 0);
    }
    swapSubheader();

    function indicateProgress() {
        const tmln = gsap.timeline({
            scrollTrigger: {
                trigger: '[data-content]',
                start: 'top 56',
                end: 'bottom bottom',
                scrub: setScrub(),
            }
        });
        tmln
            .to('[data-progress]', { scaleX: 1 }, 0)
    }
    indicateProgress();

}