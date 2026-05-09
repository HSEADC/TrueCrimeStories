import '../stylesheets/style.css'


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

