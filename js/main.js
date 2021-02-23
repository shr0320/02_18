//1 IIFE 제이쿼리가 사용하는 
//$ 다른 라이브러리(플러인)와 충돌을 피하기위해서
//철저하게 차단하는 함수 표현식(즉시실행표현함수 IIFE)
;(function($){



})(jQuery);

//2 object(객체) : 변수의 중복 차단 객체 사용
;(function($){

    var project = {
        init:function(){
            this.navFn();
            this.section1();
            this.section2();
            this.section3();
        },
        navFn:function(){
           
        },
        section1:function(){
         

        },
        section2:function(){
           

        },
        section3:function(){
            

        }

    };
    
    project.init();
})(jQuery);


//3 웹개발: 네비게이션, 메인슬라이드
;(function($){

    var project = {
        init:function(){
            this.navFn();
            this.section1();
            this.section2();
            this.section3();
        },
        navFn:function(){
           //네비게이션 분석
           //계획
           //스토리보드
           //변수설정 (일반변수, 객체변수($ 태그이름을 선택자 ))
           
        },
        section1:function(){
            //메인슬라이드 분석
            //계획
            //스토리보드

        },
        section2:function(){
           

        },
        section3:function(){
            

        }

    };
    
    project.init();
})(jQuery);