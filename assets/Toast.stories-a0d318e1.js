var i=Object.defineProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});import{a as c,d as p}from"./index-6824e866.js";import{r as s}from"./index-43ec82a8.js";import{a as u,F as m,j as n}from"./jsx-runtime-1becbe17.js";import"./index-648f2948.js";import"./es.object.get-own-property-descriptor-037fa860.js";const y={title:"Data Display/Toast",component:d,args:{}},D={args:{title:"Scheduled: Catch Up",description:"Tuesday, February 7, 2023 at 6:34 PM",action:"Undo"}},w={args:{title:"Scheduled: Catch Up",action:"exit"}};function d(t){const[e,r]=s.useState(!1),o=s.useRef(0);return s.useEffect(()=>()=>clearTimeout(o.current),[]),u(m,{children:[n(c,{onClick:()=>{r(!1),window.clearTimeout(o.current),o.current=window.setTimeout(()=>{r(!0)},100)},children:"Agendar"}),n(p,{open:e,onOpenChange:r,...t})]})}a(d,"ToastDemo");const C=["Primary","NoDescription"];export{w as NoDescription,D as Primary,C as __namedExportsOrder,y as default};
//# sourceMappingURL=Toast.stories-a0d318e1.js.map