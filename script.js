
// Simple interactivity: mobile menu & stats toggle
document.addEventListener('DOMContentLoaded', ()=>{
  const hb = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');
  if(hb){
    hb.addEventListener('click', ()=> nav.classList.toggle('open'));
  }
  // nav active link
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(a=>{
    if(a.getAttribute('href')===path) a.classList.add('active');
  });
  // stats toggle
  document.querySelectorAll('[data-toggle-stats]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = document.getElementById(btn.dataset.toggleStats);
      if(target) target.classList.toggle('hidden');
    });
  });
});
