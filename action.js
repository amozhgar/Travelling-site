let ba = document.getElementById("bottom_arrow");
let ta = document.getElementById("top_arrow");
let b = document.getElementById("com_beh");
let f = document.getElementById("com_fro");
let img = document.getElementById("person_img");
ba.onclick = function () {
  b.classList.remove("comment_behind");
  f.classList.remove("comment_front");
  ta.classList.remove("diactive");
  ba.classList.add("diactive");
  b.classList.add("comment_front");
  f.classList.add("comment_top");
  img.src = "images/aram.png";
};
ta.onclick = function () {
  b.classList.remove("comment_front");
  f.classList.remove("comment_top");
  ba.classList.remove("diactive");
  ta.classList.add("diactive");
  b.classList.add("comment_behind");
  f.classList.add("comment_front");
  img.src = "./images/amo.JPG";
};
