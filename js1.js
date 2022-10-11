fetch("https://6345624bdcae733e8ff0e499.mockapi.io/LegoFun")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
    data.sort((a,z) => {
      return a.price - z.price
    })

const adsWrapper = document.getElementById("commercialAds");
   
  data.forEach((comercialAd) => {
    
    const adWrapper = document.createElement("div");
      adWrapper.classList.add("comercialAdSection");

    const adTitle = document.createElement("div");
      adTitle.classList.add("adTitle");
          
    const adPrice = document.createElement("div");
      adPrice.classList.add("adPrice");
      adPrice.innerHTML = `${comercialAd.price}€`;

    const adPhoto = document.createElement("div");
      adPhoto.classList.add("adPhoto");
      adPhoto.style.backgroundImage = `url(${comercialAd.photo})`;
            
      adTitle.innerHTML = comercialAd.title;
          
    const seeButtonSection = document.createElement('div');
      seeButtonSection.classList.add('seeButtonSection');

    const seeButton = document.createElement('a');
      seeButton.classList.add('seeButton');
      seeButton.innerHTML = 'See more...';
      seeButtonSection.append(seeButton);

      seeButton.addEventListener('click', () =>{
        localStorage.setItem('comercialId', comercialAd.id);
        window.location.replace("./item.html");
      });

      adWrapper.append(adPrice, adPhoto, adTitle, seeButtonSection);
      adsWrapper.append(adWrapper);
  });
});
  
  

