const v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function g(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=g(s);fetch(s.href,o)}};v();const f="https://i.ibb.co/Mn3MJRC/Punk-idle.png",b="https://i.ibb.co/swSZ1Sn/Punk-jump.png",k="https://i.ibb.co/5WRTX2w/Punk-run.png",n="https://i.ibb.co/TTNJ1mK/platform.png",y="https://i.ibb.co/CQ4nsW0/bg-11.jpg";function u(e){let r=new Image;return r.src=e,r}const t=document.querySelector("#canvas");let w=u(y);t.width=w.width;t.height=w.height;const p=t.getContext("2d"),S=2;class I{constructor(){this.position={x:100,y:0},this.image=new Image,this.image.src=f,this.width=66,this.height=150,this.frames=1,this.speed=5,this.jump=20,this.finish=!1,this.sprites={stand:{img:f},run:{img:k},jump:{img:b}},this.activeSprite=this.sprites.stand.img,this.velocity={x:0,y:.1}}draw(){this.finish?(p.font="60px Arial",p.fillText("You Won",t.width/2-30,t.height/2-30)):p.drawImage(u(this.activeSprite),48*this.frames,0,48,48,this.position.x,this.position.y,this.width,this.height)}update(){this.frames++,this.draw(),this.frames>3&&(this.frames=1),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.position.y+this.height+this.velocity.y<=t.height?this.velocity.y+=S:this.position.y>t.height&&(this.position.x=100,this.velocity.y=0,this.position.y=0)}}class a{constructor({x:r,y:g,img:c}){this.position={x:r,y:g},this.image=new Image,this.image.src=c,this.width=this.image.width,this.height=this.image.height}draw(){p.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}class E{constructor({x:r,y:g,img:c}){this.position={x:r,y:g},this.image=new Image,this.image.src=c,this.width=this.image.width,this.height=this.image.height}draw(){p.drawImage(this.image,this.position.x,this.position.y)}}const i=new I,j=[new E({x:0,y:0,img:y})],l=[new a({x:0,y:t.height-20,img:n}),new a({x:250,y:t.height-60,img:n}),new a({x:450,y:t.height-20,img:n}),new a({x:650,y:t.height-80,img:n}),new a({x:850,y:t.height-60,img:n}),new a({x:1050,y:t.height-20,img:n}),new a({x:1250,y:t.height-80,img:n})],h={right:{pressed:!1},left:{pressed:!1}};let d=0;function x(){requestAnimationFrame(x),p.clearRect(0,0,t.width,t.height),j.forEach(e=>{e.draw()}),l.forEach(e=>{e.draw()}),i.update(),h.right.pressed&&i.position.x<=400?(i.velocity.x=i.speed,d+=i.speed):h.left.pressed&&i.position.x>=100?(i.velocity.x=-i.speed,d-=i.speed):(i.velocity.x=0,h.right.pressed?l.forEach(e=>{e.position.x-=i.speed,d+=i.speed}):h.left.pressed&&l.forEach(e=>{e.position.x+=i.speed,d-=i.speed})),l.forEach(e=>{i.position.y+i.height<=e.position.y&&i.position.y+i.height+i.velocity.y>=e.position.y&&i.position.x>=e.position.x&&i.position.x<e.position.x+e.width&&(i.velocity.y=0)}),d>7e3?i.finish=!0:i.finish=!1}x();addEventListener("keydown",({keyCode:e})=>{switch(e){case 65:h.left.pressed=!0,i.activeSprite=i.sprites.run.img;break;case 83:break;case 68:h.right.pressed=!0,i.activeSprite=i.sprites.run.img;break;case 87:i.velocity.y-=i.jump,i.activeSprite=i.sprites.jump.img;break}});addEventListener("keyup",({keyCode:e})=>{switch(e){case 65:h.left.pressed=!1,i.activeSprite=i.sprites.stand.img;break;case 83:break;case 68:h.right.pressed=!1,i.activeSprite=i.sprites.stand.img;break;case 87:i.activeSprite=i.sprites.stand.img;break}});
