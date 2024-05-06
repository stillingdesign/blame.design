import { gsap } from "gsap";

if (document.querySelector('[data-form]')) {
    const forms = document.querySelectorAll('[data-form]');
    forms.forEach(form => {
        const formEl = form.querySelector("form");
        const errorEmail = form.querySelector('[data-error-email]');
        const errorFail = form.querySelector('[data-error-fail]');
        const success = form.querySelector('[data-success]');

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const input = form.querySelector("input[type='email']");
            const value = input.value;
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const forbiddenDomains = ["test.com", "example.com", "acme.com", "hotmail.com", "aol.com", "fake.com"];
            const hasForbiddenDomain = forbiddenDomains.some(domain => value.includes(domain));
            
            // If the email does not match the pattern or contains a forbidden domain
            if (!pattern.test(value) || hasForbiddenDomain) {
                const tmln = gsap.timeline({});
                tmln
                    .to(errorEmail, { autoAlpha: 1, scale:1, duration: 1, ease: "elastic.out(1,0.3)" })
                    .to(errorEmail, { autoAlpha: 0, scale:0.7, duration:0.5, ease: "power3.out" }, 2);
            } else {
                // If validation passes, proceed with AJAX submission
                const formData = new FormData(formEl);
                fetch('/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                })
                .then(response => {
                    if (response.ok) {
                        // Show success message
                        plausible('Signup');
                        const tmln = gsap.timeline({});
                        tmln
                            .to(success, { autoAlpha: 1, x:0, duration: 1, ease: "power3.out" })
                            .to(errorEmail, { autoAlpha: 0, scale:0.7, duration:0.5, ease: "power3.out" }, 0)
                            .to(success, { autoAlpha: 0, x:'100%', duration: 0.5, ease: "power3.in" }, 3);
                        formEl.reset(); // Optional: reset form fields
                    } else {
                        // Show submission error
                        gsap.to(errorFail, { autoAlpha: 1, scale:1, duration: 1, ease: "elastic.out(1,0.3)" });
                    }
                })
                .catch(error => {
                    // Handle network errors
                    gsap.to(errorFail, { autoAlpha: 1, scale:1, duration: 1, ease: "elastic.out(1,0.3)" });
                });
            }
        });
    });
} 