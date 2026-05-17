const show = localStorage.getItem("show");
const datetime = localStorage.getItem("datetime");
const currentPath = window.location.pathname.split("/").pop();

// if both exist, redirect
if (show && datetime && currentPath !== "confirmed.html") {
  console.log(
    "Redirecting to confirmed.html with show:",
    show,
    "and datetime:",
    datetime,
  );
  const url = `confirmed.html?show=${encodeURIComponent(show)}&datetime=${encodeURIComponent(datetime)}`;
  window.location.href = url;
}

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
