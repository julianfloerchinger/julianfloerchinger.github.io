// ---------Loading screen----------

// Wait until the page is fully loaded
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    //const mainContent = document.getElementById("main-content");
  
    // Wait for 2 seconds before hiding the loading screen
    setTimeout(() => {
      loadingScreen.style.opacity = "0"; // Start fading out
      loadingScreen.addEventListener("transitionend", () => {
        loadingScreen.style.display = "none"; // Hide the loading screen after fading
        //mainContent.style.display = "block"; // Show the main content
        document.body.style.overflow = "auto"; // Re-enable scrolling
      });
    }, 2000); // 2-second delay
  });


// ----------------Loading screen -----------------
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

  });

// Funktion, um den aktiven Link basierend auf der URL zu setzen
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.link');
  const currentLocation = window.location.hash;

  // Entfernt die 'active' Klasse von allen Links
  links.forEach(link => link.classList.remove('active'));

  // Setzt die 'active' Klasse nur für den aktuellen Link
  if (currentLocation) {
    const activeLink = document.querySelector(`#${currentLocation.substring(1)}-link`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // Event-Listener für alle Links, um die aktive Klasse zu setzen
  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
