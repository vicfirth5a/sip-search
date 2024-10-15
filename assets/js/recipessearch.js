
$(document).ready(function() {
    var $scrollContainer = $('#scroll-container');
    var scrollAmount = 150; // 每次滾動的像素量

    // 左移按鈕
    $('#scroll-left-btn').click(function() {
        $scrollContainer.animate({
            scrollLeft: '-=' + scrollAmount
        }, 300);
    });

    // 右移按鈕
    $('#scroll-right-btn').click(function() {
        $scrollContainer.animate({
            scrollLeft: '+=' + scrollAmount
        }, 300);
    });

    // 第二个容器的按钮
    $('#scroll-left-btn-1').click(function() {
        $('#scroll-container-1').animate({
            scrollLeft: '-=' + scrollAmount
        }, 300);
    });

    $('#scroll-right-btn-1').click(function() {
        $('#scroll-container-1').animate({
            scrollLeft: '+=' + scrollAmount
        }, 300);
    });


    //第三個容器
    $('#scroll-left-btn-2').click(function() {
        $('#scroll-container-2').animate({
            scrollLeft: '-=' + scrollAmount
        }, 300);
    });

    $('#scroll-right-btn-2').click(function() {
        $('#scroll-container-2').animate({
            scrollLeft: '+=' + scrollAmount
        }, 300);
    });


});