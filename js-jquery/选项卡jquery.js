$(function(){
    var aDivs = $('#div1 div');
    var aBtns = $('#div1 button');
    
    aBtns.click(function(){
        aBtns.attr("class", '');
        aDivs.css('display', 'none');
        
        $(this).attr('class', 'active');
        aDivs.eq($(this).index()).css('display', 'block');
    });
})