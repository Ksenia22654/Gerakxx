document.addEventListener('DOMContentLoaded', (event) => {

    let params = new URLSearchParams(window.location.search);
    let urlId = params.get('id')

    fetch('/product-data.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let products = data.getElementsByTagName('product');

        const loadDataXml = () => {
            for(let i = 0; i < products.length; i++){
                let product = products[i];
                let id = product.getElementsByTagName('id')[0].textContent;
                
                if(id == urlId) {
                    let carTitle = product.getElementsByTagName('product-title')[0].textContent;
                    document.querySelector('.car-title').textContent = carTitle;
                    
                    let carSubtitle = product.getElementsByTagName('product-subtitle')[0].textContent;
                    document.querySelector('.car-subtitle').textContent = carSubtitle;

                    let mainImageContainer = document.querySelector('.main-image');
                    let carImage = product.getElementsByTagName('product-image')[0].textContent;
                    let mainImage = document.createElement('img');
                    mainImage.className = 'car-image';
                    mainImage.src = carImage;
                    mainImageContainer.appendChild(mainImage);

                     // Загрузка информации о товаре
                    let productInfoContainers = product.getElementsByTagName('product-info');

                    for (let j = 0; j < productInfoContainers.length; j++) {
                        let productInfoContainer = productInfoContainers[j];

                        let productInfoTitle = productInfoContainer.getElementsByTagName('product-info-title')[0].textContent;
                        let productInfoSubtitle = productInfoContainer.getElementsByTagName('product-info-subtitle')[0].textContent;
                        let productInfoText = productInfoContainer.getElementsByTagName('product-info-text')[0].textContent;

                        let carInfoTitles = document.querySelectorAll('.car-info-title');
                        let carInfoSubtitles = document.querySelectorAll('.car-info-subtitle');
                        let carInfoTexts = document.querySelectorAll('.car-info-text');

                        // Находим соответствующие элементы для заполнения информации
                        let carInfoTitle = carInfoTitles[j];
                        let carInfoSubtitle = carInfoSubtitles[j];
                        let carInfoText = carInfoTexts[j];

                        carInfoTitle.textContent = productInfoTitle;
                        carInfoSubtitle.textContent = productInfoSubtitle;
                        carInfoText.textContent = productInfoText;

                        if(id == 2)
                        {
                            // Устновка ширины текста
                            let carInfoRow = document.querySelectorAll('.car-info-row-main');
                            let carTitleSpecial = document.querySelector('.car-title');
                            let carInfoTitleSpecial = document.querySelectorAll('.car-info-title');
                            let carInfoSubtitleSpecial = document.querySelectorAll('.car-info-subtitle');


                            carTitleSpecial.style.color = '#FFF';
                            carTitleSpecial.style.fontWeight = '700';
                            carTitleSpecial.style.position = 'relative';

                            for (let i = 0; i < carInfoRow.length; i++) {
                                carInfoRow[i].style.minWidth = '100%';

                                carInfoTitleSpecial[i].style.color = '#BCBCBC';
                                carInfoTitleSpecial[i].style.fontWeight = '700';

                                carInfoSubtitleSpecial[i].style.color = '#FFF';
                                carInfoSubtitleSpecial[i].style.fontWeight = '700';

                            }

                            // Измненение положения и цвета background
                            let carImage = document.querySelector('.car-image');
                            carImage.style.maxWidth = '100%';
                            carImage.style.display = 'none';

                            let productTop = document.querySelector('.product-top');
                            productTop.style.backgroundImage = 'linear-gradient(90deg, rgba(0,0,0,0.9023984593837535) 22%, rgba(0,0,0,0) 100%), url(./images/id2-bg.png)';
                            productTop.style.backgroundRepeat = 'no-repeat';
                            productTop.style.backgroundSize = 'cover';
                        }
                    }


                    let productCards = product.getElementsByTagName('product-card');

                    for(let j = 0; j < productCards.length; j++){
                        let productCard = productCards[j];
                        let title = productCard.getElementsByTagName('product-card-title')[0].textContent;
                        let image = productCard.getElementsByTagName('product-card-image')[0].textContent;
                        let cost = productCard.getElementsByTagName('product-card-cost')[0].textContent;
                        let year = productCard.getElementsByTagName('product-year-text')[0].textContent;
                        let kilometers = productCard.getElementsByTagName('product-kilometers-text')[0].textContent;
                        let engine = productCard.getElementsByTagName('product-engine-text')[0].textContent;
                        let fuel = productCard.getElementsByTagName('product-fuel-text')[0].textContent;

                        let productHTML = `
                            <div class="product-card">
                                <div class="product-card-left">
                                    <h2 class="product-card-title">${title}</h2>
                                    <img src="${image}" alt="product-image" class="products-card-image">
                                </div>
                                <div class="product-card-right">
                                    <h3 class="product-card-cost">${cost}</h3>
                                    <div class="product-card-year">
                                        <h3 class="product-card-year-title product-titles title">Год выпуска</h3>
                                        <h2 class="product-card-year-text product-titles">${year}</h2>
                                    </div>
                                    <div class="product-card-kilometers">
                                        <h3 class="product-card-kilometers-title product-titles title">Показание однометра, км</h3>
                                        <h2 class="product-card-kilometers-text product-titles">${kilometers}</h2>
                                    </div>
                                    <div class="product-card-engine">
                                        <h3 class="product-card-engine-title product-titles title">Двигатель</h3>
                                        <h2 class="product-card-engine-text product-titles">${engine}</h2>
                                    </div>
                                    <div class="product-card-fuel">
                                        <h3 class="product-card-fuel-title product-titles title">Тип топлитва</h3>
                                        <h2 class="product-card-fuel-text product-titles">${fuel}</h2>
                                    </div>
                                    <a href="/test-drive.html" class="book-btn">
                                        Забронировать
                                    </a>
                                </div>
                            </div>
                        `;

                        document.querySelector('.product-bottom').innerHTML += productHTML;
                    }
                }
            }
        }     
        loadDataXml();
    });
});
