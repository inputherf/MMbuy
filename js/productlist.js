// 正则获取页面地址栏上想截取的字符串
(function ($) {
    $.getUrlParam= function (name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r !=null) return unescape(r[2]);
        return null;
    }
})(jQuery);

var pageCount=0;
var id=$.getUrlParam("categoryid");
var pageid= $.getUrlParam("pageid") || 1;
$.get("http://127.0.0.1:9090/api/getcategorybyid",
{categoryid:id},
    function (data) {
        $(".url_one").html(data.result[0].category);})

$.get("http://127.0.0.1:9090/api/getproductlist",{
    categoryid:id,
    pageid :pageid,
}, function (data) {
    console.log(data);
    pageCount=Math.ceil(data.totalCount/data.pagesize);
    data.page=[];
    data.pageid=pageid || 1;
    for(var i=0;i<pageCount;i++){
        data.page.push({"pageid":i+1,"pageCount":pageCount});
    }
    console.log(data.page);
    //$(".product_list").html(template("pro_des",data));
    //$("#selectPage").html(template("op_wrap",data));
});


//var flag = true,
//    pageCount = 0,
//    pageid = 1;
//gopage();

//function gopage(pageid) {
//    $.ajax({
//        url: "127.0.0.1:9090/api/getproductlist",
//        data: {
//            pageid: pageid,
//            categoryid: id
//        },
//        success: function(data) {
//             console.log(data)
//            pageCount = data.pageCount = Math.ceil(data.totalCount / data.pagesize);
//            data.pageid = pageid || 1;
//            var html = template('meidaTmp', data);
//            $(".list-media").html(html);
//            if (flag) {
//                flag = false;
//                html = template('pageTmp', data);
//
//                $(".page").html(html);
//                $('#selectPage').on('change', function() {
//                    pageid = $(this).val();
//                    // console.log(pageid);
//                    gopage(pageid);
//                });
//            }
//
//        }
//    })
//}
//$(".page").on('click', "a", function() {
//    // 获取自定义属性<a data-delta="-1" href="javascript:;">上一页</a>
//    var delta = this.dataset.delta;
//    // console.log(delta);
//    if (delta > 0 && pageid == pageCount || delta < 0 && pageid == 1) {
//        return;
//    }
//    pageid += +delta;
//    // console.log(pageid)
//    gopage(pageid);
//    $('#selectPage').val(pageid);
//});


