let stat = document.getElementById("status");
const btn = document.getElementById("enterBtn");

btn.addEventListener("click", function() {
    let heading = document.createElement("h1");
    heading.textContent = "Entered Metaverse";
    stat.innerHTML = "";
    stat.appendChild(heading);
});