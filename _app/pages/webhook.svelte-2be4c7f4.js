import{S as se,i as ae,s as oe,H as ee,Q as ue,R as ce,T as ie,j as R,k as p,e as f,t as P,m as L,n as $,c as d,a as N,g as B,d as c,b as t,O as me,o as C,f as j,F as n,U as pe,G as fe,x as I,u as S,v as U}from"../chunks/vendor-0bdb5042.js";import{N as $e,T as de,F as ve}from"../chunks/TopTitle-8a6827fc.js";function he(q){let s,y,v,h,a,r,_,x,A,H,o,W,g,k,F,X,i,G,b,E,J,M,m,Q,T,V,D,w,O,z,ne;return s=new $e({}),v=new de({props:{title:"Discord Webhook Sender"}}),x=new ee({props:{icon:ue}}),k=new ee({props:{icon:ce}}),E=new ee({props:{icon:ie}}),w=new ve({}),{c(){R(s.$$.fragment),y=p(),R(v.$$.fragment),h=p(),a=f("div"),r=f("center"),_=f("label"),R(x.$$.fragment),A=P(" Webhook URL"),H=p(),o=f("input"),W=p(),g=f("label"),R(k.$$.fragment),F=P(" Name"),X=p(),i=f("input"),G=p(),b=f("label"),R(E.$$.fragment),J=P(" Content"),M=p(),m=f("input"),Q=p(),T=f("button"),V=P("Send"),D=p(),R(w.$$.fragment),this.h()},l(e){L(s.$$.fragment,e),y=$(e),L(v.$$.fragment,e),h=$(e),a=d(e,"DIV",{style:!0});var u=N(a);r=d(u,"CENTER",{});var l=N(r);_=d(l,"LABEL",{for:!0,class:!0});var K=N(_);L(x.$$.fragment,K),A=B(K," Webhook URL"),K.forEach(c),H=$(l),o=d(l,"INPUT",{id:!0,type:!0,required:!0,maxlength:!0,placeholder:!0,pattern:!0,class:!0}),W=$(l),g=d(l,"LABEL",{for:!0,class:!0});var Y=N(g);L(k.$$.fragment,Y),F=B(Y," Name"),Y.forEach(c),X=$(l),i=d(l,"INPUT",{id:!0,type:!0,maxlength:!0,spellcheck:!0,placeholder:!0,class:!0}),G=$(l),b=d(l,"LABEL",{for:!0,class:!0});var Z=N(b);L(E.$$.fragment,Z),J=B(Z," Content"),Z.forEach(c),M=$(l),m=d(l,"INPUT",{id:!0,type:!0,maxlength:!0,spellcheck:!0,placeholder:!0,class:!0}),Q=$(l),T=d(l,"BUTTON",{class:!0});var re=N(T);V=B(re,"Send"),re.forEach(c),l.forEach(c),u.forEach(c),D=$(e),L(w.$$.fragment,e),this.h()},h(){t(_,"for","url"),t(_,"class","svelte-4xlt1v"),t(o,"id","url"),t(o,"type","url"),o.required=!0,t(o,"maxlength","400"),t(o,"placeholder","https://discord.com/api/webhooks"),t(o,"pattern",le),t(o,"class","svelte-4xlt1v"),t(g,"for","name"),t(g,"class","svelte-4xlt1v"),t(i,"id","name"),t(i,"type","text"),t(i,"maxlength","32"),t(i,"spellcheck","true"),t(i,"placeholder","Chad"),t(i,"class","svelte-4xlt1v"),t(b,"for","content"),t(b,"class","svelte-4xlt1v"),t(m,"id","content"),t(m,"type","text"),t(m,"maxlength","2000"),t(m,"spellcheck","true"),t(m,"placeholder","Hello world!"),t(m,"class","svelte-4xlt1v"),t(T,"class","svelte-4xlt1v"),me(a,"margin-top","50px")},m(e,u){C(s,e,u),j(e,y,u),C(v,e,u),j(e,h,u),j(e,a,u),n(a,r),n(r,_),C(x,_,null),n(_,A),n(r,H),n(r,o),n(r,W),n(r,g),C(k,g,null),n(g,F),n(r,X),n(r,i),n(r,G),n(r,b),C(E,b,null),n(b,J),n(r,M),n(r,m),n(r,Q),n(r,T),n(T,V),j(e,D,u),C(w,e,u),O=!0,z||(ne=pe(T,"click",q[0]),z=!0)},p:fe,i(e){O||(I(s.$$.fragment,e),I(v.$$.fragment,e),I(x.$$.fragment,e),I(k.$$.fragment,e),I(E.$$.fragment,e),I(w.$$.fragment,e),O=!0)},o(e){S(s.$$.fragment,e),S(v.$$.fragment,e),S(x.$$.fragment,e),S(k.$$.fragment,e),S(E.$$.fragment,e),S(w.$$.fragment,e),O=!1},d(e){U(s,e),e&&c(y),U(v,e),e&&c(h),e&&c(a),U(x),U(k),U(E),e&&c(D),U(w,e),z=!1,ne()}}}const le="https://discord.com/api/webhooks/\\d+/\\w+";function te(q){return document.getElementById(q)}function _e(q){const s=new RegExp(le);function y(v){const h=te("url").value;if(!h||!s.test(h))return;const a=new XMLHttpRequest;a.open("POST",h),a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify({content:te("content").value,username:te("name").value,avatar_url:""}))}return[y]}class xe extends se{constructor(s){super();ae(this,s,_e,he,oe,{})}}export{xe as default};
