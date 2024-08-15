const images = [
    'images/image1.JPG',
    'images/image2.png',
    'images/image3.png',
    'images/image4.png',
    'images/image5.png',
    'images/image6.JPG',
    'images/image7.png',
    'images/image8.JPG',
    'images/image9.png',
    'images/image10.png',
    'images/image11.png',
    'images/image12.png',
    'images/image13.png',
    'images/image14.png',
    'images/image15.png',
    'images/image16.png',
    'images/image17.png',
    'images/image18.png',
    'images/image19.png',
    'images/image20.png',
    'images/image21.png',
    'images/image22.png',
    'images/image23.png',
    'images/image24.png',
];

let currentIndex = 0;

function updateImage() {
    const imageElement = document.getElementById('gallery-image');
    imageElement.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}
