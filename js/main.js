$(function () {
    function setMenu(element) {
        navItem = $(element).parent('li')
        navMenu = navItem.children('section')

        baseREM = $('body').css('font-size');
        borderPad = parseFloat(baseREM) / 4;
        console.log(borderPad)

        offsetRight = Math.ceil($(window).width() - (navMenu.offset().left + navMenu.outerWidth()) - borderPad);
        navMaxHeight = Math.abs(((navMenu.offset().top - $(document).scrollTop() ) - $(window).height()))

        navMenu.css('max-height', navMaxHeight)

        console.log(offsetRight)
        if (offsetRight < 0) {
            navMenu.css('left', offsetRight + 'px')
        }
    }
    $(window).bind('load resize', function () {
        $('nav section').css('left', 'auto')
        $('nav #primary button').each(function () {
            setMenu(this)
        })
    })
    $('nav aside button').focus(function() {
        $(this).siblings('input').focus()
    })
});