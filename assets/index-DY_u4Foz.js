import{_ as f,r as m,o as _,a as w,c as v,b as o,d as a,t as s,u as l,e as u,w as c,E as x,f as y}from"./index-yRIpJ-G7.js";const k={class:"content"},B={__name:"index",setup(I){let t=m({date:new Date,name:"小温即可",address:"你找不到我~",count:0,down:"暂停"}),n;function i(){t.count=0}function p(){t.down=="暂停"?(clearInterval(n),alert("停下来吧，我都受不了你了"),t.down="启动"):(t.down="暂停",alert("算了你还是跑吧，什么都不动，怪安静的"),r())}function r(){n=setInterval(()=>{t.date=new Date,t.count++,console.log(t.count),t.count==60&&alert("真好啊，你居然待了这么久，谢谢哦！我一定会努力把这个页面写完的。")},1e3)}return _(()=>{r()}),w(()=>{n&&clearInterval(n)}),(b,e)=>{const d=x;return y(),v("div",k,[e[1]||(e[1]=o(" 测试 ")),e[2]||(e[2]=a("div",null,[a("p",null,"既然还没有内容就给你随便写一点吧")],-1)),o(" "+s(l(t).date)+" ",1),a("p",null,s(l(t).count),1),u(d,{type:"primary",onClick:i},{default:c(()=>e[0]||(e[0]=[o("清空计数")])),_:1}),u(d,{type:"primary",onClick:p},{default:c(()=>[o(s(l(t).down),1)]),_:1})])}}},D=f(B,[["__scopeId","data-v-b14e7781"]]);export{D as default};