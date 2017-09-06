(function ($) {
    $.getUrlParam= function (name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r !=null) return unescape(r[2]);
        return null;
    }
})(jQuery);

$.get("http://127.0.0.1:9090/api/getinlanddiscount", function (data) {
    $(".cu_friend").html(template("food_tit",data));
})

document.onreadystatechange= function () {
    if(document.readyState="complete"){
        $(".loading").fadeOut();
    }
}