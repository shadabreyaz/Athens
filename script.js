// for hamburger
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle('open');
});

// Close menu when click outside
document.addEventListener('click', (event) => {
  const isClickInsideToggle = hamburger.contains(event.target);
  const isClickInsideMenu = menu.contains(event.target);

  if (!isClickInsideToggle && !isClickInsideMenu) {
    menu.classList.remove('active');
    hamburger.classList.remove('open');
  }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('nav-container');

  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


// for FAQ
function toggleAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (content.style.maxHeight) {
    // Collapse
    content.style.maxHeight = null;
    icon.style.transform = "rotate(0deg)";
  } else {
    // Expand
    content.style.maxHeight = content.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
  }
}


// for slider
const cards = document.querySelectorAll(".review-card");
const prevBtn = document.querySelector(".prev-arrow");
const nextBtn = document.querySelector(".next-arrow");
let current = 0;
let autoSlide;

function showSlide(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) card.classList.add("active");
  });
}

function nextSlide() {
  current = (current + 1) % cards.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + cards.length) % cards.length;
  showSlide(current);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 4000); // 5 sec delay
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Event listeners
nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

// Initialize
showSlide(current);
startAutoSlide();



// For animation
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});


// for back to top arrow
  const scrollBtn = document.getElementById("scrollToTop");

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });