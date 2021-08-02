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

const more1 = document.querySelector(".main-servise-plus");
const items1 = document.querySelectorAll('.dn');

more1.addEventListener('click', function(){
    more1.classList.add('dn');
    for(let i = 0; i<items1.length; i++){
        let item = items1[i];
        item.classList.add('db');
    }
})
function timerr(){
    const h = document.querySelector('.main-timer-items-right-timer-h-num'),
        m = document.querySelector('.main-timer-items-right-timer-m-num'),
        s = document.querySelector('.main-timer-items-right-timer-s-num');
    let hn = parseInt(h.innerHTML),
        mn = parseInt(m.innerHTML),
        sn = parseInt(s.innerHTML);
    sn = sn - 1;
    if(sn == -1){
        mn = mn - 1;
        sn = 60;
        if(mn == -1){
            hn = hn - 1;
            mn = 59;
            if(hn == -1){
               return;
            }
        }
    } 
    h.innerHTML = hn;
    m.innerHTML = mn;
    s.innerHTML = sn;
}
let tim = setInterval(timerr, 1000);

const more_coment = document.querySelectorAll('.main-coment-items-item-container-bottom-more');

for (let i = 0; i<more_coment.length; i++){
    let mc = more_coment[i];
    mc.addEventListener('click', function(){
        mc.classList.add('dn');
        mc.parentElement.previousElementSibling.classList.add('coment_open');
    })
}

const more2 = document.querySelector(".main-coment-plus");
const items2 = document.querySelectorAll('.dn1');
more2.addEventListener('click', function(){
    more2.classList.add('dn1');
    for(let i = 0; i<items2.length; i++){
        let item = items2[i];
        item.classList.add('db1');
    }
})


