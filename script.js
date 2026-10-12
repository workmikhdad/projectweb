/* ==========================================================================
   PrimeEstates Luxury Real Estate - JavaScript Functionality
   ========================================================================== */

// --- Properties Dataset ---
const initialProperties = [
  {
    id: 'pe-101',
    title: 'The Solstice Waterfront Villa',
    type: 'villa',
    purpose: 'sale',
    price: 6850000,
    priceDisplay: '$6,850,000',
    location: 'Malibu, California',
    beds: 5,
    baths: 6,
    sqft: 7200,
    featured: true,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    description: 'An architectural triumph cantilevered over the Pacific ocean. Features floor-to-ceiling glass walls, infinity plunge pool, custom Italian kitchen, private beach steps, and an automated smart-living ecosystem.',
    amenities: ['Infinity Ocean Pool', 'Private Beach Access', 'Smart Automation', 'Wine Cellar', 'Heated Terraces', '3-Car Garage'],
    agent: {
      name: 'Victoria Vance',
      role: 'Principal Broker - Coastal Luxury',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (310) 555-0192'
    }
  },
  {
    id: 'pe-102',
    title: 'Tribeca Sky Penthouse Residence',
    type: 'penthouse',
    purpose: 'sale',
    price: 9400000,
    priceDisplay: '$9,400,000',
    location: 'Tribeca, New York, NY',
    beds: 4,
    baths: 4.5,
    sqft: 5400,
    featured: true,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    description: 'Breathtaking duplex penthouse offering 360-degree views of the Manhattan skyline and Hudson River. Includes a private key elevator, wrap-around rooftop terrace with outdoor fireplace, and marble bathrooms.',
    amenities: ['Private Keyed Elevator', 'Panoramic Rooftop', 'Outdoor Fireplace', '24/7 Concierge', 'Valet Parking', 'Private Gym'],
    agent: {
      name: 'Marcus Sterling',
      role: 'Managing Partner - Manhattan Prime',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (212) 555-0814'
    }
  },
  {
    id: 'pe-103',
    title: 'The Bellagio Modern Estate',
    type: 'mansion',
    purpose: 'sale',
    price: 12500000,
    priceDisplay: '$12,500,000',
    location: 'Beverly Hills, California',
    beds: 7,
    baths: 9,
    sqft: 11500,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'An expansive modern Beverly Hills masterpiece boasting museum-quality architecture, sprawling manicured grounds, tennis court, indoor wellness spa, and an Olympic-sized pool flanked by fire features.',
    amenities: ['Championship Tennis Court', 'Indoor Wellness Spa', 'Subterranean 8-Car Gallery', 'Home Cinema', 'Security Guardhouse'],
    agent: {
      name: 'Victoria Vance',
      role: 'Principal Broker - Coastal Luxury',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (310) 555-0192'
    }
  },
  {
    id: 'pe-104',
    title: 'Star Island Minimalist Haven',
    type: 'villa',
    purpose: 'rent',
    price: 32000,
    priceDisplay: '$32,000 / mo',
    location: 'Miami Beach, Florida',
    beds: 4,
    baths: 5,
    sqft: 4800,
    featured: false,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Gated tropical retreat with deep-water yacht docking on Star Island. Floor-to-ceiling glass frames lush palm gardens and tranquil bay vistas. Fully furnished with designer European couture pieces.',
    amenities: ['100ft Private Yacht Dock', 'Heated Saltwater Pool', 'Lush Tropical Garden', 'Gated Island Security', 'Outdoor Kitchen'],
    agent: {
      name: 'Sebastian Cruz',
      role: 'South Florida Luxury Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (305) 555-0422'
    }
  },
  {
    id: 'pe-105',
    title: 'Tahoe Alpine Glass Villa',
    type: 'villa',
    purpose: 'sale',
    price: 4950000,
    priceDisplay: '$4,950,000',
    location: 'Lake Tahoe, Nevada',
    beds: 5,
    baths: 5,
    sqft: 6100,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern alpine retreat nestled among towering pines with panoramic lake views. Features heated radiant floors, double-sided stone hearth, sauna, outdoor cedar hot tub, and private ski storage.',
    amenities: ['Panoramic Lake Vistas', 'Heated Stone Flooring', 'Scandinavian Cedar Sauna', 'Ski In / Ski Out', 'Tesla Charging Hub'],
    agent: {
      name: 'Victoria Vance',
      role: 'Principal Broker - Coastal Luxury',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (310) 555-0192'
    }
  },
  {
    id: 'pe-106',
    title: 'The Lumina Skyline Flat',
    type: 'apartment',
    purpose: 'rent',
    price: 14500,
    priceDisplay: '$14,500 / mo',
    location: 'Downtown Seattle, WA',
    beds: 2,
    baths: 2.5,
    sqft: 2200,
    featured: false,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    description: 'High-concept architectural apartment overlooking Puget Sound and the Olympic Mountains. Custom walnut cabinetry, Gaggenau appliances, and building access to an Olympic pool and rooftop sky lounge.',
    amenities: ['Sky Lounge Access', 'Gaggenau Kitchen Appliances', 'Concierge & Package Locker', 'Pet Spa & Run', 'EV Parking'],
    agent: {
      name: 'Marcus Sterling',
      role: 'Managing Partner - Urban Prime',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (212) 555-0814'
    }
  },
  {
    id: 'pe-107',
    title: 'Red Mountain Contemporary Lodge',
    type: 'mansion',
    purpose: 'sale',
    price: 8900000,
    priceDisplay: '$8,900,000',
    location: 'Aspen, Colorado',
    beds: 6,
    baths: 7,
    sqft: 8600,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Iconic Red Mountain residence framed in steel and reclaimed timber. Unobstructed vistas of Aspen Mountain, grand entertainer’s deck with fire pit, private heated driveway, and an elevator.',
    amenities: ['Heated Driveway', 'Mountain Views', 'Reclaimed Timber Accents', 'Wine Tasting Room', 'Private Elevator'],
    agent: {
      name: 'Sebastian Cruz',
      role: 'Luxury Advisor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (305) 555-0422'
    }
  },
  {
    id: 'pe-108',
    title: 'The SoHo Iron & Glass Loft',
    type: 'apartment',
    purpose: 'sale',
    price: 3850000,
    priceDisplay: '$3,850,000',
    location: 'SoHo, New York, NY',
    beds: 3,
    baths: 3,
    sqft: 3100,
    featured: false,
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80',
    description: 'Authentic historic cast-iron loft with 14-foot timber beam ceilings, original exposed brick, massive Corinthian columns, and museum-grade gallery lighting. Perfectly situated in the heart of SoHo.',
    amenities: ['14-Foot Ceilings', 'Exposed Original Brick', 'Direct Key Elevator', 'Custom Italian Closets', 'Soundproof Windows'],
    agent: {
      name: 'Marcus Sterling',
      role: 'Managing Partner - Manhattan Prime',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (212) 555-0814'
    }
  },
  {
    id: 'pe-109',
    title: 'Silver Lake Architectural Pavilion',
    type: 'villa',
    purpose: 'rent',
    price: 18000,
    priceDisplay: '$18,000 / mo',
    location: 'Los Angeles, California',
    beds: 3,
    baths: 3.5,
    sqft: 3400,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    description: 'Mid-century inspired architectural compound perched high above Silver Lake Reservoir. Seamless indoor-outdoor flow leading to a terrazzo swimming pool, organic citrus orchard, and tranquil meditation studio.',
    amenities: ['Terrazzo Pool', 'Reservoir Views', 'Meditation Studio', 'Citrus Orchard', 'Smart Security'],
    agent: {
      name: 'Victoria Vance',
      role: 'Principal Broker - Coastal Luxury',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (310) 555-0192'
    }
  }
];

