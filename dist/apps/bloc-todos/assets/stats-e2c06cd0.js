var pe=Object.defineProperty;var fe=(e,n,s)=>n in e?pe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;var V=(e,n,s)=>(fe(e,typeof n!="symbol"?n+"":n,s),s);import{_ as h,c as me,a as ge,r as u,b as be,e as xe,d as ye,j as o,f as he,g as Se,h as $e,s as Ge,i as je,A as ve,T as _e,k as Oe}from"./index-044ffb22.js";import{s as Ce,i as Ee,u as we,S as Te,B as Pe,a as ke,b as Ne,T as Re,L as qe}from"./state-91adaa55.js";import{L as W,a as E,b as U}from"./ListItemText-80af1049.js";import{I as F}from"./Icon-cbe39298.js";const Be=(e,n)=>e.filter(s=>n.includes(s)),g=(e,n,s)=>{const t=e.keys[0];Array.isArray(n)?n.forEach((i,r)=>{s((c,p)=>{r<=e.keys.length-1&&(r===0?Object.assign(c,p):c[e.up(e.keys[r])]=p)},i)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:Be(e.keys,Object.keys(n))).forEach(r=>{if(e.keys.indexOf(r)!==-1){const c=n[r];c!==void 0&&s((p,b)=>{t===r?Object.assign(p,b):p[e.up(r)]=b},c)}}):(typeof n=="number"||typeof n=="string")&&s((i,r)=>{Object.assign(i,r)},n)};function d(e){return e?`Level${e}`:""}function S(e){return e.unstable_level>0&&e.container}function H(e){return function(s){return`var(--Grid-${s}Spacing${d(e.unstable_level)})`}}function R(e){return function(s){return e.unstable_level===0?`var(--Grid-${s}Spacing)`:`var(--Grid-${s}Spacing${d(e.unstable_level-1)})`}}function q(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${d(e.unstable_level-1)})`}const Le=({theme:e,ownerState:n})=>{const s=H(n),t={};return g(e.breakpoints,n.gridSize,(i,r)=>{let c={};r===!0&&(c={flexBasis:0,flexGrow:1,maxWidth:"100%"}),r==="auto"&&(c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof r=="number"&&(c={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${r} / ${q(n)}${S(n)?` + ${s("column")}`:""})`}),i(t,c)}),t},Ae=({theme:e,ownerState:n})=>{const s={};return g(e.breakpoints,n.gridOffset,(t,i)=>{let r={};i==="auto"&&(r={marginLeft:"auto"}),typeof i=="number"&&(r={marginLeft:i===0?"0px":`calc(100% * ${i} / ${q(n)})`}),t(s,r)}),s},De=({theme:e,ownerState:n})=>{if(!n.container)return{};const s=S(n)?{[`--Grid-columns${d(n.unstable_level)}`]:q(n)}:{"--Grid-columns":12};return g(e.breakpoints,n.columns,(t,i)=>{t(s,{[`--Grid-columns${d(n.unstable_level)}`]:i})}),s},Ie=({theme:e,ownerState:n})=>{if(!n.container)return{};const s=R(n),t=S(n)?{[`--Grid-rowSpacing${d(n.unstable_level)}`]:s("row")}:{};return g(e.breakpoints,n.rowSpacing,(i,r)=>{var c;i(t,{[`--Grid-rowSpacing${d(n.unstable_level)}`]:typeof r=="string"?r:(c=e.spacing)==null?void 0:c.call(e,r)})}),t},Me=({theme:e,ownerState:n})=>{if(!n.container)return{};const s=R(n),t=S(n)?{[`--Grid-columnSpacing${d(n.unstable_level)}`]:s("column")}:{};return g(e.breakpoints,n.columnSpacing,(i,r)=>{var c;i(t,{[`--Grid-columnSpacing${d(n.unstable_level)}`]:typeof r=="string"?r:(c=e.spacing)==null?void 0:c.call(e,r)})}),t},ze=({theme:e,ownerState:n})=>{if(!n.container)return{};const s={};return g(e.breakpoints,n.direction,(t,i)=>{t(s,{flexDirection:i})}),s},Ve=({ownerState:e})=>{const n=H(e),s=R(e);return h({minWidth:0,boxSizing:"border-box"},e.container&&h({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||S(e))&&h({padding:`calc(${s("row")} / 2) calc(${s("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${s("row")} 0px 0px ${s("column")}`}))},We=e=>{const n=[];return Object.entries(e).forEach(([s,t])=>{t!==!1&&t!==void 0&&n.push(`grid-${s}-${String(t)}`)}),n},Ue=(e,n="xs")=>{function s(t){return t===void 0?!1:typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number"&&t>0}if(s(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach(([i,r])=>{s(r)&&t.push(`spacing-${i}-${String(r)}`)}),t}return[]},Fe=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,s])=>`direction-${n}-${s}`):[`direction-xs-${String(e)}`],Ke=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],He=me(),Je=Ce("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Qe(e){return ge({props:e,name:"MuiGrid",defaultTheme:He})}function Xe(e={}){const{createStyledComponent:n=Je,useThemeProps:s=Qe,componentName:t="MuiGrid"}=e,i=u.createContext(void 0),r=(b,l)=>{const{container:$,direction:G,spacing:j,wrap:x,gridSize:v}=b,_={root:["root",$&&"container",x!=="wrap"&&`wrap-xs-${String(x)}`,...Fe(G),...We(v),...$?Ue(j,l.breakpoints.keys[0]):[]]};return Se(_,O=>$e(t,O),{})},c=n(De,Me,Ie,Le,ze,Ve,Ae),p=u.forwardRef(function(l,$){var G,j,x,v,_,O,B,L;const w=be(),Q=s(l),T=xe(Q),C=u.useContext(i),{className:X,children:Y,columns:Z=12,container:ee=!1,component:ne="div",direction:se="row",wrap:te="wrap",spacing:P=0,rowSpacing:re=P,columnSpacing:ie=P,disableEqualOverflow:A,unstable_level:f=0}=T,oe=ye(T,Ke);let y=A;f&&A!==void 0&&(y=l.disableEqualOverflow);const D={},I={},M={};Object.entries(oe).forEach(([a,m])=>{w.breakpoints.values[a]!==void 0?D[a]=m:w.breakpoints.values[a.replace("Offset","")]!==void 0?I[a.replace("Offset","")]=m:M[a]=m});const ce=(G=l.columns)!=null?G:f?void 0:Z,ae=(j=l.spacing)!=null?j:f?void 0:P,le=(x=(v=l.rowSpacing)!=null?v:l.spacing)!=null?x:f?void 0:re,ue=(_=(O=l.columnSpacing)!=null?O:l.spacing)!=null?_:f?void 0:ie,z=h({},T,{level:f,columns:ce,container:ee,direction:se,wrap:te,spacing:ae,rowSpacing:le,columnSpacing:ue,gridSize:D,gridOffset:I,disableEqualOverflow:(B=(L=y)!=null?L:C)!=null?B:!1,parentDisableEqualOverflow:C}),de=r(z,w);let k=o.jsx(c,h({ref:$,as:ne,ownerState:z,className:he(de.root,X)},M,{children:u.Children.map(Y,a=>{if(u.isValidElement(a)&&Ee(a,["Grid"])){var m;return u.cloneElement(a,{unstable_level:(m=a.props.unstable_level)!=null?m:f+1})}return a})}));return y!==void 0&&y!==(C??!1)&&(k=o.jsx(i.Provider,{value:y,children:k})),k});return p.muiName="Grid",p}const Ye=Xe({createStyledComponent:Ge("div",{name:"MuiGrid2",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>je({props:e,name:"MuiGrid2"})}),K=Ye,Ze=e=>{const n=we(e),s=u.useCallback(i=>{const r=n.state$.subscribe(i);return()=>r.unsubscribe()},[n]),t=u.useSyncExternalStore(s,()=>n.state,()=>n.state);return u.useDebugValue(t),t};class en{constructor(){V(this,"_")}}class J extends en{}class nn extends Te{constructor(){super({activeTodos:0,completedTodos:0})}}class N extends Pe{constructor(n){super(new nn),this.todosRepository=n,this.on(J,this.onSubscriptionRequested)}async onSubscriptionRequested(n,s){s(this.state.loading()),await s.forEach(this.todosRepository.getTodos(),t=>this.state.ready({completedTodos:t.filter(i=>i.isCompleted).length,activeTodos:t.filter(i=>!i.isCompleted).length}))}}function ln(){const e=ke(Oe);return o.jsx(Ne,{bloc:N,create:()=>new N(e),onMount:n=>n.add(new J),dependencies:[e],children:o.jsx(sn,{})})}function sn(){const e=Ze(N),{activeTodos:n,completedTodos:s}=e.data;return o.jsxs(o.Fragment,{children:[o.jsx(ve,{position:"fixed",children:o.jsx(_e,{children:o.jsx(Re,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Stats"})})}),o.jsx(K,{container:!0,direction:"column",sx:{height:"100%"},justifyContent:"center",children:o.jsx(K,{children:o.jsxs(qe,{children:[o.jsxs(W,{secondaryAction:o.jsx(E,{primary:s}),children:[o.jsx(U,{children:o.jsx(F,{children:"check"})}),o.jsx(E,{primary:"Completed todos"})]}),o.jsxs(W,{secondaryAction:o.jsx(E,{primary:n}),children:[o.jsx(U,{children:o.jsx(F,{children:"radio_button_unchecked"})}),o.jsx(E,{primary:"Active todos"})]})]})})})]})}export{sn as StatsView,ln as default};
