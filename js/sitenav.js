$(function () {
    $.get("http://127.0.0.1:9090/api/getsitenav", function (data) {
        //console.log(data);
        $(".link").html(template("linkwrap",data));
    })
})