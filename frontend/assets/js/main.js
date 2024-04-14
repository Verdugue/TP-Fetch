document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('load-sneakers-btn');
  const sneakersContainer = document.getElementById('sneakers-container');

  btn.addEventListener('click', function() {
    fetch('http://localhost:3000/sneakers')
      .then(response => response.json())
      .then(sneakers => {
        sneakersContainer.innerHTML = '';
        sneakers.forEach(sneaker => {
          const sneakerElement = document.createElement('div');
          sneakerElement.className = 'sneaker';
          sneakerElement.setAttribute('data-id', sneaker.id);
          sneakerElement.innerHTML = `
            <h2>${sneaker.name}</h2>
            <p>${sneaker.price} €</p>
            ${sneaker.images.map(image => `<img src="${image}" alt="Image of ${sneaker.name}">`).join('')}
          `;
          sneakersContainer.appendChild(sneakerElement);

          
          sneakerElement.addEventListener('click', () => {
            window.location.href = `sneaker-details.html?sneakerId=${sneaker.id}`;
          });
        });
      })
      .catch(error => console.error('Error:', error));
  });
});
