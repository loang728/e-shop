document.addEventListener("DOMContentLoaded", function() { 
  var currentPageNumber = 1;
const itemsPerPage = 5;

// Fetching data using fetch and async/await
const fetchData = async () => {
  try {
    const response = await fetch("data.json"); // Fetch data from local JSON file
    const json = await response.json();
    return json; // Return the entire JSON data from the file
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Function to filter and display  data
const displayProductData = async () => {
  const jsonData = await fetchData();
  const productsData = jsonData.data;

  //Pagination
  const ulElement = document.createElement("div");
  ulElement.classList.add("products");

  const prevButton = document.querySelector(".pagination a.prevButton");
  prevButton.addEventListener("click", () => {
    currentPageNumber > 1 ? (currentPageNumber = currentPageNumber - 1) : {};
    upDateContentandPage();
  });

  const nextButton = document.querySelector(".pagination a.nextButton");
  nextButton.addEventListener("click", () => {
    currentPageNumber < totalPages
      ? (currentPageNumber = currentPageNumber + 1)
      : {};
    upDateContentandPage();
  });

  function displayItems(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = productsData.slice(startIndex, endIndex);

    const itemsElements = currentItems.map((item) => {
      return `<article>
    <div class="img-section">
      <img src="images/products/Rectangle 518.jpg" alt="placeholder" width="266" height="152">
      <span class="discount">7%</span>
      <div class="operations">
        <span class="ico circle love">.</span>
        <span class="ico circle exchange">.</span>
      </div>
    </div>
    <div class="description-section">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="rating">.</div>
    </div>
    <div class="price-add-section">
      <div class="price">
        <span class="price-amount">${item.newPrice} <sup>00</sup></span>
        <span class="price-currency">лв.</span>
      </div>
      <div class="price-old">${item.price} лв.</div>
      <span class="ico add-to-cart cart-white">.</span>
    </div>
  </article>`;
    });

    ulElement.innerHTML = itemsElements.join("");
    document.querySelector("div.products-holder").appendChild(ulElement);
  }

  function displayPaginationButtons(totalPages) {
    const paginationContainer = document.querySelector(".pagination ul");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("li");
      button.textContent = i;
      button.addEventListener("click", () => {
        currentPageNumber = i;
        upDateContentandPage();
      });
      paginationContainer.appendChild(button);
    }
  }

  // Initial display
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  function addClassToLi(page) {
    $("ul.page-numbers li").removeClass("current");
    $("ul.page-numbers li")
      .eq(page - 1)
      .addClass("current");
  }
  function upDateContentandPage() {
    displayItems(currentPageNumber);
    addClassToLi(currentPageNumber);
  }

  upDateContentandPage();
  displayPaginationButtons(totalPages);
  addClassToLi(currentPageNumber);
};

displayProductData();

});