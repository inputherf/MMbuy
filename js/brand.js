$(function () {
    $.getUrlParam= function (name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r !=null) return unescape(r[2]);
        return null;
    }
    var id=$.getUrlParam("brandtitleid");
    $.get("http://127.0.0.1:9090/api/getbrand",{
        brandtitleid:id,
        }, function (data) {
        $(".category-title").html(template("tv",data));
             $(".top1").eq(0).css({"background":"#f10e0e"});
             $(".top1").eq(1).css({"background":"#ff9314"});
             $(".top1").eq(2).css({"background":"#8adf5b"});
    })
    var productId=0;
    var str=null;
    $.get("http://127.0.0.1:9090/api/getbrandproductlist",{
        brandtitleid:id,
        pagesize:4
    }, function (data) {
        productId=data.result[0].productId;
     str='<div class="pic">' +
        data.result[0].productImg+
        '</div>' +
        '<div class="tit">' +
        data.result[0].productName +
        '</div>'
        $(".brand_list").html(template("brand-list",data));

    })

    $.get("http://127.0.0.1:9090/api/getproductcom",{
        productid:productId,
    }, function (data) {
        $(".pro-say").html(template("pro-id",data));
        $(".protit").html(str);
    })
})
