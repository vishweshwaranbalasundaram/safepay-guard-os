const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- open-source line icons (Lucide, MIT) ---------- */
const S='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
const SF='<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">';
const ICONS={
  dna:S+'<path d="M7 3c0 4.5 10 6.5 10 9s-10 4.5-10 9"/><path d="M17 3c0 4.5-10 6.5-10 9s10 4.5 10 9"/><line x1="8.5" y1="7" x2="15.5" y2="7"/><line x1="8.5" y1="17" x2="15.5" y2="17"/></svg>',
  shield:S+'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  radio:S+'<circle cx="12" cy="12" r="2"/><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/><path d="M7.76 16.24a6 6 0 0 1 0-8.49"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
  activity:S+'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  pin:S+'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  smartphone:S+'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  users:S+'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  alert:S+'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  check:S+'<polyline points="20 6 9 17 4 12"/></svg>',
  link:S+'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  globe:S+'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',
  grid:S+'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  building:S+'<path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/></svg>',
  wallet:S+'<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h16v-6"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>',
  route:S+'<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/></svg>',
  volume:S+'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
  play:SF+'<polygon points="6 4 20 12 6 20 6 4"/></svg>'
};
function fillIcons(){document.querySelectorAll('[data-icon]').forEach(el=>{if(!el.dataset.f){el.innerHTML=ICONS[el.dataset.icon]||'';el.dataset.f=1;}});}
fillIcons();

/* ---------- Cinematic intro ---------- */
let introEnded=false;
function revealKick(){document.querySelectorAll('.kick').forEach(el=>{el.style.transition='opacity .8s,transform .8s';el.style.opacity='1';el.style.transform='none';});}
function endIntro(){if(introEnded)return;introEnded=true;const i=document.getElementById('intro');if(i){i.classList.add('gone');setTimeout(()=>{i.style.display='none';},1000);}revealKick();}
setTimeout(endIntro,9000); // hard safety
(function(){
  const intro=document.getElementById('intro');if(!intro){endIntro();return;}
  const cv=document.getElementById('introCv'),ctx=cv.getContext('2d'),textEl=document.getElementById('introText');
  if(!ctx){endIntro();return;}
  const CITIES=[[145.5,124.5],[87.2,263.8],[295.4,212.7],[162.6,288.5],[150.7,352.9],[186.7,351.2]];
  const india=new Path2D('M24.0 193.9 L31.5 192.3 L32.3 187.2 L42.7 187.8 L46.0 189.4 L55.2 185.8 L58.3 188.4 L62.7 186.0 L61.7 183.5 L62.7 181.8 L57.4 171.1 L57.4 167.5 L52.2 166.9 L50.0 163.9 L50.6 155.2 L42.0 151.8 L42.4 146.2 L50.6 135.6 L54.1 133.1 L57.1 134.3 L59.4 137.7 L73.8 134.0 L80.1 122.5 L87.7 118.4 L94.1 105.2 L99.8 102.9 L101.5 101.0 L101.1 97.9 L107.0 91.2 L110.9 89.1 L109.4 86.9 L109.9 77.7 L120.2 71.9 L119.0 69.6 L111.6 67.8 L111.3 64.0 L107.2 63.8 L106.5 60.6 L102.5 57.7 L104.4 53.0 L102.1 49.9 L105.8 46.6 L101.1 44.7 L102.0 42.4 L99.7 40.3 L101.9 36.3 L106.4 34.7 L125.4 38.5 L129.8 36.1 L137.3 35.1 L142.7 31.4 L143.4 29.6 L153.5 24.0 L156.7 24.2 L156.3 27.6 L160.6 37.0 L165.2 38.3 L169.2 41.4 L165.9 45.6 L166.9 53.1 L171.4 57.9 L172.6 67.7 L168.5 69.8 L165.6 66.3 L161.4 67.4 L162.8 71.9 L166.0 75.7 L165.5 78.8 L167.0 80.6 L166.2 84.9 L171.0 83.8 L176.2 89.7 L180.3 90.1 L185.1 92.7 L185.6 95.9 L192.2 98.2 L196.6 101.8 L194.4 102.2 L188.4 108.2 L184.0 121.3 L188.7 124.5 L190.9 123.9 L207.9 135.4 L209.8 134.7 L216.0 138.2 L219.0 138.2 L219.8 140.5 L227.3 142.6 L229.4 141.2 L234.5 142.5 L238.0 140.9 L245.0 143.7 L246.0 147.4 L253.5 151.7 L257.9 150.4 L260.9 153.8 L263.8 153.2 L273.1 156.3 L277.3 154.5 L281.0 157.4 L290.5 157.0 L292.7 152.0 L290.3 146.1 L292.4 134.2 L298.3 132.1 L301.4 133.3 L302.0 135.3 L300.6 140.4 L302.5 143.4 L300.5 145.5 L302.1 148.6 L306.0 150.7 L308.5 150.2 L314.3 152.4 L319.1 151.6 L322.1 149.6 L327.4 151.4 L344.3 150.1 L345.3 149.3 L344.2 146.6 L345.4 143.8 L344.2 141.5 L340.9 141.6 L338.9 139.9 L339.4 136.9 L344.0 137.4 L351.7 135.2 L353.5 133.6 L353.7 131.3 L358.2 128.6 L361.1 124.2 L368.0 122.8 L379.6 114.3 L381.5 116.3 L389.9 118.3 L391.6 115.8 L398.5 112.3 L401.2 115.2 L402.8 115.2 L399.7 117.6 L399.9 120.0 L403.9 118.1 L405.9 122.3 L401.8 127.4 L406.2 126.7 L412.5 128.0 L415.8 130.3 L416.0 134.3 L409.8 139.5 L412.9 146.3 L407.9 143.2 L400.6 144.2 L386.3 153.9 L385.3 157.6 L386.4 162.0 L379.0 172.6 L378.6 174.1 L380.7 176.5 L372.9 193.6 L362.1 190.9 L363.3 196.5 L362.7 204.5 L361.9 206.0 L359.9 206.0 L358.8 210.5 L359.8 217.7 L356.5 221.2 L354.0 219.1 L352.0 221.3 L347.6 196.4 L343.4 196.4 L343.5 199.1 L341.0 202.2 L341.0 205.6 L339.2 206.7 L336.7 203.5 L335.1 204.9 L333.1 197.9 L334.0 193.0 L335.8 190.5 L342.7 189.0 L343.7 186.6 L345.7 185.9 L347.4 179.0 L350.3 179.4 L350.6 178.0 L345.0 174.8 L323.3 174.9 L315.2 173.0 L315.0 163.5 L313.0 159.5 L311.4 162.6 L309.0 162.5 L306.5 161.1 L304.2 156.6 L303.0 157.2 L303.6 159.0 L301.7 158.9 L295.5 154.4 L296.5 157.2 L292.6 161.4 L291.7 164.3 L297.3 169.4 L300.9 170.1 L303.3 173.4 L301.5 174.7 L296.7 174.5 L294.8 179.0 L292.6 178.5 L290.9 182.7 L292.5 184.7 L300.3 187.8 L298.2 196.6 L300.5 200.1 L300.3 202.7 L303.0 203.7 L302.0 205.8 L304.7 217.0 L304.4 221.9 L303.3 221.9 L304.7 226.1 L302.7 226.1 L302.1 224.8 L300.6 227.1 L300.5 220.9 L299.2 219.2 L298.4 226.0 L296.5 226.7 L294.4 224.6 L294.0 226.5 L292.2 226.3 L291.3 225.5 L293.2 219.0 L289.8 215.6 L290.0 217.3 L292.7 219.2 L289.9 223.6 L286.2 226.1 L278.5 228.3 L275.2 232.2 L276.8 240.0 L273.8 245.7 L268.7 250.1 L267.0 249.4 L267.9 250.4 L266.6 251.7 L258.0 254.7 L256.9 254.6 L257.8 253.8 L257.0 251.9 L253.6 253.8 L252.7 256.1 L255.2 254.9 L256.2 255.7 L247.2 263.0 L238.2 275.1 L232.2 278.4 L226.0 285.1 L214.8 292.6 L213.4 300.4 L206.7 303.8 L200.3 303.7 L196.2 312.1 L191.7 310.2 L187.0 312.8 L183.8 322.1 L185.4 330.8 L184.5 334.7 L187.2 345.3 L185.1 342.0 L183.9 343.6 L187.6 347.1 L186.1 356.9 L181.1 367.2 L180.3 375.1 L178.9 377.1 L180.3 376.7 L181.0 378.7 L180.9 391.5 L173.8 392.5 L168.8 402.6 L169.9 405.9 L175.1 408.0 L169.3 406.9 L161.8 409.3 L158.8 412.4 L157.0 419.8 L149.7 424.3 L143.6 420.8 L136.7 412.2 L133.7 404.2 L132.5 397.3 L133.9 398.7 L134.3 402.9 L135.5 403.0 L133.9 397.4 L131.9 395.0 L125.6 376.3 L118.5 366.2 L115.1 358.8 L107.5 330.6 L101.7 322.1 L99.7 317.4 L101.5 317.4 L99.3 314.9 L100.2 313.6 L98.1 312.9 L93.5 301.9 L91.1 284.9 L87.3 270.0 L89.0 264.5 L88.6 262.6 L86.8 265.2 L86.3 263.7 L86.4 260.5 L88.8 260.8 L86.1 259.5 L84.5 252.7 L87.5 240.4 L86.5 233.9 L84.8 233.0 L83.9 230.2 L85.4 228.8 L83.8 228.9 L90.5 224.7 L82.8 225.5 L84.9 221.4 L82.6 221.4 L83.0 218.7 L86.4 217.6 L78.0 217.1 L79.7 218.3 L79.2 219.7 L76.0 223.6 L78.4 225.0 L78.9 227.9 L75.7 233.4 L62.4 239.4 L55.2 238.0 L49.1 233.0 L34.8 216.8 L35.9 214.6 L38.9 216.9 L51.0 212.7 L55.6 206.4 L55.2 205.1 L53.2 207.3 L50.2 207.2 L44.2 209.9 L38.4 208.6 L30.4 203.7 L27.4 198.1 L32.2 194.0 L24.9 197.7 L24.0 193.9 Z');
  let W,H,DPR=Math.min(2,devicePixelRatio||1),cx,cy,R;
  function size(){W=cv.width=innerWidth*DPR;H=cv.height=innerHeight*DPR;cx=W/2;cy=H/2;R=Math.min(W,H)*0.3;}
  size();var _lw=innerWidth;addEventListener('resize',function(){if(innerWidth!==_lw){_lw=innerWidth;size();}});
  const ease=p=>1-Math.pow(1-p,3);
  function glow(x,y,r,c){const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,c);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill();}
  function ring(x,y,r,c,w){ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.strokeStyle=c;ctx.lineWidth=w;ctx.stroke();}
  const L=(a,b,t)=>Math.round(a+(b-a)*t);
  const col3=(A,B,t)=>L(A[0],B[0],t)+','+L(A[1],B[1],t)+','+L(A[2],B[2],t);
  function withIndia(fn){ctx.save();ctx.translate(cx,cy);const s=(2*R*0.85)/448;ctx.scale(s,s);ctx.translate(-220,-224);fn(s);ctx.restore();}
  function drawIndia(alpha,stroke,fill){withIndia(s=>{ctx.globalAlpha=alpha;if(fill){ctx.fillStyle=fill;ctx.fill(india);}ctx.lineWidth=1.7/s;ctx.strokeStyle=stroke;ctx.stroke(india);ctx.globalAlpha=1;});}
  function drawCities(alpha,color){withIndia(()=>{ctx.globalAlpha=alpha;ctx.fillStyle=color;ctx.shadowBlur=10;ctx.shadowColor=color;CITIES.forEach(c=>{ctx.beginPath();ctx.arc(c[0],c[1],4.5,0,7);ctx.fill();});ctx.shadowBlur=0;ctx.globalAlpha=1;});}
  const start=performance.now();
  function loop(now){
    if(introEnded)return;
    const t=now-start;ctx.clearRect(0,0,W,H);
    if(t<900){ // particle awakens
      const p=t/900;glow(cx,cy,(3+p*p*70)*DPR,'rgba(0,245,255,'+(0.35+0.65*p)+')');
    }else if(t<2200){ // sphere + India emerge (calm cyan) — WONDER
      const p=(t-900)/1300,e=ease(p);
      glow(cx,cy,R*0.9,'rgba(0,245,255,'+(0.06+0.06*e)+')');
      ring(cx,cy,R*(0.45+0.55*e),'rgba(0,245,255,'+(0.28+0.32*p)+')',2*DPR);
      drawIndia(e*0.95,'rgba(120,220,255,'+e+')',null);drawCities(e,'rgba(0,245,255,.9)');
    }else if(t<3400){ // red scam wave cracks across — CONCERN
      const p=(t-2200)/1200;
      drawIndia(0.95,'rgba(255,77,109,'+(0.6+0.4*p)+')','rgba(255,77,109,'+(0.05+0.15*p)+')');
      drawCities(1,'rgba(255,77,109,.95)');
      for(let k=0;k<3;k++){const pr=(p+k/3)%1;ring(cx,cy,R*0.2+pr*R,'rgba(255,77,109,'+(0.5*(1-pr))+')',2*DPR);}
      glow(cx,cy,R*0.8,'rgba(255,77,109,'+(0.05*p)+')');
    }else if(t<4700){ // cyan shield repairs — CONFIDENCE
      const p=(t-3400)/1300,m=ease(p),c=col3([255,77,109],[0,245,255],m);
      drawIndia(0.95,'rgba('+c+',0.82)','rgba('+c+','+(0.15*(1-m)+0.1*m)+')');
      drawCities(1,'rgba('+col3([255,77,109],[34,197,94],m)+',1)');
      ring(cx,cy,R*0.2+m*R*1.05,'rgba(0,245,255,'+(0.6*(1-m*0.4))+')',3*DPR);
      glow(cx,cy,R*0.7,'rgba(0,245,255,'+(0.12*m)+')');
    }else if(t<6100){ // calm + logo — HOPE
      const p=(t-4700)/1400;
      drawIndia(0.95-0.3*p,'rgba(0,245,255,'+(0.7-0.35*p)+')','rgba(0,245,255,0.07)');
      drawCities(1,'rgba(34,197,94,1)');glow(cx,cy,R*0.65,'rgba(0,245,255,'+(0.1*(1-p))+')');
      if(p>0.12)textEl.classList.add('show');
    }else{endIntro();return;}
    requestAnimationFrame(loop);
  }
  if(RM){textEl.classList.add('show');setTimeout(endIntro,1400);}else{requestAnimationFrame(loop);}
})();

