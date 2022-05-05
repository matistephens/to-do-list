(function(){"use strict";var t={2784:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var n=a(9567),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 mx-auto text-center"},[a("h4",{staticClass:"text-secondary mt-4"},[t._v("Todo List")]),a("form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.agregarNuevaTarea.apply(null,arguments)}}},[a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nuevaTarea,expression:"nuevaTarea"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingresa una nueva tarea",required:""},domProps:{value:t.nuevaTarea},on:{input:function(e){e.target.composing||(t.nuevaTarea=e.target.value)}}})]),t._m(0)])]),a("h4",{staticClass:"text-secondary mt-4"},[t._v("Lista tareas")]),a("ul",{staticClass:"list-group"},t._l(t.tareas,(function(e,n){return a("TareaLista",{key:n,attrs:{elementoListado:e,indexTarea:n},on:{tareaCompletada:function(e){return t.borrarTarea(e)}}})})),1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[t._v("Agregar")])])}],i=(a(561),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"task"},[t._v(" "+t._s(t.elementoListado)+" "),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:t.eliminarTarea}},[t._v("Completar")])])}),s=[],u=(a(9653),{name:"TareaLista",props:{elementoListado:String,indexTarea:Number},methods:{eliminarTarea:function(){this.$emit("tareaCompletada",this.indexTarea)}}}),c=u,l=a(1001),f=(0,l.Z)(c,i,s,!1,null,null,null),v=f.exports,p={name:"App",data:function(){return{nuevaTarea:"",tareas:[]}},components:{TareaLista:v},methods:{agregarNuevaTarea:function(){this.tareas.unshift(this.nuevaTarea),this.nuevaTarea=""},borrarTarea:function(t){this.tareas.splice(t,1)}}},d=p,m=(0,l.Z)(d,r,o,!1,null,null,null),h=m.exports;n.Z.config.productionTip=!1,new n.Z({render:function(t){return t(h)}}).$mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,o){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],o=t[l][2];for(var s=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,r,o]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,i=n[0],s=n[1],u=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(u)var l=u(a)}for(e&&e(n);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},n=self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2784)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.26ea5ceb.js.map