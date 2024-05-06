// Add your JavaScript code here
const bookNowBtn = document.getElementById('bookNowBtn');
const bookingForm = document.getElementById('bookingForm');

bookNowBtn.addEventListener('click', () => {
  bookingForm.scrollIntoView({ behavior: 'smooth' });
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const bookingData = {
    name: formData.get('name'),
    email: formData.get('email'),
    destination: formData.get('destination'),
    date: formData.get('date')
  };

  // Here you can add the logic to send the booking data to the backend
  console.log('Booking data:', bookingData);

  // Reset the form
  bookingForm.reset();
});
