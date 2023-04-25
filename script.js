let catData;

fetch("cats.json")
  .then(response => response.json())
  .then(data => {
    catData = data;
    populateCatSelector(catData);
  })
  .catch(error => console.error(error));

function populateCatSelector(data) {
  const catSelector = document.getElementById("cat-selector");
  
  data.forEach(cat => {
    const option = document.createElement("option");
    option.text = cat.name;
    option.value = cat.id;
    catSelector.add(option);
  });

  catSelector.addEventListener("change", function() {
    const selectedCatId = this.value;
    const selectedCat = catData.find(cat => cat.id == selectedCatId);
    displayCatInfo(selectedCat);
  });
}

function displayCatInfo(cat) {
  const catInfoContainer = document.getElementById("cat-info-container");
  catInfoContainer.innerHTML = "";

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.textContent = cat.name;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const age = document.createElement("p");
  age.textContent = `Age: ${cat.age}`;

  const breed = document.createElement("p");
  breed.textContent = `Breed: ${cat.breed}`;

  const color = document.createElement("p");
  color.textContent = `Color: ${cat.color}`;

  const description = document.createElement("p");
  description.textContent = `Description: ${cat.description}`;

  cardBody.appendChild(age);
  cardBody.appendChild(breed);
  cardBody.appendChild(color);
  cardBody.appendChild(description);

  catInfoContainer.appendChild(cardHeader);
  catInfoContainer.appendChild(cardBody);
}
