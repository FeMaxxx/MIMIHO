import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { optionsDateTime } from "./date-picker";

const openModalBtns = document.querySelectorAll("[data-modal-open-table]");
const closeModalBtns = document.querySelectorAll("[data-modal-close-table]");
const modal = document.querySelector("[data-modal-table]");
const userInrest = document.querySelector("[data-user-rest]");

openModalBtns.forEach(element => {
  element.addEventListener("click", openModal);
});
closeModalBtns.forEach(element => {
  element.addEventListener("click", closeModal);
});

function openModal() {
  modal.classList.remove("is-hidden");
}

function closeModal() {
  modal.classList.add("is-hidden");
}

flatpickr(userInrest, optionsDateTime);
