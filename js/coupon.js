$(function () {
    $.get("http://127.0.0.1:9090/api/getcoupon", function (data) {
        $(".brand").html(template("brandwrap",data));
    })

})