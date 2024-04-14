document.addEventListener('DOMContentLoaded', () => {
  const sneakerId = new URLSearchParams(window.location.search).get('sneakerId');
  fetch(`http://localhost:3000/sneakers/${sneakerId}`)
    .then(response => response.json())
    .then(sneaker => {
      document.getElementById('sneaker-name').textContent = sneaker.name;
      document.getElementById('sneaker-price').textContent = `${sneaker.price} €`;
      document.getElementById('sneaker-release-date').textContent = `Release Date: ${sneaker.release_date}`;
      document.getElementById('sneaker-colors').textContent = `Colors: ${sneaker.colors}`;
      document.getElementById('sneaker-delivery-time').textContent = `Delivery Time: ${sneaker.delivery_time} days`;
      document.getElementById('sneaker-delivery-price').textContent = `Delivery Price: ${sneaker.delivery_price} €`;
      document.getElementById('sneaker-available').textContent = `Available: ${sneaker.available ? "Yes" : "No"}`;
      document.getElementById('sneaker-sizes').textContent = ` ${sneaker.sizes.replace(/;/g, ' - ')}`;

      // Handling images
      let imagesHtml = '';
      if (sneaker.images) {
        imagesHtml = sneaker.images.map(image => image ? `<img src="${image}" alt="Image of ${sneaker.name}">` : '').join('');
      }
      document.getElementById('sneaker-images').innerHTML = imagesHtml;
    })
    .catch(error => console.error('Error fetching sneaker details:', error));
});
