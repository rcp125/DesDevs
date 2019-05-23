/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "240px";
  document.getElementById("nav-text").style.display = "unset";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("nav-text").style.display = "none";

}