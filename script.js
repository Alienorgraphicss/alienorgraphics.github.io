var slides = document.getElementsByClassName("slide");
var currentSlide = 0;
var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");

// Fonction pour afficher la diapositive suivante
function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

// Fonction pour afficher la diapositive précédente
function prevSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

// Écouteurs d'événements pour les boutons de navigation
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Appel de la fonction nextSlide toutes les 3 secondes pour faire défiler les photos
setInterval(nextSlide, 3000);
