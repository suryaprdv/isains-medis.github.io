<script>
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optional: Auto slide every 5 seconds
setInterval(nextSlide, 5000);
</script>

