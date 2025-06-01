document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const produkCards = document.querySelectorAll("[data-kategori]");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const kategori = button.getAttribute("data-filter");

      produkCards.forEach(card => {
        const cardKategori = card.getAttribute("data-kategori");

        if (kategori === "all" || cardKategori === kategori) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // Ubah gaya tombol aktif
      filterButtons.forEach(btn => btn.classList.remove("bg-[#e9dbb2]", "text-white", "shadow"));
      button.classList.add("bg-[#e9dbb2]", "text-white", "shadow");
    });
  });
});

// promo
 
    const slider = document.getElementById('slider');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = 3;
    let currentIndex = 0;

    function goToSlide(index) {
      currentIndex = index;
      slider.style.transform = `translateX(-${index * 100}%)`;
      updateIndicators();
    }

    function updateIndicators() {
      indicators.forEach((btn, i) => {
        if (i === currentIndex) {
          btn.classList.remove('bg-gray-300');
          btn.classList.add('bg-gray-800');
        } else {
          btn.classList.remove('bg-gray-800');
          btn.classList.add('bg-gray-300');
        }
      });
    }

    // Auto Slide (Optional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      goToSlide(currentIndex);
    }, 7000);




  // === TESTIMONI CAROUSEL ===
const testimonialSlider = document.getElementById('testimonialSlider');
  const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
  let testimonialIndex = 0;
  const totalTestimonialSlides = 2;

  function goToTestimonialSlide(index) {
    testimonialIndex = index;
    testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
    updateTestimonialIndicators();
  }

  function updateTestimonialIndicators() {
    testimonialIndicators.forEach((btn, i) => {
      btn.classList.toggle('bg-gray-800', i === testimonialIndex);
      btn.classList.toggle('bg-gray-300', i !== testimonialIndex);
    });
  }

  // Optional: Auto-slide testimonial
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % totalTestimonialSlides;
    goToTestimonialSlide(testimonialIndex);
  }, 8000);



 function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("span:last-child");
    const isOpen = !content.classList.contains("hidden");

    // Close all open FAQs
    document.querySelectorAll("section button + div").forEach(div => div.classList.add("hidden"));
    document.querySelectorAll("section button span:last-child").forEach(span => span.textContent = '+');

    // Toggle current one
    if (!isOpen) {
      content.classList.remove("hidden");
      icon.textContent = '−';
    }
  }


  // halaman blog
 document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button[data-category]');
  const cards = document.querySelectorAll('[data-category]:not(button)');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});

// cabang

  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Remove active classes from all tabs
        tabs.forEach(t => t.classList.remove("bg-yellow-400", "text-white"));
        // Add active classes to the clicked tab
        tab.classList.add("bg-yellow-400", "text-white");

        const target = tab.getAttribute("data-tab");

        // Hide all content sections
        contents.forEach(c => c.classList.add("hidden"));
        // Show the selected tab content
        document.getElementById(target).classList.remove("hidden");
      });
    });
  });









