import { productList } from '../dist/services/apiService.js'

console.log(productList.map(element => element.id))

const products_container = document.getElementById("products-container")

const productsHTML = productList.map((el) => {
    return  `<div class="product__wrapper">
                    
                    <img class="product__image" src="${el.thumbnail}" alt="">
                    
                    <div class="product__info">
                        <h4>${el.title}</h4>
                        <h5>${el.price}</h5>
                        <p>sku:${el.sku}</p>
                    </div>
                </div>`
    // new Product(el.id, el.title, el.description ,el.category, el.price, el.discountPercentage, el.rating , el.stock, el.sku, el.availabilityStatus, el.reviews, el.images, el.thumbnail)
})
            
products_container.innerHTML  = productsHTML