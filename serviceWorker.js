const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg",
];
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});
