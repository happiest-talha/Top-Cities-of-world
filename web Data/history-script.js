const historyData = {
  // History data for cities
};

// Handle history link clicks
const historyLinks = document.querySelectorAll(".history-link");
historyLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const city = link.getAttribute("data-city");
    populateHistory(city);
  });
});

function populateHistory(city) {
  const historyContainer = document.getElementById("historyContainer");
  historyContainer.innerHTML = ""; // Clear existing content

  const historyCard = document.createElement("div");
  historyCard.classList.add("history-card");
  historyCard.innerHTML = `
    <h2>${citiesData[city].name}</h2>
    <img src="${citiesData[city].image}" alt="${citiesData[city].name}">
    <p>${historyData[city]}</p>
  `;
  historyContainer.appendChild(historyCard);
}
