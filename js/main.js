$(function () {
    function setMenu(element) {
        navItem = $(element).parent('li')
        navMenu = navItem.children('section')

        baseREM = $('body').css('font-size');
        borderPad = parseFloat(baseREM) / 4;

        offsetRight = Math.ceil($(window).width() - (navMenu.offset().left + navMenu.outerWidth()) - borderPad);
        navMaxHeight = Math.abs(((navMenu.offset().top - $(document).scrollTop() ) - $(window).height()))

        navMenu.css('max-height', navMaxHeight)
        
        if (offsetRight < 0) {
            navMenu.css('left', offsetRight + 'px')
        }
    }
    $(window).bind('load resize', function () {
        $('nav section').css('left', 'auto')
        $('nav #primary button.open').each(function () {
            setMenu(this)
        })
    })
    $('nav aside button').focus(function() {
        $(this).siblings('input').focus()
    })
    $('nav .hamburger button').focus(function() {
        $('nav#light-mode .list-wrapper').focus()
    })
    $('nav section button.close').click(function() {
        $('nav#light-mode .list-wrapper').focus()
    })
    
    const rings = document.querySelectorAll('.radial');
    const texts = document.querySelectorAll('.txt-block');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        texts.forEach(text => text.classList.add('animate'));
        }
    });
    }, {
    threshold: 0.8
    });

    rings.forEach(ring => {
    observer.observe(ring);
    });
});