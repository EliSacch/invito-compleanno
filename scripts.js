document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const transition = document.querySelector(".page-transition");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = link.href;

      // Flash
      transition.classList.add("highlight");

      setTimeout(() => {
        transition.classList.remove("highlight");

        // Fade
        transition.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = target;
        }, 650);
      }, 350);
    });
  });
});