// --- State Management ---
let properties = [...initialProperties];
let savedWishlistIds = JSON.parse(localStorage.getItem('prime_estates_wishlist')) || [];
let activeHeroPurpose = 'all';

// --- DOM Element References ---
const propertiesGrid = document.getElementById('propertiesGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const featuredSlider = document.getElementById('featuredSlider');
const featPrevBtn = document.getElementById('featPrevBtn');
const featNextBtn = document.getElementById('featNextBtn');

// Filter inputs
const keywordSearch = document.getElementById('keywordSearch');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortBySelect = document.getElementById('sortBy');
const filterPurpose = document.getElementById('filterPurpose');
const filterType = document.getElementById('filterType');
const filterBeds = document.getElementById('filterBeds');
const filterPriceRange = document.getElementById('filterPriceRange');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const noResultsResetBtn = document.getElementById('noResultsResetBtn');

// Hero elements
const heroSearchBtn = document.getElementById('heroSearchBtn');
const heroLocationInput = document.getElementById('heroLocationInput');
const heroTypeSelect = document.getElementById('heroTypeSelect');
const heroBudgetSelect = document.getElementById('heroBudgetSelect');
const heroTabs = document.querySelectorAll('.hero-search-box .tab-btn');

// Wishlist Drawer
const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const wishlistBackdrop = document.getElementById('wishlistBackdrop');
const closeWishlistBtn = document.getElementById('closeWishlistBtn');
const wishlistBadge = document.getElementById('wishlistBadge');
const drawerWishlistCount = document.getElementById('drawerWishlistCount');
const wishlistItemsList = document.getElementById('wishlistItemsList');
const clearAllWishlistBtn = document.getElementById('clearAllWishlistBtn');
const inquireAllWishlistBtn = document.getElementById('inquireAllWishlistBtn');

// Modals
const propertyModalBackdrop = document.getElementById('propertyModalBackdrop');
const propertyModalContent = document.getElementById('propertyModalContent');
const closeModalBtn = document.getElementById('closeModalBtn');

const tourModalBackdrop = document.getElementById('tourModalBackdrop');
const tourModal = document.getElementById('tourModal');
const closeTourModalBtn = document.getElementById('closeTourModalBtn');
const tourForm = document.getElementById('tourForm');
const tourModalTitle = document.getElementById('tourModalTitle');
const tourPropertyIdInput = document.getElementById('tourPropertyId');

const listPropertyBtn = document.getElementById('listPropertyBtn');
const listPropertyModalBackdrop = document.getElementById('listPropertyModalBackdrop');
const closeListPropertyModalBtn = document.getElementById('closeListPropertyModalBtn');
const listPropertyForm = document.getElementById('listPropertyForm');

const newsletterForm = document.getElementById('newsletterForm');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// --- Mortgage Calculator Elements ---
const homePriceSlider = document.getElementById('homePrice');
const homePriceVal = document.getElementById('homePriceVal');
const downPaymentSlider = document.getElementById('downPayment');
const downPaymentVal = document.getElementById('downPaymentVal');
const loanTermSlider = document.getElementById('loanTerm');
const loanTermVal = document.getElementById('loanTermVal');
const interestRateSlider = document.getElementById('interestRate');
const interestRateVal = document.getElementById('interestRateVal');

const monthlyPaymentElem = document.getElementById('monthlyPayment');
const loanAmountResult = document.getElementById('loanAmountResult');
const totalInterestResult = document.getElementById('totalInterestResult');
const totalCostResult = document.getElementById('totalCostResult');
const applyPreApprovalBtn = document.getElementById('applyPreApprovalBtn');

// --- Helper Functions ---
function formatCurrency(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(number);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconClass = 'fa-circle-info';
  if (type === 'success') iconClass = 'fa-circle-check';
  if (type === 'danger') iconClass = 'fa-heart-circle-xmark';

  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Render Properties ---
function renderProperties() {
  const keyword = keywordSearch.value.trim().toLowerCase();
  const purpose = filterPurpose.value;
  const type = filterType.value;
  const beds = filterBeds.value;
  const priceRange = filterPriceRange.value;
  const sort = sortBySelect.value;

  // Filter logic
  let filtered = properties.filter(prop => {
    // Keyword match (title, location, description, or type)
    if (keyword) {
      const matchText = `${prop.title} ${prop.location} ${prop.description} ${prop.type}`.toLowerCase();
      if (!matchText.includes(keyword)) return false;
    }

    // Purpose match
    if (purpose !== 'all' && prop.purpose !== purpose) {
      return false;
    }

    // Type match
    if (type !== 'all' && prop.type !== type) {
      return false;
    }

    // Bedrooms
    if (beds !== 'all' && prop.beds < parseInt(beds, 10)) {
      return false;
    }

    // Price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (prop.price < min || prop.price > max) {
        return false;
      }
    }

    return true;
  });

  // Sort logic
  filtered.sort((a, b) => {
    if (sort === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'sqft-desc') return b.sqft - a.sqft;
    if (sort === 'beds-desc') return b.beds - a.beds;
    return 0;
  });

  // Update counts
  resultsCount.textContent = filtered.length;

  if (filtered.length === 0) {
    propertiesGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  propertiesGrid.innerHTML = filtered.map(prop => createPropertyCard(prop)).join('');
  attachPropertyCardListeners();
}

function createPropertyCard(prop) {
  const isWishlisted = savedWishlistIds.includes(prop.id);
  const purposeBadgeClass = prop.purpose === 'sale' ? 'badge-sale' : 'badge-rent';
  const purposeText = prop.purpose === 'sale' ? 'For Sale' : 'For Rent';

  return `
    <article class="property-card" data-id="${prop.id}">
      <div class="property-thumb">
        <img src="${prop.image}" alt="${prop.title}" loading="lazy">
        <div class="badge-group">
          <span class="badge-tag ${purposeBadgeClass}">${purposeText}</span>
          ${prop.featured ? '<span class="badge-tag badge-featured"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
        </div>
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${prop.id}" title="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>

      <div class="property-details">
        <div class="property-price">
          ${prop.priceDisplay}
        </div>
        <h3 class="property-title" title="${prop.title}">${prop.title}</h3>
        <p class="property-address"><i class="fa-solid fa-location-dot"></i> ${prop.location}</p>

        <div class="property-features">
          <div class="feature-spec" title="Bedrooms">
            <i class="fa-solid fa-bed"></i> <span>${prop.beds} Beds</span>
          </div>
          <div class="feature-spec" title="Bathrooms">
            <i class="fa-solid fa-bath"></i> <span>${prop.baths} Baths</span>
          </div>
          <div class="feature-spec" title="Living Area">
            <i class="fa-solid fa-ruler-combined"></i> <span>${prop.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn btn-outline quick-view-btn" data-id="${prop.id}">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
          <button class="btn btn-primary book-tour-btn" data-id="${prop.id}">
            <i class="fa-regular fa-calendar-check"></i> Book Tour
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachPropertyCardListeners() {
  // Wishlist toggle
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleWishlist(id);
    };
  });

  // Quick view modal
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openPropertyModal(id);
    };
  });

  // Book tour modal
  document.querySelectorAll('.book-tour-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openTourModal(id);
    };
  });
}

// --- Render Featured Spotlight Carousel ---
let currentFeaturedSlide = 0;
function renderFeaturedSlider() {
  const featuredItems = properties.filter(p => p.featured);
  featuredSlider.innerHTML = featuredItems.map(prop => createPropertyCard(prop)).join('');
  attachPropertyCardListeners();
}

function updateFeaturedSliderPosition() {
  const card = featuredSlider.querySelector('.property-card');
  if (!card) return;
  const cardWidth = card.offsetWidth + 24; // including gap
  featuredSlider.style.transform = `translateX(-${currentFeaturedSlide * cardWidth}px)`;
}

featPrevBtn.addEventListener('click', () => {
  if (currentFeaturedSlide > 0) {
    currentFeaturedSlide--;
    updateFeaturedSliderPosition();
  }
});

featNextBtn.addEventListener('click', () => {
  const featuredCount = properties.filter(p => p.featured).length;
  const maxSlide = Math.max(0, featuredCount - 3);
  if (currentFeaturedSlide < maxSlide) {
    currentFeaturedSlide++;
    updateFeaturedSliderPosition();
  } else {
    currentFeaturedSlide = 0; // loop back
    updateFeaturedSliderPosition();
  }
});

// --- Wishlist Management ---
function toggleWishlist(id) {
  const index = savedWishlistIds.indexOf(id);
  const property = properties.find(p => p.id === id);

  if (index > -1) {
    savedWishlistIds.splice(index, 1);
    showToast(`Removed "${property ? property.title : 'Property'}" from saved shortlist.`, 'danger');
  } else {
    savedWishlistIds.push(id);
    showToast(`Saved "${property ? property.title : 'Property'}" to your shortlist!`, 'success');
  }

  localStorage.setItem('prime_estates_wishlist', JSON.stringify(savedWishlistIds));
  updateWishlistUI();
  renderProperties();
  renderFeaturedSlider();
}

function updateWishlistUI() {
  const count = savedWishlistIds.length;
  wishlistBadge.textContent = count;
  drawerWishlistCount.textContent = count;

  if (count === 0) {
    wishlistItemsList.innerHTML = `
      <div class="wishlist-empty-msg">
        <i class="fa-regular fa-heart"></i>
        <p>No saved properties yet.<br>Click the heart icon on any residence to shortlist it here.</p>
      </div>
    `;
    clearAllWishlistBtn.style.display = 'none';
    inquireAllWishlistBtn.style.display = 'none';
    return;
  }

  clearAllWishlistBtn.style.display = 'inline-flex';
  inquireAllWishlistBtn.style.display = 'inline-flex';

  const savedProps = properties.filter(p => savedWishlistIds.includes(p.id));
  wishlistItemsList.innerHTML = savedProps.map(item => `
    <div class="wishlist-item-card">
      <img src="${item.image}" alt="${item.title}" class="wishlist-item-img">
      <div class="wishlist-item-details">
        <h4 title="${item.title}">${item.title}</h4>
        <div class="item-price">${item.priceDisplay}</div>
        <small style="color: var(--text-muted);"><i class="fa-solid fa-location-dot"></i> ${item.location}</small>
      </div>
      <button class="wishlist-item-remove" data-id="${item.id}" title="Remove item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  wishlistItemsList.querySelectorAll('.wishlist-item-remove').forEach(btn => {
    btn.onclick = () => {
      toggleWishlist(btn.getAttribute('data-id'));
    };
  });
}

