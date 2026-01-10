;(function(){
  function renderBestSellers(items){ 
    var wrap=document.getElementById("bestSellers"); 
    if(!wrap) return; 
    wrap.innerHTML=""; 
    items.forEach(function(it){ 
      var card=document.createElement("div"); 
      card.className="card"; 
      var body=document.createElement("div"); 
      body.className="card-body"; 
      var name=document.createElement("div"); 
      name.textContent=it.name; 
      var desc=document.createElement("div"); 
      desc.textContent=it.desc; 
      desc.style.color="var(--muted)"; 
      desc.style.fontSize="14px"; 
      var price=document.createElement("div"); 
      price.className="price"; 
      price.textContent="₹"+it.price; 
      var actions=document.createElement("div"); 
      actions.style.marginTop="8px"; 
      var add=document.createElement("button"); 
      add.className="CartBtn"; 
      var iconWrap=document.createElement("span"); 
      iconWrap.className="IconContainer"; 
      var svg=document.createElementNS("http://www.w3.org/2000/svg","svg"); 
      svg.setAttribute("viewBox","0 0 24 24"); 
      svg.classList.add("icon"); 
      var path=document.createElementNS("http://www.w3.org/2000/svg","path"); 
      path.setAttribute("d","M7 4h-2l-1 2h-2v2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.1.9 2 2 2h12v-2h-11.1c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h6.92c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.48 0-.55-.45-1-1-1h-14.31l-.94-2zm3 17c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2c1.1 0 2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2c1.1 0 2-.9 2-2s-.9-2-2-2z"); 
      svg.appendChild(path); 
      iconWrap.appendChild(svg); 
      var text=document.createElement("span"); 
      text.className="text"; 
      text.textContent="Add to cart"; 
      add.appendChild(iconWrap); 
      add.appendChild(text); 
      add.onclick=function(){ Cart.addItem({ id:it.id, name:it.name, price:it.price }) }; 
      actions.appendChild(add); 
      body.appendChild(name); 
      body.appendChild(desc); 
      body.appendChild(price); 
      body.appendChild(actions); 
      card.appendChild(body); 
      wrap.appendChild(card) 
    }) 
  }
  
  function renderOffers(){ 
    var wrap=document.getElementById("offers"); 
    if(!wrap) return; 
    wrap.innerHTML=""; 
    window.APP_CONFIG.offers.forEach(function(o){ 
      var row=document.createElement("div"); 
      row.className="offer"; 
      var left=document.createElement("div"); 
      left.innerHTML="<strong>"+o.title+"</strong><div style='color:var(--muted);font-size:14px;'>"+o.detail+"</div>"; 
      var tag=document.createElement("div"); 
      tag.className="btn outline"; 
      tag.textContent=o.tag; 
      row.appendChild(left); 
      row.appendChild(tag); 
      wrap.appendChild(row) 
    }) 
  }
  
  function setupLinks(){ 
    var heroW=document.getElementById("heroWhatsAppBtn"); 
    if(heroW){ 
      heroW.onclick=function(){ window.open("https://wa.me/"+window.APP_CONFIG.phoneE164, "_blank") } 
    } 
    var footerW=document.getElementById("footerWhatsApp"); 
    if(footerW){ 
      footerW.href="https://wa.me/"+window.APP_CONFIG.phoneE164 
    } 
  }
  
  function processData(data){
    var best=[];
    for(var i=0;i<data.categories.length;i++){
      var c=data.categories[i];
      for(var j=0;j<c.items.length;j++){
        best.push(c.items[j]);
        if(best.length>=6) break;
      }
      if(best.length>=6) break;
    }
    renderBestSellers(best);
  }
  
  function init(){ 
    if(window.MENU_DATA){
      processData(window.MENU_DATA);
    } else {
      fetch("data/menu.json").then(function(r){return r.json()}).then(processData).catch(function(e){ console.log("Menu load failed") });
    }
    renderOffers(); 
    setupLinks(); 
    var ig=document.getElementById("instagramLink"); 
    if(ig){ ig.href=window.APP_CONFIG.instagramUrl } 
  }
  
  document.addEventListener("DOMContentLoaded", init)
})()
