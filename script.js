let x = document.getElementById("myBtn");
x.addEventListener("click", conclusion);
x.addEventListener("click", myFunction);
function conclusion() {
  alert("Thank you for veritying your age!");
}
function myFunction() {
  let age = document.getElementById("age").value;
  age = parseInt(age);
  let respond;
  if (age >= 17) {
    respond = "You can watch an R-rated movie alone.";
  } else if (age >= 13) {
    respond = "You can watch a PG-13 movie alone.";
  } else if (age >= 5) {
    respond = "You can watch a D-rated movie alone.";
  } else {
    respond = "Uh... You're too young to for most things.";
  }
  document.getElementById("demo").innerHTML = respond;
}