wishlistToggleBtn.addEventListener('click', () => {
  wishlistDrawer.classList.add('open');
  wishlistBackdrop.classList.add('active');
});

function closeWishlistDrawer() {
  wishlistDrawer.classList.remove('open');
  wishlistBackdrop.classList.remove('active');
}

closeWishlistBtn.addEventListener('click', closeWishlistDrawer);
wishlistBackdrop.addEventListener('click', closeWishlistDrawer);

clearAllWishlistBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all saved properties?')) {
    savedWishlistIds = [];
    localStorage.removeItem('prime_estates_wishlist');
    updateWishlistUI();
    renderProperties();
    renderFeaturedSlider();
    showToast('Saved properties cleared.', 'info');
  }
});

inquireAllWishlistBtn.addEventListener('click', () => {
  closeWishlistDrawer();
  openTourModal(null, `Inquiry for ${savedWishlistIds.length} Shortlisted Properties`);
});

// --- Property Detail Modal ---
function openPropertyModal(id) {
  const property = properties.find(p => p.id === id);
  if (!property) return;

  const isWishlisted = savedWishlistIds.includes(property.id);

  propertyModalContent.innerHTML = `
    <div class="modal-gallery">
      <img src="${property.image}" alt="${property.title}">
    </div>
    <div class="modal-info">
      <div class="modal-price">${property.priceDisplay}</div>
      <h2 class="modal-title">${property.title}</h2>
      <p class="modal-location"><i class="fa-solid fa-location-dot"></i> ${property.location}</p>

      <div class="modal-specs-grid">
        <div class="modal-spec-item">
          <span>Bedrooms</span>
          <strong>${property.beds} Beds</strong>
        </div>
        <div class="modal-spec-item">
          <span>Bathrooms</span>
          <strong>${property.baths} Baths</strong>
        </div>
        <div class="modal-spec-item">
          <span>Interior Space</span>
          <strong>${property.sqft.toLocaleString()} sqft</strong>
        </div>
      </div>

      <p class="modal-description">${property.description}</p>

      <h4 class="modal-amenities-title">Signature Amenities</h4>
      <div class="modal-amenities">
        ${property.amenities.map(am => `<div class="amenity-chip"><i class="fa-solid fa-check"></i> ${am}</div>`).join('')}
      </div>

      <div class="modal-agent-box">
        <div class="modal-agent-profile">
          <img src="${property.agent.image}" alt="${property.agent.name}">
          <div>
            <h5>${property.agent.name}</h5>
            <span>${property.agent.role}</span>
          </div>
        </div>
        <button class="btn btn-primary" id="modalScheduleTourBtn" data-id="${property.id}">
          <i class="fa-regular fa-calendar-check"></i> Schedule Visit
        </button>
      </div>
    </div>
  `;

  propertyModalBackdrop.classList.add('active');

  document.getElementById('modalScheduleTourBtn').onclick = () => {
    closePropertyModal();
    openTourModal(property.id);
  };
}

