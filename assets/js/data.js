// data.js - Data-driven content for the portfolio

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

