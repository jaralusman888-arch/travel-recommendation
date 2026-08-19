const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const resultsDiv = document.getElementById('results');

const data = {
  beaches: [
    {
      name: "Bora Bora Beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
      description: "A beautiful tropical beach with crystal clear blue water and soft white sand."
    },
    {
      name: "Copacabana Beach",
      imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500",
      description: "A world-famous beach known for its vibrant energy and golden shoreline."
    }
  ],
  temples: [
    {
      name: "Angkor Wat",
      imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=500",
      description: "A massive, historic temple complex located in Siem Reap, Cambodia."
    },
    {
      name: "Golden Temple",
      imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500",
      description: "A prominent spiritual temple located in Amritsar, Punjab, India."
    }
  ],
  countries: [
    {
      name: "Australia",
      imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500",
      description: "A diverse country known for stunning natural landscapes and vibrant coastal cities."
    },
    {
      name: "Japan",
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500",
      description: "An island nation famous for its rich culture, cherry blossoms, and advanced technology."
    }
  ]
};

function displayResults(category) {
  resultsDiv.innerHTML = '';
  const items = data[category];
  
  if (items) {
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;
      resultsDiv.appendChild(card);
    });
  } else {
    resultsDiv.innerHTML = '<p>No results found. Try searching for "beach", "temple", or "country".</p>';
  }
}

if (btnSearch) {
  btnSearch.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query.includes('beach')) {
      displayResults('beaches');
    } else if (query.includes('temple')) {
      displayResults('temples');
    } else if (query.includes('country') || query.includes('countries')) {
      displayResults('countries');
    } else {
      resultsDiv.innerHTML = '<p>No results found. Try searching for "beach", "temple", or "country".</p>';
    }
  });
}

if (btnClear) {
  btnClear.addEventListener('click', () => {
    searchInput.value = '';
    resultsDiv.innerHTML = '';
  });
}