/* ---------- Lenis smooth scroll (guarded) ---------- */
let lenis=null;
try{ if(window.Lenis && !RM && !('ontouchstart' in window) && innerWidth>820){ lenis=new Lenis({lerp:.09,smoothWheel:true,wheelMultiplier:1}); function raf(t){lenis.raf(t);requestAnimationFrame(raf);} requestAnimationFrame(raf);} }catch(e){}
function goTo(el){ if(typeof el==='string')el=document.querySelector(el); if(!el)return; if(lenis)lenis.scrollTo(el,{offset:-40}); else el.scrollIntoView({behavior:'smooth',block:'start'}); }
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=a.getAttribute('href');if(t.length>1){e.preventDefault();goTo(t);}}));

/* ---------- nav solidify ---------- */
addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('solid',scrollY>40);},{passive:true});

/* ---------- cursor spotlight + subtle tilt ---------- */
const fine=matchMedia('(pointer:fine)').matches;
if(fine && !RM){
  addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',e.clientX+'px');document.documentElement.style.setProperty('--my',e.clientY+'px');});
  document.querySelectorAll('.tilt').forEach(c=>{
    c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(1000px) rotateY('+px*3+'deg) rotateX('+(-py*3)+'deg)';});
    c.addEventListener('pointerleave',()=>c.style.transform='');
  });
}

/* ---------- hero kicker intro ---------- */
window.addEventListener('load',()=>{
  const ks=['k1','k2','k3','k4','k5','k6'].map(i=>document.getElementById(i));
  ks.forEach((el,i)=>{ if(!el)return; setTimeout(()=>{el.style.transition='opacity .8s,transform .8s';el.style.opacity='1';el.style.transform='none';}, 1350+i*130); });
});

/* ---------- reveals (base, dependency-free) ---------- */
const io=new IntersectionObserver((es)=>{es.forEach(e=>{ if(e.isIntersecting){
  e.target.classList.add('in');
  const st=e.target.querySelector('.stagger')||(e.target.classList.contains('stagger')?e.target:null);
  if(st){[...st.children].forEach((c,i)=>setTimeout(()=>{c.style.opacity=1;c.style.transform='none';},i*90));}
  e.target.querySelectorAll('[data-count]').forEach(c=>{if(!c.dataset.done){c.dataset.done=1;c.dataset.cur=c.dataset.count;runCounter(c);}});
  if(e.target.id==='immune')spreadImmune();
  if(e.target.id==='timemachine')playTimeMachine();
  if(e.target.id==='vision'){
    e.target.querySelectorAll('.line').forEach((l,i)=>setTimeout(()=>l.classList.add('in'),i*300));
    const vcs=e.target.querySelectorAll('.vc');vcs.forEach((c,i)=>setTimeout(()=>c.classList.add('on'),1000+i*170));
    setTimeout(()=>{const m=document.getElementById('mantra');if(m)m.classList.add('in');},2100);
  }
  io.unobserve(e.target);
}});},{threshold:.16});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));

/* ---------- GSAP parallax (guarded enhancement) ---------- */
try{ if(window.gsap && window.ScrollTrigger && !RM && innerWidth>820){
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('[data-speed]').forEach(el=>{
    const sp=parseFloat(el.dataset.speed);
    gsap.to(el,{yPercent:sp*100,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}});
  });
}}catch(e){}

/* ================= LIVING PARTICLE FIELD + FLOATING ORBS ================= */
(function(){
  const cv=document.getElementById('stars'),ctx=cv.getContext('2d');
  let W,H,ps,orbs,mx=-9999,my=-9999,DPR=Math.min(2,devicePixelRatio||1);
  addEventListener('pointermove',e=>{mx=e.clientX*DPR;my=e.clientY*DPR;});
  addEventListener('pointerleave',()=>{mx=-9999;my=-9999;});
  const OC=[[0,245,255],[79,140,255],[139,92,246],[34,197,94]];
  function size(){
    W=cv.width=innerWidth*DPR;H=cv.height=innerHeight*DPR;cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';
    const n=Math.min(110,Math.floor(innerWidth/13));
    ps=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*1.8+.7)*DPR,vx:(Math.random()-.5)*.24*DPR,vy:(Math.random()-.5)*.24*DPR,ph:Math.random()*6.283}));
    orbs=Array.from({length:6},(_,i)=>({x:Math.random()*W,y:Math.random()*H,r:(130+Math.random()*170)*DPR,vx:(Math.random()-.5)*.16*DPR,vy:(Math.random()-.5)*.16*DPR,c:OC[i%OC.length]}));
  }
  size();addEventListener('resize',size);
  const LINK=132*DPR;
  function frame(t){
    ctx.clearRect(0,0,W,H);
    // floating glowing orbs (depth)
    ctx.globalCompositeOperation='lighter';
    for(const o of orbs){
      o.x+=o.vx;o.y+=o.vy;
      if(o.x<-o.r)o.x=W+o.r;if(o.x>W+o.r)o.x=-o.r;if(o.y<-o.r)o.y=H+o.r;if(o.y>H+o.r)o.y=-o.r;
      const g=ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r);
      g.addColorStop(0,'rgba('+o.c[0]+','+o.c[1]+','+o.c[2]+',0.09)');
      g.addColorStop(1,'rgba('+o.c[0]+','+o.c[1]+','+o.c[2]+',0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,7);ctx.fill();
    }
    ctx.globalCompositeOperation='source-over';
    // move particles
    for(const p of ps){
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      if(mx>-9999){const dx=p.x-mx,dy=p.y-my,d=Math.hypot(dx,dy);if(d<170*DPR&&d>1){p.x+=dx/d*0.55;p.y+=dy/d*0.55;}}
    }
    // links
    for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){const a=ps[i],b=ps[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<LINK){ctx.strokeStyle='rgba(90,175,255,'+(1-d/LINK)*0.16+')';ctx.lineWidth=.7*DPR;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}
    // glowing nodes (twinkle, cheap halo)
    for(const p of ps){
      const tw=.5+.5*Math.sin(p.ph+(t||0)*0.002);
      ctx.beginPath();ctx.arc(p.x,p.y,p.r*2.4,0,7);ctx.fillStyle='rgba(120,205,255,'+(0.05+tw*0.06)+')';ctx.fill();
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fillStyle='rgba(165,228,255,'+(0.4+tw*0.5)+')';ctx.fill();
    }
  }
  if(RM){frame(0);return;}
  (function loop(t){frame(t);requestAnimationFrame(loop);})(0);
})();

