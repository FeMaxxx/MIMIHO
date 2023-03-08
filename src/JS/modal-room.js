import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { optionsRange } from "./date-picker";

const openModalBtns = document.querySelectorAll("[data-modal-open-room]");
const closeModalBtns = document.querySelectorAll("[data-modal-close-room]");
const modalRoom = document.querySelector("[data-modal-room]");
const userInroom = document.querySelector("[data-user-room]");

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

flatpickr(userInroom, optionsRange);

export { openRoomModal };
