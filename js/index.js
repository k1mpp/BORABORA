

$(document).ready(function() {

  opening_layer_txt();
  setTimeout(opening_layer,3000);

  function opening_layer_txt(){
    $('#opening p').animate({'bottom':'0'},2000);
  }
  function opening_layer(){
    $('#opening').animate({'top':'-100%'},2000);
  }

     $('#fullpage').fullpage({
          navigation: true,
          autoScrolling:true,
          anchors: ['first', 'second', 'third', 'fourth','fifth','sixth'],
          responsiveWidth: 900,
          // slidesToSections: true,
        	 licenseKey:'1C803096-FF9049FC-A4123F52-D747BA3D',
          // css3: true,
          scrollingSpeed: 1000,
                  afterLoad: function(anchorLink, index){
                  var loadedSection = $(this);
                  if(index == 1){
                     setTimeout(wrap01,500);
                     setTimeout(wrap01_bg,200);
                     setTimeout(wrap01_tit,4000)
                  }
                  if(index == 2){
                    wrap02();
                  }
                  if(index == 3){
                    setTimeout(wrap03,500);
                  }
                 if(index == 4){
                   setTimeout(wrap04,500);
                  }
                  if(index == 5){
                    setTimeout(wrap05,500);
                   }
                   if(index == 6){
                     setTimeout(wrap06,500);
                    }
                   if(index == 7){
                     setTimeout(wrap07,500);
                    }
                   if(index == 8){
                     setTimeout(wrap08,500);
                    }

              }
        });

        

        function wrap01() {
          $("#num1").animate({'opacity':'1','top':'300px'},1000);
        }
        function wrap01_tit(){
          // title 스크립트
          const wrapper = document.getElementsByClassName("text-animation")[0];
          wrapper.style.opacity="1";
          wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

          const spans = wrapper.getElementsByTagName("span");

          for(var i=0;i<spans.length;i++){
            spans[i].style.animationDelay = i*80+"ms";
          }  
        }

        function wrap01_bg(){
          $(".sec01_bg").animate({'opacity':'1'},1000);
        }
      
        function wrap02() {
          setInterval(function(){
            $(".profil_left").animate({'opacity':'1'},1000);
          },600);
          setInterval(function(){
            $(".profil_right").animate({'opacity':'1'},1000);
          },800);
          setInterval(function(){
            $(".circular").animate({'opacity':'1'},1000);
          },1000);
        }

        function wrap03() {

          $("#num3").animate({'opacity':'1'},1000);

        }

        function wrap04() {

          $("#num4").animate({'opacity':'0.8'},500);

        }

        function wrap05() {

          $("#num5").animate({'opacity':'1'},1000);

        }
        function wrap06() {

          $("#num6").animate({'opacity':'1','top':'300px'},1000);
        }
        function wrap07() {

          $("#num7").animate({'opacity':'1'},1000);
        }
        function wrap08() {

          $("#num8").animate({'opacity':'1','top':'300px'},1000); 
          typo();
          
        }


  



// link


const micro_btn1 = $('.micro_btn1')
const micro_btn2 = $('.micro_btn2')
const micro_tiwns = $('.sec03_twins')
const micro_flo = $('.sec03_flo')


click1();
click2();

function click1(){
    micro_btn2.click(function(e){
        e.preventDefault();
       micro_tiwns.hide(500);
       micro_flo.show(500);
    });
};
function click2(){
micro_btn1.click(function(e){
    e.preventDefault();
    micro_tiwns.show(500);
    micro_flo.hide(500);
})

};

// 버튼 스크립트

    const btn_effect = $('.btn_effect >span')

    let element, circle, d, x, y;
    btn_effect.click(function(e){
      
        element = $(this);
      
        if(element.find(".circle").length == 0)
            element.prepend("<span class='circle'></span>");
            
        circle = element.find(".circle");
        circle.removeClass("animate");
        
        if(!circle.height() && !circle.width())
      {
            d = Math.max(element.outerWidth(), element.outerHeight());
            circle.css({height: d, width: d});
        }
        
        x = e.pageX - element.offset().left - circle.width()/2;
        y = e.pageY - element.offset().top - circle.height()/2;
        
        circle.css({top: y+'px', left: x+'px'}).addClass("animate");
    })

    

// 08 sec typo
  function typo (){
    $(".typer").typed({
      strings: ["Thank you", "Have a nice day :)"],
      typeSpeed: 200,
      contentType: 'html',
      loop:false
    });
};



const popup_Btn = $('.popup_btn');
const popup_layer = $('.popup ');
const popup_closer = $('.popup_closer')


popup_Btn.click(function(){
  popup_layer.addClass('On');
  $.fn.fullpage.setAllowScrolling(false) 
})

popup_closer.click(function(){
  popup_layer.removeClass('On');
  $.fn.fullpage.setAllowScrolling(true) 
})

   


});

