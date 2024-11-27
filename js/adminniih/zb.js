// imageModule.js файлыг импортлох
import { initImageUpload } from './ImageAdmin.js';

// Эхлүүлэх функц
document.addEventListener('DOMContentLoaded', () => {
    const largeImageContainer = document.getElementById('largeImageContainer');
    const largeImage = document.getElementById('largeImage');
    const imageUpload = document.getElementById('imageUpload');
    const smallImageContainer = document.getElementById('smallImageContainer');

    // Зураг оруулах функц эхлүүлэх
    initImageUpload(largeImageContainer, largeImage, imageUpload, smallImageContainer);
});
