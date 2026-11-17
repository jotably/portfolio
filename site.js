
fetch("resume.pdf",{method:"HEAD"}).then(r=>{if(r.ok)document.querySelectorAll(".cv").forEach(e=>e.hidden=false)}).catch(()=>{});
document.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{
  document.querySelectorAll(".chip").forEach(o=>o.setAttribute("aria-pressed",o===c));
  document.querySelectorAll(".card").forEach(d=>{d.hidden=c.dataset.f!=="all"&&d.dataset.t!==c.dataset.f});
}));
const pop=document.getElementById("pop");
if(pop){
  document.querySelectorAll(".card").forEach(card=>card.addEventListener("click",e=>{
    if(e.metaKey||e.ctrlKey||e.shiftKey)return;
    e.preventDefault();
    pop.querySelector(".pop").innerHTML=document.getElementById("q-"+card.dataset.id).innerHTML;
    pop.showModal();
  }));
}
const light=document.getElementById("light");
if(light){
  document.querySelectorAll(".zoom").forEach(f=>f.addEventListener("click",()=>{
    const im=f.querySelector("img"); if(!im||!im.naturalWidth)return;
    light.querySelector("img").src=im.src; light.querySelector("img").alt=im.alt; light.querySelector("p").textContent=im.alt; light.showModal();
  }));
}
document.querySelectorAll("dialog").forEach(d=>{
  d.addEventListener("click",e=>{if(e.target===d)d.close()});
  d.querySelector(".x").addEventListener("click",()=>d.close());
});
