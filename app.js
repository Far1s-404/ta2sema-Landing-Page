(function(){var h=document.documentElement,s=null;try{s=localStorage.getItem('lang')}catch(e){}
function set(l){h.setAttribute('data-lang',l);h.setAttribute('lang',l);h.setAttribute('dir',l==='ar'?'rtl':'ltr');try{localStorage.setItem('lang',l)}catch(e){}}
if(!s){s=((navigator.language||'').toLowerCase().indexOf('ar')===0)?'ar':'ar'}
set(s);var b=document.getElementById('lang');if(b)b.addEventListener('click',function(){set(h.getAttribute('data-lang')==='ar'?'en':'ar')});})();
