document.addEventListener('DOMContentLoaded', () => {
    getImages = document.querySelectorAll('.gallery-item');
    console.log(getImages);

    for(let i = 0; i < getImages.length; i++){
        if(i % 2 == 0){
            getImages[i].classList.add('left-rotate');
        }
        else {
            getImages[i].classList.add('right-rotate');
        }
    }
});