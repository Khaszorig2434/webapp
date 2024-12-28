import "./my-cart.js";
import "./my-login.js";
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
        <aside>
            <my-login></my-login>
            <my-cart id="my-cart"></my-cart>
        </aside>
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