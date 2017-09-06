$.get("http://127.0.0.1:9090/api/getbrandtitle", function (data) {
    $(".cate_title").html(template("des_pro",data));
})
