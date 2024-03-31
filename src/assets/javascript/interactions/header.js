import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(`[data-header]`);
const headerBg = document.querySelector(`[data-header-bg]`);

// Push header up on scroll
function headerShrink() {
    const tmln = gsap.timeline({
        scrollTrigger: {
            trigger: `body`,
            start: `top top`,
            scrub: 0.5,
            end: `+=128`
        }
    });
    tmln.from(header, { y:24, duration: 1 })
        .to(headerBg, { opacity:1, duration:1 })
}
headerShrink();


// Invert Header Theme
function headerInvert() {
    const inverts = document.querySelectorAll('[data-invert]');
    inverts.forEach(invert => {
        // get height of header
        const offset = header.offsetHeight / 3;
        const theme = invert.getAttribute('data-invert');
        const tmln = gsap.timeline({
            scrollTrigger: {
                trigger: invert,
                start: `-=${offset}`,
                end: `+=${offset}`,
                scrub: 1,
            }
        });
        if( theme == 'light' ) {
            tmln
                .to('[data-header]', { color: 'rgba(13,13,13,1)' }, 0)
                .to('[data-header-bg]', { backgroundColor: 'rgba(217, 217, 217, 1)', borderColor: 'rgba(13,13,13,0.08' }, 0)
                .to('[data-header-btn-bg]', { backgroundColor: 'rgba(13, 13, 13, 1)' }, 0)
                .to('[data-header-btn-inner]', { backgroundColor: 'rgba(255, 255, 255, 0.5)' }, 0)
                .to('[data-modal-signup-bg-inner]', { backgroundColor: 'rgba(217, 217, 217, 0.95)' }, 0)
        }
        if( theme == 'dark' ) {
            tmln
                .to('[data-header]', { color: 'rgba(255,255,255,1)' }, 0)
                .to('[data-header-bg]', { backgroundColor: 'rgba(8, 8, 8, 1)', borderColor: 'rgba(255,255,255,0.08' }, 0)
                .to('[data-header-btn-bg]', { backgroundColor: 'rgba(255, 255, 255, 1)' }, 0)
                .to('[data-header-btn-inner]', { backgroundColor: 'rgba(8, 8, 8, 0.5)' }, 0)
                .to('[data-modal-signup-bg-inner]', { backgroundColor: 'rgba(8, 8, 8, 0.95)' }, 0)
        }
    });
}
window.addEventListener('load', headerInvert);