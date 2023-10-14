import{n as R,i as C,r as n,k as U,s as V,o as x,c as g,b as s,x as S,p as u,v as p,u as t,q as f,t as h,g as q,l as N,e as w}from"./index-d2a3ee58.js";import{L}from"./LoaderVue-5371788a.js";const M=R(),k=C("useRegister",()=>{const i=n(!1);return{loading:i,userRegister:async a=>{i.value=!0;const l=await U.post("/users/add",a);console.log(l),M.success("Customer added successfully"),i.value=!1}}}),{userRegister:T}=k(),A=k(),{loading:B}=V(A),E=()=>{var i=/^[a-z0-9][a-z0-9_-]{2,18}[a-z0-9]$/i;const r=n(""),a=n(""),l=n(""),d=n(""),m=n(""),c=n(""),_=n("");return{firstName:r,lastName:a,email:l,password:d,confirmPassword:m,errorMessagePassword:c,passwordStrength:_,checkPassword:()=>i.test(d)?(c.value="",_.value="Strong",!0):(console.log(!1),c.value="Password must contain at least one number and one special character",!1),loading:B,addUser:()=>{T({firstName:r.value,lastName:a.value,email:l.value,password:d.value})},LoaderVue:L}},z={class:"text-black font-poppins"},j=s("div",{class:"dir flex items-center justify-center h-32 bg-slate-100 font-semibold p-10"},[s("h1",{class:"text-3xl"},"Create New Customer Account")],-1),D={class:"my-10 container mx-auto"},I={class:"w-full md:w-1/2 flex flex-col text-left mb-5 px-5"},$=s("div",{class:"title"},[s("h2",{class:"text-2xl font-semibold"},"Personal Information")],-1),F={class:"form-input my-5"},O=s("label",{class:"block text-sm text-gray-500 mb-2",for:"firstName"},[w("First Name "),s("span",{class:"text-red-600"},"*")],-1),G={class:"form-input my-5"},H=s("label",{class:"block text-sm text-gray-500 mb-2",for:"lastName"},[w("Last Name "),s("span",{class:"text-red-600"},"*")],-1),J={class:"w-full md:w-1/2 flex flex-col mb-5 px-5"},K=s("div",{class:"title"},[s("h2",{class:"text-2xl font-semibold"},"Sign-in Information")],-1),Q={class:"form-input my-5"},W=s("label",{class:"block text-sm text-gray-500 mb-2",for:"email"},[w("Email "),s("span",{class:"text-red-600"},"*")],-1),X={class:"form-input my-5"},Y=s("label",{class:"block text-sm text-gray-500 mb-2",for:"password"},[w("Password "),s("span",{class:"text-red-600"},"*")],-1),Z={key:0,class:"bg-white text-red-600"},ss={class:"bg-white text-gray-600"},es={class:"form-input my-5"},ts=s("label",{class:"block text-sm text-gray-500 mb-2",for:"confirmPassword"},[w("Confirm Password "),s("span",{class:"text-red-600"},"*")],-1),os={class:"w-full md:w-[100%] form-input mb-5 px-5"},as=s("p",{class:"bg-white text-red-600 mb-2"},"* Means Required",-1),rs={key:0},ls={__name:"CreateAccount",setup(i){const{firstName:r,lastName:a,email:l,password:d,confirmPassword:m,errorMessagePassword:c,passwordStrength:_,checkPassword:b,loading:y,addUser:v,LoaderVue:P}=E();return(ns,e)=>(x(),g("section",z,[j,s("div",D,[s("form",{class:"flex flex-row w-full md:w-[80%] justify-center p-5 mx-auto flex-wrap",onSubmit:e[7]||(e[7]=S(()=>{},["prevent"]))},[s("div",I,[$,s("div",F,[O,u(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>f(r)?r.value=o:null),name:"firstName",id:"firstName",class:"border border-gray-300 px-5 py-4 w-full text-sm",required:""},null,512),[[p,t(r)]])]),s("div",G,[H,u(s("input",{type:"text",name:"lastName",id:"lastName",class:"border border-gray-300 px-5 py-4 w-full text-sm",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>f(a)?a.value=o:null)},null,512),[[p,t(a)]])])]),s("div",J,[K,s("div",Q,[W,u(s("input",{type:"email",name:"email",placeholder:"name@domain.com",id:"email",class:"border border-gray-300 px-5 py-4 w-full text-sm",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>f(l)?l.value=o:null)},null,512),[[p,t(l)]])]),s("div",X,[Y,u(s("input",{type:"password",name:"password",id:"password",onBlur:e[3]||(e[3]=(...o)=>t(b)&&t(b)(...o)),class:"border border-gray-300 px-5 py-4 w-full text-sm",required:"","onUpdate:modelValue":e[4]||(e[4]=o=>f(d)?d.value=o:null)},null,544),[[p,t(d)]]),t(c)?(x(),g("p",Z,"* "+h(t(c)),1)):q("",!0),s("p",ss,"Password Strength: "+h(t(_)),1)]),s("div",es,[ts,u(s("input",{type:"password",name:"confirmPassword",id:"confirmPassword",required:"",class:"border border-gray-300 px-5 py-4 w-full text-sm","onUpdate:modelValue":e[5]||(e[5]=o=>f(m)?m.value=o:null)},null,512),[[p,t(m)]])])]),s("div",os,[as,s("button",{onClick:e[6]||(e[6]=(...o)=>t(v)&&t(v)(...o)),class:"w-[100%] md:w-[48%] p-5 text-lg bg-zinc-900 text-white font-poppins tracking-wide"},[t(y)?(x(),N(t(P),{key:1})):(x(),g("span",rs,"CREATE AN ACCOUNT"))])])],32)])]))}},cs={__name:"RegisterPage",setup(i){return(r,a)=>(x(),N(ls))}};export{cs as default};