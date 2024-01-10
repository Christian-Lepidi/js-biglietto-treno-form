const userName = document.getElementById("user-name");
const userAge = document.getElementById("user-age");
const userKm = document.getElementById("kilometers");
const printButton = document.getElementById("print-button");
const spanName = document.getElementById("name-lastname");
const priceSpan = document.getElementById("price");

printButton.addEventListener("click", function () {
  const nameLastname = userName.value;
  const age = userAge.value;
  const km = userKm.value;
  const cost = km * 0.21;
  console.log(cost);
  let price = 0;
  let discountedPrice20 = cost * 0.2;
  console.log(discountedPrice20);
  let discountedPrice40 = cost * 0.4;
  console.log(discountedPrice40);
  if (age == "minorenne") {
    price = cost - discountedPrice20;
  } else if (age == "over-65") {
    price = cost - discountedPrice40;
  } else {
    price = cost;
  }
  spanName.innerHTML = nameLastname;
  priceSpan.innerHTML = price.toFixed(2);
});
