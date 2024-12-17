import "./my-cart.js";
class MyHeader extends HTMLElement {

    constructor() {
      super();
      this.#render();
    }
    #render(){
        this.innerHTML = `
        <header>
        <!-- Header section // Толгой хэсэг лого, хайлт , хэрэглэгч , сагс -->
        <img id="logo" src="assets/images/clean_white_logo.png" alt="Компаний лого" width="80" onclick="window.location.href='index.html'">
        <input type="search" name="search" id="haih" placeholder="Бүтээгдэхүүн хайх ">
        <nav>
            <button aria-label="хэрэглэгч хэсэг" onclick="window.location.href='user.html'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-user">
                    <title>Хэрэглэгчийн дүрс</title>
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </button>
            <my-cart id="my-cart"></my-cart>
        </nav>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Нүүр</a></li>
            <li><a href="products.html">Бүтээгдэхүүн</a></li>
            <li><a href="turshilt.html">Үрчилгээ</a></li>
            <li><a href="information.html">Мэдээлэл</a></li>
        </ul>
    </nav>
        `
    }
  }
  
  customElements.define("my-header", MyHeader);