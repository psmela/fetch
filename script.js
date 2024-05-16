document.getElementById('fetchButton').addEventListener('click', fetchDogImage);

function fetchDogImage() {
    const apiKey = 'live_K5XF5gIbhLz4w9AQLtpSpYfzkraNgwn0nN698TxopMkiBJ2ZgwD5AJWRrNAnbUlx'; 
    const url = `https://api.thedogapi.com/v1/images/search`;

    fetch(url, {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => displayDogImage(data))
        .catch(error => console.error('Error al obtener la imagen de perro:', error));
}

function displayDogImage(data) {
    const dogImageDiv = document.getElementById('dogImage');
    dogImageDiv.innerHTML = '';

    const img = document.createElement('img');
    img.src = data[0].url;
    img.alt = 'Imagen de perro';
    img.className = 'img-fluid';

    dogImageDiv.appendChild(img);
}

