import{a as v,u as y,r as m,j as e}from"./index-BufVpsTJ.js";import{a as S,c as k,d as D}from"./firebaseConfig-Ca-Mqsij.js";const L="/frontweb/assets/ques4-Bf5LGX3d.jpg";function T(){const r=v(),x=y(),{roll:n,team:l,name:o,date:u}=r.state||{};let{score:t}=r.state;const[c,i]=m.useState(""),[f,p]=m.useState(!1),h=async()=>{if(c.trim().toUpperCase()===void 0){const s=new Date;let a=s.getHours();const g=s.getMinutes().toString().padStart(2,"0"),j=s.getSeconds().toString().padStart(2,"0"),b=a>=12?"PM":"AM";a=a%12||12;const d=`${a}:${g}:${j} ${b}`;t=40,alert("Correct Answer!");const N={roll:n,team:l,name:o,score:t,date:d};try{await S(k(D,"teamDetails"),N),console.log("Data saved successfully"),x("/page5",{state:{roll:n,team:l,name:o,score:t,date:d}})}catch(w){console.error("Error saving data:",w)}}else p(!0),i("")};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-black",children:[e.jsxs("div",{className:"w-full max-w-5xl p-6 font-mono rounded-lg shadow-md mb-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-center text-slate-50 mb-4 border-red-100 border-2 rounded-lg",children:"Team Details"}),e.jsx("div",{className:"flex items-center justify-center pt-[20px]",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-8 text-center font-stretch-75%",children:[e.jsxs("p",{className:"text-slate-50 font-medium",children:["Team Name : ",e.jsx("span",{className:"font-semibold",children:l})]}),e.jsxs("p",{className:"text-slate-50 font-medium",children:["Team Leader Name : ",e.jsx("span",{className:"font-semibold",children:o})]}),e.jsxs("p",{className:"text-slate-50 font-medium",children:["Team Leader Roll No :"," ",e.jsx("span",{className:"font-semibold",children:n})]})]})}),e.jsx("div",{className:"flex items-center justify-center pt-[20px]",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-8 text-center",children:[e.jsxs("p",{className:"text-slate-50 font-medium",children:["Question No. : ",e.jsx("span",{className:"font-semibold",children:4})]}),e.jsxs("p",{className:"text-slate-50 font-medium",children:["Score : ",e.jsx("span",{className:"font-semibold",children:t})]}),e.jsxs("p",{className:"text-slate-50 font-medium",children:["Last Submission : ",e.jsx("span",{className:"font-semibold",children:u})]})]})})]}),e.jsxs("div",{className:"w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between bg-black p-6 rounded-lg shadow-md",children:[e.jsx("div",{className:"flex-shrink-0 mb-4 sm:mb-0 sm:mr-6",children:e.jsx("img",{src:L,alt:"image1",className:"w-[500px] h-[450px] rounded-md shadow object-contain"})}),e.jsx("div",{className:"flex-grow",children:e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx("input",{type:"text",value:c,onChange:s=>i(s.target.value),className:"w-full px-4 py-2 border text-white font-mono border-violet-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",placeholder:f?"Wrong answer":"Enter your answer"}),e.jsx("button",{onClick:h,className:"w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 via-pink-500 to-violet-500 rounded-md hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300",children:"Submit"})]})})]})]})})}export{T as default};
