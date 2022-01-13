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
    let elementsBtnUp = $('.main');
    elementsBtnUp.each((i,el) => {
        observerBtnUp.observe(el);
    });

    let optionsLoad = {threshold: [0.1]};
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

    /*setTimeout(function() {
        let calc = {};
        let price = {};
        let order = {};
        calc["type site"] = ["сайт-визитка","корпоративный сайт",
        "интернет-магазин","инфо сайт","игровой портал","персональный проект","контент-проект","промо-сайт","сайт-форум","блог"];
        price["type site"] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        calc["design"] = ["жесткий", "гибкий", "комбинированный", "текстовый", "полиграфический", "интерфейсный", "динамический"];
        price["design"] = [2, 3, 4, 5, 6, 7, 8];
        calc["adaptability"] = ["только для ПК","только для мобилок","под все типы устройств"];
        price["adaptability"] = [2, 3, 4];
        console.log(calc);
        console.log(price);
        alert("Чтобы мы смогли рассчитать примерную цену разработки сайта, пожалуйста заполните несколько пунктов. Для продолжения нажмите OK!");
        order[0] = prompt("Выберите из списка нужный тип сайта и введите соответствующую цифру (сайт-визитка: 0, корпоративный сайт: 1, интернет-магазин: 2, инфо сайт: 3, игровой портал: 4, персональный проект: 5, контент-проект: 6, промо-сайт: 7, сайт-форум: 8, блог: 9).",'');
        order[1] = prompt("Выберите из списка нужный дизайн сайта и введите соответствующую цифру (жесткий: 0, гибкий: 1, комбинированный: 2, текстовый: 3, полиграфический: 4, интерфейсный: 5, динамический: 6).",'');
        order[2] = prompt("Выберите из списка нужный тип адаптивности сайта и введите соответствующую цифру (только для ПК: 0, только для мобилок: 1, под все типы устройств: 2).",'');
    
        let priceSite = price["type site"][order[0]] + price.design[order[1]] + price.adaptability[order[2]];
        alert("Разработка вашего сайта с учётом выбранных вами характеристик будет стоить: " + priceSite);
    },3000);*/
 });
