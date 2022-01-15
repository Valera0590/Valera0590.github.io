"use strict"
$(document).ready(function() {
    $('.overlay, .cssload-dots').fadeOut();
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
                $('body').append($('<script src="js/slick.min.js"></script>'));
                $('.autoplay').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    dots: true,
                    prevArrow: "<img src='../img/left-arrow.png' class='prev' alt='1'>",
                    nextArrow: "<img src='../img/right-arrow.png' class='next' alt='2'>",
                });   
            }
        });
    }, optionsLoadSlider);
    let elementsLoadSlider2 = $('.rev1');
    elementsLoadSlider2.each((i,el) => {
        observerLoadSlider2.observe(el);
    });
    
    /*$('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
        }, 'xml');
    });*/

        
        /*alert("Чтобы мы смогли рассчитать примерную цену разработки сайта, пожалуйста заполните несколько пунктов. Для продолжения нажмите OK!");
        order[0] = prompt("Выберите из списка нужный тип сайта и введите соответствующую цифру (сайт-визитка: 0, корпоративный сайт: 1, интернет-магазин: 2, инфо сайт: 3, игровой портал: 4, персональный проект: 5, контент-проект: 6, промо-сайт: 7, сайт-форум: 8, блог: 9).",'');
        order[1] = prompt("Выберите из списка нужный дизайн сайта и введите соответствующую цифру (жесткий: 0, гибкий: 1, комбинированный: 2, текстовый: 3, полиграфический: 4, интерфейсный: 5, динамический: 6).",'');
        order[2] = prompt("Выберите из списка нужный тип адаптивности сайта и введите соответствующую цифру (только для ПК: 0, только для мобилок: 1, под все типы устройств: 2).",'');
        */
       //alert("Разработка вашего сайта с учётом выбранных вами характеристик будет стоить: " + priceSite + "; за время: " + devTimeSite);

 });
