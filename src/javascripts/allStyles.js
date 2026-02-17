import '../stylesheets/style.css'

const menuButton = document.querySelector(".menu-button");
let isOpen = true;

const menuOpenSVG = `<svg class="menu-icon" width="44" height="172" viewBox="0 0 44 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="36.5" width="43" height="99" rx="21.5" stroke="black"/>
        <rect x="10" y="70" width="24" height="4" rx="2" fill="black"/>
        <rect x="10" y="84" width="24" height="4" rx="2" fill="black"/>
        <rect x="10" y="98" width="24" height="4" rx="2" fill="black"/>
      </svg>`;

const menuClosedSVG = `<svg class="menu-icon" width="44" height="100" viewBox="0 0 44 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="43" height="99" rx="21.5" stroke="black"/>
        <rect width="29.5117" height="4.07058" rx="2.03529" transform="matrix(0.709577 0.704628 -0.709577 0.704628 12.8887 38.3369)" fill="black"/>
        <rect width="29.5117" height="4.07058" rx="2.03529" transform="matrix(-0.709577 0.704628 -0.709577 -0.704628 34 40.8682)" fill="black"/>
      </svg>`;

const menuPanel = document.querySelector(".menu-panel");
const menuBackdrop = document.querySelector(".menu-backdrop");

menuButton.addEventListener("click", function () {
    const menuIcon = menuButton.querySelector(".menu-icon");
    if (isOpen) {
        menuIcon.outerHTML = menuClosedSVG;
        menuPanel.classList.add("menu-panel--open");
        menuBackdrop.classList.add("menu-backdrop--open");
        isOpen = false;
    } else {
        menuIcon.outerHTML = menuOpenSVG;
        menuPanel.classList.remove("menu-panel--open");
        menuBackdrop.classList.remove("menu-backdrop--open");
        isOpen = true;
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    if (scrollToTopBtn) {
        // Scroll to top when clicked
        scrollToTopBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            // Alternative method for better browser support
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        });
    }
});



// Sync custom scrollbar with page scroll
const customScrollbar = document.querySelector(".custom-scrollbar");
if (customScrollbar) {
    function setupScrollbar() {
        let scrollContent = customScrollbar.querySelector(".scroll-content");
        if (!scrollContent) {
            scrollContent = document.createElement("div");
            scrollContent.className = "scroll-content";
            scrollContent.style.width = "1px";
            customScrollbar.appendChild(scrollContent);
        }
        const pageHeight = document.documentElement.scrollHeight;
        scrollContent.style.height = pageHeight + "px";
    }

    function syncScrollbar() {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrollContent =
            customScrollbar.querySelector(".scroll-content");

        if (scrollContent && maxScroll > 0) {
            const scrollbarMaxScroll =
                scrollContent.offsetHeight - customScrollbar.offsetHeight;
            if (scrollbarMaxScroll > 0) {
                customScrollbar.scrollTop =
                    (scrollTop / maxScroll) * scrollbarMaxScroll;
            }
        }
    }

    setupScrollbar();
    window.addEventListener("scroll", syncScrollbar);
    window.addEventListener("resize", function () {
        setupScrollbar();
        syncScrollbar();
    });

    setTimeout(syncScrollbar, 100);
    setTimeout(syncScrollbar, 500);
}