var count = 0;
document.getElementById("countButton").onclick = function() {
  count++;
  document.getElementById("countButton").innerHTML = count;
}