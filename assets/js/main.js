const thumbsSwiper = new Swiper('.thumbs-swiper', {
    slidesPerView: 5, // Show all 5 thumbnails
    spaceBetween: 5,
    watchSlidesProgress: true,
    // loop: true,
    breakpoints: {
        300:{
            slidesPerView: 1,
        },
        360:{
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 3, 
        },
        768: {
            slidesPerView: 5, 
        },
    }
});

const mainSwiper = new Swiper('.main-swiper', {
    // loop: true,
    spaceBetween: 5,
    thumbs: {
        swiper: thumbsSwiper, // Link thumbs swiper to the main swiper
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    thumbs: {
        swiper: thumbsSwiper, // Link thumbnails to main swiper
    },
});

function adjustCardHeights() {
    const cards = document.querySelectorAll('.testimonial-card');
    let maxHeight = 0;

    // Reset heights to calculate
    cards.forEach(card => (card.style.height = 'auto'));

    // Find the tallest card
    cards.forEach(card => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) maxHeight = cardHeight;
    });

    // Apply the tallest height to all cards
    cards.forEach(card => (card.style.height = `${maxHeight}px`));
}

// Call the function after Swiper initializes
mainSwiper.on('slideChange', adjustCardHeights);
adjustCardHeights();

// Initialize AOS

AOS.init();