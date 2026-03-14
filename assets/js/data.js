// data.js - Data-driven content for the portfolio

/**
 * Sidebar Data
 * Personal information displayed in the sidebar.
 */
const sidebarData = {
  name: "Vanama Nikhil",
  title1: "Software Engineer",
  title2: "Freelancer",
  email: "vanamanikhil15@gmail.com",
  phone: "+91 8639701773",
  location: "Mangalagiri, Andhra Pradesh, India"
};

/**
 * About Data
 * Content for the "About me" section.
 */
const aboutData = [
  "I’m Nikhil Vanama, a Software Engineer focused on building modern web applications and intuitive digital experiences. I enjoy turning complex ideas into simple, scalable, and user-friendly solutions. My work includes web design, frontend engineering, and WordPress development, creating responsive and visually engaging products across industries like healthcare, government services, logistics, and business platforms.",
  "Beyond web development, I’m highly interested in enterprise systems and the future of digital platforms. I’m currently exploring the SAP ecosystem, learning Fiori, ABAP, HANA, BTP, and CAP, with the goal of building intelligent ERP system frontends that combine usability, performance, and strong enterprise-level architecture."
];

/**
 * Populate Sidebar Data
 * Replaces the text content of specific elements in the sidebar
 * without modifying the surrounding HTML structure.
 */

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Populate Name
  const nameEl = document.querySelector("[data-sidebar-name]");
  if (nameEl) {
    nameEl.textContent = sidebarData.name;
    nameEl.title = sidebarData.name;
  }

  // Populate Titles
  const title1El = document.querySelector("[data-sidebar-title1]");
  if (title1El) title1El.textContent = sidebarData.title1;
  const title2El = document.querySelector("[data-sidebar-title2]");
  if (title2El) title2El.textContent = sidebarData.title2;

  // Populate Email
  const emailEl = document.querySelector("[data-sidebar-email]");
  if (emailEl) {
    emailEl.textContent = sidebarData.email;
    emailEl.href = `mailto:${sidebarData.email}`;
  }

  // Populate Phone
  const phoneEl = document.querySelector("[data-sidebar-phone]");
  if (phoneEl) {
    phoneEl.textContent = sidebarData.phone;
    // Format phone link (remove spaces)
    phoneEl.href = `tel:${sidebarData.phone.replace(/\s+/g, '')}`;
  }

  // Populate Location
  const locationEl = document.querySelector("[data-sidebar-location]");
  if (locationEl) locationEl.textContent = sidebarData.location;

  // Populate About Text
  const aboutContainer = document.getElementById("about-text-container");
  if (aboutContainer && typeof aboutData !== 'undefined') {
    aboutData.forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      aboutContainer.appendChild(p);
    });
  }
});

/**
 * Services Data
 * Structured data for the "What I'm doing" section.
 * This allows for easy updates without modifying HTML.
 */
const servicesData = [
  {
    iconSrc: "./assets/images/icon-SAP.svg",
    iconAlt: "SAP icon",
    title: "Enterprise & SAP Learning",
    text: "Exploring SAP ecosystem including Fiori, ABAP, HANA, BTP, CAP, building modern ERP interfaces and enterprise solutions."
  },
  {
    iconSrc: "./assets/images/icon-design.svg",
    iconAlt: "design icon",
    title: "UI / Web Design",
    text: "Designing clean, modern interfaces focused on usability, accessibility, and engaging user experiences across digital platforms."
  },
  {
    iconSrc: "./assets/images/icon-dev.svg",
    iconAlt: "Web development icon",
    title: "Web Development",
    text: "Building responsive, scalable websites/Applications using modern JavaScript frameworks, ensuring performance, maintainability, user interaction."
  },
  {
    iconSrc: "./assets/images/icon-wordpress.svg",
    iconAlt: "Wordpress icon",
    title: "Wordpress Solutions",
    text: "Building custom WordPress websites with modern design, performance optimization, and seamless integration with other platforms."
  }
];

const serviceListContainer = document.getElementById("service-list");
const serviceTemplate = document.getElementById("service-template");

if (serviceListContainer && serviceTemplate && typeof servicesData !== 'undefined') {
  servicesData.forEach(service => {
    // Clone the template content
    const templateClone = serviceTemplate.content.cloneNode(true);
    
    // Select elements within the clone
    const iconImg = templateClone.querySelector(".service-icon");
    const titleH4 = templateClone.querySelector(".service-item-title");
    const textP = templateClone.querySelector(".service-item-text");

    // Populate data
    iconImg.src = service.iconSrc;
    iconImg.alt = service.iconAlt;
    titleH4.textContent = service.title;
    textP.textContent = service.text;

    // Append the assembled clone to the list
    serviceListContainer.appendChild(templateClone);
  });
}

/**
 * Habits Data
 * Content for the "Habits" section.
 */
const habitsData = [
  { icon: "code-slash-outline", text: "Coding" },
  { icon: "book-outline", text: "Reading Book" },
  { icon: "brush-outline", text: "Figma Designs" },
  { icon: "fitness-outline", text: "Workout" },
  { icon: "walk-outline", text: "Running" },
  { icon: "trophy-outline", text: "Badminton" },
  { icon: "baseball-outline", text: "Cricket" },
  { icon: "game-controller-outline", text: "Gaming" },
  { icon: "airplane-outline", text: "Travel" },
  { icon: "musical-notes-outline", text: "Music" },
  { icon: "pencil-outline", text: "Doodling" },
  { icon: "videocam-outline", text: "Video Editing" }
];

const habitsListContainer = document.getElementById("habits-list");
const habitTemplate = document.getElementById("habit-template");

if (habitsListContainer && habitTemplate && typeof habitsData !== 'undefined') {
  habitsData.forEach(habit => {
    // Clone the template content
    const templateClone = habitTemplate.content.cloneNode(true);
    
    // Select elements within the clone
    const iconElem = templateClone.querySelector(".habit-icon-elem");
    const textP = templateClone.querySelector(".habit-text");

    // Populate data
    iconElem.setAttribute("name", habit.icon);
    textP.textContent = habit.text;

    // Append the assembled clone to the list
    habitsListContainer.appendChild(templateClone);
  });
}