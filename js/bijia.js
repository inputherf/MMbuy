$.getUrlParam= function (name) {
    var reg = new RegExp("(^|&)" +
        name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r !=null) return unescape(r[2]);
    return null;
}

var categoryId=0;
var name=0;
var id=$.getUrlParam("productid");
$.get("http://127.0.0.1:9090/api/getproduct",{
    productid:id,
}, function (data) {
    //console.log(data);
    name=data.result[0].productName;
    var s=name.split(" ");
    var s1=s[0];
    $(".url_two").html(s1);
    $(".pro_bijia").html(template("pro_bj",data));
    $(".bijia_jd").html(template("pro_des",data));
})


//ÆÀ¼Û
var cate=null;
$.get("http://127.0.0.1:9090/api/getproductcom",{
    productid:id,  
}, function (data) {
    //console.log(data);
    categoryId=data.result[0].categoryId;
    $.get("http://127.0.0.1:9090/api/getcategorybyid",{
        categoryid:categoryId,
    }, function (data) {
        cate=data.result[0].category;
        $(".a_href").html(cate+">");
        $(".a_href").attr("href","productlist.html?categoryid="+categoryId+"&category="+cate+"&pageid=1");
        console.log(cate);
    })
    //console.log(categoryId);
    $(".bj_say").html(template("com_say",data));
})