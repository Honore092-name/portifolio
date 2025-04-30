
const hamburgerBtn = document.getElementById("hamburger-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const closeMenuBtn = document.getElementById("close-menu-btn");
        const mobileMenuLinks = mobileMenu.querySelectorAll("a");
        const navLinks = document.querySelectorAll('.nav-link');
        const navElement = document.querySelector('.nav');


        function toggleMobileMenu() {
            mobileMenu.classList.toggle("show");
        }

        hamburgerBtn.addEventListener("click", toggleMobileMenu);
        closeMenuBtn.addEventListener("click", toggleMobileMenu);

        mobileMenuLinks.forEach(link => {
            link.addEventListener("click", toggleMobileMenu);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (event) => {
            if (mobileMenu.classList.contains('show') && !mobileMenu.contains(event.target) && event.target !== hamburgerBtn) {
                toggleMobileMenu();
            }
        });

        // Responsive behavior for showing/hiding nav
        function updateNavDisplay() {
            if (window.innerWidth >= 768) {
                navElement.classList.add('show');
            } else {
                navElement.classList.remove('show');
            }
        }

        window.addEventListener('resize', updateNavDisplay);
        updateNavDisplay(); // Call on initial load

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            alert('Where are the f****n are you ging without filling my fields.');
            return;
        }

    

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        contactForm.reset();
        alert('Message sent successfully!');
    });
});
  const counters = document.querySelectorAll('.number');
  const speed = 80; // Lower number = faster count

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
