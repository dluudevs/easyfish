$(document).foundation();
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.querySelector(".flatpickr");

  if (dateInput) {
    flatpickr(dateInput, {
      altInput: true,
      minDate: "today",
    });
  }

  const footerDate = document.querySelector("#footer-date");
  const year = new Date().getFullYear();
  footerDate.innerHTML = `Easyfish & Co. ${year}`;
});
