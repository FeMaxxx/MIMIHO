const openModalBtns = document.querySelectorAll("[data-modal-open-table]");
const closeModalBtns = document.querySelectorAll("[data-modal-close-table]");
const modal = document.querySelector("[data-modal-table]");

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
