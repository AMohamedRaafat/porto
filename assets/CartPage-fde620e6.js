import{r as d,B as y,A as f,o,c as a,b as t,t as c,p as w,v as g,F as p,C as $,s as k,l as T,m as C,a as x,u as r}from"./index-dc777649.js";import{L as B}from"./LoaderVue-91f263f3.js";const M={class:"h-36 flex items-center"},P={class:"item-img p-4 mr-3 bg-slate-100 overflow-hidden"},S=["src"],j={class:"item-title"},A={class:"font-[400]"},E={class:""},I={class:"font-bold"},L={__name:"CartItem",props:{item:{type:Object}},setup(l){const n=l,s=d(),{singleProduct:i,getProduct:u}=y();f(async()=>{await u(n.item.id),s.value=i.value.thumbnail});const e=d(n.item.quantity),m=()=>{e.value++},b=()=>{e.value==1?e.value:e.value--};return console.log(n.item),(_,h)=>(o(),a(p,null,[t("td",M,[t("div",P,[t("img",{src:s.value,class:"w-24 h-24 overflow-hidden",alt:"Product Title"},null,8,S)]),t("div",j,[t("h3",A,c(l.item.title),1)])]),t("td",null,"$"+c(l.item.price),1),t("td",null,[t("div",E,[t("button",{onClick:b,class:"p-2 h-14 w-10 border font-bold"},"-"),w(t("input",{type:"text","onUpdate:modelValue":h[0]||(h[0]=v=>e.value=v),class:"w-14 h-14 p-2 font-bold border text-center"},null,512),[[g,e.value]]),t("button",{onClick:m,class:"p-2 h-14 w-10 border font-bold"},"+")])]),t("td",I,"$"+c(l.item.price*e.value),1)],64))}},Q={class:"container mx-auto m-10 px-6"},V={key:1,class:"flex flex-col-reverse md:flex-row flex-wrap"},z={class:"card-items w-[100%] md:w-[65%] overflow-x-auto md:overflow-hidden"},D={class:"items"},F={class:"font-poppins w-full text-left gap-2"},O=t("thead",null,[t("tr",{class:"border-b border-b-zinc-300 text-black"},[t("th",{class:"font-semibold py-5"},"ITEM"),t("th",{class:"font-semibold py-5"},"PRICE"),t("th",{class:"font-semibold py-5"},"QTY"),t("th",{class:"font-semibold py-5"},"SUBTOTAL")])],-1),R={class:"summary-cart mb-10 md:my-0 md:p-5 w-[100%] md:w-[35%]"},U={class:"border-2 mx-auto w-[90%] p-5 font-poppins text-black"},N=t("h3",{class:"font-bold text-[16px] py-3 border-b"},"SUMMARY",-1),Y=t("p",{class:"font-bold text-[14px] py-3 border-b"}," Estimate Shipping and Tax",-1),q={class:"text-[12px] py-3 border-b f"},G={class:"text-[12px] py-2 flex justify-between"},H=t("strong",null,"Subtotal:",-1),J={class:"text-[12px] flex justify-between"},K=t("strong",null,"Discount:",-1),W={class:"font-[500] text-[24px] py-3 mb-1 border-b flex justify-between"},X=t("strong",{class:""},"Order Total:",-1),Z={class:""},tt=t("button",{class:"w-full bg-zinc-900 text-white p-3 text-[18px]"},"Go To Checkout",-1),et={__name:"CartComp",setup(l){const n=$(),{cart:s}=k(n),i=d(null),u=document.cookie.slice(6),e=d();return f(()=>{e.value=!0,setTimeout(()=>{console.log(s.value),u&&(i.value=s.value.products,console.log(i.value)),e.value=!1},2e3)}),(m,b)=>(o(),a("div",Q,[e.value?(o(),T(B,{key:0})):(o(),a("div",V,[t("div",z,[t("div",D,[t("table",F,[O,t("tbody",null,[(o(!0),a(p,null,C(i.value,_=>(o(),a("tr",{key:_.id,class:"border-b border-b-zinc-300 text-black"},[x(L,{item:_},null,8,["item"])]))),128))])])])]),t("div",R,[t("div",U,[N,Y,t("p",q,[t("span",G,[H,t("strong",null,"$"+c(r(s).total),1)]),t("span",J,[K,t("strong",null,"-$"+c(r(s).total-r(s).discountedTotal),1)])]),t("p",W,[X,t("strong",Z,"$"+c(r(s).discountedTotal),1)]),tt])])]))]))}},st=t("h1",{class:"font-bold text-xl container mx-auto my-10 px-6 text-cyan-500 font-poppins"}," Shopping Cart ",-1),nt={__name:"CartPage",setup(l){return(n,s)=>(o(),a(p,null,[st,x(et)],64))}};export{nt as default};
