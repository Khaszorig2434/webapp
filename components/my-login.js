class MyLogin extends HTMLElement {
    constructor() {
        super();
        this.dialog = null;  // Динамикаар үүсгэх диалог
        this.backdrop = null; // Бүдэглэх давхарга 
        //implementation

    }
    render(){
        this.innerHTML =`<button class="loginButton" aria-label="хэрэглэгч хэсэг">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-user">
                <title>Хэрэглэгчийн дүрс</title>
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        </button>`
    }

    connectedCallback() {
        //implementation
        this.render();
        const button = this.querySelector(".loginButton");
        button.addEventListener("click", ()=>this.showLogin());
    }

    showLogin() {
        // Backdrop үүсгэх
        if (!this.backdrop) {
            this.backdrop = document.createElement("div");
            this.backdrop.classList.add("backdrop");
            document.body.appendChild(this.backdrop);
        }

        // Dialog үүсгэх
        if (!this.dialog) {
            this.dialog = document.createElement("div");
            this.dialog.classList.add("loginDialog");
            this.dialog.innerHTML = `
                <aside>
                    <div class="login-header">Тавтай морил
                        <img src="assets/images/logo.png" alt="logo"
                            style="width: 3rem; height: 3.2rem; margin-left: 15rem">
                    </div>
                    <p>Шинэ, шилдэг бүхнийг хамгийн түрүүнд...</p>
                    <form class="modal-body">
                        <input type="text" id="phone-number" placeholder="Утасны дугаар оруулна уу">
                        <input type="password" id="password" placeholder="Нууц үгээ оруулна уу">
                        <a href="#">Нууц үгээ мартсан уу?</a>
                        <br>
                        <button><a href="user.html" class="checkout">Нэвтрэх</a></button>
                        <div class="login-footer">
                            <p> Шинэ хэрэглэгч <p>
                            <a href="#">Бүртгүүлэх</a>
                        </div>
                    </form>
                </aside>
            `;
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
    
}

window.customElements.define('my-login', MyLogin);