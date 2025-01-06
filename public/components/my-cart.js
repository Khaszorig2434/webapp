class MyCart extends HTMLElement {
    constructor() {
        super();
        // Хадгалагдсан бүтээгдэхүүнүүдийг авах
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        this.sagsniiToo= cartItems.reduce((sum, item) => {
            return sum + (item.number);
        }, 0);
        this.dialog = null;  // Динамикаар үүсгэх диалог
        this.backdrop = null; // Бүдэглэх давхарга   
    }
    

    render() {
        this.innerHTML = `
            <aside class="cart-icon">
                <div class="cart-count">${this.sagsniiToo}</div>
                <button class="cartButton" aria-label="Худалдааны сагс">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-shopping-cart">
                        <title>Хэрэглэгчийн сагс</title>
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                </button>
            </aside>
        `;
    }

    connectedCallback() {
        this.render();
        const button = this.querySelector(".cartButton");
        button.addEventListener("click", () => this.showDialog());
    }

    showDialog() {
        // Backdrop үүсгэх
        if (!this.backdrop) {
            this.backdrop = document.createElement("div");
            this.backdrop.classList.add("backdrop");
            document.body.appendChild(this.backdrop);
        }

        // Dialog үүсгэх
        if (!this.dialog) {
            this.dialog = document.createElement("div");
            this.dialog.classList.add("cartDialog");

            // Хадгалагдсан бүтээгдэхүүнүүдийг авах
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            //localStorage.clear();
            const productList = document.createElement('aside');
            productList.classList.add('listcart');

            // Давхцлыг арилгаж, бүтээгдэхүүний тоо хэмжээг нэгтгэх
            const mergedCartItems = [];
            cartItems.forEach(item => {
                // Өмнө нь байгаа эсэхийг шалгах
                const existingItem = mergedCartItems.find(existing =>
                    existing.name === item.name &&
                    existing.color === item.color
                );

                if (existingItem) {
                    // Хэрэв давхцаж байгаа бол тоо хэмжээг нэмэгдүүлэх
                    existingItem.number ++;
                } else {
                    // Хэрэв байхгүй бол шинэ бүтээгдэхүүн нэмэх
                    mergedCartItems.push(item);
                }
            });
            // LocalStorage-д шинэчлэгдсэн өгөгдлийг хадгалах
            localStorage.setItem('cart', JSON.stringify(mergedCartItems));

            // Нийт дүн тооцоолох
            const totalPrice = mergedCartItems.reduce((sum, item) => {
                return sum + (item.number * item.price);
            }, 0);

            console.log("Нэгтгэсэн өгөгдөл:", mergedCartItems);

            if (mergedCartItems.length > 0) {
                mergedCartItems.forEach(item => {
                    const productDiv = document.createElement('div');
                    productDiv.innerHTML = `
                        <p>Нэр: ${item.name}--${item.size}-- ${item.color}</p>
                        <p>Үнэ: ${item.number} * ${item.price}₮ = ${item.number * item.price}₮</p>
                        <hr>
                    `;
                    productList.appendChild(productDiv);
                });
            } else {
                productList.innerHTML = '<p>Сагс хоосон байна.</p>';
            }

            this.dialog.innerHTML = `
                <article>
                    <h1>🛒 ${this.sagsniiToo} Бүтээгдэхүүн</h1>
                    <aside class="listcart">
                    </aside>
                </article>
                <div class="total-price">
                    <pre>       Нийт дүн: ${totalPrice}₮</pre>
                </div>
                <div class="listbtn">
                    <a href="cart.html" class="checkout">Захиалах
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                            stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-paw-print">
                            <circle cx="11" cy="4" r="2" />
                            <circle cx="18" cy="8" r="2" />
                            <circle cx="20" cy="16" r="2" />
                            <path
                                d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                        </svg>
                    </a>
                </div>
                
            `;
            this.dialog.querySelector('article').appendChild(productList);
            document.body.appendChild(this.dialog);
        }

        // Backdrop ба диалогыг харагдуулах
        this.backdrop.style.display = "block";
        this.dialog.style.display = "block";

        // Modal-ыг гадна дарж хаах эвент нэмэх
        window.addEventListener("click", (event) => {
            if (event.target === this.backdrop) {
                this.closeDialog();
            }
        });
    }

    closeDialog() {
        // Backdrop болон диалогыг нуух
        if (this.backdrop) this.backdrop.style.display = "none";
        if (this.dialog) this.dialog.style.display = "none";
    }

    addProduct() {
        // Сагсанд бүтээгдэхүүн нэмэх
        this.sagsniiToo++;
        this.querySelector(".cart-count").innerText = this.sagsniiToo;
        if (this.dialog) {
            this.dialog.querySelector("h1").innerText = `🛒 ${this.sagsniiToo} Бүтээгдэхүүн`;
        }
    }
}

window.customElements.define('my-cart', MyCart);