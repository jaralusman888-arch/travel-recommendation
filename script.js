const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const resultsDiv = document.getElementById('results');

const data = {
  beaches: [
    {
      name: "Bora Bora Beach",
      imageUrl: "https://picsum.photos/id/1002/500/300",
      description: "A beautiful tropical beach with crystal clear blue water and soft white sand."
    },
    {
      name: "Copacabana Beach",
      imageUrl: "https://picsum.photos/id/1015/500/300",
      description: "A world-famous beach known for its vibrant energy and golden shoreline."
    }
  ],
  temples: [
    {
      name: "Angkor Wat",
      imageUrl: "https://picsum.photos/id/1016/500/300",
      description: "A massive, historic temple complex located in Siem Reap, Cambodia."
    },
    {
      name: "Golden Temple",
      imageUrl: "https://picsum.photos/id/1025/500/300",
      description: "A prominent spiritual temple located in Amritsar, Punjab, India."
    }
  ],
  countries: [
    {
      name: "Australia",
      imageUrl: "https://picsum.photos/id/1039/500/300",
      description: "A diverse country known for stunning natural landscapes and vibrant coastal cities."
    },
    {
      name: "Japan",
      imageUrl: "https://picsum.photos/id/1040/500/300",
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
