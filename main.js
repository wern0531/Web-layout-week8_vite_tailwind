import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import './layout/menu'
import './layout/faq'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './assets/main.css';


const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Scrollbar ],
    // Optional parameters
    // direction: "vertical",
    // loop: true,
    autoplay: {
      delay: 5000,
    },
     breakpoints: {
       768: {
         autoplay: {
           enabled: false,
         }
       }
     },
     
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    modules: [Scrollbar ],
    breakpoints: {
      992: {
        slidesPerView: 3,
      }
    },
    
    // scrollbar
    spaceBetween: 24,
    slidesPerView: 2,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    mousewheel: true,
    
  });