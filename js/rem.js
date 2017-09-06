var oHtml=document.documentElement;
var screenWidth=oHtml.offsetWidth;
var uiWidth=750;
var font=40;
var bili=uiWidth/font;
window.onresize=getSize;
getSize();
function getSize(){
    screenWidth = oHtml.offsetWidth;
    if(screenWidth <=320){
        oHtml.style.fontSize=320/bili+"px";
    }else if(screenWidth >= uiWidth){
        oHtml.style.fontSize=uiWidth/bili+"px";
    }else{
        oHtml.style.fontSize=screenWidth/bili+"px";
    }
}





