// Seasons data (you can add more seasons later)
const seasons = [
  {
    number: 1,
    image: "images/season1.jpg"
  }
];

// Load seasons on homepage
const container = document.getElementById("season-container");

seasons.forEach(season => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div style="margin-bottom:20px;">
      <img src="${season.image}" style="width:100%; border-radius:10px;">
      <h2>Season ${season.number}</h2>
      <a href="season.html?season=${season.number}">
        Open Season
      </a>
    </div>
  `;
  container.appendChild(div);
});
