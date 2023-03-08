import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const openModalBtns = document.querySelectorAll("[data-modal-open-room]");
const closeModalBtns = document.querySelectorAll("[data-modal-close-room]");
export const modalRoom = document.querySelector("[data-modal-room]");
const userInDate = document.querySelector("[data-user-in-date]");

const options = {
  defaultDate: [new Date(), new Date()],
  minuteIncrement: 1,
  mode: "range",

  dateFormat: "d.m.Y",
  locale: {
    rangeSeparator: " до ",
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      longhand: [
        "Неділя",
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота",
      ],
    },
    months: {
      shorthand: [
        "Січ",
        "Лют",
        "Бер",
        "Квіт",
        "Трав",
        "Чер",
        "Лип",
        "Сер",
        "Вер",
        "Жов",
        "Лис",
        "Гру",
      ],
      longhand: [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень",
      ],
    },
  },
};

flatpickr(userInDate, options);

openModalBtns.forEach(element => {
  element.addEventListener("click", openModal);
});

closeModalBtns.forEach(element => {
  element.addEventListener("click", closeModal);
});

function openModal() {
  modalRoom.classList.remove("is-hidden");
}

function closeModal() {
  modalRoom.classList.add("is-hidden");
}
