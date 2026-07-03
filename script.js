const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");
const btnTopo = document.getElementById("btn-topo");

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
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

        removeActiveLinks();

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    root: null,
    threshold: 0.35
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    btnTopo.classList.add("show");
  } else {
    btnTopo.classList.remove("show");
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const formulario = document.getElementById("formContato");
const toast = document.getElementById("toast");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    toast.classList.add("show");

    formulario.reset();

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);

});