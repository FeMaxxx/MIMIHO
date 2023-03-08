import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const openModalBtns = document.querySelectorAll("[data-modal-open-room]");
const closeModalBtns = document.querySelectorAll("[data-modal-close-room]");
const modalRoom = document.querySelector("[data-modal-room]");
const userInDate = document.querySelector("[data-user-in-date]");

modalRoom.addEventListener("submit", submitForm);

openModalBtns.forEach(element => {
  element.addEventListener("click", openRoomModal);
});

closeModalBtns.forEach(element => {
  element.addEventListener("click", closeModal);
});

function submitForm(e) {
  e.preventDefault();
  modalRoom.classList.add("is-hidden");
}

function openRoomModal() {
  modalRoom.classList.remove("is-hidden");

  document.addEventListener("keydown", closeModalEscAndClickOutside);
  document.addEventListener("click", closeModalEscAndClickOutside);
}

function closeModal() {
  modalRoom.classList.add("is-hidden");

  removeEventListeners();
}

function closeModalEscAndClickOutside(e) {
  if (
    e.code === "Escape" ||
    e.target.classList.contains("room-modal__backdrop")
  ) {
    modalRoom.classList.add("is-hidden");

    removeEventListeners();
  }
}

function removeEventListeners() {
  document.removeEventListener("keydown", closeModalEscAndClickOutside);
  document.removeEventListener("click", closeModalEscAndClickOutside);
}

const options = {
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

export { openRoomModal };
