/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");




window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map