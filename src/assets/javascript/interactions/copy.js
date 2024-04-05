import { gsap } from "gsap";

if(document.querySelector('[data-copy]')) {
    const buttons = document.querySelectorAll('[data-copy]');
    function copyURL(el) {
        // copy the current URL to the clipboard
        const confirm = el.querySelector("[data-confirm]");
        const confirmOffset = confirm.offsetWidth;
        const url = el.getAttribute('data-copy');
        navigator.clipboard.writeText(url);
        const tmln = gsap.timeline({});
            tmln
                .to(confirm, {x: 0, duration: 1, ease: 'power3.inOut'}, 0)
                .to(confirm, {x: confirmOffset, duration: 1, ease: 'power3.inOut'}, 3)
    }
    buttons.forEach(button => {
        button.addEventListener("click", function(event) { copyURL(this) });
    });
}