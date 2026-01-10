window.APP_CONFIG = {
  brand: "Campus Ka Jaika",
  phoneE164: "917206123642",
  displayPhone: "+91 72061 23642",
  email: "campuskajaika@gmail.com",
  hours: "09:00 AM – 08:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=29.1619724,75.7189315&output=embed",
  instagramUrl: "https://www.instagram.com/campuskajaika",
  offers: [
    { title: "Birthday Special", detail: "Buy 1 Get 1 on Medium Pizza (Mon-Sat)", tag: "Offer" },
    { title: "Free Delivery", detail: "On orders above ₹300 (2-3 km)", tag: "Free Ship" },
    { title: "Party Hall", detail: "Available for celebrations", tag: "New" }
  ]
}
;(function(){
  var KEY="cka_theme"
  function applyTheme(t){
    var d=document.documentElement
    if(t==="dark"){ d.classList.add("theme-dark") } else { d.classList.remove("theme-dark") }
    var b=document.getElementById("themeToggle")
    if(b){ b.textContent=t==="dark"?"Light":"Dark" }
  }
  function current(){ return localStorage.getItem(KEY)||"light" }
  document.addEventListener("DOMContentLoaded", function(){
    applyTheme(current())
    var b=document.getElementById("themeToggle")
    if(b){ 
      b.onclick=function(){ 
        var next=current()==="dark"?"light":"dark"
        localStorage.setItem(KEY, next)
        applyTheme(next)
      } 
    }
  })
})()
