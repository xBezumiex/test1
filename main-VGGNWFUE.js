import{$ as Pe,$a as Dt,$b as Tc,A as vr,Aa as In,Ab as m,B as Xe,Ba as Ci,Bb as Q,C as sc,Ca as ja,Cb as x,D as ka,Da as yr,Db as A,E as Mn,Ea as an,Eb as ae,F as Pt,Fa as On,Fb as Ze,G as Pa,Ga as _c,Gb as lt,H as Na,Ha as vc,Hb as H,I as lc,Ia as bc,Ib as Ic,J as La,Ja as yc,Jb as S,K as br,Ka as Cc,Kb as Me,L as st,La as wc,Lb as te,M as oe,Ma as xc,Mb as Pn,N as ze,Na as He,Nb as Ut,O as ve,Oa as ft,Ob as se,P,Pa as Dc,Pb as le,Q as nn,Qa as g,Qb as Oc,R as Nt,Ra as Fn,Rb as Fc,S as p,Sa as Ec,Sb as Wa,T as j,Ta as Cr,Tb as xi,U as cc,Ua as wi,Ub as Y,V as b,Va as pt,Vb as zt,W as E,Wa as Tn,Wb as f,X as l,Xa as De,Xb as $,Y as rn,Ya as _e,Yb as Nn,Z as dc,Za as J,Zb as Oe,_ as ge,_a as wr,_b as Ln,a as _,aa as be,ab as Ua,ac as kc,b as G,ba as ye,bb as Sc,bc as Pc,ca as Lt,cb as xr,cc as Nc,d as Re,da as Vt,db as w,dc as Lc,e as oc,ea as ne,eb as U,ec as Z,f as Be,fa as T,fb as O,fc as he,g as R,ga as Bt,gb as Mc,gc as Vc,h as je,ha as uc,hb as Ne,hc as Sr,i as Ue,ia as re,ib as Dr,ic as Vn,j as we,ja as L,jb as Ac,jc as Ht,k as y,ka as on,kb as za,kc as Di,l as wn,la as An,lb as jt,lc as Bc,m as gr,ma as hc,mb as kn,mc as Fe,n as ac,na as M,nb as Rc,nc as jc,o as I,oa as mc,ob as Ha,oc as ie,p as vi,pa as fc,pb as $a,pc as qa,q as ht,qa as xt,qb as Et,qc as Uc,r as bi,ra as Ie,rb as xe,rc as Mr,s as _r,sa as mt,sb as V,sc as zc,t as xn,ta as Va,tb as B,u as Dn,ua as q,ub as Ga,v as En,va as Ba,vb as Er,w as ue,wa as pc,wb as Ee,x as Ta,xa as yi,xb as Se,y as Sn,ya as gc,yb as z,z as tn,za as Rn,zb as h}from"./chunk-FCUKDZOG.js";var Hc=null;function Ke(){return Hc}function Ya(i){Hc??=i}var Ei=class{},St=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>l($c),providedIn:"platform"})}return i})(),Xa=new b(""),$c=(()=>{class i extends St{_location;_history;_doc=l(T);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ke().getBaseHref(this._doc)}onPopState(e){let t=Ke().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Ke().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function Ar(i,n){return i?n?i.endsWith("/")?n.startsWith("/")?i+n.slice(1):i+n:n.startsWith("/")?i+n:`${i}/${n}`:i:n}function Gc(i){let n=i.search(/#|\?|$/);return i[n-1]==="/"?i.slice(0,n-1)+i.slice(n):i}function ct(i){return i&&i[0]!=="?"?`?${i}`:i}var Qe=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>l(Ir),providedIn:"root"})}return i})(),Rr=new b(""),Ir=(()=>{class i extends Qe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(T).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ar(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+ct(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+ct(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+ct(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(E(St),E(Rr,8))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var gt=(()=>{class i{_subject=new R;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Lm(Gc(Wc(t))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+ct(t))}normalize(e){return i.stripTrailingSlash(Nm(this._basePath,Wc(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ct(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ct(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t??void 0,complete:r??void 0})}static normalizeQueryParams=ct;static joinWithSlash=Ar;static stripTrailingSlash=Gc;static \u0275fac=function(t){return new(t||i)(E(Qe))};static \u0275prov=p({token:i,factory:()=>Pm(),providedIn:"root"})}return i})();function Pm(){return new gt(E(Qe))}function Nm(i,n){if(!i||!n.startsWith(i))return n;let e=n.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Wc(i){return i.replace(/\/index.html$/,"")}function Lm(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var Or=(()=>{class i extends Qe{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=Ar(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,r,o){let a=this.prepareExternalUrl(r+ct(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,a)}replaceState(e,t,r,o){let a=this.prepareExternalUrl(r+ct(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(E(St),E(Rr,8))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})();var Qa=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(ne);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,r):!1,get:(e,t,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,r)}})}static \u0275fac=function(t){return new(t||i)(J(Dt))};static \u0275dir=O({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ie]})}return i})();function Bm(i,n){return new P(2100,!1)}var Za=class{createSubscription(n,e,t){return Z(()=>n.subscribe({next:e,error:t}))}dispose(n){Z(()=>n.unsubscribe())}},Ka=class{createSubscription(n,e,t){return n.then(r=>e?.(r),r=>t?.(r)),{unsubscribe:()=>{e=null,t=null}}}dispose(n){n.unsubscribe()}},jm=new Ka,Um=new Za,Ja=(()=>{class i{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=l(An);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(kn(e))return jm;if(Rc(e))return Um;throw Bm(i,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||i)(J(Fe,16))};static \u0275pipe=Mc({name:"async",type:i,pure:!1})}return i})();function Si(i,n){n=encodeURIComponent(n);for(let e of i.split(";")){let t=e.indexOf("="),[r,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var sn=class{};var ts="browser";function Yc(i){return i===ts}var ns=(()=>{class i{static \u0275prov=p({token:i,providedIn:"root",factory:()=>new es(l(T),window)})}return i})(),es=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(G(_({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let t=Gm(this.document,n);t&&(this.scrollToElement(t,e),t.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch{console.warn(nn(2400,!1))}}scrollToElement(n,e){let t=n.getBoundingClientRect(),r=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(G(_({},e),{left:r-a[0],top:o-a[1]}))}};function Gm(i,n){let e=i.getElementById(n)||i.getElementsByName(n)[0];if(e)return e;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let t=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),r=t.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(a)return a}r=t.nextNode()}}return null}var Mi=class{_doc;constructor(n){this._doc=n}manager},Fr=(()=>{class i extends Mi{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,r,o){return e.addEventListener(t,r,o),()=>this.removeEventListener(e,t,r,o)}removeEventListener(e,t,r,o){return e.removeEventListener(t,r,o)}static \u0275fac=function(t){return new(t||i)(E(T))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),Pr=new b(""),as=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Fr));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Fr);o&&this._plugins.push(o)}addEventListener(e,t,r,o){return this._findPluginFor(t).addEventListener(e,t,r,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new P(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(E(Pr),E(L))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),is="ng-app-id";function Xc(i){for(let n of i)n.remove()}function Zc(i,n){let e=n.createElement("style");return e.textContent=i,e}function qm(i,n,e,t){let r=i.head?.querySelectorAll(`style[${is}="${n}"],link[${is}="${n}"]`);if(r)for(let o of r)o.removeAttribute(is),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function os(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var ss=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,r,o={}){this.doc=e,this.appId=t,this.nonce=r,qm(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let r of e)this.addUsage(r,this.inline,Zc);t?.forEach(r=>this.addUsage(r,this.external,os))}removeStyles(e,t){for(let r of e)this.removeUsage(r,this.inline);t?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,t,r){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,t){let r=t.get(e);r&&(r.usage--,r.usage<=0&&(Xc(r.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Xc(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:r}]of this.inline)r.push(this.addElement(e,Zc(t,this.doc)));for(let[t,{elements:r}]of this.external)r.push(this.addElement(e,os(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(E(T),E(yi),E(Ci,8),E(Rn))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),rs={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ls=/%COMP%/g;var Qc="%COMP%",Ym=`_nghost-${Qc}`,Xm=`_ngcontent-${Qc}`,Zm=!0,Km=new b("",{factory:()=>Zm});function Qm(i){return Xm.replace(ls,i)}function Jm(i){return Ym.replace(ls,i)}function Jc(i,n){return n.map(e=>e.replace(ls,i))}var Ii=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Ai(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,t);return r instanceof kr?r.applyToHost(e):r instanceof Ri&&r.applyStyles(),r}getOrCreateRenderer(e,t){let r=this.rendererByCompId,o=r.get(t.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,v=this.tracingService;switch(t.encapsulation){case yr.Emulated:o=new kr(c,d,t,this.appId,u,a,s,v);break;case yr.ShadowDom:return new Tr(c,e,t,a,s,this.nonce,v,d);case yr.ExperimentalIsolatedShadowDom:return new Tr(c,e,t,a,s,this.nonce,v);default:o=new Ri(c,d,t,u,a,s,v);break}r.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(E(as),E(ss),E(yi),E(Km),E(T),E(L),E(Ci),E(Cr,8))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),Ai=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,r){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(rs[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Kc(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(Kc(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new P(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,r){if(r){e=r+":"+e;let o=rs[r];o?n.setAttributeNS(o,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let r=rs[t];r?n.removeAttributeNS(r,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,r){r&(Fn.DashCase|Fn.Important)?n.style.setProperty(e,t,r&Fn.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&Fn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,r){if(typeof n=="string"&&(n=Ke().getGlobalEventTarget(this.doc,n),!n))throw new P(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Kc(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var Tr=class extends Ai{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=Jc(t.id,d);for(let v of d){let D=document.createElement("style");a&&D.setAttribute("nonce",a),D.textContent=v,this.shadowRoot.appendChild(D)}let u=t.getExternalStyles?.();if(u)for(let v of u){let D=os(v,r);a&&D.setAttribute("nonce",a),this.shadowRoot.appendChild(D)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ri=class extends Ai{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=t.styles;this.styles=c?Jc(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ec.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},kr=class extends Ri{contentAttr;hostAttr;constructor(n,e,t,r,o,a,s,c){let d=r+"-"+t.id;super(n,e,t,o,a,s,c,d),this.contentAttr=Qm(d),this.hostAttr=Jm(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var Nr=class i extends Ei{supportsDOMEvents=!0;static makeCurrent(){Ya(new i)}onAndCancel(n,e,t,r){return n.addEventListener(e,t,r),()=>{n.removeEventListener(e,t,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=tf();return e==null?null:nf(e)}resetBaseElement(){Oi=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Si(document.cookie,n)}},Oi=null;function tf(){return Oi=Oi||document.head.querySelector("base"),Oi?Oi.getAttribute("href"):null}function nf(i){return new URL(i,document.baseURI).pathname}var rf=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),ed=["alt","control","meta","shift"],of={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},af={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},td=(()=>{class i extends Mi{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,r,o){let a=i.parseEventName(t),s=i.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ke().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let t=e.toLowerCase().split("."),r=t.shift();if(t.length===0||!(r==="keydown"||r==="keyup"))return null;let o=i._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),ed.forEach(d=>{let u=t.indexOf(d);u>-1&&(t.splice(u,1),a+=d+".")}),a+=o,t.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,t){let r=of[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ed.forEach(a=>{if(a!==r){let s=af[a];s(e)&&(o+=a+".")}}),o+=r,o===t)}static eventCallback(e,t,r){return o=>{i.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(E(T))};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})();async function cs(i,n,e){let t=_({rootComponent:i},sf(n,e));return jc(t)}function sf(i,n){return{platformRef:n?.platformRef,appProviders:[...hf,...i?.providers??[]],platformProviders:uf}}function lf(){Nr.makeCurrent()}function cf(){return new on}function df(){return pc(document),document}var uf=[{provide:Rn,useValue:ts},{provide:gc,useValue:lf,multi:!0},{provide:T,useFactory:df}];var hf=[{provide:dc,useValue:"root"},{provide:on,useFactory:cf},{provide:Pr,useClass:Fr,multi:!0},{provide:Pr,useClass:td,multi:!0},Ii,ss,as,{provide:De,useExisting:Ii},{provide:sn,useClass:rf},[]];var vt=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let r=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...t),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,t),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Br=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},jr=class{encodeKey(n){return nd(n)}encodeValue(n){return nd(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function mf(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var ff=/%(\d[a-f0-9])/gi,pf={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function nd(i){return encodeURIComponent(i).replace(ff,(n,e)=>pf[e]??n)}function Lr(i){return`${i}`}var Mt=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new jr,n.fromString){if(n.fromObject)throw new P(2805,!1);this.map=mf(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],r=Array.isArray(t)?t.map(Lr):[Lr(t)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let r=n[t];Array.isArray(r)?r.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Lr(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],r=t.indexOf(Lr(n.value));r!==-1&&t.splice(r,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function gf(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function id(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function rd(i){return typeof Blob<"u"&&i instanceof Blob}function od(i){return typeof FormData<"u"&&i instanceof FormData}function _f(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Fi="Content-Type",Ur="Accept",ad="text/plain",sd="application/json",ld=`${sd}, ${ad}, */*`,Bn=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,r){this.url=e,this.method=n.toUpperCase();let o;if(gf(this.method)||r?(this.body=t!==void 0?t:null,o=r):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new P(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new vt,this.context??=new Br,!this.params)this.params=new Mt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||id(this.body)||rd(this.body)||od(this.body)||_f(this.body)?this.body:this.body instanceof Mt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||od(this.body)?null:rd(this.body)?this.body.type||null:id(this.body)?null:typeof this.body=="string"?ad:this.body instanceof Mt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?sd:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,d=n.redirect||this.redirect,u=n.credentials||this.credentials,v=n.referrer||this.referrer,D=n.integrity||this.integrity,K=n.referrerPolicy||this.referrerPolicy,W=n.transferCache??this.transferCache,F=n.timeout??this.timeout,N=n.body!==void 0?n.body:this.body,X=n.withCredentials??this.withCredentials,de=n.reportProgress??this.reportProgress,Ae=n.headers||this.headers,fe=n.params||this.params,Tt=n.context??this.context;return n.setHeaders!==void 0&&(Ae=Object.keys(n.setHeaders).reduce((kt,wt)=>kt.set(wt,n.setHeaders[wt]),Ae)),n.setParams&&(fe=Object.keys(n.setParams).reduce((kt,wt)=>kt.set(wt,n.setParams[wt]),fe)),new i(e,t,N,{params:fe,headers:Ae,context:Tt,reportProgress:de,responseType:r,withCredentials:X,transferCache:W,keepalive:o,cache:s,priority:a,timeout:F,mode:c,redirect:d,credentials:u,referrer:v,integrity:D,referrerPolicy:K})}},At=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(At||{}),jn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new vt,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Ti=class i extends jn{constructor(n={}){super(n)}type=At.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Un=class i extends jn{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=At.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},_t=class extends jn{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},cd=200,vf=204;var bf=/^\)\]\}',?\n/,dd=new b(""),Vr=(()=>{class i{fetchImpl=l(us,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=l(L);destroyRef=l(Bt);handle(e){return new Be(t=>{let r=new AbortController;this.doRequest(e,r.signal,t).then(hs,a=>t.error(new _t({error:a})));let o;return e.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{o!==void 0&&clearTimeout(o),r.abort()}})}async doRequest(e,t,r){let o=this.createRequestInit(e),a;try{let F=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,_({signal:t},o)));yf(F),r.next({type:At.Sent}),a=await F}catch(F){r.error(new _t({error:F,status:F.status??0,statusText:F.statusText,url:e.urlWithParams,headers:F.headers}));return}let s=new vt(a.headers),c=a.statusText,d=a.url||e.urlWithParams,u=a.status,v=null;if(e.reportProgress&&r.next(new Ti({headers:s,status:u,statusText:c,url:d})),a.body){let F=a.headers.get("content-length"),N=[],X=a.body.getReader(),de=0,Ae,fe,Tt=typeof Zone<"u"&&Zone.current,kt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await X.cancel(),kt=!0;break}let{done:_i,value:Fa}=await X.read();if(_i)break;if(N.push(Fa),de+=Fa.length,e.reportProgress){fe=e.responseType==="text"?(fe??"")+(Ae??=new TextDecoder).decode(Fa,{stream:!0}):void 0;let rc=()=>r.next({type:At.DownloadProgress,total:F?+F:void 0,loaded:de,partialText:fe});Tt?Tt.run(rc):rc()}}}),kt){r.complete();return}let wt=this.concatChunks(N,de);try{let _i=a.headers.get(Fi)??"";v=this.parseBody(e,wt,_i,u)}catch(_i){r.error(new _t({error:_i,headers:new vt(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}u===0&&(u=v?cd:0);let D=u>=200&&u<300,K=a.redirected,W=a.type;D?(r.next(new Un({body:v,headers:s,status:u,statusText:c,url:d,redirected:K,responseType:W})),r.complete()):r.error(new _t({error:v,headers:s,status:u,statusText:c,url:d,redirected:K,responseType:W}))}parseBody(e,t,r,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(t).replace(bf,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return new TextDecoder().decode(t);case"blob":return new Blob([t],{type:r});case"arraybuffer":return t.buffer}}createRequestInit(e){let t={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,a)=>t[o]=a.join(",")),e.headers.has(Ur)||(t[Ur]=ld),!e.headers.has(Fi)){let o=e.detectContentTypeHeader();o!==null&&(t[Fi]=o)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let r=new Uint8Array(t),o=0;for(let a of e)r.set(a,o),o+=a.length;return r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),us=class{};function hs(){}function yf(i){i.then(hs,hs)}var Cf=/^\)\]\}',?\n/;var ms=(()=>{class i{xhrFactory;tracingService=l(Cr,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new P(-2800,!1);let t=this.xhrFactory;return y(null).pipe(oe(()=>new Be(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((N,X)=>a.setRequestHeader(N,X.join(","))),e.headers.has(Ur)||a.setRequestHeader(Ur,ld),!e.headers.has(Fi)){let N=e.detectContentTypeHeader();N!==null&&a.setRequestHeader(Fi,N)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let N=e.responseType.toLowerCase();a.responseType=N!=="json"?N:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let N=a.statusText||"OK",X=new vt(a.getAllResponseHeaders()),de=a.responseURL||e.url;return c=new Ti({headers:X,status:a.status,statusText:N,url:de}),c},u=this.maybePropagateTrace(()=>{let{headers:N,status:X,statusText:de,url:Ae}=d(),fe=null;X!==vf&&(fe=typeof a.response>"u"?a.responseText:a.response),X===0&&(X=fe?cd:0);let Tt=X>=200&&X<300;if(e.responseType==="json"&&typeof fe=="string"){let kt=fe;fe=fe.replace(Cf,"");try{fe=fe!==""?JSON.parse(fe):null}catch(wt){fe=kt,Tt&&(Tt=!1,fe={error:wt,text:fe})}}Tt?(o.next(new Un({body:fe,headers:N,status:X,statusText:de,url:Ae||void 0})),o.complete()):o.error(new _t({error:fe,headers:N,status:X,statusText:de,url:Ae||void 0}))}),v=this.maybePropagateTrace(N=>{let{url:X}=d(),de=new _t({error:N,status:a.status||0,statusText:a.statusText||"Unknown Error",url:X||void 0});o.error(de)}),D=v;e.timeout&&(D=this.maybePropagateTrace(N=>{let{url:X}=d(),de=new _t({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:X||void 0});o.error(de)}));let K=!1,W=this.maybePropagateTrace(N=>{K||(o.next(d()),K=!0);let X={type:At.DownloadProgress,loaded:N.loaded};N.lengthComputable&&(X.total=N.total),e.responseType==="text"&&a.responseText&&(X.partialText=a.responseText),o.next(X)}),F=this.maybePropagateTrace(N=>{let X={type:At.UploadProgress,loaded:N.loaded};N.lengthComputable&&(X.total=N.total),o.next(X)});return a.addEventListener("load",u),a.addEventListener("error",v),a.addEventListener("timeout",D),a.addEventListener("abort",v),e.reportProgress&&(a.addEventListener("progress",W),s!==null&&a.upload&&a.upload.addEventListener("progress",F)),a.send(s),o.next({type:At.Sent}),()=>{a.removeEventListener("error",v),a.removeEventListener("abort",v),a.removeEventListener("load",u),a.removeEventListener("timeout",D),e.reportProgress&&(a.removeEventListener("progress",W),s!==null&&a.upload&&a.upload.removeEventListener("progress",F)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||i)(E(sn))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function wf(i,n){return n(i)}function xf(i,n,e){return(t,r)=>Pe(e,()=>n(t,o=>i(o,r)))}var ud=new b("",{factory:()=>[]}),hd=new b(""),md=new b("",{factory:()=>!0});var Hr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(ms),r},providedIn:"root"})}return i})();var zr=(()=>{class i{backend;injector;chain=null;pendingTasks=l(fc);contributeToStability=l(md);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(ud),...this.injector.get(hd,[])]));this.chain=t.reduceRight((r,o)=>xf(r,o,this.injector),wf)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Mn(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||i)(E(Hr),E(ge))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),fs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(zr),r},providedIn:"root"})}return i})();function ds(i,n){return{body:n,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var bt=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,r={}){let o;if(e instanceof Bn)o=e;else{let c;r.headers instanceof vt?c=r.headers:c=new vt(r.headers);let d;r.params&&(r.params instanceof Mt?d=r.params:d=new Mt({fromObject:r.params})),o=new Bn(e,t,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=y(o).pipe(tn(c=>this.handler.handle(c)));if(e instanceof Bn||r.observe==="events")return a;let s=a.pipe(ue(c=>c instanceof Un));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(I(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new P(2806,!1);return c.body}));case"blob":return s.pipe(I(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new P(2807,!1);return c.body}));case"text":return s.pipe(I(c=>{if(c.body!==null&&typeof c.body!="string")throw new P(2808,!1);return c.body}));default:return s.pipe(I(c=>c.body))}case"response":return s;default:throw new P(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Mt().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,r={}){return this.request("PATCH",e,ds(r,t))}post(e,t,r={}){return this.request("POST",e,ds(r,t))}put(e,t,r={}){return this.request("PUT",e,ds(r,t))}static \u0275fac=function(t){return new(t||i)(E(fs))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Df=new b("",{factory:()=>!0}),Ef="XSRF-TOKEN",Sf=new b("",{factory:()=>Ef}),Mf="X-XSRF-TOKEN",Af=new b("",{factory:()=>Mf}),Rf=(()=>{class i{cookieName=l(Sf);doc=l(T);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Si(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),fd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(Rf),r},providedIn:"root"})}return i})();function If(i,n){if(!l(Df)||i.method==="GET"||i.method==="HEAD")return n(i);try{let r=l(St).href,{origin:o}=new URL(r),{origin:a}=new URL(i.url,o);if(o!==a)return n(i)}catch{return n(i)}let e=l(fd).getToken(),t=l(Af);return e!=null&&!i.headers.has(t)&&(i=i.clone({headers:i.headers.set(t,e)})),n(i)}var ps=(function(i){return i[i.Interceptors=0]="Interceptors",i[i.LegacyInterceptors=1]="LegacyInterceptors",i[i.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",i[i.NoXsrfProtection=3]="NoXsrfProtection",i[i.JsonpSupport=4]="JsonpSupport",i[i.RequestsMadeViaParent=5]="RequestsMadeViaParent",i[i.Fetch=6]="Fetch",i})(ps||{});function Of(i,n){return{\u0275kind:i,\u0275providers:n}}function gs(...i){let n=[bt,zr,{provide:fs,useExisting:zr},{provide:Hr,useFactory:()=>l(dd,{optional:!0})??l(ms)},{provide:ud,useValue:If,multi:!0}];for(let e of i)n.push(...e.\u0275providers);return rn(n)}function _s(){return Of(ps.Fetch,[Vr,{provide:dd,useExisting:Vr},{provide:Hr,useExisting:Vr}])}var $t=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||i)(E(T))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:function(t){let r=null;return t?r=new(t||i):r=E(kf),r},providedIn:"root"})}return i})(),kf=(()=>{class i extends vs{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case He.NONE:return t;case He.HTML:return On(t,"HTML")?an(t):xc(this._doc,String(t)).toString();case He.STYLE:return On(t,"Style")?an(t):t;case He.SCRIPT:if(On(t,"Script"))return an(t);throw new P(5200,!1);case He.URL:return On(t,"URL")?an(t):wc(String(t));case He.RESOURCE_URL:if(On(t,"ResourceURL"))return an(t);throw new P(5201,!1);default:throw new P(5202,!1)}}bypassSecurityTrustHtml(e){return _c(e)}bypassSecurityTrustStyle(e){return vc(e)}bypassSecurityTrustScript(e){return bc(e)}bypassSecurityTrustUrl(e){return yc(e)}bypassSecurityTrustResourceUrl(e){return Cc(e)}static \u0275fac=function(t){return new(t||i)(E(T))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var k="primary",Wi=Symbol("RouteTitle"),xs=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function cn(i){return new xs(i)}function bs(i,n,e){for(let t=0;t<i.length;t++){let r=i[t],o=n[t];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function wd(i,n,e){let t=e.path.split("/"),r=t.indexOf("**");if(r===-1){if(t.length>i.length||e.pathMatch==="full"&&(n.hasChildren()||t.length<i.length))return null;let c={},d=i.slice(0,t.length);return bs(t,d,c)?{consumed:d,posParams:c}:null}if(r!==t.lastIndexOf("**"))return null;let o=t.slice(0,r),a=t.slice(r+1);if(o.length+a.length>i.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!bs(o,i.slice(0,o.length),s)||!bs(a,i.slice(i.length-a.length),s)?null:{consumed:i,posParams:s}}function Xr(i){return new Promise((n,e)=>{i.pipe(Pt()).subscribe({next:t=>n(t),error:t=>e(t)})})}function Pf(i,n){if(i.length!==n.length)return!1;for(let e=0;e<i.length;++e)if(!yt(i[e],n[e]))return!1;return!0}function yt(i,n){let e=i?Ds(i):void 0,t=n?Ds(n):void 0;if(!e||!t||e.length!=t.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!xd(i[r],n[r]))return!1;return!0}function Ds(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function xd(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let e=[...i].sort(),t=[...n].sort();return e.every((r,o)=>t[o]===r)}else return i===n}function Nf(i){return i.length>0?i[i.length-1]:null}function un(i){return gr(i)?i:kn(i)?we(Promise.resolve(i)):y(i)}function Dd(i){return gr(i)?Xr(i):Promise.resolve(i)}var Lf={exact:Sd,subset:Md},Ed={exact:Vf,subset:Bf,ignored:()=>!0},Vs={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Vi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Bs(i,n,e){let t=i instanceof Le?i:n.parseUrl(i);return he(()=>Es(n.lastSuccessfulNavigation()?.finalUrl??new Le,t,_(_({},Vi),e)))}function Es(i,n,e){return Lf[e.paths](i.root,n.root,e.matrixParams)&&Ed[e.queryParams](i.queryParams,n.queryParams)&&!(e.fragment==="exact"&&i.fragment!==n.fragment)}function Vf(i,n){return yt(i,n)}function Sd(i,n,e){if(!ln(i.segments,n.segments)||!Wr(i.segments,n.segments,e)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let t in n.children)if(!i.children[t]||!Sd(i.children[t],n.children[t],e))return!1;return!0}function Bf(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(e=>xd(i[e],n[e]))}function Md(i,n,e){return Ad(i,n,n.segments,e)}function Ad(i,n,e,t){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!ln(r,e)||n.hasChildren()||!Wr(r,e,t))}else if(i.segments.length===e.length){if(!ln(i.segments,e)||!Wr(i.segments,e,t))return!1;for(let r in n.children)if(!i.children[r]||!Md(i.children[r],n.children[r],t))return!1;return!0}else{let r=e.slice(0,i.segments.length),o=e.slice(i.segments.length);return!ln(i.segments,r)||!Wr(i.segments,r,t)||!i.children[k]?!1:Ad(i.children[k],n,o,t)}}function Wr(i,n,e){return n.every((t,r)=>Ed[e](i[r].parameters,t.parameters))}var Le=class{root;queryParams;fragment;_queryParamMap;constructor(n=new ee([],{}),e={},t=null){this.root=n,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=cn(this.queryParams),this._queryParamMap}toString(){return zf.serialize(this)}},ee=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qr(this)}},Gt=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=cn(this.parameters),this._parameterMap}toString(){return Id(this)}};function jf(i,n){return ln(i,n)&&i.every((e,t)=>yt(e.parameters,n[t].parameters))}function ln(i,n){return i.length!==n.length?!1:i.every((e,t)=>e.path===n[t].path)}function Uf(i,n){let e=[];return Object.entries(i.children).forEach(([t,r])=>{t===k&&(e=e.concat(n(r,t)))}),Object.entries(i.children).forEach(([t,r])=>{t!==k&&(e=e.concat(n(r,t)))}),e}var Yt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>new It,providedIn:"root"})}return i})(),It=class{parse(n){let e=new Ms(n);return new Le(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${ki(n.root,!0)}`,t=Gf(n.queryParams),r=typeof n.fragment=="string"?`#${Hf(n.fragment)}`:"";return`${e}${t}${r}`}},zf=new It;function qr(i){return i.segments.map(n=>Id(n)).join("/")}function ki(i,n){if(!i.hasChildren())return qr(i);if(n){let e=i.children[k]?ki(i.children[k],!1):"",t=[];return Object.entries(i.children).forEach(([r,o])=>{r!==k&&t.push(`${r}:${ki(o,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Uf(i,(t,r)=>r===k?[ki(i.children[k],!1)]:[`${r}:${ki(t,!1)}`]);return Object.keys(i.children).length===1&&i.children[k]!=null?`${qr(i)}/${e[0]}`:`${qr(i)}/(${e.join("//")})`}}function Rd(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function $r(i){return Rd(i).replace(/%3B/gi,";")}function Hf(i){return encodeURI(i)}function Ss(i){return Rd(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Yr(i){return decodeURIComponent(i)}function gd(i){return Yr(i.replace(/\+/g,"%20"))}function Id(i){return`${Ss(i.path)}${$f(i.parameters)}`}function $f(i){return Object.entries(i).map(([n,e])=>`;${Ss(n)}=${Ss(e)}`).join("")}function Gf(i){let n=Object.entries(i).map(([e,t])=>Array.isArray(t)?t.map(r=>`${$r(e)}=${$r(r)}`).join("&"):`${$r(e)}=${$r(t)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var Wf=/^[^\/()?;#]+/;function ys(i){let n=i.match(Wf);return n?n[0]:""}var qf=/^[^\/()?;=#]+/;function Yf(i){let n=i.match(qf);return n?n[0]:""}var Xf=/^[^=?&#]+/;function Zf(i){let n=i.match(Xf);return n?n[0]:""}var Kf=/^[^&#]+/;function Qf(i){let n=i.match(Kf);return n?n[0]:""}var Ms=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ee([],{}):new ee([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new P(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(t).length>0)&&(r[k]=new ee(e,t)),r}parseSegment(){let n=ys(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new P(4009,!1);return this.capture(n),new Gt(Yr(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=Yf(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let r=ys(this.remaining);r&&(t=r,this.capture(t))}n[Yr(e)]=Yr(t)}parseQueryParam(n){let e=Zf(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Qf(this.remaining);a&&(t=a,this.capture(t))}let r=gd(e),o=gd(t);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ys(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new P(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=k);let s=this.parseChildren(e+1);t[a??k]=Object.keys(s).length===1&&s[k]?s[k]:new ee([],s),this.consumeOptional("//")}return t}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new P(4011,!1)}};function Od(i){return i.segments.length>0?new ee([],{[k]:i}):i}function Fd(i){let n={};for(let[t,r]of Object.entries(i.children)){let o=Fd(r);if(t===k&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[t]=o)}let e=new ee(i.segments,n);return Jf(e)}function Jf(i){if(i.numberOfChildren===1&&i.children[k]){let n=i.children[k];return new ee(i.segments.concat(n.segments),n.children)}return i}function Wt(i){return i instanceof Le}function Td(i,n,e=null,t=null,r=new It){let o=kd(i);return Pd(o,n,e,t,r)}function kd(i){let n;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new ee(o.url,a);return o===i&&(n=s),s}let t=e(i.root),r=Od(t);return n??r}function Pd(i,n,e,t,r){let o=i;for(;o.parent;)o=o.parent;if(n.length===0)return Cs(o,o,o,e,t,r);let a=ep(n);if(a.toRoot())return Cs(o,o,new ee([],{}),e,t,r);let s=tp(a,o,i),c=s.processChildren?Ni(s.segmentGroup,s.index,a.commands):Ld(s.segmentGroup,s.index,a.commands);return Cs(o,s.segmentGroup,c,e,t,r)}function Zr(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Bi(i){return typeof i=="object"&&i!=null&&i.outlets}function _d(i,n,e){i||="\u0275";let t=new Le;return t.queryParams={[i]:n},e.parse(e.serialize(t)).queryParams[i]}function Cs(i,n,e,t,r,o){let a={};for(let[d,u]of Object.entries(t??{}))a[d]=Array.isArray(u)?u.map(v=>_d(d,v,o)):_d(d,u,o);let s;i===n?s=e:s=Nd(i,n,e);let c=Od(Fd(s));return new Le(c,a,r)}function Nd(i,n,e){let t={};return Object.entries(i.children).forEach(([r,o])=>{o===n?t[r]=e:t[r]=Nd(o,n,e)}),new ee(i.segments,t)}var Kr=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,t){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=t,n&&t.length>0&&Zr(t[0]))throw new P(4003,!1);let r=t.find(Bi);if(r&&r!==Nf(t))throw new P(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ep(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new Kr(!0,0,i);let n=0,e=!1,t=i.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Kr(e,n,t)}var Hn=class{segmentGroup;processChildren;index;constructor(n,e,t){this.segmentGroup=n,this.processChildren=e,this.index=t}};function tp(i,n,e){if(i.isAbsolute)return new Hn(n,!0,0);if(!e)return new Hn(n,!1,NaN);if(e.parent===null)return new Hn(e,!0,0);let t=Zr(i.commands[0])?0:1,r=e.segments.length-1+t;return np(e,r,i.numberOfDoubleDots)}function np(i,n,e){let t=i,r=n,o=e;for(;o>r;){if(o-=r,t=t.parent,!t)throw new P(4005,!1);r=t.segments.length}return new Hn(t,!1,r-o)}function ip(i){return Bi(i[0])?i[0].outlets:{[k]:i}}function Ld(i,n,e){if(i??=new ee([],{}),i.segments.length===0&&i.hasChildren())return Ni(i,n,e);let t=rp(i,n,e),r=e.slice(t.commandIndex);if(t.match&&t.pathIndex<i.segments.length){let o=new ee(i.segments.slice(0,t.pathIndex),{});return o.children[k]=new ee(i.segments.slice(t.pathIndex),i.children),Ni(o,0,r)}else return t.match&&r.length===0?new ee(i.segments,{}):t.match&&!i.hasChildren()?As(i,n,e):t.match?Ni(i,0,r):As(i,n,e)}function Ni(i,n,e){if(e.length===0)return new ee(i.segments,{});{let t=ip(e),r={};if(Object.keys(t).some(o=>o!==k)&&i.children[k]&&i.numberOfChildren===1&&i.children[k].segments.length===0){let o=Ni(i.children[k],n,e);return new ee(i.segments,o.children)}return Object.entries(t).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Ld(i.children[o],n,a))}),Object.entries(i.children).forEach(([o,a])=>{t[o]===void 0&&(r[o]=a)}),new ee(i.segments,r)}}function rp(i,n,e){let t=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(t>=e.length)return o;let a=i.segments[r],s=e[t];if(Bi(s))break;let c=`${s}`,d=t<e.length-1?e[t+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!bd(c,d,a))return o;t+=2}else{if(!bd(c,{},a))return o;t++}r++}return{match:!0,pathIndex:r,commandIndex:t}}function As(i,n,e){let t=i.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Bi(o)){let c=op(o.outlets);return new ee(t,c)}if(r===0&&Zr(e[0])){let c=i.segments[n];t.push(new Gt(c.path,vd(e[0]))),r++;continue}let a=Bi(o)?o.outlets[k]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Zr(s)?(t.push(new Gt(a,vd(s))),r+=2):(t.push(new Gt(a,{})),r++)}return new ee(t,{})}function op(i){let n={};return Object.entries(i).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(n[e]=As(new ee([],{}),0,t))}),n}function vd(i){let n={};return Object.entries(i).forEach(([e,t])=>n[e]=`${t}`),n}function bd(i,n,e){return i==e.path&&yt(n,e.parameters)}var $n="imperative",Ce=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(Ce||{}),Ge=class{id;url;constructor(n,e){this.id=n,this.url=e}},qt=class extends Ge{type=Ce.NavigationStart;navigationTrigger;restoredState;constructor(n,e,t="imperative",r=null){super(n,e),this.navigationTrigger=t,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},We=class extends Ge{urlAfterRedirects;type=Ce.NavigationEnd;constructor(n,e,t){super(n,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Te=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(Te||{}),Wn=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Wn||{}),Je=class extends Ge{reason;code;type=Ce.NavigationCancel;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Vd(i){return i instanceof Je&&(i.code===Te.Redirect||i.code===Te.SupersededByNewNavigation)}var Ct=class extends Ge{reason;code;type=Ce.NavigationSkipped;constructor(n,e,t,r){super(n,e),this.reason=t,this.code=r}},dn=class extends Ge{error;target;type=Ce.NavigationError;constructor(n,e,t,r){super(n,e),this.error=t,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ji=class extends Ge{urlAfterRedirects;state;type=Ce.RoutesRecognized;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qr=class extends Ge{urlAfterRedirects;state;type=Ce.GuardsCheckStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jr=class extends Ge{urlAfterRedirects;state;shouldActivate;type=Ce.GuardsCheckEnd;constructor(n,e,t,r,o){super(n,e),this.urlAfterRedirects=t,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},eo=class extends Ge{urlAfterRedirects;state;type=Ce.ResolveStart;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},to=class extends Ge{urlAfterRedirects;state;type=Ce.ResolveEnd;constructor(n,e,t,r){super(n,e),this.urlAfterRedirects=t,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},no=class{route;type=Ce.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},io=class{route;type=Ce.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ro=class{snapshot;type=Ce.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},oo=class{snapshot;type=Ce.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ao=class{snapshot;type=Ce.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},so=class{snapshot;type=Ce.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qn=class{routerEvent;position;anchor;scrollBehavior;type=Ce.Scroll;constructor(n,e,t,r){this.routerEvent=n,this.position=e,this.anchor=t,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Yn=class{},Ui=class{},Xn=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function ap(i){return!(i instanceof Yn)&&!(i instanceof Xn)&&!(i instanceof Ui)}var lo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new hn(this.rootInjector)}},hn=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let r=this.getOrCreateContext(e);r.outlet=t,this.contexts.set(e,r)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new lo(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||i)(E(ge))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),co=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Rs(n,this._root);return e?e.children.map(t=>t.value):[]}firstChild(n){let e=Rs(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Is(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Is(n,this._root).map(e=>e.value)}};function Rs(i,n){if(i===n.value)return n;for(let e of n.children){let t=Rs(i,e);if(t)return t}return null}function Is(i,n){if(i===n.value)return[n];for(let e of n.children){let t=Is(i,e);if(t.length)return t.unshift(n),t}return[]}var $e=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function zn(i){let n={};return i&&i.children.forEach(e=>n[e.value.outlet]=e),n}var zi=class extends co{snapshot;constructor(n,e){super(n),this.snapshot=e,Us(this,n)}toString(){return this.snapshot.toString()}};function Bd(i,n){let e=sp(i,n),t=new je([new Gt("",{})]),r=new je({}),o=new je({}),a=new je({}),s=new je(""),c=new et(t,r,a,s,o,k,i,e.root);return c.snapshot=e.root,new zi(new $e(c,[]),e)}function sp(i,n){let e={},t={},r={},a=new Zn([],e,r,"",t,k,i,null,{},n);return new Hi("",new $e(a,[]))}var et=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,t,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(I(d=>d[Wi]))??y(void 0),this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(I(n=>cn(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(I(n=>cn(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function js(i,n,e="emptyOnly"){let t,{routeConfig:r}=i;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?t={params:_(_({},n.params),i.params),data:_(_({},n.data),i.data),resolve:_(_(_(_({},i.data),n.data),r?.data),i._resolvedData)}:t={params:_({},i.params),data:_({},i.data),resolve:_(_({},i.data),i._resolvedData??{})},r&&Ud(r)&&(t.resolve[Wi]=r.title),t}var Zn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Wi]}constructor(n,e,t,r,o,a,s,c,d,u){this.url=n,this.params=e,this.queryParams=t,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=cn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=cn(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Hi=class extends co{url;constructor(n,e){super(e),this.url=n,Us(this,e)}toString(){return jd(this._root)}};function Us(i,n){n.value._routerState=i,n.children.forEach(e=>Us(i,e))}function jd(i){let n=i.children.length>0?` { ${i.children.map(jd).join(", ")} } `:"";return`${i.value}${n}`}function ws(i){if(i.snapshot){let n=i.snapshot,e=i._futureSnapshot;i.snapshot=e,yt(n.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),yt(n.params,e.params)||i.paramsSubject.next(e.params),Pf(n.url,e.url)||i.urlSubject.next(e.url),yt(n.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Os(i,n){let e=yt(i.params,n.params)&&jf(i.url,n.url),t=!i.parent!=!n.parent;return e&&!t&&(!i.parent||Os(i.parent,n.parent))}function Ud(i){return typeof i.title=="string"||i.title===null}var zd=new b(""),qi=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=k;activateEvents=new re;deactivateEvents=new re;attachEvents=new re;detachEvents=new re;routerOutletData=Ht();parentContexts=l(hn);location=l(Dt);changeDetector=l(Fe);inputBinder=l(Yi,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:r}=e.name;if(t)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new P(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new P(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new P(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new P(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Fs(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ie]})}return i})(),Fs=class{route;childContexts;parent;outletData;constructor(n,e,t,r){this.route=n,this.childContexts=e,this.parent=t,this.outletData=r}get(n,e){return n===et?this.route:n===hn?this.childContexts:n===zd?this.outletData:this.parent.get(n,e)}},Yi=new b(""),zs=(()=>{class i{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,r=vi([t.queryParams,t.params,t.data]).pipe(oe(([o,a,s],c)=>(s=_(_(_({},o),a),s),c===0?y(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let a=zc(t.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),Hs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,r){t&1&&Q(0,"router-outlet")},dependencies:[qi],encapsulation:2})}return i})();function $s(i){let n=i.children&&i.children.map($s),e=n?G(_({},i),{children:n}):_({},i);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==k&&(e.component=Hs),e}function lp(i,n,e){let t=$i(i,n._root,e?e._root:void 0);return new zi(t,n)}function $i(i,n,e){if(e&&i.shouldReuseRoute(n.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=n.value;let r=cp(i,n,e);return new $e(t,r)}else{if(i.shouldAttach(n.value)){let o=i.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>$i(i,s)),a}}let t=dp(n.value),r=n.children.map(o=>$i(i,o));return new $e(t,r)}}function cp(i,n,e){return n.children.map(t=>{for(let r of e.children)if(i.shouldReuseRoute(t.value,r.value.snapshot))return $i(i,t,r);return $i(i,t)})}function dp(i){return new et(new je(i.url),new je(i.params),new je(i.queryParams),new je(i.fragment),new je(i.data),i.outlet,i.component,i)}var Kn=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},Hd="ngNavigationCancelingError";function uo(i,n){let{redirectTo:e,navigationBehaviorOptions:t}=Wt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=$d(!1,Te.Redirect);return r.url=e,r.navigationBehaviorOptions=t,r}function $d(i,n){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[Hd]=!0,e.cancellationCode=n,e}function up(i){return Gd(i)&&Wt(i.url)}function Gd(i){return!!i&&i[Hd]}var Ts=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,t,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=t,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,n),ws(this.futureState.root),this.activateChildRoutes(e,t,n)}deactivateChildRoutes(n,e,t){let r=zn(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],t),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,t)})}deactivateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=t.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,t);else o&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=zn(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(t&&t.outlet){let a=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let t=e.getContext(n.value.outlet),r=t&&n.value.component?t.children:e,o=zn(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(n,e,t){let r=zn(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],t),this.forwardEvent(new so(o.value.snapshot))}),n.children.length&&this.forwardEvent(new oo(n.value.snapshot))}activateRoutes(n,e,t){let r=n.value,o=e?e.value:null;if(ws(r),r===o)if(r.component){let a=t.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,t);else if(r.component){let a=t.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),ws(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,t)}},ho=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Gn=class{component;route;constructor(n,e){this.component=n,this.route=e}};function hp(i,n,e){let t=i._root,r=n?n._root:null;return Pi(t,r,e,[t.value])}function mp(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function Jn(i,n){let e=Symbol(),t=n.get(i,e);return t===e?typeof i=="function"&&!cc(i)?i:n.get(i):t}function Pi(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=zn(n);return i.children.forEach(a=>{fp(a,o[a.value.outlet],e,t.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Li(s,e.getContext(a),r)),r}function fp(i,n,e,t,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,a=n?n.value:null,s=e?e.getContext(i.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=pp(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new ho(t)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Pi(i,n,s?s.children:null,t,r):Pi(i,n,e,t,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Gn(s.outlet.component,a))}else a&&Li(n,s,r),r.canActivateChecks.push(new ho(t)),o.component?Pi(i,null,s?s.children:null,t,r):Pi(i,null,e,t,r);return r}function pp(i,n,e){if(typeof e=="function")return Pe(n._environmentInjector,()=>e(i,n));switch(e){case"pathParamsChange":return!ln(i.url,n.url);case"pathParamsOrQueryParamsChange":return!ln(i.url,n.url)||!yt(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Os(i,n)||!yt(i.queryParams,n.queryParams);default:return!Os(i,n)}}function Li(i,n,e){let t=zn(i),r=i.value;Object.entries(t).forEach(([o,a])=>{r.component?n?Li(a,n.children.getContext(o),e):Li(a,null,e):Li(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Gn(n.outlet.component,r)):e.canDeactivateChecks.push(new Gn(null,r)):e.canDeactivateChecks.push(new Gn(null,r))}function Xi(i){return typeof i=="function"}function gp(i){return typeof i=="boolean"}function _p(i){return i&&Xi(i.canLoad)}function vp(i){return i&&Xi(i.canActivate)}function bp(i){return i&&Xi(i.canActivateChild)}function yp(i){return i&&Xi(i.canDeactivate)}function Cp(i){return i&&Xi(i.canMatch)}function Wd(i){return i instanceof ac||i?.name==="EmptyError"}var Gr=Symbol("INITIAL_VALUE");function Qn(){return oe(i=>vi(i.map(n=>n.pipe(Xe(1),st(Gr)))).pipe(I(n=>{for(let e of n)if(e!==!0){if(e===Gr)return Gr;if(e===!1||wp(e))return e}return!0}),ue(n=>n!==Gr),Xe(1)))}function wp(i){return Wt(i)||i instanceof Kn}function qd(i){return i.aborted?y(void 0).pipe(Xe(1)):new Be(n=>{let e=()=>{n.next(),n.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function Yd(i){return ze(qd(i))}function xp(i){return ht(n=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?y(G(_({},n),{guardsResult:!0})):Dp(o,e,t).pipe(ht(a=>a&&gp(a)?Ep(e,r,i):y(a)),I(a=>G(_({},n),{guardsResult:a})))})}function Dp(i,n,e){return we(i).pipe(ht(t=>Ip(t.component,t.route,e,n)),Pt(t=>t!==!0,!0))}function Ep(i,n,e){return we(n).pipe(tn(t=>_r(Mp(t.route.parent,e),Sp(t.route,e),Rp(i,t.path),Ap(i,t.route))),Pt(t=>t!==!0,!0))}function Sp(i,n){return i!==null&&n&&n(new ao(i)),y(!0)}function Mp(i,n){return i!==null&&n&&n(new ro(i)),y(!0)}function Ap(i,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return y(!0);let t=e.map(r=>xn(()=>{let o=n._environmentInjector,a=Jn(r,o),s=vp(a)?a.canActivate(n,i):Pe(o,()=>a(n,i));return un(s).pipe(Pt())}));return y(t).pipe(Qn())}function Rp(i,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>mp(o)).filter(o=>o!==null).map(o=>xn(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Jn(s,c),u=bp(d)?d.canActivateChild(e,i):Pe(c,()=>d(e,i));return un(u).pipe(Pt())});return y(a).pipe(Qn())}));return y(r).pipe(Qn())}function Ip(i,n,e,t){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return y(!0);let o=r.map(a=>{let s=n._environmentInjector,c=Jn(a,s),d=yp(c)?c.canDeactivate(i,n,e,t):Pe(s,()=>c(i,n,e,t));return un(d).pipe(Pt())});return y(o).pipe(Qn())}function Op(i,n,e,t,r){let o=n.canLoad;if(o===void 0||o.length===0)return y(!0);let a=o.map(s=>{let c=Jn(s,i),d=_p(c)?c.canLoad(n,e):Pe(i,()=>c(n,e)),u=un(d);return r?u.pipe(Yd(r)):u});return y(a).pipe(Qn(),Xd(t))}function Xd(i){return oc(ve(n=>{if(typeof n!="boolean")throw uo(i,n)}),I(n=>n===!0))}function Fp(i,n,e,t,r,o){let a=n.canMatch;if(!a||a.length===0)return y(!0);let s=a.map(c=>{let d=Jn(c,i),u=Cp(d)?d.canMatch(n,e,r):Pe(i,()=>d(n,e,r));return un(u).pipe(Yd(o))});return y(s).pipe(Qn(),Xd(t))}var Rt=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},Gi=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function Tp(i){throw new P(4e3,!1)}function kp(i){throw $d(!1,Te.GuardRejected)}var ks=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let t=[],r=e.root;for(;;){if(t=t.concat(r.segments),r.numberOfChildren===0)return t;if(r.numberOfChildren>1||!r.children[k])throw Tp(`${n.redirectTo}`);r=r.children[k]}}async applyRedirectCommands(n,e,t,r,o){let a=await Pp(e,r,o);if(a instanceof Le)throw new Gi(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,t);if(a[0]==="/")throw new Gi(s);return s}applyRedirectCreateUrlTree(n,e,t,r){let o=this.createSegmentGroup(n,e.root,t,r);return new Le(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let t={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);t[r]=e[s]}else t[r]=o}),t}createSegmentGroup(n,e,t,r){let o=this.createSegments(n,e.segments,t,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,t,r)}),new ee(o,a)}createSegments(n,e,t,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,t))}findPosParam(n,e,t){let r=t[e.path.substring(1)];if(!r)throw new P(4001,!1);return r}findOrReturn(n,e){let t=0;for(let r of e){if(r.path===n.path)return e.splice(t),r;t++}return n}};function Pp(i,n,e){if(typeof i=="string")return Promise.resolve(i);let t=i;return Xr(un(Pe(e,()=>t(n))))}function Np(i,n){return i.providers&&!i._injector&&(i._injector=xr(i.providers,n,`Route: ${i.path}`)),i._injector??n}function dt(i){return i.outlet||k}function Lp(i,n){let e=i.filter(t=>dt(t)===n);return e.push(...i.filter(t=>dt(t)!==n)),e}var Ps={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Zd(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function Vp(i,n,e,t,r,o,a){let s=Kd(i,n,e);if(!s.matched)return y(s);let c=Zd(o(s));return t=Np(n,t),Fp(t,n,e,r,c,a).pipe(I(d=>d===!0?s:_({},Ps)))}function Kd(i,n,e){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||e.length>0)?_({},Ps):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||wd)(e,i,n);if(!r)return _({},Ps);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function yd(i,n,e,t,r){return e.length>0&&Up(i,e,t,r)?{segmentGroup:new ee(n,jp(t,new ee(e,i.children))),slicedSegments:[]}:e.length===0&&zp(i,e,t)?{segmentGroup:new ee(i.segments,Bp(i,e,t,i.children)),slicedSegments:e}:{segmentGroup:new ee(i.segments,i.children),slicedSegments:e}}function Bp(i,n,e,t){let r={};for(let o of e)if(fo(i,n,o)&&!t[dt(o)]){let a=new ee([],{});r[dt(o)]=a}return _(_({},t),r)}function jp(i,n){let e={};e[k]=n;for(let t of i)if(t.path===""&&dt(t)!==k){let r=new ee([],{});e[dt(t)]=r}return e}function Up(i,n,e,t){return e.some(r=>!fo(i,n,r)||!(dt(r)!==k)?!1:!(t!==void 0&&dt(r)===t))}function zp(i,n,e){return e.some(t=>fo(i,n,t))}function fo(i,n,e){return(i.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Hp(i,n,e){return n.length===0&&!i.children[e]}var Ns=class{};async function $p(i,n,e,t,r,o,a="emptyOnly",s){return new Ls(i,n,e,t,r,a,o,s).recognize()}var Gp=31,Ls=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,t,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=t,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new ks(this.urlSerializer,this.urlTree)}noMatchError(n){return new P(4002,`'${n.segmentGroup}'`)}async recognize(){let n=yd(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(n),r=new $e(t,e),o=new Hi("",r),a=Td(t,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Zn([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),k,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,k,e),rootSnapshot:e}}catch(t){if(t instanceof Gi)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof Rt?this.noMatchError(t):t}}async processSegmentGroup(n,e,t,r,o){if(t.segments.length===0&&t.hasChildren())return this.processChildren(n,e,t,o);let a=await this.processSegment(n,e,t,t.segments,r,!0,o);return a instanceof $e?[a]:[]}async processChildren(n,e,t,r){let o=[];for(let c of Object.keys(t.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=t.children[c],u=Lp(e,c),v=await this.processSegmentGroup(n,u,d,c,r);a.push(...v)}let s=Qd(a);return Wp(s),s}async processSegment(n,e,t,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,t,r,o,a,s)}catch(d){if(d instanceof Rt||Wd(d))continue;throw d}if(Hp(t,r,o))return new Ns;throw new Rt(t)}async processSegmentAgainstRoute(n,e,t,r,o,a,s,c){if(dt(t)!==a&&(a===k||!fo(r,o,t)))throw new Rt(r);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,t,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,t,o,a,c);throw new Rt(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,t,r,o,a,s){let{matched:c,parameters:d,consumedSegments:u,positionalParamSegments:v,remainingSegments:D}=Kd(e,r,o);if(!c)throw new Rt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Gp&&(this.allowRedirects=!1));let K=this.createSnapshot(n,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let W=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,v,Zd(K),n),F=await this.applyRedirects.lineralizeSegments(r,W);return this.processSegment(n,t,e,F.concat(D),a,!1,s)}createSnapshot(n,e,t,r,o){let a=new Zn(t,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Yp(e),dt(e),e.component??e._loadedComponent??null,e,Xp(e),n),s=js(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,t,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ae=>this.createSnapshot(n,t,Ae.consumedSegments,Ae.parameters,a),c=await Xr(Vp(e,t,r,n,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!c?.matched)throw new Rt(e);n=t._injector??n;let{routes:d}=await this.getChildConfig(n,t,r),u=t._loadedInjector??n,{parameters:v,consumedSegments:D,remainingSegments:K}=c,W=this.createSnapshot(n,t,D,v,a),{segmentGroup:F,slicedSegments:N}=yd(e,D,K,d,o);if(N.length===0&&F.hasChildren()){let Ae=await this.processChildren(u,d,F,W);return new $e(W,Ae)}if(d.length===0&&N.length===0)return new $e(W,[]);let X=dt(t)===o,de=await this.processSegment(u,d,F,N,X?k:o,!0,W);return new $e(W,de instanceof $e?[de]:[])}async getChildConfig(n,e,t){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Xr(Op(n,e,t,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw kp(e)}return{routes:[],injector:n}}};function Wp(i){i.sort((n,e)=>n.value.outlet===k?-1:e.value.outlet===k?1:n.value.outlet.localeCompare(e.value.outlet))}function qp(i){let n=i.value.routeConfig;return n&&n.path===""}function Qd(i){let n=[],e=new Set;for(let t of i){if(!qp(t)){n.push(t);continue}let r=n.find(o=>t.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...t.children),e.add(r)):n.push(t)}for(let t of e){let r=Qd(t.children);n.push(new $e(t.value,r))}return n.filter(t=>!e.has(t))}function Yp(i){return i.data||{}}function Xp(i){return i.resolve||{}}function Zp(i,n,e,t,r,o,a){return ht(async s=>{let{state:c,tree:d}=await $p(i,n,e,t,s.extractedUrl,r,o,a);return G(_({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function Kp(i){return ht(n=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=n;if(!t.length)return y(n);let r=new Set(t.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of Jd(s))o.add(c);let a=0;return we(o).pipe(tn(s=>r.has(s)?Qp(s,e,i):(s.data=js(s,s.parent,i).resolve,y(void 0))),ve(()=>a++),Pa(1),ht(s=>a===o.size?y(n):Ue))})}function Jd(i){let n=i.children.map(e=>Jd(e)).flat();return[i,...n]}function Qp(i,n,e){let t=i.routeConfig,r=i._resolve;return t?.title!==void 0&&!Ud(t)&&(r[Wi]=t.title),xn(()=>(i.data=js(i,i.parent,e).resolve,Jp(r,i,n).pipe(I(o=>(i._resolvedData=o,i.data=_(_({},i.data),o),null)))))}function Jp(i,n,e){let t=Ds(i);if(t.length===0)return y({});let r={};return we(t).pipe(ht(o=>eg(i[o],n,e).pipe(Pt(),ve(a=>{if(a instanceof Kn)throw uo(new It,a);r[o]=a}))),Pa(1),I(()=>r),Sn(o=>Wd(o)?Ue:wn(o)))}function eg(i,n,e){let t=n._environmentInjector,r=Jn(i,t),o=r.resolve?r.resolve(n,e):Pe(t,()=>r(n,e));return un(o)}function Cd(i){return oe(n=>{let e=i(n);return e?we(e).pipe(I(()=>n)):y(n)})}var Gs=(()=>{class i{buildTitle(e){let t,r=e.root;for(;r!==void 0;)t=this.getResolvedTitleForRoute(r)??t,r=r.children.find(o=>o.outlet===k);return t}getResolvedTitleForRoute(e){return e.data[Wi]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>l(eu),providedIn:"root"})}return i})(),eu=(()=>{class i extends Gs{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||i)(E($t))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Xt=new b("",{factory:()=>({})}),mn=new b(""),po=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Lc);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await Dd(Pe(e,()=>t.loadComponent())),a=await iu(nu(o));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=a,a}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,r),r}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let r=(async()=>{try{let o=await tu(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,r),r}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();async function tu(i,n,e,t){let r=await Dd(Pe(e,()=>i.loadChildren())),o=await iu(nu(r)),a;o instanceof Sc||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),t&&t(i);let s,c,d=!1,u;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,u=a,c=s.get(mn,[],{optional:!0,self:!0}).flat()),{routes:c.map($s),injector:s,factory:u}}function tg(i){return i&&typeof i=="object"&&"default"in i}function nu(i){return tg(i)?i.default:i}async function iu(i){return i}var go=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>l(ng),providedIn:"root"})}return i})(),ng=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ws=new b(""),qs=new b("");function ru(i,n,e){let t=i.get(qs),r=i.get(T);if(!r.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),ig(i)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:c}=t;return c&&Pe(i,()=>c({transition:s,from:n,to:e})),a}function ig(i){return new Promise(n=>{pt({read:()=>setTimeout(n)},{injector:i})})}var rg=()=>{},Ys=new b(""),_o=(()=>{class i{currentNavigation=M(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=M(null);events=new R;transitionAbortWithErrorSubject=new R;configLoader=l(po);environmentInjector=l(ge);destroyRef=l(Bt);urlSerializer=l(Yt);rootContexts=l(hn);location=l(gt);inputBindingEnabled=l(Yi,{optional:!0})!==null;titleStrategy=l(Gs);options=l(Xt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(go);createViewTransition=l(Ws,{optional:!0});navigationErrorHandler=l(Ys,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new no(r)),t=r=>this.events.next(new io(r));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Z(()=>{this.transitions?.next(G(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new je(null),this.transitions.pipe(ue(t=>t!==null),oe(t=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===t.id;return y(t).pipe(oe(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",Te.SupersededByNewNavigation),Ue;this.currentTransition=t;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?G(_({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Ct(s.id,this.urlSerializer.serialize(s.rawUrl),"",Wn.IgnoredSameUrlNavigation)),s.resolve(!1),Ue;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return y(s).pipe(oe(v=>(this.events.next(new qt(v.id,this.urlSerializer.serialize(v.extractedUrl),v.source,v.restoredState)),v.id!==this.navigationId?Ue:Promise.resolve(v))),Zp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ve(v=>{t.targetSnapshot=v.targetSnapshot,t.urlAfterRedirects=v.urlAfterRedirects,this.currentNavigation.update(D=>(D.finalUrl=v.urlAfterRedirects,D)),this.events.next(new Ui)}),oe(v=>we(t.routesRecognizeHandler.deferredHandle??y(void 0)).pipe(I(()=>v))),ve(()=>{let v=new ji(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(v)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:v,extractedUrl:D,source:K,restoredState:W,extras:F}=s,N=new qt(v,this.urlSerializer.serialize(D),K,W);this.events.next(N);let X=Bd(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=G(_({},s),{targetSnapshot:X,urlAfterRedirects:D,extras:G(_({},F),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(de=>(de.finalUrl=D,de)),y(t)}else return this.events.next(new Ct(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Wn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ue}),I(s=>{let c=new Qr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=t=G(_({},s),{guards:hp(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),xp(s=>this.events.next(s)),oe(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw uo(this.urlSerializer,s.guardsResult);let c=new Jr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Ue;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Te.GuardRejected),Ue;if(s.guards.canActivateChecks.length===0)return y(s);let d=new eo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Ue;let u=!1;return y(s).pipe(Kp(this.paramsInheritanceStrategy),ve({next:()=>{u=!0;let v=new to(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(v)},complete:()=>{u||this.cancelNavigationTransition(s,"",Te.NoDataFromResolver)}}))}),Cd(s=>{let c=u=>{let v=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let D=u._environmentInjector;v.push(this.configLoader.loadComponent(D,u.routeConfig).then(K=>{u.component=K}))}for(let D of u.children)v.push(...c(D));return v},d=c(s.targetSnapshot.root);return d.length===0?y(s):we(Promise.all(d).then(()=>s))}),Cd(()=>this.afterPreactivation()),oe(()=>{let{currentSnapshot:s,targetSnapshot:c}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?we(d).pipe(I(()=>t)):y(t)}),Xe(1),oe(s=>{let c=lp(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=G(_({},s),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new Yn);let d=t.beforeActivateHandler.deferredHandle;return d?we(d.then(()=>s)):y(s)}),ve(s=>{new Ts(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=rg,c)),this.lastSuccessfulNavigation.set(Z(this.currentNavigation)),this.events.next(new We(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ze(qd(o.signal).pipe(ue(()=>!r&&!t.targetRouterState),ve(()=>{this.cancelNavigationTransition(t,o.signal.reason+"",Te.Aborted)}))),ve({complete:()=>{r=!0}}),ze(this.transitionAbortWithErrorSubject.pipe(ve(s=>{throw s}))),Mn(()=>{o.abort(),r||this.cancelNavigationTransition(t,"",Te.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Sn(s=>{if(r=!0,this.destroyed)return t.resolve(!1),Ue;if(Gd(s))this.events.next(new Je(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),up(s)?this.events.next(new Xn(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let c=new dn(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=Pe(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Kn){let{message:u,cancellationCode:v}=uo(this.urlSerializer,d);this.events.next(new Je(t.id,this.urlSerializer.serialize(t.extractedUrl),u,v)),this.events.next(new Xn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return Ue}))}))}cancelNavigationTransition(e,t,r){let o=new Je(e.id,this.urlSerializer.serialize(e.extractedUrl),t,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Z(this.currentNavigation),r=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==r?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function og(i){return i!==$n}var ou=new b("");var au=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>l(ag),providedIn:"root"})}return i})(),mo=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},ag=(()=>{class i extends mo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(i)))(r||i)}})();static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),vo=(()=>{class i{urlSerializer=l(Yt);options=l(Xt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(gt);urlHandlingStrategy=l(go);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Le;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,a=r??o;return a instanceof Le?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:r}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,r),this.routerState=e):this.rawUrlTree=r}routerState=Bd(null,l(ge));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:()=>l(sg),providedIn:"root"})}return i})(),sg=(()=>{class i extends vo{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof qt?this.updateStateMemento():e instanceof Ct?this.commitTransition(t):e instanceof ji?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Yn?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Je&&!Vd(e)?this.restoreHistory(t):e instanceof dn?this.restoreHistory(t,!0):e instanceof We&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:t,id:r}){let{replaceUrl:o,state:a}=t;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,c=_(_({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",c)}else{let s=_(_({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(i)))(r||i)}})();static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function bo(i,n){i.events.pipe(ue(e=>e instanceof We||e instanceof Je||e instanceof dn||e instanceof Ct),I(e=>e instanceof We||e instanceof Ct?0:(e instanceof Je?e.code===Te.Redirect||e.code===Te.SupersededByNewNavigation:!1)?2:1),ue(e=>e!==2),Xe(1)).subscribe(()=>{n()})}var ut=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(za);stateManager=l(vo);options=l(Xt,{optional:!0})||{};pendingTasks=l(uc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(_o);urlSerializer=l(Yt);location=l(gt);urlHandlingStrategy=l(go);injector=l(ge);_events=new R;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(au);injectorCleanup=l(ou,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(mn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Yi,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Re;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let r=this.navigationTransitions.currentTransition,o=Z(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(t,o),t instanceof Je&&t.code!==Te.Redirect&&t.code!==Te.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof We)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Xn){let a=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,r.currentRawUrl),c=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||og(r.source)},a);this.scheduleNavigation(s,$n,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}ap(t)&&this._events.next(t)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),$n,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,r,o)=>{this.navigateToSyncWithBrowser(e,r,t,o)})}navigateToSyncWithBrowser(e,t,r,o){let a=r?.navigationId?r:null;if(r){let c=_({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(o.state=c)}let s=this.parseUrl(e);this.scheduleNavigation(s,t,a,o).catch(c=>{this.disposed||this.injector.get(An)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Z(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map($s),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=t,d=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let v;try{let D=r?r.snapshot:this.routerState.snapshot.root;v=kd(D)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),v=this.currentUrlTree.root}return Pd(v,e,u,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let r=Wt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,$n,null,t)}navigate(e,t={skipLocationChange:!1}){return lg(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(nn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let r;if(t===!0?r=_({},Vs):t===!1?r=_({},Vi):r=_(_({},Vi),t),Wt(e))return Es(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Es(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((t,[r,o])=>(o!=null&&(t[r]=o),t),{})}scheduleNavigation(e,t,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((v,D)=>{s=v,c=D});let u=this.pendingTasks.add();return bo(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function lg(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new P(4008,!1)}var cg=(()=>{class i{router=l(ut);stateManager=l(vo);fragment=M("");queryParams=M({});path=M("");serializer=l(Yt);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof We&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Le(t)))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),tt=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Sr("href"),{optional:!0});reactiveHref=Vc(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Z(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Z(this._target)}_target=M(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Z(this._queryParams)}_queryParams=M(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Z(this._fragment)}_fragment=M(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Z(this._queryParamsHandling)}_queryParamsHandling=M(void 0);set state(e){this._state.set(e)}get state(){return Z(this._state)}_state=M(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Z(this._info)}_info=M(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Z(this._relativeTo)}_relativeTo=M(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Z(this._preserveFragment)}_preserveFragment=M(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Z(this._skipLocationChange)}_skipLocationChange=M(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Z(this._replaceUrl)}_replaceUrl=M(!1);isAnchorElement;onChanges=new R;applicationErrorHandler=l(An);options=l(Xt,{optional:!0});reactiveRouterState=l(cg);constructor(e,t,r,o,a,s){this.router=e,this.route=t,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=M(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Wt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let r=this.renderer,o=this.el.nativeElement;t!==null?r.setAttribute(o,e,t):r.removeAttribute(o,e)}_urlTree=he(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:Wt(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return Z(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||i)(J(ut),J(et),Va("tabindex"),J(_e),J(q),J(Qe))};static \u0275dir=O({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,r){t&1&&H("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),t&2&&xe("href",r.reactiveHref(),Dc)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ie],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ie],replaceUrl:[2,"replaceUrl","replaceUrl",ie],routerLink:"routerLink"},features:[Ie]})}return i})(),Zs=(()=>{class i{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new re;link=l(tt,{optional:!0});constructor(e,t,r,o){this.router=e,this.element=t,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof We&&this.update()})}ngAfterContentInit(){y(this.links.changes,y(null)).pipe(bi()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=we(e).pipe(bi()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){let t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=dg(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?_({},Vs):_({},Vi);return r=>{let o=r.urlTree;return o?Z(Bs(o,e,t)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(t){return new(t||i)(J(ut),J(q),J(_e),J(Fe))};static \u0275dir=O({type:i,selectors:[["","routerLinkActive",""]],contentQueries:function(t,r,o){if(t&1&&Pn(o,tt,5),t&2){let a;se(a=le())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ie]})}return i})();function dg(i){let n=i;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Zi=class{};var su=(()=>{class i{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,r,o){this.router=e,this.injector=t,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(ue(e=>e instanceof We),tn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let r=[];for(let o of t){o.providers&&!o._injector&&(o._injector=xr(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return we(r).pipe(bi())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return y(null);let r;t.loadChildren&&t.canLoad===void 0?r=we(this.loader.loadChildren(e,t)):r=y(null);let o=r.pipe(ht(a=>a===null?y(void 0):(t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(t.loadComponent&&!t._loadedComponent){let a=this.loader.loadComponent(e,t);return we([o,a]).pipe(bi())}else return o})}static \u0275fac=function(t){return new(t||i)(E(ut),E(ge),E(Zi),E(po))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),lu=new b(""),ug=(()=>{class i{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=$n;restoredId=0;store={};urlSerializer=l(Yt);zone=l(L);viewportScroller=l(ns);transitions=l(_o);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof qt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof We?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Ct&&e.code===Wn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof qn)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){let r=Z(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new qn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){wr()};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})();function Ks(i,...n){return rn([{provide:mn,multi:!0,useValue:i},[],{provide:et,useFactory:cu},{provide:$a,multi:!0,useFactory:du},n.map(e=>e.\u0275providers)])}function cu(){return l(ut).routerState.root}function ei(i,n){return{\u0275kind:i,\u0275providers:n}}function du(){let i=l(ne);return n=>{let e=i.get(Et);if(n!==e.components[0])return;let t=i.get(ut),r=i.get(uu);i.get(Qs)===1&&t.initialNavigation(),i.get(fu,null,{optional:!0})?.setUpPreloading(),i.get(lu,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var uu=new b("",{factory:()=>new R}),Qs=new b("",{factory:()=>1});function hu(){let i=[{provide:ja,useValue:!0},{provide:Qs,useValue:0},Ha(()=>{let n=l(ne);return n.get(Xa,Promise.resolve()).then(()=>new Promise(t=>{let r=n.get(ut),o=n.get(uu);bo(r,()=>{t(!0)}),n.get(_o).afterPreactivation=()=>(t(!0),o.closed?y(void 0):o),r.initialNavigation()}))})];return ei(2,i)}function mu(){let i=[Ha(()=>{l(ut).setUpLocationChangeListener()}),{provide:Qs,useValue:2}];return ei(3,i)}var fu=new b("");function pu(i){return ei(0,[{provide:fu,useExisting:su},{provide:Zi,useExisting:i}])}function Js(){return ei(6,[{provide:Qe,useClass:Or}])}function gu(){return ei(8,[zs,{provide:Yi,useExisting:zs}])}function _u(i){wi("NgRouterViewTransitions");let n=[{provide:Ws,useValue:ru},{provide:qs,useValue:_({skipNextTransition:!!i?.skipInitialTransition},i)}];return ei(9,n)}var vu=[gt,{provide:Yt,useClass:It},ut,hn,{provide:et,useFactory:cu},po,[]],el=(()=>{class i{constructor(){}static forRoot(e,t){return{ngModule:i,providers:[vu,[],{provide:mn,multi:!0,useValue:e},[],t?.errorHandler?{provide:Ys,useValue:t.errorHandler}:[],{provide:Xt,useValue:t||{}},t?.useHash?mg():fg(),hg(),t?.preloadingStrategy?pu(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?pg(t):[],t?.bindToComponentInputs?gu().\u0275providers:[],t?.enableViewTransitions?_u().\u0275providers:[],gg()]}}static forChild(e){return{ngModule:i,providers:[{provide:mn,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({})}return i})();function hg(){return{provide:lu,useFactory:()=>{let i=l(ns),n=l(Xt);return n.scrollOffset&&i.setOffset(n.scrollOffset),new ug(n)}}}function mg(){return{provide:Qe,useClass:Or}}function fg(){return{provide:Qe,useClass:Ir}}function pg(i){return[i.initialNavigation==="disabled"?mu().\u0275providers:[],i.initialNavigation==="enabledBlocking"?hu().\u0275providers:[]]}var Xs=new b("");function gg(){return[{provide:Xs,useFactory:du},{provide:$a,multi:!0,useExisting:Xs}]}var vg="@",bg=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(ne);loadingSchedulerFn=l(yg,{optional:!0});_engine;constructor(e,t,r,o,a){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-FIRNZCA5.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new P(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new tl(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,t);o.use(s),this.scheduler??=this.injector.get(mc,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){wr()};static \u0275prov=p({token:i,factory:i.\u0275fac})}return i})(),tl=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,r){this.delegate.insertBefore(n,e,t,r)}removeChild(n,e,t,r){this.delegate.removeChild(n,e,t,r)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,r){this.delegate.setAttribute(n,e,t,r)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,r){this.delegate.setStyle(n,e,t,r)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(n,e,t,r)),this.delegate.listen(n,e,t,r)}shouldReplay(n){return this.replay!==null&&n.startsWith(vg)}},yg=new b("");function bu(i="animations"){return wi("NgAsyncAnimations"),rn([{provide:De,useFactory:()=>new bg(l(T),l(Ii),l(L),i)},{provide:In,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ti=new b("ArticlesService");var ni=class i{articles=M([]);currentPage=M(1);saveArticles(n){this.articles.set(n)}savePage(n){this.currentPage.set(n)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};var yo=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-hero-section"]],decls:21,vars:0,consts:[[1,"hero","container"],[1,"hero__text"],[1,"hero__title"],[1,"hero__desc"],["href","#",1,"hero__link"],[1,"hero__photo-wrap"],[1,"hero__circle"],["src","img/photo_2026-03-05_12-14-57.jpg","alt","Nelsom"],[1,"hero__badge-wrap"],["viewBox","0 0 110 110","xmlns","http://www.w3.org/2000/svg",1,"hero__badge"],["id","badge-path","d","M55,55 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0","fill","none"],["href","#badge-path"],[1,"hero__badge-arrow"]],template:function(e,t){e&1&&(x(0,"section",0)(1,"div",1)(2,"h1",2),f(3,"Hello! I'm Nelsom,"),ae(4,"br"),f(5,"a photographer"),A(),x(6,"p",3),f(7," Showcase elit paratur nori lorem ipsum dolor praesent Lorem non tet molesti\xE9. Si dolor incidunt mollit nostrud Lorem dolore. Qui aliqua cupidatat adipisi nulla id aute arem do elit at quo aute. "),A(),x(8,"a",4),f(9,"More about me \u2192"),A()(),x(10,"div",5)(11,"div",6),ae(12,"img",7),A(),x(13,"div",8),Lt(),x(14,"svg",9),ae(15,"path",10),x(16,"text")(17,"textPath",11),f(18,"MY BLOGS \u2022 MY BLOGS \u2022 MY BLOGS \u2022"),A()()(),Vt(),x(19,"span",12),f(20,"\u2193"),A()()()())},styles:[".hero[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:48px;padding:72px 0}.hero__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:16px}.hero__desc[_ngcontent-%COMP%]{color:var(--color-gray);margin-bottom:24px}.hero__link[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:var(--color-black);border-bottom:1px solid var(--color-black);padding-bottom:2px;text-decoration:none;transition:color .25s ease}.hero__link[_ngcontent-%COMP%]:hover{color:var(--color-green);border-color:var(--color-green)}.hero__photo-wrap[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center}.hero__circle[_ngcontent-%COMP%]{width:300px;height:300px;border-radius:50%;overflow:hidden;background:var(--color-bg-card);display:flex;align-items:center;justify-content:center}.hero__circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hero__badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-10px;right:20px}.hero__badge[_ngcontent-%COMP%]{width:110px;height:110px;animation:spin 12s linear infinite}.hero__badge[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:inherit;fill:var(--color-black);letter-spacing:3px}.hero__badge-arrow[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 14px);right:calc(50% - 8px);font-size:18px;pointer-events:none}"]})};var Cg=(i,n)=>n.id;function wg(i,n){if(i&1&&(h(0,"li",4)(1,"div",6)(2,"span",7),f(3,"Product photography"),m(),h(4,"h3",8),f(5),m(),h(6,"p",9),f(7),m()(),Q(8,"div",10),m()),i&2){let e=n.$implicit;g(5),$(e.title),g(2),$(e.content)}}function xg(i,n){if(i&1&&(h(0,"section",0)(1,"h2",1),f(2,"Featured posts"),m(),h(3,"p",2),f(4,"Sint occaecat deserunt aliquo do occaecat at quis"),m(),h(5,"ul",3),Ee(6,wg,9,2,"li",4,Cg),m(),h(8,"a",5),f(9,"Browse all posts \u2192"),m()()),i&2){let e=S();g(6),Se(e.articles()),g(2),z("routerLink","/blog")}}var Co=class i{articles=Ht([]);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-featured-articles"]],inputs:{articles:[1,"articles"]},decls:1,vars:1,consts:[[1,"featured","container"],[1,"featured__title"],[1,"featured__sub"],[1,"featured__list"],[1,"featured__item"],[1,"btn-outline",3,"routerLink"],[1,"featured__info"],[1,"featured__category"],[1,"featured__name"],[1,"featured__desc"],[1,"featured__img-wrap"]],template:function(e,t){e&1&&V(0,xg,10,1,"section",0),e&2&&B(t.articles().length>0?0:-1)},dependencies:[tt],styles:[".featured[_ngcontent-%COMP%]{padding:48px 0;border-top:1px solid var(--color-border)}.featured__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:4px}.featured__sub[_ngcontent-%COMP%]{font-size:14px;color:var(--color-gray-light);margin-bottom:24px}.featured__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-bottom:24px}.featured__item[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;border-radius:12px;overflow:hidden;transition:transform .25s ease,box-shadow .25s ease;cursor:pointer}.featured__item[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 10px 30px #00000014}.featured__item[_ngcontent-%COMP%]:nth-child(odd){background-color:var(--color-bg-peach)}.featured__item[_ngcontent-%COMP%]:nth-child(2n){background-color:var(--color-bg-mint)}.featured__info[_ngcontent-%COMP%]{padding:36px 32px;display:flex;flex-direction:column;justify-content:center}.featured__category[_ngcontent-%COMP%]{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--color-gray-light);margin-bottom:8px}.featured__name[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:12px}.featured__desc[_ngcontent-%COMP%]{color:var(--color-gray)}.featured__img-wrap[_ngcontent-%COMP%]{background:var(--color-bg-card);min-height:200px;overflow:hidden;display:flex;align-items:center;justify-content:center}.btn-outline[_ngcontent-%COMP%]{display:inline-block;padding:9px 22px;font-size:13px;font-weight:500;color:var(--color-black);border:1px solid var(--color-black);border-radius:20px;text-decoration:none;transition:background .25s ease,color .25s ease}.btn-outline[_ngcontent-%COMP%]:hover{background:var(--color-black);color:var(--color-white)}"]})};function Dg(i,n){if(i&1&&(x(0,"li",3),f(1),A()),i&2){let e=n.$implicit;g(),$(e)}}var wo=class i{skills=["Photography","Graphic Design","Creativity","Brand Identity","Copy Writing","Team Working"];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-skills-section"]],decls:6,vars:0,consts:[[1,"skills","container"],[1,"skills__title"],[1,"skills__list"],[1,"skills__item"]],template:function(e,t){e&1&&(x(0,"section",0)(1,"h2",1),f(2,"My skills"),A(),x(3,"ul",2),Ee(4,Dg,2,1,"li",3,Er),A()()),e&2&&(g(4),Se(t.skills))},styles:[".skills[_ngcontent-%COMP%]{padding:48px 0;border-top:1px solid var(--color-border)}.skills__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:24px}.skills__list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:0;list-style:none}.skills__item[_ngcontent-%COMP%]{font-size:15px;font-weight:500;color:var(--color-black);padding:16px 0;border-bottom:1px solid var(--color-border)}"]})};var Eg=(i,n)=>n.role;function Sg(i,n){if(i&1&&(x(0,"li",5),ae(1,"div"),x(2,"div")(3,"span",6),f(4),A(),x(5,"span",7),f(6),A(),x(7,"p",8),f(8),A()()()),i&2){let e=n.$implicit;g(),zt("work__logo work__logo--"+e.color),g(3),$(e.role),g(2),$(e.company),g(2),$(e.desc)}}var xo=class i{workItems=[{color:"orange",role:"Graphic design",company:"Consectetur \xB7 2016\u20132017",desc:"Nostrud tempor ultem cum accepteur do ut proident deserunt anim consequat exercitadu"},{color:"purple",role:"Photographer",company:"Alienum \xB7 2017\u20132020",desc:"Ad do dolore ultem dolor et ea non dolor qui. Dolor amet tempor parteur officia paletur at"},{color:"teal",role:"Photographer's Assistant",company:"Adpliving \xB7 2016\u20132020",desc:"Ad do dolore ultem dolor et ea non dolor qui. Dolor amet tempor parteur officia paletur at"}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-work-section"]],decls:9,vars:0,consts:[[1,"work","container"],[1,"work__left"],[1,"work__title"],[1,"work__sub"],[1,"work__list"],[1,"work__item"],[1,"work__role"],[1,"work__company"],[1,"work__desc"]],template:function(e,t){e&1&&(x(0,"section",0)(1,"div",1)(2,"h2",2),f(3,"My work"),A(),x(4,"p",3),f(5,"Duis nisi do exercitation in iure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur iure"),A()(),x(6,"ul",4),Ee(7,Sg,9,5,"li",5,Eg),A()()),e&2&&(g(7),Se(t.workItems))},styles:['.work[_ngcontent-%COMP%]{padding:48px 0;border-top:1px solid var(--color-border);display:grid;grid-template-columns:1fr 2fr;gap:48px;align-items:start}.work__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:8px}.work__sub[_ngcontent-%COMP%]{font-size:14px;color:var(--color-gray-light)}.work__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;list-style:none}.work__item[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:flex-start;padding:20px 0;position:relative}.work__item[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;right:0;height:1px;background:var(--color-border)}.work__item[_ngcontent-%COMP%]:last-child:after{display:none}.work__logo[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;flex-shrink:0}.work__logo--orange[_ngcontent-%COMP%]{background:#ff6b35}.work__logo--purple[_ngcontent-%COMP%]{background:#9c42f5}.work__logo--teal[_ngcontent-%COMP%]{background:#00bcd4}.work__role[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:600;color:var(--color-green);margin-bottom:2px}.work__company[_ngcontent-%COMP%]{display:block;font-size:12px;color:var(--color-gray-light);margin-bottom:6px}.work__desc[_ngcontent-%COMP%]{font-size:13px;color:var(--color-gray)}']})};var Mg=(i,n)=>n.title;function Ag(i,n){if(i&1&&ae(0,"img",5),i&2){let e=S().$implicit;lt("src",e.img,ft)("alt",e.title)}}function Rg(i,n){if(i&1&&(x(0,"div",4),V(1,Ag,1,2,"img",5),x(2,"div",6)(3,"span"),f(4),A(),x(5,"p"),f(6),A()()()),i&2){let e=n.$implicit;g(),B(e.img?1:-1),g(3),$(e.title),g(2),$(e.desc)}}var Do=class i{hobbyItems=[{img:"img/mock img 1.png",title:"Portrait series",desc:"Captured in natural light"},{img:"img/mock img 2.png",title:"Branding",desc:"Brand identity design"},{title:"Urban shots",desc:"City street photography"},{title:"Nature",desc:"Landscapes & wildlife"}];static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-hobby-section"]],decls:8,vars:0,consts:[[1,"hobby","container"],[1,"hobby__title"],[1,"hobby__sub"],[1,"hobby__grid"],[1,"hobby__card"],[3,"src","alt"],[1,"hobby__overlay"]],template:function(e,t){e&1&&(x(0,"section",0)(1,"h2",1),f(2,"Hobby projects"),A(),x(3,"p",2),f(4,"Duis nisi do exercitation in iure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur iure labore ad ea."),A(),x(5,"div",3),Ee(6,Rg,7,3,"div",4,Mg),A()()),e&2&&(g(6),Se(t.hobbyItems))},styles:[".hobby[_ngcontent-%COMP%]{padding:48px 0;border-top:1px solid var(--color-border)}.hobby__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:4px}.hobby__sub[_ngcontent-%COMP%]{font-size:14px;color:var(--color-gray-light);margin-bottom:24px}.hobby__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:auto auto;gap:12px}.hobby__card[_ngcontent-%COMP%]{position:relative;border-radius:8px;overflow:hidden;background:var(--color-bg-card);min-height:180px;cursor:pointer}.hobby__card[_ngcontent-%COMP%]:first-child{grid-column:span 1;grid-row:span 2;min-height:380px}.hobby__card[_ngcontent-%COMP%]:nth-child(2){grid-column:span 1;grid-row:span 2;min-height:380px}.hobby__card[_ngcontent-%COMP%]:nth-child(3), .hobby__card[_ngcontent-%COMP%]:nth-child(4){grid-column:span 2;min-height:180px}.hobby__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}.hobby__card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05)}.hobby__overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0000008c;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:24px;opacity:0;transition:opacity .35s ease}.hobby__overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:var(--color-white);text-align:center}.hobby__overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#fffc;text-align:center}.hobby__card[_ngcontent-%COMP%]:hover   .hobby__overlay[_ngcontent-%COMP%]{opacity:1}"]})};var Eo=class i{service=l(ti);store=l(ni);titleService=l($t);featuredArticles=he(()=>this.store.articles().slice(0,2));ngOnInit(){this.titleService.setTitle("Home | Blog App"),this.store.articles().length===0&&this.service.getArticles(1).subscribe(n=>{this.store.saveArticles(n.articles)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-home"]],decls:6,vars:1,consts:[[3,"articles"]],template:function(e,t){e&1&&(h(0,"main"),Q(1,"app-hero-section")(2,"app-featured-articles",0)(3,"app-skills-section")(4,"app-work-section")(5,"app-hobby-section"),m()),e&2&&(g(2),z("articles",t.featuredArticles()))},dependencies:[yo,Co,wo,xo,Do],encapsulation:2})};var So=new WeakMap,it=(()=>{class i{_appRef;_injector=l(ne);_environmentInjector=l(ge);load(e){let t=this._appRef=this._appRef||this._injector.get(Et),r=So.get(t);r||(r={loaders:new Set,refs:[]},So.set(t,r),t.onDestroy(()=>{So.get(t)?.refs.forEach(o=>o.destroy()),So.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Mr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var yu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Mo;function Ig(){if(Mo===void 0&&(Mo=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Mo=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Mo}function ii(i){return Ig()?.createHTML(i)||i}function Cu(i){return Error(`Unable to find icon with the name "${i}"`)}function Og(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function wu(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function xu(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Ot=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},Eu=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Ot(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(He.HTML,r);if(!a)throw xu(r);let s=ii(a);return this._addSvgIconConfig(e,t,new Ot("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Ot(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(He.HTML,t);if(!o)throw xu(t);let a=ii(o);return this._addSvgIconSetConfig(e,new Ot("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(He.RESOURCE_URL,e);if(!t)throw wu(e);let r=this._cachedIconsByUrl.get(t);return r?y(Ao(r)):this._loadSvgIconFromConfig(new Ot(e,null)).pipe(ve(o=>this._cachedIconsByUrl.set(t,o)),I(o=>Ao(o)))}getNamedSvgIcon(e,t=""){let r=Du(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):wn(Cu(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(Ao(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(I(t=>Ao(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return y(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Sn(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(He.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return Dn(o).pipe(I(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Cu(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ve(t=>e.svgText=t),I(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(ve(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(ii("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(ii("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw Og();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(He.RESOURCE_URL,t);if(!a)throw wu(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(I(d=>ii(d)),Mn(()=>this._inProgressUrlFetches.delete(a)),lc());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Du(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return Fg(o)?new Ot(o.url,null,o.options):new Ot(o,null)}}static \u0275fac=function(t){return new(t||i)(E(bt,8),E(vs),E(T,8),E(on))};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ao(i){return i.cloneNode(!0)}function Du(i,n){return i+":"+n}function Fg(i){return!!(i.url&&i.options)}var Tg=new b("cdk-dir-doc",{providedIn:"root",factory:()=>l(T)}),kg=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Su(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?kg.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var fn=(()=>{class i{get value(){return this.valueSignal()}valueSignal=M("ltr");change=new re;constructor(){let e=l(Tg,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Su(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var me=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({})}return i})();var Pg=["*"],Ng=new b("MAT_ICON_DEFAULT_OPTIONS"),Lg=new b("mat-icon-location",{providedIn:"root",factory:()=>{let i=l(T),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Mu=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Vg=Mu.map(i=>`[${i}]`).join(", "),Bg=/^url\(['"]?#(.*?)['"]?\)$/,Zt=(()=>{class i{_elementRef=l(q);_iconRegistry=l(Eu);_location=l(Lg);_errorHandler=l(on);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Re.EMPTY;constructor(){let e=l(new Sr("aria-hidden"),{optional:!0}),t=l(Ng,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Vg),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Mu.forEach(a=>{let s=t[o],c=s.getAttribute(a),d=c?c.match(Bg):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Xe(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(xe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),zt(r.color?"mat-"+r.color:""),Y("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ie],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Pg,decls:1,vars:0,template:function(t,r){t&1&&(Me(),te(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Kt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[me]})}return i})();var jg=i=>["/blog",i];function Ug(i,n){if(i&1&&Q(0,"img",5),i&2){let e=S();z("src",e.article().image,ft)("alt",e.article().title)}}function zg(i,n){i&1&&Q(0,"div",6)}function Hg(i,n){if(i&1&&(h(0,"span",8),f(1),m()),i&2){let e=S();g(),$(e.article().categoryName)}}var Io=class i{article=Ht.required();deleteArticle=Vn();editArticle=Vn();onDelete(){this.deleteArticle.emit(this.article().id)}onEdit(){this.editArticle.emit(this.article())}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-article"]],inputs:{article:[1,"article"]},outputs:{deleteArticle:"deleteArticle",editArticle:"editArticle"},decls:16,vars:7,consts:[[1,"blog-card"],[1,"blog-card__actions"],["title","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",1,"blog-card__edit",3,"click"],["title","\u0423\u0434\u0430\u043B\u0438\u0442\u044C",1,"blog-card__delete",3,"click"],[1,"blog-card__link",3,"routerLink"],[1,"blog-card__img","blog-card__img--real",3,"src","alt"],[1,"blog-card__img"],[1,"blog-card__title"],[1,"blog-card__category"],[1,"blog-card__date"]],template:function(e,t){e&1&&(h(0,"li",0)(1,"div",1)(2,"button",2),H("click",function(){return t.onEdit()}),h(3,"mat-icon"),f(4,"edit"),m()(),h(5,"button",3),H("click",function(){return t.onDelete()}),h(6,"mat-icon"),f(7,"close"),m()()(),h(8,"a",4),V(9,Ug,1,2,"img",5)(10,zg,1,0,"div",6),h(11,"h3",7),f(12),m(),V(13,Hg,2,1,"span",8),h(14,"span",9),f(15),m()()()),e&2&&(g(8),z("routerLink",Tc(5,jg,t.article().id)),g(),B(t.article().image?9:10),g(3),$(t.article().title),g(),B(t.article().categoryName?13:-1),g(2),$(t.article().date))},dependencies:[tt,Kt,Zt],styles:[".blog-card[_ngcontent-%COMP%]{position:relative;background:var(--color-bg-card);border-radius:12px;padding:16px;list-style:none}.blog-card__actions[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;display:flex;gap:4px}.blog-card__link[_ngcontent-%COMP%]{display:block;text-decoration:none;color:inherit}.blog-card__edit[_ngcontent-%COMP%], .blog-card__delete[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;border-radius:6px;background:transparent;transition:background .2s;cursor:pointer}.blog-card__edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .blog-card__delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px}.blog-card__edit[_ngcontent-%COMP%]{color:var(--color-gray);transition:background .2s,color .2s}.blog-card__edit[_ngcontent-%COMP%]:hover{background:#00000012;color:var(--color-black)}.blog-card__delete[_ngcontent-%COMP%]{color:var(--color-gray);transition:background .2s,color .2s}.blog-card__delete[_ngcontent-%COMP%]:hover{background:#e53e3e1a;color:#e53e3e}.blog-card__img[_ngcontent-%COMP%]{width:100%;height:140px;background:#d5d5d5;border-radius:8px;margin-top:8px;margin-bottom:12px}.blog-card__img--real[_ngcontent-%COMP%]{object-fit:cover}.blog-card__category[_ngcontent-%COMP%]{display:inline-block;font-size:11px;font-weight:500;color:var(--color-green);background:var(--color-bg-mint);border-radius:4px;padding:2px 8px;margin-bottom:4px}.blog-card__title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin-bottom:8px;color:var(--color-black);line-height:1.4;padding-right:64px}.blog-card__date[_ngcontent-%COMP%]{font-size:12px;color:var(--color-gray-light)}"]})};var Pu=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(J(_e),J(q))};static \u0275dir=O({type:i})}return i})(),$g=(()=>{class i extends Pu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(i)))(r||i)}})();static \u0275dir=O({type:i,features:[Ne]})}return i})(),jo=new b("");var Gg={provide:jo,useExisting:Nt(()=>li),multi:!0};function Wg(){let i=Ke()?Ke().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var qg=new b(""),li=(()=>{class i extends Pu{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Wg())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(J(_e),J(q),J(qg,8))};static \u0275dir=O({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&H("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Oe([Gg]),Ne]})}return i})();function al(i){return i==null||sl(i)===0}function sl(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var ll=new b(""),cl=new b(""),Yg=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,rt=class{static min(n){return Xg(n)}static max(n){return Zg(n)}static required(n){return Kg(n)}static requiredTrue(n){return Qg(n)}static email(n){return Jg(n)}static minLength(n){return e_(n)}static maxLength(n){return t_(n)}static pattern(n){return n_(n)}static nullValidator(n){return Nu()}static compose(n){return zu(n)}static composeAsync(n){return Hu(n)}};function Xg(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function Zg(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function Kg(i){return al(i.value)?{required:!0}:null}function Qg(i){return i.value===!0?null:{required:!0}}function Jg(i){return al(i.value)||Yg.test(i.value)?null:{email:!0}}function e_(i){return n=>{let e=n.value?.length??sl(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function t_(i){return n=>{let e=n.value?.length??sl(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function n_(i){if(!i)return Nu;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(al(t.value))return null;let r=t.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Nu(i){return null}function Lu(i){return i!=null}function Vu(i){return kn(i)?we(i):i}function Bu(i){let n={};return i.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function ju(i,n){return n.map(e=>e(i))}function i_(i){return!i.validate}function Uu(i){return i.map(n=>i_(n)?n:e=>n.validate(e))}function zu(i){if(!i)return null;let n=i.filter(Lu);return n.length==0?null:function(e){return Bu(ju(e,n))}}function dl(i){return i!=null?zu(Uu(i)):null}function Hu(i){if(!i)return null;let n=i.filter(Lu);return n.length==0?null:function(e){let t=ju(e,n).map(Vu);return Dn(t).pipe(I(Bu))}}function ul(i){return i!=null?Hu(Uu(i)):null}function Au(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function $u(i){return i._rawValidators}function Gu(i){return i._rawAsyncValidators}function nl(i){return i?Array.isArray(i)?i:[i]:[]}function To(i,n){return Array.isArray(i)?i.includes(n):i===n}function Ru(i,n){let e=nl(n);return nl(i).forEach(r=>{To(e,r)||e.push(r)}),e}function Iu(i,n){return nl(n).filter(e=>!To(i,e))}var ko=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=dl(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ul(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Qt=class extends ko{name;get formDirective(){return null}get path(){return null}},pn=class extends ko{_parent=null;name=null;valueAccessor=null},Po=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Uo=(()=>{class i extends Po{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(J(pn,2))};static \u0275dir=O({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&Y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ne]})}return i})(),zo=(()=>{class i extends Po{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(J(Qt,10))};static \u0275dir=O({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&Y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ne]})}return i})();var Ki="VALID",Oo="INVALID",ri="PENDING",Qi="DISABLED",Jt=class{},No=class extends Jt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},er=class extends Jt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},tr=class extends Jt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},oi=class extends Jt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Lo=class extends Jt{source;constructor(n){super(),this.source=n}},nr=class extends Jt{source;constructor(n){super(),this.source=n}};function hl(i){return(Ho(i)?i.validators:i)||null}function r_(i){return Array.isArray(i)?dl(i):i||null}function ml(i,n){return(Ho(n)?n.asyncValidators:i)||null}function o_(i){return Array.isArray(i)?ul(i):i||null}function Ho(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Wu(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new P(1e3,"");if(!t[e])throw new P(1001,"")}function qu(i,n,e){i._forEachChild((t,r)=>{if(e[r]===void 0)throw new P(1002,"")})}var ai=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Z(this.statusReactive)}set status(n){Z(()=>this.statusReactive.set(n))}_status=he(()=>this.statusReactive());statusReactive=M(void 0);get valid(){return this.status===Ki}get invalid(){return this.status===Oo}get pending(){return this.status===ri}get disabled(){return this.status===Qi}get enabled(){return this.status!==Qi}errors;get pristine(){return Z(this.pristineReactive)}set pristine(n){Z(()=>this.pristineReactive.set(n))}_pristine=he(()=>this.pristineReactive());pristineReactive=M(!0);get dirty(){return!this.pristine}get touched(){return Z(this.touchedReactive)}set touched(n){Z(()=>this.touchedReactive.set(n))}_touched=he(()=>this.touchedReactive());touchedReactive=M(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ru(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ru(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Iu(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Iu(n,this._rawAsyncValidators))}hasValidator(n){return To(this._rawValidators,n)}hasAsyncValidator(n){return To(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(_({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new tr(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new tr(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(_({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new er(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new er(!0,t))}markAsPending(n={}){this.status=ri;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new oi(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Qi,this.errors=null,this._forEachChild(r=>{r.disable(G(_({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new No(this.value,t)),this._events.next(new oi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ki,this._forEachChild(t=>{t.enable(G(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ki||this.status===ri)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new No(this.value,e)),this._events.next(new oi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Qi:Ki}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ri,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Vu(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new oi(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new re,this.statusChanges=new re}_calculateStatus(){return this._allControlsDisabled()?Qi:this.errors?Oo:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ri)?ri:this._anyControlsHaveStatus(Oo)?Oo:Ki}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new er(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new tr(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ho(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=r_(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=o_(this._rawAsyncValidators)}},si=class extends ai{constructor(n,e,t){super(hl(e),ml(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){qu(this,!0,n),Object.keys(n).forEach(t=>{Wu(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let r=this.controls[t];r&&r.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,r)=>{t.reset(n?n[r]:null,G(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new nr(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var il=class extends si{};var fl=new b("",{factory:()=>pl}),pl="always";function a_(i,n){return[...n.path,i]}function rl(i,n,e=pl){gl(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),l_(i,n),d_(i,n),c_(i,n),s_(i,n)}function Ou(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Bo(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Vo(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function s_(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function gl(i,n){let e=$u(i);n.validator!==null?i.setValidators(Au(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=Gu(i);n.asyncValidator!==null?i.setAsyncValidators(Au(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();Vo(n._rawValidators,r),Vo(n._rawAsyncValidators,r)}function Bo(i,n){let e=!1;if(i!==null){if(n.validator!==null){let r=$u(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(n.asyncValidator!==null){let r=Gu(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let t=()=>{};return Vo(n._rawValidators,t),Vo(n._rawAsyncValidators,t),e}function l_(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Yu(i,n)})}function c_(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Yu(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function Yu(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function d_(i,n){let e=(t,r)=>{n.valueAccessor.writeValue(t),r&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Xu(i,n){i==null,gl(i,n)}function u_(i,n){return Bo(i,n)}function h_(i,n){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function m_(i){return Object.getPrototypeOf(i.constructor)===$g}function Zu(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function f_(i,n){if(!n)return null;Array.isArray(n);let e,t,r;return n.forEach(o=>{o.constructor===li?e=o:m_(o)?t=o:r=o}),r||t||e||null}function p_(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var g_={provide:Qt,useExisting:Nt(()=>_l)},Ji=Promise.resolve(),_l=(()=>{class i extends Qt{callSetDisabledState;get submitted(){return Z(this.submittedReactive)}_submitted=he(()=>this.submittedReactive());submittedReactive=M(!1);_directives=new Set;form;ngSubmit=new re;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new si({},dl(e),ul(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ji.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),rl(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ji.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ji.then(()=>{let t=this._findContainer(e.path),r=new si({});Xu(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ji.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Ji.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Zu(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Lo(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(J(ll,10),J(cl,10),J(fl,8))};static \u0275dir=O({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&H("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([g_]),Ne]})}return i})();function Fu(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function Tu(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Fo=class extends ai{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(hl(e),ml(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ho(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Tu(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new nr(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Fu(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Fu(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Tu(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var __=i=>i instanceof Fo;var $o=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var ol=class extends ai{constructor(n,e,t){super(hl(e),ml(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,t={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(n,e={}){let t=this._adjustIndex(n);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){qu(this,!1,n),n.forEach((t,r)=>{Wu(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(n.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((t,r)=>{t.reset(n[r],G(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new nr(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,t)=>{n(e,t)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var v_=(()=>{class i extends Qt{callSetDisabledState;get submitted(){return Z(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=he(()=>this._submittedReactive());_submittedReactive=M(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Bo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return rl(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Ou(e.control||null,e,!1),p_(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Zu(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Lo(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Ou(t||null,e),__(r)&&(rl(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Xu(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&u_(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){gl(this.form,this),this._oldForm&&Bo(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||i)(J(ll,10),J(cl,10),J(fl,8))};static \u0275dir=O({type:i,features:[Ne,Ie]})}return i})();var Ku=new b("");var b_={provide:pn,useExisting:Nt(()=>ir)},ir=(()=>{class i extends pn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new re;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=f_(this,o)}ngOnChanges(e){this._added||this._setUpControl(),h_(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return a_(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||i)(J(Qt,13),J(ll,10),J(cl,10),J(jo,10),J(Ku,8))};static \u0275dir=O({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Oe([b_]),Ne,Ie]})}return i})();var y_={provide:Qt,useExisting:Nt(()=>gn)},gn=(()=>{class i extends v_{form=null;ngSubmit=new re;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(i)))(r||i)}})();static \u0275dir=O({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&H("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([y_]),Ne]})}return i})();var C_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({})}return i})();function ku(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Go=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return ku(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new si(r,o)}record(e,t=null){let r=this._reduceControls(e);return new il(r,t)}control(e,t,r){let o={};return this.useNonNullable?(ku(t)?o=t:(o.validators=t,o.asyncValidators=r),new Fo(e,G(_({},o),{nonNullable:!0}))):new Fo(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new ol(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof Fo)return e;if(e instanceof ai)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Wo=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Ku,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:fl,useValue:e.callSetDisabledState??pl}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[C_]})}return i})();function rr(i){return i.buttons===0||i.detail===0}function or(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var vl;function Ju(){if(vl==null){let i=typeof document<"u"?document.head:null;vl=!!(i&&(i.createShadowRoot||i.attachShadow))}return vl}function bl(i){if(Ju()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function yl(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function ke(i){return i.composedPath?i.composedPath()[0]:i.target}var Cl;try{Cl=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Cl=!1}var ce=(()=>{class i{_platformId=l(Rn);isBrowser=this._platformId?Yc(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Cl)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ar;function eh(){if(ar==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ar=!0}))}finally{ar=ar||!1}return ar}function ci(i){return eh()?i:!!i.capture}function qe(i){return i instanceof q?i.nativeElement:i}var th=new b("cdk-input-modality-detector-options"),nh={ignoreKeys:[18,17,224,91,16]},ih=650,wl={passive:!0,capture:!0},rh=(()=>{class i{_platform=l(ce);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new je(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ke(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ih||(this._modality.next(rr(e)?"keyboard":"mouse"),this._mostRecentTarget=ke(e))};_onTouchstart=e=>{if(or(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ke(e)};constructor(){let e=l(L),t=l(T),r=l(th,{optional:!0});if(this._options=_(_({},nh),r),this.modalityDetected=this._modality.pipe(br(1)),this.modalityChanged=this.modalityDetected.pipe(ka()),this._platform.isBrowser){let o=l(De).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,wl),o.listen(t,"mousedown",this._onMousedown,wl),o.listen(t,"touchstart",this._onTouchstart,wl)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),sr=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(sr||{}),oh=new b("cdk-focus-monitor-default-options"),qo=ci({passive:!0,capture:!0}),xl=(()=>{class i{_ngZone=l(L);_platform=l(ce);_inputModalityDetector=l(rh);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(T);_stopInputModalityDetector=new R;constructor(){let e=l(oh,{optional:!0});this._detectionMode=e?.detectionMode||sr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ke(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=qe(e);if(!this._platform.isBrowser||r.nodeType!==1)return y();let o=bl(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new R,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=qe(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=qe(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===sr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===sr.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?ih:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=ke(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,qo),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,qo)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ze(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,qo),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,qo),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ft(i){return Array.isArray(i)?i:[i]}var ah=new Set,_n,Yo=(()=>{class i{_platform=l(ce);_nonce=l(Ci,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):x_}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&w_(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function w_(i,n){if(!ah.has(i))try{_n||(_n=document.createElement("style"),n&&_n.setAttribute("nonce",n),_n.setAttribute("type","text/css"),document.head.appendChild(_n)),_n.sheet&&(_n.sheet.insertRule(`@media ${i} {body{ }}`,0),ah.add(i))}catch(e){console.error(e)}}function x_(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Dl=(()=>{class i{_mediaMatcher=l(Yo);_zone=l(L);_queries=new Map;_destroySubject=new R;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return sh(Ft(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=sh(Ft(e)).map(a=>this._registerQuery(a).observable),o=vi(r);return o=_r(o.pipe(Xe(1)),o.pipe(br(1),vr(0))),o.pipe(I(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Be(a=>{let s=c=>this._zone.run(()=>a.next(c));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(st(t),I(({matches:a})=>({query:e,matches:a})),ze(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function sh(i){return i.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var D_=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var lh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({providers:[D_]})}return i})();var E_=200,Xo=class{_letterKeyStream=new R;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new R;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:E_;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(ve(e=>this._pressedLetters.push(e)),vr(n),ue(()=>this._pressedLetters.length>0),I(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function en(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Zo=class{_items;_activeItemIndex=M(-1);_activeItem=M(null);_wrap=!1;_typeaheadSubscription=Re.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Ba?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):jt(n)&&(this._effectRef=xt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new R;change=new R;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Xo(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||en(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return jt(this._items)?this._items():this._items instanceof Ba?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var lr=class extends Zo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Sl={},Ve=class i{_appId=l(yi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Sl.hasOwnProperty(n)||(Sl[n]=0),`${n}${e?i._infix+"-":""}${Sl[n]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};var uh=" ";function Ml(i,n,e){let t=hh(i,n);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(uh)))}function Ko(i,n,e){let t=hh(i,n);e=e.trim();let r=t.filter(o=>o!==e);r.length?i.setAttribute(n,r.join(uh)):i.removeAttribute(n)}function hh(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var vn;function mh(){if(vn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return vn=!1,vn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)vn=!0;else{let i=Element.prototype.scrollTo;i?vn=!/\{\s*\[native code\]\s*\}/.test(i.toString()):vn=!1}}return vn}function Al(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var di,fh=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Rl(){if(di)return di;if(typeof document!="object"||!document)return di=new Set(fh),di;let i=document.createElement("input");return di=new Set(fh.filter(n=>(i.setAttribute("type",n),i.type===n))),di}var ph={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var S_=new b("MATERIAL_ANIMATIONS"),gh=null;function M_(){return l(S_,{optional:!0})?.animationsDisabled||l(In,{optional:!0})==="NoopAnimations"?"di-disabled":(gh??=l(Yo).matchMedia("(prefers-reduced-motion)").matches,gh?"reduced-motion":"enabled")}function Ye(){return M_()!=="enabled"}function pe(i){return i==null?"":typeof i=="string"?i:`${i}px`}function ui(i){return i!=null&&`${i}`!="false"}var ot=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(ot||{}),Il=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ot.HIDDEN;constructor(n,e,t,r=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},vh=ci({passive:!0,capture:!0}),Ol=class{_events=new Map;addHandler(n,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,vh)})}removeHandler(n,e,t){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,vh)))}_delegateEventHandler=n=>{let e=ke(n);e&&this._events.get(n.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(n))})}},cr={enterDuration:225,exitDuration:150},A_=800,bh=ci({passive:!0,capture:!0}),yh=["mousedown","touchstart"],Ch=["mouseup","mouseleave","touchend","touchcancel"],R_=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),dr=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ol;constructor(n,e,t,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=qe(t)),o&&o.get(it).load(R_)}fadeInRipple(n,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},cr),t.animation);t.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||I_(n,e,r),s=n-r.left,c=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let v=window.getComputedStyle(u),D=v.transitionProperty,K=v.transitionDuration,W=D==="none"||K==="0s"||K==="0s, 0s"||r.width===0&&r.height===0,F=new Il(this,u,t,W);u.style.transform="scale3d(1, 1, 1)",F.state=ot.FADING_IN,t.persistent||(this._mostRecentTransientRipple=F);let N=null;return!W&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let X=()=>{N&&(N.fallbackTimer=null),clearTimeout(Ae),this._finishRippleTransition(F)},de=()=>this._destroyRipple(F),Ae=setTimeout(de,d+100);u.addEventListener("transitionend",X),u.addEventListener("transitioncancel",de),N={onTransitionEnd:X,onTransitionCancel:de,fallbackTimer:Ae}}),this._activeRipples.set(F,N),(W||!d)&&this._finishRippleTransition(F),F}fadeOutRipple(n){if(n.state===ot.FADING_OUT||n.state===ot.HIDDEN)return;let e=n.element,t=_(_({},cr),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=ot.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=qe(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,yh.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ch.forEach(e=>{this._triggerElement.addEventListener(e,this,bh)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===ot.FADING_IN?this._startFadeOutTransition(n):n.state===ot.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=ot.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=ot.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=rr(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+A_;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!or(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===ot.VISIBLE||n.config.terminateOnPointerUp&&n.state===ot.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(yh.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Ch.forEach(e=>n.removeEventListener(e,this,bh)),this._pointerUpEventsRegistered=!1))}};function I_(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+r*r)}var Fl=new b("mat-ripple-global-options"),wh=(()=>{class i{_elementRef=l(q);_animationsDisabled=Ye();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(L),t=l(ce),r=l(Fl,{optional:!0}),o=l(ne);this._globalOptions=r||{},this._rippleRenderer=new dr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&Y("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var xh=(()=>{class i{_animationsDisabled=Ye();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&Y("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Qo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var F_=["text"],T_=[[["mat-icon"]],"*"],k_=["mat-icon","*"];function P_(i,n){if(i&1&&Q(0,"mat-pseudo-checkbox",1),i&2){let e=S();z("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function N_(i,n){if(i&1&&Q(0,"mat-pseudo-checkbox",3),i&2){let e=S();z("disabled",e.disabled)}}function L_(i,n){if(i&1&&(h(0,"span",4),f(1),m()),i&2){let e=S();g(),Nn("(",e.group.label,")")}}var kl=new b("MAT_OPTION_PARENT_COMPONENT"),Pl=new b("MatOptgroup");var ur=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},hi=(()=>{class i{_element=l(q);_changeDetectorRef=l(Fe);_parent=l(kl,{optional:!0});group=l(Pl,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(Ve).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=M(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new re;_text;_stateChanges=new R;constructor(){let e=l(it);e.load(Qo),e.load(yu),this._signalDisableRipple=!!this._parent&&jt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!en(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ur(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Ut(F_,7),t&2){let o;se(o=le())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&H("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(lt("id",r.id),xe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),Y("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ie]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:k_,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(Me(T_),V(0,P_,1,2,"mat-pseudo-checkbox",1),te(1),h(2,"span",2,0),te(4,1),m(),V(5,N_,1,1,"mat-pseudo-checkbox",3),V(6,L_,2,1,"span",4),Q(7,"div",5)),t&2&&(B(r.multiple?0:-1),g(5),B(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),g(),B(r.group&&r.group._inert?6:-1),g(),z("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[xh,wh],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function Dh(i,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Eh(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var V_=20,Nl=(()=>{class i{_ngZone=l(L);_platform=l(ce);_renderer=l(De).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=V_){return this._platform.isBrowser?new Be(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ta(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ue(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=qe(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var B_=20,bn=(()=>{class i{_platform=l(ce);_listeners;_viewportSize=null;_change=new R;_document=l(T);constructor(){let e=l(L),t=l(De).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=B_){return e>0?this._change.pipe(Ta(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Jo=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({})}return i})(),Ll=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[me,Jo,me,Jo]})}return i})();var hr=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Vl=class extends hr{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},mi=class extends hr{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Bl=class extends hr{element;constructor(n){super(),this.element=n instanceof q?n.nativeElement:n}},jl=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Vl)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof mi)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Bl)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ea=class extends jl{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(Ua,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=n.injector||this._defaultInjector||ne.NULL,o=r.get(ge,t.injector);e=Mr(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Sh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({})}return i})();var Mh=mh();function kh(i){return new ta(i.get(bn),i.get(T))}var ta=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=pe(-this._previousScrollPosition.left),n.style.top=pe(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Mh&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Mh&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Ph(i,n){return new na(i.get(Nl),i.get(L),i.get(bn),n)}var na=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ue(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var mr=class{enable(){}disable(){}attach(){}};function Ul(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,a=i.left>e.right;return t||r||o||a})}function Ah(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,a=i.right>e.right;return t||r||o||a})}function la(i,n){return new ia(i.get(Nl),i.get(bn),i.get(L),n)}var ia=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();Ul(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Nh=(()=>{class i{_injector=l(ne);constructor(){}noop=()=>new mr;close=e=>Ph(this._injector,e);block=()=>kh(this._injector);reposition=e=>la(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),fi=class{positionStrategy;scrollStrategy=new mr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var ra=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Lh=(()=>{class i{_attachedOverlays=[];_document=l(T);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Vh=(()=>{class i extends Lh{_ngZone=l(L);_renderer=l(De).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(i)))(r||i)}})();static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Bh=(()=>{class i extends Lh{_platform=l(ce);_ngZone=l(L);_renderer=l(De).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ke(e)};_clickListener=e=>{let t=ke(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(Rh(s.overlayElement,t)||Rh(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=mt(i)))(r||i)}})();static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Rh(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var jh=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Uh=(()=>{class i{_platform=l(ce);_containerElement;_document=l(T);_styleLoader=l(it);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Al()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Al()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(jh)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),zl=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Hl(i){return i&&i.nodeType===1}var oa=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges=Re.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(n,e,t,r,o,a,s,c,d,u=!1,v,D){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=v,this._renderer=D,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=pt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=pe(this._config.width),n.height=pe(this._config.height),n.minWidth=pe(this._config.minWidth),n.minHeight=pe(this._config.minHeight),n.maxWidth=pe(this._config.maxWidth),n.maxHeight=pe(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Hl(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new zl(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let r=Ft(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=pt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Ih="cdk-overlay-connected-position-bounding-box",j_=/([A-Za-z%]+)$/;function ca(i,n){return new aa(n,i.get(bn),i.get(T),i.get(ce),i.get(Uh))}var aa=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=Re.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Ih),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),d=this._getOverlayPoint(c,e,s),u=this._getOverlayFit(d,e,t,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,d,t)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>c&&(c=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&yn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ih),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof q?this._origin.nativeElement:Hl(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,t,r){let o=Fh(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),d=this._getOffset(r,"y");c&&(a+=c),d&&(s+=d);let u=0-a,v=a+o.width-t.width,D=0-s,K=s+o.height-t.height,W=this._subtractOverflows(o.width,u,v),F=this._subtractOverflows(o.height,D,K),N=W*F;return{visibleArea:N,isCompletelyWithinViewport:o.width*o.height===N,fitsInViewportVertically:F===o.height,fitsInViewportHorizontally:W==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=Oh(this._overlayRef.getConfig().minHeight),s=Oh(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,d=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&d}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Fh(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-t.top-n.y,0),d=Math.max(o.left-t.left-n.x,0),u=0,v=0;return r.width<=o.width?u=d||-a:u=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?v=c||-s:v=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:u,y:v},{x:n.x+u,y:n.y+v}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!U_(this._lastScrollVisibility,t)){let r=new ra(n,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let K=Math.min(t.bottom-n.y+t.top,n.y),W=this._lastBoundingBoxSize.height;o=K*2,a=n.y-K,o>W&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-W/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,v,D;if(d)D=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(c)v=n.x,u=t.right-n.x-this._getViewportMarginEnd();else{let K=Math.min(t.right-n.x+t.left,n.x),W=this._lastBoundingBoxSize.width;u=K*2,v=n.x-K,u>W&&!this._isInitialRender&&!this._growAfterOpen&&(v=n.x-W/2)}return{top:a,left:v,bottom:s,right:D,width:u,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=pe(t.width),r.height=pe(t.height),r.top=pe(t.top)||"auto",r.bottom=pe(t.bottom)||"auto",r.left=pe(t.left)||"auto",r.right=pe(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=pe(o)),a&&(r.maxWidth=pe(a))}this._lastBoundingBoxSize=t,yn(this._boundingBox.style,r)}_resetBoundingBoxStyles(){yn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){yn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();yn(t,this._getExactOverlayY(e,n,u)),yn(t,this._getExactOverlayX(e,n,u))}else t.position="static";let s="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=pe(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=pe(a.maxWidth):o&&(t.maxWidth="")),yn(this._pane.style,t)}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=pe(o.y);return r}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=pe(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ah(n,t),isOriginOutsideView:Ul(n,t),isOverlayClipped:Ah(e,t),isOverlayOutsideView:Ul(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ft(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof q)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function yn(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i}function Oh(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(j_);return!e||e==="px"?parseFloat(n):null}return i||null}function Fh(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function U_(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Th="cdk-global-overlay-wrapper";function zh(i){return new sa}var sa=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Th),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,v=this._xOffset,D=this._overlayRef.getConfig().direction==="rtl",K="",W="",F="";c?F="flex-start":u==="center"?(F="center",D?W=v:K=v):D?u==="left"||u==="end"?(F="flex-end",K=v):(u==="right"||u==="start")&&(F="flex-start",W=v):u==="left"||u==="start"?(F="flex-start",K=v):(u==="right"||u==="end")&&(F="flex-end",W=v),n.position=this._cssPosition,n.marginLeft=c?"0":K,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":W,e.justifyContent=F,e.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Th),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Hh=(()=>{class i{_injector=l(ne);constructor(){}global(){return zh()}flexibleConnectedTo(e){return ca(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$h=new b("OVERLAY_DEFAULT_CONFIG");function da(i,n){i.get(it).load(jh);let e=i.get(Uh),t=i.get(T),r=i.get(Ve),o=i.get(Et),a=i.get(fn),s=i.get(_e,null,{optional:!0})||i.get(De).createRenderer(null,null),c=new fi(n),d=i.get($h,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=n?.usePopover??d:c.usePopover=!1;let u=t.createElement("div"),v=t.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),v.appendChild(u),c.usePopover&&(v.setAttribute("popover","manual"),v.classList.add("cdk-overlay-popover"));let D=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Hl(D)?D.after(v):D?.type==="parent"?D.element.appendChild(v):e.getContainerElement().appendChild(v),new oa(new ea(u,o,i),v,u,c,i.get(L),i.get(Vh),t,i.get(gt),i.get(Bh),n?.disableAnimations??i.get(In,null,{optional:!0})==="NoopAnimations",i.get(ge),s)}var Gh=(()=>{class i{scrollStrategies=l(Nh);_positionBuilder=l(Hh);_injector=l(ne);constructor(){}create(e){return da(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var $l=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({providers:[Gh],imports:[me,Sh,Ll,Ll]})}return i})();var Gl=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Be(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ue(e=>e.some(t=>t.target===n)),La({bufferSize:1,refCount:!0}),ze(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Wh=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=l(L);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Gl(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var z_=["notch"],H_=["matFormFieldNotchedOutline",""],$_=["*"],qh=["iconPrefixContainer"],Yh=["textPrefixContainer"],Xh=["iconSuffixContainer"],Zh=["textSuffixContainer"],G_=["textField"],W_=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],q_=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Y_(i,n){i&1&&Q(0,"span",21)}function X_(i,n){if(i&1&&(h(0,"label",20),te(1,1),V(2,Y_,1,0,"span",21),m()),i&2){let e=S(2);z("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),xe("for",e._control.disableAutomaticLabeling?null:e._control.id),g(2),B(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Z_(i,n){if(i&1&&V(0,X_,3,5,"label",20),i&2){let e=S();B(e._hasFloatingLabel()?0:-1)}}function K_(i,n){i&1&&Q(0,"div",7)}function Q_(i,n){}function J_(i,n){if(i&1&&Dr(0,Q_,0,0,"ng-template",13),i&2){S(2);let e=xi(1);z("ngTemplateOutlet",e)}}function ev(i,n){if(i&1&&(h(0,"div",9),V(1,J_,1,1,null,13),m()),i&2){let e=S();z("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),g(),B(e._forceDisplayInfixLabel()?-1:1)}}function tv(i,n){i&1&&(h(0,"div",10,2),te(2,2),m())}function nv(i,n){i&1&&(h(0,"div",11,3),te(2,3),m())}function iv(i,n){}function rv(i,n){if(i&1&&Dr(0,iv,0,0,"ng-template",13),i&2){S();let e=xi(1);z("ngTemplateOutlet",e)}}function ov(i,n){i&1&&(h(0,"div",14,4),te(2,4),m())}function av(i,n){i&1&&(h(0,"div",15,5),te(2,5),m())}function sv(i,n){i&1&&Q(0,"div",16)}function lv(i,n){i&1&&(h(0,"div",18),te(1,6),m())}function cv(i,n){if(i&1&&(h(0,"mat-hint",22),f(1),m()),i&2){let e=S(2);z("id",e._hintLabelId),g(),$(e.hintLabel)}}function dv(i,n){if(i&1&&(h(0,"div",19),V(1,cv,2,2,"mat-hint",22),te(2,7),Q(3,"div",23),te(4,8),m()),i&2){let e=S();g(),B(e.hintLabel?1:-1)}}var fr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["mat-label"]]})}return i})(),im=new b("MatError"),ql=(()=>{class i{id=l(Ve).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&lt("id",r.id)},inputs:{id:"id"},features:[Oe([{provide:im,useExisting:i}])]})}return i})(),Wl=(()=>{class i{align="start";id=l(Ve).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(lt("id",r.id),xe("align",null),Y("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),uv=new b("MatPrefix");var hv=new b("MatSuffix");var rm=new b("FloatingLabelParent"),Kh=(()=>{class i{_elementRef=l(q);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Wh);_ngZone=l(L);_parent=l(rm);_resizeSubscription=new Re;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return mv(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&Y("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function mv(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Qh="mdc-line-ripple--active",ua="mdc-line-ripple--deactivating",Jh=(()=>{class i{_elementRef=l(q);_cleanupTransitionEnd;constructor(){let e=l(L),t=l(_e);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ua),e.add(Qh)}deactivate(){this._elementRef.nativeElement.classList.add(ua)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(ua);e.propertyName==="opacity"&&r&&t.remove(Qh,ua)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),em=(()=>{class i{_elementRef=l(q);_ngZone=l(L);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Ut(z_,5),t&2){let o;se(o=le())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&Y("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:H_,ngContentSelectors:$_,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(Me(),ae(0,"div",1),x(1,"div",2,0),te(3),A(),ae(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Yl=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i})}return i})();var pr=new b("MatFormField"),fv=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),tm="fill",pv="auto",nm="fixed",gv="translateY(-50%)",pi=(()=>{class i{_elementRef=l(q);_changeDetectorRef=l(Fe);_platform=l(ce);_idGenerator=l(Ve);_ngZone=l(L);_defaults=l(fv,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Di("iconPrefixContainer");_textPrefixContainerSignal=Di("textPrefixContainer");_iconSuffixContainerSignal=Di("iconSuffixContainer");_textSuffixContainerSignal=Di("textSuffixContainer");_prefixSuffixContainers=he(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Bc(fr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ui(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||pv}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||tm;this._appearanceSignal.set(t)}_appearanceSignal=M(tm);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||nm}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||nm}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ye();constructor(){let e=this._defaults,t=l(fn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),xt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=he(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(st([void 0,void 0]),I(()=>[t.errorState,t.userAriaDescribedBy]),Na(),ue(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ze(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),En(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Uc({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=he(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",v=`${a+s}px`,K=`calc(${u} * (${v} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,W=`var(--mat-mdc-form-field-label-transform, ${gv} translateX(${K}))`,F=a+s+c+d;return[W,F]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Oc(o,r._labelChild,fr,5),Pn(o,Yl,5)(o,uv,5)(o,hv,5)(o,im,5)(o,Wl,5)),t&2){Wa();let a;se(a=le())&&(r._formFieldControl=a.first),se(a=le())&&(r._prefixChildren=a),se(a=le())&&(r._suffixChildren=a),se(a=le())&&(r._errorChildren=a),se(a=le())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(Fc(r._iconPrefixContainerSignal,qh,5)(r._textPrefixContainerSignal,Yh,5)(r._iconSuffixContainerSignal,Xh,5)(r._textSuffixContainerSignal,Zh,5),Ut(G_,5)(qh,5)(Yh,5)(Xh,5)(Zh,5)(Kh,5)(em,5)(Jh,5)),t&2){Wa(4);let o;se(o=le())&&(r._textField=o.first),se(o=le())&&(r._iconPrefixContainer=o.first),se(o=le())&&(r._textPrefixContainer=o.first),se(o=le())&&(r._iconSuffixContainer=o.first),se(o=le())&&(r._textSuffixContainer=o.first),se(o=le())&&(r._floatingLabel=o.first),se(o=le())&&(r._notchedOutline=o.first),se(o=le())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&Y("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Oe([{provide:pr,useExisting:i},{provide:rm,useExisting:i}])],ngContentSelectors:q_,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(Me(W_),Dr(0,Z_,1,1,"ng-template",null,0,Nc),h(2,"div",6,1),H("click",function(a){return r._control.onContainerClick(a)}),V(4,K_,1,0,"div",7),h(5,"div",8),V(6,ev,2,2,"div",9),V(7,tv,3,0,"div",10),V(8,nv,3,0,"div",11),h(9,"div",12),V(10,rv,1,1,null,13),te(11),m(),V(12,ov,3,0,"div",14),V(13,av,3,0,"div",15),m(),V(14,sv,1,0,"div",16),m(),h(15,"div",17),V(16,lv,2,0,"div",18)(17,dv,5,1,"div",19),m()),t&2){let o;g(2),Y("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),g(2),B(!r._hasOutline()&&!r._control.disabled?4:-1),g(2),B(r._hasOutline()?6:-1),g(),B(r._hasIconPrefix?7:-1),g(),B(r._hasTextPrefix?8:-1),g(2),B(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),g(2),B(r._hasTextSuffix?12:-1),g(),B(r._hasIconSuffix?13:-1),g(),B(r._hasOutline()?-1:14),g(),Y("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();g(),B((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Kh,em,Qa,Jh,Wl],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var ha=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[me]})}return i})();var om=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[me]})}return i})();var Xl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[ha,om,hi,me]})}return i})();var _v=["panel"],vv=["*"];function bv(i,n){if(i&1&&(x(0,"div",1,0),te(2),A()),i&2){let e=n.id,t=S();zt(t._classList),Y("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),lt("id",t.id),xe("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var Zl=class{source;option;constructor(n,e){this.source=n,this.option=e}},sm=new b("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),lm=(()=>{class i{_changeDetectorRef=l(Fe);_elementRef=l(q);_defaults=l(sm);_animationsDisabled=Ye();_activeOptionChanges=Re.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new re;opened=new re;closed=new re;optionActivated=new re;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=l(Ve).getId("mat-autocomplete-");inertGroups;constructor(){let e=l(ce);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new lr(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new Zl(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(t,r,o){if(t&1&&Pn(o,hi,5)(o,Pl,5),t&2){let a;se(a=le())&&(r.options=a),se(a=le())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&Ut(Tn,7)(_v,5),t&2){let o;se(o=le())&&(r.template=o.first),se(o=le())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ie],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ie],requireSelection:[2,"requireSelection","requireSelection",ie],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ie],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ie]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Oe([{provide:kl,useExisting:i}])],ngContentSelectors:vv,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,r){t&1&&(Me(),Ac(0,bv,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})();var yv={provide:jo,useExisting:Nt(()=>Kl),multi:!0};var Cv=new b("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(ne);return()=>la(i)}}),Kl=(()=>{class i{_environmentInjector=l(ge);_element=l(q);_injector=l(ne);_viewContainerRef=l(Dt);_zone=l(L);_changeDetectorRef=l(Fe);_dir=l(fn,{optional:!0});_formField=l(pr,{optional:!0,host:!0});_viewportRuler=l(bn);_scrollStrategy=l(Cv);_renderer=l(_e);_animationsDisabled=Ye();_defaults=l(sm,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new R;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Re.EMPTY;_breakpointObserver=l(Dl);_handsetLandscapeSubscription=Re.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new R;_overlayPanelClass=Ft(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Ko(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return En(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ue(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ue(()=>this._overlayAttached)):y()).pipe(I(e=>e instanceof ur?e:null))}optionSelections=xn(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(st(e),oe(()=>En(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(oe(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Be(e=>{let t=o=>{let a=ke(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!c||!c.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,r=t.keyCode,o=en(t);if(r===27&&!o&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,r=t.value;if(t.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return yl()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Be(r=>{pt(()=>{r.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(ve(()=>this._positionStrategy.reapplyLastPosition()),sc(0))??y();return En(e,t).pipe(oe(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Xe(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),t._emitSelectEvent(r),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;Ml(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new mi(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=da(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(ph.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!en(e)||e.keyCode===38&&en(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new fi({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ca(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=t:a=[...t,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){t=r;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,r=Dh(e,t.options,t.optionGroups);if(e===0&&r===1)t._setScrollTop(0);else if(t.panel){let o=t.options.toArray()[e];if(o){let a=o._getHostElement(),s=Eh(a.offsetTop,a.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&Ko(this._trackedModal,"aria-owns",t),Ml(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Ko(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,r){t&1&&H("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),t&2&&xe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ie]},exportAs:["matAutocompleteTrigger"],features:[Oe([yv]),Ie]})}return i})(),cm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[$l,Xl,Jo,Xl,me]})}return i})();var Cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[lh,pi,me]})}return i})();var xv=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),Dv={passive:!0},um=(()=>{class i{_platform=l(ce);_ngZone=l(L);_renderer=l(De).createRenderer(null,null);_styleLoader=l(it);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ue;this._styleLoader.load(xv);let t=qe(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new R,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,Dv)));return this._monitoredElements.set(t,{subject:o,unlisten:c}),o}stopMonitoring(e){let t=qe(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var hm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({})}return i})();var mm=new b("MAT_INPUT_VALUE_ACCESSOR");var fm=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ma=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Ev=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Sv=new b("MAT_INPUT_CONFIG"),fa=(()=>{class i{_elementRef=l(q);_platform=l(ce);ngControl=l(pn,{optional:!0,self:!0});_autofillMonitor=l(um);_ngZone=l(L);_formField=l(pr,{optional:!0});_renderer=l(_e);_uid=l(Ve).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Sv,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ui(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(rt.required)??!1}set required(e){this._required=ui(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Rl().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ui(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Rl().has(e));constructor(){let e=l(_l,{optional:!0}),t=l(gn,{optional:!0}),r=l(fm),o=l(mm,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?jt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ma(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&xt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ev.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&H("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(lt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),xe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),Y("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie]},exportAs:["matInput"],features:[Oe([{provide:Yl,useExisting:i}]),Ie]})}return i})(),pa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[Cn,Cn,hm,me]})}return i})();var ga=new b("CATEGORY_SERVICE");var Mv=()=>[],Av=(i,n)=>n.id;function Rv(i,n){if(i&1&&(h(0,"span",19),f(1),m()),i&2){let e=n.$implicit;g(),$(e)}}function Iv(i,n){if(i&1&&Ee(0,Rv,2,1,"span",19,Ga),i&2){let e=S();Se(e.getControlErrors("title"))}}function Ov(i,n){if(i&1&&(h(0,"span",19),f(1),m()),i&2){let e=n.$implicit;g(),$(e)}}function Fv(i,n){if(i&1&&Ee(0,Ov,2,1,"span",19,Ga),i&2){let e=S();Se(e.getControlErrors("content"))}}function Tv(i,n){if(i&1&&(h(0,"mat-option",12),f(1),m()),i&2){let e=n.$implicit;z("value",e.name),g(),$(e.name)}}function kv(i,n){if(i&1){let e=Ze();h(0,"div",14),Q(1,"img",20),h(2,"button",21),H("click",function(){be(e);let r=S();return ye(r.clearImage())}),h(3,"mat-icon"),f(4,"close"),m()()()}if(i&2){let e=S();g(),z("src",e.imagePreviewUrl(),ft)}}function Pv(i,n){if(i&1){let e=Ze();h(0,"label",15)(1,"mat-icon"),f(2,"upload"),m(),h(3,"span"),f(4),m(),h(5,"input",22),H("change",function(r){be(e);let o=S();return ye(o.onFileSelected(r))}),m()()}if(i&2){let e=S();g(4),$(e.selectedImageFile()?e.selectedImageFile().name:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B")}}var _a=class i{article=Ht(null);submitArticle=Vn();cancelForm=Vn();fb=l(Go);categoryService=l(ga);categories=M([]);selectedImageFile=M(null);imagePreviewUrl=M(null);form=this.fb.group({title:["",[rt.required,rt.minLength(25)]],content:["",rt.required],categoryName:[""]});filteredCategories$;formTitle=he(()=>this.article()?"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E":"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438");saveButtonTitle=he(()=>this.article()?"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");constructor(){xt(()=>{let n=this.article();n?this.form.patchValue({title:n.title,content:n.content,categoryName:n.categoryName??""}):(this.form.reset(),this.selectedImageFile.set(null),this.imagePreviewUrl.set(null))})}ngOnInit(){this.categoryService.getCategories().subscribe(n=>{this.categories.set(n)}),this.filteredCategories$=this.form.controls.categoryName.valueChanges.pipe(st(""),I(n=>this.filterCategories(n??"")))}filterCategories(n){let e=n.toLowerCase();return this.categories().filter(t=>t.name.toLowerCase().includes(e))}onFileSelected(n){let t=n.target.files?.[0];if(!t)return;this.selectedImageFile.set(t);let r=new FileReader;r.onload=()=>this.imagePreviewUrl.set(r.result),r.readAsDataURL(t)}clearImage(){this.selectedImageFile.set(null),this.imagePreviewUrl.set(null)}hasError(n){let e=this.form.get(n);return!!(e?.invalid&&e.touched)}getControlErrors(n){let t=this.form.get(n)?.errors??null;return t?Object.entries(t).map(([r,o])=>this.getErrorStr(r,o)):[]}getErrorStr(n,e){switch(n){case"required":return"\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F";case"minlength":{let{requiredLength:t,actualLength:r}=e;return`\u041D\u0443\u0436\u043D\u043E \u0435\u0449\u0451 ${t-r} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432`}default:return"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u043F\u043E\u043B\u044F"}}onSubmit(){if(this.form.invalid)return;let{title:n,content:e,categoryName:t}=this.form.value,r=this.article(),o=t?.trim()||"";(()=>{if(!o)return y(null);let s=this.categories().find(c=>c.name.toLowerCase()===o.toLowerCase());return s?y(s):this.categoryService.addCategory(o)})().subscribe(s=>{let c=s?.id,d=s?.name,u=r?G(_({},r),{title:n.trim(),content:e.trim(),categoryId:c,categoryName:d}):{id:"",title:n.trim(),content:e.trim(),date:new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),categoryId:c,categoryName:d};this.submitArticle.emit({article:u,imageFile:this.selectedImageFile()??void 0}),this.form.reset(),this.selectedImageFile.set(null),this.imagePreviewUrl.set(null)})}onCancel(){this.form.reset(),this.selectedImageFile.set(null),this.imagePreviewUrl.set(null),this.cancelForm.emit()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-article-form"]],inputs:{article:[1,"article"]},outputs:{submitArticle:"submitArticle",cancelForm:"cancelForm"},decls:34,vars:15,consts:[["auto","matAutocomplete"],[1,"article-form"],[1,"article-form__title"],[3,"ngSubmit","formGroup"],[1,"article-form__group"],["for","articleTitle",1,"article-form__label"],["type","text","id","articleTitle","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A","formControlName","title",1,"article-form__input"],["for","articleText",1,"article-form__label"],["id","articleText","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438","formControlName","content",1,"article-form__textarea"],["for","articleCategory",1,"article-form__label"],["appearance","outline",1,"article-form__mat-field"],["matInput","","id","articleCategory","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E","formControlName","categoryName",3,"matAutocomplete"],[3,"value"],[1,"article-form__label"],[1,"article-form__preview"],["for","articleImage",1,"article-form__file-label"],[1,"article-form__actions"],["type","submit",1,"article-form__save",3,"disabled"],["type","button",1,"article-form__cancel",3,"click"],[1,"article-form__error"],["alt","Preview",1,"article-form__preview-img",3,"src"],["type","button","title","\u0423\u0434\u0430\u043B\u0438\u0442\u044C",1,"article-form__remove-img",3,"click"],["type","file","id","articleImage","accept","image/*",1,"article-form__file-input",3,"change"]],template:function(e,t){if(e&1&&(h(0,"div",1)(1,"p",2),f(2),m(),h(3,"form",3),H("ngSubmit",function(){return t.onSubmit()}),h(4,"div",4)(5,"label",5),f(6,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A *"),m(),Q(7,"input",6),V(8,Iv,2,0),m(),h(9,"div",4)(10,"label",7),f(11,"\u0422\u0435\u043A\u0441\u0442 *"),m(),Q(12,"textarea",8),V(13,Fv,2,0),m(),h(14,"div",4)(15,"label",9),f(16,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"),m(),h(17,"mat-form-field",10),Q(18,"input",11),h(19,"mat-autocomplete",null,0),Ee(21,Tv,2,2,"mat-option",12,Av),kc(23,"async"),m()()(),h(24,"div",4)(25,"label",13),f(26,"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"),m(),V(27,kv,5,1,"div",14)(28,Pv,6,1,"label",15),m(),h(29,"div",16)(30,"button",17),f(31),m(),h(32,"button",18),H("click",function(){return t.onCancel()}),f(33,"\u041E\u0442\u043C\u0435\u043D\u0430"),m()()()()),e&2){let r=xi(20);g(2),$(t.formTitle()),g(),z("formGroup",t.form);let o=t.hasError("title");g(4),Y("article-form__input--error",o),g(),B(o?8:-1);let a=t.hasError("content");g(4),Y("article-form__textarea--error",a),g(),B(a?13:-1),g(5),z("matAutocomplete",r),g(3),Se(Pc(23,12,t.filteredCategories$)??Ln(14,Mv)),g(6),B(t.imagePreviewUrl()?27:28),g(3),z("disabled",t.form.invalid),g(),Nn(" ",t.saveButtonTitle()," ")}},dependencies:[Wo,$o,li,Uo,zo,gn,ir,cm,lm,hi,Kl,Cn,pi,pa,fa,Kt,Zt,Ja],styles:[".article-form[_ngcontent-%COMP%]{background:var(--color-white);border:1px solid var(--color-border);border-radius:12px;padding:24px;margin-bottom:24px}.article-form__title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin-bottom:20px;color:var(--color-black)}.article-form__group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:16px}.article-form__label[_ngcontent-%COMP%]{font-size:13px;font-weight:500;margin-bottom:6px;color:var(--color-gray)}.article-form__input[_ngcontent-%COMP%], .article-form__textarea[_ngcontent-%COMP%]{border:1px solid var(--color-border);border-radius:6px;padding:10px 12px;font-family:Inter,sans-serif;font-size:14px;color:var(--color-black);outline:none;transition:border-color .2s}.article-form__input[_ngcontent-%COMP%]:focus, .article-form__textarea[_ngcontent-%COMP%]:focus{border-color:var(--color-black)}.article-form__input--error[_ngcontent-%COMP%], .article-form__textarea--error[_ngcontent-%COMP%]{border-color:#e53e3e}.article-form__textarea[_ngcontent-%COMP%]{resize:vertical;min-height:100px}.article-form__error[_ngcontent-%COMP%]{display:block;font-size:11px;color:#e53e3e;margin-top:4px}.article-form__mat-field[_ngcontent-%COMP%]{width:100%}.article-form__mat-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%]{display:none}.article-form__file-label[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;cursor:pointer;border:1px dashed var(--color-border);border-radius:6px;padding:10px 16px;font-size:14px;color:var(--color-gray);transition:border-color .2s,color .2s}.article-form__file-label[_ngcontent-%COMP%]:hover{border-color:var(--color-black);color:var(--color-black)}.article-form__file-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.article-form__file-input[_ngcontent-%COMP%]{display:none}.article-form__preview[_ngcontent-%COMP%]{position:relative;display:inline-block;max-width:200px}.article-form__preview-img[_ngcontent-%COMP%]{width:200px;height:120px;object-fit:cover;border-radius:6px;border:1px solid var(--color-border)}.article-form__remove-img[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;border-radius:50%;background:#0009;color:#fff;cursor:pointer}.article-form__remove-img[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;line-height:14px}.article-form__actions[_ngcontent-%COMP%]{display:flex;gap:12px;margin-top:8px}.article-form__save[_ngcontent-%COMP%]{background:var(--color-black);color:var(--color-white);border:none;border-radius:6px;padding:10px 20px;font-size:14px;font-weight:500;cursor:pointer;font-family:Inter,sans-serif;transition:opacity .2s}.article-form__save[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.article-form__save[_ngcontent-%COMP%]:hover:not(:disabled){opacity:.8}.article-form__cancel[_ngcontent-%COMP%]{background:transparent;color:var(--color-gray);border:1px solid var(--color-border);border-radius:6px;padding:10px 20px;font-size:14px;font-weight:500;cursor:pointer;font-family:Inter,sans-serif;transition:border-color .2s,color .2s}.article-form__cancel[_ngcontent-%COMP%]:hover{border-color:var(--color-black);color:var(--color-black)}"]})};var Nv=(i,n)=>n.id;function Lv(i,n){if(i&1){let e=Ze();h(0,"div",5)(1,"app-article-form",20),H("submitArticle",function(r){be(e);let o=S();return ye(o.onArticleSubmit(r))})("cancelForm",function(){be(e);let r=S();return ye(r.onFormCancel())}),m()()}if(i&2){let e=S();g(),z("article",e.editingArticle())}}function Vv(i,n){if(i&1&&(h(0,"article",15)(1,"div",21),Q(2,"img",22),m(),h(3,"div",23)(4,"h2",24),f(5),m(),h(6,"p",25),f(7),m(),h(8,"span",26),f(9),m()()()),i&2){let e=S();g(2),z("src",e.articles()[0].image||"img/image 2.png",ft),g(3),$(e.articles()[0].title),g(2),$(e.articles()[0].content),g(2),$(e.articles()[0].date)}}function Bv(i,n){if(i&1){let e=Ze();h(0,"app-article",28),H("deleteArticle",function(r){be(e);let o=S(2);return ye(o.onArticleDelete(r))})("editArticle",function(r){be(e);let o=S(2);return ye(o.onArticleEdit(r))}),m()}if(i&2){let e=n.$implicit;z("article",e)}}function jv(i,n){if(i&1&&(h(0,"ul",17),Ee(1,Bv,1,1,"app-article",27,Nv),m()),i&2){let e=S();g(),Se(e.articles())}}function Uv(i,n){i&1&&(h(0,"div",18)(1,"div",29),f(2,"\u{1F4DD}"),m(),h(3,"p",30),f(4,"\u0421\u0442\u0430\u0442\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"),m(),h(5,"p",31),f(6,"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB+\xBB \u0432 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0430\u0442\u044C\u044E"),m()())}function zv(i,n){if(i&1){let e=Ze();h(0,"button",34),H("click",function(){let r=be(e).$implicit,o=S(2);return ye(o.onPageChange(r))}),f(1),m()}if(i&2){let e=n.$implicit,t=S(2);Y("pagination__btn--active",e===t.currentPage()),g(),$(e)}}function Hv(i,n){if(i&1){let e=Ze();h(0,"div",19)(1,"button",32),H("click",function(){be(e);let r=S();return ye(r.onPageChange(r.currentPage()-1))}),f(2,"\u2190 Prev"),m(),Ee(3,zv,2,3,"button",33,Er),h(5,"button",32),H("click",function(){be(e);let r=S();return ye(r.onPageChange(r.currentPage()+1))}),f(6,"Next \u2192"),m()()}if(i&2){let e=S();g(),z("disabled",e.currentPage()===1),g(2),Se(e.pages()),g(2),z("disabled",e.currentPage()===e.totalPages())}}function $v(i,n){if(i&1){let e=Ze();h(0,"div",35),H("click",function(){be(e);let r=S();return ye(r.toggleStats())}),m(),h(1,"div",36)(2,"div",37)(3,"div",38)(4,"span",39),f(5,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"),m(),h(6,"button",40),H("click",function(){be(e);let r=S();return ye(r.toggleStats())}),f(7,"\u2715"),m()(),h(8,"div",41)(9,"span",42),f(10,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u0442\u043E\u0432"),m(),h(11,"span",43),f(12),m()()()()}if(i&2){let e=S();g(12),$(e.articleCount())}}var va=class i{service=l(ti);store=l(ni);titleService=l($t);articles=this.store.articles;currentPage=this.store.currentPage;total=M(0);showForm=M(!1);showStats=M(!1);editingArticle=M(null);articleCount=he(()=>this.total());totalPages=he(()=>Math.ceil(this.total()/7));pages=he(()=>Array.from({length:this.totalPages()},(n,e)=>e+1));ngOnInit(){this.titleService.setTitle("My Blogs | Blog App"),this.loadPage(this.currentPage())}loadPage(n){this.service.getArticles(n).subscribe(e=>{this.store.saveArticles(e.articles),this.store.savePage(n),this.total.set(e.total)})}onPageChange(n){this.loadPage(n),this.showForm.set(!1),this.editingArticle.set(null)}toggleForm(){this.showForm.update(n=>!n),this.showForm()&&this.editingArticle.set(null)}toggleStats(){this.showStats.update(n=>!n)}onArticleEdit(n){this.editingArticle.set(n),this.showForm.set(!0)}onArticleSubmit(n){this.editingArticle()?(this.service.updateArticle(n.article,this.currentPage(),n.imageFile).subscribe(e=>{this.store.saveArticles(e.articles),this.total.set(e.total)}),this.editingArticle.set(null)):this.service.addArticle(n.article,1,n.imageFile).subscribe(e=>{this.store.saveArticles(e.articles),this.store.savePage(1),this.total.set(e.total)}),this.showForm.set(!1)}onFormCancel(){this.editingArticle.set(null),this.showForm.set(!1)}onArticleDelete(n){this.service.deleteArticle(n,this.currentPage()).subscribe(e=>{this.store.saveArticles(e.articles),this.total.set(e.total),e.articles.length===0&&this.currentPage()>1&&this.loadPage(this.currentPage()-1)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-blog"]],decls:32,vars:5,consts:[[1,"page-layout"],[1,"sidebar"],["title","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"sidebar__btn",3,"click"],["title","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",1,"sidebar__btn",3,"click"],[1,"main-content"],[1,"article-form-wrap"],[1,"blog-hero","container"],[1,"blog-hero__top"],[1,"blog-hero__title"],[1,"blog-hero__sub"],[1,"blog-badge-wrap"],["viewBox","0 0 110 110","xmlns","http://www.w3.org/2000/svg",1,"blog-badge"],["id","blog-badge-path","d","M55,55 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0","fill","none"],["href","#blog-badge-path"],[1,"blog-badge-arrow"],[1,"blog-featured"],[1,"blog-grid-section","container"],[1,"blog-grid"],[1,"blog-empty"],[1,"pagination"],[3,"submitArticle","cancelForm","article"],[1,"blog-featured__img"],["alt","Featured post",3,"src"],[1,"blog-featured__text"],[1,"blog-featured__title"],[1,"blog-featured__desc"],[1,"blog-featured__date"],[3,"article"],[3,"deleteArticle","editArticle","article"],[1,"blog-empty__icon"],[1,"blog-empty__title"],[1,"blog-empty__text"],[1,"pagination__btn",3,"click","disabled"],[1,"pagination__btn",3,"pagination__btn--active"],[1,"pagination__btn",3,"click"],[1,"stats-overlay",3,"click"],[1,"stats-dialog"],[1,"stats-dialog__inner"],[1,"stats-dialog__header"],[1,"stats-dialog__title"],[1,"stats-dialog__close",3,"click"],[1,"stats-dialog__item"],[1,"stats-dialog__label"],[1,"stats-dialog__value"]],template:function(e,t){e&1&&(h(0,"div",0)(1,"aside",1)(2,"button",2),H("click",function(){return t.toggleForm()}),h(3,"mat-icon"),f(4,"add"),m()(),h(5,"button",3),H("click",function(){return t.toggleStats()}),h(6,"mat-icon"),f(7,"bar_chart"),m()()(),h(8,"div",4),V(9,Lv,2,1,"div",5),h(10,"main")(11,"section",6)(12,"div",7)(13,"div")(14,"h1",8),f(15,"My blogs"),m(),h(16,"p",9),f(17,"Lorem occaecat proident excepteur commodo at nulla elusmod. Elit esse aute officia dolor elit aute"),m()(),h(18,"div",10),Lt(),h(19,"svg",11),Q(20,"path",12),h(21,"text")(22,"textPath",13),f(23,"MY BLOGS \u2022 MY BLOGS \u2022 MY BLOGS \u2022"),m()()(),Vt(),h(24,"span",14),f(25,"\u2193"),m()()(),V(26,Vv,10,4,"article",15),m(),h(27,"section",16),V(28,jv,3,0,"ul",17)(29,Uv,7,0,"div",18),V(30,Hv,7,2,"div",19),m()()()(),V(31,$v,13,1)),e&2&&(g(9),B(t.showForm()?9:-1),g(17),B(t.articles().length>0?26:-1),g(2),B(t.articles().length>0?28:29),g(2),B(t.totalPages()>1?30:-1),g(),B(t.showStats()?31:-1))},dependencies:[Io,_a,Kt,Zt],styles:[".page-layout[_ngcontent-%COMP%]{display:flex;min-height:calc(100vh - 60px)}.sidebar[_ngcontent-%COMP%]{width:60px;padding:16px 12px;border-right:1px solid var(--color-border);display:flex;flex-direction:column;gap:12px;position:sticky;top:60px;height:calc(100vh - 60px);flex-shrink:0}.sidebar__btn[_ngcontent-%COMP%]{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border:1px solid var(--color-border);border-radius:8px;background:transparent;cursor:pointer;transition:background .2s,border-color .2s}.sidebar__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:18px;height:18px;stroke:var(--color-gray);transition:stroke .2s}.sidebar__btn[_ngcontent-%COMP%]:hover{background:var(--color-bg-card);border-color:var(--color-black)}.sidebar__btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{stroke:var(--color-black)}.main-content[_ngcontent-%COMP%]{flex:1;min-width:0}.article-form-wrap[_ngcontent-%COMP%]{padding:24px 48px 0;max-width:760px}.blog-hero[_ngcontent-%COMP%]{padding-top:48px;padding-bottom:48px}.blog-hero__top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px}.blog-hero__title[_ngcontent-%COMP%]{margin-bottom:12px}.blog-hero__sub[_ngcontent-%COMP%]{max-width:480px;color:var(--color-gray)}.blog-badge-wrap[_ngcontent-%COMP%]{position:relative;width:110px;height:110px;flex-shrink:0}.blog-badge-wrap[_ngcontent-%COMP%]   .blog-badge[_ngcontent-%COMP%]{width:110px;height:110px;animation:spin 12s linear infinite}.blog-badge-wrap[_ngcontent-%COMP%]   .blog-badge[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:11px;fill:var(--color-gray);font-family:Inter,sans-serif;letter-spacing:1px}.blog-badge-wrap[_ngcontent-%COMP%]   .blog-badge-arrow[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px}.blog-featured[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;background:var(--color-bg-peach);border-radius:16px;overflow:hidden}.blog-featured__img[_ngcontent-%COMP%]{min-height:260px;overflow:hidden}.blog-featured__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.blog-featured__text[_ngcontent-%COMP%]{padding:32px;display:flex;flex-direction:column;justify-content:center}.blog-featured__title[_ngcontent-%COMP%]{margin-bottom:12px}.blog-featured__desc[_ngcontent-%COMP%]{color:var(--color-gray);margin-bottom:16px}.blog-featured__date[_ngcontent-%COMP%]{font-size:12px;color:var(--color-gray-light)}.blog-grid-section[_ngcontent-%COMP%]{padding-bottom:64px}.blog-empty[_ngcontent-%COMP%]{text-align:center;padding:64px 0}.blog-empty__icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:16px}.blog-empty__title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin-bottom:8px}.blog-empty__text[_ngcontent-%COMP%]{color:var(--color-gray)}.blog-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:32px;padding:0}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;margin-top:8px}.pagination__btn[_ngcontent-%COMP%]{padding:8px 16px;border:1px solid var(--color-border);border-radius:20px;background:transparent;font-size:13px;font-weight:500;color:var(--color-black);cursor:pointer;transition:background .2s,color .2s,border-color .2s}.pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--color-black);color:var(--color-white);border-color:var(--color-black)}.pagination__btn--active[_ngcontent-%COMP%]{background:var(--color-black);color:var(--color-white);border-color:var(--color-black)}.pagination__btn[_ngcontent-%COMP%]:disabled{opacity:.35;cursor:default}.stats-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#0006;z-index:100}.stats-dialog[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--color-white);border-radius:12px;z-index:101;min-width:320px;box-shadow:0 8px 32px #00000026}.stats-dialog__inner[_ngcontent-%COMP%]{padding:24px}.stats-dialog__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.stats-dialog__title[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.stats-dialog__close[_ngcontent-%COMP%]{background:transparent;border:none;font-size:18px;cursor:pointer;color:var(--color-gray);transition:color .2s}.stats-dialog__close[_ngcontent-%COMP%]:hover{color:var(--color-black)}.stats-dialog__item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-top:1px solid var(--color-border)}.stats-dialog__label[_ngcontent-%COMP%]{font-size:14px;color:var(--color-gray)}.stats-dialog__value[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:var(--color-black)}"]})};var Gv=["*"];var Wv=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],qv=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Yv=new b("MAT_CARD_CONFIG"),gm=(()=>{class i{appearance;constructor(){let e=l(Yv,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&Y("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Gv,decls:1,vars:0,template:function(t,r){t&1&&(Me(),te(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})(),_m=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var vm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})(),bm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return i})(),ym=(()=>{class i{align="start";static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,r){t&2&&Y("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})(),Cm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:qv,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,r){t&1&&(Me(Wv),te(0),x(1,"div",0),te(2,1),A(),te(3,2))},encapsulation:2,changeDetection:0})}return i})();var wm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[me]})}return i})();var Zv={capture:!0},Kv=["focus","mousedown","mouseenter","touchstart"],Ql="mat-ripple-loader-uninitialized",Jl="mat-ripple-loader-class-name",xm="mat-ripple-loader-centered",ba="mat-ripple-loader-disabled",Dm=(()=>{class i{_document=l(T);_animationsDisabled=Ye();_globalRippleOptions=l(Fl,{optional:!0});_platform=l(ce);_ngZone=l(L);_injector=l(ne);_eventCleanups;_hosts=new Map;constructor(){let e=l(De).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Kv.map(t=>e.listen(this._document,t,this._onInteraction,Zv)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ql,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Jl))&&e.setAttribute(Jl,t.className||""),t.centered&&e.setAttribute(xm,""),t.disabled&&e.setAttribute(ba,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(ba,""):e.removeAttribute(ba)}_onInteraction=e=>{let t=ke(e);if(t instanceof HTMLElement){let r=t.closest(`[${Ql}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Jl)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??cr.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??cr.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(ba),rippleConfig:{centered:e.hasAttribute(xm),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new dr(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(Ql)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Qv=["mat-icon-button",""],Jv=["*"],eb=new b("MAT_BUTTON_CONFIG");function Em(i){return i==null?void 0:qa(i)}var ec=(()=>{class i{_elementRef=l(q);_ngZone=l(L);_animationsDisabled=Ye();_config=l(eb,{optional:!0});_focusMonitor=l(xl);_cleanupClick;_renderer=l(_e);_rippleLoader=l(Dm);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(it).load(Qo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=O({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(xe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),zt(r.color?"mat-"+r.color:""),Y("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ie],disabled:[2,"disabled","disabled",ie],ariaDisabled:[2,"aria-disabled","ariaDisabled",ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie],tabIndex:[2,"tabIndex","tabIndex",Em],_tabindex:[2,"tabindex","_tabindex",Em]}})}return i})(),tc=(()=>{class i extends ec{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ne],attrs:Qv,ngContentSelectors:Jv,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Me(),ae(0,"span",0),te(1),ae(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var tb=["matButton",""],nb=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ib=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Sm=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Mm=(()=>{class i extends ec{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=rb(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?Sm.get(this._appearance):null,o=Sm.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=w({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ne],attrs:tb,ngContentSelectors:ib,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(Me(nb),ae(0,"span",0),te(1),x(2,"span",1),te(3,1),A(),te(4,2),ae(5,"span",2)(6,"span",3)),t&2&&Y("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function rb(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Am=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=U({type:i});static \u0275inj=j({imports:[ha,me]})}return i})();var ya=new b("ArticleService");var Ca=class i{article=M(null);comments=M([]);saveArticle(n){this.article.set(n)}saveComments(n){this.comments.set(n)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};var ab=()=>["/blog"],sb=(i,n)=>n.id;function lb(i,n){if(i&1&&Q(0,"img",5),i&2){let e=S(2);z("src",e.article().image,ft)("alt",e.article().title)}}function cb(i,n){i&1&&Q(0,"img",6)}function db(i,n){i&1&&(h(0,"p",15),f(1,"\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432. \u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!"),m())}function ub(i,n){if(i&1){let e=Ze();h(0,"mat-card",16)(1,"mat-card-header")(2,"mat-card-title"),f(3),m(),h(4,"mat-card-subtitle"),f(5),m()(),h(6,"mat-card-content")(7,"p"),f(8),m()(),h(9,"mat-card-actions")(10,"button",11),H("click",function(){let r=be(e).$implicit,o=S(2);return ye(o.onRateComment(r.id,1))}),h(11,"mat-icon"),f(12,"thumb_up"),m()(),h(13,"span",23),f(14),m(),h(15,"button",13),H("click",function(){let r=be(e).$implicit,o=S(2);return ye(o.onRateComment(r.id,-1))}),h(16,"mat-icon"),f(17,"thumb_down"),m()()()()}if(i&2){let e=n.$implicit;g(3),$(e.name),g(2),$(e.date),g(3),$(e.text),g(6),$(e.rating)}}function hb(i,n){i&1&&(h(0,"mat-error"),f(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"),m())}function mb(i,n){i&1&&(h(0,"mat-error"),f(1,"\u041C\u0438\u043D\u0438\u043C\u0443\u043C 10 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),m())}function fb(i,n){if(i&1){let e=Ze();h(0,"article",3)(1,"div",4),V(2,lb,1,2,"img",5)(3,cb,1,0,"img",6),m(),h(4,"div",7)(5,"h1"),f(6),m(),h(7,"span",8),f(8),m(),h(9,"p",9),f(10),m(),h(11,"div",10)(12,"button",11),H("click",function(){be(e);let r=S();return ye(r.onRateArticle(1))}),h(13,"mat-icon"),f(14,"thumb_up"),m()(),h(15,"span",12),f(16),m(),h(17,"button",13),H("click",function(){be(e);let r=S();return ye(r.onRateArticle(-1))}),h(18,"mat-icon"),f(19,"thumb_down"),m()()()()(),h(20,"section",14)(21,"h2"),f(22),m(),V(23,db,2,0,"p",15),Ee(24,ub,18,4,"mat-card",16,sb),m(),h(26,"section",17)(27,"h3"),f(28,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),m(),h(29,"form",18),H("ngSubmit",function(){be(e);let r=S();return ye(r.onAddComment())}),h(30,"mat-form-field",19)(31,"mat-label"),f(32,"\u0418\u043C\u044F"),m(),Q(33,"input",20),V(34,hb,2,0,"mat-error"),m(),h(35,"mat-form-field",19)(36,"mat-label"),f(37,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),m(),Q(38,"textarea",21),V(39,mb,2,0,"mat-error"),m(),h(40,"div")(41,"button",22)(42,"mat-icon"),f(43,"send"),m(),f(44," \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "),m()()()()}if(i&2){let e,t,r=S();g(2),B(r.article().image?2:3),g(4),$(r.article().title),g(2),$(r.article().date),g(2),$(r.article().content),g(6),$(r.article().rating??0),g(6),Nn("Comments (",r.comments().length,")"),g(),B(r.comments().length===0?23:-1),g(),Se(r.comments()),g(5),z("formGroup",r.commentForm),g(5),B((e=r.commentForm.get("name"))!=null&&e.invalid&&((e=r.commentForm.get("name"))!=null&&e.touched)?34:-1),g(5),B((t=r.commentForm.get("text"))!=null&&t.invalid&&((t=r.commentForm.get("text"))!=null&&t.touched)?39:-1),g(2),z("disabled",r.commentForm.invalid)}}function pb(i,n){i&1&&(h(0,"p",2),f(1,"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),m())}var wa=class i{route=l(et);service=l(ya);store=l(Ca);titleService=l($t);fb=l(Go);article=this.store.article;comments=this.store.comments;commentForm=this.fb.group({name:["",rt.required],text:["",[rt.required,rt.minLength(10)]]});ngOnInit(){let n=this.route.snapshot.paramMap.get("id");this.service.getArticleWithComments(n).subscribe(e=>{this.store.saveArticle(e.article),this.store.saveComments(e.comments),this.titleService.setTitle(e.article.title+" | Blog App")})}onRateArticle(n){let e=this.article()?.id;e!=null&&this.service.updateArticleRating(e,n).subscribe(t=>{this.store.saveArticle(t)})}onRateComment(n,e){this.service.updateCommentRating(n,e).subscribe(t=>{this.store.saveComments(t)})}onAddComment(){if(this.commentForm.invalid)return;let{name:n,text:e}=this.commentForm.value,t={id:"",articleId:this.article().id,name:n.trim(),text:e.trim(),date:new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),rating:0};this.service.addComment(t).subscribe(r=>{this.store.saveComments(r),this.commentForm.reset()})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-article-detail"]],decls:7,vars:3,consts:[[1,"article-detail","container"],[1,"article-detail__back",3,"routerLink"],[1,"article-detail__loading"],[1,"article-detail__article"],[1,"article-detail__img"],[3,"src","alt"],["src","img/image 2.png","alt","Article image"],[1,"article-detail__content"],[1,"article-detail__date"],[1,"article-detail__text"],[1,"article-detail__rating"],["mat-icon-button","","title","Like",3,"click"],[1,"article-detail__rating-value"],["mat-icon-button","","title","Dislike",3,"click"],[1,"article-detail__comments"],[1,"article-detail__no-comments"],[1,"comment-card"],[1,"article-detail__add-comment"],[3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","name"],["matInput","","formControlName","text","rows","4"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"comment-rating"]],template:function(e,t){e&1&&(h(0,"div",0)(1,"a",1)(2,"mat-icon"),f(3,"arrow_back"),m(),f(4," Back to Blog "),m(),V(5,fb,45,11)(6,pb,2,0,"p",2),m()),e&2&&(g(),z("routerLink",Ln(2,ab)),g(4),B(t.article()?5:6))},dependencies:[tt,Wo,$o,li,Uo,zo,gn,ir,wm,gm,ym,vm,Cm,bm,_m,Am,Mm,tc,Kt,Zt,Cn,pi,fr,ql,pa,fa],styles:[".article-detail[_ngcontent-%COMP%]{padding:48px 0 64px}.article-detail__back[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;margin-bottom:32px;color:var(--color-gray);font-size:14px;text-decoration:none;transition:color .2s}.article-detail__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.article-detail__back[_ngcontent-%COMP%]:hover{color:var(--color-black)}.article-detail__article[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;gap:48px;margin-bottom:48px;padding-bottom:48px;border-bottom:1px solid var(--color-border)}.article-detail__img[_ngcontent-%COMP%]{background:var(--color-bg-card);border-radius:16px;overflow:hidden;min-height:280px}.article-detail__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.article-detail__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding-top:8px}.article-detail__date[_ngcontent-%COMP%]{font-size:13px;color:var(--color-gray-light)}.article-detail__text[_ngcontent-%COMP%]{color:var(--color-gray);flex:1}.article-detail__rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.article-detail__rating-value[_ngcontent-%COMP%]{font-size:20px;font-weight:700;min-width:36px;text-align:center}.article-detail__comments[_ngcontent-%COMP%]{margin-bottom:48px}.article-detail__comments[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:24px}.article-detail__no-comments[_ngcontent-%COMP%]{color:var(--color-gray-light);padding:24px 0}.article-detail__loading[_ngcontent-%COMP%]{color:var(--color-gray-light);padding:64px 0;text-align:center}.article-detail__add-comment[_ngcontent-%COMP%]{padding-bottom:32px}.article-detail__add-comment[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:24px}.article-detail__add-comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;max-width:600px}.article-detail__add-comment[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.comment-card[_ngcontent-%COMP%]{margin-bottom:16px}.comment-rating[_ngcontent-%COMP%]{font-size:15px;font-weight:600;min-width:28px;text-align:center;line-height:40px}"]})};var Rm=[{path:"",component:Eo},{path:"blog",component:va},{path:"blog/:id",component:wa},{path:"**",redirectTo:""}];var at={useApi:!1,apiUrl:""};var Im=7,nc="blog_articles",Om=[{id:"1",title:"Minim anim pariatur magna duis sit et dolor inci",content:"Sint occaecat deserunt aliquo do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup.",date:"Oct 16, 2025"},{id:"2",title:"Esse ad duis occaecat exercitation lorem ipsum",content:"Exercitation in aliqua pariatur. Voluptate deserunt mollit ullamco consectetur.",date:"Oct 10, 2025"},{id:"3",title:"Dolor sit amet consectetur adipiscing elit",content:"Fugiat Lorem veniam cillum officia nisi. Nulla dolore magna minim laboris.",date:"Oct 05, 2025"}],xa=class i{getFromStorage(){let n=localStorage.getItem(nc);return n?JSON.parse(n):(localStorage.setItem(nc,JSON.stringify(Om)),Om)}saveToStorage(n){localStorage.setItem(nc,JSON.stringify(n))}getArticles(n){let e=this.getFromStorage(),t=(n-1)*Im,r=e.slice(t,t+Im);return y({articles:r,total:e.length})}addArticle(n,e){let r=[G(_({},n),{id:Date.now().toString()}),...this.getFromStorage()];return this.saveToStorage(r),this.getArticles(e)}updateArticle(n,e){let t=this.getFromStorage().map(r=>r.id===n.id?n:r);return this.saveToStorage(t),this.getArticles(e)}deleteArticle(n,e){let t=this.getFromStorage().filter(r=>r.id!==n);return this.saveToStorage(t),this.getArticles(e)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})};var gi=class i{toArticle(n){return{id:n.id,title:n.title,content:n.content,date:new Date(n.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),image:n.image?`${at.apiUrl}/uploads/${n.image}`:void 0,rating:n.rating,categoryId:n.categoryId??void 0,categoryName:n.category?.name}}toComment(n){return{id:n.id,articleId:n.articleId,name:n.username,text:n.content,date:new Date(n.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),rating:n.rating}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"})};var gb=7,Da=class i{http=l(bt);mapper=l(gi);base=at.apiUrl;getArticles(n){return this.http.get(`${this.base}/articles`,{params:{page:n-1,limit:gb}}).pipe(I(e=>({articles:e.data.map(t=>this.mapper.toArticle(t)),total:e.total})))}addArticle(n,e,t){let r=this.buildFormData(n,t);return this.http.post(`${this.base}/articles`,r).pipe(oe(()=>this.getArticles(e)))}updateArticle(n,e,t){let r=this.buildFormData(n,t);return this.http.patch(`${this.base}/articles/${n.id}`,r).pipe(oe(()=>this.getArticles(e)))}deleteArticle(n,e){return this.http.delete(`${this.base}/articles/${n}`).pipe(oe(()=>this.getArticles(e)))}buildFormData(n,e){let t=new FormData;return t.append("title",n.title),t.append("content",n.content),n.categoryId&&t.append("categoryId",n.categoryId),e&&t.append("image",e),t}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})};var Fm="blog_articles",ic="blog_comments",Ea=class i{getArticles(){let n=localStorage.getItem(Fm);return n?JSON.parse(n):[]}getComments(){let n=localStorage.getItem(ic);return n?JSON.parse(n):[]}getArticleWithComments(n){let e=this.getArticles().find(r=>r.id===n);if(!e)return wn(()=>new Error(`Article ${n} not found`));let t=this.getComments().filter(r=>r.articleId===n);return y({article:e,comments:t})}addComment(n){let e=G(_({},n),{id:Date.now().toString()}),t=[...this.getComments(),e];return localStorage.setItem(ic,JSON.stringify(t)),y(t.filter(r=>r.articleId===n.articleId))}updateCommentRating(n,e){let t=this.getComments(),r=t.find(a=>a.id===n);if(!r)return y([]);let o=t.map(a=>a.id===n?G(_({},a),{rating:a.rating+e}):a);return localStorage.setItem(ic,JSON.stringify(o)),y(o.filter(a=>a.articleId===r.articleId))}updateArticleRating(n,e){let t=this.getArticles().map(r=>r.id===n?G(_({},r),{rating:(r.rating??0)+e}):r);return localStorage.setItem(Fm,JSON.stringify(t)),y(t.find(r=>r.id===n))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})};var Sa=class i{http=l(bt);mapper=l(gi);base=at.apiUrl;getArticleWithComments(n){return Dn({article:this.http.get(`${this.base}/articles/${n}`),comments:this.http.get(`${this.base}/comments/article/${n}`)}).pipe(I(({article:e,comments:t})=>({article:this.mapper.toArticle(e),comments:t.map(r=>this.mapper.toComment(r))})))}addComment(n){return this.http.post(`${this.base}/comments`,{username:n.name,content:n.text,articleId:n.articleId}).pipe(oe(()=>this.http.get(`${this.base}/comments/article/${n.articleId}`).pipe(I(e=>e.map(t=>this.mapper.toComment(t))))))}updateCommentRating(n,e){return this.http.patch(`${this.base}/comments/${n}/rating`,{rating:e}).pipe(oe(t=>this.http.get(`${this.base}/comments/article/${t.articleId}`).pipe(I(r=>r.map(o=>this.mapper.toComment(o))))))}updateArticleRating(n,e){let t=e>0?"rating-up":"rating-down";return this.http.patch(`${this.base}/articles/${n}/${t}`,{}).pipe(I(r=>this.mapper.toArticle(r)))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})};var Tm="blog_categories",Ma=class i{getFromStorage(){let n=localStorage.getItem(Tm);return n?JSON.parse(n):[]}getCategories(){return y(this.getFromStorage())}addCategory(n){let e=this.getFromStorage(),t=e.find(o=>o.name.toLowerCase()===n.toLowerCase());if(t)return y(t);let r={id:Date.now().toString(),name:n};return localStorage.setItem(Tm,JSON.stringify([...e,r])),y(r)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})};var Aa=class i{http=l(bt);base=at.apiUrl;getCategories(){return this.http.get(`${this.base}/categories`)}addCategory(n){return this.http.post(`${this.base}/categories`,{name:n})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=p({token:i,factory:i.\u0275fac})};var km={providers:[hc(),Ks(Rm,Js()),bu(),gs(_s()),{provide:ti,useClass:at.useApi?Da:xa},{provide:ya,useClass:at.useApi?Sa:Ea},{provide:ga,useClass:at.useApi?Aa:Ma}]};var _b=()=>({exact:!0}),Ra=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-header"]],decls:14,vars:6,consts:[[1,"header"],[1,"nav","container"],[1,"nav__logo",3,"routerLink"],[1,"nav__list"],["routerLinkActive","nav__link--active",1,"nav__link",3,"routerLink","routerLinkActiveOptions"],["routerLinkActive","nav__link--active",1,"nav__link",3,"routerLink"]],template:function(e,t){e&1&&(h(0,"header",0)(1,"nav",1)(2,"a",2),f(3,"Name-folio"),m(),h(4,"ul",3)(5,"li")(6,"a",4),f(7,"About me"),m()(),h(8,"li")(9,"a",5),f(10,"Blog"),m()(),h(11,"li")(12,"a",5),f(13,"Contact"),m()()()()()),e&2&&(g(2),z("routerLink","/"),g(4),z("routerLink","/")("routerLinkActiveOptions",Ln(5,_b)),g(3),z("routerLink","/blog"),g(3),z("routerLink","/contacts"))},dependencies:[tt,Zs],styles:[".header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;background:var(--color-white);border-bottom:1px solid var(--color-border)}.nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:64px}.nav__logo[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:var(--color-black);text-decoration:none}.nav__list[_ngcontent-%COMP%]{display:flex;gap:40px;list-style:none}.nav__link[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:var(--color-gray);text-decoration:none;transition:color .25s ease,font-weight .2s ease}.nav__link[_ngcontent-%COMP%]:hover, .nav__link--active[_ngcontent-%COMP%]{font-weight:700;color:var(--color-black)}"]})};var Ia=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-footer"]],decls:40,vars:0,consts:[[1,"footer"],[1,"footer__inner","container"],[1,"footer__left"],[1,"footer__title"],[1,"footer__contacts"],["href","mailto:alex@creativeblog.ru"],["href","tel:+70001234567"],[1,"footer__socials"],["href","https://vk.com","target","_blank","title","\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435",1,"footer__social"],["width","16","height","16","viewBox","0 0 24 24","fill","currentColor"],["d","M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1-1.49-.9-1.49.217v1.498c0 .387-.124.617-1.14.617-1.683 0-3.55-1.018-4.862-2.913C6.05 12.196 5.5 9.834 5.5 9.834c0-.387.124-.617.617-.617h1.744c.458 0 .633.21.81.703.893 2.576 2.387 4.836 3.003 4.836.232 0 .34-.107.34-.695V11.48c-.07-1.248-.73-1.354-.73-1.798 0-.232.19-.463.494-.463h2.744c.387 0 .525.21.525.665v3.577c0 .387.17.525.277.525.232 0 .425-.138.85-.563 1.32-1.477 2.261-3.753 2.261-3.753.124-.387.387-.617.844-.617h1.744c.525 0 .64.27.525.657-.217 1.018-2.33 3.99-2.33 3.99-.194.31-.263.449 0 .8.194.263.832.81 1.258 1.3.78.895 1.374 1.644 1.537 2.163.17.516-.107.78-.617.78z"],["href","https://t.me","target","_blank","title","Telegram",1,"footer__social"],["d","M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.981l-2.965-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.963.578z"],["href","https://github.com","target","_blank","title","GitHub",1,"footer__social"],["d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"],[1,"footer__copy"],[1,"footer__right"],[1,"form",3,"submit"],[1,"form__group"],["for","footer-email",1,"form__label"],["type","email","id","footer-email","placeholder","Your email address",1,"form__input"],["for","footer-msg",1,"form__label"],["id","footer-msg","rows","4","placeholder","Describe your project",1,"form__textarea"],["type","submit",1,"form__btn"]],template:function(e,t){e&1&&(x(0,"footer",0)(1,"div",1)(2,"div",2)(3,"h2",3),f(4,"Say hello and let's"),ae(5,"br"),f(6,"work together!"),A(),x(7,"div",4)(8,"p"),f(9,"Email: "),x(10,"a",5),f(11,"alex@creativeblog.ru"),A()(),x(12,"p"),f(13,"Phone: "),x(14,"a",6),f(15,"+7 (000) 123-45-67"),A()()(),x(16,"div",7)(17,"a",8),Lt(),x(18,"svg",9),ae(19,"path",10),A()(),Vt(),x(20,"a",11),Lt(),x(21,"svg",9),ae(22,"path",12),A()(),Vt(),x(23,"a",13),Lt(),x(24,"svg",9),ae(25,"path",14),A()()(),Vt(),x(26,"p",15),f(27,"\xA9 2025 Brand, Inc."),A()(),x(28,"div",16)(29,"form",17),Ic("submit",function(o){return o.preventDefault()}),x(30,"div",18)(31,"label",19),f(32,"Email"),A(),ae(33,"input",20),A(),x(34,"div",18)(35,"label",21),f(36,"Input your message"),A(),ae(37,"textarea",22),A(),x(38,"button",23),f(39,"Submit"),A()()()()())},styles:[".footer[_ngcontent-%COMP%]{background:var(--color-dark);color:var(--color-white);padding:72px 0}.footer__inner[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}.footer__title[_ngcontent-%COMP%]{color:var(--color-white);margin-bottom:24px}.footer__contacts[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;font-size:13px;color:#aaa;margin-bottom:20px}.footer__contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-green);text-decoration:none;transition:color .25s ease}.footer__contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#3d9440}.footer__socials[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.footer__social[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;border:1px solid #333333;color:#aaa;text-decoration:none;transition:border-color .25s ease,color .25s ease}.footer__social[_ngcontent-%COMP%]:hover{border-color:var(--color-green);color:var(--color-green)}.footer__copy[_ngcontent-%COMP%]{font-size:12px;color:#555}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.form__group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.form__label[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#ccc}.form__input[_ngcontent-%COMP%], .form__textarea[_ngcontent-%COMP%]{background:transparent;border:1px solid #333333;border-radius:4px;padding:10px 14px;font-family:inherit;font-size:13px;color:var(--color-white);outline:none;resize:none;transition:border-color .25s ease}.form__input[_ngcontent-%COMP%]::placeholder, .form__textarea[_ngcontent-%COMP%]::placeholder{color:#555}.form__input[_ngcontent-%COMP%]:focus, .form__textarea[_ngcontent-%COMP%]:focus{border-color:var(--color-green)}.form__btn[_ngcontent-%COMP%]{align-self:flex-start;padding:10px 28px;font-family:inherit;font-size:13px;font-weight:600;color:var(--color-white);background:var(--color-green);border:none;border-radius:4px;cursor:pointer;transition:background .25s ease}.form__btn[_ngcontent-%COMP%]:hover{background:#3d9440}"]})};var Oa=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-root"]],decls:3,vars:0,template:function(e,t){e&1&&Q(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[el,qi,Ra,Ia],encapsulation:2})};cs(Oa,km).catch(i=>console.error(i));
