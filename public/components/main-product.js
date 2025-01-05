import "./my-cart.js"
class MainProduct extends HTMLElement {
    constructor(prod) {
        super();
        if (prod) {
            this.id = prod.id;
            this.name = prod.article.title;
            this.type = prod.article.category;
            this.size = prod.article.options.sizes.map(size => size.label);
            this.color = prod.article.options.colors.map(color => color.label);
            this.origin = prod.article.details.origin;
            this.certification = prod.article.details.certification;
            this.mainpic = prod.mainImage.src;
            this.subpic = prod.thumbnails.map(thumb => thumb.src);
            this.age = [prod.article.details.manufactureDate, prod.article.details.expiryDate];
            this.price = {
                currency: prod.article.price.currency,
                amount: prod.article.price.amount,
            };
        } else {
            console.error('Product data is required to initialize MainProduct');
        }
    }
    render() {
        return `<div class="container">
            <ul class="jagsaah">
                <li id="neg"><img src="${this.subpic[0]}" alt="Thumbnail 1"></li>
                <li id="xoyr"><img src="${this.subpic[1]}" alt="Thumbnail 2"></li>
                <li id="gurav"><img src="${this.subpic[2]}" alt="Thumbnail 3"></li>
                <li id="duruv"><img src="${this.subpic[3]}" alt="Thumbnail 4"></li>
            </ul>
            <div id="mainpicture">
                <img class="big" src="${this.mainpic}" alt="Main Product Image">
            </div>
            <article>
                <h2 id="title">${this.name}</h2>
                <pre>${this.type}</pre>
                <aside class="songolt">
                    <pre>Хэмжээ</pre>
                    <form>
                        ${this.size.map((size, index) => `
                            <input type="radio" name="choice_size" id="size${index + 1}" ${index === 0 ? 'checked' : ''}>
                            <label for="size${index + 1}">${size}</label>
                        `).join('')}
                    </form>
                </aside>
                <aside>
                    <pre>Өнгө</pre>
                    <form>
                        ${this.color.map((color, index) => `
                            <input type="radio" name="choice_color" id="color${index + 1}" ${index === 0 ? 'checked' : ''}>
                            <label for="color${index + 1}">${color}</label>
                        `).join('')}
                    </form>
                </aside>
                <p id="uildverlesen">Үйлдвэрлэгдсэн огноо: ${this.age[0]}</p>
                <p id="expire">Дуусах огноо: ${this.age[1]}</p>
                <p id="origin">Бүтээгдэхүүний гарал: ${this.origin}</p>
                <p id="standart">Баталгаажуулалт: ${this.certification}</p>
                <span id="currency">${this.price.currency}</span><span id="total">${this.price.amount}</span>
                <br>
                <button id="cart-button">🛒Сагсанд нэмэх🛒</button>
            </article>
        </div>`;
    }

    renderMini(){
        this.innerHTML= `
            <section class="product">
                <h3>${this.name}</h3>
                <a href="oneProduct.html">
                    <img src="${this.mainpic}" alt="product${this.id}">
                </a>
            </section>`
    }

    renderCompact() {
        return `<section class="product">
            <aside id="egnee">
                <h3>${this.name}</h3>
                <button class=delete-btn>❌</button>
            </aside>
            <a href="oneProduct.html">
                <img src=${this.mainpic} alt="product">
            </a>
            <div>
                <button id="increment">➕</button>
                <span id="quantity" style="font-size: 18px; font-weight: bold;">3</span>
                <button id="decrement">➖</button>
            </div>
                
            <p>${this.price}<span>₮</span></p>
        </section>`;
    }


    // Энд 'add-to-cart' товчлуур дээр сонголтуудыг авах үйлдлийг хийж байна
    setupAddToCartButton() {
        document.getElementById('cart-button').addEventListener('click', () => {
            const sizeElement = document.querySelector('input[name="choice_size"]:checked');
            if (!sizeElement) {
                alert("Хэмжээг сонгоно уу.");
                return;
            }
            const size = sizeElement.nextElementSibling.textContent; // Хэмжээний текстийг авах
            
            const colorElement = document.querySelector('input[name="choice_color"]:checked');
            if (!colorElement) {
                alert("Өнгөө сонгоно уу.");
                return;
            }
            const color = colorElement.nextElementSibling.textContent; // Өнгийн текстийг авах
            
            // Бүтээгдэхүүний мэдээллийг localStorage-д хадгалах
            const productData = {
                id: this.id,
                name: this.name,
                size: size,
                color: color,
                price: this.price
            };
    
            // Хадгалах
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems.push(productData);
            localStorage.setItem('cart', JSON.stringify(cartItems));
    
            // Сагсанд нэмэх функц
            document.getElementById("my-cart").addProduct(this.id);
            alert("buteegdehuun nemlee");
            app.cart.addProduct(this.id);
            app.refreshCart();
        });
    }


    connectedCallback() {
        //implementation
        this.render();
        this.renderMini();
        this.renderCompact();
    }

}

window.customElements.define('main-product', MainProduct);