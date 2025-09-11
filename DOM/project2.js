const form = document.querySelector("form");
console.log(form);

// const height1 = parseInt(document.querySelector("#height").value);
// console.log(height1);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(weight);
  const resultElement = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    resultElement.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    resultElement.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const result = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(result);

    resultElement.innerHTML = ` your BMI is ${result}`;
  }
});
