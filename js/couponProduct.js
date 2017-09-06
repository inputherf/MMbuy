$.getUrlParam= function (name) {
    var reg = new RegExp("(^|&)" +
        name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r !=null) return unescape(r[2]);
    return null;
}


var id= $.getUrlParam("couponid");
//console.log(id);
$.get("http://127.0.0.1:9090/api/getcouponproduct",{
    couponid:id,
}, function (data) {
    console.log(data);
    $(".liwrap").html(template("c_pro",data));
    $(".one").on("click", function () {
        var src= $(this).find("img").attr("src");
        $(this).attr("href",src);
        console.log( $("this").attr("href",src));
    })

})