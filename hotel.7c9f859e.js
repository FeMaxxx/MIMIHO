window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="details-rest"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-button-left"),o=e.querySelector(".swiper-button-right");new Swiper(e.querySelector(".swiper-details-rest"),{speed:1500,slidesPerView:"auto",spaceBetween:20,navigation:{nextEl:o,prevEl:t},breakpoints:{1023.98:{spaceBetween:34},1279.98:{spaceBetween:87}}})}))}),!1),window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="details-hotel"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-button-left"),o=e.querySelector(".swiper-button-right");new Swiper(e.querySelector(".swiper-details-hotel"),{speed:1500,slidesPerView:"auto",spaceBetween:20,swipeDirection:"prev",navigation:{nextEl:o,prevEl:t},breakpoints:{1023.98:{spaceBetween:34},1279.98:{spaceBetween:87}}}).slideTo(12,!1,!1)}))}),!1),(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open-room]"),closeModalBtns:document.querySelectorAll("[data-modal-close-room]"),modal:document.querySelector("[data-modal-room]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtns.forEach((e=>{e.addEventListener("click",t)}))})(),(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open-price]"),closeModalBtns:document.querySelectorAll("[data-modal-close-price]"),modal:document.querySelector("[data-modal-price]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtns.forEach((e=>{e.addEventListener("click",t)}))})(),(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open-table]"),closeModalBtns:document.querySelectorAll("[data-modal-close-table]"),modal:document.querySelector("[data-modal-table]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtns.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtns.forEach((e=>{e.addEventListener("click",t)}))})();
//# sourceMappingURL=hotel.7c9f859e.js.map
