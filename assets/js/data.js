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

/**
 * Achievements Data
 * Content for the "Achievements" section.
 */
const achievementsData = [
  { icon: "globe-outline", number: "15+", text: "Websites Delivered" },
  { icon: "business-outline", number: "8+", text: "Industries Worked Projects" },
  { icon: "sparkles-outline", number: "2.5+", text: "Years of Experience" }
];

const achievementsListContainer = document.getElementById("achievements-list");
const achievementTemplate = document.getElementById("achievement-template");

if (achievementsListContainer && achievementTemplate && typeof achievementsData !== 'undefined') {
  achievementsData.forEach(achievement => {
    // Clone the template content
    const templateClone = achievementTemplate.content.cloneNode(true);
    
    // Select elements within the clone
    const iconElem = templateClone.querySelector(".achievement-icon-elem");
    const numberH4 = templateClone.querySelector(".achievement-number");
    const textP = templateClone.querySelector(".achievement-text");

    // Populate data
    iconElem.setAttribute("name", achievement.icon);
    numberH4.textContent = achievement.number;
    textP.textContent = achievement.text;

    // Append the assembled clone to the list
    achievementsListContainer.appendChild(templateClone);
  });
}

/**
 * Philosophy Data
 * Content for the "Innovation & Philosophy" section textual part.
 */
const philosophyData = [
  {
    title: "Brain-Centric \"Vibe Coding\"",
    text: "In the era of AI, I embrace vibe coding—a philosophy where I use my brain for high-level structuring, planning, and recursive algorithmic logic. I act as the architect, explaining the \"vibe\" and complex system requirements to intelligent agents that assist in rapid execution."
  },
  {
    title: "My SAP Journey",
    text: "My exploration into the SAP Ecosystem is driven by a passion for enterprise-level harmony. From mastering Fiori and ABAP to diving deep into BTP and HANA, I am building the future of intelligent ERP frontends that combine robust architecture with modern usability."
  }
];

const philosophyTextContainer = document.getElementById("philosophy-text-container");
const philosophyTemplate = document.getElementById("philosophy-template");

if (philosophyTextContainer && philosophyTemplate && typeof philosophyData !== 'undefined') {
  philosophyData.forEach(item => {
    // Clone the template content
    const templateClone = philosophyTemplate.content.cloneNode(true);
    
    // Select elements within the clone
    const titleH4 = templateClone.querySelector(".philosophy-item-title");
    const textP = templateClone.querySelector(".philosophy-item-text");

    // Populate data
    titleH4.textContent = item.title;
    // We use innerHTML here in case the user wants to add <strong> tags around words like "vibe coding" or "SAP Ecosystem" later.
    textP.innerHTML = item.text.replace('vibe coding', '<strong>vibe coding</strong>').replace('SAP Ecosystem', '<strong>SAP Ecosystem</strong>');

    // Append the assembled clone to the container
    philosophyTextContainer.appendChild(templateClone);
  });
}

/**
 * Skills Data
 * Content for the "Skills" section (categories and lists of badges).
 */
const skillsData = [
  {
    category: "Web Development",
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript (basic)", "React.js", "Angular (v18+)", "REST APIs", "Responsive Web Design", "Web Animations (GSAP)", "DOM Manipulation", "Cross-browser Compatibility"]
  },
  {
    category: "Programming & Scripting",
    skills: ["JavaScript", "Python (for problem solving)", "Node.js", "PHP (basic)", "C", "Java(basic)", "SQL"]
  },
  {
    category: "Databases / Cloud",
    skills: ["MySQL", "PostgreSQL", "Firebase Realtime DB", "AWS (basic)", "DBMS Concepts", "Cloud Concepts", "Data Modeling Basics"]
  },
  {
    category: "UI / Web Design",
    skills: ["Figma", "UI/UX Principles", "Wireframing", "Layout Design", "Responsive Design", "Design Systems", "Spline", "Canva"]
  },
  {
    category: "WordPress Development",
    skills: ["WordPress CMS", "Custom Theme Development", "Plugin Integration", "Elementor / Page Builders", "Custom Post Types", "WordPress Admin Management"]
  },
  {
    category: "Enterprise & SAP Learning",
    skills: ["SAP Fundamentals", "SAP Fiori (Learning)", "ABAP Basics (Learning)", "SAP HANA Concepts", "SAP BTP Overview", "SAP CAP Basics"]
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "GitHub Copilot", "VS Code", "Google Antigravity", "Cursor", "Claude", "Chrome DevTools", "Postman", "Jira"]
  }
];

