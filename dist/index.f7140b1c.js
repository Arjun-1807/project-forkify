var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,v,g,m,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=b.parcelRequire94c2;null==E&&((E=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire94c2=E),(0,E.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),E("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.f7140b1c.js","eyyUD","icons.c5b0f01c.svg"]'));var S={},O={},j=function(e){return e&&e.Math===Math&&e};O=j("object"==typeof globalThis&&globalThis)||j("object"==typeof window&&window)||j("object"==typeof self&&self)||j("object"==typeof b&&b)||j("object"==typeof O&&O)||function(){return this}()||Function("return this")();var $={},L={};$=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var F={},x={};x=!L(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var M=Function.prototype.call;F=x?M.bind(M):function(){return M.apply(M,arguments)};var P={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;o=T&&!P.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:P;var N={};N=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var H={},q={},I={},R=Function.prototype,A=R.call,C=x&&R.bind.bind(A,A),D={},U=(I=x?C:function(e){return function(){return A.apply(e,arguments)}})({}.toString),W=I("".slice);D=function(e){return W(U(e),8,-1)};var z=Object,B=I("".split);q=L(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"===D(e)?B(e,""):z(e)}:z;var G={},J={};J=function(e){return null==e};var V=TypeError;G=function(e){if(J(e))throw new V("Can't call method on "+e);return e},H=function(e){return q(G(e))};var Y={},Q={},K={},X={},Z="object"==typeof document&&document.all;X=void 0===Z&&void 0!==Z?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e},K=function(e){return"object"==typeof e?null!==e:X(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=O[e],X(r)?r:void 0):O[e]&&O[e][t]};var er={};er=I({}.isPrototypeOf);var en={},ei={},eo={},ea={},es=O.navigator,ec=es&&es.userAgent;ea=ec?String(ec):"";var eu=O.process,el=O.Deno,ed=eu&&eu.versions||el&&el.version,ef=ed&&ed.v8;ef&&(s=(a=ef.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&ea&&(!(a=ea.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ea.match(/Chrome\/(\d+)/))&&(s=+a[1]),eo=s;var ep=O.String;en=(ei=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");return!ep(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eh=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return X(t)&&er(t.prototype,eh(e))};var ev={},eg={},em={},ey=String;em=function(e){try{return ey(e)}catch(e){return"Object"}};var eb=TypeError;eg=function(e){if(X(e))return e;throw new eb(em(e)+" is not a function")},ev=function(e,t){var r=e[t];return J(r)?void 0:eg(r)};var e_={},ew=TypeError;e_=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!K(n=F(r,e))||X(r=e.valueOf)&&!K(n=F(r,e))||"string"!==t&&X(r=e.toString)&&!K(n=F(r,e)))return n;throw new ew("Can't convert object to primitive value")};var ek={},eE={},eS={};eS=!1;var eO={},ej=Object.defineProperty;eO=function(e,t){try{ej(O,e,{value:t,configurable:!0,writable:!0})}catch(r){O[e]=t}return t};var e$="__core-js_shared__",eL=eE=O[e$]||eO(e$,{});(eL.versions||(eL.versions=[])).push({version:"3.39.0",mode:eS?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ek=function(e,t){return eE[e]||(eE[e]=t||{})};var eF={},ex={},eM=Object;ex=function(e){return eM(G(e))};var eP=I({}.hasOwnProperty);eF=Object.hasOwn||function(e,t){return eP(ex(e),t)};var eT={},eN=0,eH=Math.random(),eq=I(1..toString);eT=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eN+eH,36)};var eI=O.Symbol,eR=ek("wks"),eA=en?eI.for||eI:eI&&eI.withoutSetter||eT,eC=TypeError,eD=(eF(eR,e="toPrimitive")||(eR[e]=ei&&eF(eI,e)?eI[e]:eA("Symbol."+e)),eR[e]);Q=function(e,t){if(!K(e)||ee(e))return e;var r,n=ev(e,eD);if(n){if(void 0===t&&(t="default"),r=F(n,e,t),!K(r)||ee(r))return r;throw new eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),e_(e,t)},Y=function(e){var t=Q(e,"string");return ee(t)?t:t+""};var eU={},eW={},ez=O.document,eB=K(ez)&&K(ez.createElement);eW=function(e){return eB?ez.createElement(e):{}},eU=!$&&!L(function(){return 7!==Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});var eG=Object.getOwnPropertyDescriptor;i=$?eG:function(e,t){if(e=H(e),t=Y(t),eU)try{return eG(e,t)}catch(e){}if(eF(e,t))return N(!F(o,e,t),e[t])};var eJ={},eV={};eV=$&&L(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eQ=String,eK=TypeError;eY=function(e){if(K(e))return e;throw new eK(eQ(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e4="writable";c=$?eV?function(e,t,r){if(eY(e),t=Y(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e4 in r&&!r[e4]){var n=e0(e,t);n&&n[e4]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eY(e),t=Y(t),eY(r),eU)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eJ=$?function(e,t,r){return c(e,t,N(1,r))}:function(e,t,r){return e[t]=r,e};var e3={},e7={},e9=Function.prototype,e8=$&&Object.getOwnPropertyDescriptor,e5=eF(e9,"name")&&(!$||$&&e8(e9,"name").configurable),e6={},te=I(Function.toString);X(eE.inspectSource)||(eE.inspectSource=function(e){return te(e)}),e6=eE.inspectSource;var tt={},tr={},tn=O.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var ti={},to=ek("keys");ti=function(e){return to[e]||(to[e]=eT(e))};var ta={};ta={};var ts="Object already initialized",tc=O.TypeError,tu=O.WeakMap;if(tr||eE.state){var tl=eE.state||(eE.state=new tu);tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,u=function(e,t){if(tl.has(e))throw new tc(ts);return t.facade=e,tl.set(e,t),t},l=function(e){return tl.get(e)||{}},d=function(e){return tl.has(e)}}else{var tf=ti("state");ta[tf]=!0,u=function(e,t){if(eF(e,tf))throw new tc(ts);return t.facade=e,eJ(e,tf,t),t},l=function(e){return eF(e,tf)?e[tf]:{}},d=function(e){return eF(e,tf)}}var tp=(tt={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!K(t)||(r=l(t)).type!==e)throw new tc("Incompatible receiver, "+e+" required");return r}}}).enforce,th=tt.get,tv=String,tg=Object.defineProperty,tm=I("".slice),ty=I("".replace),tb=I([].join),t_=$&&!L(function(){return 8!==tg(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e7=function(e,t,r){"Symbol("===tm(tv(t),0,7)&&(t="["+ty(tv(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eF(e,"name")||e5&&e.name!==t)&&($?tg(e,"name",{value:t,configurable:!0}):e.name=t),t_&&r&&eF(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&eF(r,"constructor")&&r.constructor?$&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tp(e);return eF(n,"source")||(n.source=tb(tw,"string"==typeof t?t:"")),e};Function.prototype.toString=tk(function(){return X(this)&&th(this).source||e6(this)},"toString"),e3=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e7(r,o,n),n.global)i?e[t]=r:eO(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tE={},tS={},tO={},tj={},t$={},tL={},tF=Math.ceil,tx=Math.floor;tL=Math.trunc||function(e){var t=+e;return(t>0?tx:tF)(t)},t$=function(e){var t=+e;return t!=t||0===t?0:tL(t)};var tM=Math.max,tP=Math.min;tj=function(e,t){var r=t$(e);return r<0?tM(r+t,0):tP(r,t)};var tT={},tN={},tH=Math.min;tN=function(e){var t=t$(e);return t>0?tH(t,0x1fffffffffffff):0},tT=function(e){return tN(e.length)};var tq=function(e){return function(t,r,n){var i,o=H(t),a=tT(o);if(0===a)return!e&&-1;var s=tj(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tI={includes:tq(!0),indexOf:tq(!1)}.indexOf,tR=I([].push);tO=function(e,t){var r,n=H(e),i=0,o=[];for(r in n)!eF(ta,r)&&eF(n,r)&&tR(o,r);for(;t.length>i;)eF(n,r=t[i++])&&(~tI(o,r)||tR(o,r));return o};var tA=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tO(e,tA)},p=Object.getOwnPropertySymbols;var tC=I([].concat);tS=et("Reflect","ownKeys")||function(e){var t=f(eY(e));return p?tC(t,p(e)):t},tE=function(e,t,r){for(var n=tS(t),o=0;o<n.length;o++){var a=n[o];eF(e,a)||r&&eF(r,a)||c(e,a,i(t,a))}};var tD={},tU=/#|\.prototype\./,tW=function(e,t){var r=tB[tz(e)];return r===tJ||r!==tG&&(X(t)?L(t):!!t)},tz=tW.normalize=function(e){return String(e).replace(tU,".").toLowerCase()},tB=tW.data={},tG=tW.NATIVE="N",tJ=tW.POLYFILL="P";tD=tW,S=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?O:l?O[c]||eO(c,{}):O[c]&&O[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tD(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tE(a,o)}(e.sham||o&&o.sham)&&eJ(a,"sham",!0),e3(r,n,a,e)}};var tV={},tY={},tQ=Function.prototype,tK=tQ.apply,tX=tQ.call;tY="object"==typeof Reflect&&Reflect.apply||(x?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){if("Function"===D(e))return I(e)})(t0.bind);tZ=function(e,t){return eg(e),void 0===t?e:x?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=et("document","documentElement");var t4={};t4=I([].slice);var t3={},t7=TypeError;t3=function(e,t){if(e<t)throw new t7("Not enough arguments");return e};var t9={};t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t8={},t5={},t6=function(e){return ea.slice(0,e.length)===e};t8="NODE"==(t5=t6("Bun/")?"BUN":t6("Cloudflare-Workers")?"CLOUDFLARE":t6("Deno/")?"DENO":t6("Node.js/")?"NODE":O.Bun&&"string"==typeof Bun.version?"BUN":O.Deno&&"object"==typeof Deno.version?"DENO":"process"===D(O.process)?"NODE":O.window&&O.document?"BROWSER":"REST");var re=O.setImmediate,rt=O.clearImmediate,rr=O.process,rn=O.Dispatch,ri=O.Function,ro=O.MessageChannel,ra=O.String,rs=0,rc={},ru="onreadystatechange";L(function(){h=O.location});var rl=function(e){if(eF(rc,e)){var t=rc[e];delete rc[e],t()}},rd=function(e){return function(){rl(e)}},rf=function(e){rl(e.data)},rp=function(e){O.postMessage(ra(e),h.protocol+"//"+h.host)};re&&rt||(re=function(e){t3(arguments.length,1);var t=X(e)?e:ri(e),r=t4(arguments,1);return rc[++rs]=function(){tY(t,void 0,r)},v(rs),rs},rt=function(e){delete rc[e]},t8?v=function(e){rr.nextTick(rd(e))}:rn&&rn.now?v=function(e){rn.now(rd(e))}:ro&&!t9?(m=(g=new ro).port2,g.port1.onmessage=rf,v=tZ(m.postMessage,m)):O.addEventListener&&X(O.postMessage)&&!O.importScripts&&h&&"file:"!==h.protocol&&!L(rp)?(v=rp,O.addEventListener("message",rf,!1)):v=ru in eW("script")?function(e){t2.appendChild(eW("script"))[ru]=function(){t2.removeChild(this),rl(e)}}:function(e){setTimeout(rd(e),0)});var rh=(tV={set:re,clear:rt}).clear;S({global:!0,bind:!0,enumerable:!0,forced:O.clearImmediate!==rh},{clearImmediate:rh});var rv=tV.set,rg={},rm=O.Function,ry=/MSIE .\./.test(ea)||"BUN"===t5&&((t=O.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rg=function(e,t){var r=t?2:1;return ry?function(n,i){var o=t3(arguments.length,1)>r,a=X(n)?n:rm(n),s=o?t4(arguments,r):[],c=o?function(){tY(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rb=O.setImmediate?rg(rv,!1):rv;S({global:!0,bind:!0,enumerable:!0,forced:O.setImmediate!==rb},{setImmediate:rb});const r_="https://forkify-api.jonas.io/api/v2/recipes/",rw="b02220fd-9c2a-4357-a2ef-2dead2bec643",rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rE={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rS=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,servings:t.servings,ingredients:t.ingredients,sourceUrl:t.source_url,image:t.image_url,cookingTime:t.cooking_time,...t.key&&{key:t.key}}},rO=async function(e){try{let t=await rk(`${r_}${e}?key=${rw}`);rE.recipe=rS(t),rE.bookmarks.some(t=>t.id===e)?rE.recipe.bookmarked=!0:rE.recipe.bookmarked=!1}catch(e){throw console.error(e),e}},rj=async function(e){try{rE.search.query=e;let t=await rk(`${r_}?search=${e}&key=${rw}`);rE.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rE.search.page=1}catch(e){throw console.error(e),e}},r$=function(e=rE.search.page){rE.search.page=e;let t=(e-1)*rE.search.resultsPerPage,r=e*rE.search.resultsPerPage;return rE.search.results.slice(t,r)},rL=function(e){rE.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*(e/rE.recipe.servings)}),rE.recipe.servings=e},rF=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))},rx=function(e){rE.bookmarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookmarked=!0),rF()},rM=function(e){let t=rE.bookmarks.findIndex(t=>t.id===e);rE.bookmarks.splice(t,1),e===rE.recipe.id&&(rE.recipe.bookmarked=!1),rF()};!function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookmarks=JSON.parse(e))}();const rP=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("wrong ingredient format, Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rk(`${r_}?key=${rw}`,r);rE.recipe=rS(n),rx(rE.recipe)}catch(e){throw e}};var rT={};rT=new URL("icons.c5b0f01c.svg",import.meta.url).toString();class rN{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderSpinner(){let e=`
        <div class="spinner">
        <svg>
        <use href="${_(rT)}#icon-loader"></use>
        </svg>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${_(rT)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
          <div class="message">
            <div>
              <svg>
                <use href="${_(rT)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rH extends rN{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that reicpe. Please try another one!";_message="";addHandlerRender(e){["load","hashchange"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rT)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>

        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rT)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${_(rT)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${_(rT)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${_(rT)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg>
            <use href="${_(rT)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}         
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${_(rT)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
            <use href="${_(rT)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
        <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
        </div>
        </li>
    `}}var rq=new rH;class rI extends rN{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rR=new rI,rA=new class extends rN{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hiddens"}">
                  <svg>
                    <use href="${_(rT)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
        </li>
    `}};class rC extends rN{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try another one!";_message="";_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rD=new rC;class rU extends rN{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${_(rT)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_(rT)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_(rT)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${_(rT)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var rW=new rU;class rz extends rN{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}addHandlerRender(e){window.addEventListener("load",e)}}var rB=new rz;class rG extends rN{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var rJ=new rG,rV=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new $(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rV}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rV:Function("r","regeneratorRuntime = r")(rV)}const rY=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rq.renderSpinner(),rD.update(r$()),rB.update(rE.bookmarks),await rO(e),rq.render(rE.recipe)}catch(e){rq.renderError()}},rQ=async function(){try{rD.renderSpinner();let e=rR.getQuery();if(!e)return;await rj(e),rD.render(r$()),rW.render(rE.search)}catch(e){console.error(e)}},rK=async function(e){try{rJ.renderSpinner(),await rP(e),console.log(rE.recipe),rq.render(rE.recipe),rJ.renderMessage(),rB.render(rE.bookmarks),window.history.pushState(null,"",`#${rE.recipe.id}`),setTimeout(function(){rJ.toggleWindow()},2500)}catch(e){console.error(e),rJ.renderError(e.message)}};rB.addHandlerRender(function(){rB.render(rE.bookmarks)}),rq.addHandlerRender(rY),rq.addHandlerUpdateServings(function(e){rL(e),rq.update(rE.recipe)}),rq.addHandlerAddBookmark(function(){rE.recipe.bookmarked?rM(rE.recipe.id):rx(rE.recipe),rq.update(rE.recipe),rB.render(rE.bookmarks)}),rR.addHandlerSearch(rQ),rW.addHandlerClick(function(e){rD.render(r$(e)),rW.render(rE.search)}),rJ.addHandlerUpload(rK);
//# sourceMappingURL=index.f7140b1c.js.map