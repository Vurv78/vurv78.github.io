import{S as H,i as L,s as U,e as h,c as b,a as w,d as s,b as E,f as _,F as I,G as k,B as q,P as M,t as W,k as N,j as D,g as z,n as x,m as G,o as y,x as C,u as A,v as P}from"../chunks/vendor-0bdb5042.js";import{N as J,T as K,F as Q}from"../chunks/TopTitle-8a6827fc.js";function X(o){let e,i,a,l,f;return{c(){e=h("div"),i=h("a"),a=h("img"),this.h()},l(r){e=b(r,"DIV",{class:!0});var n=w(e);i=b(n,"A",{href:!0});var v=w(i);a=b(v,"IMG",{src:!0,alt:!0}),v.forEach(s),n.forEach(s),this.h()},h(){a.src!==(l=o[1])&&E(a,"src",l),E(a,"alt",f=o[2].repo),E(i,"href",o[0]),E(e,"class","github-card svelte-1c95h8l")},m(r,n){_(r,e,n),I(e,i),I(i,a)},p(r,[n]){n&4&&f!==(f=r[2].repo)&&E(a,"alt",f)},i:k,o:k,d(r){r&&s(e)}}}const Y="https://github.com/",Z="https://github-readme-stats.vercel.app/api/pin";function tt(o,e,i){const a=Y+e.owner+"/"+e.repo,l=Z+"?username="+e.owner+"&repo="+e.repo;return o.$$set=f=>{i(2,e=q(q({},e),M(f)))},e=M(e),[a,l,e]}class F extends H{constructor(e){super();L(this,e,tt,X,U,{})}}function et(o){let e,i,a,l,f,r,n,v,$,m,c,O,p,j,g,R,d,V;return l=new J({}),n=new K({props:{title:"GitHub"}}),c=new F({props:{repo:"WebAudio",owner:"vurv78"}}),p=new F({props:{repo:"ExpressionScript",owner:"vurv78"}}),g=new F({props:{repo:"Autorun-rs",owner:"vurv78"}}),d=new Q({}),{c(){e=h("title"),i=W("Vurv78/github"),a=N(),D(l.$$.fragment),f=N(),r=h("div"),D(n.$$.fragment),v=N(),$=h("div"),m=h("center"),D(c.$$.fragment),O=N(),D(p.$$.fragment),j=N(),D(g.$$.fragment),R=N(),D(d.$$.fragment),this.h()},l(t){e=b(t,"TITLE",{});var u=w(e);i=z(u,"Vurv78/github"),u.forEach(s),a=x(t),G(l.$$.fragment,t),f=x(t),r=b(t,"DIV",{id:!0});var S=w(r);G(n.$$.fragment,S),S.forEach(s),v=x(t),$=b(t,"DIV",{id:!0});var B=w($);m=b(B,"CENTER",{});var T=w(m);G(c.$$.fragment,T),O=x(T),G(p.$$.fragment,T),j=x(T),G(g.$$.fragment,T),T.forEach(s),B.forEach(s),R=x(t),G(d.$$.fragment,t),this.h()},h(){E(r,"id","title"),E($,"id","body")},m(t,u){_(t,e,u),I(e,i),_(t,a,u),y(l,t,u),_(t,f,u),_(t,r,u),y(n,r,null),_(t,v,u),_(t,$,u),I($,m),y(c,m,null),I(m,O),y(p,m,null),I(m,j),y(g,m,null),_(t,R,u),y(d,t,u),V=!0},p:k,i(t){V||(C(l.$$.fragment,t),C(n.$$.fragment,t),C(c.$$.fragment,t),C(p.$$.fragment,t),C(g.$$.fragment,t),C(d.$$.fragment,t),V=!0)},o(t){A(l.$$.fragment,t),A(n.$$.fragment,t),A(c.$$.fragment,t),A(p.$$.fragment,t),A(g.$$.fragment,t),A(d.$$.fragment,t),V=!1},d(t){t&&s(e),t&&s(a),P(l,t),t&&s(f),t&&s(r),P(n),t&&s(v),t&&s($),P(c),P(p),P(g),t&&s(R),P(d,t)}}}class nt extends H{constructor(e){super();L(this,e,null,et,U,{})}}export{nt as default};
