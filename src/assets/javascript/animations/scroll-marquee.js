import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

if(document.querySelector('[data-scroll-marquee]')) {
    document.querySelectorAll('[data-scroll-marquee]');
    function animateScrollMarquee() {
        function setScrub() {
            let scrub = 0;
            if (window.innerWidth > 768) {
                scrub = 1;
            } else {
                scrub = 0;
            }
            return scrub;
        }
        const marquees = document.querySelectorAll('[data-scroll-marquee]');
        marquees.forEach(marquee => {
            const container = marquee.querySelector('[data-scroll-marquee-move]');
            const moveDist = container.getAttribute('data-scroll-marquee-move');
            const containerWidth = (container.offsetWidth / moveDist) * -1;
            const tmln = gsap.timeline({
                scrollTrigger: {
                    trigger: marquee,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: setScrub(),
                }
            });
            tmln
                .to(container, { x: containerWidth }, 0);
        });
    }
    animateScrollMarquee();
}