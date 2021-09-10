function slider(){

    const getAllSlides = () => document.querySelectorAll('.team__of__three'); 
    //for getting all sliders before and after cloning

    let slides = getAllSlides();

    const slider = document.querySelector('.team'),
          prev = document.querySelector('.slider__left-arrow'),
          next = document.querySelector('.slider__right-arrow'),
          slidesWrapper = document.querySelector('.team__wrapper'),
          slidesField = document.querySelector('.team__inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = deleteNotDigits(width);

    const firstClone = slides[0].cloneNode(true),
          lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    slidesField.append(firstClone);
    slidesField.prepend(lastClone);

    slides = getAllSlides();

    slides.forEach(slide => {

        slide.style.width = width;
    });

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';

    slidesWrapper.style.overflow = 'hidden';

    slider.style.position = 'relative';

    //indicator dots for slider
    const indicators = document.createElement('div'),
        dots = [];
    indicators.classList.add('slider__dots');

    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 10rem;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    `;

    slider.append(indicators);

    for (let i = 1; i < slides.length-1; i++) {

        const dot = document.createElement('span');
        dot.setAttribute('data-slide-to', i);
        dot.classList.add('slider-item');
        if (i == 1) {
            dot.style.backgroundColor = "#000";
        }
        indicators.append(dot);
        dots.push(dot);
    }


    function deleteNotDigits(str) {
        return +str.replace(/px/, '');
    }

    const moveToFirstSlide = () => {
        slidesField.style.transform = `translateX(-${offset}px)`;
    };
    
    moveToFirstSlide();

    const moveToNextSlide = () => {  
        offset += deleteNotDigits(width);
        slideIndex++;

        slidesField.style.transition = '0.5s all';
        slidesField.style.transform = `translateX(-${offset}px)`;

        dots.forEach(dot => dot.style.backgroundColor = '');
        dots[slideIndex - 1].style.backgroundColor = '#000';
    };

    const moveToPrevSlide = () => {
        offset -= deleteNotDigits(width);
        slideIndex--;

        slidesField.style.transition = '0.5s all';
        slidesField.style.transform = `translateX(-${offset}px)`;

        dots.forEach(dot => dot.style.backgroundColor = '');
        dots[slideIndex - 1].style.backgroundColor = '#000';
    };

    next.addEventListener('click', moveToNextSlide);
    prev.addEventListener('click', moveToPrevSlide);

    slidesField.addEventListener('transitionend', () => {
        if(slides[slideIndex].id === firstClone.id) {
            slideIndex = 1;
            offset = deleteNotDigits(width) * slideIndex;

            dots.forEach(dot => dot.style.backgroundColor = '');
            dots[slideIndex - 1].style.backgroundColor = '#000';

            slidesField.style.transition = 'none';
            slidesField.style.transform = `translateX(-${offset}px)`;
        }

        if(slides[slideIndex].id === lastClone.id) {
            slideIndex = slides.length - 2;
            offset = deleteNotDigits(width) * slideIndex;

            dots.forEach(dot => dot.style.backgroundColor = '');
            dots[slideIndex - 1].style.backgroundColor = '#000';

            slidesField.style.transition = 'none';
            slidesField.style.transform = `translateX(-${offset}px)`;

        }

    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideIndex);

            slidesField.style.transition = '0.5s all';
            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.style.backgroundColor = '');
            dots[slideIndex - 1].style.backgroundColor = '#000';
        });
    });
}

export default slider;