export default class Product {
    constructor(prod) {     
        this.id = prod.id;
        this.name = prod.ner;
        this.type = prod.turul;
        this.size = [prod.one, prod.two, prod.three];
        this.color = [prod.oneColor, prod.twoColor, prod.threeColor];
        this.origin = [prod.exp, prod.imp];
        this.age = [prod.ehleh, prod.duusah];
        this.gpa=[prop.gpa];
        this.price = prod.price;
    }
    render() { 
        return `<div class="container">
        <ul class="jagsaah">
            <li><img src="images/oneprob/neg.png" alt="Зураг 1"></li>
            <li><img src="images/oneprob/hoyr.png" alt="Зураг 2"></li>
            <li><img src="images/oneprob/gurv.png" alt="Зураг 3"></li>
            <li><img src="images/oneprob/duruv.png" alt="Зураг 4"></li>
        </ul>
        <img class="big" src="images/oneprob/neg.png" alt="Бүтээгдэхүүний нүүр">
        <article>
            <h2>${this.name}</h2>
            <pre>${this.type}   (${this.id})</pre>
            <aside class="songolt">
                <pre>Хэмжээ</pre>
                <form>
                    ${this.size.map((s, i) => `
                        <input type="radio" id="size${i}" name="choice_size">
                        <label for="size${i}">${s}</label>
                    `).join('')}
                </form>
            </aside>
            <aside>
                <pre>Өнгө</pre>
                <form>
                    ${this.color.map((c, i) => `
                        <input type="radio" id="color${i}" name="choice_color">
                        <label for="color${i}">${c}</label>
                    `).join('')}
                </form>
            </aside>
            <aside>
                <pre>Бүтээгдэхүүний гарал</pre>
                <form>
                    ${this.origin.map((o, i) => `
                        <input type="radio" id="origin${i}" name="choice_origin">
                        <label for="origin${i}">${o}</label>
                    `).join('')}
                </form>
            </aside>
            <p>Үйлдвэрлэгдсэн огноо: ${this.age[0]}</p>
            <p>Дуусах огноо:${this.age[1]}</p>
            <p>Баталгаажуулалт:${this.gpa}</p>

            <span>₮</span><span>${this.price}</span>
            <form>
                <input type="submit" value="Сагсанд нэмэх">
            </form>
        </article>
    </div>`;
    }

    renderCompact(){
        return `<section class="product">
            <aside id="egnee">
                <h3>${this.name}</h3>
                <button>❌</button>
            </aside>
            <a href="oneProduct.html">
                <img src="images/negfood.png" alt="product">
            </a>
            <button>➕</button> 3 <button>➖</button>
            <p>${this.price}<span>₮</span></p>
        </section>`;
    }

}

const orderHistory = new Set();
