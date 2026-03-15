'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// toast variables
const toastNotification = document.getElementById("toast-notification");
const toastCloseBtn = document.getElementById("toast-close");
const toastTitle = document.getElementById("toast-title");
const toastMessage = document.getElementById("toast-message");
const toastIcon = document.getElementById("toast-icon");

// hide toast function
const hideToast = () => {
  if (toastNotification) {
    toastNotification.classList.remove("active");
  }
};

if (toastCloseBtn) {
  toastCloseBtn.addEventListener("click", hideToast);
}

// show toast function
const showToast = (isSuccess) => {
  if (!toastNotification) return;

  toastTitle.innerText = isSuccess ? "Success!" : "Error!";
  toastMessage.innerText = isSuccess ? "Your message has been sent successfully." : "Oops! Something went wrong.";
  
  if (isSuccess) {
    toastIcon.name = "checkmark-circle-outline";
    toastIcon.classList.remove("error-icon");
    toastIcon.classList.add("success-icon");
  } else {
    toastIcon.name = "close-circle-outline";
    toastIcon.classList.remove("success-icon");
    toastIcon.classList.add("error-icon");
  }
  
  toastNotification.classList.add("active");
  
  // Auto close after 5 seconds
  setTimeout(hideToast, 5000);
};

// handle AJAX form submission
if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default page redirect
    
    // Change button text and disable to prevent double submission
    const originalBtnText = formBtn.innerHTML;
    formBtn.innerHTML = "<ion-icon name='hourglass-outline'></ion-icon><span>Sending...</span>";
    formBtn.setAttribute("disabled", "");

    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        showToast(true);
        form.reset(); // Clear the form on success
      } else {
        showToast(false);
      }
    } catch (error) {
      showToast(false);
    } finally {
      // Restore button text
      formBtn.innerHTML = originalBtnText;
      // Disable again since the form was likely reset
      if (!form.checkValidity()) {
         formBtn.setAttribute("disabled", "");
      } else {
         formBtn.removeAttribute("disabled");
      }
    }
  });
}

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// function to handle navigation
const navigateTo = function (targetPage) {
  for (let i = 0; i < pages.length; i++) {
    if (targetPage === pages[i].dataset.page) {
      pages[i].classList.add("active");
      navigationLinks[i].classList.add("active");
      localStorage.setItem("activePage", targetPage);
      window.scrollTo(0, 0);
    } else {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
  }
}

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    navigateTo(this.innerHTML.toLowerCase());
  });
}

// initialization: check localStorage for saved page
const savedPage = localStorage.getItem("activePage");
if (savedPage) {
  navigateTo(savedPage);
}

/**
 * Experience calculation
 * Calculates duration from Dec 2023 to present
 */
const experienceElem = document.querySelector("[data-experience]");

const calculateExperience = function () {
  const startDate = new Date(2023, 11); // December 2023 (0-indexed month)
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let experienceStr = "";
  if (years > 0) {
    experienceStr += `${years} Year${years > 1 ? 's' : ''} `;
  }
  if (months > 0 || years === 0) {
    experienceStr += `${months} Month${months !== 1 ? 's' : ''}`;
  }

  if (experienceElem) {
    experienceElem.innerText = experienceStr.trim();
  }
}

calculateExperience();