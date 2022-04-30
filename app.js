const volumeDot = document.getElementById("volumeDot");
const volume = document.getElementById("volume");

volume.addEventListener("mouseover", () => {
  volumeDot.style.display = "block";
});

volume.addEventListener("mouseout", () => {
  volumeDot.style.display = "none";
});
