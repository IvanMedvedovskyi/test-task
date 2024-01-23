import first from '../image/first.png'
import second from '../image/second.png'
import third from '../image/third.png'

const images = [first, second, third];

let activeImage = 0;
const sliderPlace = document.querySelector('.slider-line');
const widthOffset = document.querySelector('.main__sliderblock').clientWidth;
sliderPlace.style.transform = `translateX(${-activeImage * widthOffset}px)`;


const initSlider = () => {
    const img = document.createElement('img');
    img.alt = 'image';
    img.src = images[activeImage];
    sliderPlace.append(img)

    nextImageGenerate();
    prevImageGenerate()
}

const nextImageGenerate = () => {
    let nextImage = activeImage + 1;
    if(nextImage >= images.length) nextImage = 0;

    const img = document.createElement('img');
    img.alt = 'image';
    img.src = images[nextImage];
    sliderPlace.append(img)
}

const prevImageGenerate = () => {
    let prevImage = activeImage - 1;
    if(prevImage < 0) prevImage = images.length - 1;

    const img = document.createElement('img');
    img.alt = 'image';
    img.src = images[prevImage];
    sliderPlace.prepend(img)
}

const prevSlide = () => {
    activeImage--;
    if(activeImage < 0) activeImage = images.length - 1;
    document.querySelector('.slider-line img:last-child').remove()

    prevImageGenerate()

}

const nextSlide = () => {
    activeImage++;
    if(activeImage >= images.length) activeImage = 0;
    document.querySelector('.slider-line img').remove()

    nextImageGenerate()

}



initSlider()


document.querySelector('.main__sliderblock-sliderbtn.prev').addEventListener("click", prevSlide)
document.querySelector('.main__sliderblock-sliderbtn.next').addEventListener("click", nextSlide)
