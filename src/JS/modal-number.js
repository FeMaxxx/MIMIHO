const openModalBtns = document.querySelectorAll("[data-modal-open-room]");
const closeModalBtns = document.querySelectorAll("[data-modal-close-room]");
export const modalRoom = document.querySelector("[data-modal-room]");

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
