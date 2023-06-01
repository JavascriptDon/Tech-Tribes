// Get the button
var scrollToTopBtn = document.getElementById("btn-top");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

document.addEventListener("DOMContentLoaded", function() {
  var year = new Date().getFullYear();
  document.getElementById("current-year").textContent = year;
});

// Dialog  
document.addEventListener('DOMContentLoaded', function() {
  const myModal = document.getElementById('exampleModal');
  const myInput = document.getElementById('myInput');
  
  myModal.addEventListener('shown.bs.modal', function() {
    myInput.focus();
  });
});