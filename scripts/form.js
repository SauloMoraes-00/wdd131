document.addEventListener('DOMContentLoaded', () => {
    // Set the current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    // Retrieve the review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    // Display the current review count (if present)
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }

    // Product array (ID and Name)
    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
    // Populate the product select dropdown
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;  // Set the product id as value
        option.textContent = product.name;  // Set the product name as text
        productSelect.appendChild(option);
    });

    // Handle form submission
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent the form from submitting normally

            // Increment the review count
            reviewCount++;

            // Store the updated count in localStorage
            localStorage.setItem('reviewCount', reviewCount);

            // Update the review count on the page
            if (counterElement) {
                counterElement.textContent = reviewCount;
            }

            // Optionally reset the form after submission
            reviewForm.reset();

            alert('Thank you for your review!');
        });
    }
});