const skillsListContainer = document.getElementById("skills-list-container");
const skillCategoryTemplate = document.getElementById("skill-category-template");

if (skillsListContainer && skillCategoryTemplate && typeof skillsData !== 'undefined') {
  skillsData.forEach(cat => {
    // Clone category template
    const templateClone = skillCategoryTemplate.content.cloneNode(true);
    
    // Set title
    const titleH4 = templateClone.querySelector(".skill-title");
    titleH4.textContent = cat.category;

    // Populate skill list
    const ul = templateClone.querySelector(".skill-list");
    cat.skills.forEach(skill => {
      const li = document.createElement("li");
      li.className = "skill-badge";
      li.textContent = skill;
      ul.appendChild(li);
    });

    skillsListContainer.appendChild(templateClone);
  });
}

/**
 * Certifications Data
 */
const certificationsData = [
  {
    title: "Java Fullstack Certificate",
    provider: "Wipro",
    link: "./assets/documents/certificates/wipro-certificate.pdf"
  },
  {
    title: "Devops for Web Development",
    provider: "DevTown",
    link: "./assets/documents/certificates/devton-certificate.pdf"
  },
  {
    title: "DBMS Certificate",
    provider: "Infosys",
    link: "./assets/documents/certificates/infosys-dbms-certificate.pdf"
  },
  {
    title: "AWS Cloud Foundations",
    provider: "AWS",
    link: "./assets/documents/certificates/aws-certificate.pdf"
  },
  {
    title: "Cloud Computing Course",
    provider: "NPTEL",
    link: "./assets/documents/certificates/NPTEL-certficate.pdf"
  },
  {
    title: "Fundamentals of Cloud Security",
    provider: "Palo Alto Networks",
    link: "./assets/documents/certificates/paloalto-certificate.pdf"
  },
  {
    title: "Learn C Certificate",
    provider: "CodeChef",
    link: "./assets/documents/certificates/codechef-C-certificate.pdf"
  },
  {
    title: "Intro to CyberSecurity",
    provider: "Infosys",
    link: "./assets/documents/certificates/infosys-certificate.pdf"
  }
];

const certificationsList = document.getElementById("certifications-list");
const certificationTemplate = document.getElementById("certification-item-template");

if (certificationsList && certificationTemplate && typeof certificationsData !== 'undefined') {
  certificationsData.forEach(cert => {
    const clone = certificationTemplate.content.cloneNode(true);
    clone.querySelector(".cert-title").textContent = cert.title;
    clone.querySelector(".cert-provider").textContent = cert.provider;
    
    const certLink = clone.querySelector(".cert-link");
    if (cert.link === "#" || !cert.link) {
      certLink.style.display = 'none'; // Hide arrow if no real link
    } else {
      certLink.href = cert.link;
    }
    
    certificationsList.appendChild(clone);
  });
}

/**
 * Timeline Data (Education, Experience, Internships)
 */
const educationData = [
  {
    title: "Vasireddy venkatadri Institute of Technology",
    years: "2020 — 2024",
    cgpa: "8.33 CGPA",
    degree: "CSE (IOT)",
    text: "Bachelor of Technology"
  },
  {
    title: "Sri Chaitanya Junior College",
    years: "2018 — 2020",
    cgpa: "9.55 CGPA",
    degree: "12th Grade",
    text: "Board of Intermediate Education"
  },
  {
    title: "Sri Saraswathi Vidyalaya High School",
    years: "2017 — 2018",
    cgpa: "9.7 CGPA",
    degree: "10th Grade",
    text: "Board of Secondary Education"
  }
];

const experienceData = [
  {
    title: "Web Developer",
    company: "Mediacle Technologies",
    link: "https://www.mediacle.com/",
    years: "22nd Sept 2025 — Present",
    location: "Bangalore, Karnataka",
    text: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
  },
  {
    title: "Associate Software Engineer",
    company: "Seldom Technologies",
    link: "https://www.seldomtechnologies.com/",
    years: "Dec 2023 — 19th Sept 2025",
    location: "Mangalagiri, Andhra Pradesh",
    text: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
  }
];

