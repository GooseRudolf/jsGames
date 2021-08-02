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
const popupLinks = document.querySelectorAll(".popup_link");
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock_padding');

let unlock = true;

const timeout = 300;

if(popupLinks.length>0){
    for(let index=0; index<popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function(e){
            const popupName = popupLink.getAttribute('href').replace('#','');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close_popup');
if(popupCloseIcon.length>0){
    for(let index=0; index<popupCloseIcon.length; index++){
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup){
    if(curentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if(popupActive){
            popupClose(popupActive, false);
        }else{
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function(e){
            if(!e.target.closest('.popup_content')){
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true){
    if (unlock){
        popupActive.classList.remove('open');
        if(doUnlock){
            bodyUnLock();
        }
    }
}

function bodyLock(){
    const lockPaddingValue =window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    
    if(lockPadding.length>0){
    for (let index = 0; index<lockPadding.length; index++){
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}

function bodyUnLock(){
    setTimeout(function(){
        for (let index = 0; index<lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    },timeout);

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e){
    if (e.which === 27){
        const popupActive = this.document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function(){
    if(!Element.prototype.closest){
        Element.prototype.closest = function(css){
            var node =  this;
            while(node){
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function(){
    if(!Element.prototype.matches){
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();



;
const spoilers = document.querySelectorAll('.main-s4-items-item-titel');

if(spoilers.length){
    for(let i = 0; i<spoilers.length; i++){
        let e = spoilers[i];
        let d = e.nextElementSibling;
        e.addEventListener("click", function(){  
            e.classList.toggle('active');
            d.classList.toggle('open');})
    }
}

function fun(){
    let scr = window.screen.width;
    let l;
    let q;
    let f;
    if (scr > 650 ){
      l = 1.2; 
      q = 12; 
      f = 20;
    }
    if((scr > 400) && (scr < 650)){
        l = 0.8;
        q = 9;
        f = 30;
    }
    if(scr < 400){
        l = 0.6;
        q = 5;
        f = 30;
    }
    const range = document.querySelector('.main-form-forma-range-container-input');
    document.querySelector('.main-form-forma-range-container-line').style = 'width:'+(range.value*l-q)+'px';
    document.querySelector('.main-form-forma-range-container-chose').style = 'left:'+(range.value*l-f)+'px';
    document.querySelector('.main-form-forma-range-container-chose').innerHTML = range.value;
}
let r = setInterval(fun, 1);

const fix = document.querySelector('.fixed_element-container');
const clos = document.querySelector('.fixed_element-container-close');
const lis = document.querySelector('.fixed_element-container-list');

fix.addEventListener("click", function(){  
    clos.classList.toggle('open');
    lis.classList.toggle('open');
})

const burger = document.querySelector('.header-top-mobile-burger');
const h_top = document.querySelector('.header-top');
burger.addEventListener("click", function(){
    burger.classList.toggle('burger_active');
    h_top.classList.toggle('h_open');
})

