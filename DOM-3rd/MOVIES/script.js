const movieContainer = document.getElementById("movie-container");

fetch("https://feecq.github.io/api/movies.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    data.forEach((movie) => {
        // console.log(movie);
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <img src="${movie.image}">
          <div class="card-content">
            <h3 class="card-title">${movie.movie}</h3>
            <p class="card-description">${movie.rating}</p>
            <p class="card-description"><a href="${movie.imdb_url}" target="_blank">IMDB</a></p>
          </div>
        `;

      movieContainer.appendChild(card);
    });

  });
