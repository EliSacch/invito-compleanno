const params = new URLSearchParams(window.location.search);

const displayShow =
  localStorage.getItem("show").split(" - ").join(" ") || "N/A";
const displayDatetime = localStorage.getItem("datetime");

document.querySelector("#conf-show").textContent = displayShow;

document.querySelector("#conf-datetime").textContent =
  displayDatetime || "--:--";

document.querySelector("#modifica").addEventListener("click", () => {
  document.body.style.opacity = "0";

  setTimeout(() => {
    localStorage.removeItem("show");
    localStorage.removeItem("datetime");

    window.location.href = "ticket.html";
  }, 700);
});
