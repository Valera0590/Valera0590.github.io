"use strict"
$(document).ready(function() {
    $('.overlay, .cssload-dots').fadeOut();
    $(".section").each((i,el) => {
        if($(el).offset().top - $("nav").outerHeight() - 60 <= $(window).scrollTop()){
            $(".menu li a").each((i,el) => {
                if($(el).hasClass("active_menu")){
                    $(el).removeClass("active_menu");
                }
            });
            $('.menu li:eq('+i+')').find('a').addClass("active_menu");

            $(".dropdown li a").each((i,el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $('.dropdown li:eq('+i+')').find('a').addClass("active");
        }
    });
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i,el) => {
            if($(el).offset().top - $("nav").outerHeight() - 60 <= scrollDistance){
                $(".menu li a").each((i,el) => {
                    if($(el).hasClass("active_menu")){
                        $(el).removeClass("active_menu");
                    }
                });
                $('.menu li:eq('+i+')').find('a').addClass("active_menu");

                $(".dropdown li a").each((i,el) => {
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                });
                $('.dropdown li:eq('+i+')').find('a').addClass("active");
            }
        });
    });

    
    $('a[href^="#"]').click(function(){
        let valHref = $(this).attr("href");
        $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
    });

    let priceSite = {};
    let devTimeSite = {};
    let calc = {};
    let arr = ["type site","design","adaptability"];
    calc["type site"] = [["Сайт-визитка","Корпоративный сайт","Интернет-магазин","Инфо сайт","Игровой портал","Персональный проект",
    "Контент-проект","Промо-сайт","Сайт-форум","Блог"], [2,3,4,5,6,7,8,9,10,11], [1,2,3,4,5,6,7,8,9,10]];
    calc["design"] = [["Жесткий", "Гибкий", "Комбинированный", "Текстовый", "Полиграфический", "Интерфейсный", "Динамический"],
    [2,3,4,5,6,7,8],[1,2,3,4,5,6,7]];
    calc["adaptability"] = [["Преимущественно ПК устройства","Преимущественно мобильные устройства","Все типы устройств"],[2,3,4],[1,2,3]];
    
    for(var i = 0; i < 3; i++) {
        var select = document.getElementById("list_type" + (i+1)); 
        select.innerHTML = "";
        for(var j = 0; j < calc[arr[i]][0].length; j++) {
            var opt = calc[arr[i]][0][j];
            if(j == 0)  select.innerHTML += "<option selected value=\"" + j + "\">" + opt + "</option>";
            else    select.innerHTML += "<option value=\"" + j + "\">" + opt + "</option>";
        }
    }
    priceSite = calc[arr[0]][1][$("#list_type1").val()] + calc[arr[1]][1][$("#list_type2").val()] + calc[arr[2]][1][$("#list_type3").val()];
    devTimeSite = calc[arr[0]][2][$("#list_type1").val()] + calc[arr[1]][2][$("#list_type2").val()] + calc[arr[2]][2][$("#list_type3").val()];
    document.getElementById("timeDev").innerHTML = devTimeSite + " дн.";
        document.getElementById("priceDev").innerHTML = priceSite + " т.р.";
    
    // обработчик изменения выпадающих списков
    $('#list_type1').on('change', function(){
        priceSite = calc[arr[0]][1][$("#list_type1").val()] + calc[arr[1]][1][$("#list_type2").val()] + calc[arr[2]][1][$("#list_type3").val()];
        devTimeSite = calc[arr[0]][2][$("#list_type1").val()] + calc[arr[1]][2][$("#list_type2").val()] + calc[arr[2]][2][$("#list_type3").val()];
        document.getElementById("timeDev").innerHTML = devTimeSite + " дн.";
        document.getElementById("priceDev").innerHTML = priceSite + " т.р.";
    });
    $('#list_type2').on('change', function(){
        priceSite = calc[arr[0]][1][$("#list_type1").val()] + calc[arr[1]][1][$("#list_type2").val()] + calc[arr[2]][1][$("#list_type3").val()];
        devTimeSite = calc[arr[0]][2][$("#list_type1").val()] + calc[arr[1]][2][$("#list_type2").val()] + calc[arr[2]][2][$("#list_type3").val()];
        document.getElementById("timeDev").innerHTML = devTimeSite + " дн.";
        document.getElementById("priceDev").innerHTML = priceSite + " т.р.";
    });
    $('#list_type3').on('change', function(){
        priceSite = calc[arr[0]][1][$("#list_type1").val()] + calc[arr[1]][1][$("#list_type2").val()] + calc[arr[2]][1][$("#list_type3").val()];
        devTimeSite = calc[arr[0]][2][$("#list_type1").val()] + calc[arr[1]][2][$("#list_type2").val()] + calc[arr[2]][2][$("#list_type3").val()];
        document.getElementById("timeDev").innerHTML = devTimeSite + " дн.";
        document.getElementById("priceDev").innerHTML = priceSite + " т.р.";
    });


    let optionsApp = {threshold: [0.5]};
    let observerX = new IntersectionObserver( (entry) => {
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('show-animationX');
            }
        });
    }, optionsApp);
    let observer = new IntersectionObserver( (entry) => {
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('show-animation');
            }
        });
    }, optionsApp);
    let elementsX = $('.element-animationX');
    let elements = $('.element-animation');
    elementsX.each((i,el) => {
        observerX.observe(el);
    });
    elements.each((i,el) => {
        observer.observe(el);
    });
    let flag = false;
    let observerCount = new IntersectionObserver( (entry) => {
        entry.forEach(change => {
            if(change.isIntersecting && !flag){
                change.target.classList.add('vision');
                flag = true;
                $('.benefits__number').each(function() {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text(),
                    }, {
                        duration: 2500,
                        easing: 'swing',
                        step: (val) => {
                            $(this).text(Math.ceil(val));
                        },
                    });
                });
            }
        });
    }, optionsApp);
    
    let elementsCount = $('.stats-tab1');
    let elementsCount2 = $('.stats-tab2');
    
    elementsCount.each((i,el) => {
        observerCount.observe(el);
    });
    elementsCount2.each((i,el) => {
        observerCount.observe(el);
    });

    $(window).resize(function(){
        if($('.stats-tab1').hasClass('vision'))
            if($(window).width() <= 400){
                $('.stats-tab1').removeClass('vision');
                $('.stats-tab2').addClass('vision');
            }
            else return;
        else if($('.stats-tab2').hasClass('vision'))
            if($(window).width() > 400){
                $('.stats-tab2').removeClass('vision');
                $('.stats-tab1').addClass('vision');
            }
    });

    let optionsBtnUp = {threshold: [0.01]};
    let observerBtnUp = new IntersectionObserver( (entry) => {
        entry.forEach(change => {
            if(change.isIntersecting){
                $(".upper_body").addClass("invisible");
            }
            else{
                if($(".upper_body").hasClass("invisible")){
                    $(".upper_body").removeClass("invisible");
                }
            }
        });
    }, optionsBtnUp);
    let elementsBtnUp = $('.main__title');
    elementsBtnUp.each((i,el) => {
        observerBtnUp.observe(el);
    });

    let optionsLoad = {threshold: [0.01]};
    let observerLoad = new IntersectionObserver( (entry) => {
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.src = change.target.dataset.src;
            }
        });
    }, optionsLoad);
    let elementsLoad = $('.uploaded img');
    elementsLoad.each((i,el) => {
        observerLoad.observe(el);
    });
    let optionsLoadSlider = {threshold: [0.2]};
    let flagSlider = false;
    let observerLoadSlider = new IntersectionObserver( (entry) => {
        entry.forEach(change => {
            if(change.isIntersecting && !flagSlider){
                flagSlider = true;
                $('.uploaded-slider').addClass('fotorama');
                $('body').append($('<!-- Fotorama -->'
                + '<script src="js/fotorama.js"></script>'));
            }
        });
    }, optionsLoadSlider);
    let elementsLoadSlider = $('.uploaded-slider');
    elementsLoadSlider.each((i,el) => {
        observerLoadSlider.observe(el);
    });

    let flagSlider2 = false;
    let observerLoadSlider2 = new IntersectionObserver( (entry) => {
        entry.forEach(change => {
            if(change.isIntersecting && !flagSlider2){
                flagSlider2 = true;
                if($('.autoplay').hasClass('invisible'))
                    $('.autoplay').removeClass('invisible');
                $('.autoplay').addClass('slider__reviews');
                //$('body').append($('<script src="js/slick.min.js"></script>'));
                $('.autoplay').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    dots: true,
                    prevArrow: "<img src='img/left-arrow.png' class='prev' alt='1'>",
                    nextArrow: "<img src='img/right-arrow.png' class='next' alt='2'>",
                });   
            }
        });
    }, optionsLoadSlider);
    let elementsLoadSlider2 = $('.rev1');
    elementsLoadSlider2.each((i,el) => {
        observerLoadSlider2.observe(el);
    });

    setTimeout(function(){

        // Open directly via API
        $.magnificPopup.open({
            /*items: {
                src: '//https://www.youtube.com/watch?v=KI_Nc01JK8E',
                disableOn: 700,
		        type: 'iframe',
		        mainClass: 'mfp-fade',
		        removalDelay: 160,
		        preloader: false,

		        fixedContentPos: false
            }*/
            items: {
                src: '#popup', // can be a HTML string, jQuery object, or CSS selector
                type: 'inline'
            }
            /*
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                          '<div class="mfp-close"></div>'+
                          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
                
                patterns: {
                  youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
              
                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }
              
                    src: '//www.youtube.com/watch?v=VJcIaUVcheE/%id%?autoplay=1' // URL that will be set as a source for iframe.
                  }
              
                  // you may add here more sources
              
                },
              
                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
              }*/
        });
    }, 2000);

 });
