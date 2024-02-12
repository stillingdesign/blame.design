import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const desktopView = window.matchMedia("(min-width: 1024px)")
const dropdowns = document.querySelectorAll("[data-header-dropdown]");
const hamburger = document.querySelector("[data-header-navigation-button]");
const navigation = document.querySelector("[data-header-navigation-menu]");

// Toggle header dropdowns
function dropdownToggle(el, event, entering) {
    const button = el.querySelector("[data-header-dropdown-button]");
    const chevron = el.querySelector("[data-header-dropdown-button] div svg");
    const menu = el.querySelector("[data-header-dropdown-pane]");
    const menuItems = menu.querySelector("ul");

    if(desktopView.matches === false) {
        // Mobile animations
        if(button.getAttribute("aria-expanded") === "true" && event.type === "click") {
            // Close mobile
            const close = gsap.timeline({});
                  close.set(button, {attr: {"aria-expanded":false}})
                  close.to(chevron, {overwrite:true, rotationZ:0, duration:0.3, ease:"power4.out"})
                  close.to(menuItems, {overwrite:true, height: 0, duration:0.3, ease:"power4.out" }, "-=0.3")
                  close.set(menuItems, { clearProps: "all" })
                  close.set(chevron, { clearProps: "all" });
        } else if(button.getAttribute("aria-expanded") === "false" && event.type === "click") {
            // Open mobile
            const open = gsap.timeline({});
                  open.set(button, {attr: {"aria-expanded":true}})
                  open.to(chevron, {rotationZ:180, duration:0.5, ease:"power4.out"})
                  open.to(menuItems, {height: "auto", duration:0.5, ease:"power4.out" }, "-=0.5");
            dropdowns.forEach(dropdown => {
                if(dropdown !== el && dropdown.querySelector("[data-header-dropdown-button]").getAttribute("aria-expanded") === "true") { 
                    dropdownToggle(dropdown, event, false) 
                }
            });
        }
    } else { 
        // Desktop animations
        if(entering === false || entering !== true && button.getAttribute("aria-expanded") === "true") {
            // Close desktop
            const close = gsap.timeline({}); 
                  close.set(button, {attr: {"aria-expanded":false}})
                  close.to(chevron, {overwrite:true, rotationZ:0, duration:0.3, ease:"power4.out"})
                  close.to(menu, {overwrite:true, opacity:0, scale:0.8, duration:0.3, ease:"power4.out"}, "-=0.3")
                  close.set(menu, { clearProps: "all" })
                  close.set(chevron, { clearProps: "all" });
        } else {
            // Open desktop
            const open = gsap.timeline({});
                  open.set(menu, { scale:0.8 })
                  open.set(button, {attr: {"aria-expanded":true}})
                  open.set(menu, {display:"block"})
                  open.to(chevron, {rotationZ:180, duration:0.5, ease:"power4.out"})
                  open.to(menu, {opacity:1, scale:1, duration:0.5, ease:"power4.out" }, "-=0.5");
            dropdowns.forEach(dropdown => {
                if(dropdown !== el && dropdown.querySelector("[data-header-dropdown-button]").getAttribute("aria-expanded") === "true") { 
                    dropdownToggle(dropdown, event, false) 
                }
            });
        }
    }
}

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click",      function(event) { dropdownToggle(this, event) });
    dropdown.addEventListener("mouseenter", function(event) { dropdownToggle(this, event, true) });
    dropdown.addEventListener("mouseleave", function(event) { dropdownToggle(this, event, false) });
})

// Toggle menu on mobile
function navigationToggle() {
    if(hamburger.getAttribute("aria-expanded") === "true") {
        // Close menu
        const closeNav = gsap.timeline({});
              closeNav.set(hamburger, {attr: {"aria-expanded":false}})
              closeNav.to(hamburger.firstElementChild, {overwrite:true, rotation:0, duration:0.25, ease:"power4.out"})
              closeNav.to(hamburger.lastElementChild,  {overwrite:true, rotation:0, duration:0.25, ease:"power4.out"}, "-=0.25")
              closeNav.to(hamburger.firstElementChild, {y:0, duration:0.25, ease:"power4.out"})
              closeNav.to(hamburger.lastElementChild, {y:0, duration:0.25, ease:"power4.out"}, "-=0.25")
              closeNav.to(navigation, {overwrite:true, xPercent:100, duration:0.5, ease:"power4.out"}, "-=0.5")
              closeNav.set(navigation, { clearProps: "all" })
              closeNav.set(hamburger.firstElementChild, { clearProps: "all" })
              closeNav.set(hamburger.lastElementChild, { clearProps: "all" });
    } else {
        const openNav = gsap.timeline({});
              openNav.set(hamburger, {attr: {"aria-expanded":true}})
              openNav.set(navigation, {overwrite:true, xPercent:100, display: "block"})
              openNav.to(hamburger.firstElementChild, {y:4, duration:0.25, ease:"power4.out"})
              openNav.to(hamburger.lastElementChild, {y:-4, duration:0.25, ease:"power4.out"}, "-=0.25")
              openNav.to(hamburger.firstElementChild, {rotation:45, duration:0.25, ease:"power4.out"})
              openNav.to(hamburger.lastElementChild,  {rotation:-45, duration:0.25, ease:"power4.out"}, "-=0.25")
              openNav.to(navigation, {xPercent:0, duration:0.75, ease:"power4.out"}, "-=0.5");
    }
}

hamburger.addEventListener("click", function() { navigationToggle() });

// Push header up on scroll
const header = document.querySelector(`[data-header]`);
const headerBg = document.querySelector(`[data-header-bg]`);

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
        .from(headerBg, { opacity:0, duration:1 })
}
headerShrink();