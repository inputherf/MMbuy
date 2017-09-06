$.get("http://127.0.0.1:9090/api/getcategorytitle", function (data) {
    var cate=$(".cate_title");
    cate.html(template("des_pro",data));
    var bigPro=$(".cate_title>li>a");
    bigPro.on("click", function () {
        var that=$(this);
        var index=$(this).data("index");
        $.get("http://127.0.0.1:9090/api/getcategory",
        {titleid:index},
        function (data) {
            that.siblings("ul").addClass("hide").toggle().html(template("des",data));
        })
    })
})