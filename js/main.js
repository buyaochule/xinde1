/**
 * Created by lenovo on 17/12/5 005.
 */
//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    },
    nextButton:'.swiper-button-next'
});

var music=document.getElementById("music");
var musicbg=document.querySelectorAll(".musicbg")[0]
var musicimg=document.querySelectorAll(".musicimg")[0]
var audio=document.querySelector("audio");
var s=1;
music.onclick=function(){
    if(s==1){
        musicbg.style.display="none";
        musicimg.style.animation="none";
        audio.pause();
        s=2
    }else{
        musicbg.style.display="block";
        musicimg.style.animation="xuanzhuan 2s linear infinite";
        audio.play();
        s=1
    }

}