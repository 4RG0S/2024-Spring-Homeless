// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


var educationSlideIndex = 1;
var studySlideIndex = 1;
var seminarSlideIndex = 1;
var hackingSlideIndex = 1;
var hackathonSlideIndex = 1;
var affSlideIndex = 1;
var jfsSlideIndex = 1;

showSlides(educationSlideIndex, 'education');
showSlides(studySlideIndex, 'study');
showSlides(seminarSlideIndex, 'seminar');
showSlides(hackingSlideIndex, 'hacking');
showSlides(hackathonSlideIndex, 'hackathon');
showSlides(affSlideIndex, 'aff');
showSlides(jfsSlideIndex, 'jfs');

// Next/previous controls
function plusSlides(n, section) {
  if (section === 'education') {
    showSlides(educationSlideIndex += n, 'education');
  } else if (section === 'study') {
    showSlides(studySlideIndex += n, 'study');
  } else if (section === 'seminar') {
    showSlides(seminarSlideIndex += n, 'seminar');
  } else if (section === 'hacking') {
    showSlides(hackingSlideIndex += n, 'hacking');
  } else if (section === 'hackathon') {
    showSlides(hackathonSlideIndex += n, 'hackathon');
  } else if (section === 'aff') {
    showSlides(affSlideIndex += n, 'aff');
  } else if (section === 'jfs') {
    showSlides(jfsSlideIndex += n, 'jfs');
  }
}

// Thumbnail image controls
function currentSlide(n, section) {
  if (section === 'education') {
    showSlides(educationSlideIndex = n, 'education');
  } else if (section === 'study') {
    showSlides(studySlideIndex = n, 'study');
  } else if (section === 'seminar') {
    showSlides(seminarSlideIndex = n, 'seminar');
  } else if (section === 'hacking') {
    showSlides(hackingSlideIndex = n, 'hacking');
  } else if (section === 'hackathon') {
    showSlides(hackathonSlideIndex = n, 'hackathon');
  } else if (section === 'aff') {
    showSlides(affSlideIndex = n, 'aff');
  } else if (section === 'jfs') {
    showSlides(jfsSlideIndex = n, 'jfs');
  }
}

function showSlides(n, section) {
    var i;
    var slides = document.getElementsByClassName("mySlides-" + section);
    var dots = document.getElementsByClassName("thumbnail-" + section);
    
    if (n > slides.length) { 
      n = 1;
    }
    if (n < 1) { 
      n = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
  }
