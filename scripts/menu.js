;(function(){
  function renderTabs(categories){ 
    var tabs=document.getElementById("categoryTabs"); 
    if(!tabs) return; 
    tabs.innerHTML=""; 
    categories.forEach(function(cat, idx){ 
      var b=document.createElement("button"); 
      b.className="tab"+(idx===0?" active":""); 
      b.textContent=cat.name; 
      b.onclick=function(){ setActiveTab(cat.id); renderGrid(cat) }; 
      tabs.appendChild(b) 
    }); 
    if(categories.length){ renderGrid(categories[0]) } 
  }
  
  function setActiveTab(id){ 
    var tabs=document.querySelectorAll(".tab"); 
    tabs.forEach(function(t){ t.classList.remove("active") }); 
    var found=[].slice.call(document.querySelectorAll(".tab")).find(function(t){ return t.textContent===getCatName(id) }); 
    if(found){ found.classList.add("active") } 
  }
  
  function getCatName(id){ 
    return window.__menuCats.find(function(c){return c.id===id}).name 
  }
  
  function renderGrid(cat){ 
    var grid=document.getElementById("menuGrid"); 
    if(!grid) return; 
    grid.innerHTML=""; 
    cat.items.forEach(function(it){ 
      var card=document.createElement("div"); 
      card.className="card"; 
      var img=document.createElement("img"); 
      img.className="card-media"; 
      img.loading="lazy"; 
      img.src=it.img || "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"; 
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
      grid.appendChild(card) 
    }) 
  }
  
  function init(){ 
    if(window.MENU_DATA){
      window.__menuCats = window.MENU_DATA.categories;
      renderTabs(window.MENU_DATA.categories);
    } else {
      console.error("Menu data not found");
      var grid=document.getElementById("menuGrid");
      if(grid) grid.innerHTML="<p style='padding:16px'>Loading menu...</p>";
      // Fallback to fetch if script didn't load (unlikely but safe)
      fetch("data/menu.json").then(function(r){ return r.json() }).then(function(data){
        window.__menuCats = data.categories;
        renderTabs(data.categories);
      }).catch(function(e){
        if(grid) grid.innerHTML="<p style='padding:16px;color:red'>Could not load menu. Please check internet connection or open via a local server.</p>";
      });
    }
  }
  document.addEventListener("DOMContentLoaded", init)
})()
