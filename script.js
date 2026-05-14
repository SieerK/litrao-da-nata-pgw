const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

function removeActiveLinks() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveLinks();
    link.classList.add("active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        removeActiveLinks();

        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    root: null,
    threshold: 0.45
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
