            document.addEventListener('DOMContentLoaded', function () {
				
				
				
            /*    // Get the form element
                const filterForm = document.getElementById('price-form');

                // Add a change event listener to the form
                filterForm.addEventListener('change', function () {
                    // Get all input elements with the class "filter-input"
                    const filterInputs = document.querySelectorAll('.filter-input');

                    // Initialize a URLSearchParams object
                    const queryParams = new URLSearchParams();

                    // Iterate over each input and add its value to the URL parameters
                    filterInputs.forEach(function (input) {
                        queryParams.set(input.name, input.value);
                    });

                    // Get the current URL without the query parameters
                    const baseUrl = window.location.href.split('?')[0];

                    // Update the URL with the new query parameters
                    const newUrl = `${baseUrl}?${queryParams.toString()}`;

                    // Optionally, you can log or update the browser history with the new URL
                    console.log('Updated URL:', newUrl);
                    window.history.replaceState(null, null, newUrl);

                    // Optionally, you can perform some actions here before submission

                    // Submit the form
                    filterForm.submit();
                });
				
				
				*/
				
				
				
				
				
				
				
				// Fetching data using fetch and async/await
const fetchData = async () => {
  try {
    const response = await fetch('data.json'); // Fetch data from local JSON file
    const json = await response.json();
    return json; // Return the entire JSON data from the file
	console.log(json);
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

// Function to filter and display cryptocurrency data
const displayCryptoData = async () => {
  const jsonData = await fetchData();
  console.log(jsonData);
 // const itemsToDisplay = ["BTC", "ETH", "XRP", "LTC", "BCH"];
  const productsData = jsonData.data;

  const itemsElements = productsData.map(item => {
    
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

  const ulElement = document.createElement('div');
 ulElement.classList.add('products');
 ulElement.innerHTML = itemsElements.join("");
  document.querySelector('div.products-holder').appendChild(ulElement);
};
				
				
				
				
				
				
				
				
				displayCryptoData();
				
				
				
				
				
				
            });