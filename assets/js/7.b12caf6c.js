(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{449:function(n,t,o){},485:function(n,t,o){"use strict";var e=o(449);o.n(e).a},500:function(n,t,o){"use strict";o.r(t);var e={data:function(){return{positionX:0,positionY:0}},methods:{move:function(n){var t=this,o=n.target,e=n.clientX-o.offsetLeft,i=n.clientY-o.offsetTop;document.onmousemove=function(n){var u=n.clientX-e,s=n.clientY-i;u<0&&(u=0),s<0&&(s=0),s>window.innerHeight-200&&(s=window.innerHeight-200),u>window.innerWidth-200&&(u=window.innerWidth-200),t.positionX=s,t.positionY=u,o.style.left=u+"px",o.style.top=s+"px"},document.onmouseup=function(n){document.onmousemove=null,document.onmouseup=null}}}},i=(o(485),o(58)),u=Object(i.a)(e,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("div",{attrs:{id:"ball"},on:{mousedown:this.move}})])}),[],!1,null,null,null);t.default=u.exports}}]);