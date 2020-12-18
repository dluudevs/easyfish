$(document).foundation();
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.querySelector('.flatpickr')

  if(dateInput){
    flatpickr(dateInput, {
      altInput: true,
      minDate: "today"
    })
  }
});