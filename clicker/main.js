var count = 0;
btn = document.getElementById("countButton");
btn.onclick = function() {
  count++;
  btn.innerHTML = count;
}