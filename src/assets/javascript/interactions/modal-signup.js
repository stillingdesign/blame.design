import { gsap } from "gsap";

function modalSignup() {
    const triggers = document.querySelectorAll('[data-modal-signup-trigger]');

    // Disable scroll
    function disableScroll() { document.body.style.overflow = 'hidden'; }

    // Enable scroll
    function enableScroll() { document.body.style.overflow = ''; }

    // Detect Closing Clicks
    const detectClosingClick = (event) => {
        if (!document.querySelector('[data-modal-signup-inner]').contains(event.target)) {
            closeModal();
        }
    };

    // Open Modal
    function openModal() {
        disableScroll();
        const tmln = gsap.timeline({});
        tmln
            .set('[data-modal-signup]', { autoAlpha: 1, overwrite: true }, 0)
            .to('[data-modal-signup-bg]', { opacity: 1, overwrite: true, duration: 1, ease: "power3.out"}, 0)
            .to('[data-modal-signup-gradients]', { scale:1, opacity: 1, overwrite: true, duration: 0.75, ease: "power3.inout"}, 0)
            .to('[data-modal-signup-outer]', { scale:1, opacity: 1, overwrite: true, duration: 1, ease: "elastic.out(1,0.6)"}, 0.125)
            .then(() => {
                document.addEventListener('click', detectClosingClick);
                document.querySelector('[data-modal-signup-close]').addEventListener('click', closeModal);
                document.querySelector('[data-modal-signup-input]').focus();
                triggers.forEach(trigger => {
                    trigger.setAttribute('aria-expanded', 'true');
                });
            });
    }

    // Close Modal
    function closeModal() {
        enableScroll();
        const tmln = gsap.timeline({});
        tmln
            .to('[data-modal-signup-gradients]', { scale:0, opacity: 0, overwrite: true, duration: 0.25, ease: "power3.out"}, 0)
            .to('[data-modal-signup-outer]', { scale:0.5, opacity: 0, overwrite: true, duration: 0.25, ease: "power3.out"}, 0)
            .to('[data-modal-signup-bg]', { opacity: 0, overwrite: true, duration: 0.5, ease: "power3.out"}, 0)
            .set('[data-modal-signup]', { autoAlpha: 0, overwrite: true }, 1)
            .then(() => {
                document.removeEventListener('click', detectClosingClick);
                document.querySelector('[data-modal-signup-close]').removeEventListener('click', closeModal);
                triggers.forEach(trigger => {
                    trigger.setAttribute('aria-expanded', 'false');
                });
            });
    }

    // Add Event Listener
    triggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });
}
modalSignup();
