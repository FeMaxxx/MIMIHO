import { modalRoom } from "./modal-room";

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
  form.addEventListener("submit", openRoomModal);
}

function openRoomModal(e) {
  e.preventDefault();
  modalPrice.classList.add("is-hidden");
  1;

  setTimeout(removeHiddenModalRoom, 300);

  form.removeEventListener("input", changePrice);
  form.removeEventListener("submit", openRoomModal);
}

function removeHiddenModalRoom() {
  modalRoom.classList.remove("is-hidden");
}

function closeModal() {
  modalPrice.classList.add("is-hidden");

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
