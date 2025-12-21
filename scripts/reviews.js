;(function(){
  function loadBaseReviews(){ 
    if(window.REVIEWS_DATA) return Promise.resolve(window.REVIEWS_DATA);
    return fetch("data/reviews.json").then(function(r){ return r.json() }).catch(function(){return []})
  }
  function getSaved(){ try{ return JSON.parse(localStorage.getItem("cka_reviews")||"[]") }catch(e){ return [] } }
  function saveReview(r){ var all=getSaved(); all.unshift(r); localStorage.setItem("cka_reviews", JSON.stringify(all)) }
  function render(list){ var wrap=document.getElementById("reviewsList"); if(!wrap) return; wrap.innerHTML=""; list.forEach(function(r){ var item=document.createElement("div"); item.className="review"; var name=document.createElement("div"); name.textContent=r.name; var stars=document.createElement("div"); stars.className="stars"; stars.textContent="★".repeat(r.rating)+"☆".repeat(5-r.rating); var comment=document.createElement("div"); comment.textContent=r.comment; wrap.appendChild(item); item.appendChild(name); item.appendChild(stars); item.appendChild(comment) }) }
  function avg(list){ if(!list.length) return 0; var s=list.reduce(function(a,r){return a+r.rating},0); return Math.round((s/list.length)*10)/10 }
  function init(){ Promise.all([loadBaseReviews(), Promise.resolve(getSaved())]).then(function(rs){ var all=rs[0].concat(rs[1]); render(all); var stat=document.getElementById("statAvgRating"); if(stat){ stat.textContent=avg(all) } var form=document.getElementById("reviewForm"); if(form){ form.addEventListener("submit", function(e){ e.preventDefault(); var name=document.getElementById("reviewName").value||"Guest"; var rating=parseInt(document.getElementById("reviewRating").value||"5",10); var comment=document.getElementById("reviewComment").value||""; var r={ name:name, rating:rating, comment:comment }; saveReview(r); loadBaseReviews().then(function(base){ render([r].concat(base, getSaved())) }) }) } }) }
  document.addEventListener("DOMContentLoaded", init)
})()
