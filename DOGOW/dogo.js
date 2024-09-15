const texts = ["Labrador", "Golden Retriever", "German Shepherd", "Bulldog"];
let index = 1;

function changetextandcolor() {
  const textSpan = document.getElementById("textSpan");
  textSpan.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changetextandcolor, 2000);
window.onload = changetextandcolor;

let images = ["labrador.avif", "golden.avif", "dogs.avif", "dogoo.avif"];

let image = 0;

function slideshow() {
  let x = document.body;
  x.style.backgroundImage = `url(${images[image]})`;
  image = (image + 1) % images.length;
}
setInterval(slideshow, 2000);
window.onload = slideshow;
