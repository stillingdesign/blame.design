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

    // Media Queries
    let mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
        scrollPhonesM();
    });

    mm.add("(min-width: 1024px)", () => {
        scrollPhonesD();
    });

}