/* ==========================================================
   script.js — All JavaScript for Lathasri Makeovers Website
   Author: Kiro AI
   Description: This single file handles:
     1. Page loader
     2. Sticky navbar style change on scroll
     3. Active nav link highlighting
     4. Scroll-to-top button
     5. Fade-in animations on scroll (Intersection Observer)
     6. Price table search/filter
     7. Gallery category filter
     8. Contact form validation
     9. Smooth scrolling for anchor links
   ========================================================== */

/* ----------------------------------------------------------
   Wait for the entire HTML page to load before running JS
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {

  /* --------------------------------------------------------
     1. PAGE LOADER
     Hides the loading spinner once the page is ready.
  -------------------------------------------------------- */
  const spinner = document.querySelector('.spinner-overlay');
  if (spinner) {
    // Short delay so users see the loader briefly
    setTimeout(() => spinner.classList.add('hidden'), 500);
  }

  /* --------------------------------------------------------
     2. STICKY NAVBAR — Add shadow when user scrolls down
  -------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      // User has scrolled down — add stronger shadow
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
    } else {
      // Back at top — restore subtle shadow
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    }
  });

  /* --------------------------------------------------------
     3. ACTIVE NAVBAR LINK
     Highlights the nav link for the current page by
     comparing href to the current page's filename.
  -------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    // Remove any existing active class first
    link.classList.remove('active');
    // Check if this link's href matches the current page
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --------------------------------------------------------
     4. SCROLL TO TOP BUTTON
     Shows a button when user scrolls past 300px.
     Clicking it smoothly scrolls back to the top.
  -------------------------------------------------------- */
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });

    // Scroll to top on button click
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------
     5. FADE-IN ON SCROLL (Intersection Observer API)
     Elements with class "fade-in" animate into view
     when they enter the browser's visible area.
     More performant than scroll event listeners.
  -------------------------------------------------------- */
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Element is visible — trigger animation
            entry.target.classList.add('visible');
            // Stop watching this element after it animates
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -40px 0px' // Trigger slightly before element enters view
      }
    );

    fadeElements.forEach(el => observer.observe(el));
  }

  /* --------------------------------------------------------
     6. PRICE TABLE SEARCH FILTER
     Filters table rows as the user types in the search box.
     Only used on prices.html.
  -------------------------------------------------------- */
  const searchBox = document.getElementById('priceSearch');
  if (searchBox) {
    searchBox.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase().trim();
      // Get all table body rows
      const rows = document.querySelectorAll('#priceTable tbody tr');

      rows.forEach(row => {
        // Get all text in this row as a single lowercase string
        const rowText = row.textContent.toLowerCase();
        // Show row if it contains the search term, hide otherwise
        row.style.display = rowText.includes(searchTerm) ? '' : 'none';
      });

      // Show a "no results" message if all rows are hidden
      const visibleRows = document.querySelectorAll('#priceTable tbody tr[style=""]');
      const noResults = document.getElementById('noResultsMsg');
      if (noResults) {
        noResults.style.display = visibleRows.length === 0 ? 'block' : 'none';
      }
    });
  }

  /* --------------------------------------------------------
     7. GALLERY CATEGORY FILTER
     Filters gallery items by category when filter buttons
     are clicked. Only used on gallery.html.
  -------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const category = this.dataset.filter; // e.g. "bridal", "hair", "all"
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            // Show matching items with a smooth fade
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.4s ease';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* --------------------------------------------------------
     8. CONTACT FORM VALIDATION
     Validates all fields before allowing form submission.
     Shows custom error messages below each field.
  -------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop default browser submission

      let isValid = true;

      // Helper function: show error under a field
      function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(fieldId + 'Error');
        if (field && error) {
          field.classList.add('is-invalid');
          error.textContent = message;
          error.style.display = 'block';
          isValid = false;
        }
      }

      // Helper function: clear error from a field
      function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(fieldId + 'Error');
        if (field && error) {
          field.classList.remove('is-invalid');
          error.style.display = 'none';
        }
      }

      // Clear all existing errors first
      ['name', 'phone', 'email', 'message'].forEach(clearError);

      // Validate Name — must be at least 2 characters
      const name = document.getElementById('name').value.trim();
      if (name.length < 2) {
        showError('name', 'Please enter your full name (at least 2 characters).');
      }

      // Validate Phone — must be exactly 10 digits
      const phone = document.getElementById('phone').value.trim();
      const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile format: starts 6-9, 10 digits
      if (!phoneRegex.test(phone)) {
        showError('phone', 'Please enter a valid 10-digit Indian mobile number.');
      }

      // Validate Email — must match standard email format
      const email = document.getElementById('email').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address.');
      }

      // Validate Message — must be at least 10 characters
      const message = document.getElementById('message').value.trim();
      if (message.length < 10) {
        showError('message', 'Please enter a message (at least 10 characters).');
      }

      // If all validations pass, show success message
      if (isValid) {
        const successMsg = document.getElementById('formSuccess');
        if (successMsg) {
          successMsg.style.display = 'block';
          contactForm.reset(); // Clear the form
          // Hide success message after 5 seconds
          setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
        }
      }
    });

    // Real-time validation: clear errors as user types
    ['name', 'phone', 'email', 'message'].forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', function () {
          this.classList.remove('is-invalid');
          const error = document.getElementById(fieldId + 'Error');
          if (error) error.style.display = 'none';
        });
      }
    });
  }

  /* --------------------------------------------------------
     9. SMOOTH SCROLLING for anchor links (e.g. #services)
     Handles links like <a href="#services">View Services</a>
  -------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Skip plain # links
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        // Offset 70px for the sticky navbar height
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  /* --------------------------------------------------------
     10. AUTO-CLOSE MOBILE NAVBAR after link click
     On small screens, the Bootstrap navbar collapses
     automatically when a link is tapped.
  -------------------------------------------------------- */
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', function () {
        // Use Bootstrap's collapse API to close the menu
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

}); // End DOMContentLoaded
