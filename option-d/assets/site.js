(function(){
  var y=document.getElementById("y"); if(y){y.textContent=new Date().getFullYear()}
  var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Fade the hero video in once it is really playing
  var hv=document.getElementById("heroVideo");
  if(hv){
    if(reduce){hv.pause();}
    else{
      hv.addEventListener("playing",function(){hv.classList.add("on")});
      var p=hv.play(); if(p&&p.catch){p.catch(function(){})}
    }
  }
  if(reduce){document.querySelectorAll("video").forEach(function(v){v.pause()})}

  // Scroll reveal (content stays visible without JavaScript)
  var els=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window && !reduce){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})
    },{threshold:.1,rootMargin:"0px 0px -5% 0px"});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add("in")})}

  // Close the mobile menu after choosing a link
  var m=document.getElementById("menu");
  if(m){document.querySelectorAll("nav.main a").forEach(function(a){a.addEventListener("click",function(){m.checked=false})})}
})();
