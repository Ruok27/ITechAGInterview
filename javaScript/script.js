function resetForm() {
  document.getElementById("form1").reset();
}

function submitString() {
  var x = document.getElementById("arrayInput").value.split(" ");

  return x;

  document.getElementById("arrayInput").reset();
}

function displayString() {
  var y = submitString();

document.getElementById("displayArrayHere").append(y);



}
