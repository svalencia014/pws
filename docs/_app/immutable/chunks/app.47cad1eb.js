import{s as Wn,n as Ht,f as ye,h as vn,i as bn,o as ke}from"./scheduler.dc868896.js";import{S as Bn,i as Xn,H as xe,e as gn,D as we,a as R,f as L,g as B,s as Q,r as Ae,h as X,z as J,c as Z,j as Ce,u as Se,k as M,v as Ee,E as Oe,d as Pe,t as Ie,w as Ne}from"./index.838391b0.js";function pn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?pn(Object(e),!0).forEach(function(a){N(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):pn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Tt(t)}function Te(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function hn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _e(t,n,e){return n&&hn(t.prototype,n),e&&hn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function N(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function tn(t,n){return Le(t)||ze(t,n)||Gn(t,n)||De()}function gt(t){return Me(t)||Re(t)||Gn(t)||Fe()}function Me(t){if(Array.isArray(t))return Wt(t)}function Le(t){if(Array.isArray(t))return t}function Re(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ze(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function Gn(t,n){if(t){if(typeof t=="string")return Wt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Wt(t,n)}}function Wt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yn=function(){},nn={},Vn={},qn=null,Kn={mark:yn,measure:yn};try{typeof window<"u"&&(nn=window),typeof document<"u"&&(Vn=document),typeof MutationObserver<"u"&&(qn=MutationObserver),typeof performance<"u"&&(Kn=performance)}catch{}var je=nn.navigator||{},kn=je.userAgent,xn=kn===void 0?"":kn,V=nn,w=Vn,wn=qn,kt=Kn;V.document;var W=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Qn=~xn.indexOf("MSIE")||~xn.indexOf("Trident/"),xt,wt,At,Ct,St,Y="___FONT_AWESOME___",Bt=16,Jn="fa",Zn="svg-inline--fa",nt="data-fa-i2svg",Xt="data-fa-pseudo-element",Ye="data-fa-pseudo-element-pending",en="data-prefix",an="data-icon",An="fontawesome-i2svg",Ue="async",He=["HTML","HEAD","STYLE","SCRIPT"],$n=function(){try{return!0}catch{return!1}}(),x="classic",E="sharp",rn=[x,E];function pt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[x]}})}var ut=pt((xt={},N(xt,x,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),N(xt,E,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xt)),mt=pt((wt={},N(wt,x,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(wt,E,{solid:"fass",regular:"fasr",light:"fasl"}),wt)),dt=pt((At={},N(At,x,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(At,E,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),At)),We=pt((Ct={},N(Ct,x,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(Ct,E,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ct)),Be=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,te="fa-layers-text",Xe=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ge=pt((St={},N(St,x,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(St,E,{900:"fass",400:"fasr",300:"fasl"}),St)),ne=[1,2,3,4,5,6,7,8,9,10],Ve=ne.concat([11,12,13,14,15,16,17,18,19,20]),qe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vt=new Set;Object.keys(mt[x]).map(vt.add.bind(vt));Object.keys(mt[E]).map(vt.add.bind(vt));var Ke=[].concat(rn,gt(vt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$.GROUP,$.SWAP_OPACITY,$.PRIMARY,$.SECONDARY]).concat(ne.map(function(t){return"".concat(t,"x")})).concat(Ve.map(function(t){return"w-".concat(t)})),lt=V.FontAwesomeConfig||{};function Qe(t){var n=w.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Je(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(w&&typeof w.querySelector=="function"){var Ze=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ze.forEach(function(t){var n=tn(t,2),e=n[0],a=n[1],r=Je(Qe(e));r!=null&&(lt[a]=r)})}var ee={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jn,replacementClass:Zn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lt.familyPrefix&&(lt.cssPrefix=lt.familyPrefix);var ot=u(u({},ee),lt);ot.autoReplaceSvg||(ot.observeMutations=!1);var v={};Object.keys(ee).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(e){ot[t]=e,ct.forEach(function(a){return a(v)})},get:function(){return ot[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(n){ot.cssPrefix=n,ct.forEach(function(e){return e(v)})},get:function(){return ot.cssPrefix}});V.FontAwesomeConfig=v;var ct=[];function $e(t){return ct.push(t),function(){ct.splice(ct.indexOf(t),1)}}var G=Bt,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ta(t){if(!(!t||!W)){var n=w.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=w.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return w.head.insertBefore(n,a),t}}var na="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bt(){for(var t=12,n="";t-- >0;)n+=na[Math.random()*62|0];return n}function st(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function on(t){return t.classList?st(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function ae(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ea(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(ae(t[e]),'" ')},"").trim()}function Lt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function sn(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function aa(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function ra(t){var n=t.transform,e=t.width,a=e===void 0?Bt:e,r=t.height,o=r===void 0?Bt:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&Qn?f+="translate(".concat(n.x/G-a/2,"em, ").concat(n.y/G-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/G,"em), calc(-50% + ").concat(n.y/G,"em)) "):f+="translate(".concat(n.x/G,"em, ").concat(n.y/G,"em) "),f+="scale(".concat(n.size/G*(n.flipX?-1:1),", ").concat(n.size/G*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var ia=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function re(){var t=Jn,n=Zn,e=v.cssPrefix,a=v.replacementClass,r=ia;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Cn=!1;function Dt(){v.autoAddCss&&!Cn&&(ta(re()),Cn=!0)}var oa={mixout:function(){return{dom:{css:re,insertCss:Dt}}},hooks:function(){return{beforeDOMElementCreation:function(){Dt()},beforeI2svg:function(){Dt()}}}},U=V||{};U[Y]||(U[Y]={});U[Y].styles||(U[Y].styles={});U[Y].hooks||(U[Y].hooks={});U[Y].shims||(U[Y].shims=[]);var D=U[Y],ie=[],sa=function t(){w.removeEventListener("DOMContentLoaded",t),_t=1,ie.map(function(n){return n()})},_t=!1;W&&(_t=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),_t||w.addEventListener("DOMContentLoaded",sa));function fa(t){W&&(_t?setTimeout(t,0):ie.push(t))}function ht(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?ae(t):"<".concat(n," ").concat(ea(a),">").concat(o.map(ht).join(""),"</").concat(n,">")}function Sn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var la=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},jt=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?la(e,r):e,f,c,l;for(a===void 0?(f=1,l=n[o[0]]):(f=0,l=a);f<i;f++)c=o[f],l=s(l,n[c],c,n);return l};function ca(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Gt(t){var n=ca(t);return n.length===1?n[0].toString(16):null}function ua(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function En(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Vt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=En(n);typeof D.hooks.addPack=="function"&&!r?D.hooks.addPack(t,En(n)):D.styles[t]=u(u({},D.styles[t]||{}),o),t==="fas"&&Vt("fa",n)}var Et,Ot,Pt,at=D.styles,ma=D.shims,da=(Et={},N(Et,x,Object.values(dt[x])),N(Et,E,Object.values(dt[E])),Et),fn=null,oe={},se={},fe={},le={},ce={},va=(Ot={},N(Ot,x,Object.keys(ut[x])),N(Ot,E,Object.keys(ut[E])),Ot);function ba(t){return~Ke.indexOf(t)}function ga(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ba(r)?r:null}var ue=function(){var n=function(o){return jt(at,function(i,s,f){return i[f]=jt(s,o,{}),i},{})};oe=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),se=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),ce=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in at||v.autoFetchSvg,a=jt(ma,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});fe=a.names,le=a.unicodes,fn=Rt(v.styleDefault,{family:v.familyDefault})};$e(function(t){fn=Rt(t.styleDefault,{family:v.familyDefault})});ue();function ln(t,n){return(oe[t]||{})[n]}function pa(t,n){return(se[t]||{})[n]}function tt(t,n){return(ce[t]||{})[n]}function me(t){return fe[t]||{prefix:null,iconName:null}}function ha(t){var n=le[t],e=ln("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function q(){return fn}var cn=function(){return{prefix:null,iconName:null,rest:[]}};function Rt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?x:e,r=ut[a][t],o=mt[a][t]||mt[a][r],i=t in D.styles?t:null;return o||i||null}var On=(Pt={},N(Pt,x,Object.keys(dt[x])),N(Pt,E,Object.keys(dt[E])),Pt);function zt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,o=(n={},N(n,x,"".concat(v.cssPrefix,"-").concat(x)),N(n,E,"".concat(v.cssPrefix,"-").concat(E)),n),i=null,s=x;(t.includes(o[x])||t.some(function(c){return On[x].includes(c)}))&&(s=x),(t.includes(o[E])||t.some(function(c){return On[E].includes(c)}))&&(s=E);var f=t.reduce(function(c,l){var m=ga(v.cssPrefix,l);if(at[l]?(l=da[s].includes(l)?We[s][l]:l,i=l,c.prefix=l):va[s].indexOf(l)>-1?(i=l,c.prefix=Rt(l,{family:s})):m?c.iconName=m:l!==v.replacementClass&&l!==o[x]&&l!==o[E]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var b=i==="fa"?me(c.iconName):{},g=tt(c.prefix,c.iconName);b.prefix&&(i=null),c.iconName=b.iconName||g||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!at.far&&at.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},cn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===E&&(at.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=tt(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=q()||"fas"),f}var ya=function(){function t(){Te(this,t),this.definitions={}}return _e(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),i[s]),Vt(s,i[s]);var f=dt[x][s];f&&Vt(f,i[s]),ue()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,c=i.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[s][m]=c)}),e[s][f]=c}),e}}]),t}(),Pn=[],rt={},it={},ka=Object.keys(it);function xa(t,n){var e=n.mixoutsTo;return Pn=t,rt={},Object.keys(it).forEach(function(a){ka.indexOf(a)===-1&&delete it[a]}),Pn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),Tt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){rt[i]||(rt[i]=[]),rt[i].push(o[i])})}a.provides&&a.provides(it)}),e}function qt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=rt[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function et(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=rt[t]||[];r.forEach(function(o){o.apply(null,e)})}function H(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return it[t]?it[t].apply(null,n):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||q();if(n)return n=tt(e,n)||n,Sn(de.definitions,e,n)||Sn(D.styles,e,n)}var de=new ya,wa=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,et("noAuto")},Aa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(et("beforeI2svg",n),H("pseudoElements2svg",n),H("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,fa(function(){Sa({autoReplaceSvgRoot:e}),et("watch",n)})}},Ca={icon:function(n){if(n===null)return null;if(Tt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:tt(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Rt(n[0]);return{prefix:a,iconName:tt(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.cssPrefix,"-"))>-1||n.match(Be))){var r=zt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:tt(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=q();return{prefix:o,iconName:tt(o,n)||n}}}},F={noAuto:wa,config:v,dom:Aa,parse:Ca,library:de,findIconDefinition:Kt,toHtml:ht},Sa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?w:e;(Object.keys(D.styles).length>0||v.autoFetchSvg)&&W&&v.autoReplaceSvg&&F.dom.i2svg({node:a})};function Ft(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ht(a)})}}),Object.defineProperty(t,"node",{get:function(){if(W){var a=w.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ea(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(sn(i)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Lt(u(u({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Oa(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(v.cssPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:i}),children:a}]}]}function un(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,b=t.watchable,g=b===void 0?!1:b,A=a.found?a:e,C=A.width,y=A.height,P=r==="fak",k=[v.replacementClass,o?"".concat(v.cssPrefix,"-").concat(o):""].filter(function(I){return m.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(m.classes).join(" "),h={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(y)})},_=P&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/y*16*.0625,"em")}:{};g&&(h.attributes[nt]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||bt())},children:[f]}),delete h.attributes.title);var O=u(u({},h),{},{prefix:r,iconName:o,main:e,mask:a,maskId:c,transform:i,symbol:s,styles:u(u({},_),m.styles)}),d=a.found&&e.found?H("generateAbstractMask",O)||{children:[],attributes:{}}:H("generateAbstractIcon",O)||{children:[],attributes:{}},S=d.children,z=d.attributes;return O.children=S,O.attributes=z,s?Oa(O):Ea(O)}function In(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(c[nt]="");var l=u({},i.styles);sn(r)&&(l.transform=ra({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var m=Lt(l);m.length>0&&(c.style=m);var b=[];return b.push({tag:"span",attributes:c,children:[n]}),o&&b.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),b}function Pa(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=Lt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var Yt=D.styles;function Qt(t){var n=t[0],e=t[1],a=t.slice(4),r=tn(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat($.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat($.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat($.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var Ia={found:!1,width:512,height:512};function Na(t,n){!$n&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Jt(t,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=q()),new Promise(function(a,r){if(H("missingIconAbstract"),e==="fa"){var o=me(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&Yt[n]&&Yt[n][t]){var i=Yt[n][t];return a(Qt(i))}Na(t,n),a(u(u({},Ia),{},{icon:v.showMissingIcons&&t?H("missingIconAbstract")||{}:{}}))})}var Nn=function(){},Zt=v.measurePerformance&&kt&&kt.mark&&kt.measure?kt:{mark:Nn,measure:Nn},ft='FA "6.4.0"',Ta=function(n){return Zt.mark("".concat(ft," ").concat(n," begins")),function(){return ve(n)}},ve=function(n){Zt.mark("".concat(ft," ").concat(n," ends")),Zt.measure("".concat(ft," ").concat(n),"".concat(ft," ").concat(n," begins"),"".concat(ft," ").concat(n," ends"))},mn={begin:Ta,end:ve},It=function(){};function Tn(t){var n=t.getAttribute?t.getAttribute(nt):null;return typeof n=="string"}function _a(t){var n=t.getAttribute?t.getAttribute(en):null,e=t.getAttribute?t.getAttribute(an):null;return n&&e}function Ma(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function La(){if(v.autoReplaceSvg===!0)return Nt.replace;var t=Nt[v.autoReplaceSvg];return t||Nt.replace}function Ra(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function za(t){return w.createElement(t)}function be(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Ra:za:e;if(typeof t=="string")return w.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(be(i,{ceFn:a}))}),r}function Fa(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Nt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(be(r),e)}),e.getAttribute(nt)===null&&v.keepOriginalSource){var a=w.createComment(Fa(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~on(e).indexOf(v.replacementClass))return Nt.replace(n);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return ht(s)}).join(`
`);e.setAttribute(nt,""),e.innerHTML=i}};function _n(t){t()}function ge(t,n){var e=typeof n=="function"?n:It;if(t.length===0)e();else{var a=_n;v.mutateApproach===Ue&&(a=V.requestAnimationFrame||_n),a(function(){var r=La(),o=mn.begin("mutate");t.map(r),o(),e()})}}var dn=!1;function pe(){dn=!0}function $t(){dn=!1}var Mt=null;function Mn(t){if(wn&&v.observeMutations){var n=t.treeCallback,e=n===void 0?It:n,a=t.nodeCallback,r=a===void 0?It:a,o=t.pseudoElementsCallback,i=o===void 0?It:o,s=t.observeMutationsRoot,f=s===void 0?w:s;Mt=new wn(function(c){if(!dn){var l=q();st(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Tn(m.addedNodes[0])&&(v.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&Tn(m.target)&&~qe.indexOf(m.attributeName))if(m.attributeName==="class"&&_a(m.target)){var b=zt(on(m.target)),g=b.prefix,A=b.iconName;m.target.setAttribute(en,g||l),A&&m.target.setAttribute(an,A)}else Ma(m.target)&&r(m.target)})}}),W&&Mt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Da(){Mt&&Mt.disconnect()}function ja(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function Ya(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=zt(on(t));return r.prefix||(r.prefix=q()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=pa(r.prefix,t.innerText)||ln(r.prefix,Gt(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ua(t){var n=st(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(e?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||bt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ha(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ln(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ya(t),a=e.iconName,r=e.prefix,o=e.rest,i=Ua(t),s=qt("parseNodeAttributes",{},t),f=n.styleParser?ja(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var Wa=D.styles;function he(t){var n=v.autoReplaceSvg==="nest"?Ln(t,{styleParser:!1}):Ln(t);return~n.extra.classes.indexOf(te)?H("generateLayersText",t,n):H("generateSvgReplacementMutation",t,n)}var K=new Set;rn.map(function(t){K.add("fa-".concat(t))});Object.keys(ut[x]).map(K.add.bind(K));Object.keys(ut[E]).map(K.add.bind(K));K=gt(K);function Rn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var e=w.documentElement.classList,a=function(m){return e.add("".concat(An,"-").concat(m))},r=function(m){return e.remove("".concat(An,"-").concat(m))},o=v.autoFetchSvg?K:rn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Wa));o.includes("fa")||o.push("fa");var i=[".".concat(te,":not([").concat(nt,"])")].concat(o.map(function(l){return".".concat(l,":not([").concat(nt,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=st(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=mn.begin("onTree"),c=s.reduce(function(l,m){try{var b=he(m);b&&l.push(b)}catch(g){$n||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(b){ge(b,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(b){f(),m(b)})})}function Ba(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;he(t).then(function(e){e&&ge([e],n)})}function Xa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Kt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Kt(r||{})),t(a,u(u({},e),{},{mask:r}))}}var Ga=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?j:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,m=e.title,b=m===void 0?null:m,g=e.titleId,A=g===void 0?null:g,C=e.classes,y=C===void 0?[]:C,P=e.attributes,k=P===void 0?{}:P,h=e.styles,_=h===void 0?{}:h;if(n){var O=n.prefix,d=n.iconName,S=n.icon;return Ft(u({type:"icon"},n),function(){return et("beforeDOMElementCreation",{iconDefinition:n,params:e}),v.autoA11y&&(b?k["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(A||bt()):(k["aria-hidden"]="true",k.focusable="false")),un({icons:{main:Qt(S),mask:f?Qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:d,transform:u(u({},j),r),symbol:i,title:b,maskId:l,titleId:A,extra:{attributes:k,styles:_,classes:y}})})}},Va={mixout:function(){return{icon:Xa(Ga)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Rn,e.nodeCallback=Ba,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?w:a,o=e.callback,i=o===void 0?function(){}:o;return Rn(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,m=a.maskId,b=a.extra;return new Promise(function(g,A){Promise.all([Jt(r,s),l.iconName?Jt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var y=tn(C,2),P=y[0],k=y[1];g([e,un({icons:{main:P,mask:k},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:o,titleId:i,extra:b,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=Lt(s);f.length>0&&(r.style=f);var c;return sn(i)&&(c=H("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},qa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Ft({type:"layer"},function(){et("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(gt(o)).join(" ")},children:i}]})}}}},Ka={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,c=f===void 0?{}:f,l=a.styles,m=l===void 0?{}:l;return Ft({type:"counter",content:e},function(){return et("beforeDOMElementCreation",{content:e,params:a}),Pa({content:e.toString(),title:o,extra:{attributes:c,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(gt(s))}})})}}}},Qa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?j:r,i=a.title,s=i===void 0?null:i,f=a.classes,c=f===void 0?[]:f,l=a.attributes,m=l===void 0?{}:l,b=a.styles,g=b===void 0?{}:b;return Ft({type:"text",content:e},function(){return et("beforeDOMElementCreation",{content:e,params:a}),In({content:e,transform:u(u({},j),o),title:s,extra:{attributes:m,styles:g,classes:["".concat(v.cssPrefix,"-layers-text")].concat(gt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(Qn){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,In({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Ja=new RegExp('"',"ug"),zn=[1105920,1112319];function Za(t){var n=t.replace(Ja,""),e=ua(n,0),a=e>=zn[0]&&e<=zn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Gt(r?n[0]:n),isSecondary:a||r}}function Fn(t,n){var e="".concat(Ye).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=st(t.children),i=o.filter(function(S){return S.getAttribute(Xt)===n})[0],s=V.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Xe),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?E:x,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?mt[b][f[2].toLowerCase()]:Ge[b][c],A=Za(m),C=A.value,y=A.isSecondary,P=f[0].startsWith("FontAwesome"),k=ln(g,C),h=k;if(P){var _=ha(C);_.iconName&&_.prefix&&(k=_.iconName,g=_.prefix)}if(k&&!y&&(!i||i.getAttribute(en)!==g||i.getAttribute(an)!==h)){t.setAttribute(e,h),i&&t.removeChild(i);var O=Ha(),d=O.extra;d.attributes[Xt]=n,Jt(k,g).then(function(S){var z=un(u(u({},O),{},{icons:{main:S,mask:cn()},prefix:g,iconName:h,extra:d,watchable:!0})),I=w.createElement("svg");n==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=z.map(function(yt){return ht(yt)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function $a(t){return Promise.all([Fn(t,"::before"),Fn(t,"::after")])}function tr(t){return t.parentNode!==document.head&&!~He.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Xt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Dn(t){if(W)return new Promise(function(n,e){var a=st(t.querySelectorAll("*")).filter(tr).map($a),r=mn.begin("searchPseudoElements");pe(),Promise.all(a).then(function(){r(),$t(),n()}).catch(function(){r(),$t(),e()})})}var nr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Dn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?w:a;v.searchPseudoElements&&Dn(r)}}},jn=!1,er={mixout:function(){return{dom:{unwatch:function(){pe(),jn=!0}}}},hooks:function(){return{bootstrap:function(){Mn(qt("mutationObserverCallbacks",{}))},noAuto:function(){Da()},watch:function(e){var a=e.observeMutationsRoot;jn?$t():Mn(qt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Yn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ar={mixout:function(){return{parse:{transform:function(e){return Yn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Yn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},b={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:m,path:b};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},Ut={x:0,y:0,width:"100%",height:"100%"};function Un(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function rr(t){return t.tag==="g"?t.children:[t]}var ir={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?zt(r.split(" ").map(function(i){return i.trim()})):cn();return o.prefix||(o.prefix=q()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,c=o.width,l=o.icon,m=i.width,b=i.icon,g=aa({transform:f,containerWidth:m,iconWidth:c}),A={tag:"rect",attributes:u(u({},Ut),{},{fill:"white"})},C=l.children?{children:l.children.map(Un)}:{},y={tag:"g",attributes:u({},g.inner),children:[Un(u({tag:l.tag,attributes:u(u({},l.attributes),g.path)},C))]},P={tag:"g",attributes:u({},g.outer),children:[y]},k="mask-".concat(s||bt()),h="clip-".concat(s||bt()),_={tag:"mask",attributes:u(u({},Ut),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,P]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:rr(b)},_]};return a.push(O,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(k,")")},Ut)}),{children:a,attributes:r}}}},or={provides:function(n){var e=!1;V.matchMedia&&(e=V.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},sr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},fr=[oa,Va,qa,Ka,Qa,nr,er,ar,ir,or,sr];xa(fr,{mixoutsTo:F});F.noAuto;F.config;var lr=F.library;F.dom;var cr=F.parse,ur=F.findIconDefinition;F.toHtml;var mr=F.icon;F.layer;F.text;F.counter;var dr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};function Hn(t){if(t===null||typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2){const[n,e]=t;return{prefix:n,iconName:e}}if(typeof t=="string")return{prefix:"fas",iconName:t}}function vr(t){let n,e;return{c(){n=new xe(!1),e=gn(),this.h()},l(a){n=we(a,!1),e=gn(),this.h()},h(){n.a=e},m(a,r){n.m(t[0],a,r),R(a,e,r)},p(a,[r]){r&1&&n.p(a[0])},i:Ht,o:Ht,d(a){a&&(L(e),n.d())}}}function br(t,n,e){let a,r,{border:o=!1}=n,{fixedWidth:i=!1}=n,{flip:s=null}=n,{icon:f=null}=n,{mask:c=null}=n,{listItem:l=!1}=n,{pull:m=null}=n,{pulse:b=!1}=n,{rotation:g=null}=n,{swapOpacity:A=!1}=n,{size:C=null}=n,{spin:y=!1}=n,{transform:P={}}=n,{symbol:k=!1}=n,{title:h=null}=n,{inverse:_=!1}=n,O="";return ye(()=>{const d=Hn(f);if(!d)return;const S=ur(d),z=mr(S||f,{symbol:k,title:h,styles:n.style?r:{},classes:[...Object.keys(a).map(I=>a[I]?I:null).filter(I=>!!I),(n.class||"").split(" ")],transform:{...typeof P=="string"?cr.transform(P):P},mask:Hn(c)});if(!z){console.warn("Could not find one or more icon(s)",S||f,c);return}e(0,O=z.html)}),t.$$set=d=>{e(19,n=vn(vn({},n),bn(d))),"border"in d&&e(1,o=d.border),"fixedWidth"in d&&e(2,i=d.fixedWidth),"flip"in d&&e(3,s=d.flip),"icon"in d&&e(4,f=d.icon),"mask"in d&&e(5,c=d.mask),"listItem"in d&&e(6,l=d.listItem),"pull"in d&&e(7,m=d.pull),"pulse"in d&&e(8,b=d.pulse),"rotation"in d&&e(9,g=d.rotation),"swapOpacity"in d&&e(10,A=d.swapOpacity),"size"in d&&e(11,C=d.size),"spin"in d&&e(12,y=d.spin),"transform"in d&&e(13,P=d.transform),"symbol"in d&&e(14,k=d.symbol),"title"in d&&e(15,h=d.title),"inverse"in d&&e(16,_=d.inverse)},t.$$.update=()=>{t.$$.dirty&73678&&(a={"fa-spin":y,"fa-pulse":b,"fa-fw":i,"fa-border":o,"fa-li":l,"fa-inverse":_,"fa-flip-horizontal":["both","horizontal"].includes(s),"fa-flip-vertical":["both","vertical"].includes(s),[`fa-${C}`]:C!==null,[`fa-rotate-${g}`]:g!==null,[`fa-pull-${m}`]:m!==null,"fa-swap-opacity":A}),r=(n.style||"").split(";").filter(d=>!!d).map(d=>d.split(":").map(S=>S.trim())).reduce((d,S)=>{const[z,I]=S;return d[z]=I,d},{})},n=bn(n),[O,o,i,s,f,c,l,m,b,g,A,C,y,P,k,h,_]}class gr extends Bn{constructor(n){super(),Xn(this,n,br,vr,Wn,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}function pr(t){let n,e="Samuel Valencia",a,r,o="My Socials",i,s,f="Projects",c,l,m="VATSIM ATC",b,g,A="Contact Me",C,y,P="Achievements",k,h,_="Support",O,d,S,z,I,yt;return S=new gr({props:{class:"fa-solid fa-bars",icon:"bars"}}),{c(){n=B("a"),n.textContent=e,a=Q(),r=B("a"),r.textContent=o,i=Q(),s=B("a"),s.textContent=f,c=Q(),l=B("a"),l.textContent=m,b=Q(),g=B("a"),g.textContent=A,C=Q(),y=B("a"),y.textContent=P,k=Q(),h=B("a"),h.textContent=_,O=Q(),d=B("a"),Ae(S.$$.fragment),this.h()},l(p){n=X(p,"A",{href:!0,class:!0,id:!0,"data-svelte-h":!0}),J(n)!=="svelte-164gjvy"&&(n.textContent=e),a=Z(p),r=X(p,"A",{href:!0,id:!0,"data-svelte-h":!0}),J(r)!=="svelte-1glgqel"&&(r.textContent=o),i=Z(p),s=X(p,"A",{href:!0,id:!0,"data-svelte-h":!0}),J(s)!=="svelte-1ihy2xl"&&(s.textContent=f),c=Z(p),l=X(p,"A",{href:!0,id:!0,"data-svelte-h":!0}),J(l)!=="svelte-2up9hb"&&(l.textContent=m),b=Z(p),g=X(p,"A",{href:!0,id:!0,"data-svelte-h":!0}),J(g)!=="svelte-y1mg75"&&(g.textContent=A),C=Z(p),y=X(p,"A",{href:!0,id:!0,"data-svelte-h":!0}),J(y)!=="svelte-1my8jlz"&&(y.textContent=P),k=Z(p),h=X(p,"A",{href:!0,id:!0,"data-svelte-h":!0}),J(h)!=="svelte-6nh1ye"&&(h.textContent=_),O=Z(p),d=X(p,"A",{href:!0,class:!0});var T=Ce(d);Se(S.$$.fragment,T),T.forEach(L),this.h()},h(){M(n,"href","/"),M(n,"class","active"),M(n,"id","index"),M(r,"href","/social"),M(r,"id","social"),M(s,"href","/projects"),M(s,"id","projects"),M(l,"href","/vatsim"),M(l,"id","vatsim"),M(g,"href","/contact"),M(g,"id","contact"),M(y,"href","/achievements"),M(y,"id","achievements"),M(h,"href","/support"),M(h,"id","support"),M(d,"href","#"),M(d,"class","icon")},m(p,T){R(p,n,T),R(p,a,T),R(p,r,T),R(p,i,T),R(p,s,T),R(p,c,T),R(p,l,T),R(p,b,T),R(p,g,T),R(p,C,T),R(p,y,T),R(p,k,T),R(p,h,T),R(p,O,T),R(p,d,T),Ee(S,d,null),z=!0,I||(yt=Oe(d,"click",hr),I=!0)},p:Ht,i(p){z||(Pe(S.$$.fragment,p),z=!0)},o(p){Ie(S.$$.fragment,p),z=!1},d(p){p&&(L(n),L(a),L(r),L(i),L(s),L(c),L(l),L(b),L(g),L(C),L(y),L(k),L(h),L(O),L(d)),Ne(S),I=!1,yt()}}}function hr(){var t=document.getElementById("myTopnav");t.classList.contains("responsive")?t.classList.remove("responsive"):t.classList.add("responsive")}function yr(t){return lr.add(dr),ke(()=>{let n=window.location.pathname.replace("/","");n==""&&(n="index"),console.log(document.getElementById(n)),document.getElementById(n)!=null?(document.querySelector(".active").classList.remove("active"),document.getElementById(n).className="active"):document.querySelector(".active").classList.remove("active")}),[]}class wr extends Bn{constructor(n){super(),Xn(this,n,yr,pr,Wn,{})}}export{wr as N};
