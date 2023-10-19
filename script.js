// Toggle between showing and hiding the sidebar when clicking the menu icon
function w3_open() {
  var mySidebar = document.getElementById("mySidebar");
  mySidebar.style.display = 'block';
}
  
// Close the sidebar with the close button
function w3_close() {
  var mySidebar = document.getElementById("mySidebar");
  mySidebar.style.display = "none";
}



// Home script
let slideIndex = 1;

// Next/previous controls
function plusSlides(n, i) {
  showSlides(slideIndex += n, i);
}

// Thumbnail image controls
function currentSlide(n, i) {
  showSlides(slideIndex = n, i);
}

function showSlides(n, c) {
  let i;
  let slides = document.getElementsByClassName("mySlides" + c);
  let dots = document.getElementsByClassName("dot" + c);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}