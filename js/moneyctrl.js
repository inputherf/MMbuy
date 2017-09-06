$.getUrlParam= function (name) {
    var reg = new RegExp("(^|&)" +
        name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r !=null) return unescape(r[2]);
    return null;
}

var pageid= $.getUrlParam("pageid") || 1;
var pageCount=0;

$.get("http://127.0.0.1:9090/api/getmoneyctrl",{
    pageid:pageid-1,
},function (data) {
    //console.log(data);
    pageCount=Math.ceil(data.totalCount/data.pagesize);
    data.pageid=pageid || 1;

    data.page=[];
    for(var i = 0;i<pageCount;i++){
        data.page.push({"pageid":i+1,"pageCount":pageCount});
    }
    console.log(data.page);
    console.log(pageid);
    //var row=$(".recommend_product");
  var row =template("moneyctrl",data);
    $("#recommend_product").html(row);
    $("#selectPage").on("change", function (e) {
        console.log(1);
        console.log($(this).val());

        location.href="moneyctrl.html?pageid="+$(this).val();
        $(this).attr("selected","selected");

    })
})