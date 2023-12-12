document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Log the form data to the console (Replace this with your own form handling logic)
    console.log({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    });
});

// Function to calculate and set the position of the dropdown
function positionDropdown() {
    // Get the button and dropdown elements
    var servicesButton = document.getElementById('servicesDropdown');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // Get the position of the button
    var buttonRect = servicesButton.getBoundingClientRect();
    var buttonTop = buttonRect.top + window.scrollY;
    var buttonLeft = buttonRect.left + window.scrollX;

    // Set the position of the dropdown
    dropdownMenu.style.position = 'absolute';
    dropdownMenu.style.top = buttonTop + servicesButton.offsetHeight + 'px';
    dropdownMenu.style.left = buttonLeft + 'px';
}

// Attach the function to the window resize event
window.addEventListener('resize', positionDropdown);

// Attach the function to the button click event (to update on click)
document.getElementById('servicesDropdown').addEventListener('click', positionDropdown);

// Initial position setup (in case the dropdown is visible on page load)
positionDropdown();