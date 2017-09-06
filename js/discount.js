$.getUrlParam= function (name) {
    var reg = new RegExp("(^|&)" +
        name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r !=null) return unescape(r[2]);
    return null;
}

var id=$.getUrlParam("productid");
$.get("http://127.0.0.1:9090/api/getdiscountproduct",{
    productid:id,
}, function (data) {
    console.log(data);
    $(".cu_content").html(template("cu_d",data));
})