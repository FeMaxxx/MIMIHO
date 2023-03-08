import { openRoomModal } from "./modal-room";

const openModalBtns = document.querySelectorAll("[data-modal-open-price]");
const closeModalBtns = document.querySelectorAll("[data-modal-close-price]");
const modalPrice = document.querySelector("[data-modal-price]");
const form = document.querySelector(".price-form");
const price = document.querySelector(".price-form__price");

changePrice();

openModalBtns.forEach(element => {
  element.addEventListener("click", openModal);
});

closeModalBtns.forEach(element => {
  element.addEventListener("click", closeModal);
});

function openModal() {
  modalPrice.classList.remove("is-hidden");
  form.addEventListener("input", changePrice);
  form.addEventListener("submit", roomModal);
  document.addEventListener("keydown", closeModalEscAndClickOutside);
  document.addEventListener("click", closeModalEscAndClickOutside);
}

function closeModal() {
  modalPrice.classList.add("is-hidden");

  removeEventListeners();
}

function closeModalEscAndClickOutside(e) {
  if (e.code === "Escape" || e.target.classList.contains("price-backdrop")) {
    modalPrice.classList.add("is-hidden");

    removeEventListeners();
  }
}

function roomModal(e) {
  e.preventDefault();

  modalPrice.classList.add("is-hidden");

  removeEventListeners();

  setTimeout(removeHiddenModalRoom, 300);
}

function removeHiddenModalRoom() {
  openRoomModal();
}

function removeEventListeners() {
  document.removeEventListener("keydown", closeModalEscAndClickOutside);
  document.removeEventListener("click", closeModalEscAndClickOutside);
  form.removeEventListener("input", changePrice);
  form.removeEventListener("submit", openRoomModal);
}

function changePrice() {
  if (form.elements.category.value === "Двомісний") {
    price.textContent = ` ${500 * form.elements.nights.value} грн.`;
  } else if (form.elements.category.value === "Двомісний люкс") {
    price.textContent = ` ${950 * form.elements.nights.value} грн.`;
  } else {
    price.textContent = ` ${1550 * form.elements.nights.value} грн.`;
  }
}