/* ================= LIVING DIGITAL TWIN OF INDIA ================= */
(function(){
  const cv=document.getElementById('globe');if(!cv)return;const ctx=cv.getContext('2d');
  const DPR=Math.min(2,devicePixelRatio||1);
  const india=new Path2D('M24.0 193.9 L31.5 192.3 L32.3 187.2 L42.7 187.8 L46.0 189.4 L55.2 185.8 L58.3 188.4 L62.7 186.0 L61.7 183.5 L62.7 181.8 L57.4 171.1 L57.4 167.5 L52.2 166.9 L50.0 163.9 L50.6 155.2 L42.0 151.8 L42.4 146.2 L50.6 135.6 L54.1 133.1 L57.1 134.3 L59.4 137.7 L73.8 134.0 L80.1 122.5 L87.7 118.4 L94.1 105.2 L99.8 102.9 L101.5 101.0 L101.1 97.9 L107.0 91.2 L110.9 89.1 L109.4 86.9 L109.9 77.7 L120.2 71.9 L119.0 69.6 L111.6 67.8 L111.3 64.0 L107.2 63.8 L106.5 60.6 L102.5 57.7 L104.4 53.0 L102.1 49.9 L105.8 46.6 L101.1 44.7 L102.0 42.4 L99.7 40.3 L101.9 36.3 L106.4 34.7 L125.4 38.5 L129.8 36.1 L137.3 35.1 L142.7 31.4 L143.4 29.6 L153.5 24.0 L156.7 24.2 L156.3 27.6 L160.6 37.0 L165.2 38.3 L169.2 41.4 L165.9 45.6 L166.9 53.1 L171.4 57.9 L172.6 67.7 L168.5 69.8 L165.6 66.3 L161.4 67.4 L162.8 71.9 L166.0 75.7 L165.5 78.8 L167.0 80.6 L166.2 84.9 L171.0 83.8 L176.2 89.7 L180.3 90.1 L185.1 92.7 L185.6 95.9 L192.2 98.2 L196.6 101.8 L194.4 102.2 L188.4 108.2 L184.0 121.3 L188.7 124.5 L190.9 123.9 L207.9 135.4 L209.8 134.7 L216.0 138.2 L219.0 138.2 L219.8 140.5 L227.3 142.6 L229.4 141.2 L234.5 142.5 L238.0 140.9 L245.0 143.7 L246.0 147.4 L253.5 151.7 L257.9 150.4 L260.9 153.8 L263.8 153.2 L273.1 156.3 L277.3 154.5 L281.0 157.4 L290.5 157.0 L292.7 152.0 L290.3 146.1 L292.4 134.2 L298.3 132.1 L301.4 133.3 L302.0 135.3 L300.6 140.4 L302.5 143.4 L300.5 145.5 L302.1 148.6 L306.0 150.7 L308.5 150.2 L314.3 152.4 L319.1 151.6 L322.1 149.6 L327.4 151.4 L344.3 150.1 L345.3 149.3 L344.2 146.6 L345.4 143.8 L344.2 141.5 L340.9 141.6 L338.9 139.9 L339.4 136.9 L344.0 137.4 L351.7 135.2 L353.5 133.6 L353.7 131.3 L358.2 128.6 L361.1 124.2 L368.0 122.8 L379.6 114.3 L381.5 116.3 L389.9 118.3 L391.6 115.8 L398.5 112.3 L401.2 115.2 L402.8 115.2 L399.7 117.6 L399.9 120.0 L403.9 118.1 L405.9 122.3 L401.8 127.4 L406.2 126.7 L412.5 128.0 L415.8 130.3 L416.0 134.3 L409.8 139.5 L412.9 146.3 L407.9 143.2 L400.6 144.2 L386.3 153.9 L385.3 157.6 L386.4 162.0 L379.0 172.6 L378.6 174.1 L380.7 176.5 L372.9 193.6 L362.1 190.9 L363.3 196.5 L362.7 204.5 L361.9 206.0 L359.9 206.0 L358.8 210.5 L359.8 217.7 L356.5 221.2 L354.0 219.1 L352.0 221.3 L347.6 196.4 L343.4 196.4 L343.5 199.1 L341.0 202.2 L341.0 205.6 L339.2 206.7 L336.7 203.5 L335.1 204.9 L333.1 197.9 L334.0 193.0 L335.8 190.5 L342.7 189.0 L343.7 186.6 L345.7 185.9 L347.4 179.0 L350.3 179.4 L350.6 178.0 L345.0 174.8 L323.3 174.9 L315.2 173.0 L315.0 163.5 L313.0 159.5 L311.4 162.6 L309.0 162.5 L306.5 161.1 L304.2 156.6 L303.0 157.2 L303.6 159.0 L301.7 158.9 L295.5 154.4 L296.5 157.2 L292.6 161.4 L291.7 164.3 L297.3 169.4 L300.9 170.1 L303.3 173.4 L301.5 174.7 L296.7 174.5 L294.8 179.0 L292.6 178.5 L290.9 182.7 L292.5 184.7 L300.3 187.8 L298.2 196.6 L300.5 200.1 L300.3 202.7 L303.0 203.7 L302.0 205.8 L304.7 217.0 L304.4 221.9 L303.3 221.9 L304.7 226.1 L302.7 226.1 L302.1 224.8 L300.6 227.1 L300.5 220.9 L299.2 219.2 L298.4 226.0 L296.5 226.7 L294.4 224.6 L294.0 226.5 L292.2 226.3 L291.3 225.5 L293.2 219.0 L289.8 215.6 L290.0 217.3 L292.7 219.2 L289.9 223.6 L286.2 226.1 L278.5 228.3 L275.2 232.2 L276.8 240.0 L273.8 245.7 L268.7 250.1 L267.0 249.4 L267.9 250.4 L266.6 251.7 L258.0 254.7 L256.9 254.6 L257.8 253.8 L257.0 251.9 L253.6 253.8 L252.7 256.1 L255.2 254.9 L256.2 255.7 L247.2 263.0 L238.2 275.1 L232.2 278.4 L226.0 285.1 L214.8 292.6 L213.4 300.4 L206.7 303.8 L200.3 303.7 L196.2 312.1 L191.7 310.2 L187.0 312.8 L183.8 322.1 L185.4 330.8 L184.5 334.7 L187.2 345.3 L185.1 342.0 L183.9 343.6 L187.6 347.1 L186.1 356.9 L181.1 367.2 L180.3 375.1 L178.9 377.1 L180.3 376.7 L181.0 378.7 L180.9 391.5 L173.8 392.5 L168.8 402.6 L169.9 405.9 L175.1 408.0 L169.3 406.9 L161.8 409.3 L158.8 412.4 L157.0 419.8 L149.7 424.3 L143.6 420.8 L136.7 412.2 L133.7 404.2 L132.5 397.3 L133.9 398.7 L134.3 402.9 L135.5 403.0 L133.9 397.4 L131.9 395.0 L125.6 376.3 L118.5 366.2 L115.1 358.8 L107.5 330.6 L101.7 322.1 L99.7 317.4 L101.5 317.4 L99.3 314.9 L100.2 313.6 L98.1 312.9 L93.5 301.9 L91.1 284.9 L87.3 270.0 L89.0 264.5 L88.6 262.6 L86.8 265.2 L86.3 263.7 L86.4 260.5 L88.8 260.8 L86.1 259.5 L84.5 252.7 L87.5 240.4 L86.5 233.9 L84.8 233.0 L83.9 230.2 L85.4 228.8 L83.8 228.9 L90.5 224.7 L82.8 225.5 L84.9 221.4 L82.6 221.4 L83.0 218.7 L86.4 217.6 L78.0 217.1 L79.7 218.3 L79.2 219.7 L76.0 223.6 L78.4 225.0 L78.9 227.9 L75.7 233.4 L62.4 239.4 L55.2 238.0 L49.1 233.0 L34.8 216.8 L35.9 214.6 L38.9 216.9 L51.0 212.7 L55.6 206.4 L55.2 205.1 L53.2 207.3 L50.2 207.2 L44.2 209.9 L38.4 208.6 L30.4 203.7 L27.4 198.1 L32.2 194.0 L24.9 197.7 L24.0 193.9 Z');
  const CITY=[[145.5,124.5],[87.2,263.8],[295.4,212.7],[162.6,288.5],[150.7,352.9],[186.7,351.2]];
  let W,H,s,ox,oy,pts=[],cityPts=[],waves=[];
  function build(){
    const rect=cv.getBoundingClientRect();W=cv.width=rect.width*DPR;H=cv.height=rect.height*DPR;
    const pad=0.05;s=Math.min(W*(1-2*pad)/440,H*(1-2*pad)/448);ox=(W-440*s)/2;oy=(H-448*s)/2;
    ctx.setTransform(1,0,0,1,0,0);
    const raw=[],step=6;
    for(let y=0;y<448;y+=step)for(let x=0;x<440;x+=step){if(ctx.isPointInPath(india,x,y))raw.push([x+(Math.random()-.5)*step,y+(Math.random()-.5)*step]);}
    const target=Math.min(540,raw.length);pts=[];
    for(let i=0;i<target;i++){const p=raw[(Math.random()*raw.length)|0];pts.push({rx:p[0],ry:p[1],ph:Math.random()*6.283});}
    cityPts=CITY.map(c=>({rx:c[0],ry:c[1],ph:Math.random()*6.283}));
  }
  build();addEventListener('resize',build);
  let mx=0,my=0,tmx=0,tmy=0;
  addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();tmx=((e.clientX-r.left)/r.width-.5);tmy=((e.clientY-r.top)/r.height-.5);});
  const X=rx=>ox+rx*s,Y=ry=>oy+ry*s;
  let last=performance.now(),atkT=1200,healT=2600;
  function loop(now){
    const dt=now-last;last=now;
    mx+=(tmx-mx)*.05;my+=(tmy-my)*.05;
    ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
    const sx=mx*14*DPR,sy=my*14*DPR;
    if(!RM){
      atkT-=dt;if(atkT<=0){atkT=3600+Math.random()*2400;const c=CITY[(Math.random()*CITY.length)|0];waves.push({x:X(c[0])+sx,y:Y(c[1])+sy,t0:now,dur:1900,col:'r'});}
      healT-=dt;if(healT<=0){healT=3600+Math.random()*2400;waves.push({x:ox+220*s+sx,y:oy+224*s+sy,t0:now,dur:2300,col:'c'});}
    }
    waves=waves.filter(w=>now-w.t0<w.dur);
    const gx=ox+220*s+sx,gy=oy+224*s+sy;
    const halo=ctx.createRadialGradient(gx,gy,0,gx,gy,240*s);halo.addColorStop(0,'rgba(0,245,255,.05)');halo.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=halo;ctx.fillRect(0,0,W,H);
    const maxR=Math.max(W,H)*.55,band=16*DPR;
    for(const p of pts){
      const px=X(p.rx)+sx,py=Y(p.ry)+sy,tw=.35+.45*Math.sin(p.ph+now*.002);
      let cr=120,cg=220,cb=255,a=tw*.7,rad=1.5*DPR;
      for(const w of waves){const wr=(now-w.t0)/w.dur*maxR,d=Math.hypot(px-w.x,py-w.y);
        if(Math.abs(d-wr)<band){const inten=1-Math.abs(d-wr)/band;
          if(w.col==='r'){cr=255;cg=77;cb=109;a=Math.max(a,inten);rad=2.4*DPR;}else{cr=90;cg=255;cb=210;a=Math.max(a,inten);rad=2.2*DPR;}}}
      ctx.beginPath();ctx.arc(px,py,rad,0,7);ctx.fillStyle='rgba('+cr+','+cg+','+cb+','+a+')';ctx.fill();
    }
    for(const c of cityPts){const px=X(c.rx)+sx,py=Y(c.ry)+sy,pulse=.6+.4*Math.sin(c.ph+now*.004);
      ctx.shadowBlur=12;ctx.shadowColor='rgba(250,204,21,.8)';ctx.beginPath();ctx.arc(px,py,2.8*DPR,0,7);ctx.fillStyle='rgba(250,204,21,'+(.6+pulse*.4)+')';ctx.fill();ctx.shadowBlur=0;}
    for(const w of waves){const wr=(now-w.t0)/w.dur*maxR,a=(1-(now-w.t0)/w.dur)*.5;
      ctx.beginPath();ctx.arc(w.x,w.y,wr,0,7);ctx.strokeStyle=(w.col==='r'?'rgba(255,77,109,':'rgba(0,245,255,')+a+')';ctx.lineWidth=2*DPR;ctx.stroke();}
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

/* ================= WAVE SVG (problem) ================= */
(function(){
  const nodes=document.getElementById('wnodes'),lines=document.getElementById('wlines');if(!nodes)return;
  const cx=150,cy=150,targets=[[430,60],[560,110],[660,80],[760,150],[820,230],[700,250],[560,220],[440,260],[330,210],[300,90]];
  targets.forEach((t,i)=>{
    const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',cx);l.setAttribute('y1',cy);l.setAttribute('x2',t[0]);l.setAttribute('y2',t[1]);l.setAttribute('class','wline');lines.appendChild(l);
    const c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx',t[0]);c.setAttribute('cy',t[1]);c.setAttribute('r',5);c.setAttribute('class','wnode');nodes.appendChild(c);
  });
})();

/* ================= IMMUNE NETWORK ================= */
let immuneNodes=[];
(function(){
  const svg=document.getElementById('immunesvg'),lg=document.getElementById('ilinks'),ng=document.getElementById('inodes');if(!svg)return;
  const cols=11,rows=5,W=900,H=400,pad=70;const pos=[];
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){pos.push({x:pad+c*((W-2*pad)/(cols-1))+(r%2?18:0),y:pad+r*((H-2*pad)/(rows-1)),i:pos.length});}
  // links to neighbors
  pos.forEach(a=>pos.forEach(b=>{if(b.i>a.i){const d=Math.hypot(a.x-b.x,a.y-b.y);if(d<150){const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',a.x);l.setAttribute('y1',a.y);l.setAttribute('x2',b.x);l.setAttribute('y2',b.y);l.setAttribute('class','nlink');lg.appendChild(l);}}}));
  pos.forEach(p=>{const c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx',p.x);c.setAttribute('cy',p.y);c.setAttribute('r',6);c.setAttribute('class','nnode');c.dataset.x=p.x;c.dataset.y=p.y;ng.appendChild(c);immuneNodes.push(c);});
})();
function spreadImmune(){
  if(!immuneNodes.length)return;
  const src=immuneNodes[Math.floor(immuneNodes.length/2)+3];src.classList.add('src');
  const sx=+src.dataset.x,sy=+src.dataset.y;
  immuneNodes.forEach(n=>{if(n===src)return;const d=Math.hypot(+n.dataset.x-sx,+n.dataset.y-sy);setTimeout(()=>n.classList.add('on'),300+d*4);});
}

/* ================= SCAM DNA ENGINE ================= */
const TRAITS={
  emotion:['won','win','prize','lottery','reward','congratulations','free','gift','lucky','selected','claim','kbc','crore','lakh','invest','profit','double','earn','job','task','loan','offer'],
  urgency:['urgent','immediately','now','today','expire','expires','expiry','suspend','suspension','blocked','24','act','last','deadline','avoid','final','limited','penalty','fine'],
  fakeid:['kyc','bank','sbi','hdfc','icici','axis','rbi','account','verify','customer care','official','update','department','police','cbi','income tax','court','courier','parcel','fedex','customs','electricity'],
  link:['http','https','bit.ly','tinyurl','click','link','www','.xyz','.top','apk','install','download','qr','scan'],
  payment:['upi','pin','otp','collect','pay','₹','rs.','rs ','refund','cashback','autopay','debit','fee','processing','transfer','receive']
};
const WEIGHT={emotion:.12,urgency:.2,fakeid:.24,link:.2,payment:.24};
const SAMPLES=[
  'URGENT: Your SBI account KYC expires today. Verify now to avoid suspension → http://sbi-kyc-verify.xyz  Enter your UPI PIN to confirm.',
  'Congratulations! You WON ₹25,00,000 in the KBC lottery. To claim your prize, pay a ₹4,500 processing fee via UPI now. Reply CLAIM.',
  'Scan this QR to RECEIVE your ₹2,000 refund. Approve the collect request and enter your UPI PIN to confirm receipt.',
  'Hey! Are we still on for coffee at 6pm today? Let me know.'
];
const SENDERS=['+91 98••• ••210 · "SBI Bank"','+91 90••• ••774 · "KBC Lottery"','+91 87••• ••019 · "Refund Dept"','Priya · Contacts'];
function scoreMessage(txt){const t=' '+txt.toLowerCase()+' ';const s={};for(const k in TRAITS){let h=0;TRAITS[k].forEach(w=>{if(t.includes(w))h++;});s[k]=h===0?0:Math.min(100,40+h*22+(h>=3?8:0));}let r=0;for(const k in WEIGHT)r+=s[k]*WEIGHT[k];return{scores:s,risk:Math.round(Math.min(99,r))};}
function animNum(el,to,dur){const start=parseFloat((el.textContent||'0').replace(/[^\d.]/g,''))||0,t0=performance.now();(function tick(now){const p=Math.min(1,(now-t0)/dur),v=Math.round(start+(to-start)*(p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2));el.textContent=v;if(p<1)requestAnimationFrame(tick);})(t0);}
function analyze(cb){
  const txt=document.getElementById('input').value||'';
  const vhead=document.getElementById('vhead'),vsub=document.getElementById('vsub'),badge=document.getElementById('badge');
  vhead.textContent='Analyzing…';vsub.textContent='Sequencing scam DNA…';badge.style.display='none';
  const {scores,risk}=scoreMessage(txt);
  document.querySelectorAll('#dnabars .fill').forEach(f=>f.style.width=scores[f.dataset.k]+'%');
  document.querySelectorAll('#dnabars .val').forEach(v=>animNum(v,scores[v.dataset.v],700));
  setTimeout(()=>{
    const g=document.getElementById('gauge');g.style.setProperty('--v',risk);animNum(document.getElementById('riskval'),risk,800);
    const scam=risk>=55;
    if(scam){g.style.background='conic-gradient(var(--danger) calc(var(--v)*1%),rgba(255,255,255,.07) 0)';
      vhead.innerHTML='<span class="ic-sm">'+ICONS.alert+'</span>'+tt('scamHead');vsub.textContent='Do not pay, click, or share your PIN. This matches a known fraud pattern.';
      badge.className='badge scam';badge.innerHTML='<span class="ic-sm">'+ICONS.dna+'</span> Antibody generated · nearby users being warned';badge.style.display='inline-flex';
    }else{g.style.background='conic-gradient(var(--green) calc(var(--v)*1%),rgba(255,255,255,.07) 0)';
      vhead.innerHTML='<span class="ic-sm">'+ICONS.check+'</span>'+tt('safeHead');vsub.textContent='No strong fraud signals found. Stay alert if it asks for money or a PIN.';
      badge.className='badge safe';badge.innerHTML='<span class="ic-sm">'+ICONS.check+'</span> No antibody needed';badge.style.display='inline-flex';
    }
    lastScores=scores;lastScam=scam;lastRisk=risk;lastMsg=txt;lastType=scamType(scores);
    const rr=document.getElementById('reportRow');if(rr)rr.style.display=scam?'flex':'none';
    if(grandmaOn)applyVsub();
    if(cb)cb(scam,risk);
  },760);
}
function loadSample(i){document.getElementById('input').value=SAMPLES[i];document.getElementById('smsbody').textContent=SAMPLES[i];document.getElementById('smswho').textContent=SENDERS[i];analyze();}
function clearAll(){document.getElementById('input').value='';document.querySelectorAll('#dnabars .fill').forEach(f=>f.style.width='0');document.querySelectorAll('#dnabars .val').forEach(v=>v.textContent='0');document.getElementById('gauge').style.setProperty('--v',0);document.getElementById('riskval').textContent='0';document.getElementById('vhead').textContent='Awaiting message';document.getElementById('vsub').textContent='Tap “Sequence it” to run the DNA analysis.';document.getElementById('badge').style.display='none';}

/* ---------- toasts + counters ---------- */
function toast(title,sub,warn){const t=document.createElement('div');t.className='toast'+(warn?' warnt':'');t.innerHTML='<b>'+title+'</b><small>'+sub+'</small>';document.getElementById('toasts').appendChild(t);setTimeout(()=>{t.style.transition='.4s';t.style.opacity=0;t.style.transform='translateX(30px)';setTimeout(()=>t.remove(),400);},4200);}
function fmtMoney(v){return '₹'+(v/10000000).toFixed(1)+' Cr';}
function runCounter(el){const to=+el.dataset.count,money=el.dataset.money,suf=el.dataset.suffix||'',t0=performance.now(),dur=1600;(function tick(now){const p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3),v=Math.round(to*e);el.textContent=money?fmtMoney(v):(v.toLocaleString('en-IN')+suf);if(p<1)requestAnimationFrame(tick);})(t0);}
function bumpCounter(el,add){const cur=+(el.dataset.cur||el.dataset.count),to=cur+add;el.dataset.cur=to;const money=el.dataset.money,t0=performance.now(),from=cur,dur=900;(function tick(now){const p=Math.min(1,(now-t0)/dur),v=Math.round(from+(to-from)*(1-Math.pow(1-p,3)));el.textContent=money?fmtMoney(v):v.toLocaleString('en-IN');if(p<1)requestAnimationFrame(tick);})(t0);}

/* ---------- city helpers ---------- */
function city(n){return document.querySelector('.city[data-city="'+n+'"]');}
function bumpOutbreak(n,add){const el=document.querySelector('.cnt[data-c="'+n+'"]');if(el)animNum(el,(+el.textContent)+add,700);}

/* ================= CINEMATIC LIVE DEMO ================= */
let demoRunning=false;
function runDemo(){
  if(demoRunning)return;demoRunning=true;
  document.querySelectorAll('.city').forEach(c=>c.classList.remove('hot','safe'));
  goTo('#dna');setTimeout(()=>loadSample(0),700);
  setTimeout(()=>toast('<span class="ic-sm">'+ICONS.dna+'</span> Scam DNA sequenced','KYC-expiry pattern · 5 traits matched'),1700);
  setTimeout(()=>{goTo('#radar');const c=city('chennai');if(c)c.classList.add('hot');toast('<span class="ic-sm">'+ICONS.radio+'</span> New outbreak · Chennai','Refund/KYC wave forming',true);bumpOutbreak('chennai',61);},3200);
  setTimeout(()=>{['bengaluru','hyderabad','mumbai'].forEach((n,i)=>setTimeout(()=>{const c=city(n);if(c){c.classList.remove('hot');c.classList.add('safe');}toast('<span class="ic-sm">'+ICONS.shield+'</span> '+n[0].toUpperCase()+n.slice(1)+' immunized','Nearby users warned before contact');},i*650));},5000);
  setTimeout(()=>{goTo('#immune');},6800);
  setTimeout(()=>{goTo('#impact');bumpCounter(document.getElementById('c-people'),8421);bumpCounter(document.getElementById('c-money'),32000000);bumpCounter(document.getElementById('c-reports'),1);},8600);
  setTimeout(()=>{goTo('#arch');const a=document.getElementById('archflow');a.classList.add('flowing');setTimeout(()=>a.classList.remove('flowing'),2200);},10600);
  setTimeout(()=>{showCinema();demoRunning=false;},12800);
}
function showCinema(){document.getElementById('cinema-h').innerHTML='1 victim reported.<br><span class="grad">8,421 people protected.</span>';document.getElementById('cinema-p').textContent='That is the SafePay Guard immune system — one antibody, an entire wave stopped.';document.getElementById('cinema').style.display='grid';}
function closeCinema(){document.getElementById('cinema').style.display='none';}

/* ================= LIVE SCAM PULSE ================= */
(function(){
  const a=document.getElementById('p-active'),w=document.getElementById('p-waves'),pr=document.getElementById('p-prot');
  if(!a)return;
  pr.textContent=(+pr.textContent).toLocaleString('en-IN');
  if(RM)return;
  setInterval(()=>{let v=+a.textContent.replace(/,/g,'')+((Math.random()<.5?1:-1)*(Math.random()<.3?2:1));if(v<150)v=150;if(v>224)v=224;a.textContent=v;},2200);
  setInterval(()=>{pr.textContent=(+pr.textContent.replace(/,/g,'')+Math.floor(Math.random()*7+1)).toLocaleString('en-IN');},1600);
  setInterval(()=>{if(Math.random()<.4)w.textContent=+w.textContent+1;},5200);
})();

/* ================= TIME MACHINE ================= */
let tmDone=false;
function playTimeMachine(){
  const steps=[...document.querySelectorAll('#tmTrack .tm-step')];if(!steps.length)return;
  steps.forEach(s=>s.classList.remove('on'));
  steps.forEach((s,i)=>setTimeout(()=>s.classList.add('on'),i*750));
}

/* ================= AI SCAM SIMULATOR (educational) ================= */
const SIMS=[
 {title:'KYC bank scam',
  verdict:'A fake “bank official” uses fear and false authority to rush you into revealing your OTP.',
  msgs:[
    {f:'scammer',t:'Dear customer, this is SBI Security. Your account will be BLOCKED in 30 minutes.'},
    {f:'you',t:'What? Why is it being blocked?'},
    {f:'scammer',t:'Your KYC is incomplete. To stop the block, share the OTP we just sent you.'},
    {f:'scammer',t:'Hurry — only 4 minutes left before permanent suspension.'}
  ],
  e:{fear:85,greed:10,urgency:95,authority:90,curiosity:20},
  tricks:[['False authority','Pretends to be your bank so you lower your guard.'],['Manufactured urgency','A countdown stops you thinking clearly.'],['Fear of loss','“Account blocked” triggers panic.'],['Credential theft','Real banks never ask for your OTP or PIN.']]},
 {title:'Lottery prize',
  verdict:'Greed and excitement make a small “fee” feel worth a huge fake reward.',
  msgs:[
    {f:'scammer',t:'CONGRATULATIONS! You won ₹25,00,000 in the KBC lucky draw!'},
    {f:'you',t:'Really? I didn’t even enter…'},
    {f:'scammer',t:'You were auto-selected! Just pay a small ₹4,500 fee to release your prize.'},
    {f:'scammer',t:'Pay within 10 minutes or the prize goes to the next winner.'}
  ],
  e:{fear:20,greed:95,urgency:80,authority:45,curiosity:70},
  tricks:[['Too-good-to-be-true reward','A huge prize you never entered for.'],['Advance-fee trap','A small fee to unlock a prize that doesn’t exist.'],['Urgency','“Next winner” pressure rushes the payment.']]},
 {title:'Digital arrest',
  verdict:'Fake police use terror and authority to keep you on a call until you pay “to clear your name.”',
  msgs:[
    {f:'scammer',t:'This is the Cyber Crime Branch. A parcel in your name contains illegal items.'},
    {f:'you',t:'That’s not mine! I didn’t send anything.'},
    {f:'scammer',t:'You are now under digital arrest. Do NOT disconnect or contact anyone.'},
    {f:'scammer',t:'Transfer funds to this “verification account” to prove your innocence.'}
  ],
  e:{fear:98,greed:5,urgency:90,authority:95,curiosity:15},
  tricks:[['Impersonating police','Fake authority creates instant fear.'],['Isolation','“Don’t tell anyone” keeps you from getting help.'],['Intimidation','Threat of arrest overrides logic.'],['“Prove innocence” payment','No real agency asks you to transfer money.']]}
];
let simRunning=false;
function runSim(i){
  if(simRunning)return;simRunning=true;
  const chat=document.getElementById('simChat'),hint=document.getElementById('simHint'),controls=document.getElementById('simControls'),sim=SIMS[i];
  chat.querySelectorAll('.sim-msg').forEach(m=>m.remove());
  hint.textContent='Simulating: '+sim.title+' — watch the manipulation build…';
  const an=document.getElementById('simAnalysis');an.style.opacity='.4';
  document.querySelectorAll('#emeter .fill').forEach(f=>f.style.width='0');
  document.querySelectorAll('#emeter .val').forEach(v=>v.textContent='0');
  document.getElementById('trickList').innerHTML='';
  let d=500;
  sim.msgs.forEach(m=>{setTimeout(()=>{const el=document.createElement('div');el.className='sim-msg '+m.f;el.innerHTML='<span class="tag">'+(m.f==='scammer'?'“SCAMMER”':'YOU')+'</span>'+m.t;chat.insertBefore(el,controls);chat.scrollTop=chat.scrollHeight;},d);d+=1150;});
  setTimeout(()=>{
    hint.textContent='Frozen. Here’s exactly how they tried to manipulate you:';
    an.style.opacity='1';document.getElementById('simVerdict').textContent=sim.verdict;
    for(const k in sim.e){const f=document.querySelector('#emeter .fill[data-e="'+k+'"]'),v=document.querySelector('#emeter .val[data-ev="'+k+'"]');if(f)f.style.width=sim.e[k]+'%';if(v)animNum(v,sim.e[k],700);}
    document.getElementById('trickList').innerHTML=sim.tricks.map(t=>'<li><b>'+t[0]+'</b> — '+t[1]+'</li>').join('');
    simRunning=false;
  },d+300);
}

/* ================= EXPLAIN LIKE GRANDMA ================= */
let grandmaOn=false,lastScores=null,lastScam=false,lastRisk=0,lastMsg='',lastType='';
function plainExplain(sc,scam){
  if(!scam)return 'This message looks okay — but never share your PIN or OTP, and don’t pay to “receive” money.';
  const parts=[];
  if(sc.fakeid>=55)parts.push('someone is pretending to be your bank or the police');
  if(sc.urgency>=55)parts.push('they’re rushing you so you can’t stop and think');
  if(sc.payment>=55)parts.push('they want your PIN, OTP, or a payment');
  if(sc.emotion>=55)parts.push('they’re dangling a prize to excite you');
  if(sc.link>=55)parts.push('they want you to tap a fake link');
  const core=parts.length?parts.join(', and '):'this message is trying to trick you';
  return 'In plain words: '+core+'. Real banks never do this — don’t reply, tap, or pay. Just delete it.';
}
function applyVsub(){if(grandmaOn&&lastScores)document.getElementById('vsub').textContent=plainExplain(lastScores,lastScam);}
function toggleGrandma(){
  grandmaOn=!grandmaOn;
  const g=document.getElementById('grandma');g.classList.toggle('on',grandmaOn);g.textContent=grandmaOn?'Show technical':'Explain simply';
  if(grandmaOn)applyVsub(); else if(lastScores)analyze();
}

/* ================= SENTINEL AI (on-device assistant) ================= */
function escapeHtml(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
let chatGreeted=false;
function openChat(preset){
  document.getElementById('aichat').classList.add('open');
  if(!chatGreeted){chatGreeted=true;acAdd(tt('greeting'),'bot');}
  if(preset)setTimeout(()=>acSend(preset),200);
}
function closeChat(){document.getElementById('aichat').classList.remove('open');}
function acAdd(html,who){const b=document.getElementById('acBody');const el=document.createElement('div');el.className='ac-msg '+who;el.innerHTML=html;if(who==='bot'){const sp=document.createElement('span');sp.className='msg-speak';sp.innerHTML=ICONS.volume;sp.title='Listen';sp.onclick=function(){speakText(el.textContent);};el.appendChild(sp);}b.appendChild(el);b.scrollTop=b.scrollHeight;}
function acSend(preset){
  const inp=document.getElementById('acInput');const t=(preset!==undefined?preset:inp.value||'').trim();if(!t)return;
  acAdd(escapeHtml(t),'user');if(preset===undefined)inp.value='';
  setTimeout(()=>acAdd(botReply(t),'bot'),followUp(t)?520:420);
}
function followUp(){return true;}
function botReply(q){
  const s=q.toLowerCase().trim();
  // 1) looks like a pasted message -> run the scam engine
  const looksMsg=q.length>24 && /(http|kyc|otp|pin|won|prize|refund|₹|verify|urgent|click|collect|account|bank)/i.test(q);
  if(looksMsg && !/^(what|how|why|is a|can i|explain|tell|which|when|where|do |does |define)/.test(s)){
    const r=scoreMessage(q),scam=r.risk>=55;
    const top=Object.keys(r.scores).sort((a,b)=>r.scores[b]-r.scores[a]).slice(0,2).filter(k=>r.scores[k]>=40);
    const map={emotion:'a tempting reward',urgency:'time pressure',fakeid:'a fake bank/authority identity',link:'a suspicious link',payment:'a PIN/OTP or payment request'};
    if(scam)return "<b>Risk "+r.risk+"/100 - looks like a scam.</b> I see "+(top.map(k=>map[k]).join(' and ')||'classic fraud signals')+". Don't reply, tap links, or share your PIN/OTP. Want the steps to report it?";
    return "<b>Risk "+r.risk+"/100 - no strong scam signals.</b> Still, never share your PIN/OTP and don't pay to 'receive' money. Ask me anything about UPI, payments, or scams.";
  }
  const KB=[
    // --- greetings & meta ---
    [/(^hi|^hey|^hello|namaste|good (morning|afternoon|evening))/, "Hello! I'm <b>Sentinel</b>. Ask me anything about UPI and payments (from basics to advanced), general finance, or scams - or paste a suspicious message and I'll check it."],
    [/what can you|help me|capabilit|who are you|about you|^sentinel/, "I'm <b>Sentinel</b>, your finance & safety guide inside SafePay Guard OS. I can explain <b>UPI and money basics</b> (PIN, UPI ID, limits, AutoPay, NEFT/RTGS/IMPS, cards, credit score, FD/SIP), help with <b>transaction problems</b> (money debited but not credited, wrong transfer), explain <b>any scam</b>, and guide you if you were cheated. What do you need?"],
    [/who (made|built|created)|hackathon|designathon/, "I was built for the <b>Crack the Complexity</b> designathon as part of SafePay Guard OS - India's financial immune system, where one report protects thousands."],
    [/thank/, "Anytime! Stay safe - and remember, never share your OTP or UPI PIN with anyone."],
    // --- UPI basics -> advanced (before fraud rules) ---
    [/(set|change|forgot|reset|create).*(upi )?pin|upi pin|what.*pin/, "Your <b>UPI PIN</b> is a 4-6 digit secret you set to approve payments. Set or change it in your UPI app: open the linked bank account -> 'Set/Change UPI PIN' -> verify with your debit card (last 6 digits + expiry) or Aadhaar OTP. You enter it only to <b>send</b> money - never to receive or 'verify'."],
    [/collect request|approve.*request|is this upi.*safe|upi id.*safe|trust.*upi/, "Sharing your <b>UPI ID to receive</b> money is safe - it can't be used to withdraw from your account. But a <b>'collect request'</b> is a request to PAY; approving one with your PIN sends money out. Only approve requests you started. Never share your PIN."],
    [/what.*upi id|vpa|upi id mean|upi address/, "A <b>UPI ID</b> (or VPA, like name@bank) is your payment address - people use it to send you money. It's safe to share for receiving. It reveals no bank details and can't pull money without your PIN approval."],
    [/what.*upi|how.*upi work|how does upi|about upi|explain upi/, "<b>UPI</b> (Unified Payments Interface) lets you send and receive money instantly between banks using just an app and a UPI ID - no account numbers needed. It's built by NPCI, runs 24x7, and is free for you. Golden rule: your PIN only <b>sends</b> money, never receives."],
    [/(set ?up|register|activate|start using|link.*bank).*upi|create.*upi|how.*use upi/, "To set up UPI: install a UPI app (GPay, PhonePe, Paytm, BHIM), register with the <b>mobile number linked to your bank</b>, pick your bank (it finds your account), then set a UPI PIN using your debit-card details. Now you can pay by UPI ID, phone number, or QR."],
    [/upi.*limit|transaction limit|daily limit|how much.*(send|upi)|max.*upi/, "UPI usually allows up to <b>₹1 lakh per transaction</b> (varies by bank), plus a daily cap and a limit on the number of transfers per day. Some categories - verified merchants, insurance, investments, hospitals, education - allow higher limits up to ₹2-5 lakh. Check your exact limit in your bank/app."],
    [/upi lite/, "<b>UPI Lite</b> is a small on-phone wallet for low-value payments that works <b>without entering a PIN</b> (and even on weak network). You load a small amount into it for quick daily spends - fast and safe."],
    [/autopay|e-?mandate|mandate|recurring payment|subscription.*upi/, "<b>UPI AutoPay</b> (e-mandate) approves recurring payments - subscriptions, SIPs, bills - that auto-debit on a schedule up to a limit you set. You authorise it once with your PIN and can pause or cancel any mandate anytime in your app."],
    [/international|abroad|foreign country|other country|upi global/, "UPI now works in several countries (e.g. UAE, Singapore, France, Sri Lanka, Nepal, Bhutan, Mauritius) for paying accepting merchants, and some banks let you link an international number. Coverage keeps growing - check the 'UPI International' setting in your app."],
    [/credit (card|line).*upi|rupay.*upi|upi.*credit|credit on upi/, "You can link a <b>RuPay credit card</b> to UPI and pay by scanning a QR - the spend goes on your credit card. Some banks also offer a <b>pre-approved credit line on UPI</b>. Charges/interest follow your card or credit-line terms, so treat it as credit, not cash."],
    [/upi circle|family.*upi|delegate.*payment/, "<b>UPI Circle</b> lets a primary user add family members (who may not have their own bank-linked UPI) to pay within set limits - fully delegated or with per-payment approval. It's handy for helping elders or dependents pay safely."],
    [/upi.*(charge|fee|free)|is upi free|interchange|charge.*upi/, "For you as a user, <b>normal UPI payments are free</b> - bank-to-bank and to merchants carry no charge. A small 'interchange' fee applies only to certain <b>wallet/PPI</b> merchant payments above ₹2,000, and the merchant pays it, not you."],
    // --- transaction problems (non-fraud) ---
    [/debited but|not credited|deducted but|failed.*transaction|transaction failed|money stuck|payment.*pending|not received.*money|money.*not.*reach/, "If money was <b>debited but not credited</b> (or a payment failed), it's usually <b>auto-reversed within a few working days</b> (often up to 5). If it isn't, raise it in your UPI app under the transaction -> 'help/raise dispute', or call your bank. You can also escalate via the NPCI dispute portal or RBI's <b>14448</b>."],
    [/wrong (number|account|person|upi|address)|sent to wrong|transferred.*mistake|wrong transaction|paid.*wrong/, "Sent money to the <b>wrong person</b>? Act fast: report it to your bank with the transaction details and ask them to help reverse it (the receiver must agree, or the bank can act if it was an error). Also raise it in your UPI app's dispute section and, if needed, on the NPCI portal. Always double-check before sending."],
    [/dispute|chargeback|raise complaint.*bank|complaint.*(transaction|payment|bank)/, "To <b>dispute a transaction</b>: raise it in your UPI/bank app first (transaction -> 'raise dispute'). For cards, ask your bank for a <b>chargeback</b> on unauthorised or failed purchases. If it's unresolved in ~30 days, escalate to the <b>RBI Ombudsman</b> (cms.rbi.org.in / 14448)."],
    [/unauthori|unknown (charge|transaction|debit)|didn.?t (do|make|authorise).*(transaction|payment)|someone.*used my/, "See an <b>unauthorised transaction</b>? Tell your bank <b>immediately</b> (block the card/UPI) and call <b>1930</b>. Under RBI rules, if you report quickly your liability can be zero or limited - delay increases what you may lose."],
    // --- general finance basics ---
    [/neft|rtgs|imps|difference.*(transfer|neft|payment)/, "<b>IMPS</b>: instant, 24x7, up to ₹5 lakh. <b>NEFT</b>: 24x7, any amount, settles in quick batches. <b>RTGS</b>: real-time, for large sums (₹2 lakh+). <b>UPI</b>: instant and app-based, best for small-to-mid payments."],
    [/ifsc/, "An <b>IFSC</b> is an 11-character code (e.g. HDFC0001234) identifying a specific bank branch for NEFT/RTGS/IMPS transfers. You'll find it on your cheque book or the bank's website."],
    [/debit.*credit card|credit.*debit card|difference.*card|debit vs credit|credit vs debit/, "A <b>debit card</b> spends your own money from your account. A <b>credit card</b> borrows from the bank up to a limit that you repay later (interest applies if you don't pay in full). Used well, a credit card builds your credit score - but it needs discipline."],
    [/credit score|cibil|credit report/, "A <b>credit score</b> (like CIBIL, 300-900) shows how reliably you repay loans and cards. <b>750+</b> is good and gets you better loan rates. Pay on time and keep your credit usage low to improve it - you can check it free once a year."],
    [/emi|interest rate|how.*interest|what.*interest/, "An <b>EMI</b> is a fixed monthly repayment on a loan (principal + interest). <b>Interest</b> is the cost of borrowing, usually shown as a yearly % (APR). Lower rate and shorter tenure mean you pay less overall."],
    [/fixed deposit|fd|recurring deposit|rd/, "A <b>Fixed Deposit (FD)</b> locks a lump sum for a set period at a fixed rate. A <b>Recurring Deposit (RD)</b> lets you deposit a fixed amount every month. Both are low-risk savings with assured returns."],
    [/mutual fund|sip|invest in|how.*invest|stock market basics/, "A <b>mutual fund</b> pools money from many people to invest in stocks/bonds, run by professionals. A <b>SIP</b> invests a fixed amount regularly (say monthly), smoothing out market ups and downs. Returns aren't guaranteed - this is general info, not investment advice. Use only SEBI-registered platforms."],
    [/savings.*current|current account|savings account|type.*account/, "A <b>savings account</b> is for individuals, earns interest, and has some transaction limits. A <b>current account</b> is for businesses with high transaction volume and usually earns no interest. Most people just need a savings account."],
    [/what.*kyc|kyc mean|why.*kyc|kyc process/, "<b>KYC</b> (Know Your Customer) is the legitimate one-time identity check (Aadhaar/PAN) a bank does when you open an account. Real KYC happens in-app or in-branch - <b>no genuine bank asks you to 'complete KYC' via an SMS link, OTP, or a random call</b>."],
    [/nominee/, "A <b>nominee</b> is the person you name to receive your bank/FD/insurance funds if something happens to you. Always add one - it makes claims far easier for your family."],
    [/what.*net ?banking|how.*net ?banking|internet banking/, "<b>Net banking</b> is your bank's official website/app portal to transfer money, view statements, and pay bills. Use only the official site (type it yourself), enable two-factor login, and never log in through a link someone sends you."],
    [/open.*account|new bank account|how.*bank account/, "To open a bank account you need ID + address proof (Aadhaar/PAN) for KYC. Many banks offer instant online savings accounts via video-KYC. Compare minimum-balance rules and charges before choosing."],
    [/wallet|e-?wallet|prepaid.*(wallet|instrument)/, "A <b>wallet</b> (like a Paytm/PhonePe wallet) holds a prepaid balance you top up. <b>UPI</b> pays directly from your bank account. UPI is usually more flexible and free; wallets suit small, quick spends."],
    [/insurance/, "<b>Insurance</b> protects you financially against a risk (health, life, accident, vehicle) - you pay a regular premium, and the insurer pays out if the covered event happens. Buy only from IRDAI-registered insurers and beware of 'insurance' calls asking for fees or OTPs."],
    // --- fraud types ---
    [/scammed|lost money|money gone|got cheated|fraud happened|paid.*scam|they took my money|cheated me/, "I'm sorry that happened - the first hour matters most:<br>1) <b>Call 1930</b> (cyber helpline) now.<br>2) Ask your bank to <b>freeze</b> the account/transaction.<br>3) File at <b>cybercrime.gov.in</b>.<br>Fast reporting gives the best chance to freeze the funds."],
    [/digital arrest|under arrest|video call.*police/, "<b>Digital-arrest scam:</b> fake police/CBI keep you on a video call in fake 'custody' and isolate you until you pay to 'clear your name'. Real police never arrest you over a call or demand money. Hang up and call <b>1930</b>."],
    [/courier|parcel|fedex|dhl|customs/, "<b>Courier/parcel scam:</b> a caller says a parcel in your name holds drugs or illegal items, then 'transfers' you to fake police. It's a script to scare you into paying. No courier or police works this way - hang up and report on 1930."],
    [/job|work from home|part.?time|task.*money|earn.*(daily|online)|hiring|telegram.*task/, "<b>Job/task scam:</b> they offer easy work-from-home money, pay you once for small 'tasks', then ask you to deposit your own money for bigger returns that never come. Real jobs never ask you to pay. Don't deposit anything."],
    [/invest|crypto|bitcoin|trading|stock tip|double.*money|guaranteed return|ponzi|chit fund|forex|profit.*scheme/, "<b>Investment scam (crypto/forex/ponzi/chit):</b> fake 'experts' or apps promise guaranteed high returns, show fake profits, then block withdrawals unless you pay 'tax/fees'. Guaranteed returns are always a lie - use only SEBI-registered platforms and never pay to withdraw."],
    [/loan app|instant loan|loan.*harass|blackmail.*loan|loan.*app/, "<b>Loan-app scam:</b> shady apps give a tiny loan, steal your contacts and photos, then harass and blackmail you. Borrow only from RBI-registered lenders, check app permissions, and report harassment to 1930 and cybercrime.gov.in."],
    [/romance|dating|matrimon|girlfriend|boyfriend.*money|online.*love/, "<b>Romance/matrimonial scam:</b> someone builds a relationship online, then invents an emergency and asks for money or gift cards. If you've never met in person and they ask for money, it's a scam. Don't send funds."],
    [/electricity|power.*cut|bill.*disconnect|gas.*bill|water bill/, "<b>Electricity/bill scam:</b> an SMS says your power/gas will be cut tonight unless you 'update' via a link or call a number. Boards never do this by SMS link. Ignore it and check your official app."],
    [/customer care|helpline number|call center|anydesk|teamviewer|screen share|remote access/, "<b>Fake customer-care scam:</b> numbers found by web search are often fake. The 'agent' makes you install a screen-share app (AnyDesk/TeamViewer) and drains your account. Use only numbers from the official app/site, and never install screen-share apps for 'support'."],
    [/sim swap|sim card|lost network|no signal/, "<b>SIM-swap scam:</b> fraudsters get a duplicate SIM using your details and then receive your OTPs. Warning sign: your phone suddenly loses network. If that happens unexpectedly, call your operator at once and freeze banking."],
    [/phishing|smishing|fake (link|website|site)|spoof/, "<b>Phishing:</b> fake SMS/email/links that look like your bank to steal logins. Check the exact web address, never log in through a link (type the site yourself), and turn on two-factor authentication."],
    [/refund|cashback/, "<b>Refund scam:</b> you're told a refund is coming, then asked to approve a 'collect request' or enter your PIN - which actually pays them. You never enter a PIN to <b>receive</b> money."],
    [/qr|scan.*code/, "Scanning a QR code is for <b>paying</b>, never for receiving. If someone sends a QR to 'get your refund', scanning it will debit you. Don't scan it."],
    [/kyc/, "<b>KYC scam:</b> a message says your account will be blocked unless you 'verify' - then steals your OTP/PIN. Banks never ask for OTP, PIN, or links. Ignore and delete."],
    [/otp|pin|password/, "Never share your <b>OTP, UPI PIN, or passwords</b> - not even with someone claiming to be your bank or the police. No legitimate service will ever ask."],
    [/lottery|kbc|prize|you won|lucky draw/, "<b>Lottery/prize scam:</b> a message says you won a huge amount and must pay a small 'fee' to release it. You never entered, and the prize doesn't exist. Never pay to claim a prize."],
    [/blackmail|sextortion|nude|threat.*(photo|video)|leak.*video/, "If someone is threatening or blackmailing you, it's not your fault and you're not alone. <b>Don't pay</b> - it rarely stops. Stop contact, save evidence, and report on <b>1930</b> or cybercrime.gov.in. Reach out to a trusted person too."],
    [/credit card fraud|debit card fraud|cvv|card.*(fraud|hack|stolen)/, "<b>Card fraud:</b> never share CVV/OTP, keep transaction alerts on, set spend limits, and use only 'https' sites. Report any unknown charge to your bank immediately and file on 1930."],
    [/pension|subsidy|scholarship|govt scheme|pm.?kisan|aadhaar.*(link|update)|government benefit/, "<b>Subsidy/benefit scam:</b> you're promised a government benefit if you 'verify' Aadhaar/bank details or pay a small fee via a link. Real government benefits never need a fee or an OTP shared with a caller. Verify only on official .gov.in sites."],
    [/fake app|malicious app|apk|download.*app.*link/, "<b>Fake apps</b> mimic banks or rewards to steal logins or plant malware. Install only from the official Play/App Store, check the developer name and reviews, and never install APK files sent by links or WhatsApp."],
    [/block.*number|report.*number|spam call|dnd/, "Block and report the number in your phone's call/SMS app, report spam to TRAI on <b>1909</b>, and report any scam on <b>1930</b>. Blocking protects you; reporting helps stop the wave for everyone."],
    // --- safety / report / utility ---
    [/(stay safe|protect|avoid.*scam|safety tip|precaution|how.*not.*(scam|cheat))/, "<b>Top rules to stay safe:</b><br>1) Never share OTP/PIN.<br>2) A PIN only SENDS money, never receives.<br>3) Don't tap links in SMS.<br>4) Never install screen-share apps for 'support'.<br>5) Use numbers only from official apps.<br>6) When you're rushed or scared - pause. That pressure <i>is</i> the scam."],
    [/report|complain|1930|cybercrime|helpline/, "<b>To report fraud:</b> call <b>1930</b> (national cyber helpline) and file at <b>cybercrime.gov.in</b>. For banking issues, RBI's helpline is <b>14448</b>. See the Golden Hour section for the full helpline list."],
    [/recover|get.*money back|frozen|freeze/, "<b>To recover funds:</b> call <b>1930</b> immediately, ask your bank to freeze the transaction, and file at <b>cybercrime.gov.in</b>. Speed decides whether the money can be stopped."],
    [/is (this|the)? ?(app|website|site).*safe|verify.*app|genuine/, "I can't open a live site here, but check: is it the official app with many genuine reviews? Does the web address exactly match the brand? Does it ask for odd permissions or a PIN to 'receive' money? Any of those is a red flag."],
    [/near me|scams near|radar|hotspot|which city/, "Open the <b>Live Radar</b> section to see active scam waves by city right now - Delhi, Mumbai, Bengaluru and Chennai are current hotspots."],
    [/tomorrow|predict|forecast|next.*scam/, "Check the <b>Time Machine</b> section - it replays how a scam spread city to city and forecasts tomorrow's likely target. Right now it points to Mumbai."]
  ];
  for(const [re,ans] of KB){ if(re.test(s)) return ans; }
  return "I can help with that. Ask me about <b>UPI or payments</b> (e.g. 'what is a UPI PIN', 'UPI transaction limit', 'money debited but not credited'), <b>general finance</b> (NEFT vs IMPS, credit score, FD/SIP, cards), <b>any scam</b>, or say 'I was scammed'. You can also paste a suspicious message and I'll check it.";
}

/* ================= DAILY FRAUD BRIEFING ================= */
const ARTICLES=[
  {src:'Business Standard',cat:'SURVEY',title:'1 in 5 UPI users have faced fraud — and half never report it',sum:'A nationwide survey found fraud reaching one in five UPI households, with most victims staying silent — letting scams spread unchecked.',url:'https://www.business-standard.com/finance/news/upi-transaction-fraud-india-survey-one-in-five-users-hit-localcircles-125062601141_1.html'},
  {src:'The Tribune',cat:'ADVISORY',title:'10 digital payment scams to watch for in 2026',sum:'From fake collect-requests to QR-code traps and SIM-swap attacks — the payment scams spreading fastest this year, and how to spot them.',url:'https://www.tribuneindia.com/news/india/10-dangerous-digital-payment-scams-you-must-know-in-2026/'},
  {src:'Parliament / I4C',cat:'DATA',title:'₹805 crore lost to UPI fraud so far this financial year',sum:'Government data shows lakhs of UPI fraud incidents as soaring usage keeps widening the attack surface for cybercriminals.',url:'https://the420.in/india-upi-fraud-data-fy26-parliament-digital-payments/'},
  {src:'Scam Watch',cat:'THREAT',title:'“Digital arrest” scams drained roughly ₹3,000 crore in a year',sum:'Fraudsters posing as police keep victims on video calls in fake custody until they transfer their savings — a fast-growing threat.',url:'https://scamwatchhq.com/india-scams-2026-digital-arrest-upi-fraud-epidemic/'},
  {src:'SafePay Guard',cat:'TIP',title:'Your UPI PIN is only for sending money — never to receive',sum:'If anyone asks for your PIN to “receive” a refund, prize, or cashback, it is a scam. Receiving money never needs a PIN.',url:''}
];
function renderBriefing(){
  const feat=document.getElementById('briefFeature');if(!feat)return;
  const now=new Date();
  document.getElementById('briefDate').textContent=now.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'})+' · updated daily';
  const doy=Math.floor((now-new Date(now.getFullYear(),0,0))/86400000);
  const fi=doy%ARTICLES.length;const f=ARTICLES[fi];
  feat.href=f.url||'#dna';if(!f.url)feat.removeAttribute('target');
  feat.innerHTML='<div class="brief-badge"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4a2 2 0 0 1 2-2h9l5 5v15a2 2 0 0 1-2 2z"/><polyline points="15 2 15 7 20 7"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg></div>'
    +'<div><div class="cat">TODAY\u2019S BRIEF · '+f.cat+'</div><h3>'+f.title+'</h3><p>'+f.sum+'</p><div class="more" style="color:var(--cyan);margin-top:10px;font-family:var(--mono);font-size:12px">'+(f.url?'Read source →':'Try the Scam DNA checker →')+'</div></div>';
  const rest=ARTICLES.filter((_,i)=>i!==fi).slice(0,3);
  document.getElementById('briefRow').innerHTML=rest.map(a=>
    '<a class="glass article" '+(a.url?('href="'+a.url+'" target="_blank" rel="noopener"'):'href="#dna"')+'><div class="src">'+a.src+' · '+a.cat+'</div><h4>'+a.title+'</h4><p>'+a.sum+'</p><div class="more">'+(a.url?'Read source →':'Open checker →')+'</div></a>').join('');
}
renderBriefing();

/* ================= DEMO AUTH + ROBOT CHECK ================= */
let authMode='signin',robot=false,currentUser=null,pfpData=null,userPfp=null;
function loadPfp(e){const f=e.target.files&&e.target.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{pfpData=rd.result;const pv=document.getElementById('pfpPrev');pv.textContent='';pv.style.backgroundImage='url('+pfpData+')';};rd.readAsDataURL(f);}
function openAuth(){if(currentUser)return;document.getElementById('authwrap').classList.add('open');}
function closeAuth(){document.getElementById('authwrap').classList.remove('open');}
function setAuthMode(m){
  authMode=m;
  document.getElementById('signupFields').style.display=m==='signup'?'block':'none';
  document.getElementById('authTitle').textContent=m==='signup'?'Create your account':'Welcome back';
  document.getElementById('authSub').textContent=m==='signup'?'Join the network and help stop scams before they spread.':'Sign in to protect your account and get real-time alerts.';
  document.getElementById('authGo').textContent=m==='signup'?'Create account':'Sign in';
  document.getElementById('authSwitch').innerHTML=m==='signup'?'Already have an account? <a onclick="setAuthMode(\'signin\')">Sign in</a>':'New here? <a onclick="setAuthMode(\'signup\')">Create an account</a>';
  document.getElementById('authErr').textContent='';
}
function toggleRobot(){robot=!robot;document.getElementById('robotBox').classList.toggle('checked',robot);document.getElementById('authErr').textContent='';}
function submitAuth(){
  const email=document.getElementById('authEmail').value.trim(),pass=document.getElementById('authPass').value,err=document.getElementById('authErr');
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){err.textContent='Please enter a valid email address.';return;}
  if(pass.length<6){err.textContent='Password must be at least 6 characters.';return;}
  let displayName=email,uname='',phone='';
  if(authMode==='signup'){
    uname=document.getElementById('authName').value.trim();
    if(uname.length<3){err.textContent='Please choose a username (3+ characters).';return;}
    phone=document.getElementById('authPhone').value.replace(/[\s-]/g,'');
    if(!/^(\+?91)?[6-9]\d{9}$/.test(phone)){err.textContent='Please enter a valid 10-digit mobile number.';return;}
    displayName=uname;userPfp=pfpData;
  }else{userPfp=null;}
  if(!robot){err.textContent='Please confirm you are not a robot.';return;}
  function done(name){currentUser=name;closeAuth();renderUser();toast('<span class="ic-sm">'+ICONS.shield+'</span> '+(authMode==='signup'?'Welcome, '+escapeHtml(name):'Signed in'),'You\u2019re now protected.');askProtection();}
  if(window.SafePayBackend && SafePayBackend.ready()){
    err.textContent='Please wait\u2026';
    const op=authMode==='signup'?SafePayBackend.signUp(email,pass,{username:uname,phone:phone}):SafePayBackend.signIn(email,pass);
    op.then(function(){err.textContent='';done(displayName);}).catch(function(e){err.textContent=(e&&e.message)?e.message.replace('Firebase: ',''):'Sign-in failed.';});
    return;
  }
  done(displayName);
}
function renderUser(){
  const initial=(currentUser[0]||'U').toUpperCase();
  const av=userPfp?'<div class="av" style="background-image:url('+userPfp+');background-size:cover;background-position:center"></div>':'<div class="av">'+initial+'</div>';
  document.getElementById('authArea').innerHTML='<div class="user-chip">'+av+'<span class="em">'+escapeHtml(currentUser)+'</span><span class="so" onclick="signOut()">Sign out</span></div>';
}
function signOut(){try{if(window.SafePayBackend&&SafePayBackend.ready())SafePayBackend.logout();}catch(e){}currentUser=null;userPfp=null;pfpData=null;robot=false;const pb=document.getElementById('robotBox');if(pb)pb.classList.remove('checked');document.getElementById('authArea').innerHTML='<button class="signin magnetic" onclick="openAuth()">Sign in</button>';}

/* ================= SHARE / ALERT FAMILY & FRIENDS ================= */
function openShare(){
  const type=lastType?lastType.toLowerCase():'scam';
  const msg="SCAM ALERT (via SafePay Guard): I just spotted a "+type+". Please be careful - never share your OTP or UPI PIN, and don't tap links in SMS. Warn your family too. Stay safe!";
  document.getElementById('share-text').value=msg;
  document.getElementById('sharewrap').classList.add('open');
}
function closeShare(){document.getElementById('sharewrap').classList.remove('open');}
function shareTo(net){
  const msg=document.getElementById('share-text').value;
  const url=encodeURIComponent(location.href),t=encodeURIComponent(msg);
  let link='';
  if(net==='whatsapp')link='https://wa.me/?text='+t;
  else if(net==='telegram')link='https://t.me/share/url?url='+url+'&text='+t;
  else if(net==='x')link='https://twitter.com/intent/tweet?text='+t;
  else if(net==='facebook')link='https://www.facebook.com/sharer/sharer.php?u='+url+'&quote='+t;
  else if(net==='email')link='mailto:?subject='+encodeURIComponent('Scam alert')+'&body='+t;
  if(link)window.open(link,'_blank','noopener');
}
function nativeShare(){
  const msg=document.getElementById('share-text').value;
  if(navigator.share){navigator.share({title:'Scam alert',text:msg}).catch(function(){});}
  else{copyShare();}
}
function shareInsta(){
  if(navigator.share){nativeShare();}
  else{copyShare();toast('<span class="ic-sm">'+ICONS.check+'</span> Copied','Open Instagram and paste into a story or DM.');}
}
function copyShare(){
  const t=document.getElementById('share-text');t.select();
  try{navigator.clipboard.writeText(t.value);}catch(e){try{document.execCommand('copy');}catch(e2){}}
  toast('<span class="ic-sm">'+ICONS.check+'</span> Copied','Paste it into any app to warn people.');
}

/* ================= AUTO-REPORT TO GOVERNMENT ================= */
function scamType(s){
  if(s.fakeid>=55 && (s.payment>=55||s.urgency>=55)) return 'Phishing / fake-bank (KYC) fraud';
  if(s.emotion>=55) return 'Lottery / prize fraud';
  if(s.payment>=55) return 'UPI / payment fraud';
  if(s.link>=55) return 'Malicious link / phishing';
  if(s.urgency>=55) return 'Social-engineering (urgency) scam';
  return 'Suspected financial cyber fraud';
}
function openGov(){
  const date=new Date().toLocaleString('en-IN');
  document.getElementById('gov-type').textContent=lastType+' · risk '+lastRisk+'/100';
  const ev=(lastMsg||'').slice(0,180)+((lastMsg||'').length>180?'\u2026':'');
  document.getElementById('gov-ev').textContent=ev||'(analysed message)';
  const who=currentUser?('\n\nReported by: '+currentUser):'';
  const txt='To the Indian Cyber Crime Coordination Centre (I4C),\n\nI wish to report a suspected financial cyber fraud. On '+date+' I received the following message:\n\n"'+(lastMsg||'')+'"\n\nThis appears to be a '+lastType.toLowerCase()+' attempt (automated risk score '+lastRisk+'/100). I request that it be investigated and the sender blocked. I have not shared any OTP or PIN.'+who+'\n\nPrepared via SafePay Guard.';
  document.getElementById('gov-text').value=txt;
  document.getElementById('govwrap').classList.add('open');
  try{if(window.SafePayBackend&&SafePayBackend.ready())SafePayBackend.reportScam({type:lastType,risk:lastRisk,message:lastMsg,city:'Chennai'});}catch(e){}
  try{toast('<span class="ic-sm">'+ICONS.radio+'</span> Routed to the network','Nearby users warned + complaint ready for cybercrime.gov.in / 1930.');}catch(e){}
}
function closeGov(){document.getElementById('govwrap').classList.remove('open');}
function copyGov(){const t=document.getElementById('gov-text');t.select();try{navigator.clipboard.writeText(t.value);}catch(e){try{document.execCommand('copy');}catch(e2){}}toast('<span class="ic-sm">'+ICONS.check+'</span> Copied','Paste it into the portal complaint box.');}

/* ================= PROTECTION SHIELD (demo) ================= */
let shieldOn=false,protectAsked=false,blockedCount=0,feedTimer=null;
const BLOCKLIST=new Set(['9876543210','8123456789','7000012345','1800123456','9911002200','VMKYCUPD','AXSBIKYC','TXREFUND','BPLOTTRY']);
const FEED_SAMPLES=[
  {who:'+91 98\u2022\u2022\u2022 \u2022\u2022210',t:'SMS',rz:'Fake KYC / phishing link'},
  {who:'VM-KYCUPD',t:'SMS',rz:'Fake bank sender ID'},
  {who:'+91 90\u2022\u2022\u2022 \u2022\u2022774',t:'Call',rz:'Reported: lottery scam'},
  {who:'+91 87\u2022\u2022\u2022 \u2022\u2022019',t:'SMS',rz:'Fake refund collect-request'},
  {who:'140-series',t:'Call',rz:'Spam telemarketing (TRAI)'},
  {who:'AX-SBIKYC',t:'SMS',rz:'Fake KYC expiry alert'},
  {who:'+91 70\u2022\u2022\u2022 \u2022\u2022345',t:'Call',rz:'Reported: digital arrest'},
  {who:'BP-LOTTRY',t:'SMS',rz:'Prize/lottery bait'}
];
function askProtection(){if(protectAsked)return;protectAsked=true;setTimeout(()=>document.getElementById('permwrap').classList.add('open'),650);}
function declineProtect(){document.getElementById('permwrap').classList.remove('open');toast('<span class="ic-sm">'+ICONS.shield+'</span> Protection off','Enable it anytime after signing in.');}
function enableProtect(){
  document.getElementById('permwrap').classList.remove('open');
  shieldOn=true;document.getElementById('shieldFab').classList.add('on');
  toast('<span class="ic-sm">'+ICONS.shield+'</span> Protection enabled','Screening calls &amp; SMS against '+BLOCKLIST.size+'+ known scams.');
  startFeed();document.getElementById('shieldPanel').classList.add('open');
}
function addBlocked(who,rz,isCall){
  const feed=document.getElementById('sp-feed');if(!feed)return;
  const el=document.createElement('div');el.className='sp-item'+(isCall?' call':'');
  el.innerHTML='<div><div class="who">'+who+'</div><div class="rz">'+rz+'</div></div><span class="bk">BLOCKED</span>';
  feed.insertBefore(el,feed.firstChild);
  while(feed.children.length>18)feed.removeChild(feed.lastChild);
  blockedCount++;document.getElementById('sp-count').textContent=blockedCount.toLocaleString('en-IN');
}
function startFeed(){
  let i=0;const tick=()=>{const it=FEED_SAMPLES[i%FEED_SAMPLES.length];i++;addBlocked(it.who,it.rz,it.t==='Call');};
  for(let k=0;k<4;k++)tick();
  if(!RM&&!feedTimer)feedTimer=setInterval(tick,4200);
}
function toggleShield(){if(!shieldOn)return;document.getElementById('shieldPanel').classList.toggle('open');}
function normNum(x){return x.replace(/[^0-9a-z]/gi,'').toUpperCase();}
function checkNumber(){
  const v=document.getElementById('sp-check').value.trim(),out=document.getElementById('sp-verdict');if(!v){out.textContent='';return;}
  const n=normNum(v);let hit=false;BLOCKLIST.forEach(b=>{if(normNum(b)===n)hit=true;});
  const risky=/(KYC|REFUND|LOTTR|PRIZE|LOAN|WIN|OTP|VERIFY)/.test(n);
  if(hit)out.innerHTML='<span style="color:var(--danger)"><b>Known scam - blocked.</b> This is on the community blocklist.</span>';
  else if(risky)out.innerHTML='<span style="color:var(--warn)"><b>Risky.</b> This looks like a scam sender pattern - do not act on it.</span>';
  else out.innerHTML='<span style="color:var(--green)">Not on the blocklist yet. Stay cautious - never share OTP/PIN.</span>';
}
function reportNumber(){
  const inp=document.getElementById('sp-report'),v=inp.value.trim();if(!v)return;
  BLOCKLIST.add(normNum(v));inp.value='';
  addBlocked(escapeHtml(v),'You reported this - now blocked for everyone',false);
  toast('<span class="ic-sm">'+ICONS.check+'</span> Reported','Added to the blocklist - your community is now protected.');
}

/* ================= ENTER THE SCAM ================= */
const JOURNEY=[
 {l:'STEP 1 · MESSAGE',h:'“URGENT: Your SBI KYC expires today”',b:'A message arrives posing as your bank, using fear and a deadline to make you act before you think.',flag:'Red flag: banks never threaten to block your account by SMS.'},
 {l:'STEP 2 · LINK',h:'sbi-kyc-verify.xyz',b:'The message hides a link that looks official but points to a lookalike domain, not your bank.',flag:'Red flag: it isn’t the real bank domain — never open links in SMS.'},
 {l:'STEP 3 · FAKE WEBSITE',h:'A pixel-perfect copy of the login page',b:'The link opens a fake that mirrors the bank site, built only to capture whatever you type.',flag:'Red flag: no valid https padlock and the address bar is wrong.'},
 {l:'STEP 4 · QR CODE',h:'“Scan this QR to verify”',b:'You’re nudged to scan a QR code to “confirm” your identity.',flag:'Red flag: a QR is for paying — scanning never “verifies” anything.'},
 {l:'STEP 5 · UPI',h:'“Enter your UPI PIN to confirm”',b:'The final trap asks for your PIN to complete the “verification”.',flag:'Red flag: your PIN only SENDS money — never to receive or verify.'},
 {l:'STEP 6 · BANK',h:'Money leaves your account',b:'Entering the PIN authorises a debit, so the bank sees a valid, approved payment.',flag:'Red flag: once approved on UPI, the transfer is instant and final.'},
 {l:'STEP 7 · SCAMMER',h:'Funds arrive in seconds',b:'The money lands in the fraudster’s account almost immediately.',flag:'Red flag: there is no “undo” — from here, speed is everything.'},
 {l:'STEP 8 · MONEY TRAIL',h:'Split across mule accounts',b:'The money is rapidly moved through many accounts to vanish from the system.',flag:'Act now: call 1930 within the hour — banks can still freeze it.'}
];
let jI=-1,jPlaying=false,jTimer=null;
function jRender(i){
  const d=JOURNEY[i];
  document.querySelectorAll('#jtrack .jstage').forEach((s,idx)=>{s.classList.toggle('on',idx===i);s.classList.toggle('done',idx<i);});
  document.getElementById('jlabel').textContent=d.l;
  document.getElementById('jhead').textContent=d.h;
  document.getElementById('jbody').textContent=d.b;
  const f=document.getElementById('jflag');f.innerHTML='<span class="ic-sm">'+ICONS.alert+'</span>'+d.flag;f.style.display='inline-flex';
  const st=document.querySelectorAll('#jtrack .jstage')[i];if(st&&st.scrollIntoView)st.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
}
function jGo(i){jStop();jI=i;jRender(i);}
function jPlay(){
  if(jPlaying){jStop();return;}
  jPlaying=true;jI=-1;
  const step=()=>{jI++;if(jI>=JOURNEY.length){jStop();return;}jRender(jI);jTimer=setTimeout(step,2000);};
  step();
}
function jStop(){jPlaying=false;if(jTimer){clearTimeout(jTimer);jTimer=null;}}

/* initial analysis so the lab isn't empty */
window.addEventListener('load',()=>setTimeout(()=>{try{analyze();}catch(e){}},600));

/* safety: never leave hero text hidden even if load is delayed */
setTimeout(()=>document.querySelectorAll('.kick').forEach(el=>{el.style.opacity='1';el.style.transform='none';}),2900);

/* ================= LIVE COMMUNITY COUNTER (Firebase) ================= */
try{if(window.SafePayBackend&&SafePayBackend.ready()){SafePayBackend.listenReportCount(function(n){var el=document.getElementById('c-reports');if(el){el.dataset.done=1;el.textContent=(n).toLocaleString('en-IN');}});}}catch(e){}


/* ================= LANGUAGE / VOICE / FAMILY ================= */
let LANG='en';
const I18N={
 en:{
  k1:"Live \u00b7 Financial Immune System",
  k2:'Stop the scam<br><span class="grad">before it spreads.</span>',
  k3:"India loses \u20b922,495 crore a year to UPI fraud. We treat every scam like a virus - one report becomes an antibody that protects thousands nearby, in under a second.",
  k4:"One report. Millions protected.",
  famEyebrow:"Family Guardian",
  famH2:'Protect the people <span class="grad">you love.</span>',
  famLead:"Add your parents or family. If you spot a scam, alert them in one tap.",
  scamHead:"Scam detected", safeHead:"Looks safe",
  greeting:"Hi, I'm <b>Sentinel</b>, your fraud guardian. Paste a suspicious message and I'll check it, or ask me anything about UPI, payments, or scams."
 },
 hi:{
  k1:"\u0932\u093e\u0907\u0935 \u00b7 \u0935\u093f\u0924\u094d\u0924\u0940\u092f \u092a\u094d\u0930\u0924\u093f\u0930\u0915\u094d\u0937\u093e \u0924\u0902\u0924\u094d\u0930",
  k2:'\u0927\u094b\u0916\u093e\u0927\u0921\u093c\u0940 \u0915\u094b \u0930\u094b\u0915\u0947\u0902<br><span class="grad">\u092b\u0948\u0932\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947\u0964</span>',
  k3:"\u092d\u093e\u0930\u0924 \u0939\u0930 \u0938\u093e\u0932 UPI \u0927\u094b\u0916\u093e\u0927\u0921\u093c\u0940 \u092e\u0947\u0902 \u20b922,495 \u0915\u0930\u094b\u0921\u093c \u0917\u0902\u0935\u093e\u0924\u093e \u0939\u0948\u0964 \u0939\u092e \u0939\u0930 \u0927\u094b\u0916\u0947 \u0915\u094b \u090f\u0915 \u0935\u093e\u092f\u0930\u0938 \u092e\u093e\u0928\u0924\u0947 \u0939\u0948\u0902 - \u090f\u0915 \u0930\u093f\u092a\u094b\u0930\u094d\u091f \u090f\u0902\u091f\u0940\u092c\u0949\u0921\u0940 \u092c\u0928 \u091c\u093e\u0924\u0940 \u0939\u0948 \u091c\u094b \u092a\u093e\u0938 \u0915\u0947 \u0939\u091c\u093c\u093e\u0930\u094b\u0902 \u0932\u094b\u0917\u094b\u0902 \u0915\u094b \u090f\u0915 \u0938\u0947\u0915\u0902\u0921 \u092e\u0947\u0902 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0915\u0930 \u0926\u0947\u0924\u0940 \u0939\u0948\u0964",
  k4:"\u090f\u0915 \u0930\u093f\u092a\u094b\u0930\u094d\u091f\u0964 \u0932\u093e\u0916\u094b\u0902 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924\u0964",
  famEyebrow:"\u092a\u0930\u093f\u0935\u093e\u0930 \u0930\u0915\u094d\u0937\u0915",
  famH2:'\u0909\u0928\u0915\u0940 \u0930\u0915\u094d\u0937\u093e \u0915\u0930\u0947\u0902 <span class="grad">\u091c\u093f\u0928\u094d\u0939\u0947\u0902 \u0906\u092a \u092a\u094d\u092f\u093e\u0930 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964</span>',
  famLead:"\u0905\u092a\u0928\u0947 \u092e\u093e\u0924\u093e-\u092a\u093f\u0924\u093e \u092f\u093e \u092a\u0930\u093f\u0935\u093e\u0930 \u0915\u094b \u091c\u094b\u0921\u093c\u0947\u0902\u0964 \u0927\u094b\u0916\u093e \u0926\u093f\u0916\u0947 \u0924\u094b \u090f\u0915 \u091f\u0948\u092a \u092e\u0947\u0902 \u0909\u0928\u094d\u0939\u0947\u0902 \u0938\u091a\u0947\u0924 \u0915\u0930\u0947\u0902\u0964",
  scamHead:"\u0927\u094b\u0916\u093e\u0927\u0921\u093c\u0940 \u092e\u093f\u0932\u0940", safeHead:"\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0932\u0917\u0924\u093e \u0939\u0948",
  greeting:"\u0928\u092e\u0938\u094d\u0924\u0947! \u092e\u0948\u0902 <b>Sentinel</b> \u0939\u0942\u0901\u0964 \u0915\u094b\u0908 \u0938\u0902\u0926\u093f\u0917\u094d\u0927 \u0938\u0902\u0926\u0947\u0936 \u092a\u0947\u0938\u094d\u091f \u0915\u0930\u0947\u0902, \u092f\u093e UPI \u0914\u0930 \u0927\u094b\u0916\u093e\u0927\u0921\u093c\u0940 \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u092a\u0942\u091b\u0947\u0902\u0964"
 },
 ta:{
  k1:"\u0ba8\u0bc7\u0bb0\u0bb2\u0bc8 \u00b7 \u0ba8\u0bbf\u0ba4\u0bbf \u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bc1 \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bc1",
  k2:'\u0bae\u0bcb\u0b9a\u0b9f\u0bbf\u0baf\u0bc8 \u0ba4\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd<br><span class="grad">\u0baa\u0bb0\u0bb5\u0bc1\u0bb5\u0ba4\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd.</span>',
  k3:"\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u20b922,495 \u0b95\u0bcb\u0b9f\u0bbf\u0baf\u0bc8 UPI \u0bae\u0bcb\u0b9a\u0b9f\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0b87\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1. \u0b92\u0bb5\u0bcd\u0bb5\u0bca\u0bb0\u0bc1 \u0bae\u0bcb\u0b9a\u0b9f\u0bbf\u0baf\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bb5\u0bc8\u0bb0\u0bb8\u0bbe\u0b95 \u0b95\u0bb0\u0bc1\u0ba4\u0bc1\u0b95\u0bbf\u0bb1\u0bcb\u0bae\u0bcd - \u0b92\u0bb0\u0bc1 \u0baa\u0bc1\u0b95\u0bbe\u0bb0\u0bcd \u0b85\u0bb0\u0bc1\u0b95\u0bbf\u0bb2\u0bcd \u0b89\u0bb3\u0bcd\u0bb3 \u0b86\u0baf\u0bbf\u0bb0\u0b95\u0bcd\u0b95\u0ba3\u0b95\u0bcd\u0b95\u0bbe\u0ba9\u0bcb\u0bb0\u0bc8 \u0b92\u0bb0\u0bc1 \u0ba8\u0bca\u0b9f\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd.",
  k4:"\u0b92\u0bb0\u0bc1 \u0baa\u0bc1\u0b95\u0bbe\u0bb0\u0bcd. \u0bb2\u0b9f\u0bcd\u0b9a\u0b95\u0bcd\u0b95\u0ba3\u0b95\u0bcd\u0b95\u0bbe\u0ba9\u0bcb\u0bb0\u0bcd \u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bc1.",
  famEyebrow:"\u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa \u0b95\u0bbe\u0bb5\u0bb2\u0bb0\u0bcd",
  famH2:'\u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bc7\u0b9a\u0bbf\u0baa\u0bcd\u0baa\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc8 <span class="grad">\u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd.</span>',
  famLead:"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0bb1\u0bcd\u0bb1\u0bcb\u0bb0\u0bcd \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bc8 \u0b9a\u0bc7\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd. \u0bae\u0bcb\u0b9a\u0b9f\u0bbf \u0ba4\u0bc6\u0bb0\u0bbf\u0ba8\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0b92\u0bb0\u0bc7 \u0ba4\u0b9f\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0b8e\u0b9a\u0bcd\u0b9a\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd.",
  scamHead:"\u0bae\u0bcb\u0b9a\u0b9f\u0bbf \u0b95\u0b23\u0bcd\u0b9f\u0bb1\u0bbf\u0baf\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1", safeHead:"\u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bbe\u0b95 \u0ba4\u0bc6\u0bb0\u0bbf\u0b95\u0bbf\u0bb1\u0ba4\u0bc1",
  greeting:"\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd! \u0ba8\u0bbe\u0ba9\u0bcd <b>Sentinel</b>. \u0b9a\u0ba8\u0bcd\u0ba4\u0bc7\u0b95\u0bae\u0bbe\u0ba9 \u0b9a\u0bc6\u0baf\u0dca\u0ba4\u0bbf\u0baf\u0bc8 \u0b92\u0b9f\u0bcd\u0b9f\u0bb5\u0bc1\u0bae\u0bcd, \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 UPI \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0bae\u0bcb\u0b9a\u0b9f\u0bbf \u0baa\u0bb1\u0bcd\u0bb1\u0bbf \u0b95\u0bc7\u0b9f\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd."
 }
};
function tt(key){return (I18N[LANG]&&I18N[LANG][key])||I18N.en[key]||'';}
/* Full-page translation via Google Translate, driven by the EN/हिं/தமிழ் buttons. */
function translatePage(l,tries){
  tries=tries||0;
  var combo=document.querySelector('select.goog-te-combo');
  if(!combo){
    if(tries>25)return; /* widget script still loading - give up after ~10s */
    setTimeout(function(){translatePage(l,tries+1);},400);
    return;
  }
  if(combo.value!==l){combo.value=l;combo.dispatchEvent(new Event('change'));}
}
function setLang(l){
  LANG=l;
  document.querySelectorAll('#langsw button,.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.lang===l);});
  translatePage(l);
  if(lastScores){var vh=document.getElementById('vhead');if(vh){vh.innerHTML='<span class="ic-sm">'+(lastScam?ICONS.alert:ICONS.check)+'</span>'+(lastScam?tt('scamHead'):tt('safeHead'));}}
}

/* ---- voice / read aloud ---- */
function speakText(t){try{if(!('speechSynthesis' in window)){toast('Voice not supported','Try Chrome or Edge.');return;}speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang=(LANG==='hi'?'hi-IN':LANG==='ta'?'ta-IN':'en-IN');u.rate=0.95;speechSynthesis.speak(u);}catch(e){}}
function speakVerdict(){var v=document.getElementById('vsub');if(v)speakText(v.textContent);}

/* ---- family guardian ---- */
let familyList=[];
function renderFamily(){
  var box=document.getElementById('fam-list'),empty=document.getElementById('fam-empty');if(!box)return;
  box.querySelectorAll('.fam-item').forEach(function(n){n.remove();});
  if(familyList.length===0){if(empty)empty.style.display='block';return;}
  if(empty)empty.style.display='none';
  familyList.forEach(function(f,i){
    var el=document.createElement('div');el.className='fam-item';
    var wa='https://wa.me/'+f.phone.replace(/[^0-9]/g,'')+'?text='+encodeURIComponent('SCAM ALERT from SafePay Guard: please be careful, a scam is going around. Never share your OTP or UPI PIN. Stay safe!');
    el.innerHTML='<div class="av">'+(f.name[0]||'?').toUpperCase()+'</div><div><div class="nm">'+escapeHtml(f.name)+'</div><div class="ph">'+escapeHtml(f.phone)+'</div></div><div class="act"><a class="wa" href="'+wa+'" target="_blank" rel="noopener">Alert</a><button class="rm" onclick="removeFamily('+i+')">\u00d7</button></div>';
    box.appendChild(el);
  });
}
function addFamily(){
  var n=document.getElementById('fam-name').value.trim(),p=document.getElementById('fam-phone').value.replace(/[\s-]/g,'');
  if(n.length<1){toast('Add a name','Enter your family member\u2019s name.');return;}
  if(!/^(\+?91)?[6-9]\d{9}$/.test(p)){toast('Check the number','Enter a valid 10-digit mobile.');return;}
  familyList.push({name:n,phone:p});
  document.getElementById('fam-name').value='';document.getElementById('fam-phone').value='';
  renderFamily();
  toast('<span class="ic-sm">'+ICONS.check+'</span> Added to family circle',escapeHtml(n)+' will be protected.');
}
function removeFamily(i){familyList.splice(i,1);renderFamily();}
function alertAllFamily(){
  if(familyList.length===0){toast('No family yet','Add someone first.');return;}
  familyList.forEach(function(f){var wa='https://wa.me/'+f.phone.replace(/[^0-9]/g,'')+'?text='+encodeURIComponent('SCAM ALERT from SafePay Guard: please be careful today. Never share your OTP or UPI PIN.');window.open(wa,'_blank','noopener');});
  toast('<span class="ic-sm">'+ICONS.users+'</span> Alerting your family','Opening WhatsApp for each contact.');
}

function forgotPassword(){
  var email=document.getElementById('authEmail').value.trim(),err=document.getElementById('authErr');
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){err.textContent='Enter your email above first, then tap Forgot password.';return;}
  if(window.SafePayBackend && SafePayBackend.ready() && SafePayBackend.reset){
    err.textContent='Sending reset link\u2026';
    SafePayBackend.reset(email).then(function(){err.textContent='';toast('<span class="ic-sm">'+ICONS.check+'</span> Reset link sent','Check '+escapeHtml(email)+' to set a new password.');}).catch(function(e){err.textContent=(e&&e.message)?e.message.replace('Firebase: ',''):'Could not send reset email.';});
  } else { toast('Live site only','Password reset works on the deployed site.'); }
}


/* ---- extra translations (buttons) applied on top of setLang ---- */
const I18N_EXTRA={
 en:{ctaDemo:"Run live demo",ctaRadar:"Watch live radar",fab:"Ask Sentinel AI"},
 hi:{ctaDemo:"लाइव डेमो चलाएँ",ctaRadar:"लाइव रडार देखें",fab:"Sentinel AI से पूछें"},
 ta:{ctaDemo:"நேரலை டெமோவை இயக்கவும்",ctaRadar:"நேரலை ரேடாரைப் பார்க்கவும்",fab:"Sentinel AI-யிடம் கேளுங்கள்"}
};
const _setLangOrig=setLang;
setLang=function(l){ _setLangOrig(l); var E=I18N_EXTRA[l]||I18N_EXTRA.en; var mp={ctaDemoTxt:E.ctaDemo,ctaRadarTxt:E.ctaRadar,fabTxt:E.fab}; for(var k in mp){var e=document.getElementById(k); if(e&&mp[k]!=null)e.textContent=mp[k];} };


/* ================= PASSWORD SHOW/HIDE + CAPS LOCK ================= */
function togglePass(btn){
  var inp=document.getElementById('authPass');if(!inp)return;
  var showing=inp.type==='text';
  inp.type=showing?'password':'text';
  btn.classList.toggle('on',!showing);
  btn.setAttribute('aria-pressed',String(!showing));
  btn.setAttribute('aria-label',showing?'Show password':'Hide password');
  inp.focus();
}
function capsWarn(e){
  var w=document.getElementById('capsWarn');if(!w)return;
  var on=e.getModifierState&&e.getModifierState('CapsLock');
  w.textContent=on?'\u26A0 Caps Lock is on':'';
  w.classList.toggle('show',!!on);
}

/* ================= CONTACT COPY / REMEMBER ME / PW STRENGTH ================= */
function copyText(text,label){
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){toast('<span class="ic-sm">'+ICONS.check+'</span> '+(label||'Copied'),'Ready to paste anywhere.');}).catch(function(){_fallbackCopy(text,label);});
  } else { _fallbackCopy(text,label); }
}
function _fallbackCopy(text,label){try{var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();toast((label||'Copied'),'Ready to paste.');}catch(e){toast('Copy failed','Long-press to copy manually.');}}

function rememberSync(){
  var cb=document.getElementById('authRemember'),em=document.getElementById('authEmail');if(!cb||!em)return;
  try{if(cb.checked)localStorage.setItem('spg_email',em.value.trim());else localStorage.removeItem('spg_email');}catch(e){}
}

function pwStrength(){
  var el=document.getElementById('pwStrength');if(!el||el.style.display==='none')return;
  var v=document.getElementById('authPass').value,fill=document.getElementById('pwFill'),lab=document.getElementById('pwLabel');if(!fill||!lab)return;
  if(v.length===0){fill.style.width='0';lab.textContent='';return;}
  var s=0;if(v.length>=6)s++;if(v.length>=10)s++;if(/[A-Z]/.test(v)&&/[a-z]/.test(v))s++;if(/\d/.test(v))s++;if(/[^A-Za-z0-9]/.test(v))s++;
  var pct=[15,35,55,80,100][Math.min(s,4)];
  var col=s<=1?'#FF4D6D':s===2?'#f59e0b':s===3?'#eab308':'#22C55E';
  var txt=s<=1?'Weak':s===2?'Fair':s===3?'Good':'Strong';
  fill.style.width=pct+'%';fill.style.background=col;lab.textContent=txt;lab.style.color=col;
}

/* init: footer year, remember-me prefill, signup strength meter toggle */
(function initExtras(){
  var fy=document.getElementById('footYear');if(fy)fy.textContent=new Date().getFullYear();
  try{var saved=localStorage.getItem('spg_email');
    if(saved){var em=document.getElementById('authEmail'),cb=document.getElementById('authRemember');
      if(em)em.value=saved;if(cb)cb.checked=true;}}catch(e){}
  var em2=document.getElementById('authEmail');
  if(em2)em2.addEventListener('input',function(){var cb=document.getElementById('authRemember');if(cb&&cb.checked)rememberSync();});
  if(typeof setAuthMode==='function'){var _sam=setAuthMode;setAuthMode=function(m){_sam(m);var ps=document.getElementById('pwStrength');if(ps)ps.style.display=(m==='signup')?'flex':'none';if(m==='signup')pwStrength();};}
})();
