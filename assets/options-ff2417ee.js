import{e as D}from"./index-f5a9788a.js";function g(o,a){return Math.round(Math.floor(Math.random()*(a-o+1))+o)}function w(o,a,l,n=10,u=10,e=3,c=5){let r=[];const C=a/(e*2),P=a/(e*2)*(e*2-1);for(let s=0;s<o;s++){r.push(Array(a));for(let t=0;t<a;t++)t<=C+Math.random()*a/c||t>=P-Math.random()*a/c?r[s][t]=Math.sin(Math.random()):r[s][t]=-1;const V=Math.round(a/e),b=Math.round(V/100*u);let m=[];for(let t=0;t<b;t++)m.push([g(a/e,2*(a/e)),g(n,l)]);m.forEach(t=>{r[s][t[0]]==-1&&(r[s][t[0]]=t[1])}),r[s].forEach((t,f,h)=>{if(t===-1){const d=h[f-1];let M=-1,i=f+1;for(;i<h.length;){if(h[i]!==-1){M=h[i];break}i++}const O=d+(M-d)/(i-f);h[f]=O+Math.random()}})}return r}function A(o,a){let l=[];for(let n=0;n<o;n++){l.push(Array(a));for(let u=0;u<a;u++)l[n][u]=Math.sin(Math.random()*3.5)}return l}const E=D("options",{state:()=>({lineColor:"#00bd7e",backgroundColor:"#000",numOfLines:150,numOfPoints:200}),actions:{setLineColor(o){this.lineColor=o},setBackgroundColor(o){this.backgroundColor=o},setLines(o){this.numOfLines=o},setPoints(o){this.numOfPoints=o}}});export{A as a,w as c,E as u};