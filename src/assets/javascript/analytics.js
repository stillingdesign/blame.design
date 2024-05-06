// Scroll Depth Tracking Sections
function scrollDepth() {
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('section');
        const observedSections = new Set(); // Set to keep track of observed sections

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the section is in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(sections).indexOf(entry.target);
                    // Check if the section has not been logged before
                    if (!observedSections.has(index)) {
                        plausible(`Viewed section ${index + 1}`);
                        console.log("Section " + (index + 1) + " is in view");
                        observedSections.add(index); // Add to the set to prevent re-logging
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    });
}

scrollDepth();