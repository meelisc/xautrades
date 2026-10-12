const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.onclick=()=>{m.classList.toggle('open');b.setAttribute('aria-expanded',m.classList.contains('open'))};
m.querySelectorAll('a').forEach(a=>a.onclick=()=>m.classList.remove('open'));
document.getElementById('y').textContent=new Date().getFullYear();
// draw candlesticks
const g=document.getElementById('candles'),ns='http://www.w3.org/2000/svg';let p=420,pts=[],s=7;
const rnd=()=>{s=(s*9301+49297)%233280;return s/233280};
for(let i=0;i<60;i++){const x=10+i*20,o=p,c=Math.max(80,Math.min(540,p+(rnd()-.42)*50)),h=Math.min(o,c)-rnd()*20,l=Math.max(o,c)+rnd()*20,up=c<o,col=up?'#1de9a0':'#e5484d';
const w=document.createElementNS(ns,'line');w.setAttribute('x1',x+5);w.setAttribute('x2',x+5);w.setAttribute('y1',h);w.setAttribute('y2',l);w.setAttribute('stroke',col);w.setAttribute('opacity',.55);g.appendChild(w);
const r=document.createElementNS(ns,'rect');r.setAttribute('x',x);r.setAttribute('width',10);r.setAttribute('y',Math.min(o,c));r.setAttribute('height',Math.max(2,Math.abs(c-o)));r.setAttribute('fill',col);r.setAttribute('opacity',.55);g.appendChild(r);
pts.push((x+5)+','+c);p=c}
document.getElementById('line').setAttribute('points',pts.join(' '));