function closePropertyModal() {
  propertyModalBackdrop.classList.remove('active');
}

closeModalBtn.addEventListener('click', closePropertyModal);
propertyModalBackdrop.addEventListener('click', (e) => {
  if (e.target === propertyModalBackdrop) closePropertyModal();
});

// --- Tour / Inquiry Modal ---
function openTourModal(propertyId = null, customTitle = null) {
  tourPropertyIdInput.value = propertyId || '';
  const dateInput = document.getElementById('tourDate');
  
  // Set minimum date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split('T')[0];
  dateInput.value = tomorrow.toISOString().split('T')[0];

  if (propertyId) {
    const prop = properties.find(p => p.id === propertyId);
    tourModalTitle.textContent = `Schedule Visit: ${prop.title}`;
  } else if (customTitle) {
    tourModalTitle.textContent = customTitle;
  } else {
    tourModalTitle.textContent = 'Schedule a Private Consultation';
  }

  tourModalBackdrop.classList.add('active');
}

function closeTourModal() {
  tourModalBackdrop.classList.remove('active');
}

closeTourModalBtn.addEventListener('click', closeTourModal);
tourModalBackdrop.addEventListener('click', (e) => {
  if (e.target === tourModalBackdrop) closeTourModal();
});

tourForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('tourName').value.trim();
  const date = document.getElementById('tourDate').value;
  const tourType = document.getElementById('tourType').value;

  closeTourModal();
  tourForm.reset();

  showToast(`Thank you, ${name}! Your viewing reservation for ${date} has been confirmed. Our senior advisor will contact you within 2 business hours.`, 'success');
});