const internshipsData = [
  {
    title: "Jr. Web Developer Intern",
    company: "Seldom Technologies",
    certificateLink: "./assets/documents/internships/seldom-internship.pdf",
    years: "Dec 2023 — March 2024",
    location: "Mangalagiri, Andhra Pradesh",
    text: "Contributed to the development of responsive user interfaces using HTML, CSS, and JavaScript. Assisted in optimizing website performance and fixing UI bugs across various client projects."
  },
  {
    title: "Web Development",
    company: "Global Education Technology",
    certificateLink: "./assets/documents/internships/global-technology-internship.pdf",
    years: "Jan 2024 — March 2024",
    location: "Virtual",
    text: ""
  },
  {
    title: "Data Science Internship",
    company: "Skill AP(APSSDC), Indo-Euro Synchronization Pvt Ltd",
    certificateLink: "./assets/documents/internships/skillap-internship.pdf",
    years: "May 2023 — July 2023",
    location: "Virtual",
    text: "Played a key role in developing a German language translation model using NLP and Python algorithms, leading a team to deliver the project on time and demonstrating strong leadership and technical skills."
  },
  {
    title: "Cybersecurity Virtual Internship",
    company: "Paloalto Networks, Eduskills",
    certificateLink: "./assets/documents/internships/paloalto-internship.pdf",
    years: "May 2023 — July 2023",
    location: "Virtual",
    text: ""
  },
  {
    title: "Salesforce Developer Virtual Internship",
    company: "Salesforce",
    certificateLink: "./assets/documents/internships/salesforce-internship.pdf",
    years: "April 2023 — May 2023",
    location: "Virtual",
    text: ""
  }
];

// Helper function to populate education templates
function populateEducationTemplate(dataArray, listContainer, templateElem) {
  if (!listContainer || !templateElem || typeof dataArray === 'undefined') return;
  
  dataArray.forEach(item => {
    const clone = templateElem.content.cloneNode(true);
    clone.querySelector(".timeline-item-title").textContent = item.title;
    clone.querySelector(".years").textContent = item.years;
    clone.querySelector(".cgpa").textContent = item.cgpa;
    clone.querySelector(".degree").textContent = item.degree;
    clone.querySelector(".timeline-text").textContent = item.text;
    listContainer.appendChild(clone);
  });
}

// Helper function to populate experience/internship templates
function populateExperienceTemplate(dataArray, listContainer, templateElem) {
  if (!listContainer || !templateElem || typeof dataArray === 'undefined') return;
  
  dataArray.forEach(item => {
    const clone = templateElem.content.cloneNode(true);
    
    clone.querySelector(".timeline-item-title").textContent = item.title;
    clone.querySelector(".company-name").textContent = item.company;
    clone.querySelector(".company-link").setAttribute("href", item.link);
    clone.querySelector(".years").textContent = item.years;
    clone.querySelector(".location").textContent = item.location;
    clone.querySelector(".timeline-text").textContent = item.text;
    
    listContainer.appendChild(clone);
  });
}

// Helper function to populate internship templates
function populateInternshipsTemplate(dataArray, listContainer, templateElem) {
  if (!listContainer || !templateElem || typeof dataArray === 'undefined') return;
  
  dataArray.forEach(item => {
    const clone = templateElem.content.cloneNode(true);
    
    clone.querySelector(".internship-title-text").textContent = item.title;
    
    // Handle the certificate link
    const certLink = clone.querySelector(".certificate-link");
    if (item.certificateLink) {
      certLink.setAttribute("href", item.certificateLink);
    } else {
      certLink.style.display = 'none'; // Hide if no link provided
    }
    
    clone.querySelector(".company-name").textContent = item.company;
    clone.querySelector(".years").textContent = item.years;
    clone.querySelector(".location").textContent = item.location;
    clone.querySelector(".timeline-text").textContent = item.text;
    
    listContainer.appendChild(clone);
  });
}

// 1. Render Education
const educationList = document.getElementById("education-list");
const educationTemplate = document.getElementById("education-item-template");
populateEducationTemplate(educationData, educationList, educationTemplate);

// 2. Render Experience
const experienceList = document.getElementById("experience-list");
const experienceTemplate = document.getElementById("experience-item-template");
populateExperienceTemplate(experienceData, experienceList, experienceTemplate);

// 3. Render Internships using custom template
const internshipsList = document.getElementById("internships-list");
const internshipsTemplate = document.getElementById("internships-item-template");
populateInternshipsTemplate(internshipsData, internshipsList, internshipsTemplate);