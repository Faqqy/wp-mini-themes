import '../libss/bootstrap/bootstrap-reboot.min.css';
import '../libss/bootstrap/bootstrap-grid.min.css';
import './main.css';
import './__media.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper('.swiper-container', {
        modules: [Navigation],
        loop: true,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const swiper2 = new Swiper('.swiper-container2', {
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


    const rightLeftMenu = document.getElementById('openmenu');
    const openCloseMenu = document.getElementById('openMenuMob');
    const overlayOpenClose = document.getElementById('overlaypage');
    const bodyOverNone = document.getElementById('htmlTop');


    function openModalAndMenus() {
        openCloseMenu.classList.toggle('open');
        overlayOpenClose.classList.toggle('over');
        bodyOverNone.classList.toggle('hid');
    }

    rightLeftMenu.addEventListener('click', () => {
        openModalAndMenus();
    });



    document.addEventListener('mousemove', e => {
        Object.assign(document.documentElement, {
            style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
            `
        })
    });

    const textElement = document.getElementById('myText');
    const textElement2 = document.getElementById('myText2');
    const blockScroll = document.getElementById('handle');
    const blockScroll2 = document.getElementById('handle2');
    const blockScroll3 = document.getElementById('drumsss');
    const leftImage = document.getElementById('leftImage');
    const rightImage = document.getElementById('rightImage');

    function handleScroll() {
        const targetBlockPosition = blockScroll.offsetTop;
        const targetBlockPosition2 = blockScroll2.offsetTop;
        const targetBlockPosition3 = blockScroll3.offsetTop;
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition >= targetBlockPosition) {
            textElement.style.opacity = String(1);
        } else {
            textElement.style.opacity = String(0);
        }

        if (scrollPosition >= targetBlockPosition2) {
            textElement2.style.opacity = String(1);
            leftImage.style.left = String('60px');
            rightImage.style.right = String('175px');
        } else {
            leftImage.style.left = String();
            rightImage.style.right = String();
            textElement2.style.opacity = String(0);
        }

    }
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const lamp = entry.target.querySelector('.idea__block--img');
            const marquee = entry.target.querySelector('.marquee__block-text');
            const marquee2 = entry.target.querySelector('.marquee__block-text2');
            const tablets = entry.target.querySelector('.tablets__square');
            if (entry.isIntersecting) {
                lamp.classList.add('lamp-animation');
                marquee.classList.add('marqueeAnim');
                marquee2.classList.add('marqueeAnim');
                tablets.classList.add('tabletsAnim');
                return;
            }
            lamp.classList.remove('lamp-animation');
            marquee.classList.remove('marqueeAnim');
            marquee2.classList.remove('marqueeAnim');
            tablets.classList.remove('tabletsAnim');
        });
    });
    observer.observe(document.querySelector('.wrapper__container--idea'));

    const playButton = document.getElementById('playButton');
    const videoPlayer = document.getElementById('videoPlayer') as HTMLIFrameElement;

    playButton.addEventListener('click', () => {
        videoPlayer.src += '?autoplay=1';
        playButton.style.position = 'static';
    });

}); 