// --- List Property Modal ---
listPropertyBtn.addEventListener('click', () => {
  listPropertyModalBackdrop.classList.add('active');
});

function closeListPropertyModal() {
  listPropertyModalBackdrop.classList.remove('active');
}

closeListPropertyModalBtn.addEventListener('click', closeListPropertyModal);
listPropertyModalBackdrop.addEventListener('click', (e) => {
  if (e.target === listPropertyModalBackdrop) closeListPropertyModal();
});

listPropertyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('listTitle').value.trim();
  const type = document.getElementById('listType').value;
  const price = Number(document.getElementById('listPrice').value);
  const purpose = document.getElementById('listPurpose').value;
  const location = document.getElementById('listLocation').value.trim();
  const bedsVal = document.getElementById('listBeds').value.trim();
  const sqft = Number(document.getElementById('listSqft').value);
  let image = document.getElementById('listImage').value.trim();
  const desc = document.getElementById('listDesc').value.trim();

  if (!image) {
    image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
  }

  const parsedBeds = parseInt(bedsVal, 10) || 3;

  const newProperty = {
    id: 'pe-' + Date.now(),
    title,
    type,
    purpose,
    price,
    priceDisplay: purpose === 'rent' ? `${formatCurrency(price)} / mo` : formatCurrency(price),
    location,
    beds: parsedBeds,
    baths: parsedBeds + 1,
    sqft: sqft || 4000,
    featured: true,
    image,
    description: desc || 'Exclusive newly listed luxury estate offering world-class craftsmanship and top amenities.',
    amenities: ['Smart Automation', 'Designer Kitchen', 'High Ceilings', 'Private Parking', 'Security System'],
    agent: {
      name: 'Victoria Vance',
      role: 'Principal Advisor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (310) 555-0192'
    }
  };

  properties.unshift(newProperty);
  closeListPropertyModal();
  listPropertyForm.reset();
  renderProperties();
  renderFeaturedSlider();

  showToast(`Property "${title}" published live successfully to PrimeEstates!`, 'success');
  // Smooth scroll to catalog
  document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
});

