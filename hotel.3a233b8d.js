window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="details-rest"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-button-left"),n=e.querySelector(".swiper-button-right");new Swiper(e.querySelector(".swiper-details-rest"),{speed:1500,slidesPerView:"auto",spaceBetween:20,navigation:{nextEl:n,prevEl:t},breakpoints:{1023.98:{spaceBetween:34},1279.98:{spaceBetween:87}}})}))}),!1),window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="details-hotel"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-button-left"),n=e.querySelector(".swiper-button-right");new Swiper(e.querySelector(".swiper-details-hotel"),{speed:1500,slidesPerView:"auto",spaceBetween:20,swipeDirection:"prev",navigation:{nextEl:n,prevEl:t},breakpoints:{1023.98:{spaceBetween:34},1279.98:{spaceBetween:87}}}).slideTo(12,!1,!1)}))}),!1);const e=document.querySelectorAll("[data-modal-open-room]"),t=document.querySelectorAll("[data-modal-close-room]"),n=document.querySelector("[data-modal-room]");function o(){n.classList.remove("is-hidden")}function r(){n.classList.add("is-hidden")}e.forEach((e=>{e.addEventListener("click",o)})),t.forEach((e=>{e.addEventListener("click",r)}));const i=document.querySelectorAll("[data-modal-open-price]"),l=document.querySelectorAll("[data-modal-close-price]"),s=document.querySelector("[data-modal-price]"),c=document.querySelector(".price-form"),a=document.querySelector(".price-form__price");function d(){s.classList.remove("is-hidden"),c.addEventListener("input",p),c.addEventListener("submit",u)}function u(e){e.preventDefault(),s.classList.add("is-hidden"),n.classList.remove("is-hidden"),c.removeEventListener("input",p),c.removeEventListener("submit",u)}function m(){s.classList.add("is-hidden"),c.removeEventListener("input",p),c.removeEventListener("submit",u)}function p(){"Двомісний"===c.elements.category.value?a.textContent=` ${500*c.elements.nights.value} грн.`:"Двомісний люкс"===c.elements.category.value?a.textContent=` ${950*c.elements.nights.value} грн.`:a.textContent=` ${1550*c.elements.nights.value} грн.`}p(),i.forEach((e=>{e.addEventListener("click",d)})),l.forEach((e=>{e.addEventListener("click",m)}));const v=document.querySelectorAll("[data-modal-open-table]"),E=document.querySelectorAll("[data-modal-close-table]"),f=document.querySelector("[data-modal-table]");function h(){f.classList.remove("is-hidden")}function w(){f.classList.add("is-hidden")}v.forEach((e=>{e.addEventListener("click",h)})),E.forEach((e=>{e.addEventListener("click",w)}));
//# sourceMappingURL=hotel.3a233b8d.js.map
