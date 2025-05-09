// Loyalty Program Form Handling
document.getElementById('loyalty-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert(`Thank you, ${name}, for joining our Loyalty Program!`);
    // Additional logic for storing user data can be added here
  } else {
    alert('Please fill out all required fields.');
  }
});

// Coffee Tasting Flight Form Handling
document.getElementById('coffee-tasting-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const selectedCoffees = [];
  document.querySelectorAll('input[name="coffee"]:checked').forEach((checkbox) => {
    selectedCoffees.push(checkbox.value);
  });

  if (selectedCoffees.length > 0) {
    alert(`Thank you for trying our Coffee Tasting Flight! You selected: ${selectedCoffees.join(', ')}`);
    // Additional logic for processing tasting choices can be added here
  } else {
    alert('Please select at least one coffee option.');
  }
});