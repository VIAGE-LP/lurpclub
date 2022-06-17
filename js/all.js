$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    $('a[href="#LINEPOINT"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#LINEPOINT').offset().top,
        }, 900);
    });

    // coupon折扣
    $('.coupon01_btn').click(function () {
        $('#money').text(`$250`);
        $('#coupon_money').text(`$250`);
        $('#copy').text(`L2502206BEBN`);
    });
    $('.coupon02_btn').click(function () {
        $('#money').text(`$200`);
        $('#coupon_money').text(`$200`);
        $('#copy').text(`L2206BE200BN`);
    });
    $('.coupon03_btn').click(function () {
        $('#money').text(`$150`);
        $('#coupon_money').text(`$150`);
        $('#copy').text(`L2206BEBN150`);
    });
    // 點01_Xmas_btn會連到並"展開"id="Xmas"
    // $('.Xmas_btn').click(function (e) {
    //     e.preventDefault();
    //     $(".Xmas").attr("style", "display:block;");
    //     $('html , body').animate({
    //         scrollTop: $('#Xmas').offset().top,
    //     }, 900);
    // });

    //週年慶活動辦法下拉選單
    // $(".anniversary_2").hide();
    // $('.anniversary_1').click(function (e) {
    //     e.preventDefault();
    //     $(".anniversary_2").toggle();;
    // });
    // $('.anniversary_2').click(function (e) {
    //     e.preventDefault();
    //     $(".anniversary_2").hide();
    // });

    // $("#wh-call-to-action").removeAttr("wh-click");
    // $("#wh-call-to-action").removeClass("wh-animation-in");
    //聊天機器人
    // $(window).scroll(function () {
    //     var scrollPos = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     var formTop = $('#lp_form').position().top;
    //     var width = $(window).width();

    //     if ((formTop <= (scrollPos + windowHeight / 2)) && (width <= 768)) {
    //         $("#fb-root").attr({
    //             style: "display: none;"
    //         });
    //         $("#wrapper img#line").attr({
    //             style: "display: block;"
    //         });
    //         $(".line_alert").attr({
    //             style: "display: block;"
    //         });
    //     } else if ((formTop <= (scrollPos + windowHeight / 2)) && (width > 768)) {
    //         $("#fb-root").attr({
    //             style: "display: block;"
    //         });
    //     }
    // });
});