// --- Mortgage / EMI Calculator ---
function calculateMortgage() {
  const price = Number(homePriceSlider.value);
  const downPercent = Number(downPaymentSlider.value);
  const tenureYears = Number(loanTermSlider.value);
  const annualRate = Number(interestRateSlider.value);

  // Update slider label texts
  homePriceVal.textContent = formatCurrency(price);
  const downPaymentAmount = price * (downPercent / 100);
  downPaymentVal.textContent = `${downPercent}% (${formatCurrency(downPaymentAmount)})`;
  loanTermVal.textContent = `${tenureYears} Years`;
  interestRateVal.textContent = `${annualRate.toFixed(1)}%`;

  // Principal
  const principal = price - downPaymentAmount;
  const monthlyRate = (annualRate / 100) / 12;
  const totalMonths = tenureYears * 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = principal / totalMonths;
  } else {
    monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                     (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const totalCost = (monthlyPayment * totalMonths) + downPaymentAmount;
  const totalInterest = (monthlyPayment * totalMonths) - principal;

  monthlyPaymentElem.innerHTML = `${formatCurrency(Math.round(monthlyPayment))}<span>/mo</span>`;
  loanAmountResult.textContent = formatCurrency(Math.round(principal));
  totalInterestResult.textContent = formatCurrency(Math.round(totalInterest));
  totalCostResult.textContent = formatCurrency(Math.round(totalCost));
}

[homePriceSlider, downPaymentSlider, loanTermSlider, interestRateSlider].forEach(slider => {
  slider.addEventListener('input', calculateMortgage);
});

applyPreApprovalBtn.addEventListener('click', () => {
  showToast('Connecting you with an approved private banking underwriter...', 'success');
});

// --- Hero Search Interactivity ---
heroTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    heroTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeHeroPurpose = tab.getAttribute('data-purpose');
  });
});

