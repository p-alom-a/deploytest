var bm=Object.defineProperty;var Pm=(n,e,t)=>e in n?bm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Z=(n,e,t)=>Pm(n,typeof e!="symbol"?e+"":e,t);import{P as Tm,g as Im,S as Rm,R as Et,a as j0,r as Ne,j as x,E as Ct,M as fA,b as fu,V as se,c as Qm,Q as gt,O as K0,L as q0,B as X0,F as J0,d as Z0,G as Di,e as Um,C as qs,f as hn,h as Ot,i as Xs,k as fo,T as du,l as Lm,m as qA,n as Af}from"./index-S-2s4LPC.js";function Fm(n,e,t){if(!(e instanceof globalThis.MouseEvent))return t.set(0,0);const{width:i,height:A,top:r,left:s}=n.getBoundingClientRect(),a=e.clientX-s,o=e.clientY-r;return t.set(a/i*2-1,-(o/A)*2+1)}function Om(n,e,t,i){return Nm(n,typeof e=="function"?e:()=>e,t,Fm.bind(null,n),n.setPointerCapture.bind(n),n.releasePointerCapture.bind(n),{pointerTypePrefix:"screen-",...i})}function Nm(n,e,t,i,A,r,s={}){const a=(s==null?void 0:s.forwardPointerCapture)??!0,o=new Map,c=s.pointerTypePrefix??"forward-",l=(S,Q)=>{let M=o.get(S.pointerId);return M!=null||(M=new Tm(Im(),`${c}${S.pointerType}`,S.pointerState,new Rm((w,P)=>(i(w,P),e()),s),e,void 0,a?A.bind(null,S.pointerId):void 0,a?r.bind(null,S.pointerId):void 0,s),Q!="move"&&Q!="wheel"&&(M.setIntersection(M.computeIntersection("pointer",t,S)),M.commit(S,!1)),o.set(S.pointerId,M)),M},u=new Map,f=new Map,p=[],g=[],m=(S,Q,M)=>{switch(S){case"move":M.move(t,Q);return;case"wheel":M.wheel(t,Q);return;case"cancel":M.cancel(Q);return;case"down":if(!rf(Q))return;M.down(Q);return;case"up":if(!rf(Q))return;M.up(Q);return;case"exit":f.delete(M),u.delete(M),M.exit(Q);return}},d=(S,Q)=>{const M=l(Q,S);S==="move"&&f.set(M,Q),S==="wheel"&&u.set(M,Q),s.batchEvents??!0?g.push({type:S,event:Q}):m(S,Q,M)},h=d.bind(null,"move"),y=d.bind(null,"cancel"),v=d.bind(null,"down"),B=d.bind(null,"up"),b=d.bind(null,"wheel"),C=d.bind(null,"exit");return n.addEventListener("pointermove",h),n.addEventListener("pointercancel",y),n.addEventListener("pointerdown",v),n.addEventListener("pointerup",B),n.addEventListener("wheel",b),n.addEventListener("pointerleave",C),{destroy(){n.removeEventListener("pointermove",h),n.removeEventListener("pointercancel",y),n.removeEventListener("pointerdown",v),n.removeEventListener("pointerup",B),n.removeEventListener("wheel",b),n.removeEventListener("pointerleave",C),f.clear(),u.clear()},update(){const S=g.length;for(let Q=0;Q<S;Q++){const{type:M,event:w}=g[Q],P=l(w,M);if(M==="move"&&(p.push(P),f.get(P)!=w)){P.emitMove(w);continue}if(M==="wheel"&&u.get(P)!=w){P.emitWheel(w);continue}m(M,w,P)}if(g.length=0,s.intersectEveryFrame??!1)for(const[Q,M]of f.entries())p.includes(Q)||Q.move(t,M);p.length=0}}}function rf(n){return n.button!=null}const sf=n=>{let e;const t=new Set,i=(c,l)=>{const u=typeof c=="function"?c(e):c;if(!Object.is(u,e)){const f=e;e=l??(typeof u!="object"||u===null)?u:Object.assign({},e,u),t.forEach(p=>p(e,f))}},A=()=>e,a={setState:i,getState:A,getInitialState:()=>o,subscribe:c=>(t.add(c),()=>t.delete(c))},o=e=n(i,A,a);return a},km=n=>n?sf(n):sf,zm=n=>n;function Gm(n,e=zm){const t=Et.useSyncExternalStore(n.subscribe,()=>e(n.getState()),()=>e(n.getInitialState()));return Et.useDebugValue(t),t}const af=n=>{const e=km(n),t=i=>Gm(e,i);return Object.assign(t,e),t},$0=n=>n?af(n):af;var ep={exports:{}},Hm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Wm=Hm,Ym=Wm;function tp(){}function np(){}np.resetWarningCache=tp;var Vm=function(){function n(i,A,r,s,a,o){if(o!==Ym){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:np,resetWarningCache:tp};return t.PropTypes=t,t};ep.exports=Vm();var jm=ep.exports;const Xe=j0(jm);var ip=1e-6,pn=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var n=0,e=arguments.length;e--;)n+=arguments[e]*arguments[e];return Math.sqrt(n)});function Km(){var n=new pn(9);return pn!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[5]=0,n[6]=0,n[7]=0),n[0]=1,n[4]=1,n[8]=1,n}function Kt(){var n=new pn(16);return pn!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function qm(n){var e=new pn(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function Ap(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function Xm(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function rp(n,e){var t=e[0],i=e[1],A=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],h=e[15],y=t*a-i*s,v=t*o-A*s,B=t*c-r*s,b=i*o-A*a,C=i*c-r*a,S=A*c-r*o,Q=l*m-u*g,M=l*d-f*g,w=l*h-p*g,P=u*d-f*m,G=u*h-p*m,L=f*h-p*d,k=y*L-v*G+B*P+b*w-C*M+S*Q;return k?(k=1/k,n[0]=(a*L-o*G+c*P)*k,n[1]=(A*G-i*L-r*P)*k,n[2]=(m*S-d*C+h*b)*k,n[3]=(f*C-u*S-p*b)*k,n[4]=(o*w-s*L-c*M)*k,n[5]=(t*L-A*w+r*M)*k,n[6]=(d*B-g*S-h*v)*k,n[7]=(l*S-f*B+p*v)*k,n[8]=(s*G-a*w+c*Q)*k,n[9]=(i*w-t*G-r*Q)*k,n[10]=(g*C-m*B+h*y)*k,n[11]=(u*B-l*C-p*y)*k,n[12]=(a*M-s*P-o*Q)*k,n[13]=(t*P-i*M+A*Q)*k,n[14]=(m*v-g*b-d*y)*k,n[15]=(l*b-u*v+f*y)*k,n):null}function Lo(n,e,t){var i=e[0],A=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],p=e[10],g=e[11],m=e[12],d=e[13],h=e[14],y=e[15],v=t[0],B=t[1],b=t[2],C=t[3];return n[0]=v*i+B*a+b*u+C*m,n[1]=v*A+B*o+b*f+C*d,n[2]=v*r+B*c+b*p+C*h,n[3]=v*s+B*l+b*g+C*y,v=t[4],B=t[5],b=t[6],C=t[7],n[4]=v*i+B*a+b*u+C*m,n[5]=v*A+B*o+b*f+C*d,n[6]=v*r+B*c+b*p+C*h,n[7]=v*s+B*l+b*g+C*y,v=t[8],B=t[9],b=t[10],C=t[11],n[8]=v*i+B*a+b*u+C*m,n[9]=v*A+B*o+b*f+C*d,n[10]=v*r+B*c+b*p+C*h,n[11]=v*s+B*l+b*g+C*y,v=t[12],B=t[13],b=t[14],C=t[15],n[12]=v*i+B*a+b*u+C*m,n[13]=v*A+B*o+b*f+C*d,n[14]=v*r+B*c+b*p+C*h,n[15]=v*s+B*l+b*g+C*y,n}function qr(n,e){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function of(n,e,t){var i=t[0],A=t[1],r=t[2],s=Math.hypot(i,A,r),a,o,c;return s<ip?null:(s=1/s,i*=s,A*=s,r*=s,a=Math.sin(e),o=Math.cos(e),c=1-o,n[0]=i*i*c+o,n[1]=A*i*c+r*a,n[2]=r*i*c-A*a,n[3]=0,n[4]=i*A*c-r*a,n[5]=A*A*c+o,n[6]=r*A*c+i*a,n[7]=0,n[8]=i*r*c+A*a,n[9]=A*r*c-i*a,n[10]=r*r*c+o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n)}function ra(n,e,t){var i=e[0],A=e[1],r=e[2],s=e[3],a=i+i,o=A+A,c=r+r,l=i*a,u=i*o,f=i*c,p=A*o,g=A*c,m=r*c,d=s*a,h=s*o,y=s*c;return n[0]=1-(p+m),n[1]=u+y,n[2]=f-h,n[3]=0,n[4]=u-y,n[5]=1-(l+m),n[6]=g+d,n[7]=0,n[8]=f+h,n[9]=g-d,n[10]=1-(l+p),n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Js(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Ml(n,e){var t=e[0],i=e[1],A=e[2],r=e[4],s=e[5],a=e[6],o=e[8],c=e[9],l=e[10];return n[0]=Math.hypot(t,i,A),n[1]=Math.hypot(r,s,a),n[2]=Math.hypot(o,c,l),n}function ho(n,e){var t=new pn(3);Ml(t,e);var i=1/t[0],A=1/t[1],r=1/t[2],s=e[0]*i,a=e[1]*A,o=e[2]*r,c=e[4]*i,l=e[5]*A,u=e[6]*r,f=e[8]*i,p=e[9]*A,g=e[10]*r,m=s+l+g,d=0;return m>0?(d=Math.sqrt(m+1)*2,n[3]=.25*d,n[0]=(u-p)/d,n[1]=(f-o)/d,n[2]=(a-c)/d):s>l&&s>g?(d=Math.sqrt(1+s-l-g)*2,n[3]=(u-p)/d,n[0]=.25*d,n[1]=(a+c)/d,n[2]=(f+o)/d):l>g?(d=Math.sqrt(1+l-s-g)*2,n[3]=(f-o)/d,n[0]=(a+c)/d,n[1]=.25*d,n[2]=(u+p)/d):(d=Math.sqrt(1+g-s-l)*2,n[3]=(a-c)/d,n[0]=(f+o)/d,n[1]=(u+p)/d,n[2]=.25*d),n}function Jm(n,e,t,i){var A=e[0],r=e[1],s=e[2],a=e[3],o=A+A,c=r+r,l=s+s,u=A*o,f=A*c,p=A*l,g=r*c,m=r*l,d=s*l,h=a*o,y=a*c,v=a*l,B=i[0],b=i[1],C=i[2];return n[0]=(1-(g+d))*B,n[1]=(f+v)*B,n[2]=(p-y)*B,n[3]=0,n[4]=(f-v)*b,n[5]=(1-(u+d))*b,n[6]=(m+h)*b,n[7]=0,n[8]=(p+y)*C,n[9]=(m-h)*C,n[10]=(1-(u+g))*C,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Zm(n,e,t,i,A){var r=1/Math.tan(e/2),s;return n[0]=r/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,A!=null&&A!==1/0?(s=1/(i-A),n[10]=(A+i)*s,n[14]=2*A*i*s):(n[10]=-1,n[14]=-2*i),n}var cf=Zm;function jt(){var n=new pn(3);return pn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function $m(n){var e=n[0],t=n[1],i=n[2];return Math.hypot(e,t,i)}function jn(n,e,t){var i=new pn(3);return i[0]=n,i[1]=e,i[2]=t,i}function cc(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function Os(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function e1(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function sp(n,e){var t=e[0],i=e[1],A=e[2],r=t*t+i*i+A*A;return r>0&&(r=1/Math.sqrt(r)),n[0]=e[0]*r,n[1]=e[1]*r,n[2]=e[2]*r,n}function ap(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function $a(n,e,t){var i=e[0],A=e[1],r=e[2],s=t[0],a=t[1],o=t[2];return n[0]=A*o-r*a,n[1]=r*s-i*o,n[2]=i*a-A*s,n}function _l(n,e,t,i){var A=e[0],r=e[1],s=e[2];return n[0]=A+i*(t[0]-A),n[1]=r+i*(t[1]-r),n[2]=s+i*(t[2]-s),n}function t1(n,e,t){var i=t[0],A=t[1],r=t[2],s=t[3],a=e[0],o=e[1],c=e[2],l=A*c-r*o,u=r*a-i*c,f=i*o-A*a,p=A*f-r*u,g=r*l-i*f,m=i*u-A*l,d=s*2;return l*=d,u*=d,f*=d,p*=2,g*=2,m*=2,n[0]=a+l+p,n[1]=o+u+g,n[2]=c+f+m,n}var n1=$m;(function(){var n=jt();return function(e,t,i,A,r,s){var a,o;for(t||(t=3),i||(i=0),A?o=Math.min(A*t+i,e.length):o=e.length,a=i;a<o;a+=t)n[0]=e[a],n[1]=e[a+1],n[2]=e[a+2],r(n,n,s),e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2];return e}})();function yl(){var n=new pn(4);return pn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function i1(n,e,t,i){var A=new pn(4);return A[0]=n,A[1]=e,A[2]=t,A[3]=i,A}function A1(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function Bl(n,e,t,i,A){return n[0]=e,n[1]=t,n[2]=i,n[3]=A,n}function r1(n,e){var t=e[0],i=e[1],A=e[2],r=e[3],s=t*t+i*i+A*A+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=t*s,n[1]=i*s,n[2]=A*s,n[3]=r*s,n}function lf(n,e,t){var i=e[0],A=e[1],r=e[2],s=e[3];return n[0]=t[0]*i+t[4]*A+t[8]*r+t[12]*s,n[1]=t[1]*i+t[5]*A+t[9]*r+t[13]*s,n[2]=t[2]*i+t[6]*A+t[10]*r+t[14]*s,n[3]=t[3]*i+t[7]*A+t[11]*r+t[15]*s,n}(function(){var n=yl();return function(e,t,i,A,r,s){var a,o;for(t||(t=4),i||(i=0),A?o=Math.min(A*t+i,e.length):o=e.length,a=i;a<o;a+=t)n[0]=e[a],n[1]=e[a+1],n[2]=e[a+2],n[3]=e[a+3],r(n,n,s),e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3];return e}})();function qn(){var n=new pn(4);return pn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n[3]=1,n}function op(n,e,t){t=t*.5;var i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function s1(n,e,t){var i=e[0],A=e[1],r=e[2],s=e[3],a=t[0],o=t[1],c=t[2],l=t[3];return n[0]=i*l+s*a+A*c-r*o,n[1]=A*l+s*o+r*a-i*c,n[2]=r*l+s*c+i*o-A*a,n[3]=s*l-i*a-A*o-r*c,n}function Ws(n,e,t,i){var A=e[0],r=e[1],s=e[2],a=e[3],o=t[0],c=t[1],l=t[2],u=t[3],f,p,g,m,d;return p=A*o+r*c+s*l+a*u,p<0&&(p=-p,o=-o,c=-c,l=-l,u=-u),1-p>ip?(f=Math.acos(p),g=Math.sin(f),m=Math.sin((1-i)*f)/g,d=Math.sin(i*f)/g):(m=1-i,d=i),n[0]=m*A+d*o,n[1]=m*r+d*c,n[2]=m*s+d*l,n[3]=m*a+d*u,n}function a1(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function o1(n,e){var t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{var A=0;e[4]>e[0]&&(A=1),e[8]>e[A*3+A]&&(A=2);var r=(A+1)%3,s=(A+2)%3;i=Math.sqrt(e[A*3+A]-e[r*3+r]-e[s*3+s]+1),n[A]=.5*i,i=.5/i,n[3]=(e[r*3+s]-e[s*3+r])*i,n[r]=(e[r*3+A]+e[A*3+r])*i,n[s]=(e[s*3+A]+e[A*3+s])*i}return n}var po=i1,lc=A1,uf=Bl,Fo=r1;(function(){var n=jt(),e=jn(1,0,0),t=jn(0,1,0);return function(i,A,r){var s=ap(A,r);return s<-.999999?($a(n,e,A),n1(n)<1e-6&&$a(n,t,A),sp(n,n),op(i,n,Math.PI),i):s>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):($a(n,A,r),i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=1+s,Fo(i,i))}})();(function(){var n=qn(),e=qn();return function(t,i,A,r,s,a){return Ws(n,i,s,a),Ws(e,A,r,a),Ws(t,n,e,2*a*(1-a)),t}})();(function(){var n=Km();return function(e,t,i,A){return n[0]=i[0],n[3]=i[1],n[6]=i[2],n[1]=A[0],n[4]=A[1],n[7]=A[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],Fo(e,o1(e,n))}})();const Ve=Symbol("@iwer/action-player"),Rn=Symbol("@iwer/xr-anchor"),uc=Symbol("@iwer/xr-controller"),K=Symbol("@iwer/xr-device"),gA=Symbol("@iwer/xr-hand-input"),Bt=Symbol("@iwer/xr-tracked-input"),st=Symbol("@iwer/xr-frame"),Be=Symbol("@iwer/gamepad"),Qn=Symbol("@iwer/xr-system"),Fi=Symbol("@iwer/xr-input-source"),Ki=Symbol("@iwer/xr-webgl-layer"),Xi=Symbol("@iwer/xr-mesh"),Ji=Symbol("@iwer/xr-plane"),ff=Symbol("@iwer/xr-joint-pose"),ws=Symbol("@iwer/xr-pose"),df=Symbol("@iwer/xr-viewer-pose"),vn=Symbol("@iwer/xr-rigid-transform"),Es=Symbol("@iwer/xr-render-state"),R=Symbol("@iwer/xr-session"),FA=Symbol("@iwer/xr-joint-space"),Zi=Symbol("@iwer/xr-reference-space"),Ut=Symbol("@iwer/xr-space"),DA=Symbol("@iwer/xr-view"),Ms=Symbol("@iwer/xr-viewport"),xn=Symbol("@iwer/xr-ray"),yi=Symbol("@iwer/xr-hit-test");class bt extends EventTarget{constructor(e,t){super(),this[Ut]={parentSpace:e,offsetMatrix:t?qm(t):Kt(),emulated:!0}}}class c1 extends bt{constructor(){super(void 0,Kt())}}class Xr{static updateOffsetPosition(e,t){const i=e[Ut].offsetMatrix;qr(i,t)}static updateOffsetQuaternion(e,t){const i=e[Ut].offsetMatrix,A=jt();Js(A,i),ra(i,t,A)}static updateOffsetMatrix(e,t){const i=e[Ut].offsetMatrix;Ap(i,t)}static calculateGlobalOffsetMatrix(e,t=Kt()){const i=e[Ut].parentSpace?Xr.calculateGlobalOffsetMatrix(e[Ut].parentSpace):Kt();return Lo(t,i,e[Ut].offsetMatrix),t}}let OA=class cp{constructor(e=0,t=0,i=0){this.vec3=jn(e,t,i),this.tempVec3=jt()}get x(){return this.vec3[0]}set x(e){this.vec3[0]=e}get y(){return this.vec3[1]}set y(e){this.vec3[1]=e}get z(){return this.vec3[2]}set z(e){this.vec3[2]=e}set(e,t,i){return Os(this.vec3,e,t,i),this}clone(){return new cp(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}normalize(){return cc(this.tempVec3,this.vec3),sp(this.vec3,this.tempVec3),this}add(e){return cc(this.tempVec3,this.vec3),e1(this.vec3,this.tempVec3,e.vec3),this}applyQuaternion(e){return cc(this.tempVec3,this.vec3),t1(this.vec3,this.tempVec3,e.quat),this}},Ys=class lp{constructor(e=0,t=0,i=0,A=1){this.quat=po(e,t,i,A),this.tempQuat=qn()}get x(){return this.quat[0]}set x(e){this.quat[0]=e}get y(){return this.quat[1]}set y(e){this.quat[1]=e}get z(){return this.quat[2]}set z(e){this.quat[2]=e}get w(){return this.quat[3]}set w(e){this.quat[3]=e}set(e,t,i,A){return uf(this.quat,e,t,i,A),this}clone(){return new lp(this.x,this.y,this.z,this.w)}copy(e){return uf(this.quat,e.x,e.y,e.z,e.w),this}normalize(){return lc(this.tempQuat,this.quat),Fo(this.quat,this.tempQuat),this}invert(){return lc(this.tempQuat,this.quat),a1(this.quat,this.tempQuat),this}multiply(e){return lc(this.tempQuat,this.quat),s1(this.quat,this.tempQuat,e.quat),this}setFromAxisAngle(e,t){return op(this.quat,e.vec3,t),this}};var Zs;(function(n){n.None="",n.Standard="standard",n.XRStandard="xr-standard"})(Zs||(Zs={}));class up{constructor(e,t){this[Be]={type:e,eventTrigger:t,pressed:!1,touched:!1,value:0,lastFrameValue:0,pendingValue:null}}get pressed(){return this[Be].type==="manual"?this[Be].pressed:this[Be].value>0}get touched(){return this[Be].type==="manual"?this[Be].touched:this[Be].touched||this.pressed}get value(){return this[Be].value}}class l1{constructor(){this.pressed=!1,this.touched=!1,this.value=0}}class hu{constructor(e,t="",i=-1){this[Be]={id:t,index:i,connected:!1,timestamp:performance.now(),mapping:e.mapping,buttonsMap:{},buttonsSequence:[],axesMap:{},axesSequence:[],hapticActuators:[]},e.buttons.forEach(A=>{var r;A===null?this[Be].buttonsSequence.push(null):(this[Be].buttonsSequence.push(A.id),this[Be].buttonsMap[A.id]=new up(A.type,(r=A.eventTrigger)!==null&&r!==void 0?r:null))}),e.axes.forEach(A=>{A===null?this[Be].axesSequence.push(null):(this[Be].axesSequence.push(A.id+A.type),this[Be].axesMap[A.id]||(this[Be].axesMap[A.id]={x:0,y:0}))})}get id(){return this[Be].id}get index(){return this[Be].index}get connected(){return this[Be].connected}get timestamp(){return this[Be].timestamp}get mapping(){return this[Be].mapping}get axes(){const e=[];return this[Be].axesSequence.forEach(t=>{if(t===null)e.push(null);else{const i=t.substring(0,t.length-6),A=t.substring(t.length-6);e.push(A==="y-axis"?this[Be].axesMap[i].y:this[Be].axesMap[i].x)}}),e}get buttons(){return this[Be].buttonsSequence.map(e=>e===null?new l1:this[Be].buttonsMap[e])}get hapticActuators(){return this[Be].hapticActuators}get vibrationActuator(){return null}}var Bn;(function(n){n.None="none",n.Left="left",n.Right="right"})(Bn||(Bn={}));var go;(function(n){n.Gaze="gaze",n.TrackedPointer="tracked-pointer",n.Screen="screen",n.TransientPointer="transient-pointer"})(go||(go={}));class u1 extends Array{}class Oo{constructor(e,t,i,A,r,s,a){this[Fi]={handedness:e,targetRayMode:t,targetRaySpace:A,gripSpace:s,profiles:i,gamepad:r,hand:a}}get handedness(){return this[Fi].handedness}get targetRayMode(){return this[Fi].targetRayMode}get targetRaySpace(){return this[Fi].targetRaySpace}get gripSpace(){return this[Fi].gripSpace}get profiles(){return this[Fi].profiles}get gamepad(){return this[Fi].gamepad}get hand(){return this[Fi].hand}}class eo extends Event{constructor(e,t){if(super(e,t),!t.frame)throw new Error("XRInputSourceEventInit.frame is required");if(!t.inputSource)throw new Error("XRInputSourceEventInit.inputSource is required");this.frame=t.frame,this.inputSource=t.inputSource}}const hf={[Bn.Left]:{position:new OA(-.25,1.5,-.4),quaternion:new Ys},[Bn.Right]:{position:new OA(.25,1.5,-.4),quaternion:new Ys},[Bn.None]:{position:new OA(.25,1.5,-.4),quaternion:new Ys}};class fp{constructor(e){this[Bt]={inputSource:e,position:hf[e.handedness].position.clone(),quaternion:hf[e.handedness].quaternion.clone(),connected:!0,lastFrameConnected:!1,inputSourceChanged:!0}}get position(){return this[Bt].position}get quaternion(){return this[Bt].quaternion}get inputSource(){return this[Bt].inputSource}get connected(){return this[Bt].connected}set connected(e){this[Bt].connected=e,this[Bt].inputSource.gamepad[Be].connected=e}onFrameStart(e){const t=this[Bt].inputSource.targetRaySpace;ra(t[Ut].offsetMatrix,this[Bt].quaternion.quat,this[Bt].position.vec3);const i=e.session;this[Bt].inputSource.gamepad.buttons.forEach(A=>{A instanceof up&&(A[Be].lastFrameValue=A[Be].value,A[Be].pendingValue!=null&&(A[Be].value=A[Be].pendingValue,A[Be].pendingValue=null),A[Be].eventTrigger!=null&&(A[Be].lastFrameValue===0&&A[Be].value>0?(i.dispatchEvent(new eo(A[Be].eventTrigger,{frame:e,inputSource:this[Bt].inputSource})),i.dispatchEvent(new eo(A[Be].eventTrigger+"start",{frame:e,inputSource:this[Bt].inputSource}))):A[Be].lastFrameValue>0&&A[Be].value===0&&i.dispatchEvent(new eo(A[Be].eventTrigger+"end",{frame:e,inputSource:this[Bt].inputSource}))))}),this[Bt].inputSourceChanged=this.connected!==this[Bt].lastFrameConnected,this[Bt].lastFrameConnected=this.connected}}class f1 extends fp{constructor(e,t,i){if(!e.layout[t])throw new DOMException("Handedness not supported","InvalidStateError");const A=new bt(i),r=e.layout[t].gripOffsetMatrix?new bt(A,e.layout[t].gripOffsetMatrix):void 0,s=[e.profileId,...e.fallbackProfileIds],a=new Oo(t,go.TrackedPointer,s,A,new hu(e.layout[t].gamepad),r);super(a),this[uc]={profileId:e.profileId,gamepadConfig:e.layout[t].gamepad}}get gamepadConfig(){return this[uc].gamepadConfig}get profileId(){return this[uc].profileId}updateButtonValue(e,t){if(t>1||t<0){console.warn(`Out-of-range value ${t} provided for button ${e}.`);return}const i=this[Bt].inputSource.gamepad[Be].buttonsMap[e];if(i){if(i[Be].type==="binary"&&t!=1&&t!=0){console.warn(`Non-binary value ${t} provided for binary button ${e}.`);return}i[Be].pendingValue=t}else console.warn(`Current controller does not have button ${e}.`)}updateButtonTouch(e,t){const i=this[Bt].inputSource.gamepad[Be].buttonsMap[e];i?i[Be].touched=t:console.warn(`Current controller does not have button ${e}.`)}updateAxis(e,t,i){if(i>1||i<-1){console.warn(`Out-of-range value ${i} provided for ${e} axes.`);return}const A=this[Bt].inputSource.gamepad[Be].axesMap[e];A?t==="x-axis"?A.x=i:t==="y-axis"&&(A.y=i):console.warn(`Current controller does not have ${e} axes.`)}updateAxes(e,t,i){if(t>1||t<-1||i>1||i<-1){console.warn(`Out-of-range value x:${t}, y:${i} provided for ${e} axes.`);return}const A=this[Bt].inputSource.gamepad[Be].axesMap[e];A?(A.x=t,A.y=i):console.warn(`Current controller does not have ${e} axes.`)}}class d1{constructor(e,t,i,A,r){this[Xi]={nativeMesh:e,frame:void 0,meshSpace:t,vertices:i,indices:A,lastChangedTime:performance.now(),semanticLabel:r}}get meshSpace(){return this[Xi].meshSpace}get vertices(){return this[Xi].vertices}get indices(){return this[Xi].indices}get lastChangedTime(){return this[Xi].lastChangedTime}get semanticLabel(){return this[Xi].semanticLabel}}class h1 extends Set{}class p1{constructor(e,t,i,A){this.transform=e,this.vertices=t,this.indices=i,this.semanticLabel=A}}var je;(function(n){n.Desk="desk",n.Couch="couch",n.Floor="floor",n.Ceiling="ceiling",n.Wall="wall",n.Door="door",n.Window="window",n.Table="table",n.Shelf="shelf",n.Bed="bed",n.Screen="screen",n.Lamp="lamp",n.Plant="plant",n.WallArt="wall art",n.GlobalMesh="global mesh",n.Other="other"})(je||(je={}));var $t;(function(n){n.Horizontal="horizontal",n.Vertical="vertical"})($t||($t={}));const g1={[je.Desk]:$t.Horizontal,[je.Couch]:$t.Horizontal,[je.Floor]:$t.Horizontal,[je.Ceiling]:$t.Horizontal,[je.Wall]:$t.Vertical,[je.Door]:$t.Vertical,[je.Window]:$t.Vertical,[je.Table]:$t.Horizontal,[je.Shelf]:$t.Horizontal,[je.Bed]:$t.Horizontal,[je.Screen]:$t.Horizontal,[je.Lamp]:$t.Horizontal,[je.Plant]:$t.Horizontal,[je.WallArt]:$t.Vertical};class m1{constructor(e,t,i,A){this[Ji]={nativePlane:e,frame:void 0,planeSpace:t,polygon:i,lastChangedTime:performance.now(),semanticLabel:A,orientation:A?g1[A]:void 0}}get planeSpace(){return this[Ji].planeSpace}get polygon(){return this[Ji].polygon}get orientation(){return this[Ji].orientation}get lastChangedTime(){return this[Ji].lastChangedTime}get semanticLabel(){return this[Ji].semanticLabel}}class v1 extends Set{}class x1{constructor(e,t,i){this.transform=e,this.polygon=t,this.semanticLabel=i}}class dp{constructor(e,t){this[Rn]={anchorSpace:e,session:t,deleted:!1},t[R].trackedAnchors.add(this)}get anchorSpace(){if(this[Rn].deleted)throw new DOMException("XRAnchor has already been deleted.","InvalidStateError");return this[Rn].anchorSpace}requestPersistentHandle(){return new Promise((e,t)=>{if(this[Rn].deleted)t(new DOMException("XRAnchor has already been deleted.","InvalidStateError"));else{const i=this[Rn].session[R].persistentAnchors;for(const[r,s]of i.entries())if(s===this){e(r);return}const A=crypto.randomUUID();hp.createPersistentAnchor(this[Rn].session,this,A),e(A)}})}delete(){this[Rn].deleted||(this[Rn].anchorSpace=null,this[Rn].deleted=!0,this[Rn].session[R].trackedAnchors.delete(this))}}class pf extends Set{}const fc="@immersive-web-emulation-runtime/persistent-anchors";class hp{static recoverPersistentAnchorsFromStorage(e){const t=JSON.parse(localStorage.getItem(fc)||"{}");Object.entries(t).forEach(([i,A])=>{const r=e[R].device[K].globalSpace,s=new bt(r,A),a=new dp(s,e);e[R].persistentAnchors.set(i,a)})}static createPersistentAnchor(e,t,i){e[R].trackedAnchors.add(t),e[R].persistentAnchors.set(i,t);const A=JSON.parse(localStorage.getItem(fc)||"{}");A[i]=Array.from(t[Rn].anchorSpace[Ut].offsetMatrix),localStorage.setItem(fc,JSON.stringify(A))}}class mo{constructor(e=0,t=0,i=0,A=1){this.x=e,this.y=t,this.z=i,this.w=A,Object.freeze(this)}static fromPoint(e){return new mo(e.x,e.y,e.z,e.w)}matrixTransform(e){return new mo}toJSON(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ma=typeof globalThis.DOMPointReadOnly<"u"?globalThis.DOMPointReadOnly:mo;class XA{constructor(e,t){const i=jn(0,0,0),A=qn();this[vn]={matrix:Kt(),position:e?jn(e.x,e.y,e.z):i,orientation:t?Fo(qn(),po(t.x,t.y,t.z,t.w)):A,inverse:null},this.updateMatrix()}updateMatrix(){ra(this[vn].matrix,this[vn].orientation,this[vn].position)}get matrix(){return this[vn].matrix}get position(){const e=this[vn].position;return new ma(e[0],e[1],e[2],1)}get orientation(){const e=this[vn].orientation;return new ma(e[0],e[1],e[2],e[3])}get inverse(){if(!this[vn].inverse){const e=Kt();if(!rp(e,this[vn].matrix))throw new Error("Matrix is not invertible.");let t=jt();Js(t,e);let i=qn();ho(i,e),this[vn].inverse=new XA(new ma(t[0],t[1],t[2],1),new ma(i[0],i[1],i[2],i[3])),this[vn].inverse[vn].inverse=this}return this[vn].inverse}}let gf=class{constructor(e=0,t=0,i=0,A=1){this.x=e,this.y=t,this.z=i,this.w=A}};class w1{constructor(e,t){const i={x:0,y:0,z:0,w:1},A={x:0,y:0,z:-1,w:0};if(e instanceof XA){const a=e.matrix,o=Bl(yl(),i.x,i.y,i.z,i.w),c=Bl(yl(),A.x,A.y,A.z,A.w);lf(o,o,a),lf(c,c,a),i.x=o[0],i.y=o[1],i.z=o[2],i.w=o[3],A.x=c[0],A.y=c[1],A.z=c[2],A.w=c[3]}else if(e&&(i.x=e.x,i.y=e.y,i.z=e.z,i.w=e.w),t){if(t.x===0&&t.y===0&&t.z===0||t.w!==1)throw new DOMException("Invalid direction value to construct XRRay","TypeError");A.x=t.x,A.y=t.y,A.z=t.z,A.w=t.w}const r=Math.sqrt(A.x*A.x+A.y*A.y+A.z*A.z)||1;A.x=A.x/r,A.y=A.y/r,A.z=A.z/r,this[xn]={origin:new gf(i.x,i.y,i.z,i.w),direction:new gf(A.x,A.y,A.z,A.w),matrix:null}}get origin(){return this[xn].origin}get direction(){return this[xn].direction}get matrix(){if(this[xn].matrix)return this[xn].matrix;const e=Os(jt(),0,0,-1),t=Os(jt(),this[xn].origin.x,this[xn].origin.y,this[xn].origin.z),i=Os(jt(),this[xn].direction.x,this[xn].direction.y,this[xn].direction.z),A=$a(jt(),i,e),r=ap(i,e),s=Kt();r>-1&&r<1?of(s,Math.acos(r),A):r===-1?of(s,Math.acos(r),Os(jt(),1,0,0)):Xm(s);const a=qr(Kt(),t),o=Lo(Kt(),a,s);return this[xn].matrix=new Float32Array(o),this[xn].matrix}}class E1{constructor(e,t){var i;this[yi]={session:e,space:t.space,offsetRay:(i=t.offsetRay)!==null&&i!==void 0?i:new w1}}cancel(){this[yi].session[R].hitTestSources.delete(this)}}class M1{constructor(e,t){this[yi]={frame:e,offsetSpace:t}}getPose(e){return this[yi].frame.getPose(this[yi].offsetSpace,e)}createAnchor(){return this[yi].frame.createAnchor(new XA,this[yi].offsetSpace)}}class pp extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRInputSourcesChangeEventInit.session is required");if(!t.added)throw new Error("XRInputSourcesChangeEventInit.added is required");if(!t.removed)throw new Error("XRInputSourcesChangeEventInit.removed is required");this.session=t.session,this.added=t.added,this.removed=t.removed}}var gp,Yt;(function(n){n.Viewer="viewer",n.Local="local",n.LocalFloor="local-floor",n.BoundedFloor="bounded-floor",n.Unbounded="unbounded"})(Yt||(Yt={}));class WA extends bt{constructor(e,t,i){super(t,i),this[gp]={type:null,onreset:()=>{}},this[Zi].type=e}get onreset(){var e;return(e=this[Zi].onreset)!==null&&e!==void 0?e:()=>{}}set onreset(e){this[Zi].onreset&&this.removeEventListener("reset",this[Zi].onreset),this[Zi].onreset=e,e&&this.addEventListener("reset",e)}getOffsetReferenceSpace(e){return new WA(this[Zi].type,this,e)}}gp=Zi;class Cl{constructor(e={},t){this[Es]={depthNear:e.depthNear||(t==null?void 0:t.depthNear)||.1,depthFar:e.depthFar||(t==null?void 0:t.depthFar)||1e3,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||(t==null?void 0:t.inlineVerticalFieldOfView)||null,baseLayer:e.baseLayer||(t==null?void 0:t.baseLayer)||null}}get depthNear(){return this[Es].depthNear}get depthFar(){return this[Es].depthFar}get inlineVerticalFieldOfView(){return this[Es].inlineVerticalFieldOfView}get baseLayer(){return this[Es].baseLayer}}class vo extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRSessionEventInit.session is required");this.session=t.session}}var xt;(function(n){n.None="none",n.Left="left",n.Right="right"})(xt||(xt={}));class mp{constructor(e,t,i,A){this[DA]={eye:e,projectionMatrix:t,transform:i,recommendedViewportScale:null,requestedViewportScale:1,session:A}}get eye(){return this[DA].eye}get projectionMatrix(){return this[DA].projectionMatrix}get transform(){return this[DA].transform}get recommendedViewportScale(){return this[DA].recommendedViewportScale}requestViewportScale(e){if(e===null||e<=0||e>1){console.warn("Invalid scale value. Scale must be > 0 and <= 1.");return}this[DA].requestedViewportScale=e}}class No{constructor(e,t=!1,i=void 0,A=void 0){this[ws]={transform:e,emulatedPosition:t,linearVelocity:i,angularVelocity:A}}get transform(){return this[ws].transform}get emulatedPosition(){return this[ws].emulatedPosition}get linearVelocity(){return this[ws].linearVelocity}get angularVelocity(){return this[ws].angularVelocity}}class vp extends No{constructor(e,t,i=!1,A=void 0,r=void 0){super(e,i,A,r),this[ff]={radius:t}}get radius(){return this[ff].radius}}class xp extends No{constructor(e,t,i=!1,A=void 0,r=void 0){super(e,i,A,r),this[df]={views:Object.freeze(t)}}get views(){return this[df].views}}const mf=Kt(),vf=Kt(),xf=Kt(),wf=(n,e,t)=>{Xr.calculateGlobalOffsetMatrix(e,mf),Xr.calculateGlobalOffsetMatrix(t,vf),rp(xf,vf),Lo(n,xf,mf)};class wp{constructor(e,t,i,A,r){this[st]={session:e,id:t,active:i,animationFrame:A,predictedDisplayTime:r,tempMat4:Kt(),detectedPlanes:new v1,detectedMeshes:new h1,trackedAnchors:e[R].frameTrackedAnchors,hitTestResultsMap:new Map}}get session(){return this[st].session}get predictedDisplayTime(){return this[st].predictedDisplayTime}getPose(e,t){if(!this[st].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");wf(this[st].tempMat4,e,t);const i=jt();Js(i,this[st].tempMat4);const A=qn();return ho(A,this[st].tempMat4),new No(new XA({x:i[0],y:i[1],z:i[2],w:1},{x:A[0],y:A[1],z:A[2],w:A[3]}),e[Ut].emulated)}getViewerPose(e){if(!this[st].animationFrame)throw new DOMException("getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.","InvalidStateError");const t=this[st].session,i=t[R].device,A=this.getPose(i.viewerSpace,e),r=t[R].mode==="inline"?[xt.None]:[xt.Left,xt.Right],s=[];return r.forEach(a=>{const o=i.viewSpaces[a],c=this.getPose(o,e),l=t[R].getProjectionMatrix(a),u=new mp(a,new Float32Array(l),c.transform,t);s.push(u)}),new xp(A.transform,s,!1)}getJointPose(e,t){const i=this.getPose(e,t),A=e[FA].radius;return new vp(i.transform,A,!1)}fillJointRadii(e,t){if(e=Array.from(e),!this[st].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length>t.length)throw new DOMException("The length of jointSpaces is larger than the number of elements in radii","TypeError");let i=!0;for(let A=0;A<e.length;A++)e[A][FA].radius?t[A]=e[A][FA].radius:(t[A]=NaN,i=!1);return i}fillPoses(e,t,i){if(e=Array.from(e),!this[st].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length*16>i.length)throw new DOMException("The length of spaces multiplied by 16 is larger than the number of elements in transforms","TypeError");return e.forEach((A,r)=>{wf(this[st].tempMat4,A,t);for(let s=0;s<16;s++)i[r*16+s]=this[st].tempMat4[s]}),!0}get detectedPlanes(){if(!this[st].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");return this[st].detectedPlanes}get detectedMeshes(){if(!this[st].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");return this[st].detectedMeshes}get trackedAnchors(){if(!this[st].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");return this[st].trackedAnchors}createAnchor(e,t){return new Promise((i,A)=>{if(!this[st].active)A(new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError"));else{const r=this[st].session[R].device[K].globalSpace,s=new bt(t,e.matrix),a=Xr.calculateGlobalOffsetMatrix(s),o=new bt(r,a),c=new dp(o,this[st].session);this[st].session[R].trackedAnchors.add(c),this[st].session[R].newAnchors.set(c,{resolve:i,reject:A})}})}getHitTestResults(e){if(this[st].active){if(this[st].hitTestResultsMap.has(e))return[...this[st].hitTestResultsMap.get(e)];throw new DOMException("Requested hit test results are not available for current frame.","InvalidStateError")}else throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError")}}var Jn;(function(n){n.Opaque="opaque",n.AlphaBlend="alpha-blend",n.Additive="additive"})(Jn||(Jn={}));var Jr;(function(n){n.ScreenSpace="screen-space",n.WorldSpace="world-space"})(Jr||(Jr={}));class pu extends EventTarget{constructor(e,t,i){super(),this[R]={device:e,mode:t,renderState:new Cl,pendingRenderState:null,enabledFeatures:i,isSystemKeyboardSupported:!1,ended:!1,projectionMatrices:{[xt.Left]:Kt(),[xt.Right]:Kt(),[xt.None]:Kt()},getProjectionMatrix:A=>this[R].projectionMatrices[A],referenceSpaceIsSupported:A=>{if(!this[R].enabledFeatures.includes(A))return!1;switch(A){case Yt.Viewer:return!0;case Yt.Local:case Yt.LocalFloor:case Yt.BoundedFloor:case Yt.Unbounded:return this[R].mode!="inline"}},frameHandle:0,frameCallbacks:[],currentFrameCallbacks:null,onDeviceFrame:()=>{if(this[R].ended)return;this[R].deviceFrameHandle=globalThis.requestAnimationFrame(this[R].onDeviceFrame),this[R].pendingRenderState!=null&&(this[R].renderState=this[R].pendingRenderState,this[R].pendingRenderState=null,this[R].device[K].onBaseLayerSet(this[R].renderState.baseLayer));const A=this[R].renderState.baseLayer;if(A===null)return;const r=A.context,s=r.canvas;if(this[R].mode!="inline"){const d=r.getParameter(r.COLOR_CLEAR_VALUE),h=r.getParameter(r.DEPTH_CLEAR_VALUE),y=r.getParameter(r.STENCIL_CLEAR_VALUE);r.clearColor(0,0,0,0),r.clearDepth(1),r.clearStencil(0),r.clear(r.DEPTH_BUFFER_BIT|r.COLOR_BUFFER_BIT|r.STENCIL_BUFFER_BIT),r.clearColor(d[0],d[1],d[2],d[3]),r.clearDepth(h),r.clearStencil(y)}const{depthNear:a,depthFar:o}=this[R].renderState,{width:c,height:l}=s;if(this[R].mode!=="inline"){const d=c*(this[R].device.stereoEnabled?.5:1)/l;cf(this[R].projectionMatrices[xt.Left],this[R].device.fovy,d,a,o),Ap(this[R].projectionMatrices[xt.Right],this[R].projectionMatrices[xt.Left])}else{const d=c/l;cf(this[R].projectionMatrices[xt.None],this[R].renderState.inlineVerticalFieldOfView,d,a,o)}const u=new wp(this,this[R].frameHandle,!0,!0,performance.now()),f=performance.now(),p=this[R].device[K].devui;if(p&&p.render(f),this[R].mode==="immersive-ar"){const d=this[R].device[K].sem;d&&d.render(f)}this[R].enabledFeatures.includes("anchors")&&this[R].updateTrackedAnchors(),this[R].enabledFeatures.includes("plane-detection")&&this[R].updateTrackedPlanes(u),this[R].enabledFeatures.includes("mesh-detection")&&this[R].updateTrackedMeshes(u),this[R].enabledFeatures.includes("hit-test")&&this[R].computeHitTestResults(u),this[R].device[K].onFrameStart(u),this[R].updateActiveInputSources();const g=this[R].currentFrameCallbacks=this[R].frameCallbacks;this[R].frameCallbacks=[];const m=performance.now();for(let d=0;d<g.length;d++)try{g[d].cancelled||g[d].callback(m,u)}catch(h){console.error(h)}this[R].currentFrameCallbacks=null,u[st].active=!1},nominalFrameRate:e.internalNominalFrameRate,referenceSpaces:[],inputSourceArray:[],activeInputSources:[],updateActiveInputSources:()=>{const A=this[R].enabledFeatures.includes("hand-tracking"),r=this[R].activeInputSources,s=this[R].device.inputSources.filter(c=>!c.hand||A),a=s.filter(c=>!r.includes(c)),o=r.filter(c=>!s.includes(c));this[R].activeInputSources=s,(a.length>0||o.length>0)&&this.dispatchEvent(new pp("inputsourceschange",{session:this,added:a,removed:o}))},trackedAnchors:new pf,persistentAnchors:new Map,newAnchors:new Map,frameTrackedAnchors:new pf,updateTrackedAnchors:()=>{this[R].enabledFeatures.includes("anchors")&&(this[R].frameTrackedAnchors.clear(),Array.from(this[R].trackedAnchors).forEach(A=>{if(A[Rn].deleted){if(this[R].trackedAnchors.delete(A),this[R].newAnchors.has(A)){const{reject:r}=this[R].newAnchors.get(A);r(new DOMException("Anchor is no longer tracked","InvalidStateError"))}}else if(this[R].frameTrackedAnchors.add(A),this[R].newAnchors.has(A)){const{resolve:r}=this[R].newAnchors.get(A);r(A),this[R].newAnchors.delete(A)}}))},trackedPlanes:new Map,updateTrackedPlanes:A=>{const r=this[R].device[K].sem;if(!r)return;Array.from(this[R].trackedPlanes.keys()).forEach(a=>{r.trackedPlanes.has(a)||this[R].trackedPlanes.delete(a)}),r.trackedPlanes.forEach(a=>{let o=this[R].trackedPlanes.get(a);if(!o){const c=new bt(this[R].device[K].globalSpace,a.transform.matrix);o=new m1(a,c,a.polygon,a.semanticLabel),this[R].trackedPlanes.set(a,o)}o[Ji].lastChangedTime=A.predictedDisplayTime,o[Ji].frame=A,A[st].detectedPlanes.add(o)})},trackedMeshes:new Map,updateTrackedMeshes:A=>{const r=this[R].device[K].sem;if(!r)return;Array.from(this[R].trackedMeshes.keys()).forEach(a=>{r.trackedMeshes.has(a)||this[R].trackedMeshes.delete(a)}),r.trackedMeshes.forEach(a=>{let o=this[R].trackedMeshes.get(a);if(!o){const c=new bt(this[R].device[K].globalSpace,a.transform.matrix);o=new d1(a,c,a.vertices,a.indices,a.semanticLabel),this[R].trackedMeshes.set(a,o)}o[Xi].lastChangedTime=A.predictedDisplayTime,o[Xi].frame=A,A[st].detectedMeshes.add(o)})},hitTestSources:new Set,computeHitTestResults:A=>{const r=this[R].device[K].sem;if(!r)return;const s=this[R].device[K].globalSpace;this[R].hitTestSources.forEach(a=>{const o=a[yi].space,c=Xr.calculateGlobalOffsetMatrix(o),l=a[yi].offsetRay.matrix,u=Kt();Lo(u,c,l);const f=[];r.computeHitTestResults(u).forEach(p=>{const g=new bt(s,p),m=new M1(A,g);f.push(m)}),A[st].hitTestResultsMap.set(a,f)})},onend:null,oninputsourceschange:null,onselect:null,onselectstart:null,onselectend:null,onsqueeze:null,onsqueezestart:null,onsqueezeend:null,onvisibilitychange:null,onframeratechange:null},hp.recoverPersistentAnchorsFromStorage(this),this[R].onDeviceFrame()}get visibilityState(){return this[R].device.visibilityState}get frameRate(){return this[R].nominalFrameRate}get supportedFrameRates(){return new Float32Array(this[R].device.supportedFrameRates)}get renderState(){return this[R].renderState}get inputSources(){return this[R].inputSourceArray.length=0,!this[R].ended&&this[R].mode!=="inline"&&this[R].inputSourceArray.push(...this[R].activeInputSources),this[R].inputSourceArray}get enabledFeatures(){return this[R].enabledFeatures}get isSystemKeyboardSupported(){return this[R].isSystemKeyboardSupported}get environmentBlendMode(){var e;return(e=this[R].device[K].environmentBlendModes[this[R].mode])!==null&&e!==void 0?e:Jn.Opaque}get interactionMode(){return this[R].device[K].interactionMode}updateRenderState(e={}){var t,i,A,r;if(this[R].ended)throw new DOMException("XRSession has already ended.","InvalidStateError");if(e.baseLayer&&e.baseLayer[Ki].session!==this)throw new DOMException("Base layer was created by a different XRSession","InvalidStateError");if(e.inlineVerticalFieldOfView!=null&&this[R].mode!=="inline")throw new DOMException("InlineVerticalFieldOfView must not be set for an immersive session","InvalidStateError");const s={baseLayer:e.baseLayer||((t=this[R].pendingRenderState)===null||t===void 0?void 0:t.baseLayer)||void 0,depthFar:e.depthFar||((i=this[R].pendingRenderState)===null||i===void 0?void 0:i.depthFar)||void 0,depthNear:e.depthNear||((A=this[R].pendingRenderState)===null||A===void 0?void 0:A.depthNear)||void 0,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||((r=this[R].pendingRenderState)===null||r===void 0?void 0:r.inlineVerticalFieldOfView)||void 0};this[R].pendingRenderState=new Cl(s,this[R].renderState)}async updateTargetFrameRate(e){return new Promise((t,i)=>{this[R].ended?i(new DOMException("XRSession has already ended.","InvalidStateError")):this[R].device.supportedFrameRates.includes(e)?(this[R].nominalFrameRate===e?console.log("Requested frame rate is the same as the current nominal frame rate, no update made"):(this[R].nominalFrameRate=e,this.dispatchEvent(new vo("frameratechange",{session:this})),console.log(`Nominal frame rate updated to ${e}`)),t()):i(new DOMException("Requested frame rate not supported.","InvalidStateError"))})}async requestReferenceSpace(e){return new Promise((t,i)=>{if(this[R].ended||!this[R].referenceSpaceIsSupported(e)){i(new DOMException("The requested reference space type is not supported.","NotSupportedError"));return}let A;switch(e){case Yt.Viewer:A=this[R].device.viewerSpace;break;case Yt.Local:A=new WA(e,this[R].device[K].globalSpace,this[R].device.viewerSpace[Ut].offsetMatrix);break;case Yt.LocalFloor:case Yt.BoundedFloor:case Yt.Unbounded:A=new WA(e,this[R].device[K].globalSpace);break}this[R].referenceSpaces.push(A),t(A)})}requestAnimationFrame(e){if(this[R].ended)return 0;const t=++this[R].frameHandle;return this[R].frameCallbacks.push({handle:t,callback:e,cancelled:!1}),t}cancelAnimationFrame(e){let t=this[R].frameCallbacks,i=t.findIndex(A=>A&&A.handle===e);i>-1&&(t[i].cancelled=!0,t.splice(i,1)),t=this[R].currentFrameCallbacks,t&&(i=t.findIndex(A=>A&&A.handle===e),i>-1&&(t[i].cancelled=!0))}async end(){return new Promise((e,t)=>{this[R].ended||this[R].deviceFrameHandle===null?t(new DOMException("XRSession has already ended.","InvalidStateError")):(globalThis.cancelAnimationFrame(this[R].deviceFrameHandle),this[R].device[K].onSessionEnd(),this.dispatchEvent(new vo("end",{session:this})),e())})}get persistentAnchors(){return Array.from(this[R].persistentAnchors.keys())}restorePersistentAnchor(e){return new Promise((t,i)=>{if(!this[R].persistentAnchors.has(e))i(new DOMException(`Persistent anchor with uuid ${e} not found.`,"InvalidStateError"));else if(this[R].ended)i(new DOMException("XRSession has already ended.","InvalidStateError"));else{const A=this[R].persistentAnchors.get(e);this[R].newAnchors.has(A)?i(new DOMException(`Multiple concurrent attempts detected to restore the anchor with UUID: ${e}.`,"InvalidStateError")):(this[R].trackedAnchors.add(A),this[R].newAnchors.set(A,{resolve:t,reject:i}))}})}deletePersistentAnchor(e){return new Promise((t,i)=>{if(!this[R].persistentAnchors.has(e))i(new DOMException(`Persistent anchor with uuid ${e} not found.`,"InvalidStateError"));else{const A=this[R].persistentAnchors.get(e);this[R].persistentAnchors.delete(e),A.delete(),t(void 0)}})}requestHitTestSource(e){return new Promise((t,i)=>{if(!this[R].enabledFeatures.includes("hit-test"))i(new DOMException('WebXR feature "hit-test" is not supported by current session',"NotSupportedError"));else if(this[R].ended)i(new DOMException("XRSession has already ended.","InvalidStateError"));else if(!this[R].device[K].sem)i(new DOMException("Synthethic Environment Module required for emulating hit-test","OperationError"));else{const A=new E1(this,e);this[R].hitTestSources.add(A),t(A)}})}get onend(){var e;return(e=this[R].onend)!==null&&e!==void 0?e:()=>{}}set onend(e){this[R].onend&&this.removeEventListener("end",this[R].onend),this[R].onend=e,e&&this.addEventListener("end",e)}get oninputsourceschange(){var e;return(e=this[R].oninputsourceschange)!==null&&e!==void 0?e:()=>{}}set oninputsourceschange(e){this[R].oninputsourceschange&&this.removeEventListener("inputsourceschange",this[R].oninputsourceschange),this[R].oninputsourceschange=e,e&&this.addEventListener("inputsourceschange",e)}get onselect(){var e;return(e=this[R].onselect)!==null&&e!==void 0?e:()=>{}}set onselect(e){this[R].onselect&&this.removeEventListener("select",this[R].onselect),this[R].onselect=e,e&&this.addEventListener("select",e)}get onselectstart(){var e;return(e=this[R].onselectstart)!==null&&e!==void 0?e:()=>{}}set onselectstart(e){this[R].onselectstart&&this.removeEventListener("selectstart",this[R].onselectstart),this[R].onselectstart=e,e&&this.addEventListener("selectstart",e)}get onselectend(){var e;return(e=this[R].onselectend)!==null&&e!==void 0?e:()=>{}}set onselectend(e){this[R].onselectend&&this.removeEventListener("selectend",this[R].onselectend),this[R].onselectend=e,e&&this.addEventListener("selectend",e)}get onsqueeze(){var e;return(e=this[R].onsqueeze)!==null&&e!==void 0?e:()=>{}}set onsqueeze(e){this[R].onsqueeze&&this.removeEventListener("squeeze",this[R].onsqueeze),this[R].onsqueeze=e,e&&this.addEventListener("squeeze",e)}get onsqueezestart(){var e;return(e=this[R].onsqueezestart)!==null&&e!==void 0?e:()=>{}}set onsqueezestart(e){this[R].onsqueezestart&&this.removeEventListener("squeezestart",this[R].onsqueezestart),this[R].onsqueezestart=e,e&&this.addEventListener("squeezestart",e)}get onsqueezeend(){var e;return(e=this[R].onsqueezeend)!==null&&e!==void 0?e:()=>{}}set onsqueezeend(e){this[R].onsqueezeend&&this.removeEventListener("squeezeend",this[R].onsqueezeend),this[R].onsqueezeend=e,e&&this.addEventListener("squeezeend",e)}get onvisibilitychange(){var e;return(e=this[R].onvisibilitychange)!==null&&e!==void 0?e:()=>{}}set onvisibilitychange(e){this[R].onvisibilitychange&&this.removeEventListener("visibilitychange",this[R].onvisibilitychange),this[R].onvisibilitychange=e,e&&this.addEventListener("visibilitychange",e)}get onframeratechange(){var e;return(e=this[R].onframeratechange)!==null&&e!==void 0?e:()=>{}}set onframeratechange(e){this[R].onframeratechange&&this.removeEventListener("frameratechange",this[R].onframeratechange),this[R].onframeratechange=e,e&&this.addEventListener("frameratechange",e)}}var $s;(function(n){n.Wrist="wrist",n.ThumbMetacarpal="thumb-metacarpal",n.ThumbPhalanxProximal="thumb-phalanx-proximal",n.ThumbPhalanxDistal="thumb-phalanx-distal",n.ThumbTip="thumb-tip",n.IndexFingerMetacarpal="index-finger-metacarpal",n.IndexFingerPhalanxProximal="index-finger-phalanx-proximal",n.IndexFingerPhalanxIntermediate="index-finger-phalanx-intermediate",n.IndexFingerPhalanxDistal="index-finger-phalanx-distal",n.IndexFingerTip="index-finger-tip",n.MiddleFingerMetacarpal="middle-finger-metacarpal",n.MiddleFingerPhalanxProximal="middle-finger-phalanx-proximal",n.MiddleFingerPhalanxIntermediate="middle-finger-phalanx-intermediate",n.MiddleFingerPhalanxDistal="middle-finger-phalanx-distal",n.MiddleFingerTip="middle-finger-tip",n.RingFingerMetacarpal="ring-finger-metacarpal",n.RingFingerPhalanxProximal="ring-finger-phalanx-proximal",n.RingFingerPhalanxIntermediate="ring-finger-phalanx-intermediate",n.RingFingerPhalanxDistal="ring-finger-phalanx-distal",n.RingFingerTip="ring-finger-tip",n.PinkyFingerMetacarpal="pinky-finger-metacarpal",n.PinkyFingerPhalanxProximal="pinky-finger-phalanx-proximal",n.PinkyFingerPhalanxIntermediate="pinky-finger-phalanx-intermediate",n.PinkyFingerPhalanxDistal="pinky-finger-phalanx-distal",n.PinkyFingerTip="pinky-finger-tip"})($s||($s={}));class gu extends Map{}class mu extends bt{constructor(e,t,i){super(t,i),this[FA]={jointName:e,radius:0}}get jointName(){return this[FA].jointName}}const _1={jointTransforms:{wrist:{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06867414712905884,-.009423808194696903,.10627774149179459,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.5012241005897522,-.8650535345077515,-.0213695727288723,0,.7415963411331177,-.4421543478965759,.5045139193534851,0,-.44587990641593933,.23702676594257355,.8631392121315002,0,-.032122574746608734,-.01196830440312624,.07194234430789948,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[-.3175753057003021,-.9460570216178894,-.06419729441404343,0,.8958902955055237,-.32153913378715515,.30658137798309326,0,-.3106854259967804,.03984907269477844,.9496771097183228,0,-.017625702545046806,-.01967475935816765,.04387917369604111,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,-.007126678712666035,-.021021386608481407,.011786630377173424,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,.0003423091256991029,-.024528030306100845,-.011410919018089771,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.038037415593862534,-.0020236473064869642,.07626739144325256,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.7986818552017212,-.35985732078552246,.48229536414146423,0,.538311243057251,.7854709625244141,-.30537736415863037,0,-.2689369022846222,.5035246014595032,.8210577368736267,0,-.006869405973702669,.033938243985176086,.04206443578004837,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.8285930156707764,-.32672837376594543,.4546217918395996,0,.5577570199966431,.4116027057170868,-.7207564115524292,0,.04836784675717354,.8507823944091797,.5232869386672974,0,.0033306588884443045,.014840902760624886,.010923954658210278,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,.0021551470272243023,-.0058362227864563465,-.0017938464879989624,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,-.00131594471167773,-.025222131982445717,-.012442642822861671,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.05395089089870453,.003063359996303916,.07402937114238739,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9187911748886108,-.1530158370733261,.36387869715690613,0,.038666240870952606,.9522662162780762,.302808940410614,0,-.3928440511226654,-.26414817571640015,.8808513283729553,0,-.02717282809317112,.04162866622209549,.03678669035434723,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9228746294975281,-.12856416404247284,.36300456523895264,0,.14524033665657043,.9892153143882751,-.01890045404434204,0,-.3566599190235138,.07016586512327194,.9315956234931946,0,-.01030921470373869,.05296773463487625,-.0010256498353555799,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,-.0004833847051486373,.05103470757603645,-.026690717786550522,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,.008158999495208263,.05004044249653816,-.050120558589696884,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06732909381389618,.007902119308710098,.07209732383489609,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9391821026802063,-.027994679287075996,.34227466583251953,0,-.18282271921634674,.8029410243034363,.5673282742500305,0,-.2907087206840515,-.5954000353813171,.7489906549453735,0,-.047129884362220764,.03806127607822418,.032147664576768875,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9249380826950073,.03699534013867378,.3783116042613983,0,-.12898847460746765,.9667453765869141,.2208271026611328,0,-.3575615882873535,-.25304901599884033,.8989526629447937,0,-.03579339757561684,.06127955764532089,.002939916681498289,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.026291755959391594,.06800390034914017,-.02094830758869648,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.016345610842108727,.07300511747598648,-.04263874143362045,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.8769711852073669,.31462907791137695,.36322021484375,0,-.4506046175956726,.801031768321991,.39408499002456665,0,-.16696058213710785,-.5092697143554688,.8442559838294983,0,-.07460174709558487,.0062340241856873035,.06756893545389175,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9498357176780701,.1553308218717575,.2714462876319885,0,-.3019258379936218,.6817675232887268,.6663586497306824,0,-.08155745267868042,-.7148879170417786,.694466233253479,0,-.06697750836610794,.029482364654541016,.02902858518064022,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9214097261428833,.27928245067596436,.2701927423477173,0,-.3670244514942169,.8538867831230164,.36901235580444336,0,-.12765564024448395,-.43917882442474365,.8892839550971985,0,-.06447203457355499,.05144399777054787,.0076942890882492065,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.06187915802001953,.060364335775375366,-.010368337854743004,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.056796226650476456,.07042007893323898,-.02921444922685623,1],radius:.005425984505563974}},gripOffsetMatrix:[.08027800917625427,-.8086723685264587,-.5827556252479553,0,-.4154181480407715,-.5585916638374329,.7179154753684998,0,-.9060805439949036,.1844543218612671,-.3807799518108368,0,-.038054611533880234,-.002910431008785963,.03720742464065552,1]},y1={jointTransforms:{wrist:{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05789132043719292,.01670890860259533,.11183350533246994,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[.02145560085773468,-.9978390336036682,.0621047280728817,0,.41311800479888916,.06541631370782852,.9083252549171448,0,-.9104245901107788,.006167683284729719,.4136286973953247,0,-.016488194465637207,.012708572670817375,.08862338215112686,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.21270370483398438,-.966137707233429,.14606566727161407,0,.49890995025634766,.2359165996313095,.8339261412620544,0,-.8401462435722351,-.10450579971075058,.5321959853172302,0,.013112368993461132,.012508046813309193,.07517509907484055,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.04150351136922836,.016039609909057617,.05719054117798805,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.06548332422971725,.01683700829744339,.0516640841960907,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.02592567168176174,.019982583820819855,.08479326963424683,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9063700437545776,-.21756279468536377,.3621589243412018,0,.0970839336514473,.9415287375450134,.3226419687271118,0,-.41117796301841736,-.2572731077671051,.8744958639144897,0,-.0015709538711234927,.043078210204839706,.034657616168260574,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9159826040267944,-.1651475727558136,.36565208435058594,0,.09755707532167435,.9756820797920227,.1962820291519165,0,-.3891757130622864,-.14411886036396027,.9098196625709534,0,.014023927971720695,.052835866808891296,.0014903299743309617,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.023482320830225945,.05633850023150444,-.020621655508875847,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.03096788562834263,.06281610578298569,-.040703095495700836,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.04184452444314957,.022474845871329308,.08177298307418823,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9720265865325928,-.08313076198101044,.21966552734375,0,.20477405190467834,.7580050826072693,-.6192700862884521,0,-.11502730846405029,.6469289064407349,.7538246512413025,0,-.022107340395450592,.05035499855875969,.02970452979207039,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9779140949249268,-.07129573822021484,.19646917283535004,0,.1287083923816681,-.5352076292037964,-.8348574042320251,0,.1646735966205597,.8417060971260071,-.5142109394073486,0,-.017169542610645294,.022584279999136925,-.00265491777099669,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02170622907578945,-.0006043742760084569,.011511396616697311,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02438267692923546,-.0026927536819130182,.03627248480916023,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05944233387708664,.0264605600386858,.07478221505880356,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9842101335525513,.024470895528793335,.1753024309873581,0,.12200043350458145,.6237703561782837,-.7720272541046143,0,-.12824076414108276,.7812241315841675,.610936164855957,0,-.04249368980526924,.0467497780919075,.027722163125872612,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9941774606704712,.05949164181947708,.08983955532312393,0,.10504482686519623,-.7208291888237,-.6851072907447815,0,.024001073092222214,.6905553936958313,-.7228817939758301,0,-.0374927744269371,.016285063698887825,.0038980208337306976,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.038130562752485275,-.0020653479732573032,.02310742810368538,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.0390593595802784,.004176302347332239,.0466572530567646,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9147363901138306,.3458845317363739,.20885537564754486,0,-.3923271894454956,.8839452862739563,.2544005811214447,0,-.09662359952926636,-.3146490156650543,.9442773461341858,0,-.06715242564678192,.024195827543735504,.07137546688318253,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9613109827041626,.22439135611057281,.15977802872657776,0,.01002211682498455,.5511574745178223,-.8343409299850464,0,-.27528178691864014,.8036624789237976,.5275853276252747,0,-.06273911893367767,.038559623062610626,.028268879279494286,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9820972084999084,.18811029195785522,-.00995189044624567,0,.14063723385334015,-.7673450708389282,-.6256227493286133,0,-.12532226741313934,.6130226850509644,-.7800630927085876,0,-.05428232625126839,.013870777562260628,.012061242014169693,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05173685774207115,.0014194445684552193,.02790539152920246,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05098633095622063,.008463085629045963,.048688892275094986,1],radius:.005425984505563974}},gripOffsetMatrix:[.005510995630174875,-.9149997234344482,-.40341615676879883,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.9340395331382751,.13936474919319153,-.32885703444480896,0,-.031803809106349945,.007837686687707901,.04313928261399269,1]},B1={jointTransforms:{wrist:{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.04913589730858803,.0021463718730956316,.11701996624469757,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.07536252588033676,-.9959676265716553,-.04867160692811012,0,.5877083539962769,-.08379616588354111,.8047218918800354,0,-.8055551648139954,.032041035592556,.5916536450386047,0,-.010643752291798592,.0006936835707165301,.08736639469861984,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.1374533325433731,-.9904957413673401,.004982374142855406,0,.5534393787384033,.08097179979085922,.8289443850517273,0,-.8214688897132874,-.11118389666080475,.559309184551239,0,.015547193586826324,-.0003480653394944966,.0681300163269043,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.04330715537071228,.003409178927540779,.0492292083799839,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.062003348022699356,.004069602582603693,.03322213143110275,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.02009812369942665,.008770795539021492,.08660387247800827,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9001791477203369,-.2598813474178314,.3494834005832672,0,.06073702871799469,.8695210218429565,.490146666765213,0,-.4312632381916046,-.41999316215515137,.7985095381736755,0,-.00017739279428496957,.03890012577176094,.039073407649993896,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9082008600234985,-.20898112654685974,.36262574791908264,0,.11045389622449875,.9553793668746948,.27395179867744446,0,-.40369608998298645,-.20874978601932526,.8907597661018372,0,.01617925800383091,.05482936650514603,.008788082748651505,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.02599053829908371,.059902746230363846,-.012860597111284733,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.03362493962049484,.06421422213315964,-.033461250364780426,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.03627845644950867,.011579737067222595,.08550142496824265,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9876697659492493,-.06786545366048813,.1410750150680542,0,-.015095947310328484,.855663537979126,.5173118710517883,0,-.15582047402858734,-.5130629539489746,.8440889716148376,0,-.021259509027004242,.04587256908416748,.03659208118915558,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.988391637802124,-.04354291781783104,.14555205404758453,0,.008894841186702251,.9729899168014526,.23067504167556763,0,-.15166506171226501,-.22670257091522217,.9620829224586487,0,-.014570588245987892,.06789684295654297,.0003578895702958107,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.010392282158136368,.07414241135120392,-.026147106662392616,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.0069718430750072,.08024183660745621,-.05014154314994812,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.05402477830648422,.015797706320881844,.08152295649051666,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9940828680992126,.05735103040933609,.09224652498960495,0,-.10022822767496109,.8116500377655029,.5754809379577637,0,-.041867565363645554,-.5813214182853699,.8125960826873779,0,-.041623555123806,.04171867296099663,.03582974523305893,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9843675494194031,.12044742703437805,.12850022315979004,0,-.15629759430885315,.9337108135223389,.3221098482608795,0,-.08118485659360886,-.3371586799621582,.937940776348114,0,-.039990875869989395,.06438793987035751,.004141641780734062,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03783353418111801,.07334739714860916,-.020782606676220894,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03445569798350334,.0802423357963562,-.04392268508672714,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9181402921676636,.35625091195106506,.17350243031978607,0,-.39615097641944885,.8352503180503845,.38134080171585083,0,-.009065053425729275,-.41885748505592346,.9080066680908203,0,-.06191859766840935,.013620133511722088,.07850203663110733,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9714386463165283,.236698180437088,-.016745081171393394,0,-.18462024629116058,.7982627749443054,.5733163952827454,0,.14906984567642212,-.5538501739501953,.8191629648208618,0,-.061502378433942795,.032741155475378036,.03705105185508728,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9337416291236877,.35620439052581787,-.03527557849884033,0,-.33203884959220886,.8987522721290588,.28634607791900635,0,.13370157778263092,-.2556603252887726,.9574766755104065,0,-.06608185172080994,.049755651503801346,.011886020191013813,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.0687975287437439,.054948460310697556,-.007561664097011089,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.06947512179613113,.0613851435482502,-.028543535619974136,1],radius:.005425984505563974}},gripOffsetMatrix:[-.0005348679260350764,-.8648636937141418,-.5020061135292053,0,-.2741127908229828,-.48265108466148376,.8318111896514893,0,-.9616971015930176,.13805119693279266,-.2368120402097702,0,-.02878567762672901,.0017147823236882687,.04536811262369156,1]},Ef={profileId:"oculus-hand",fallbackProfileIds:["generic-hand","generic-hand-select","generic-trigger"],poses:{default:B1,pinch:_1,point:y1}},C1={mapping:Zs.None,buttons:[{id:"pinch",type:"analog",eventTrigger:"select"}],axes:[]},Mf=jt(),_f=qn(),yf=jt(),Bf=jt(),Cf=qn(),Sf=jt(),Df=jt(),bf=qn(),Pf=jt(),Tf=(n,e,t,i)=>(Js(Mf,e),ho(_f,e),Ml(yf,e),Js(Bf,t),ho(Cf,t),Ml(Sf,t),_l(Df,Mf,Bf,i),Ws(bf,_f,Cf,i),_l(Pf,yf,Sf,i),Jm(n,bf,Df,Pf),n),S1=[1,-1,-1,0,-1,1,1,0,-1,1,1,0,-1,1,1,1],D1=n=>{for(let e=0;e<16;e++)n[e]*=S1[e]};class If extends fp{constructor(e,t,i){if(t!==Bn.Left&&t!==Bn.Right)throw new DOMException('handedness for XRHandInput must be either "left" or "right"',"InvalidStateError");if(!e.poses.default||!e.poses.pinch)throw new DOMException('"default" and "pinch" hand pose configs are required',"InvalidStateError");const A=new bt(i),r=new bt(A),s=[e.profileId,...e.fallbackProfileIds],a=new gu;Object.values($s).forEach(c=>{a.set(c,new mu(c,A))});const o=new Oo(t,go.TrackedPointer,s,A,new hu(C1),r,a);super(o),this[gA]={poseId:"default",poses:e.poses},this.updateHandPose()}get poseId(){return this[gA].poseId}set poseId(e){if(!this[gA].poses[e]){console.warn(`Pose config ${e} not found`);return}this[gA].poseId=e}updateHandPose(){const e=this[gA].poses[this[gA].poseId],t=this[gA].poses.pinch;Object.values($s).forEach(i=>{const A=e.jointTransforms[i].offsetMatrix,r=t.jointTransforms[i].offsetMatrix,s=this.inputSource.hand.get(i);Tf(s[Ut].offsetMatrix,A,r,this.pinchValue),this.inputSource.handedness===Bn.Right&&D1(s[Ut].offsetMatrix),s[FA].radius=(1-this.pinchValue)*e.jointTransforms[i].radius+this.pinchValue*t.jointTransforms[i].radius}),e.gripOffsetMatrix&&t.gripOffsetMatrix&&Tf(this.inputSource.gripSpace[Ut].offsetMatrix,e.gripOffsetMatrix,t.gripOffsetMatrix,this.pinchValue)}get pinchValue(){return this[Bt].inputSource.gamepad[Be].buttonsMap.pinch.value}updatePinchValue(e){if(e>1||e<0){console.warn(`Out-of-range value ${e} provided for pinch`);return}const t=this[Bt].inputSource.gamepad[Be].buttonsMap.pinch;t[Be].pendingValue=e}onFrameStart(e){super.onFrameStart(e),this.updateHandPose()}}class Ep extends EventTarget{}const b1={antialias:!0,depth:!0,stencil:!1,alpha:!0,ignoreDepthValues:!1,framebufferScaleFactor:1};let P1=class extends Ep{constructor(e,t,i={}){if(super(),e[R].ended)throw new DOMException("Session has ended","InvalidStateError");const A={...b1,...i};this[Ki]={session:e,context:t,antialias:A.antialias}}get context(){return this[Ki].context}get antialias(){return this[Ki].antialias}get ignoreDepthValues(){return!0}get framebuffer(){return null}get framebufferWidth(){return this[Ki].context.drawingBufferWidth}get framebufferHeight(){return this[Ki].context.drawingBufferHeight}getViewport(e){if(e[DA].session!==this[Ki].session)throw new DOMException("View's session differs from Layer's session","InvalidStateError");return this[Ki].session[R].device[K].getViewport(this,e)}static getNativeFramebufferScaleFactor(e){if(!(e instanceof pu))throw new TypeError("getNativeFramebufferScaleFactor must be passed a session.");return e[R].ended?0:1}};class T1{constructor(e,t,i){const{schema:A,frames:r}=t;if(!r||!A||r.length===0)throw new DOMException("wrong recording format","NotSupportedError");const s=new WA(Yt.Viewer,e),a={[xt.Left]:new bt(s),[xt.Right]:new bt(s),[xt.None]:new bt(s)};this[Ve]={refSpace:e,inputSources:new Map,inputSchemas:new Map,frames:r,recordedFramePointer:0,startingTimeStamp:r[0][0],endingTimeStamp:r[r.length-1][0],playbackTime:r[0][0],playing:!1,viewerSpace:s,viewSpaces:a,vec3:jt(),quat:qn()},qr(this[Ve].viewSpaces[xt.Left][Ut].offsetMatrix,jn(-i/2,0,0)),qr(this[Ve].viewSpaces[xt.Right][Ut].offsetMatrix,jn(i/2,0,0)),A.forEach(o=>{const c=o[0],l=o[1];let u;if(l.hasGamepad){const m=[];for(let h=0;h<l.numButtons;h++)m.push({id:h.toString(),type:"manual"});const d=[];for(let h=0;h<l.numAxes;h++)d.push({id:h.toString(),type:"manual"});u=new hu({mapping:l.mapping,buttons:m,axes:d})}const f=new bt(e);let p;l.hasHand&&(p=new gu,Object.values($s).forEach(m=>{p.set(m,new mu(m,f))}));const g=new Oo(l.handedness,l.targetRayMode,l.profiles,f,u,l.hasGrip?new bt(e):void 0,l.hasHand?p:void 0);this[Ve].inputSources.set(c,{active:!1,source:g}),this[Ve].inputSchemas.set(c,l)})}play(){this[Ve].recordedFramePointer=0,this[Ve].playbackTime=this[Ve].startingTimeStamp,this[Ve].playing=!0,this[Ve].actualTimeStamp=performance.now()}stop(){this[Ve].playing=!1}get playing(){return this[Ve].playing}get viewerSpace(){return this[Ve].viewerSpace}get viewSpaces(){return this[Ve].viewSpaces}get inputSources(){return Array.from(this[Ve].inputSources.values()).filter(e=>e.active).map(e=>e.source)}playFrame(){const e=performance.now(),t=e-this[Ve].actualTimeStamp;if(this[Ve].actualTimeStamp=e,this[Ve].playbackTime+=t,this[Ve].playbackTime>this[Ve].endingTimeStamp){this.stop();return}for(;this[Ve].frames[this[Ve].recordedFramePointer+1][0]<this[Ve].playbackTime;)this[Ve].recordedFramePointer++;const i=this[Ve].frames[this[Ve].recordedFramePointer],A=this[Ve].frames[this[Ve].recordedFramePointer+1],r=(this[Ve].playbackTime-i[0])/(A[0]-i[0]);this.updateXRSpaceFromMergedFrames(this[Ve].viewerSpace,i.slice(1,8),A.slice(1,8),r);const s=new Map;for(let o=8;o<i.length;o++){const{index:c,inputData:l}=this.processRawInputData(i[o]);s.set(c,l)}const a=new Map;for(let o=8;o<A.length;o++){const{index:c,inputData:l}=this.processRawInputData(A[o]);a.set(c,l)}this[Ve].inputSources.forEach(o=>{o.active=!1}),a.forEach((o,c)=>{this[Ve].inputSources.get(c).active=!0;const l=this[Ve].inputSources.get(c).source,u=this[Ve].inputSchemas.get(c);this.updateInputSource(l,u,s.has(c)?s.get(c):o,o,r)})}updateInputSource(e,t,i,A,r){if(this.updateXRSpaceFromMergedFrames(e.targetRaySpace,i.targetRayTransform,A.targetRayTransform,r),t.hasGrip&&this.updateXRSpaceFromMergedFrames(e.gripSpace,i.gripTransform,A.gripTransform,r),t.hasHand)for(let s=0;s<25;s++){const a=i.handTransforms.slice(s*8,s*8+7),o=A.handTransforms.slice(s*8,s*8+7),c=i.handTransforms[s*8+7],l=A.handTransforms[s*8+7],u=e.hand.get(t.jointSequence[s]);this.updateXRSpaceFromMergedFrames(u,a,o,r),u[FA].radius=(l-c)*r+c}if(t.hasGamepad){const s=e.gamepad;A.buttons.forEach((a,o)=>{const c=s.buttons[o];c[Be].pressed=a[0]===1,c[Be].touched=a[1]===1;const l=i.buttons[o][2],u=a[2];c[Be].value=(u-l)*r+l}),A.axes.forEach((a,o)=>{const c=i.axes[o];s[Be].axesMap[o.toString()].x=(a-c)*r+c})}}updateXRSpaceFromMergedFrames(e,t,i,A){const r=jn(t[0],t[1],t[2]),s=po(t[3],t[4],t[5],t[6]),a=jn(i[0],i[1],i[2]),o=po(i[3],i[4],i[5],i[6]);_l(this[Ve].vec3,r,a,A),Ws(this[Ve].quat,s,o,A),ra(e[Ut].offsetMatrix,this[Ve].quat,this[Ve].vec3)}processRawInputData(e){const t=e[0],i=this[Ve].inputSchemas.get(t),r={targetRayTransform:e.slice(1,8)};let s=8;if(i.hasGrip&&(r.gripTransform=e[s++]),i.hasHand&&(r.handTransforms=e[s++]),i.hasGamepad){const a=e[s];r.buttons=a.slice(0,i.numButtons),r.axes=a.slice(i.numButtons)}return{index:t,inputData:r}}}const Rf="2.0.0";class Qf extends Event{constructor(e,t){if(super(e,t),!t.referenceSpace)throw new Error("XRReferenceSpaceEventInit.referenceSpace is required");this.referenceSpace=t.referenceSpace,this.transform=t.transform}}class Uf extends EventTarget{constructor(e){super(),this[Qn]={device:e,grantSession:({resolve:t,reject:i,mode:A,options:r})=>{if(this[Qn].activeSession){i(new DOMException("An active XRSession already exists.","InvalidStateError"));return}const{requiredFeatures:s=[],optionalFeatures:a=[]}=r,{supportedFeatures:o}=this[Qn].device;if(!s.every(p=>o.includes(p))){i(new Error("One or more required features are not supported by the device."));return}const l=a.filter(p=>o.includes(p)),u=Array.from(new Set([...s,...l,"viewer","local"])),f=new pu(this[Qn].device,A,u);this[Qn].activeSession=f,f.addEventListener("end",()=>{this[Qn].activeSession=void 0}),t(f)}}}isSessionSupported(e){return new Promise((t,i)=>{t(e==="inline"?!0:this[Qn].device.supportedSessionModes.includes(e))})}requestSession(e,t={}){return new Promise((i,A)=>{this.isSessionSupported(e).then(r=>{if(!r){A(new DOMException("The requested XRSession mode is not supported.","NotSupportedError"));return}const s={resolve:i,reject:A,mode:e,options:t};this[Qn].grantSession(s)}).catch(A)})}offerSession(e,t={}){return new Promise((i,A)=>{this.isSessionSupported(e).then(r=>{if(!r){A(new DOMException("The requested XRSession mode is not supported.","NotSupportedError"));return}this[Qn].offeredSessionConfig={resolve:i,reject:A,mode:e,options:t}}).catch(A)})}}class va{constructor(e,t,i,A){this[Ms]={x:e,y:t,width:i,height:A}}get x(){return this[Ms].x}get y(){return this[Ms].y}get width(){return this[Ms].width}get height(){return this[Ms].height}}const _s={ipd:.063,fovy:Math.PI/2,headsetPosition:new OA(0,1.6,0),headsetQuaternion:new Ys,stereoEnabled:!1},I1=1,R1=2,Q1=3,U1=4;class L1{constructor(e,t={}){var i,A,r,s,a,o;this.version=Rf;const c=new c1,l=new WA(Yt.Viewer,c),u={[xt.Left]:new bt(l),[xt.Right]:new bt(l),[xt.None]:new bt(l)},f=e.controllerConfig,p={};f&&Object.values(Bn).forEach(d=>{f.layout[d]&&(p[d]=new f1(f,d,c))});const g={[Bn.Left]:new If(Ef,Bn.Left,c),[Bn.Right]:new If(Ef,Bn.Right,c)},m=(i=t.canvasContainer)!==null&&i!==void 0?i:document.createElement("div");m.dataset.webxr_runtime=`Immersive Web Emulation Runtime v${Rf}`,m.style.position="fixed",m.style.width="100%",m.style.height="100%",m.style.top="0",m.style.left="0",m.style.display="flex",m.style.justifyContent="center",m.style.alignItems="center",m.style.overflow="hidden",m.style.zIndex="999",this[K]={name:e.name,supportedSessionModes:e.supportedSessionModes,supportedFeatures:e.supportedFeatures,supportedFrameRates:e.supportedFrameRates,isSystemKeyboardSupported:e.isSystemKeyboardSupported,internalNominalFrameRate:e.internalNominalFrameRate,environmentBlendModes:e.environmentBlendModes,interactionMode:e.interactionMode,userAgent:e.userAgent,position:(A=t.headsetPosition)!==null&&A!==void 0?A:_s.headsetPosition.clone(),quaternion:(r=t.headsetQuaternion)!==null&&r!==void 0?r:_s.headsetQuaternion.clone(),stereoEnabled:(s=t.stereoEnabled)!==null&&s!==void 0?s:_s.stereoEnabled,ipd:(a=t.ipd)!==null&&a!==void 0?a:_s.ipd,fovy:(o=t.fovy)!==null&&o!==void 0?o:_s.fovy,controllers:p,hands:g,primaryInputMode:"controller",pendingReferenceSpaceReset:!1,visibilityState:"visible",pendingVisibilityState:null,xrSystem:null,matrix:Kt(),globalSpace:c,viewerSpace:l,viewSpaces:u,canvasContainer:m,getViewport:(d,h)=>{const y=d.context.canvas,{width:v,height:B}=y;switch(h.eye){case xt.None:return new va(0,0,v,B);case xt.Left:return new va(0,0,this[K].stereoEnabled?v/2:v,B);case xt.Right:return new va(v/2,0,this[K].stereoEnabled?v/2:0,B)}},updateViews:()=>{const d=this[K].viewerSpace;ra(d[Ut].offsetMatrix,this[K].quaternion.quat,this[K].position.vec3),qr(this[K].viewSpaces[xt.Left][Ut].offsetMatrix,jn(-this[K].ipd/2,0,0)),qr(this[K].viewSpaces[xt.Right][Ut].offsetMatrix,jn(this[K].ipd/2,0,0))},onBaseLayerSet:d=>{if(!d)return;const h=d.context.canvas;if(h.parentElement!==this[K].canvasContainer){const y=this[K].devui;if(y){const{devUICanvas:B,devUIContainer:b}=y;B.style.zIndex=Q1.toString(),b.style.zIndex=U1.toString(),this[K].canvasContainer.appendChild(y.devUICanvas),this[K].canvasContainer.appendChild(y.devUIContainer)}const v=this[K].sem;v&&(v.environmentCanvas.style.zIndex=I1.toString(),this[K].canvasContainer.appendChild(v.environmentCanvas)),this[K].canvasData={canvas:h,parent:h.parentElement,width:h.width,height:h.height,zIndex:h.style.zIndex},h.style.zIndex=R1.toString(),this[K].canvasContainer.appendChild(h),document.body.appendChild(this[K].canvasContainer)}h.width=window.innerWidth,h.height=window.innerHeight},onSessionEnd:()=>{if(this[K].canvasData){const{canvas:d,parent:h,width:y,height:v,zIndex:B}=this[K].canvasData;d.width=y,d.height=v,d.style.zIndex=B,h?h.appendChild(d):this[K].canvasContainer.removeChild(d);const b=this[K].devui;b&&(this[K].canvasContainer.removeChild(b.devUICanvas),this[K].canvasContainer.removeChild(b.devUIContainer));const C=this[K].sem;C&&this[K].canvasContainer.removeChild(C.environmentCanvas),document.body.removeChild(this[K].canvasContainer),this[K].canvasData=void 0,window.dispatchEvent(new Event("resize"))}},onFrameStart:d=>{var h;if(!((h=this[K].actionPlayer)===null||h===void 0)&&h.playing)this[K].actionPlayer.playFrame();else{const y=d.session;this[K].updateViews(),this[K].pendingVisibilityState&&(this[K].visibilityState=this[K].pendingVisibilityState,this[K].pendingVisibilityState=null,y.dispatchEvent(new vo("visibilitychange",{session:y}))),this[K].visibilityState==="visible"&&this.activeInputs.forEach(v=>{v.onFrameStart(d)}),this[K].pendingReferenceSpaceReset&&(y[R].referenceSpaces.forEach(v=>{switch(v[Zi].type){case Yt.Local:case Yt.LocalFloor:case Yt.BoundedFloor:case Yt.Unbounded:v.dispatchEvent(new Qf("reset",{referenceSpace:v}));break}}),this[K].pendingReferenceSpaceReset=!1)}this[K].updateViews()}},this[K].updateViews()}installRuntime(e=globalThis){Object.defineProperty(WebGL2RenderingContext.prototype,"makeXRCompatible",{value:function(){return new Promise((t,i)=>{t(!0)})},configurable:!0}),this[K].xrSystem=new Uf(this),Object.defineProperty(globalThis.navigator,"xr",{value:this[K].xrSystem,configurable:!0}),Object.defineProperty(navigator,"userAgent",{value:this[K].userAgent,writable:!1,configurable:!1,enumerable:!0}),e.XRSystem=Uf,e.XRSession=pu,e.XRRenderState=Cl,e.XRFrame=wp,e.XRSpace=bt,e.XRReferenceSpace=WA,e.XRJointSpace=mu,e.XRView=mp,e.XRViewport=va,e.XRRigidTransform=XA,e.XRPose=No,e.XRViewerPose=xp,e.XRJointPose=vp,e.XRInputSource=Oo,e.XRInputSourceArray=u1,e.XRHand=gu,e.XRLayer=Ep,e.XRWebGLLayer=P1,e.XRSessionEvent=vo,e.XRInputSourceEvent=eo,e.XRInputSourcesChangeEvent=pp,e.XRReferenceSpaceEvent=Qf}installDevUI(e){this[K].devui=new e(this)}installSEM(e){this[K].sem=new e(this)}get supportedSessionModes(){return this[K].supportedSessionModes}get supportedFeatures(){return this[K].supportedFeatures}get supportedFrameRates(){return this[K].supportedFrameRates}get isSystemKeyboardSupported(){return this[K].isSystemKeyboardSupported}get internalNominalFrameRate(){return this[K].internalNominalFrameRate}get stereoEnabled(){return this[K].stereoEnabled}set stereoEnabled(e){this[K].stereoEnabled=e}get ipd(){return this[K].ipd}set ipd(e){this[K].ipd=e}get fovy(){return this[K].fovy}set fovy(e){this[K].fovy=e}get position(){return this[K].position}get quaternion(){return this[K].quaternion}get viewerSpace(){var e;return!((e=this[K].actionPlayer)===null||e===void 0)&&e.playing?this[K].actionPlayer.viewerSpace:this[K].viewerSpace}get viewSpaces(){var e;return!((e=this[K].actionPlayer)===null||e===void 0)&&e.playing?this[K].actionPlayer.viewSpaces:this[K].viewSpaces}get controllers(){return this[K].controllers}get hands(){return this[K].hands}get primaryInputMode(){return this[K].primaryInputMode}set primaryInputMode(e){if(e!=="controller"&&e!=="hand"){console.warn('primary input mode can only be "controller" or "hand"');return}this[K].primaryInputMode=e}get activeInputs(){return this[K].visibilityState!=="visible"?[]:(this[K].primaryInputMode==="controller"?Object.values(this[K].controllers):Object.values(this[K].hands)).filter(t=>t.connected)}get inputSources(){var e;return!((e=this[K].actionPlayer)===null||e===void 0)&&e.playing?this[K].actionPlayer.inputSources:this.activeInputs.map(t=>t.inputSource)}get canvasContainer(){return this[K].canvasContainer}get canvasDimensions(){if(this[K].canvasData){const{width:e,height:t}=this[K].canvasData.canvas;return{width:e,height:t}}}get activeSession(){var e;return(e=this[K].xrSystem)===null||e===void 0?void 0:e[Qn].activeSession}get sessionOffered(){var e;return!!(!((e=this[K].xrSystem)===null||e===void 0)&&e[Qn].offeredSessionConfig)}get name(){return this[K].name}grantOfferedSession(){var e;const t=(e=this[K].xrSystem)===null||e===void 0?void 0:e[Qn];t&&t.offeredSessionConfig&&(t.grantSession(t.offeredSessionConfig),t.offeredSessionConfig=void 0)}recenter(){const e=new OA(-this.position.x,0,-this.position.z),t=new OA(0,0,-1).applyQuaternion(this.quaternion);t.y=0,t.normalize();const i=Math.atan2(t.x,-t.z),A=new Ys().setFromAxisAngle(new OA(0,1,0),i);this.position.add(e),this.quaternion.multiply(A),[...Object.values(this[K].controllers),...Object.values(this[K].hands)].forEach(r=>{r.position.add(e),r.quaternion.multiply(A),r.position.applyQuaternion(A)}),this[K].pendingReferenceSpaceReset=!0}get visibilityState(){return this[K].visibilityState}updateVisibilityState(e){if(!Object.values(["visible","visible-blurred","hidden"]).includes(e))throw new DOMException("Invalid XRVisibilityState value","NotSupportedError");e!==this[K].visibilityState&&(this[K].pendingVisibilityState=e)}createActionPlayer(e,t){return this[K].actionPlayer=new T1(e,t,this[K].ipd),this[K].actionPlayer}get devui(){return this[K].devui}get sem(){return this[K].sem}}const ko={mapping:Zs.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"x-button",type:"binary"},{id:"y-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},zo={mapping:Zs.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"a-button",type:"binary"},{id:"b-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},F1={profileId:"oculus-touch-v2",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:ko,gripOffsetMatrix:[.9925461411476135,4673031295254759e-24,-.12186938524246216,0,.08617470413446426,.7071065306663513,.7018362283706665,0,.0861746296286583,-.70710688829422,.7018358707427979,0,-.003979847766458988,-.01585787907242775,.04964185878634453,1],numHapticActuators:1},right:{gamepad:zo,gripOffsetMatrix:[.9925461411476135,3688163374704345e-23,.12186937034130096,0,-.08617469668388367,.7071066498756409,.7018361687660217,0,-.0861746147274971,-.7071068286895752,.7018359899520874,0,.003979853354394436,-.01585787907242775,.04964182525873184,1],numHapticActuators:1}}},O1={profileId:"oculus-touch-v3",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:ko,gripOffsetMatrix:[.9925461411476135,20823669899527886e-24,-.12186937034130096,0,.08617465198040009,.7071067094802856,.701836109161377,0,.08617466688156128,-.7071067690849304,.7018360495567322,0,-.003979838453233242,-.015857907012104988,.04964181408286095,1],numHapticActuators:1},right:{gamepad:zo,gripOffsetMatrix:[.9925461411476135,-8329467959811154e-23,.12186941504478455,0,-.08617465943098068,.7071066498756409,.7018361687660217,0,-.08617471158504486,-.7071068286895752,.7018359303474426,0,.003979798872023821,-.015857888385653496,.049641866236925125,1],numHapticActuators:1}}},N1={profileId:"meta-quest-touch-pro",fallbackProfileIds:["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:ko,gripOffsetMatrix:[.9925461411476135,-15779937356796836e-24,-.12186935544013977,0,.08617467433214188,.7071067094802856,.701836109161377,0,.0861746296286583,-.7071067690849304,.7018360495567322,0,-.003979836590588093,-.015857847407460213,.049641840159893036,1],numHapticActuators:3},right:{gamepad:zo,gripOffsetMatrix:[.9925461411476135,9267653311439972e-26,.12186937034130096,0,-.08617467433214188,.7071067094802856,.7018361687660217,0,-.08617464452981949,-.7071067690849304,.7018360495567322,0,.003979847766458988,-.01585782691836357,.04964186251163483,1],numHapticActuators:3}}},k1={profileId:"meta-quest-touch-plus",fallbackProfileIds:["oculus-touch-v3","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:ko,gripOffsetMatrix:[.9925461411476135,10736208366779465e-24,-.12186933308839798,0,.08617459982633591,.70710688829422,.7018360495567322,0,.08617466688156128,-.7071067094802856,.7018362283706665,0,-.003979803062975407,-.015857873484492302,.04964187368750572,1],numHapticActuators:1},right:{gamepad:zo,gripOffsetMatrix:[.9925461411476135,-26238110351073374e-24,.12186934053897858,0,-.0861746147274971,.7071067690849304,.7018360495567322,0,-.08617465943098068,-.7071067094802856,.701836109161377,0,.003979838453233242,-.015857869759202003,.04964182525873184,1],numHapticActuators:1}}},z1={name:"Oculus Quest 1",controllerConfig:F1,supportedSessionModes:["inline","immersive-vr","immersive-ar"],supportedFeatures:["viewer","local","local-floor","bounded-floor","unbounded","anchors","plane-detection","hand-tracking"],supportedFrameRates:[72,80,90],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{"immersive-vr":Jn.Opaque,"immersive-ar":Jn.AlphaBlend},interactionMode:Jr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 1) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},G1={name:"Meta Quest 2",controllerConfig:O1,supportedSessionModes:["inline","immersive-vr","immersive-ar"],supportedFeatures:["viewer","local","local-floor","bounded-floor","unbounded","anchors","plane-detection","mesh-detection","hit-test","hand-tracking"],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{"immersive-vr":Jn.Opaque,"immersive-ar":Jn.AlphaBlend},interactionMode:Jr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},H1={name:"Meta Quest Pro",controllerConfig:N1,supportedSessionModes:["inline","immersive-vr","immersive-ar"],supportedFeatures:["viewer","local","local-floor","bounded-floor","unbounded","anchors","plane-detection","mesh-detection","hit-test","hand-tracking"],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{"immersive-vr":Jn.Opaque,"immersive-ar":Jn.AlphaBlend},interactionMode:Jr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest Pro) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},W1={name:"Meta Quest 3",controllerConfig:k1,supportedSessionModes:["inline","immersive-vr","immersive-ar"],supportedFeatures:["viewer","local","local-floor","bounded-floor","unbounded","anchors","plane-detection","mesh-detection","hit-test","hand-tracking","depth-sensing"],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{"immersive-vr":Jn.Opaque,"immersive-ar":Jn.AlphaBlend},interactionMode:Jr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},Lf=()=>{};let vu={},Mp={},_p=null,yp={mark:Lf,measure:Lf};try{typeof window<"u"&&(vu=window),typeof document<"u"&&(Mp=document),typeof MutationObserver<"u"&&(_p=MutationObserver),typeof performance<"u"&&(yp=performance)}catch{}const{userAgent:Ff=""}=vu.navigator||{},sA=vu,wt=Mp,Of=_p,xa=yp;sA.document;const Ri=!!wt.documentElement&&!!wt.head&&typeof wt.addEventListener=="function"&&typeof wt.createElement=="function",Bp=~Ff.indexOf("MSIE")||~Ff.indexOf("Trident/");var Mt="classic",Cp="duotone",Cn="sharp",Sn="sharp-duotone",Y1=[Mt,Cp,Cn,Sn],V1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Nf={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},j1=["kit"],K1=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,q1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,X1={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},J1={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Z1={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},$1={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},e2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},t2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Sp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},n2=["solid","regular","light","thin","duotone","brands"],Dp=[1,2,3,4,5,6,7,8,9,10],i2=Dp.concat([11,12,13,14,15,16,17,18,19,20]),Ns={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},A2=[...Object.keys($1),...n2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ns.GROUP,Ns.SWAP_OPACITY,Ns.PRIMARY,Ns.SECONDARY].concat(Dp.map(n=>"".concat(n,"x"))).concat(i2.map(n=>"w-".concat(n))),r2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},s2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},a2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},kf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const bi="___FONT_AWESOME___",Sl=16,bp="fa",Pp="svg-inline--fa",YA="data-fa-i2svg",Dl="data-fa-pseudo-element",o2="data-fa-pseudo-element-pending",xu="data-prefix",wu="data-icon",zf="fontawesome-i2svg",c2="async",l2=["HTML","HEAD","STYLE","SCRIPT"],Tp=(()=>{try{return!0}catch{return!1}})(),Ip=[Mt,Cn,Sn];function sa(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[Mt]}})}const Rp={...Sp};Rp[Mt]={...Sp[Mt],...Nf.kit,...Nf["kit-duotone"]};const NA=sa(Rp),bl={...t2};bl[Mt]={...bl[Mt],...kf.kit,...kf["kit-duotone"]};const ea=sa(bl),Pl={...e2};Pl[Mt]={...Pl[Mt],...a2.kit};const kA=sa(Pl),Tl={...Z1};Tl[Mt]={...Tl[Mt],...s2.kit};const u2=sa(Tl),f2=K1,Qp="fa-layers-text",d2=q1,h2={...V1};sa(h2);const p2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dc=Ns,Zr=new Set;Object.keys(ea[Mt]).map(Zr.add.bind(Zr));Object.keys(ea[Cn]).map(Zr.add.bind(Zr));Object.keys(ea[Sn]).map(Zr.add.bind(Zr));const g2=[...j1,...A2],Vs=sA.FontAwesomeConfig||{};function m2(n){var e=wt.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function v2(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}wt&&typeof wt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const A=v2(m2(t));A!=null&&(Vs[i]=A)});const Up={styleDefault:"solid",familyDefault:"classic",cssPrefix:bp,replacementClass:Pp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vs.familyPrefix&&(Vs.cssPrefix=Vs.familyPrefix);const $r={...Up,...Vs};$r.autoReplaceSvg||($r.observeMutations=!1);const Ee={};Object.keys(Up).forEach(n=>{Object.defineProperty(Ee,n,{enumerable:!0,set:function(e){$r[n]=e,js.forEach(t=>t(Ee))},get:function(){return $r[n]}})});Object.defineProperty(Ee,"familyPrefix",{enumerable:!0,set:function(n){$r.cssPrefix=n,js.forEach(e=>e(Ee))},get:function(){return $r.cssPrefix}});sA.FontAwesomeConfig=Ee;const js=[];function x2(n){return js.push(n),()=>{js.splice(js.indexOf(n),1)}}const Oi=Sl,li={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function w2(n){if(!n||!Ri)return;const e=wt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=wt.head.childNodes;let i=null;for(let A=t.length-1;A>-1;A--){const r=t[A],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=r)}return wt.head.insertBefore(e,i),n}const E2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ta(){let n=12,e="";for(;n-- >0;)e+=E2[Math.random()*62|0];return e}function ds(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Eu(n){return n.classList?ds(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function Lp(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M2(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(Lp(n[t]),'" '),"").trim()}function Go(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Mu(n){return n.size!==li.size||n.x!==li.x||n.y!==li.y||n.rotate!==li.rotate||n.flipX||n.flipY}function _2(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const A={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(s," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:A,inner:o,path:c}}function y2(n){let{transform:e,width:t=Sl,height:i=Sl,startCentered:A=!1}=n,r="";return A&&Bp?r+="translate(".concat(e.x/Oi-t/2,"em, ").concat(e.y/Oi-i/2,"em) "):A?r+="translate(calc(-50% + ".concat(e.x/Oi,"em), calc(-50% + ").concat(e.y/Oi,"em)) "):r+="translate(".concat(e.x/Oi,"em, ").concat(e.y/Oi,"em) "),r+="scale(".concat(e.size/Oi*(e.flipX?-1:1),", ").concat(e.size/Oi*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var B2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fp(){const n=bp,e=Pp,t=Ee.cssPrefix,i=Ee.replacementClass;let A=B2;if(t!==n||i!==e){const r=new RegExp("\\.".concat(n,"\\-"),"g"),s=new RegExp("\\--".concat(n,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");A=A.replace(r,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(a,".".concat(i))}return A}let Gf=!1;function hc(){Ee.autoAddCss&&!Gf&&(w2(Fp()),Gf=!0)}var C2={mixout(){return{dom:{css:Fp,insertCss:hc}}},hooks(){return{beforeDOMElementCreation(){hc()},beforeI2svg(){hc()}}}};const Pi=sA||{};Pi[bi]||(Pi[bi]={});Pi[bi].styles||(Pi[bi].styles={});Pi[bi].hooks||(Pi[bi].hooks={});Pi[bi].shims||(Pi[bi].shims=[]);var ui=Pi[bi];const Op=[],Np=function(){wt.removeEventListener("DOMContentLoaded",Np),xo=1,Op.map(n=>n())};let xo=!1;Ri&&(xo=(wt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(wt.readyState),xo||wt.addEventListener("DOMContentLoaded",Np));function S2(n){Ri&&(xo?setTimeout(n,0):Op.push(n))}function aa(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?Lp(n):"<".concat(e," ").concat(M2(t),">").concat(i.map(aa).join(""),"</").concat(e,">")}function Hf(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var pc=function(e,t,i,A){var r=Object.keys(e),s=r.length,a=t,o,c,l;for(i===void 0?(o=1,l=e[r[0]]):(o=0,l=i);o<s;o++)c=r[o],l=a(l,e[c],c,e);return l};function D2(n){const e=[];let t=0;const i=n.length;for(;t<i;){const A=n.charCodeAt(t++);if(A>=55296&&A<=56319&&t<i){const r=n.charCodeAt(t++);(r&64512)==56320?e.push(((A&1023)<<10)+(r&1023)+65536):(e.push(A),t--)}else e.push(A)}return e}function Il(n){const e=D2(n);return e.length===1?e[0].toString(16):null}function b2(n,e){const t=n.length;let i=n.charCodeAt(e),A;return i>=55296&&i<=56319&&t>e+1&&(A=n.charCodeAt(e+1),A>=56320&&A<=57343)?(i-55296)*1024+A-56320+65536:i}function Wf(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function Rl(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,A=Wf(e);typeof ui.hooks.addPack=="function"&&!i?ui.hooks.addPack(n,Wf(e)):ui.styles[n]={...ui.styles[n]||{},...A},n==="fas"&&Rl("fa",e)}const{styles:TA,shims:P2}=ui,T2={[Mt]:Object.values(kA[Mt]),[Cn]:Object.values(kA[Cn]),[Sn]:Object.values(kA[Sn])};let _u=null,kp={},zp={},Gp={},Hp={},Wp={};const I2={[Mt]:Object.keys(NA[Mt]),[Cn]:Object.keys(NA[Cn]),[Sn]:Object.keys(NA[Sn])};function R2(n){return~g2.indexOf(n)}function Q2(n,e){const t=e.split("-"),i=t[0],A=t.slice(1).join("-");return i===n&&A!==""&&!R2(A)?A:null}const Yp=()=>{const n=i=>pc(TA,(A,r,s)=>(A[s]=pc(r,i,{}),A),{});kp=n((i,A,r)=>(A[3]&&(i[A[3]]=r),A[2]&&A[2].filter(a=>typeof a=="number").forEach(a=>{i[a.toString(16)]=r}),i)),zp=n((i,A,r)=>(i[r]=r,A[2]&&A[2].filter(a=>typeof a=="string").forEach(a=>{i[a]=r}),i)),Wp=n((i,A,r)=>{const s=A[2];return i[r]=r,s.forEach(a=>{i[a]=r}),i});const e="far"in TA||Ee.autoFetchSvg,t=pc(P2,(i,A)=>{const r=A[0];let s=A[1];const a=A[2];return s==="far"&&!e&&(s="fas"),typeof r=="string"&&(i.names[r]={prefix:s,iconName:a}),typeof r=="number"&&(i.unicodes[r.toString(16)]={prefix:s,iconName:a}),i},{names:{},unicodes:{}});Gp=t.names,Hp=t.unicodes,_u=Ho(Ee.styleDefault,{family:Ee.familyDefault})};x2(n=>{_u=Ho(n.styleDefault,{family:Ee.familyDefault})});Yp();function yu(n,e){return(kp[n]||{})[e]}function U2(n,e){return(zp[n]||{})[e]}function tA(n,e){return(Wp[n]||{})[e]}function Vp(n){return Gp[n]||{prefix:null,iconName:null}}function L2(n){const e=Hp[n],t=yu("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function aA(){return _u}const Bu=()=>({prefix:null,iconName:null,rest:[]});function Ho(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=Mt}=e,i=NA[t][n],A=ea[t][n]||ea[t][i],r=n in ui.styles?n:null;return A||r||null}const F2={[Mt]:Object.keys(kA[Mt]),[Cn]:Object.keys(kA[Cn]),[Sn]:Object.keys(kA[Sn])};function Wo(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e,i={[Mt]:"".concat(Ee.cssPrefix,"-").concat(Mt),[Cn]:"".concat(Ee.cssPrefix,"-").concat(Cn),[Sn]:"".concat(Ee.cssPrefix,"-").concat(Sn)};let A=null,r=Mt;const s=Y1.filter(o=>o!==Cp);s.forEach(o=>{(n.includes(i[o])||n.some(c=>F2[o].includes(c)))&&(r=o)});const a=n.reduce((o,c)=>{const l=Q2(Ee.cssPrefix,c);if(TA[c]?(c=T2[r].includes(c)?u2[r][c]:c,A=c,o.prefix=c):I2[r].indexOf(c)>-1?(A=c,o.prefix=Ho(c,{family:r})):l?o.iconName=l:c!==Ee.replacementClass&&!s.some(u=>c===i[u])&&o.rest.push(c),!t&&o.prefix&&o.iconName){const u=A==="fa"?Vp(o.iconName):{},f=tA(o.prefix,o.iconName);u.prefix&&(A=null),o.iconName=u.iconName||f||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!TA.far&&TA.fas&&!Ee.autoFetchSvg&&(o.prefix="fas")}return o},Bu());return(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(a.prefix="fad"),!a.prefix&&r===Cn&&(TA.fass||Ee.autoFetchSvg)&&(a.prefix="fass",a.iconName=tA(a.prefix,a.iconName)||a.iconName),!a.prefix&&r===Sn&&(TA.fasds||Ee.autoFetchSvg)&&(a.prefix="fasds",a.iconName=tA(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||A==="fa")&&(a.prefix=aA()||"fas"),a}class O2{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const A=t.reduce(this._pullDefinitions,{});Object.keys(A).forEach(r=>{this.definitions[r]={...this.definitions[r]||{},...A[r]},Rl(r,A[r]);const s=kA[Mt][r];s&&Rl(s,A[r]),Yp()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(A=>{const{prefix:r,iconName:s,icon:a}=i[A],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(c=>{typeof c=="string"&&(e[r][c]=a)}),e[r][s]=a}),e}}let Yf=[],Nr={};const Hr={},N2=Object.keys(Hr);function k2(n,e){let{mixoutsTo:t}=e;return Yf=n,Nr={},Object.keys(Hr).forEach(i=>{N2.indexOf(i)===-1&&delete Hr[i]}),Yf.forEach(i=>{const A=i.mixout?i.mixout():{};if(Object.keys(A).forEach(r=>{typeof A[r]=="function"&&(t[r]=A[r]),typeof A[r]=="object"&&Object.keys(A[r]).forEach(s=>{t[r]||(t[r]={}),t[r][s]=A[r][s]})}),i.hooks){const r=i.hooks();Object.keys(r).forEach(s=>{Nr[s]||(Nr[s]=[]),Nr[s].push(r[s])})}i.provides&&i.provides(Hr)}),t}function Ql(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),A=2;A<t;A++)i[A-2]=arguments[A];return(Nr[n]||[]).forEach(s=>{e=s.apply(null,[e,...i])}),e}function VA(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Nr[n]||[]).forEach(r=>{r.apply(null,t)})}function oA(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Hr[n]?Hr[n].apply(null,e):void 0}function Ul(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||aA();if(e)return e=tA(t,e)||e,Hf(jp.definitions,t,e)||Hf(ui.styles,t,e)}const jp=new O2,z2=()=>{Ee.autoReplaceSvg=!1,Ee.observeMutations=!1,VA("noAuto")},G2={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ri?(VA("beforeI2svg",n),oA("pseudoElements2svg",n),oA("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;Ee.autoReplaceSvg===!1&&(Ee.autoReplaceSvg=!0),Ee.observeMutations=!0,S2(()=>{W2({autoReplaceSvgRoot:e}),VA("watch",n)})}},H2={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:tA(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Ho(n[0]);return{prefix:t,iconName:tA(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(Ee.cssPrefix,"-"))>-1||n.match(f2))){const e=Wo(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||aA(),iconName:tA(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=aA();return{prefix:e,iconName:tA(e,n)||n}}}},Dn={noAuto:z2,config:Ee,dom:G2,parse:H2,library:jp,findIconDefinition:Ul,toHtml:aa},W2=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=wt}=n;(Object.keys(ui.styles).length>0||Ee.autoFetchSvg)&&Ri&&Ee.autoReplaceSvg&&Dn.dom.i2svg({node:e})};function Yo(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>aa(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Ri)return;const t=wt.createElement("div");return t.innerHTML=n.html,t.children}}),n}function Y2(n){let{children:e,main:t,mask:i,attributes:A,styles:r,transform:s}=n;if(Mu(s)&&t.found&&!i.found){const{width:a,height:o}=t,c={x:a/o/2,y:.5};A.style=Go({...r,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:A,children:e}]}function V2(n){let{prefix:e,iconName:t,children:i,attributes:A,symbol:r}=n;const s=r===!0?"".concat(e,"-").concat(Ee.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...A,id:s},children:i}]}]}function Cu(n){const{icons:{main:e,mask:t},prefix:i,iconName:A,transform:r,symbol:s,title:a,maskId:o,titleId:c,extra:l,watchable:u=!1}=n,{width:f,height:p}=t.found?t:e,g=i==="fak",m=[Ee.replacementClass,A?"".concat(Ee.cssPrefix,"-").concat(A):""].filter(b=>l.classes.indexOf(b)===-1).filter(b=>b!==""||!!b).concat(l.classes).join(" ");let d={children:[],attributes:{...l.attributes,"data-prefix":i,"data-icon":A,class:m,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)}};const h=g&&!~l.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};u&&(d.attributes[YA]=""),a&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(c||ta())},children:[a]}),delete d.attributes.title);const y={...d,prefix:i,iconName:A,main:e,mask:t,maskId:o,transform:r,symbol:s,styles:{...h,...l.styles}},{children:v,attributes:B}=t.found&&e.found?oA("generateAbstractMask",y)||{children:[],attributes:{}}:oA("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=v,y.attributes=B,s?V2(y):Y2(y)}function Vf(n){const{content:e,width:t,height:i,transform:A,title:r,extra:s,watchable:a=!1}=n,o={...s.attributes,...r?{title:r}:{},class:s.classes.join(" ")};a&&(o[YA]="");const c={...s.styles};Mu(A)&&(c.transform=y2({transform:A,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);const l=Go(c);l.length>0&&(o.style=l);const u=[];return u.push({tag:"span",attributes:o,children:[e]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function j2(n){const{content:e,title:t,extra:i}=n,A={...i.attributes,...t?{title:t}:{},class:i.classes.join(" ")},r=Go(i.styles);r.length>0&&(A.style=r);const s=[];return s.push({tag:"span",attributes:A,children:[e]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}const{styles:gc}=ui;function Ll(n){const e=n[0],t=n[1],[i]=n.slice(4);let A=null;return Array.isArray(i)?A={tag:"g",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(dc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(dc.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Ee.cssPrefix,"-").concat(dc.PRIMARY),fill:"currentColor",d:i[1]}}]}:A={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:A}}const K2={found:!1,width:512,height:512};function q2(n,e){!Tp&&!Ee.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Fl(n,e){let t=e;return e==="fa"&&Ee.styleDefault!==null&&(e=aA()),new Promise((i,A)=>{if(t==="fa"){const r=Vp(n);n=r.iconName||n,e=r.prefix||e}if(n&&e&&gc[e]&&gc[e][n]){const r=gc[e][n];return i(Ll(r))}q2(n,e),i({...K2,icon:Ee.showMissingIcons&&n?oA("missingIconAbstract")||{}:{}})})}const jf=()=>{},Ol=Ee.measurePerformance&&xa&&xa.mark&&xa.measure?xa:{mark:jf,measure:jf},ks='FA "6.6.0"',X2=n=>(Ol.mark("".concat(ks," ").concat(n," begins")),()=>Kp(n)),Kp=n=>{Ol.mark("".concat(ks," ").concat(n," ends")),Ol.measure("".concat(ks," ").concat(n),"".concat(ks," ").concat(n," begins"),"".concat(ks," ").concat(n," ends"))};var Su={begin:X2,end:Kp};const to=()=>{};function Kf(n){return typeof(n.getAttribute?n.getAttribute(YA):null)=="string"}function J2(n){const e=n.getAttribute?n.getAttribute(xu):null,t=n.getAttribute?n.getAttribute(wu):null;return e&&t}function Z2(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(Ee.replacementClass)}function $2(){return Ee.autoReplaceSvg===!0?no.replace:no[Ee.autoReplaceSvg]||no.replace}function ev(n){return wt.createElementNS("http://www.w3.org/2000/svg",n)}function tv(n){return wt.createElement(n)}function qp(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?ev:tv}=e;if(typeof n=="string")return wt.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(r){i.setAttribute(r,n.attributes[r])}),(n.children||[]).forEach(function(r){i.appendChild(qp(r,{ceFn:t}))}),i}function nv(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const no={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(qp(t),e)}),e.getAttribute(YA)===null&&Ee.keepOriginalSource){let t=wt.createComment(nv(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Eu(e).indexOf(Ee.replacementClass))return no.replace(n);const i=new RegExp("".concat(Ee.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const r=t[0].attributes.class.split(" ").reduce((s,a)=>(a===Ee.replacementClass||a.match(i)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});t[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const A=t.map(r=>aa(r)).join(`
`);e.setAttribute(YA,""),e.innerHTML=A}};function qf(n){n()}function Xp(n,e){const t=typeof e=="function"?e:to;if(n.length===0)t();else{let i=qf;Ee.mutateApproach===c2&&(i=sA.requestAnimationFrame||qf),i(()=>{const A=$2(),r=Su.begin("mutate");n.map(A),r(),t()})}}let Du=!1;function Jp(){Du=!0}function Nl(){Du=!1}let wo=null;function Xf(n){if(!Of||!Ee.observeMutations)return;const{treeCallback:e=to,nodeCallback:t=to,pseudoElementsCallback:i=to,observeMutationsRoot:A=wt}=n;wo=new Of(r=>{if(Du)return;const s=aA();ds(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Kf(a.addedNodes[0])&&(Ee.searchPseudoElements&&i(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&Ee.searchPseudoElements&&i(a.target.parentNode),a.type==="attributes"&&Kf(a.target)&&~p2.indexOf(a.attributeName))if(a.attributeName==="class"&&J2(a.target)){const{prefix:o,iconName:c}=Wo(Eu(a.target));a.target.setAttribute(xu,o||s),c&&a.target.setAttribute(wu,c)}else Z2(a.target)&&t(a.target)})}),Ri&&wo.observe(A,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function iv(){wo&&wo.disconnect()}function Av(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,A)=>{const r=A.split(":"),s=r[0],a=r.slice(1);return s&&a.length>0&&(i[s]=a.join(":").trim()),i},{})),t}function rv(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let A=Wo(Eu(n));return A.prefix||(A.prefix=aA()),e&&t&&(A.prefix=e,A.iconName=t),A.iconName&&A.prefix||(A.prefix&&i.length>0&&(A.iconName=U2(A.prefix,n.innerText)||yu(A.prefix,Il(n.innerText))),!A.iconName&&Ee.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(A.iconName=n.firstChild.data)),A}function sv(n){const e=ds(n.attributes).reduce((A,r)=>(A.name!=="class"&&A.name!=="style"&&(A[r.name]=r.value),A),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return Ee.autoA11y&&(t?e["aria-labelledby"]="".concat(Ee.replacementClass,"-title-").concat(i||ta()):(e["aria-hidden"]="true",e.focusable="false")),e}function av(){return{iconName:null,title:null,titleId:null,prefix:null,transform:li,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:A}=rv(n),r=sv(n),s=Ql("parseNodeAttributes",{},n);let a=e.styleParser?Av(n):[];return{iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:li,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:A,styles:a,attributes:r},...s}}const{styles:ov}=ui;function Zp(n){const e=Ee.autoReplaceSvg==="nest"?Jf(n,{styleParser:!1}):Jf(n);return~e.extra.classes.indexOf(Qp)?oA("generateLayersText",n,e):oA("generateSvgReplacementMutation",n,e)}let hi=new Set;Ip.map(n=>{hi.add("fa-".concat(n))});Object.keys(NA[Mt]).map(hi.add.bind(hi));Object.keys(NA[Cn]).map(hi.add.bind(hi));Object.keys(NA[Sn]).map(hi.add.bind(hi));hi=[...hi];function Zf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ri)return Promise.resolve();const t=wt.documentElement.classList,i=l=>t.add("".concat(zf,"-").concat(l)),A=l=>t.remove("".concat(zf,"-").concat(l)),r=Ee.autoFetchSvg?hi:Ip.map(l=>"fa-".concat(l)).concat(Object.keys(ov));r.includes("fa")||r.push("fa");const s=[".".concat(Qp,":not([").concat(YA,"])")].concat(r.map(l=>".".concat(l,":not([").concat(YA,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=ds(n.querySelectorAll(s))}catch{}if(a.length>0)i("pending"),A("complete");else return Promise.resolve();const o=Su.begin("onTree"),c=a.reduce((l,u)=>{try{const f=Zp(u);f&&l.push(f)}catch(f){Tp||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise((l,u)=>{Promise.all(c).then(f=>{Xp(f,()=>{i("active"),i("complete"),A("pending"),typeof e=="function"&&e(),o(),l()})}).catch(f=>{o(),u(f)})})}function cv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zp(n).then(t=>{t&&Xp([t],e)})}function lv(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Ul(e||{});let{mask:A}=t;return A&&(A=(A||{}).icon?A:Ul(A||{})),n(i,{...t,mask:A})}}const uv=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=li,symbol:i=!1,mask:A=null,maskId:r=null,title:s=null,titleId:a=null,classes:o=[],attributes:c={},styles:l={}}=e;if(!n)return;const{prefix:u,iconName:f,icon:p}=n;return Yo({type:"icon",...n},()=>(VA("beforeDOMElementCreation",{iconDefinition:n,params:e}),Ee.autoA11y&&(s?c["aria-labelledby"]="".concat(Ee.replacementClass,"-title-").concat(a||ta()):(c["aria-hidden"]="true",c.focusable="false")),Cu({icons:{main:Ll(p),mask:A?Ll(A.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:f,transform:{...li,...t},symbol:i,title:s,maskId:r,titleId:a,extra:{attributes:c,styles:l,classes:o}})))};var fv={mixout(){return{icon:lv(uv)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=Zf,n.nodeCallback=cv,n}}},provides(n){n.i2svg=function(e){const{node:t=wt,callback:i=()=>{}}=e;return Zf(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:A,titleId:r,prefix:s,transform:a,symbol:o,mask:c,maskId:l,extra:u}=t;return new Promise((f,p)=>{Promise.all([Fl(i,s),c.iconName?Fl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[m,d]=g;f([e,Cu({icons:{main:m,mask:d},prefix:s,iconName:i,transform:a,symbol:o,maskId:l,title:A,titleId:r,extra:u,watchable:!0})])}).catch(p)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:A,transform:r,styles:s}=e;const a=Go(s);a.length>0&&(i.style=a);let o;return Mu(r)&&(o=oA("generateAbstractTransformGrouping",{main:A,transform:r,containerWidth:A.width,iconWidth:A.width})),t.push(o||A.icon),{children:t,attributes:i}}}},dv={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Yo({type:"layer"},()=>{VA("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(A=>{Array.isArray(A)?A.map(r=>{i=i.concat(r.abstract)}):i=i.concat(A.abstract)}),[{tag:"span",attributes:{class:["".concat(Ee.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},hv={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:A={},styles:r={}}=e;return Yo({type:"counter",content:n},()=>(VA("beforeDOMElementCreation",{content:n,params:e}),j2({content:n.toString(),title:t,extra:{attributes:A,styles:r,classes:["".concat(Ee.cssPrefix,"-layers-counter"),...i]}})))}}}},pv={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=li,title:i=null,classes:A=[],attributes:r={},styles:s={}}=e;return Yo({type:"text",content:n},()=>(VA("beforeDOMElementCreation",{content:n,params:e}),Vf({content:n,transform:{...li,...t},title:i,extra:{attributes:r,styles:s,classes:["".concat(Ee.cssPrefix,"-layers-text"),...A]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:A,extra:r}=t;let s=null,a=null;if(Bp){const o=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/o,a=c.height/o}return Ee.autoA11y&&!i&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Vf({content:e.innerHTML,width:s,height:a,transform:A,title:i,extra:r,watchable:!0})])}}};const gv=new RegExp('"',"ug"),$f=[1105920,1112319],ed={FontAwesome:{normal:"fas",400:"fas"},...J1,...X1,...r2},kl=Object.keys(ed).reduce((n,e)=>(n[e.toLowerCase()]=ed[e],n),{}),mv=Object.keys(kl).reduce((n,e)=>{const t=kl[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function vv(n){const e=n.replace(gv,""),t=b2(e,0),i=t>=$f[0]&&t<=$f[1],A=e.length===2?e[0]===e[1]:!1;return{value:Il(A?e[0]:e),isSecondary:i||A}}function xv(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),A=isNaN(i)?"normal":i;return(kl[t]||{})[A]||mv[t]}function td(n,e){const t="".concat(o2).concat(e.replace(":","-"));return new Promise((i,A)=>{if(n.getAttribute(t)!==null)return i();const s=ds(n.children).filter(f=>f.getAttribute(Dl)===e)[0],a=sA.getComputedStyle(n,e),o=a.getPropertyValue("font-family"),c=o.match(d2),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(s&&!c)return n.removeChild(s),i();if(c&&u!=="none"&&u!==""){const f=a.getPropertyValue("content");let p=xv(o,l);const{value:g,isSecondary:m}=vv(f),d=c[0].startsWith("FontAwesome");let h=yu(p,g),y=h;if(d){const v=L2(g);v.iconName&&v.prefix&&(h=v.iconName,p=v.prefix)}if(h&&!m&&(!s||s.getAttribute(xu)!==p||s.getAttribute(wu)!==y)){n.setAttribute(t,y),s&&n.removeChild(s);const v=av(),{extra:B}=v;B.attributes[Dl]=e,Fl(h,p).then(b=>{const C=Cu({...v,icons:{main:b,mask:Bu()},prefix:p,iconName:y,extra:B,watchable:!0}),S=wt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(S,n.firstChild):n.appendChild(S),S.outerHTML=C.map(Q=>aa(Q)).join(`
`),n.removeAttribute(t),i()}).catch(A)}else i()}else i()})}function wv(n){return Promise.all([td(n,"::before"),td(n,"::after")])}function Ev(n){return n.parentNode!==document.head&&!~l2.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Dl)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function nd(n){if(Ri)return new Promise((e,t)=>{const i=ds(n.querySelectorAll("*")).filter(Ev).map(wv),A=Su.begin("searchPseudoElements");Jp(),Promise.all(i).then(()=>{A(),Nl(),e()}).catch(()=>{A(),Nl(),t()})})}var Mv={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=nd,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=wt}=e;Ee.searchPseudoElements&&nd(t)}}};let id=!1;var _v={mixout(){return{dom:{unwatch(){Jp(),id=!0}}}},hooks(){return{bootstrap(){Xf(Ql("mutationObserverCallbacks",{}))},noAuto(){iv()},watch(n){const{observeMutationsRoot:e}=n;id?Nl():Xf(Ql("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ad=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const A=i.toLowerCase().split("-"),r=A[0];let s=A.slice(1).join("-");if(r&&s==="h")return t.flipX=!0,t;if(r&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(r){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},e)};var yv={mixout(){return{parse:{transform:n=>Ad(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=Ad(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:A,iconWidth:r}=e;const s={transform:"translate(".concat(A/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),o="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(c)},u={transform:"translate(".concat(r/2*-1," -256)")},f={outer:s,inner:l,path:u};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...f.path}}]}]}}}};const mc={x:0,y:0,width:"100%",height:"100%"};function rd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function Bv(n){return n.tag==="g"?n.children:[n]}var Cv={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?Wo(t.split(" ").map(A=>A.trim())):Bu();return i.prefix||(i.prefix=aA()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:A,mask:r,maskId:s,transform:a}=e;const{width:o,icon:c}=A,{width:l,icon:u}=r,f=_2({transform:a,containerWidth:l,iconWidth:o}),p={tag:"rect",attributes:{...mc,fill:"white"}},g=c.children?{children:c.children.map(rd)}:{},m={tag:"g",attributes:{...f.inner},children:[rd({tag:c.tag,attributes:{...c.attributes,...f.path},...g})]},d={tag:"g",attributes:{...f.outer},children:[m]},h="mask-".concat(s||ta()),y="clip-".concat(s||ta()),v={tag:"mask",attributes:{...mc,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,d]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Bv(u)},v]};return t.push(B,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(h,")"),...mc}}),{children:t,attributes:i}}}},Sv={provides(n){let e=!1;sA.matchMedia&&(e=sA.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},A={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const r={...A,attributeName:"opacity"},s={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...A,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...r,values:"1;0;1;1;0;1;"}}),t.push(s),t.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...r,values:"1;0;0;0;0;1;"}}]}),e||t.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...r,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Dv={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},bv=[C2,fv,dv,hv,pv,Mv,_v,yv,Cv,Sv,Dv];k2(bv,{mixoutsTo:Dn});Dn.noAuto;Dn.config;Dn.library;Dn.dom;const zl=Dn.parse;Dn.findIconDefinition;Dn.toHtml;const Pv=Dn.icon;Dn.layer;Dn.text;Dn.counter;function sd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(A){return Object.getOwnPropertyDescriptor(n,A).enumerable})),t.push.apply(t,i)}return t}function ri(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?sd(Object(t),!0).forEach(function(i){kr(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):sd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Eo(n){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Eo(n)}function kr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Tv(n,e){if(n==null)return{};var t={},i=Object.keys(n),A,r;for(r=0;r<i.length;r++)A=i[r],!(e.indexOf(A)>=0)&&(t[A]=n[A]);return t}function Iv(n,e){if(n==null)return{};var t=Tv(n,e),i,A;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(A=0;A<r.length;A++)i=r[A],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Gl(n){return Rv(n)||Qv(n)||Uv(n)||Lv()}function Rv(n){if(Array.isArray(n))return Hl(n)}function Qv(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Uv(n,e){if(n){if(typeof n=="string")return Hl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Hl(n,e)}}function Hl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Lv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fv(n){var e,t=n.beat,i=n.fade,A=n.beatFade,r=n.bounce,s=n.shake,a=n.flash,o=n.spin,c=n.spinPulse,l=n.spinReverse,u=n.pulse,f=n.fixedWidth,p=n.inverse,g=n.border,m=n.listItem,d=n.flip,h=n.size,y=n.rotation,v=n.pull,B=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":A,"fa-bounce":r,"fa-shake":s,"fa-flash":a,"fa-spin":o,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":f,"fa-inverse":p,"fa-border":g,"fa-li":m,"fa-flip":d===!0,"fa-flip-horizontal":d==="horizontal"||d==="both","fa-flip-vertical":d==="vertical"||d==="both"},kr(e,"fa-".concat(h),typeof h<"u"&&h!==null),kr(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),kr(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),kr(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(B).map(function(b){return B[b]?b:null}).filter(function(b){return b})}function Ov(n){return n=n-0,n===n}function $p(n){return Ov(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var Nv=["style"];function kv(n){return n.charAt(0).toUpperCase()+n.slice(1)}function zv(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),A=$p(t.slice(0,i)),r=t.slice(i+1).trim();return A.startsWith("webkit")?e[kv(A)]=r:e[A]=r,e},{})}function eg(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(o){return eg(n,o)}),A=Object.keys(e.attributes||{}).reduce(function(o,c){var l=e.attributes[c];switch(c){case"class":o.attrs.className=l,delete e.attributes.class;break;case"style":o.attrs.style=zv(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?o.attrs[c.toLowerCase()]=l:o.attrs[$p(c)]=l}return o},{attrs:{}}),r=t.style,s=r===void 0?{}:r,a=Iv(t,Nv);return A.attrs.style=ri(ri({},A.attrs.style),s),n.apply(void 0,[e.tag,ri(ri({},A.attrs),a)].concat(Gl(i)))}var tg=!1;try{tg=!0}catch{}function Gv(){if(!tg&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function ad(n){if(n&&Eo(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(zl.icon)return zl.icon(n);if(n===null)return null;if(n&&Eo(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function vc(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?kr({},n,e):{}}var od={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},oa=Et.forwardRef(function(n,e){var t=ri(ri({},od),n),i=t.icon,A=t.mask,r=t.symbol,s=t.className,a=t.title,o=t.titleId,c=t.maskId,l=ad(i),u=vc("classes",[].concat(Gl(Fv(t)),Gl((s||"").split(" ")))),f=vc("transform",typeof t.transform=="string"?zl.transform(t.transform):t.transform),p=vc("mask",ad(A)),g=Pv(l,ri(ri(ri(ri({},u),f),p),{},{symbol:r,title:a,titleId:o,maskId:c}));if(!g)return Gv("Could not find icon",l),null;var m=g.abstract,d={ref:e};return Object.keys(t).forEach(function(h){od.hasOwnProperty(h)||(d[h]=t[h])}),Hv(m[0],d)});oa.displayName="FontAwesomeIcon";oa.propTypes={beat:Xe.bool,border:Xe.bool,beatFade:Xe.bool,bounce:Xe.bool,className:Xe.string,fade:Xe.bool,flash:Xe.bool,mask:Xe.oneOfType([Xe.object,Xe.array,Xe.string]),maskId:Xe.string,fixedWidth:Xe.bool,inverse:Xe.bool,flip:Xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Xe.oneOfType([Xe.object,Xe.array,Xe.string]),listItem:Xe.bool,pull:Xe.oneOf(["right","left"]),pulse:Xe.bool,rotation:Xe.oneOf([0,90,180,270]),shake:Xe.bool,size:Xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Xe.bool,spinPulse:Xe.bool,spinReverse:Xe.bool,symbol:Xe.oneOfType([Xe.bool,Xe.string]),title:Xe.string,titleId:Xe.string,transform:Xe.oneOfType([Xe.string,Xe.object]),swapOpacity:Xe.bool};var Hv=eg.bind(null,Et.createElement),ln=function(){return ln=Object.assign||function(e){for(var t,i=1,A=arguments.length;i<A;i++){t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ln.apply(this,arguments)};function Mo(n,e,t){if(t||arguments.length===2)for(var i=0,A=e.length,r;i<A;i++)(r||!(i in e))&&(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return n.concat(r||Array.prototype.slice.call(e))}var Wv=function(e,t,i,A){var r=i?i.call(A,e,t):void 0;if(r!==void 0)return!!r;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var l=s[c];if(!o(l))return!1;var u=e[l],f=t[l];if(r=i?i.call(A,u,f,l):void 0,r===!1||r===void 0&&u!==f)return!1}return!0};const Yv=j0(Wv);var mt="-ms-",Ks="-moz-",ot="-webkit-",ng="comm",Vo="rule",bu="decl",Vv="@import",ig="@keyframes",jv="@layer",Ag=Math.abs,Pu=String.fromCharCode,Wl=Object.assign;function Kv(n,e){return Vt(n,0)^45?(((e<<2^Vt(n,0))<<2^Vt(n,1))<<2^Vt(n,2))<<2^Vt(n,3):0}function rg(n){return n.trim()}function _i(n,e){return(n=e.exec(n))?n[0]:n}function Ge(n,e,t){return n.replace(e,t)}function io(n,e,t){return n.indexOf(e,t)}function Vt(n,e){return n.charCodeAt(e)|0}function es(n,e,t){return n.slice(e,t)}function si(n){return n.length}function sg(n){return n.length}function zs(n,e){return e.push(n),n}function qv(n,e){return n.map(e).join("")}function cd(n,e){return n.filter(function(t){return!_i(t,e)})}var jo=1,ts=1,ag=0,Fn=0,Lt=0,hs="";function Ko(n,e,t,i,A,r,s,a){return{value:n,root:e,parent:t,type:i,props:A,children:r,line:jo,column:ts,length:s,return:"",siblings:a}}function qi(n,e){return Wl(Ko("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function JA(n){for(;n.root;)n=qi(n.root,{children:[n]});zs(n,n.siblings)}function Xv(){return Lt}function Jv(){return Lt=Fn>0?Vt(hs,--Fn):0,ts--,Lt===10&&(ts=1,jo--),Lt}function Xn(){return Lt=Fn<ag?Vt(hs,Fn++):0,ts++,Lt===10&&(ts=1,jo++),Lt}function zA(){return Vt(hs,Fn)}function Ao(){return Fn}function qo(n,e){return es(hs,n,e)}function Yl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zv(n){return jo=ts=1,ag=si(hs=n),Fn=0,[]}function $v(n){return hs="",n}function xc(n){return rg(qo(Fn-1,Vl(n===91?n+2:n===40?n+1:n)))}function ex(n){for(;(Lt=zA())&&Lt<33;)Xn();return Yl(n)>2||Yl(Lt)>3?"":" "}function tx(n,e){for(;--e&&Xn()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return qo(n,Ao()+(e<6&&zA()==32&&Xn()==32))}function Vl(n){for(;Xn();)switch(Lt){case n:return Fn;case 34:case 39:n!==34&&n!==39&&Vl(Lt);break;case 40:n===41&&Vl(n);break;case 92:Xn();break}return Fn}function nx(n,e){for(;Xn()&&n+Lt!==57;)if(n+Lt===84&&zA()===47)break;return"/*"+qo(e,Fn-1)+"*"+Pu(n===47?n:Xn())}function ix(n){for(;!Yl(zA());)Xn();return qo(n,Fn)}function Ax(n){return $v(ro("",null,null,null,[""],n=Zv(n),0,[0],n))}function ro(n,e,t,i,A,r,s,a,o){for(var c=0,l=0,u=s,f=0,p=0,g=0,m=1,d=1,h=1,y=0,v="",B=A,b=r,C=i,S=v;d;)switch(g=y,y=Xn()){case 40:if(g!=108&&Vt(S,u-1)==58){io(S+=Ge(xc(y),"&","&\f"),"&\f",Ag(c?a[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:S+=xc(y);break;case 9:case 10:case 13:case 32:S+=ex(g);break;case 92:S+=tx(Ao()-1,7);continue;case 47:switch(zA()){case 42:case 47:zs(rx(nx(Xn(),Ao()),e,t,o),o);break;default:S+="/"}break;case 123*m:a[c++]=si(S)*h;case 125*m:case 59:case 0:switch(y){case 0:case 125:d=0;case 59+l:h==-1&&(S=Ge(S,/\f/g,"")),p>0&&si(S)-u&&zs(p>32?ud(S+";",i,t,u-1,o):ud(Ge(S," ","")+";",i,t,u-2,o),o);break;case 59:S+=";";default:if(zs(C=ld(S,e,t,c,l,A,a,v,B=[],b=[],u,r),r),y===123)if(l===0)ro(S,e,C,C,B,r,u,a,b);else switch(f===99&&Vt(S,3)===110?100:f){case 100:case 108:case 109:case 115:ro(n,C,C,i&&zs(ld(n,C,C,0,0,A,a,v,A,B=[],u,b),b),A,b,u,a,i?B:b);break;default:ro(S,C,C,C,[""],b,0,a,b)}}c=l=p=0,m=h=1,v=S="",u=s;break;case 58:u=1+si(S),p=g;default:if(m<1){if(y==123)--m;else if(y==125&&m++==0&&Jv()==125)continue}switch(S+=Pu(y),y*m){case 38:h=l>0?1:(S+="\f",-1);break;case 44:a[c++]=(si(S)-1)*h,h=1;break;case 64:zA()===45&&(S+=xc(Xn())),f=zA(),l=u=si(v=S+=ix(Ao())),y++;break;case 45:g===45&&si(S)==2&&(m=0)}}return r}function ld(n,e,t,i,A,r,s,a,o,c,l,u){for(var f=A-1,p=A===0?r:[""],g=sg(p),m=0,d=0,h=0;m<i;++m)for(var y=0,v=es(n,f+1,f=Ag(d=s[m])),B=n;y<g;++y)(B=rg(d>0?p[y]+" "+v:Ge(v,/&\f/g,p[y])))&&(o[h++]=B);return Ko(n,e,t,A===0?Vo:a,o,c,l,u)}function rx(n,e,t,i){return Ko(n,e,t,ng,Pu(Xv()),es(n,2,-2),0,i)}function ud(n,e,t,i,A){return Ko(n,e,t,bu,es(n,0,i),es(n,i+1,-1),i,A)}function og(n,e,t){switch(Kv(n,e)){case 5103:return ot+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ot+n+n;case 4789:return Ks+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ot+n+Ks+n+mt+n+n;case 5936:switch(Vt(n,e+11)){case 114:return ot+n+mt+Ge(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ot+n+mt+Ge(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ot+n+mt+Ge(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ot+n+mt+n+n;case 6165:return ot+n+mt+"flex-"+n+n;case 5187:return ot+n+Ge(n,/(\w+).+(:[^]+)/,ot+"box-$1$2"+mt+"flex-$1$2")+n;case 5443:return ot+n+mt+"flex-item-"+Ge(n,/flex-|-self/g,"")+(_i(n,/flex-|baseline/)?"":mt+"grid-row-"+Ge(n,/flex-|-self/g,""))+n;case 4675:return ot+n+mt+"flex-line-pack"+Ge(n,/align-content|flex-|-self/g,"")+n;case 5548:return ot+n+mt+Ge(n,"shrink","negative")+n;case 5292:return ot+n+mt+Ge(n,"basis","preferred-size")+n;case 6060:return ot+"box-"+Ge(n,"-grow","")+ot+n+mt+Ge(n,"grow","positive")+n;case 4554:return ot+Ge(n,/([^-])(transform)/g,"$1"+ot+"$2")+n;case 6187:return Ge(Ge(Ge(n,/(zoom-|grab)/,ot+"$1"),/(image-set)/,ot+"$1"),n,"")+n;case 5495:case 3959:return Ge(n,/(image-set\([^]*)/,ot+"$1$`$1");case 4968:return Ge(Ge(n,/(.+:)(flex-)?(.*)/,ot+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ot+n+n;case 4200:if(!_i(n,/flex-|baseline/))return mt+"grid-column-align"+es(n,e)+n;break;case 2592:case 3360:return mt+Ge(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,A){return e=A,_i(i.props,/grid-\w+-end/)})?~io(n+(t=t[e].value),"span",0)?n:mt+Ge(n,"-start","")+n+mt+"grid-row-span:"+(~io(t,"span",0)?_i(t,/\d+/):+_i(t,/\d+/)-+_i(n,/\d+/))+";":mt+Ge(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return _i(i.props,/grid-\w+-start/)})?n:mt+Ge(Ge(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ge(n,/(.+)-inline(.+)/,ot+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(si(n)-1-e>6)switch(Vt(n,e+1)){case 109:if(Vt(n,e+4)!==45)break;case 102:return Ge(n,/(.+:)(.+)-([^]+)/,"$1"+ot+"$2-$3$1"+Ks+(Vt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~io(n,"stretch",0)?og(Ge(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ge(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,A,r,s,a,o,c){return mt+A+":"+r+c+(s?mt+A+"-span:"+(a?o:+o-+r)+c:"")+n});case 4949:if(Vt(n,e+6)===121)return Ge(n,":",":"+ot)+n;break;case 6444:switch(Vt(n,Vt(n,14)===45?18:11)){case 120:return Ge(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ot+(Vt(n,14)===45?"inline-":"")+"box$3$1"+ot+"$2$3$1"+mt+"$2box$3")+n;case 100:return Ge(n,":",":"+mt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ge(n,"scroll-","scroll-snap-")+n}return n}function _o(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function sx(n,e,t,i){switch(n.type){case jv:if(n.children.length)break;case Vv:case bu:return n.return=n.return||n.value;case ng:return"";case ig:return n.return=n.value+"{"+_o(n.children,i)+"}";case Vo:if(!si(n.value=n.props.join(",")))return""}return si(t=_o(n.children,i))?n.return=n.value+"{"+t+"}":""}function ax(n){var e=sg(n);return function(t,i,A,r){for(var s="",a=0;a<e;a++)s+=n[a](t,i,A,r)||"";return s}}function ox(n){return function(e){e.root||(e=e.return)&&n(e)}}function cx(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case bu:n.return=og(n.value,n.length,t);return;case ig:return _o([qi(n,{value:Ge(n.value,"@","@"+ot)})],i);case Vo:if(n.length)return qv(t=n.props,function(A){switch(_i(A,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":JA(qi(n,{props:[Ge(A,/:(read-\w+)/,":"+Ks+"$1")]})),JA(qi(n,{props:[A]})),Wl(n,{props:cd(t,i)});break;case"::placeholder":JA(qi(n,{props:[Ge(A,/:(plac\w+)/,":"+ot+"input-$1")]})),JA(qi(n,{props:[Ge(A,/:(plac\w+)/,":"+Ks+"$1")]})),JA(qi(n,{props:[Ge(A,/:(plac\w+)/,mt+"input-$1")]})),JA(qi(n,{props:[A]})),Wl(n,{props:cd(t,i)});break}return""})}}var lx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_n={},ns=typeof process<"u"&&_n!==void 0&&(_n.REACT_APP_SC_ATTR||_n.SC_ATTR)||"data-styled",cg="active",lg="data-styled-version",Xo="6.1.13",Tu=`/*!sc*/
`,yo=typeof window<"u"&&"HTMLElement"in window,ux=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_n!==void 0&&_n.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_n.REACT_APP_SC_DISABLE_SPEEDY!==""?_n.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_n.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_n!==void 0&&_n.SC_DISABLE_SPEEDY!==void 0&&_n.SC_DISABLE_SPEEDY!==""&&_n.SC_DISABLE_SPEEDY!=="false"&&_n.SC_DISABLE_SPEEDY),Jo=Object.freeze([]),is=Object.freeze({});function fx(n,e,t){return t===void 0&&(t=is),n.theme!==t.theme&&n.theme||e||t.theme}var ug=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hx=/(^-|-$)/g;function fd(n){return n.replace(dx,"-").replace(hx,"")}var px=/(a)(d)/gi,wa=52,dd=function(n){return String.fromCharCode(n+(n>25?39:97))};function jl(n){var e,t="";for(e=Math.abs(n);e>wa;e=e/wa|0)t=dd(e%wa)+t;return(dd(e%wa)+t).replace(px,"$1-$2")}var wc,fg=5381,zr=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},dg=function(n){return zr(fg,n)};function gx(n){return jl(dg(n)>>>0)}function mx(n){return n.displayName||n.name||"Component"}function Ec(n){return typeof n=="string"&&!0}var hg=typeof Symbol=="function"&&Symbol.for,pg=hg?Symbol.for("react.memo"):60115,vx=hg?Symbol.for("react.forward_ref"):60112,xx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ex=((wc={})[vx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wc[pg]=gg,wc);function hd(n){return("type"in(e=n)&&e.type.$$typeof)===pg?gg:"$$typeof"in n?Ex[n.$$typeof]:xx;var e}var Mx=Object.defineProperty,_x=Object.getOwnPropertyNames,pd=Object.getOwnPropertySymbols,yx=Object.getOwnPropertyDescriptor,Bx=Object.getPrototypeOf,gd=Object.prototype;function mg(n,e,t){if(typeof e!="string"){if(gd){var i=Bx(e);i&&i!==gd&&mg(n,i,t)}var A=_x(e);pd&&(A=A.concat(pd(e)));for(var r=hd(n),s=hd(e),a=0;a<A.length;++a){var o=A[a];if(!(o in wx||t&&t[o]||s&&o in s||r&&o in r)){var c=yx(e,o);try{Mx(n,o,c)}catch{}}}}return n}function As(n){return typeof n=="function"}function Iu(n){return typeof n=="object"&&"styledComponentId"in n}function QA(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function md(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function na(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Kl(n,e,t){if(t===void 0&&(t=!1),!t&&!na(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=Kl(n[i],e[i]);else if(na(e))for(var i in e)n[i]=Kl(n[i],e[i]);return n}function Ru(n,e){Object.defineProperty(n,"toString",{value:e})}function ca(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Cx=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,A=i.length,r=A;e>=r;)if((r<<=1)<0)throw ca(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(i),this.length=r;for(var s=A;s<r;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),o=(s=0,t.length);s<o;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),A=i+t;this.groupSizes[e]=0;for(var r=i;r<A;r++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],A=this.indexOfGroup(e),r=A+i,s=A;s<r;s++)t+="".concat(this.tag.getRule(s)).concat(Tu);return t},n}(),so=new Map,Bo=new Map,ao=1,Ea=function(n){if(so.has(n))return so.get(n);for(;Bo.has(ao);)ao++;var e=ao++;return so.set(n,e),Bo.set(e,n),e},Sx=function(n,e){ao=e+1,so.set(n,e),Bo.set(e,n)},Dx="style[".concat(ns,"][").concat(lg,'="').concat(Xo,'"]'),bx=new RegExp("^".concat(ns,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Px=function(n,e,t){for(var i,A=t.split(","),r=0,s=A.length;r<s;r++)(i=A[r])&&n.registerName(e,i)},Tx=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(Tu),A=[],r=0,s=i.length;r<s;r++){var a=i[r].trim();if(a){var o=a.match(bx);if(o){var c=0|parseInt(o[1],10),l=o[2];c!==0&&(Sx(l,c),Px(n,l,o[3]),n.getTag().insertRules(c,A)),A.length=0}else A.push(a)}}},vd=function(n){for(var e=document.querySelectorAll(Dx),t=0,i=e.length;t<i;t++){var A=e[t];A&&A.getAttribute(ns)!==cg&&(Tx(n,A),A.parentNode&&A.parentNode.removeChild(A))}};function Ix(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vg=function(n){var e=document.head,t=n||e,i=document.createElement("style"),A=function(a){var o=Array.from(a.querySelectorAll("style[".concat(ns,"]")));return o[o.length-1]}(t),r=A!==void 0?A.nextSibling:null;i.setAttribute(ns,cg),i.setAttribute(lg,Xo);var s=Ix();return s&&i.setAttribute("nonce",s),t.insertBefore(i,r),i},Rx=function(){function n(e){this.element=vg(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,A=0,r=i.length;A<r;A++){var s=i[A];if(s.ownerNode===t)return s}throw ca(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),Qx=function(){function n(e){this.element=vg(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),Ux=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),xd=yo,Lx={isServer:!yo,useCSSOMInjection:!ux},xg=function(){function n(e,t,i){e===void 0&&(e=is),t===void 0&&(t={});var A=this;this.options=ln(ln({},Lx),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&yo&&xd&&(xd=!1,vd(this)),Ru(this,function(){return function(r){for(var s=r.getTag(),a=s.length,o="",c=function(u){var f=function(h){return Bo.get(h)}(u);if(f===void 0)return"continue";var p=r.names.get(f),g=s.getGroup(u);if(p===void 0||!p.size||g.length===0)return"continue";var m="".concat(ns,".g").concat(u,'[id="').concat(f,'"]'),d="";p!==void 0&&p.forEach(function(h){h.length>0&&(d+="".concat(h,","))}),o+="".concat(g).concat(m,'{content:"').concat(d,'"}').concat(Tu)},l=0;l<a;l++)c(l);return o}(A)})}return n.registerId=function(e){return Ea(e)},n.prototype.rehydrate=function(){!this.server&&yo&&vd(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(ln(ln({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,A=t.target;return t.isServer?new Ux(A):i?new Rx(A):new Qx(A)}(this.options),new Cx(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Ea(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(Ea(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Ea(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Fx=/&/g,Ox=/^\s*\/\/.*$/gm;function wg(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=wg(t.children,e)),t})}function Eg(n){var e,t,i,A=n===void 0?is:n,r=A.options,s=r===void 0?is:r,a=A.plugins,o=a===void 0?Jo:a,c=function(f,p,g){return g.startsWith(t)&&g.endsWith(t)&&g.replaceAll(t,"").length>0?".".concat(e):f},l=o.slice();l.push(function(f){f.type===Vo&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Fx,t).replace(i,c))}),s.prefix&&l.push(cx),l.push(sx);var u=function(f,p,g,m){p===void 0&&(p=""),g===void 0&&(g=""),m===void 0&&(m="&"),e=m,t=p,i=new RegExp("\\".concat(t,"\\b"),"g");var d=f.replace(Ox,""),h=Ax(g||p?"".concat(g," ").concat(p," { ").concat(d," }"):d);s.namespace&&(h=wg(h,s.namespace));var y=[];return _o(h,ax(l.concat(ox(function(v){return y.push(v)})))),y};return u.hash=o.length?o.reduce(function(f,p){return p.name||ca(15),zr(f,p.name)},fg).toString():"",u}var Nx=new xg,ql=Eg(),Qu=Et.createContext({shouldForwardProp:void 0,styleSheet:Nx,stylis:ql});Qu.Consumer;var kx=Et.createContext(void 0);function Xl(){return Ne.useContext(Qu)}function Mg(n){var e=Ne.useState(n.stylisPlugins),t=e[0],i=e[1],A=Xl().styleSheet,r=Ne.useMemo(function(){var o=A;return n.sheet?o=n.sheet:n.target&&(o=o.reconstructWithOptions({target:n.target},!1)),n.disableCSSOMInjection&&(o=o.reconstructWithOptions({useCSSOMInjection:!1})),o},[n.disableCSSOMInjection,n.sheet,n.target,A]),s=Ne.useMemo(function(){return Eg({options:{namespace:n.namespace,prefix:n.enableVendorPrefixes},plugins:t})},[n.enableVendorPrefixes,n.namespace,t]);Ne.useEffect(function(){Yv(t,n.stylisPlugins)||i(n.stylisPlugins)},[n.stylisPlugins]);var a=Ne.useMemo(function(){return{shouldForwardProp:n.shouldForwardProp,styleSheet:r,stylis:s}},[n.shouldForwardProp,r,s]);return Et.createElement(Qu.Provider,{value:a},Et.createElement(kx.Provider,{value:s},n.children))}var zx=function(){function n(e,t){var i=this;this.inject=function(A,r){r===void 0&&(r=ql);var s=i.name+r.hash;A.hasNameForId(i.id,s)||A.insertRules(i.id,s,r(i.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ru(this,function(){throw ca(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=ql),this.name+e.hash},n}(),Gx=function(n){return n>="A"&&n<="Z"};function wd(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;Gx(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var _g=function(n){return n==null||n===!1||n===""},yg=function(n){var e,t,i=[];for(var A in n){var r=n[A];n.hasOwnProperty(A)&&!_g(r)&&(Array.isArray(r)&&r.isCss||As(r)?i.push("".concat(wd(A),":"),r,";"):na(r)?i.push.apply(i,Mo(Mo(["".concat(A," {")],yg(r),!1),["}"],!1)):i.push("".concat(wd(A),": ").concat((e=A,(t=r)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in lx||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function GA(n,e,t,i){if(_g(n))return[];if(Iu(n))return[".".concat(n.styledComponentId)];if(As(n)){if(!As(r=n)||r.prototype&&r.prototype.isReactComponent||!e)return[n];var A=n(e);return GA(A,e,t,i)}var r;return n instanceof zx?t?(n.inject(t,i),[n.getName(i)]):[n]:na(n)?yg(n):Array.isArray(n)?Array.prototype.concat.apply(Jo,n.map(function(s){return GA(s,e,t,i)})):[n.toString()]}function Hx(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(As(t)&&!Iu(t))return!1}return!0}var Wx=dg(Xo),Yx=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Hx(e),this.componentId=t,this.baseHash=zr(Wx,t),this.baseStyle=i,xg.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var A=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))A=QA(A,this.staticRulesId);else{var r=md(GA(this.rules,e,t,i)),s=jl(zr(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=i(r,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}A=QA(A,s),this.staticRulesId=s}else{for(var o=zr(this.baseHash,i.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u=="string")c+=u;else if(u){var f=md(GA(u,e,t,i));o=zr(o,f+l),c+=f}}if(c){var p=jl(o>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),A=QA(A,p)}}return A},n}(),Bg=Et.createContext(void 0);Bg.Consumer;var Mc={};function Vx(n,e,t){var i=Iu(n),A=n,r=!Ec(n),s=e.attrs,a=s===void 0?Jo:s,o=e.componentId,c=o===void 0?function(B,b){var C=typeof B!="string"?"sc":fd(B);Mc[C]=(Mc[C]||0)+1;var S="".concat(C,"-").concat(gx(Xo+C+Mc[C]));return b?"".concat(b,"-").concat(S):S}(e.displayName,e.parentComponentId):o,l=e.displayName,u=l===void 0?function(B){return Ec(B)?"styled.".concat(B):"Styled(".concat(mx(B),")")}(n):l,f=e.displayName&&e.componentId?"".concat(fd(e.displayName),"-").concat(e.componentId):e.componentId||c,p=i&&A.attrs?A.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(i&&A.shouldForwardProp){var m=A.shouldForwardProp;if(e.shouldForwardProp){var d=e.shouldForwardProp;g=function(B,b){return m(B,b)&&d(B,b)}}else g=m}var h=new Yx(t,f,i?A.componentStyle:void 0);function y(B,b){return function(C,S,Q){var M=C.attrs,w=C.componentStyle,P=C.defaultProps,G=C.foldedComponentIds,L=C.styledComponentId,k=C.target,q=Et.useContext(Bg),Y=Xl(),te=C.shouldForwardProp||Y.shouldForwardProp,W=fx(S,q,P)||is,ce=function(ne,ge,ae){for(var Le,Pe=ln(ln({},ge),{className:void 0,theme:ae}),Ke=0;Ke<ne.length;Ke+=1){var T=As(Le=ne[Ke])?Le(Pe):Le;for(var Fe in T)Pe[Fe]=Fe==="className"?QA(Pe[Fe],T[Fe]):Fe==="style"?ln(ln({},Pe[Fe]),T[Fe]):T[Fe]}return ge.className&&(Pe.className=QA(Pe.className,ge.className)),Pe}(M,S,W),ve=ce.as||k,xe={};for(var Ue in ce)ce[Ue]===void 0||Ue[0]==="$"||Ue==="as"||Ue==="theme"&&ce.theme===W||(Ue==="forwardedAs"?xe.as=ce.forwardedAs:te&&!te(Ue,ve)||(xe[Ue]=ce[Ue]));var At=function(ne,ge){var ae=Xl(),Le=ne.generateAndInjectStyles(ge,ae.styleSheet,ae.stylis);return Le}(w,ce),V=QA(G,L);return At&&(V+=" "+At),ce.className&&(V+=" "+ce.className),xe[Ec(ve)&&!ug.has(ve)?"class":"className"]=V,xe.ref=Q,Ne.createElement(ve,xe)}(v,B,b)}y.displayName=u;var v=Et.forwardRef(y);return v.attrs=p,v.componentStyle=h,v.displayName=u,v.shouldForwardProp=g,v.foldedComponentIds=i?QA(A.foldedComponentIds,A.styledComponentId):"",v.styledComponentId=f,v.target=i?A.target:n,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=i?function(b){for(var C=[],S=1;S<arguments.length;S++)C[S-1]=arguments[S];for(var Q=0,M=C;Q<M.length;Q++)Kl(b,M[Q],!0);return b}({},A.defaultProps,B):B}}),Ru(v,function(){return".".concat(v.styledComponentId)}),r&&mg(v,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Ed(n,e){for(var t=[n[0]],i=0,A=e.length;i<A;i+=1)t.push(e[i],n[i+1]);return t}var Md=function(n){return Object.assign(n,{isCss:!0})};function jx(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(As(n)||na(n))return Md(GA(Ed(Jo,Mo([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?GA(i):Md(GA(Ed(i,e)))}function Jl(n,e,t){if(t===void 0&&(t=is),!e)throw ca(1,e);var i=function(A){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];return n(e,t,jx.apply(void 0,Mo([A],r,!1)))};return i.attrs=function(A){return Jl(n,e,ln(ln({},t),{attrs:Array.prototype.concat(t.attrs,A).filter(Boolean)}))},i.withConfig=function(A){return Jl(n,e,ln(ln({},t),A))},i}var Cg=function(n){return Jl(Vx,n)},ct=Cg;ug.forEach(function(n){ct[n]=Cg(n)});const me={textWhite:"rgba(223, 223, 223, 1)",textGrey:"rgba(156, 156, 156, 1)",dangerRed:"rgba(243, 151, 143, 1)",dangerRedPressed:"rgba(240, 97, 84,1)",panelBackground:"rgba(38, 38, 38, 0.7)",panelBorder:"rgba(61, 61, 63, 0.7)",buttonBackground:"rgba(61, 61, 63, 0.6)",buttonHovered:"rgba(61, 61, 63, 0.8)",buttonPressed:"rgba(61, 61, 63, 1)",gradientGrey:"linear-gradient(to bottom, #343434, #393939)",gradientGreyTranslucent:"linear-gradient(to bottom, rgba(52, 52, 52, 0.75), rgba(57, 57, 57, 0.75))",gradientLightGreyTranslucent:"linear-gradient(to bottom, rgba(75, 75, 75, 0.75), rgba(80, 80, 80, 0.75))"},Me={height:"30px",minWidth:"30px",fontSize:"14px",radiusMiddle:"3px",radiusSolo:"10px",radiusFirst:"10px 3px 3px 10px",radiusLast:"3px 10px 10px 3px",widthLong:"70px",widthShort:"30px",gap:"3px"},rn=ct.button`
	background: ${me.gradientGreyTranslucent};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${me.textWhite};
	border: 1px solid transparent;
	border-radius: ${Me.radiusMiddle};
	font-size: ${Me.fontSize};
	height: ${Me.height};
	min-width: ${Me.minWidth};
	transition: all 0.2s ease-in-out;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;

	&:first-child {
		border-radius: ${({$reverse:n})=>n?Me.radiusLast:Me.radiusFirst};
	}

	&:last-child {
		border-radius: ${({$reverse:n})=>n?Me.radiusFirst:Me.radiusLast};
	}

	&:first-child:last-child {
		border-radius: ${Me.radiusSolo};
	}
`,Zl=ct.div`
	padding: 2px;
	display: flex;
	background-color: ${me.panelBackground};
	border: 1px solid ${me.panelBorder};
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	justify-content: center;
	pointer-events: all;
	border-radius: 14px;
	align-items: center;
	height: 24px;
`,ii=ct.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${me.textWhite};
	border-radius: 4px;
	font-size: 16px;
	height: 24px;
	min-width: 24px;
	transition: all 0.2s ease-in-out;
	text-transform: none;
	box-shadow: none;
	padding: 1px 5px;
	font-family: Arial, sans-serif;

	&:hover {
		background-color: ${me.buttonPressed};
	}

	&:active {
		background-color: ${me.buttonPressed};
	}

	&:focus {
		outline: none;
	}

	&:first-child {
		border-radius: 12px 4px 4px 12px;
	}

	&:last-child {
		border-radius: 4px 12px 12px 4px;
	}

	&:first-child:last-child {
		border-radius: 12px;
	}
`,Bi=ct.div`
	background-color: ${({$pressed:n})=>n?me.buttonPressed:me.buttonBackground};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${me.textWhite};
	border-radius: 8px;
	font-size: 14px;
	font-family: Arial, sans-serif;
	height: 30px;
	width: 30px;
	transition: all 0.2s ease-in-out;
`,rs=ct.div`
	display: flex;
	align-items: center;
	height: 30px;
	margin-bottom: 3px;
	justify-content: flex-start;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};

	&:last-child {
		margin-bottom: 0;
	}
`,iA=ct.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	height: 100%;
	justify-content: space-between;
	align-items: center;
	margin: ${({$reverse:n})=>n?"0 5px 0 0":"0 0 0 5px"};
	gap: 3px;
`;ct.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`;ct.div`
	position: absolute;
	background-color: ${me.textWhite};
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`;const Sg=ct.input.attrs({type:"range"})`
	-webkit-appearance: none;
	appearance: none;
	background: ${me.gradientGreyTranslucent};
	border: none;
	height: 100%;
	width: ${Me.widthLong};
	cursor: pointer;
	margin: 0;
	transition: all 0.2s ease-in-out;
	border-radius: ${({$reverse:n})=>n?Me.radiusFirst:Me.radiusLast};

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 30px;
		background-color: ${me.textWhite};
		border-radius: ${Me.radiusMiddle};
	}

	&::-moz-range-thumb {
		width: 10px;
		height: 30px;
		background-color: ${me.textWhite};
		border-radius: ${Me.radiusMiddle};
	}

	&::-ms-thumb {
		width: 8px;
		height: 24px;
		background-color: ${me.textWhite};
		border-radius: ${Me.radiusMiddle};
	}
`;ct.div`
	display: flex;
	flex-direction: column;
	align-items: ${({$reverse:n})=>n?"flex-start":"flex-end"};
	justify-content: center;
	margin: ${({$reverse:n})=>n?"2px -26px 0 0":"2px 0 0 -26px"};
`;ct.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	align-items: center;
	justify-content: center;
`;const nt=ct(oa)`
	height: ${({$size:n=14})=>`${n}px`};
	min-height: ${({$size:n=14})=>`${n}px`};
	max-height: ${({$size:n=14})=>`${n}px`};
	width: ${({$size:n=14})=>`${n}px`};
	min-width: ${({$size:n=14})=>`${n}px`};
	max-width: ${({$size:n=14})=>`${n}px`};
	transform: ${({$reverse:n})=>n?"scaleX(-1)":"unset"};
`,ps=ct(oa)`
	height: 18px;
	min-height: 18px;
	max-height: 18px;
	width: 18px;
	min-width: 18px;
	max-width: 18px;
	margin: 6px;
	transform: ${({$reverse:n})=>n?"scaleX(-1)":"unset"};
`,Zo=ct.div`
	position: fixed;
	padding: 5px;
	font-family: Arial, sans-serif;
	color: ${me.textWhite};
	pointer-events: all;
	background-color: ${me.panelBackground};
	border: 1px solid ${me.panelBorder};
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	border-radius: 12px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	display: flex;
	flex-direction: column;
`,jA=ct.hr`
	width: ${({$horizontal:n=!0})=>n?"unset":"1px"};
	height: ${({$horizontal:n=!0})=>n?"1px":"unset"};
	background-color: ${me.panelBorder};
	margin: 5px 3px;
	border: none;
`,HA=ct.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${({$isRed:n})=>n?me.dangerRed:me.textWhite};
	font-size: 12px;
	padding: 3px;
	text-transform: none;
	box-shadow: none;

	&:hover {
		color: ${({$isRed:n})=>n?me.dangerRedPressed:"#ffffff"};
	}

	&:active {
		color: ${({$isRed:n})=>n?me.dangerRedPressed:"#ffffff"};
	}

	&:focus {
		outline: none;
	}
`,Dg=ct.div`
	display: flex;
	flex-direction: row;
	gap: ${Me.gap};
	height: 25px;
`,bg=ct.input.attrs({type:"text"})`
	width: 50px;
	outline: none;
	background: ${me.gradientGrey};
	border: 1px solid transparent;
	border-radius: 5px;
	height: 25px;
	color: ${me.textWhite};
	padding: 0 10px 0 5px;
	box-sizing: border-box;
	font-size: 10px;

	&:read-only {
		background: ${me.gradientGreyTranslucent};
	}

	&:invalid {
		background-color: ${me.dangerRed};
	}
`,Pg=ct.span`
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	color: ${me.textGrey};
	font-size: 10px;
`,Kx={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Uu={prefix:"fas",iconName:"fingerprint",icon:[512,512,[],"f577","M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256l0 24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z"]},qx={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},Xx={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},Tg={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z"]},Ig={prefix:"fas",iconName:"hand",icon:[512,512,[129306,9995,"hand-paper"],"f256","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z"]},Rg={prefix:"fas",iconName:"plug",icon:[384,512,[128268],"f1e6","M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"]},Jx={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Zx={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},$x={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},ew={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]},tw={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},Lu={prefix:"fas",iconName:"hand-scissors",icon:[512,512,[],"f257","M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9c0 0 0 .1 0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z"]},nw={prefix:"fas",iconName:"street-view",icon:[512,512,[],"f21d","M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64l0 48c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l38.7 0c16.3 0 30-12.3 31.8-28.5L318.2 304l1.8 0c17.7 0 32-14.3 32-32l0-48c0-35.3-28.7-64-64-64l-64 0zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z"]},Qg={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},iw={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},Aw={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},rw={prefix:"fas",iconName:"bug",icon:[512,512,[],"f188","M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"]},_d={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},yd={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Fu={prefix:"fas",iconName:"hand-lizard",icon:[512,512,[],"f258","M0 112C0 85.5 21.5 64 48 64l112 0 80 0 46.5 0c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8l0 12 0 16 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-13.8L273.9 352 240 352l-80 0-48 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160c-26.5 0-48-21.5-48-48z"]},Bd={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},sw={prefix:"fas",iconName:"vr-cardboard",icon:[640,512,[],"f729","M576 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},aw={prefix:"fas",iconName:"arrow-turn-down",icon:[384,512,["level-down"],"f149","M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"]},$o={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},ow={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},He=Me.height,cw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M16.529 16.1h-.893l-1.653-2.713-1.68 2.713h-.832l2.074-3.255-1.942-2.992h.875l1.531 2.45 1.54-2.45h.831l-1.933 2.975 2.082 3.272Z",style:{fill:"#fff",fillOpacity:1}})]}),lw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"m14.086 12.924 1.627-3.071h.849l-2.083 3.823V16.1h-.787v-2.389L11.61 9.853h.857l1.619 3.07Z",style:{fill:"#fff",fillOpacity:1}})]}),uw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"m15.975 16.1-.753-1.934h-2.476l-.744 1.934h-.796l2.441-6.274h.709l2.432 6.274h-.813Zm-1.69-4.524a29.052 29.052 0 0 1-.21-.63 5.175 5.175 0 0 0-.087-.306c-.029.117-.06.236-.096.359-.03.116-.061.224-.096.323-.03.1-.056.184-.079.254l-.709 1.89h1.978l-.7-1.89Z",style:{fill:"#fff",fillOpacity:1}})]}),fw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M13.876 9.853c.519 0 .954.05 1.304.148.355.1.62.263.796.49.18.228.271.531.271.91 0 .245-.047.464-.14.656a1.198 1.198 0 0 1-.402.473 1.62 1.62 0 0 1-.648.254v.043c.262.041.499.117.709.228.216.11.385.268.507.473.123.204.184.47.184.796 0 .379-.088.703-.262.971a1.663 1.663 0 0 1-.753.604c-.32.134-.706.201-1.155.201h-2.196V9.853h1.785Zm.157 2.66c.537 0 .905-.085 1.103-.254.198-.175.297-.432.297-.77 0-.344-.122-.59-.367-.735-.24-.152-.624-.228-1.155-.228h-1.033v1.986h1.155Zm-1.155.656v2.266h1.26c.555 0 .94-.108 1.155-.324.216-.216.324-.498.324-.849 0-.221-.05-.414-.149-.577-.093-.163-.254-.289-.481-.376-.222-.093-.525-.14-.91-.14h-1.199Z",style:{fill:"#fff",fillOpacity:1}})]}),dw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:.5,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.247h.787v5.547h2.73v.7h-3.517ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),hw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),pw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),gw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),mw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),vw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),xw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),ww=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),Ew=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),Mw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),_w=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.525 7.875c-2.283 1.22-3.82 3.507-3.82 6.125s1.537 4.904 3.82 6.125C4.405 19.425 2.1 16.948 2.1 14s2.306-5.425 5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M24.702 10.954a2.187 2.187 0 0 0-2.095-2.817H11.025a5.863 5.863 0 0 0 0 11.726h9.377c.966 0 1.818-.634 2.095-1.56l2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M10.594 17.15v-6.248h.788v5.548h2.73v.7h-3.518Zm7.13-3.299h2.162v3.063c-.338.11-.68.192-1.024.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.567 2.567 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.55 4.55 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018.146-.017.277-.037.394-.06.123-.024.236-.047.341-.07V14.55h-1.373v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),yw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M20.441 7.875c2.283 1.22 3.82 3.507 3.82 6.125s-1.537 4.904-3.82 6.125c3.12-.7 5.425-3.177 5.425-6.125s-2.305-5.425-5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M3.264 10.954a2.187 2.187 0 0 1 2.095-2.817h11.582a5.862 5.862 0 0 1 0 11.726H7.564a2.188 2.188 0 0 1-2.095-1.56l-2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M9.497 10.902c.519 0 .945.068 1.277.202.339.128.59.323.753.586.163.262.245.592.245.989 0 .332-.062.61-.184.83-.122.223-.28.4-.472.535-.187.128-.386.23-.595.306l1.714 2.8h-.918l-1.514-2.581H8.56v2.58h-.787v-6.247h1.724Zm-.044.683H8.56v2.319h.937c.338 0 .615-.044.831-.132a.956.956 0 0 0 .473-.402c.104-.175.157-.394.157-.656 0-.274-.055-.493-.166-.657a.905.905 0 0 0-.49-.358c-.222-.076-.505-.114-.849-.114Zm6.476 2.266h2.16v3.063c-.337.11-.679.192-1.023.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.568 2.568 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.551 4.551 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018a5.17 5.17 0 0 0 .394-.06c.123-.024.236-.047.341-.07V14.55H15.93v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),Bw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M10.209 15.662V9.415h.787v5.548h2.73v.7H10.21Zm6.395 0h-.787v-5.556h-1.952v-.691h4.682v.691h-1.943v5.556Z",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),Cw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",d:"M11.42 9.415c.52 0 .945.067 1.277.201.339.129.59.324.753.587.163.262.245.592.245.988 0 .333-.061.61-.184.832-.122.221-.28.4-.472.533-.187.129-.385.23-.595.307l1.715 2.8h-.92l-1.513-2.582h-1.242v2.582h-.788V9.415h1.724Zm-.044.683h-.892v2.318h.936c.338 0 .615-.043.831-.131a.956.956 0 0 0 .473-.402c.105-.175.157-.394.157-.657 0-.274-.055-.493-.166-.656a.905.905 0 0 0-.49-.359c-.222-.075-.505-.114-.849-.114Zm5.74 5.564h-.787v-5.556h-1.951v-.691h4.681v.691h-1.942v5.556Z",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),Sw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",d:"m20.01 15.768-4.242 4.242a5.5 5.5 0 1 1-7.778-7.778l4.242-4.242a5.5 5.5 0 1 1 7.778 7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M11.172 16.828a1 1 0 0 0 1.414 0L15.414 14l.707.707-2.828 2.828a2 2 0 1 1-2.829-2.828l.708.707a1 1 0 0 0 0 1.414ZM12.586 14l2.828-2.829a1 1 0 1 1 1.414 1.415l.708.707a2 2 0 0 0-2.829-2.829l-2.828 2.829.707.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M15.414 16.828 18.243 14a3 3 0 0 0-2.289-5.117l-.869-.869a4 4 0 0 1 3.864 6.693l-2.828 2.828-.707-.707Zm-.707 2.122a4 4 0 1 1-5.657-5.657l4.243-4.243.707.707L9.757 14A3 3 0 1 0 14 18.242l.707.708Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),Dw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:He,height:He,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("path",{stroke:"#fff",d:"m15.768 7.99 4.242 4.242a5.5 5.5 0 1 1-7.778 7.778L7.99 15.768a5.5 5.5 0 1 1 7.778-7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 16.828a1 1 0 0 0 0-1.414L14 12.586l.707-.707 2.828 2.828a2 2 0 1 1-2.828 2.828l.707-.707a1 1 0 0 0 1.414 0ZM14 15.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707-.708a2 2 0 0 0-2.829 2.829l2.829 2.828.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),x.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 12.586 14 9.757a3 3 0 0 0-5.117 2.289l-.869.869a4 4 0 0 1 6.693-3.864l2.828 2.828-.707.707Zm2.122.707a4 4 0 1 1-5.657 5.657L9.05 14.707 9.757 14 14 18.243A3 3 0 1 0 18.243 14l.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),bw=()=>x.jsx(ps,{icon:Lu,$reverse:!0}),Pw=()=>x.jsx(ps,{icon:Lu,$reverse:!1}),Tw=()=>x.jsx(ps,{icon:Fu,$reverse:!0}),Iw=()=>x.jsx(ps,{icon:Fu,$reverse:!1}),Rw={"x-button-left":cw,"y-button-left":lw,"a-button-right":uw,"b-button-right":fw,"thumbstick-left":dw,"thumbstick-up-left":pw,"thumbstick-down-left":gw,"thumbstick-right-left":vw,"thumbstick-left-left":mw,"pose-left":bw,"pinch-left":Tw,"thumbstick-right":hw,"thumbstick-up-right":xw,"thumbstick-down-right":ww,"thumbstick-right-right":Mw,"thumbstick-left-right":Ew,"trigger-left":Bw,"trigger-right":Cw,"squeeze-left":_w,"squeeze-right":yw,"thumbrest-left":Sw,"thumbrest-right":Dw,"pose-right":Pw,"pinch-right":Iw},ia=({buttonName:n,handedness:e})=>{const t=`${n}-${e}`,i=Rw[t];return i?x.jsx(i,{}):x.jsx("div",{style:{width:Me.height,height:Me.height}})},Qw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("g",{clipPath:"url(#a)",children:x.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),x.jsx("path",{fill:"#fff",d:"M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),x.jsx("defs",{children:x.jsx("clipPath",{id:"a",children:x.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),Uw=({scale:n=1.2})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",transform:`scale(${n}, ${n})`,children:[x.jsx("g",{clipPath:"url(#a)",children:x.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),x.jsx("path",{fill:"#fff",d:"M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),x.jsx("defs",{children:x.jsx("clipPath",{id:"a",children:x.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),Lw=({size:n=14,color:e=me.textWhite})=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 14 14",fill:"none",children:x.jsx("path",{stroke:e,strokeWidth:1.5,d:"M7 13.037V5.512m-.324.289 6.3-2.275m-11.952 0 6.3 2.275m.23 6.937 4.233-1.528a1.627 1.627 0 0 0 1.076-1.53V4.396c0-.685-.43-1.297-1.076-1.53L7.553 1.339a1.63 1.63 0 0 0-1.106 0L2.213 2.867a1.627 1.627 0 0 0-1.075 1.53V9.68c0 .686.43 1.298 1.075 1.53l4.234 1.529a1.63 1.63 0 0 0 1.106 0Z",style:{stroke:e,strokeOpacity:1}})}),Fw=({size:n=14,color:e=me.textWhite})=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 14 14",fill:"none",children:x.jsx("path",{stroke:e,strokeWidth:1.2,d:"M7 13.037V5.512M3.937 11.9V4.375m6.126 7.525V4.375M6.675 5.8l6.3-2.275m-9.275.962 6.3-2.275M1.024 3.526l6.3 2.275M6.85 9.388l6.3-2.275m-12.302 0 6.3 2.276m-3.15-7.176 6.3 2.276m-2.746 8.248 4.234-1.527a1.627 1.627 0 0 0 1.075-1.53V4.396c0-.685-.43-1.297-1.075-1.53L7.553 1.339a1.63 1.63 0 0 0-1.106 0L2.213 2.867a1.627 1.627 0 0 0-1.076 1.53V9.68c0 .686.43 1.298 1.076 1.53l4.234 1.529a1.63 1.63 0 0 0 1.106 0Z",style:{stroke:e,strokeOpacity:1}})}),Ow=({size:n=14,color:e=me.textWhite})=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 14 14",fill:"none",children:x.jsx("path",{stroke:e,strokeWidth:1.2,d:"M1.225 8.225h11.55M2.1 5.075h9.8m-7 7L5.6 2.1m3.5 9.975L8.4 2.1m-5.708 9.712h8.617a1.75 1.75 0 0 0 1.696-2.183l-1.567-6.125a1.75 1.75 0 0 0-1.695-1.317H4.258c-.8 0-1.498.542-1.696 1.317L.996 9.629a1.75 1.75 0 0 0 1.696 2.183Z",style:{stroke:e,strokeOpacity:1}})}),$l=({size:n=14,color:e=me.textWhite})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 14 14",fill:"none",children:[x.jsx("path",{fill:e,d:"M10.5 8.367a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z",style:{fill:e,fillOpacity:1}}),x.jsx("path",{fill:e,fillRule:"evenodd",d:"M0 5.8A2.8 2.8 0 0 1 2.8 3h8.4A2.8 2.8 0 0 1 14 5.8v2.8a2.8 2.8 0 0 1-2.8 2.8H9.526c-.619 0-1.184-.35-1.46-.903l-.108-.214a.933.933 0 0 0-.835-.516h-.246c-.354 0-.677.2-.835.516l-.107.214a1.633 1.633 0 0 1-1.461.903H2.8A2.8 2.8 0 0 1 0 8.6V5.8Zm4.9 1.167a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm8.367-.768a.268.268 0 0 0 .076-.292 2.942 2.942 0 0 0-.187-.407l-.055-.096a3.012 3.012 0 0 0-.262-.37.27.27 0 0 0-.29-.08l-.66.21a2.279 2.279 0 0 0-.522-.302l-.148-.676a.268.268 0 0 0-.215-.211 3.062 3.062 0 0 0-1.008.001.268.268 0 0 0-.215.21l-.148.677a2.28 2.28 0 0 0-.522.301l-.66-.21a.268.268 0 0 0-.29.081c-.096.116-.184.24-.262.37l-.056.096c-.072.13-.135.265-.187.406a.268.268 0 0 0 .076.292l.513.467a2.293 2.293 0 0 0 0 .603l-.513.467a.268.268 0 0 0-.076.291c.052.141.115.276.187.407l.056.096c.078.13.166.253.262.37a.27.27 0 0 0 .29.08l.66-.211c.158.122.333.224.52.3l.149.677a.268.268 0 0 0 .215.211 3.06 3.06 0 0 0 1.007 0 .268.268 0 0 0 .216-.21l.148-.677a2.28 2.28 0 0 0 .521-.301l.66.21c.105.033.22.004.29-.08.097-.117.184-.24.263-.37l.055-.097c.073-.13.135-.265.188-.406a.268.268 0 0 0-.076-.292l-.513-.466a2.299 2.299 0 0 0 0-.602l.513-.467Z",clipRule:"evenodd",style:{fill:e,fillOpacity:1}})]}),Wn={KeyA:"A",KeyB:"B",KeyC:"C",KeyD:"D",KeyE:"E",KeyF:"F",KeyG:"G",KeyH:"H",KeyI:"I",KeyJ:"J",KeyK:"K",KeyL:"L",KeyM:"M",KeyN:"N",KeyO:"O",KeyP:"P",KeyQ:"Q",KeyR:"R",KeyS:"S",KeyT:"T",KeyU:"U",KeyV:"V",KeyW:"W",KeyX:"X",KeyY:"Y",KeyZ:"Z",Digit0:"0",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Tab:x.jsx(nt,{icon:Zx}),Backspace:x.jsx(nt,{icon:Aw}),Enter:x.jsx(nt,{style:{transform:"rotate(90deg)"},icon:aw}),ShiftLeft:x.jsx(nt,{icon:_d}),ShiftRight:x.jsx(nt,{icon:_d}),Space:" ",ArrowUp:x.jsx(nt,{icon:$x}),ArrowDown:x.jsx(nt,{icon:iw}),ArrowLeft:x.jsx(nt,{icon:Xx}),ArrowRight:x.jsx(nt,{icon:qx}),Semicolon:";",Equal:"=",Comma:",",Minus:"-",Period:".",Slash:"/",Backquote:"`",BracketLeft:"[",Backslash:"\\",BracketRight:"]",Quote:"'",MouseLeft:x.jsx(Qw,{}),MouseRight:x.jsx(Uw,{})},Nw={left:{"thumbstick-up":"KeyW","thumbstick-down":"KeyS","thumbstick-left":"KeyA","thumbstick-right":"KeyD",thumbstick:"KeyR","x-button":"KeyX","y-button":"KeyZ",trigger:"KeyQ",squeeze:"KeyE",pinch:"MouseLeft",pose:"KeyF"},right:{"thumbstick-up":"ArrowUp","thumbstick-down":"ArrowDown","thumbstick-left":"ArrowLeft","thumbstick-right":"ArrowRight",thumbstick:"Slash","a-button":"Enter","b-button":"ShiftRight",trigger:"MouseLeft",squeeze:"MouseRight",pinch:"MouseRight",pose:"Backslash"}},Ou=$0(n=>({keyMap:Nw,bindKey:(e,t,i="Unmapped")=>n(A=>({keyMap:{...A.keyMap,[e]:{...A.keyMap[e],[t]:i}}}))})),kw=ct.div`
	display: flex;
	height: ${Me.height};
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${Me.gap};

	&:last-child {
		margin-bottom: 0;
	}
`,Ug=({handedness:n,actions:e})=>{const{keyMap:t,bindKey:i}=Ou(),[A,r]=Ne.useState(null),s=a=>{r({action:a})};return Ne.useEffect(()=>{const a=l=>{A&&Wn[l.code]&&(i(n,A.action,l.code),r(null))},o=l=>{if(A){const u=l.button===0?"MouseLeft":l.button===2?"MouseRight":null;u&&Wn[u]&&(i(n,A.action,u),r(null))}},c=l=>{l.preventDefault()};return window.addEventListener("keydown",a),window.addEventListener("mousedown",o),window.addEventListener("contextmenu",c),()=>{window.removeEventListener("keydown",a),window.removeEventListener("mousedown",o),window.removeEventListener("contextmenu",c)}},[A]),Object.keys(t[n]).filter(a=>e.includes(a)).map(a=>x.jsxs(kw,{children:[x.jsx(ia,{buttonName:a==="up"?"thumbstick":a,handedness:n}),x.jsxs(iA,{$reverse:!1,children:[x.jsx(rn,{$reverse:!1,style:{width:"100px",background:A&&A.action===a?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent},onClick:()=>s(a),onContextMenu:o=>o.preventDefault(),children:t[n][a]}),x.jsx(rn,{style:{width:Me.widthShort},$reverse:!1,onClick:()=>i(n,a),onContextMenu:o=>o.preventDefault(),children:x.jsx(oa,{icon:Jx})})]})]},a))},zw=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:i})=>{const[A,r]=Ne.useState(!1),[s,a]=Ne.useState(!1),[o,c]=Ne.useState(!1),[l,u]=Ne.useState(0),f=n.inputSource.handedness;return Ne.useEffect(()=>{const p=h=>{h.code===i&&(n.updateButtonValue(e,1),c(!0))},g=h=>{h.code===i&&(n.updateButtonValue(e,0),c(!1))},m=h=>{(i==="MouseLeft"&&h.button===0||i==="MouseRight"&&h.button===2)&&(n.updateButtonValue(e,1),c(!0))},d=h=>{(i==="MouseLeft"&&h.button===0||i==="MouseRight"&&h.button===2)&&(n.updateButtonValue(e,0),c(!1))};return t?i==="MouseLeft"||i==="MouseRight"?(window.addEventListener("mousedown",m),window.addEventListener("mouseup",d)):(window.addEventListener("keydown",p),window.addEventListener("keyup",g)):i==="MouseLeft"||i==="MouseRight"?(window.removeEventListener("mousedown",m),window.removeEventListener("mouseup",d)):(window.removeEventListener("keydown",p),window.removeEventListener("keyup",g)),()=>{i==="MouseLeft"||i==="MouseRight"?(window.removeEventListener("mousedown",m),window.removeEventListener("mouseup",d)):(window.removeEventListener("keydown",p),window.removeEventListener("keyup",g))}},[i,t,e,n]),x.jsxs(rs,{$reverse:f==="right",children:[x.jsx(ia,{buttonName:e,handedness:f}),x.jsx(iA,{$reverse:f==="right",children:t?x.jsx(Bi,{$pressed:o,children:Wn[i]}):x.jsxs(x.Fragment,{children:[x.jsx(rn,{$reverse:f==="right",style:{background:s?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{a(!0),n.updateButtonValue(e,1),setTimeout(()=>{a(!1),n.updateButtonValue(e,0)},250)},children:"Press"}),x.jsx(rn,{title:"Click to toggle touch state",$reverse:f==="right",style:{background:A?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:Me.widthShort},onClick:()=>{r(!A),n.updateButtonTouch(e,!A)},children:x.jsx(nt,{icon:Uu})}),x.jsx(Sg,{$reverse:f==="right",value:l,onChange:p=>{const g=Number(p.target.value);u(g),n.updateButtonValue(e,g/100)},min:"0",max:"100"})]})})]})},Gw=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:i})=>{const[A,r]=Ne.useState(!1),[s,a]=Ne.useState(!1),[o,c]=Ne.useState(!1),[l,u]=Ne.useState(!1),f=n.inputSource.handedness;return Ne.useEffect(()=>{const p=m=>{m.code===i&&(n.updateButtonValue(e,1),u(!0))},g=m=>{m.code===i&&(n.updateButtonValue(e,0),u(!1))};return t?(window.addEventListener("keydown",p),window.addEventListener("keyup",g)):(window.removeEventListener("keydown",p),window.removeEventListener("keyup",g)),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g)}},[i,t,e,n]),x.jsxs(rs,{$reverse:f==="right",children:[x.jsx(ia,{buttonName:e,handedness:f}),x.jsx(iA,{$reverse:f==="right",children:t?x.jsx(Bi,{$pressed:l,children:Wn[i]}):x.jsxs(x.Fragment,{children:[x.jsx(rn,{$reverse:f==="right",style:{background:o?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{c(!0),n.updateButtonValue(e,1),setTimeout(()=>{c(!1),n.updateButtonValue(e,0)},250)},children:"Press"}),x.jsx(rn,{title:"Click to toggle touch state",$reverse:f==="right",style:{background:A?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:Me.widthShort},onClick:()=>{r(!A),n.updateButtonTouch(e,!A)},children:x.jsx(nt,{icon:Uu})}),x.jsx(rn,{$reverse:f==="right",style:{background:s?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{a(!s),n.updateButtonValue(e,s?0:1)},children:"Hold"})]})})]})},Hw=ct.div`
	display: flex;
	align-items: center;
	margin-bottom: ${Me.gap};
`,Cd=`calc(2 * ${Me.height} + ${Me.gap})`,Ww=ct.button`
	background: ${me.gradientGreyTranslucent};
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: ${Cd};
	height: ${Cd};
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
`,Yw=ct.div`
	position: absolute;
	font-size: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${me.textWhite};
	cursor: pointer;
	pointer-events: auto;
`,Sd=ct(rn)`
	width: ${Me.widthLong};
	font-size: ${Me.fontSize};

	${({$reverse:n})=>n?`
    &:first-child {
      border-radius: ${Me.radiusLast};
    }

    &:last-child {
      border-radius: ${Me.radiusFirst};
    }
  `:`
    &:first-child {
      border-radius: ${Me.radiusFirst};
    }

    &:last-child {
      border-radius: ${Me.radiusLast};
    }
  `}
`,Vw=({xrController:n,pointerLocked:e,buttonId:t,mappedKeyUp:i,mappedKeyDown:A,mappedKeyLeft:r,mappedKeyRight:s,mappedKeyPressed:a})=>{const o=Ne.useRef(null),[c,l]=Ne.useState(!1),[u,f]=Ne.useState(!1),[p,g]=Ne.useState(!1),[m,d]=Ne.useState(!1),[h,y]=Ne.useState({x:0,y:0}),[v,B]=Ne.useState({up:!1,down:!1,left:!1,right:!1,pressed:!1}),b=n.inputSource.handedness,C=()=>{if(o.current){const M=o.current.getBoundingClientRect();y({x:M.left+M.width/2,y:M.top+M.height/2}),l(!0)}},S=M=>{if(c&&o.current){const w=M.clientX-h.x,P=M.clientY-h.y,G=Math.sqrt(w*w+P*P),L=12;let k,q;if(G<L)k=w,q=P;else{const W=Math.atan2(P,w);k=Math.cos(W)*L,q=Math.sin(W)*L}o.current.style.transform=`translate(${k}px, ${q}px)`;const Y=k/L,te=q/L;n.updateAxes(t,Y,te)}},Q=()=>{l(!1),o.current&&(o.current.style.transform="translate(0, 0)",n.updateAxes(t,0,0))};return Ne.useEffect(()=>{const M=G=>{const L={...v};G.code===i&&(L.up=!0),G.code===A&&(L.down=!0),G.code===r&&(L.left=!0),G.code===s&&(L.right=!0),G.code===a&&(L.pressed=!0,n.updateButtonValue(t,1)),B(L),P(L)},w=G=>{const L={...v};G.code===i&&(L.up=!1),G.code===A&&(L.down=!1),G.code===r&&(L.left=!1),G.code===s&&(L.right=!1),G.code===a&&(L.pressed=!1,n.updateButtonValue(t,0)),B(L),P(L)},P=G=>{const L=(G.right?1:0)-(G.left?1:0),k=(G.down?1:0)-(G.up?1:0),q=Math.sqrt(L*L+k*k);if(q===0){n.updateAxes(t,0,0);return}const Y=L/q,te=k/q;n.updateAxes(t,Y,te)};return e?(window.addEventListener("keydown",M),window.addEventListener("keyup",w)):(window.removeEventListener("keydown",M),window.removeEventListener("keyup",w)),()=>{window.removeEventListener("keydown",M),window.removeEventListener("keyup",w)}},[i,A,r,s,e,v]),Ne.useEffect(()=>(document.addEventListener("mousemove",S),document.addEventListener("mouseup",Q),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",Q)}),[c,h]),e?x.jsxs(x.Fragment,{children:[x.jsxs(rs,{$reverse:b==="right",children:[x.jsx(ia,{buttonName:"thumbstick",handedness:n.inputSource.handedness}),x.jsxs(iA,{$reverse:b==="right",children:[x.jsx(Bi,{$pressed:v.up,children:Wn[i]}),x.jsx(Bi,{$pressed:v.pressed,children:Wn[a]})]})]}),x.jsx(rs,{$reverse:b==="right",style:b==="right"?{marginRight:"2px"}:{marginLeft:"2px"},children:x.jsxs(iA,{$reverse:!1,style:{margin:0},children:[x.jsx(Bi,{$pressed:v.left,children:Wn[r]}),x.jsx(Bi,{$pressed:v.down,children:Wn[A]}),x.jsx(Bi,{$pressed:v.right,children:Wn[s]})]})})]}):x.jsx(Hw,{style:{flexDirection:n.inputSource.handedness==="left"?"row":"row-reverse",alignItems:"flex-start"},children:x.jsxs(x.Fragment,{children:[x.jsx(ia,{buttonName:"thumbstick",handedness:n.inputSource.handedness}),x.jsx(Ww,{style:{margin:"0 5px"},children:x.jsx(Yw,{ref:o,onMouseDown:C,children:x.jsx(nt,{icon:$o,$size:50})})}),x.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:b==="right"?"start":"end"},children:[x.jsx(rn,{$reverse:b==="right",style:{background:m?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:`calc(${Me.widthLong} + ${Me.widthShort} + ${Me.gap})`,marginBottom:Me.gap,borderRadius:Me.radiusSolo},onClick:()=>{d(!0),n.updateButtonValue(t,1),setTimeout(()=>{d(!1),n.updateButtonValue(t,0)},250)},children:"Press"}),x.jsxs(iA,{$reverse:b==="right",children:[x.jsx(Sd,{title:"Click to toggle touch state",$reverse:n.inputSource.handedness!=="left",style:{background:u?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:Me.widthShort},onClick:()=>{f(!u),n.updateButtonTouch(t,!u)},children:x.jsx(nt,{icon:Uu})}),x.jsx(Sd,{$reverse:n.inputSource.handedness!=="left",style:{background:p?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{g(!p),n.updateButtonValue(t,p?0:1)},children:"Hold"})]})]})]})})};function ZA(n,e){const t=Math.pow(10,e);return Math.round(n*t)/t}const jw=ct.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	font-size: 12px;
`,Aa=({vector:n,label:e="",icon:t,multiplier:i=1,precision:A=2,onValidInput:r=()=>{},marginBottom:s="0"})=>{const[a,o]=Ne.useState({x:(n.x/i).toFixed(A),y:(n.y/i).toFixed(A),z:(n.z/i).toFixed(A)}),c=Ne.useRef({x:ZA(n.x/i,A),y:ZA(n.y/i,A),z:ZA(n.z/i,A)}),l=Ne.useRef(null),u=()=>{const p={x:ZA(n.x/i,A),y:ZA(n.y/i,A),z:ZA(n.z/i,A)},{x:g,y:m,z:d}=c.current;(p.x!==g||p.y!==m||p.z!==d)&&(c.current=p,o({x:p.x.toFixed(A),y:p.y.toFixed(A),z:p.z.toFixed(A)})),l.current=requestAnimationFrame(u)};Ne.useEffect(()=>(l.current=requestAnimationFrame(u),()=>{l.current&&cancelAnimationFrame(l.current)}),[n,i,A]);const f=p=>g=>{const m=g.target.value,d=parseFloat(m);o(h=>({...h,[p]:m})),isNaN(d)||(c.current[p]=d,n[p]=d*i,r())};return x.jsxs(jw,{style:{marginBottom:s},children:[t?x.jsx(nt,{icon:t,style:{marginRight:"5px"}}):x.jsx("span",{style:{marginRight:"5px"},children:e}),x.jsx(Dg,{children:["x","y","z"].map(p=>x.jsxs("div",{style:{position:"relative",display:"inline-block",height:"25px"},children:[x.jsx(bg,{value:a[p],onChange:f(p),className:parseFloat(a[p])!==c.current[p]?"invalid":void 0}),x.jsx(Pg,{children:p.toUpperCase()})]},`${e}-${p}`))})]})};function Kw(n){const e=new Set;for(const i of n.axes)i&&i.id&&e.add(i.id);const t=n.buttons.filter(i=>i!==null).map(i=>({id:i.id,type:i.type,hasAxes:e.has(i.id)}));return t.sort((i,A)=>i.hasAxes&&!A.hasAxes?-1:!i.hasAxes&&A.hasAxes?1:0),t}const qw=({controller:n,handle:e,handedness:t,pointerLocked:i})=>{const{keyMap:A}=Ou(),[r,s]=Et.useState(n.connected),[a,o]=Et.useState(!1),c=Kw(n.gamepadConfig),l=c.flatMap(u=>u.hasAxes?[`${u.id}-left`,`${u.id}-right`,`${u.id}-up`,`${u.id}-down`,u.id]:u.id);return Et.useEffect(()=>{i&&o(!1)},[i]),x.jsxs(Zo,{style:t==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!i&&x.jsx(x.Fragment,{children:x.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[x.jsxs("div",{style:{fontSize:"13px",display:"flex",flexDirection:"row",alignItems:"center"},children:[x.jsx(nt,{icon:Tg,style:{marginRight:"5px"}}),"Controller ",x.jsxs("span",{style:{fontWeight:"bold"},children:["[",t==="left"?"L":"R","]"]})]}),x.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:r?x.jsxs(x.Fragment,{children:[x.jsx(HA,{title:`Click to ${a?"close":"change"} key bindings`,onClick:()=>{o(!a)},children:x.jsx(nt,{icon:Qg})}),x.jsx(HA,{title:`Click to disconnect ${t} controller`,$isRed:!0,onClick:()=>{n.connected=!1,s(!1)},children:x.jsx(nt,{icon:$o})})]}):x.jsx(HA,{title:`Click to reconnect ${t} controller`,onClick:()=>{n.connected=!0,s(!0)},style:{marginLeft:"5px"},children:x.jsx(nt,{icon:Rg})})})]})}),r&&!i&&x.jsxs(x.Fragment,{children:[!a&&x.jsxs(x.Fragment,{children:[x.jsx(jA,{}),x.jsx(Aa,{vector:e.position,label:"Position",marginBottom:Me.gap}),x.jsx(Aa,{vector:e.rotation,label:"Rotation"})]}),x.jsx(jA,{})]}),r&&(a?x.jsx(Ug,{handedness:t,actions:l}):c.map(u=>{const f=A[t];return u.hasAxes?x.jsx(Vw,{xrController:n,pointerLocked:i,buttonId:u.id,mappedKeyUp:A[t][`${u.id}-up`],mappedKeyDown:f[`${u.id}-down`],mappedKeyLeft:f[`${u.id}-left`],mappedKeyRight:f[`${u.id}-right`],mappedKeyPressed:f[u.id]},u.id):u.type==="analog"?x.jsx(zw,{xrController:n,buttonId:u.id,mappedKey:f[u.id],pointerLocked:i},u.id):x.jsx(Gw,{xrController:n,buttonId:u.id,mappedKey:f[u.id],pointerLocked:i},u.id)}))]},t)},Xw=`calc(${Me.widthLong} + ${Me.widthShort} + ${Me.gap})`,Jw=({hand:n,pointerLocked:e,mappedKey:t})=>{const[i,A]=Ne.useState(!1),[r,s]=Ne.useState(!1),[a,o]=Ne.useState(0),c=n.inputSource.handedness;return Ne.useEffect(()=>{const l=g=>{g.code===t&&(n.updatePinchValue(1),s(!0))},u=g=>{g.code===t&&(n.updatePinchValue(0),s(!1))},f=g=>{(t==="MouseLeft"&&g.button===0||t==="MouseRight"&&g.button===2)&&(n.updatePinchValue(1),s(!0))},p=g=>{(t==="MouseLeft"&&g.button===0||t==="MouseRight"&&g.button===2)&&(n.updatePinchValue(0),s(!1))};return e?t==="MouseLeft"||t==="MouseRight"?(window.addEventListener("mousedown",f),window.addEventListener("mouseup",p)):(window.addEventListener("keydown",l),window.addEventListener("keyup",u)):t==="MouseLeft"||t==="MouseRight"?(window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",p)):(window.removeEventListener("keydown",l),window.removeEventListener("keyup",u)),()=>{t==="MouseLeft"||t==="MouseRight"?(window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",p)):(window.removeEventListener("keydown",l),window.removeEventListener("keyup",u))}},[t,e,n]),x.jsxs(rs,{$reverse:c==="right",children:[x.jsx(ps,{icon:Fu,$reverse:c==="left"}),x.jsx(iA,{$reverse:c==="right",children:e?x.jsx(Bi,{$pressed:r,children:Wn[t]}):x.jsxs(x.Fragment,{children:[x.jsx(rn,{$reverse:c==="right",style:{background:i?me.gradientLightGreyTranslucent:me.gradientGreyTranslucent,width:Me.widthLong},onClick:()=>{A(!0),n.updatePinchValue(1),setTimeout(()=>{A(!1),n.updatePinchValue(0)},250)},children:"Pinch"}),x.jsx(Sg,{$reverse:c==="right",value:a,onChange:l=>{const u=Number(l.target.value);o(u),n.updatePinchValue(u/100)},style:{width:Xw},min:"0",max:"100"})]})})]})},ys=["default","point"],Zw=`calc(2 * ${Me.widthLong} - ${Me.widthShort})`,$w=({hand:n,pointerLocked:e,mappedKey:t})=>{const[i,A]=Ne.useState(n.poseId),[r,s]=Ne.useState(!1),a=n.inputSource.handedness,o=l=>{const f=(ys.indexOf(n.poseId)+ys.length+l)%ys.length;A(ys[f]),n.poseId=ys[f]},c=a==="right";return Ne.useEffect(()=>{const l=f=>{f.code===t&&(o(1),s(!0))},u=f=>{f.code===t&&s(!1)};return e?(window.addEventListener("keydown",l),window.addEventListener("keyup",u)):(window.removeEventListener("keydown",l),window.removeEventListener("keyup",u)),()=>{window.removeEventListener("keydown",l),window.removeEventListener("keyup",u)}},[t,e,n]),x.jsxs(rs,{$reverse:c,children:[x.jsx(ps,{icon:Lu,$reverse:a==="left"}),x.jsx(iA,{$reverse:c,children:e?x.jsx(Bi,{$pressed:r,children:Wn[t]}):x.jsxs(x.Fragment,{children:[x.jsx(rn,{$reverse:c,style:{width:Me.widthShort},onClick:()=>{o(c?1:-1)},children:x.jsx(nt,{icon:c?Bd:yd})}),x.jsxs(rn,{$reverse:c,style:{width:Zw},disabled:!0,children:["Pose: ",i]}),x.jsx(rn,{$reverse:c,style:{width:Me.widthShort},onClick:()=>{o(c?-1:1)},children:x.jsx(nt,{icon:c?yd:Bd})})]})})]})},e3=({hand:n,handle:e,handedness:t,pointerLocked:i})=>{const{keyMap:A}=Ou(),[r,s]=Et.useState(n.connected),[a,o]=Et.useState(!1);return Et.useEffect(()=>{i&&o(!1)},[i]),x.jsxs(Zo,{style:t==="left"?{left:"8px",bottom:"8px"}:{right:"8px",bottom:"8px"},children:[!i&&x.jsx(x.Fragment,{children:x.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[x.jsxs("div",{style:{fontSize:"13px",display:"flex",flexDirection:"row",alignItems:"center"},children:[x.jsx(nt,{icon:Ig,$reverse:t==="left",style:{marginRight:"5px"}}),"Hand ",x.jsxs("span",{style:{fontWeight:"bold"},children:["[",t==="left"?"L":"R","]"]})]}),x.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:r?x.jsxs(x.Fragment,{children:[x.jsx(HA,{title:`Click to ${a?"close":"change"} key bindings`,onClick:()=>{o(!a)},children:x.jsx(nt,{icon:Qg})}),x.jsx(HA,{title:`Click to disconnect ${t} controller`,$isRed:!0,onClick:()=>{n.connected=!1,s(!1)},children:x.jsx(nt,{icon:$o})})]}):x.jsx(HA,{title:`Click to reconnect ${t} controller`,onClick:()=>{n.connected=!0,s(!0)},style:{marginLeft:"5px"},children:x.jsx(nt,{icon:Rg})})})]})}),r&&!i&&x.jsxs(x.Fragment,{children:[!a&&x.jsxs(x.Fragment,{children:[x.jsx(jA,{}),x.jsx(Aa,{vector:e.position,label:"Position",marginBottom:Me.gap}),x.jsx(Aa,{vector:e.rotation,label:"Rotation"})]}),x.jsx(jA,{})]}),r&&(a?x.jsx(Ug,{handedness:t,actions:["pose","pinch"]}):x.jsxs(x.Fragment,{children:[x.jsx($w,{hand:n,pointerLocked:i,mappedKey:A[t].pose}),x.jsx(Jw,{hand:n,pointerLocked:i,mappedKey:A[t].pinch})]}))]},t)},Nu=$0(n=>({inputMode:"controller",setInputMode:e=>n(()=>({inputMode:e}))})),t3=({xrDevice:n,inputLayer:e,pointerLocked:t})=>{const{inputMode:i}=Nu();return x.jsx(x.Fragment,{children:i==="controller"?Object.entries(n.controllers).map(([A,r])=>x.jsx(qw,{controller:r,handle:e.transformHandles.get(A),handedness:A,pointerLocked:t},`controller-${A}`)):Object.entries(n.hands).map(([A,r])=>x.jsx(e3,{hand:r,handle:e.transformHandles.get(A),handedness:A,pointerLocked:t},`hand-${A}`))})},_c=ct.td`
	text-align: right;
	color: ${me.textWhite};
	padding: 0 8px 0 0;
	font-weight: bold;
`,yc=ct.td`
	text-align: left;
	color: ${me.textGrey};
	padding: 0;
`,n3=({xrDevice:n,inputLayer:e})=>{var t,i,A;const[r,s]=Et.useState(!!(!((t=n.sem)===null||t===void 0)&&t.planesVisible)),[a,o]=Et.useState(!!(!((i=n.sem)===null||i===void 0)&&i.boundingBoxesVisible)),[c,l]=Et.useState(!!(!((A=n.sem)===null||A===void 0)&&A.meshesVisible)),[u,f]=Et.useState(!1),{inputMode:p,setInputMode:g}=Nu();return x.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center",gap:"6px",padding:"8px"},children:[x.jsx(Zl,{children:x.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[x.jsx(ii,{title:"Click to reset device transforms",onClick:()=>{e.resetDeviceTransforms()},children:x.jsx(nt,{icon:ew,$size:16})}),x.jsx(ii,{title:"Click to activate play mode",onClick:()=>{e.lockPointer()},children:x.jsx(nt,{icon:tw,$size:16})}),x.jsx(ii,{title:"Click to toggle input mode",onClick:()=>{p==="controller"?(g("hand"),n.primaryInputMode="hand"):(g("controller"),n.primaryInputMode="controller")},children:x.jsx(nt,{icon:p==="controller"?Tg:Ig,$size:16})}),n.sem&&x.jsxs(x.Fragment,{children:[x.jsx(jA,{$horizontal:!1}),x.jsx(ii,{title:"Click to toggle visibility of planes",onClick:()=>{n.sem.planesVisible=!r,s(!r)},children:x.jsx(Ow,{size:16,color:r?me.textWhite:me.textGrey})}),x.jsx(ii,{title:"Click to toggle visibility of bounding boxes",onClick:()=>{n.sem.boundingBoxesVisible=!a,o(!a)},children:x.jsx(Lw,{size:16,color:a?me.textWhite:me.textGrey})}),x.jsx(ii,{title:"Click to toggle visibility of meshes",onClick:()=>{n.sem.meshesVisible=!c,l(!c)},children:x.jsx(Fw,{size:16,color:c?me.textWhite:me.textGrey})})]}),x.jsx(jA,{$horizontal:!1}),x.jsx(ii,{title:"Click to exit XR session",onClick:()=>{const m=n.activeSession;m==null||m.end()},children:x.jsx(nt,{icon:Kx,$size:16})})]})}),x.jsx(Zl,{children:x.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1px"},children:[x.jsx(ii,{title:"About IWER",onClick:()=>{f(!u)},children:x.jsx($l,{size:16})}),x.jsx(ii,{title:"Report issues",onClick:()=>{window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/issues","_blank")},children:x.jsx(nt,{icon:rw,$size:16})})]})}),u&&x.jsxs(Zo,{style:{top:"50vh",left:"50vw",transform:"translate(-50%, -50%)",maxWidth:"240px",gap:"4px"},children:[x.jsx("div",{style:{display:"flex",justifyContent:"end"},children:x.jsx(HA,{$isRed:!0,onClick:()=>{f(!1)},children:x.jsx(nt,{icon:$o})})}),x.jsx("div",{style:{display:"flex",justifyContent:"center"},children:x.jsx($l,{size:100})}),x.jsxs("p",{style:{textAlign:"center",padding:"0 5px",margin:"0"},children:[x.jsx("b",{children:"Immersive Web Emulation Runtime"})," (IWER) is a free, open-source WebXR developer tool created by Meta Platforms, Inc."]}),x.jsx("table",{style:{width:"100%",borderCollapse:"collapse",display:"flex",justifyContent:"center",fontSize:"12px",padding:"8px"},children:x.jsxs("tbody",{children:[x.jsxs("tr",{children:[x.jsx(_c,{children:"IWER"}),x.jsxs(yc,{children:["v",n.version]})]}),x.jsxs("tr",{children:[x.jsx(_c,{children:"DevUI"}),x.jsxs(yc,{children:["v",n.devui.version]})]}),n.sem&&x.jsxs("tr",{children:[x.jsx(_c,{children:"SEM"}),x.jsxs(yc,{children:["v",n.sem.version]})]})]})}),x.jsx(rn,{style:{borderRadius:Me.radiusSolo},onClick:()=>{window.open("https://github.com/meta-quest/immersive-web-emulation-runtime/blob/main/LICENSE","_blank")},children:"MIT License"}),x.jsx(rn,{style:{borderRadius:Me.radiusSolo},onClick:()=>{window.open("https://github.com/meta-quest/immersive-web-emulation-runtime","_blank")},children:"View Source on GitHub"})]})]})},i3=ct.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: ${Me.gap};
	font-size: 12px;
`,A3=ct.input.attrs({type:"range"})`
	-webkit-appearance: none;
	appearance: none;
	background: ${me.gradientGrey};
	border: 1px solid transparent;
	height: 25px;
	color: ${me.textWhite};
	width: ${Me.widthLong};
	cursor: pointer;
	margin: 0;
	border-radius: 5px;
	padding: 0 10px 0 5px;
	box-sizing: border-box;
	font-size: 10px;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 25px;
		background-color: ${me.textWhite};
		border-radius: ${Me.radiusMiddle};
	}

	&::-moz-range-thumb {
		width: 8px;
		height: 25px;
		background-color: ${me.textWhite};
		border-radius: ${Me.radiusMiddle};
	}

	&::-ms-thumb {
		width: 8px;
		height: 25px;
		background-color: ${me.textWhite};
		border-radius: ${Me.radiusMiddle};
	}
`,r3=({xrDevice:n,inputLayer:e,pointerLocked:t})=>{const[i,A]=Et.useState(n.fovy);return x.jsxs(Zo,{style:{left:"8px",top:"8px"},children:[x.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"20px"},children:[x.jsxs("div",{style:{fontSize:"13px",display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"start"},children:[x.jsx(nt,{icon:sw,style:{marginRight:"5px"}}),x.jsx("div",{style:{alignItems:"end"},children:n.name})]}),x.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"1px"}})]}),x.jsx(jA,{}),x.jsx(Aa,{vector:e.combinedCameraPosition,icon:nw}),!t&&x.jsxs(i3,{children:[x.jsx(nt,{icon:ow,style:{marginRight:"5px"}}),x.jsxs(Dg,{children:[x.jsxs("div",{style:{position:"relative",display:"inline-block",height:"25px"},children:[x.jsx(bg,{type:"text",value:(i/Math.PI*180).toFixed(0)+"°",readOnly:!0,style:{width:"73px"}}),x.jsx(Pg,{children:"FOV-Y"})]}),x.jsx("div",{style:{position:"relative",display:"inline-block"},children:x.jsx(A3,{value:i,onChange:r=>{const s=Number(r.target.value);A(s),n.fovy=s},min:Math.PI/6,max:Math.PI/1.5,step:Math.PI/48,style:{width:"80px"}})})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ku="165",s3=0,Dd=1,a3=2,Lg=1,o3=2,Mi=3,Ti=0,un=1,Ci=2,AA=0,Wr=1,bd=2,Pd=3,Td=4,c3=5,IA=100,l3=101,u3=102,f3=103,d3=104,h3=200,p3=201,g3=202,m3=203,eu=204,tu=205,v3=206,x3=207,w3=208,E3=209,M3=210,_3=211,y3=212,B3=213,C3=214,S3=0,D3=1,b3=2,Co=3,P3=4,T3=5,I3=6,R3=7,Fg=0,Q3=1,U3=2,rA=0,L3=1,F3=2,O3=3,N3=4,k3=5,z3=6,G3=7,Og=300,ss=301,as=302,nu=303,iu=304,ec=306,Au=1e3,UA=1001,ru=1002,Un=1003,H3=1004,Ma=1005,Yn=1006,Bc=1007,LA=1008,cA=1009,W3=1010,Y3=1011,So=1012,Ng=1013,os=1014,nA=1015,tc=1016,kg=1017,zg=1018,cs=1020,V3=35902,j3=1021,K3=1022,fi=1023,q3=1024,X3=1025,Yr=1026,ls=1027,J3=1028,Gg=1029,Z3=1030,Hg=1031,Wg=1033,Cc=33776,Sc=33777,Dc=33778,bc=33779,Id=35840,Rd=35841,Qd=35842,Ud=35843,Ld=36196,Fd=37492,Od=37496,Nd=37808,kd=37809,zd=37810,Gd=37811,Hd=37812,Wd=37813,Yd=37814,Vd=37815,jd=37816,Kd=37817,qd=37818,Xd=37819,Jd=37820,Zd=37821,Pc=36492,$d=36494,eh=36495,$3=36283,th=36284,nh=36285,ih=36286,eE=3200,tE=3201,Yg=0,nE=1,eA="",Ai="srgb",dA="srgb-linear",zu="display-p3",nc="display-p3-linear",Do="linear",vt="srgb",bo="rec709",Po="p3",$A=7680,Ah=519,iE=512,AE=513,rE=514,Vg=515,sE=516,aE=517,oE=518,cE=519,rh=35044,sh="300 es",Si=2e3,To=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const A=this._listeners[e];if(A!==void 0){const r=A.indexOf(t);r!==-1&&A.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const A=i.slice(0);for(let r=0,s=A.length;r<s;r++)A[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,su=180/Math.PI;function la(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function lE(n,e){return(n%e+e)%e}function Ic(n,e,t){return(1-t)*n+t*e}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}let it=class jg{constructor(e=0,t=0){jg.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,A=e.elements;return this.x=A[0]*t+A[3]*i+A[6],this.y=A[1]*t+A[4]*i+A[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),A=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*A+e.x,this.y=r*A+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class Oe{constructor(e,t,i,A,r,s,a,o,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,A,r,s,a,o,c)}set(e,t,i,A,r,s,a,o,c){const l=this.elements;return l[0]=e,l[1]=A,l[2]=a,l[3]=t,l[4]=r,l[5]=o,l[6]=i,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,A=t.elements,r=this.elements,s=i[0],a=i[3],o=i[6],c=i[1],l=i[4],u=i[7],f=i[2],p=i[5],g=i[8],m=A[0],d=A[3],h=A[6],y=A[1],v=A[4],B=A[7],b=A[2],C=A[5],S=A[8];return r[0]=s*m+a*y+o*b,r[3]=s*d+a*v+o*C,r[6]=s*h+a*B+o*S,r[1]=c*m+l*y+u*b,r[4]=c*d+l*v+u*C,r[7]=c*h+l*B+u*S,r[2]=f*m+p*y+g*b,r[5]=f*d+p*v+g*C,r[8]=f*h+p*B+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],A=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8];return t*s*l-t*a*c-i*r*l+i*a*o+A*r*c-A*s*o}invert(){const e=this.elements,t=e[0],i=e[1],A=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=l*s-a*c,f=a*o-l*r,p=c*r-s*o,g=t*u+i*f+A*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(A*c-l*i)*m,e[2]=(a*i-A*s)*m,e[3]=f*m,e[4]=(l*t-A*o)*m,e[5]=(A*r-a*t)*m,e[6]=p*m,e[7]=(i*o-c*t)*m,e[8]=(s*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,A,r,s,a){const o=Math.cos(r),c=Math.sin(r);return this.set(i*o,i*c,-i*(o*s+c*a)+s+e,-A*c,A*o,-A*(-c*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let A=0;A<9;A++)if(t[A]!==i[A])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new Oe;function Kg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uE(){const n=Io("canvas");return n.style.display="block",n}const ah={};function qg(n){n in ah||(ah[n]=!0,console.warn(n))}function fE(n,e,t){return new Promise(function(i,A){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:A();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const oh=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_a={[dA]:{transfer:Do,primaries:bo,toReference:n=>n,fromReference:n=>n},[Ai]:{transfer:vt,primaries:bo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[nc]:{transfer:Do,primaries:Po,toReference:n=>n.applyMatrix3(ch),fromReference:n=>n.applyMatrix3(oh)},[zu]:{transfer:vt,primaries:Po,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ch),fromReference:n=>n.applyMatrix3(oh).convertLinearToSRGB()}},dE=new Set([dA,nc]),ut={enabled:!0,_workingColorSpace:dA,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=_a[e].toReference,A=_a[t].fromReference;return A(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return _a[n].primaries},getTransfer:function(n){return n===eA?Do:_a[n].transfer}};function Vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let er;class hE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Io("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const A=i.getImageData(0,0,e.width,e.height),r=A.data;for(let s=0;s<r.length;s++)r[s]=Vr(r[s]/255)*255;return i.putImageData(A,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vr(t[i]/255)*255):t[i]=Vr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pE=0;class Xg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=la(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},A=this.data;if(A!==null){let r;if(Array.isArray(A)){r=[];for(let s=0,a=A.length;s<a;s++)A[s].isDataTexture?r.push(Uc(A[s].image)):r.push(Uc(A[s]))}else r=Uc(A);i.url=r}return t||(e.images[this.uuid]=i),i}}function Uc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gE=0;class fn extends gs{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=UA,A=UA,r=Yn,s=LA,a=fi,o=cA,c=fn.DEFAULT_ANISOTROPY,l=eA){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=la(),this.name="",this.source=new Xg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=A,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Au:e.x=e.x-Math.floor(e.x);break;case UA:e.x=e.x<0?0:1;break;case ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Au:e.y=e.y-Math.floor(e.y);break;case UA:e.y=e.y<0?0:1;break;case ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Og;fn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,i=0,A=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=A}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,A){return this.x=e,this.y=t,this.z=i,this.w=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,A=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*A+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*A+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*A+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*A+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,A,r;const o=e.elements,c=o[0],l=o[4],u=o[8],f=o[1],p=o[5],g=o[9],m=o[2],d=o[6],h=o[10];if(Math.abs(l-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,B=(p+1)/2,b=(h+1)/2,C=(l+f)/4,S=(u+m)/4,Q=(g+d)/4;return v>B&&v>b?v<.01?(i=0,A=.707106781,r=.707106781):(i=Math.sqrt(v),A=C/i,r=S/i):B>b?B<.01?(i=.707106781,A=0,r=.707106781):(A=Math.sqrt(B),i=C/A,r=Q/A):b<.01?(i=.707106781,A=.707106781,r=0):(r=Math.sqrt(b),i=S/r,A=Q/r),this.set(i,A,r,t),this}let y=Math.sqrt((d-g)*(d-g)+(u-m)*(u-m)+(f-l)*(f-l));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-m)/y,this.z=(f-l)/y,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mE extends gs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const A={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new fn(A,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let A=0,r=this.textures.length;A<r;A++)this.textures[A].image.width=e,this.textures[A].image.height=t,this.textures[A].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,A=e.textures.length;i<A;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class KA extends mE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jg extends fn{constructor(e=null,t=1,i=1,A=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:A},this.magFilter=Un,this.minFilter=Un,this.wrapR=UA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends fn{constructor(e=null,t=1,i=1,A=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:A},this.magFilter=Un,this.minFilter=Un,this.wrapR=UA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let lA=class{constructor(e=0,t=0,i=0,A=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=A}static slerpFlat(e,t,i,A,r,s,a){let o=i[A+0],c=i[A+1],l=i[A+2],u=i[A+3];const f=r[s+0],p=r[s+1],g=r[s+2],m=r[s+3];if(a===0){e[t+0]=o,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(u!==m||o!==f||c!==p||l!==g){let d=1-a;const h=o*f+c*p+l*g+u*m,y=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,h*y);d=Math.sin(d*C)/b,a=Math.sin(a*C)/b}const B=a*y;if(o=o*d+f*B,c=c*d+p*B,l=l*d+g*B,u=u*d+m*B,d===1-a){const b=1/Math.sqrt(o*o+c*c+l*l+u*u);o*=b,c*=b,l*=b,u*=b}}e[t]=o,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,A,r,s){const a=i[A],o=i[A+1],c=i[A+2],l=i[A+3],u=r[s],f=r[s+1],p=r[s+2],g=r[s+3];return e[t]=a*g+l*u+o*p-c*f,e[t+1]=o*g+l*f+c*u-a*p,e[t+2]=c*g+l*p+a*f-o*u,e[t+3]=l*g-a*u-o*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,A){return this._x=e,this._y=t,this._z=i,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,A=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,c=a(i/2),l=a(A/2),u=a(r/2),f=o(i/2),p=o(A/2),g=o(r/2);switch(s){case"XYZ":this._x=f*l*u+c*p*g,this._y=c*p*u-f*l*g,this._z=c*l*g+f*p*u,this._w=c*l*u-f*p*g;break;case"YXZ":this._x=f*l*u+c*p*g,this._y=c*p*u-f*l*g,this._z=c*l*g-f*p*u,this._w=c*l*u+f*p*g;break;case"ZXY":this._x=f*l*u-c*p*g,this._y=c*p*u+f*l*g,this._z=c*l*g+f*p*u,this._w=c*l*u-f*p*g;break;case"ZYX":this._x=f*l*u-c*p*g,this._y=c*p*u+f*l*g,this._z=c*l*g-f*p*u,this._w=c*l*u+f*p*g;break;case"YZX":this._x=f*l*u+c*p*g,this._y=c*p*u+f*l*g,this._z=c*l*g-f*p*u,this._w=c*l*u-f*p*g;break;case"XZY":this._x=f*l*u-c*p*g,this._y=c*p*u-f*l*g,this._z=c*l*g+f*p*u,this._w=c*l*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,A=Math.sin(i);return this._x=e.x*A,this._y=e.y*A,this._z=e.z*A,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],A=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-o)*p,this._y=(r-c)*p,this._z=(s-A)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(l-o)/p,this._x=.25*p,this._y=(A+s)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(A+s)/p,this._y=.25*p,this._z=(o+l)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(s-A)/p,this._x=(r+c)/p,this._y=(o+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const A=Math.min(1,t/i);return this.slerp(e,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,A=e._y,r=e._z,s=e._w,a=t._x,o=t._y,c=t._z,l=t._w;return this._x=i*l+s*a+A*c-r*o,this._y=A*l+s*o+r*a-i*c,this._z=r*l+s*c+i*o-A*a,this._w=s*l-i*a-A*o-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,A=this._y,r=this._z,s=this._w;let a=s*e._w+i*e._x+A*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=A,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*A+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(o),l=Math.atan2(c,a),u=Math.sin((1-t)*l)/c,f=Math.sin(t*l)/c;return this._w=s*u+this._w*f,this._x=i*u+this._x*f,this._y=A*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),A=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(A*Math.sin(e),A*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class Zg{constructor(e=0,t=0,i=0){Zg.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,A=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*A,this.y=r[1]*t+r[4]*i+r[7]*A,this.z=r[2]*t+r[5]*i+r[8]*A,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,A=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*A+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*A+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*A+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*A+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,A=this.z,r=e.x,s=e.y,a=e.z,o=e.w,c=2*(s*A-a*i),l=2*(a*t-r*A),u=2*(r*i-s*t);return this.x=t+o*c+s*u-a*l,this.y=i+o*l+a*c-r*u,this.z=A+o*u+r*l-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,A=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*A,this.y=r[1]*t+r[5]*i+r[9]*A,this.z=r[2]*t+r[6]*i+r[10]*A,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,A=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=A*o-r*a,this.y=r*s-i*o,this.z=i*a-A*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,A=this.z-e.z;return t*t+i*i+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const A=Math.sin(t)*e;return this.x=A*Math.sin(i),this.y=Math.cos(t)*e,this.z=A*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),A=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=A,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Lc=new O,lh=new lA;class ua{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,On):On.fromBufferAttribute(r,s),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const A=e.children;for(let r=0,s=A.length;r<s;r++)this.expandByObject(A[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Ba.subVectors(this.max,Cs),tr.subVectors(e.a,Cs),nr.subVectors(e.b,Cs),ir.subVectors(e.c,Cs),Ni.subVectors(nr,tr),ki.subVectors(ir,nr),mA.subVectors(tr,ir);let t=[0,-Ni.z,Ni.y,0,-ki.z,ki.y,0,-mA.z,mA.y,Ni.z,0,-Ni.x,ki.z,0,-ki.x,mA.z,0,-mA.x,-Ni.y,Ni.x,0,-ki.y,ki.x,0,-mA.y,mA.x,0];return!Fc(t,tr,nr,ir,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,tr,nr,ir,Ba))?!1:(Ca.crossVectors(Ni,ki),t=[Ca.x,Ca.y,Ca.z],Fc(t,tr,nr,ir,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,ya=new ua,tr=new O,nr=new O,ir=new O,Ni=new O,ki=new O,mA=new O,Cs=new O,Ba=new O,Ca=new O,vA=new O;function Fc(n,e,t,i,A){for(let r=0,s=n.length-3;r<=s;r+=3){vA.fromArray(n,r);const a=A.x*Math.abs(vA.x)+A.y*Math.abs(vA.y)+A.z*Math.abs(vA.z),o=e.dot(vA),c=t.dot(vA),l=i.dot(vA);if(Math.max(-Math.max(o,c,l),Math.min(o,c,l))>a)return!1}return!0}const xE=new ua,Ss=new O,Oc=new O;class ic{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xE.setFromPoints(e).getCenter(i);let A=0;for(let r=0,s=e.length;r<s;r++)A=Math.max(A,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(A),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),A=(i-this.radius)*.5;this.center.addScaledVector(Ss,A/i),this.radius+=A}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Oc)),this.expandByPoint(Ss.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new O,Nc=new O,Sa=new O,zi=new O,kc=new O,Da=new O,zc=new O;class Gu{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,A){Nc.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Nc);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Sa),a=zi.dot(this.direction),o=-zi.dot(Sa),c=zi.lengthSq(),l=Math.abs(1-s*s);let u,f,p,g;if(l>0)if(u=s*o-a,f=s*a-o,g=r*l,u>=0)if(f>=-g)if(f<=g){const m=1/l;u*=m,f*=m,p=u*(u+s*f+2*a)+f*(s*u+f+2*o)+c}else f=r,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*o)+c;else f=-r,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*o)+c;else f<=-g?(u=Math.max(0,-(-s*r+a)),f=u>0?-r:Math.min(Math.max(-r,-o),r),p=-u*u+f*(f+2*o)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+c):(u=Math.max(0,-(s*r+a)),f=u>0?r:Math.min(Math.max(-r,-o),r),p=-u*u+f*(f+2*o)+c);else f=s>0?-r:r,u=Math.max(0,-(s*f+a)),p=-u*u+f*(f+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),A&&A.copy(Nc).addScaledVector(Sa,f),p}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),A=mi.dot(mi)-i*i,r=e.radius*e.radius;if(A>r)return null;const s=Math.sqrt(r-A),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,A,r,s,a,o;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,A=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,A=(e.min.x-f.x)*c),l>=0?(r=(e.min.y-f.y)*l,s=(e.max.y-f.y)*l):(r=(e.max.y-f.y)*l,s=(e.min.y-f.y)*l),i>s||r>A||((r>i||isNaN(i))&&(i=r),(s<A||isNaN(A))&&(A=s),u>=0?(a=(e.min.z-f.z)*u,o=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,o=(e.min.z-f.z)*u),i>o||a>A)||((a>i||i!==i)&&(i=a),(o<A||A!==A)&&(A=o),A<0)?null:this.at(i>=0?i:A,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,A,r){kc.subVectors(t,e),Da.subVectors(i,e),zc.crossVectors(kc,Da);let s=this.direction.dot(zc),a;if(s>0){if(A)return null;a=1}else if(s<0)a=-1,s=-s;else return null;zi.subVectors(this.origin,e);const o=a*this.direction.dot(Da.crossVectors(zi,Da));if(o<0)return null;const c=a*this.direction.dot(kc.cross(zi));if(c<0||o+c>s)return null;const l=-a*zi.dot(zc);return l<0?null:this.at(l/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,A,r,s,a,o,c,l,u,f,p,g,m,d){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,A,r,s,a,o,c,l,u,f,p,g,m,d)}set(e,t,i,A,r,s,a,o,c,l,u,f,p,g,m,d){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=A,h[1]=r,h[5]=s,h[9]=a,h[13]=o,h[2]=c,h[6]=l,h[10]=u,h[14]=f,h[3]=p,h[7]=g,h[11]=m,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,A=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),s=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*A,t[1]=i[1]*A,t[2]=i[2]*A,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,A=e.y,r=e.z,s=Math.cos(i),a=Math.sin(i),o=Math.cos(A),c=Math.sin(A),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=s*l,p=s*u,g=a*l,m=a*u;t[0]=o*l,t[4]=-o*u,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*o,t[2]=m-f*c,t[6]=g+p*c,t[10]=s*o}else if(e.order==="YXZ"){const f=o*l,p=o*u,g=c*l,m=c*u;t[0]=f+m*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*u,t[5]=s*l,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=s*o}else if(e.order==="ZXY"){const f=o*l,p=o*u,g=c*l,m=c*u;t[0]=f-m*a,t[4]=-s*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*l,t[9]=m-f*a,t[2]=-s*c,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){const f=s*l,p=s*u,g=a*l,m=a*u;t[0]=o*l,t[4]=g*c-p,t[8]=f*c+m,t[1]=o*u,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){const f=s*o,p=s*c,g=a*o,m=a*c;t[0]=o*l,t[4]=m-f*u,t[8]=g*u+p,t[1]=u,t[5]=s*l,t[9]=-a*l,t[2]=-c*l,t[6]=p*u+g,t[10]=f-m*u}else if(e.order==="XZY"){const f=s*o,p=s*c,g=a*o,m=a*c;t[0]=o*l,t[4]=-u,t[8]=c*l,t[1]=f*u+m,t[5]=s*l,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*l,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wE,e,EE)}lookAt(e,t,i){const A=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Gi.crossVectors(i,wn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Gi.crossVectors(i,wn)),Gi.normalize(),ba.crossVectors(wn,Gi),A[0]=Gi.x,A[4]=ba.x,A[8]=wn.x,A[1]=Gi.y,A[5]=ba.y,A[9]=wn.y,A[2]=Gi.z,A[6]=ba.z,A[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,A=t.elements,r=this.elements,s=i[0],a=i[4],o=i[8],c=i[12],l=i[1],u=i[5],f=i[9],p=i[13],g=i[2],m=i[6],d=i[10],h=i[14],y=i[3],v=i[7],B=i[11],b=i[15],C=A[0],S=A[4],Q=A[8],M=A[12],w=A[1],P=A[5],G=A[9],L=A[13],k=A[2],q=A[6],Y=A[10],te=A[14],W=A[3],ce=A[7],ve=A[11],xe=A[15];return r[0]=s*C+a*w+o*k+c*W,r[4]=s*S+a*P+o*q+c*ce,r[8]=s*Q+a*G+o*Y+c*ve,r[12]=s*M+a*L+o*te+c*xe,r[1]=l*C+u*w+f*k+p*W,r[5]=l*S+u*P+f*q+p*ce,r[9]=l*Q+u*G+f*Y+p*ve,r[13]=l*M+u*L+f*te+p*xe,r[2]=g*C+m*w+d*k+h*W,r[6]=g*S+m*P+d*q+h*ce,r[10]=g*Q+m*G+d*Y+h*ve,r[14]=g*M+m*L+d*te+h*xe,r[3]=y*C+v*w+B*k+b*W,r[7]=y*S+v*P+B*q+b*ce,r[11]=y*Q+v*G+B*Y+b*ve,r[15]=y*M+v*L+B*te+b*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],A=e[8],r=e[12],s=e[1],a=e[5],o=e[9],c=e[13],l=e[2],u=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],h=e[15];return g*(+r*o*u-A*c*u-r*a*f+i*c*f+A*a*p-i*o*p)+m*(+t*o*p-t*c*f+r*s*f-A*s*p+A*c*l-r*o*l)+d*(+t*c*u-t*a*p-r*s*u+i*s*p+r*a*l-i*c*l)+h*(-A*a*l-t*o*u+t*a*f+A*s*u-i*s*f+i*o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const A=this.elements;return e.isVector3?(A[12]=e.x,A[13]=e.y,A[14]=e.z):(A[12]=e,A[13]=t,A[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],A=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],u=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],h=e[15],y=u*d*c-m*f*c+m*o*p-a*d*p-u*o*h+a*f*h,v=g*f*c-l*d*c-g*o*p+s*d*p+l*o*h-s*f*h,B=l*m*c-g*u*c+g*a*p-s*m*p-l*a*h+s*u*h,b=g*u*o-l*m*o-g*a*f+s*m*f+l*a*d-s*u*d,C=t*y+i*v+A*B+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return e[0]=y*S,e[1]=(m*f*r-u*d*r-m*A*p+i*d*p+u*A*h-i*f*h)*S,e[2]=(a*d*r-m*o*r+m*A*c-i*d*c-a*A*h+i*o*h)*S,e[3]=(u*o*r-a*f*r-u*A*c+i*f*c+a*A*p-i*o*p)*S,e[4]=v*S,e[5]=(l*d*r-g*f*r+g*A*p-t*d*p-l*A*h+t*f*h)*S,e[6]=(g*o*r-s*d*r-g*A*c+t*d*c+s*A*h-t*o*h)*S,e[7]=(s*f*r-l*o*r+l*A*c-t*f*c-s*A*p+t*o*p)*S,e[8]=B*S,e[9]=(g*u*r-l*m*r-g*i*p+t*m*p+l*i*h-t*u*h)*S,e[10]=(s*m*r-g*a*r+g*i*c-t*m*c-s*i*h+t*a*h)*S,e[11]=(l*a*r-s*u*r-l*i*c+t*u*c+s*i*p-t*a*p)*S,e[12]=b*S,e[13]=(l*m*A-g*u*A+g*i*f-t*m*f-l*i*d+t*u*d)*S,e[14]=(g*a*A-s*m*A-g*i*o+t*m*o+s*i*d-t*a*d)*S,e[15]=(s*u*A-l*a*A+l*i*o-t*u*o-s*i*f+t*a*f)*S,this}scale(e){const t=this.elements,i=e.x,A=e.y,r=e.z;return t[0]*=i,t[4]*=A,t[8]*=r,t[1]*=i,t[5]*=A,t[9]*=r,t[2]*=i,t[6]*=A,t[10]*=r,t[3]*=i,t[7]*=A,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],A=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,A))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),A=Math.sin(t),r=1-i,s=e.x,a=e.y,o=e.z,c=r*s,l=r*a;return this.set(c*s+i,c*a-A*o,c*o+A*a,0,c*a+A*o,l*a+i,l*o-A*s,0,c*o-A*a,l*o+A*s,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,A,r,s){return this.set(1,i,r,0,e,1,s,0,t,A,1,0,0,0,0,1),this}compose(e,t,i){const A=this.elements,r=t._x,s=t._y,a=t._z,o=t._w,c=r+r,l=s+s,u=a+a,f=r*c,p=r*l,g=r*u,m=s*l,d=s*u,h=a*u,y=o*c,v=o*l,B=o*u,b=i.x,C=i.y,S=i.z;return A[0]=(1-(m+h))*b,A[1]=(p+B)*b,A[2]=(g-v)*b,A[3]=0,A[4]=(p-B)*C,A[5]=(1-(f+h))*C,A[6]=(d+y)*C,A[7]=0,A[8]=(g+v)*S,A[9]=(d-y)*S,A[10]=(1-(f+m))*S,A[11]=0,A[12]=e.x,A[13]=e.y,A[14]=e.z,A[15]=1,this}decompose(e,t,i){const A=this.elements;let r=Ar.set(A[0],A[1],A[2]).length();const s=Ar.set(A[4],A[5],A[6]).length(),a=Ar.set(A[8],A[9],A[10]).length();this.determinant()<0&&(r=-r),e.x=A[12],e.y=A[13],e.z=A[14],Nn.copy(this);const c=1/r,l=1/s,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=l,Nn.elements[5]*=l,Nn.elements[6]*=l,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),i.x=r,i.y=s,i.z=a,this}makePerspective(e,t,i,A,r,s,a=Si){const o=this.elements,c=2*r/(t-e),l=2*r/(i-A),u=(t+e)/(t-e),f=(i+A)/(i-A);let p,g;if(a===Si)p=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(a===To)p=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,A,r,s,a=Si){const o=this.elements,c=1/(t-e),l=1/(i-A),u=1/(s-r),f=(t+e)*c,p=(i+A)*l;let g,m;if(a===Si)g=(s+r)*u,m=-2*u;else if(a===To)g=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=m,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let A=0;A<16;A++)if(t[A]!==i[A])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ar=new O,Nn=new Pt,wE=new O(0,0,0),EE=new O(1,1,1),Gi=new O,ba=new O,wn=new O,uh=new Pt,fh=new lA;class Ii{constructor(e=0,t=0,i=0,A=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=A}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,A=this._order){return this._x=e,this._y=t,this._z=i,this._order=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const A=e.elements,r=A[0],s=A[4],a=A[8],o=A[1],c=A[5],l=A[9],u=A[2],f=A[6],p=A[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-cn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ME=0;const dh=new O,rr=new lA,vi=new Pt,Pa=new O,Ds=new O,_E=new O,yE=new lA,hh=new O(1,0,0),ph=new O(0,1,0),gh=new O(0,0,1),mh={type:"added"},BE={type:"removed"},sr={type:"childadded",child:null},Gc={type:"childremoved",child:null};class sn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new O,t=new Ii,i=new lA,A=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:A},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Oe}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pa.copy(e):Pa.set(e,t,i);const A=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ds,Pa,this.up):vi.lookAt(Pa,Ds,this.up),this.quaternion.setFromRotationMatrix(vi),A&&(vi.extractRotation(A.matrixWorld),rr.setFromRotationMatrix(vi),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mh),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(BE),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mh),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,A=this.children.length;i<A;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,_E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,A=t.length;i<A;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,A=t.length;i<A;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,A=t.length;i<A;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const A=this.children;for(let r=0,s=A.length;r<s;r++){const a=A[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const A={};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.castShadow===!0&&(A.castShadow=!0),this.receiveShadow===!0&&(A.receiveShadow=!0),this.visible===!1&&(A.visible=!1),this.frustumCulled===!1&&(A.frustumCulled=!1),this.renderOrder!==0&&(A.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(A.userData=this.userData),A.layers=this.layers.mask,A.matrix=this.matrix.toArray(),A.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(A.matrixAutoUpdate=!1),this.isInstancedMesh&&(A.type="InstancedMesh",A.count=this.count,A.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(A.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(A.type="BatchedMesh",A.perObjectFrustumCulled=this.perObjectFrustumCulled,A.sortObjects=this.sortObjects,A.drawRanges=this._drawRanges,A.reservedRanges=this._reservedRanges,A.visibility=this._visibility,A.active=this._active,A.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),A.maxGeometryCount=this._maxGeometryCount,A.maxVertexCount=this._maxVertexCount,A.maxIndexCount=this._maxIndexCount,A.geometryInitialized=this._geometryInitialized,A.geometryCount=this._geometryCount,A.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(A.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(A.boundingSphere={center:A.boundingSphere.center.toArray(),radius:A.boundingSphere.radius}),this.boundingBox!==null&&(A.boundingBox={min:A.boundingBox.min.toArray(),max:A.boundingBox.max.toArray()}));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?A.background=this.background.toJSON():this.background.isTexture&&(A.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(A.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){A.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let c=0,l=o.length;c<l;c++){const u=o[c];r(e.shapes,u)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(A.bindMode=this.bindMode,A.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),A.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(r(e.materials,this.material[o]));A.material=a}else A.material=r(e.materials,this.material);if(this.children.length>0){A.children=[];for(let a=0;a<this.children.length;a++)A.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){A.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];A.animations.push(r(e.animations,o))}}if(t){const a=s(e.geometries),o=s(e.materials),c=s(e.textures),l=s(e.images),u=s(e.shapes),f=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=A,i;function s(a){const o=[];for(const c in a){const l=a[c];delete l.metadata,o.push(l)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const A=e.children[i];this.add(A.clone())}return this}}sn.DEFAULT_UP=new O(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new O,xi=new O,Hc=new O,wi=new O,ar=new O,or=new O,vh=new O,Wc=new O,Yc=new O,Vc=new O;class oi{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,A){A.subVectors(i,t),kn.subVectors(e,t),A.cross(kn);const r=A.lengthSq();return r>0?A.multiplyScalar(1/Math.sqrt(r)):A.set(0,0,0)}static getBarycoord(e,t,i,A,r){kn.subVectors(A,t),xi.subVectors(i,t),Hc.subVectors(e,t);const s=kn.dot(kn),a=kn.dot(xi),o=kn.dot(Hc),c=xi.dot(xi),l=xi.dot(Hc),u=s*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*o-a*l)*f,g=(s*l-a*o)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,A){return this.getBarycoord(e,t,i,A,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,A,r,s,a,o){return this.getBarycoord(e,t,i,A,wi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,wi.x),o.addScaledVector(s,wi.y),o.addScaledVector(a,wi.z),o)}static isFrontFacing(e,t,i,A){return kn.subVectors(i,t),xi.subVectors(e,t),kn.cross(xi).dot(A)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,A){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[A]),this}setFromAttributeAndIndices(e,t,i,A){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,A),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),kn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,A,r){return oi.getInterpolation(e,this.a,this.b,this.c,t,i,A,r)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,A=this.b,r=this.c;let s,a;ar.subVectors(A,i),or.subVectors(r,i),Wc.subVectors(e,i);const o=ar.dot(Wc),c=or.dot(Wc);if(o<=0&&c<=0)return t.copy(i);Yc.subVectors(e,A);const l=ar.dot(Yc),u=or.dot(Yc);if(l>=0&&u<=l)return t.copy(A);const f=o*u-l*c;if(f<=0&&o>=0&&l<=0)return s=o/(o-l),t.copy(i).addScaledVector(ar,s);Vc.subVectors(e,r);const p=ar.dot(Vc),g=or.dot(Vc);if(g>=0&&p<=g)return t.copy(r);const m=p*c-o*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(or,a);const d=l*g-p*u;if(d<=0&&u-l>=0&&p-g>=0)return vh.subVectors(r,A),a=(u-l)/(u-l+(p-g)),t.copy(A).addScaledVector(vh,a);const h=1/(d+m+f);return s=m*h,a=f*h,t.copy(i).addScaledVector(ar,s).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function jc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const A=e;A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,A=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,A),this}setHSL(e,t,i,A=ut.workingColorSpace){if(e=lE(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=jc(s,r,e+1/3),this.g=jc(s,r,e),this.b=jc(s,r,e-1/3)}return ut.toWorkingColorSpace(this,A),this}setStyle(e,t=Ai){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let A;if(A=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=A[1],a=A[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(A=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=A[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){const i=$g[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=Qc(e.r),this.g=Qc(e.g),this.b=Qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return ut.fromWorkingColorSpace(Jt.copy(this),e),Math.round(cn(Jt.r*255,0,255))*65536+Math.round(cn(Jt.g*255,0,255))*256+Math.round(cn(Jt.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,A=Jt.g,r=Jt.b,s=Math.max(i,A,r),a=Math.min(i,A,r);let o,c;const l=(a+s)/2;if(a===s)o=0,c=0;else{const u=s-a;switch(c=l<=.5?u/(s+a):u/(2-s-a),s){case i:o=(A-r)/u+(A<r?6:0);break;case A:o=(r-i)/u+2;break;case r:o=(i-A)/u+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ai){ut.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,A=Jt.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${A.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(A*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ta);const i=Ic(Hi.h,Ta.h,t),A=Ic(Hi.s,Ta.s,t),r=Ic(Hi.l,Ta.l,t);return this.setHSL(i,A,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,A=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*A,this.g=r[1]*t+r[4]*i+r[7]*A,this.b=r[2]*t+r[5]*i+r[8]*A,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new et;et.NAMES=$g;let CE=0;class ms extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Wr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=IA,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$A,this.stencilZFail=$A,this.stencilZPass=$A,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const A=this[t];if(A===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(i):A&&A.isVector3&&i&&i.isVector3?A.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eu&&(i.blendSrc=this.blendSrc),this.blendDst!==tu&&(i.blendDst=this.blendDst),this.blendEquation!==IA&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$A&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$A&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$A&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function A(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=A(e.textures),s=A(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const A=t.length;i=new Array(A);for(let r=0;r!==A;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wu extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new O,Ia=new it;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nA,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let A=0,r=this.itemSize;A<r;A++)this.array[e+A]=t.array[i+A];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,A){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),A=on(A,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=A,this}setXYZW(e,t,i,A,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),A=on(A,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=A,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}}class em extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tm extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dn extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let SE=0;const Pn=new Pt,Kc=new sn,cr=new O,En=new ua,bs=new ua,Wt=new O;class $n extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?tm:em)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const A=this.attributes.tangent;return A!==void 0&&(A.transformDirection(e),A.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=[];for(let i=0,A=e.length;i<A;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,A=t.length;i<A;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(En.min,bs.min),En.expandByPoint(Wt),Wt.addVectors(En.max,bs.max),En.expandByPoint(Wt)):(En.expandByPoint(bs.min),En.expandByPoint(bs.max))}En.getCenter(i);let A=0;for(let r=0,s=e.count;r<s;r++)Wt.fromBufferAttribute(e,r),A=Math.max(A,i.distanceToSquared(Wt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],o=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Wt.fromBufferAttribute(a,c),o&&(cr.fromBufferAttribute(e,c),Wt.add(cr)),A=Math.max(A,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(A),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,A=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let Q=0;Q<i.count;Q++)a[Q]=new O,o[Q]=new O;const c=new O,l=new O,u=new O,f=new it,p=new it,g=new it,m=new O,d=new O;function h(Q,M,w){c.fromBufferAttribute(i,Q),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,w),f.fromBufferAttribute(r,Q),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,w),l.sub(c),u.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(m.copy(l).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),d.copy(u).multiplyScalar(p.x).addScaledVector(l,-g.x).multiplyScalar(P),a[Q].add(m),a[M].add(m),a[w].add(m),o[Q].add(d),o[M].add(d),o[w].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let Q=0,M=y.length;Q<M;++Q){const w=y[Q],P=w.start,G=w.count;for(let L=P,k=P+G;L<k;L+=3)h(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new O,B=new O,b=new O,C=new O;function S(Q){b.fromBufferAttribute(A,Q),C.copy(b);const M=a[Q];v.copy(M),v.sub(b.multiplyScalar(b.dot(M))).normalize(),B.crossVectors(C,M);const P=B.dot(o[Q])<0?-1:1;s.setXYZW(Q,v.x,v.y,v.z,P)}for(let Q=0,M=y.length;Q<M;++Q){const w=y[Q],P=w.start,G=w.count;for(let L=P,k=P+G;L<k;L+=3)S(e.getX(L+0)),S(e.getX(L+1)),S(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const A=new O,r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);A.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,d),l.subVectors(s,r),u.subVectors(A,r),l.cross(u),a.fromBufferAttribute(i,g),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(l),o.add(l),c.add(l),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)A.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),l.subVectors(s,r),u.subVectors(A,r),l.cross(u),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,o){const c=a.array,l=a.itemSize,u=a.normalized,f=new c.constructor(o.length*l);let p=0,g=0;for(let m=0,d=o.length;m<d;m++){a.isInterleavedBufferAttribute?p=o[m]*a.data.stride+a.offset:p=o[m]*l;for(let h=0;h<l;h++)f[g++]=c[p++]}return new Ln(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,A=this.attributes;for(const a in A){const o=A[a],c=e(o,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const o=[],c=r[a];for(let l=0,u=c.length;l<u;l++){const f=c[l],p=e(f,i);o.push(p)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const A={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],l=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];l.push(p.toJSON(e.data))}l.length>0&&(A[o]=l,r=!0)}r&&(e.data.morphAttributes=A,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const A=e.attributes;for(const c in A){const l=A[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],u=r[c];for(let f=0,p=u.length;f<p;f++)l.push(u[f].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xh=new Pt,xA=new Gu,Ra=new ic,wh=new O,lr=new O,ur=new O,fr=new O,qc=new O,Qa=new O,Ua=new it,La=new it,Fa=new it,Eh=new O,Mh=new O,_h=new O,Oa=new O,Na=new O;class Kn extends sn{constructor(e=new $n,t=new Wu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const A=t[i[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=A.length;r<s;r++){const a=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,A=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(A,e);const a=this.morphTargetInfluences;if(r&&a){Qa.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const l=a[o],u=r[o];l!==0&&(qc.fromBufferAttribute(u,e),s?Qa.addScaledVector(qc,l):Qa.addScaledVector(qc.sub(t),l))}t.add(Qa)}return t}raycast(e,t){const i=this.geometry,A=this.material,r=this.matrixWorld;A!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),xA.copy(e.ray).recast(e.near),!(Ra.containsPoint(xA.origin)===!1&&(xA.intersectSphere(Ra,wh)===null||xA.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(xh.copy(r).invert(),xA.copy(e.ray).applyMatrix4(xh),!(i.boundingBox!==null&&xA.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xA)))}_computeIntersections(e,t,i){let A;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=f.length;g<m;g++){const d=f[g],h=s[d.materialIndex],y=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let B=y,b=v;B<b;B+=3){const C=a.getX(B),S=a.getX(B+1),Q=a.getX(B+2);A=ka(this,h,e,i,c,l,u,C,S,Q),A&&(A.faceIndex=Math.floor(B/3),A.face.materialIndex=d.materialIndex,t.push(A))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let d=g,h=m;d<h;d+=3){const y=a.getX(d),v=a.getX(d+1),B=a.getX(d+2);A=ka(this,s,e,i,c,l,u,y,v,B),A&&(A.faceIndex=Math.floor(d/3),t.push(A))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,m=f.length;g<m;g++){const d=f[g],h=s[d.materialIndex],y=Math.max(d.start,p.start),v=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let B=y,b=v;B<b;B+=3){const C=B,S=B+1,Q=B+2;A=ka(this,h,e,i,c,l,u,C,S,Q),A&&(A.faceIndex=Math.floor(B/3),A.face.materialIndex=d.materialIndex,t.push(A))}}else{const g=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let d=g,h=m;d<h;d+=3){const y=d,v=d+1,B=d+2;A=ka(this,s,e,i,c,l,u,y,v,B),A&&(A.faceIndex=Math.floor(d/3),t.push(A))}}}}function DE(n,e,t,i,A,r,s,a){let o;if(e.side===un?o=i.intersectTriangle(s,r,A,!0,a):o=i.intersectTriangle(A,r,s,e.side===Ti,a),o===null)return null;Na.copy(a),Na.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Na);return c<t.near||c>t.far?null:{distance:c,point:Na.clone(),object:n}}function ka(n,e,t,i,A,r,s,a,o,c){n.getVertexPosition(a,lr),n.getVertexPosition(o,ur),n.getVertexPosition(c,fr);const l=DE(n,e,t,i,lr,ur,fr,Oa);if(l){A&&(Ua.fromBufferAttribute(A,a),La.fromBufferAttribute(A,o),Fa.fromBufferAttribute(A,c),l.uv=oi.getInterpolation(Oa,lr,ur,fr,Ua,La,Fa,new it)),r&&(Ua.fromBufferAttribute(r,a),La.fromBufferAttribute(r,o),Fa.fromBufferAttribute(r,c),l.uv1=oi.getInterpolation(Oa,lr,ur,fr,Ua,La,Fa,new it)),s&&(Eh.fromBufferAttribute(s,a),Mh.fromBufferAttribute(s,o),_h.fromBufferAttribute(s,c),l.normal=oi.getInterpolation(Oa,lr,ur,fr,Eh,Mh,_h,new O),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:o,c,normal:new O,materialIndex:0};oi.getNormal(lr,ur,fr,u.normal),l.face=u}return l}class vs extends $n{constructor(e=1,t=1,i=1,A=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:A,heightSegments:r,depthSegments:s};const a=this;A=Math.floor(A),r=Math.floor(r),s=Math.floor(s);const o=[],c=[],l=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,s,r,0),g("z","y","x",1,-1,i,t,-e,s,r,1),g("x","z","y",1,1,e,i,t,A,s,2),g("x","z","y",1,-1,e,i,-t,A,s,3),g("x","y","z",1,-1,e,t,i,A,r,4),g("x","y","z",-1,-1,e,t,-i,A,r,5),this.setIndex(o),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(l,3)),this.setAttribute("uv",new dn(u,2));function g(m,d,h,y,v,B,b,C,S,Q,M){const w=B/S,P=b/Q,G=B/2,L=b/2,k=C/2,q=S+1,Y=Q+1;let te=0,W=0;const ce=new O;for(let ve=0;ve<Y;ve++){const xe=ve*P-L;for(let Ue=0;Ue<q;Ue++){const At=Ue*w-G;ce[m]=At*y,ce[d]=xe*v,ce[h]=k,c.push(ce.x,ce.y,ce.z),ce[m]=0,ce[d]=0,ce[h]=C>0?1:-1,l.push(ce.x,ce.y,ce.z),u.push(Ue/S),u.push(1-ve/Q),te+=1}}for(let ve=0;ve<Q;ve++)for(let xe=0;xe<S;xe++){const Ue=f+xe+q*ve,At=f+xe+q*(ve+1),V=f+(xe+1)+q*(ve+1),ne=f+(xe+1)+q*ve;o.push(Ue,At,ne),o.push(At,V,ne),W+=6}a.addGroup(p,W,M),p+=W,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const A=n[t][i];A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)?A.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=A.clone():Array.isArray(A)?e[t][i]=A.slice():e[t][i]=A}}return e}function An(n){const e={};for(let t=0;t<n.length;t++){const i=us(n[t]);for(const A in i)e[A]=i[A]}return e}function bE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const PE={clone:us,merge:An};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class uA extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=IE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=bE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const A in this.uniforms){const s=this.uniforms[A].value;s&&s.isTexture?t.uniforms[A]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[A]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[A]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[A]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[A]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[A]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[A]={type:"m4",value:s.toArray()}:t.uniforms[A]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const A in this.extensions)this.extensions[A]===!0&&(i[A]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class im extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new O,yh=new it,Bh=new it;class yn extends im{constructor(e=50,t=1,i=.1,A=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=A,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=su*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return su*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,yh,Bh),t.subVectors(Bh,yh)}setViewOffset(e,t,i,A,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tc*.5*this.fov)/this.zoom,i=2*t,A=this.aspect*i,r=-.5*A;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;r+=s.offsetX*A/o,t-=s.offsetY*i/c,A*=s.width/o,i*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+A,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,hr=1;class RE extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const A=new yn(dr,hr,e,t);A.layers=this.layers,this.add(A);const r=new yn(dr,hr,e,t);r.layers=this.layers,this.add(r);const s=new yn(dr,hr,e,t);s.layers=this.layers,this.add(s);const a=new yn(dr,hr,e,t);a.layers=this.layers,this.add(a);const o=new yn(dr,hr,e,t);o.layers=this.layers,this.add(o);const c=new yn(dr,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,A,r,s,a,o]=t;for(const c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),A.up.set(0,1,0),A.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),A.up.set(0,-1,0),A.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:A}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,A),e.render(t,r),e.setRenderTarget(i,1,A),e.render(t,s),e.setRenderTarget(i,2,A),e.render(t,a),e.setRenderTarget(i,3,A),e.render(t,o),e.setRenderTarget(i,4,A),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,A),e.render(t,l),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Am extends fn{constructor(e,t,i,A,r,s,a,o,c,l){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,A,r,s,a,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QE extends KA{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},A=[i,i,i,i,i,i];this.texture=new Am(A,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},A=new vs(5,5,5),r=new uA({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:AA});r.uniforms.tEquirect.value=t;const s=new Kn(A,r),a=t.minFilter;return t.minFilter===LA&&(t.minFilter=Yn),new RE(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,A){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,A);e.setRenderTarget(r)}}const Xc=new O,UE=new O,LE=new Oe;class bA{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,A){return this.normal.set(e,t,i),this.constant=A,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const A=Xc.subVectors(i,t).cross(UE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(A,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xc),A=this.normal.dot(i);if(A===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/A;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||LE.getNormalMatrix(e),A=this.coplanarPoint(Xc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-A.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wA=new ic,za=new O;class rm{constructor(e=new bA,t=new bA,i=new bA,A=new bA,r=new bA,s=new bA){this.planes=[e,t,i,A,r,s]}set(e,t,i,A,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(A),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){const i=this.planes,A=e.elements,r=A[0],s=A[1],a=A[2],o=A[3],c=A[4],l=A[5],u=A[6],f=A[7],p=A[8],g=A[9],m=A[10],d=A[11],h=A[12],y=A[13],v=A[14],B=A[15];if(i[0].setComponents(o-r,f-c,d-p,B-h).normalize(),i[1].setComponents(o+r,f+c,d+p,B+h).normalize(),i[2].setComponents(o+s,f+l,d+g,B+y).normalize(),i[3].setComponents(o-s,f-l,d-g,B-y).normalize(),i[4].setComponents(o-a,f-u,d-m,B-v).normalize(),t===Si)i[5].setComponents(o+a,f+u,d+m,B+v).normalize();else if(t===To)i[5].setComponents(a,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wA.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wA.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wA)}intersectsSprite(e){return wA.center.set(0,0,0),wA.radius=.7071067811865476,wA.applyMatrix4(e.matrixWorld),this.intersectsSphere(wA)}intersectsSphere(e){const t=this.planes,i=e.center,A=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<A)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const A=t[i];if(za.x=A.normal.x>0?e.max.x:e.min.x,za.y=A.normal.y>0?e.max.y:e.min.y,za.z=A.normal.z>0?e.max.z:e.min.z,A.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sm(){let n=null,e=!1,t=null,i=null;function A(r,s){t(r,s),i=n.requestAnimationFrame(A)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(A),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function FE(n){const e=new WeakMap;function t(a,o){const c=a.array,l=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(o,f),n.bufferData(o,c,l),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,o,c){const l=o.array,u=o._updateRange,f=o.updateRanges;if(n.bindBuffer(c,a),u.count===-1&&f.length===0&&n.bufferSubData(c,0,l),f.length!==0){for(let p=0,g=f.length;p<g;p++){const m=f[p];n.bufferSubData(c,m.start*l.BYTES_PER_ELEMENT,l,m.start,m.count)}o.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(c,u.offset*l.BYTES_PER_ELEMENT,l,u.offset,u.count),u.count=-1),o.onUploadCallback()}function A(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=e.get(a);o&&(n.deleteBuffer(o.buffer),e.delete(a))}function s(a,o){if(a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,o));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,o),c.version=a.version}}return{get:A,remove:r,update:s}}class fa extends $n{constructor(e=1,t=1,i=1,A=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:A};const r=e/2,s=t/2,a=Math.floor(i),o=Math.floor(A),c=a+1,l=o+1,u=e/a,f=t/o,p=[],g=[],m=[],d=[];for(let h=0;h<l;h++){const y=h*f-s;for(let v=0;v<c;v++){const B=v*u-r;g.push(B,-y,0),m.push(0,0,1),d.push(v/a),d.push(1-h/o)}}for(let h=0;h<o;h++)for(let y=0;y<a;y++){const v=y+c*h,B=y+c*(h+1),b=y+1+c*(h+1),C=y+1+c*h;p.push(v,B,C),p.push(B,b,C)}this.setIndex(p),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var OE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,KE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,aM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,__=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:OE,alphahash_pars_fragment:NE,alphamap_fragment:kE,alphamap_pars_fragment:zE,alphatest_fragment:GE,alphatest_pars_fragment:HE,aomap_fragment:WE,aomap_pars_fragment:YE,batching_pars_vertex:VE,batching_vertex:jE,begin_vertex:KE,beginnormal_vertex:qE,bsdfs:XE,iridescence_fragment:JE,bumpmap_pars_fragment:ZE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:AM,color_pars_vertex:rM,color_vertex:sM,common:aM,cube_uv_reflection_fragment:oM,defaultnormal_vertex:cM,displacementmap_pars_vertex:lM,displacementmap_vertex:uM,emissivemap_fragment:fM,emissivemap_pars_fragment:dM,colorspace_fragment:hM,colorspace_pars_fragment:pM,envmap_fragment:gM,envmap_common_pars_fragment:mM,envmap_pars_fragment:vM,envmap_pars_vertex:xM,envmap_physical_pars_fragment:PM,envmap_vertex:wM,fog_vertex:EM,fog_pars_vertex:MM,fog_fragment:_M,fog_pars_fragment:yM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:CM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:DM,lights_pars_begin:bM,lights_toon_fragment:TM,lights_toon_pars_fragment:IM,lights_phong_fragment:RM,lights_phong_pars_fragment:QM,lights_physical_fragment:UM,lights_physical_pars_fragment:LM,lights_fragment_begin:FM,lights_fragment_maps:OM,lights_fragment_end:NM,logdepthbuf_fragment:kM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:HM,map_fragment:WM,map_pars_fragment:YM,map_particle_fragment:VM,map_particle_pars_fragment:jM,metalnessmap_fragment:KM,metalnessmap_pars_fragment:qM,morphinstance_vertex:XM,morphcolor_vertex:JM,morphnormal_vertex:ZM,morphtarget_pars_vertex:$M,morphtarget_vertex:e_,normal_fragment_begin:t_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:A_,normal_vertex:r_,normalmap_pars_fragment:s_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:o_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:l_,opaque_fragment:u_,packing:f_,premultiplied_alpha_fragment:d_,project_vertex:h_,dithering_fragment:p_,dithering_pars_fragment:g_,roughnessmap_fragment:m_,roughnessmap_pars_fragment:v_,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:w_,shadowmap_vertex:E_,shadowmask_pars_fragment:M_,skinbase_vertex:__,skinning_pars_vertex:y_,skinning_vertex:B_,skinnormal_vertex:C_,specularmap_fragment:S_,specularmap_pars_fragment:D_,tonemapping_fragment:b_,tonemapping_pars_fragment:P_,transmission_fragment:T_,transmission_pars_fragment:I_,uv_pars_fragment:R_,uv_pars_vertex:Q_,uv_vertex:U_,worldpos_vertex:L_,background_vert:F_,background_frag:O_,backgroundCube_vert:N_,backgroundCube_frag:k_,cube_vert:z_,cube_frag:G_,depth_vert:H_,depth_frag:W_,distanceRGBA_vert:Y_,distanceRGBA_frag:V_,equirect_vert:j_,equirect_frag:K_,linedashed_vert:q_,linedashed_frag:X_,meshbasic_vert:J_,meshbasic_frag:Z_,meshlambert_vert:$_,meshlambert_frag:e4,meshmatcap_vert:t4,meshmatcap_frag:n4,meshnormal_vert:i4,meshnormal_frag:A4,meshphong_vert:r4,meshphong_frag:s4,meshphysical_vert:a4,meshphysical_frag:o4,meshtoon_vert:c4,meshtoon_frag:l4,points_vert:u4,points_frag:f4,shadow_vert:d4,shadow_frag:h4,sprite_vert:p4,sprite_frag:g4},oe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ai={basic:{uniforms:An([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:An([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:An([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:An([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:An([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:An([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:An([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:An([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:An([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:An([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:An([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:An([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:An([oe.lights,oe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ai.physical={uniforms:An([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ga={r:0,b:0,g:0},EA=new Ii,m4=new Pt;function v4(n,e,t,i,A,r,s){const a=new et(0);let o=r===!0?0:1,c,l,u=null,f=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function m(y){let v=!1;const B=g(y);B===null?h(a,o):B&&B.isColor&&(h(B,1),v=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(y,v){const B=g(v);B&&(B.isCubeTexture||B.mapping===ec)?(l===void 0&&(l=new Kn(new vs(1,1,1),new uA({name:"BackgroundCubeMaterial",uniforms:us(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),A.update(l)),EA.copy(v.backgroundRotation),EA.x*=-1,EA.y*=-1,EA.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(EA.y*=-1,EA.z*=-1),l.material.uniforms.envMap.value=B,l.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(m4.makeRotationFromEuler(EA)),l.material.toneMapped=ut.getTransfer(B.colorSpace)!==vt,(u!==B||f!==B.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=B,f=B.version,p=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):B&&B.isTexture&&(c===void 0&&(c=new Kn(new fa(2,2),new uA({name:"BackgroundMaterial",uniforms:us(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),A.update(c)),c.material.uniforms.t2D.value=B,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ut.getTransfer(B.colorSpace)!==vt,B.matrixAutoUpdate===!0&&B.updateMatrix(),c.material.uniforms.uvTransform.value.copy(B.matrix),(u!==B||f!==B.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=B,f=B.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,v){y.getRGB(Ga,nm(n)),i.buffers.color.setClear(Ga.r,Ga.g,Ga.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),o=v,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,h(a,o)},render:m,addToRenderList:d}}function x4(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},A=f(null);let r=A,s=!1;function a(w,P,G,L,k){let q=!1;const Y=u(L,G,P);r!==Y&&(r=Y,c(r.object)),q=p(w,L,G,k),q&&g(w,L,G,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,B(w,P,G,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function o(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function l(w){return n.deleteVertexArray(w)}function u(w,P,G){const L=G.wireframe===!0;let k=i[w.id];k===void 0&&(k={},i[w.id]=k);let q=k[P.id];q===void 0&&(q={},k[P.id]=q);let Y=q[L];return Y===void 0&&(Y=f(o()),q[L]=Y),Y}function f(w){const P=[],G=[],L=[];for(let k=0;k<t;k++)P[k]=0,G[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:L,object:w,attributes:{},index:null}}function p(w,P,G,L){const k=r.attributes,q=P.attributes;let Y=0;const te=G.getAttributes();for(const W in te)if(te[W].location>=0){const ve=k[W];let xe=q[W];if(xe===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),ve===void 0||ve.attribute!==xe||xe&&ve.data!==xe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function g(w,P,G,L){const k={},q=P.attributes;let Y=0;const te=G.getAttributes();for(const W in te)if(te[W].location>=0){let ve=q[W];ve===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor));const xe={};xe.attribute=ve,ve&&ve.data&&(xe.data=ve.data),k[W]=xe,Y++}r.attributes=k,r.attributesNum=Y,r.index=L}function m(){const w=r.newAttributes;for(let P=0,G=w.length;P<G;P++)w[P]=0}function d(w){h(w,0)}function h(w,P){const G=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;G[w]=1,L[w]===0&&(n.enableVertexAttribArray(w),L[w]=1),k[w]!==P&&(n.vertexAttribDivisor(w,P),k[w]=P)}function y(){const w=r.newAttributes,P=r.enabledAttributes;for(let G=0,L=P.length;G<L;G++)P[G]!==w[G]&&(n.disableVertexAttribArray(G),P[G]=0)}function v(w,P,G,L,k,q,Y){Y===!0?n.vertexAttribIPointer(w,P,G,k,q):n.vertexAttribPointer(w,P,G,L,k,q)}function B(w,P,G,L){m();const k=L.attributes,q=G.getAttributes(),Y=P.defaultAttributeValues;for(const te in q){const W=q[te];if(W.location>=0){let ce=k[te];if(ce===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(ce=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(ce=w.instanceColor)),ce!==void 0){const ve=ce.normalized,xe=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const At=Ue.buffer,V=Ue.type,ne=Ue.bytesPerElement,ge=V===n.INT||V===n.UNSIGNED_INT||ce.gpuType===Ng;if(ce.isInterleavedBufferAttribute){const ae=ce.data,Le=ae.stride,Pe=ce.offset;if(ae.isInstancedInterleavedBuffer){for(let Ke=0;Ke<W.locationSize;Ke++)h(W.location+Ke,ae.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ke=0;Ke<W.locationSize;Ke++)d(W.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,At);for(let Ke=0;Ke<W.locationSize;Ke++)v(W.location+Ke,xe/W.locationSize,V,ve,Le*ne,(Pe+xe/W.locationSize*Ke)*ne,ge)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)h(W.location+ae,ce.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<W.locationSize;ae++)d(W.location+ae);n.bindBuffer(n.ARRAY_BUFFER,At);for(let ae=0;ae<W.locationSize;ae++)v(W.location+ae,xe/W.locationSize,V,ve,xe*ne,xe/W.locationSize*ae*ne,ge)}}else if(Y!==void 0){const ve=Y[te];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(W.location,ve);break;case 3:n.vertexAttrib3fv(W.location,ve);break;case 4:n.vertexAttrib4fv(W.location,ve);break;default:n.vertexAttrib1fv(W.location,ve)}}}}y()}function b(){Q();for(const w in i){const P=i[w];for(const G in P){const L=P[G];for(const k in L)l(L[k].object),delete L[k];delete P[G]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const P=i[w.id];for(const G in P){const L=P[G];for(const k in L)l(L[k].object),delete L[k];delete P[G]}delete i[w.id]}function S(w){for(const P in i){const G=i[P];if(G[w.id]===void 0)continue;const L=G[w.id];for(const k in L)l(L[k].object),delete L[k];delete G[w.id]}}function Q(){M(),s=!0,r!==A&&(r=A,c(r.object))}function M(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:a,reset:Q,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:m,enableAttribute:d,disableUnusedAttributes:y}}function w4(n,e,t){let i;function A(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function s(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u;p++)this.render(c[p],l[p]);else{f.multiDrawArraysWEBGL(i,c,0,l,0,u);let p=0;for(let g=0;g<u;g++)p+=l[g];t.update(p,i,1)}}function o(c,l,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],l[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,l,0,f,0,u);let g=0;for(let m=0;m<u;m++)g+=l[m];for(let m=0;m<f.length;m++)t.update(g,i,f[m])}}this.setMode=A,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function E4(n,e,t,i){let A;function r(){if(A!==void 0)return A;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");A=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function s(C){return!(C!==fi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const S=C===tc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==cA&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==nA&&!S)}function o(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const l=o(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=p>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:h,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:B,maxSamples:b}}function M4(n){const e=this;let t=null,i=0,A=!1,r=!1;const s=new bA,a=new Oe,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||A;return A=f,i=u.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=l(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,m=u.clipIntersection,d=u.clipShadows,h=n.get(u);if(!A||g===null||g.length===0||r&&!d)r?l(null):c();else{const y=r?0:i,v=y*4;let B=h.clippingState||null;o.value=B,B=l(g,f,v,p);for(let b=0;b!==v;++b)B[b]=t[b];h.clippingState=B,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(u,f,p,g){const m=u!==null?u.length:0;let d=null;if(m!==0){if(d=o.value,g!==!0||d===null){const h=p+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<h)&&(d=new Float32Array(h));for(let v=0,B=p;v!==m;++v,B+=4)s.copy(u[v]).applyMatrix4(y,a),s.normal.toArray(d,B),d[B+3]=s.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function _4(n){let e=new WeakMap;function t(s,a){return a===nu?s.mapping=ss:a===iu&&(s.mapping=as),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===nu||a===iu)if(e.has(s)){const o=e.get(s).texture;return t(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const c=new QE(o.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",A),t(c.texture,s.mapping)}else return null}}return s}function A(s){const a=s.target;a.removeEventListener("dispose",A);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class y4 extends im{constructor(e=-1,t=1,i=1,A=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=A,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,A,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,A=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=A+t,o=A-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Ch=[.125,.215,.35,.446,.526,.582],RA=20,Jc=new y4,Sh=new et;let Zc=null,$c=0,el=0,tl=!1;const PA=(1+Math.sqrt(5))/2,pr=1/PA,Dh=[new O(-PA,pr,0),new O(PA,pr,0),new O(-pr,0,PA),new O(pr,0,PA),new O(0,PA,-pr),new O(0,PA,pr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,A=100){Zc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,A,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,$c,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:tc,format:fi,colorSpace:dA,depthBuffer:!1},A=Ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B4(r)),this._blurMaterial=C4(r,e,t)}return A}_compileMaterial(e){const t=new Kn(this._lodPlanes[0],e);this._renderer.compile(t,Jc)}_sceneToCubeUV(e,t,i,A){const a=new yn(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(Sh),l.toneMapping=rA,l.autoClear=!1;const p=new Wu({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Kn(new vs,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Sh),m=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,o[h],0),a.lookAt(c[h],0,0)):y===1?(a.up.set(0,0,o[h]),a.lookAt(0,c[h],0)):(a.up.set(0,o[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Ha(A,y*v,h>2?v:0,v,v),l.setRenderTarget(A),m&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=u,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,A=e.mapping===ss||e.mapping===as;A?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const r=A?this._cubemapMaterial:this._equirectMaterial,s=new Kn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;Ha(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,Jc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const A=this._lodPlanes.length;for(let r=1;r<A;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(A-r-1)%Dh.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,A,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,A,"latitudinal",r),this._halfBlur(s,e,i,i,A,"longitudinal",r)}_halfBlur(e,t,i,A,r,s,a){const o=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Kn(this._lodPlanes[A],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*RA-1),m=r/g,d=isFinite(r)?1+Math.floor(l*m):RA;d>RA&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${RA}`);const h=[];let y=0;for(let S=0;S<RA;++S){const Q=S/m,M=Math.exp(-Q*Q/2);h.push(M),S===0?y+=M:S<d&&(y+=2*M)}for(let S=0;S<h.length;S++)h[S]=h[S]/y;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=h,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const B=this._sizeLods[A],b=3*B*(A>v-Gr?A-v+Gr:0),C=4*(this._cubeSize-B);Ha(t,b,C,3*B,2*B),o.setRenderTarget(t),o.render(u,Jc)}}function B4(n){const e=[],t=[],i=[];let A=n;const r=n-Gr+1+Ch.length;for(let s=0;s<r;s++){const a=Math.pow(2,A);t.push(a);let o=1/a;s>n-Gr?o=Ch[s-n+Gr-1]:s===0&&(o=0),i.push(o);const c=1/(a-2),l=-c,u=1+c,f=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,g=6,m=3,d=2,h=1,y=new Float32Array(m*g*p),v=new Float32Array(d*g*p),B=new Float32Array(h*g*p);for(let C=0;C<p;C++){const S=C%3*2/3-1,Q=C>2?0:-1,M=[S,Q,0,S+2/3,Q,0,S+2/3,Q+1,0,S,Q,0,S+2/3,Q+1,0,S,Q+1,0];y.set(M,m*g*C),v.set(f,d*g*C);const w=[C,C,C,C,C,C];B.set(w,h*g*C)}const b=new $n;b.setAttribute("position",new Ln(y,m)),b.setAttribute("uv",new Ln(v,d)),b.setAttribute("faceIndex",new Ln(B,h)),e.push(b),A>Gr&&A--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ph(n,e,t){const i=new KA(n,e,t);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ha(n,e,t,i,A){n.viewport.set(e,t,i,A),n.scissor.set(e,t,i,A)}function C4(n,e,t){const i=new Float32Array(RA),A=new O(0,1,0);return new uA({name:"SphericalGaussianBlur",defines:{n:RA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:A}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:AA,depthTest:!1,depthWrite:!1})}function Th(){return new uA({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:AA,depthTest:!1,depthWrite:!1})}function Ih(){return new uA({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:AA,depthTest:!1,depthWrite:!1})}function Yu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S4(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const o=a.mapping,c=o===nu||o===iu,l=o===ss||o===as;if(c||l){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new bh(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||l&&p&&A(p)?(t===null&&(t=new bh(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function A(a){let o=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&o++;return o===c}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function D4(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let A;switch(i){case"WEBGL_depth_texture":A=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":A=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":A=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":A=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:A=n.getExtension(i)}return e[i]=A,A}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const A=t(i);return A===null&&qg("THREE.WebGLRenderer: "+i+" extension not supported."),A}}}function b4(n,e,t,i){const A={},r=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const m=f.morphAttributes[g];for(let d=0,h=m.length;d<h;d++)e.remove(m[d])}f.removeEventListener("dispose",s),delete A[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return A[f.id]===!0||(f.addEventListener("dispose",s),A[f.id]=!0,t.memory.geometries++),f}function o(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let d=0,h=m.length;d<h;d++)e.update(m[d],n.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let v=0,B=y.length;v<B;v+=3){const b=y[v+0],C=y[v+1],S=y[v+2];f.push(b,C,C,S,S,b)}}else if(g!==void 0){const y=g.array;m=g.version;for(let v=0,B=y.length/3-1;v<B;v+=3){const b=v+0,C=v+1,S=v+2;f.push(b,C,C,S,S,b)}}else return;const d=new(Kg(f)?tm:em)(f,1);d.version=m;const h=r.get(u);h&&e.remove(h),r.set(u,d)}function l(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:o,getWireframeAttribute:l}}function P4(n,e,t){let i;function A(f){i=f}let r,s;function a(f){r=f.type,s=f.bytesPerElement}function o(f,p){n.drawElements(i,p,r,f*s),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*s,g),t.update(p,i,g))}function l(f,p,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(f[d]/s,p[d]);else{m.multiDrawElementsWEBGL(i,p,0,r,f,0,g);let d=0;for(let h=0;h<g;h++)d+=p[h];t.update(d,i,1)}}function u(f,p,g,m){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f.length;h++)c(f[h]/s,p[h],m[h]);else{d.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,m,0,g);let h=0;for(let y=0;y<g;y++)h+=p[y];for(let y=0;y<m.length;y++)t.update(h,i,m[y])}}this.setMode=A,this.setIndex=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function T4(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function A(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:A,update:i}}function I4(n,e,t){const i=new WeakMap,A=new qt;function r(s,a,o){const c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let M=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let B=a.attributes.position.count*v,b=1;B>e.maxTextureSize&&(b=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const C=new Float32Array(B*b*4*u),S=new Jg(C,B,b,u);S.type=nA,S.needsUpdate=!0;const Q=v*4;for(let w=0;w<u;w++){const P=d[w],G=h[w],L=y[w],k=B*b*4*w;for(let q=0;q<P.count;q++){const Y=q*Q;p===!0&&(A.fromBufferAttribute(P,q),C[k+Y+0]=A.x,C[k+Y+1]=A.y,C[k+Y+2]=A.z,C[k+Y+3]=0),g===!0&&(A.fromBufferAttribute(G,q),C[k+Y+4]=A.x,C[k+Y+5]=A.y,C[k+Y+6]=A.z,C[k+Y+7]=0),m===!0&&(A.fromBufferAttribute(L,q),C[k+Y+8]=A.x,C[k+Y+9]=A.y,C[k+Y+10]=A.z,C[k+Y+11]=L.itemSize===4?A.w:1)}}f={count:u,texture:S,size:new it(B,b)},i.set(a,f),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const g=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(n,"morphTargetBaseInfluence",g),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function R4(n,e,t,i){let A=new WeakMap;function r(o){const c=i.render.frame,l=o.geometry,u=e.get(o,l);if(A.get(u)!==c&&(e.update(u),A.set(u,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),A.get(o)!==c&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),A.set(o,c))),o.isSkinnedMesh){const f=o.skeleton;A.get(f)!==c&&(f.update(),A.set(f,c))}return u}function s(){A=new WeakMap}function a(o){const c=o.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class am extends fn{constructor(e,t,i,A,r,s,a,o,c,l=Yr){if(l!==Yr&&l!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Yr&&(i=os),i===void 0&&l===ls&&(i=cs),super(null,A,r,s,a,o,l,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=o!==void 0?o:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const om=new fn,cm=new am(1,1);cm.compareFunction=Vg;const lm=new Jg,um=new vE,fm=new Am,Rh=[],Qh=[],Uh=new Float32Array(16),Lh=new Float32Array(9),Fh=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const A=e*t;let r=Rh[A];if(r===void 0&&(r=new Float32Array(A),Rh[A]=r),e!==0){i.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(r,a)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ac(n,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function L4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function F4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function O4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Fh.set(i),n.uniformMatrix2fv(this.addr,!1,Fh),zt(t,i)}}function N4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Lh.set(i),n.uniformMatrix3fv(this.addr,!1,Lh),zt(t,i)}}function k4(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),zt(t,i)}}function z4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function G4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function H4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function W4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function Y4(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function V4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function j4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function K4(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function q4(n,e,t){const i=this.cache,A=t.allocateTextureUnit();i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A);const r=this.type===n.SAMPLER_2D_SHADOW?cm:om;t.setTexture2D(e||r,A)}function X4(n,e,t){const i=this.cache,A=t.allocateTextureUnit();i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A),t.setTexture3D(e||um,A)}function J4(n,e,t){const i=this.cache,A=t.allocateTextureUnit();i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A),t.setTextureCube(e||fm,A)}function Z4(n,e,t){const i=this.cache,A=t.allocateTextureUnit();i[0]!==A&&(n.uniform1i(this.addr,A),i[0]=A),t.setTexture2DArray(e||lm,A)}function $4(n){switch(n){case 5126:return Q4;case 35664:return U4;case 35665:return L4;case 35666:return F4;case 35674:return O4;case 35675:return N4;case 35676:return k4;case 5124:case 35670:return z4;case 35667:case 35671:return G4;case 35668:case 35672:return H4;case 35669:case 35673:return W4;case 5125:return Y4;case 36294:return V4;case 36295:return j4;case 36296:return K4;case 35678:case 36198:case 36298:case 36306:case 35682:return q4;case 35679:case 36299:case 36307:return X4;case 35680:case 36300:case 36308:case 36293:return J4;case 36289:case 36303:case 36311:case 36292:return Z4}}function ey(n,e){n.uniform1fv(this.addr,e)}function ty(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function ny(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function iy(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ay(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ry(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sy(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ay(n,e){n.uniform1iv(this.addr,e)}function oy(n,e){n.uniform2iv(this.addr,e)}function cy(n,e){n.uniform3iv(this.addr,e)}function ly(n,e){n.uniform4iv(this.addr,e)}function uy(n,e){n.uniform1uiv(this.addr,e)}function fy(n,e){n.uniform2uiv(this.addr,e)}function dy(n,e){n.uniform3uiv(this.addr,e)}function hy(n,e){n.uniform4uiv(this.addr,e)}function py(n,e,t){const i=this.cache,A=e.length,r=Ac(t,A);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let s=0;s!==A;++s)t.setTexture2D(e[s]||om,r[s])}function gy(n,e,t){const i=this.cache,A=e.length,r=Ac(t,A);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let s=0;s!==A;++s)t.setTexture3D(e[s]||um,r[s])}function my(n,e,t){const i=this.cache,A=e.length,r=Ac(t,A);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let s=0;s!==A;++s)t.setTextureCube(e[s]||fm,r[s])}function vy(n,e,t){const i=this.cache,A=e.length,r=Ac(t,A);kt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let s=0;s!==A;++s)t.setTexture2DArray(e[s]||lm,r[s])}function xy(n){switch(n){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return Ay;case 35675:return ry;case 35676:return sy;case 5124:case 35670:return ay;case 35667:case 35671:return oy;case 35668:case 35672:return cy;case 35669:case 35673:return ly;case 5125:return uy;case 36294:return fy;case 36295:return dy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return vy}}class wy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$4(t.type)}}class Ey{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xy(t.type)}}class My{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const A=this.seq;for(let r=0,s=A.length;r!==s;++r){const a=A[r];a.setValue(e,t[a.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function Oh(n,e){n.seq.push(e),n.map[e.id]=e}function _y(n,e,t){const i=n.name,A=i.length;for(nl.lastIndex=0;;){const r=nl.exec(i),s=nl.lastIndex;let a=r[1];const o=r[2]==="]",c=r[3];if(o&&(a=a|0),c===void 0||c==="["&&s+2===A){Oh(t,c===void 0?new wy(a,n,e):new Ey(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new My(a),Oh(t,u)),t=u}}}class oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let A=0;A<i;++A){const r=e.getActiveUniform(t,A),s=e.getUniformLocation(t,r.name);_y(r,s,this)}}setValue(e,t,i,A){const r=this.map[t];r!==void 0&&r.setValue(e,i,A)}setOptional(e,t,i){const A=t[i];A!==void 0&&this.setValue(e,i,A)}static upload(e,t,i,A){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,A)}}static seqWithValue(e,t){const i=[];for(let A=0,r=e.length;A!==r;++A){const s=e[A];s.id in t&&i.push(s)}return i}}function Nh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yy=37297;let By=0;function Cy(n,e){const t=n.split(`
`),i=[],A=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=A;s<r;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function Sy(n){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(n);let i;switch(e===t?i="":e===Po&&t===bo?i="LinearDisplayP3ToLinearSRGB":e===bo&&t===Po&&(i="LinearSRGBToLinearDisplayP3"),n){case dA:case nc:return[i,"LinearTransferOETF"];case Ai:case zu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function kh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),A=n.getShaderInfoLog(e).trim();if(i&&A==="")return"";const r=/ERROR: 0:(\d+)/.exec(A);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+A+`

`+Cy(n.getShaderSource(e),s)}else return A}function Dy(n,e){const t=Sy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function by(n,e){let t;switch(e){case L3:t="Linear";break;case F3:t="Reinhard";break;case O3:t="OptimizedCineon";break;case N3:t="ACESFilmic";break;case z3:t="AgX";break;case G3:t="Neutral";break;case k3:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Py(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Ty(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Iy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let A=0;A<i;A++){const r=n.getActiveAttrib(e,A),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Gs(n){return n!==""}function zh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(Ry,Uy)}const Qy=new Map;function Uy(n,e){let t=ze[e];if(t===void 0){const i=Qy.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}const Ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(n){return n.replace(Ly,Fy)}function Fy(n,e,t,i){let A="";for(let r=parseInt(e);r<parseInt(t);r++)A+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return A}function Wh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Oy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===o3?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ny(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case as:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ky(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function zy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fg:e="ENVMAP_BLENDING_MULTIPLY";break;case Q3:e="ENVMAP_BLENDING_MIX";break;case U3:e="ENVMAP_BLENDING_ADD";break}return e}function Gy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Hy(n,e,t,i){const A=n.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=Oy(t),c=Ny(t),l=ky(t),u=zy(t),f=Gy(t),p=Py(t),g=Ty(r),m=A.createProgram();let d,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),h.length>0&&(h+=`
`)):(d=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),h=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rA?"#define TONE_MAPPING":"",t.toneMapping!==rA?ze.tonemapping_pars_fragment:"",t.toneMapping!==rA?by("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Dy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),s=au(s),s=zh(s,t),s=Gh(s,t),a=au(a),a=zh(a,t),a=Gh(a,t),s=Hh(s),a=Hh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=y+d+s,B=y+h+a,b=Nh(A,A.VERTEX_SHADER,v),C=Nh(A,A.FRAGMENT_SHADER,B);A.attachShader(m,b),A.attachShader(m,C),t.index0AttributeName!==void 0?A.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&A.bindAttribLocation(m,0,"position"),A.linkProgram(m);function S(P){if(n.debug.checkShaderErrors){const G=A.getProgramInfoLog(m).trim(),L=A.getShaderInfoLog(b).trim(),k=A.getShaderInfoLog(C).trim();let q=!0,Y=!0;if(A.getProgramParameter(m,A.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(A,m,b,C);else{const te=kh(A,b,"vertex"),W=kh(A,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+A.getError()+" - VALIDATE_STATUS "+A.getProgramParameter(m,A.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+te+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||k==="")&&(Y=!1);Y&&(P.diagnostics={runnable:q,programLog:G,vertexShader:{log:L,prefix:d},fragmentShader:{log:k,prefix:h}})}A.deleteShader(b),A.deleteShader(C),Q=new oo(A,m),M=Iy(A,m)}let Q;this.getUniforms=function(){return Q===void 0&&S(this),Q};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=A.getProgramParameter(m,yy)),w},this.destroy=function(){i.releaseStatesOfProgram(this),A.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=By++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=C,this}let Wy=0;class Yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,A=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(A)===!1&&(s.add(A),A.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Vy(e),t.set(e,i)),i}}class Vy{constructor(e){this.id=Wy++,this.code=e,this.usedTimes=0}}function jy(n,e,t,i,A,r,s){const a=new Hu,o=new Yy,c=new Set,l=[],u=A.logarithmicDepthBuffer,f=A.vertexTextures;let p=A.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,w,P,G,L){const k=G.fog,q=L.geometry,Y=M.isMeshStandardMaterial?G.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),W=te&&te.mapping===ec?te.image.height:null,ce=g[M.type];M.precision!==null&&(p=A.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ve=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=ve!==void 0?ve.length:0;let Ue=0;q.morphAttributes.position!==void 0&&(Ue=1),q.morphAttributes.normal!==void 0&&(Ue=2),q.morphAttributes.color!==void 0&&(Ue=3);let At,V,ne,ge;if(ce){const ft=ai[ce];At=ft.vertexShader,V=ft.fragmentShader}else At=M.vertexShader,V=M.fragmentShader,o.update(M),ne=o.getVertexShaderID(M),ge=o.getFragmentShaderID(M);const ae=n.getRenderTarget(),Le=L.isInstancedMesh===!0,Pe=L.isBatchedMesh===!0,Ke=!!M.map,T=!!M.matcap,Fe=!!te,Ze=!!M.aoMap,_t=!!M.lightMap,be=!!M.bumpMap,tt=!!M.normalMap,qe=!!M.displacementMap,ke=!!M.emissiveMap,Rt=!!M.metalnessMap,D=!!M.roughnessMap,E=M.anisotropy>0,H=M.clearcoat>0,J=M.dispersion>0,$=M.iridescence>0,ee=M.sheen>0,Se=M.transmission>0,le=E&&!!M.anisotropyMap,ue=H&&!!M.clearcoatMap,We=H&&!!M.clearcoatNormalMap,ie=H&&!!M.clearcoatRoughnessMap,ye=$&&!!M.iridescenceMap,Je=$&&!!M.iridescenceThicknessMap,Re=ee&&!!M.sheenColorMap,fe=ee&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,$e=!!M.specularColorMap,Tt=!!M.specularIntensityMap,I=Se&&!!M.transmissionMap,he=Se&&!!M.thicknessMap,j=!!M.gradientMap,X=!!M.alphaMap,re=M.alphaTest>0,Qe=!!M.alphaHash,rt=!!M.extensions;let It=rA;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(It=n.toneMapping);const Gt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:At,fragmentShader:V,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:dA,alphaToCoverage:!!M.alphaToCoverage,map:Ke,matcap:T,envMap:Fe,envMapMode:Fe&&te.mapping,envMapCubeUVHeight:W,aoMap:Ze,lightMap:_t,bumpMap:be,normalMap:tt,displacementMap:f&&qe,emissiveMap:ke,normalMapObjectSpace:tt&&M.normalMapType===nE,normalMapTangentSpace:tt&&M.normalMapType===Yg,metalnessMap:Rt,roughnessMap:D,anisotropy:E,anisotropyMap:le,clearcoat:H,clearcoatMap:ue,clearcoatNormalMap:We,clearcoatRoughnessMap:ie,dispersion:J,iridescence:$,iridescenceMap:ye,iridescenceThicknessMap:Je,sheen:ee,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:Ye,specularColorMap:$e,specularIntensityMap:Tt,transmission:Se,transmissionMap:I,thicknessMap:he,gradientMap:j,opaque:M.transparent===!1&&M.blending===Wr&&M.alphaToCoverage===!1,alphaMap:X,alphaTest:re,alphaHash:Qe,combine:M.combine,mapUv:Ke&&m(M.map.channel),aoMapUv:Ze&&m(M.aoMap.channel),lightMapUv:_t&&m(M.lightMap.channel),bumpMapUv:be&&m(M.bumpMap.channel),normalMapUv:tt&&m(M.normalMap.channel),displacementMapUv:qe&&m(M.displacementMap.channel),emissiveMapUv:ke&&m(M.emissiveMap.channel),metalnessMapUv:Rt&&m(M.metalnessMap.channel),roughnessMapUv:D&&m(M.roughnessMap.channel),anisotropyMapUv:le&&m(M.anisotropyMap.channel),clearcoatMapUv:ue&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:We&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&m(M.sheenRoughnessMap.channel),specularMapUv:Ye&&m(M.specularMap.channel),specularColorMapUv:$e&&m(M.specularColorMap.channel),specularIntensityMapUv:Tt&&m(M.specularIntensityMap.channel),transmissionMapUv:I&&m(M.transmissionMap.channel),thicknessMapUv:he&&m(M.thicknessMap.channel),alphaMapUv:X&&m(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(tt||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(Ke||X),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:L.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:Ke&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ci,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:rt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:rt&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)w.push(P),w.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(w,M),v(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.doubleSided&&a.enable(10),w.flipSided&&a.enable(11),w.useDepthPacking&&a.enable(12),w.dithering&&a.enable(13),w.transmission&&a.enable(14),w.sheen&&a.enable(15),w.opaque&&a.enable(16),w.pointsUvs&&a.enable(17),w.decodeVideoTexture&&a.enable(18),w.alphaToCoverage&&a.enable(19),M.push(a.mask)}function B(M){const w=g[M.type];let P;if(w){const G=ai[w];P=PE.clone(G.uniforms)}else P=M.uniforms;return P}function b(M,w){let P;for(let G=0,L=l.length;G<L;G++){const k=l[G];if(k.cacheKey===w){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Hy(n,w,M,r),l.push(P)),P}function C(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function S(M){o.remove(M)}function Q(){o.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:B,acquireProgram:b,releaseProgram:C,releaseShaderCache:S,programs:l,dispose:Q}}function Ky(){let n=new WeakMap;function e(r){let s=n.get(r);return s===void 0&&(s={},n.set(r,s)),s}function t(r){n.delete(r)}function i(r,s,a){n.get(r)[s]=a}function A(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:A}}function qy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vh(){const n=[];let e=0;const t=[],i=[],A=[];function r(){e=0,t.length=0,i.length=0,A.length=0}function s(u,f,p,g,m,d){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:d},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=m,h.group=d),e++,h}function a(u,f,p,g,m,d){const h=s(u,f,p,g,m,d);p.transmission>0?i.push(h):p.transparent===!0?A.push(h):t.push(h)}function o(u,f,p,g,m,d){const h=s(u,f,p,g,m,d);p.transmission>0?i.unshift(h):p.transparent===!0?A.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||qy),i.length>1&&i.sort(f||Yh),A.length>1&&A.sort(f||Yh)}function l(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:A,init:r,push:a,unshift:o,finish:l,sort:c}}function Xy(){let n=new WeakMap;function e(i,A){const r=n.get(i);let s;return r===void 0?(s=new Vh,n.set(i,[s])):A>=r.length?(s=new Vh,r.push(s)):s=r[A],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Jy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new et};break;case"SpotLight":t={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Zy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $y=0;function eB(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tB(n){const e=new Jy,t=Zy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const A=new O,r=new Pt,s=new Pt;function a(c){let l=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,m=0,d=0,h=0,y=0,v=0,B=0,b=0,C=0,S=0;c.sort(eB);for(let M=0,w=c.length;M<w;M++){const P=c[M],G=P.color,L=P.intensity,k=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=G.r*L,u+=G.g*L,f+=G.b*L;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],L);S++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,W=t.get(P);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(G).multiplyScalar(L),Y.distance=k,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[m]=Y;const te=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,te.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[m]=te.matrix,P.castShadow){const W=t.get(P);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.spotShadow[m]=W,i.spotShadowMap[m]=q,B++}m++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(G).multiplyScalar(L),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[d]=Y,d++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const te=P.shadow,W=t.get(P);W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=P.shadow.matrix,v++}i.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(L),Y.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[h]=Y,h++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=f;const Q=i.hash;(Q.directionalLength!==p||Q.pointLength!==g||Q.spotLength!==m||Q.rectAreaLength!==d||Q.hemiLength!==h||Q.numDirectionalShadows!==y||Q.numPointShadows!==v||Q.numSpotShadows!==B||Q.numSpotMaps!==b||Q.numLightProbes!==S)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=d,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=B,i.spotShadowMap.length=B,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=B+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=S,Q.directionalLength=p,Q.pointLength=g,Q.spotLength=m,Q.rectAreaLength=d,Q.hemiLength=h,Q.numDirectionalShadows=y,Q.numPointShadows=v,Q.numSpotShadows=B,Q.numSpotMaps=b,Q.numLightProbes=S,i.version=$y++)}function o(c,l){let u=0,f=0,p=0,g=0,m=0;const d=l.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const v=c[h];if(v.isDirectionalLight){const B=i.directional[u];B.direction.setFromMatrixPosition(v.matrixWorld),A.setFromMatrixPosition(v.target.matrixWorld),B.direction.sub(A),B.direction.transformDirection(d),u++}else if(v.isSpotLight){const B=i.spot[p];B.position.setFromMatrixPosition(v.matrixWorld),B.position.applyMatrix4(d),B.direction.setFromMatrixPosition(v.matrixWorld),A.setFromMatrixPosition(v.target.matrixWorld),B.direction.sub(A),B.direction.transformDirection(d),p++}else if(v.isRectAreaLight){const B=i.rectArea[g];B.position.setFromMatrixPosition(v.matrixWorld),B.position.applyMatrix4(d),s.identity(),r.copy(v.matrixWorld),r.premultiply(d),s.extractRotation(r),B.halfWidth.set(v.width*.5,0,0),B.halfHeight.set(0,v.height*.5,0),B.halfWidth.applyMatrix4(s),B.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const B=i.point[f];B.position.setFromMatrixPosition(v.matrixWorld),B.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){const B=i.hemi[m];B.direction.setFromMatrixPosition(v.matrixWorld),B.direction.transformDirection(d),m++}}}return{setup:a,setupView:o,state:i}}function jh(n){const e=new tB(n),t=[],i=[];function A(l){c.camera=l,t.length=0,i.length=0}function r(l){t.push(l)}function s(l){i.push(l)}function a(){e.setup(t)}function o(l){e.setupView(t,l)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:A,state:c,setupLights:a,setupLightsView:o,pushLight:r,pushShadow:s}}function nB(n){let e=new WeakMap;function t(A,r=0){const s=e.get(A);let a;return s===void 0?(a=new jh(n),e.set(A,[a])):r>=s.length?(a=new jh(n),s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class iB extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AB extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aB(n,e,t){let i=new rm;const A=new it,r=new it,s=new qt,a=new iB({depthPacking:tE}),o=new AB,c={},l=t.maxTextureSize,u={[Ti]:un,[un]:Ti,[Ci]:Ci},f=new uA({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:rB,fragmentShader:sB}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new $n;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Kn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lg;let h=this.type;this.render=function(C,S,Q){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),G=n.state;G.setBlending(AA),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const L=h!==Mi&&this.type===Mi,k=h===Mi&&this.type!==Mi;for(let q=0,Y=C.length;q<Y;q++){const te=C[q],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;A.copy(W.mapSize);const ce=W.getFrameExtents();if(A.multiply(ce),r.copy(W.mapSize),(A.x>l||A.y>l)&&(A.x>l&&(r.x=Math.floor(l/ce.x),A.x=r.x*ce.x,W.mapSize.x=r.x),A.y>l&&(r.y=Math.floor(l/ce.y),A.y=r.y*ce.y,W.mapSize.y=r.y)),W.map===null||L===!0||k===!0){const xe=this.type!==Mi?{minFilter:Un,magFilter:Un}:{};W.map!==null&&W.map.dispose(),W.map=new KA(A.x,A.y,xe),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ve=W.getViewportCount();for(let xe=0;xe<ve;xe++){const Ue=W.getViewport(xe);s.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),G.viewport(s),W.updateMatrices(te,xe),i=W.getFrustum(),B(S,Q,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===Mi&&y(W,Q),W.needsUpdate=!1}h=this.type,d.needsUpdate=!1,n.setRenderTarget(M,w,P)};function y(C,S){const Q=e.update(m);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new KA(A.x,A.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(S,null,Q,f,m,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(S,null,Q,p,m,null)}function v(C,S,Q,M){let w=null;const P=Q.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)w=P;else if(w=Q.isPointLight===!0?o:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const G=w.uuid,L=S.uuid;let k=c[G];k===void 0&&(k={},c[G]=k);let q=k[L];q===void 0&&(q=w.clone(),k[L]=q,S.addEventListener("dispose",b)),w=q}if(w.visible=S.visible,w.wireframe=S.wireframe,M===Mi?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:u[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,Q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=n.properties.get(w);G.light=Q}return w}function B(C,S,Q,M,w){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===Mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld);const L=e.update(C),k=C.material;if(Array.isArray(k)){const q=L.groups;for(let Y=0,te=q.length;Y<te;Y++){const W=q[Y],ce=k[W.materialIndex];if(ce&&ce.visible){const ve=v(C,ce,M,w);C.onBeforeShadow(n,C,S,Q,L,ve,W),n.renderBufferDirect(Q,null,L,ve,C,W),C.onAfterShadow(n,C,S,Q,L,ve,W)}}}else if(k.visible){const q=v(C,k,M,w);C.onBeforeShadow(n,C,S,Q,L,q,null),n.renderBufferDirect(Q,null,L,q,C,null),C.onAfterShadow(n,C,S,Q,L,q,null)}}const G=C.children;for(let L=0,k=G.length;L<k;L++)B(G[L],S,Q,M,w)}function b(C){C.target.removeEventListener("dispose",b);for(const Q in c){const M=c[Q],w=C.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function oB(n){function e(){let I=!1;const he=new qt;let j=null;const X=new qt(0,0,0,0);return{setMask:function(re){j!==re&&!I&&(n.colorMask(re,re,re,re),j=re)},setLocked:function(re){I=re},setClear:function(re,Qe,rt,It,Gt){Gt===!0&&(re*=It,Qe*=It,rt*=It),he.set(re,Qe,rt,It),X.equals(he)===!1&&(n.clearColor(re,Qe,rt,It),X.copy(he))},reset:function(){I=!1,j=null,X.set(-1,0,0,0)}}}function t(){let I=!1,he=null,j=null,X=null;return{setTest:function(re){re?ge(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(re){he!==re&&!I&&(n.depthMask(re),he=re)},setFunc:function(re){if(j!==re){switch(re){case S3:n.depthFunc(n.NEVER);break;case D3:n.depthFunc(n.ALWAYS);break;case b3:n.depthFunc(n.LESS);break;case Co:n.depthFunc(n.LEQUAL);break;case P3:n.depthFunc(n.EQUAL);break;case T3:n.depthFunc(n.GEQUAL);break;case I3:n.depthFunc(n.GREATER);break;case R3:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=re}},setLocked:function(re){I=re},setClear:function(re){X!==re&&(n.clearDepth(re),X=re)},reset:function(){I=!1,he=null,j=null,X=null}}}function i(){let I=!1,he=null,j=null,X=null,re=null,Qe=null,rt=null,It=null,Gt=null;return{setTest:function(ft){I||(ft?ge(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(ft){he!==ft&&!I&&(n.stencilMask(ft),he=ft)},setFunc:function(ft,ei,ti){(j!==ft||X!==ei||re!==ti)&&(n.stencilFunc(ft,ei,ti),j=ft,X=ei,re=ti)},setOp:function(ft,ei,ti){(Qe!==ft||rt!==ei||It!==ti)&&(n.stencilOp(ft,ei,ti),Qe=ft,rt=ei,It=ti)},setLocked:function(ft){I=ft},setClear:function(ft){Gt!==ft&&(n.clearStencil(ft),Gt=ft)},reset:function(){I=!1,he=null,j=null,X=null,re=null,Qe=null,rt=null,It=null,Gt=null}}}const A=new e,r=new t,s=new i,a=new WeakMap,o=new WeakMap;let c={},l={},u=new WeakMap,f=[],p=null,g=!1,m=null,d=null,h=null,y=null,v=null,B=null,b=null,C=new et(0,0,0),S=0,Q=!1,M=null,w=null,P=null,G=null,L=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(te)[1]),q=Y>=1):te.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),q=Y>=2);let W=null,ce={};const ve=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Ue=new qt().fromArray(ve),At=new qt().fromArray(xe);function V(I,he,j,X){const re=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(I,Qe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<j;rt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(he+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Qe}const ne={};ne[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),A.setClear(0,0,0,1),r.setClear(1),s.setClear(0),ge(n.DEPTH_TEST),r.setFunc(Co),be(!1),tt(Dd),ge(n.CULL_FACE),Ze(AA);function ge(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function ae(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Le(I,he){return l[I]!==he?(n.bindFramebuffer(I,he),l[I]=he,I===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=he),I===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(I,he){let j=f,X=!1;if(I){j=u.get(he),j===void 0&&(j=[],u.set(he,j));const re=I.textures;if(j.length!==re.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,rt=re.length;Qe<rt;Qe++)j[Qe]=n.COLOR_ATTACHMENT0+Qe;j.length=re.length,X=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,X=!0);X&&n.drawBuffers(j)}function Ke(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const T={[IA]:n.FUNC_ADD,[l3]:n.FUNC_SUBTRACT,[u3]:n.FUNC_REVERSE_SUBTRACT};T[f3]=n.MIN,T[d3]=n.MAX;const Fe={[h3]:n.ZERO,[p3]:n.ONE,[g3]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[M3]:n.SRC_ALPHA_SATURATE,[w3]:n.DST_COLOR,[v3]:n.DST_ALPHA,[m3]:n.ONE_MINUS_SRC_COLOR,[tu]:n.ONE_MINUS_SRC_ALPHA,[E3]:n.ONE_MINUS_DST_COLOR,[x3]:n.ONE_MINUS_DST_ALPHA,[_3]:n.CONSTANT_COLOR,[y3]:n.ONE_MINUS_CONSTANT_COLOR,[B3]:n.CONSTANT_ALPHA,[C3]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(I,he,j,X,re,Qe,rt,It,Gt,ft){if(I===AA){g===!0&&(ae(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),I!==c3){if(I!==m||ft!==Q){if((d!==IA||v!==IA)&&(n.blendEquation(n.FUNC_ADD),d=IA,v=IA),ft)switch(I){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bd:n.blendFunc(n.ONE,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Td:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Td:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,y=null,B=null,b=null,C.set(0,0,0),S=0,m=I,Q=ft}return}re=re||he,Qe=Qe||j,rt=rt||X,(he!==d||re!==v)&&(n.blendEquationSeparate(T[he],T[re]),d=he,v=re),(j!==h||X!==y||Qe!==B||rt!==b)&&(n.blendFuncSeparate(Fe[j],Fe[X],Fe[Qe],Fe[rt]),h=j,y=X,B=Qe,b=rt),(It.equals(C)===!1||Gt!==S)&&(n.blendColor(It.r,It.g,It.b,Gt),C.copy(It),S=Gt),m=I,Q=!1}function _t(I,he){I.side===Ci?ae(n.CULL_FACE):ge(n.CULL_FACE);let j=I.side===un;he&&(j=!j),be(j),I.blending===Wr&&I.transparent===!1?Ze(AA):Ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),A.setMask(I.colorWrite);const X=I.stencilWrite;s.setTest(X),X&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ke(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function tt(I){I!==s3?(ge(n.CULL_FACE),I!==w&&(I===Dd?n.cullFace(n.BACK):I===a3?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),w=I}function qe(I){I!==P&&(q&&n.lineWidth(I),P=I)}function ke(I,he,j){I?(ge(n.POLYGON_OFFSET_FILL),(G!==he||L!==j)&&(n.polygonOffset(he,j),G=he,L=j)):ae(n.POLYGON_OFFSET_FILL)}function Rt(I){I?ge(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function D(I){I===void 0&&(I=n.TEXTURE0+k-1),W!==I&&(n.activeTexture(I),W=I)}function E(I,he,j){j===void 0&&(W===null?j=n.TEXTURE0+k-1:j=W);let X=ce[j];X===void 0&&(X={type:void 0,texture:void 0},ce[j]=X),(X.type!==I||X.texture!==he)&&(W!==j&&(n.activeTexture(j),W=j),n.bindTexture(I,he||ne[I]),X.type=I,X.texture=he)}function H(){const I=ce[W];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Ue.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ue.copy(I))}function fe(I){At.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),At.copy(I))}function Ye(I,he){let j=o.get(he);j===void 0&&(j=new WeakMap,o.set(he,j));let X=j.get(I);X===void 0&&(X=n.getUniformBlockIndex(he,I.name),j.set(I,X))}function $e(I,he){const X=o.get(he).get(I);a.get(he)!==X&&(n.uniformBlockBinding(he,X,I.__bindingPointIndex),a.set(he,X))}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,ce={},l={},u=new WeakMap,f=[],p=null,g=!1,m=null,d=null,h=null,y=null,v=null,B=null,b=null,C=new et(0,0,0),S=0,Q=!1,M=null,w=null,P=null,G=null,L=null,Ue.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),A.reset(),r.reset(),s.reset()}return{buffers:{color:A,depth:r,stencil:s},enable:ge,disable:ae,bindFramebuffer:Le,drawBuffers:Pe,useProgram:Ke,setBlending:Ze,setMaterial:_t,setFlipSided:be,setCullFace:tt,setLineWidth:qe,setPolygonOffset:ke,setScissorTest:Rt,activeTexture:D,bindTexture:E,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:$,texImage2D:ye,texImage3D:Je,updateUBOMapping:Ye,uniformBlockBinding:$e,texStorage2D:We,texStorage3D:ie,texSubImage2D:ee,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:ue,scissor:Re,viewport:fe,reset:Tt}}function cB(n,e,t,i,A,r,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,l=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return p?new OffscreenCanvas(D,E):Io("canvas")}function m(D,E,H){let J=1;const $=Rt(D);if(($.width>H||$.height>H)&&(J=H/Math.max($.width,$.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ee=Math.floor(J*$.width),Se=Math.floor(J*$.height);u===void 0&&(u=g(ee,Se));const le=E?g(ee,Se):u;return le.width=ee,le.height=Se,le.getContext("2d").drawImage(D,0,0,ee,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ee+"x"+Se+")."),le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),D;return D}function d(D){return D.generateMipmaps&&D.minFilter!==Un&&D.minFilter!==Yn}function h(D){n.generateMipmap(D)}function y(D,E,H,J,$=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=E;if(E===n.RED&&(H===n.FLOAT&&(ee=n.R32F),H===n.HALF_FLOAT&&(ee=n.R16F),H===n.UNSIGNED_BYTE&&(ee=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ee=n.R8UI),H===n.UNSIGNED_SHORT&&(ee=n.R16UI),H===n.UNSIGNED_INT&&(ee=n.R32UI),H===n.BYTE&&(ee=n.R8I),H===n.SHORT&&(ee=n.R16I),H===n.INT&&(ee=n.R32I)),E===n.RG&&(H===n.FLOAT&&(ee=n.RG32F),H===n.HALF_FLOAT&&(ee=n.RG16F),H===n.UNSIGNED_BYTE&&(ee=n.RG8)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ee=n.RG8UI),H===n.UNSIGNED_SHORT&&(ee=n.RG16UI),H===n.UNSIGNED_INT&&(ee=n.RG32UI),H===n.BYTE&&(ee=n.RG8I),H===n.SHORT&&(ee=n.RG16I),H===n.INT&&(ee=n.RG32I)),E===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),E===n.RGBA){const Se=$?Do:ut.getTransfer(J);H===n.FLOAT&&(ee=n.RGBA32F),H===n.HALF_FLOAT&&(ee=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ee=Se===vt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(D,E){let H;return D?E===null||E===os||E===cs?H=n.DEPTH24_STENCIL8:E===nA?H=n.DEPTH32F_STENCIL8:E===So&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===os||E===cs?H=n.DEPTH_COMPONENT24:E===nA?H=n.DEPTH_COMPONENT32F:E===So&&(H=n.DEPTH_COMPONENT16),H}function B(D,E){return d(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function b(D){const E=D.target;E.removeEventListener("dispose",b),S(E),E.isVideoTexture&&l.delete(E)}function C(D){const E=D.target;E.removeEventListener("dispose",C),M(E)}function S(D){const E=i.get(D);if(E.__webglInit===void 0)return;const H=D.source,J=f.get(H);if(J){const $=J[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&Q(D),Object.keys(J).length===0&&f.delete(H)}i.remove(D)}function Q(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const H=D.source,J=f.get(H);delete J[E.__cacheKey],s.memory.textures--}function M(D){const E=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let $=0;$<E.__webglFramebuffer[J].length;$++)n.deleteFramebuffer(E.__webglFramebuffer[J][$]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=D.textures;for(let J=0,$=H.length;J<$;J++){const ee=i.get(H[J]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(H[J])}i.remove(D)}let w=0;function P(){w=0}function G(){const D=w;return D>=A.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+A.maxTextures),w+=1,D}function L(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function k(D,E){const H=i.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(H,D,E);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function q(D,E){const H=i.get(D);if(D.version>0&&H.__version!==D.version){At(H,D,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function Y(D,E){const H=i.get(D);if(D.version>0&&H.__version!==D.version){At(H,D,E);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function te(D,E){const H=i.get(D);if(D.version>0&&H.__version!==D.version){V(H,D,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const W={[Au]:n.REPEAT,[UA]:n.CLAMP_TO_EDGE,[ru]:n.MIRRORED_REPEAT},ce={[Un]:n.NEAREST,[H3]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Bc]:n.LINEAR_MIPMAP_NEAREST,[LA]:n.LINEAR_MIPMAP_LINEAR},ve={[iE]:n.NEVER,[cE]:n.ALWAYS,[AE]:n.LESS,[Vg]:n.LEQUAL,[rE]:n.EQUAL,[oE]:n.GEQUAL,[sE]:n.GREATER,[aE]:n.NOTEQUAL};function xe(D,E){if(E.type===nA&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yn||E.magFilter===Bc||E.magFilter===Ma||E.magFilter===LA||E.minFilter===Yn||E.minFilter===Bc||E.minFilter===Ma||E.minFilter===LA)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,W[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,W[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,W[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,ce[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Ma&&E.minFilter!==LA||E.type===nA&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,A.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(D,E){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",b));const J=E.source;let $=f.get(J);$===void 0&&($={},f.set(J,$));const ee=L(E);if(ee!==D.__cacheKey){$[ee]===void 0&&($[ee]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,H=!0),$[ee].usedTimes++;const Se=$[D.__cacheKey];Se!==void 0&&($[D.__cacheKey].usedTimes--,Se.usedTimes===0&&Q(E)),D.__cacheKey=ee,D.__webglTexture=$[ee].texture}return H}function At(D,E,H){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);const $=Ue(D,E),ee=E.source;t.bindTexture(J,D.__webglTexture,n.TEXTURE0+H);const Se=i.get(ee);if(ee.version!==Se.__version||$===!0){t.activeTexture(n.TEXTURE0+H);const le=ut.getPrimaries(ut.workingColorSpace),ue=E.colorSpace===eA?null:ut.getPrimaries(E.colorSpace),We=E.colorSpace===eA||le===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ie=m(E.image,!1,A.maxTextureSize);ie=ke(E,ie);const ye=r.convert(E.format,E.colorSpace),Je=r.convert(E.type);let Re=y(E.internalFormat,ye,Je,E.colorSpace,E.isVideoTexture);xe(J,E);let fe;const Ye=E.mipmaps,$e=E.isVideoTexture!==!0,Tt=Se.__version===void 0||$===!0,I=ee.dataReady,he=B(E,ie);if(E.isDepthTexture)Re=v(E.format===ls,E.type),Tt&&($e?t.texStorage2D(n.TEXTURE_2D,1,Re,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Re,ie.width,ie.height,0,ye,Je,null));else if(E.isDataTexture)if(Ye.length>0){$e&&Tt&&t.texStorage2D(n.TEXTURE_2D,he,Re,Ye[0].width,Ye[0].height);for(let j=0,X=Ye.length;j<X;j++)fe=Ye[j],$e?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,ye,Je,fe.data):t.texImage2D(n.TEXTURE_2D,j,Re,fe.width,fe.height,0,ye,Je,fe.data);E.generateMipmaps=!1}else $e?(Tt&&t.texStorage2D(n.TEXTURE_2D,he,Re,ie.width,ie.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ye,Je,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ie.width,ie.height,0,ye,Je,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Re,Ye[0].width,Ye[0].height,ie.depth);for(let j=0,X=Ye.length;j<X;j++)if(fe=Ye[j],E.format!==fi)if(ye!==null)if($e){if(I)if(E.layerUpdates.size>0){for(const re of E.layerUpdates){const Qe=fe.width*fe.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,re,fe.width,fe.height,1,ye,fe.data.slice(Qe*re,Qe*(re+1)),0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,ie.depth,ye,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Re,fe.width,fe.height,ie.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,ie.depth,ye,Je,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Re,fe.width,fe.height,ie.depth,0,ye,Je,fe.data)}else{$e&&Tt&&t.texStorage2D(n.TEXTURE_2D,he,Re,Ye[0].width,Ye[0].height);for(let j=0,X=Ye.length;j<X;j++)fe=Ye[j],E.format!==fi?ye!==null?$e?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,ye,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,ye,Je,fe.data):t.texImage2D(n.TEXTURE_2D,j,Re,fe.width,fe.height,0,ye,Je,fe.data)}else if(E.isDataArrayTexture)if($e){if(Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Re,ie.width,ie.height,ie.depth),I)if(E.layerUpdates.size>0){let j;switch(Je){case n.UNSIGNED_BYTE:switch(ye){case n.ALPHA:j=1;break;case n.LUMINANCE:j=1;break;case n.LUMINANCE_ALPHA:j=2;break;case n.RGB:j=3;break;case n.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${Je}.`)}const X=ie.width*ie.height*j;for(const re of E.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,ie.width,ie.height,1,ye,Je,ie.data.slice(X*re,X*(re+1)));E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,Je,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,ye,Je,ie.data);else if(E.isData3DTexture)$e?(Tt&&t.texStorage3D(n.TEXTURE_3D,he,Re,ie.width,ie.height,ie.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,Je,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,ye,Je,ie.data);else if(E.isFramebufferTexture){if(Tt)if($e)t.texStorage2D(n.TEXTURE_2D,he,Re,ie.width,ie.height);else{let j=ie.width,X=ie.height;for(let re=0;re<he;re++)t.texImage2D(n.TEXTURE_2D,re,Re,j,X,0,ye,Je,null),j>>=1,X>>=1}}else if(Ye.length>0){if($e&&Tt){const j=Rt(Ye[0]);t.texStorage2D(n.TEXTURE_2D,he,Re,j.width,j.height)}for(let j=0,X=Ye.length;j<X;j++)fe=Ye[j],$e?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ye,Je,fe):t.texImage2D(n.TEXTURE_2D,j,Re,ye,Je,fe);E.generateMipmaps=!1}else if($e){if(Tt){const j=Rt(ie);t.texStorage2D(n.TEXTURE_2D,he,Re,j.width,j.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Je,ie)}else t.texImage2D(n.TEXTURE_2D,0,Re,ye,Je,ie);d(E)&&h(J),Se.__version=ee.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function V(D,E,H){if(E.image.length!==6)return;const J=Ue(D,E),$=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+H);const ee=i.get($);if($.version!==ee.__version||J===!0){t.activeTexture(n.TEXTURE0+H);const Se=ut.getPrimaries(ut.workingColorSpace),le=E.colorSpace===eA?null:ut.getPrimaries(E.colorSpace),ue=E.colorSpace===eA||Se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const We=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let X=0;X<6;X++)!We&&!ie?ye[X]=m(E.image[X],!0,A.maxCubemapSize):ye[X]=ie?E.image[X].image:E.image[X],ye[X]=ke(E,ye[X]);const Je=ye[0],Re=r.convert(E.format,E.colorSpace),fe=r.convert(E.type),Ye=y(E.internalFormat,Re,fe,E.colorSpace),$e=E.isVideoTexture!==!0,Tt=ee.__version===void 0||J===!0,I=$.dataReady;let he=B(E,Je);xe(n.TEXTURE_CUBE_MAP,E);let j;if(We){$e&&Tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ye,Je.width,Je.height);for(let X=0;X<6;X++){j=ye[X].mipmaps;for(let re=0;re<j.length;re++){const Qe=j[re];E.format!==fi?Re!==null?$e?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,0,0,Qe.width,Qe.height,Re,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,Ye,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,0,0,Qe.width,Qe.height,Re,fe,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,Ye,Qe.width,Qe.height,0,Re,fe,Qe.data)}}}else{if(j=E.mipmaps,$e&&Tt){j.length>0&&he++;const X=Rt(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ye,X.width,X.height)}for(let X=0;X<6;X++)if(ie){$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ye[X].width,ye[X].height,Re,fe,ye[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ye,ye[X].width,ye[X].height,0,Re,fe,ye[X].data);for(let re=0;re<j.length;re++){const rt=j[re].image[X].image;$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,0,0,rt.width,rt.height,Re,fe,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,Ye,rt.width,rt.height,0,Re,fe,rt.data)}}else{$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Re,fe,ye[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ye,Re,fe,ye[X]);for(let re=0;re<j.length;re++){const Qe=j[re];$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,0,0,Re,fe,Qe.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,Ye,Re,fe,Qe.image[X])}}}d(E)&&h(n.TEXTURE_CUBE_MAP),ee.__version=$.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ne(D,E,H,J,$,ee){const Se=r.convert(H.format,H.colorSpace),le=r.convert(H.type),ue=y(H.internalFormat,Se,le,H.colorSpace);if(!i.get(E).__hasExternalTextures){const ie=Math.max(1,E.width>>ee),ye=Math.max(1,E.height>>ee);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ee,ue,ie,ye,E.depth,0,Se,le,null):t.texImage2D($,ee,ue,ie,ye,0,Se,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),tt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,$,i.get(H).__webglTexture,0,be(E)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,$,i.get(H).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(D,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const J=E.depthTexture,$=J&&J.isDepthTexture?J.type:null,ee=v(E.stencilBuffer,$),Se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=be(E);tt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,ee,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ee,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ee,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,D)}else{const J=E.textures;for(let $=0;$<J.length;$++){const ee=J[$],Se=r.convert(ee.format,ee.colorSpace),le=r.convert(ee.type),ue=y(ee.internalFormat,Se,le,ee.colorSpace),We=be(E);H&&tt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,ue,E.width,E.height):tt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,ue,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ue,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,$=be(E);if(E.depthTexture.format===Yr)tt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===ls)tt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(D){const E=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ae(E.__webglFramebuffer,D)}else if(H){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=n.createRenderbuffer(),ge(E.__webglDepthbuffer[J],D,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),ge(E.__webglDepthbuffer,D,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(D,E,H){const J=i.get(D);E!==void 0&&ne(J.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Le(D)}function Ke(D){const E=D.texture,H=i.get(D),J=i.get(E);D.addEventListener("dispose",C);const $=D.textures,ee=D.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,s.memory.textures++),ee){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let ue=0;ue<E.mipmaps.length;ue++)H.__webglFramebuffer[le][ue]=n.createFramebuffer()}else H.__webglFramebuffer[le]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)H.__webglFramebuffer[le]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Se)for(let le=0,ue=$.length;le<ue;le++){const We=i.get($[le]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&tt(D)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<$.length;le++){const ue=$[le];H.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const We=r.convert(ue.format,ue.colorSpace),ie=r.convert(ue.type),ye=y(ue.internalFormat,We,ie,ue.colorSpace,D.isXRRenderTarget===!0),Je=be(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,ye,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,H.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),xe(n.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)ne(H.__webglFramebuffer[le][ue],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else ne(H.__webglFramebuffer[le],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);d(E)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,ue=$.length;le<ue;le++){const We=$[le],ie=i.get(We);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),xe(n.TEXTURE_2D,We),ne(H.__webglFramebuffer,D,We,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),d(We)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(le=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),xe(le,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)ne(H.__webglFramebuffer[ue],D,E,n.COLOR_ATTACHMENT0,le,ue);else ne(H.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,le,0);d(E)&&h(le),t.unbindTexture()}D.depthBuffer&&Le(D)}function T(D){const E=D.textures;for(let H=0,J=E.length;H<J;H++){const $=E[H];if(d($)){const ee=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get($).__webglTexture;t.bindTexture(ee,Se),h(ee),t.unbindTexture()}}}const Fe=[],Ze=[];function _t(D){if(D.samples>0){if(tt(D)===!1){const E=D.textures,H=D.width,J=D.height;let $=n.COLOR_BUFFER_BIT;const ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(D),le=E.length>1;if(le)for(let ue=0;ue<E.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const We=i.get(E[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,$,n.NEAREST),o===!0&&(Fe.length=0,Ze.length=0,Fe.push(n.COLOR_ATTACHMENT0+ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Fe.push(ee),Ze.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ue=0;ue<E.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const We=i.get(E[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&o){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function be(D){return Math.min(A.maxSamples,D.samples)}function tt(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(D){const E=s.render.frame;l.get(D)!==E&&(l.set(D,E),D.update())}function ke(D,E){const H=D.colorSpace,J=D.format,$=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==dA&&H!==eA&&(ut.getTransfer(H)===vt?(J!==fi||$!==cA)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Rt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=te,this.rebindTextures=Pe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=tt}function lB(n,e){function t(i,A=eA){let r;const s=ut.getTransfer(A);if(i===cA)return n.UNSIGNED_BYTE;if(i===kg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===V3)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===W3)return n.BYTE;if(i===Y3)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===Ng)return n.INT;if(i===os)return n.UNSIGNED_INT;if(i===nA)return n.FLOAT;if(i===tc)return n.HALF_FLOAT;if(i===j3)return n.ALPHA;if(i===K3)return n.RGB;if(i===fi)return n.RGBA;if(i===q3)return n.LUMINANCE;if(i===X3)return n.LUMINANCE_ALPHA;if(i===Yr)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===J3)return n.RED;if(i===Gg)return n.RED_INTEGER;if(i===Z3)return n.RG;if(i===Hg)return n.RG_INTEGER;if(i===Wg)return n.RGBA_INTEGER;if(i===Cc||i===Sc||i===Dc||i===bc)if(s===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Id||i===Rd||i===Qd||i===Ud)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Id)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ud)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===Fd||i===Od)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ld||i===Fd)return s===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Od)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nd||i===kd||i===zd||i===Gd||i===Hd||i===Wd||i===Yd||i===Vd||i===jd||i===Kd||i===qd||i===Xd||i===Jd||i===Zd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zd)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===$d||i===eh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pc)return s===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$d)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$3||i===th||i===nh||i===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class uB extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class di extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fB={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let A=null,r=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i),h=this._getHandJoint(c,m);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=l.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(A=t.getPose(e.targetRaySpace,i),A===null&&r!==null&&(A=r),A!==null&&(a.matrix.fromArray(A.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,A.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(A.linearVelocity)):a.hasLinearVelocity=!1,A.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(A.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fB)))}return a!==null&&(a.visible=A!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const dB=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hB=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pB{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const A=new fn,r=e.properties.get(A);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=A}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new uA({vertexShader:dB,fragmentShader:hB,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kn(new fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class gB extends gs{constructor(e,t){super();const i=this;let A=null,r=1,s=null,a="local-floor",o=1,c=null,l=null,u=null,f=null,p=null,g=null;const m=new pB,d=t.getContextAttributes();let h=null,y=null;const v=[],B=[],b=new it;let C=null;const S=new yn;S.layers.enable(1),S.viewport=new qt;const Q=new yn;Q.layers.enable(2),Q.viewport=new qt;const M=[S,Q],w=new uB;w.layers.enable(1),w.layers.enable(2);let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=v[V];return ne===void 0&&(ne=new il,v[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=v[V];return ne===void 0&&(ne=new il,v[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=v[V];return ne===void 0&&(ne=new il,v[V]=ne),ne.getHandSpace()};function L(V){const ne=B.indexOf(V.inputSource);if(ne===-1)return;const ge=v[ne];ge!==void 0&&(ge.update(V.inputSource,V.frame,c||s),ge.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){A.removeEventListener("select",L),A.removeEventListener("selectstart",L),A.removeEventListener("selectend",L),A.removeEventListener("squeeze",L),A.removeEventListener("squeezestart",L),A.removeEventListener("squeezeend",L),A.removeEventListener("end",k),A.removeEventListener("inputsourceschange",q);for(let V=0;V<v.length;V++){const ne=B[V];ne!==null&&(B[V]=null,v[V].disconnect(ne))}P=null,G=null,m.reset(),e.setRenderTarget(h),p=null,f=null,u=null,A=null,y=null,At.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return A},this.setSession=async function(V){if(A=V,A!==null){if(h=e.getRenderTarget(),A.addEventListener("select",L),A.addEventListener("selectstart",L),A.addEventListener("selectend",L),A.addEventListener("squeeze",L),A.addEventListener("squeezestart",L),A.addEventListener("squeezeend",L),A.addEventListener("end",k),A.addEventListener("inputsourceschange",q),d.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),A.renderState.layers===void 0){const ne={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(A,t,ne),A.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new KA(p.framebufferWidth,p.framebufferHeight,{format:fi,type:cA,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ne=null,ge=null,ae=null;d.depth&&(ae=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=d.stencil?ls:Yr,ge=d.stencil?cs:os);const Le={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(A,t),f=u.createProjectionLayer(Le),A.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new KA(f.textureWidth,f.textureHeight,{format:fi,type:cA,depthTexture:new am(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await A.requestReferenceSpace(a),At.setContext(A),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(A!==null)return A.environmentBlendMode};function q(V){for(let ne=0;ne<V.removed.length;ne++){const ge=V.removed[ne],ae=B.indexOf(ge);ae>=0&&(B[ae]=null,v[ae].disconnect(ge))}for(let ne=0;ne<V.added.length;ne++){const ge=V.added[ne];let ae=B.indexOf(ge);if(ae===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=B.length){B.push(ge),ae=Pe;break}else if(B[Pe]===null){B[Pe]=ge,ae=Pe;break}if(ae===-1)break}const Le=v[ae];Le&&Le.connect(ge)}}const Y=new O,te=new O;function W(V,ne,ge){Y.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);const ae=Y.distanceTo(te),Le=ne.projectionMatrix.elements,Pe=ge.projectionMatrix.elements,Ke=Le[14]/(Le[10]-1),T=Le[14]/(Le[10]+1),Fe=(Le[9]+1)/Le[5],Ze=(Le[9]-1)/Le[5],_t=(Le[8]-1)/Le[0],be=(Pe[8]+1)/Pe[0],tt=Ke*_t,qe=Ke*be,ke=ae/(-_t+be),Rt=ke*-_t;ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Rt),V.translateZ(ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const D=Ke+ke,E=T+ke,H=tt-Rt,J=qe+(ae-Rt),$=Fe*T/E*D,ee=Ze*T/E*D;V.projectionMatrix.makePerspective(H,J,$,ee,D,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function ce(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(A===null)return;m.texture!==null&&(V.near=m.depthNear,V.far=m.depthFar),w.near=Q.near=S.near=V.near,w.far=Q.far=S.far=V.far,(P!==w.near||G!==w.far)&&(A.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,G=w.far,S.near=P,S.far=G,Q.near=P,Q.far=G,S.updateProjectionMatrix(),Q.updateProjectionMatrix(),V.updateProjectionMatrix());const ne=V.parent,ge=w.cameras;ce(w,ne);for(let ae=0;ae<ge.length;ae++)ce(ge[ae],ne);ge.length===2?W(w,S,Q):w.projectionMatrix.copy(S.projectionMatrix),ve(V,w,ne)};function ve(V,ne,ge){ge===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(ge.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=su*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function(V){o=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)};let xe=null;function Ue(V,ne){if(l=ne.getViewerPose(c||s),g=ne,l!==null){const ge=l.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ae=!1;ge.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let Pe=0;Pe<ge.length;Pe++){const Ke=ge[Pe];let T=null;if(p!==null)T=p.getViewport(Ke);else{const Ze=u.getViewSubImage(f,Ke);T=Ze.viewport,Pe===0&&(e.setRenderTargetTextures(y,Ze.colorTexture,f.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(y))}let Fe=M[Pe];Fe===void 0&&(Fe=new yn,Fe.layers.enable(Pe),Fe.viewport=new qt,M[Pe]=Fe),Fe.matrix.fromArray(Ke.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ke.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(T.x,T.y,T.width,T.height),Pe===0&&(w.matrix.copy(Fe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(Fe)}const Le=A.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Pe=u.getDepthInformation(ge[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(e,Pe,A.renderState)}}for(let ge=0;ge<v.length;ge++){const ae=B[ge],Le=v[ge];ae!==null&&Le!==void 0&&Le.update(ae,ne,c||s)}xe&&xe(V,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const At=new sm;At.setAnimationLoop(Ue),this.setAnimationLoop=function(V){xe=V},this.dispose=function(){}}}const MA=new Ii,mB=new Pt;function vB(n,e){function t(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function i(d,h){h.color.getRGB(d.fogColor.value,nm(n)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function A(d,h,y,v,B){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(d,h):h.isMeshToonMaterial?(r(d,h),u(d,h)):h.isMeshPhongMaterial?(r(d,h),l(d,h)):h.isMeshStandardMaterial?(r(d,h),f(d,h),h.isMeshPhysicalMaterial&&p(d,h,B)):h.isMeshMatcapMaterial?(r(d,h),g(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),m(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(s(d,h),h.isLineDashedMaterial&&a(d,h)):h.isPointsMaterial?o(d,h,y,v):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,t(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===un&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,t(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===un&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,t(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,t(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const y=e.get(h),v=y.envMap,B=y.envMapRotation;v&&(d.envMap.value=v,MA.copy(B),MA.x*=-1,MA.y*=-1,MA.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(MA.y*=-1,MA.z*=-1),d.envMapRotation.value.setFromMatrix4(mB.makeRotationFromEuler(MA)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,d.aoMapTransform))}function s(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform))}function a(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function o(d,h,y,v){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*y,d.scale.value=v*.5,h.map&&(d.map.value=h.map,t(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function l(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function u(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function f(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function p(d,h,y){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,h){h.matcap&&(d.matcap.value=h.matcap)}function m(d,h){const y=e.get(h).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:A}}function xB(n,e,t,i){let A={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(y,v){const B=v.program;i.uniformBlockBinding(y,B)}function c(y,v){let B=A[y.id];B===void 0&&(g(y),B=l(y),A[y.id]=B,y.addEventListener("dispose",d));const b=v.program;i.updateUBOMapping(y,b);const C=e.render.frame;r[y.id]!==C&&(f(y),r[y.id]=C)}function l(y){const v=u();y.__bindingPointIndex=v;const B=n.createBuffer(),b=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,B),n.bufferData(n.UNIFORM_BUFFER,b,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,B),B}function u(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=A[y.id],B=y.uniforms,b=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,S=B.length;C<S;C++){const Q=Array.isArray(B[C])?B[C]:[B[C]];for(let M=0,w=Q.length;M<w;M++){const P=Q[M];if(p(P,C,M,b)===!0){const G=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let q=0;q<L.length;q++){const Y=L[q],te=m(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,G+k,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,k),k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,v,B,b){const C=y.value,S=v+"_"+B;if(b[S]===void 0)return typeof C=="number"||typeof C=="boolean"?b[S]=C:b[S]=C.clone(),!0;{const Q=b[S];if(typeof C=="number"||typeof C=="boolean"){if(Q!==C)return b[S]=C,!0}else if(Q.equals(C)===!1)return Q.copy(C),!0}return!1}function g(y){const v=y.uniforms;let B=0;const b=16;for(let S=0,Q=v.length;S<Q;S++){const M=Array.isArray(v[S])?v[S]:[v[S]];for(let w=0,P=M.length;w<P;w++){const G=M[w],L=Array.isArray(G.value)?G.value:[G.value];for(let k=0,q=L.length;k<q;k++){const Y=L[k],te=m(Y),W=B%b;W!==0&&b-W<te.boundary&&(B+=b-W),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=B,B+=te.storage}}}const C=B%b;return C>0&&(B+=b-C),y.__size=B,y.__cache={},this}function m(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(y){const v=y.target;v.removeEventListener("dispose",d);const B=s.indexOf(v.__bindingPointIndex);s.splice(B,1),n.deleteBuffer(A[v.id]),delete A[v.id],delete r[v.id]}function h(){for(const y in A)n.deleteBuffer(A[y]);s=[],A={},r={}}return{bind:o,update:c,dispose:h}}class dm{constructor(e={}){const{canvas:t=uE(),context:i=null,depth:A=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const p=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const h=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ai,this.toneMapping=rA,this.toneMappingExposure=1;const v=this;let B=!1,b=0,C=0,S=null,Q=-1,M=null;const w=new qt,P=new qt;let G=null;const L=new et(0);let k=0,q=t.width,Y=t.height,te=1,W=null,ce=null;const ve=new qt(0,0,q,Y),xe=new qt(0,0,q,Y);let Ue=!1;const At=new rm;let V=!1,ne=!1;const ge=new Pt,ae=new O,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Ke(){return S===null?te:1}let T=i;function Fe(_,U){return t.getContext(_,U)}try{const _={alpha:!0,depth:A,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ku}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",X,!1),T===null){const U="webgl2";if(T=Fe(U,_),T===null)throw Fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ze,_t,be,tt,qe,ke,Rt,D,E,H,J,$,ee,Se,le,ue,We,ie,ye,Je,Re,fe,Ye,$e;function Tt(){Ze=new D4(T),Ze.init(),fe=new lB(T,Ze),_t=new E4(T,Ze,e,fe),be=new oB(T),tt=new T4(T),qe=new Ky,ke=new cB(T,Ze,be,qe,_t,fe,tt),Rt=new _4(v),D=new S4(v),E=new FE(T),Ye=new x4(T,E),H=new b4(T,E,tt,Ye),J=new R4(T,H,E,tt),ye=new I4(T,_t,ke),ue=new M4(qe),$=new jy(v,Rt,D,Ze,_t,Ye,ue),ee=new vB(v,qe),Se=new Xy,le=new nB(Ze),ie=new v4(v,Rt,D,be,J,f,o),We=new aB(v,J,_t),$e=new xB(T,tt,_t,be),Je=new w4(T,Ze,tt),Re=new P4(T,Ze,tt),tt.programs=$.programs,v.capabilities=_t,v.extensions=Ze,v.properties=qe,v.renderLists=Se,v.shadowMap=We,v.state=be,v.info=tt}Tt();const I=new gB(v,T);this.xr=I,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const _=Ze.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Ze.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(_){_!==void 0&&(te=_,this.setSize(q,Y,!1))},this.getSize=function(_){return _.set(q,Y)},this.setSize=function(_,U,N=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,Y=U,t.width=Math.floor(_*te),t.height=Math.floor(U*te),N===!0&&(t.style.width=_+"px",t.style.height=U+"px"),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(q*te,Y*te).floor()},this.setDrawingBufferSize=function(_,U,N){q=_,Y=U,te=N,t.width=Math.floor(_*N),t.height=Math.floor(U*N),this.setViewport(0,0,_,U)},this.getCurrentViewport=function(_){return _.copy(w)},this.getViewport=function(_){return _.copy(ve)},this.setViewport=function(_,U,N,z){_.isVector4?ve.set(_.x,_.y,_.z,_.w):ve.set(_,U,N,z),be.viewport(w.copy(ve).multiplyScalar(te).round())},this.getScissor=function(_){return _.copy(xe)},this.setScissor=function(_,U,N,z){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,U,N,z),be.scissor(P.copy(xe).multiplyScalar(te).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(_){be.setScissorTest(Ue=_)},this.setOpaqueSort=function(_){W=_},this.setTransparentSort=function(_){ce=_},this.getClearColor=function(_){return _.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(_=!0,U=!0,N=!0){let z=0;if(_){let F=!1;if(S!==null){const Ae=S.texture.format;F=Ae===Wg||Ae===Hg||Ae===Gg}if(F){const Ae=S.texture.type,pe=Ae===cA||Ae===os||Ae===So||Ae===cs||Ae===kg||Ae===zg,we=ie.getClearColor(),_e=ie.getClearAlpha(),Te=we.r,Ie=we.g,De=we.b;pe?(p[0]=Te,p[1]=Ie,p[2]=De,p[3]=_e,T.clearBufferuiv(T.COLOR,0,p)):(g[0]=Te,g[1]=Ie,g[2]=De,g[3]=_e,T.clearBufferiv(T.COLOR,0,g))}else z|=T.COLOR_BUFFER_BIT}U&&(z|=T.DEPTH_BUFFER_BIT),N&&(z|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",X,!1),Se.dispose(),le.dispose(),qe.dispose(),Rt.dispose(),D.dispose(),J.dispose(),Ye.dispose(),$e.dispose(),$.dispose(),I.dispose(),I.removeEventListener("sessionstart",ei),I.removeEventListener("sessionend",ti),hA.stop()};function he(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const _=tt.autoReset,U=We.enabled,N=We.autoUpdate,z=We.needsUpdate,F=We.type;Tt(),tt.autoReset=_,We.enabled=U,We.autoUpdate=N,We.needsUpdate=z,We.type=F}function X(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function re(_){const U=_.target;U.removeEventListener("dispose",re),Qe(U)}function Qe(_){rt(_),qe.remove(_)}function rt(_){const U=qe.get(_).programs;U!==void 0&&(U.forEach(function(N){$.releaseProgram(N)}),_.isShaderMaterial&&$.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,N,z,F,Ae){U===null&&(U=Le);const pe=F.isMesh&&F.matrixWorld.determinant()<0,we=Bm(_,U,N,z,F);be.setMaterial(z,pe);let _e=N.index,Te=1;if(z.wireframe===!0){if(_e=H.getWireframeAttribute(N),_e===void 0)return;Te=2}const Ie=N.drawRange,De=N.attributes.position;let at=Ie.start*Te,St=(Ie.start+Ie.count)*Te;Ae!==null&&(at=Math.max(at,Ae.start*Te),St=Math.min(St,(Ae.start+Ae.count)*Te)),_e!==null?(at=Math.max(at,0),St=Math.min(St,_e.count)):De!=null&&(at=Math.max(at,0),St=Math.min(St,De.count));const Dt=St-at;if(Dt<0||Dt===1/0)return;Ye.setup(F,z,we,N,_e);let mn,lt=Je;if(_e!==null&&(mn=E.get(_e),lt=Re,lt.setIndex(mn)),F.isMesh)z.wireframe===!0?(be.setLineWidth(z.wireframeLinewidth*Ke()),lt.setMode(T.LINES)):lt.setMode(T.TRIANGLES);else if(F.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),be.setLineWidth(Ce*Ke()),F.isLineSegments?lt.setMode(T.LINES):F.isLineLoop?lt.setMode(T.LINE_LOOP):lt.setMode(T.LINE_STRIP)}else F.isPoints?lt.setMode(T.POINTS):F.isSprite&&lt.setMode(T.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?lt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):lt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)lt.renderInstances(at,Dt,F.count);else if(N.isInstancedBufferGeometry){const Ce=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,tn=Math.min(N.instanceCount,Ce);lt.renderInstances(at,Dt,tn)}else lt.render(at,Dt)};function It(_,U,N){_.transparent===!0&&_.side===Ci&&_.forceSinglePass===!1?(_.side=un,_.needsUpdate=!0,pa(_,U,N),_.side=Ti,_.needsUpdate=!0,pa(_,U,N),_.side=Ci):pa(_,U,N)}this.compile=function(_,U,N=null){N===null&&(N=_),d=le.get(N),d.init(U),y.push(d),N.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),_!==N&&_.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const z=new Set;return _.traverse(function(F){const Ae=F.material;if(Ae)if(Array.isArray(Ae))for(let pe=0;pe<Ae.length;pe++){const we=Ae[pe];It(we,N,F),z.add(we)}else It(Ae,N,F),z.add(Ae)}),y.pop(),d=null,z},this.compileAsync=function(_,U,N=null){const z=this.compile(_,U,N);return new Promise(F=>{function Ae(){if(z.forEach(function(pe){qe.get(pe).currentProgram.isReady()&&z.delete(pe)}),z.size===0){F(_);return}setTimeout(Ae,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Gt=null;function ft(_){Gt&&Gt(_)}function ei(){hA.stop()}function ti(){hA.start()}const hA=new sm;hA.setAnimationLoop(ft),typeof self<"u"&&hA.setContext(self),this.setAnimationLoop=function(_){Gt=_,I.setAnimationLoop(_),_===null?hA.stop():hA.start()},I.addEventListener("sessionstart",ei),I.addEventListener("sessionend",ti),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(U),U=I.getCamera()),_.isScene===!0&&_.onBeforeRender(v,_,U,S),d=le.get(_,y.length),d.init(U),y.push(d),ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),At.setFromProjectionMatrix(ge),ne=this.localClippingEnabled,V=ue.init(this.clippingPlanes,ne),m=Se.get(_,h.length),m.init(),h.push(m),I.enabled===!0&&I.isPresenting===!0){const Ae=v.xr.getDepthSensingMesh();Ae!==null&&rc(Ae,U,-1/0,v.sortObjects)}rc(_,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(W,ce),Pe=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,Pe&&ie.addToRenderList(m,_),this.info.render.frame++,V===!0&&ue.beginShadows();const N=d.state.shadowsArray;We.render(N,_,U),V===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(F.length>0)for(let pe=0,we=Ae.length;pe<we;pe++){const _e=Ae[pe];Zu(z,F,_,_e)}Pe&&ie.render(_);for(let pe=0,we=Ae.length;pe<we;pe++){const _e=Ae[pe];Ju(m,_,_e,_e.viewport)}}else F.length>0&&Zu(z,F,_,U),Pe&&ie.render(_),Ju(m,_,U);S!==null&&(ke.updateMultisampleRenderTarget(S),ke.updateRenderTargetMipmap(S)),_.isScene===!0&&_.onAfterRender(v,_,U),Ye.resetDefaultState(),Q=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],V===!0&&ue.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,h.pop(),h.length>0?m=h[h.length-1]:m=null};function rc(_,U,N,z){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)N=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||At.intersectsSprite(_)){z&&ae.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ge);const pe=J.update(_),we=_.material;we.visible&&m.push(_,pe,we,N,ae.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||At.intersectsObject(_))){const pe=J.update(_),we=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ae.copy(_.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ae.copy(pe.boundingSphere.center)),ae.applyMatrix4(_.matrixWorld).applyMatrix4(ge)),Array.isArray(we)){const _e=pe.groups;for(let Te=0,Ie=_e.length;Te<Ie;Te++){const De=_e[Te],at=we[De.materialIndex];at&&at.visible&&m.push(_,pe,at,N,ae.z,De)}}else we.visible&&m.push(_,pe,we,N,ae.z,null)}}const Ae=_.children;for(let pe=0,we=Ae.length;pe<we;pe++)rc(Ae[pe],U,N,z)}function Ju(_,U,N,z){const F=_.opaque,Ae=_.transmissive,pe=_.transparent;d.setupLightsView(N),V===!0&&ue.setGlobalState(v.clippingPlanes,N),z&&be.viewport(w.copy(z)),F.length>0&&ha(F,U,N),Ae.length>0&&ha(Ae,U,N),pe.length>0&&ha(pe,U,N),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Zu(_,U,N,z){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new KA(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?tc:cA,minFilter:LA,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Ae=d.state.transmissionRenderTarget[z.id],pe=z.viewport||w;Ae.setSize(pe.z,pe.w);const we=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(L),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),Pe?ie.render(N):v.clear();const _e=v.toneMapping;v.toneMapping=rA;const Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),V===!0&&ue.setGlobalState(v.clippingPlanes,z),ha(_,N,z),ke.updateMultisampleRenderTarget(Ae),ke.updateRenderTargetMipmap(Ae),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let De=0,at=U.length;De<at;De++){const St=U[De],Dt=St.object,mn=St.geometry,lt=St.material,Ce=St.group;if(lt.side===Ci&&Dt.layers.test(z.layers)){const tn=lt.side;lt.side=un,lt.needsUpdate=!0,$u(Dt,N,z,mn,lt,Ce),lt.side=tn,lt.needsUpdate=!0,Ie=!0}}Ie===!0&&(ke.updateMultisampleRenderTarget(Ae),ke.updateRenderTargetMipmap(Ae))}v.setRenderTarget(we),v.setClearColor(L,k),Te!==void 0&&(z.viewport=Te),v.toneMapping=_e}function ha(_,U,N){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,Ae=_.length;F<Ae;F++){const pe=_[F],we=pe.object,_e=pe.geometry,Te=z===null?pe.material:z,Ie=pe.group;we.layers.test(N.layers)&&$u(we,U,N,_e,Te,Ie)}}function $u(_,U,N,z,F,Ae){_.onBeforeRender(v,U,N,z,F,Ae),_.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),F.onBeforeRender(v,U,N,z,_,Ae),F.transparent===!0&&F.side===Ci&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,v.renderBufferDirect(N,U,z,F,_,Ae),F.side=Ti,F.needsUpdate=!0,v.renderBufferDirect(N,U,z,F,_,Ae),F.side=Ci):v.renderBufferDirect(N,U,z,F,_,Ae),_.onAfterRender(v,U,N,z,F,Ae)}function pa(_,U,N){U.isScene!==!0&&(U=Le);const z=qe.get(_),F=d.state.lights,Ae=d.state.shadowsArray,pe=F.state.version,we=$.getParameters(_,F.state,Ae,U,N),_e=$.getProgramCacheKey(we);let Te=z.programs;z.environment=_.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(_.isMeshStandardMaterial?D:Rt).get(_.envMap||z.environment),z.envMapRotation=z.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,Te===void 0&&(_.addEventListener("dispose",re),Te=new Map,z.programs=Te);let Ie=Te.get(_e);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===pe)return tf(_,we),Ie}else we.uniforms=$.getUniforms(_),_.onBuild(N,we,v),_.onBeforeCompile(we,v),Ie=$.acquireProgram(we,_e),Te.set(_e,Ie),z.uniforms=we.uniforms;const De=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(De.clippingPlanes=ue.uniform),tf(_,we),z.needsLights=Sm(_),z.lightsStateVersion=pe,z.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function ef(_){if(_.uniformsList===null){const U=_.currentProgram.getUniforms();_.uniformsList=oo.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function tf(_,U){const N=qe.get(_);N.outputColorSpace=U.outputColorSpace,N.batching=U.batching,N.batchingColor=U.batchingColor,N.instancing=U.instancing,N.instancingColor=U.instancingColor,N.instancingMorph=U.instancingMorph,N.skinning=U.skinning,N.morphTargets=U.morphTargets,N.morphNormals=U.morphNormals,N.morphColors=U.morphColors,N.morphTargetsCount=U.morphTargetsCount,N.numClippingPlanes=U.numClippingPlanes,N.numIntersection=U.numClipIntersection,N.vertexAlphas=U.vertexAlphas,N.vertexTangents=U.vertexTangents,N.toneMapping=U.toneMapping}function Bm(_,U,N,z,F){U.isScene!==!0&&(U=Le),ke.resetTextureUnits();const Ae=U.fog,pe=z.isMeshStandardMaterial?U.environment:null,we=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:dA,_e=(z.isMeshStandardMaterial?D:Rt).get(z.envMap||pe),Te=z.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ie=!!N.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),De=!!N.morphAttributes.position,at=!!N.morphAttributes.normal,St=!!N.morphAttributes.color;let Dt=rA;z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const mn=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,lt=mn!==void 0?mn.length:0,Ce=qe.get(z),tn=d.state.lights;if(V===!0&&(ne===!0||_!==M)){const bn=_===M&&z.id===Q;ue.setState(z,_,bn)}let dt=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==tn.state.version||Ce.outputColorSpace!==we||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==_e||z.fog===!0&&Ce.fog!==Ae||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ue.numPlanes||Ce.numIntersection!==ue.numIntersection)||Ce.vertexAlphas!==Te||Ce.vertexTangents!==Ie||Ce.morphTargets!==De||Ce.morphNormals!==at||Ce.morphColors!==St||Ce.toneMapping!==Dt||Ce.morphTargetsCount!==lt)&&(dt=!0):(dt=!0,Ce.__version=z.version);let pi=Ce.currentProgram;dt===!0&&(pi=pa(z,U,F));let ga=!1,pA=!1,sc=!1;const Ht=pi.getUniforms(),Li=Ce.uniforms;if(be.useProgram(pi.program)&&(ga=!0,pA=!0,sc=!0),z.id!==Q&&(Q=z.id,pA=!0),ga||M!==_){Ht.setValue(T,"projectionMatrix",_.projectionMatrix),Ht.setValue(T,"viewMatrix",_.matrixWorldInverse);const bn=Ht.map.cameraPosition;bn!==void 0&&bn.setValue(T,ae.setFromMatrixPosition(_.matrixWorld)),_t.logarithmicDepthBuffer&&Ht.setValue(T,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ht.setValue(T,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,pA=!0,sc=!0)}if(F.isSkinnedMesh){Ht.setOptional(T,F,"bindMatrix"),Ht.setOptional(T,F,"bindMatrixInverse");const bn=F.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(T,"boneTexture",bn.boneTexture,ke))}F.isBatchedMesh&&(Ht.setOptional(T,F,"batchingTexture"),Ht.setValue(T,"batchingTexture",F._matricesTexture,ke),Ht.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&Ht.setValue(T,"batchingColorTexture",F._colorsTexture,ke));const ac=N.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0)&&ye.update(F,N,pi),(pA||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,Ht.setValue(T,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Li.envMap.value=_e,Li.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Li.envMapIntensity.value=U.environmentIntensity),pA&&(Ht.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Cm(Li,sc),Ae&&z.fog===!0&&ee.refreshFogUniforms(Li,Ae),ee.refreshMaterialUniforms(Li,z,te,Y,d.state.transmissionRenderTarget[_.id]),oo.upload(T,ef(Ce),Li,ke)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(oo.upload(T,ef(Ce),Li,ke),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ht.setValue(T,"center",F.center),Ht.setValue(T,"modelViewMatrix",F.modelViewMatrix),Ht.setValue(T,"normalMatrix",F.normalMatrix),Ht.setValue(T,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const bn=z.uniformsGroups;for(let oc=0,Dm=bn.length;oc<Dm;oc++){const nf=bn[oc];$e.update(nf,pi),$e.bind(nf,pi)}}return pi}function Cm(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function Sm(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(_,U,N){qe.get(_.texture).__webglTexture=U,qe.get(_.depthTexture).__webglTexture=N;const z=qe.get(_);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=N===void 0,z.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,U){const N=qe.get(_);N.__webglFramebuffer=U,N.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(_,U=0,N=0){S=_,b=U,C=N;let z=!0,F=null,Ae=!1,pe=!1;if(_){const _e=qe.get(_);_e.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(T.FRAMEBUFFER,null),z=!1):_e.__webglFramebuffer===void 0?ke.setupRenderTarget(_):_e.__hasExternalTextures&&ke.rebindTextures(_,qe.get(_.texture).__webglTexture,qe.get(_.depthTexture).__webglTexture);const Te=_.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(pe=!0);const Ie=qe.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?F=Ie[U][N]:F=Ie[U],Ae=!0):_.samples>0&&ke.useMultisampledRTT(_)===!1?F=qe.get(_).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[N]:F=Ie,w.copy(_.viewport),P.copy(_.scissor),G=_.scissorTest}else w.copy(ve).multiplyScalar(te).floor(),P.copy(xe).multiplyScalar(te).floor(),G=Ue;if(be.bindFramebuffer(T.FRAMEBUFFER,F)&&z&&be.drawBuffers(_,F),be.viewport(w),be.scissor(P),be.setScissorTest(G),Ae){const _e=qe.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,N)}else if(pe){const _e=qe.get(_.texture),Te=U||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.__webglTexture,N||0,Te)}Q=-1},this.readRenderTargetPixels=function(_,U,N,z,F,Ae,pe){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=qe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){be.bindFramebuffer(T.FRAMEBUFFER,we);try{const _e=_.texture,Te=_e.format,Ie=_e.type;if(!_t.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-z&&N>=0&&N<=_.height-F&&T.readPixels(U,N,z,F,fe.convert(Te),fe.convert(Ie),Ae)}finally{const _e=S!==null?qe.get(S).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(_,U,N,z,F,Ae,pe){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=qe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){be.bindFramebuffer(T.FRAMEBUFFER,we);try{const _e=_.texture,Te=_e.format,Ie=_e.type;if(!_t.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=_.width-z&&N>=0&&N<=_.height-F){const De=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.bufferData(T.PIXEL_PACK_BUFFER,Ae.byteLength,T.STREAM_READ),T.readPixels(U,N,z,F,fe.convert(Te),fe.convert(Ie),0),T.flush();const at=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await fE(T,at,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ae)}finally{T.deleteBuffer(De),T.deleteSync(at)}return Ae}}finally{const _e=S!==null?qe.get(S).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(_,U=null,N=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,_=arguments[1]);const z=Math.pow(2,-N),F=Math.floor(_.image.width*z),Ae=Math.floor(_.image.height*z),pe=U!==null?U.x:0,we=U!==null?U.y:0;ke.setTexture2D(_,0),T.copyTexSubImage2D(T.TEXTURE_2D,N,0,0,pe,we,F,Ae),be.unbindTexture()},this.copyTextureToTexture=function(_,U,N=null,z=null,F=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,_=arguments[1],U=arguments[2],F=arguments[3]||0,N=null);let Ae,pe,we,_e,Te,Ie;N!==null?(Ae=N.max.x-N.min.x,pe=N.max.y-N.min.y,we=N.min.x,_e=N.min.y):(Ae=_.image.width,pe=_.image.height,we=0,_e=0),z!==null?(Te=z.x,Ie=z.y):(Te=0,Ie=0);const De=fe.convert(U.format),at=fe.convert(U.type);ke.setTexture2D(U,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const St=T.getParameter(T.UNPACK_ROW_LENGTH),Dt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),mn=T.getParameter(T.UNPACK_SKIP_PIXELS),lt=T.getParameter(T.UNPACK_SKIP_ROWS),Ce=T.getParameter(T.UNPACK_SKIP_IMAGES),tn=_.isCompressedTexture?_.mipmaps[F]:_.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,tn.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,tn.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,we),T.pixelStorei(T.UNPACK_SKIP_ROWS,_e),_.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,F,Te,Ie,Ae,pe,De,at,tn.data):_.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,F,Te,Ie,tn.width,tn.height,De,tn.data):T.texSubImage2D(T.TEXTURE_2D,F,Te,Ie,De,at,tn),T.pixelStorei(T.UNPACK_ROW_LENGTH,St),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Dt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,mn),T.pixelStorei(T.UNPACK_SKIP_ROWS,lt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ce),F===0&&U.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(_,U,N=null,z=null,F=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,z=arguments[1]||null,_=arguments[2],U=arguments[3],F=arguments[4]||0);let Ae,pe,we,_e,Te,Ie,De,at,St;const Dt=_.isCompressedTexture?_.mipmaps[F]:_.image;N!==null?(Ae=N.max.x-N.min.x,pe=N.max.y-N.min.y,we=N.max.z-N.min.z,_e=N.min.x,Te=N.min.y,Ie=N.min.z):(Ae=Dt.width,pe=Dt.height,we=Dt.depth,_e=0,Te=0,Ie=0),z!==null?(De=z.x,at=z.y,St=z.z):(De=0,at=0,St=0);const mn=fe.convert(U.format),lt=fe.convert(U.type);let Ce;if(U.isData3DTexture)ke.setTexture3D(U,0),Ce=T.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)ke.setTexture2DArray(U,0),Ce=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const tn=T.getParameter(T.UNPACK_ROW_LENGTH),dt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),pi=T.getParameter(T.UNPACK_SKIP_PIXELS),ga=T.getParameter(T.UNPACK_SKIP_ROWS),pA=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Dt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Dt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,_e),T.pixelStorei(T.UNPACK_SKIP_ROWS,Te),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ie),_.isDataTexture||_.isData3DTexture?T.texSubImage3D(Ce,F,De,at,St,Ae,pe,we,mn,lt,Dt.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Ce,F,De,at,St,Ae,pe,we,mn,Dt.data):T.texSubImage3D(Ce,F,De,at,St,Ae,pe,we,mn,lt,Dt),T.pixelStorei(T.UNPACK_ROW_LENGTH,tn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,dt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,pi),T.pixelStorei(T.UNPACK_SKIP_ROWS,ga),T.pixelStorei(T.UNPACK_SKIP_IMAGES,pA),F===0&&U.generateMipmaps&&T.generateMipmap(Ce),be.unbindTexture()},this.initRenderTarget=function(_){qe.get(_).__webglFramebuffer===void 0&&ke.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?ke.setTextureCube(_,0):_.isData3DTexture?ke.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?ke.setTexture2DArray(_,0):ke.setTexture2D(_,0),be.unbindTexture()},this.resetState=function(){b=0,C=0,S=null,be.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zu?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===nc?"display-p3":"srgb"}}class hm extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pm extends ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new O,Qo=new O,Kh=new Pt,Ps=new Gu,Wa=new ic,Al=new O,qh=new O;class wB extends sn{constructor(e=new $n,t=new pm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let A=1,r=t.count;A<r;A++)Ro.fromBufferAttribute(t,A-1),Qo.fromBufferAttribute(t,A),i[A]=i[A-1],i[A]+=Ro.distanceTo(Qo);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,A=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(A),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;Kh.copy(A).invert(),Ps.copy(e.ray).applyMatrix4(Kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,c=this.isLineSegments?2:1,l=i.index,f=i.attributes.position;if(l!==null){const p=Math.max(0,s.start),g=Math.min(l.count,s.start+s.count);for(let m=p,d=g-1;m<d;m+=c){const h=l.getX(m),y=l.getX(m+1),v=Ya(this,e,Ps,o,h,y);v&&t.push(v)}if(this.isLineLoop){const m=l.getX(g-1),d=l.getX(p),h=Ya(this,e,Ps,o,m,d);h&&t.push(h)}}else{const p=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let m=p,d=g-1;m<d;m+=c){const h=Ya(this,e,Ps,o,m,m+1);h&&t.push(h)}if(this.isLineLoop){const m=Ya(this,e,Ps,o,g-1,p);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const A=t[i[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=A.length;r<s;r++){const a=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ya(n,e,t,i,A,r){const s=n.geometry.attributes.position;if(Ro.fromBufferAttribute(s,A),Qo.fromBufferAttribute(s,r),t.distanceSqToSegment(Ro,Qo,Al,qh)>i)return;Al.applyMatrix4(n.matrixWorld);const o=e.ray.origin.distanceTo(Al);if(!(o<e.near||o>e.far))return{distance:o,point:qh.clone().applyMatrix4(n.matrixWorld),index:A,face:null,faceIndex:null,object:n}}const Xh=new O,Jh=new O;class EB extends wB{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let A=0,r=t.count;A<r;A+=2)Xh.fromBufferAttribute(t,A),Jh.fromBufferAttribute(t,A+1),i[A]=A===0?0:i[A-1],i[A+1]=i[A]+Xh.distanceTo(Jh);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vu extends $n{constructor(e=.5,t=1,i=32,A=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:A,thetaStart:r,thetaLength:s},i=Math.max(3,i),A=Math.max(1,A);const a=[],o=[],c=[],l=[];let u=e;const f=(t-e)/A,p=new O,g=new it;for(let m=0;m<=A;m++){for(let d=0;d<=i;d++){const h=r+d/i*s;p.x=u*Math.cos(h),p.y=u*Math.sin(h),o.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,l.push(g.x,g.y)}u+=f}for(let m=0;m<A;m++){const d=m*(i+1);for(let h=0;h<i;h++){const y=h+d,v=y,B=y+i+1,b=y+i+2,C=y+1;a.push(v,B,C),a.push(B,b,C)}}this.setIndex(a),this.setAttribute("position",new dn(o,3)),this.setAttribute("normal",new dn(c,3)),this.setAttribute("uv",new dn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class MB extends ms{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new et(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yg,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Zh=new Pt;class _B{constructor(e,t,i=0,A=1/0){this.ray=new Gu(e,t),this.near=i,this.far=A,this.camera=null,this.layers=new Hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(e,t=!0,i=[]){return ou(e,this,i,t),i.sort($h),i}intersectObjects(e,t=!0,i=[]){for(let A=0,r=e.length;A<r;A++)ou(e[A],this,i,t);return i.sort($h),i}}function $h(n,e){return n.distance-e.distance}function ou(n,e,t,i){let A=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(A=!1),A===!0&&i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)ou(r[s],e,t,!0)}}class yB extends EB{constructor(e=10,t=10,i=4473924,A=8947848){i=new et(i),A=new et(A);const r=t/2,s=e/t,a=e/2,o=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=s){o.push(-a,0,g,a,0,g),o.push(g,0,-a,g,0,a);const m=f===r?i:A;m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3}const l=new $n;l.setAttribute("position",new dn(o,3)),l.setAttribute("color",new dn(c,3));const u=new pm({vertexColors:!0,toneMapped:!1});super(l,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ku);class e0{constructor(e,t){Z(this,"t1");Z(this,"t2");Z(this,"_position");Z(this,"_quaternion");Z(this,"_rotation");Z(this,"_scale");this.t1=e,this.t2=t}get time(){return this.t1.time-this.t2.time}get position(){return this._position??(this._position=this.t1.position.clone().sub(this.t2.position))}get quaternion(){return this._quaternion??(this._quaternion=this.t2.quaternion.clone().invert().premultiply(this.t1.quaternion))}get rotation(){return this._rotation??(this._rotation=new Ct().setFromQuaternion(this.quaternion))}get scale(){return this._scale??(this._scale=this.t1.scale.clone().sub(this.t2.scale))}}class BB{constructor(e){Z(this,"cancel");Z(this,"previous");Z(this,"memo");Z(this,"event");Z(this,"initial");Z(this,"current");Z(this,"first");Z(this,"last");Z(this,"_delta");Z(this,"_offset");this.cancel=e}start(e,t){this.event=e,this.previous=void 0,this.current=t,this.initial=t,this.first=!0,this.last=!1,this.memo=void 0,this._delta=void 0,this._offset=void 0}update(e,t){this.event=e,this.previous=this.current,this.current=t,this.first=!1,this.last=!1,this._delta=void 0,this._offset=void 0}end(e){this.event=e,this.first=!1,this.last=!0,this._delta=void 0,this._offset=void 0}get delta(){if(this.previous!=null)return this._delta??(this._delta=new e0(this.current,this.previous))}get offset(){return this._offset??(this._offset=new e0(this.current,this.initial))}}function t0(n,e){if(n.details.type==="sphere")return!1;if(n.details.type==="lines"){const{line:t}=n.details;return e.copy(t.end).sub(t.start).normalize(),!0}return n.details.type==="screen-ray"?(e.copy(n.details.direction),!0):(e.set(0,0,-1).applyQuaternion(n.pointerQuaternion),!0)}const rl=new fA,CB=new fA,SB={x:"XYZ",y:"YXZ",z:"ZXY"};function ju(n,e,t,i,A,r){rl.copy(t),A!=null&&rl.premultiply(CB.copy(A).invert());const s=new se,a=new gt,o=new se;rl.decompose(s,a,o),A0(s,i.initialTargetPosition,r.translate??!0);let c;const l=r.rotate??!0;if(l===!1)a.copy(i.initialTargetQuaternion),c=i.initialTargetRotation.clone();else if(Array.isArray(l)||l===!0||typeof l!="string"&&!Array.isArray(l)&&l.x===!0&&l.y===!0&&l.z===!0)c=new Ct().setFromQuaternion(a,i.initialTargetRotation.order);else if(typeof l=="string"){const u=SB[l];c=new Ct().setFromQuaternion(a,u);for(const f of u){const p=f.toLowerCase();p!==l&&(c[p]=0)}c.order=i.initialTargetRotation.order,a.setFromEuler(c)}else c=TB(a,i.initialTargetRotation,l);return A0(o,i.initialTargetScale,r.scale??!0),{pointerAmount:e,position:s,quaternion:a,rotation:c,scale:o,time:n}}const gr=new fu,mr=new se,vr=new se,DB=new se,bB=new gt;function n0(n,e,t){return gr.normal.copy(n),gr.constant=0,PB(mr,gr.normal),vr.copy(mr),vr.applyQuaternion(bB.copy(e).invert().premultiply(t)),gr.projectPoint(mr,mr).normalize(),gr.projectPoint(vr,vr).normalize(),(DB.crossVectors(mr,gr.normal).dot(vr)<0?1:-1)*mr.angleTo(vr)}function PB(n,e){if(e.x===0){n.set(1,0,0);return}if(e.y===0){n.set(0,1,0);return}if(e.z===0){n.set(0,0,1);return}n.set(-e.y,e.x,0)}function TB(n,e,t){let i="",A="";for(const a of e.order)t[a.toLowerCase()]===!1?A+=a:i+=a;const r=i+A,s=new Ct().setFromQuaternion(n,r);for(const a of r){const o=a.toLowerCase();s[o]=co(o,s[o],e[o],t)}return n.setFromEuler(s),s}const sl=new se,i0=new fu,IB=new se,RB=new se;function A0(n,e,t){if(Array.isArray(t)){switch(t.length){case 0:n.copy(e);return;case 1:n.sub(e),gm(n,t[0]instanceof se?t[0]:sl.fromArray(t[0])),n.add(e);return;case 2:sl.crossVectors(t[0]instanceof se?t[0]:IB.fromArray(t[0]),t[1]instanceof se?t[1]:RB.fromArray(t[1])),i0.setFromNormalAndCoplanarPoint(sl,e),i0.projectPoint(n,n);return}return}n.x=co("x",n.x,e.x,t),n.y=co("y",n.y,e.y,t),n.z=co("z",n.z,e.z,t)}function co(n,e,t,i){if(typeof i=="boolean")return i?e:t;if(typeof i=="string")return i===n?e:t;const A=i[n];return A===!1?t:Array.isArray(A)?Qm(e,...A):e}function jr(n=!0,e,t,i,A,r){if(n){switch(e.length){case 0:case 3:return;case 1:UB(t,...e,i,A,r);return;case 2:QB(...e,t,i,A,r);return}throw new Error(`space cannot be ${e.length}D but received (${e.map(s=>s.toArray().join("/")).join("; ")})`)}}const lo={x:new se(1,0,0),y:new se(0,1,0),z:new se(0,0,1)};function Kr(n,e,t,i,A){if(i!==!1){if(i===!0){n[0]=lo.x,n[1]=lo.y,n[2]=lo.z;return}if(typeof i=="string"){Ts(n,e,t,i,A);return}if(Array.isArray(i)){for(const r of i)Ts(n,e,t,r,A);return}i.x!==!1&&Ts(n,e,t,"x",A),i.y!==!1&&Ts(n,e,t,"y",A),i.z!==!1&&Ts(n,e,t,"z",A)}}const _A=new gt,Va=new Ct,zn=new se,xr=new se,yA=new se;function Ts(n,e,t,i,A){if(Array.isArray(i)?zn.set(...i):i instanceof se?zn.copy(i):zn.copy(lo[i]),A==="translate"){zn.applyQuaternion(e),ja(n,zn);return}if(A==="scale"){Array.isArray(i)?_A.identity():_A.setFromEuler(t),_A.premultiply(e),zn.applyQuaternion(_A),ja(n,zn);return}if(Array.isArray(i))Va.set(0,0,0);else{Va.copy(t);for(let r=2;r>=0;r--){const s=t.order[r].toLowerCase();if(Va[s]=0,s===i)break}}_A.setFromEuler(Va).premultiply(e),zn.normalize(),xr.set(0,1,0),zn.dot(xr)>.99&&xr.set(0,0,1),yA.crossVectors(zn,xr).normalize(),xr.copy(yA),yA.applyQuaternion(_A),ja(n,yA),yA.crossVectors(zn,xr).normalize(),yA.applyQuaternion(_A),ja(n,yA)}const r0=new se;function ja(n,e){if(n.length!==3){if(n.length===0){n.push(e.clone());return}if(n.length===1){Math.abs(n[0].dot(e))<.999&&n.push(e.clone());return}r0.crossVectors(n[0],n[1]),!(Math.abs(r0.dot(e))<.001)&&n.push(e.clone())}}const Is=new fu,al=new se,Hs=new se;function QB(n,e,t,i,A,r){al.crossVectors(n,e).normalize(),Is.setFromNormalAndCoplanarPoint(al,t);const s=r==null?0:Math.abs(al.dot(r));if(r==null||s<.01){Is.projectPoint(A,A);return}const o=-Is.distanceToPoint(i)/r.dot(Is.normal);if(o<0){Is.projectPoint(A,A);return}Hs.copy(A),A.copy(i).addScaledVector(r,o)}function UB(n,e,t,i,A){const r=A==null?0:1-Math.abs(e.dot(A));if(A==null||r<.001){s0(i,n,e);return}Hs.subVectors(t,n);const s=e.dot(A),a=e.dot(Hs),o=A.dot(Hs),c=1-s*s,l=(a-s*o)/c;if((s*a-o)/c<0){s0(i,n,e);return}Hs.copy(i),i.copy(n).addScaledVector(e,l)}function s0(n,e,t){n.sub(e),gm(n,t),n.add(e)}function gm(n,e){const t=n.dot(e);n.copy(e).multiplyScalar(t)}const ol=new fA,Ka=new fA,qa=new se,LB=new se,BA=new gt,FB=new se(1,1,1),cl=[];function OB(n,e,t,i,A){return i==null?BA.identity():i.decompose(qa,BA,LB),cl.length=0,Kr(cl,BA,t.initialTargetRotation,A.translate??!0,"translate"),Ka.makeRotationFromQuaternion(BA.copy(e.initialPointerWorldQuaternion).invert()).multiply(ol.makeTranslation(qa.copy(e.initialPointerWorldPoint).negate())),t.initialTargetParentWorldMatrix!=null&&Ka.multiply(t.initialTargetParentWorldMatrix),jr(A.projectRays,cl,e.initialPointerWorldPoint,e.pointerWorldOrigin,qa.copy(e.pointerWorldPoint),e.pointerWorldDirection),BA.copy(e.pointerWorldQuaternion),(A.rotate??!0)===!1&&BA.copy(e.initialPointerWorldQuaternion),ol.compose(qa,BA,FB).multiply(Ka).multiply(Ka.compose(t.initialTargetPosition,t.initialTargetQuaternion,t.initialTargetScale)),ju(n,1,ol,t,i,A)}const wr=new se,Rs=new se,Nt=new se,Yi=new se,NB=new se,a0=new se,Er=new se,o0=new fA,Qs=new fA,Xa=new fA,ni=new gt,Us=new gt,Mr=[];function kB(n,e,t,i,A,r){A==null?ni.identity():A.decompose(Nt,ni,Yi),Mr.length=0,Kr(Mr,ni,i.initialTargetRotation,r.translate??!0,"translate"),Kr(Mr,ni,i.initialTargetRotation,r.rotate??!0,"rotate"),Kr(Mr,ni,i.initialTargetRotation,r.scale??!0,"scale"),jr(r.projectRays,Mr,e.initialPointerWorldPoint,e.pointerWorldOrigin,Nt.copy(e.pointerWorldPoint),e.pointerWorldDirection),jr(r.projectRays,Mr,t.initialPointerWorldPoint,t.pointerWorldOrigin,Yi.copy(t.pointerWorldPoint),t.pointerWorldDirection),wr.copy(t.initialPointerWorldPoint).sub(e.initialPointerWorldPoint),Rs.copy(Yi).sub(Nt),Nt.copy(wr),i.prevTwoPointerDeltaRotation!=null&&Nt.applyQuaternion(i.prevTwoPointerDeltaRotation),Nt.normalize(),Yi.copy(Rs).normalize(),ni.setFromUnitVectors(Nt,Yi),i.prevTwoPointerDeltaRotation==null?i.prevTwoPointerDeltaRotation=new gt:ni.multiply(i.prevTwoPointerDeltaRotation),i.prevTwoPointerDeltaRotation.copy(ni);const s=(n0(Yi,e.prevPointerWorldQuaternion,e.pointerWorldQuaternion)+n0(Yi,t.prevPointerWorldQuaternion,t.pointerWorldQuaternion))*.5+(i.prevAngle??0);if(i.prevAngle=s,ni.premultiply(Us.setFromAxisAngle(Yi,s)),typeof r.scale=="object"&&(r.scale.uniform??!1))Er.setScalar(Rs.length()/wr.length());else{Xa.compose(i.initialTargetPosition,i.initialTargetQuaternion,i.initialTargetScale),i.initialTargetParentWorldMatrix!=null&&Xa.premultiply(i.initialTargetParentWorldMatrix),Xa.decompose(NB,Us,a0),Nt.copy(wr).applyQuaternion(Us.invert()).divide(a0),Nt.x=Math.abs(Nt.x),Nt.y=Math.abs(Nt.y),Nt.z=Math.abs(Nt.z);const a=Math.max(...Nt.toArray());Nt.divideScalar(a),Er.set(1,1,1),Er.addScaledVector(Nt,Rs.length()/wr.length()-1)}return o0.makeTranslation(Nt.copy(Rs).multiplyScalar(.5).add(e.pointerWorldPoint)).multiply(Qs.makeRotationFromQuaternion(ni)).multiply(Qs.makeRotationFromQuaternion(Us.invert())).multiply(Qs.makeScale(Er.x,Er.y,Er.z)).multiply(Qs.makeRotationFromQuaternion(Us.invert())).multiply(Qs.makeTranslation(Nt.copy(wr).multiplyScalar(.5).add(e.initialPointerWorldPoint).negate())).multiply(Xa),ju(n,2,o0,i,A,r)}const yt=new se,Tn=new se,ll=new se,Vi=new se,CA=new se,In=new gt,Mn=new gt,ji=new fA,Ei=new se,_r=[];function zB(n,e,t,i,A,r){if(A==null?In.identity():A.decompose(yt,In,Tn),_r.length=0,r.translate==="as-scale"&&Kr(_r,In,t.initialTargetRotation,r.scale??!0,"scale"),r.translate!="as-scale"&&Kr(_r,In,t.initialTargetRotation,r.rotate??!0,"rotate"),ji.makeTranslation(t.initialTargetPosition),t.initialTargetParentWorldMatrix!=null&&ji.premultiply(t.initialTargetParentWorldMatrix),Vi.setFromMatrixPosition(ji),jr(r.projectRays,_r,e.initialPointerWorldPoint,e.pointerWorldOrigin,Vi,void 0),Vi.negate().add(e.initialPointerWorldPoint),CA.setFromMatrixPosition(i),jr(r.projectRays,_r,e.initialPointerWorldPoint,e.pointerWorldOrigin,CA,void 0),jr(r.projectRays,_r,e.initialPointerWorldPoint,e.pointerWorldOrigin,Tn.copy(e.pointerWorldPoint),e.pointerWorldDirection),CA.negate().add(Tn),r.translate==="as-scale"?In.copy(t.initialTargetQuaternion):(yt.copy(Vi),t.prevTranslateAsDeltaRotation!=null&&yt.applyQuaternion(t.prevTranslateAsDeltaRotation),yt.normalize(),Tn.copy(CA).normalize(),In.setFromUnitVectors(yt,Tn),t.prevTranslateAsDeltaRotation==null?t.prevTranslateAsDeltaRotation=new gt:In.multiply(t.prevTranslateAsDeltaRotation),t.prevTranslateAsDeltaRotation.copy(In),t.initialTargetParentWorldMatrix!=null&&(Mn.setFromRotationMatrix(t.initialTargetParentWorldMatrix),In.multiply(Mn.normalize()),In.premultiply(Mn.invert())),In.multiply(t.initialTargetQuaternion)),r.translate==="as-rotate")Ei.set(1,1,1);else if(typeof r.scale=="object"&&(r.scale.uniform??!1))Ei.setScalar(CA.length()/Vi.length());else if(r.translate==="as-rotate-and-scale"){ji.compose(t.initialTargetPosition,t.initialTargetQuaternion,t.initialTargetScale),t.initialTargetParentWorldMatrix!=null&&ji.premultiply(t.initialTargetParentWorldMatrix),ji.decompose(Tn,Mn,ll),yt.copy(Vi).applyQuaternion(Mn.invert()).divide(ll),yt.x=Math.abs(yt.x),yt.y=Math.abs(yt.y),yt.z=Math.abs(yt.z);const s=Math.max(...yt.toArray());yt.divideScalar(s),Ei.set(1,1,1),Ei.addScaledVector(yt,CA.length()/Vi.length()-1)}else t.initialTargetParentWorldMatrix!=null?(t.initialTargetParentWorldMatrix.decompose(yt,Mn,Tn),Mn.multiply(t.initialTargetQuaternion)):Mn.copy(t.initialTargetQuaternion),yt.copy(Vi).applyQuaternion(Mn.invert()),A!=null?(A.decompose(Tn,Mn,ll),Mn.multiply(t.initialTargetQuaternion)):Mn.copy(t.initialTargetQuaternion),Tn.copy(CA).applyQuaternion(Mn.invert()),Ei.x=Math.abs(yt.x)<.001?1:Math.abs(Tn.x/yt.x),Ei.y=Math.abs(yt.y)<.001?1:Math.abs(Tn.y/yt.y),Ei.z=Math.abs(yt.z)<.001?1:Math.abs(Tn.z/yt.z);return Ei.multiply(t.initialTargetScale),ji.compose(t.initialTargetPosition,In,Ei),ju(n,1,ji,t,void 0,r)}const c0=new se;class GB{constructor(e,t=()=>({})){Z(this,"target");Z(this,"getOptions");Z(this,"outputState");Z(this,"latestMoveEvent");Z(this,"inputState",new Map);Z(this,"capturedObjects",new Map);Z(this,"initialTargetPosition",new se);Z(this,"initialTargetQuaternion",new gt);Z(this,"initialTargetRotation",new Ct);Z(this,"initialTargetScale",new se);Z(this,"initialTargetParentWorldMatrix");Z(this,"prevTwoPointerDeltaRotation");Z(this,"prevTranslateAsDeltaRotation");Z(this,"prevAngle");Z(this,"handlers",{onPointerDown:this.onPointerDown.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerUp:this.onPointerUp.bind(this)});this.target=e,this.getOptions=t,this.outputState=new BB(this.cancel.bind(this))}firstOnPointer(e){const t=this.getTarget();if(t==null)return;const i=t0(e,c0)?c0.clone():void 0;e.intersection.details.type,this.inputState.set(e.pointerId,{pointerWorldDirection:i,pointerWorldPoint:e.point,pointerWorldOrigin:e.pointerPosition,pointerWorldQuaternion:e.pointerQuaternion,initialPointerWorldPoint:e.point.clone(),initialPointerWorldDirection:i==null?void 0:i.clone(),initialPointerWorldQuaternion:e.pointerQuaternion.clone(),prevPointerWorldQuaternion:e.pointerQuaternion}),this.save(),this.inputState.size===1&&this.outputState.start(e,{pointerAmount:1,time:e.timeStamp,position:this.initialTargetPosition.clone(),quaternion:this.initialTargetQuaternion.clone(),rotation:this.initialTargetRotation.clone(),scale:this.initialTargetScale.clone()}),this.outputState.memo=this.apply(t)}onPointerDown(e){this.stopPropagation(e),this.capturePointer(e.pointerId,e.object)&&this.firstOnPointer(e)}onPointerMove(e){if(!this.capturedObjects.has(e.pointerId))return;this.stopPropagation(e);const t=this.inputState.get(e.pointerId);if(t==null){this.firstOnPointer(e);return}this.latestMoveEvent=e,t.pointerWorldPoint=e.point,t.prevPointerWorldQuaternion=t.pointerWorldQuaternion,t.pointerWorldQuaternion=e.pointerQuaternion,t.pointerWorldOrigin=e.pointerPosition,t.pointerWorldDirection!=null&&t0(e,t.pointerWorldDirection)}cancel(){if(this.capturedObjects.size===0)return;for(const[t,i]of this.capturedObjects)i.releasePointerCapture(t);this.capturedObjects.clear(),this.inputState.clear(),this.outputState.end(void 0);const e=this.getTarget();e!=null&&this.apply(e)}onPointerUp(e){this.capturedObjects.has(e.pointerId)&&(this.stopPropagation(e),this.releasePointer(e.pointerId,e.object,e))}update(e){var r,s,a;const t=this.getTarget();if(t==null||this.inputState.size===0||this.latestMoveEvent==null&&(this.getOptions().alwaysUpdate??!1)===!1)return;const i=this.getOptions();let A;if(i.translate==="as-rotate"||i.translate==="as-rotate-and-scale"||i.translate==="as-scale"){i.translate,this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0;const[o]=this.inputState.values(),c=t.matrixWorld,l=(r=t.parent)==null?void 0:r.matrixWorld;A=zB(e,o,this,c,l,i)}else if(this.inputState.size===1){this.prevTwoPointerDeltaRotation=void 0,this.prevAngle=void 0,this.prevTranslateAsDeltaRotation=void 0;const[o]=this.inputState.values();A=OB(e,o,this,(s=t.parent)==null?void 0:s.matrixWorld,i)}else{this.prevTranslateAsDeltaRotation=void 0;const[o,c]=this.inputState.values();A=kB(e,o,c,this,(a=t.parent)==null?void 0:a.matrixWorld,i)}this.outputState.update(this.latestMoveEvent,A),this.outputState.memo=this.apply(t),this.latestMoveEvent=void 0}getTarget(){var e;return this.target instanceof K0?this.target:(e=this.target)==null?void 0:e.current}capturePointer(e,t){if(this.capturedObjects.has(e))return!1;const{multitouch:i,translate:A}=this.getOptions();return((i??!0)===!1||typeof A=="string")&&this.capturedObjects.size===1?!1:(this.capturedObjects.set(e,t),t.setPointerCapture(e),!0)}releasePointer(e,t,i){const A=this.getTarget();if(!(A==null||!this.capturedObjects.delete(e))){if(this.inputState.delete(e),t.releasePointerCapture(e),this.inputState.size>0){this.save();return}this.outputState.end(i),this.apply(A)}}stopPropagation(e){var t;e==null||!(((t=this.getOptions())==null?void 0:t.stopPropagation)??!0)||e.stopPropagation()}apply(e){return(this.getOptions().apply??mm)(this.outputState,e)}getState(){return this.inputState.size===0?void 0:this.outputState}save(){var t,i;const e=this.getTarget();if(e!=null){e.updateWorldMatrix(!0,!1),this.prevAngle=void 0,this.prevTwoPointerDeltaRotation=void 0,this.prevTranslateAsDeltaRotation=void 0,this.initialTargetParentWorldMatrix=(t=e.parent)==null?void 0:t.matrixWorld.clone(),e.matrixAutoUpdate?(this.initialTargetPosition.copy(e.position),this.initialTargetQuaternion.copy(e.quaternion),this.initialTargetRotation.copy(e.rotation),this.initialTargetScale.copy(e.scale)):(e.matrix.decompose(this.initialTargetPosition,this.initialTargetQuaternion,this.initialTargetScale),this.initialTargetRotation.setFromQuaternion(this.initialTargetQuaternion,e.rotation.order));for(const A of this.inputState.values())A.pointerWorldDirection!=null&&((i=A.initialPointerWorldDirection)==null||i.copy(A.pointerWorldDirection)),A.initialPointerWorldPoint.copy(A.pointerWorldPoint),A.initialPointerWorldQuaternion.copy(A.pointerWorldQuaternion)}}bind(e){const{onPointerDown:t,onPointerMove:i,onPointerUp:A}=this.handlers;return e.addEventListener("pointerdown",t),e.addEventListener("pointermove",i),e.addEventListener("pointerup",A),()=>{e.removeEventListener("pointerdown",t),e.removeEventListener("pointermove",i),e.removeEventListener("pointerup",A),this.cancel()}}capture(e,t){return this.capturePointer(e,t)?()=>this.releasePointer(e,t,void 0):HB}}function HB(){}function mm(n,e){e.position.copy(n.current.position),e.rotation.order=n.current.rotation.order,e.quaternion.copy(n.current.quaternion),e.scale.copy(n.current.scale)}class WB{constructor(e,t){Z(this,"target");Z(this,"getOptions");Z(this,"handles",[]);Z(this,"hoveredTagMap",new Map);Z(this,"hoverSubscriptions",[]);Z(this,"applySubscriptions",[]);Z(this,"space");this.target=e,this.getOptions=t}getSpace(){return this.space??"world"}getTarget(){return this.target instanceof K0?this.target:this.target.current}getHandleOptions(e,t){var r;const i=(r=this.getOptions)==null?void 0:r.call(this),A=t==null?void 0:t();return{...i,...A,apply:(s,a)=>{var o;return this.onApply(e,s,a),(o=(A==null?void 0:A.apply)??(i==null?void 0:i.apply)??mm)==null?void 0:o(s,a)}}}registerHandle(e,t,i){const A={object:t,store:e,tag:i};this.handles.push(A);const r=e.bind(t),s=this.onPointerEnter.bind(this,i),a=this.onPointerLeave.bind(this);return t.addEventListener("pointerenter",s),t.addEventListener("pointerleave",a),()=>{const o=this.handles.indexOf(A);o!=-1&&this.handles.splice(o,1),r(),e.cancel()}}subscribeHover(e){return this.hoverSubscriptions.push(e),e(Array.from(this.hoveredTagMap.values())),()=>{const t=this.hoverSubscriptions.indexOf(e);t!==-1&&this.hoverSubscriptions.splice(t,1)}}subscribeApply(e){return this.applySubscriptions.push(e),()=>{const t=this.applySubscriptions.indexOf(e);t!==-1&&this.applySubscriptions.splice(t,1)}}update(e){for(const{store:t}of this.handles)t.update(e)}onPointerEnter(e,t){this.hoveredTagMap.set(t.pointerId,e),this.updateHover()}onPointerLeave(e){this.hoveredTagMap.delete(e.pointerId),this.updateHover()}updateHover(){const e=Array.from(this.hoveredTagMap.values());for(const t of this.hoverSubscriptions)t(e)}onApply(e,t,i){for(const A of this.applySubscriptions)A(e,t,i)}}const an={depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0};function Zn(n,e,t,{color:i,hoverColor:A,hoverOpacity:r,opacity:s}){if(!(A==null&&r==null))return A??(A=i),n.subscribeHover(a=>{const o=a.some(c=>c.includes(t));e.color.set(o?A:i),e.opacity=(o?r:s)??1})}const Ja=new gt;class ul extends q0{constructor(t,i){super();Z(this,"context");Z(this,"rotationOffset");this.context=t,this.rotationOffset=i,this.renderOrder=1/0}update(){this.quaternion.setFromEuler(this.rotationOffset);const t=this.context.getTarget();this.context.getSpace()==="world"&&t!=null&&(t.getWorldQuaternion(Ja).invert(),this.quaternion.premultiply(Ja))}bind(t){this.geometry=new X0,this.geometry.setAttribute("position",new J0([-1e3,0,0,1e3,0,0],3)),this.material=new Z0({...an,color:this.material.color??"white",opacity:this.material.opacity??1});const i=this.context.subscribeHover(r=>{const s=r.some(a=>a.includes(t));this.visible=s}),A=this.context.subscribeApply((r,s)=>{if(s.last){this.position.set(0,0,0);return}this.position.copy(s.initial.position).sub(s.current.position);const a=this.context.getTarget();a!=null&&(Ja.copy(a.quaternion).invert(),this.position.applyQuaternion(Ja))});return()=>{this.geometry.dispose(),this.material.dispose(),i(),A()}}}class Qi extends Di{constructor(t,i,A,r){super();Z(this,"context");Z(this,"axis");Z(this,"store");Z(this,"options");Z(this,"tag");this.context=t,this.axis=i,this.tag=(A??"")+i,this.store=new GB(t.target,()=>t.getHandleOptions(this.tag,r))}}function Ui(n,e=!0){if(e===!1)return!1;if(e===!0){const i={x:!1,y:!1,z:!1,e:!1};for(const A of n)i[A]=!0;return i}if(typeof e=="string")return e===n?{x:!1,y:!1,z:!1,e:!1,[n]:!0}:!1;const t={x:!1,y:!1,z:!1,e:!1};for(const i of n){const A=e[i]??!0;if(A===!1)return!1;t[i]=A}return t}const l0=new se,u0=new se;function Ku(n,e,t,i){if(!t)return i;let A;return e instanceof Um?A=(e.top-e.bottom)/e.zoom:(e.getWorldPosition(l0),n.getWorldPosition(u0),A=l0.distanceTo(u0)*Math.min(1.9*Math.tan(Math.PI*e.fov/360)/e.zoom,7)),A*i/4}const vm=new qs(0,.04,.1,12);vm.translate(0,.05,0);const xm=new qs(.0075,.0075,.5,3);xm.translate(0,.25,0);const YB=new Ct(0,0,-Math.PI/2),VB=new Ct(0,0,Math.PI/2);class yr extends Qi{constructor(t,i,A="",r,s=!1,a=!0){super(t,i,A,()=>({scale:!1,rotate:!1,translate:r!=null?[r]:this.options,multitouch:!1}));Z(this,"invert");Z(this,"showArrowBody");this.invert=s,this.showArrowBody=a}bind(t,i,A){const r=Ui(this.axis,A);if(r===!1)return;this.options=r;const s=this.invert?VB:YB,a=new hn(an),o=Zn(this.context,a,this.tag,{color:t,hoverColor:i}),c=new Ot(vm,a);c.renderOrder=1/0,c.position.x=this.invert?-.5:.5,c.rotation.copy(s),this.add(c);let l,u;if(this.showArrowBody){const g=new hn(an);l=Zn(this.context,g,this.tag,{color:t,hoverColor:16777024}),u=new Ot(xm,g),u.renderOrder=1/0,u.rotation.copy(s),this.add(u)}const f=new Ot(new qs(.13,0,.6,4));f.pointerEventsOrder=1/0,f.position.x=this.invert?-.3:.3,f.rotation.copy(s),f.visible=!1,this.add(f);const p=this.context.registerHandle(this.store,f,this.tag);return()=>{a.dispose(),p(),o==null||o(),l==null||l(),this.remove(c),u!=null&&this.remove(u),this.remove(f)}}}class fl extends Qi{constructor(e,t,i="",A){super(e,t,i,()=>({translate:A??this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e,t,i){const A=Ui(this.axis,i);if(A===!1)return;this.options=A;const r=new hn(an),s=Zn(this.context,r,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:t}),a=new Ot(new Xs(.2,.2,.01),r);a.renderOrder=1/0,a.pointerEventsOrder=1/0,a.position.set(.15,.15,0);const o=this.context.registerHandle(this.store,a,this.tag);return this.add(a),()=>{r.dispose(),a.geometry.dispose(),o(),s==null||s(),this.remove(a)}}}new se;const f0=new gt;function jB(n,e){const t=new Ot(new fo(.01,2),new hn(an));t.renderOrder=1/0,t.visible=!1,n.add(t);const i=new Ot(new fo(.01,2),new hn(an));i.renderOrder=1/0,i.visible=!1,n.add(i);const A=new X0;A.setAttribute("position",new J0([0,0,0,1,1,1],3));const r=new q0(A,new Z0(an));r.renderOrder=1/0,r.visible=!1,n.add(r);const s=e.subscribeApply((a,o)=>{i.position.set(0,0,0),t.position.copy(o.initial.position).sub(o.current.position);const c=e.getTarget();c!=null&&(f0.copy(c.quaternion).invert(),t.position.applyQuaternion(f0)),r.position.set(0,0,0),r.scale.copy(t.position),t.visible=!o.last,r.visible=!o.last,i.visible=!o.last});return()=>{t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose(),r.geometry.dispose(),r.material.dispose(),n.remove(t),n.remove(i),n.remove(r),s()}}class KB extends Qi{constructor(e){super(e,"xyz","",()=>({translate:this.options,scale:!1,rotate:!1,multitouch:!1}))}bind(e){const t=Ui(this.axis,e);if(t===!1)return;this.options=t;const i=new hn(an),A=Zn(this.context,i,this.tag,{color:16777215,hoverColor:16776960,opacity:.25,hoverOpacity:1}),r=new Ot(new fo(.1,0),i);r.renderOrder=1/0,this.add(r);const s=new Ot(new fo(.2,0));s.pointerEventsOrder=1/0,s.visible=!1,this.add(s);const a=this.context.registerHandle(this.store,s,this.tag);return()=>{i.dispose(),r.geometry.dispose(),s.geometry.dispose(),a(),A==null||A(),this.remove(r),this.remove(s)}}}const d0=new se,nn=new gt,h0=new gt,p0=new gt().setFromEuler(new Ct(0,0,Math.PI/2)),g0=new gt().setFromEuler(new Ct(0,-Math.PI/2,0)),qB=new gt,XB=new gt().setFromEuler(new Ct(0,-Math.PI/2,0)),JB=new gt().setFromEuler(new Ct(Math.PI/2,0,0));class ZB extends Di{constructor(t,i,A){super();Z(this,"context");Z(this,"size");Z(this,"fixed");Z(this,"free");Z(this,"translationX");Z(this,"translationY");Z(this,"translationZ");Z(this,"translationNegX");Z(this,"translationNegY");Z(this,"translationNegZ");Z(this,"translationXY");Z(this,"translationYZ");Z(this,"translationXZ");Z(this,"scaleGroup",new Di);Z(this,"xAxis",new se);Z(this,"yAxis",new se);Z(this,"zAxis",new se);Z(this,"negXAxis",new se);Z(this,"negYAxis",new se);Z(this,"negZAxis",new se);this.context=t,this.size=i,this.fixed=A,this.add(this.scaleGroup),this.free=new KB(this.context),this.scaleGroup.add(this.free),this.translationX=new yr(this.context,"x",void 0,this.xAxis),this.scaleGroup.add(this.translationX),this.translationY=new yr(this.context,"y",void 0,this.yAxis),this.scaleGroup.add(this.translationY),this.translationZ=new yr(this.context,"z",void 0,this.zAxis),this.scaleGroup.add(this.translationZ),this.translationNegX=new yr(this.context,"x",void 0,this.negXAxis,!0,!1),this.scaleGroup.add(this.translationNegX),this.translationNegY=new yr(this.context,"y",void 0,this.negYAxis,!0,!1),this.scaleGroup.add(this.translationNegY),this.translationNegZ=new yr(this.context,"z",void 0,this.negZAxis,!0,!1),this.scaleGroup.add(this.translationNegZ),this.translationXY=new fl(this.context,"xy",void 0,[this.xAxis,this.yAxis]),this.scaleGroup.add(this.translationXY),this.translationXZ=new fl(this.context,"xz",void 0,[this.xAxis,this.zAxis]),this.scaleGroup.add(this.translationXZ),this.translationYZ=new fl(this.context,"yz",void 0,[this.yAxis,this.zAxis]),this.scaleGroup.add(this.translationYZ)}update(t){this.updateWorldMatrix(!0,!1),this.xAxis.set(1,0,0),this.yAxis.set(0,1,0),this.zAxis.set(0,0,1),this.free.quaternion.identity(),this.translationX.quaternion.copy(h0),this.translationY.quaternion.copy(p0),this.translationZ.quaternion.copy(g0),this.translationNegX.quaternion.copy(h0),this.translationNegY.quaternion.copy(p0),this.translationNegZ.quaternion.copy(g0),this.translationXY.quaternion.copy(qB),this.translationYZ.quaternion.copy(XB),this.translationXZ.quaternion.copy(JB);const i=this.context.getSpace(),A=this.context.getTarget();i=="world"&&A!=null?(A.getWorldQuaternion(nn).invert(),this.free.quaternion.premultiply(nn),this.translationX.quaternion.premultiply(nn),this.translationY.quaternion.premultiply(nn),this.translationZ.quaternion.premultiply(nn),this.translationNegX.quaternion.premultiply(nn),this.translationNegY.quaternion.premultiply(nn),this.translationNegZ.quaternion.premultiply(nn),this.translationXY.quaternion.premultiply(nn),this.translationYZ.quaternion.premultiply(nn),this.translationXZ.quaternion.premultiply(nn),A.parent!=null&&(A.parent.getWorldQuaternion(nn).invert(),this.xAxis.applyQuaternion(nn),this.yAxis.applyQuaternion(nn),this.zAxis.applyQuaternion(nn))):A!=null&&(this.xAxis.applyQuaternion(A.quaternion),this.yAxis.applyQuaternion(A.quaternion),this.zAxis.applyQuaternion(A.quaternion)),this.negXAxis.copy(this.xAxis).negate(),this.negYAxis.copy(this.yAxis).negate(),this.negZAxis.copy(this.zAxis).negate(),this.scaleGroup.scale.setScalar(1),A!=null&&(A.getWorldScale(d0),this.scaleGroup.scale.divide(d0)),this.scaleGroup.scale.multiplyScalar(Ku(this,t,this.fixed??!0,this.size??1))}bind(t){const i=jB(this,this.context),A=this.translationX.bind(16711680,16776960,t),r=this.translationY.bind(65280,16776960,t),s=this.translationZ.bind(255,16776960,t),a=this.translationNegX.bind(16711680,16776960,t),o=this.translationNegY.bind(65280,16776960,t),c=this.translationNegZ.bind(255,16776960,t),l=this.translationXY.bind(255,16776960,t),u=this.translationYZ.bind(16711680,16776960,t),f=this.translationXZ.bind(65280,16776960,t),p=this.free.bind(t);return()=>{i(),A==null||A(),r==null||r(),s==null||s(),a==null||a(),o==null||o(),c==null||c(),l==null||l(),u==null||u(),f==null||f(),p==null||p()}}}class $B extends Qi{constructor(e){super(e,"xyz","",()=>({scale:{uniform:!0,...this.options},rotate:!1,translate:"as-scale",multitouch:!1}))}bind(e){const t=Ui(this.axis,e);if(t===!1)return;this.options=t;const i=new hn(an),A=Zn(this.context,i,this.tag,{opacity:.25,hoverOpacity:1,color:16777215,hoverColor:16776960}),r=new Ot(new Xs(.1,.1,.1),i);r.renderOrder=1/0,this.add(r);const s=new Ot(new Xs(.2,.2,.2));s.visible=!1,s.pointerEventsOrder=1/0,this.add(s);const a=this.context.registerHandle(this.store,s,this.tag);return()=>{i.dispose(),s.geometry.dispose(),r.geometry.dispose(),a(),A==null||A(),this.remove(s),this.remove(r)}}}const e5=new Ct(0,0,-Math.PI/2),t5=new Ct(0,0,Math.PI/2);class Br extends Qi{constructor(t,i,A="",r=!1,s=!0){super(t,i,A,()=>({scale:this.options,rotate:!1,translate:"as-scale",multitouch:!1}));Z(this,"invert");Z(this,"showHandleLine");this.invert=r,this.showHandleLine=s}bind(t,i,A){const r=Ui(this.axis,A);if(r===!1)return;this.options=r;const s=this.invert?t5:e5,a=new Di;a.position.x=this.invert?-.5:.5,a.rotation.copy(s),this.add(a);const o=new hn(an),c=Zn(this.context,o,this.tag,{color:t,hoverColor:i}),l=new Ot(new Xs(.08,.08,.08),o);l.renderOrder=1/0,l.rotation.copy(s),a.add(l);let u,f,p;if(this.showHandleLine){p=new Di,p.rotation.copy(s),this.add(p);const h=new hn(an);u=Zn(this.context,h,this.tag,{color:t,hoverColor:i}),f=new Ot(new qs(.0075,.0075,.5,3),h),f.renderOrder=1/0,f.position.y=.25,p.add(f)}const g=new Di;g.visible=!1,g.rotation.copy(s),g.position.x=this.invert?-.3:.3,this.add(g);const m=new Ot(new qs(.2,0,.6,4));m.pointerEventsOrder=1/0,m.position.y=.04,g.add(m);const d=this.context.registerHandle(this.store,m,this.tag);return()=>{o.dispose(),m.geometry.dispose(),l.geometry.dispose(),f==null||f.geometry.dispose(),d(),c==null||c(),u==null||u(),this.remove(l),p!=null&&this.remove(p),this.remove(g),this.remove(a)}}}class dl extends Qi{constructor(e,t,i=""){super(e,t,i,()=>({translate:"as-scale",scale:this.options,rotate:!1,multitouch:!1}))}bind(e,t,i){const A=Ui(this.axis,i);if(A===!1)return;this.options=A;const r=new hn(an),s=Zn(this.context,r,this.tag,{opacity:.5,hoverOpacity:1,color:e,hoverColor:t}),a=new Ot(new Xs(.2,.2,.01),r);a.renderOrder=1/0,a.pointerEventsOrder=1/0,a.position.set(.15,.15,0);const o=this.context.registerHandle(this.store,a,this.tag);return this.add(a),()=>{r.dispose(),a.geometry.dispose(),o(),s==null||s(),this.remove(a)}}}const m0=new se;class n5 extends Di{constructor(t,i,A){super();Z(this,"context");Z(this,"size");Z(this,"fixed");Z(this,"free");Z(this,"translationX");Z(this,"translationY");Z(this,"translationZ");Z(this,"translationNegX");Z(this,"translationNegY");Z(this,"translationNegZ");Z(this,"translationXY");Z(this,"translationYZ");Z(this,"translationXZ");this.context=t,this.size=i,this.fixed=A,this.free=new $B(this.context),this.add(this.free),this.translationX=new Br(this.context,"x"),this.add(this.translationX),this.translationY=new Br(this.context,"y"),this.translationY.rotation.z=Math.PI/2,this.add(this.translationY),this.translationZ=new Br(this.context,"z"),this.translationZ.rotation.y=-Math.PI/2,this.add(this.translationZ),this.translationNegX=new Br(this.context,"x",void 0,!0,!1),this.add(this.translationNegX),this.translationNegY=new Br(this.context,"y",void 0,!0,!1),this.translationNegY.rotation.z=Math.PI/2,this.add(this.translationNegY),this.translationNegZ=new Br(this.context,"z",void 0,!0,!1),this.translationNegZ.rotation.y=-Math.PI/2,this.add(this.translationNegZ),this.translationXY=new dl(this.context,"xy"),this.add(this.translationXY),this.translationXZ=new dl(this.context,"xz"),this.translationXZ.rotation.x=Math.PI/2,this.add(this.translationXZ),this.translationYZ=new dl(this.context,"yz"),this.translationYZ.rotation.y=-Math.PI/2,this.add(this.translationYZ)}update(t){this.updateWorldMatrix(!0,!1),this.scale.setScalar(1);const i=this.context.getTarget();i!=null&&(i.getWorldScale(m0),this.scale.divide(m0)),this.scale.multiplyScalar(Ku(this,t,this.fixed??!0,this.size??1))}bind(t){const i=this.translationX.bind(16711680,16776960,t),A=this.translationY.bind(65280,16776960,t),r=this.translationZ.bind(255,16776960,t),s=this.translationNegX.bind(16711680,16776960,t),a=this.translationNegY.bind(65280,16776960,t),o=this.translationNegZ.bind(255,16776960,t),c=this.translationXY.bind(255,16776960,t),l=this.translationYZ.bind(16711680,16776960,t),u=this.translationXZ.bind(65280,16776960,t),f=this.free.bind(t);return()=>{i==null||i(),A==null||A(),r==null||r(),s==null||s(),a==null||a(),o==null||o(),c==null||c(),l==null||l(),u==null||u(),f==null||f()}}}const v0={x:{vector1:new se(0,0,-1),vector2:new se(0,-1,0),rotationOffset:new gt,axis:[1,0,0]},y:{vector1:new se(0,0,-1),vector2:new se(-1,0,-1),rotationOffset:new gt().setFromEuler(new Ct(0,0,Math.PI/2)),axis:[0,1,0]},z:{vector1:new se(-1,0,0),vector2:new se(0,-1,0),rotationOffset:new gt().setFromEuler(new Ct(0,Math.PI/2,0)),axis:[0,0,1]}},hl=new se,Ls=new se,Za=new se,SA=new se,Gn=new gt;class pl extends Qi{constructor(t,i,A=""){super(t,i,A,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}));Z(this,"direction",new se(1,0,0))}update(t){const{rotationOffset:i,vector1:A,vector2:r}=v0[this.axis];t.getWorldPosition(hl),this.getWorldPosition(Ls).sub(hl),Za.copy(A),SA.copy(r);const s=this.context.getTarget(),a=this.context.getSpace();a==="local"&&s!=null&&(s.getWorldQuaternion(Gn),Za.applyQuaternion(Gn),SA.applyQuaternion(Gn)),SA.crossVectors(Za,SA);const o=Ls.dot(SA);SA.multiplyScalar(o),Ls.sub(SA),this.quaternion.setFromUnitVectors(Za,Ls.normalize()),a==="local"&&s!=null&&(s.getWorldQuaternion(Gn),this.quaternion.multiply(Gn)),this.quaternion.multiply(i),(s==null?void 0:s.parent)!=null?(s.parent.matrixWorld.decompose(hl,Gn,Ls),Gn.invert(),this.quaternion.premultiply(Gn)):Gn.identity(),this.store.getState()==null&&(this.direction.fromArray(v0[this.axis].axis),this.direction.applyQuaternion(a==="local"&&s!=null?s==null?void 0:s.quaternion:Gn)),s!=null&&this.quaternion.premultiply(Gn.copy(s.quaternion).invert())}bind(t,i){const A=Ui(this.axis,i);if(A===!1)return;this.options=A;const r=new hn(an),s=Zn(this.context,r,this.tag,{color:t,hoverColor:16776960}),a=new Ot(qu(.5,.5),r);a.renderOrder=1/0,this.add(a);const o=new Ot(new du(.5,.1,4,24));o.visible=!1,o.pointerEventsOrder=1/0,o.rotation.set(0,-Math.PI/2,-Math.PI/2),this.add(o);const c=this.context.registerHandle(this.store,o,this.tag);return()=>{r.dispose(),o.geometry.dispose(),a.geometry.dispose(),c(),s==null||s(),this.remove(o),this.remove(a)}}}const gl=new se,ml=new se,i5=new se(1,0,0),Fs=new gt;class A5 extends Qi{constructor(e,t=""){super(e,"xyz",t,()=>({scale:!1,translate:"as-rotate",rotate:this.options,multitouch:!1}))}update(e){e.getWorldPosition(gl),this.getWorldPosition(ml).sub(gl),this.quaternion.setFromUnitVectors(i5,ml.normalize());const t=this.context.getTarget();(t==null?void 0:t.parent)!=null&&(t.parent.matrixWorld.decompose(gl,Fs,ml),Fs.invert(),this.quaternion.premultiply(Fs)),t!=null&&(Fs.copy(t.quaternion).invert(),this.quaternion.premultiply(Fs))}bind(e){const t=Ui(this.axis,e);if(t===!1)return;this.options=t;const i=new hn(an),A=Zn(this.context,i,this.tag,{color:16777215,hoverColor:16776960,opacity:.25}),r=new Ot(qu(.5,1),i);r.renderOrder=1/0,this.add(r);const s=new Ot(new Lm(.25,10,8));s.visible=!1,s.pointerEventsOrder=1/0,this.add(s);const a=this.context.registerHandle(this.store,s,this.tag);return()=>{this.pointerEvents="none",i.dispose(),s.geometry.dispose(),r.geometry.dispose(),a(),A==null||A(),this.remove(s),this.remove(r)}}}const vl=new se,r5=new se,s5=new se(1,0,0),Cr=new gt;class a5 extends Qi{constructor(t,i=""){super(t,"e",i,()=>({scale:!1,translate:"as-rotate",rotate:[this.direction],multitouch:!1}));Z(this,"direction",new se(1,0,0))}update(t){t.getWorldPosition(vl),this.getWorldPosition(this.direction).sub(vl).normalize(),this.quaternion.setFromUnitVectors(s5,this.direction);const i=this.context.getTarget();(i==null?void 0:i.parent)!=null&&(i.parent.matrixWorld.decompose(vl,Cr,r5),Cr.invert(),this.quaternion.premultiply(Cr),this.direction.applyQuaternion(Cr)),i!=null&&(Cr.copy(i.quaternion).invert(),this.quaternion.premultiply(Cr)),this.direction.negate()}bind(t){const i=Ui(this.axis,t);if(i===!1)return;this.options=i;const A=new hn(an),r=Zn(this.context,A,this.tag,{color:16776960,hoverColor:16776960,opacity:.5}),s=new Ot(qu(.75,1),A);s.renderOrder=1/0,this.add(s);const a=new Ot(new du(.75,.1,2,24),new hn({color:"white"}));a.visible=!1,a.rotation.y=Math.PI/2,a.pointerEventsOrder=1/0,this.add(a);const o=this.context.registerHandle(this.store,a,this.tag);return()=>{A.dispose(),a.geometry.dispose(),s.geometry.dispose(),o(),r==null||r(),this.remove(a),this.remove(s)}}}function qu(n,e){const t=new du(n,.0075,3,64,e*Math.PI*2);return t.rotateY(Math.PI/2),t.rotateX(Math.PI/2),t}const x0=new se;class o5 extends Di{constructor(t,i,A){super();Z(this,"context");Z(this,"fixed");Z(this,"size");Z(this,"rotationX");Z(this,"rotationY");Z(this,"rotationZ");Z(this,"free");Z(this,"screen");this.context=t,this.fixed=i,this.size=A,this.rotationX=new pl(this.context,"x"),this.add(this.rotationX),this.rotationY=new pl(this.context,"y"),this.add(this.rotationY),this.rotationZ=new pl(this.context,"z"),this.add(this.rotationZ),this.free=new A5(this.context),this.add(this.free),this.screen=new a5(this.context),this.add(this.screen)}update(t){this.updateWorldMatrix(!0,!1),this.rotationX.update(t),this.rotationY.update(t),this.rotationZ.update(t),this.free.update(t),this.screen.update(t),this.scale.setScalar(1);const i=this.context.getTarget();i!=null&&(i.getWorldScale(x0),this.scale.divide(x0)),this.scale.multiplyScalar(Ku(this,t,this.fixed??!0,this.size??1))}bind(t){const i=this.rotationX.bind(16711680,t),A=this.rotationY.bind(65280,t),r=this.rotationZ.bind(255,t),s=this.screen.bind(t),a=this.free.bind(t);return()=>{i==null||i(),A==null||A(),r==null||r(),s==null||s(),a==null||a()}}}const c5=new Ct,l5=new Ct(0,0,Math.PI/2),u5=new Ct(0,-Math.PI/2,0);class f5 extends Di{constructor(t){super();Z(this,"xAxisHighlight");Z(this,"yAxisHighlight");Z(this,"zAxisHighlight");Z(this,"handles");Z(this,"context");this.context=new WB(this,t),this.xAxisHighlight=new ul(this.context,c5),this.add(this.xAxisHighlight),this.yAxisHighlight=new ul(this.context,l5),this.add(this.yAxisHighlight),this.zAxisHighlight=new ul(this.context,u5),this.add(this.zAxisHighlight)}set space(t){this.context.space=t}get space(){return this.context.space}update(t,i){var A;this.context.update(t),this.xAxisHighlight.update(),this.yAxisHighlight.update(),this.zAxisHighlight.update(),(A=this.handles)==null||A.update(i)}bind(t,i){const A=this.xAxisHighlight.bind("x"),r=this.yAxisHighlight.bind("y"),s=this.zAxisHighlight.bind("z");switch(t){case"rotate":this.handles=new o5(this.context);break;case"scale":this.handles=new n5(this.context);break;case"translate":this.handles=new ZB(this.context);break}this.add(this.handles);const a=this.handles.bind(i);return()=>{this.handles!=null&&this.remove(this.handles),this.handles=void 0,a(),A(),r(),s()}}}new se(0,0,1);new se(0,1,0);new se;new se;new Ct;new se;new qA;new se;new se;new se;new qA;new qA;new se;new se;new qA;new qA;new qA;new qA;new se;new se;const d5=2;class h5{constructor(e){this.xrDevice=e,this.combinedCameraPosition=new O,this.isPointerLocked=!1,this.vec3=new O,this.quat=new lA,this.keyState={ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},this.lastTime=0,this.scene=new hm,this.camera=new yn(50,window.innerWidth/window.innerHeight,.1,40),this.playerRig=new di,this.cameraRig=new di,this.scene.add(this.playerRig),this.playerRig.add(this.cameraRig),this.cameraRig.position.fromArray(e.position.vec3),this.cameraRig.quaternion.fromArray(e.quaternion.quat),this.cameraRig.add(this.camera),this.camera.position.x-=e.ipd/2;const t=new Kn(new Vu(.25,.27,32),new Wu({color:16777215,side:Ti}));t.rotateX(-Math.PI/2),this.scene.add(t),this.renderer=new dm({alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="50vh",this.renderer.domElement.style.left="50vw",this.renderer.domElement.style.transform="translate(-50%, -50%)",this.transformHandles=new Map,["left","right"].forEach(i=>{const A=new f5;A.scale.setScalar(.1),A.position.fromArray(e.controllers[i].position.vec3),A.quaternion.fromArray(e.controllers[i].quaternion.quat),this.cameraRig.attach(A),A.userData={defaultPosition:A.position.toArray(),defaultQuaternion:A.quaternion.toArray()},A.userData.setMode=r=>{var s,a;(a=(s=A.userData).modeCleanup)===null||a===void 0||a.call(s),A.userData.modeCleanup=A.bind(r),A.userData.mode=r},A.userData.setMode("translate"),A.space="local",this.transformHandles.set(i,A),A.addEventListener("click",()=>{A.userData.mode==="translate"?A.userData.setMode("rotate"):A.userData.setMode("translate")})}),window.transformHandles=this.transformHandles,this.mouseMoveHandler=i=>{if(!this.isPointerLocked)return;const A=i.movementX||i.mozMovementX||i.webkitMovementX||0,r=i.movementY||i.mozMovementY||i.webkitMovementY||0;this.playerRig.rotation.y-=A*.002,this.cameraRig.rotation.x-=r*.002,e.quaternion.copy(this.cameraRig.getWorldQuaternion(new lA))},this.cameraRig.getWorldPosition(this.combinedCameraPosition),this.headsetDefaultPosition=this.cameraRig.position.clone(),this.headsetDefaultQuaternion=this.cameraRig.quaternion.clone(),this.forwardHtmlEvents=Om(this.renderer.domElement,()=>this.camera,this.scene).update,document.addEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("keydown",this.keyDownHandler.bind(this),!1),document.addEventListener("keyup",this.keyUpHandler.bind(this),!1)}lockPointer(){this.renderer.domElement.requestPointerLock=this.renderer.domElement.requestPointerLock||this.renderer.domElement.mozRequestPointerLock||this.renderer.domElement.webkitRequestPointerLock,this.renderer.domElement.requestPointerLock()}pointerLockChangeHandler(){this.isPointerLocked=document.pointerLockElement===this.renderer.domElement||document.mozPointerLockElement===this.renderer.domElement||document.webkitPointerLockElement===this.renderer.domElement,this.isPointerLocked?(document.addEventListener("mousemove",this.mouseMoveHandler,!1),Object.values(this.transformHandles).forEach(e=>{e.visible=!1})):(document.removeEventListener("mousemove",this.mouseMoveHandler,!1),Object.values(this.transformHandles).forEach(e=>{e.visible=!0}))}keyDownHandler(e){const{keyState:t}=this;e.code in t&&(t[e.code]=!0),t.ShiftLeft&&t.ArrowUp&&(this.cameraRig.position.y+=.05),t.ShiftLeft&&t.ArrowDown&&(this.cameraRig.position.y-=.05)}keyUpHandler(e){const{keyState:t}=this;e.code in t&&(t[e.code]=!1)}movePlayerRig(e){const{playerRig:t,keyState:i,vec3:A}=this;A.set((i.KeyD?1:0)-(i.KeyA?1:0),0,(i.KeyS?1:0)-(i.KeyW?1:0)),A.lengthSq()>0&&i.ShiftLeft&&(A.normalize().multiplyScalar(d5*e).applyQuaternion(t.quaternion),t.position.add(A))}resetDeviceTransforms(){const{playerRig:e,cameraRig:t,transformHandles:i}=this;t.position.copy(this.headsetDefaultPosition),t.quaternion.copy(this.headsetDefaultQuaternion),e.position.set(0,0,0),e.quaternion.set(0,0,0,1),i.forEach(A=>{A.position.fromArray(A.userData.defaultPosition),A.quaternion.fromArray(A.userData.defaultQuaternion)})}syncDeviceTransforms(){const{xrDevice:e,cameraRig:t,transformHandles:i}=this;e.position.copy(t.getWorldPosition(this.vec3)),e.quaternion.copy(t.getWorldQuaternion(this.quat)),i.forEach((A,r)=>{const s=e.primaryInputMode==="controller"?e.controllers[r]:e.hands[r];s.position.copy(A.getWorldPosition(this.vec3)),s.quaternion.copy(A.getWorldQuaternion(this.quat))})}renderScene(e){const t=this.xrDevice.fovy/Math.PI*180;let i=!1;this.camera.fov!==t&&(this.camera.fov=t,i=!0);const A=this.xrDevice.canvasDimensions;if(A){const s=this.renderer.domElement;(s.width!==A.width||s.height!==A.height)&&(this.camera.aspect=A.width/A.height,this.renderer.setSize(A.width,A.height),i=!0)}i&&this.camera.updateProjectionMatrix(),this.isPointerLocked?this.cameraRig.getWorldPosition(this.combinedCameraPosition):(this.cameraRig.position.y=this.combinedCameraPosition.y,this.playerRig.position.x=this.combinedCameraPosition.x,this.playerRig.position.z=this.combinedCameraPosition.z),this.forwardHtmlEvents(),this.transformHandles.forEach((s,a)=>{var o;const c=!!(!((o=this.xrDevice.controllers[a])===null||o===void 0)&&o.connected);s.visible=c&&!this.isPointerLocked,c&&s.update(e,this.camera)});const r=Math.min((e-this.lastTime)/1e3,.1);this.movePlayerRig(r),this.syncDeviceTransforms(),this.renderer.render(this.scene,this.camera),this.lastTime=e}get domElement(){return this.renderer.domElement}dispose(){this.renderer.dispose(),document.removeEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mousemove",this.mouseMoveHandler,!1),document.removeEventListener("keydown",this.keyDownHandler.bind(this),!1),document.removeEventListener("keyup",this.keyUpHandler.bind(this),!1)}}const p5="1.1.0";class g5{constructor(e){this.version=p5,e.ipd=0,Nu.getState().setInputMode(e.primaryInputMode),this.devUIContainer=document.createElement("div"),this.devUIContainer.style.position="fixed",this.devUIContainer.style.width="100vw",this.devUIContainer.style.height="100vh",this.devUIContainer.style.top="50vh",this.devUIContainer.style.left="50vw",this.devUIContainer.style.transform="translate(-50%, -50%)",this.devUIContainer.style.pointerEvents="none";const t=this.devUIContainer.attachShadow({mode:"open"});this.inputLayer=new h5(e),Af(t).render(x.jsx(m5,{xrDevice:e,inputLayer:this.inputLayer,shadowRoot:t}));const A=()=>{const r=document.createElement("div");document.body.appendChild(r);const s=r.attachShadow({mode:"open"});Af(s).render(x.jsx(v5,{xrDevice:e,shadowRoot:s}))};document.body?A():window.onload=A}render(e){this.inputLayer.renderScene(e)}get devUICanvas(){return this.inputLayer.domElement}}const m5=({xrDevice:n,inputLayer:e,shadowRoot:t})=>{const[i,A]=Ne.useState(!1);return Ne.useEffect(()=>{const r=()=>{const s=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;A(!!s)};return document.addEventListener("pointerlockchange",r,!1),document.addEventListener("mozpointerlockchange",r,!1),document.addEventListener("webkitpointerlockchange",r,!1),()=>{document.removeEventListener("pointerlockchange",r,!1),document.removeEventListener("mozpointerlockchange",r,!1),document.removeEventListener("webkitpointerlockchange",r,!1)}},[]),x.jsx(Mg,{target:t,disableCSSOMInjection:!0,children:x.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",pointerEvents:"none"},children:[x.jsx(n3,{xrDevice:n,inputLayer:e}),x.jsx(r3,{xrDevice:n,inputLayer:e,pointerLocked:i}),x.jsx(t3,{xrDevice:n,inputLayer:e,pointerLocked:i})]})})},v5=({xrDevice:n,shadowRoot:e})=>{const[t,i]=Et.useState(n.sessionOffered&&!n.activeSession);return Et.useEffect(()=>{setInterval(()=>{i(n.sessionOffered&&!n.activeSession)},1e3)},[]),x.jsx(Mg,{target:e,disableCSSOMInjection:!0,children:x.jsxs(Zl,{style:{zIndex:899,position:"fixed",top:t?"8px":"-30px",display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"space-between",left:"50vw",transform:"translateX(-50%)",transition:"all 0.2s ease-in-out",paddingLeft:"5px",gap:"3px"},children:[x.jsx($l,{size:24}),x.jsx(ii,{onClick:()=>{n.grantOfferedSession()},style:{fontSize:"16px"},children:"Enter XR"})]})})};function x5(){let n=0,e=0;for(let i=0;i<28;i+=7){let A=this.buf[this.pos++];if(n|=(A&127)<<i,!(A&128))return this.assertBounds(),[n,e]}let t=this.buf[this.pos++];if(n|=(t&15)<<28,e=(t&112)>>4,!(t&128))return this.assertBounds(),[n,e];for(let i=3;i<=31;i+=7){let A=this.buf[this.pos++];if(e|=(A&127)<<i,!(A&128))return this.assertBounds(),[n,e]}throw new Error("invalid varint")}function xl(n,e,t){for(let r=0;r<28;r=r+7){const s=n>>>r,a=!(!(s>>>7)&&e==0),o=(a?s|128:s)&255;if(t.push(o),!a)return}const i=n>>>28&15|(e&7)<<4,A=!!(e>>3);if(t.push((A?i|128:i)&255),!!A){for(let r=3;r<31;r=r+7){const s=e>>>r,a=!!(s>>>7),o=(a?s|128:s)&255;if(t.push(o),!a)return}t.push(e>>>31&1)}}const uo=4294967296;function w0(n){const e=n[0]==="-";e&&(n=n.slice(1));const t=1e6;let i=0,A=0;function r(s,a){const o=Number(n.slice(s,a));A*=t,i=i*t+o,i>=uo&&(A=A+(i/uo|0),i=i%uo)}return r(-24,-18),r(-18,-12),r(-12,-6),r(-6),e?Em(i,A):Xu(i,A)}function w5(n,e){let t=Xu(n,e);const i=t.hi&2147483648;i&&(t=Em(t.lo,t.hi));const A=wm(t.lo,t.hi);return i?"-"+A:A}function wm(n,e){if({lo:n,hi:e}=E5(n,e),e<=2097151)return String(uo*e+n);const t=n&16777215,i=(n>>>24|e<<8)&16777215,A=e>>16&65535;let r=t+i*6777216+A*6710656,s=i+A*8147497,a=A*2;const o=1e7;return r>=o&&(s+=Math.floor(r/o),r%=o),s>=o&&(a+=Math.floor(s/o),s%=o),a.toString()+E0(s)+E0(r)}function E5(n,e){return{lo:n>>>0,hi:e>>>0}}function Xu(n,e){return{lo:n|0,hi:e|0}}function Em(n,e){return e=~e,n?n=~n+1:e+=1,Xu(n,e)}const E0=n=>{const e=String(n);return"0000000".slice(e.length)+e};function M0(n,e){if(n>=0){for(;n>127;)e.push(n&127|128),n=n>>>7;e.push(n)}else{for(let t=0;t<9;t++)e.push(n&127|128),n=n>>7;e.push(1)}}function M5(){let n=this.buf[this.pos++],e=n&127;if(!(n&128))return this.assertBounds(),e;if(n=this.buf[this.pos++],e|=(n&127)<<7,!(n&128))return this.assertBounds(),e;if(n=this.buf[this.pos++],e|=(n&127)<<14,!(n&128))return this.assertBounds(),e;if(n=this.buf[this.pos++],e|=(n&127)<<21,!(n&128))return this.assertBounds(),e;n=this.buf[this.pos++],e|=(n&15)<<28;for(let t=5;n&128&&t<10;t++)n=this.buf[this.pos++];if(n&128)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var _0={};const ci=_5();function _5(){const n=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof n.getBigInt64=="function"&&typeof n.getBigUint64=="function"&&typeof n.setBigInt64=="function"&&typeof n.setBigUint64=="function"&&(typeof process!="object"||typeof _0!="object"||_0.BUF_BIGINT_DISABLE!=="1")){const t=BigInt("-9223372036854775808"),i=BigInt("9223372036854775807"),A=BigInt("0"),r=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(s){const a=typeof s=="bigint"?s:BigInt(s);if(a>i||a<t)throw new Error(`invalid int64: ${s}`);return a},uParse(s){const a=typeof s=="bigint"?s:BigInt(s);if(a>r||a<A)throw new Error(`invalid uint64: ${s}`);return a},enc(s){return n.setBigInt64(0,this.parse(s),!0),{lo:n.getInt32(0,!0),hi:n.getInt32(4,!0)}},uEnc(s){return n.setBigInt64(0,this.uParse(s),!0),{lo:n.getInt32(0,!0),hi:n.getInt32(4,!0)}},dec(s,a){return n.setInt32(0,s,!0),n.setInt32(4,a,!0),n.getBigInt64(0,!0)},uDec(s,a){return n.setInt32(0,s,!0),n.setInt32(4,a,!0),n.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(t){return typeof t!="string"&&(t=t.toString()),y0(t),t},uParse(t){return typeof t!="string"&&(t=t.toString()),B0(t),t},enc(t){return typeof t!="string"&&(t=t.toString()),y0(t),w0(t)},uEnc(t){return typeof t!="string"&&(t=t.toString()),B0(t),w0(t)},dec(t,i){return w5(t,i)},uDec(t,i){return wm(t,i)}}}function y0(n){if(!/^-?[0-9]+$/.test(n))throw new Error("invalid int64: "+n)}function B0(n){if(!/^[0-9]+$/.test(n))throw new Error("invalid uint64: "+n)}const wl=Symbol.for("@bufbuild/protobuf/text-encoding");function Mm(){if(globalThis[wl]==null){const n=new globalThis.TextEncoder,e=new globalThis.TextDecoder;globalThis[wl]={encodeUtf8(t){return n.encode(t)},decodeUtf8(t){return e.decode(t)},checkUtf8(t){try{return encodeURIComponent(t),!0}catch{return!1}}}}return globalThis[wl]}var $i;(function(n){n[n.Varint=0]="Varint",n[n.Bit64=1]="Bit64",n[n.LengthDelimited=2]="LengthDelimited",n[n.StartGroup=3]="StartGroup",n[n.EndGroup=4]="EndGroup",n[n.Bit32=5]="Bit32"})($i||($i={}));const y5=34028234663852886e22,B5=-34028234663852886e22,C5=4294967295,S5=2147483647,D5=-2147483648;class gn{constructor(e=Mm().encodeUtf8){this.encodeUtf8=e,this.stack=[],this.chunks=[],this.buf=[]}finish(){this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]);let e=0;for(let A=0;A<this.chunks.length;A++)e+=this.chunks[A].length;let t=new Uint8Array(e),i=0;for(let A=0;A<this.chunks.length;A++)t.set(this.chunks[A],i),i+=this.chunks[A].length;return this.chunks=[],t}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),t=this.stack.pop();if(!t)throw new Error("invalid state, fork stack empty");return this.chunks=t.chunks,this.buf=t.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,t){return this.uint32((e<<3|t)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(C0(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return El(e),M0(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let t=this.encodeUtf8(e);return this.uint32(t.byteLength),this.raw(t)}float(e){b5(e);let t=new Uint8Array(4);return new DataView(t.buffer).setFloat32(0,e,!0),this.raw(t)}double(e){let t=new Uint8Array(8);return new DataView(t.buffer).setFloat64(0,e,!0),this.raw(t)}fixed32(e){C0(e);let t=new Uint8Array(4);return new DataView(t.buffer).setUint32(0,e,!0),this.raw(t)}sfixed32(e){El(e);let t=new Uint8Array(4);return new DataView(t.buffer).setInt32(0,e,!0),this.raw(t)}sint32(e){return El(e),e=(e<<1^e>>31)>>>0,M0(e,this.buf),this}sfixed64(e){let t=new Uint8Array(8),i=new DataView(t.buffer),A=ci.enc(e);return i.setInt32(0,A.lo,!0),i.setInt32(4,A.hi,!0),this.raw(t)}fixed64(e){let t=new Uint8Array(8),i=new DataView(t.buffer),A=ci.uEnc(e);return i.setInt32(0,A.lo,!0),i.setInt32(4,A.hi,!0),this.raw(t)}int64(e){let t=ci.enc(e);return xl(t.lo,t.hi,this.buf),this}sint64(e){let t=ci.enc(e),i=t.hi>>31,A=t.lo<<1^i,r=(t.hi<<1|t.lo>>>31)^i;return xl(A,r,this.buf),this}uint64(e){let t=ci.uEnc(e);return xl(t.lo,t.hi,this.buf),this}}class ht{constructor(e,t=Mm().decodeUtf8){this.decodeUtf8=t,this.varint64=x5,this.uint32=M5,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.uint32(),t=e>>>3,i=e&7;if(t<=0||i<0||i>5)throw new Error("illegal tag: field no "+t+" wire type "+i);return[t,i]}skip(e,t){let i=this.pos;switch(e){case $i.Varint:for(;this.buf[this.pos++]&128;);break;case $i.Bit64:this.pos+=4;case $i.Bit32:this.pos+=4;break;case $i.LengthDelimited:let A=this.uint32();this.pos+=A;break;case $i.StartGroup:for(;;){const[r,s]=this.tag();if(s===$i.EndGroup){if(t!==void 0&&r!==t)throw new Error("invalid end group tag");break}this.skip(s,r)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(i,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return ci.dec(...this.varint64())}uint64(){return ci.uDec(...this.varint64())}sint64(){let[e,t]=this.varint64(),i=-(e&1);return e=(e>>>1|(t&1)<<31)^i,t=t>>>1^i,ci.dec(e,t)}bool(){let[e,t]=this.varint64();return e!==0||t!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return ci.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return ci.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),t=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(t,t+e)}string(){return this.decodeUtf8(this.bytes())}}function El(n){if(typeof n=="string")n=Number(n);else if(typeof n!="number")throw new Error("invalid int32: "+typeof n);if(!Number.isInteger(n)||n>S5||n<D5)throw new Error("invalid int32: "+n)}function C0(n){if(typeof n=="string")n=Number(n);else if(typeof n!="number")throw new Error("invalid uint32: "+typeof n);if(!Number.isInteger(n)||n>C5||n<0)throw new Error("invalid uint32: "+n)}function b5(n){if(typeof n=="string"){const e=n;if(n=Number(n),isNaN(n)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof n!="number")throw new Error("invalid float32: "+typeof n);if(Number.isFinite(n)&&(n>y5||n<B5))throw new Error("invalid float32: "+n)}function S0(){return{x:0,y:0}}const Sr={encode(n,e=new gn){return n.x!==0&&e.uint32(13).float(n.x),n.y!==0&&e.uint32(21).float(n.y),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=S0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==13)break;A.x=t.float();continue}case 2:{if(r!==21)break;A.y=t.float();continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{x:Ft(n.x)?globalThis.Number(n.x):0,y:Ft(n.y)?globalThis.Number(n.y):0}},toJSON(n){const e={};return n.x!==0&&(e.x=n.x),n.y!==0&&(e.y=n.y),e},create(n){return Sr.fromPartial(n??{})},fromPartial(n){var e,t;const i=S0();return i.x=(e=n.x)!==null&&e!==void 0?e:0,i.y=(t=n.y)!==null&&t!==void 0?t:0,i}};function D0(){return{width:0,height:0}}const Dr={encode(n,e=new gn){return n.width!==0&&e.uint32(13).float(n.width),n.height!==0&&e.uint32(21).float(n.height),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=D0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==13)break;A.width=t.float();continue}case 2:{if(r!==21)break;A.height=t.float();continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{width:Ft(n.width)?globalThis.Number(n.width):0,height:Ft(n.height)?globalThis.Number(n.height):0}},toJSON(n){const e={};return n.width!==0&&(e.width=n.width),n.height!==0&&(e.height=n.height),e},create(n){return Dr.fromPartial(n??{})},fromPartial(n){var e,t;const i=D0();return i.width=(e=n.width)!==null&&e!==void 0?e:0,i.height=(t=n.height)!==null&&t!==void 0?t:0,i}};function b0(){return{x:0,y:0,z:0}}const Vn={encode(n,e=new gn){return n.x!==0&&e.uint32(13).float(n.x),n.y!==0&&e.uint32(21).float(n.y),n.z!==0&&e.uint32(29).float(n.z),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=b0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==13)break;A.x=t.float();continue}case 2:{if(r!==21)break;A.y=t.float();continue}case 3:{if(r!==29)break;A.z=t.float();continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{x:Ft(n.x)?globalThis.Number(n.x):0,y:Ft(n.y)?globalThis.Number(n.y):0,z:Ft(n.z)?globalThis.Number(n.z):0}},toJSON(n){const e={};return n.x!==0&&(e.x=n.x),n.y!==0&&(e.y=n.y),n.z!==0&&(e.z=n.z),e},create(n){return Vn.fromPartial(n??{})},fromPartial(n){var e,t,i;const A=b0();return A.x=(e=n.x)!==null&&e!==void 0?e:0,A.y=(t=n.y)!==null&&t!==void 0?t:0,A.z=(i=n.z)!==null&&i!==void 0?i:0,A}};function P0(){return{width:0,height:0,depth:0}}const br={encode(n,e=new gn){return n.width!==0&&e.uint32(13).float(n.width),n.height!==0&&e.uint32(21).float(n.height),n.depth!==0&&e.uint32(29).float(n.depth),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=P0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==13)break;A.width=t.float();continue}case 2:{if(r!==21)break;A.height=t.float();continue}case 3:{if(r!==29)break;A.depth=t.float();continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{width:Ft(n.width)?globalThis.Number(n.width):0,height:Ft(n.height)?globalThis.Number(n.height):0,depth:Ft(n.depth)?globalThis.Number(n.depth):0}},toJSON(n){const e={};return n.width!==0&&(e.width=n.width),n.height!==0&&(e.height=n.height),n.depth!==0&&(e.depth=n.depth),e},create(n){return br.fromPartial(n??{})},fromPartial(n){var e,t,i;const A=P0();return A.width=(e=n.width)!==null&&e!==void 0?e:0,A.height=(t=n.height)!==null&&t!==void 0?t:0,A.depth=(i=n.depth)!==null&&i!==void 0?i:0,A}};function T0(){return{x:0,y:0,z:0,w:0}}const Pr={encode(n,e=new gn){return n.x!==0&&e.uint32(13).float(n.x),n.y!==0&&e.uint32(21).float(n.y),n.z!==0&&e.uint32(29).float(n.z),n.w!==0&&e.uint32(37).float(n.w),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=T0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==13)break;A.x=t.float();continue}case 2:{if(r!==21)break;A.y=t.float();continue}case 3:{if(r!==29)break;A.z=t.float();continue}case 4:{if(r!==37)break;A.w=t.float();continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{x:Ft(n.x)?globalThis.Number(n.x):0,y:Ft(n.y)?globalThis.Number(n.y):0,z:Ft(n.z)?globalThis.Number(n.z):0,w:Ft(n.w)?globalThis.Number(n.w):0}},toJSON(n){const e={};return n.x!==0&&(e.x=n.x),n.y!==0&&(e.y=n.y),n.z!==0&&(e.z=n.z),n.w!==0&&(e.w=n.w),e},create(n){return Pr.fromPartial(n??{})},fromPartial(n){var e,t,i,A;const r=T0();return r.x=(e=n.x)!==null&&e!==void 0?e:0,r.y=(t=n.y)!==null&&t!==void 0?t:0,r.z=(i=n.z)!==null&&i!==void 0?i:0,r.w=(A=n.w)!==null&&A!==void 0?A:0,r}};function I0(){return{offset:void 0,extent:void 0}}const Tr={encode(n,e=new gn){return n.offset!==void 0&&Sr.encode(n.offset,e.uint32(10).fork()).join(),n.extent!==void 0&&Dr.encode(n.extent,e.uint32(18).fork()).join(),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=I0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==10)break;A.offset=Sr.decode(t,t.uint32());continue}case 2:{if(r!==18)break;A.extent=Dr.decode(t,t.uint32());continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{offset:Ft(n.offset)?Sr.fromJSON(n.offset):void 0,extent:Ft(n.extent)?Dr.fromJSON(n.extent):void 0}},toJSON(n){const e={};return n.offset!==void 0&&(e.offset=Sr.toJSON(n.offset)),n.extent!==void 0&&(e.extent=Dr.toJSON(n.extent)),e},create(n){return Tr.fromPartial(n??{})},fromPartial(n){const e=I0();return e.offset=n.offset!==void 0&&n.offset!==null?Sr.fromPartial(n.offset):void 0,e.extent=n.extent!==void 0&&n.extent!==null?Dr.fromPartial(n.extent):void 0,e}};function R0(){return{offset:void 0,extent:void 0}}const Ir={encode(n,e=new gn){return n.offset!==void 0&&Vn.encode(n.offset,e.uint32(10).fork()).join(),n.extent!==void 0&&br.encode(n.extent,e.uint32(18).fork()).join(),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=R0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==10)break;A.offset=Vn.decode(t,t.uint32());continue}case 2:{if(r!==18)break;A.extent=br.decode(t,t.uint32());continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{offset:Ft(n.offset)?Vn.fromJSON(n.offset):void 0,extent:Ft(n.extent)?br.fromJSON(n.extent):void 0}},toJSON(n){const e={};return n.offset!==void 0&&(e.offset=Vn.toJSON(n.offset)),n.extent!==void 0&&(e.extent=br.toJSON(n.extent)),e},create(n){return Ir.fromPartial(n??{})},fromPartial(n){const e=R0();return e.offset=n.offset!==void 0&&n.offset!==null?Vn.fromPartial(n.offset):void 0,e.extent=n.extent!==void 0&&n.extent!==null?br.fromPartial(n.extent):void 0,e}};function Q0(){return{orientation:void 0,position:void 0}}const Rr={encode(n,e=new gn){return n.orientation!==void 0&&Pr.encode(n.orientation,e.uint32(10).fork()).join(),n.position!==void 0&&Vn.encode(n.position,e.uint32(18).fork()).join(),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=Q0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==10)break;A.orientation=Pr.decode(t,t.uint32());continue}case 2:{if(r!==18)break;A.position=Vn.decode(t,t.uint32());continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{orientation:Ft(n.orientation)?Pr.fromJSON(n.orientation):void 0,position:Ft(n.position)?Vn.fromJSON(n.position):void 0}},toJSON(n){const e={};return n.orientation!==void 0&&(e.orientation=Pr.toJSON(n.orientation)),n.position!==void 0&&(e.position=Vn.toJSON(n.position)),e},create(n){return Rr.fromPartial(n??{})},fromPartial(n){const e=Q0();return e.orientation=n.orientation!==void 0&&n.orientation!==null?Pr.fromPartial(n.orientation):void 0,e.position=n.position!==void 0&&n.position!==null?Vn.fromPartial(n.position):void 0,e}};function Ft(n){return n!=null}var fs;(function(n){n[n.Keyboard=0]="Keyboard",n[n.UNRECOGNIZED=-1]="UNRECOGNIZED"})(fs||(fs={}));function P5(n){switch(n){case 0:case"Keyboard":return fs.Keyboard;case-1:case"UNRECOGNIZED":default:return fs.UNRECOGNIZED}}function T5(n){switch(n){case fs.Keyboard:return"Keyboard";case fs.UNRECOGNIZED:default:return"UNRECOGNIZED"}}var de;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.FLOOR=1]="FLOOR",n[n.CEILING=2]="CEILING",n[n.WALL_FACE=3]="WALL_FACE",n[n.TABLE=4]="TABLE",n[n.COUCH=5]="COUCH",n[n.DOOR_FRAME=6]="DOOR_FRAME",n[n.WINDOW_FRAME=7]="WINDOW_FRAME",n[n.OTHER=8]="OTHER",n[n.STORAGE=9]="STORAGE",n[n.BED=10]="BED",n[n.SCREEN=11]="SCREEN",n[n.LAMP=12]="LAMP",n[n.PLANT=13]="PLANT",n[n.WALL_ART=14]="WALL_ART",n[n.GLOBAL_MESH=15]="GLOBAL_MESH",n[n.INVISIBLE_WALL_FACE=16]="INVISIBLE_WALL_FACE",n[n.CHAIR=17]="CHAIR",n[n.INNER_WALL_FACE=18]="INNER_WALL_FACE",n[n.OTHER_ROOM_FACE=19]="OTHER_ROOM_FACE",n[n.OPENING=20]="OPENING",n[n.UNRECOGNIZED=-1]="UNRECOGNIZED"})(de||(de={}));function I5(n){switch(n){case 0:case"UNKNOWN":return de.UNKNOWN;case 1:case"FLOOR":return de.FLOOR;case 2:case"CEILING":return de.CEILING;case 3:case"WALL_FACE":return de.WALL_FACE;case 4:case"TABLE":return de.TABLE;case 5:case"COUCH":return de.COUCH;case 6:case"DOOR_FRAME":return de.DOOR_FRAME;case 7:case"WINDOW_FRAME":return de.WINDOW_FRAME;case 8:case"OTHER":return de.OTHER;case 9:case"STORAGE":return de.STORAGE;case 10:case"BED":return de.BED;case 11:case"SCREEN":return de.SCREEN;case 12:case"LAMP":return de.LAMP;case 13:case"PLANT":return de.PLANT;case 14:case"WALL_ART":return de.WALL_ART;case 15:case"GLOBAL_MESH":return de.GLOBAL_MESH;case 16:case"INVISIBLE_WALL_FACE":return de.INVISIBLE_WALL_FACE;case 17:case"CHAIR":return de.CHAIR;case 18:case"INNER_WALL_FACE":return de.INNER_WALL_FACE;case 19:case"OTHER_ROOM_FACE":return de.OTHER_ROOM_FACE;case 20:case"OPENING":return de.OPENING;case-1:case"UNRECOGNIZED":default:return de.UNRECOGNIZED}}function cu(n){switch(n){case de.UNKNOWN:return"UNKNOWN";case de.FLOOR:return"FLOOR";case de.CEILING:return"CEILING";case de.WALL_FACE:return"WALL_FACE";case de.TABLE:return"TABLE";case de.COUCH:return"COUCH";case de.DOOR_FRAME:return"DOOR_FRAME";case de.WINDOW_FRAME:return"WINDOW_FRAME";case de.OTHER:return"OTHER";case de.STORAGE:return"STORAGE";case de.BED:return"BED";case de.SCREEN:return"SCREEN";case de.LAMP:return"LAMP";case de.PLANT:return"PLANT";case de.WALL_ART:return"WALL_ART";case de.GLOBAL_MESH:return"GLOBAL_MESH";case de.INVISIBLE_WALL_FACE:return"INVISIBLE_WALL_FACE";case de.CHAIR:return"CHAIR";case de.INNER_WALL_FACE:return"INNER_WALL_FACE";case de.OTHER_ROOM_FACE:return"OTHER_ROOM_FACE";case de.OPENING:return"OPENING";case de.UNRECOGNIZED:default:return"UNRECOGNIZED"}}function U0(){return{floorUuid:"",ceilingUuid:"",wallUuids:[]}}const Qr={encode(n,e=new gn){n.floorUuid!==""&&e.uint32(10).string(n.floorUuid),n.ceilingUuid!==""&&e.uint32(18).string(n.ceilingUuid);for(const t of n.wallUuids)e.uint32(26).string(t);return e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=U0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==10)break;A.floorUuid=t.string();continue}case 2:{if(r!==18)break;A.ceilingUuid=t.string();continue}case 3:{if(r!==26)break;A.wallUuids.push(t.string());continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{floorUuid:en(n.floorUuid)?globalThis.String(n.floorUuid):"",ceilingUuid:en(n.ceilingUuid)?globalThis.String(n.ceilingUuid):"",wallUuids:globalThis.Array.isArray(n==null?void 0:n.wallUuids)?n.wallUuids.map(e=>globalThis.String(e)):[]}},toJSON(n){var e;const t={};return n.floorUuid!==""&&(t.floorUuid=n.floorUuid),n.ceilingUuid!==""&&(t.ceilingUuid=n.ceilingUuid),!((e=n.wallUuids)===null||e===void 0)&&e.length&&(t.wallUuids=n.wallUuids),t},create(n){return Qr.fromPartial(n??{})},fromPartial(n){var e,t,i;const A=U0();return A.floorUuid=(e=n.floorUuid)!==null&&e!==void 0?e:"",A.ceilingUuid=(t=n.ceilingUuid)!==null&&t!==void 0?t:"",A.wallUuids=((i=n.wallUuids)===null||i===void 0?void 0:i.map(r=>r))||[],A}};function L0(){return{uuids:[]}}const Ur={encode(n,e=new gn){for(const t of n.uuids)e.uint32(10).string(t);return e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=L0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==10)break;A.uuids.push(t.string());continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{uuids:globalThis.Array.isArray(n==null?void 0:n.uuids)?n.uuids.map(e=>globalThis.String(e)):[]}},toJSON(n){var e;const t={};return!((e=n.uuids)===null||e===void 0)&&e.length&&(t.uuids=n.uuids),t},create(n){return Ur.fromPartial(n??{})},fromPartial(n){var e;const t=L0();return t.uuids=((e=n.uuids)===null||e===void 0?void 0:e.map(i=>i))||[],t}};function F0(){return{vertices:new Uint8Array(0)}}const Lr={encode(n,e=new gn){return n.vertices.length!==0&&e.uint32(10).bytes(n.vertices),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=F0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==10)break;A.vertices=t.bytes();continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{vertices:en(n.vertices)?lu(n.vertices):new Uint8Array(0)}},toJSON(n){const e={};return n.vertices.length!==0&&(e.vertices=uu(n.vertices)),e},create(n){return Lr.fromPartial(n??{})},fromPartial(n){var e;const t=F0();return t.vertices=(e=n.vertices)!==null&&e!==void 0?e:new Uint8Array(0),t}};function O0(){return{vertices:new Uint8Array(0),indices:new Uint8Array(0)}}const Fr={encode(n,e=new gn){return n.vertices.length!==0&&e.uint32(10).bytes(n.vertices),n.indices.length!==0&&e.uint32(18).bytes(n.indices),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=O0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==10)break;A.vertices=t.bytes();continue}case 2:{if(r!==18)break;A.indices=t.bytes();continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{vertices:en(n.vertices)?lu(n.vertices):new Uint8Array(0),indices:en(n.indices)?lu(n.indices):new Uint8Array(0)}},toJSON(n){const e={};return n.vertices.length!==0&&(e.vertices=uu(n.vertices)),n.indices.length!==0&&(e.indices=uu(n.indices)),e},create(n){return Fr.fromPartial(n??{})},fromPartial(n){var e,t;const i=O0();return i.vertices=(e=n.vertices)!==null&&e!==void 0?e:new Uint8Array(0),i.indices=(t=n.indices)!==null&&t!==void 0?t:new Uint8Array(0),i}};function N0(){return{classType:0}}const Or={encode(n,e=new gn){return n.classType!==0&&e.uint32(8).int32(n.classType),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=N0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==8)break;A.classType=t.int32();continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{classType:en(n.classType)?P5(n.classType):0}},toJSON(n){const e={};return n.classType!==0&&(e.classType=T5(n.classType)),e},create(n){return Or.fromPartial(n??{})},fromPartial(n){var e;const t=N0();return t.classType=(e=n.classType)!==null&&e!==void 0?e:0,t}};function k0(){return{uuid:"",semanticLabel_META:void 0,locatable_META:void 0,boundary2D_META:void 0,bounded2D_META:void 0,bounded3D_META:void 0,roomLayout_META:void 0,spaceContainer_META:void 0,triangleMesh_META:void 0,dynamicObject_META:void 0}}const _m={encode(n,e=new gn){return n.uuid!==""&&e.uint32(10).string(n.uuid),n.semanticLabel_META!==void 0&&e.uint32(16).int32(n.semanticLabel_META),n.locatable_META!==void 0&&Rr.encode(n.locatable_META,e.uint32(26).fork()).join(),n.boundary2D_META!==void 0&&Lr.encode(n.boundary2D_META,e.uint32(34).fork()).join(),n.bounded2D_META!==void 0&&Tr.encode(n.bounded2D_META,e.uint32(42).fork()).join(),n.bounded3D_META!==void 0&&Ir.encode(n.bounded3D_META,e.uint32(50).fork()).join(),n.roomLayout_META!==void 0&&Qr.encode(n.roomLayout_META,e.uint32(58).fork()).join(),n.spaceContainer_META!==void 0&&Ur.encode(n.spaceContainer_META,e.uint32(66).fork()).join(),n.triangleMesh_META!==void 0&&Fr.encode(n.triangleMesh_META,e.uint32(74).fork()).join(),n.dynamicObject_META!==void 0&&Or.encode(n.dynamicObject_META,e.uint32(82).fork()).join(),e},decode(n,e){const t=n instanceof ht?n:new ht(n);let i=e===void 0?t.len:t.pos+e;const A=k0();for(;t.pos<i;){const r=t.uint32();switch(r>>>3){case 1:{if(r!==10)break;A.uuid=t.string();continue}case 2:{if(r!==16)break;A.semanticLabel_META=t.int32();continue}case 3:{if(r!==26)break;A.locatable_META=Rr.decode(t,t.uint32());continue}case 4:{if(r!==34)break;A.boundary2D_META=Lr.decode(t,t.uint32());continue}case 5:{if(r!==42)break;A.bounded2D_META=Tr.decode(t,t.uint32());continue}case 6:{if(r!==50)break;A.bounded3D_META=Ir.decode(t,t.uint32());continue}case 7:{if(r!==58)break;A.roomLayout_META=Qr.decode(t,t.uint32());continue}case 8:{if(r!==66)break;A.spaceContainer_META=Ur.decode(t,t.uint32());continue}case 9:{if(r!==74)break;A.triangleMesh_META=Fr.decode(t,t.uint32());continue}case 10:{if(r!==82)break;A.dynamicObject_META=Or.decode(t,t.uint32());continue}}if((r&7)===4||r===0)break;t.skip(r&7)}return A},fromJSON(n){return{uuid:en(n.uuid)?globalThis.String(n.uuid):"",semanticLabel_META:en(n.semanticLabel_META)?I5(n.semanticLabel_META):void 0,locatable_META:en(n.locatable_META)?Rr.fromJSON(n.locatable_META):void 0,boundary2D_META:en(n.boundary2D_META)?Lr.fromJSON(n.boundary2D_META):void 0,bounded2D_META:en(n.bounded2D_META)?Tr.fromJSON(n.bounded2D_META):void 0,bounded3D_META:en(n.bounded3D_META)?Ir.fromJSON(n.bounded3D_META):void 0,roomLayout_META:en(n.roomLayout_META)?Qr.fromJSON(n.roomLayout_META):void 0,spaceContainer_META:en(n.spaceContainer_META)?Ur.fromJSON(n.spaceContainer_META):void 0,triangleMesh_META:en(n.triangleMesh_META)?Fr.fromJSON(n.triangleMesh_META):void 0,dynamicObject_META:en(n.dynamicObject_META)?Or.fromJSON(n.dynamicObject_META):void 0}},toJSON(n){const e={};return n.uuid!==""&&(e.uuid=n.uuid),n.semanticLabel_META!==void 0&&(e.semanticLabel_META=cu(n.semanticLabel_META)),n.locatable_META!==void 0&&(e.locatable_META=Rr.toJSON(n.locatable_META)),n.boundary2D_META!==void 0&&(e.boundary2D_META=Lr.toJSON(n.boundary2D_META)),n.bounded2D_META!==void 0&&(e.bounded2D_META=Tr.toJSON(n.bounded2D_META)),n.bounded3D_META!==void 0&&(e.bounded3D_META=Ir.toJSON(n.bounded3D_META)),n.roomLayout_META!==void 0&&(e.roomLayout_META=Qr.toJSON(n.roomLayout_META)),n.spaceContainer_META!==void 0&&(e.spaceContainer_META=Ur.toJSON(n.spaceContainer_META)),n.triangleMesh_META!==void 0&&(e.triangleMesh_META=Fr.toJSON(n.triangleMesh_META)),n.dynamicObject_META!==void 0&&(e.dynamicObject_META=Or.toJSON(n.dynamicObject_META)),e},create(n){return _m.fromPartial(n??{})},fromPartial(n){var e,t;const i=k0();return i.uuid=(e=n.uuid)!==null&&e!==void 0?e:"",i.semanticLabel_META=(t=n.semanticLabel_META)!==null&&t!==void 0?t:void 0,i.locatable_META=n.locatable_META!==void 0&&n.locatable_META!==null?Rr.fromPartial(n.locatable_META):void 0,i.boundary2D_META=n.boundary2D_META!==void 0&&n.boundary2D_META!==null?Lr.fromPartial(n.boundary2D_META):void 0,i.bounded2D_META=n.bounded2D_META!==void 0&&n.bounded2D_META!==null?Tr.fromPartial(n.bounded2D_META):void 0,i.bounded3D_META=n.bounded3D_META!==void 0&&n.bounded3D_META!==null?Ir.fromPartial(n.bounded3D_META):void 0,i.roomLayout_META=n.roomLayout_META!==void 0&&n.roomLayout_META!==null?Qr.fromPartial(n.roomLayout_META):void 0,i.spaceContainer_META=n.spaceContainer_META!==void 0&&n.spaceContainer_META!==null?Ur.fromPartial(n.spaceContainer_META):void 0,i.triangleMesh_META=n.triangleMesh_META!==void 0&&n.triangleMesh_META!==null?Fr.fromPartial(n.triangleMesh_META):void 0,i.dynamicObject_META=n.dynamicObject_META!==void 0&&n.dynamicObject_META!==null?Or.fromPartial(n.dynamicObject_META):void 0,i}};function lu(n){if(globalThis.Buffer)return Uint8Array.from(globalThis.Buffer.from(n,"base64"));{const e=globalThis.atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;++i)t[i]=e.charCodeAt(i);return t}}function uu(n){if(globalThis.Buffer)return globalThis.Buffer.from(n).toString("base64");{const e=[];return n.forEach(t=>{e.push(globalThis.String.fromCharCode(t))}),globalThis.btoa(e.join(""))}}function en(n){return n!=null}var pt;(function(n){n.Locatable="locatable",n.Bounded3D="bounded3D",n.Bounded2D="bounded2D",n.TriangleMesh="triangleMesh",n.SemanticLabel="semanticLabel"})(pt||(pt={}));class da extends EventTarget{constructor(e){super(),this._spatialEntity=e}}class R5 extends da{constructor(e,t){super(e),this._offset=new it,this._extent=new it,this.type=pt.Bounded2D;const{offset:i,extent:A}=t;this._offset.set(i.x,i.y),this._extent.set(A.width,A.height),this.buildGeometry()}buildGeometry(){var e;const t=new fa(this._extent.x,this._extent.y);t.translate(this._offset.x+this._extent.x/2,this._offset.y+this._extent.y/2,0),t.rotateX(Math.PI/2),(e=this._spatialEntity.geometry)===null||e===void 0||e.dispose(),this._spatialEntity.geometry=t}get offset(){return this._offset}get extent(){return this._extent}get initData(){return{offset:this.offset,extent:this.extent}}get pbData(){return{offset:{x:this._offset.x,y:this._offset.y},extent:{width:this._extent.x,height:this._extent.y}}}}class Q5 extends da{constructor(e,t){super(e),this._offset=new O,this._extent=new O,this.type=pt.Bounded3D;const{offset:i,extent:A}=t;this._offset.set(i.x,i.y,i.z),this._extent.set(A.width,A.height,A.depth),this.buildGeometry()}buildGeometry(){var e;const t=new vs(this._extent.x,this._extent.y,this._extent.z);t.translate(this._offset.x+this._extent.x/2,this._offset.y+this._extent.y/2,this._offset.z+this._extent.z/2),(e=this._spatialEntity.geometry)===null||e===void 0||e.dispose(),this._spatialEntity.geometry=t}get offset(){return this._offset}get extent(){return this._extent}get initData(){return{offset:this.offset,extent:this.extent}}get pbData(){return{offset:{x:this._offset.x,y:this._offset.y,z:this._offset.z},extent:{width:this._extent.x,height:this._extent.y,depth:this._extent.z}}}}class U5 extends da{constructor(e,t){super(e),this.type=pt.Locatable,t.position&&this.position.copy(t.position),t.orientation&&this.orientation.copy(t.orientation)}get position(){return this._spatialEntity.position}get rotation(){return this._spatialEntity.rotation}get orientation(){return this._spatialEntity.quaternion}get initData(){return{position:{x:this.position.x,y:this.position.y,z:this.position.z},orientation:{x:this.orientation.x,y:this.orientation.y,z:this.orientation.z,w:this.orientation.w}}}get pbData(){return{position:{x:this._spatialEntity.position.x,y:this._spatialEntity.position.y,z:this._spatialEntity.position.z},orientation:{x:this._spatialEntity.quaternion.x,y:this._spatialEntity.quaternion.y,z:this._spatialEntity.quaternion.z,w:this._spatialEntity.quaternion.w}}}}function z0(n){return n.toLowerCase().replace(/_/g," ").trim()}class L5 extends da{constructor(e,t){super(e),this._semanticLabel=t,this.type=pt.SemanticLabel,this._spatialEntity.name=z0(cu(t))}get semanticLabel(){return this._semanticLabel}set semanticLabel(e){Object.values(de).includes(e)?this._semanticLabel=e:this._semanticLabel=de.UNRECOGNIZED,this._spatialEntity.name=z0(cu(this._semanticLabel))}get initData(){return this._semanticLabel}get pbData(){return this._semanticLabel}}function G0(n){const e=new Float32Array(n.length*3);let t=0;for(const i of n)e[t++]=i.x,e[t++]=i.y,e[t++]=i.z;return e}class F5 extends da{constructor(e,t){super(e),this._polygonCount=0,this._vertexCount=0,this._dimensions={x:0,y:0,z:0},this.type=pt.TriangleMesh;const{vertices:i,indices:A}=t,r=new Float32Array(i.buffer),s=new Uint32Array(A.buffer),a=[];for(let c=0;c<r.length/3;c++)a.push({x:r[3*c],y:r[3*c+1],z:r[3*c+2]});this._vertices=a,this._indices=[...s],this.buildGeometry();const o=e.material;o.polygonOffset=!0,o.polygonOffsetFactor=1,o.polygonOffsetUnits=.005,o.color.setHex(13948116),e.renderOrder=999}buildGeometry(){var e;const t=new $n,i=G0(this._vertices);t.setAttribute("position",new Ln(i,3)),t.setIndex(new Ln(new Uint16Array(this._indices),1)),(e=this._spatialEntity.geometry)===null||e===void 0||e.dispose(),this._spatialEntity.geometry=t,t.computeVertexNormals(),this._vertexCount=t.attributes.position.count,this._polygonCount=t.index?t.index.count/3:this._vertexCount/3,t.computeBoundingBox();const A=t.boundingBox;this._dimensions={x:A.max.x-A.min.x,y:A.max.y-A.min.y,z:A.max.z-A.min.z}}get vertexCount(){return this._vertexCount}get polygonCount(){return this._polygonCount}get dimensions(){return this._dimensions}get initData(){return{vertices:this._vertices,indices:this._indices}}get pbData(){const e=G0(this._vertices),t=new Uint32Array(this._indices);return{vertices:new Uint8Array(e.buffer),indices:new Uint8Array(t.buffer)}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function O5(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}var Hn;(function(n){n.Plane="plane",n.Box="box",n.Mesh="mesh"})(Hn||(Hn={}));const N5={[de.OTHER]:je.Other,[de.TABLE]:je.Table,[de.COUCH]:je.Couch,[de.FLOOR]:je.Floor,[de.CEILING]:je.Ceiling,[de.WALL_FACE]:je.Wall,[de.INVISIBLE_WALL_FACE]:je.Window,[de.INNER_WALL_FACE]:je.Wall,[de.DOOR_FRAME]:je.Door,[de.WINDOW_FRAME]:je.Window,[de.WALL_ART]:je.WallArt,[de.STORAGE]:je.Shelf,[de.BED]:je.Bed,[de.LAMP]:je.Lamp,[de.SCREEN]:je.Screen,[de.PLANT]:je.Plant,[de.GLOBAL_MESH]:je.GlobalMesh,[de.CHAIR]:je.Couch,[de.UNKNOWN]:je.Other,[de.OTHER_ROOM_FACE]:je.Other,[de.OPENING]:je.Other,[de.UNRECOGNIZED]:je.Other};class Uo extends Kn{constructor(e=O5()){super(void 0,new MB({color:16777215*Math.random(),flatShading:!0})),this.name="generic spatial entity",this.isSpatialEntity=!0,this._componentMap=new Map,this._spatialUUID=e}get spatialUUID(){return this._spatialUUID}updateMatrixWorld(e){super.updateMatrixWorld(e)}addComponent(e,t){let i=null;switch(e){case pt.Locatable:i=new U5(this,t);break;case pt.Bounded3D:i=new Q5(this,t);break;case pt.Bounded2D:i=new R5(this,t);break;case pt.TriangleMesh:i=new F5(this,t);break;case pt.SemanticLabel:i=new L5(this,t);break}i&&this._componentMap.set(e,i)}getComponent(e){return this._componentMap.get(e)}duplicate(){const e=new Uo;return this._componentMap.forEach((t,i,A)=>{e.addComponent(t.type,t.initData)}),e}get nativeEntity(){if(!this._nativeEntity){const e=new XA({x:this.position.x,y:this.position.y,z:this.position.z,w:1},{x:this.quaternion.x,y:this.quaternion.y,z:this.quaternion.z,w:this.quaternion.w}),t=N5[this.getComponent(pt.SemanticLabel).semanticLabel];if(this.entityType===Hn.Plane){const{offset:i,extent:A}=this.getComponent(pt.Bounded2D),r=[new DOMPointReadOnly(i.x,0,i.y),new DOMPointReadOnly(i.x+A.x,0,i.y),new DOMPointReadOnly(i.x+A.x,0,i.y+A.y),new DOMPointReadOnly(i.x,0,i.y+A.y),new DOMPointReadOnly(i.x,0,i.y)];this._nativeEntity=new x1(e,r,t)}else if(this.entityType===Hn.Box||this.entityType===Hn.Mesh){const i=this.geometry.getAttribute("position").array,A=new Uint32Array(this.geometry.index.array);this._nativeEntity=new p1(e,i,A,t)}}return this._nativeEntity}static fromPBJSON(e){const t=_m.fromJSON(e);if(t.locatable_META){const i=new Uo(t.uuid);return i.addComponent(pt.Locatable,t.locatable_META),t.semanticLabel_META&&i.addComponent(pt.SemanticLabel,t.semanticLabel_META),t.bounded2D_META?i.addComponent(pt.Bounded2D,t.bounded2D_META):t.bounded3D_META?i.addComponent(pt.Bounded3D,t.bounded3D_META):t.triangleMesh_META&&i.addComponent(pt.TriangleMesh,t.triangleMesh_META),i}}get entityType(){if(this.getComponent(pt.Bounded2D))return Hn.Plane;if(this.getComponent(pt.Bounded3D))return Hn.Box;if(this.getComponent(pt.TriangleMesh))return Hn.Mesh}static toPBJSON(e){var t,i,A,r,s;return{uuid:e.spatialUUID,locatable_META:(t=e.getComponent(pt.Locatable))===null||t===void 0?void 0:t.pbData,boundary2D_META:void 0,bounded2D_META:(i=e.getComponent(pt.Bounded2D))===null||i===void 0?void 0:i.pbData,bounded3D_META:(A=e.getComponent(pt.Bounded3D))===null||A===void 0?void 0:A.pbData,semanticLabel_META:(r=e.getComponent(pt.SemanticLabel))===null||r===void 0?void 0:r.pbData,roomLayout_META:void 0,spaceContainer_META:void 0,triangleMesh_META:(s=e.getComponent(pt.TriangleMesh))===null||s===void 0?void 0:s.pbData,dynamicObject_META:void 0}}}const k5="0.2.2",z5=new O(0,0,-1);class G5 extends EventTarget{constructor(e){super(),this.xrDevice=e,this.trackedPlanes=new Set,this.trackedMeshes=new Set,this.version=k5,this.objectMap=new Map,this.planes=new di,this.boxes=new di,this.meshes=new di,this.tempPosition=new O,this.tempQuaternion=new lA,this.tempDirection=new O,this.tempScale=new O,this.tempMatrix=new Pt,this.raycaster=new _B,this.hitTestTarget=new di,this.hitTestMarker=new sn,this.worldNormal=new O,this.normalMatrix=new Oe,this.scene=new hm,this.scene.background=new et(4079166),this.camera=new yn(50,window.innerWidth/window.innerHeight,.1,40),this.camera.position.set(0,1.6,5);const t=new yB(50,50);this.scene.add(t),this.scene.add(this.planes,this.boxes,this.meshes),this.planes.renderOrder=1,this.boxes.renderOrder=2,this.meshes.renderOrder=3,this.renderer=new dm({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="50vh",this.renderer.domElement.style.left="50vw",this.renderer.domElement.style.transform="translate(-50%, -50%)",this.hitTestTarget.add(this.hitTestMarker),this.hitTestMarker.rotateX(Math.PI/2)}get environmentCanvas(){return this.renderer.domElement}get planesVisible(){return this.planes.visible}set planesVisible(e){this.planes.visible=e}get boundingBoxesVisible(){return this.boxes.visible}set boundingBoxesVisible(e){this.boxes.visible=e}get meshesVisible(){return this.meshes.visible}set meshesVisible(e){this.meshes.visible=e}render(){this.camera.position.copy(this.xrDevice.position),this.camera.quaternion.copy(this.xrDevice.quaternion);const e=this.xrDevice.fovy/Math.PI*180;let t=!1;this.camera.fov!==e&&(this.camera.fov=e,t=!0);const i=this.xrDevice.canvasDimensions;if(i){const A=this.renderer.domElement;(A.width!==i.width||A.height!==i.height)&&(this.camera.aspect=i.width/i.height,this.renderer.setSize(i.width,i.height),t=!0)}t&&this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}deleteAll(){[...this.objectMap.values()].forEach(e=>{e.removeFromParent()}),this.objectMap.clear()}loadEnvironment(e){this.deleteAll(),e.spatialEntities.forEach(t=>{const i=Uo.fromPBJSON(t);if(i){switch(i.entityType){case Hn.Box:this.boxes.add(i),this.trackedMeshes.add(i.nativeEntity);break;case Hn.Plane:this.planes.add(i),this.trackedPlanes.add(i.nativeEntity);break;case Hn.Mesh:this.meshes.add(i),this.trackedMeshes.add(i.nativeEntity);break}const A=this.objectMap.get(t.uuid);A&&A.removeFromParent(),this.objectMap.set(t.uuid,i)}})}computeHitTestResults(e){return this.tempMatrix.fromArray(e),this.tempMatrix.decompose(this.tempPosition,this.tempQuaternion,this.tempScale),this.tempDirection.copy(z5).applyQuaternion(this.tempQuaternion).normalize(),this.raycaster.set(this.tempPosition,this.tempDirection),this.raycaster.intersectObject(this.meshes,!0).map(A=>{var r;const s=A.point;if(this.hitTestTarget.position.copy(s),!((r=A.face)===null||r===void 0)&&r.normal){this.worldNormal.copy(A.face.normal);const a=A.object;this.worldNormal.applyMatrix3(this.normalMatrix.getNormalMatrix(a.matrixWorld)).normalize(),this.hitTestTarget.lookAt(this.tempPosition.addVectors(s,this.worldNormal))}else this.hitTestTarget.quaternion.set(0,0,0,1);return this.hitTestTarget.updateMatrixWorld(!0),this.hitTestMarker.matrixWorld.toArray()})}}const H5="scene",W5=1,Y5=[{uuid:"963b7ea9-ef98-4d34-9f76-fbb298b7d84a",semanticLabel_META:"WALL_FACE",locatable_META:{orientation:{x:.002132703648768418,y:.7071034846058171,z:.707103645368681,w:-.0021326837037734725},position:{x:-.014421015977859497,y:1.4062399864196777,z:1.3876975774765015}},bounded2D_META:{offset:{x:-1.2252159118652344,y:-1.3574553728103638},extent:{width:2.4503772258758545,height:2.7165169715881348}}},{uuid:"d21b1c11-b655-4880-86db-da521ef0fddd",semanticLabel_META:"CEILING",locatable_META:{orientation:{x:2029140019338282e-23,y:.004750687064319775,z:-20969593211825997e-24,w:.9999887154225372},position:{x:-.027603358030319214,y:2.7653021812438965,z:.18059635162353516}},bounded2D_META:{offset:{x:-1.2281913757324219,y:-1.2128487825393677},extent:{width:2.4551124572753906,height:2.424271583557129}}},{uuid:"66975b3c-6d20-4fd6-9771-646106abc234",semanticLabel_META:"FLOOR",locatable_META:{orientation:{x:.9999954293120139,y:-2100734423740962e-23,z:-.003023467393019728,w:-6243810153439575e-23},position:{x:-.02936539053916931,y:.04878520965576172,z:.1752902865409851}},bounded2D_META:{offset:{x:-1.2306439876556396,y:-1.212493658065796},extent:{width:2.463472366333008,height:2.424250841140747}}},{uuid:"a3840904-cea2-4d57-af05-49450103de58",semanticLabel_META:"WALL_FACE",locatable_META:{orientation:{x:-.502481979240285,y:-.4975056690953548,z:-.49750575752645637,w:.5024818314971954},position:{x:1.1987090110778809,y:1.4034001976251602,z:.16821330785751343}},bounded2D_META:{offset:{x:-1.2121155261993408,y:-1.3546147346496582},extent:{width:2.424269676208496,height:2.7165164947509766}}},{uuid:"7bfe5a20-692e-4c4d-9000-bd65148d5aa2",semanticLabel_META:"WALL_ART",locatable_META:{orientation:{x:.002138824612173613,y:.7071034930540987,z:.7071035998741435,w:-.002138827949594445},position:{x:-.02082088589668274,y:1.7956273555755615,z:1.3862396764755216}},bounded2D_META:{offset:{x:-.5101672410964966,y:-.35715949535369873},extent:{width:1.0203341245651245,height:.7143189907073975}}},{uuid:"3299605e-d5b2-4096-8356-88cab0f43d04",semanticLabel_META:"WINDOW_FRAME",locatable_META:{orientation:{x:-.4971285852161098,y:.502854920973545,z:.502855200455369,w:.4971285000769011},position:{x:-1.2486037325735448,y:1.7832610607147217,z:.21009844541549683}},bounded2D_META:{offset:{x:-.9104809761047363,y:-.6898743510246277},extent:{width:1.8209620714187622,height:1.379748821258545}}},{uuid:"4b279268-d091-4784-bd45-733346bcff94",semanticLabel_META:"WALL_FACE",locatable_META:{orientation:{x:-.4971248560895784,y:.5028586789562837,z:.5028588598267145,w:.49712472635148025},position:{x:-1.2534114122390747,y:1.4084481447935104,z:.18727999925613403}},bounded2D_META:{offset:{x:-1.2078863382339478,y:-1.3596631288528442},extent:{width:2.415774345397949,height:2.716517448425293}}},{uuid:"a86de573-7ba4-49d9-97c8-33e167ecd60b",semanticLabel_META:"DOOR_FRAME",locatable_META:{orientation:{x:-.502418991592008,y:-.4975691268161053,z:-.4975693867515623,w:.5024189748554513},position:{x:1.2039169073104858,y:1.0938121378421783,z:.8620091676712036}},bounded2D_META:{offset:{x:-.46878206729888916,y:-1.048682689666748},extent:{width:.9375636577606201,height:2.097365379333496}}},{uuid:"a7e4c1be-9ddd-477b-88f2-d1a16f45b96d",semanticLabel_META:"WALL_FACE",locatable_META:{orientation:{x:-.7070987664923849,y:.003358761838747853,z:.0033587715724556484,w:.7070988416037622},position:{x:-.04030674695968628,y:1.4056182503700256,z:-1.0321855545043945}},bounded2D_META:{offset:{x:-1.2270115613937378,y:-1.3568326234817505},extent:{width:2.454019069671631,height:2.7165167331695557}}},{uuid:"1ff5405c-83fc-4d70-8a76-31492d34972f",semanticLabel_META:"TABLE",locatable_META:{orientation:{x:.9999896778976228,y:6331957448927591e-23,z:-.004543577687313001,w:-6243822312560733e-23},position:{x:.058376044034957886,y:.7483342108483027,z:-.6547144651412964}},bounded2D_META:{offset:{x:-.7993065118789673,y:-.37677499651908875},extent:{width:1.5986130237579346,height:.7535502910614014}}},{uuid:"5db35cc8-152b-476d-bb49-7e1ba49c7624",semanticLabel_META:"TABLE",locatable_META:{orientation:{x:-.707099437713934,y:.0032127500939821527,z:.0032128393650088087,w:.7070995270007518},position:{x:.058376044034957886,y:.7447632253170013,z:-.6547144651412964}},bounded3D_META:{offset:{x:-.7993065714836121,y:-.3767750561237335,z:-.6960893273353577},extent:{width:1.5986130237579346,height:.7535502314567566,depth:.6960892081260681}}},{uuid:"ffcae140-1298-466d-b968-ea7025b1e68e",semanticLabel_META:"SCREEN",locatable_META:{orientation:{x:-.7072754748920681,y:.000158642535496938,z:.00011077780245524922,w:.7069380207465319},position:{x:.06433746218681335,y:1.2777422368526459,z:-.8088874816894531}},bounded3D_META:{offset:{x:-.37402212619781494,y:-.041558459401130676,z:-.41544926166534424},extent:{width:.7480442523956299,height:.08311691880226135,depth:.41544926166534424}}},{uuid:"3f7db961-59eb-4843-8e8e-8d454babcda3",semanticLabel_META:"PLANT",locatable_META:{orientation:{x:-.707106590271049,y:-.0004898907111547272,z:-.0004898309707559611,w:.7071066327421643},position:{x:-.9923328161239624,y:.7896781265735626,z:-.5138002634048462}},bounded3D_META:{offset:{x:-.19245433807373047,y:-.20019209384918213,z:-.7384296655654907},extent:{width:.38490867614746094,height:.40038418769836426,depth:.7384296655654907}}},{uuid:"85c470a5-6785-4fb2-8ec2-ed102f57a435",semanticLabel_META:"GLOBAL_MESH",locatable_META:{orientation:{x:-.6342507623475171,y:.31261143897241334,z:.31261146180412525,w:.6342508436209434},position:{x:.5522861480712891,y:1.8845090866088867,z:1.6389118432998657}},triangleMesh_META:{vertices:"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",indices:"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RAAAAEMAAABBAAAAQgAAAEkAAABBAAAASQAAAEwAAABBAAAAQQAAAEwAAABEAAAASQAAAEsAAABMAAAAVQAAAEQAAABMAAAARAAAAFUAAABNAAAATgAAAFAAAABGAAAATwAAAFEAAABQAAAAUQAAAEYAAABQAAAARwAAAE8AAAATAAAATwAAAEcAAABRAAAARwAAAEYAAABRAAAASwAAAC8EAABVAAAAVQAAAC8EAABSAAAAVQAAAEwAAABLAAAAUgAAABMAAABPAAAAVQAAAFMAAABNAAAAUgAAAFMAAABVAAAATgAAAFQAAABQAAAAUgAAAFQAAABTAAAAVAAAAE4AAABTAAAAVAAAAE8AAABQAAAAUgAAAE8AAABUAAAAgAQAAFYAAABdAAAAVgAAAIEEAABYAAAAVgAAAFgAAABXAAAAVgAAAFcAAABfAAAAXwAAAFcAAABbAAAAWwAAAFcAAABZAAAAVwAAAFgAAABZAAAAWgAAAFsAAABZAAAAXAAAAOIAAABdAAAA4gAAAIAEAABdAAAAXAAAAF0AAABgAAAAXQAAAF4AAABkAAAAXQAAAFYAAABeAAAAgwAAAF4AAABfAAAAXgAAAFYAAABfAAAA7wAAAFwAAABmAAAAXAAAAGAAAABmAAAAaQAAAGYAAABgAAAAYAAAAGEAAABiAAAAYAAAAF0AAABkAAAAYwAAAGEAAABkAAAAYQAAAGAAAABkAAAAYwAAAGIAAABhAAAAZQAAAGMAAABkAAAAZQAAAGQAAABeAAAAaAAAAGcAAABmAAAAaQAAAGgAAABmAAAAaAAAAGkAAABqAAAAagAAAGkAAABrAAAAaQAAAGAAAABiAAAAaQAAAGIAAABsAAAAawAAAGkAAABsAAAA7wAAAGYAAABuAAAAbQAAAG8AAABuAAAAZwAAAG4AAABmAAAAbgAAAGcAAABtAAAAcQAAAHIAAABzAAAAcAAAAHIAAABxAAAAcgAAAHAAAAB2AAAAcQAAAHQAAAB1AAAAcQAAAHUAAABwAAAAdQAAAHYAAABwAAAAdQAAAHQAAACXAAAAdwAAAHUAAACXAAAAdwAAAHYAAAB1AAAAdgAAAHcAAAB5AAAAgAAAAH8AAAB5AAAAfwAAAHYAAAB5AAAAagAAAHgAAABoAAAAawAAAHgAAABqAAAAegAAAHgAAABrAAAAawAAAGwAAAB6AAAAAAEAAHsAAAB8AAAADAEAAHwAAAB9AAAAcwAAAHwAAAB7AAAAcwAAAHIAAAB8AAAAfAAAAH4AAAB9AAAAfAAAAHIAAAB/AAAAcgAAAHYAAAB/AAAAfgAAAHwAAACAAAAAfAAAAH8AAACAAAAAEgEAAH0AAACAAAAAfQAAAH4AAACAAAAAgQAAAF8AAABbAAAAjAQAAIEAAABaAAAAWgAAAIEAAABbAAAAjAQAAIIAAACBAAAAjwQAAIIAAACOBAAAggAAAI8EAACEAAAAkQQAAIcAAACEAAAAhAAAAIYAAACDAAAAgQAAAIMAAABfAAAAhAAAAIMAAACBAAAAhAAAAIEAAACCAAAAjQAAAGIAAABjAAAAhgAAAI0AAABjAAAAYwAAAGUAAACFAAAAYwAAAIUAAACGAAAAXgAAAIMAAABlAAAAgwAAAIUAAABlAAAAhQAAAIMAAACGAAAAhgAAAIQAAACHAAAAjwAAAI0AAACGAAAAZwAAAGgAAACIAAAAaAAAAIoAAACIAAAAiAAAAIoAAACJAAAAaAAAAKMAAACKAAAAeAAAAKMAAABoAAAAegAAAGwAAACMAAAAiQAAAIoAAACLAAAAmwAAAIkAAACLAAAAiwAAAIoAAACjAAAAjQAAAKYAAACnAAAAbAAAAGIAAACMAAAAjAAAAGIAAACNAAAAjAAAAI0AAACnAAAAjgAAAKYAAACNAAAAjwAAAI4AAACNAAAAjgAAAI8AAACHAAAAhgAAAIcAAACPAAAAbwAAAG0AAACfAgAAiAAAAJIAAABtAAAAbQAAAJIAAACfAgAAqQAAAJEAAACoAAAAlAAAAJEAAACpAAAAcwAAAJAAAABxAAAAiAAAAG0AAABnAAAAqAAAAJEAAACQAAAAkAAAAJEAAABxAAAAlAAAAJMAAACRAAAAcQAAAJEAAACTAAAAiAAAAIkAAACSAAAAcQAAAJMAAAB0AAAAlQAAAHQAAACTAAAAkwAAAJYAAACVAAAAlgAAAJMAAACUAAAAlwAAAHQAAACYAAAAdAAAAJUAAACYAAAAlQAAAJYAAACYAAAAmAAAAJYAAACkAAAApAAAALYAAAB5AAAAdwAAAJcAAAB5AAAAeQAAAJcAAACkAAAAlwAAAJgAAACkAAAAeAAAAHoAAACjAAAAegAAAKcAAACjAAAAegAAAIwAAACnAAAAnwIAAJkAAACjAgAAkgAAAJkAAACfAgAAqQAAAKsAAACUAAAAowIAAJkAAACaAAAAowIAAJoAAACiAgAAogIAAJoAAACeAAAAmwAAAJkAAACSAAAAlAAAAKsAAACcAAAAmQAAAJsAAACaAAAAmgAAAJsAAACdAAAAmgAAAJ0AAACeAAAAmwAAAJIAAACJAAAAngAAAJ0AAACfAAAAnQAAAJsAAACLAAAAlAAAAJwAAACWAAAAtgAAAKQAAACcAAAAnAAAAKQAAACWAAAAnQAAAIsAAACgAAAAnQAAAKAAAAChAAAAnwAAAJ0AAAChAAAApgAAAJ8AAAChAAAAnwAAAKYAAACiAAAAowAAAKAAAACLAAAAowAAAKUAAACgAAAAoQAAAKAAAAClAAAAoQAAAKUAAACmAAAAowAAAKcAAAClAAAApwAAAKYAAAClAAAAtwAAAKIAAACmAAAApgAAAI4AAAC3AAAAjgAAAI8DAAC3AAAAjwMAAI4AAAC4AAAAjgAAAIcAAAC4AAAAewAAAAABAACoAAAAewAAAKgAAACQAAAAcwAAAHsAAACQAAAAtgAAABIBAACAAAAAEgEAALYAAACqAAAAgAAAAHkAAAC2AAAArgAAAK0AAACvAAAAogIAALQAAACxAAAAogIAALEAAACwAAAAsAAAALEAAAC7AAAAqwAAAKwAAACcAAAArQAAALIAAACsAAAArgAAALMAAACqAAAArgAAAKoAAACyAAAArgAAALIAAACtAAAAtQAAALEAAAC0AAAAtQAAALsAAACxAAAAuwAAALUAAAC9AAAAvQAAALUAAAC3AAAArAAAALYAAACcAAAAtgAAAKwAAACyAAAAqgAAALYAAACyAAAAtAAAAKICAACeAAAAnwAAAKIAAACeAAAAngAAAKIAAAC0AAAAtAAAAKIAAAC1AAAAvQAAALcAAACOAwAAtwAAALUAAACiAAAAuAAAACwEAACPAwAAggMAABIBAACFAwAAEgEAAKoAAACFAwAAswAAALkAAACFAwAAswAAALoAAAC5AAAAswAAAK4AAAC6AAAArgAAAK8AAAC6AAAAvQAAALwAAAC7AAAAvAAAALAAAAC7AAAAqgAAALMAAACFAwAAjwMAAI4DAAC3AAAAvgAAAMEAAADAAAAAwAAAAMEAAADCAAAAwQAAAKUEAADCAAAAwAAAAMIAAADIAAAAwgAAAKUEAACcBAAAwgAAAJwEAADIAAAAnAQAAKYEAADIAAAApgQAAMMAAADIAAAAvgAAAMYAAADEAAAAxQAAAMQAAADHAAAAxAAAAMYAAADHAAAAxgAAAL4AAAC/AAAAvgAAAMAAAAC/AAAAxwAAAMYAAADKAAAAxgAAAL8AAADKAAAAvwAAAMgAAADKAAAAvwAAAMAAAADIAAAAzwAAAMgAAADjAAAAyAAAAMMAAADjAAAAxQAAAMcAAADJAAAAxwAAAMoAAADJAAAAxQAAAMkAAADLAAAAyQAAAMoAAADLAAAAygAAAMgAAADMAAAAywAAAMoAAADMAAAAyAAAAM8AAADMAAAAzAAAAM0AAADLAAAAzQAAAMwAAADOAAAAzgAAAMwAAADPAAAA0AAAAM8AAADRAAAA0QAAAM8AAADjAAAATwEAANAAAADSAAAA0AAAANEAAADSAAAA5wAAANIAAADRAAAApgQAAAwFAADUAAAApgQAANQAAADDAAAA0wAAAMMAAADUAAAADAUAANkAAADUAAAA1gAAANMAAADUAAAA1QAAANcAAADYAAAA1gAAANQAAADZAAAA2QAAANgAAADXAAAA2QAAANoAAADYAAAA2AAAANoAAADlAAAA2gAAANsAAADlAAAADgUAANwAAADbAAAA5QAAANsAAADmAAAA5gAAANsAAADcAAAA3AAAAN0AAADeAAAA3wAAANwAAADeAAAA3wAAAOAAAADcAAAA4AAAAOYAAADcAAAA3wAAAN4AAADhAAAA3gAAAN0AAADhAAAA4QAAAOAAAADfAAAA3QAAAOIAAADhAAAAwwAAANMAAADjAAAA0wAAANUAAADjAAAA4wAAANUAAADYAAAA4AAAAOEAAADmAAAA5gAAAOEAAABcAAAA7wAAAOYAAABcAAAA4QAAAOIAAABcAAAA4wAAANgAAADlAAAA0QAAAOMAAADkAAAA5AAAAOMAAADlAAAA0QAAAOQAAADnAAAA5wAAAOQAAADpAAAA6QAAAOgAAADnAAAA6QAAAOQAAADqAAAA5AAAAOUAAADqAAAA5QAAAOYAAADrAAAA6wAAAOYAAADsAAAA+AAAAOsAAADsAAAA7AAAAOYAAADuAAAA+AAAAOwAAADtAAAA7AAAAO4AAADtAAAA5gAAAO8AAADuAAAA7gAAAO8AAADxAAAA8AAAAO4AAADxAAAA8QAAAO8AAABvAAAA7wAAAG4AAABvAAAAbwAAAPAAAADxAAAA8wAAAPIAAADpAAAAAwMAAPIAAADzAAAAAwMAAPMAAAAFAwAA8wAAAOkAAADqAAAA8wAAAOoAAAD0AAAABQMAAPMAAAD0AAAA9AAAAOoAAAD1AAAAcAMAAPQAAAD1AAAA6gAAAOUAAAD1AAAA5QAAAOsAAAAFAQAA9QAAAOUAAAAFAQAA9gAAAOsAAAD3AAAA6wAAAPgAAAD3AAAA9gAAAPcAAAAGAQAA9wAAAPgAAAD6AAAA9wAAAPoAAAAGAQAA+QAAAPgAAADtAAAA+AAAAPkAAAD6AAAABgEAAPoAAAD8AAAABwMAAPkAAADtAAAA+wAAAPoAAAD5AAAA7gAAAAcDAADtAAAA8AAAAAcDAADuAAAA/gAAAAIBAAD9AAAA/QAAAP8AAAD+AAAAAgEAAAEBAAD9AAAAAQEAAAwBAAD9AAAA/wAAAP0AAAAMAQAAAgEAAAABAAABAQAAAQEAAHwAAAAMAQAAAQEAAAABAAB8AAAA9QAAAAQBAABwAwAAAwEAAHADAAAEAQAA9QAAAAUBAAAEAQAABAEAAAUBAAAWAQAA6wAAAPYAAAAFAQAAFgEAAAUBAAD2AAAAFgEAAPYAAAAZAQAA9gAAAAYBAAAZAQAAGQEAAAYBAADeAwAABgEAAPwAAAAHAQAA3gMAAAYBAAAHAQAA/AAAAAgBAAAHAQAADAEAAA0BAAAOAQAADgEAAAoBAAAJAQAADgEAAA0BAAAKAQAACwEAAA8BAAAQAQAACwEAAAoBAAAPAQAACgEAAA0BAAAPAQAADQEAAAwBAAARAQAADwEAABEBAAASAQAADwEAAA0BAAARAQAAEgEAABEBAAB9AAAAEQEAAAwBAAB9AAAAEwEAAAMBAAAEAQAABAEAABYBAAAUAQAAFAEAABMBAAAEAQAAFQEAABMBAAAUAQAAFQEAABQBAAAXAQAAFwEAANoDAAAVAQAAFAEAABYBAAAXAQAAGAEAANoDAAAXAQAAFgEAABkBAAAHBAAAFwEAABYBAAAHBAAAFwEAAAcEAAAYAQAABwQAABkBAAAaAQAAGQEAAN4DAAAaAQAAwQAAAL4AAAAbAQAAQAUAABsBAAAvAQAAHwEAADUBAAA4AQAAHQEAADUBAAAeAQAANQEAAB8BAAAeAQAAOAEAAGAFAAAfAQAAYAUAADgBAAAaAAAAxQAAACABAADEAAAAGwEAACABAAAhAQAAxQAAACEBAAAgAQAAxAAAABsBAAC+AAAAxAAAACABAAAbAQAALwEAABsBAAAhAQAAOQEAACIBAADFAAAAIwEAACUBAAAkAQAAJgEAACgBAAAnAQAAKAEAACMBAAAnAQAAJwEAACMBAAApAQAAJAEAACoBAAAjAQAAIwEAACoBAAApAQAAHAEAANEBAAAzAQAAHAEAADMBAAAmAQAAJgEAADMBAAAoAQAAIwEAACgBAAAlAQAAHAEAACYBAAArAQAAJwEAACsBAAAmAQAALQEAACsBAAApAQAAKQEAACsBAAAnAQAAKQEAACoBAAAsAQAALQEAACkBAAAsAQAALQEAACwBAAAuAQAAxQAAAC8BAAAhAQAAMAEAAMUAAAAiAQAAxQAAADABAAAvAQAAMAEAADEBAAAvAQAAMQEAAB0BAAAvAQAAHQEAADEBAAAyAQAAMQEAADABAAAyAQAAJQEAADMBAABIAQAAKAEAADMBAAAlAQAA0QEAAOYBAAAzAQAALgEAADQBAAAtAQAANwEAADIBAAA2AQAANwEAADYBAAA1AQAAXAEAADYBAAAyAQAAHQEAADIBAAA3AQAANwEAADUBAAAdAQAANgEAADgBAAA1AQAAywAAADkBAADFAAAAOQEAAMsAAABOAQAAWAEAACIBAABUAQAAVAEAACIBAABTAQAAIgEAAFEBAABTAQAAVgEAAD0BAAA6AQAAOwEAAFYBAAA6AQAAQwEAADsBAAA6AQAAPAEAADoBAAA9AQAAOgEAADwBAAA+AQAAPAEAAD0BAAAkAQAAPwEAAD0BAABAAQAAPAEAACUBAAA+AQAAPwEAAEABAABBAQAAPwEAACoBAAA9AQAAPQEAACoBAAAkAQAAJAEAACUBAAA8AQAAPwEAAEEBAABGAQAAKgEAAD8BAABCAQAALgEAAEIBAABJAQAAPwEAAEYBAABKAQAAPwEAAEoBAABCAQAAQgEAAEoBAABJAQAAKgEAAEIBAAAsAQAALAEAAEIBAAAuAQAAIgEAAFgBAAAwAQAAMAEAAFgBAAAyAQAAWAEAAFwBAAAyAQAAOgEAAD4BAABDAQAAQwEAAD4BAABEAQAAQwEAAEQBAABFAQAASAEAAD4BAAAlAQAAPgEAAEgBAABEAQAARQEAAEQBAABLAQAARgEAAE0BAABKAQAARwEAAE0BAABGAQAARAEAAEgBAABLAQAALgEAAEkBAAA0AQAASgEAAEwBAABJAQAASQEAAEwBAAA0AQAASgEAAE0BAABMAQAASAEAADMBAABhAgAASAEAAGECAABLAQAATgEAAMsAAADNAAAAzgAAAE4BAADNAAAAzgAAAFABAABOAQAAUAEAAM4AAABPAQAAzgAAAM8AAABPAQAATwEAAM8AAADQAAAAIgEAADkBAABOAQAAUQEAACIBAABOAQAATgEAAFABAABRAQAAUQEAAFABAABSAQAAVQEAAFMBAABRAQAAUwEAAFUBAABWAQAAUwEAAFYBAABUAQAAVgEAADsBAABUAQAAVwEAAFEBAABSAQAAUQEAAFcBAABVAQAAVgEAAFUBAAA9AQAAQAEAAD0BAABVAQAAVQEAAFcBAABAAQAAUgEAAFoBAABXAQAAQQEAAEABAABXAQAAOwEAAFkBAABUAQAAWQEAAFgBAABUAQAAWQEAADsBAABDAQAAWAEAAFkBAABbAQAAWQEAAEMBAABbAQAAWwEAAFwBAABYAQAAVwEAAF0BAABBAQAAWgEAAF0BAABXAQAAWgEAAF4BAABdAQAAWwEAAEMBAABfAQAAQwEAAEUBAABfAQAAYAEAAFsBAABfAQAAYAEAAFwBAABbAQAAQQEAAF0BAABGAQAAXQEAAEcBAABGAQAAXgEAAEcBAABdAQAAYAEAAGYBAABcAQAAYAEAAF8BAABkAQAARwEAAGMBAABNAQAAXgEAAGMBAABHAQAARQEAAEsBAACBAgAAXwEAAEUBAABkAQAAYwEAAIACAABNAQAARQEAAIECAABkAQAAZgEAAGcBAABoAQAAZgEAAGgBAABcAQAAXAEAAGgBAAA2AQAAYQEAAE8BAADSAAAATwEAAKACAABQAQAAoAIAAE8BAABhAQAA5wAAAGEBAADSAAAAUgEAAFABAACgAgAAWgEAAFIBAABiAQAAUgEAAKACAABiAQAAYgEAAF4BAABaAQAAYgEAAGMBAABeAQAAZQEAAGABAABkAQAAYAEAAGUBAABmAQAAZQEAAN4CAABmAQAAZgEAAOECAABnAQAAawEAANUAAADTAAAAaQEAANMAAADWAAAAbAEAAGkBAADWAAAAaQEAAGsBAADTAAAA1QAAAGsBAADXAAAAagEAAGkBAABsAQAAaQEAAGoBAABrAQAA2QAAAG0BAADWAAAA1wAAAGsBAABtAQAA2QAAANcAAABtAQAA1gAAAG0BAABsAQAAlAEAAJUBAABvAQAAbgEAAJQBAABvAQAAbwEAAJUBAACZAQAAFwcAAG4BAABwAQAAcAEAAG4BAABxAQAAbgEAAHIBAABxAQAAcwEAAHYBAAByAQAAcwEAAHIBAABvAQAAbwEAAHIBAABuAQAAbwEAAJkBAABzAQAAdQEAAHQBAABxAQAAcQEAAHQBAABwAQAAcQEAAHIBAAB2AQAAdQEAAHEBAAB2AQAAdAEAAHUBAAB3AQAAfQEAAHwBAAB4AQAAeAEAAHwBAAB7AQAAfQEAAH8BAAB+AQAAfAEAAH0BAAB+AQAAfgEAAH8BAACAAQAAhQEAAH8BAAB5AQAAeQEAAH8BAAB9AQAAfwEAAIUBAACBAQAAegEAAIABAACBAQAAgAEAAH8BAACBAQAALQcAAHsBAACDAQAAgwEAAHsBAAB8AQAAgwEAAH4BAACCAQAAgwEAAHwBAAB+AQAAggEAAH4BAACEAQAAgAEAAIQBAAB+AQAAggEAAIYBAACDAQAAggEAAIQBAACGAQAAhAEAAIcBAACGAQAALQcAAIMBAACIAQAAhgEAAIgBAACDAQAAiQEAAGoBAABsAQAAagEAAIkBAABrAQAAjAEAAIkBAACKAQAAigEAAIkBAABsAQAAiQEAAIwBAABrAQAAjAEAAIoBAACLAQAAawEAAIwBAACNAQAAiwEAAI8BAACMAQAAbQEAAI4BAABsAQAAbQEAAGsBAACOAQAAjgEAAI0BAACKAQAAbAEAAI4BAACKAQAAjgEAAGsBAACNAQAAiwEAAIoBAACNAQAAjQEAAI8BAACLAQAAkQEAAJABAACUAQAAlAEAAJIBAACRAQAAkQEAAJIBAACTAQAAlAEAAJABAACVAQAAlQEAAJABAACWAQAAlAEAAJcBAACYAQAAmAEAAJcBAACcAQAAkgEAAJgBAACTAQAAlAEAAJgBAACSAQAAbgEAABcHAAAvBwAAlAEAAG4BAAAvBwAAlQEAAJYBAACZAQAAlAEAAC8HAACXAQAAmgEAAJsBAACfAQAAcwEAAJkBAACdAQAAcwEAAJ8BAACeAQAAmgEAAJ8BAACdAQAAnQEAAJ8BAABzAQAAmQEAAJoBAACdAQAAngEAAKABAACiAQAAnwEAAKABAACeAQAAnwEAAJsBAACgAQAAngEAAKIBAAB2AQAAdgEAAKIBAAB1AQAAcwEAAJ4BAAB2AQAAogEAAKABAACjAQAAmAEAAJwBAAATAgAAdQEAAKEBAAB3AQAAoAEAAKYBAACjAQAAoAEAAA4CAACmAQAAnAEAAKcBAAATAgAApQEAAKQBAACmAQAApAEAAKMBAACmAQAADgIAABkCAACmAQAAEwIAAKcBAACsAQAAJwcAAKUBAACoAQAAqAEAAKUBAACpAQAApQEAAKoBAACpAQAApgEAAKoBAAClAQAApgEAABkCAACqAQAApwEAAKsBAACsAQAAKgcAACcHAACoAQAArQEAACoHAACoAQAAsAEAAK0BAACpAQAArQEAAKgBAACpAQAArAEAAKsBAACvAQAAqwEAAK4BAACvAQAAEwIAAKwBAAAgAgAAeQEAACoHAACtAQAAeQEAAK0BAAC5AQAArQEAALsBAAC5AQAAsAEAALsBAACtAQAAqQEAALEBAACwAQAAqQEAAKoBAACxAQAAsQEAAKoBAACzAQAAqgEAABkCAACzAQAAGQIAALQBAACzAQAAsgEAAMEBAACuAQAArgEAAMEBAACvAQAArAEAAK8BAAC4AQAArwEAALcBAAC4AQAArAEAALgBAAAgAgAAeQEAALkBAACFAQAAugEAAIEBAACFAQAAvAEAALoBAACFAQAAgQEAAL4BAAAdAgAAgQEAALoBAAC+AQAAsAEAALwBAAC7AQAAsQEAAL0BAAC6AQAAsQEAALoBAAC8AQAAsQEAALwBAACwAQAAvgEAALoBAAC9AQAAvwEAALIBAADAAQAAwQEAALIBAAC/AQAAsQEAALMBAAC9AQAAtAEAAL0BAACzAQAAvgEAAL0BAAC0AQAAtQEAAFoHAAC/AQAAvwEAAMABAAC1AQAArwEAAMEBAAC3AQAAIAIAALgBAADCAQAAuAEAALcBAADCAQAAhQEAALkBAADDAQAAwwEAALwBAACFAQAAuQEAALsBAADDAQAAvAEAAMMBAAC7AQAAxQEAAMYBAAC/AQAAwQEAAL8BAADLAQAAywEAAL8BAADGAQAAwgEAAMsBAAAjAgAAvwEAAFoHAADEAQAAwQEAAMsBAAC3AQAAywEAAMIBAAC3AQAAygEAAC0HAACIAQAAyQEAAMgBAACHAQAAxwEAAMkBAACHAQAAygEAAMYBAADFAQAAywEAAMYBAADJAQAAyQEAAMYBAADIAQAAIwIAAMsBAADHAQAAxwEAAMsBAADJAQAAygEAAN4BAADEAQAAxQEAAN4BAADKAQAAxgEAAMoBAADIAQAAhgEAAMgBAACIAQAAyAEAAMoBAACIAQAAhgEAAIcBAADIAQAAzAEAAM0BAAAlAgAAzwEAAMwBAADOAQAAzQEAAMwBAADPAQAAzQEAAM8BAAAcAQAA0AEAAM8BAADOAQAAHAEAAM8BAADRAQAAzwEAANABAADRAQAAJQIAANMBAADMAQAAzAEAANMBAADSAQAAzAEAANIBAADOAQAAzgEAANIBAADUAQAA1QEAANABAADUAQAA0AEAAM4BAADUAQAAjAEAANkBAADSAQAAjAEAAI8BAADZAQAAjAEAANIBAACNAQAAjQEAANIBAADWAQAA0wEAANYBAADSAQAA0gEAANcBAADUAQAA2QEAANcBAADSAQAA0wEAANgBAADWAQAA1QEAANcBAADbAQAA1AEAANcBAADVAQAA2QEAAI8BAACNAQAA2QEAAI0BAADWAQAA2gEAANkBAADWAQAA1gEAANgBAADaAQAA1wEAANkBAADbAQAA2wEAANkBAADaAQAA2gEAANwBAADbAQAA2gEAAN0BAADcAQAAtgEAAFoHAAC1AQAAxAEAAN8BAAC/AQAAxAEAAN4BAADfAQAA3wEAAMUBAAC/AQAA3gEAAOEBAADfAQAA4wEAAMUBAADfAQAA4QEAAOMBAADfAQAA4AEAAOEBAADeAQAA4gEAAOEBAADgAQAAxQEAAOMBAADeAQAA3gEAAOMBAADgAQAA4wEAAOQBAADgAQAA4QEAAOUBAADjAQAA4QEAAOIBAADlAQAA5QEAAOQBAADjAQAA0QEAANUBAADoAQAA0QEAANABAADVAQAA5gEAANEBAADoAQAA5wEAANUBAADbAQAA5wEAAOgBAADVAQAA6AEAAOcBAADqAQAA2wEAANwBAADpAQAA5wEAANsBAADpAQAA5wEAAOkBAADqAQAA3AEAAOoBAADpAQAA3AEAAOsBAADqAQAA3AEAAN0BAADrAQAA7QEAAOIBAADgAQAA7QEAAOABAADkAQAA4gEAAO0BAADlAQAA7QEAAOQBAADuAQAA7gEAAGIHAADsAQAA7QEAAO4BAADvAQAA7wEAAO4BAADsAQAA7AEAAPABAADvAQAA5QEAAO0BAADxAQAA5AEAAOUBAADxAQAA5AEAAPEBAADuAQAA7gEAAPIBAADzAQAA7gEAAPEBAADyAQAA8gEAAPEBAADtAQAA8gEAAO0BAADvAQAA8AEAAPMBAADyAQAA8gEAAO8BAADwAQAA9QEAAPQBAACQAQAAkAEAAPQBAAD2AQAA9QEAAAgCAAD3AQAA9QEAAPcBAAD0AQAA9AEAAPcBAAD2AQAA+AEAAPYBAAD5AQAA+QEAAPYBAAD3AQAA+QEAAAsCAAD4AQAA+gEAAAsCAAD5AQAA+gEAAPkBAAD7AQAA+wEAAPkBAAD3AQAACAIAAEACAAD3AQAA9wEAAEACAAD7AQAA+wEAAP0BAAD8AQAA+gEAAPsBAAD8AQAAQAIAAP4BAAD7AQAA+wEAAP4BAAD9AQAA/wEAAPwBAAD9AQAA/wEAAP0BAAAAAgAAAAIAAP0BAAD+AQAA/wEAAAACAAABAgAAAwIAAAECAAACAgAAAQIAAAACAAACAgAAAgIAAAACAAAEAgAAAwIAAAICAAB6AQAABAIAAAUCAAACAgAAgQEAAAMCAAB6AQAAAgIAAAYCAAB6AQAAHgIAAAYCAAAFAgAABQIAAAYCAAACAgAAgAEAAHoBAAAHAgAAHgIAAAcCAAAGAgAABgIAAAcCAAB6AQAAgAEAAAcCAACEAQAAhAEAAAcCAACHAQAAkAEAAJEBAAD1AQAA9QEAAJEBAAAIAgAACAIAAJEBAACTAQAAlgEAAJABAAD2AQAACQIAAAgCAACTAQAAlgEAAPYBAAD4AQAAlgEAAPgBAACZAQAAmQEAAPgBAAAKAgAACQIAAAwCAAAIAgAACgIAAJoBAACZAQAADAIAAAkCAAAPAgAA+AEAAAsCAAAKAgAACAIAAAwCAABAAgAACwIAAJoBAAAKAgAACwIAAJsBAACaAQAAkwEAAJgBAAAPAgAACQIAAJMBAAAPAgAACwIAAPoBAAANAgAA+gEAAPwBAAANAgAACwIAAA0CAAAOAgAADAIAAA8CAAARAgAACwIAAA4CAACbAQAADgIAAKABAACbAQAADwIAAJgBAAATAgAAEAIAAPwBAAD/AQAADQIAAPwBAAAQAgAADQIAABICAAAOAgAA/wEAAAECAAAQAgAADQIAABACAAASAgAAEgIAABoCAAAOAgAADwIAABMCAAAbAgAAEQIAAA8CAAAbAgAAEQIAABsCAAAXAgAAAwIAABQCAAABAgAAFAIAABUCAAABAgAAFQIAABACAAABAgAADgIAABoCAAAZAgAAEgIAABYCAAAaAgAAFQIAABICAAAQAgAAFgIAABICAAAVAgAAFAIAABgCAAAVAgAAGAIAABoCAAAWAgAAFQIAABgCAAAWAgAAEwIAACACAAAbAgAAFwIAABsCAAAcAgAAFAIAAIEBAAAdAgAAFAIAAAMCAACBAQAAFAIAAB0CAAAYAgAAGAIAAB0CAAAaAgAAHQIAAB8CAAAaAgAAHwIAALQBAAAZAgAAGgIAAB8CAAAZAgAAIAIAABwCAAAbAgAAIQIAAB4CAAAiAgAAHQIAAL4BAAAfAgAAIgIAABwCAAAhAgAAHwIAAL4BAAC0AQAAJAIAACACAADCAQAAJAIAACECAAAgAgAAHAIAACACAAAhAgAAhwEAACMCAADHAQAAhwEAAAcCAAAjAgAABwIAAB4CAAAjAgAAHgIAACECAAAjAgAAIwIAACECAAAkAgAAJAIAAMIBAAAjAgAAzQEAACYCAAAlAgAAzQEAABwBAAAmAgAAHAEAACsBAAAmAgAAJwIAACYCAAArAQAAKwEAAC0BAAAnAgAALQEAACgCAAAnAgAA0wEAACUCAAApAgAAKQIAACUCAAAmAgAAJwIAACsCAAAmAgAAKAIAACwCAAAnAgAAKQIAANgBAADTAQAAKQIAACoCAADYAQAAJgIAAC4CAAApAgAAKQIAAC4CAAAqAgAAJgIAACsCAAAuAgAAKwIAACcCAAAsAgAAKgIAAC0CAADYAQAA2AEAAC0CAADaAQAALgIAAC0CAAAqAgAALgIAACsCAAAsAgAALQIAADMCAADaAQAALQIAADACAAAzAgAALwIAADACAAAuAgAAMAIAAC0CAAAuAgAALgIAADECAAAvAgAALwIAADICAAAwAgAAMgIAADMCAAAwAgAALwIAADECAAAyAgAAMwIAAN0BAADaAQAAMgIAADQCAAAzAgAAMwIAADUCAADdAQAAMwIAADYCAAA1AgAANwIAADYCAAAzAgAANwIAAD8CAAA2AgAAWwIAADcCAAAzAgAAWwIAAF0CAAA3AgAALQEAADQBAAAoAgAAMwEAAOYBAABhAgAAYQIAAOYBAADoAQAA6AEAAOoBAAA4AgAAYQIAAOgBAAA4AgAAOAIAAOoBAAA6AgAA6gEAADkCAAA6AgAAOwIAADkCAAA1AgAANQIAADkCAADdAQAA6gEAAOsBAAA5AgAA3QEAADkCAADrAQAAOwIAADwCAAA5AgAAOQIAADwCAAA6AgAAOwIAADUCAAA8AgAANgIAAD0CAAA1AgAAPAIAADUCAAA9AgAAOgIAADwCAAA+AgAAPAIAAD0CAAA+AgAANgIAAD8CAAA9AgAAPQIAAD8CAAA+AgAANwIAAF0CAAA/AgAAQQIAAP4BAABAAgAAQQIAAEICAAD+AQAA/gEAAEICAAAAAgAAQgIAAEMCAAAAAgAARAIAAEMCAABCAgAARQIAAAQCAABDAgAAQwIAAAQCAAAAAgAAQwIAAEQCAABFAgAABAIAAEUCAAAFAgAAQAIAAAwCAABBAgAADAIAABECAABBAgAARgIAAEICAABBAgAARgIAAEECAABHAgAAQQIAABECAABHAgAAQgIAAEYCAABEAgAARAIAAEYCAABIAgAARgIAAEcCAABJAgAARgIAAEkCAABIAgAASQIAAEcCAAAXAgAARwIAABECAAAXAgAARQIAAEQCAABIAgAARQIAAEgCAABLAgAARQIAAEsCAABKAgAASAIAAEkCAABLAgAASQIAABcCAABMAgAARQIAAB4CAAAFAgAARQIAAEoCAAAeAgAASgIAAE0CAAAeAgAASwIAAE0CAABKAgAASwIAAE4CAABNAgAASQIAAE4CAABLAgAATAIAABwCAABOAgAATAIAAE4CAABJAgAAHAIAAEwCAAAXAgAATgIAABwCAAAiAgAATQIAAE4CAAAiAgAATQIAACICAAAeAgAAKAIAAEwBAABPAgAATwIAACwCAAAoAgAATAEAAGACAABQAgAATAEAAFACAABPAgAATwIAAFACAAAsAgAAUAIAAGACAABRAgAAUQIAAGsCAABQAgAAUAIAAGsCAAAsAgAALAIAAFICAAAuAgAALgIAAFICAAAxAgAAMgIAADECAAA0AgAAMQIAAFICAABTAgAAUwIAAFYCAAAxAgAAMQIAAFYCAAA0AgAAUwIAAFICAABUAgAAUgIAAG8CAABUAgAANAIAAFUCAAAzAgAAMwIAAFUCAABbAgAAVgIAAFUCAAA0AgAAVwIAAFYCAABTAgAAUwIAAFgCAABXAgAAVAIAAFgCAABTAgAAVgIAAFkCAABVAgAAWgIAAFcCAABYAgAAcQIAAFcCAABaAgAAWgIAAHICAABxAgAAVQIAAFwCAABbAgAAWQIAAFwCAABVAgAAWwIAAF4CAABdAgAAXgIAAFsCAABcAgAAXQIAAF4CAABfAgAAegIAAF8CAABeAgAAegIAAGoCAABfAgAAegIAAHsCAABqAgAATAEAACgCAAA0AQAATAEAAE0BAABgAgAAgAIAAIICAABNAQAATQEAAIICAABgAgAAgQIAAEsBAABiAgAASwEAAGECAABiAgAAUQIAAGACAACCAgAAYgIAAGECAAA4AgAAYgIAADgCAAA6AgAAYgIAADoCAABjAgAAOgIAAD4CAABkAgAAOgIAAGQCAABjAgAAZgIAAGMCAABkAgAAPgIAAD8CAABkAgAAWgIAAGcCAAByAgAAZQIAAGcCAABaAgAAZAIAAJECAABmAgAAZgIAAJECAACOAgAAXQIAAGgCAAA/AgAAPwIAAGgCAABkAgAAkQIAAGQCAABoAgAAXQIAAF8CAABoAgAAkQIAAGgCAABpAgAAXwIAAGkCAABoAgAAXwIAAGoCAABpAgAAaQIAAGoCAACRAgAAggIAAGsCAABRAgAAggIAAIMCAABsAgAAawIAAIICAABsAgAAbAIAAIMCAABtAgAAawIAAFICAAAsAgAAawIAAGwCAABSAgAAbgIAAGwCAABtAgAAbAIAAG8CAABSAgAAbwIAAGwCAABuAgAAbwIAAFgCAABUAgAAcAIAAFgCAABvAgAAVgIAAFcCAABzAgAAcwIAAFcCAABxAgAAcwIAAHECAAB5AgAAeQIAAHECAAByAgAAWQIAAHQCAABcAgAAVgIAAHQCAABZAgAAVgIAAHMCAAB0AgAAdQIAAHQCAABzAgAAcgIAAHYCAAB3AgAAcgIAAHcCAAB5AgAAdQIAAHMCAAB5AgAAXAIAAHoCAABeAgAAdAIAAH0CAABcAgAAXAIAAH0CAAB6AgAAdwIAAHYCAAB4AgAAdwIAAHgCAAB5AgAAeQIAAKUCAAB1AgAAdAIAAKgCAAB9AgAAegIAAHwCAAB7AgAAfQIAAHwCAAB6AgAAewIAAHwCAAB+AgAAfQIAAK4CAAB8AgAAfAIAAH8CAAB+AgAAfwIAAHwCAACuAgAAYwEAAIUCAACAAgAAgAIAAIMCAACCAgAAgAIAAIUCAACDAgAAZAEAAIECAACEAgAAgQIAAIYCAACEAgAAgwIAAIUCAABtAgAAtAIAALoCAACFAgAAgQIAAGICAACGAgAAhwIAAIQCAACGAgAAYwIAAIYCAABiAgAAbQIAAIUCAABuAgAAhgIAAGMCAACJAgAAhgIAAIkCAAC/AgAAhQIAAIoCAABuAgAAYwIAAGYCAACJAgAAiQIAAGYCAADIAgAAiQIAAMgCAAC/AgAAbgIAAIsCAABvAgAAbgIAAIoCAACLAgAAbwIAAIsCAABwAgAAcAIAAIwCAABYAgAAcAIAAIsCAACMAgAAWAIAAGUCAABaAgAAWAIAAIwCAABlAgAAjAIAAI0CAABlAgAAiwIAAMoCAACMAgAAjAIAAMoCAACNAgAAyAIAAGYCAACOAgAAZQIAAI0CAABnAgAAcgIAAGcCAACNAgAAjQIAAMoCAACQAgAAjQIAAI8CAAByAgAAjQIAAJACAACPAgAAcgIAAI8CAAB2AgAAjgIAAJECAACSAgAAdgIAAI8CAAB4AgAAkAIAAHgCAACPAgAAeQIAAHgCAACQAgAApQIAAHkCAACQAgAAkgIAAJECAABqAgAAagIAAJQCAACSAgAAagIAAHsCAACTAgAAewIAAH4CAACTAgAAagIAAJMCAACUAgAA0AIAAJICAACUAgAAfwIAAJQCAAB+AgAAfgIAAJQCAACTAgAAfwIAAJUCAACUAgAAlgIAAJUCAAB/AgAAmQIAAIcCAACXAgAAhwIAAIgCAACXAgAAiAIAAMQCAACXAgAAmAIAAJkCAACXAgAAmQIAAJgCAACaAgAAlwIAAJsCAACYAgAAmAIAAJsCAACaAgAA5wAAAOgAAABhAQAA6AAAAJwCAABhAQAAoAIAAGEBAACcAgAA8gAAAJwCAADpAAAA6QAAAJwCAADoAAAAngIAAA4DAACdAgAAnwIAAJ0CAABvAAAAbwAAAJ0CAADwAAAAnQIAAJ8CAACeAgAAoQIAAA4DAACeAgAAngIAAKICAAChAgAAngIAAKMCAACiAgAAnwIAAKMCAACeAgAAYgEAAKACAACkAgAAoAIAAJADAACkAgAAdAIAAHUCAACoAgAAqAIAAHUCAAClAgAApQIAAMwCAACmAgAAqAIAAKUCAACmAgAApgIAAMwCAACnAgAAqAIAAKkCAAB9AgAAqgIAAKkCAACoAgAApgIAAKoCAACoAgAAqgIAAKYCAACnAgAAzwIAAKoCAACnAgAAqgIAAM8CAACrAgAAqQIAAK0CAAB9AgAAfQIAAK0CAACuAgAAqgIAAB0DAACpAgAAqQIAAB0DAACtAgAAIAMAAKsCAACsAgAArQIAAK8CAACuAgAArgIAALACAAB/AgAArgIAAK8CAACwAgAAsAIAAK8CAACyAgAArwIAALECAACyAgAAsQIAALMCAACyAgAAYwEAALQCAACFAgAAYgEAALQCAABjAQAAZAEAAIQCAAC1AgAAZQEAAGQBAAC2AgAAZAEAALUCAAC2AgAAZQEAALYCAADeAgAAYgEAAKQCAAC0AgAApAIAALcCAAC0AgAAuAIAALUCAACEAgAAtQIAALkCAAC2AgAAuAIAALkCAAC1AgAAuQIAALgCAADeAgAAuQIAAN4CAAC2AgAAuwIAALoCAAC3AgAAtwIAALoCAAC0AgAAuwIAALcCAACkAgAAhAIAAIcCAAC4AgAAvAIAALoCAAC7AgAAvQIAALwCAAC7AgAApAIAAL0CAAC7AgAA3wIAALwCAAC9AgAApAIAAOgCAAC9AgAAhgIAAL4CAACHAgAAvgIAAIYCAAC/AgAAvgIAAMACAACHAgAAiAIAAIcCAADAAgAAugIAAMICAACFAgAAhQIAAMICAACKAgAAwAIAAMQCAACIAgAAugIAAMECAADCAgAAvgIAAL8CAADDAgAAwwIAAMACAAC+AgAAwwIAAMcCAADAAgAAxwIAADwDAADAAgAAwAIAADwDAADEAgAAwQIAAMUCAADCAgAAwwIAAMYCAADHAgAAwwIAAL8CAADGAgAAvwIAAMgCAADGAgAAwgIAAMoCAACKAgAAwgIAAMUCAADKAgAAxgIAAMgCAADJAgAAigIAAMoCAACLAgAAxQIAAMwCAADKAgAAyAIAAI4CAADLAgAAyAIAAMsCAADJAgAAxQIAAEIDAADMAgAAywIAAI4CAABJAwAAyQIAAMsCAABFAwAAygIAAMwCAACQAgAAzAIAAEIDAADOAgAARQMAAMsCAABJAwAAzAIAAKUCAACQAgAAzAIAAM4CAACnAgAAjgIAAJICAABJAwAAkgIAANECAABJAwAAzgIAAM0CAACnAgAAkgIAANACAADRAgAAzQIAAM8CAACnAgAAzQIAAM4CAADPAgAAzgIAANICAADPAgAA0QIAANACAADTAgAAlQIAANQCAACUAgAAlAIAANQCAADQAgAA0wIAANACAADUAgAA1gIAANMCAADUAgAAqwIAANUCAACsAgAAzwIAANUCAACrAgAA0gIAANUCAADPAgAArAIAANUCAADaAgAA1AIAAJUCAADXAgAAlQIAANkCAADXAgAA1gIAANQCAADXAgAATQMAANYCAADYAgAA1gIAANcCAADYAgAAlgIAAH8CAADZAgAArAIAANoCAAAgAwAAlgIAANkCAACVAgAA2AIAANcCAADcAgAA1wIAANkCAADcAgAAfwIAALACAADZAgAA2QIAALACAADbAgAA2QIAANsCAADcAgAA3AIAALACAACyAgAA2wIAALACAADcAgAAswIAAN0CAACyAgAAsgIAAN0CAADcAgAA4wIAALgCAACHAgAA3gIAALgCAADjAgAA6gIAAN8CAAC9AgAA6AIAAOoCAAC9AgAAhwIAAJkCAADjAgAA3wIAAOoCAAD2AgAAvAIAAN8CAADgAgAA3wIAAPYCAADgAgAAQAMAAAADAAD+AgAA3gIAAOECAABmAQAA4QIAAOICAABnAQAA3gIAAOMCAADhAgAA4QIAAOMCAADlAgAA5QIAAOMCAADkAgAA4QIAAOUCAADiAgAA5QIAAOQCAADmAgAA7QIAAOICAADlAgAA7QIAAOcCAADiAgAApAIAAOkCAADoAgAA4wIAAJkCAADkAgAA6wIAAOoCAADoAgAA6QIAAOsCAADoAgAA5AIAAJkCAADmAgAA5gIAAJkCAADsAgAA5QIAAOYCAADyAgAA5gIAAOwCAADyAgAA8gIAAO0CAADlAgAA6wIAAO4CAADqAgAA6wIAAO8CAADuAgAA7AIAAJkCAADwAgAAmQIAAJoCAADwAgAA8QIAAOwCAADwAgAA8QIAAPICAADsAgAA8QIAAPMCAAD0AgAA8QIAAPQCAADyAgAA7QIAAPICAAD1AgAA8gIAAPQCAAD1AgAAmwIAAJcCAADEAgAA6gIAAPcCAAD2AgAA+AIAAPcCAADuAgAA7gIAAPcCAADqAgAA7gIAAO8CAAD4AgAAmwIAAPACAACaAgAAmwIAAPkCAADwAgAA8AIAAPkCAADxAgAA8QIAAPkCAADzAgAA9wIAAPgCAAD8AgAA9wIAAPwCAAD2AgAAmwIAAP8CAAD5AgAA+AIAAPoCAAD8AgAA/AIAAPoCAAD7AgAA/gIAAMQCAABAAwAA/AIAAOACAAD2AgAAxAIAAP4CAACbAgAAmwIAAP4CAAAAAwAAmwIAAAADAAD/AgAA/QIAAPwCAAD7AgAA5wIAAGcBAADiAgAA5wIAAGsDAABnAQAA9AIAAPMCAAABAwAA9QIAAPQCAAABAwAAagMAAPUCAAABAwAA+QIAAP8CAADzAgAA/wIAAAEDAADzAgAAawMAAGgBAABnAQAAawMAADAAAABoAQAAAgMAAJwCAADyAAAAAgMAAKACAACcAgAAAwMAAAQDAAACAwAA8gAAAAMDAAACAwAABAMAAAYDAAACAwAAAgMAAAYDAACgAgAAAwMAAAUDAAAEAwAABAMAAAUDAAAGAwAAcAMAAAUDAAD0AAAACQMAAPsAAAAHAwAABwMAAPsAAAD5AAAACAMAAPoAAAD7AAAACAMAAPwAAAD6AAAA+wAAAAkDAAAIAwAA/AAAAAgDAAAKAwAACAMAAAkDAAALAwAACAMAAAsDAAAKAwAACwMAAAwDAAAKAwAAEAMAAAIBAAD+AAAA/wAAAA0DAAD+AAAA8AAAAAkDAAAHAwAADQMAABADAAD+AAAADgMAAAkDAADwAAAACQMAAA4DAAALAwAADQMAAA8DAAAQAwAADgMAABIDAAALAwAAFgMAABADAAAPAwAAEAMAABEDAAACAQAA8AAAAJ0CAAAOAwAAAgEAABEDAAAAAQAAAAEAABEDAACoAAAAqAAAABEDAACpAAAADAMAAAsDAAATAwAACwMAABIDAAATAwAAEwMAABIDAAAUAwAAFgMAABcDAAAQAwAAoQIAABIDAAAOAwAAoQIAABQDAAASAwAAFAMAAKECAAAYAwAAEwMAABQDAACGAwAAEAMAABUDAAARAwAAFwMAABUDAAAQAwAAFAMAABgDAAAcAwAAFAMAABwDAACGAwAAEQMAABUDAACrAAAAFQMAABkDAACrAAAAGQMAABUDAAAXAwAAoQIAAKICAAAYAwAAogIAALAAAAAYAwAAFwMAABsDAAAZAwAAGgMAABcDAAAWAwAAGwMAABcDAAAaAwAAGAMAALAAAAAcAwAAEQMAAKsAAACpAAAAGQMAAKwAAACrAAAAGQMAABsDAACtAAAAGQMAAK0AAACsAAAArwAAAK0AAAAbAwAAGgMAAK8AAAAbAwAAHQMAAKoCAAAeAwAAHgMAAKoCAACrAgAAHgMAAKsCAAAfAwAAHwMAAKsCAAAgAwAArQIAACEDAACvAgAAHQMAACIDAACtAgAArQIAACIDAAAhAwAAIgMAAB0DAAAeAwAAIwMAACIDAAAeAwAAHwMAACADAAAlAwAAIwMAAB4DAAAfAwAAJQMAACMDAAAfAwAAIgMAACMDAAAkAwAAJQMAACADAAArAwAAIQMAACgDAACvAgAAJgMAACgDAAAiAwAAKAMAACEDAAAiAwAAJgMAACkDAAAnAwAAJgMAACIDAAApAwAAKgMAACkDAAAkAwAAJAMAACkDAAAiAwAALAMAACYDAAAvAwAAJwMAAC8DAAAmAwAALAMAACgDAAAmAwAALAMAALECAAAoAwAAsQIAAK8CAAAoAwAAJwMAAC0DAAAvAwAAKQMAAC0DAAAnAwAALQMAACkDAAAqAwAAVAMAAC4DAAAqAwAALgMAAC0DAAAqAwAAsQIAACwDAAAwAwAAMQMAADADAAAvAwAAMAMAACwDAAAvAwAALQMAADEDAAAvAwAAMgMAALMCAAAwAwAAswIAALECAAAwAwAAMgMAADADAAAzAwAAMQMAADMDAAAwAwAAMQMAAC0DAAAzAwAALQMAAC4DAAAzAwAAwQIAALoCAAA0AwAANAMAADYDAADBAgAANAMAALoCAAA1AwAAugIAALwCAAA1AwAANQMAALwCAADgAgAANQMAAOACAAA7AwAAwQIAADYDAADFAgAANAMAADUDAAA2AwAANgMAADUDAAA3AwAANwMAADUDAAA4AwAAOAMAADUDAAA7AwAANgMAADkDAADFAgAAyQIAAMcCAADGAgAAOgMAAMcCAADJAgAANgMAADcDAAA5AwAAPAMAAMcCAAA6AwAAOQMAAEIDAADFAgAAOgMAAD4DAAA/AwAAOgMAAMkCAAA+AwAAOQMAADcDAAA9AwAAOgMAAEQDAAA8AwAAOgMAAD8DAABEAwAAOAMAADsDAABYAwAAPgMAAMkCAABFAwAAQAMAADwDAABEAwAAOAMAAFgDAABBAwAAOAMAAEEDAACRAwAAOQMAAJIDAABCAwAAPwMAAEMDAACeAwAAPwMAAD4DAABDAwAAPgMAAEUDAABDAwAAPwMAAJ4DAABEAwAAQwMAAEUDAABGAwAARAMAAJ4DAABHAwAARQMAAEkDAACmAwAARgMAAEUDAACmAwAASAMAAM4CAABCAwAApgMAAEkDAABKAwAAzgIAAEgDAADSAgAASQMAANECAADTAgAASQMAANMCAABLAwAASgMAAEkDAABLAwAASgMAAEsDAACtAwAA1gIAAEsDAADTAgAA0gIAAEwDAADVAgAATQMAAEsDAADWAgAATQMAAE4DAABLAwAASwMAAE4DAACtAwAArwMAAEwDAADSAgAATQMAANgCAABOAwAATAMAAE8DAADVAgAA1QIAAE8DAADaAgAATgMAANgCAADcAgAAIAMAANoCAABRAwAA2gIAAE8DAABRAwAATAMAAFADAABPAwAAIwMAAFADAACMAwAAIAMAAFEDAAArAwAAKwMAAE8DAAAlAwAAKwMAAFEDAABPAwAAUAMAACUDAABPAwAAIwMAACUDAABQAwAAUwMAAFQDAABSAwAATgMAANwCAABVAwAAVQMAAFMDAABSAwAAVQMAAFIDAABOAwAAVQMAADMDAABTAwAAMwMAAC4DAABTAwAALgMAAFQDAABTAwAA3QIAALMCAABVAwAAMgMAAFUDAACzAgAAMwMAAFUDAAAyAwAA3QIAAFUDAADcAgAAVgMAAFcDAAA7AwAAVgMAAOACAAD8AgAAOwMAAOACAABWAwAAQAMAAMQCAAA8AwAAVwMAAFgDAAA7AwAAaAMAAAADAABAAwAAaAMAAEADAABEAwAAVgMAAFkDAABXAwAAVwMAAFkDAABYAwAAtgMAAFkDAAC3AwAAWAMAAFkDAAC2AwAAQQMAAFgDAAC2AwAAaAMAAEQDAABHAwAAaAMAAEcDAADNAwAAWgMAAKQCAAC5AwAA6QIAAKQCAABaAwAAWgMAAOsCAADpAgAA7QIAAPUCAADnAgAAWgMAAO8CAADrAgAAWgMAAFwDAADvAgAAWwMAAFoDAAC5AwAAXAMAAFoDAABbAwAA7wIAAFwDAAD4AgAA+AIAAFwDAAD6AgAAXAMAAFsDAABdAwAAXQMAAPoCAABcAwAAXQMAAF4DAAD6AgAA+gIAAF4DAAD7AgAAXQMAAGIDAABeAwAAWwMAALkDAABdAwAA/QIAAPsCAABeAwAAXgMAAF8DAAD9AgAAYAMAAFYDAAD8AgAA/QIAAGADAAD8AgAA/QIAAF8DAABgAwAAXgMAAGIDAABfAwAAXQMAAL0DAABiAwAAVgMAAGADAABhAwAAYgMAAGEDAABgAwAAYAMAAF8DAABiAwAAYQMAAFkDAABWAwAAZQMAAFkDAABhAwAAYgMAAGUDAABhAwAAYwMAAP8CAAAAAwAAYwMAAGQDAAD/AgAAYwMAAAADAABoAwAAtwMAAFkDAABlAwAAYwMAAGYDAABkAwAAZAMAAGYDAABnAwAAYwMAAGgDAABmAwAAaQMAAGYDAABoAwAAaQMAAGcDAABmAwAA9QIAAGoDAADnAgAAagMAAGsDAADnAgAAawMAAGoDAADPAwAAagMAAAEDAABsAwAAAQMAAG0DAABsAwAAzwMAAGoDAABsAwAAAQMAAP8CAABtAwAAbAMAAG0DAABuAwAAzwMAAGwDAABuAwAA/wIAAGQDAABtAwAAZAMAAG4DAABtAwAAZAMAAGcDAABuAwAAMAAAAGsDAADPAwAAcAMAAHEDAAAFAwAAbwMAAAUDAABxAwAABgMAAAUDAABvAwAAcQMAAHMDAABvAwAAbwMAAHMDAAAGAwAAcAMAAHIDAABxAwAAcgMAAHMDAABxAwAAcAMAAHQDAAByAwAAdAMAANEDAABzAwAAcgMAAHQDAABzAwAAcwMAANEDAAAGAwAAAwEAAHQDAABwAwAAdwMAAAgBAAAKAwAACgMAAAgBAAD8AAAAdQMAAAcBAAAIAQAABwEAAHUDAAB4AwAAdwMAAAoDAAB5AwAAeQMAAAoDAAAMAwAAeQMAAAwDAAB2AwAAeAMAAAkBAAB3AwAAdwMAAAkBAAAIAQAACgEAAHUDAAAJAQAACAEAAAkBAAB1AwAAdQMAAAsBAAB4AwAAdQMAAAoBAAALAQAACQEAAHgDAAALAQAAeQMAAHgDAAB3AwAAegMAAHgDAAB5AwAADwMAAA0DAACAAwAAeQMAAHYDAAB7AwAAfAMAAH0DAAB6AwAAfAMAAHoDAAB7AwAAewMAAHoDAAB5AwAAdgMAAIYDAAB7AwAADAEAAIADAAANAwAA/wAAAAwBAAANAwAADgEAAIADAAAMAQAACQEAAH4DAAAOAQAACQEAAAsBAAAQAQAACQEAABABAAB+AwAADgEAAH4DAACAAwAAfgMAAH8DAACBAwAAfgMAABABAAB/AwAAggMAAIADAAB+AwAAfQMAAHwDAAB/AwAAfwMAAHwDAACBAwAAgAMAABYDAAAPAwAAfAMAAHsDAACEAwAA5AMAABIBAACCAwAAggMAAH4DAACBAwAAggMAAIEDAADkAwAAgAMAAIcDAAAWAwAAgAMAAIMDAACHAwAAggMAAIMDAACAAwAAgwMAAIUDAAC5AAAAggMAAIUDAACDAwAAkAMAAKACAAAGAwAAhgMAAHYDAAATAwAAEwMAAHYDAAAMAwAAewMAAIYDAACIAwAAhwMAABoDAAAWAwAAewMAAIgDAACEAwAAhAMAAIgDAACKAwAAiQMAAIYDAAAcAwAAiAMAAIYDAACJAwAAigMAAIgDAACJAwAAjgMAAOgDAACKAwAAGgMAAIcDAACLAwAAhwMAALkAAACLAwAAhwMAAIMDAAC5AAAAiwMAAK8AAAAaAwAAugAAAK8AAACLAwAAuQAAALoAAACLAwAAiQMAABwDAAC8AAAAHAMAALAAAAC8AAAAigMAALwAAAC9AAAAigMAAIkDAAC8AAAAjgMAAIoDAAC9AAAA7wMAAIwDAACqAwAAJAMAAIwDAADvAwAAJAMAACMDAACMAwAAjQMAACQDAADvAwAAVAMAACoDAACNAwAAKgMAACQDAACNAwAAjgMAAI8DAADzAwAAOQMAAD0DAACSAwAAkwMAAJIDAAA9AwAANwMAAJMDAAA9AwAAkQMAAJMDAAA3AwAAOAMAAJEDAAA3AwAA9AMAAJQDAACQAwAABgMAAPQDAACQAwAAkwMAAJEDAACVAwAAkQMAAJkDAACVAwAAkAMAAJQDAACzAwAAkgMAAJoDAABCAwAAlgMAAJoDAACSAwAAkgMAAJMDAACWAwAAlgMAAJMDAACYAwAAlAMAAJcDAACfAwAA9AMAAJcDAACUAwAAkwMAAJUDAACYAwAAtQMAAJQDAACfAwAAmAMAAJUDAACZAwAAlAMAALUDAACzAwAAQgMAAJoDAABIAwAAlgMAAJsDAACaAwAAmgMAAJsDAACcAwAAmwMAAPQDAACdAwAAnAMAAJsDAACdAwAAngMAAEMDAABGAwAAlgMAAJgDAACbAwAAlwMAAJsDAACfAwAA9AMAAJsDAACXAwAAmwMAAJgDAACfAwAAmQMAAJ8DAACYAwAAnAMAAKADAACaAwAAnAMAAJ0DAACgAwAAngMAAEYDAAChAwAARgMAAKYDAAChAwAAoQMAAKIDAACeAwAAogMAAKMDAACeAwAAowMAAEcDAACeAwAApAMAAKMDAACiAwAAowMAAMwDAABHAwAApAMAAMwDAACjAwAAmgMAAKADAABIAwAAogMAAKEDAACnAwAAoQMAAKYDAACnAwAApAMAAKIDAACoAwAAogMAAKcDAACoAwAApAMAAKgDAAD1AwAApwMAAKYDAACsAwAApgMAAEoDAACsAwAAqAMAAKcDAACpAwAApwMAAKwDAACpAwAAqAMAAKkDAAD5AwAAoAMAAK8DAABIAwAA9gMAAKoDAACgAwAAoAMAAKoDAACvAwAAqQMAAKwDAACrAwAA+QMAAKkDAACrAwAASAMAAK8DAADSAgAASgMAAK0DAACsAwAArAMAAK0DAACuAwAAqwMAAKwDAACuAwAAjAMAAK8DAACqAwAAjAMAAFADAACvAwAAUAMAAEwDAACvAwAAsQMAAI0DAACwAwAAjQMAAAAEAACwAwAArQMAAE4DAACxAwAAsQMAALADAACuAwAAsQMAAK4DAACtAwAAUgMAAI0DAACxAwAAVAMAAI0DAABSAwAAsQMAAE4DAABSAwAAjwMAACwEAADzAwAAuQMAAKQCAACyAwAAugMAALkDAACyAwAApAIAAJADAACyAwAAsgMAAJADAACzAwAAsgMAALQDAAC6AwAAswMAALQDAACyAwAAQQMAAJkDAACRAwAAtgMAAJkDAABBAwAAtAMAALMDAAC1AwAAtAMAALUDAADCAwAAnwMAAJkDAAC2AwAAtQMAAJ8DAAC2AwAAtQMAALYDAAC3AwAAtQMAALcDAADCAwAApQMAALgDAACkAwAAzAMAAM0DAABHAwAAXQMAALkDAAC9AwAAuQMAALwDAAC7AwAAuQMAALoDAAC8AwAAvQMAALkDAAC7AwAAtAMAAL4DAAC6AwAAvAMAAMADAAC/AwAAuwMAALwDAAC/AwAAvgMAALwDAAC6AwAAwAMAALwDAAC+AwAAZQMAAGIDAAC/AwAAYgMAAL0DAAC/AwAAvQMAALsDAAC/AwAAtAMAAMIDAAC+AwAAwwMAAGUDAAC/AwAAvwMAAMADAADDAwAAwwMAAMADAADCAwAAwgMAAMADAAC+AwAAZwMAAMkDAADFAwAAyQMAAMQDAADFAwAAxgMAAMEDAADEAwAAxAMAAMEDAADFAwAAxQMAAMEDAADHAwAAxwMAAMEDAADGAwAAtwMAAGUDAADDAwAAwgMAALcDAADDAwAAyQMAAMoDAADLAwAAaQMAAMoDAADJAwAAywMAAM4DAADGAwAAygMAAM4DAADLAwAAyQMAAGcDAABpAwAAywMAAMQDAADJAwAAxgMAAMQDAADLAwAAygMAAM0DAADMAwAAuAMAAMgDAADMAwAApAMAALgDAADMAwAAzAMAAM4DAADKAwAAyAMAAM4DAADMAwAAaQMAAGgDAADNAwAAygMAAGkDAADNAwAAzwMAAG4DAADFAwAAxQMAANADAADPAwAAPAAAAM8DAADQAwAAxQMAAG4DAABnAwAA0AMAAMUDAADHAwAAMAAAAM8DAAA+AAAAPgAAAM8DAAA8AAAAAwEAANIDAAB0AwAA0QMAAHQDAADSAwAA0wMAAAYDAADRAwAA0QMAANIDAADVAwAA0QMAANUDAADTAwAAEwEAANQDAADSAwAAEwEAANIDAAADAQAA1AMAANUDAADSAwAA0wMAANUDAADYAwAA1gMAABMBAAAVAQAAEwEAANYDAADUAwAA1QMAANYDAADbAwAA1AMAANYDAADVAwAA1QMAANsDAADXAwAA2AMAANUDAADXAwAA2AMAABkEAADTAwAAFQEAANkDAADWAwAA2gMAANkDAAAVAQAA1gMAANkDAADbAwAA2gMAANwDAADZAwAA3AMAANsDAADZAwAA1wMAANsDAADcAwAA1wMAAN0DAADYAwAA1wMAANwDAADdAwAA2gMAAAkEAADcAwAACQQAAN0DAADcAwAA3gMAAAcBAAB4AwAA3gMAAN8DAADgAwAA3gMAAOADAAAaAQAAGgEAAOADAAAXBAAA3gMAAHgDAADiAwAA3wMAAN4DAADiAwAA4QMAAOADAADfAwAAeAMAAHoDAADiAwAA3wMAAOIDAADhAwAA4gMAAHoDAAB9AwAA5QMAAOIDAAB9AwAA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GAUAABQFAAAZBQAAFwUAAJcEAACVBAAAGgUAAJcEAAAXBQAAGwUAABoFAAAYBQAAFwUAABgFAAAaBQAAGwUAABgFAAAcBQAAGAUAABkFAAAcBQAAHAUAABkFAAAdBQAAmQQAABoFAADuBAAAGgUAABAFAADuBAAAmQQAAJcEAAAaBQAAGgUAABsFAAAQBQAAEAUAABwFAAARBQAAGwUAABwFAAAQBQAAHAUAAB0FAAARBQAAHQUAAM4GAAARBQAAHgUAABYFAAAfBQAAGQUAAB4FAAAiBQAAHgUAACMFAAAiBQAAHwUAACkFAAAeBQAAKQUAACMFAAAeBQAASgUAACAFAAAmBQAAJAUAACUFAAAhBQAAJQUAACYFAAAhBQAAJgUAACAFAAAhBQAAHQUAABkFAAAiBQAAHQUAACIFAAAnBQAAIgUAACMFAAAoBQAAIgUAACgFAAAnBQAAKAUAACMFAAArBQAAKwUAACMFAAApBQAAUAUAACsFAAApBQAAJAUAAC0FAAAlBQAAJAUAACoFAAAtBQAAJgUAACUFAAAtBQAAJgUAAC0FAABUBQAALAUAAB0FAAAnBQAA8QYAACwFAAAnBQAAzgYAAPQGAAATBQAAJwUAACgFAADxBgAA8QYAACgFAAD1BgAAKgUAAM8GAAATBQAA9AYAACoFAAATBQAAKAUAACsFAAD1BgAAzwYAACoFAAAkBQAAIQUAAC4FAAAkBQAAIQUAAFYFAAAuBQAALgUAAFYFAAAvBQAALgUAAC8FAADiBgAAMAUAAC8FAABZBQAAWQUAAFoFAAAwBQAAWgUAAGAFAAAxBQAAMAUAAFoFAAAxBQAAMQUAADIFAAAwBQAAMgUAAOIGAAAwBQAA4gYAAC8FAAAwBQAAMQUAAOMGAAAyBQAANAUAADMFAABbBQAAnQQAAJsEAAAzBQAAMwUAADQFAAAWBQAAFQUAAJ8EAAAzBQAAMwUAAJ8EAACdBAAAFQUAADMFAAAWBQAAnwQAABUFAACUBAAANwUAADUFAAA2BQAAOAUAADcFAAA2BQAAOAUAADkFAAA3BQAANgUAADUFAAA6BQAAOgUAADsFAAA2BQAANgUAADsFAAA4BQAAPAUAADkFAAA4BQAAOwUAADwFAAA4BQAANQUAADcFAAA/BQAAOQUAAD8FAAA3BQAAPgUAAD0FAAA6BQAAPgUAADoFAAA/BQAAPwUAADoFAAA1BQAAOQUAAFEFAAA/BQAAOQUAADwFAABRBQAAQAUAADQFAABbBQAANAUAAEAFAABDBQAAQwUAAEAFAABEBQAAQQUAABYFAAA0BQAAQQUAADQFAABCBQAAQwUAAEYFAABCBQAAQwUAAEIFAAA0BQAARAUAAEYFAABDBQAAIAUAAEYFAABEBQAAIQUAACAFAABEBQAAFgUAAEEFAAAfBQAAQQUAAEcFAAAfBQAAQgUAAEUFAABBBQAAQQUAAEUFAABHBQAARQUAAEIFAABIBQAAQgUAAEYFAABIBQAARgUAACAFAABKBQAARQUAADsFAABHBQAARQUAAEgFAAA7BQAARgUAAEoFAABIBQAASgUAAEsFAABIBQAASwUAAEkFAABIBQAAVAUAAEoFAAAmBQAASwUAAEoFAABUBQAARwUAAEwFAAAfBQAAOwUAADoFAABNBQAAOwUAAE0FAABHBQAATAUAAEcFAABNBQAAOwUAAEgFAAA8BQAATgUAADwFAABIBQAAKQUAAB8FAABMBQAAKQUAAEwFAABPBQAAUAUAAEwFAABNBQAATwUAAEwFAABQBQAASAUAAEkFAABOBQAATwUAAFAFAAApBQAASQUAAEsFAABVBQAASQUAAFUFAABOBQAAVQUAAEsFAABUBQAATQUAADoFAAA9BQAA8wYAAE0FAAA9BQAAUQUAADwFAABOBQAABQcAAFEFAABOBQAATQUAAPMGAABSBQAATQUAAFMFAABQBQAATQUAAFIFAABTBQAABQcAAE4FAABcBQAAUwUAAAkHAABQBQAACQcAACsFAABQBQAAXAUAAE4FAABVBQAAQAUAAFYFAABEBQAAVgUAACEFAABEBQAAVgUAAFgFAABXBQAAVgUAAFcFAAAvBQAAYAUAAFoFAAAfAQAAWQUAAB8BAABaBQAAWAUAAFkFAABXBQAALwUAAFcFAABZBQAAGgAAADEFAABgBQAAWwUAAJsEAAClBAAAmwQAAFsFAAAzBQAAQAUAAMEAAAAbAQAApQQAAMEAAABbBQAAQAUAAFsFAADBAAAAQAUAAC8BAABdBQAALwEAAB0BAABdBQAAQAUAAF0FAABWBQAAXQUAAF4FAABWBQAAVgUAAF4FAABYBQAAHgEAAF8FAAAdAQAAXwUAAB4BAAAfAQAAHQEAAF8FAABdBQAAXgUAAF0FAABfBQAAWQUAAF4FAABfBQAAXwUAAB8BAABZBQAAWAUAAF4FAABZBQAAZAUAAKcEAAB3BQAAqQQAAKcEAABiBQAAYgUAAGEFAACqBAAAYgUAAKoEAACpBAAAYwUAAGEFAABiBQAAZAUAAGMFAABiBQAAYgUAAKcEAABkBQAAqgQAAGEFAACuBAAAYwUAAK4EAABhBQAAsQQAAK4EAABlBQAAZQUAAGMFAABmBQAArgQAAGMFAABlBQAAsQQAAGUFAAC0BAAAZQUAAGcFAAC0BAAAtwQAALQEAABnBQAAZwUAAGUFAABqBQAAaAUAAGoFAABlBQAAaAUAAGUFAABmBQAAZgUAAGkFAABoBQAAagUAAGgFAACWBQAAJAYAAGQFAAB3BQAAbAUAAGMFAABkBQAAYwUAAGwFAABrBQAAYwUAAGsFAABmBQAAaQUAAGYFAABrBQAAbgUAAGQFAAAkBgAAbgUAAGwFAABkBQAAbQUAAGsFAABsBQAAbwUAAGwFAABuBQAAbwUAAG4FAABwBQAAbQUAAG8FAABxBQAAbAUAAG8FAABtBQAAbwUAAHAFAABxBQAAcQUAAHIFAABtBQAAbQUAAHIFAADJBQAAcwUAAOIFAAByBQAAdQUAAHAFAAB0BQAAcAUAAHUFAABxBQAA7AUAAHEFAAB1BQAA7AUAAOsFAABxBQAAcgUAAHEFAADrBQAA6wUAAHMFAAByBQAAdAUAAOoFAAB2BQAAdgUAAHUFAAB0BQAAdQUAAHYFAABPBAAAdQUAAE8EAADsBQAAdgUAAE4EAABPBAAA7AUAAE8EAABRBAAAegUAAHkFAAB4BQAAfAUAAHgFAAB7BQAAeAUAAHkFAAB9BQAAewUAAHgFAAB9BQAAewUAAH8FAAB+BQAAgQUAAH8FAAB7BQAAewUAAH4FAAB8BQAAfgUAAIAFAAB8BQAAfQUAAIEFAAB7BQAAtwQAAGcFAACCBQAAggUAAGcFAABqBQAAhAUAAIMFAABoBQAAgwUAAIQFAACGBQAAfwUAAIUFAAB+BQAAfwUAAIEFAACFBQAAhAUAAGgFAABpBQAAhQUAAIcFAACGBQAAhQUAAIYFAACABQAAhQUAAIAFAAB+BQAAgQUAAIcFAACFBQAAgQUAAIgFAACHBQAAtwQAAIkFAAC/BAAAtwQAAIIFAACJBQAAagUAAIoFAACCBQAAggUAAIoFAACJBQAAjAUAAMAEAACLBQAAgwUAAJEFAABoBQAAigUAAGoFAACWBQAAgwUAAIYFAACRBQAAiwUAAI8FAACQBQAAiwUAAJAFAACMBQAAlgUAAGgFAACRBQAAkQUAAIYFAACNBQAAjQUAAJIFAACOBQAAjQUAAIYFAACSBQAAhgUAAIcFAACSBQAAjwUAAIgFAACQBQAAjwUAAJIFAACIBQAAkgUAAIcFAACIBQAAiQUAAJMFAAC/BAAAvgQAAJMFAACcBQAAnAUAAMAEAAC+BAAAkwUAAIoFAACUBQAAiQUAAIoFAACTBQAAkwUAAJQFAACVBQAAkwUAAJUFAACcBQAAiwUAAMAEAACcBQAAiwUAAJwFAACYBQAAigUAAJYFAACUBQAAjQUAAJQFAACRBQAAkQUAAJQFAACWBQAAlAUAAI0FAACOBQAAlAUAAI4FAACVBQAAlQUAAI4FAACXBQAAmAUAAJkFAACPBQAAmAUAAI8FAACLBQAAjgUAAJoFAACXBQAAkgUAAJoFAACOBQAAjwUAAJoFAACSBQAAjwUAAJsFAACaBQAAjwUAAJkFAACbBQAApQUAAJoFAACbBQAAnAUAAJUFAACdBQAAnQUAAJ4FAACcBQAAnQUAAKYFAACeBQAAnAUAAJ4FAACYBQAAlwUAAKAFAACVBQAAlwUAAJ8FAACgBQAAlQUAAKAFAACdBQAAnQUAAKAFAACaBQAAnQUAAJoFAAChBQAAnQUAAKEFAACmBQAAnwUAAJoFAACiBQAAnwUAAJcFAACaBQAAogUAAJoFAACjBQAAowUAAJoFAACgBQAAmgUAAKUFAACkBQAAmgUAAKQFAAChBQAAqQUAAKAFAACfBQAApgUAAKEFAACpBQAAqQUAAJ8FAACiBQAAoAUAAKkFAACjBQAAowUAAKkFAACoBQAAqQUAAKQFAACoBQAAqQUAAKEFAACkBQAADgYAAKcFAACkBQAAqAUAAKQFAACnBQAApwUAAKoFAACoBQAAqwUAAKIFAACsBQAAqQUAAKIFAACrBQAAegUAAHgFAACtBQAArQUAAHgFAAB8BQAAfAUAAIAFAACxBQAAsQUAAK0FAAB8BQAAhAUAAGkFAACwBQAAhgUAAIQFAACuBQAArgUAAIQFAACwBQAAgAUAAIYFAACuBQAAgAUAAK4FAACvBQAAgAUAAK8FAACxBQAArwUAAK4FAAC2BQAAsAUAAGkFAABrBQAAuAUAALYFAACuBQAAsAUAAGsFAAC0BQAArgUAALAFAACyBQAAsgUAALAFAAC0BQAAuAUAAK4FAACzBQAAswUAAK4FAACyBQAAtgUAALcFAACvBQAAsQUAAK8FAAC3BQAAtgUAALgFAAC9BQAAygUAALUFAAC5BQAAuAUAALMFAAC6BQAAuAUAALoFAAC9BQAAuwUAAMoFAAC5BQAAuwUAALkFAAC/BQAAvQUAAKUFAAC2BQAAtwUAALYFAACbBQAAmwUAALYFAAClBQAAtQUAALwFAAC5BQAAuQUAALwFAAC+BQAAuQUAAL4FAAC/BQAAvQUAALoFAAA3BgAAtQUAAMoFAADQBQAAvAUAALUFAACiBQAAogUAAKMFAAC8BQAAowUAAMEFAAC8BQAAwQUAAMIFAAC+BQAAwQUAAL4FAAC8BQAAvgUAAMIFAAC/BQAAvwUAAMIFAADDBQAAvwUAAMAFAAC7BQAAvwUAAMMFAADABQAAogUAALUFAADGBQAAowUAAKgFAADBBQAAwQUAAKgFAADEBQAAwQUAAMQFAADCBQAAxAUAAMUFAADCBQAAtQUAANAFAADGBQAAwgUAAMUFAADDBQAAQwYAAEQGAADDBQAAQwYAAMMFAADFBQAAqAUAAKoFAADEBQAAxgUAAN4FAADHBQAAogUAAMYFAACsBQAAxgUAAMcFAACsBQAAsgUAALQFAADJBQAAswUAALIFAADIBQAAyAUAALIFAADJBQAAyAUAALoFAACzBQAAtAUAAGsFAABtBQAAtAUAAG0FAADJBQAAzAUAAMoFAAC7BQAAzAUAALsFAADLBQAAugUAAMgFAADOBQAAyAUAAMkFAADNBQAAyAUAAM0FAADOBQAAyQUAAOIFAADNBQAA4gUAAOMFAADNBQAA4wUAAM4FAADNBQAAwAUAAM8FAAC7BQAAuwUAAM8FAADLBQAA0AUAAMoFAADMBQAAzAUAAMsFAADRBQAAywUAAM8FAADRBQAA0AUAAMwFAADSBQAA0gUAAMwFAADTBQAA0wUAAMwFAADRBQAA5AUAANIFAADTBQAA1AUAANIFAADkBQAA1QUAANMFAADRBQAA5AUAANMFAADVBQAAwAUAANYFAADPBQAAwAUAAMMFAADWBQAAzwUAANYFAADRBQAA0AUAANIFAADXBQAA1gUAANgFAADRBQAA2AUAANYFAADZBQAA2gUAANcFAADUBQAA1wUAANIFAADUBQAA2AUAANsFAADaBQAA2AUAANoFAADVBQAA2AUAANUFAADRBQAA2QUAANsFAADYBQAAxgUAANAFAADXBQAAwwUAAEQGAADWBQAARAYAAFEGAADWBQAA1gUAAFEGAADZBQAA1wUAANoFAADbBQAA1wUAANsFAADcBQAA3AUAANsFAADdBQAA2QUAAN0FAADbBQAA3gUAAMYFAADXBQAA3gUAANcFAADfBQAA1wUAANwFAADfBQAA3wUAANwFAADpBQAA4AUAAG4FAAAkBgAA4QUAAOAFAADqBQAAcAUAAG4FAADhBQAAbgUAAOAFAADhBQAAcgUAAOIFAADJBQAA5QUAAOMFAABzBQAAcwUAAOMFAADiBQAA5gUAAOMFAADlBQAA1QUAANoFAADkBQAA1AUAAOQFAADaBQAAzgUAAOMFAABiBgAA5wUAANwFAADdBQAAYgYAAOMFAADoBQAA3AUAAOcFAADpBQAA5wUAAN0FAABjBgAAYwYAAOkFAADnBQAAcAUAAOEFAAB0BQAA4QUAAOoFAAB0BQAA6wUAAOUFAABzBQAA6wUAAOYFAADlBQAA6AUAAOMFAADmBQAA6wUAAOgFAADmBQAA6AUAAOsFAABuBgAA6wUAAOwFAABuBgAAbwYAAG4GAADsBQAA6gUAALwGAAC9BgAA6gUAAL0GAAB2BQAA7QUAAFEEAABnBAAAuQQAACQGAAB3BQAA7gUAAPAFAADvBQAA8QUAAO4FAADvBQAA7wUAAPIFAADxBQAAegUAAO4FAADxBQAAegUAAPEFAAB5BQAAeQUAAPEFAADzBQAA8gUAAPMFAADxBQAA9AUAAPMFAADyBQAA8wUAAPUFAAB5BQAAeQUAAPUFAAB9BQAA9QUAAIEFAAB9BQAAwAQAAIwFAAD2BQAA9wUAAPYFAACMBQAAkAUAAPcFAACMBQAAkAUAAPgFAAD3BQAAkAUAAIgFAAD4BQAAiAUAAIEFAAD4BQAAgQUAAPkFAAD4BQAAwAQAAPYFAADIBAAAyAQAAPYFAACYBQAAmAUAAPYFAAD3BQAA9wUAAJkFAACYBQAAmQUAAPgFAACbBQAAmQUAAPcFAAD4BQAAmwUAAPgFAAD8BQAAAAYAAPsFAAD4BQAA/AUAAPgFAAD7BQAAAAYAAPgFAAD9BQAA+AUAAPkFAAD9BQAA/QUAAPkFAAD6BQAA/gUAAJgFAACeBQAA/gUAAMgEAACYBQAA+wUAAAAGAAD/BQAA+wUAAP8FAAABBgAAAAYAAP0FAAACBgAAAgYAAP0FAAADBgAApQUAAAEGAACkBQAApQUAAPwFAAABBgAA/AUAAPsFAAABBgAABAYAAP4FAAAFBgAABAYAAMsEAAD+BQAAywQAAMgEAAD+BQAABQYAAAcGAAAGBgAABAYAAAUGAAAGBgAABgYAAAcGAAAIBgAACwYAAP8FAAAABgAABQYAAP4FAAAKBgAACgYAAP4FAACeBQAACgYAAJ4FAACmBQAAAgYAAAsGAAAABgAADAYAAAUGAAAKBgAADAYAAAcGAAAFBgAADQYAAAgGAAAHBgAADAYAAA0GAAAHBgAAAQYAAP8FAAALBgAACwYAAAIGAAABBgAAAQYAAAIGAAAPBgAADAYAAAoGAAACBgAADwYAAAIGAAAKBgAAAgYAAAMGAAANBgAAAgYAAA0GAAAMBgAADgYAAKQFAAAQBgAAAQYAABAGAACkBQAADwYAABAGAAABBgAAzgQAAAQGAADPBAAAzgQAAMEEAAAEBgAAywQAAAQGAADDBAAAwwQAAAQGAADBBAAABgYAAM8EAAAEBgAACAYAAM8EAAAGBgAACAYAABEGAADPBAAACQYAAM8EAAARBgAA0AQAABIGAADRBAAA0AQAAAkGAAASBgAAEQYAABIGAAAJBgAAGQYAABMGAACmBQAAEwYAAAoGAACmBQAAFAYAAAoGAAATBgAACAYAAA0GAAARBgAAEgYAABEGAAAVBgAAFQYAABEGAAANBgAApgUAAKkFAAAZBgAApwUAAA4GAACqBQAACgYAABQGAAAPBgAAFAYAABYGAAAPBgAAFwYAABUGAAANBgAADgYAABoGAACqBQAADgYAABAGAAAaBgAAGgYAAKwFAACqBQAAFgYAABgGAAAPBgAAFgYAAEEGAAAYBgAADwYAABgGAAAQBgAAEAYAABgGAAAaBgAADQYAAAMGAAAXBgAA0QQAABIGAAAcBgAAEwYAABkGAAAUBgAAEgYAAB4GAAAcBgAAqQUAAKsFAAAZBgAAqwUAABoGAAAZBgAAFAYAABoGAAAWBgAAGQYAABoGAAAUBgAAGgYAAKsFAACsBQAAGAYAABsGAAAaBgAAFgYAABoGAABBBgAAQQYAABoGAAAbBgAAIAYAABwGAAAdBgAAHAYAAB4GAAAdBgAAIQYAACAGAAAdBgAAHwYAACEGAAAdBgAAHgYAAB8GAAAdBgAAIQYAAB8GAAAiBgAA0QQAABwGAADSBAAAHAYAACMGAADSBAAA7gUAACUGAADwBQAA7gUAACYGAAAlBgAAJgYAAO4FAAB6BQAAJgYAACcGAAAlBgAAKAYAACUGAAAnBgAAJgYAAHoFAACtBQAA9AUAAJcGAADzBQAAJgYAACkGAAAnBgAAJwYAACkGAAAuBgAALgYAACoGAAAnBgAAKAYAACcGAAAqBgAA8wUAAC8GAAD1BQAA8wUAAJcGAAAvBgAAJgYAAK0FAAArBgAAJgYAACsGAAApBgAAKQYAACsGAAAsBgAALAYAAC0GAAApBgAALgYAACkGAAAtBgAALgYAAC0GAAAqBgAALQYAAJwGAAAqBgAA9QUAAC8GAACBBQAAMAYAACsGAACtBQAALAYAACsGAAAxBgAAKwYAADAGAAAxBgAALAYAADEGAAAtBgAALQYAADEGAACcBgAALwYAADIGAAD5BQAAgQUAAC8GAAD5BQAAsQUAADAGAACtBQAALwYAAJ0GAAAyBgAAMQYAADAGAAA0BgAA+QUAADIGAAD6BQAA+gUAADIGAAAzBgAAsQUAADQGAAAwBgAAsQUAALcFAAA0BgAAMQYAADQGAAA4BgAAMQYAADgGAACfBgAAtwUAAJsFAAD8BQAAtwUAAPwFAAA2BgAA/QUAAPoFAAAzBgAAvQUAADcGAAA1BgAANgYAADQGAAC3BQAAMwYAADIGAACiBgAANwYAALoFAAA5BgAAnwYAADgGAACjBgAANgYAAKUFAAA7BgAANgYAAPwFAAClBQAAOwYAAKUFAAA6BgAAvQUAADUGAAClBQAAOgYAAKUFAAA1BgAAPAYAADYGAAA7BgAAMwYAAKQGAAADBgAAMwYAAAMGAAD9BQAANQYAADcGAAA6BgAAOgYAADcGAAA/BgAAPAYAADQGAAA2BgAAPAYAADgGAAA0BgAAPwYAADcGAAA5BgAAPQYAADsGAAA6BgAAPQYAAD4GAAA7BgAAPAYAADsGAAA+BgAAOgYAAD8GAAA9BgAAPAYAAEAGAAA4BgAAPAYAAD4GAABABgAAQAYAAKUGAAA4BgAAOQYAAEUGAAA/BgAAOQYAAKsGAABFBgAAGAYAAD0GAAA/BgAAPgYAAD0GAAAYBgAAPgYAABgGAABBBgAAPwYAAEUGAAAYBgAAQQYAAEIGAAA+BgAAQwYAAMQFAACqBQAAxQUAAMQFAABDBgAAQAYAAEIGAAClBgAAQAYAAD4GAABCBgAARQYAAKsGAACpBgAARQYAABsGAAAYBgAARQYAAEIGAAAbBgAAQQYAABsGAABCBgAAqgUAAKwFAABDBgAAQgYAAEUGAABHBgAAQgYAAEcGAAClBgAARwYAAEUGAABGBgAArAUAAMcFAABDBgAARQYAAKkGAABGBgAAQwYAAMcFAABIBgAAQwYAAEgGAABEBgAASgYAACAGAAAhBgAASQYAAEcGAAAhBgAARwYAAEoGAAAhBgAARwYAAEYGAABKBgAASwYAACAGAABKBgAATgYAACAGAABLBgAATAYAAEsGAABKBgAARgYAAE0GAABKBgAASgYAAE0GAABMBgAATAYAAE4GAABLBgAATQYAAKsGAABMBgAAHAYAACAGAABPBgAAIQYAACIGAABJBgAAIAYAAE4GAABPBgAATwYAACMGAAAcBgAATgYAAF0GAABPBgAAugUAAM4FAAA5BgAAUAYAADkGAADOBQAAUAYAAM4FAABkBgAAUAYAAKsGAAA5BgAA2QUAAFEGAABSBgAAUgYAAN0FAADZBQAARAYAAFMGAABRBgAAUAYAALEGAACrBgAAUwYAAFQGAABRBgAAUQYAAFQGAABSBgAAZAYAALEGAABQBgAA3QUAAFIGAABVBgAAUgYAAFQGAABVBgAASAYAAMcFAADeBQAARAYAAEgGAABTBgAASAYAAN4FAADfBQAAUwYAAN8FAABUBgAAUwYAAEgGAADfBQAA6QUAAFYGAADfBQAA6QUAAFwGAABWBgAA3wUAAFYGAABUBgAAVwYAAFUGAABWBgAAVAYAAFYGAABVBgAAsQYAAGQGAAC0BgAAWAYAAE4GAABZBgAATAYAAFkGAABOBgAAqwYAAFoGAABMBgAAWgYAAFkGAABMBgAAWwYAAFgGAABZBgAAVgYAAFwGAABXBgAAXQYAAE4GAABYBgAAWgYAAF4GAABZBgAAXQYAAFgGAABbBgAAXQYAAFsGAABfBgAAWwYAAFkGAABeBgAAXgYAALQGAABbBgAAtAYAAF8GAABbBgAAXQYAAF8GAABqBgAATwYAAF0GAABsBgAAXQYAAGoGAABsBgAATwYAAGwGAACIBAAAYQYAAGAGAAC3BgAAYAYAAOAFAAAkBgAA4AUAAGEGAADqBQAA4AUAAGAGAABhBgAAYgYAAGQGAADOBQAAYwYAAN0FAABVBgAAZAYAAGIGAABmBgAAZgYAAGIGAADoBQAAVQYAAFcGAABjBgAAYwYAAFcGAABlBgAAYwYAAGUGAADpBQAAXAYAAOkFAABlBgAAXAYAAGUGAABXBgAAtAYAAGQGAAC4BgAAtAYAALgGAABfBgAAuAYAAGcGAABfBgAAaAYAAGcGAABmBgAAZgYAAGkGAABoBgAAXwYAAGcGAABqBgAAZwYAAGgGAABqBgAAaQYAAGsGAABoBgAAawYAAGoGAABoBgAAagYAAGsGAABsBgAAbQYAAGEGAAC3BgAA6gUAAGEGAABtBgAAvAYAAOoFAABtBgAAZgYAAOgFAABuBgAAZgYAAG4GAABpBgAAaQYAAG4GAABrBgAAawYAAG4GAABvBgAAbwYAAGwGAABrBgAAhwQAAGwGAABvBgAA7AUAAO0FAABvBgAAbwYAAO0FAACHBAAA7QUAAGcEAACHBAAAJAYAANUEAAASBQAAuQQAANUEAAAkBgAA7wUAAPAFAABwBgAAcAYAAHEGAADvBQAA7wUAAHEGAADyBQAAcgYAAHEGAABwBgAA8gUAAHEGAABzBgAA9AUAAPIFAABzBgAAcgYAAL8GAABxBgAAcgYAAL4GAAC/BgAAcwYAAHEGAAB0BgAAdAYAAHEGAAC/BgAAdAYAAMQGAABzBgAA2AQAANkEAAB2BgAAdQYAANgEAAB2BgAA2QQAAN0EAAB2BgAAdgYAAN0EAADfBAAAeQYAAHcGAAB+BgAAeAYAAHkGAAB+BgAAegYAAOIEAADhBAAA4QQAAOAEAAB7BgAAewYAAHwGAADhBAAA4QQAAHwGAAB6BgAAfQYAAHoGAAB8BgAAdwYAAH8GAAB+BgAAfQYAAHwGAAB/BgAAfgYAAH8GAAB8BgAA5AQAAIAGAADgBAAA5QQAAHoGAACGBgAAgwYAAIIGAACBBgAAewYAAIMGAAB8BgAAewYAAIAGAACDBgAAewYAAOAEAACABgAAggYAAIMGAACABgAAegYAAH0GAACGBgAAhgYAAH0GAACIBgAAgwYAAKQGAAB+BgAAgwYAAH4GAAB8BgAAfQYAAIQGAACIBgAAfwYAAIQGAAB9BgAA6QQAAIUGAACABgAA5AQAAOkEAACABgAA6gQAAIYGAADpBAAAhgYAAIUGAADpBAAA6gQAAOUEAACGBgAAggYAAIcGAACBBgAAhQYAAIIGAACABgAAhQYAAIcGAACCBgAAhQYAAIYGAACIBgAApAYAAIMGAACBBgAApAYAAIEGAAAXBgAAiQYAAIEGAACHBgAAiQYAABIGAAAVBgAAiQYAAIcGAACFBgAAgQYAAIkGAAAXBgAAFwYAAIkGAAAVBgAAigYAAIkGAACFBgAAiAYAAI4GAACKBgAAiAYAAIoGAACFBgAAiAYAAIQGAACOBgAApAYAABcGAAADBgAAiwYAAI4GAACEBgAAHgYAABIGAACJBgAAjAYAAB4GAACJBgAAjQYAAIwGAACKBgAAigYAAIwGAACJBgAAjgYAAJAGAACNBgAAjgYAAI0GAACKBgAAjAYAAB8GAAAeBgAAjAYAAI0GAAAfBgAAjwYAACIGAAAfBgAAjQYAAJAGAACPBgAAjQYAAI8GAAAfBgAAEgUAAM8GAAAkBgAAcAYAAPAFAACRBgAAkQYAAPAFAAAlBgAAkQYAAHIGAABwBgAAJQYAAJIGAACRBgAAkQYAAJIGAAByBgAAkgYAAJMGAAByBgAAlAYAACUGAAAoBgAAkgYAACUGAACUBgAAlQYAAJIGAACUBgAAkwYAAJIGAACVBgAA9AUAAJYGAACXBgAA9AUAAHMGAACWBgAAcgYAAJMGAACZBgAAmAYAAJQGAAAoBgAAmAYAAJUGAACUBgAAkwYAAJUGAACYBgAAmQYAAJMGAACYBgAAlgYAAJsGAACXBgAAmQYAAJgGAACaBgAAmgYAAJgGAAAoBgAAlgYAAHMGAADQBgAAlwYAAJsGAAAvBgAA0AYAAJsGAACWBgAAKAYAACoGAACcBgAAmgYAACgGAACcBgAAmwYAAJ0GAAAvBgAAmgYAAJwGAACfBgAAnAYAADEGAACfBgAAeQYAAHgGAACeBgAAnQYAAKIGAAAyBgAAnQYAAKEGAACiBgAAeAYAAH4GAACgBgAAngYAAHgGAACgBgAAoAYAAKQGAADXBgAAoAYAAH4GAACkBgAAMwYAAKIGAACkBgAApAYAAKEGAADXBgAApAYAAKIGAAChBgAAowYAADgGAAClBgAAowYAAKUGAACmBgAAjgYAAKgGAACQBgAAiwYAAOAGAACoBgAAiwYAAKgGAACOBgAApQYAAEcGAACnBgAApQYAAKcGAACsBgAAqgYAAKgGAADgBgAApQYAAKoGAACmBgAAqgYAAOAGAACmBgAARwYAAEkGAACnBgAArAYAAKcGAACQBgAAkAYAAKcGAACPBgAAjwYAAKcGAACuBgAAkAYAAKgGAACsBgAASQYAAK0GAACnBgAApwYAAK0GAACuBgAAqgYAAKUGAACsBgAAqgYAAKwGAACoBgAATQYAAEYGAACpBgAAqQYAAKsGAABNBgAASQYAAK8GAACtBgAASQYAACIGAACuBgAArgYAACIGAACPBgAArgYAAK8GAABJBgAArwYAAK4GAACwBgAAIwYAAE8GAACIBAAAJAUAALUGAADPBgAAzwYAALUGAAAkBgAArwYAALIGAACtBgAArwYAAFoGAACyBgAAsgYAAK4GAACtBgAAsgYAAFoGAACxBgAAsQYAAFoGAACrBgAAswYAAK4GAACyBgAAsQYAALQGAACyBgAAtAYAALMGAACyBgAArwYAALAGAABaBgAAWgYAALAGAABeBgAAXgYAALAGAACzBgAAsAYAAK4GAACzBgAAswYAALQGAABeBgAAtQYAAGAGAAAkBgAAYAYAALUGAAC2BgAAYAYAALYGAAC3BgAAuAYAAGQGAABmBgAAuAYAAGYGAABnBgAAvAYAALkGAADkBgAAuQYAALoGAAC2BgAAugYAALkGAAC7BgAAuQYAALwGAAC7BgAAuwYAAG0GAAC6BgAAtwYAALYGAAC6BgAAbQYAALsGAAC8BgAAtwYAALoGAABtBgAAvQYAALwGAADjBgAAhwQAAIgEAABsBgAA7gQAABIFAADsBAAA1QQAAOwEAAASBQAAwwYAAMIGAADBBgAAwgYAAMMGAADFBgAAwwYAAMEGAADEBgAAwwYAAMQGAAB0BgAAwwYAAHQGAAC/BgAAvwYAAL4GAADFBgAAvwYAAMUGAADDBgAA9AQAAMYGAADfBAAA9AQAAHUGAADGBgAA9AQAAPIEAAB1BgAAwAYAAPIEAAD0BAAAxgYAAHUGAAB2BgAAwgYAAMgGAADBBgAAwgYAAMUGAADIBgAAyAYAAMcGAADBBgAAwQYAAMcGAADEBgAA3wQAAMYGAAB2BgAAyAYAAHkGAADHBgAAyAYAAMoGAAB5BgAAygYAAHcGAAB5BgAAygYAAMgGAADLBgAAyAYAAMUGAADLBgAA2wYAAMsGAADJBgAAyQYAAMsGAADFBgAAygYAAMwGAAB/BgAAygYAAH8GAAB3BgAAygYAAMsGAADMBgAAywYAANsGAADMBgAAhAYAAH8GAADMBgAAzAYAAM0GAACLBgAAzAYAAIsGAACEBgAAzAYAANsGAADNBgAAEgUAAM4GAADPBgAAzgYAABMFAADPBgAAvgYAAHIGAACZBgAA0QYAANQGAAC+BgAA0QYAAL4GAACZBgAA0QYAAJkGAACaBgAAxAYAANAGAABzBgAAxAYAANIGAADQBgAAxQYAAL4GAADUBgAA0gYAAJsGAADQBgAAnQYAAJsGAADSBgAA1AYAANEGAADTBgAAmgYAAJ8GAADTBgAA0QYAAJoGAADTBgAAxwYAANUGAADSBgAAxwYAANIGAADEBgAAxQYAANQGAADJBgAA1QYAAJ0GAADSBgAA1AYAANMGAADWBgAAxwYAAHkGAACeBgAAxwYAAJ4GAADXBgAA1wYAANUGAADHBgAA2wYAAMkGAADYBgAA2AYAAMkGAADUBgAAnQYAANUGAAChBgAA1AYAANYGAADYBgAA2AYAANYGAADZBgAA0wYAAJ8GAADfBgAA2gYAANMGAADfBgAA2gYAANYGAADTBgAA2gYAANkGAADWBgAA1wYAAJ4GAACgBgAA3AYAANsGAADYBgAA1wYAAKEGAADVBgAA2AYAANkGAADcBgAAnwYAAKMGAADfBgAA3wYAAN0GAADaBgAA3AYAANkGAADaBgAA3QYAANwGAADaBgAA3AYAAN4GAADbBgAA3gYAAM0GAADbBgAA4AYAAM0GAADeBgAA3gYAAN8GAADgBgAA3gYAAN0GAADfBgAA3AYAAN0GAADeBgAAzQYAAOAGAACLBgAA4AYAAN8GAACmBgAApgYAAN8GAACjBgAALgUAALUGAAAkBQAAtQYAAC4FAADhBgAALgUAAOIGAADhBgAAtQYAAOEGAAC2BgAA4gYAADIFAADhBgAAMgUAAOMGAADhBgAA4QYAAOQGAAC2BgAA4QYAAOMGAADkBgAAvAYAAOQGAADjBgAAtgYAAOQGAAC5BgAA5gYAAOgGAADnBgAA5QYAAOYGAADnBgAA6QYAAOUGAADnBgAA5wYAAOoGAADpBgAA6wYAAPwEAAD7BAAA7gYAAO0GAADsBgAA7AYAAAAFAADuBgAA7AYAAO0GAAD+BAAA/gQAAO0GAADvBgAA7gYAAAAFAADvBgAA7wYAAO0GAADuBgAA/gQAAO8GAAAABQAA8AYAAM4GAAAdBQAA5QYAACwFAADmBgAA5QYAAPAGAAAsBQAA8AYAAB0FAAAsBQAA8QYAAOYGAAAsBQAA8QYAAOgGAADmBgAA8gYAAOcGAADoBgAA8gYAAOgGAADzBgAA8wYAAOgGAADxBgAAzgYAAPAGAAD0BgAA8QYAAPUGAAD2BgAA8wYAAPEGAAD2BgAA9wYAACoFAAD0BgAAKwUAAPgGAAD1BgAAKgUAAPcGAAAtBQAALQUAAPcGAAD+BgAALQUAAP4GAAAABwAA5QYAAPkGAADwBgAA5QYAAOkGAAD5BgAA8AYAAPoGAAD0BgAA+gYAAPAGAAD5BgAA/QYAAPYGAAD1BgAA9AYAAPoGAAD3BgAA9QYAAPsGAAD9BgAA9QYAAPgGAAD7BgAA+AYAACsFAAD7BgAA9wYAAPoGAAD+BgAA6QYAAAEHAAD5BgAA/AYAAOkGAADqBgAAAQcAAP8GAAD5BgAA+QYAAP8GAAD6BgAA+gYAAP8GAAD+BgAA/AYAAAEHAADpBgAAEgcAAAEHAAD8BgAA/wYAAAEHAAACBwAA/wYAAAIHAAAABwAA/wYAAAAHAAD+BgAAEgcAAAIHAAABBwAAPQUAAD4FAAAEBwAABwcAAAQHAAA/BQAAPwUAAAQHAAA+BQAAUQUAAAcHAAA/BQAAFgcAAAcHAAADBwAAAwcAAAcHAABRBQAAAwcAAFEFAAAFBwAACgcAAOoGAADnBgAAFgcAAAsHAAAHBwAAFgcAAAYHAAALBwAA8wYAAAQHAADyBgAA8wYAAD0FAAAEBwAA8wYAAPYGAABSBQAAUgUAAPYGAAAMBwAAUgUAAAwHAABTBQAAKwUAAAkHAAAIBwAAXAUAAFUFAAAuBwAAVAUAAC0FAAAABwAAVAUAAAAHAAAOBwAAVAUAAA4HAABVBQAA5wYAAPIGAAAKBwAABAcAAAoHAADyBgAABAcAAAcHAAAKBwAABwcAAAsHAAAKBwAADAcAAPYGAAD9BgAADAcAAA0HAABTBQAA/QYAAAgHAAAMBwAA/QYAAPsGAAAIBwAA+wYAACsFAAAIBwAACQcAAAwHAAAIBwAADQcAAAwHAAAJBwAAUwUAAA0HAAAJBwAAVQUAAA4HAAARBwAAEAcAAC4HAAARBwAAEQcAAC4HAABVBQAACgcAAPwGAADqBgAACwcAAPwGAAAKBwAADwcAAPwGAAALBwAADwcAAAsHAAAQBwAAEAcAABEHAAAPBwAA/AYAAA8HAAASBwAADwcAABQHAAASBwAAFAcAAA8HAAARBwAADgcAAAAHAAATBwAADgcAABMHAAAUBwAAFAcAABEHAAAOBwAAFQcAAAIHAAASBwAAEgcAABQHAAAVBwAAEwcAAAAHAAACBwAAFQcAABMHAAACBwAAFAcAABMHAAAVBwAABQcAABYHAAADBwAAFwcAABoHAAAYBwAAcAEAAHQBAAAXBwAAFwcAAHQBAAAaBwAAHAcAABgHAAAaBwAAHQcAABkHAAAbBwAAGwcAABkHAAAYBwAAHgcAABwHAAAaBwAAGgcAAHQBAAB3AQAAHgcAABoHAAB3AQAAHwcAACEHAAAbBwAAHwcAABsHAAAYBwAAHwcAABgHAAAcBwAAHwcAABwHAAAgBwAAGwcAACEHAAAdBwAAHAcAAB4HAAAgBwAAIAcAAB4HAAAiBwAAJAcAACMHAAAfBwAAHwcAACMHAAAhBwAAJAcAAB8HAAAgBwAAJAcAACAHAAAlBwAAJQcAACAHAAAmBwAAIQcAACMHAABCBwAAIAcAACIHAAAnBwAAJwcAACYHAAAgBwAAIwcAACQHAAAoBwAAKAcAACQHAAAlBwAAKAcAACUHAAAmBwAAKQcAACgHAAAmBwAAIwcAACsHAABCBwAAJgcAACcHAAApBwAAKQcAACcHAAAqBwAAIwcAACgHAAAsBwAAKQcAAH0BAAB4AQAAKQcAAHgBAAAoBwAAKAcAAHgBAAAsBwAAIwcAACwHAAArBwAAfQEAACoHAAB5AQAAKQcAACoHAAB9AQAAewEAACwHAAB4AQAALAcAAC0HAAArBwAALQcAACwHAAB7AQAABQcAAFwFAAAQBwAAXAUAAC4HAAAQBwAAFgcAAAUHAAAGBwAABgcAAAUHAAAQBwAABgcAABAHAAALBwAAMAcAAJcBAAAvBwAAnAEAAJcBAAAwBwAAFwcAADAHAAAvBwAAMQcAADAHAAAyBwAAMAcAADEHAACcAQAAMAcAABgHAAAZBwAANAcAADAHAAAZBwAAGAcAADAHAAAXBwAAMgcAADAHAAA0BwAAogEAAKEBAAB1AQAAMwcAAKEBAACiAQAAOgcAADEHAAAyBwAAogEAAKMBAAAzBwAAMQcAADoHAABBBwAAMQcAAEEHAACcAQAANAcAABkHAAAdBwAAoQEAADsHAAAeBwAAoQEAAB4HAAB3AQAANQcAADQHAAAdBwAAoQEAADMHAAA7BwAAOwcAADMHAACkAQAANwcAADQHAAA1BwAANgcAADcHAAA1BwAAMgcAADQHAAA3BwAAMgcAADcHAAA5BwAAOQcAADcHAAA4BwAAOQcAADoHAAAyBwAAowEAAKQBAAAzBwAAnAEAAEEHAACnAQAAIQcAADwHAAAdBwAAIgcAAB4HAAA7BwAAHQcAADwHAAA1BwAAOwcAAKQBAAClAQAANQcAADwHAAA2BwAAPgcAAD0HAAA4BwAAOQcAADgHAAA9BwAAPgcAADoHAAA9BwAAOQcAAD0HAAA6BwAAPwcAADcHAAA2BwAANwcAAD8HAAA4BwAAOAcAAD8HAAA+BwAAPgcAAD8HAABABwAAOgcAAD4HAABABwAAOgcAAEAHAABBBwAAIQcAAEIHAAA8BwAAOwcAAKUBAAAnBwAAIgcAADsHAAAnBwAAQgcAAEYHAAA8BwAAQwcAADYHAABGBwAARgcAADYHAAA8BwAANgcAAEMHAAA/BwAAQwcAAEAHAAA/BwAAQwcAAEUHAABABwAAQQcAAEQHAABJBwAAQQcAAEAHAABEBwAASQcAAKsBAABBBwAAQQcAAKsBAACnAQAAQgcAACsHAABHBwAARgcAAEIHAABHBwAARgcAAEcHAABDBwAARwcAAFAHAABDBwAASgcAAEQHAABMBwAASgcAAEgHAABEBwAASQcAAEQHAABIBwAATAcAAEkHAABKBwAATAcAAKsBAABJBwAASwcAAFgHAABFBwAASwcAAEUHAABQBwAAUAcAAEUHAABDBwAATAcAAEQHAABLBwAARAcAAFgHAABLBwAAqwEAAEwHAACuAQAAKwcAAE0HAABHBwAATgcAAEcHAABNBwAASQcAAEgHAABPBwAATwcAAEgHAABOBwAARwcAAE4HAABQBwAATgcAAEoHAABQBwAATgcAAEgHAABKBwAAUAcAAEoHAABRBwAASQcAAE8HAABKBwAAUQcAAEoHAABPBwAAUAcAAEwHAABLBwAAUAcAAFkHAABMBwAAUAcAAFEHAABZBwAAtgEAAFIHAABZBwAAtgEAALUBAABSBwAAWQcAAFIHAABMBwAAsgEAAK4BAABSBwAATAcAAFIHAACuAQAAKwcAAC0HAABNBwAATgcAAFMHAABPBwAATgcAAE0HAABTBwAAUwcAAFQHAABRBwAATwcAAFMHAABRBwAAVQcAALIBAABTBwAAVQcAAMABAACyAQAAUgcAAFQHAACyAQAAUwcAALIBAABUBwAAUQcAAFQHAABZBwAAVAcAALUBAABZBwAAVAcAAFIHAAC1AQAAWQcAALUBAABWBwAAwAEAAFUHAAC1AQAAVgcAALUBAABVBwAALQcAAFcHAABNBwAATQcAAFcHAABTBwAAxAEAAFUHAABXBwAAVwcAAFUHAABTBwAAVQcAAMQBAABWBwAALQcAAMoBAABXBwAAygEAAMQBAABXBwAAQAcAAEUHAABYBwAARAcAAEAHAABYBwAAWQcAAFoHAAC2AQAAWQcAAFYHAABaBwAAVgcAAMQBAABaBwAAWwcAAFwHAABeBwAAXAcAAGAHAABdBwAAXAcAAF0HAABeBwAAWwcAAF4HAABjBwAAXAcAAFsHAABfBwAAXAcAAF8HAABgBwAAXQcAAGEHAABeBwAAXQcAAGIHAABhBwAA7AEAAGIHAABgBwAAYAcAAGIHAABdBwAAZAcAAGAHAABhBwAAYQcAAGAHAABeBwAAXwcAAGMHAABgBwAAXgcAAGAHAABjBwAAYgcAAGUHAABhBwAAYQcAAGUHAABkBwAA7AEAAGAHAADwAQAAYgcAAO4BAABlBwAAZQcAAO4BAADzAQAAZQcAAPMBAADwAQAAWwcAAGMHAABfBwAAZAcAAGUHAABmBwAAYAcAAGQHAABmBwAA8AEAAGAHAABmBwAA8AEAAGYHAABlBwAA"}}],V5={type:H5,version:W5,spatialEntities:Y5},j5={metaQuest3:W1,metaQuest2:G1,metaQuestPro:H1,oculusQuest1:z1},K5=["left","none","right"];function tC(n){var A,r;const e=typeof n=="string"?n:n.type??"metaQuest3",t=new L1(j5[e],typeof n=="string"?void 0:n);typeof n!="string"&&(ym(t,n.headset),W0(t.hands,n.hand),W0(t.controllers,n.controller),t.primaryInputMode=n.primaryInputMode??"controller"),t.ipd=typeof n=="string"?0:n.ipd??0,t.installRuntime(),t.installDevUI(g5);const i=typeof n=="string"?!0:n.syntheticEnvironment;return i===!1||(t.installSEM(G5),i===null)?t:i===!0||i===void 0?((A=t.sem)==null||A.loadEnvironment(V5),t):typeof i=="object"?((r=t.sem)==null||r.loadEnvironment(i),t):(fetch(i).then(s=>s.json()).then(s=>{var a;return(a=t.sem)==null?void 0:a.loadEnvironment(s)}).catch(console.error),t)}const H0=new Ct,q5=new gt;function W0(n,e){if(e!=null)for(const t of K5)ym(n[t],e[t])}function ym(n,e){n==null||e==null||(Y0(n.position,e.position),Y0(H0,e.rotation),V0(n.quaternion,q5.setFromEuler(H0)),V0(n.quaternion,e.quaternion))}function Y0(n,e){if(e!=null){if(e instanceof Ct&&n instanceof Ct&&n.copy(e),Array.isArray(e)){n.x=e[0],n.y=e[1],n.z=e[2];return}n.x=e.x,n.y=e.y,n.z=e.z}}function V0(n,e){if(e!=null){if(Array.isArray(e)){n.x=e[0],n.y=e[1],n.z=e[2],n.w=e[3];return}n.x=e.x,n.y=e.y,n.z=e.z,n.w=e.w}}export{tC as emulate};
//# sourceMappingURL=emulate-Dt1nC3m1.js.map
