(function(){var d=document.documentElement;
function apply(){var l=d.lang;document.querySelectorAll('[data-ar]').forEach(function(e){e.textContent=e.dataset[l==='ar'?'ar':'en']});
document.getElementById('langtxt').textContent=l==='ar'?'EN':'عربي';document.title=l==='ar'?'تقسيمة | ta2sema':'ta2sema | Book football and padel pitches'}
document.getElementById('lang').onclick=function(){var l=d.lang==='ar'?'en':'ar';d.lang=l;d.dir=l==='ar'?'rtl':'ltr';try{localStorage.setItem('t2s-lang',l)}catch(e){}apply()};
document.getElementById('theme').onclick=function(){var m=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=m;try{localStorage.setItem('t2s-theme',m)}catch(e){}};
var c=window.T2S||{};var a=document.getElementById('wa'),m=document.getElementById('mail');if(c.whatsapp&&a){a.href='https://wa.me/'+String(c.whatsapp).replace(/\D/g,'');a.hidden=false}
if(c.email&&m){m.href='mailto:'+c.email;m.hidden=false}
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();apply()})();
