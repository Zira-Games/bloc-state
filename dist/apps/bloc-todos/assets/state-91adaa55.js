var $t=Object.defineProperty;var At=(t,e,r)=>e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var f=(t,e,r)=>(At(t,typeof e!="symbol"?e+"":e,r),r);import{r as A,V as Mt,h as yt,m as vt,s as gt,n as _t,_ as S,i as Pt,e as Tt,d as wt,j as F,o as Ot,g as St,W as Et,X as Rt,Y as J,Z as O,a0 as Bt,M as Dt,I as Wt}from"./index-044ffb22.js";function ve(t,e){var r,o;return A.isValidElement(t)&&e.indexOf((r=t.type.muiName)!=null?r:(o=t.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}const Nt=Mt(),ge=Nt;function _e(t){return typeof t=="string"}function Lt(t){return yt("MuiTypography",t)}vt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const It=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],kt=t=>{const{align:e,gutterBottom:r,noWrap:o,paragraph:n,variant:s,classes:i}=t,a={root:["root",s,t.align!=="inherit"&&`align${_t(e)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return St(a,Lt,i)},Ut=gt("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],r.align!=="inherit"&&e[`align${_t(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>S({margin:0},e.variant&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),at={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},zt={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Ft=t=>zt[t]||t,Jt=A.forwardRef(function(e,r){const o=Pt({props:e,name:"MuiTypography"}),n=Ft(o.color),s=Tt(S({},o,{color:n})),{align:i="inherit",className:a,component:u,gutterBottom:c=!1,noWrap:l=!1,paragraph:d=!1,variant:p="body1",variantMapping:h=at}=s,m=wt(s,It),b=S({},s,{align:i,color:n,className:a,component:u,gutterBottom:c,noWrap:l,paragraph:d,variant:p,variantMapping:h}),L=u||(d?"p":h[p]||at[p])||"span",C=kt(b);return F.jsx(Ut,S({as:L,ref:r,ownerState:b,className:Ot(C.root,a)},m))}),Pe=Jt,Kt=A.createContext({}),Ht=Kt;function Vt(t){return yt("MuiList",t)}vt("MuiList",["root","padding","dense","subheader"]);const Xt=["children","className","component","dense","disablePadding","subheader"],Zt=t=>{const{classes:e,disablePadding:r,dense:o,subheader:n}=t;return St({root:["root",!r&&"padding",o&&"dense",n&&"subheader"]},Vt,e)},qt=gt("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disablePadding&&e.padding,r.dense&&e.dense,r.subheader&&e.subheader]}})(({ownerState:t})=>S({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),Gt=A.forwardRef(function(e,r){const o=Pt({props:e,name:"MuiList"}),{children:n,className:s,component:i="ul",dense:a=!1,disablePadding:u=!1,subheader:c}=o,l=wt(o,Xt),d=A.useMemo(()=>({dense:a}),[a]),p=S({},o,{component:i,dense:a,disablePadding:u}),h=Zt(p);return F.jsx(Ht.Provider,{value:d,children:F.jsxs(qt,S({as:i,className:Ot(h.root,s),ref:r,ownerState:p},l,{children:[c,n]}))})}),we=Gt,Oe=t=>Et(t),Se=t=>Et(t),Ee=({bloc:t,children:e,dependencies:r=[],create:o,onMount:n})=>Rt({classDef:t,create:o,onMount:n,onUnmount:s=>{typeof o=="function"&&s.close()},dependencies:r,children:e});class Qt{constructor(e,r){this.current=e,this.nextState=r}}class Yt{constructor(e,r){f(this,"name");f(this,"state$");f(this,"subscriptions",new Set);f(this,"_isClosed",!1);f(this,"_emitted",!1);f(this,"_state");f(this,"_stateSubject$");this._state=e,this._stateSubject$=new J,this.state$=this._stateSubject$.asObservable(),this.name=r??this.constructor.name,this.subscriptions.add(this.state$.subscribe()),O.observer.onCreate(this,this._state)}get state(){return this._state}get isClosed(){return this._isClosed}onError(e){O.observer.onError(this,e)}onChange(e){O.observer.onChange(this,e)}onClose(){O.observer.onClose(this)}addError(e){this.onError(e)}listenTo(e,r){let o;typeof r=="function"?o={next:r}:o=r;const n={next:i=>{var a;(a=o.next)==null||a.call(this,i)},error:i=>{var a;(a=o.error)==null||a.call(this,i)},complete:()=>{var i;(i=o.complete)==null||i.call(this)}},s=e.subscribe(n);return this.subscriptions.add(s),{unsubscribe:()=>{s.unsubscribe(),this.subscriptions.delete(s)},get isClosed(){return s.closed}}}__unsafeEmit__(e){return this.emit(e)}emit(e){try{if(this._isClosed&&console.warn("Cannot emit new states after calling close"),e==this._state&&this._emitted)return;const r=this.state;this._state=e,this.onChange(new Qt(r,e)),this._stateSubject$.next(e),this._emitted=!0}catch(r){throw this.onError(r),r}}fromJson(e){return JSON.parse(e)}toJson(e){return JSON.stringify(e)}close(){this._isClosed=!0,this._stateSubject$.complete(),this.subscriptions.forEach(e=>e.unsubscribe()),this.subscriptions.clear(),this.onClose()}}class te{constructor(e){f(this,"_disposables",[]);this._emit=e}call(e){return this._emit(e)}onEach(e,r,o){return new Promise((n,s)=>{const i=e.subscribe({next:r,error:a=>{o?(o(a),n()):s()},complete:n});this._disposables.push(i)})}forEach(e,r,o){return this.onEach(e,n=>this._emit(r(n)),o?n=>this._emit(o(n)):void 0)}close(){this._disposables.forEach(e=>e.unsubscribe()),this._disposables=[]}}class G extends Error{constructor(e){super(e),Object.setPrototypeOf(this,G.prototype)}}class ee{constructor(e,r,o){this.currentState=e,this.event=r,this.nextState=o}}const N=class N extends Yt{constructor(r,o){super(r,o==null?void 0:o.name);f(this,"_eventSubject$",new J);f(this,"_eventMap",new WeakSet);f(this,"_eventStateMappers",new Array);f(this,"_globalTransformer");f(this,"_emitters",new Set);f(this,"isBlocInstance",!0);if(this.on=this.on.bind(this),this.add=this.add.bind(this),this.emit=this.emit.bind(this),this._globalTransformer=o==null?void 0:o.transformer,this._globalTransformer){const s=this._globalTransformer(this._eventSubject$,i=>this._eventStateMappers.find(a=>a.filter(i)).mapper(i)).subscribe();this.subscriptions.add(s)}}static transformer(){return(r,o)=>r.pipe(Bt(o))}onError(r){O.observer.onError(this,r)}onTransition(r){O.observer.onTransition(this,r)}onEvent(r){O.observer.onEvent(this,r)}on(r,o,n){if(this._eventMap.has(r))throw new ct(`${r.name} can only have one EventHandler`);if(this._globalTransformer&&n)throw new Error("Can't provide a transformer for invididuals events along with a bloc-level event transformer");if(this.hasAncestor(r,!0))throw new ct(`${r.name} can only have one EventHandler per hierarchy`);this._eventMap.add(r);const s=i=>{const a=new J;let u=!1;const c=h=>{if(!u&&!(this.state===h&&this._emitted))try{const m=this.state;this.onTransition(new ee(m,i,h)),a.next(h)}catch(m){throw this.onError(m),m}},l=new te(c.bind(this)),d=h=>l.call(h);Object.defineProperty(d,"isClosed",{get:()=>u}),d.onEach=(h,m,b)=>l.onEach(h,m,b),d.forEach=(h,m,b)=>l.forEach(h,m,b);const p=async()=>{try{this._emitters.add(l),await o.call(this,i,d)}catch(h){throw this.onError(h),h}};return new Wt(h=>(a.subscribe(this.emit),p().then(()=>h.complete()).catch(m=>h.error(m)),()=>{u=!0,l.close(),this._emitters.delete(l),a.complete()}))};if(this._globalTransformer)this._eventStateMappers.push({filter:i=>i instanceof r,mapper:s});else{const u=(n??N.transformer())(this._eventSubject$.pipe(Dt(c=>c instanceof r)),s).subscribe();this.subscriptions.add(u)}}hasAncestor(r,o=!1){let n=Object.getPrototypeOf(r);return o||(n=n.constructor),this._eventMap.has(n)?!0:n===null?!1:this.hasAncestor(n,!0)}add(r){if(!this.hasAncestor(r))throw new G(`
        add(${r}) was called without a registered event handler.
        Make sure to register a handler via on(${r}, (event, emit) {...})
      `);try{this.onEvent(r),this._eventSubject$.next(r)}catch(o){throw this.onError(o),o}return this}close(){this._emitters.forEach(r=>r.close()),this._emitters.clear(),this._eventSubject$.complete(),super.close()}};f(N,"ignoreListeners",!1);let ut=N;class ct extends Error{constructor(){super(...arguments);f(this,"name","BlocError")}}function g(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(n){return"'"+n+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function j(t){return!!t&&!!t[y]}function E(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var o=Object.getPrototypeOf(r);if(o===null)return!0;var n=Object.hasOwnProperty.call(o,"constructor")&&o.constructor;return n===Object||typeof n=="function"&&Function.toString.call(n)===ce}(t)||Array.isArray(t)||!!t[Z]||!!(!((e=t.constructor)===null||e===void 0)&&e[Z])||Q(t)||Y(t))}function M(t,e,r){r===void 0&&(r=!1),x(t)===0?(r?Object.keys:nt)(t).forEach(function(o){r&&typeof o=="symbol"||e(o,t[o],t)}):t.forEach(function(o,n){return e(n,o,t)})}function x(t){var e=t[y];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Q(t)?2:Y(t)?3:0}function K(t,e){return x(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function re(t,e){return x(t)===2?t.get(e):t[e]}function jt(t,e,r){var o=x(t);o===2?t.set(e,r):o===3?t.add(r):t[e]=r}function oe(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Q(t){return ae&&t instanceof Map}function Y(t){return ue&&t instanceof Set}function P(t){return t.o||t.t}function tt(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=le(t);delete e[y];for(var r=nt(e),o=0;o<r.length;o++){var n=r[o],s=e[n];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[n]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[n]})}return Object.create(Object.getPrototypeOf(t),e)}function et(t,e){return e===void 0&&(e=!1),rt(t)||j(t)||!E(t)||(x(t)>1&&(t.set=t.add=t.clear=t.delete=ne),Object.freeze(t),e&&M(t,function(r,o){return et(o,!0)},!0)),t}function ne(){g(2)}function rt(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function _(t){var e=he[t];return e||g(18,t),e}function lt(){return T}function I(t,e){e&&(_("Patches"),t.u=[],t.s=[],t.v=e)}function B(t){H(t),t.p.forEach(se),t.p=null}function H(t){t===T&&(T=t.l)}function ht(t){return T={p:[],l:T,h:t,m:!0,_:0}}function se(t){var e=t[y];e.i===0||e.i===1?e.j():e.O=!0}function k(t,e){e._=e.p.length;var r=e.p[0],o=t!==void 0&&t!==r;return e.h.g||_("ES5").S(e,t,o),o?(r[y].P&&(B(e),g(4)),E(t)&&(t=D(e,t),e.l||W(e,t)),e.u&&_("Patches").M(r[y].t,t,e.u,e.s)):t=D(e,r,[]),B(e),e.u&&e.v(e.u,e.s),t!==xt?t:void 0}function D(t,e,r){if(rt(e))return e;var o=e[y];if(!o)return M(e,function(a,u){return ft(t,o,e,a,u,r)},!0),e;if(o.A!==t)return e;if(!o.P)return W(t,o.t,!0),o.t;if(!o.I){o.I=!0,o.A._--;var n=o.i===4||o.i===5?o.o=tt(o.k):o.o,s=n,i=!1;o.i===3&&(s=new Set(n),n.clear(),i=!0),M(s,function(a,u){return ft(t,o,n,a,u,r,i)}),W(t,n,!1),r&&t.u&&_("Patches").N(o,r,t.u,t.s)}return o.o}function ft(t,e,r,o,n,s,i){if(j(n)){var a=D(t,n,s&&e&&e.i!==3&&!K(e.R,o)?s.concat(o):void 0);if(jt(r,o,a),!j(a))return;t.m=!1}else i&&r.add(n);if(E(n)&&!rt(n)){if(!t.h.D&&t._<1)return;D(t,n),e&&e.A.l||W(t,n)}}function W(t,e,r){r===void 0&&(r=!1),t.h.D&&t.m&&et(e,r)}function U(t,e){var r=t[y];return(r?P(r):t)[e]}function pt(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var o=Object.getOwnPropertyDescriptor(r,e);if(o)return o;r=Object.getPrototypeOf(r)}}function V(t){t.P||(t.P=!0,t.l&&V(t.l))}function z(t){t.o||(t.o=tt(t.t))}function X(t,e,r){var o=Q(e)?_("MapSet").F(e,r):Y(e)?_("MapSet").T(e,r):t.g?function(n,s){var i=Array.isArray(n),a={i:i?1:0,A:s?s.A:lt(),P:!1,I:!1,R:{},l:s,t:n,k:null,o:null,j:null,C:!1},u=a,c=q;i&&(u=[a],c=$);var l=Proxy.revocable(u,c),d=l.revoke,p=l.proxy;return a.k=p,a.j=d,p}(e,r):_("ES5").J(e,r);return(r?r.A:lt()).p.push(o),o}function ie(t){return j(t)||g(22,t),function e(r){if(!E(r))return r;var o,n=r[y],s=x(r);if(n){if(!n.P&&(n.i<4||!_("ES5").K(n)))return n.t;n.I=!0,o=dt(r,s),n.I=!1}else o=dt(r,s);return M(o,function(i,a){n&&re(n.t,i)===a||jt(o,i,e(a))}),s===3?new Set(o):o}(t)}function dt(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return tt(t)}var mt,T,ot=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",ae=typeof Map<"u",ue=typeof Set<"u",bt=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",xt=ot?Symbol.for("immer-nothing"):((mt={})["immer-nothing"]=!0,mt),Z=ot?Symbol.for("immer-draftable"):"__$immer_draftable",y=ot?Symbol.for("immer-state"):"__$immer_state",ce=""+Object.prototype.constructor,nt=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,le=Object.getOwnPropertyDescriptors||function(t){var e={};return nt(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},he={},q={get:function(t,e){if(e===y)return t;var r=P(t);if(!K(r,e))return function(n,s,i){var a,u=pt(s,i);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(n.k):void 0}(t,r,e);var o=r[e];return t.I||!E(o)?o:o===U(t.t,e)?(z(t),t.o[e]=X(t.A.h,o,t)):o},has:function(t,e){return e in P(t)},ownKeys:function(t){return Reflect.ownKeys(P(t))},set:function(t,e,r){var o=pt(P(t),e);if(o!=null&&o.set)return o.set.call(t.k,r),!0;if(!t.P){var n=U(P(t),e),s=n==null?void 0:n[y];if(s&&s.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(oe(r,n)&&(r!==void 0||K(t.t,e)))return!0;z(t),V(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return U(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,z(t),V(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=P(t),o=Reflect.getOwnPropertyDescriptor(r,e);return o&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:o.enumerable,value:r[e]}},defineProperty:function(){g(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){g(12)}},$={};M(q,function(t,e){$[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),$.deleteProperty=function(t,e){return $.set.call(this,t,e,void 0)},$.set=function(t,e,r){return q.set.call(this,t[0],e,r,t[0])};var fe=function(){function t(r){var o=this;this.g=bt,this.D=!0,this.produce=function(n,s,i){if(typeof n=="function"&&typeof s!="function"){var a=s;s=n;var u=o;return function(b){var L=this;b===void 0&&(b=a);for(var C=arguments.length,st=Array(C>1?C-1:0),R=1;R<C;R++)st[R-1]=arguments[R];return u.produce(b,function(Ct){var it;return(it=s).call.apply(it,[L,Ct].concat(st))})}}var c;if(typeof s!="function"&&g(6),i!==void 0&&typeof i!="function"&&g(7),E(n)){var l=ht(o),d=X(o,n,void 0),p=!0;try{c=s(d),p=!1}finally{p?B(l):H(l)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(b){return I(l,i),k(b,l)},function(b){throw B(l),b}):(I(l,i),k(c,l))}if(!n||typeof n!="object"){if((c=s(n))===void 0&&(c=n),c===xt&&(c=void 0),o.D&&et(c,!0),i){var h=[],m=[];_("Patches").M(n,c,h,m),i(h,m)}return c}g(21,n)},this.produceWithPatches=function(n,s){if(typeof n=="function")return function(c){for(var l=arguments.length,d=Array(l>1?l-1:0),p=1;p<l;p++)d[p-1]=arguments[p];return o.produceWithPatches(c,function(h){return n.apply(void 0,[h].concat(d))})};var i,a,u=o.produce(n,s,function(c,l){i=c,a=l});return typeof Promise<"u"&&u instanceof Promise?u.then(function(c){return[c,i,a]}):[u,i,a]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){E(r)||g(8),j(r)&&(r=ie(r));var o=ht(this),n=X(this,r,void 0);return n[y].C=!0,H(o),n},e.finishDraft=function(r,o){var n=r&&r[y],s=n.A;return I(s,o),k(void 0,s)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!bt&&g(20),this.g=r},e.applyPatches=function(r,o){var n;for(n=o.length-1;n>=0;n--){var s=o[n];if(s.path.length===0&&s.op==="replace"){r=s.value;break}}n>-1&&(o=o.slice(n+1));var i=_("Patches").$;return j(r)?i(r,o):this.produce(r,function(a){return i(a,o)})},t}(),v=new fe,pe=v.produce;v.produceWithPatches.bind(v);v.setAutoFreeze.bind(v);v.setUseProxies.bind(v);v.applyPatches.bind(v);v.createDraft.bind(v);v.finishDraft.bind(v);const w=pe;var me;class de{constructor(){f(this,me,!0);f(this,"name",this.constructor.name)}copyWith(e){return w(this,e)}}me=Z;class je extends de{constructor(r,o,n){super();f(this,"status");f(this,"error");f(this,"isStateInstance",!0);f(this,"data");this.data=r,this.status=o??"initial",this.error=n}produceWithData(r,o){return o==null?w(this,n=>{n.status=r,n.error=void 0}):typeof o=="function"?w(this,n=>{n.status=r,n.error=void 0,n.data=w(n.data,o)}):w(this,n=>{n.error=void 0,n.status=r,n.data=w(n.data,()=>o)})}loading(r){return this.produceWithData("loading",r)}ready(r){return this.produceWithData("ready",r)}failed(r){return w(this,o=>{o.status="failed",o.error=r})}}export{ut as B,we as L,je as S,Pe as T,Se as a,Ee as b,_e as c,Ht as d,ve as i,ge as s,Oe as u};