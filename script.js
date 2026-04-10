const places = {
  library: {
    title: "Library",
    map: "https://www.google.com/maps?q=LDV+Block+ITM+University+Gwalior&output=embed",
    image: "library.jpg",
    description: "The library is a central academic resource offering books, digital media, and comfortable study environments. It supports students with e-resources and quiet study spaces for focused learning.",
    category: "academic",
    features: ["Study Space", "Digital Resources"]
  },
  hostel: {
    title: "Hostel",
    map: "https://www.google.com/maps?q=ITM+University+Hostel+Gwalior&output=embed",
    image: "hostel.jpg",
    description: "The hostel area is close to academic blocks and student dining facilities. It provides secure residential accommodation for students with modern amenities and a comfortable campus atmosphere.",
    category: "residential",
    features: ["24/7 Access", "Student Residences"]
  },
  canteen: {
    title: "Nescafe",
    map: "https://www.google.com/maps?q=Nescafe+ITM+University+Gwalior&output=embed",
    image: "nescafe turari.avif",
    description: "Nescafe is a popular campus cafe for coffee, snacks, and quick meetings. It is a convenient social spot for students and visitors.",
    category: "facility",
    features: ["Cafe", "Meeting Spot"]
  },
  mg: {
    title: "Mahatma Gandhi Block",
    map: "https://www.google.com/maps?q=Mahatma+Gandhi+Block+ITM+University+Gwalior&output=embed",
    image: "department.jpg",
    description: "The MG Block hosts academic classrooms and lecture halls. It is one of the campus's main instructional buildings with modern infrastructure and well-appointed teaching spaces.",
    category: "academic",
    features: ["Lecture Halls", "Academic Offices"]
  },
  kirloshkar: {
    title: "Kirloshkar Block",
    map: "https://www.google.com/maps?q=Kirloshkar+Block+ITM+University+Gwalior&output=embed",
    image: "kirloshkar block itm.jpeg",
    description: "The Kirloshkar Block houses several teaching programs and departmental offices. It is supported by well-maintained grounds and nearby student amenities.",
    category: "academic",
    features: ["Classrooms", "Departments"]
  },
  sports: {
    title: "Sports Arena",
    map: "https://www.google.com/maps?q=ITM+University+Sports+Ground+Gwalior&output=embed",
    image: "itm cricket ground.jpg",
    description: "The sports arena includes expansive fields and courts for cricket, football, volleyball, and other athletic activities. It is a hub for physical education and campus events.",
    category: "sports",
    features: ["Outdoor Fields", "Athletics"]
  },
  cricketAcademy: {
    title: "ITM Cricket Academy",
    map: "https://www.google.com/maps?q=ITM+Cricket+Academy+Gwalior&output=embed",
    image: "itm cricket ground.jpg",
    description: "The ITM Cricket Academy is a dedicated training facility for cricket players. It supports coaching, practice sessions, and sports development programs.",
    category: "sports",
    features: ["Cricket Training", "Practice Facilities"]
  },
  footballField: {
    title: "Football Field",
    map: "https://www.google.com/maps?q=ITM+University+Football+Field+Gwalior&output=embed",
    image: "itm cricket ground.jpg",
    description: "The football field serves as the main outdoor pitch for campus sports and student athletic activities. It is used for training, matches, and recreation.",
    category: "sports",
    features: ["Football", "Practice"]
  },
  indoorArena: {
    title: "Indoor Sports Arena",
    map: "https://www.google.com/maps?q=Indoor+Sports+Arena+ITM+University+Gwalior&output=embed",
    image: "indoresport.jpeg",
    description: "The indoor sports arena hosts indoor games, training sessions, and campus events, offering a covered venue for athletics throughout the year.",
    category: "sports",
    features: ["Indoor Courts", "Events"]
  },
  jcBose: {
    title: "JC Bose Block",
    map: "https://www.google.com/maps?q=JC+Bose+Block+ITM+University+Gwalior&output=embed",
    image: "JC block area.webp",
    description: "The JC Bose Block is a distinctive academic building adjacent to the JC campus area. It contains classroom space and student support services.",
    category: "academic",
    features: ["Classrooms", "Offices"]
  },
  nescafe: {
    title: "Nescafe",
    map: "https://www.google.com/maps?q=Nescafe+ITM+University+Gwalior&output=embed",
    image: "nescafe turari.avif",
    description: "Nescafe is a popular campus cafe for coffee, snacks, and quick meetings. It is a convenient social spot for students and visitors.",
    category: "facility",
    features: ["Cafe", "Refreshments"]
  },
  parking: {
    title: "Parking Lot",
    map: "https://www.google.com/maps?q=Parking+Lot+ITM+University+Gwalior&output=embed",
    image: "parking.jpeg",
    description: "The campus parking lot provides vehicle parking near the main university entrance and academic buildings. It is convenient for visitors and daily commuters.",
    category: "facility",
    features: ["Parking", "Access"]
  },
  playground: {
    title: "Playground",
    map: "https://www.google.com/maps?q=Play+Ground+ITM+University+Gwalior&output=embed",
    image: "playground.png",
    description: "The playground is an outdoor recreation area for sports, events, and student leisure activities. It is easily accessible from the central campus road.",
    category: "sports",
    features: ["Recreation", "Open Space"]
  },
  ldv: {
    title: "LDV Block",
    map: "https://www.google.com/maps?q=LDV+Block+ITM+University+Gwalior&output=embed",
    image: "ldv.jpg",
    description: "The Leonardo da Vinci Block hosts classrooms, event spaces, and support facilities. It is a key venue for conferences, student activities, and academic events.",
    category: "academic",
    features: ["Events", "Classrooms"]
  },
  department: {
    title: "Departments",
    map: "https://www.google.com/maps?q=ITM+University+Gwalior&output=embed",
    image: "other.jpg",
    description: "All academic departments and instructional buildings are located across the ITM University Gwalior campus.",
    category: "academic",
    features: ["Academic", "Departments"]
  }
};

