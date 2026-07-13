# Lathasri Makeovers — Beauty Parlour & Tailoring Website

A modern, fully responsive static website for a local beauty parlour and tailoring business.

## Project Overview

This website showcases the services, pricing, gallery, and contact information for **Lathasri Makeovers** — a professional beauty parlour and tailoring shop. It is built using only HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript — no backend or build tools required.

## Folder Structure

```
parlour-tailoring/
│
├── index.html          # Home page (hero, services preview, reviews, CTA)
├── parlour.html        # Parlour services (10 services with cards)
├── tailoring.html      # Tailoring services (9 services with cards)
├── prices.html         # Full price list with search filter
├── gallery.html        # Photo gallery with category filter + modal preview
├── about.html          # About us, mission, vision, team
├── contact.html        # Contact form with JS validation + map + WhatsApp
│
├── css/
│   └── style.css       # All custom styles (CSS variables, animations, components)
│
├── js/
│   └── script.js       # All JavaScript (search, validation, scroll, animations)
│
├── images/             # Local images (currently using Unsplash URLs)
│
└── README.md           # This file
```

## Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | - | Page structure and content |
| CSS3 | - | Custom styling, animations, CSS variables |
| Bootstrap | 5.3.2 | Grid, navbar, cards, modals, forms |
| Bootstrap Icons | 1.11.3 | Icon library |
| Google Fonts | - | Playfair Display + Poppins |
| JavaScript | ES6 | Interactivity and validation |

All libraries are loaded via CDN — no npm or build tools needed.

## Features

- Responsive design (mobile, tablet, desktop)
- Sticky navigation bar with active page highlighting
- Hero section with animated statistics
- Service cards with hover effects
- Price table with real-time search filter
- Gallery with category filter + Bootstrap modal preview
- Scroll-to-top button
- Fade-in animations using Intersection Observer
- Contact form with full JavaScript validation
- WhatsApp direct link button
- Google Maps embed placeholder
- Page loader animation
- Elegant color scheme: Soft Pink + Gold

## How to Run

1. Download or clone this project folder.
2. Open `index.html` in any web browser.
3. No server, no installation needed — it's a static site.

**For live development**, you can use VS Code's Live Server extension:
- Install "Live Server" from VS Code Extensions
- Right-click `index.html` → "Open with Live Server"

## Pages

| Page | File | Description |
|---|---|---|
| Home | index.html | Landing page with hero, features, previews, reviews |
| Parlour | parlour.html | 10 beauty services with images, descriptions, prices |
| Tailoring | tailoring.html | 9 tailoring services with images, descriptions, prices |
| Prices | prices.html | Full price table with search and category filter |
| Gallery | gallery.html | 12 gallery images with hover effects and modal preview |
| About | about.html | Story, mission, vision, values accordion, team |
| Contact | contact.html | Validated contact form, business hours, WhatsApp, map |

## Contact Information (Business)

- **Name:** Lathasri Makeovers
- **Phone:** +91 90590 12241
- **Email:** gattupallimahesh0351@gmail.com
- **Hours:** Monday – Saturday: 9:00 AM – 8:00 PM

## Future Enhancements

When ready to add a backend, this project can be integrated with:

- **Python Flask** — Simple REST API for contact form submissions
- **Django** — Full-featured backend with admin panel and database
- **MySQL / SQLite** — Store appointment bookings and client data
- **Online Booking System** — Date/time slot selection with calendar
- **Payment Gateway** — Razorpay or PayU for advance booking payments
- **SMS/Email Notifications** — Auto-confirm appointments via Twilio or SendGrid
- **Admin Dashboard** — Manage services, prices, and gallery from a web UI

---

Built with HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript.
