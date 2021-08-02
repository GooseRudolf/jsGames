function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function(support){
      if(support == true){
          document.querySelectorAll('body').classList.add("webp");
      }
  });
new Swiper('.image-slider',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
});;
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if (isMobile.any()){
    const animItems1 = document.querySelectorAll('._anim_items');
    for(let i = 0; i < animItems1.length; i++){
        const animItem1 = animItems1[i];
        animItem1.classList.remove('_anim_items');
    }
}


const animItems = document.querySelectorAll('._anim_items');

if (animItems.length>0){
    window.addEventListener('scroll', animOnScrol);
    function animOnScrol(params){
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHight / animStart;
            if(animItemHight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset-animItemPoint) && pageYOffset< (animItemOffset + animItemHight)){
                animItem.classList.add("_active");
            }else{
                if(!animItem.classList.contains("_anim_nohide")){
                    animItem.classList.remove("_active");
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top:rect.top + scrollTop, left: rect.left+scrollLeft}
    }
    setTimeout(()=>{ 
        animOnScrol();
    },300);
};