let currentCategory = 'all';
let currentLocation = 'department';

function getFilteredLocationKeys() {
  const query = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
  return Object.keys(places).filter(key => {
    const place = places[key];
    const matchCategory = currentCategory === 'all' || place.category === currentCategory;
    const matchQuery = !query || place.title.toLowerCase().includes(query) || place.description.toLowerCase().includes(query);
    return matchCategory && matchQuery;
  });
}

function renderLocationList() {
  const list = document.getElementById('locationList');
  const keys = getFilteredLocationKeys();
  list.innerHTML = keys.map(key => {
    const place = places[key];
    return `<div class="location-item ${currentLocation === key ? 'active' : ''}" onclick="selectLocation('${key}')">
      <h4>${place.title}</h4>
      <p>${place.category.charAt(0).toUpperCase() + place.category.slice(1)}</p>
    </div>`;
  }).join('');

  if (keys.length === 0) {
    list.innerHTML = '<p style="color:#64748b; margin:0;">No locations found. Try another search or category.</p>';
  }
}

function updateActiveChip() {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.classList.toggle('active', chip.textContent.toLowerCase() === currentCategory || (currentCategory === 'all' && chip.textContent.toLowerCase() === 'all'));
  });
}

function setCategory(category) {
  currentCategory = category;
  updateActiveChip();
  renderLocationList();
}

function selectLocation(key) {
  currentLocation = key;
  renderLocationList();
  showPlace(key);
}

function showPlace(placeKey) {
  const data = places[placeKey];
  if (!data) return;

  const map = document.getElementById('mapFrame');
  const img = document.getElementById('placeImage');
  const title = document.getElementById('placeTitle');
  const desc = document.getElementById('placeDesc');
  const tags = document.getElementById('featureTags');
  const directionsLink = document.getElementById('directionsLink');

  map.src = data.map;
  img.src = data.image;
  img.alt = data.title;
  title.innerText = data.title;
  desc.innerText = data.description;
  directionsLink.href = data.map.replace('&output=embed', '');

  tags.innerHTML = data.features.map(feature => `<span class="tag">${feature}</span>`).join('');
}

function openCurrentInMaps() {
  const data = places[currentLocation] || places.department;
  const url = data.map.replace('&output=embed', '');
  window.open(url, '_blank');
}

window.addEventListener('DOMContentLoaded', () => {
  updateActiveChip();
  renderLocationList();
  showPlace(currentLocation);
});
