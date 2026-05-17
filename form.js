const showSelect = document.querySelector("#show");
const datetimeSelect = document.querySelector("#datetime");

/* AVAILABLE SHOWS */

const schedules = {
  "sleeping-beauty": ["Fri 26 Jun 2026 - 18:00", "Fri 26 Jun 2026 - 20:00"],

  riverdance: generateRiverdanceDates(),
};

/* GENERATE RIVERDANCE DATES */

function generateRiverdanceDates() {
  const options = [];

  const start = new Date("2026-06-15");
  const end = new Date("2026-06-30");

  for (
    let date = new Date(start);
    date <= end;
    date.setDate(date.getDate() + 1)
  ) {
    const day = date.getDay();

    const formatted = date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    /* Friday or Saturday */
    if (day === 5 || day === 6) {
      options.push(`${formatted} - 19:30`);
    }

    /* Sunday */
    if (day === 0) {
      options.push(`${formatted} - 17:00`);
    }
  }

  return options;
}

/* UPDATE DATETIME OPTIONS */

function updateDateOptions() {
  const selectedShow = showSelect.value;

  const availableDates = schedules[selectedShow];

  datetimeSelect.innerHTML = "";

  availableDates.forEach((date) => {
    const option = document.createElement("option");

    option.value = date;
    option.textContent = date;

    datetimeSelect.appendChild(option);
  });
}

/* INITIAL LOAD */

updateDateOptions();

/* CHANGE EVENT */

showSelect.addEventListener("change", updateDateOptions);

const ticketTime = document.querySelector("#ticket-time");

/* UPDATE TIME PREVIEW */

function updateTicketTime() {
  const selectedValue = datetimeSelect.value;

  /* Extract time from string */
  const time = selectedValue.split(" - ")[1];

  ticketTime.textContent = time || "--:--";
}

/* INITIAL STATE */

ticketTime.textContent = "--:--";

/* UPDATE ON DATE CHANGE */

datetimeSelect.addEventListener("change", updateTicketTime);

const form = document.querySelector("#ticket-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.body.style.opacity = "0";

  setTimeout(() => {
    const show = showSelect.value;
    const datetime = datetimeSelect.value;

    const url = `confirmed.html?show=${encodeURIComponent(show)}&datetime=${encodeURIComponent(datetime)}`;

    window.location.href = url;
  }, 700);
});
