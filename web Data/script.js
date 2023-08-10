const citiesData = {
  france: [
    {
      name: "Paris",
      image: "paris.jpg",
      description: "Description of Paris.",
    },
    {
      name: "Lyon",
      image: "lyon.jpg",
      description: "Description of Lyon.",
    },
    // Add more cities for France
  ],
  italy: [
    {
      name: "Rome",
      image: "rome.jpg",
      description: "Description of Rome.",
    },
    // Add more cities for Italy
  ],
  pakistan: [
    {
      name: "Islamabad",
      image: "islamabad.jpg",
      description: "Description of Islamabad.",
    },
    // Add more cities for Pakistan
    {
      name: "Karachi",
      image: "karachi.jpg",
      description: "Description of Karachi.",
    },
    {
      name: "Lahore",
      image: "lahore.jpg",
      description: "Description of Lahore.",
    },
  ],
  india: [
    {
      name: "Delhi",
      image: "delhi.jpg",
      description: "Description of Delhi.",
    },
    {
      name: "Mumbai",
      image: "mumbai.jpg",
      description: "Description of Mumbai.",
    },
    // Add more cities for India
  ],
  uae: [
    {
      name: "Dubai",
      image: "dubai.jpg",
      description: "Description of Dubai.",
    },
    {
      name: "Abu Dhabi",
      image: "abu_dhabi.jpg",
      description: "Description of Abu Dhabi.",
    },
    // Add more cities for UAE
  ],
  china: [
    {
      name: "Beijing",
      image: "beijing.jpg",
      description: "Description of Beijing.",
    },
    {
      name: "Shanghai",
      image: "shanghai.jpg",
      description: "Description of Shanghai.",
    },
    // Add more cities for China
  ],
};

// Handle city link clicks
const cityLinks = document.querySelectorAll(".city-link");
cityLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const country = link.getAttribute("data-country");
    populateCities(country);
  });
});

function populateCities(country) {
  const citiesContainer = document.getElementById("citiesContainer");
  citiesContainer.innerHTML = ""; // Clear existing content

  citiesData[country].forEach((city) => {
    const card = document.createElement("div");
    card.classList.add("city-card");
    card.innerHTML = `
      <h2>${city.name}</h2>
      <img src="${city.image}" alt="${city.name}">
      <p>${city.description}</p>
      <button class="btn">Learn More</button>
    `;
    citiesContainer.appendChild(card);
  });
}

// Initial population on page load (choose a default country)
populateCities("pakistan");
