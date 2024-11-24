document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;  // Added email
    const flight = document.getElementById('flight').value;
    const seat = document.getElementById('seat').value;

    // Prepare form data to send to the server
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);  // Added email
    formData.append('flight', flight);
    formData.append('seat', seat);

    // Send form data to the server via POST request using fetch()
    fetch('/book', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // On success, display confirmation
        document.getElementById('confirmationMessage').innerText = `Thank you, ${name}, for booking flight ${flight}. Your seat number is ${seat}.`;
        document.querySelector('.booking-form').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('resetBtn').addEventListener('click', function() {
    // Reset the form for new booking
    document.querySelector('.booking-form').classList.remove('hidden');
    document.getElementById('confirmation').classList.add('hidden');
    document.getElementById('reservationForm').reset();  // Clears the form fields
});
