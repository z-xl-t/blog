import{_ as y}from"./Layout.vue_vue_type_script_setup_true_lang-DXccPNmH.js";import{a as B,o as d,_ as C}from"./index-6ID0DKCo.js";import{d as x,y as A,L as I,a as w,o as s,e as i,f as e,c as p,i as f,F as E,j as N,l as t,t as q,_ as L,h as V,w as $,m as v}from"./app-isxMD8Oa.js";import{u as D}from"./helper-C6o3PCFI.js";const Q={class:"friends"},b={key:1,class:"friend-list"},j={class:"site-img"},M=["src"],R={class:"site-info"},S={class:"avatar"},T=["src"],U={class:"name"},z=["href"],G=x({__name:"AuroraFriends",setup(g){const n=A(),c=n.value.defaultFriendAvatarImage||"",l=n.value.defaultFriendBgImage||"",o=I(),u=typeof o.value.links=="string"?D(o.value.links):o.value.links,h=w().name,m=B(n.value.menu,h);return(K,a)=>{const k=C;return s(),i("div",Q,[e(m)?(s(),p(k,{key:0,quote:e(m)},null,8,["quote"])):f("v-if",!0),e(u)?(s(),i("ul",b,[(s(!0),i(E,null,N(e(u),(r,F)=>(s(),i("li",{key:F,class:"friend"},[t("div",j,[t("img",{src:r.siteImg,alt:"siteImg",onError:a[0]||(a[0]=_=>e(d)(_,e(l)))},null,40,M)]),t("div",R,[t("div",S,[t("img",{src:r.avatar,alt:"avatar",onError:a[1]||(a[1]=_=>e(d)(_,e(c)))},null,40,T)]),t("div",U,q(r.name),1)]),t("a",{href:r.siteUrl,target:"_blank",class:"site-link"},null,8,z)]))),128))])):f("v-if",!0)])}}}),H={};function J(g,n){const c=G,l=V("router-view"),o=y;return s(),p(o,null,{"main-content":$(()=>[v(c),v(l)]),_:1})}const Y=L(H,[["render",J]]);export{Y as default};
