let btn = document.getElementById("toggleBtn");
let blub = document.getElementById("bulb");

let text = document.getElementById("text");

btn.addEventListener("click", toggleBulb);

function toggleBulb(e) {
  if (btn.textContent.includes("on")) {
    blub.src = "./on.png";
    blub.style.width = "400px";
    blub.style.height = "400px";
    blub.style.marginLeft = "100px";
    blub.style.marginTop = "-100px";
    btn.textContent = "Night";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.style.marginLeft = "140px";
    btn.style.marginTop = "0px";
    text.innerHTML = "Day";
    text.style.color = "white";
    text.style.marginLeft = "140px";
    document.body.style.backgroundImage = "url(./sky.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "850px";
    document.body.style.width = "390px";
  } else {
    blub.src = "./off.png";
    blub.style.width = "100px";
    blub.style.height = "100px";
    blub.style.marginLeft = "200px";
    blub.style.marginTop = "80px";
    btn.textContent = "Day on";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.style.marginLeft = "140px";
    btn.style.marginTop = "130px";
    text.innerHTML = "Night";
    text.style.marginLeft = "140px";
    text.style.color = "white";
    document.body.style.backgroundImage = "url(./star.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.height = "850px";
    document.body.style.width = "390px";
  }
}
