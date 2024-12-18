class MyCart extends HTMLElement {
    constructor() {
        super();
        this.cartItems = [];
        this.sagsniiToo = 0; // Сагсны тоо
        this.dialog = null;  // Динамикаар үүсгэх диалог
        this.backdrop = null; // Бүдэглэх давхарга
    }

    render() {
        this.innerHTML = `
            <aside class="cart-container">
                <button class="cartButton" aria-label="Худалдааны сагс">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-shopping-cart">
                        <title>Хэрэглэгчийн сагс</title>
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <div>${this.sagsniiToo}</div>
                </button>
            </aside>
        `;
    }

    connectedCallback() {
        this.render();
        // Сагсны товч дээр дарахад диалог үүсгэх
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
            this.dialog.innerHTML = `
                <article>
                    <h1>🛒 ${this.sagsniiToo} Бүтээгдэхүүн</h1>
                    <aside>
                        <pre></pre>
                    </aside>
                    <aside class="listbtn">
                        <button class="closee">Хаах</button>
                        <a href="cart.html" class="checkout">Захиалах</a>
                    </aside>
                </article>
            `;
            document.body.appendChild(this.dialog);

            // Хаах товч дээр эвентийн сонсогч нэмэх
            const closeButton = this.dialog.querySelector(".closee");
            closeButton.addEventListener("click", () => this.closeDialog());
        }

        // Backdrop ба диалогыг харагдуулах
        this.backdrop.style.display = "block";
        this.dialog.style.display = "block";
    }

    closeDialog() {
        // Backdrop болон диалогыг нуух
        if (this.backdrop) this.backdrop.style.display = "none";
        if (this.dialog) this.dialog.style.display = "none";
    }

    addProduct() {
        //localstorage
        this.cartItems.push(productData);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        this.sagsniiToo++;
        this.querySelector("div").innerText = this.sagsniiToo;
        if (this.dialog) {
            this.dialog.querySelector("h1").innerText = `🛒 ${this.sagsniiToo} Бүтээгдэхүүн`;
        }
    }
}

window.customElements.define("my-cart", MyCart);
