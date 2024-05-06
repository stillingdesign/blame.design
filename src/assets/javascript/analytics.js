// Scroll Depth Tracking Sections
function scrollDepth() {
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
}

// Scroll Depth Tracking Percentage
function scrollDist() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Check if the marker has been logged before
            if (entry.isIntersecting && entry.target.dataset.logged === "false") {
                plausible(`Read ${entry.target.style.top}`);
                console.log(`Read ${entry.target.style.top}`);
                entry.target.dataset.logged = "true"; // Update the logged status
            }
        });
    }, {
        root: null, // observing for viewport
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the target is visible
    });

    const markers = document.querySelectorAll('[data-analytics-marker]');
    markers.forEach(marker => {
        observer.observe(marker);
    });
}

// Run
document.addEventListener("DOMContentLoaded", function () {
    scrollDepth();
    if(document.querySelector('[data-page="blog-post"]')) { scrollDist(); }
});