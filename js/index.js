
$.get("http://127.0.0.1:9090/api/getindexmenu", function (data) {
    var row=$(".row");
    row.html(template("tpl",data));
    $(".row>li").eq(7).on("click", function () {
     $(".row>li").each(function (i, e) {
         if(i>7){
             $(e).addClass("hide").toggle();
         }
     })
    })
})
$.get("http://127.0.0.1:9090/api/getmoneyctrl",function (data) {
    var row=$(".row_one");
    row.html(template("product",data));
})