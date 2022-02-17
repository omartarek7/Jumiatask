(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t),n.d(t,"customersService",(function(){return J}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("d3b7"),n("bc3a")),o=n.n(r);o.a.defaults.baseURL="http://localhost:8080";var i={},s=o.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["a"].use(Plugin);Plugin;var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("data-widget")],1)],1)},u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.customers,options:e.tableOptions,"footer-props":{itemsPerPageOptions:[5,10,15]},"server-items-length":e.totalCustomers,loading:e.loading},on:{"update:options":function(t){e.tableOptions=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Customers")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-banner",[n("v-row",{staticClass:"justify-end"},[n("v-col",{attrs:{cols:"6"}},[n("v-select",{attrs:{items:e.countries,placeholder:"Select by country","hide-details":"",outlined:"",dense:"",filled:"",clearable:""},on:{change:e.onCountryChange}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-select",{attrs:{items:e.getValidityOptions(),placeholder:"Select by validity","hide-details":"",outlined:"",filled:"",dense:"",clearable:""},on:{change:e.onValidityChange}})],1)],1)],1)],1)]},proxy:!0},{key:"item.valid",fn:function(t){var a=t.item;return[n("v-avatar",{attrs:{color:e.getColor(a.valid),size:"20"}})]}}])})],1)},d=[],p=n("d4ec"),f=n("bee2"),v=n("262e"),b=n("2caf"),h=n("9ab4"),y=n("1b40"),g=function(e){Object(v["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.headers=[],e.countries=[],e.customers=[],e.tableOptions={page:1,itemsPerPage:10,country:null,valid:null,sortBy:[""],sortDesc:[!1]},e.totalCustomers=0,e.loading=!1,e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.createGridHeaders(),this.loadCountries()}},{key:"onOptionsChanged",value:function(e,t){this.loadTableData()}},{key:"createGridHeaders",value:function(){this.headers=[{text:"Name",value:"name"},{text:"Phone",value:"phone"},{text:"Country",value:"countryName",sortable:!1},{text:"Status",value:"valid",sortable:!1}]}},{key:"getValidityOptions",value:function(){return[{text:"Valid",value:!0},{text:"Invalid",value:!1}]}},{key:"getColor",value:function(e){return e?"green":"red"}},{key:"onValidityChange",value:function(e){this.tableOptions.page=1,this.tableOptions.valid=e}},{key:"onCountryChange",value:function(e){this.resetSortAndPagination(),this.tableOptions.country=e}},{key:"resetSortAndPagination",value:function(){this.tableOptions.page=1,this.tableOptions.sortBy=[""],this.tableOptions.sortDesc=[!1]}},{key:"loadCountries",value:function(){var e=this;J.getCountries().then((function(t){return e.countries=t.data}))}},{key:"loadTableData",value:function(){var e=this;this.loading=!0,J.getCustomers(this.tableOptions).then((function(t){e.customers=t.data.content,e.totalCustomers=t.data.totalElements,e.loading=!1}))}}]),n}(y["b"]);Object(h["a"])([Object(y["c"])("tableOptions",{deep:!0})],g.prototype,"onOptionsChanged",null),g=Object(h["a"])([y["a"]],g);var m=g,O=m,C=n("2877"),j=n("6544"),P=n.n(j),x=n("8212"),w=n("e4e5"),S=n("62ad"),V=n("8fea"),k=n("ce7e"),_=n("0fd9"),E=n("b974"),D=n("2fa4"),R=n("71d9"),T=n("2a7f"),A=Object(C["a"])(O,c,d,!1,null,null,null),B=A.exports;P()(A,{VAvatar:x["a"],VBanner:w["a"],VCol:S["a"],VDataTable:V["a"],VDivider:k["a"],VRow:_["a"],VSelect:E["a"],VSpacer:D["a"],VToolbar:R["a"],VToolbarTitle:T["a"]});var L={name:"app",components:{"data-widget":B}},U=L,I=n("7496"),M=Object(C["a"])(U,l,u,!1,null,null,null),$=M.exports;P()(M,{VApp:I["a"]});var z=n("f309");a["a"].use(z["a"]);var G=new z["a"]({}),H=function(){function e(){Object(p["a"])(this,e),this.SERVICE_URL=o.a.defaults.baseURL+"/customers"}return Object(f["a"])(e,[{key:"getCustomers",value:function(e){var t={page:e.page-1,size:e.itemsPerPage,country:e.country,valid:e.valid,sortBy:e.sortBy[0],sortDirection:e.sortDesc[0]?"DESC":"ASC"};return o.a.get(this.SERVICE_URL,{params:t})}},{key:"getCountries",value:function(){return o.a.get(this.SERVICE_URL+"/countries")}}]),e}();a["a"].config.productionTip=!1;var J=new H;new a["a"]({vuetify:G,render:function(e){return e($)}}).$mount("#app")}});
//# sourceMappingURL=app.842dc1d3.js.map