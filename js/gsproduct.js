$(function () {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    var shopid = 0;
    var areaId = 0;
    $.get("http://127.0.0.1:9090/api/getgsproduct",{
        shopid:0,
        areaid:0,
    }, function (data) {
        $(".bdwrap").html(template("bd-wrap",data));
    })

    $(".one").on("click", function () {
        $.get("http://127.0.0.1:9090/api/getgsshop", function (data) {
            $(".shop").html(template("popsort", data));
            $(".popsort").toggleClass("on").siblings().removeClass("on");
            $(".shop>li>a>i").eq(shopid).addClass("pic");
            $(".shop>li>a").on("click", function () {
                $(this).children("i").addClass("pic").parents("li").siblings().find("i").removeClass("pic");
                shopid = $(this).parent("li").data("id");
                $(".popsort").removeClass("on");
                $(".one>a>span").html($(this).data("name"));
                $.get("http://127.0.0.1:9090/api/getgsproduct",{
                    shopid:shopid,
                    areaid:areaId,
                }, function (data) {
                    $(".bdwrap").html(template("bd-wrap",data));
                })
            })
        })
    })
    $(".two").on("click", function () {
        $.get("http://127.0.0.1:9090/api/getgsshoparea", function (data) {
            $(".area").html(template("area_pop",data));
            $(".popcat").toggleClass("on").siblings().removeClass("on");
            $(".area>li>a>i").eq(areaId).addClass("pic");
            $(".area>li>a").on("click", function () {
                $(this).children("i").addClass("pic").parents("li").siblings().find("i").removeClass("pic");
                areaId = $(this).parent("li").data("area");
                var m= $(this).data("m-name");
                var n=m.slice(0,2);
                $(".popcat").removeClass("on");
                $(".two>a>span").html(n);
                $.get("http://127.0.0.1:9090/api/getgsproduct",{
                    shopid:shopid ||0,
                    areaid:areaId ||0,
                }, function (data) {
                    $(".bdwrap").html(template("bd-wrap",data));
                })
            })
        })
    })
    
    $(".three").on("click", function () {
        $(".popprice").toggleClass("on");
        $(".all>li>a").on("click", function () {
            $(this).children("i").addClass("pic");
            $(".popprice").removeClass("on");
        })
    })


})
