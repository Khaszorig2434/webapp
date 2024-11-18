class Animal{
    constructor(id,ner,turul, nas, huis,dugaar){
        this.id=id;
        this.name=ner;
        this.type=turul;
        this.age=nas;
        this.sex=huis;
        this.number=dugaar;
    }
}
const adoptData = [
    {
        "image": "./images/adoption/nohoi.jpg",
        "altText": "Adopt1",
        "info": {
            "name": "Лили",
            "description": "Polish Hound үйлдвэрийн 1 настай эр нохой. 1 жил тэжээсэн эрүүл нохой.",
            "contact": "+976 89899090"
        }
    },
    {
        "image": "./images/adoption/nohoi.jpg",
        "altText": "Adopt2",
        "info": {
            "name": "Лулу",
            "description": "Polish Hound үйлдвэрийн 1 настай эр нохой. 1 жил тэжээсэн эрүүл нохой.",
            "contact": "+976 89891090"
        }
    },
    {
        "image": "./images/adoption/nohoi.jpg",
        "altText": "Adopt3",
        "info": {
            "name": "Мими",
            "description": "Polish Hound үйлдвэрийн 1 настай эр нохой. 1 жил тэжээсэн эрүүл нохой.",
            "contact": "+976 89891090"
        }
    }
];


        function updateUrl(checkbox) {
            const url = new URL(window.location);
            if (checkbox.checked) {
                url.searchParams.set(checkbox.name, checkbox.value);
            } else {
                url.searchParams.delete(checkbox.name);
            }
            window.history.replaceState(null, '', url);
        } 
        document.addEventListener('DOMContentLoaded', () => {
        class Adopt {
            constructor(data) {
                this.name = data.name;
                this.price = data.price;
                this.image = data.image;
                this.description = data.info.description;
                this.contact = data.info.contact;
                this.#render(data);
            }
            #render(data) {
                const container = document.querySelector('.result'); // Changed to result section
                container.innerHTML += `
                    <img src="${data.image}" alt="${data.altText}" class="product-image">
                    <section class="zar-info">
                        <h4>${data.info.name}</h4>
                        <p> ${data.info.description}</p>
                        <a href="tel:${data.info.contact}">${data.info.contact}</a>
                    </section>
            `;
            }
        }

        const adoptData = [
            {
                "image": "./images/adoption/nohoi.jpg",
                "altText": "Adopt1",
                "info": {
                    "name": "Лили",
                    "type": "Polish Hound",
                    "age": 1,
                    "gender": "эр",
                    "description": "1 жил тэжээсэн эрүүл нохой.",
                    "contact": "+976 89899090"
                }
            },
            {
                "image": "./images/adoption/nohoi.jpg",
                "altText": "Adopt2",
                "info": {
                    "name": "Лулу",
                    "type": "Polish Hound",
                    "age": 1,
                    "gender": "эр",
                    "description": "1 жил тэжээсэн эрүүл нохой.",
                    "contact": "+976 89891090"
                }
            },
            {
                "image": "./images/adoption/nohoi.jpg",
                "altText": "Adopt3",
                "info": {
                    "name": "Мими",
                    "type": "Polish Hound",
                    "age": 1,
                    "gender": "эр",
                    "description": "1 жил тэжээсэн эрүүл нохой.",
                    "contact": "+976 89891090"
                }
            }
        ];
                
        adoptData.map(id => {
            new Adopt(id);
        });

    });
