;(function(){
  function renderBestSellers(items){ 
    var wrap=document.getElementById("bestSellers"); 
    if(!wrap) return; 
    wrap.innerHTML=""; 
    items.forEach(function(it){ 
      var card=document.createElement("div"); 
      card.className="card"; 
      var img=document.createElement("img"); 
      img.className="card-media"; 
      img.loading="lazy"; 
      img.src=it.img; 
      img.alt=it.name; 
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
      add.className="btn primary"; 
      add.textContent="Add to cart"; 
      add.onclick=function(){ Cart.addItem({ id:it.id, name:it.name, price:it.price }) }; 
      actions.appendChild(add); 
      body.appendChild(name); 
      body.appendChild(desc); 
      body.appendChild(price); 
      body.appendChild(actions); 
      card.appendChild(img); 
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
    data.categories.forEach(function(c){
      c.items.forEach(function(i){ if(i.bestseller) best.push(i) })
    });
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
