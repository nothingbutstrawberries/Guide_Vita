import{_ as o,o as r,c as p,a as t}from"./app.91dd425b.js";const l={data:()=>({_japanese:!1}),computed:{japanese(){return this._japanese}},mounted(){this._japanese=localStorage.japanese==="true"},methods:{setJapanese(e){localStorage.japanese=!!e}}},c=t("option",{value:"int"},"International (\xD7 = Confirm)",-1),_=["selected"];function i(e,a,d,u,f,s){return r(),p("select",{onChange:a[0]||(a[0]=n=>this.setJapanese(n.target.value==="jp"))},[c,t("option",{value:"jp",selected:s.japanese},"Japanese (\u25CB = Confirm)",8,_)],32)}var m=o(l,[["render",i],["__file","BtnToggler.vue"]]);export{m as default};