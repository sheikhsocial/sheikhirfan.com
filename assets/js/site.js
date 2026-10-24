(function(){
var d=document,$=function(s,r){return(r||d).querySelector(s)};
var b=$('.burger'),n=$('.nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded',false)}})}
function openHash(){var h=location.hash&&$(location.hash);if(h&&h.tagName==='DETAILS')h.open=true}
openHash();addEventListener('hashchange',openHash);
d.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
var c=$('[data-clock]');
if(c){var t=function(z){return new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:z}).format(new Date())};
var u=function(){c.textContent="Huai'an "+t('Asia/Shanghai')+"  ·  Dhaka "+t('Asia/Dhaka')};u();setInterval(u,30000)}
var f=$('[data-form]');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var g=function(k){return f.elements[k].value.trim()};
var body='Hi Irfan,\n\n'+g('message')+'\n\n— '+g('name')+'\n'+g('email');
location.href='mailto:me@sheikhirfan.com?subject='+encodeURIComponent(g('subject')||'Message from sheikhirfan.com')+'&body='+encodeURIComponent(body)})}
})();
