import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if(document.querySelector('[data-page="home"]')) {

    // Variables
    const btns = document.querySelectorAll('[data-hero-btn]');
    const lineOne = document.querySelector('[data-headline-one]');
    const lineTwo = document.querySelector('[data-headline-two]');
    const results = document.querySelector('[data-hero-results]');

    // Update Button Classes on Option Click
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

    // Animate Headline and Results on Option Click
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

    // Event Listeners for Option Clicks
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

    // Particles
    function particles() {
        const canvas = document.querySelector('[data-particles]');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];

        function initParticles() {
            // Determine the number of particles based on screen width
            const particleCount = window.innerWidth < 768 ? 200 : 1000;
            const particleSize = window.innerWidth < 768 ? 0.25 : 0.5;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1,
                    vy: (Math.random() - 0.5) * 1,
                    size: Math.random() * 0.125 + particleSize,
                    opacity: Math.random(),
                    fadeDirection: Math.random() < 0.5 ? -1 : 1 // Randomly choose initial fade direction
                });
            }
        }

        function updateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Update particle opacity for fade in/out effect
                particle.opacity += 0.01 * particle.fadeDirection;
                if (particle.opacity <= 0 || particle.opacity >= 1) {
                    particle.fadeDirection *= -1; // Reverse fade direction
                    particle.opacity = particle.opacity < 0 ? 0 : 1; // Clamp opacity to [0,1] range
                }

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`; // Use particle's opacity
                ctx.fill();
            });
            requestAnimationFrame(updateParticles);
        }

        initParticles();
        updateParticles();
    }
    particles();

    // Scroll Phones
    function scrollPhonesD() {
        const tmln = gsap.timeline({
            scrollTrigger: {
                trigger: `[data-hero]`,
                start: `top top`,
                end: `bottom center`,
                scrub: 1,
            }
        });
        tmln
            .to('[data-phone-1]', { x:0, y:0, autoAlpha:1, }, 0)
            .to('[data-phone-2]', { x:0, y:0, autoAlpha:1, }, 0)
            .to('[data-phone-3]', { x:0, y:0, autoAlpha:1, }, 0)
            .to('[data-phone-4]', { x:0, y:0, autoAlpha:1, }, 0)
            .to('[data-phone-5]', { x:0, y:0, autoAlpha:1, }, 0)
    }

    function scrollPhonesM() {
        const tmln = gsap.timeline({
            scrollTrigger: {
                trigger: `[data-hero]`,
                start: `top top`,
                end: `bottom center`,
                scrub: true,
            }
        });
        tmln
            .to('[data-phone-1]', { x:0, y:0, autoAlpha:1, }, 0)
            .to('[data-phone-2]', { x:0, y:0, autoAlpha:1, }, 0)
            .to('[data-phone-3]', { x:0, y:0, autoAlpha:1, }, 0)
            .to('[data-phone-m2]', { x:0, y:0, autoAlpha:1, }, 0)
            .to('[data-phone-m3]', { x:0, y:0, autoAlpha:1, }, 0)
    }

    // Phone Scroll Media Queries
    let mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
        scrollPhonesM();
    });

    mm.add("(min-width: 1024px)", () => {
        scrollPhonesD();
    });

    // Toggle Animation
    function animateToggle() {
        const tmln = gsap.timeline({ repeat: -1, repeatDelay: 3 });
            tmln
                .to('[data-animate-toggle-knob]', {x: 96, duration: 2.5, ease: 'expo.inOut'}, 0)
                .to('[data-animate-toggle-pill]', {backgroundColor: 'rgba(0,190,99,0.08)', duration: 2.5, ease: 'expo.inOut'}, 0)
                .to('[data-animate-toggle-dots]', {backgroundColor: 'rgba(0,190,99,0.8)', duration: 2.5, ease: 'expo.inOut'}, 0)
                .to('[data-animate-toggle-text-r]', {autoAlpha:0, duration: 2.5, ease: 'expo.inOut'}, 0)
                .to('[data-animate-toggle-text-l]', {autoAlpha:1, duration: 2.5, ease: 'expo.inOut'}, 0)
                .to('[data-animate-toggle-knob]', {x: 0, duration: 2.5, ease: 'expo.inOut'}, 5.5)
                .to('[data-animate-toggle-pill]', {backgroundColor: 'rgba(255,92,119,0.1)', duration: 2.5, ease: 'expo.inOut'}, 5.5)
                .to('[data-animate-toggle-dots]', {backgroundColor: 'rgba(0,190,99,0)', duration: 2.5, ease: 'expo.inOut'}, 5.5)
                .to('[data-animate-toggle-text-r]', {autoAlpha:1, duration: 2.5, ease: 'expo.inOut'}, 5.5)
                .to('[data-animate-toggle-text-l]', {autoAlpha:0, duration: 2.5, ease: 'expo.inOut'}, 5.5)
    }
    animateToggle();

    // Ball Roll Expand Animation
    function animateBallRollExpand() {
        const tmln = gsap.timeline({ repeat: -1, repeatDelay: 0 });
            tmln
                .to('[data-animate-roll-expand-ball-1]', {y: '0', duration: 2.5, ease: 'expo.out'}, 0)
                .to('[data-animate-ball-roll-expand-inner]', {width: '9rem', height: '9rem', opacity:0, duration: 2.5, ease: 'expo.out'}, 2)
                .to('[data-animate-ball-roll-expand-outer-1]', {width: '36rem', height: '36rem', opacity:0, duration: 5, ease: 'power4.out'}, 2)
                .to('[data-animate-roll-expand-ball-1]', {y: '-5rem', duration: 2.5, ease: 'expo.in'}, 2.5)
                .set('[data-animate-ball-roll-expand-inner]', {width: '0', height: '0', opacity:1}, 4.5)
                .to('[data-animate-roll-expand-ball-2]', {x: '0', duration: 2.5, ease: 'expo.out'}, 5)
                .to('[data-animate-ball-roll-expand-inner]', {width: '9rem', height: '9rem', opacity:0, duration: 2.5, ease: 'expo.out'}, 7)
                .to('[data-animate-ball-roll-expand-outer-2]', {width: '36rem', height: '36rem', opacity:0, duration: 5, ease: 'power4.out'}, 7)
                .to('[data-animate-roll-expand-ball-2]', {x: '-5rem', duration: 2.5, ease: 'expo.in'}, 7.5)
                .set('[data-animate-ball-roll-expand-inner]', {width: '0', height: '0', opacity:1}, 9.5)
                .to('[data-animate-roll-expand-ball-1]', {y: '0', duration: 2.5, ease: 'expo.out'}, 10)
                .to('[data-animate-ball-roll-expand-inner]', {width: '9rem', height: '9rem', opacity:0, duration: 2.5, ease: 'expo.out'}, 12)
                .to('[data-animate-ball-roll-expand-outer-3]', {width: '36rem', height: '36rem', opacity:0, duration: 5, ease: 'power4.out'}, 12)
                .to('[data-animate-roll-expand-ball-1]', {y: '5rem', duration: 2.5, ease: 'expo.in'}, 12.5)
                .set('[data-animate-ball-roll-expand-inner]', {width: '0', height: '0', opacity:1}, 14.5)
                .to('[data-animate-roll-expand-ball-2]', {x: '0', duration: 2.5, ease: 'expo.out'}, 15)
                .to('[data-animate-ball-roll-expand-inner]', {width: '9rem', height: '9rem', opacity:0, duration: 2.5, ease: 'expo.out'}, 17)
                .to('[data-animate-ball-roll-expand-outer-4]', {width: '36rem', height: '36rem', opacity:0, duration: 5, ease: 'power4.out'}, 17)
                .to('[data-animate-roll-expand-ball-2]', {x: '5rem', duration: 2.5, ease: 'expo.in'}, 17.5)
    }
    animateBallRollExpand();

    // Cube Drop Animation
    function animateCubeDrop() {
        const tmln = gsap.timeline({ repeat: -1, repeatDelay: 0 });
            tmln
                .to('[data-animate-cube-drop-cube]', {y: 0, opacity:1, duration: 0.5, stagger:0.5, ease: 'bounce.out'}, 0)
                .to('[data-animate-cube-drop-cube]', {backgroundColor: 'rgba(153,98,255,0.4)', duration: 1, stagger:0.05, ease: 'power1.out'})
                .to('[data-animate-cube-drop-dots-fill]', {backgroundColor: 'rgba(153,98,255,1)', duration: 1, ease: 'power4.out'}, 11)
                .to('[data-animate-cube-drop-container]', {rotate: -180, boxShadow: '0 2px 2px 0 rgba(255,255,255,0.03)', duration: 4, ease: 'power4.inOut'}, 11)
                .to('[data-animate-cube-drop-shading]', {boxShadow: 'inset 0 -6px 6px 0 rgba(0,0,0,0.8), inset 0 1px 1px 0 rgba(255,255,255,0.06), inset 0 4px 4px 0 rgba(0,0,0,0.3)', duration: 4, ease: 'power4.inOut'}, 11)
                .to('[data-animate-cube-drop-col]', {y: '-8rem', duration: 2, stagger:0.05, ease: 'power4.in'}, 11)
                .to('[data-animate-cube-drop-dots-fill]', {backgroundColor: 'rgba(153,98,255,0)', duration: 1, ease: 'power4.in'}, 12)
    }
    animateCubeDrop();

    // Test Tube Bubble Animation
    function animateBubbleTubes() {
        function randomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        const tubes = document.querySelectorAll('[data-bubble-tube]');
        tubes.forEach(tube => {
            const bubbles = document.querySelectorAll('[data-bubble]');
            bubbles.forEach(bubble => {
                const duration = randomBetween(1, 4);
                const tmln = gsap.timeline({ repeat: -1, repeatDelay: randomBetween(0, 4) });
                tmln
                    .to(bubble, {opacity:1, duration: duration / 2, ease: 'none'}, 0)
                    .to(bubble, {y: randomBetween(-24, -64), x: randomBetween(-16, 16), duration: duration, ease: 'none'}, 0)
                    .to(bubble, {opacity:0, duration: duration / 2, ease: 'none'}, duration / 2)
            });
        });
    }
    animateBubbleTubes();

    // Magnifier Animation
    function animateMagnifier() {
        const duration = 20;
        const outerOffset = document.querySelector('[data-magnify-outer-1]').offsetWidth * -1;
        const innerOffset = document.querySelector('[data-magnify-inner-1]').offsetWidth * -3;
        const tmln = gsap.timeline({ repeat: -1, repeatDelay: 0 });
            tmln
                .to('[data-magnify-outer-1]', {x: outerOffset, duration: duration, ease: 'none'}, 0)
                .to('[data-magnify-outer-2]', {x: outerOffset, duration: duration, ease: 'none'}, 0)
                .to('[data-magnify-inner-1]', {x: innerOffset, duration: duration, ease: 'none'}, 0)
                .to('[data-magnify-inner-2]', {x: innerOffset, duration: duration, ease: 'none'}, 0)
                .to('[data-magnify-inner-3]', {x: innerOffset, duration: duration, ease: 'none'}, 0)
                .to('[data-magnify-inner-4]', {x: innerOffset, duration: duration, ease: 'none'}, 0)
    }
    window.onload = function() { animateMagnifier(); }

    // Third Party Animation
    function animateThirdParty() {
        const duration = 1;
        const tmln = gsap.timeline({ repeat: -1, repeatDelay: 0 });
            tmln
                .to('[data-third-party-1]', {y: '-3.25rem', x: '-3.25rem', opacity:1, rotate:0,   duration: duration, ease: 'linear'}, 0)
                .to('[data-third-party-1]', {y: '-6.5rem',  x: '-6.5rem',  opacity:0, rotate:45,  duration: duration, ease: 'linear'}, duration)
                .to('[data-third-party-2]', {y: '-3.25rem', x: '3.25rem',  opacity:1, rotate:0,   duration: duration, ease: 'linear'}, duration * 2)
                .to('[data-third-party-2]', {y: '-6.5rem',  x: '6.5rem',   opacity:0, rotate:-45, duration: duration, ease: 'linear'}, duration * 3)
                .to('[data-third-party-3]', {y: '3.25rem',  x: '3.25rem',  opacity:1, rotate:0,   duration: duration, ease: 'linear'}, duration * 4)
                .to('[data-third-party-3]', {y: '6.5rem',   x: '6.5rem',   opacity:0, rotate:-45,  duration: duration, ease: 'linear'}, duration * 5)
                .to('[data-third-party-4]', {y: '3.25rem',  x: '-3.25rem', opacity:1, rotate:0,   duration: duration, ease: 'linear'}, duration * 6)
                .to('[data-third-party-4]', {y: '6.5rem',   x: '-6.5rem',  opacity:0, rotate:45, duration: duration, ease: 'linear'}, duration * 7)
    }
    animateThirdParty();

    // Dash Animation
    function animateDashDown() {
        const distance = 512;
        const duration = 3;
        const tmln = gsap.timeline({ repeat: -1, repeatDelay: 0 });
            tmln
                .to('[data-dasher-1]', {y: distance, duration: duration, ease: 'linear'}, 0)
                .to('[data-dasher-1]', {opacity: 1, duration: duration / 2, ease: 'linear'}, 0)
                .to('[data-dasher-1]', {opacity: 0, duration: duration / 2, ease: 'linear'}, duration / 2)
                .to('[data-dasher-2]', {y: distance, duration: duration, ease: 'linear'}, duration / 2)
                .to('[data-dasher-2]', {opacity: 1, duration: duration / 2, ease: 'linear'}, 0)
                .to('[data-dasher-2]', {opacity: 0, duration: duration / 2, ease: 'linear'}, (duration * 2) / 2)
                .to('[data-dasher-3]', {y: distance, duration: duration, ease: 'linear'}, (duration * 2) / 2)
                .to('[data-dasher-3]', {opacity: 1, duration: duration / 2, ease: 'linear'}, 0)
                .to('[data-dasher-3]', {opacity: 0, duration: duration / 2, ease: 'linear'}, (duration * 3) / 2)
                
    }
    mm.add("(min-width: 1024px)", () => { animateDashDown(); });
}