# PrimeEstates - Luxury Real Estate E-Commerce Platform

A modern, responsive, and feature-rich static website for luxury real estate e-commerce built using pure **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## 🌟 Key Features

1. **Hero Section & Quick Search**
   - High-impact architectural imagery with curated luxury aesthetic.
   - Multi-criteria quick search bar with tabs for Buy and Rent.
   - Global market performance statistics.

2. **Interactive Property Catalog**
   - Handpicked luxury estates (Villas, Sky Penthouses, Modern Mansions, Lofts).
   - Real-time search by keyword, city, or feature.
   - Multi-filters:
     - Purpose (For Sale / For Rent)
     - Property Type (Villa, Penthouse, Mansion, Apartment)
     - Bedrooms (2+, 3+, 4+, 5+)
     - Price brackets
   - Sorting options: Featured first, Price low-to-high, Price high-to-low, Area, Bedrooms.

3. **Wishlist / Shortlist Drawer**
   - Instant saving with heart toggles.
   - Persistent storage via `localStorage`.
   - Side drawer showing shortlisted estates with direct inquiry options.

4. **Property Details Quick View Modal**
   - High-resolution gallery preview.
   - Key property metrics: Bedrooms, Bathrooms, Living Area sq ft.
   - Amenity badges (Wine Cellar, Private Dock, Tennis Court, etc.).
   - Assigned luxury advisor profile.

5. **Viewing / Inspection Booking Modal**
   - Book private in-person or live 4K video walkthroughs.
   - Form validation with customized confirmation toast messages.

6. **Interactive Mortgage & Investment Calculator**
   - Real-time slider controls for Home Price, Down Payment %, Loan Tenure, and Interest Rate.
   - Computes monthly payment breakdown, total interest paid, and total cost of ownership dynamically.

7. **Property Listing Submission (Seller Concierge)**
   - Allows users to dynamically submit and list new properties directly onto the marketplace.

8. **Mobile-First Responsive Design**
   - Fully optimized for mobile screens, tablets, and desktop displays.
   - Accessible slide-out navigation menu.

---

## 📁 Project Structure

```
projectweb/
├── index.html       # Semantic HTML5 markup
├── style.css        # Luxury design system, animations, responsive layout
├── script.js        # Dynamic catalog, filtering, mortgage calculator, modals, wishlist
└── README.md        # Documentation and launch instructions
```

---

## 🚀 How to Run

### Option 1: Direct Browser Launch
Simply double-click [`index.html`](file:///home/mikhdadmiku/Desktop/intern/tasks/task6/projectweb/index.html) or open it in any web browser (Chrome, Firefox, Edge, Safari).

### Option 2: Local HTTP Server (Python)
Run the following command in your terminal inside the `projectweb` directory:

```bash
python3 -m http.server 8000
```

Then visit:
```
http://localhost:8000
```
