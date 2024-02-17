import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if(document.querySelector('[data-page="home"]')) {

    // Toggle Headline Animation
    const btns = document.querySelectorAll('[data-hero-btn]');
    const lineOne = document.querySelector('[data-headline-one]');
    const lineTwo = document.querySelector('[data-headline-two]');
    const results = document.querySelector('[data-hero-results]');

    // Update Button Classes
    function updateButtonClasses(activeBtn) {
        btns.forEach(btn => {
            if(btn === activeBtn) {
                btn.classList.remove('btn:disabled-i', 'btn:hover');
                btn.classList.add('btn:blue-i', 'cursor:not-allowed');
            } else {
                btn.classList.remove('btn:blue-i', 'cursor:not-allowed');
                btn.classList.add('btn:disabled-i', 'btn:hover');
            }
        });
    }

    // Check Option + Animate
    function toggleHeadline(btn) {
        const option = btn.getAttribute('data-hero-btn');
        const lineOneHeight = lineOne.offsetHeight;
        const lineTwoHeight = lineTwo.offsetHeight;
        const resultsHeight = results.offsetHeight;
        const timing = 2;
        const easing = 'power4.inOut';
        updateButtonClasses(btn);
        if(option === `"b"`) {
            const tmln = gsap.timeline({});
            tmln
                .to(lineOne, {overwrite:true, y: lineOneHeight * -1, duration: timing, ease: easing}, 0)
                .to('[data-headline-one-a]', {overwrite:true, autoAlpha:0, rotate:-6, duration: timing, ease: easing}, 0)
                .to('[data-headline-one-b]', {overwrite:true, autoAlpha:1, rotate:0,  duration: timing + 0.1, ease: easing}, 0)
                .to(lineTwo, {overwrite:true, y: lineTwoHeight * -1, duration: timing + 0.2, ease: easing}, 0)
                .to('[data-headline-two-a]', {overwrite:true, autoAlpha:0, rotate:-6, duration: timing + 0.2, ease: easing}, 0)
                .to('[data-headline-two-b]', {overwrite:true, autoAlpha:1, rotate:0,  duration: timing + 0.3, ease: easing}, 0)
                .to(results, {overwrite:true, y: resultsHeight * -1,  duration: timing, ease: easing}, 0)
                .to('[data-hero-results-a]', {overwrite:true, autoAlpha:0, duration: timing, ease: easing}, 0)
                .to('[data-hero-results-b]', {overwrite:true, autoAlpha:1, duration: timing, ease: easing}, 0)
        }
        if(option === `"a"`) {
            const tmln = gsap.timeline({});
            tmln
                .to(lineTwo, {overwrite:true, y: 0, duration: timing, ease: easing}, 0)
                .to('[data-headline-two-a]', {overwrite:true, autoAlpha:1, rotate:0,  duration: timing, ease: easing}, 0)
                .to('[data-headline-two-b]', {overwrite:true, autoAlpha:0, rotate:6, duration: timing + 0.1, ease: easing}, 0)
                .to(lineOne, {overwrite:true, y: 0, duration: timing + 0.2, ease: easing}, 0)
                .to('[data-headline-one-a]', {overwrite:true, autoAlpha:1, rotate:0,  duration: timing + 0.2, ease: easing}, 0)
                .to('[data-headline-one-b]', {overwrite:true, autoAlpha:0, rotate:6, duration: timing + 0.3, ease: easing}, 0)
                .to(results, {overwrite:true, y: 0,  duration: timing, ease: easing}, 0)
                .to('[data-hero-results-a]', {overwrite:true, autoAlpha:1, duration: timing, ease: easing}, 0)
                .to('[data-hero-results-b]', {overwrite:true, autoAlpha:0, duration: timing, ease: easing}, 0)
        }
    }

    btns.forEach(btn => {
        // For Mice
        btn.addEventListener('click', () => {
            toggleHeadline(btn);
        });
        // For Keyboards
        btn.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                toggleHeadline(btn);
            }
        });
    });
}