heroSearchBtn.addEventListener('click', () => {
  const loc = heroLocationInput.value.trim();
  const type = heroTypeSelect.value;
  const budget = heroBudgetSelect.value;

  if (loc) keywordSearch.value = loc;
  if (activeHeroPurpose !== 'all') filterPurpose.value = activeHeroPurpose;
  if (type !== 'all') filterType.value = type;

  if (budget !== 'all') {
    const budgetNum = Number(budget);
    if (budgetNum <= 1500000) filterPriceRange.value = '0-1500000';
    else if (budgetNum <= 3500000) filterPriceRange.value = '1500000-3500000';
    else if (budgetNum <= 6000000) filterPriceRange.value = '3500000-6000000';
    else filterPriceRange.value = '6000000-99999999';
  }

  renderProperties();
  document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
});

// --- Filter Event Listeners ---
keywordSearch.addEventListener('input', () => {
  clearSearchBtn.style.display = keywordSearch.value ? 'block' : 'none';
  renderProperties();
});

clearSearchBtn.addEventListener('click', () => {
  keywordSearch.value = '';
  clearSearchBtn.style.display = 'none';
  renderProperties();
});

[filterPurpose, filterType, filterBeds, filterPriceRange, sortBySelect].forEach(elem => {
  elem.addEventListener('change', renderProperties);
});

function resetFilters() {
  keywordSearch.value = '';
  clearSearchBtn.style.display = 'none';
  filterPurpose.value = 'all';
  filterType.value = 'all';
  filterBeds.value = 'all';
  filterPriceRange.value = 'all';
  sortBySelect.value = 'featured';
  heroLocationInput.value = '';
  heroTypeSelect.value = 'all';
  heroBudgetSelect.value = 'all';
  heroTabs.forEach(t => t.classList.remove('active'));
  heroTabs[0].classList.add('active');
  activeHeroPurpose = 'all';
  renderProperties();
  showToast('Filters reset to default.', 'info');
}

resetFiltersBtn.addEventListener('click', resetFilters);
noResultsResetBtn.addEventListener('click', resetFilters);

// --- Newsletter Subscription ---
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value.trim();
  newsletterForm.reset();
  showToast(`Welcome! ${email} has been subscribed to PrimeEstates Private Access.`, 'success');
});

// --- Mobile Navigation Menu Toggle ---
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePropertyModal();
    closeTourModal();
    closeListPropertyModal();
    closeWishlistDrawer();
  }
});

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderProperties();
  renderFeaturedSlider();
  updateWishlistUI();
  calculateMortgage();
});
