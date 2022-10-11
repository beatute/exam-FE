const addButton = document.getElementById('add-item');

addButton.addEventListener('click', () => {
  const addTitle = document.getElementById('title-input').value;
  const addInfo = document.getElementById('info-input').value;
  const addCity = document.getElementById('city-input').value;
  const addPrice = document.getElementById('price-input').value;
  const addPhoto = document.getElementById('photo-input').value;

  const data = {
    
    title: addTitle,
    info: addInfo,
    city: addCity,
    price: addPrice,
    photo: addPhoto,
    };

fetch('https://6345624bdcae733e8ff0e499.mockapi.io/LegoFun', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
     const warning = document.getElementById("warning");
     warning.style.color = "red";
     warning.innerHTML = "Lego item added Successfully!";
    });
});