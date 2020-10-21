$(document).ready(function(){

    const sec05_Pslier = $('.popup_slide')
    
    sec05_Pslier.slick({
        slidesToShow: 3,//목록의 개수
        slidesToScroll: 1,//스크롤 목록의 개수
        arrows:true,//좌우버튼
        centerMode: true
    });
 

    const sec05_slide=$('.sec05_slider li')
    const sec05_pager=$('.sec05_btm_wrap li')
    const sec05_btn_left=$('.sec05_side.left')
    const sec05_btn_right=$('.sec05_side.right')

    function reset(){
        sec05_slide.removeClass('show')
        sec05_pager.removeClass('selected')
    };

    sec05_btn_right.click(function(e){
        e.preventDefault();
        
        const idx = $('.sec05_slider li.show').index();
        reset();
        if(idx < 7){
            sec05_slide.eq(idx+1).addClass('show');
            sec05_pager.eq(idx+1).addClass('selected');
        }
        else if(idx == 7){
            sec05_slide.eq(0).addClass('show');
            sec05_pager.eq(0).addClass('selected');
        }

    });
    sec05_btn_left.click(function(e){
        e.preventDefault();
        
        const idx = $('.sec05_slider li.show').index();    
        reset();
        if(idx > 0){
            sec05_slide.eq(idx-1).addClass('show');
            sec05_pager.eq(idx-1).addClass('selected');
        }
        else if(idx == 0){
            sec05_slide.eq(7).addClass('show');
            sec05_pager.eq(7).addClass('selected');
        }

    });

    const slide07_main = $('.sec07_slide li')
    const slide07_bg = $('.slide_bg li')
    const slide07_txt = $('.slide_txt li')
    const slide07_btn  = $('.sec07_slide_btn')

    function reset2(){

        slide07_bg.removeClass('Active');
        slide07_main.removeClass('Active');
        slide07_txt.removeClass('Active');
    
        };
 
        slide07_btn.click(function(e){

            const idx07_m = $('.sec07_slide li.Active').index();

            e.preventDefault();
            reset2();

            if(idx07_m < 5){
                slide07_bg.eq(idx07_m + 1).addClass('Active');
                slide07_main.eq(idx07_m + 1).addClass('Active');
                slide07_txt.eq(idx07_m + 1).addClass('Active');
            }
            else if (idx07_m == 5){
                slide07_bg.eq(0).addClass('Active');
                slide07_main.eq(0).addClass('Active');
                slide07_txt.eq(0).addClass('Active');
            }
        
       
        });
    





});