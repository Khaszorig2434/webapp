export function initImageUpload(largeImageContainer, largeImage, imageUpload, smallImageContainer) {
    const MAX_SMALL_IMAGES = 4; // Жижиг зургийн хамгийн их тоо
    let smallImageCount = 0; // Жижиг зургийн одоогийн тоо

    // Том зургийг оруулах үед
    imageUpload.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Том зураг солих
                largeImage.src = e.target.result;
                largeImage.style.display = "block";
                largeImageContainer.querySelector("p").style.display = "none";

                // Жижиг зураг нэмэх (хэрэв дүүрээгүй бол)
                if (smallImageCount < MAX_SMALL_IMAGES) {
                    addSmallImage(smallImageContainer, e.target.result);
                    smallImageCount++;
                }
            };
            reader.readAsDataURL(file);
        }
    });

    // Том зураг оруулах хэсгийг дарж input сонгох
    largeImageContainer.addEventListener("click", function () {
        imageUpload.click();
    });

    // Жижиг зураг нэмэх функц
    function addSmallImage(container, src) {
        const smallImageWrapper = document.createElement("div");
        smallImageWrapper.classList.add("small-image-container");

        const smallImage = document.createElement("img");
        smallImage.src = src;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "×";
        removeBtn.classList.add("remove-btn");

        // Устгах товчийн үйлдэл
        removeBtn.addEventListener("click", function () {
            smallImageWrapper.remove(); // Жижиг зураг DOM-оос устгах
            smallImageCount--; // Жижиг зургийн тоог бууруулах
        });

        smallImageWrapper.appendChild(smallImage);
        smallImageWrapper.appendChild(removeBtn);
        container.appendChild(smallImageWrapper);
    }
}
