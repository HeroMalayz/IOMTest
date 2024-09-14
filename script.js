// Add functionality to carousel slider
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    testimonials[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % totalTestimonials;
    testimonials[currentIndex].style.opacity = '1';
}

setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds
