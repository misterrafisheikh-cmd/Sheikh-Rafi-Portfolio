// Animate elements on scroll
// --- Scroll animation ---


const projects = document.querySelectorAll('.project');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  projects.forEach(project => {
    const boxTop = project.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      project.classList.add('visible');
    } else {
      project.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// --- Torch-like motion effect ---
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  projects.forEach((project, i) => {
    const depth = (i + 1) * 10;
    const rotateY = x * depth;
    const rotateX = -y * depth;

    project.style.transform = `
      perspective(1000px)
      rotateY(${rotateY}deg)
      rotateX(${rotateX}deg)
      translateY(0)
    `;
  });
});
// Reset on mouse leave
document.addEventListener('mouseleave', () => {
  projects.forEach(project => {
    project.style.transform = "translateY(0)";
  });
});
// mouse pointer-------
const cursor = document.querySelector('.cursor-container');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const speed = 0.15; // Lower = smoother follow

// Track mouse
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor follow
function followCursor() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(followCursor);
}
followCursor();

// Click pulse animation
document.addEventListener('mousedown', () => {
  cursor.classList.add('active');
});
document.addEventListener('mouseup', () => {
  cursor.classList.remove('active');
});

//FOOTER

    const contactLink = document.getElementById('contactLink');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    contactLink.addEventListener('click', () => {
      contactModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });

    // Close modal on background click
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
      }
    });
    
  

  
