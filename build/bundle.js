(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var s=r.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();class t{constructor(e){this.width=e}toString(){console.log(`Area: ${this.area()} perimeter: ${this.perimeter()}`)}area(){return this.width*this.width}perimeter(){return 4*this.width}}const r=[e.p+"images/shuffle-01.jpg",e.p+"images/shuffle-02.jpg",e.p+"images/shuffle-03.jpg",e.p+"images/shuffle-04.jpg",e.p+"images/shuffle-05.jpg",e.p+"images/shuffle-06.jpg",e.p+"images/shuffle-07.jpg",e.p+"images/shuffle-08.jpg"];let s=document.createElement("h1");s.innerHTML="Please check console to see the result",document.body.appendChild(s);for(var i=0;i<8;i++){let e=document.createElement("div"),t=document.createElement("img");t.src=r[i],e.appendChild(t),document.body.appendChild(e)}console.log("===================== Shape Class ======================="),new class extends t{constructor(e,t){super(e),this.height=t}area(){return this.width*this.height}perimeter(){return 2*this.width+2*this.height}}(10,5).toString(),new class extends t{constructor(e){super(e)}}(10).toString(),new class extends t{constructor(e){super(e)}area(){return Math.PI*this.width*this.width}perimeter(){return 2*Math.PI*this.width}}(10).toString(),function(){console.log("===================== Iterator =======================");let e={id:1,name:"ahmed",country:"cairo",age:26};e[Symbol.iterator]=function(){var e=-1,t=Object.keys(this),r=this;return{next:()=>++e<t.length?{value:[r[t[e]],t[e]],done:!1}:{value:void 0,done:!0}}};for(const t of e)console.log(t)}(),function(){console.log("===================== Proxy =======================");let e=new Proxy({name:"ahmed Nabil",address:"Cairo,Egypt",age:26},{get(e,t){if(value="name"==t?e.name:"address"==t?e.address:"age"==t?e.age:"",""==value)throw t+" is not property";return value},set(e,t,r){if("name"==t&&"string"==typeof r&&r.length>=7)e[t]=r;else if("address"==t&&"string"==typeof r)e[t]=r;else{if(!("age"==t&&"number"==typeof r&&r>24&&r<70))throw"error ";e[t]=r}}});e.age=30,console.log(e.age),e.address="Alex",console.log(e.address)}()})();