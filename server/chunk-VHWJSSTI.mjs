import './polyfills.server.mjs';
import{c as x}from"./chunk-DXBVAR5Q.mjs";import{c as I,g as P,h as D,j as M,k as E,n as N}from"./chunk-F5SP6GD2.mjs";import{$ as h,Ma as f,Na as y,Oa as v,P as p,Qa as C,Ra as A,Rb as w,U as m,Vb as F,fb as R,ga as c,ka as u,pa as g,vb as b}from"./chunk-6ELY2DPB.mjs";var S=(()=>{let e=class e{constructor(){this.title="test"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(o,n){o&1&&R(0,"router-outlet")},dependencies:[E]});let i=e;return i})();var O=[{path:"emp",loadChildren:()=>import("./chunk-QPVAB7KQ.mjs").then(i=>i.EmpRoutingModule)}];var B="@",V=(()=>{let e=class e{constructor(r,o,n,s,a){this.doc=r,this.delegate=o,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=u(y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-KTLBS54J.mjs")).catch(o=>{throw new p(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,o){let n=this.delegate.createRenderer(r,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new l(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let k=a.createRenderer(r,o);s.use(k)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){f()},e.\u0275prov=h({token:e,factory:e.\u0275fac});let i=e;return i})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(B)}};function d(i="animations"){return C("NgAsyncAnimations"),g([{provide:v,useFactory:(e,t,r)=>new V(e,t,r,i),deps:[F,P,A]},{provide:c,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var T={providers:[N(O),M(),d(),d(),I()]};var z={providers:[x()]},_=w(T,z);var H=()=>D(S,_),ge=H;export{ge as a};
