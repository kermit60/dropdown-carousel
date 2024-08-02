import Image from './assets/photo1.jpg';
import Image1 from './assets/photo2.jpg';
import Image2 from './assets/photo3.jpg';
import Image3 from './assets/photo4.jpg';

const carousel = (() => {
    const image = document.querySelector('.image');
    const left = document.querySelector('.left-direction');
    const right = document.querySelector('.right-direction');
    const circleList = document.querySelectorAll('.circle');
    let photoIndex = 0;
    const photoArray = [Image, Image1, Image2, Image3];
    image.src = photoArray[photoIndex];
    circleList[photoIndex].classList.add('selected');

    right.addEventListener('click', () => {
        photoIndex = (photoIndex + 1) < photoArray.length ? photoIndex + 1 : 0;
        image.src = photoArray[photoIndex];
        selectOff();
        circleList[photoIndex].classList.add('selected');
        console.log(photoIndex);
    })

    left.addEventListener('click', () => {
        photoIndex = (photoIndex - 1) >= 0 ? photoIndex - 1 : photoArray.length - 1;
        image.src = photoArray[photoIndex];
        selectOff();
        circleList[photoIndex].classList.add('selected');
        console.log(photoIndex);
    }); 

    for (const circle of circleList) {
        circle.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            photoIndex = parseInt(id);
            image.src = photoArray[id];
            selectOff();
            circle.classList.add('selected');
            console.log(photoIndex);
        })
    }

    const selectOff = () => {
        for (const circle of circleList) {
            circle.classList.remove('selected');
        }
    }


})();

export default carousel;