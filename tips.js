function showCV() {
  document.getElementById('cv-section').style.display = 'block';
  document.getElementById('projects-section').style.display = 'none';
  setActiveLink('cv-link');
}

function showProjects() {
  document.getElementById('cv-section').style.display = 'none';
  document.getElementById('projects-section').style.display = 'block';
  setActiveLink('projects-link');
}

function setActiveLink(activeLinkId) {
  var menuLinks = document.getElementsByClassName('menu')[0].getElementsByTagName('a');
  for (var i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].id === activeLinkId) {
      menuLinks[i].classList.add('active');
    } else {
      menuLinks[i].classList.remove('active');
    }
  }
}

function showCV() {
  // Hide the CyberTips section
  document.getElementById('cyberTipsContainer').style.display = 'none';

  // Show the CV section and hide the Projects section
  document.getElementById('cv-section').style.display = 'block';
  document.getElementById('projects-section').style.display = 'none';
  setActiveLink('cv-link');
}

function showProjects() {
  // Hide the CyberTips section
  document.getElementById('cyberTipsContainer').style.display = 'none';

  // Show the Projects section and hide the CV section
  document.getElementById('cv-section').style.display = 'none';
  document.getElementById('projects-section').style.display = 'block';
  setActiveLink('projects-link');
}

function showTips() {
  // Hide the CV and Projects sections
  document.getElementById('cv-section').style.display = 'none';
  document.getElementById('projects-section').style.display = 'none';

  // Array of cybersecurity tips
  var tips = [
    "Use strong, unique passwords for each online account.",
    "Regularly update your software and operating systems for security patches.",
    "Be cautious of phishing emails and never click on suspicious links or download attachments from unknown sources.",
    "Enable two-factor authentication (2FA) whenever possible.",
    "Backup your important data regularly to prevent data loss.",
    // Add more tips as needed
  ];

  // Get a random tip
  var randomIndex = Math.floor(Math.random() * tips.length);
  var randomTip = tips[randomIndex];

  // Display the tip in the container
  var cyberTipContainer = document.getElementById("cyberTipsContainer");
  var cyberTipText = document.getElementById("cyberTip");
  cyberTipText.textContent = randomTip;

  // Show the CyberTips section
  cyberTipContainer.style.display = "block";
}

window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}