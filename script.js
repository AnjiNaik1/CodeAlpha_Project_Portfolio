document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const skillElements = document.querySelectorAll(".skill-list span");
    skillElements.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.transform = "scale(1.1)";
            skill.style.transition = "all 0.3s ease-in-out";
        }, index * 200);
    });
});
