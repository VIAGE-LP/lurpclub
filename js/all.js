$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    $(".luckywheel_btn").click(function (e) {
        e.preventDefault();
        $('.luckywheel_wheel').rotate({
            // angle: 0, // 旋轉指定角度(沒有動畫)
            animateTo: 2200, // 旋轉指定角度(有動畫)
            // duration: 1000, // 動畫持續時間
            // bind: {}, // 綁定事件
            // step: function () { }, // 在動畫每一步都會執行
            callback: function(){   
                $("#exampleModal_2").attr({
                    style: "display: block;"
                }); 
                $("body").addClass("modal-open");
                $("#exampleModal_2").addClass("show");
            }// 完成後執行
        });
    });
    $("button.wheel_close").click(function (e) { 
        e.preventDefault();
        $("#exampleModal_2").attr({
            style: "display: none;"
        }); 
        $("body").removeClass("modal-open");
        $("#exampleModal_2").addClass("hide");
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
