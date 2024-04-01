document.addEventListener("DOMContentLoaded", function () {



    //Filters open
    $(".filters").click(function () {
      $("form#price-form").toggleClass("show");
  });

  $(".filter-title").click(function () {
      // Add the 'hide' class to the parent element
      var parent = $(this).parent(".filter-section");
      parent.find(".section-limits").toggleClass("hide");
      $(this).find(".filter-open").toggleClass("plus");
  });

  // Get the form element
  const filterForm = document.getElementById("price-form");

  // Add a change event listener to the form
  filterForm.addEventListener("change", function () {
    this.preventDefault();
    // Get all input elements with the class "filter-input"
    const filterInputs = document.querySelectorAll(".filter-input");

    // Initialize a URLSearchParams object
    const queryParams = new URLSearchParams();

    // Iterate over each input and add its value to the URL parameters
    filterInputs.forEach(function (input) {
      queryParams.set(input.name, input.value);
    });

    // Get the current URL without the query parameters
    const baseUrl = window.location.href.split("?")[0];

    // Update the URL with the new query parameters
    const newUrl = `${baseUrl}?${queryParams.toString()}`;

    // Optionally, you can log or update the browser history with the new URL
    console.log("Updated URL:", newUrl);
    window.history.replaceState(null, null, newUrl);

    // Optionally, you can perform some actions here before submission

    // Submit the form
    filterForm.submit();
  });

 
});
