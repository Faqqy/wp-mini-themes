import '../libss/bootstrap/bootstrap-reboot.min.css';
import '../libss/bootstrap/bootstrap-grid.min.css';
import './main.css';
import './__media.css';
import Masonry from 'masonry-layout';
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
    // let grid = document.querySelector('.mosaik__grid-blocks');
    // let msnry = new Masonry( grid, {
    //     columnWidth: 120,
    //     itemSelector: `.mosaik__block`,
    //     gutter: 10,
    //     horizontalOrder: true
    // });

    let grid2 = document.querySelector('.mosaik__bottom');
    let msnry2 = new Masonry( grid2, {
        columnWidth: 85,
        itemSelector: `.mosaik__botoom--item`,
        percentPosition: false,
        gutter: 25,
        horizontalOrder: true
    });


    const swiper3 = new Swiper('.swiper-container3', {
        modules: [Navigation],
        loop: true,
        observer: true,
        slidesPerView: 3,
        spaceBetween: -53,
        observeParents: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const swiper4 = new Swiper('.swiper-container4', {
        modules: [Navigation],
        loop: true,
        observer: true,
        slidesPerView: 3,
        spaceBetween: -60,
        observeParents: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const swiper5 = new Swiper('.swiper-container5', {
        modules: [Navigation],
        loop: true,
        observer: true,
        slidesPerView: 3,
        spaceBetween: 10,
        observeParents: true,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const modalTarifBtn = document.getElementById('gridsBtn');
    const modalTarif = document.getElementById('modalTrf');
    const overlayTarifPage = document.getElementById('overlayTarifs');
    const bodyOverNone = document.getElementById('htmlTop');
    const modalFormButton = document.querySelectorAll('.button__form');
    const modalModalTarifs = document.getElementById('modal__form');

    Array.prototype.forEach.call(modalFormButton, function(e: any) {
        e.addEventListener('click', (event: any) => {
            event.preventDefault();
            modalModalTarifs.classList.toggle('show');
            bodyOverNone.classList.toggle('hid');
            overlayTarifPage.classList.toggle('show');
        })
    });

    function openModalTarifs() {
        modalTarif.classList.toggle('show');
        bodyOverNone.classList.toggle('hid');
        overlayTarifPage.classList.toggle('show');
        modalTarif.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    modalTarifBtn.addEventListener('click', () => {
        openModalTarifs();
    });

    overlayTarifPage.addEventListener('click', () => {
        closeModal();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    function closeModal() {
        modalModalTarifs.classList.remove('show');
        bodyOverNone.classList.toggle('hid');
        overlayTarifPage.classList.toggle('show');
        modalTarif.classList.remove('show');
    }
});

