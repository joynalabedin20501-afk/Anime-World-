// Get the season number from URL (example: season.html?season=1)
const urlParams = new URLSearchParams(window.location.search);
const seasonNumber = urlParams.get("season");

// Load the JSON file
fetch("data/videos.json")
  .then(response => response.json())
  .then(data => {
    const seasonKey = "season" + seasonNumber;
    const episodes = data[seasonKey];

    document.getElementById("season-title").innerText = "Season " + seasonNumber;

    const container = document.getElementById("episode-container");

    episodes.forEach(ep => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${ep.title}</h3>
        <iframe width="100%" height="200"
          src="https://www.youtube.com/embed/${ep.videoId}?rel=0&modestbranding=1&playsinline=1"
          frameborder="0"
          allowfullscreen>
        </iframe>
      `;
      container.appendChild(div);
    });
  });
