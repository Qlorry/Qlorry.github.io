import{P as Y,b as Q,W as J,V as q,e as te,R as ne,H as oe,D as ie,C as N,M as W,f as C,g as se,d as U,h as ae,i as re,j as ce,k as de,l as le,I as fe,m as he}from"./three.module-bd873f8b.js";import{d as pe}from"./shader-renderer-311361b8.js";import{d as K,r as we,_ as ue,o as Z,c as me,a as ye,b as ge,u as G}from"./index-aece37ae.js";import{u as be}from"./options-f9668639.js";var D=function(){var a=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),i(++a%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function i(d){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===d?"block":"none";a=d}var l=(performance||Date).now(),c=l,n=0,u=t(new D.Panel("FPS","#0ff","#002")),y=t(new D.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=t(new D.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){l=(performance||Date).now()},end:function(){n++;var d=(performance||Date).now();if(y.update(d-l,200),d>=c+1e3&&(u.update(n*1e3/(d-c),100),c=d,n=0,p)){var h=performance.memory;p.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return d},update:function(){l=this.end()},domElement:e,setMode:i}};D.Panel=function(a,e,t){var i=1/0,l=0,c=Math.round,n=c(window.devicePixelRatio||1),u=80*n,y=48*n,p=3*n,d=2*n,h=3*n,b=15*n,x=74*n,_=30*n,M=document.createElement("canvas");M.width=u,M.height=y,M.style.cssText="width:80px;height:48px";var f=M.getContext("2d");return f.font="bold "+9*n+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=t,f.fillRect(0,0,u,y),f.fillStyle=e,f.fillText(a,p,d),f.fillRect(h,b,x,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(h,b,x,_),{dom:M,update:function(R,P){i=Math.min(i,R),l=Math.max(l,R),f.fillStyle=t,f.globalAlpha=1,f.fillRect(0,0,u,b),f.fillStyle=e,f.fillText(c(R)+" "+a+" ("+c(i)+"-"+c(l)+")",p,d),f.drawImage(M,h+n,b,x-n,_,h,b,x-n,_),f.fillRect(h+x-n,b,n,_),f.fillStyle=t,f.globalAlpha=.9,f.fillRect(h+x-n,b,n,c((1-R/P)*_))}}};const Me=D;let o;class ve{constructor(e,t,i,l,c,n){this.body_=e,this.transform_=t,this.motionState_=i,this.shape_=l,this.inertia_=c,this.info_=n}setRestitution(e){var t;(t=this.body_)==null||t.setRestitution(e)}setFriction(e){var t;(t=this.body_)==null||t.setFriction(e)}setRollingFriction(e){var t;(t=this.body_)==null||t.setRollingFriction(e)}}class Se extends ve{constructor(e,t,i){const l=new o.btTransform;l.setIdentity(),l.setOrigin(new o.btVector3(t.x,t.y,t.z)),l.setRotation(new o.btQuaternion(0,0,0,1));const c=new o.btDefaultMotionState(l),n=new o.btSphereShape(i);n.setMargin(.05);const u=new o.btVector3(0,0,0);e>0&&n.calculateLocalInertia(e,u);const y=new o.btRigidBodyConstructionInfo(e,c,n,u),p=new o.btRigidBody(y);super(p,l,c,n,u,y)}}async function xe(){if(!("Ammo"in window)){console.error("AmmoPhysics: Couldn't find Ammo.js");return}typeof Ammo=="function"?o=await Ammo():o=Ammo;const a=60,e=new o.btDefaultCollisionConfiguration,t=new o.btCollisionDispatcher(e),i=new o.btDbvtBroadphase,l=new o.btSequentialImpulseConstraintSolver,c=new o.btDiscreteDynamicsWorld(t,i,l,e);c.setGravity(new o.btVector3(0,-9.8,0));const n=new o.btTransform;function u(s){const r=s.parameters;if(s.type==="BoxGeometry"){const m=r.width!==void 0?r.width/2:.5,g=r.height!==void 0?r.height/2:.5,w=r.depth!==void 0?r.depth/2:.5,v=new o.btBoxShape(new o.btVector3(m,g,w));return v.setMargin(.05),v}else if(s.type==="SphereGeometry"||s.type==="IcosahedronGeometry"){const m=r.radius!==void 0?r.radius:1,g=new o.btSphereShape(m);return g.setMargin(.05),g}return null}const y=[],p=new WeakMap,d=new WeakMap;function h(s,r,m=0){r!==null&&(s.isInstancedMesh?M(s,m,r):s.isMesh&&_(s,m,r))}function b(s,r,m=0){h(s,r.shape_,m)}function x(s,r=0){const m=u(s.geometry);h(s,m,r)}function _(s,r,m){const g=s.position,w=s.quaternion,v=new o.btTransform;v.setIdentity(),v.setOrigin(new o.btVector3(g.x,g.y,g.z)),v.setRotation(new o.btQuaternion(w.x,w.y,w.z,w.w));const V=new o.btDefaultMotionState(v),B=new o.btVector3(0,0,0);m.calculateLocalInertia(r,B);const z=new o.btRigidBodyConstructionInfo(r,V,m,B),I=new o.btRigidBody(z);c.addRigidBody(I),d.set(s,r),y.push(s),p.set(s,I)}function M(s,r,m){const g=s.instanceMatrix.array,w=[];for(let v=0;v<s.count;v++){const V=v*16,B=new o.btTransform;B.setFromOpenGLMatrix(g.slice(V,V+16));const z=new o.btDefaultMotionState(B),I=new o.btVector3(0,0,0);m.calculateLocalInertia(r,I);const X=new o.btRigidBodyConstructionInfo(r,z,m,I),k=new o.btRigidBody(X);c.addRigidBody(k),w.push(k)}r>0&&(y.push(s),p.set(s,w))}function f(s,r,m=0){if(s.isInstancedMesh){const w=p.get(s)[m];w.setAngularVelocity(new o.btVector3(0,0,0)),w.setLinearVelocity(new o.btVector3(0,0,0)),n.setIdentity(),n.setOrigin(new o.btVector3(r.x,r.y,r.z)),w.setWorldTransform(n)}else if(s.isMesh){const g=p.get(s);g.setAngularVelocity(new o.btVector3(0,0,0)),g.setLinearVelocity(new o.btVector3(0,0,0)),n.setIdentity(),n.setOrigin(new o.btVector3(r.x,r.y,r.z)),g.setWorldTransform(n)}}let R=0;function P(){const s=performance.now();if(R>0){const r=(s-R)/1e3;c.stepSimulation(r,10);for(let m=0,g=y.length;m<g;m++){const w=y[m],v=d.get(w);if(!(v!==void 0&&v===0)){if(w.isInstancedMesh){const V=w.instanceMatrix.array,B=p.get(w);for(let z=0;z<B.length;z++){B[z].getMotionState().getWorldTransform(n);const k=n.getOrigin(),ee=n.getRotation();Re(k,ee,V,z*16)}w.instanceMatrix.needsUpdate=!0,w.computeBoundingSphere()}else if(w.isMesh){p.get(w).getMotionState().getWorldTransform(n);const z=n.getOrigin(),I=n.getRotation();w.position.set(z.x(),z.y(),z.z()),w.quaternion.set(I.x(),I.y(),I.z(),I.w())}}}}R=s}return setInterval(P,1e3/a),{addMesh:x,addMeshAndBody:b,setMeshPosition:f}}function Re(a,e,t,i){const l=e.x(),c=e.y(),n=e.z(),u=e.w(),y=l+l,p=c+c,d=n+n,h=l*y,b=l*p,x=l*d,_=c*p,M=c*d,f=n*d,R=u*y,P=u*p,s=u*d;t[i+0]=1-(_+f),t[i+1]=b+s,t[i+2]=x-P,t[i+3]=0,t[i+4]=b-s,t[i+5]=1-(h+f),t[i+6]=M+R,t[i+7]=0,t[i+8]=x+P,t[i+9]=M-R,t[i+10]=1-(h+_),t[i+11]=0,t[i+12]=a.x(),t[i+13]=a.y(),t[i+14]=a.z(),t[i+15]=1}let F,$,O,A,H=new Y,S=new Q,E=new J,j=new Me,L,T;const _e=K({data(){return{pointer:new q(-100,-100),inTransition:!1,transitionIteration:0,transitionLength:100,stopAnimate:!1}},setup(){return{canvasRef:we(null)}},props:{backgroundColor:String},methods:{onWindowResize(){const a=this.$refs.canvasRef;let e=a.parentElement;e&&(a.width===e.clientWidth||a.height===e.clientHeight||(H.aspect=e.clientWidth/e.clientHeight,E.setSize(e.clientWidth,e.clientHeight),H.updateProjectionMatrix()))},animate(){this.stopAnimate||(this.onWindowResize(),requestAnimationFrame(this.animate),this.render(),j==null||j.update())},render(){E.render(S,H)},onPointerMove(a){a.preventDefault(),a.stopImmediatePropagation(),F.set(a.clientX/window.innerWidth*2-1,-(a.clientY/window.innerHeight)*2+1),$.setFromCamera(F,H);const e=$.intersectObjects([O],!1);if(e.length>0){const t=e[0];L.setMeshPosition(A,new te(t.point.x,A.position.y,t.point.z)),A.position.x=t.point.x,A.position.z=t.point.z,this.render()}}},async mounted(){L=await xe(),S=new Q,$=new ne,F=new q;const a=this.$refs.canvasRef,e=a.parentElement,t=e?e.clientWidth:window.innerWidth,i=e?e.clientHeight:window.innerHeight;E=new J({antialias:!0,canvas:a}),E.setPixelRatio(window.devicePixelRatio),E.setSize(t,i),E.shadowMap.enabled=!0,H=new Y(70,t/i,.1,1e3),H.position.set(4,5,0),H.lookAt(0,0,0);const l=new oe;S.add(l);const c=new ie(16777215,3);c.position.set(5,5,5),c.castShadow=!0,c.shadow.camera.zoom=2,S.add(c),S.background=new N(6710886);const n=new W(new C(10,5,10),new se({color:4473924}));n.position.y=-2.5,n.receiveShadow=!0,S.add(n),L.addMesh(n),O=new W(new C(10,5,10),new U({color:6710886})),O.position.y=-2.5,S.add(O);const u=new U({color:16711680});u.opacity=0,u.transparent=!0;let y=new W(new C(1,105,4),u);y.position.y=0,y.position.z=0,y.position.x=2.5,S.add(y),L.addMesh(y);let p=new W(new C(4,105,1),u);p.position.y=0,p.position.z=-2.5,p.position.x=0,S.add(p),L.addMesh(p);let d=new W(new C(4,105,1),u);d.position.y=0,d.position.z=2.5,d.position.x=0,S.add(d),L.addMesh(d);let h=new W(new C(1,105,4),u);h.position.y=0,h.position.z=0,h.position.x=-2.5,S.add(h),L.addMesh(h),A=new W(new ae(1,10,10),u),A.position.y=-.5,A.position.z=0,A.position.x=0,S.add(A),L.addMesh(A),new re;const b=new ce,x=new N;new de().load("/models/suzanne_buffergeometry.json",M=>{M.computeVertexNormals(),M.scale(.07,.07,.07);const f=new le;T=new fe(M,f,500),T.instanceMatrix.setUsage(he),S.add(T),T.castShadow=!0,T.receiveShadow=!0;for(let P=0;P<T.count;P++)b.setPosition(Math.random()-.5,Math.random()*2,Math.random()-.5),T.setMatrixAt(P,b),T.setColorAt(P,x.setHex(16777215*Math.random()));const R=new Se(1,T.position,.075);L.addMeshAndBody(T,R,1)}),window.addEventListener("resize",this.onWindowResize),e==null||e.addEventListener("resize",this.onWindowResize),document.addEventListener("pointermove",this.onPointerMove),a.addEventListener("mousemove",this.onPointerMove,{passive:!1}),a.addEventListener("touchmove",this.onPointerMove,{passive:!1}),a.addEventListener("touchstart",this.onPointerMove,{passive:!1}),a.addEventListener("touchcancel",this.onPointerMove,{passive:!1}),a.addEventListener("touchend",this.onPointerMove,{passive:!1}),this.onWindowResize(),this.animate()},unmounted(){this.stopAnimate=!0,pe(S)}}),ze={class:"flex-grow-1 p-0 m-0 mw-100 mh-100 overflow-hidden"},Pe={ref:"canvasRef"};function Ie(a,e,t,i,l,c){return Z(),me("div",ze,[ye("canvas",Pe,null,512)])}const Ae=ue(_e,[["render",Ie]]),We=K({__name:"FlowerTrackerView",setup(a){const e=be();return(t,i)=>(Z(),ge(Ae,{"lines-count":G(e).numOfLines,"points-count":G(e).numOfPoints,"background-color":G(e).backgroundColor,"line-color":G(e).lineColor},null,8,["lines-count","points-count","background-color","line-color"]))}});export{We as default};