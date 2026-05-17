const params = new URLSearchParams(window.location.search);

const show = params.get("show");
const datetime = params.get("datetime");

document.querySelector("#conf-show").textContent = show || "N/A";

document.querySelector("#conf-datetime").textContent = datetime || "--:--";
