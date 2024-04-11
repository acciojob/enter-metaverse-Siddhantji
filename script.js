//your JS code here. If required.
const stat = document.getElementById("status");
const btn = document.getElementById("enterBtn");
btn.addEventListener("click",function(){
	let heading = document.createElement("h1");
	heading.id="status";
	heading.textContent= "Entered Metaverse";
	stat.parentNode.replaceChild(heading,stat);
})
