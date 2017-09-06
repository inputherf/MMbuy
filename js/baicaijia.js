$(function () {
    var myscroll=new IScroll("#wrapper",{scrollX:true});
    $.getUrlParam= function (name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r !=null) return unescape(r[2]);
        return null;
    }



    $.get("http://127.0.0.1:9090/api/getbaicaijiatitle", function (data) {
        $(".tabs").html(template("nav_ul",data));
        var id=$.getUrlParam("titleid") ||0;
        $.get("http://127.0.0.1:9090/api/getbaicaijiaproduct",{
            titleid:id,
        }, function (data) {
            $(".tabs>li").eq(id).addClass("active").siblings().removeClass();
            $(".bjc_tab").html(template("bcj_pro",data));
        })
    })


    window.onload= function () {
        var ul = $(".tabs");
        var lis=ul.children();
        var sum=0;
        lis.each(function (i, e) {
            sum+=$(e).outerWidth(true);
        })
        $(".tabs").width(sum);
    }

    $(".gotop").on("click", function (e) {
        $("body,html").animate({scrollTop:0},50);
    })
})





