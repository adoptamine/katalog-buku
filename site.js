(function(){
var P=location.pathname.replace(/index\.html$/,"");
var M=[["Beranda","/"],["Buku","/buku/"],["Handmade Crafts","/crafts/"],["Recycle Crafts","/recycle/"],["Preloved Things","/preloved/"]];
function on(h){return h==="/"?P==="/":P.indexOf(h)===0}
var links=M.map(function(m){return '<a href="'+m[1]+'"'+(on(m[1])?' aria-current="page"':'')+'>'+m[0]+'</a>'}).join("");
document.body.insertAdjacentHTML("afterbegin",
'<header class="sh-head"><div class="sh-in"><a class="sh-brand" href="/"><img src="/images/logo-rhp.png" alt="Logo Rumah Hobi Pamulang" width="46" height="46"><span>Rumah Hobi<br>Pamulang</span></a>'+
'<button class="sh-burger" id="shb" aria-label="Menu" aria-expanded="false">☰</button>'+
'<nav class="sh-nav" id="shn" aria-label="Menu utama">'+links+'</nav></div></header>');
var b=document.getElementById("shb"),n=document.getElementById("shn");
b.addEventListener("click",function(){var o=n.classList.toggle("on");b.setAttribute("aria-expanded",o)});
function foot(){
document.body.insertAdjacentHTML("beforeend",
'<footer class="sh-foot"><div class="sh-links"><a href="https://wa.me/6285791944282" target="_blank" rel="noopener">WhatsApp</a><a href="https://www.threads.com/@adopt.a.mine" target="_blank" rel="noopener">Threads</a><a href="https://shopee.co.id/shop/24761013" target="_blank" rel="noopener">Shopee</a></div></footer>');
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",foot);else foot();
})();
