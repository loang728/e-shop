$(document).ready(function () {

    //Menu responsive 
    $(".menu-open").click(function () {

        $("ul.menu").toggleClass("show");
        $(".menu-open").toggleClass("cross");
    });



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

    //Filters open
    $(".filters").click(function () {

        $("form#price-form").toggleClass("show");

    });

    $(".filter-title").click(function () {
        // Add the 'hide' class to the parent element
        var parent = $(this).parent(".filter-section");
        parent.find(".section-limits").toggleClass("hide");
        $(this).find(".filter-open").toggleClass("plus");
    });






























});