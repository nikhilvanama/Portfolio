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

// modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Project modal variables
const projectModalContainer = document.querySelector(".project-modal");
const projectModalCloseBtn = projectModalContainer.querySelector("[data-modal-close-btn]");
const projectOverlay = projectModalContainer.querySelector("[data-overlay]");

// Project modal content elements
const projModalCarousel = projectModalContainer.querySelector("[data-modal-carousel]");
const projModalTitle = projectModalContainer.querySelector("[data-modal-title]");
const projModalType = projectModalContainer.querySelector("[data-modal-type]");
const projModalCategory = projectModalContainer.querySelector("[data-modal-category]");
const projModalRole = projectModalContainer.querySelector("[data-modal-role]");
const projModalTech = projectModalContainer.querySelector("[data-modal-tech]");
const projModalDesc = projectModalContainer.querySelector("[data-modal-description]");
const projModalLive = projectModalContainer.querySelector("[data-modal-live]");
const projModalGithub = projectModalContainer.querySelector("[data-modal-github]");
const projModalPrevBtn = projectModalContainer.querySelector("[data-carousel-prev]");
const projModalNextBtn = projectModalContainer.querySelector("[data-carousel-next]");

// Project modal toggle function
const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

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

// Carousel Navigation Logic and State Management
const updateCarouselArrows = function () {
  if (!projModalCarousel || !projModalPrevBtn || !projModalNextBtn) return;
  
  const scrollLeft = projModalCarousel.scrollLeft;
  const maxScroll = projModalCarousel.scrollWidth - projModalCarousel.clientWidth;
  
  // Use a small threshold for floating point inaccuracies
  projModalPrevBtn.disabled = scrollLeft <= 1;
  projModalNextBtn.disabled = scrollLeft >= maxScroll - 1;
};

if (projModalPrevBtn && projModalNextBtn && projModalCarousel) {
  projModalPrevBtn.addEventListener("click", () => {
    projModalCarousel.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  projModalNextBtn.addEventListener("click", () => {
    projModalCarousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  projModalCarousel.addEventListener("scroll", updateCarouselArrows);
  
  // Also check on window resize
  window.addEventListener("resize", updateCarouselArrows);
}

// Project Modal Open Logic
document.addEventListener("click", function(e) {
  const eyeBtn = e.target.closest("[data-project-eye]");
  if (eyeBtn) {
    const projectItem = eyeBtn.closest("[data-project-index]");
    if (!projectItem) return;
    
    const index = projectItem.dataset.projectIndex;
    const project = window.portfolioProjects[index];

    if (project) {
      projModalTitle.textContent = project.title;
      projModalType.textContent = project.type;
      projModalCategory.textContent = project.projectCategory;
      projModalRole.textContent = project.role;
      projModalDesc.textContent = project.description;

      // Populate Tech Stack
      projModalTech.innerHTML = "";
      project.techStack.forEach(tech => {
        const span = document.createElement("span");
        span.className = "tech-badge";
        span.textContent = tech;
        projModalTech.appendChild(span);
      });

      // Populate Carousel
      projModalCarousel.innerHTML = "";
      if (project.images && project.images.length > 0) {
        project.images.forEach(imgSrc => {
          const div = document.createElement("div");
          div.className = "carousel-item";
          div.innerHTML = `<img src="${imgSrc}" alt="${project.title} screenshot">`;
          projModalCarousel.appendChild(div);
        });
      } else {
        const div = document.createElement("div");
        div.className = "carousel-item";
        div.innerHTML = `<img src="${project.thumbnail}" alt="${project.title}">`;
        projModalCarousel.appendChild(div);
      }

      // Reset carousel scroll and update arrows
      projModalCarousel.scrollLeft = 0;
      // Use setTimeout to ensure DOM is rendered before checking scroll widths
      setTimeout(updateCarouselArrows, 100);

      // Populate Links
      if (project.liveLink && project.liveLink !== "#") {
        projModalLive.href = project.liveLink;
        projModalLive.parentNode.style.display = "flex";
      } else {
        projModalLive.parentNode.style.display = "none";
      }

      if (project.githubLink && project.githubLink !== "#") {
        projModalGithub.href = project.githubLink;
        projModalGithub.parentNode.style.display = "flex";
      } else {
        projModalGithub.parentNode.style.display = "none";
      }

      projectModalFunc();
    }
  }
});

// Project Modal Close Logic
projectModalCloseBtn.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);

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

// filter function
const filterFunc = function (selectedValue) {
  const filterItems = document.querySelectorAll("[data-filter-item]");

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
// show toast function
const showToast = (isSuccess, customMessage = null) => {
  if (!toastNotification) return;

  toastTitle.innerText = isSuccess ? "Success!" : "Error!";
  
  if (customMessage) {
    toastMessage.innerText = customMessage;
  } else {
    toastMessage.innerText = isSuccess ? "Your message has been sent successfully." : "Oops! Something went wrong.";
  }
  
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
    
    // Custom Validations
    const fullname = form.fullname.value.trim();
    if (fullname.length < 4) {
      showToast(false, "Please enter a valid Name (min 4 chars).");
      return;
    }

    const email = form.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast(false, "Please enter a valid email address.");
      return;
    }

    const mobilenumber = form.mobilenumber.value.trim();
    if (!/^\d{10}$/.test(mobilenumber)) {
      showToast(false, "Mobile number must be exactly 10 digits.");
      return;
    }

    const subject = form.subject.value.trim();
    if (subject.length < 4) {
      showToast(false, "Please enter a valid Subject (min 4 chars).");
      return;
    }

    const message = form.message.value.trim();
    if (message.length < 10) {
      showToast(false, "Message must be at least 10 characters long.");
      return;
    }
    
    // Change button text to indicate sending
    const originalBtnText = formBtn.innerHTML;
    formBtn.innerHTML = "<ion-icon name='hourglass-outline'></ion-icon><span>Sending...</span>";
    formBtn.style.pointerEvents = "none"; // Disable clicking without changing visual disabled state

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
        // Handle Formspree specific JSON error messages if any
        const data = await response.json();
        if (data && data.errors) {
            toastMessage.innerText = data.errors.map(error => error.message).join(", ");
        } else {
            toastMessage.innerText = "Oops! Something went wrong.";
        }
        showToast(false);
      }
    } catch (error) {
      toastMessage.innerText = "Network error. Please try again.";
      showToast(false);
    } finally {
      // Restore button text and pointer events
      formBtn.innerHTML = originalBtnText;
      formBtn.style.pointerEvents = "auto";
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