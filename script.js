var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function() {
            this.classList.toggle("show");

            var dropdownContents = document.querySelectorAll(".dropdown-content");
            dropdownContents.forEach(function(content) {
                if (content !== dropdown.querySelector(".dropdown-content")) {
                    content.classList.remove("show");
                }
            });
        });
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches(".dropdown")) {
            var dropdownContents = document.querySelectorAll(".dropdown-content");
            dropdownContents.forEach(function(content) {
                content.classList.remove("show");
            });
        }
    });
});


