const itemId = localStorage.getItem("comercialId");

const getOneItem = () => {
  fetch(
    `https://6345624bdcae733e8ff0e499.mockapi.io/LegoFun/${itemId}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const titleWrapper = document.getElementById("itemTitle");
      titleWrapper.innerHTML = data.title;

      const infoWrapper = document.getElementById("itemInfo");
      infoWrapper.innerHTML = `About set: ${data.info}`;

      const cityWrapper = document.getElementById("itemCity");
      cityWrapper.innerHTML = `City: ${data.city}`;

      const priceWrapper = document.getElementById("itemPrice");
      priceWrapper.innerHTML = `${data.price}€`;

      const photoWrapper = document.getElementById("itemPhoto");
      photoWrapper.src = data.photo;
    });
};

const removeButtonSection = document.createElement('div');
    removeButtonSection.classList.add('removeButtonSection');

const removeItemButton = document.createElement('button');
    removeItemButton.classList.add('remove-item');
    removeItemButton.innerHTML = 'Remove Item';
    removeItemButton.addEventListener('click', () => {
    deleteItem(itemId);
    });
    document.body.appendChild(removeItemButton);
    
getOneItem();

const badFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve("works");
      }, 2000);
    });
  };

const deleteItem = async () => {
    allItems = await fetch(
      `https://6345624bdcae733e8ff0e499.mockapi.io/LegoFun/${itemId}`, 
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      } 
    )
      .then((res) => {
    setTimeout(() => {
    console.log('Trip was deleted successfully');
    
    const deletedTitle = document.getElementById ("itemTitle");
        deletedTitle.innerHTML = '';
    const deletedInfo = document.getElementById ("itemInfo");
        deletedInfo.innerHTML = '';
    const deletedCity = document.getElementById ("itemCity");
        deletedCity.innerHTML = '';
    const deletedPrice= document.getElementById ("itemPrice");
        deletedPrice.innerHTML = '';
        deletedPrice.style.display = 'none';
    const deletedPhoto = document.getElementById ("itemPhoto");
        deletedPhoto.innerHTML = '';
        deletedPhoto.style.display = 'none';
    const warning = document.getElementById("warning");
        warning.style.color = "red";
        warning.innerHTML = "Lego item deleted Successfully!";
    }, 3000);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };