$(document).ready(function () {
    //Carousel navigation
    const imgList = document.getElementById('imgList');
    const scrollRight = document.getElementById('scroll-right');
    const scrollLeft = document.getElementById('scroll-left');

    scrollRight.addEventListener('click', () => {
        imgList.scrollBy(250, 0);
    });

    scrollLeft.addEventListener('click', () => {
        imgList.scrollBy(-250, 0);
    });

});