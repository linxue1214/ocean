$(function(){
  $("#carouselMenu").carousel({
      interval: 2500,
      wrap: true
  });

})

$(function(){
  $("#carouselMenu1").carousel({
    interval: 2500,
    wrap: true
});
})

// 图片左右上下移动
$(function () {
  $(".pic_show .out .in").hover(function(){
      $(this).stop(true,true).animate({top:"-100%"},500)
  }).mouseleave(function (){
      $(this).stop(true,true).animate({top:""},500)
  })
})


//当前时间
function datetime() {
  //创建日期时间对象
  var datetime = new Date();
  var year = datetime.getFullYear();
  var month = datetime.getMonth() + 1;
  var day = datetime.getDate();
  var week = datetime.getDay();

  switch (week) {
      case 0:
          var week = '星期日';
          break;
      case 1:
          var week = '星期一';
          break;
      case 2:
          var week = '星期二';
          break;
      case 3:
          var week = '星期三';
          break;
      case 4:
          var week = '星期四';
          break;
      case 5:
          var week = '星期五';
          break;
      case 6:
          var week = '星期六';
          break;
  }
  var now =  year + "年" + month + "月" + day + "日" + " " + week;
  $(".lunbo2 .lb  p").text(now);//这里是往p标签中添加
}
setInterval(datetime, 1000);


// Testimonials
$(function(){
    //detInterval(function(){},1000)
    setInterval("fun_picture()",2500)
    setInterval("fun_link()",2500)
});
function fun_picture() {
    var v1 = $(".box .text");//要隐藏的图片
    var v2;//要显示的图片
    if (v1.next().length == 0) {
        v2 = $(".box img:first");
    }
    else{
        v2=v1.next();
    }
    var i=v2.index();
    v1.animate({opacity: "0"}, 1000,function(){
        v1.removeClass("text")
    });
    v2.animate({opacity: "1"}, 1000, function(){
        v2.addClass("text")
    });
   
}
//news
function fun_link(){
    var v3 = $(".link .link1");//要隐藏的链接
    var v4;//要显示的链接
    if (v3.next().length == 0) {
        v4 = $(".lunbo2 .link h5:first");
    }
    else{
        v4=v3.next();
    }
    var i=v4.index();
    v3.animate({opacity: "0"}, 1000,function(){
        v3.removeClass(".lunbo2 link1")
    });
    v4.animate({opacity: "1"}, 1000, function(){
        v4.addClass(".lunbo2 link1")
    });

}

//news
$(function () {
    $(".pic_show .out .in").hover(function(){
        $(this).stop(true,true).animate({top:"-100%"},500)
    }).mouseleave(function (){
        $(this).stop(true,true).animate({top:""},500)
    })
})

//返回顶部
$(function(){   
    $(window).scroll(function() {      
        if($(window).scrollTop() >= 100){
            $('.actGotop').fadeIn(300); 
        }else{    
            $('.actGotop').fadeOut(300);    
        }  
    });
    $('.actGotop').click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);});   
});


