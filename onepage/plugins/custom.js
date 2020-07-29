$(document).ready(function(){
    
    // scroll to id
    $("#shumenu a, #scrolls").click(function(){
        // console.log(this);
        let who=$(this).attr("href");
        // console.log($(who).offset().top);
        let val=$(who).offset().top - $("#shumenu").innerHeight() + 1;

        $("html").animate({
            scrollTop: val
        },1000,"swing");

    });
    
    
    // scroll spy
    
    spy();  //先讓瀏覽器跑一遍
    
    $(window).scroll(function(){
        // console.log(1);
        spy();
        showon();
    })

    function spy(){
        let nowat=$(window).scrollTop();

        // 每個section都做->function()?
        $("section").each(function(){
            let 
                // 抓取當下的id
                id=$(this).attr("id"),
                // 抓取當下section的總高度值
                offset=$(this).offset().top,    //當下
                height=$(this).innerHeight();   //總高

            if(offset<nowat && nowat<offset+height) {   //現在高度大於當下高度，且小於當下高度與總高的相加
                //this section is nowat's zone
                $("#shumenu a").removeClass("active");
                $(`#shumenu a[href='#${id}']`).addClass("active");
            }
            console.log(id);
        });

    }
    function showon(){
        nowat=$(window).scrollTop();
        id=$("#shuslider").height();
        if(nowat<id){
            $("#scrolls").css('opacity',0);
        }else{
            $("#scrolls").css('opacity',1);
        }
        // console.log($("#scrolls").css('opacity'))
    }






});