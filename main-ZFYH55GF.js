import{$ as mt,$a as I,$b as Hn,A as Es,Aa as Rt,Ab as R,B as Yt,Ba as en,Bb as ke,C as ut,Ca as Bs,Cb as J,D as Do,Da as Vs,Db as zi,E as Ms,Ea as js,Eb as Ro,F as Ss,Fa as Us,Fb as ce,G as As,Ga as zs,Gb as de,H as Is,Ha as $s,Hb as Ks,I as Ti,Ia as Hs,Ib as Xs,J as Ae,Ja as Ie,Jb as Fo,K as Qe,Ka as Gs,Kb as To,L as be,La as qs,Lb as Z,M as S,Ma as p,Mb as rn,N as St,Na as tn,Nb as m,O as Bn,Oa as Ws,Ob as O,P as v,Pa as Ni,Pb as $i,Q as q,Qa as zn,Qb as qe,R as Rs,Ra as ki,Rb as Hi,S as b,Sa as et,Sb as Js,T as C,Ta as ye,Tb as Qs,U as c,Ua as j,Ub as el,V as Kt,Va as Li,Vb as U,W as Fs,Wa as Bi,Wb as ee,X as Se,Xa as Zs,Xb as tl,Y as _e,Ya as Vi,Yb as Gi,Z as ue,Za as w,Zb as on,_ as me,_a as W,_b as ht,a as h,aa as ft,ab as Re,ac as nl,b as N,ba as fe,bb as ji,bc as rt,ca as P,cb as Eo,cc as il,d as Gt,da as Xt,db as Mo,dc as ge,e as Cs,ea as Ts,eb as $n,ec as Oo,f as qt,fa as le,fb as So,fc as rl,g as Q,ga as G,gb as Ao,gc as ol,h as we,ha as At,hb as nn,hc as al,i as Ee,ia as Vn,ib as Fe,j as ae,ja as Os,jb as L,k as y,ka as A,kb as B,l as Wt,la as Ps,lb as Io,m as yo,ma as Ns,mb as Ui,n as Ds,na as Jt,nb as he,o as $,oa as Ne,ob as pe,p as Co,pa as It,pb as H,q as Je,qa as xo,qb as u,r as Ln,ra as K,rb as f,s as xs,sa as ks,sb as Y,t as Ri,ta as jn,tb as D,u as Fi,ua as Ls,ub as M,v as ws,va as Qt,vb as X,w as Me,wa as Oi,wb as it,x as Zt,xa as Un,xb as Ft,y as Mt,ya as wo,yb as k,z as dt,za as Pi,zb as Ys}from"./chunk-WOXXEWNU.js";var sl=null;function Le(){return sl}function Po(t){sl??=t}var Gn=class{},Tt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>c(ll),providedIn:"platform"})}return t})(),No=new b(""),ll=(()=>{class t extends Tt{_location;_history;_doc=c(P);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Le().getBaseHref(this._doc)}onPopState(e){let n=Le().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Le().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function qi(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function cl(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function We(t){return t&&t[0]!=="?"?`?${t}`:t}var Be=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>c(Zi),providedIn:"root"})}return t})(),Wi=new b(""),Zi=(()=>{class t extends Be{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(P).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return qi(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+We(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+We(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+We(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(C(Tt),C(Wi,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pt=(()=>{class t{_subject=new Q;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=gu(cl(dl(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+We(n))}normalize(e){return t.stripTrailingSlash(pu(this._basePath,dl(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+We(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+We(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=We;static joinWithSlash=qi;static stripTrailingSlash=cl;static \u0275fac=function(n){return new(n||t)(C(Be))};static \u0275prov=v({token:t,factory:()=>hu(),providedIn:"root"})}return t})();function hu(){return new pt(C(Be))}function pu(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function dl(t){return t.replace(/\/index.html$/,"")}function gu(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Yi=(()=>{class t extends Be{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=qi(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+We(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+We(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(C(Tt),C(Wi,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ko=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(fe);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(j(Bi))};static \u0275dir=I({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ne]})}return t})();function Ki(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Ot=class{};var Bo="browser";function ml(t){return t===Bo}var Vo=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new Lo(c(P),window)})}return t})(),Lo=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(N(h({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=yu(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(St(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),r=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(N(h({},e),{left:r-a[0],top:o-a[1]}))}};function yu(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let a=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(a)return a}r=n.nextNode()}}return null}var qn=class{_doc;constructor(i){this._doc=i}manager},Xi=(()=>{class t extends qn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(C(P))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),er=new b(""),$o=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Xi));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Xi);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new S(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(C(er),C(G))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),jo="ng-app-id";function fl(t){for(let i of t)i.remove()}function hl(t,i){let e=i.createElement("style");return e.textContent=t,e}function Du(t,i,e,n){let r=t.head?.querySelectorAll(`style[${jo}="${i}"],link[${jo}="${i}"]`);if(r)for(let o of r)o.removeAttribute(jo),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function zo(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Ho=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,Du(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,hl);n?.forEach(r=>this.addUsage(r,this.external,zo))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(fl(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])fl(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,hl(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,zo(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(C(P),C(jn),C(Un,8),C(Qt))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Uo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Go=/%COMP%/g;var gl="%COMP%",xu=`_nghost-${gl}`,wu=`_ngcontent-${gl}`,Eu=!0,Mu=new b("",{factory:()=>Eu});function Su(t){return wu.replace(Go,t)}function Au(t){return xu.replace(Go,t)}function vl(t,i){return i.map(e=>e.replace(Go,t))}var Yn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new Wn(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof Qi?r.applyToHost(e):r instanceof Zn&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,g=this.removeStylesOnCompDestroy,_=this.tracingService;switch(n.encapsulation){case Pi.Emulated:o=new Qi(l,d,n,this.appId,g,a,s,_);break;case Pi.ShadowDom:return new Ji(l,e,n,a,s,this.nonce,_,d);case Pi.ExperimentalIsolatedShadowDom:return new Ji(l,e,n,a,s,this.nonce,_);default:o=new Zn(l,d,n,g,a,s,_);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(C($o),C(Ho),C(jn),C(Mu),C(P),C(G),C(Un),C(Ni,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Wn=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Uo[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(pl(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(pl(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new S(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=Uo[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Uo[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(tn.DashCase|tn.Important)?i.style.setProperty(e,n,r&tn.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&tn.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Le().getGlobalEventTarget(this.doc,i),!i))throw new S(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function pl(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ji=class extends Wn{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,s,l){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=vl(n.id,d);for(let _ of d){let F=document.createElement("style");a&&F.setAttribute("nonce",a),F.textContent=_,this.shadowRoot.appendChild(F)}let g=n.getExternalStyles?.();if(g)for(let _ of g){let F=zo(_,r);a&&F.setAttribute("nonce",a),this.shadowRoot.appendChild(F)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Zn=class extends Wn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,s,l){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles;this.styles=l?vl(l,d):d,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ws.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Qi=class extends Zn{contentAttr;hostAttr;constructor(i,e,n,r,o,a,s,l){let d=r+"-"+n.id;super(i,e,n,o,a,s,l,d),this.contentAttr=Su(d),this.hostAttr=Au(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var tr=class t extends Gn{supportsDOMEvents=!0;static makeCurrent(){Po(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Ru();return e==null?null:Fu(e)}resetBaseElement(){Kn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Ki(document.cookie,i)}},Kn=null;function Ru(){return Kn=Kn||document.head.querySelector("base"),Kn?Kn.getAttribute("href"):null}function Fu(t){return new URL(t,document.baseURI).pathname}var Tu=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),bl=["alt","control","meta","shift"],Ou={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Pu={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},_l=(()=>{class t extends qn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Le().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),bl.forEach(d=>{let g=n.indexOf(d);g>-1&&(n.splice(g,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let r=Ou[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),bl.forEach(a=>{if(a!==r){let s=Pu[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(C(P))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();async function qo(t,i,e){let n=h({rootComponent:t},Nu(i,e));return il(n)}function Nu(t,i){return{platformRef:i?.platformRef,appProviders:[...ju,...t?.providers??[]],platformProviders:Vu}}function ku(){tr.makeCurrent()}function Lu(){return new At}function Bu(){return ks(document),document}var Vu=[{provide:Qt,useValue:Bo},{provide:Ls,useValue:ku,multi:!0},{provide:P,useFactory:Bu}];var ju=[{provide:Fs,useValue:"root"},{provide:At,useFactory:Lu},{provide:er,useClass:Xi,multi:!0},{provide:er,useClass:_l,multi:!0},Yn,Ho,$o,{provide:et,useExisting:Yn},{provide:Ot,useClass:Tu},[]];var gt=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Zo=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},Yo=class{encodeKey(i){return yl(i)}encodeValue(i){return yl(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Uu(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var zu=/%(\d[a-f0-9])/gi,$u={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function yl(t){return encodeURIComponent(t).replace(zu,(i,e)=>$u[e]??i)}function nr(t){return`${t}`}var ot=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Yo,i.fromString){if(i.fromObject)throw new S(2805,!1);this.map=Uu(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(nr):[nr(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(nr(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(nr(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function Hu(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Cl(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Dl(t){return typeof Blob<"u"&&t instanceof Blob}function xl(t){return typeof FormData<"u"&&t instanceof FormData}function Gu(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var wl="Content-Type",El="Accept",Ml="text/plain",Sl="application/json",qu=`${Sl}, ${Ml}, */*`,an=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(Hu(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new S(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new gt,this.context??=new Zo,!this.params)this.params=new ot,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Cl(this.body)||Dl(this.body)||xl(this.body)||Gu(this.body)?this.body:this.body instanceof ot?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||xl(this.body)?null:Dl(this.body)?this.body.type||null:Cl(this.body)?null:typeof this.body=="string"?Ml:this.body instanceof ot?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Sl:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,d=i.redirect||this.redirect,g=i.credentials||this.credentials,_=i.referrer||this.referrer,F=i.integrity||this.integrity,se=i.referrerPolicy||this.referrerPolicy,ne=i.transferCache??this.transferCache,te=i.timeout??this.timeout,T=i.body!==void 0?i.body:this.body,V=i.withCredentials??this.withCredentials,ie=i.reportProgress??this.reportProgress,xe=i.headers||this.headers,oe=i.params||this.params,Nn=i.context??this.context;return i.setHeaders!==void 0&&(xe=Object.keys(i.setHeaders).reduce((kn,Et)=>kn.set(Et,i.setHeaders[Et]),xe)),i.setParams&&(oe=Object.keys(i.setParams).reduce((kn,Et)=>kn.set(Et,i.setParams[Et]),oe)),new t(e,n,T,{params:oe,headers:xe,context:Nn,reportProgress:ie,responseType:r,withCredentials:V,transferCache:ne,keepalive:o,cache:s,priority:a,timeout:te,mode:l,redirect:d,credentials:g,referrer:_,integrity:F,referrerPolicy:se})}},Pt=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Pt||{}),Xn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new gt,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},Ko=class t extends Xn{constructor(i={}){super(i)}type=Pt.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Jn=class t extends Xn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Pt.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},sn=class extends Xn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Wu=200,Zu=204;var Yu=/^\)\]\}',?\n/;var Ku=(()=>{class t{xhrFactory;tracingService=c(Ni,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new S(-2800,!1);let n=this.xhrFactory;return y(null).pipe(Ae(()=>new qt(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((T,V)=>a.setRequestHeader(T,V.join(","))),e.headers.has(El)||a.setRequestHeader(El,qu),!e.headers.has(wl)){let T=e.detectContentTypeHeader();T!==null&&a.setRequestHeader(wl,T)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let T=e.responseType.toLowerCase();a.responseType=T!=="json"?T:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let T=a.statusText||"OK",V=new gt(a.getAllResponseHeaders()),ie=a.responseURL||e.url;return l=new Ko({headers:V,status:a.status,statusText:T,url:ie}),l},g=this.maybePropagateTrace(()=>{let{headers:T,status:V,statusText:ie,url:xe}=d(),oe=null;V!==Zu&&(oe=typeof a.response>"u"?a.responseText:a.response),V===0&&(V=oe?Wu:0);let Nn=V>=200&&V<300;if(e.responseType==="json"&&typeof oe=="string"){let kn=oe;oe=oe.replace(Yu,"");try{oe=oe!==""?JSON.parse(oe):null}catch(Et){oe=kn,Nn&&(Nn=!1,oe={error:Et,text:oe})}}Nn?(o.next(new Jn({body:oe,headers:T,status:V,statusText:ie,url:xe||void 0})),o.complete()):o.error(new sn({error:oe,headers:T,status:V,statusText:ie,url:xe||void 0}))}),_=this.maybePropagateTrace(T=>{let{url:V}=d(),ie=new sn({error:T,status:a.status||0,statusText:a.statusText||"Unknown Error",url:V||void 0});o.error(ie)}),F=_;e.timeout&&(F=this.maybePropagateTrace(T=>{let{url:V}=d(),ie=new sn({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:V||void 0});o.error(ie)}));let se=!1,ne=this.maybePropagateTrace(T=>{se||(o.next(d()),se=!0);let V={type:Pt.DownloadProgress,loaded:T.loaded};T.lengthComputable&&(V.total=T.total),e.responseType==="text"&&a.responseText&&(V.partialText=a.responseText),o.next(V)}),te=this.maybePropagateTrace(T=>{let V={type:Pt.UploadProgress,loaded:T.loaded};T.lengthComputable&&(V.total=T.total),o.next(V)});return a.addEventListener("load",g),a.addEventListener("error",_),a.addEventListener("timeout",F),a.addEventListener("abort",_),e.reportProgress&&(a.addEventListener("progress",ne),s!==null&&a.upload&&a.upload.addEventListener("progress",te)),a.send(s),o.next({type:Pt.Sent}),()=>{a.removeEventListener("error",_),a.removeEventListener("abort",_),a.removeEventListener("load",g),a.removeEventListener("timeout",F),e.reportProgress&&(a.removeEventListener("progress",ne),s!==null&&a.upload&&a.upload.removeEventListener("progress",te)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(C(Ot))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xu(t,i){return i(t)}function Ju(t,i,e){return(n,r)=>_e(e,()=>i(n,o=>t(o,r)))}var Qu=new b("",{factory:()=>[]}),Al=new b(""),em=new b("",{factory:()=>!0});var tm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=C(Ku),r},providedIn:"root"})}return t})();var nm=(()=>{class t{backend;injector;chain=null;pendingTasks=c(Ns);contributeToStability=c(em);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Qu),...this.injector.get(Al,[])]));this.chain=n.reduceRight((r,o)=>Ju(r,o,this.injector),Xu)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Yt(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(C(tm),C(Se))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),im=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=C(nm),r},providedIn:"root"})}return t})();function Wo(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Xo=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof an)o=e;else{let l;r.headers instanceof gt?l=r.headers:l=new gt(r.headers);let d;r.params&&(r.params instanceof ot?d=r.params:d=new ot({fromObject:r.params})),o=new an(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=y(o).pipe(Mt(l=>this.handler.handle(l)));if(e instanceof an||r.observe==="events")return a;let s=a.pipe(Me(l=>l instanceof Jn));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe($(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new S(2806,!1);return l.body}));case"blob":return s.pipe($(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new S(2807,!1);return l.body}));case"text":return s.pipe($(l=>{if(l.body!==null&&typeof l.body!="string")throw new S(2808,!1);return l.body}));default:return s.pipe($(l=>l.body))}case"response":return s;default:throw new S(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new ot().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,Wo(r,n))}post(e,n,r={}){return this.request("POST",e,Wo(r,n))}put(e,n,r={}){return this.request("PUT",e,Wo(r,n))}static \u0275fac=function(n){return new(n||t)(C(im))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vt=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(C(P))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Jo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=C(am),r},providedIn:"root"})}return t})(),am=(()=>{class t extends Jo{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Ie.NONE:return n;case Ie.HTML:return en(n,"HTML")?Rt(n):Hs(this._doc,String(n)).toString();case Ie.STYLE:return en(n,"Style")?Rt(n):n;case Ie.SCRIPT:if(en(n,"Script"))return Rt(n);throw new S(5200,!1);case Ie.URL:return en(n,"URL")?Rt(n):$s(String(n));case Ie.RESOURCE_URL:if(en(n,"ResourceURL"))return Rt(n);throw new S(5201,!1);default:throw new S(5202,!1)}}bypassSecurityTrustHtml(e){return Bs(e)}bypassSecurityTrustStyle(e){return Vs(e)}bypassSecurityTrustScript(e){return js(e)}bypassSecurityTrustUrl(e){return Us(e)}bypassSecurityTrustResourceUrl(e){return zs(e)}static \u0275fac=function(n){return new(n||t)(C(P))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var E="primary",ui=Symbol("RouteTitle"),ia=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function kt(t){return new ia(t)}function Qo(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function kl(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let l={},d=t.slice(0,n.length);return Qo(n,d,l)?{consumed:d,posParams:l}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Qo(o,t.slice(0,o.length),s)||!Qo(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function lr(t){return new Promise((i,e)=>{t.pipe(ut()).subscribe({next:n=>i(n),error:n=>e(n)})})}function sm(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!tt(t[e],i[e]))return!1;return!0}function tt(t,i){let e=t?ra(t):void 0,n=i?ra(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Ll(t[r],i[r]))return!1;return!0}function ra(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ll(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function lm(t){return t.length>0?t[t.length-1]:null}function Bt(t){return yo(t)?t:$n(t)?ae(Promise.resolve(t)):y(t)}function Bl(t){return yo(t)?lr(t):Promise.resolve(t)}var cm={exact:jl,subset:Ul},Vl={exact:dm,subset:um,ignored:()=>!0},ba={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ii={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function _a(t,i,e){let n=t instanceof Ce?t:i.parseUrl(t);return ee(()=>oa(i.lastSuccessfulNavigation()?.finalUrl??new Ce,n,h(h({},ii),e)))}function oa(t,i,e){return cm[e.paths](t.root,i.root,e.matrixParams)&&Vl[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function dm(t,i){return tt(t,i)}function jl(t,i,e){if(!Nt(t.segments,i.segments)||!or(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!jl(t.children[n],i.children[n],e))return!1;return!0}function um(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Ll(t[e],i[e]))}function Ul(t,i,e){return zl(t,i,i.segments,e)}function zl(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Nt(r,e)||i.hasChildren()||!or(r,e,n))}else if(t.segments.length===e.length){if(!Nt(t.segments,e)||!or(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!Ul(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Nt(t.segments,r)||!or(t.segments,r,n)||!t.children[E]?!1:zl(t.children[E],i,o,n)}}function or(t,i,e){return i.every((n,r)=>Vl[e](t[r].parameters,n.parameters))}var Ce=class{root;queryParams;fragment;_queryParamMap;constructor(i=new z([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=kt(this.queryParams),this._queryParamMap}toString(){return hm.serialize(this)}},z=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ar(this)}},bt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=kt(this.parameters),this._parameterMap}toString(){return Hl(this)}};function mm(t,i){return Nt(t,i)&&t.every((e,n)=>tt(e.parameters,i[n].parameters))}function Nt(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function fm(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===E&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==E&&(e=e.concat(i(r,n)))}),e}var Ct=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>new st,providedIn:"root"})}return t})(),st=class{parse(i){let e=new sa(i);return new Ce(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${Qn(i.root,!0)}`,n=vm(i.queryParams),r=typeof i.fragment=="string"?`#${pm(i.fragment)}`:"";return`${e}${n}${r}`}},hm=new st;function ar(t){return t.segments.map(i=>Hl(i)).join("/")}function Qn(t,i){if(!t.hasChildren())return ar(t);if(i){let e=t.children[E]?Qn(t.children[E],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==E&&n.push(`${r}:${Qn(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=fm(t,(n,r)=>r===E?[Qn(t.children[E],!1)]:[`${r}:${Qn(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[E]!=null?`${ar(t)}/${e[0]}`:`${ar(t)}/(${e.join("//")})`}}function $l(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ir(t){return $l(t).replace(/%3B/gi,";")}function pm(t){return encodeURI(t)}function aa(t){return $l(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function sr(t){return decodeURIComponent(t)}function Rl(t){return sr(t.replace(/\+/g,"%20"))}function Hl(t){return`${aa(t.path)}${gm(t.parameters)}`}function gm(t){return Object.entries(t).map(([i,e])=>`;${aa(i)}=${aa(e)}`).join("")}function vm(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${ir(e)}=${ir(r)}`).join("&"):`${ir(e)}=${ir(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var bm=/^[^\/()?;#]+/;function ea(t){let i=t.match(bm);return i?i[0]:""}var _m=/^[^\/()?;=#]+/;function ym(t){let i=t.match(_m);return i?i[0]:""}var Cm=/^[^=?&#]+/;function Dm(t){let i=t.match(Cm);return i?i[0]:""}var xm=/^[^&#]+/;function wm(t){let i=t.match(xm);return i?i[0]:""}var sa=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new z([],{}):new z([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new S(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[E]=new z(e,n)),r}parseSegment(){let i=ea(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new S(4009,!1);return this.capture(i),new bt(sr(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=ym(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=ea(this.remaining);r&&(n=r,this.capture(n))}i[sr(e)]=sr(n)}parseQueryParam(i){let e=Dm(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=wm(this.remaining);a&&(n=a,this.capture(n))}let r=Rl(e),o=Rl(n);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ea(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new S(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=E);let s=this.parseChildren(e+1);n[a??E]=Object.keys(s).length===1&&s[E]?s[E]:new z([],s),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new S(4011,!1)}};function Gl(t){return t.segments.length>0?new z([],{[E]:t}):t}function ql(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=ql(r);if(n===E&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new z(t.segments,i);return Em(e)}function Em(t){if(t.numberOfChildren===1&&t.children[E]){let i=t.children[E];return new z(t.segments.concat(i.segments),i.children)}return t}function _t(t){return t instanceof Ce}function Wl(t,i,e=null,n=null,r=new st){let o=Zl(t);return Yl(o,i,e,n,r)}function Zl(t){let i;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new z(o.url,a);return o===t&&(i=s),s}let n=e(t.root),r=Gl(n);return i??r}function Yl(t,i,e,n,r){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return ta(o,o,o,e,n,r);let a=Mm(i);if(a.toRoot())return ta(o,o,new z([],{}),e,n,r);let s=Sm(a,o,t),l=s.processChildren?ti(s.segmentGroup,s.index,a.commands):Xl(s.segmentGroup,s.index,a.commands);return ta(o,s.segmentGroup,l,e,n,r)}function cr(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function ri(t){return typeof t=="object"&&t!=null&&t.outlets}function Fl(t,i,e){t||="\u0275";let n=new Ce;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function ta(t,i,e,n,r,o){let a={};for(let[d,g]of Object.entries(n??{}))a[d]=Array.isArray(g)?g.map(_=>Fl(d,_,o)):Fl(d,g,o);let s;t===i?s=e:s=Kl(t,i,e);let l=Gl(ql(s));return new Ce(l,a,r)}function Kl(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=Kl(o,i,e)}),new z(t.segments,n)}var dr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&cr(n[0]))throw new S(4003,!1);let r=n.find(ri);if(r&&r!==lm(n))throw new S(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Mm(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new dr(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new dr(e,i,n)}var cn=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function Sm(t,i,e){if(t.isAbsolute)return new cn(i,!0,0);if(!e)return new cn(i,!1,NaN);if(e.parent===null)return new cn(e,!0,0);let n=cr(t.commands[0])?0:1,r=e.segments.length-1+n;return Am(e,r,t.numberOfDoubleDots)}function Am(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new S(4005,!1);r=n.segments.length}return new cn(n,!1,r-o)}function Im(t){return ri(t[0])?t[0].outlets:{[E]:t}}function Xl(t,i,e){if(t??=new z([],{}),t.segments.length===0&&t.hasChildren())return ti(t,i,e);let n=Rm(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new z(t.segments.slice(0,n.pathIndex),{});return o.children[E]=new z(t.segments.slice(n.pathIndex),t.children),ti(o,0,r)}else return n.match&&r.length===0?new z(t.segments,{}):n.match&&!t.hasChildren()?la(t,i,e):n.match?ti(t,0,r):la(t,i,e)}function ti(t,i,e){if(e.length===0)return new z(t.segments,{});{let n=Im(e),r={};if(Object.keys(n).some(o=>o!==E)&&t.children[E]&&t.numberOfChildren===1&&t.children[E].segments.length===0){let o=ti(t.children[E],i,e);return new z(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Xl(t.children[o],i,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new z(t.segments,r)}}function Rm(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let a=t.segments[r],s=e[n];if(ri(s))break;let l=`${s}`,d=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!Ol(l,d,a))return o;n+=2}else{if(!Ol(l,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function la(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(ri(o)){let l=Fm(o.outlets);return new z(n,l)}if(r===0&&cr(e[0])){let l=t.segments[i];n.push(new bt(l.path,Tl(e[0]))),r++;continue}let a=ri(o)?o.outlets[E]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&cr(s)?(n.push(new bt(a,Tl(s))),r+=2):(n.push(new bt(a,{})),r++)}return new z(n,{})}function Fm(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=la(new z([],{}),0,n))}),i}function Tl(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Ol(t,i,e){return t==e.path&&tt(i,e.parameters)}var dn="imperative",re=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(re||{}),Oe=class{id;url;constructor(i,e){this.id=i,this.url=e}},yt=class extends Oe{type=re.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Pe=class extends Oe{urlAfterRedirects;type=re.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ve=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(ve||{}),mn=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(mn||{}),Ve=class extends Oe{reason;code;type=re.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Jl(t){return t instanceof Ve&&(t.code===ve.Redirect||t.code===ve.SupersededByNewNavigation)}var nt=class extends Oe{reason;code;type=re.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},Lt=class extends Oe{error;target;type=re.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},oi=class extends Oe{urlAfterRedirects;state;type=re.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ur=class extends Oe{urlAfterRedirects;state;type=re.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mr=class extends Oe{urlAfterRedirects;state;shouldActivate;type=re.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},fr=class extends Oe{urlAfterRedirects;state;type=re.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hr=class extends Oe{urlAfterRedirects;state;type=re.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pr=class{route;type=re.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},gr=class{route;type=re.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},vr=class{snapshot;type=re.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},br=class{snapshot;type=re.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_r=class{snapshot;type=re.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yr=class{snapshot;type=re.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fn=class{routerEvent;position;anchor;scrollBehavior;type=re.Scroll;constructor(i,e,n,r){this.routerEvent=i,this.position=e,this.anchor=n,this.scrollBehavior=r}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},hn=class{},ai=class{},pn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Tm(t){return!(t instanceof hn)&&!(t instanceof pn)&&!(t instanceof ai)}var Cr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Vt(this.rootInjector)}},Vt=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Cr(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(C(Se))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dr=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=ca(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=ca(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=da(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return da(i,this._root).map(e=>e.value)}};function ca(t,i){if(t===i.value)return i;for(let e of i.children){let n=ca(t,e);if(n)return n}return null}function da(t,i){if(t===i.value)return[i];for(let e of i.children){let n=da(t,e);if(n.length)return n.unshift(i),n}return[]}var Te=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function ln(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var si=class extends Dr{snapshot;constructor(i,e){super(i),this.snapshot=e,Ca(this,i)}toString(){return this.snapshot.toString()}};function Ql(t,i){let e=Om(t,i),n=new we([new bt("",{})]),r=new we({}),o=new we({}),a=new we({}),s=new we(""),l=new je(n,r,a,s,o,E,t,e.root);return l.snapshot=e.root,new si(new Te(l,[]),e)}function Om(t,i){let e={},n={},r={},a=new gn([],e,r,"",n,E,t,null,{},i);return new li("",new Te(a,[]))}var je=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe($(d=>d[ui]))??y(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe($(i=>kt(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe($(i=>kt(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ya(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:h(h({},i.params),t.params),data:h(h({},i.data),t.data),resolve:h(h(h(h({},t.data),i.data),r?.data),t._resolvedData)}:n={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},r&&tc(r)&&(n.resolve[ui]=r.title),n}var gn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ui]}constructor(i,e,n,r,o,a,s,l,d,g){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=g}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=kt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=kt(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},li=class extends Dr{url;constructor(i,e){super(e),this.url=i,Ca(this,e)}toString(){return ec(this._root)}};function Ca(t,i){i.value._routerState=t,i.children.forEach(e=>Ca(t,e))}function ec(t){let i=t.children.length>0?` { ${t.children.map(ec).join(", ")} } `:"";return`${t.value}${i}`}function na(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,tt(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),tt(i.params,e.params)||t.paramsSubject.next(e.params),sm(i.url,e.url)||t.urlSubject.next(e.url),tt(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function ua(t,i){let e=tt(t.params,i.params)&&mm(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||ua(t.parent,i.parent))}function tc(t){return typeof t.title=="string"||t.title===null}var nc=new b(""),mi=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=E;activateEvents=new le;deactivateEvents=new le;attachEvents=new le;detachEvents=new le;routerOutletData=ht();parentContexts=c(Vt);location=c(Bi);changeDetector=c(rt);inputBinder=c(fi,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new S(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new S(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new S(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new S(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new ma(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ne]})}return t})(),ma=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===je?this.route:i===Vt?this.childContexts:i===nc?this.outletData:this.parent.get(i,e)}},fi=new b(""),Da=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=Co([n.queryParams,n.params,n.data]).pipe(Ae(([o,a,s],l)=>(s=h(h(h({},o),a),s),l===0?y(s):Promise.resolve(s)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let a=al(n.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of a.inputs)e.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),xa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&Y(0,"router-outlet")},dependencies:[mi],encapsulation:2})}return t})();function wa(t){let i=t.children&&t.children.map(wa),e=i?N(h({},t),{children:i}):h({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==E&&(e.component=xa),e}function Pm(t,i,e){let n=ci(t,i._root,e?e._root:void 0);return new si(n,i)}function ci(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=Nm(t,i,e);return new Te(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>ci(t,s)),a}}let n=km(i.value),r=i.children.map(o=>ci(t,o));return new Te(n,r)}}function Nm(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return ci(t,n,r);return ci(t,n)})}function km(t){return new je(new we(t.url),new we(t.params),new we(t.queryParams),new we(t.fragment),new we(t.data),t.outlet,t.component,t)}var vn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},ic="ngNavigationCancelingError";function xr(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=_t(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=rc(!1,ve.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function rc(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ic]=!0,e.cancellationCode=i,e}function Lm(t){return oc(t)&&_t(t.url)}function oc(t){return!!t&&t[ic]}var fa=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),na(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=ln(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ln(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ln(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=ln(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new yr(o.value.snapshot))}),i.children.length&&this.forwardEvent(new br(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(na(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),na(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,n)}},wr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},un=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Bm(t,i,e){let n=t._root,r=i?i._root:null;return ei(n,r,e,[n.value])}function Vm(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function _n(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!Rs(t)?t:i.get(t):n}function ei(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ln(i);return t.children.forEach(a=>{jm(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>ni(s,e.getContext(a),r)),r}function jm(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=i?i.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Um(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new wr(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ei(t,i,s?s.children:null,n,r):ei(t,i,e,n,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new un(s.outlet.component,a))}else a&&ni(i,s,r),r.canActivateChecks.push(new wr(n)),o.component?ei(t,null,s?s.children:null,n,r):ei(t,null,e,n,r);return r}function Um(t,i,e){if(typeof e=="function")return _e(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!Nt(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Nt(t.url,i.url)||!tt(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ua(t,i)||!tt(t.queryParams,i.queryParams);default:return!ua(t,i)}}function ni(t,i,e){let n=ln(t),r=t.value;Object.entries(n).forEach(([o,a])=>{r.component?i?ni(a,i.children.getContext(o),e):ni(a,null,e):ni(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new un(i.outlet.component,r)):e.canDeactivateChecks.push(new un(null,r)):e.canDeactivateChecks.push(new un(null,r))}function hi(t){return typeof t=="function"}function zm(t){return typeof t=="boolean"}function $m(t){return t&&hi(t.canLoad)}function Hm(t){return t&&hi(t.canActivate)}function Gm(t){return t&&hi(t.canActivateChild)}function qm(t){return t&&hi(t.canDeactivate)}function Wm(t){return t&&hi(t.canMatch)}function ac(t){return t instanceof Ds||t?.name==="EmptyError"}var rr=Symbol("INITIAL_VALUE");function bn(){return Ae(t=>Co(t.map(i=>i.pipe(dt(1),Ti(rr)))).pipe($(i=>{for(let e of i)if(e!==!0){if(e===rr)return rr;if(e===!1||Zm(e))return e}return!0}),Me(i=>i!==rr),dt(1)))}function Zm(t){return _t(t)||t instanceof vn}function sc(t){return t.aborted?y(void 0).pipe(dt(1)):new qt(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function lc(t){return Qe(sc(t))}function Ym(t){return Je(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?y(N(h({},i),{guardsResult:!0})):Km(o,e,n).pipe(Je(a=>a&&zm(a)?Xm(e,r,t):y(a)),$(a=>N(h({},i),{guardsResult:a})))})}function Km(t,i,e){return ae(t).pipe(Je(n=>nf(n.component,n.route,e,i)),ut(n=>n!==!0,!0))}function Xm(t,i,e){return ae(i).pipe(Mt(n=>xs(Qm(n.route.parent,e),Jm(n.route,e),tf(t,n.path),ef(t,n.route))),ut(n=>n!==!0,!0))}function Jm(t,i){return t!==null&&i&&i(new _r(t)),y(!0)}function Qm(t,i){return t!==null&&i&&i(new vr(t)),y(!0)}function ef(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return y(!0);let n=e.map(r=>Ri(()=>{let o=i._environmentInjector,a=_n(r,o),s=Hm(a)?a.canActivate(i,t):_e(o,()=>a(i,t));return Bt(s).pipe(ut())}));return y(n).pipe(bn())}function tf(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Vm(o)).filter(o=>o!==null).map(o=>Ri(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=_n(s,l),g=Gm(d)?d.canActivateChild(e,t):_e(l,()=>d(e,t));return Bt(g).pipe(ut())});return y(a).pipe(bn())}));return y(r).pipe(bn())}function nf(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return y(!0);let o=r.map(a=>{let s=i._environmentInjector,l=_n(a,s),d=qm(l)?l.canDeactivate(t,i,e,n):_e(s,()=>l(t,i,e,n));return Bt(d).pipe(ut())});return y(o).pipe(bn())}function rf(t,i,e,n,r){let o=i.canLoad;if(o===void 0||o.length===0)return y(!0);let a=o.map(s=>{let l=_n(s,t),d=$m(l)?l.canLoad(i,e):_e(t,()=>l(i,e)),g=Bt(d);return r?g.pipe(lc(r)):g});return y(a).pipe(bn(),cc(n))}function cc(t){return Cs(be(i=>{if(typeof i!="boolean")throw xr(t,i)}),$(i=>i===!0))}function of(t,i,e,n,r,o){let a=i.canMatch;if(!a||a.length===0)return y(!0);let s=a.map(l=>{let d=_n(l,t),g=Wm(d)?d.canMatch(i,e,r):_e(t,()=>d(i,e,r));return Bt(g).pipe(lc(o))});return y(s).pipe(bn(),cc(n))}var at=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},di=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function af(t){throw new S(4e3,!1)}function sf(t){throw rc(!1,ve.GuardRejected)}var ha=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[E])throw af(`${i.redirectTo}`);r=r.children[E]}}async applyRedirectCommands(i,e,n,r,o){let a=await lf(e,r,o);if(a instanceof Ce)throw new di(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,n);if(a[0]==="/")throw new di(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new Ce(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,n,r)}),new z(o,a)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new S(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function lf(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return lr(Bt(_e(e,()=>n(i))))}function cf(t,i){return t.providers&&!t._injector&&(t._injector=Vi(t.providers,i,`Route: ${t.path}`)),t._injector??i}function Ze(t){return t.outlet||E}function df(t,i){let e=t.filter(n=>Ze(n)===i);return e.push(...t.filter(n=>Ze(n)!==i)),e}var pa={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function dc(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function uf(t,i,e,n,r,o,a){let s=uc(t,i,e);if(!s.matched)return y(s);let l=dc(o(s));return n=cf(i,n),of(n,i,e,r,l,a).pipe($(d=>d===!0?s:h({},pa)))}function uc(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},pa):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||kl)(e,t,i);if(!r)return h({},pa);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?h(h({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Pl(t,i,e,n,r){return e.length>0&&hf(t,e,n,r)?{segmentGroup:new z(i,ff(n,new z(e,t.children))),slicedSegments:[]}:e.length===0&&pf(t,e,n)?{segmentGroup:new z(t.segments,mf(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new z(t.segments,t.children),slicedSegments:e}}function mf(t,i,e,n){let r={};for(let o of e)if(Mr(t,i,o)&&!n[Ze(o)]){let a=new z([],{});r[Ze(o)]=a}return h(h({},n),r)}function ff(t,i){let e={};e[E]=i;for(let n of t)if(n.path===""&&Ze(n)!==E){let r=new z([],{});e[Ze(n)]=r}return e}function hf(t,i,e,n){return e.some(r=>!Mr(t,i,r)||!(Ze(r)!==E)?!1:!(n!==void 0&&Ze(r)===n))}function pf(t,i,e){return e.some(n=>Mr(t,i,n))}function Mr(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function gf(t,i,e){return i.length===0&&!t.children[e]}var ga=class{};async function vf(t,i,e,n,r,o,a="emptyOnly",s){return new va(t,i,e,n,r,a,o,s).recognize()}var bf=31,va=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new ha(this.urlSerializer,this.urlTree)}noMatchError(i){return new S(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Pl(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(i),r=new Te(n,e),o=new li("",r),a=Wl(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new gn([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),E,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,E,e),rootSnapshot:e}}catch(n){if(n instanceof di)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof at?this.noMatchError(n):n}}async processSegmentGroup(i,e,n,r,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,o);let a=await this.processSegment(i,e,n,n.segments,r,!0,o);return a instanceof Te?[a]:[]}async processChildren(i,e,n,r){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=n.children[l],g=df(e,l),_=await this.processSegmentGroup(i,g,d,l,r);a.push(..._)}let s=mc(a);return _f(s),s}async processSegment(i,e,n,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??i,e,l,n,r,o,a,s)}catch(d){if(d instanceof at||ac(d))continue;throw d}if(gf(n,r,o))return new ga;throw new at(n)}async processSegmentAgainstRoute(i,e,n,r,o,a,s,l){if(Ze(n)!==a&&(a===E||!Mr(r,o,n)))throw new at(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,a,l);throw new at(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,a,s){let{matched:l,parameters:d,consumedSegments:g,positionalParamSegments:_,remainingSegments:F}=uc(e,r,o);if(!l)throw new at(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>bf&&(this.allowRedirects=!1));let se=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let ne=await this.applyRedirects.applyRedirectCommands(g,r.redirectTo,_,dc(se),i),te=await this.applyRedirects.lineralizeSegments(r,ne);return this.processSegment(i,n,e,te.concat(F),a,!1,s)}createSnapshot(i,e,n,r,o){let a=new gn(n,r,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Cf(e),Ze(e),e.component??e._loadedComponent??null,e,Df(e),i),s=ya(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,n,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=xe=>this.createSnapshot(i,n,xe.consumedSegments,xe.parameters,a),l=await lr(uf(e,n,r,i,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new at(e);i=n._injector??i;let{routes:d}=await this.getChildConfig(i,n,r),g=n._loadedInjector??i,{parameters:_,consumedSegments:F,remainingSegments:se}=l,ne=this.createSnapshot(i,n,F,_,a),{segmentGroup:te,slicedSegments:T}=Pl(e,F,se,d,o);if(T.length===0&&te.hasChildren()){let xe=await this.processChildren(g,d,te,ne);return new Te(ne,xe)}if(d.length===0&&T.length===0)return new Te(ne,[]);let V=Ze(n)===o,ie=await this.processSegment(g,d,te,T,V?E:o,!0,ne);return new Te(ne,ie instanceof Te?[ie]:[])}async getChildConfig(i,e,n){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await lr(rf(i,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw sf(e)}return{routes:[],injector:i}}};function _f(t){t.sort((i,e)=>i.value.outlet===E?-1:e.value.outlet===E?1:i.value.outlet.localeCompare(e.value.outlet))}function yf(t){let i=t.value.routeConfig;return i&&i.path===""}function mc(t){let i=[],e=new Set;for(let n of t){if(!yf(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=mc(n.children);i.push(new Te(n.value,r))}return i.filter(n=>!e.has(n))}function Cf(t){return t.data||{}}function Df(t){return t.resolve||{}}function xf(t,i,e,n,r,o,a){return Je(async s=>{let{state:l,tree:d}=await vf(t,i,e,n,s.extractedUrl,r,o,a);return N(h({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function wf(t){return Je(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return y(i);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of fc(s))o.add(l);let a=0;return ae(o).pipe(Mt(s=>r.has(s)?Ef(s,e,t):(s.data=ya(s,s.parent,t).resolve,y(void 0))),be(()=>a++),Do(1),Je(s=>a===o.size?y(i):Ee))})}function fc(t){let i=t.children.map(e=>fc(e)).flat();return[t,...i]}function Ef(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!tc(n)&&(r[ui]=n.title),Ri(()=>(t.data=ya(t,t.parent,e).resolve,Mf(r,t,i).pipe($(o=>(t._resolvedData=o,t.data=h(h({},t.data),o),null)))))}function Mf(t,i,e){let n=ra(t);if(n.length===0)return y({});let r={};return ae(n).pipe(Je(o=>Sf(t[o],i,e).pipe(ut(),be(a=>{if(a instanceof vn)throw xr(new st,a);r[o]=a}))),Do(1),$(()=>r),Zt(o=>ac(o)?Ee:Wt(o)))}function Sf(t,i,e){let n=i._environmentInjector,r=_n(t,n),o=r.resolve?r.resolve(i,e):_e(n,()=>r(i,e));return Bt(o)}function Nl(t){return Ae(i=>{let e=t(i);return e?ae(e).pipe($(()=>i)):y(i)})}var Ea=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===E);return n}getResolvedTitleForRoute(e){return e.data[ui]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>c(hc),providedIn:"root"})}return t})(),hc=(()=>{class t extends Ea{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(C(vt))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dt=new b("",{factory:()=>({})}),jt=new b(""),Sr=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(el);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await Bl(_e(e,()=>n.loadComponent())),a=await vc(gc(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await pc(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function pc(t,i,e,n){let r=await Bl(_e(e,()=>t.loadChildren())),o=await vc(gc(r)),a;o instanceof Zs||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),n&&n(t);let s,l,d=!1,g;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,g=a,l=s.get(jt,[],{optional:!0,self:!0}).flat()),{routes:l.map(wa),injector:s,factory:g}}function Af(t){return t&&typeof t=="object"&&"default"in t}function gc(t){return Af(t)?t.default:t}async function vc(t){return t}var Ar=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>c(If),providedIn:"root"})}return t})(),If=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ma=new b(""),Sa=new b("");function bc(t,i,e){let n=t.get(Sa),r=t.get(P);if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),Rf(t)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:l}=n;return l&&_e(t,()=>l({transition:s,from:i,to:e})),a}function Rf(t){return new Promise(i=>{ki({read:()=>setTimeout(i)},{injector:t})})}var Ff=()=>{},Aa=new b(""),Ir=(()=>{class t{currentNavigation=A(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=A(null);events=new Q;transitionAbortWithErrorSubject=new Q;configLoader=c(Sr);environmentInjector=c(Se);destroyRef=c(Xt);urlSerializer=c(Ct);rootContexts=c(Vt);location=c(pt);inputBindingEnabled=c(fi,{optional:!0})!==null;titleStrategy=c(Ea);options=c(Dt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(Ar);createViewTransition=c(Ma,{optional:!0});navigationErrorHandler=c(Aa,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>y(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new pr(r)),n=r=>this.events.next(new gr(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;U(()=>{this.transitions?.next(N(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new we(null),this.transitions.pipe(Me(n=>n!==null),Ae(n=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===n.id;return y(n).pipe(Ae(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",ve.SupersededByNewNavigation),Ee;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?N(h({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),g=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&g!=="reload")return this.events.next(new nt(s.id,this.urlSerializer.serialize(s.rawUrl),"",mn.IgnoredSameUrlNavigation)),s.resolve(!1),Ee;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return y(s).pipe(Ae(_=>(this.events.next(new yt(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),_.id!==this.navigationId?Ee:Promise.resolve(_))),xf(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),be(_=>{n.targetSnapshot=_.targetSnapshot,n.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation.update(F=>(F.finalUrl=_.urlAfterRedirects,F)),this.events.next(new ai)}),Ae(_=>ae(n.routesRecognizeHandler.deferredHandle??y(void 0)).pipe($(()=>_))),be(()=>{let _=new oi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:_,extractedUrl:F,source:se,restoredState:ne,extras:te}=s,T=new yt(_,this.urlSerializer.serialize(F),se,ne);this.events.next(T);let V=Ql(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=N(h({},s),{targetSnapshot:V,urlAfterRedirects:F,extras:N(h({},te),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ie=>(ie.finalUrl=F,ie)),y(n)}else return this.events.next(new nt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",mn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Ee}),$(s=>{let l=new ur(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=n=N(h({},s),{guards:Bm(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),Ym(s=>this.events.next(s)),Ae(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw xr(this.urlSerializer,s.guardsResult);let l=new mr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return Ee;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",ve.GuardRejected),Ee;if(s.guards.canActivateChecks.length===0)return y(s);let d=new fr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Ee;let g=!1;return y(s).pipe(wf(this.paramsInheritanceStrategy),be({next:()=>{g=!0;let _=new hr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)},complete:()=>{g||this.cancelNavigationTransition(s,"",ve.NoDataFromResolver)}}))}),Nl(s=>{let l=g=>{let _=[];if(g.routeConfig?._loadedComponent)g.component=g.routeConfig?._loadedComponent;else if(g.routeConfig?.loadComponent){let F=g._environmentInjector;_.push(this.configLoader.loadComponent(F,g.routeConfig).then(se=>{g.component=se}))}for(let F of g.children)_.push(...l(F));return _},d=l(s.targetSnapshot.root);return d.length===0?y(s):ae(Promise.all(d).then(()=>s))}),Nl(()=>this.afterPreactivation()),Ae(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?ae(d).pipe($(()=>n)):y(n)}),dt(1),Ae(s=>{let l=Pm(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=N(h({},s),{targetRouterState:l}),this.currentNavigation.update(g=>(g.targetRouterState=l,g)),this.events.next(new hn);let d=n.beforeActivateHandler.deferredHandle;return d?ae(d.then(()=>s)):y(s)}),be(s=>{new fa(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=Ff,l)),this.lastSuccessfulNavigation.set(U(this.currentNavigation)),this.events.next(new Pe(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Qe(sc(o.signal).pipe(Me(()=>!r&&!n.targetRouterState),be(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",ve.Aborted)}))),be({complete:()=>{r=!0}}),Qe(this.transitionAbortWithErrorSubject.pipe(be(s=>{throw s}))),Yt(()=>{o.abort(),r||this.cancelNavigationTransition(n,"",ve.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Zt(s=>{if(r=!0,this.destroyed)return n.resolve(!1),Ee;if(oc(s))this.events.next(new Ve(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Lm(s)?this.events.next(new pn(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new Lt(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=_e(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof vn){let{message:g,cancellationCode:_}=xr(this.urlSerializer,d);this.events.next(new Ve(n.id,this.urlSerializer.serialize(n.extractedUrl),g,_)),this.events.next(new pn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return Ee}))}))}cancelNavigationTransition(e,n,r){let o=new Ve(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=U(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Tf(t){return t!==dn}var _c=new b("");var yc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>c(Of),providedIn:"root"})}return t})(),Er=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Of=(()=>{class t extends Er{static \u0275fac=(()=>{let e;return function(r){return(e||(e=It(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rr=(()=>{class t{urlSerializer=c(Ct);options=c(Dt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(pt);urlHandlingStrategy=c(Ar);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ce;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof Ce?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Ql(null,c(Se));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:()=>c(Pf),providedIn:"root"})}return t})(),Pf=(()=>{class t extends Rr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof yt?this.updateStateMemento():e instanceof nt?this.commitTransition(n):e instanceof oi?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof hn?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ve&&!Jl(e)?this.restoreHistory(n):e instanceof Lt?this.restoreHistory(n,!0):e instanceof Pe&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:o,state:a}=n;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,l=h(h({},a),this.generateNgRouterState(r,s));this.location.replaceState(e,"",l)}else{let s=h(h({},a),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=It(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Fr(t,i){t.events.pipe(Me(e=>e instanceof Pe||e instanceof Ve||e instanceof Lt||e instanceof nt),$(e=>e instanceof Pe||e instanceof nt?0:(e instanceof Ve?e.code===ve.Redirect||e.code===ve.SupersededByNewNavigation:!1)?2:1),Me(e=>e!==2),dt(1)).subscribe(()=>{i()})}var Ye=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Eo);stateManager=c(Rr);options=c(Dt,{optional:!0})||{};pendingTasks=c(Ts);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Ir);urlSerializer=c(Ct);location=c(pt);urlHandlingStrategy=c(Ar);injector=c(Se);_events=new Q;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(yc);injectorCleanup=c(_c,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(jt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(fi,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Gt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=U(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Ve&&n.code!==ve.Redirect&&n.code!==ve.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Pe)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof pn){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=h({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Tf(r.source)},a);this.scheduleNavigation(s,dn,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Tm(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),dn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null;if(r){let l=h({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,n,a,o).catch(l=>{this.disposed||this.injector.get(Vn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return U(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(wa),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,d=l?this.currentUrlTree.fragment:a,g=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":g=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":g=this.currentUrlTree.queryParams;break;default:g=o||null}g!==null&&(g=this.removeEmptyProps(g));let _;try{let F=r?r.snapshot:this.routerState.snapshot.root;_=Zl(F)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),_=this.currentUrlTree.root}return Yl(_,e,g,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=_t(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,dn,null,n)}navigate(e,n={skipLocationChange:!1}){return Nf(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(St(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=h({},ba):n===!1?r=h({},ii):r=h(h({},ii),n),_t(e))return oa(this.currentUrlTree,e,r);let o=this.parseUrl(e);return oa(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((_,F)=>{s=_,l=F});let g=this.pendingTasks.add();return Fr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(g))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Nf(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new S(4008,!1)}var kf=(()=>{class t{router=c(Ye);stateManager=c(Rr);fragment=A("");queryParams=A({});path=A("");serializer=c(Ct);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Pe&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Ce(n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ue=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Gi("href"),{optional:!0});reactiveHref=tl(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return U(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return U(this._target)}_target=A(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return U(this._queryParams)}_queryParams=A(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return U(this._fragment)}_fragment=A(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return U(this._queryParamsHandling)}_queryParamsHandling=A(void 0);set state(e){this._state.set(e)}get state(){return U(this._state)}_state=A(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return U(this._info)}_info=A(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return U(this._relativeTo)}_relativeTo=A(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return U(this._preserveFragment)}_preserveFragment=A(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return U(this._skipLocationChange)}_skipLocationChange=A(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return U(this._replaceUrl)}_replaceUrl=A(!1);isAnchorElement;onChanges=new Q;applicationErrorHandler=c(Vn);options=c(Dt,{optional:!0});reactiveRouterState=c(kf);constructor(e,n,r,o,a,s){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=A(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(_t(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||n||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let r=this.renderer,o=this.el.nativeElement;n!==null?r.setAttribute(o,e,n):r.removeAttribute(o,e)}_urlTree=ee(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:_t(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return U(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||t)(j(Ye),j(je),xo("tabindex"),j(ye),j(K),j(Be))};static \u0275dir=I({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,r){n&1&&k("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),n&2&&Fe("href",r.reactiveHref(),qs)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ge],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ge],replaceUrl:[2,"replaceUrl","replaceUrl",ge],routerLink:"routerLink"},features:[Ne]})}return t})(),Ra=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new le;link=c(Ue,{optional:!0});constructor(e,n,r,o){this.router=e,this.element=n,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof Pe&&this.update()})}ngAfterContentInit(){y(this.links.changes,y(null)).pipe(Ln()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=ae(e).pipe(Ln()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=Lf(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?h({},ba):h({},ii);return r=>{let o=r.urlTree;return o?U(_a(o,e,n)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)(j(Ye),j(K),j(ye),j(rt))};static \u0275dir=I({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,o){if(n&1&&zi(o,Ue,5),n&2){let a;ce(a=de())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ne]})}return t})();function Lf(t){let i=t;return!!(i.paths||i.matrixParams||i.queryParams||i.fragment)}var pi=class{};var Cc=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,o){this.router=e,this.injector=n,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Me(e=>e instanceof Pe),Mt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let r=[];for(let o of n){o.providers&&!o._injector&&(o._injector=Vi(o.providers,e,""));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return ae(r).pipe(Ln())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return y(null);let r;n.loadChildren&&n.canLoad===void 0?r=ae(this.loader.loadChildren(e,n)):r=y(null);let o=r.pipe(Je(a=>a===null?y(void 0):(n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(n.loadComponent&&!n._loadedComponent){let a=this.loader.loadComponent(e,n);return ae([o,a]).pipe(Ln())}else return o})}static \u0275fac=function(n){return new(n||t)(C(Ye),C(Se),C(pi),C(Sr))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dc=new b(""),Bf=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=dn;restoredId=0;store={};urlSerializer=c(Ct);zone=c(G);viewportScroller=c(Vo);transitions=c(Ir);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof yt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Pe?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof nt&&e.code===mn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof fn)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){let r=U(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new fn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Li()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function Fa(t,...i){return Kt([{provide:jt,multi:!0,useValue:t},[],{provide:je,useFactory:xc},{provide:Ao,multi:!0,useFactory:wc},i.map(e=>e.\u0275providers)])}function xc(){return c(Ye).routerState.root}function yn(t,i){return{\u0275kind:t,\u0275providers:i}}function wc(){let t=c(fe);return i=>{let e=t.get(nn);if(i!==e.components[0])return;let n=t.get(Ye),r=t.get(Ec);t.get(Ta)===1&&n.initialNavigation(),t.get(Ac,null,{optional:!0})?.setUpPreloading(),t.get(Dc,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ec=new b("",{factory:()=>new Q}),Ta=new b("",{factory:()=>1});function Mc(){let t=[{provide:wo,useValue:!0},{provide:Ta,useValue:0},So(()=>{let i=c(fe);return i.get(No,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(Ye),o=i.get(Ec);Fr(r,()=>{n(!0)}),i.get(Ir).afterPreactivation=()=>(n(!0),o.closed?y(void 0):o),r.initialNavigation()}))})];return yn(2,t)}function Sc(){let t=[So(()=>{c(Ye).setUpLocationChangeListener()}),{provide:Ta,useValue:2}];return yn(3,t)}var Ac=new b("");function Ic(t){return yn(0,[{provide:Ac,useExisting:Cc},{provide:pi,useExisting:t}])}function Oa(){return yn(6,[{provide:Be,useClass:Yi}])}function Rc(){return yn(8,[Da,{provide:fi,useExisting:Da}])}function Fc(t){zn("NgRouterViewTransitions");let i=[{provide:Ma,useValue:bc},{provide:Sa,useValue:h({skipNextTransition:!!t?.skipInitialTransition},t)}];return yn(9,i)}var Tc=[pt,{provide:Ct,useClass:st},Ye,Vt,{provide:je,useFactory:xc},Sr,[]],Pa=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[Tc,[],{provide:jt,multi:!0,useValue:e},[],n?.errorHandler?{provide:Aa,useValue:n.errorHandler}:[],{provide:Dt,useValue:n||{}},n?.useHash?jf():Uf(),Vf(),n?.preloadingStrategy?Ic(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?zf(n):[],n?.bindToComponentInputs?Rc().\u0275providers:[],n?.enableViewTransitions?Fc().\u0275providers:[],$f()]}}static forChild(e){return{ngModule:t,providers:[{provide:jt,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({})}return t})();function Vf(){return{provide:Dc,useFactory:()=>{let t=c(Vo),i=c(Dt);return i.scrollOffset&&t.setOffset(i.scrollOffset),new Bf(i)}}}function jf(){return{provide:Be,useClass:Yi}}function Uf(){return{provide:Be,useClass:Zi}}function zf(t){return[t.initialNavigation==="disabled"?Sc().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Mc().\u0275providers:[]]}var Ia=new b("");function $f(){return[{provide:Ia,useFactory:wc},{provide:Ao,multi:!0,useExisting:Ia}]}var Gf="@",qf=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(fe);loadingSchedulerFn=c(Wf,{optional:!0});_engine;constructor(e,n,r,o,a){this.doc=e,this.delegate=n,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-MHG5QMVG.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new S(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Na(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,n);o.use(s),this.scheduler??=this.injector.get(Ps,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){Li()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Na=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,n,r){this.delegate.insertBefore(i,e,n,r)}removeChild(i,e,n,r){this.delegate.removeChild(i,e,n,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,n,r){this.delegate.setAttribute(i,e,n,r)}removeAttribute(i,e,n){this.delegate.removeAttribute(i,e,n)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,n,r){this.delegate.setStyle(i,e,n,r)}removeStyle(i,e,n){this.delegate.removeStyle(i,e,n)}setProperty(i,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,n)),this.delegate.setProperty(i,e,n)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,n,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,n,r)),this.delegate.listen(i,e,n,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(Gf)}},Wf=new b("");function Oc(t="animations"){return zn("NgAsyncAnimations"),Kt([{provide:et,useFactory:()=>new qf(c(P),c(Yn),c(G),t)},{provide:Oi,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Cn=new b("ArticlesService");var Dn=class t{articles=A([]);currentPage=A(1);saveArticles(i){this.articles.set(i)}savePage(i){this.currentPage.set(i)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var Tr=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-hero-section"]],decls:21,vars:0,consts:[[1,"hero","container"],[1,"hero__text"],[1,"hero__title"],[1,"hero__desc"],["href","#",1,"hero__link"],[1,"hero__photo-wrap"],[1,"hero__circle"],["src","img/photo_2026-03-05_12-14-57.jpg","alt","Nelsom"],[1,"hero__badge-wrap"],["viewBox","0 0 110 110","xmlns","http://www.w3.org/2000/svg",1,"hero__badge"],["id","badge-path","d","M55,55 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0","fill","none"],["href","#badge-path"],[1,"hero__badge-arrow"]],template:function(e,n){e&1&&(D(0,"section",0)(1,"div",1)(2,"h1",2),m(3,"Hello! I'm Nelsom,"),X(4,"br"),m(5,"a photographer"),M(),D(6,"p",3),m(7," Showcase elit paratur nori lorem ipsum dolor praesent Lorem non tet molesti\xE9. Si dolor incidunt mollit nostrud Lorem dolore. Qui aliqua cupidatat adipisi nulla id aute arem do elit at quo aute. "),M(),D(8,"a",4),m(9,"More about me \u2192"),M()(),D(10,"div",5)(11,"div",6),X(12,"img",7),M(),D(13,"div",8),mt(),D(14,"svg",9),X(15,"path",10),D(16,"text")(17,"textPath",11),m(18,"MY BLOGS \u2022 MY BLOGS \u2022 MY BLOGS \u2022"),M()()(),ft(),D(19,"span",12),m(20,"\u2193"),M()()()())},styles:[".hero[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:48px;padding:72px 0}.hero__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:16px}.hero__desc[_ngcontent-%COMP%]{color:var(--color-gray);margin-bottom:24px}.hero__link[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:var(--color-black);border-bottom:1px solid var(--color-black);padding-bottom:2px;text-decoration:none;transition:color .25s ease}.hero__link[_ngcontent-%COMP%]:hover{color:var(--color-green);border-color:var(--color-green)}.hero__photo-wrap[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center}.hero__circle[_ngcontent-%COMP%]{width:300px;height:300px;border-radius:50%;overflow:hidden;background:var(--color-bg-card);display:flex;align-items:center;justify-content:center}.hero__circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hero__badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-10px;right:20px}.hero__badge[_ngcontent-%COMP%]{width:110px;height:110px;animation:spin 12s linear infinite}.hero__badge[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:10px;font-family:inherit;fill:var(--color-black);letter-spacing:3px}.hero__badge-arrow[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 14px);right:calc(50% - 8px);font-size:18px;pointer-events:none}"]})};var Zf=(t,i)=>i.id;function Yf(t,i){if(t&1&&(u(0,"li",4)(1,"div",6)(2,"span",7),m(3,"Product photography"),f(),u(4,"h3",8),m(5),f(),u(6,"p",9),m(7),f()(),Y(8,"div",10),f()),t&2){let e=i.$implicit;p(5),O(e.title),p(2),O(e.content)}}function Kf(t,i){if(t&1&&(u(0,"section",0)(1,"h2",1),m(2,"Featured posts"),f(),u(3,"p",2),m(4,"Sint occaecat deserunt aliquo do occaecat at quis"),f(),u(5,"ul",3),he(6,Yf,9,2,"li",4,Zf),f(),u(8,"a",5),m(9,"Browse all posts \u2192"),f()()),t&2){let e=R();p(6),pe(e.articles()),p(2),H("routerLink","/blog")}}var Or=class t{articles=ht([]);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-featured-articles"]],inputs:{articles:[1,"articles"]},decls:1,vars:1,consts:[[1,"featured","container"],[1,"featured__title"],[1,"featured__sub"],[1,"featured__list"],[1,"featured__item"],[1,"btn-outline",3,"routerLink"],[1,"featured__info"],[1,"featured__category"],[1,"featured__name"],[1,"featured__desc"],[1,"featured__img-wrap"]],template:function(e,n){e&1&&L(0,Kf,10,1,"section",0),e&2&&B(n.articles().length>0?0:-1)},dependencies:[Ue],styles:[".featured[_ngcontent-%COMP%]{padding:48px 0;border-top:1px solid var(--color-border)}.featured__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:4px}.featured__sub[_ngcontent-%COMP%]{font-size:14px;color:var(--color-gray-light);margin-bottom:24px}.featured__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-bottom:24px}.featured__item[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;border-radius:12px;overflow:hidden;transition:transform .25s ease,box-shadow .25s ease;cursor:pointer}.featured__item[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 10px 30px #00000014}.featured__item[_ngcontent-%COMP%]:nth-child(odd){background-color:var(--color-bg-peach)}.featured__item[_ngcontent-%COMP%]:nth-child(2n){background-color:var(--color-bg-mint)}.featured__info[_ngcontent-%COMP%]{padding:36px 32px;display:flex;flex-direction:column;justify-content:center}.featured__category[_ngcontent-%COMP%]{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--color-gray-light);margin-bottom:8px}.featured__name[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:12px}.featured__desc[_ngcontent-%COMP%]{color:var(--color-gray)}.featured__img-wrap[_ngcontent-%COMP%]{background:var(--color-bg-card);min-height:200px;overflow:hidden;display:flex;align-items:center;justify-content:center}.btn-outline[_ngcontent-%COMP%]{display:inline-block;padding:9px 22px;font-size:13px;font-weight:500;color:var(--color-black);border:1px solid var(--color-black);border-radius:20px;text-decoration:none;transition:background .25s ease,color .25s ease}.btn-outline[_ngcontent-%COMP%]:hover{background:var(--color-black);color:var(--color-white)}"]})};function Xf(t,i){if(t&1&&(D(0,"li",3),m(1),M()),t&2){let e=i.$implicit;p(),O(e)}}var Pr=class t{skills=["Photography","Graphic Design","Creativity","Brand Identity","Copy Writing","Team Working"];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-skills-section"]],decls:6,vars:0,consts:[[1,"skills","container"],[1,"skills__title"],[1,"skills__list"],[1,"skills__item"]],template:function(e,n){e&1&&(D(0,"section",0)(1,"h2",1),m(2,"My skills"),M(),D(3,"ul",2),he(4,Xf,2,1,"li",3,Ui),M()()),e&2&&(p(4),pe(n.skills))},styles:[".skills[_ngcontent-%COMP%]{padding:48px 0;border-top:1px solid var(--color-border)}.skills__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:24px}.skills__list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:0;list-style:none}.skills__item[_ngcontent-%COMP%]{font-size:15px;font-weight:500;color:var(--color-black);padding:16px 0;border-bottom:1px solid var(--color-border)}"]})};var Jf=(t,i)=>i.role;function Qf(t,i){if(t&1&&(D(0,"li",5),X(1,"div"),D(2,"div")(3,"span",6),m(4),M(),D(5,"span",7),m(6),M(),D(7,"p",8),m(8),M()()()),t&2){let e=i.$implicit;p(),rn("work__logo work__logo--"+e.color),p(3),O(e.role),p(2),O(e.company),p(2),O(e.desc)}}var Nr=class t{workItems=[{color:"orange",role:"Graphic design",company:"Consectetur \xB7 2016\u20132017",desc:"Nostrud tempor ultem cum accepteur do ut proident deserunt anim consequat exercitadu"},{color:"purple",role:"Photographer",company:"Alienum \xB7 2017\u20132020",desc:"Ad do dolore ultem dolor et ea non dolor qui. Dolor amet tempor parteur officia paletur at"},{color:"teal",role:"Photographer's Assistant",company:"Adpliving \xB7 2016\u20132020",desc:"Ad do dolore ultem dolor et ea non dolor qui. Dolor amet tempor parteur officia paletur at"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-work-section"]],decls:9,vars:0,consts:[[1,"work","container"],[1,"work__left"],[1,"work__title"],[1,"work__sub"],[1,"work__list"],[1,"work__item"],[1,"work__role"],[1,"work__company"],[1,"work__desc"]],template:function(e,n){e&1&&(D(0,"section",0)(1,"div",1)(2,"h2",2),m(3,"My work"),M(),D(4,"p",3),m(5,"Duis nisi do exercitation in iure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur iure"),M()(),D(6,"ul",4),he(7,Qf,9,5,"li",5,Jf),M()()),e&2&&(p(7),pe(n.workItems))},styles:['.work[_ngcontent-%COMP%]{padding:48px 0;border-top:1px solid var(--color-border);display:grid;grid-template-columns:1fr 2fr;gap:48px;align-items:start}.work__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:8px}.work__sub[_ngcontent-%COMP%]{font-size:14px;color:var(--color-gray-light)}.work__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;list-style:none}.work__item[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:flex-start;padding:20px 0;position:relative}.work__item[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;right:0;height:1px;background:var(--color-border)}.work__item[_ngcontent-%COMP%]:last-child:after{display:none}.work__logo[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;flex-shrink:0}.work__logo--orange[_ngcontent-%COMP%]{background:#ff6b35}.work__logo--purple[_ngcontent-%COMP%]{background:#9c42f5}.work__logo--teal[_ngcontent-%COMP%]{background:#00bcd4}.work__role[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:600;color:var(--color-green);margin-bottom:2px}.work__company[_ngcontent-%COMP%]{display:block;font-size:12px;color:var(--color-gray-light);margin-bottom:6px}.work__desc[_ngcontent-%COMP%]{font-size:13px;color:var(--color-gray)}']})};var eh=(t,i)=>i.title;function th(t,i){if(t&1&&X(0,"img",5),t&2){let e=R().$implicit;Ft("src",e.img,Gs)("alt",e.title)}}function nh(t,i){if(t&1&&(D(0,"div",4),L(1,th,1,2,"img",5),D(2,"div",6)(3,"span"),m(4),M(),D(5,"p"),m(6),M()()()),t&2){let e=i.$implicit;p(),B(e.img?1:-1),p(3),O(e.title),p(2),O(e.desc)}}var kr=class t{hobbyItems=[{img:"img/mock img 1.png",title:"Portrait series",desc:"Captured in natural light"},{img:"img/mock img 2.png",title:"Branding",desc:"Brand identity design"},{title:"Urban shots",desc:"City street photography"},{title:"Nature",desc:"Landscapes & wildlife"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-hobby-section"]],decls:8,vars:0,consts:[[1,"hobby","container"],[1,"hobby__title"],[1,"hobby__sub"],[1,"hobby__grid"],[1,"hobby__card"],[3,"src","alt"],[1,"hobby__overlay"]],template:function(e,n){e&1&&(D(0,"section",0)(1,"h2",1),m(2,"Hobby projects"),M(),D(3,"p",2),m(4,"Duis nisi do exercitation in iure aliqua commodo nisi eu id reprehenderit dolore fugiat consectetur iure labore ad ea."),M(),D(5,"div",3),he(6,nh,7,3,"div",4,eh),M()()),e&2&&(p(6),pe(n.hobbyItems))},styles:[".hobby[_ngcontent-%COMP%]{padding:48px 0;border-top:1px solid var(--color-border)}.hobby__title[_ngcontent-%COMP%]{color:var(--color-black);margin-bottom:4px}.hobby__sub[_ngcontent-%COMP%]{font-size:14px;color:var(--color-gray-light);margin-bottom:24px}.hobby__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:auto auto;gap:12px}.hobby__card[_ngcontent-%COMP%]{position:relative;border-radius:8px;overflow:hidden;background:var(--color-bg-card);min-height:180px;cursor:pointer}.hobby__card[_ngcontent-%COMP%]:first-child{grid-column:span 1;grid-row:span 2;min-height:380px}.hobby__card[_ngcontent-%COMP%]:nth-child(2){grid-column:span 1;grid-row:span 2;min-height:380px}.hobby__card[_ngcontent-%COMP%]:nth-child(3), .hobby__card[_ngcontent-%COMP%]:nth-child(4){grid-column:span 2;min-height:180px}.hobby__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease}.hobby__card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05)}.hobby__overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0000008c;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:24px;opacity:0;transition:opacity .35s ease}.hobby__overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:var(--color-white);text-align:center}.hobby__overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#fffc;text-align:center}.hobby__card[_ngcontent-%COMP%]:hover   .hobby__overlay[_ngcontent-%COMP%]{opacity:1}"]})};var Lr=class t{service=c(Cn);store=c(Dn);titleService=c(vt);featuredArticles=ee(()=>this.store.articles().slice(0,2));ngOnInit(){this.titleService.setTitle("Home | Blog App"),this.store.articles().length===0&&this.service.getArticles(1).subscribe(i=>{this.store.saveArticles(i.articles)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home"]],decls:6,vars:1,consts:[[3,"articles"]],template:function(e,n){e&1&&(u(0,"main"),Y(1,"app-hero-section")(2,"app-featured-articles",0)(3,"app-skills-section")(4,"app-work-section")(5,"app-hobby-section"),f()),e&2&&(p(2),H("articles",n.featuredArticles()))},dependencies:[Tr,Or,Pr,Nr,kr],encapsulation:2})};var Br=new WeakMap,Ut=(()=>{class t{_appRef;_injector=c(fe);_environmentInjector=c(Se);load(e){let n=this._appRef=this._appRef||this._injector.get(nn),r=Br.get(n);r||(r={loaders:new Set,refs:[]},Br.set(n,r),n.onDestroy(()=>{Br.get(n)?.refs.forEach(o=>o.destroy()),Br.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(ol(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vr;function ih(){if(Vr===void 0&&(Vr=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Vr=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Vr}function xn(t){return ih()?.createHTML(t)||t}function Pc(t){return Error(`Unable to find icon with the name "${t}"`)}function rh(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Nc(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function kc(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var lt=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},Bc=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new lt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Ie.HTML,r);if(!a)throw kc(r);let s=xn(a);return this._addSvgIconConfig(e,n,new lt("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new lt(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Ie.HTML,n);if(!o)throw kc(n);let a=xn(o);return this._addSvgIconSetConfig(e,new lt("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Ie.RESOURCE_URL,e);if(!n)throw Nc(e);let r=this._cachedIconsByUrl.get(n);return r?y(jr(r)):this._loadSvgIconFromConfig(new lt(e,null)).pipe(be(o=>this._cachedIconsByUrl.set(n,o)),$(o=>jr(o)))}getNamedSvgIcon(e,n=""){let r=Lc(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):Wt(Pc(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?y(jr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe($(n=>jr(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return y(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Zt(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ie.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),y(null)})));return Fi(o).pipe($(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw Pc(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(be(n=>e.svgText=n),$(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?y(null):this._fetchIcon(e).pipe(be(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(xn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(xn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw rh();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Ie.RESOURCE_URL,n);if(!a)throw Nc(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe($(d=>xn(d)),Yt(()=>this._inProgressUrlFetches.delete(a)),Ss());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(Lc(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return oh(o)?new lt(o.url,null,o.options):new lt(o,null)}}static \u0275fac=function(n){return new(n||t)(C(Xo,8),C(Jo),C(P,8),C(At))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jr(t){return t.cloneNode(!0)}function Lc(t,i){return t+":"+i}function oh(t){return!!(t.url&&t.options)}var ah=new b("cdk-dir-doc",{providedIn:"root",factory:()=>c(P)}),sh=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Vc(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?sh.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var ka=(()=>{class t{get value(){return this.valueSignal()}valueSignal=A("ltr");change=new le;constructor(){let e=c(ah,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Vc(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $e=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({})}return t})();var lh=["*"],ch=new b("MAT_ICON_DEFAULT_OPTIONS"),dh=new b("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(P),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),jc=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],uh=jc.map(t=>`[${t}]`).join(", "),mh=/^url\(['"]?#(.*?)['"]?\)$/,wn=(()=>{class t{_elementRef=c(K);_iconRegistry=c(Bc);_location=c(dh);_errorHandler=c(At);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Gt.EMPTY;constructor(){let e=c(new Gi("aria-hidden"),{optional:!0}),n=c(ch,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(uh),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)jc.forEach(a=>{let s=n[o],l=s.getAttribute(a),d=l?l.match(mh):null;if(d){let g=r.get(s);g||(g=[],r.set(s,g)),g.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(dt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(Fe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),rn(r.color?"mat-"+r.color:""),Z("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ge],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:lh,decls:1,vars:0,template:function(n,r){n&1&&(ke(),J(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),En=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[$e]})}return t})();var fh=t=>["/blog",t],Ur=class t{article=ht.required();deleteArticle=on();editArticle=on();onDelete(){this.deleteArticle.emit(this.article().id)}onEdit(){this.editArticle.emit(this.article())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-article"]],inputs:{article:[1,"article"]},outputs:{deleteArticle:"deleteArticle",editArticle:"editArticle"},decls:14,vars:5,consts:[[1,"blog-card"],[1,"blog-card__actions"],["title","\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",1,"blog-card__edit",3,"click"],["title","\u0423\u0434\u0430\u043B\u0438\u0442\u044C",1,"blog-card__delete",3,"click"],[1,"blog-card__link",3,"routerLink"],[1,"blog-card__img"],[1,"blog-card__title"],[1,"blog-card__date"]],template:function(e,n){e&1&&(u(0,"li",0)(1,"div",1)(2,"button",2),k("click",function(){return n.onEdit()}),u(3,"mat-icon"),m(4,"edit"),f()(),u(5,"button",3),k("click",function(){return n.onDelete()}),u(6,"mat-icon"),m(7,"close"),f()()(),u(8,"a",4),Y(9,"div",5),u(10,"h3",6),m(11),f(),u(12,"span",7),m(13),f()()()),e&2&&(p(8),H("routerLink",Js(3,fh,n.article().id)),p(3),O(n.article().title),p(2),O(n.article().date))},dependencies:[Ue,En,wn],styles:[".blog-card[_ngcontent-%COMP%]{position:relative;background:var(--color-bg-card);border-radius:12px;padding:16px;list-style:none}.blog-card__actions[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;display:flex;gap:4px}.blog-card__link[_ngcontent-%COMP%]{display:block;text-decoration:none;color:inherit}.blog-card__edit[_ngcontent-%COMP%], .blog-card__delete[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;border-radius:6px;background:transparent;transition:background .2s;cursor:pointer}.blog-card__edit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .blog-card__delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px}.blog-card__edit[_ngcontent-%COMP%]{color:var(--color-gray);transition:background .2s,color .2s}.blog-card__edit[_ngcontent-%COMP%]:hover{background:#00000012;color:var(--color-black)}.blog-card__delete[_ngcontent-%COMP%]{color:var(--color-gray);transition:background .2s,color .2s}.blog-card__delete[_ngcontent-%COMP%]:hover{background:#e53e3e1a;color:#e53e3e}.blog-card__img[_ngcontent-%COMP%]{width:100%;height:140px;background:#d5d5d5;border-radius:8px;margin-top:8px;margin-bottom:12px}.blog-card__title[_ngcontent-%COMP%]{font-size:15px;font-weight:600;margin-bottom:8px;color:var(--color-black);line-height:1.4;padding-right:64px}.blog-card__date[_ngcontent-%COMP%]{font-size:12px;color:var(--color-gray-light)}"]})};var Zc=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(j(ye),j(K))};static \u0275dir=I({type:t})}return t})(),hh=(()=>{class t extends Zc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=It(t)))(r||t)}})();static \u0275dir=I({type:t,features:[Re]})}return t})(),Yc=new b("");var ph={provide:Yc,useExisting:Bn(()=>Rn),multi:!0};function gh(){let t=Le()?Le().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var vh=new b(""),Rn=(()=>{class t extends Zc{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!gh())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(j(ye),j(K),j(vh,8))};static \u0275dir=I({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&k("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[qe([ph]),Re]})}return t})();function za(t){return t==null||$a(t)===0}function $a(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ha=new b(""),Ga=new b(""),bh=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,He=class{static min(i){return _h(i)}static max(i){return yh(i)}static required(i){return Ch(i)}static requiredTrue(i){return Dh(i)}static email(i){return xh(i)}static minLength(i){return wh(i)}static maxLength(i){return Eh(i)}static pattern(i){return Mh(i)}static nullValidator(i){return Kc()}static compose(i){return nd(i)}static composeAsync(i){return id(i)}};function _h(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function yh(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Ch(t){return za(t.value)?{required:!0}:null}function Dh(t){return t.value===!0?null:{required:!0}}function xh(t){return za(t.value)||bh.test(t.value)?null:{email:!0}}function wh(t){return i=>{let e=i.value?.length??$a(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Eh(t){return i=>{let e=i.value?.length??$a(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Mh(t){if(!t)return Kc;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(za(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Kc(t){return null}function Xc(t){return t!=null}function Jc(t){return $n(t)?ae(t):t}function Qc(t){let i={};return t.forEach(e=>{i=e!=null?h(h({},i),e):i}),Object.keys(i).length===0?null:i}function ed(t,i){return i.map(e=>e(t))}function Sh(t){return!t.validate}function td(t){return t.map(i=>Sh(i)?i:e=>i.validate(e))}function nd(t){if(!t)return null;let i=t.filter(Xc);return i.length==0?null:function(e){return Qc(ed(e,i))}}function qa(t){return t!=null?nd(td(t)):null}function id(t){if(!t)return null;let i=t.filter(Xc);return i.length==0?null:function(e){let n=ed(e,i).map(Jc);return Fi(n).pipe($(Qc))}}function Wa(t){return t!=null?id(td(t)):null}function Uc(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function rd(t){return t._rawValidators}function od(t){return t._rawAsyncValidators}function Ba(t){return t?Array.isArray(t)?t:[t]:[]}function Hr(t,i){return Array.isArray(t)?t.includes(i):t===i}function zc(t,i){let e=Ba(i);return Ba(t).forEach(r=>{Hr(e,r)||e.push(r)}),e}function $c(t,i){return Ba(i).filter(e=>!Hr(t,e))}var Gr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=qa(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Wa(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},xt=class extends Gr{name;get formDirective(){return null}get path(){return null}},zt=class extends Gr{_parent=null;name=null;valueAccessor=null},qr=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Xr=(()=>{class t extends qr{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(j(zt,2))};static \u0275dir=I({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Re]})}return t})(),Jr=(()=>{class t extends qr{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(j(xt,10))};static \u0275dir=I({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Re]})}return t})();var gi="VALID",zr="INVALID",Mn="PENDING",vi="DISABLED",wt=class{},Wr=class extends wt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},_i=class extends wt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},yi=class extends wt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Sn=class extends wt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Zr=class extends wt{source;constructor(i){super(),this.source=i}},Ci=class extends wt{source;constructor(i){super(),this.source=i}};function Za(t){return(Qr(t)?t.validators:t)||null}function Ah(t){return Array.isArray(t)?qa(t):t||null}function Ya(t,i){return(Qr(i)?i.asyncValidators:t)||null}function Ih(t){return Array.isArray(t)?Wa(t):t||null}function Qr(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function ad(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new S(1e3,"");if(!n[e])throw new S(1001,"")}function sd(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new S(1002,"")})}var An=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return U(this.statusReactive)}set status(i){U(()=>this.statusReactive.set(i))}_status=ee(()=>this.statusReactive());statusReactive=A(void 0);get valid(){return this.status===gi}get invalid(){return this.status===zr}get pending(){return this.status===Mn}get disabled(){return this.status===vi}get enabled(){return this.status!==vi}errors;get pristine(){return U(this.pristineReactive)}set pristine(i){U(()=>this.pristineReactive.set(i))}_pristine=ee(()=>this.pristineReactive());pristineReactive=A(!0);get dirty(){return!this.pristine}get touched(){return U(this.touchedReactive)}set touched(i){U(()=>this.touchedReactive.set(i))}_touched=ee(()=>this.touchedReactive());touchedReactive=A(!1);get untouched(){return!this.touched}_events=new Q;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(zc(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(zc(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators($c(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators($c(i,this._rawAsyncValidators))}hasValidator(i){return Hr(this._rawValidators,i)}hasAsyncValidator(i){return Hr(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(N(h({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new yi(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new yi(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(N(h({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new _i(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new _i(!0,n))}markAsPending(i={}){this.status=Mn;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Sn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(N(h({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=vi,this.errors=null,this._forEachChild(r=>{r.disable(N(h({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Wr(this.value,n)),this._events.next(new Sn(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(N(h({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=gi,this._forEachChild(n=>{n.enable(N(h({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(N(h({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===gi||this.status===Mn)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Wr(this.value,e)),this._events.next(new Sn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(N(h({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?vi:gi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Mn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=Jc(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Sn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new le,this.statusChanges=new le}_calculateStatus(){return this._allControlsDisabled()?vi:this.errors?zr:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Mn)?Mn:this._anyControlsHaveStatus(zr)?zr:gi}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new _i(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new yi(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Qr(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Ah(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Ih(this._rawAsyncValidators)}},In=class extends An{constructor(i,e,n){super(Za(e),Ya(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){sd(this,!0,i),Object.keys(i).forEach(n=>{ad(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,N(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ci(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Va=class extends In{};var Ka=new b("",{factory:()=>Xa}),Xa="always";function Rh(t,i){return[...i.path,t]}function ja(t,i,e=Xa){Ja(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Th(t,i),Ph(t,i),Oh(t,i),Fh(t,i)}function Hc(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),Kr(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Yr(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Fh(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Ja(t,i){let e=rd(t);i.validator!==null?t.setValidators(Uc(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=od(t);i.asyncValidator!==null?t.setAsyncValidators(Uc(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Yr(i._rawValidators,r),Yr(i._rawAsyncValidators,r)}function Kr(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=rd(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=od(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Yr(i._rawValidators,n),Yr(i._rawAsyncValidators,n),e}function Th(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ld(t,i)})}function Oh(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ld(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function ld(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ph(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function cd(t,i){t==null,Ja(t,i)}function Nh(t,i){return Kr(t,i)}function kh(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Lh(t){return Object.getPrototypeOf(t.constructor)===hh}function dd(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Bh(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===Rn?e=o:Lh(o)?n=o:r=o}),r||n||e||null}function Vh(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var jh={provide:xt,useExisting:Bn(()=>Qa)},bi=Promise.resolve(),Qa=(()=>{class t extends xt{callSetDisabledState;get submitted(){return U(this.submittedReactive)}_submitted=ee(()=>this.submittedReactive());submittedReactive=A(!1);_directives=new Set;form;ngSubmit=new le;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new In({},qa(e),Wa(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){bi.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),ja(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){bi.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){bi.then(()=>{let n=this._findContainer(e.path),r=new In({});cd(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){bi.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){bi.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),dd(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Zr(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(j(Ha,10),j(Ga,10),j(Ka,8))};static \u0275dir=I({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&k("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[qe([jh]),Re]})}return t})();function Gc(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function qc(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var $r=class extends An{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Za(e),Ya(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Qr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(qc(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ci(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Gc(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Gc(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){qc(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Uh=t=>t instanceof $r;var eo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Ua=class extends An{constructor(i,e,n){super(Za(e),Ya(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){sd(this,!1,i),i.forEach((n,r)=>{ad(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],N(h({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ci(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var zh=(()=>{class t extends xt{callSetDisabledState;get submitted(){return U(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ee(()=>this._submittedReactive());_submittedReactive=A(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Kr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return ja(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Hc(e.control||null,e,!1),Vh(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,dd(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Zr(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Hc(n||null,e),Uh(r)&&(ja(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);cd(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Nh(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ja(this.form,this),this._oldForm&&Kr(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(j(Ha,10),j(Ga,10),j(Ka,8))};static \u0275dir=I({type:t,features:[Re,Ne]})}return t})();var ud=new b("");var $h={provide:zt,useExisting:Bn(()=>Di)},Di=(()=>{class t extends zt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new le;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Bh(this,o)}ngOnChanges(e){this._added||this._setUpControl(),kh(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Rh(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(j(xt,13),j(Ha,10),j(Ga,10),j(Yc,10),j(ud,8))};static \u0275dir=I({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[qe([$h]),Re,Ne]})}return t})();var Hh={provide:xt,useExisting:Bn(()=>$t)},$t=(()=>{class t extends zh{form=null;ngSubmit=new le;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=It(t)))(r||t)}})();static \u0275dir=I({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&k("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[qe([Hh]),Re]})}return t})();var Gh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({})}return t})();function Wc(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var to=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return Wc(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new In(r,o)}record(e,n=null){let r=this._reduceControls(e);return new Va(r,n)}control(e,n,r){let o={};return this.useNonNullable?(Wc(n)?o=n:(o.validators=n,o.asyncValidators=r),new $r(e,N(h({},o),{nonNullable:!0}))):new $r(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new Ua(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof $r)return e;if(e instanceof An)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var no=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ud,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ka,useValue:e.callSetDisabledState??Xa}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[Gh]})}return t})();function qh(t,i){if(t&1&&(u(0,"span",11),m(1),f()),t&2){let e=i.$implicit;p(),O(e)}}function Wh(t,i){if(t&1&&he(0,qh,2,1,"span",11,Io),t&2){let e=R();pe(e.getControlErrors("title"))}}function Zh(t,i){if(t&1&&(u(0,"span",11),m(1),f()),t&2){let e=i.$implicit;p(),O(e)}}function Yh(t,i){if(t&1&&he(0,Zh,2,1,"span",11,Io),t&2){let e=R();pe(e.getControlErrors("content"))}}var io=class t{article=ht(null);submitArticle=on();cancelForm=on();fb=c(to);form=this.fb.group({title:["",[He.required,He.minLength(25)]],content:["",He.required]});formTitle=ee(()=>this.article()?"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E":"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438");saveButtonTitle=ee(()=>this.article()?"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");constructor(){Jt(()=>{let i=this.article();i?this.form.patchValue({title:i.title,content:i.content}):this.form.reset()})}hasError(i){let e=this.form.get(i);return!!(e?.invalid&&e.touched)}getControlErrors(i){let n=this.form.get(i)?.errors??null;return n?Object.entries(n).map(([r,o])=>this.getErrorStr(r,o)):[]}getErrorStr(i,e){switch(i){case"required":return"\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F";case"minlength":{let{requiredLength:n,actualLength:r}=e;return`\u041D\u0443\u0436\u043D\u043E \u0435\u0449\u0451 ${n-r} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432`}default:return"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u043F\u043E\u043B\u044F"}}onSubmit(){if(this.form.invalid)return;let{title:i,content:e}=this.form.value,n=this.article();n?this.submitArticle.emit(N(h({},n),{title:i.trim(),content:e.trim()})):this.submitArticle.emit({id:Date.now(),title:i.trim(),content:e.trim(),date:new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}),this.form.reset()}onCancel(){this.form.reset(),this.cancelForm.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-article-form"]],inputs:{article:[1,"article"]},outputs:{submitArticle:"submitArticle",cancelForm:"cancelForm"},decls:19,vars:10,consts:[[1,"article-form"],[1,"article-form__title"],[3,"ngSubmit","formGroup"],[1,"article-form__group"],["for","articleTitle",1,"article-form__label"],["type","text","id","articleTitle","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A","formControlName","title",1,"article-form__input"],["for","articleText",1,"article-form__label"],["id","articleText","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0441\u0442\u0430\u0442\u044C\u0438","formControlName","content",1,"article-form__textarea"],[1,"article-form__actions"],["type","submit",1,"article-form__save",3,"disabled"],["type","button",1,"article-form__cancel",3,"click"],[1,"article-form__error"]],template:function(e,n){if(e&1&&(u(0,"div",0)(1,"p",1),m(2),f(),u(3,"form",2),k("ngSubmit",function(){return n.onSubmit()}),u(4,"div",3)(5,"label",4),m(6,"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A *"),f(),Y(7,"input",5),L(8,Wh,2,0),f(),u(9,"div",3)(10,"label",6),m(11,"\u0422\u0435\u043A\u0441\u0442 *"),f(),Y(12,"textarea",7),L(13,Yh,2,0),f(),u(14,"div",8)(15,"button",9),m(16),f(),u(17,"button",10),k("click",function(){return n.onCancel()}),m(18,"\u041E\u0442\u043C\u0435\u043D\u0430"),f()()()()),e&2){p(2),O(n.formTitle()),p(),H("formGroup",n.form);let r=n.hasError("title");p(4),Z("article-form__input--error",r),p(),B(r?8:-1);let o=n.hasError("content");p(4),Z("article-form__textarea--error",o),p(),B(o?13:-1),p(2),H("disabled",n.form.invalid),p(),$i(" ",n.saveButtonTitle()," ")}},dependencies:[no,eo,Rn,Xr,Jr,$t,Di],styles:[".article-form[_ngcontent-%COMP%]{background:var(--color-white);border:1px solid var(--color-border);border-radius:12px;padding:24px;margin-bottom:24px}.article-form__title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin-bottom:20px;color:var(--color-black)}.article-form__group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:16px}.article-form__label[_ngcontent-%COMP%]{font-size:13px;font-weight:500;margin-bottom:6px;color:var(--color-gray)}.article-form__input[_ngcontent-%COMP%], .article-form__textarea[_ngcontent-%COMP%]{border:1px solid var(--color-border);border-radius:6px;padding:10px 12px;font-family:Inter,sans-serif;font-size:14px;color:var(--color-black);outline:none;transition:border-color .2s}.article-form__input[_ngcontent-%COMP%]:focus, .article-form__textarea[_ngcontent-%COMP%]:focus{border-color:var(--color-black)}.article-form__input--error[_ngcontent-%COMP%], .article-form__textarea--error[_ngcontent-%COMP%]{border-color:#e53e3e}.article-form__textarea[_ngcontent-%COMP%]{resize:vertical;min-height:100px}.article-form__error[_ngcontent-%COMP%]{display:block;font-size:11px;color:#e53e3e;margin-top:4px}.article-form__actions[_ngcontent-%COMP%]{display:flex;gap:12px;margin-top:8px}.article-form__save[_ngcontent-%COMP%]{background:var(--color-black);color:var(--color-white);border:none;border-radius:6px;padding:10px 20px;font-size:14px;font-weight:500;cursor:pointer;font-family:Inter,sans-serif;transition:opacity .2s}.article-form__save[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.article-form__save[_ngcontent-%COMP%]:hover:not(:disabled){opacity:.8}.article-form__cancel[_ngcontent-%COMP%]{background:transparent;color:var(--color-gray);border:1px solid var(--color-border);border-radius:6px;padding:10px 20px;font-size:14px;font-weight:500;cursor:pointer;font-family:Inter,sans-serif;transition:border-color .2s,color .2s}.article-form__cancel[_ngcontent-%COMP%]:hover{border-color:var(--color-black);color:var(--color-black)}"]})};var Kh=(t,i)=>i.id;function Xh(t,i){if(t&1){let e=it();u(0,"div",5)(1,"app-article-form",20),k("submitArticle",function(r){ue(e);let o=R();return me(o.onArticleSubmit(r))})("cancelForm",function(){ue(e);let r=R();return me(r.onFormCancel())}),f()()}if(t&2){let e=R();p(),H("article",e.editingArticle())}}function Jh(t,i){if(t&1&&(u(0,"article",15)(1,"div",21),Y(2,"img",22),f(),u(3,"div",23)(4,"h2",24),m(5),f(),u(6,"p",25),m(7),f(),u(8,"span",26),m(9),f()()()),t&2){let e=R();p(5),O(e.articles()[0].title),p(2),O(e.articles()[0].content),p(2),O(e.articles()[0].date)}}function Qh(t,i){if(t&1){let e=it();u(0,"app-article",28),k("deleteArticle",function(r){ue(e);let o=R(2);return me(o.onArticleDelete(r))})("editArticle",function(r){ue(e);let o=R(2);return me(o.onArticleEdit(r))}),f()}if(t&2){let e=i.$implicit;H("article",e)}}function ep(t,i){if(t&1&&(u(0,"ul",17),he(1,Qh,1,1,"app-article",27,Kh),f()),t&2){let e=R();p(),pe(e.articles())}}function tp(t,i){t&1&&(u(0,"div",18)(1,"div",29),m(2,"\u{1F4DD}"),f(),u(3,"p",30),m(4,"\u0421\u0442\u0430\u0442\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"),f(),u(5,"p",31),m(6,"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB+\xBB \u0432 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0430\u0442\u044C\u044E"),f()())}function np(t,i){if(t&1){let e=it();u(0,"button",34),k("click",function(){let r=ue(e).$implicit,o=R(2);return me(o.onPageChange(r))}),m(1),f()}if(t&2){let e=i.$implicit,n=R(2);Z("pagination__btn--active",e===n.currentPage()),p(),O(e)}}function ip(t,i){if(t&1){let e=it();u(0,"div",19)(1,"button",32),k("click",function(){ue(e);let r=R();return me(r.onPageChange(r.currentPage()-1))}),m(2,"\u2190 Prev"),f(),he(3,np,2,3,"button",33,Ui),u(5,"button",32),k("click",function(){ue(e);let r=R();return me(r.onPageChange(r.currentPage()+1))}),m(6,"Next \u2192"),f()()}if(t&2){let e=R();p(),H("disabled",e.currentPage()===1),p(2),pe(e.pages()),p(2),H("disabled",e.currentPage()===e.totalPages())}}function rp(t,i){if(t&1){let e=it();u(0,"div",35),k("click",function(){ue(e);let r=R();return me(r.toggleStats())}),f(),u(1,"div",36)(2,"div",37)(3,"div",38)(4,"span",39),m(5,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"),f(),u(6,"button",40),k("click",function(){ue(e);let r=R();return me(r.toggleStats())}),m(7,"\u2715"),f()(),u(8,"div",41)(9,"span",42),m(10,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u0442\u043E\u0432"),f(),u(11,"span",43),m(12),f()()()()}if(t&2){let e=R();p(12),O(e.articleCount())}}var ro=class t{service=c(Cn);store=c(Dn);titleService=c(vt);articles=this.store.articles;currentPage=this.store.currentPage;total=A(0);showForm=A(!1);showStats=A(!1);editingArticle=A(null);articleCount=ee(()=>this.total());totalPages=ee(()=>Math.ceil(this.total()/7));pages=ee(()=>Array.from({length:this.totalPages()},(i,e)=>e+1));ngOnInit(){this.titleService.setTitle("My Blogs | Blog App"),this.loadPage(this.currentPage())}loadPage(i){this.service.getArticles(i).subscribe(e=>{this.store.saveArticles(e.articles),this.store.savePage(i),this.total.set(e.total)})}onPageChange(i){this.loadPage(i),this.showForm.set(!1),this.editingArticle.set(null)}toggleForm(){this.showForm.update(i=>!i),this.showForm()&&this.editingArticle.set(null)}toggleStats(){this.showStats.update(i=>!i)}onArticleEdit(i){this.editingArticle.set(i),this.showForm.set(!0)}onArticleSubmit(i){this.editingArticle()?(this.service.updateArticle(i,this.currentPage()).subscribe(e=>{this.store.saveArticles(e.articles),this.total.set(e.total)}),this.editingArticle.set(null)):this.service.addArticle(i,1).subscribe(e=>{this.store.saveArticles(e.articles),this.store.savePage(1),this.total.set(e.total)}),this.showForm.set(!1)}onFormCancel(){this.editingArticle.set(null),this.showForm.set(!1)}onArticleDelete(i){this.service.deleteArticle(i,this.currentPage()).subscribe(e=>{this.store.saveArticles(e.articles),this.total.set(e.total),e.articles.length===0&&this.currentPage()>1&&this.loadPage(this.currentPage()-1)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-blog"]],decls:32,vars:5,consts:[[1,"page-layout"],[1,"sidebar"],["title","\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",1,"sidebar__btn",3,"click"],["title","\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",1,"sidebar__btn",3,"click"],[1,"main-content"],[1,"article-form-wrap"],[1,"blog-hero","container"],[1,"blog-hero__top"],[1,"blog-hero__title"],[1,"blog-hero__sub"],[1,"blog-badge-wrap"],["viewBox","0 0 110 110","xmlns","http://www.w3.org/2000/svg",1,"blog-badge"],["id","blog-badge-path","d","M55,55 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0","fill","none"],["href","#blog-badge-path"],[1,"blog-badge-arrow"],[1,"blog-featured"],[1,"blog-grid-section","container"],[1,"blog-grid"],[1,"blog-empty"],[1,"pagination"],[3,"submitArticle","cancelForm","article"],[1,"blog-featured__img"],["src","img/image 2.png","alt","Featured post"],[1,"blog-featured__text"],[1,"blog-featured__title"],[1,"blog-featured__desc"],[1,"blog-featured__date"],[3,"article"],[3,"deleteArticle","editArticle","article"],[1,"blog-empty__icon"],[1,"blog-empty__title"],[1,"blog-empty__text"],[1,"pagination__btn",3,"click","disabled"],[1,"pagination__btn",3,"pagination__btn--active"],[1,"pagination__btn",3,"click"],[1,"stats-overlay",3,"click"],[1,"stats-dialog"],[1,"stats-dialog__inner"],[1,"stats-dialog__header"],[1,"stats-dialog__title"],[1,"stats-dialog__close",3,"click"],[1,"stats-dialog__item"],[1,"stats-dialog__label"],[1,"stats-dialog__value"]],template:function(e,n){e&1&&(u(0,"div",0)(1,"aside",1)(2,"button",2),k("click",function(){return n.toggleForm()}),u(3,"mat-icon"),m(4,"add"),f()(),u(5,"button",3),k("click",function(){return n.toggleStats()}),u(6,"mat-icon"),m(7,"bar_chart"),f()()(),u(8,"div",4),L(9,Xh,2,1,"div",5),u(10,"main")(11,"section",6)(12,"div",7)(13,"div")(14,"h1",8),m(15,"My blogs"),f(),u(16,"p",9),m(17,"Lorem occaecat proident excepteur commodo at nulla elusmod. Elit esse aute officia dolor elit aute"),f()(),u(18,"div",10),mt(),u(19,"svg",11),Y(20,"path",12),u(21,"text")(22,"textPath",13),m(23,"MY BLOGS \u2022 MY BLOGS \u2022 MY BLOGS \u2022"),f()()(),ft(),u(24,"span",14),m(25,"\u2193"),f()()(),L(26,Jh,10,3,"article",15),f(),u(27,"section",16),L(28,ep,3,0,"ul",17)(29,tp,7,0,"div",18),L(30,ip,7,2,"div",19),f()()()(),L(31,rp,13,1)),e&2&&(p(9),B(n.showForm()?9:-1),p(17),B(n.articles().length>0?26:-1),p(2),B(n.articles().length>0?28:29),p(2),B(n.totalPages()>1?30:-1),p(),B(n.showStats()?31:-1))},dependencies:[Ur,io,En,wn],styles:[".page-layout[_ngcontent-%COMP%]{display:flex;min-height:calc(100vh - 60px)}.sidebar[_ngcontent-%COMP%]{width:60px;padding:16px 12px;border-right:1px solid var(--color-border);display:flex;flex-direction:column;gap:12px;position:sticky;top:60px;height:calc(100vh - 60px);flex-shrink:0}.sidebar__btn[_ngcontent-%COMP%]{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border:1px solid var(--color-border);border-radius:8px;background:transparent;cursor:pointer;transition:background .2s,border-color .2s}.sidebar__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:18px;height:18px;stroke:var(--color-gray);transition:stroke .2s}.sidebar__btn[_ngcontent-%COMP%]:hover{background:var(--color-bg-card);border-color:var(--color-black)}.sidebar__btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{stroke:var(--color-black)}.main-content[_ngcontent-%COMP%]{flex:1;min-width:0}.article-form-wrap[_ngcontent-%COMP%]{padding:24px 48px 0;max-width:760px}.blog-hero[_ngcontent-%COMP%]{padding-top:48px;padding-bottom:48px}.blog-hero__top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px}.blog-hero__title[_ngcontent-%COMP%]{margin-bottom:12px}.blog-hero__sub[_ngcontent-%COMP%]{max-width:480px;color:var(--color-gray)}.blog-badge-wrap[_ngcontent-%COMP%]{position:relative;width:110px;height:110px;flex-shrink:0}.blog-badge-wrap[_ngcontent-%COMP%]   .blog-badge[_ngcontent-%COMP%]{width:110px;height:110px;animation:spin 12s linear infinite}.blog-badge-wrap[_ngcontent-%COMP%]   .blog-badge[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:11px;fill:var(--color-gray);font-family:Inter,sans-serif;letter-spacing:1px}.blog-badge-wrap[_ngcontent-%COMP%]   .blog-badge-arrow[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px}.blog-featured[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;background:var(--color-bg-peach);border-radius:16px;overflow:hidden}.blog-featured__img[_ngcontent-%COMP%]{min-height:260px;overflow:hidden}.blog-featured__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.blog-featured__text[_ngcontent-%COMP%]{padding:32px;display:flex;flex-direction:column;justify-content:center}.blog-featured__title[_ngcontent-%COMP%]{margin-bottom:12px}.blog-featured__desc[_ngcontent-%COMP%]{color:var(--color-gray);margin-bottom:16px}.blog-featured__date[_ngcontent-%COMP%]{font-size:12px;color:var(--color-gray-light)}.blog-grid-section[_ngcontent-%COMP%]{padding-bottom:64px}.blog-empty[_ngcontent-%COMP%]{text-align:center;padding:64px 0}.blog-empty__icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:16px}.blog-empty__title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin-bottom:8px}.blog-empty__text[_ngcontent-%COMP%]{color:var(--color-gray)}.blog-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:32px;padding:0}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;margin-top:8px}.pagination__btn[_ngcontent-%COMP%]{padding:8px 16px;border:1px solid var(--color-border);border-radius:20px;background:transparent;font-size:13px;font-weight:500;color:var(--color-black);cursor:pointer;transition:background .2s,color .2s,border-color .2s}.pagination__btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--color-black);color:var(--color-white);border-color:var(--color-black)}.pagination__btn--active[_ngcontent-%COMP%]{background:var(--color-black);color:var(--color-white);border-color:var(--color-black)}.pagination__btn[_ngcontent-%COMP%]:disabled{opacity:.35;cursor:default}.stats-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#0006;z-index:100}.stats-dialog[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--color-white);border-radius:12px;z-index:101;min-width:320px;box-shadow:0 8px 32px #00000026}.stats-dialog__inner[_ngcontent-%COMP%]{padding:24px}.stats-dialog__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.stats-dialog__title[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.stats-dialog__close[_ngcontent-%COMP%]{background:transparent;border:none;font-size:18px;cursor:pointer;color:var(--color-gray);transition:color .2s}.stats-dialog__close[_ngcontent-%COMP%]:hover{color:var(--color-black)}.stats-dialog__item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-top:1px solid var(--color-border)}.stats-dialog__label[_ngcontent-%COMP%]{font-size:14px;color:var(--color-gray)}.stats-dialog__value[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:var(--color-black)}"]})};var op=["*"];var ap=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],sp=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],lp=new b("MAT_CARD_CONFIG"),fd=(()=>{class t{appearance;constructor(){let e=c(lp,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&Z("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:op,decls:1,vars:0,template:function(n,r){n&1&&(ke(),J(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),hd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var pd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})(),gd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return t})(),vd=(()=>{class t{align="start";static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,r){n&2&&Z("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),bd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:sp,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(ke(ap),J(0),D(1,"div",0),J(2,1),M(),J(3,2))},encapsulation:2,changeDetection:0})}return t})();var _d=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[$e]})}return t})();function xi(t){return t.buttons===0||t.detail===0}function wi(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var es;function yd(){if(es==null){let t=typeof document<"u"?document.head:null;es=!!(t&&(t.createShadowRoot||t.attachShadow))}return es}function ts(t){if(yd()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Ke(t){return t.composedPath?t.composedPath()[0]:t.target}var ns;try{ns=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ns=!1}var De=(()=>{class t{_platformId=c(Qt);isBrowser=this._platformId?ml(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ns)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ei;function Cd(){if(Ei==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ei=!0}))}finally{Ei=Ei||!1}return Ei}function Fn(t){return Cd()?t:!!t.capture}function Xe(t){return t instanceof K?t.nativeElement:t}var Dd=new b("cdk-input-modality-detector-options"),xd={ignoreKeys:[18,17,224,91,16]},wd=650,is={passive:!0,capture:!0},Ed=(()=>{class t{_platform=c(De);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new we(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ke(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<wd||(this._modality.next(xi(e)?"keyboard":"mouse"),this._mostRecentTarget=Ke(e))};_onTouchstart=e=>{if(wi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ke(e)};constructor(){let e=c(G),n=c(P),r=c(Dd,{optional:!0});if(this._options=h(h({},xd),r),this.modalityDetected=this._modality.pipe(Is(1)),this.modalityChanged=this.modalityDetected.pipe(Es()),this._platform.isBrowser){let o=c(et).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,is),o.listen(n,"mousedown",this._onMousedown,is),o.listen(n,"touchstart",this._onTouchstart,is)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mi=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Mi||{}),Md=new b("cdk-focus-monitor-default-options"),oo=Fn({passive:!0,capture:!0}),rs=(()=>{class t{_ngZone=c(G);_platform=c(De);_inputModalityDetector=c(Ed);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(P);_stopInputModalityDetector=new Q;constructor(){let e=c(Md,{optional:!0});this._detectionMode=e?.detectionMode||Mi.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Ke(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=Xe(e);if(!this._platform.isBrowser||r.nodeType!==1)return y();let o=ts(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new Q,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Xe(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=Xe(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Mi.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Mi.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?wd:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=Ke(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,oo),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,oo)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Qe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,oo),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,oo),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sd=new Set,Ht,os=(()=>{class t{_platform=c(De);_nonce=c(Un,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):up}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&dp(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dp(t,i){if(!Sd.has(t))try{Ht||(Ht=document.createElement("style"),i&&Ht.setAttribute("nonce",i),Ht.setAttribute("type","text/css"),document.head.appendChild(Ht)),Ht.sheet&&(Ht.sheet.insertRule(`@media ${t} {body{ }}`,0),Sd.add(t))}catch(e){console.error(e)}}function up(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var mp=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ad=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({providers:[mp]})}return t})();var as={},ct=class t{_appId=c(jn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),as.hasOwnProperty(i)||(as[i]=0),`${i}${e?t._infix+"-":""}${as[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var Tn,Id=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ss(){if(Tn)return Tn;if(typeof document!="object"||!document)return Tn=new Set(Id),Tn;let t=document.createElement("input");return Tn=new Set(Id.filter(i=>(t.setAttribute("type",i),t.type===i))),Tn}var fp=new b("MATERIAL_ANIMATIONS"),Rd=null;function hp(){return c(fp,{optional:!0})?.animationsDisabled||c(Oi,{optional:!0})==="NoopAnimations"?"di-disabled":(Rd??=c(os).matchMedia("(prefers-reduced-motion)").matches,Rd?"reduced-motion":"enabled")}function On(){return hp()!=="enabled"}function Pn(t){return t!=null&&`${t}`!="false"}var Ge=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Ge||{}),ls=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ge.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Fd=Fn({passive:!0,capture:!0}),cs=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Fd)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Fd)))}_delegateEventHandler=i=>{let e=Ke(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},Si={enterDuration:225,exitDuration:150},gp=800,Td=Fn({passive:!0,capture:!0}),Od=["mousedown","touchstart"],Pd=["mouseup","mouseleave","touchend","touchcancel"],vp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),ao=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new cs;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Xe(n)),o&&o.get(Ut).load(vp)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=h(h({},Si),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||bp(i,e,r),s=i-r.left,l=e-r.top,d=o.enterDuration,g=document.createElement("div");g.classList.add("mat-ripple-element"),g.style.left=`${s-a}px`,g.style.top=`${l-a}px`,g.style.height=`${a*2}px`,g.style.width=`${a*2}px`,n.color!=null&&(g.style.backgroundColor=n.color),g.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(g);let _=window.getComputedStyle(g),F=_.transitionProperty,se=_.transitionDuration,ne=F==="none"||se==="0s"||se==="0s, 0s"||r.width===0&&r.height===0,te=new ls(this,g,n,ne);g.style.transform="scale3d(1, 1, 1)",te.state=Ge.FADING_IN,n.persistent||(this._mostRecentTransientRipple=te);let T=null;return!ne&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let V=()=>{T&&(T.fallbackTimer=null),clearTimeout(xe),this._finishRippleTransition(te)},ie=()=>this._destroyRipple(te),xe=setTimeout(ie,d+100);g.addEventListener("transitionend",V),g.addEventListener("transitioncancel",ie),T={onTransitionEnd:V,onTransitionCancel:ie,fallbackTimer:xe}}),this._activeRipples.set(te,T),(ne||!d)&&this._finishRippleTransition(te),te}fadeOutRipple(i){if(i.state===Ge.FADING_OUT||i.state===Ge.HIDDEN)return;let e=i.element,n=h(h({},Si),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=Ge.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Xe(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Od.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Pd.forEach(e=>{this._triggerElement.addEventListener(e,this,Td)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ge.FADING_IN?this._startFadeOutTransition(i):i.state===Ge.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Ge.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ge.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=xi(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+gp;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!wi(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Ge.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ge.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Od.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Pd.forEach(e=>i.removeEventListener(e,this,Td)),this._pointerUpEventsRegistered=!1))}};function bp(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var Nd=new b("mat-ripple-global-options");var _p={capture:!0},yp=["focus","mousedown","mouseenter","touchstart"],ds="mat-ripple-loader-uninitialized",us="mat-ripple-loader-class-name",kd="mat-ripple-loader-centered",so="mat-ripple-loader-disabled",Ld=(()=>{class t{_document=c(P);_animationsDisabled=On();_globalRippleOptions=c(Nd,{optional:!0});_platform=c(De);_ngZone=c(G);_injector=c(fe);_eventCleanups;_hosts=new Map;constructor(){let e=c(et).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>yp.map(n=>e.listen(this._document,n,this._onInteraction,_p)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(ds,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(us))&&e.setAttribute(us,n.className||""),n.centered&&e.setAttribute(kd,""),n.disabled&&e.setAttribute(so,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(so,""):e.removeAttribute(so)}_onInteraction=e=>{let n=Ke(e);if(n instanceof HTMLElement){let r=n.closest(`[${ds}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(us)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Si.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Si.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(so),rippleConfig:{centered:e.hasAttribute(kd),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ao(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(ds)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var Cp=["mat-icon-button",""],Dp=["*"],xp=new b("MAT_BUTTON_CONFIG");function Vd(t){return t==null?void 0:Oo(t)}var ms=(()=>{class t{_elementRef=c(K);_ngZone=c(G);_animationsDisabled=On();_config=c(xp,{optional:!0});_focusMonitor=c(rs);_cleanupClick;_renderer=c(ye);_rippleLoader=c(Ld);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Ut).load(Bd);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(Fe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),rn(r.color?"mat-"+r.color:""),Z("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ge],disabled:[2,"disabled","disabled",ge],ariaDisabled:[2,"aria-disabled","ariaDisabled",ge],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ge],tabIndex:[2,"tabIndex","tabIndex",Vd],_tabindex:[2,"tabindex","_tabindex",Vd]}})}return t})(),fs=(()=>{class t extends ms{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Re],attrs:Cp,ngContentSelectors:Dp,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(ke(),X(0,"span",0),J(1),X(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var jd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[$e]})}return t})();var wp=["matButton",""],Ep=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Mp=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Ud=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),zd=(()=>{class t extends ms{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Sp(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?Ud.get(this._appearance):null,o=Ud.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Re],attrs:wp,ngContentSelectors:Mp,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(ke(Ep),X(0,"span",0),J(1),D(2,"span",1),J(3,1),M(),J(4,2),X(5,"span",2)(6,"span",3)),n&2&&Z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function Sp(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var $d=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[jd,$e]})}return t})();var hs=class{_box;_destroyed=new Q;_resizeSubject=new Q;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new qt(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Me(e=>e.some(n=>n.target===i)),As({bufferSize:1,refCount:!0}),Qe(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Hd=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(G);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new hs(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ip=["notch"],Rp=["matFormFieldNotchedOutline",""],Fp=["*"],Gd=["iconPrefixContainer"],qd=["textPrefixContainer"],Wd=["iconSuffixContainer"],Zd=["textSuffixContainer"],Tp=["textField"],Op=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Pp=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Np(t,i){t&1&&Y(0,"span",21)}function kp(t,i){if(t&1&&(u(0,"label",20),J(1,1),L(2,Np,1,0,"span",21),f()),t&2){let e=R(2);H("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Fe("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),B(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Lp(t,i){if(t&1&&L(0,kp,3,5,"label",20),t&2){let e=R();B(e._hasFloatingLabel()?0:-1)}}function Bp(t,i){t&1&&Y(0,"div",7)}function Vp(t,i){}function jp(t,i){if(t&1&&ji(0,Vp,0,0,"ng-template",13),t&2){R(2);let e=To(1);H("ngTemplateOutlet",e)}}function Up(t,i){if(t&1&&(u(0,"div",9),L(1,jp,1,1,null,13),f()),t&2){let e=R();H("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),B(e._forceDisplayInfixLabel()?-1:1)}}function zp(t,i){t&1&&(u(0,"div",10,2),J(2,2),f())}function $p(t,i){t&1&&(u(0,"div",11,3),J(2,3),f())}function Hp(t,i){}function Gp(t,i){if(t&1&&ji(0,Hp,0,0,"ng-template",13),t&2){R();let e=To(1);H("ngTemplateOutlet",e)}}function qp(t,i){t&1&&(u(0,"div",14,4),J(2,4),f())}function Wp(t,i){t&1&&(u(0,"div",15,5),J(2,5),f())}function Zp(t,i){t&1&&Y(0,"div",16)}function Yp(t,i){t&1&&(u(0,"div",18),J(1,6),f())}function Kp(t,i){if(t&1&&(u(0,"mat-hint",22),m(1),f()),t&2){let e=R(2);H("id",e._hintLabelId),p(),O(e.hintLabel)}}function Xp(t,i){if(t&1&&(u(0,"div",19),L(1,Kp,2,2,"mat-hint",22),J(2,7),Y(3,"div",23),J(4,8),f()),t&2){let e=R();p(),B(e.hintLabel?1:-1)}}var Ai=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-label"]]})}return t})(),tu=new b("MatError"),gs=(()=>{class t{id=c(ct).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,r){n&2&&Ft("id",r.id)},inputs:{id:"id"},features:[qe([{provide:tu,useExisting:t}])]})}return t})(),ps=(()=>{class t{align="start";id=c(ct).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(Ft("id",r.id),Fe("align",null),Z("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Jp=new b("MatPrefix");var Qp=new b("MatSuffix");var nu=new b("FloatingLabelParent"),Yd=(()=>{class t{_elementRef=c(K);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Hd);_ngZone=c(G);_parent=c(nu);_resizeSubscription=new Gt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return eg(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&Z("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function eg(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var Kd="mdc-line-ripple--active",lo="mdc-line-ripple--deactivating",Xd=(()=>{class t{_elementRef=c(K);_cleanupTransitionEnd;constructor(){let e=c(G),n=c(ye);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(lo),e.add(Kd)}deactivate(){this._elementRef.nativeElement.classList.add(lo)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(lo);e.propertyName==="opacity"&&r&&n.remove(Kd,lo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Jd=(()=>{class t{_elementRef=c(K);_ngZone=c(G);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&Ro(Ip,5),n&2){let o;ce(o=de())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&Z("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Rp,ngContentSelectors:Fp,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(ke(),X(0,"div",1),D(1,"div",2,0),J(3),M(),X(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),vs=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t})}return t})();var bs=new b("MatFormField"),tg=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Qd="fill",ng="auto",eu="fixed",ig="translateY(-50%)",co=(()=>{class t{_elementRef=c(K);_changeDetectorRef=c(rt);_platform=c(De);_idGenerator=c(ct);_ngZone=c(G);_defaults=c(tg,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Hn("iconPrefixContainer");_textPrefixContainerSignal=Hn("textPrefixContainer");_iconSuffixContainerSignal=Hn("iconSuffixContainer");_textSuffixContainerSignal=Hn("textSuffixContainer");_prefixSuffixContainers=ee(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=nl(Ai);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Pn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ng}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Qd;this._appearanceSignal.set(n)}_appearanceSignal=A(Qd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||eu}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||eu}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=On();constructor(){let e=this._defaults,n=c(ka);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Jt(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ee(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(Ti([void 0,void 0]),$(()=>[n.errorState,n.userAriaDescribedBy]),Ms(),Me(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Qe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ws(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){rl({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ee(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,g=this._currentDirection==="rtl"?"-1":"1",_=`${a+s}px`,se=`calc(${g} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ne=`var(--mat-mdc-form-field-label-transform, ${ig} translateX(${se}))`,te=a+s+l+d;return[ne,te]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(Ks(o,r._labelChild,Ai,5),zi(o,vs,5)(o,Jp,5)(o,Qp,5)(o,tu,5)(o,ps,5)),n&2){Fo();let a;ce(a=de())&&(r._formFieldControl=a.first),ce(a=de())&&(r._prefixChildren=a),ce(a=de())&&(r._suffixChildren=a),ce(a=de())&&(r._errorChildren=a),ce(a=de())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(Xs(r._iconPrefixContainerSignal,Gd,5)(r._textPrefixContainerSignal,qd,5)(r._iconSuffixContainerSignal,Wd,5)(r._textSuffixContainerSignal,Zd,5),Ro(Tp,5)(Gd,5)(qd,5)(Wd,5)(Zd,5)(Yd,5)(Jd,5)(Xd,5)),n&2){Fo(4);let o;ce(o=de())&&(r._textField=o.first),ce(o=de())&&(r._iconPrefixContainer=o.first),ce(o=de())&&(r._textPrefixContainer=o.first),ce(o=de())&&(r._iconSuffixContainer=o.first),ce(o=de())&&(r._textSuffixContainer=o.first),ce(o=de())&&(r._floatingLabel=o.first),ce(o=de())&&(r._notchedOutline=o.first),ce(o=de())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&Z("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[qe([{provide:bs,useExisting:t},{provide:nu,useExisting:t}])],ngContentSelectors:Pp,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(ke(Op),ji(0,Lp,1,1,"ng-template",null,0,Qs),u(2,"div",6,1),k("click",function(a){return r._control.onContainerClick(a)}),L(4,Bp,1,0,"div",7),u(5,"div",8),L(6,Up,2,2,"div",9),L(7,zp,3,0,"div",10),L(8,$p,3,0,"div",11),u(9,"div",12),L(10,Gp,1,1,null,13),J(11),f(),L(12,qp,3,0,"div",14),L(13,Wp,3,0,"div",15),f(),L(14,Zp,1,0,"div",16),f(),u(15,"div",17),L(16,Yp,2,0,"div",18)(17,Xp,5,1,"div",19),f()),n&2){let o;p(2),Z("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),B(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),B(r._hasOutline()?6:-1),p(),B(r._hasIconPrefix?7:-1),p(),B(r._hasTextPrefix?8:-1),p(2),B(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),B(r._hasTextSuffix?12:-1),p(),B(r._hasIconSuffix?13:-1),p(),B(r._hasOutline()?-1:14),p(),Z("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),B((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Yd,Jd,ko,Xd,ps],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ii=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[Ad,co,$e]})}return t})();var og=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),ag={passive:!0},iu=(()=>{class t{_platform=c(De);_ngZone=c(G);_renderer=c(et).createRenderer(null,null);_styleLoader=c(Ut);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ee;this._styleLoader.load(og);let n=Xe(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new Q,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,ag)));return this._monitoredElements.set(n,{subject:o,unlisten:l}),o}stopMonitoring(e){let n=Xe(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ru=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({})}return t})();var ou=new b("MAT_INPUT_VALUE_ACCESSOR");var au=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var uo=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var sg=["button","checkbox","file","hidden","image","radio","range","reset","submit"],lg=new b("MAT_INPUT_CONFIG"),su=(()=>{class t{_elementRef=c(K);_platform=c(De);ngControl=c(zt,{optional:!0,self:!0});_autofillMonitor=c(iu);_ngZone=c(G);_formField=c(bs,{optional:!0});_renderer=c(ye);_uid=c(ct).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(lg,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Q;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Pn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(He.required)??!1}set required(e){this._required=Pn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ss().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Pn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ss().has(e));constructor(){let e=c(Qa,{optional:!0}),n=c($t,{optional:!0}),r=c(au),o=c(ou,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Mo(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new uo(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Jt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){sg.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=I({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&k("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Ft("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Fe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),Z("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ge]},exportAs:["matInput"],features:[qe([{provide:vs,useExisting:t}]),Ne]})}return t})(),lu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=q({imports:[Ii,Ii,ru,$e]})}return t})();var mo=new b("ArticleService");var fo=class t{article=A(null);comments=A([]);saveArticle(i){this.article.set(i)}saveComments(i){this.comments.set(i)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var dg=()=>["/blog"],ug=(t,i)=>i.id;function mg(t,i){t&1&&(u(0,"p",14),m(1,"\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432. \u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!"),f())}function fg(t,i){if(t&1){let e=it();u(0,"mat-card",15)(1,"mat-card-header")(2,"mat-card-title"),m(3),f(),u(4,"mat-card-subtitle"),m(5),f()(),u(6,"mat-card-content")(7,"p"),m(8),f()(),u(9,"mat-card-actions")(10,"button",10),k("click",function(){let r=ue(e).$implicit,o=R(2);return me(o.onRateComment(r.id,1))}),u(11,"mat-icon"),m(12,"thumb_up"),f()(),u(13,"span",22),m(14),f(),u(15,"button",12),k("click",function(){let r=ue(e).$implicit,o=R(2);return me(o.onRateComment(r.id,-1))}),u(16,"mat-icon"),m(17,"thumb_down"),f()()()()}if(t&2){let e=i.$implicit;p(3),O(e.name),p(2),O(e.date),p(3),O(e.text),p(6),O(e.rating)}}function hg(t,i){t&1&&(u(0,"mat-error"),m(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"),f())}function pg(t,i){t&1&&(u(0,"mat-error"),m(1,"\u041C\u0438\u043D\u0438\u043C\u0443\u043C 10 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),f())}function gg(t,i){if(t&1){let e=it();u(0,"article",3)(1,"div",4),Y(2,"img",5),f(),u(3,"div",6)(4,"h1"),m(5),f(),u(6,"span",7),m(7),f(),u(8,"p",8),m(9),f(),u(10,"div",9)(11,"button",10),k("click",function(){ue(e);let r=R();return me(r.onRateArticle(1))}),u(12,"mat-icon"),m(13,"thumb_up"),f()(),u(14,"span",11),m(15),f(),u(16,"button",12),k("click",function(){ue(e);let r=R();return me(r.onRateArticle(-1))}),u(17,"mat-icon"),m(18,"thumb_down"),f()()()()(),u(19,"section",13)(20,"h2"),m(21),f(),L(22,mg,2,0,"p",14),he(23,fg,18,4,"mat-card",15,ug),f(),u(25,"section",16)(26,"h3"),m(27,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),f(),u(28,"form",17),k("ngSubmit",function(){ue(e);let r=R();return me(r.onAddComment())}),u(29,"mat-form-field",18)(30,"mat-label"),m(31,"\u0418\u043C\u044F"),f(),Y(32,"input",19),L(33,hg,2,0,"mat-error"),f(),u(34,"mat-form-field",18)(35,"mat-label"),m(36,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),f(),Y(37,"textarea",20),L(38,pg,2,0,"mat-error"),f(),u(39,"div")(40,"button",21)(41,"mat-icon"),m(42,"send"),f(),m(43," \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "),f()()()()}if(t&2){let e,n,r=R();p(5),O(r.article().title),p(2),O(r.article().date),p(2),O(r.article().content),p(6),O(r.article().rating??0),p(6),$i("Comments (",r.comments().length,")"),p(),B(r.comments().length===0?22:-1),p(),pe(r.comments()),p(5),H("formGroup",r.commentForm),p(5),B((e=r.commentForm.get("name"))!=null&&e.invalid&&((e=r.commentForm.get("name"))!=null&&e.touched)?33:-1),p(5),B((n=r.commentForm.get("text"))!=null&&n.invalid&&((n=r.commentForm.get("text"))!=null&&n.touched)?38:-1),p(2),H("disabled",r.commentForm.invalid)}}function vg(t,i){t&1&&(u(0,"p",2),m(1,"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."),f())}var ho=class t{route=c(je);service=c(mo);store=c(fo);titleService=c(vt);fb=c(to);article=this.store.article;comments=this.store.comments;commentForm=this.fb.group({name:["",He.required],text:["",[He.required,He.minLength(10)]]});ngOnInit(){let i=Number(this.route.snapshot.paramMap.get("id"));this.service.getArticleWithComments(i).subscribe(e=>{this.store.saveArticle(e.article),this.store.saveComments(e.comments),this.titleService.setTitle(e.article.title+" | Blog App")})}onRateArticle(i){let e=this.article()?.id;e!=null&&this.service.updateArticleRating(e,i).subscribe(n=>{this.store.saveArticle(n)})}onRateComment(i,e){this.service.updateCommentRating(i,e).subscribe(n=>{this.store.saveComments(n)})}onAddComment(){if(this.commentForm.invalid)return;let{name:i,text:e}=this.commentForm.value,n={id:Date.now(),articleId:this.article().id,name:i.trim(),text:e.trim(),date:new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),rating:0};this.service.addComment(n).subscribe(r=>{this.store.saveComments(r),this.commentForm.reset()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-article-detail"]],decls:7,vars:3,consts:[[1,"article-detail","container"],[1,"article-detail__back",3,"routerLink"],[1,"article-detail__loading"],[1,"article-detail__article"],[1,"article-detail__img"],["src","img/image 2.png","alt","Article image"],[1,"article-detail__content"],[1,"article-detail__date"],[1,"article-detail__text"],[1,"article-detail__rating"],["mat-icon-button","","title","Like",3,"click"],[1,"article-detail__rating-value"],["mat-icon-button","","title","Dislike",3,"click"],[1,"article-detail__comments"],[1,"article-detail__no-comments"],[1,"comment-card"],[1,"article-detail__add-comment"],[3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","name"],["matInput","","formControlName","text","rows","4"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"comment-rating"]],template:function(e,n){e&1&&(u(0,"div",0)(1,"a",1)(2,"mat-icon"),m(3,"arrow_back"),f(),m(4," Back to Blog "),f(),L(5,gg,44,10)(6,vg,2,0,"p",2),f()),e&2&&(p(),H("routerLink",Hi(2,dg)),p(4),B(n.article()?5:6))},dependencies:[Ue,no,eo,Rn,Xr,Jr,$t,Di,_d,fd,vd,pd,bd,gd,hd,$d,zd,fs,En,wn,Ii,co,Ai,gs,lu,su],styles:[".article-detail[_ngcontent-%COMP%]{padding:48px 0 64px}.article-detail__back[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;margin-bottom:32px;color:var(--color-gray);font-size:14px;text-decoration:none;transition:color .2s}.article-detail__back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.article-detail__back[_ngcontent-%COMP%]:hover{color:var(--color-black)}.article-detail__article[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;gap:48px;margin-bottom:48px;padding-bottom:48px;border-bottom:1px solid var(--color-border)}.article-detail__img[_ngcontent-%COMP%]{background:var(--color-bg-card);border-radius:16px;overflow:hidden;min-height:280px}.article-detail__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.article-detail__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;padding-top:8px}.article-detail__date[_ngcontent-%COMP%]{font-size:13px;color:var(--color-gray-light)}.article-detail__text[_ngcontent-%COMP%]{color:var(--color-gray);flex:1}.article-detail__rating[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.article-detail__rating-value[_ngcontent-%COMP%]{font-size:20px;font-weight:700;min-width:36px;text-align:center}.article-detail__comments[_ngcontent-%COMP%]{margin-bottom:48px}.article-detail__comments[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:24px}.article-detail__no-comments[_ngcontent-%COMP%]{color:var(--color-gray-light);padding:24px 0}.article-detail__loading[_ngcontent-%COMP%]{color:var(--color-gray-light);padding:64px 0;text-align:center}.article-detail__add-comment[_ngcontent-%COMP%]{padding-bottom:32px}.article-detail__add-comment[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:24px}.article-detail__add-comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;max-width:600px}.article-detail__add-comment[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.comment-card[_ngcontent-%COMP%]{margin-bottom:16px}.comment-rating[_ngcontent-%COMP%]{font-size:15px;font-weight:600;min-width:28px;text-align:center;line-height:40px}"]})};var cu=[{path:"",component:Lr},{path:"blog",component:ro},{path:"blog/:id",component:ho},{path:"**",redirectTo:""}];var du=7,_s="blog_articles",uu=[{id:1,title:"Minim anim pariatur magna duis sit et dolor inci",content:"Sint occaecat deserunt aliquo do occaecat ut quis. Cupidatat magna fugiat quis sit duis est in volup.",date:"Oct 16, 2025"},{id:2,title:"Esse ad duis occaecat exercitation lorem ipsum",content:"Exercitation in aliqua pariatur. Voluptate deserunt mollit ullamco consectetur.",date:"Oct 10, 2025"},{id:3,title:"Dolor sit amet consectetur adipiscing elit",content:"Fugiat Lorem veniam cillum officia nisi. Nulla dolore magna minim laboris.",date:"Oct 05, 2025"}],po=class t{getFromStorage(){let i=localStorage.getItem(_s);return i?JSON.parse(i):(localStorage.setItem(_s,JSON.stringify(uu)),uu)}saveToStorage(i){localStorage.setItem(_s,JSON.stringify(i))}getArticles(i){let e=this.getFromStorage(),n=(i-1)*du,r=e.slice(n,n+du);return y({articles:r,total:e.length})}addArticle(i,e){let n=[i,...this.getFromStorage()];return this.saveToStorage(n),this.getArticles(e)}updateArticle(i,e){let n=this.getFromStorage().map(r=>r.id===i.id?i:r);return this.saveToStorage(n),this.getArticles(e)}deleteArticle(i,e){let n=this.getFromStorage().filter(r=>r.id!==i);return this.saveToStorage(n),this.getArticles(e)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})};var mu="blog_articles",ys="blog_comments",go=class t{getArticles(){let i=localStorage.getItem(mu);return i?JSON.parse(i):[]}getComments(){let i=localStorage.getItem(ys);return i?JSON.parse(i):[]}getArticleWithComments(i){let e=this.getArticles().find(r=>r.id===i);if(!e)return Wt(()=>new Error(`Article ${i} not found`));let n=this.getComments().filter(r=>r.articleId===i);return y({article:e,comments:n})}addComment(i){let e=[...this.getComments(),i];return localStorage.setItem(ys,JSON.stringify(e)),y(e.filter(n=>n.articleId===i.articleId))}updateCommentRating(i,e){let n=this.getComments(),r=n.find(a=>a.id===i);if(!r)return y([]);let o=n.map(a=>a.id===i?N(h({},a),{rating:a.rating+e}):a);return localStorage.setItem(ys,JSON.stringify(o)),y(o.filter(a=>a.articleId===r.articleId))}updateArticleRating(i,e){let n=this.getArticles().map(r=>r.id===i?N(h({},r),{rating:(r.rating??0)+e}):r);return localStorage.setItem(mu,JSON.stringify(n)),y(n.find(r=>r.id===i))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})};var fu={providers:[Os(),Fa(cu,Oa()),Oc(),{provide:Cn,useClass:po},{provide:mo,useClass:go}]};var bg=()=>({exact:!0}),vo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-header"]],decls:14,vars:6,consts:[[1,"header"],[1,"nav","container"],[1,"nav__logo",3,"routerLink"],[1,"nav__list"],["routerLinkActive","nav__link--active",1,"nav__link",3,"routerLink","routerLinkActiveOptions"],["routerLinkActive","nav__link--active",1,"nav__link",3,"routerLink"]],template:function(e,n){e&1&&(u(0,"header",0)(1,"nav",1)(2,"a",2),m(3,"Name-folio"),f(),u(4,"ul",3)(5,"li")(6,"a",4),m(7,"About me"),f()(),u(8,"li")(9,"a",5),m(10,"Blog"),f()(),u(11,"li")(12,"a",5),m(13,"Contact"),f()()()()()),e&2&&(p(2),H("routerLink","/"),p(4),H("routerLink","/")("routerLinkActiveOptions",Hi(5,bg)),p(3),H("routerLink","/blog"),p(3),H("routerLink","/contacts"))},dependencies:[Ue,Ra],styles:[".header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;background:var(--color-white);border-bottom:1px solid var(--color-border)}.nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:64px}.nav__logo[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:var(--color-black);text-decoration:none}.nav__list[_ngcontent-%COMP%]{display:flex;gap:40px;list-style:none}.nav__link[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:var(--color-gray);text-decoration:none;transition:color .25s ease,font-weight .2s ease}.nav__link[_ngcontent-%COMP%]:hover, .nav__link--active[_ngcontent-%COMP%]{font-weight:700;color:var(--color-black)}"]})};var bo=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-footer"]],decls:40,vars:0,consts:[[1,"footer"],[1,"footer__inner","container"],[1,"footer__left"],[1,"footer__title"],[1,"footer__contacts"],["href","mailto:alex@creativeblog.ru"],["href","tel:+70001234567"],[1,"footer__socials"],["href","https://vk.com","target","_blank","title","\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435",1,"footer__social"],["width","16","height","16","viewBox","0 0 24 24","fill","currentColor"],["d","M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1-1.49-.9-1.49.217v1.498c0 .387-.124.617-1.14.617-1.683 0-3.55-1.018-4.862-2.913C6.05 12.196 5.5 9.834 5.5 9.834c0-.387.124-.617.617-.617h1.744c.458 0 .633.21.81.703.893 2.576 2.387 4.836 3.003 4.836.232 0 .34-.107.34-.695V11.48c-.07-1.248-.73-1.354-.73-1.798 0-.232.19-.463.494-.463h2.744c.387 0 .525.21.525.665v3.577c0 .387.17.525.277.525.232 0 .425-.138.85-.563 1.32-1.477 2.261-3.753 2.261-3.753.124-.387.387-.617.844-.617h1.744c.525 0 .64.27.525.657-.217 1.018-2.33 3.99-2.33 3.99-.194.31-.263.449 0 .8.194.263.832.81 1.258 1.3.78.895 1.374 1.644 1.537 2.163.17.516-.107.78-.617.78z"],["href","https://t.me","target","_blank","title","Telegram",1,"footer__social"],["d","M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.981l-2.965-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.963.578z"],["href","https://github.com","target","_blank","title","GitHub",1,"footer__social"],["d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"],[1,"footer__copy"],[1,"footer__right"],[1,"form",3,"submit"],[1,"form__group"],["for","footer-email",1,"form__label"],["type","email","id","footer-email","placeholder","Your email address",1,"form__input"],["for","footer-msg",1,"form__label"],["id","footer-msg","rows","4","placeholder","Describe your project",1,"form__textarea"],["type","submit",1,"form__btn"]],template:function(e,n){e&1&&(D(0,"footer",0)(1,"div",1)(2,"div",2)(3,"h2",3),m(4,"Say hello and let's"),X(5,"br"),m(6,"work together!"),M(),D(7,"div",4)(8,"p"),m(9,"Email: "),D(10,"a",5),m(11,"alex@creativeblog.ru"),M()(),D(12,"p"),m(13,"Phone: "),D(14,"a",6),m(15,"+7 (000) 123-45-67"),M()()(),D(16,"div",7)(17,"a",8),mt(),D(18,"svg",9),X(19,"path",10),M()(),ft(),D(20,"a",11),mt(),D(21,"svg",9),X(22,"path",12),M()(),ft(),D(23,"a",13),mt(),D(24,"svg",9),X(25,"path",14),M()()(),ft(),D(26,"p",15),m(27,"\xA9 2025 Brand, Inc."),M()(),D(28,"div",16)(29,"form",17),Ys("submit",function(o){return o.preventDefault()}),D(30,"div",18)(31,"label",19),m(32,"Email"),M(),X(33,"input",20),M(),D(34,"div",18)(35,"label",21),m(36,"Input your message"),M(),X(37,"textarea",22),M(),D(38,"button",23),m(39,"Submit"),M()()()()())},styles:[".footer[_ngcontent-%COMP%]{background:var(--color-dark);color:var(--color-white);padding:72px 0}.footer__inner[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}.footer__title[_ngcontent-%COMP%]{color:var(--color-white);margin-bottom:24px}.footer__contacts[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;font-size:13px;color:#aaa;margin-bottom:20px}.footer__contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-green);text-decoration:none;transition:color .25s ease}.footer__contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#3d9440}.footer__socials[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.footer__social[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;border:1px solid #333333;color:#aaa;text-decoration:none;transition:border-color .25s ease,color .25s ease}.footer__social[_ngcontent-%COMP%]:hover{border-color:var(--color-green);color:var(--color-green)}.footer__copy[_ngcontent-%COMP%]{font-size:12px;color:#555}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.form__group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.form__label[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#ccc}.form__input[_ngcontent-%COMP%], .form__textarea[_ngcontent-%COMP%]{background:transparent;border:1px solid #333333;border-radius:4px;padding:10px 14px;font-family:inherit;font-size:13px;color:var(--color-white);outline:none;resize:none;transition:border-color .25s ease}.form__input[_ngcontent-%COMP%]::placeholder, .form__textarea[_ngcontent-%COMP%]::placeholder{color:#555}.form__input[_ngcontent-%COMP%]:focus, .form__textarea[_ngcontent-%COMP%]:focus{border-color:var(--color-green)}.form__btn[_ngcontent-%COMP%]{align-self:flex-start;padding:10px 28px;font-family:inherit;font-size:13px;font-weight:600;color:var(--color-white);background:var(--color-green);border:none;border-radius:4px;cursor:pointer;transition:background .25s ease}.form__btn[_ngcontent-%COMP%]:hover{background:#3d9440}"]})};var _o=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-root"]],decls:3,vars:0,template:function(e,n){e&1&&Y(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[Pa,mi,vo,bo],encapsulation:2})};qo(_o,fu).catch(t=>console.error(t));
