"use strict";var d=Object.defineProperty;var f=(l,t,n)=>t in l?d(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n;var s=(l,t,n)=>(f(l,typeof t!="symbol"?t+"":t,n),n);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("@jacobtipp/bloc");class b{constructor(t,n){s(this,"lock",!1);s(this,"bloc");s(this,"initialState");s(this,"connectionUnsubscribe");s(this,"isClosed",!1);s(this,"update",(t,n="onChange")=>{var o,e,i;if(this.bloc){if(this.lock){this.lock=!1,a.Bloc.ignoreListeners=!1;return}const p=`[${this.options.name}] - ${n}`;(o=this.options)!=null&&o.logTrace&&(console.groupCollapsed(p,t),console.trace(),console.groupEnd()),(i=(e=this.options)==null?void 0:e.preAction)==null||i.call(e),this.send({type:p},t)}});s(this,"send",(t,n)=>{this.connectionInstance.send(t,n)});this.options=t,this.connectionInstance=n,this.connectionUnsubscribe=this.connectionInstance.subscribe(o=>{var e,i;if(o.type==="DISPATCH"){const c=o.payload.type;if(c==="COMMIT"&&this.bloc){this.connectionInstance.init((e=this.bloc)==null?void 0:e.state);return}if(c==="RESET"&&this.bloc){this.lock=!0,a.Bloc.ignoreListeners=!0,this.bloc.__unsafeEmit__(this.initialState),this.connectionInstance.init((i=this.bloc)==null?void 0:i.state);return}(c==="JUMP_TO_STATE"||c==="JUMP_TO_ACTION")&&this.bloc&&(this.lock=!0,a.Bloc.ignoreListeners=!0,this.bloc.__unsafeEmit__(this.bloc.fromJson(o.state)))}})}close(){this.isClosed||(this.isClosed=!0,this.removeBloc(),this.connectionInstance.unsubscribe(),this.connectionUnsubscribe())}addBloc(t,n){var e,i,c;this.bloc=t,this.initialState=n;const o=`[${this.options.name}] - @Init`;(e=this.options)!=null&&e.logTrace&&(console.groupCollapsed(o,n),console.trace(),console.groupEnd()),(c=(i=this.options)==null?void 0:i.preAction)==null||c.call(i),this.send({type:o},n)}removeBloc(){var n;const t=this.options.name;this.send({type:`[${t}] - onClose`},(n=this.bloc)==null?void 0:n.state),this.bloc=void 0}}const r=class r{constructor(t){s(this,"isDev",process.env.NODE_ENV!=="production");s(this,"isServer",typeof window>"u");s(this,"options",{});s(this,"addBloc",(t,n)=>{if(this.isServer||r.connections.has(t))return;const o=t.name,e={...this.options,name:o},i=window.__REDUX_DEVTOOLS_EXTENSION__.connect(e),c=new b(e,i);c.addBloc(t,n),r.connections.set(t,c)});if(this.isServer)return;const n={name:document.title,logTrace:!1};this.options={...n,...t},this.isDev&&!window.__REDUX_DEVTOOLS_EXTENSION__&&(this.isDev=!1)}onEvent(t,n){}onError(t,n){}onCreate(t,n){this.isDev&&this.addBloc(t,n)}onTransition(t,n){if(!this.isDev)return;const o=r.connections.get(t),e=n.event.name??n.event.constructor.name;o==null||o.update(n.nextState,e)}onChange(t,n){if(!this.isDev||t.isBlocInstance)return;const o=r.connections.get(t);o==null||o.update(n.nextState)}onClose(t){if(!this.isDev)return;const n=r.connections.get(t);n==null||n.close()}onDestroy(){}};s(r,"connections",new WeakMap);let h=r;class u extends Error{constructor(t){super(t),Object.setPrototypeOf(this,u.prototype)}}exports.DevtoolsError=u;exports.DevtoolsObserver=h;
