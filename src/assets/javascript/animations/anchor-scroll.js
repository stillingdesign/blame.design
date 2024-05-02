import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

if(document.querySelectorAll(`[data-anchor-scroll]`)) {
    const anchors = document.querySelectorAll(`[data-anchor-scroll]`);
    anchors.forEach(anchor => {
        const link = anchor.href;
        const sectionId = link.split("/").pop();
        const scrollToSection = (event) => {
            event.preventDefault();
            gsap.to(window, {duration: 1, scrollTo: { y: sectionId, offsetY: 106 }, ease: "power3.inOut"});
        }
        anchor.addEventListener(`click`, scrollToSection, false);
    })
}