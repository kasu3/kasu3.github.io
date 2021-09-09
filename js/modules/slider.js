function slider(){

    let slides = document.querySelectorAll('.team__of__three');

    const slider = document.querySelector('.team'),
          prev = document.querySelector('.slider__left-arrow'),
          next = document.querySelector('.slider__right-arrow'),
          slidesWrapper = document.querySelector('.team__wrapper'),
          slidesField = document.querySelector('.team__inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    const firstClone = slides[0].cloneNode(true),
          lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

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

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('slider-item');
        if (i == 0) {
            dot.style.backgroundColor = "#000";
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/px/, '');
    }

    next.addEventListener('click', ()=> {
        if(offset == deleteNotDigits(width) * (slides.length - 1)){
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        dots.forEach(dot => dot.style.backgroundColor = '');
        dots[slideIndex - 1].style.backgroundColor = '#000';
    });

    prev.addEventListener('click', ()=> {
        if(offset == 0){
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        
        if(slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        dots.forEach(dot => dot.style.backgroundColor = '');
        dots[slideIndex - 1].style.backgroundColor = '#000';
    
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.style.backgroundColor = '');
            dots[slideIndex - 1].style.backgroundColor = '#000';

        });
    });
}

export default slider;