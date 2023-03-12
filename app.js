const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
  {
    name: "Voluptatem",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
  {
    name: "Explicabo",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
  {
    name: "Rchitecto",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
  {
    name: " Beatae",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
  {
    name: " Vitae",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
  {
    name: "Inventore",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
  {
    name: "Veritatis",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
  {
    name: "Accusantium",
    image:
      "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  },
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
