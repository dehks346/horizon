document.addEventListener("DOMContentLoaded", function () {
    const timeline = document.querySelector(".timeline");
    const timelineItems = document.querySelectorAll(".timeline-item");

    function revealOnScroll() {
        const scrollY = window.scrollY;
        const triggerPoint = window.innerHeight * 0.85;

        if (timeline.getBoundingClientRect().top < triggerPoint) {
            timeline.classList.add("visible");
        }

        timelineItems.forEach((item, index) => {
            if (item.getBoundingClientRect().top < triggerPoint) {
                setTimeout(() => {
                    item.classList.add("visible");
                }, index * 150);
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load in case it's already in view
});