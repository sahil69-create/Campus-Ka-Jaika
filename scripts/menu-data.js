;(function(){
  var IMG_POOL={
    "pizza-double-veg":[
      "https://images.unsplash.com/photo-1594007654729-407eedc4be63?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548365328-76b817d16d87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
    ],
    "pizza-veg-treat":[
      "https://images.unsplash.com/photo-1526378722484-b351dc050f98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546079901-ba3f5a71c8f1?auto=format&fit=crop&w=800&q=80"
    ],
    "pizza-single":[
      "https://images.unsplash.com/photo-1548365328-76b817d16d87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593560708920-6389288e671b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528138223751-0e3b5f4010e1?auto=format&fit=crop&w=800&q=80"
    ],
    "sandwich":[
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556800736-3be2a4b8b5b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553532435-4913f6d2b44e?auto=format&fit=crop&w=800&q=80"
    ],
    "burger":[
      "https://images.unsplash.com/photo-1550547660-9f5c4f0b6032?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80"
    ],
    "pasta":[
      "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473091534298-04dcbce3278e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
    ],
    "maggie":[
      "https://images.unsplash.com/photo-1612874742111-ef5f6c079b5f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1625944225381-592a8dd1bd00?auto=format&fit=crop&w=800&q=80"
    ],
    "fries":[
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550547660-3e6a1a69f86b?auto=format&fit=crop&w=800&q=80"
    ],
    "momos":[
      "https://images.unsplash.com/photo-1579873145064-4ec1d2688b16?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
    ],
    "garlic-bread":[
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=800&q=80"
    ],
    "wrap":[
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
    ],
    "coffee":[
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    "cold-drinks":[
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80"
    ],
    "coolers":[
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    ],
    "shakes":[
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80"
    ],
    "desserts":[
      "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553532435-4913f6d2b44e?auto=format&fit=crop&w=800&q=80"
    ]
  }
  function pickImage(catId, idx){
    var pool=IMG_POOL[catId]||["https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"]
    return pool[idx%pool.length]
  }
  var ITEM_IMG_OVERRIDE={
    "piz-dbl-marg-s":"https://images.unsplash.com/photo-1601924638867-3ec3bde0c9de?auto=format&fit=crop&w=800&q=80",
    "piz-dbl-marg-m":"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "piz-dbl-marg-l":"https://images.unsplash.com/photo-1548365328-76b817d16d87?auto=format&fit=crop&w=800&q=80",
    "piz-veg-lov-s":"https://images.unsplash.com/photo-1526378722484-b351dc050f98?auto=format&fit=crop&w=800&q=80",
    "piz-veg-lov-m":"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    "piz-veg-lov-l":"https://images.unsplash.com/photo-1528138223751-0e3b5f4010e1?auto=format&fit=crop&w=800&q=80",
    "piz-farm-s":"https://images.unsplash.com/photo-1528138223751-0e3b5f4010e1?auto=format&fit=crop&w=800&q=80",
    "piz-farm-m":"https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=80",
    "piz-farm-l":"https://images.unsplash.com/photo-1526378722484-b351dc050f98?auto=format&fit=crop&w=800&q=80"
  }
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
    cat.items.forEach(function(it, idx){ 
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
