import{n as e,r as t,t as n}from"./rolldown-runtime-S-ySWqyJ.js";var r=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ee(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var F=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},I={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=I,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ee}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,F)}catch(e){F(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),i=n(((e,t)=>{t.exports=r()})),a=t(i(),1),o=`modulepreload`,s=function(e){return`/`+e},c={},l=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=l(t.map(t=>{if(t=s(t,n),t in c)return;c[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let l=document.createElement(`link`);if(l.rel=r?`stylesheet`:o,r||(l.as=`script`),l.crossOrigin=``,l.href=t,a&&l.setAttribute(`nonce`,a),document.head.appendChild(l),r)return new Promise((e,n)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},u=`popstate`;function d(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function f(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return _(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:v(t)}return b(t,n,null,e)}function p(e,t){if(e===!1||e==null)throw Error(t)}function m(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function h(){return Math.random().toString(36).substring(2,10)}function g(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function _(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?y(t):t,state:n,key:t&&t.key||r||h(),unstable_mask:i}}function v({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function y(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function b(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=f();l??(l=0,o.replaceState({...o.state,idx:l},``));function f(){return(o.state||{idx:null}).idx}function p(){s=`POP`;let e=f(),t=e==null?null:e-l;l=e,c&&c({action:s,location:y.location,delta:t})}function m(e,t){s=`PUSH`;let r=d(e)?e:_(y.location,e,t);n&&n(r,e),l=f()+1;let u=g(r,l),p=y.createHref(r.unstable_mask||r);try{o.pushState(u,``,p)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(p)}a&&c&&c({action:s,location:y.location,delta:1})}function h(e,t){s=`REPLACE`;let r=d(e)?e:_(y.location,e,t);n&&n(r,e),l=f();let i=g(r,l),u=y.createHref(r.unstable_mask||r);o.replaceState(i,``,u),a&&c&&c({action:s,location:y.location,delta:0})}function v(e){return x(e)}let y={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(u,p),c=e,()=>{i.removeEventListener(u,p),c=null}},createHref(e){return t(i,e)},createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:m,replace:h,go(e){return o.go(e)}};return y}function x(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),p(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:v(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function S(e,t,n=`/`){return C(e,t,n,!1)}function C(e,t,n,r){let i=z((typeof t==`string`?y(t):t).pathname||`/`,n);if(i==null)return null;let a=T(e);D(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=te(i);o=I(a[e],t,r)}return o}function w(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function T(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;p(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=V([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(p(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),T(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ee(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of E(e.path))a(e,t,!0,n)}),t}function E(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=E(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function D(e){e.sort((e,t)=>e.score===t.score?F(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var O=/^:[\w-]+$/,k=3,A=2,j=1,M=10,N=-2,P=e=>e===`*`;function ee(e,t){let n=e.split(`/`),r=n.length;return n.some(P)&&(r+=N),t&&(r+=A),n.filter(e=>!P(e)).reduce((e,t)=>e+(O.test(t)?k:t===``?j:M),r)}function F(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function I(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=L({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=L({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:V([a,u.pathname]),pathnameBase:le(V([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=V([a,u.pathnameBase]))}return o}function L(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=R(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function R(e,t=!1,n=!0){m(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return m(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function z(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var ne=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function re(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?y(e):e,a;return n?(n=ce(n),a=n.startsWith(`/`)?ie(n.substring(1),`/`):ie(n,t)):a=t,{pathname:a,search:ue(r),hash:de(i)}}function ie(e,t){let n=H(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ae(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function se(e){let t=oe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function B(e,t,n,r=!1){let i;typeof e==`string`?i=y(e):(i={...e},p(!i.pathname||!i.pathname.includes(`?`),ae(`?`,`pathname`,`search`,i)),p(!i.pathname||!i.pathname.includes(`#`),ae(`#`,`pathname`,`hash`,i)),p(!i.search||!i.search.includes(`#`),ae(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=re(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ce=e=>e.replace(/\/\/+/g,`/`),V=e=>ce(e.join(`/`)),H=e=>e.replace(/\/+$/,``),le=e=>H(e).replace(/^\/*/,`/`),ue=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,de=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,fe=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function pe(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function me(e){return V(e.map(e=>e.route.path).filter(Boolean))||`/`}var he=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ge(e,t){let n=e;if(typeof n!=`string`||!ne.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(he)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=z(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{m(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var _e=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(_e);var ve=[`GET`,..._e];new Set(ve);var U=a.createContext(null);U.displayName=`DataRouter`;var W=a.createContext(null);W.displayName=`DataRouterState`;var ye=a.createContext(!1);function be(){return a.useContext(ye)}var xe=a.createContext({isTransitioning:!1});xe.displayName=`ViewTransition`;var Se=a.createContext(new Map);Se.displayName=`Fetchers`;var Ce=a.createContext(null);Ce.displayName=`Await`;var G=a.createContext(null);G.displayName=`Navigation`;var K=a.createContext(null);K.displayName=`Location`;var q=a.createContext({outlet:null,matches:[],isDataRoute:!1});q.displayName=`Route`;var we=a.createContext(null);we.displayName=`RouteError`;var Te=`REACT_ROUTER_ERROR`,Ee=`REDIRECT`,De=`ROUTE_ERROR_RESPONSE`;function Oe(e){if(e.startsWith(`${Te}:${Ee}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ke(e){if(e.startsWith(`${Te}:${De}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new fe(t.status,t.statusText,t.data)}catch{}}function Ae(e,{relative:t}={}){p(J(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=a.useContext(G),{hash:i,pathname:o,search:s}=X(e,{relative:t}),c=o;return n!==`/`&&(c=o===`/`?n:V([n,o])),r.createHref({pathname:c,search:s,hash:i})}function J(){return a.useContext(K)!=null}function Y(){return p(J(),`useLocation() may be used only in the context of a <Router> component.`),a.useContext(K).location}var je=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Me(e){a.useContext(G).static||a.useLayoutEffect(e)}function Ne(){let{isDataRoute:e}=a.useContext(q);return e?et():Pe()}function Pe(){p(J(),`useNavigate() may be used only in the context of a <Router> component.`);let e=a.useContext(U),{basename:t,navigator:n}=a.useContext(G),{matches:r}=a.useContext(q),{pathname:i}=Y(),o=JSON.stringify(se(r)),s=a.useRef(!1);return Me(()=>{s.current=!0}),a.useCallback((r,a={})=>{if(m(s.current,je),!s.current)return;if(typeof r==`number`){n.go(r);return}let c=B(r,JSON.parse(o),i,a.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:V([t,c.pathname])),(a.replace?n.replace:n.push)(c,a.state,a)},[t,n,o,i,e])}a.createContext(null);function Fe(){let{matches:e}=a.useContext(q);return e[e.length-1]?.params??{}}function X(e,{relative:t}={}){let{matches:n}=a.useContext(q),{pathname:r}=Y(),i=JSON.stringify(se(n));return a.useMemo(()=>B(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ie(e,t){return Le(e,t)}function Le(e,t,n){p(J(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=a.useContext(G),{matches:i}=a.useContext(q),o=i[i.length-1],s=o?o.params:{},c=o?o.pathname:`/`,l=o?o.pathnameBase:`/`,u=o&&o.route;{let e=u&&u.path||``;nt(c,!u||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let d=Y(),f;if(t){let e=typeof t==`string`?y(t):t;p(l===`/`||e.pathname?.startsWith(l),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`),f=e}else f=d;let h=f.pathname||`/`,g=h;if(l!==`/`){let e=l.replace(/^\//,``).split(`/`);g=`/`+h.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let _=S(e,{pathname:g});m(u||_!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),m(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=We(_&&_.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:V([l,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?l:V([l,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&v?a.createElement(K.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...f},navigationType:`POP`}},v):v}function Re(){let e=$e(),t=pe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},o={padding:`2px 4px`,backgroundColor:r},s=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),s=a.createElement(a.Fragment,null,a.createElement(`p`,null,`💿 Hey developer 👋`),a.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,a.createElement(`code`,{style:o},`ErrorBoundary`),` or`,` `,a.createElement(`code`,{style:o},`errorElement`),` prop on your route.`)),a.createElement(a.Fragment,null,a.createElement(`h2`,null,`Unexpected Application Error!`),a.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?a.createElement(`pre`,{style:i},n):null,s)}var ze=a.createElement(Re,null),Be=class extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ke(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:a.createElement(q.Provider,{value:this.props.routeContext},a.createElement(we.Provider,{value:e,children:this.props.component}));return this.context?a.createElement(He,{error:e},t):t}};Be.contextType=ye;var Ve=new WeakMap;function He({children:e,error:t}){let{basename:n}=a.useContext(G);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=Oe(t.digest);if(e){let r=Ve.get(t);if(r)throw r;let i=ge(e.location,n);if(he&&!Ve.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ve.set(t,n),n}return a.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Ue({routeContext:e,match:t,children:n}){let r=a.useContext(U);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),a.createElement(q.Provider,{value:e},n)}function We(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,o=r?.errors;if(o!=null){let e=i.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);p(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let s=!1,c=-1;if(n&&r){s=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:a}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||o){n.isStatic&&(s=!0),i=c>=0?i.slice(0,c+1):[i[0]];break}}}}let l=n?.onError,u=r&&l?(e,t)=>{l(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:me(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,l)=>{let d,f=!1,p=null,m=null;r&&(d=o&&n.route.id?o[n.route.id]:void 0,p=n.route.errorElement||ze,s&&(c<0&&l===0?(nt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,m=null):c===l&&(f=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,l+1)),g=()=>{let t;return t=d?p:f?m:n.route.Component?a.createElement(n.route.Component,null):n.route.element?n.route.element:e,a.createElement(Ue,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||l===0)?a.createElement(Be,{location:r.location,revalidation:r.revalidation,component:p,error:d,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):g()},null)}function Ge(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ke(e){let t=a.useContext(U);return p(t,Ge(e)),t}function qe(e){let t=a.useContext(W);return p(t,Ge(e)),t}function Je(e){let t=a.useContext(q);return p(t,Ge(e)),t}function Ye(e){let t=Je(e),n=t.matches[t.matches.length-1];return p(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Xe(){return Ye(`useRouteId`)}function Ze(){return qe(`useNavigation`).navigation}function Qe(){let{matches:e,loaderData:t}=qe(`useMatches`);return a.useMemo(()=>e.map(e=>w(e,t)),[e,t])}function $e(){let e=a.useContext(we),t=qe(`useRouteError`),n=Ye(`useRouteError`);return e===void 0?t.errors?.[n]:e}function et(){let{router:e}=Ke(`useNavigate`),t=Ye(`useNavigate`),n=a.useRef(!1);return Me(()=>{n.current=!0}),a.useCallback(async(r,i={})=>{m(n.current,je),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var tt={};function nt(e,t,n){!t&&!tt[e]&&(tt[e]=!0,m(!1,n))}a.memo(rt);function rt({routes:e,future:t,state:n,isStatic:r,onError:i}){return Le(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function it({to:e,replace:t,state:n,relative:r}){p(J(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=a.useContext(G);m(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=a.useContext(q),{pathname:s}=Y(),c=Ne(),l=B(e,se(o),s,r===`path`),u=JSON.stringify(l);return a.useEffect(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function at(e){p(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function ot({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:o=!1,unstable_useTransitions:s}){p(!J(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let c=e.replace(/^\/*/,`/`),l=a.useMemo(()=>({basename:c,navigator:i,static:o,unstable_useTransitions:s,future:{}}),[c,i,o,s]);typeof n==`string`&&(n=y(n));let{pathname:u=`/`,search:d=``,hash:f=``,state:h=null,key:g=`default`,unstable_mask:_}=n,v=a.useMemo(()=>{let e=z(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:h,key:g,unstable_mask:_},navigationType:r}},[c,u,d,f,h,g,r,_]);return m(v!=null,`<Router basename="${c}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:a.createElement(G.Provider,{value:l},a.createElement(K.Provider,{children:t,value:v}))}function st({children:e,location:t}){return Ie(ct(e),t)}a.Component;function ct(e,t=[]){let n=[];return a.Children.forEach(e,(e,r)=>{if(!a.isValidElement(e))return;let i=[...t,r];if(e.type===a.Fragment){n.push.apply(n,ct(e.props.children,i));return}p(e.type===at,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),p(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let o={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=ct(e.props.children,i)),n.push(o)}),n}var lt=`get`,ut=`application/x-www-form-urlencoded`;function dt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function ft(e){return dt(e)&&e.tagName.toLowerCase()===`button`}function pt(e){return dt(e)&&e.tagName.toLowerCase()===`form`}function mt(e){return dt(e)&&e.tagName.toLowerCase()===`input`}function ht(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gt(e,t){return e.button===0&&(!t||t===`_self`)&&!ht(e)}var _t=null;function vt(){if(_t===null)try{new FormData(document.createElement(`form`),0),_t=!1}catch{_t=!0}return _t}var yt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function bt(e){return e!=null&&!yt.has(e)?(m(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ut}"`),null):e}function xt(e,t){let n,r,i,a,o;if(pt(e)){let o=e.getAttribute(`action`);r=o?z(o,t):null,n=e.getAttribute(`method`)||lt,i=bt(e.getAttribute(`enctype`))||ut,a=new FormData(e)}else if(ft(e)||mt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?z(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||lt,i=bt(e.getAttribute(`formenctype`))||bt(o.getAttribute(`enctype`))||ut,a=new FormData(o,e),!vt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(dt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=lt,r=null,i=ut,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var St={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Ct=/[&><\u2028\u2029]/g;function wt(e){return e.replace(Ct,e=>St[e])}function Tt(e,t){if(e===!1||e==null)throw Error(t)}function Et(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&z(i.pathname,t)===`/`?i.pathname=`${H(t)}/_root.${r}`:i.pathname=`${H(i.pathname)}.${r}`,i}async function Dt(e,t){if(e.id in t)return t[e.id];try{let n=await l(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ot(e){return e!=null&&typeof e.page==`string`}function kt(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function At(e,t,n){return Ft((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Dt(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(kt).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function jt(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function Mt(e,t,{includeHydrateFallback:n}={}){return Nt(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Nt(e){return[...new Set(e)]}function Pt(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Ft(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Ot(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Pt(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function It(){let e=a.useContext(U);return Tt(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Lt(){let e=a.useContext(W);return Tt(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Rt=a.createContext(void 0);Rt.displayName=`FrameworkContext`;function zt(){let e=a.useContext(Rt);return Tt(e,`You must render this element inside a <HydratedRouter> element`),e}function Bt(e,t){let n=a.useContext(Rt),[r,i]=a.useState(!1),[o,s]=a.useState(!1),{onFocus:c,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=t,p=a.useRef(null);a.useEffect(()=>{if(e===`render`&&s(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),a.useEffect(()=>{if(r){let e=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(e)}}},[r]);let m=()=>{i(!0)},h=()=>{i(!1),s(!1)};return n?e===`intent`?[o,p,{onFocus:Z(c,m),onBlur:Z(l,h),onMouseEnter:Z(u,m),onMouseLeave:Z(d,h),onTouchStart:Z(f,m)}]:[o,p,{}]:[!1,p,{}]}function Z(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Vt({page:e,...t}){let n=be(),{router:r}=It(),i=a.useMemo(()=>S(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?a.createElement(Ut,{page:e,matches:i,...t}):a.createElement(Wt,{page:e,matches:i,...t}):null}function Ht(e){let{manifest:t,routeModules:n}=zt(),[r,i]=a.useState([]);return a.useEffect(()=>{let r=!1;return At(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Ut({page:e,matches:t,...n}){let r=Y(),{future:i}=zt(),{basename:o}=It(),s=a.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=Et(e,o,i.unstable_trailingSlashAwareDataRequests,`rsc`),a=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?a=!0:s.push(e.route.id);return a&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[o,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return a.createElement(a.Fragment,null,s.map(e=>a.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Wt({page:e,matches:t,...n}){let r=Y(),{future:i,manifest:o,routeModules:s}=zt(),{basename:c}=It(),{loaderData:l,matches:u}=Lt(),d=a.useMemo(()=>jt(e,t,u,o,r,`data`),[e,t,u,o,r]),f=a.useMemo(()=>jt(e,t,u,o,r,`assets`),[e,t,u,o,r]),p=a.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,a=!1;if(t.forEach(e=>{let t=o.routes[e.route.id];!t||!t.hasLoader||(!d.some(t=>t.route.id===e.route.id)&&e.route.id in l&&s[e.route.id]?.shouldRevalidate||t.hasClientLoader?a=!0:n.add(e.route.id))}),n.size===0)return[];let u=Et(e,c,i.unstable_trailingSlashAwareDataRequests,`data`);return a&&n.size>0&&u.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[u.pathname+u.search]},[c,i.unstable_trailingSlashAwareDataRequests,l,r,o,d,t,e,s]),m=a.useMemo(()=>Mt(f,o),[f,o]),h=Ht(f);return a.createElement(a.Fragment,null,p.map(e=>a.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),m.map(e=>a.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),h.map(({key:e,link:t})=>a.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Gt(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}a.Component;var Kt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Kt&&(window.__reactRouterVersion=`7.14.2`)}catch{}function qt({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=a.useRef();i.current??=f({window:r,v5Compat:!0});let o=i.current,[s,c]=a.useState({action:o.action,location:o.location}),l=a.useCallback(e=>{n===!1?c(e):a.startTransition(()=>c(e))},[n]);return a.useLayoutEffect(()=>o.listen(l),[o,l]),a.createElement(ot,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o,unstable_useTransitions:n})}function Jt({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,o]=a.useState({action:n.action,location:n.location}),s=a.useCallback(e=>{r===!1?o(e):a.startTransition(()=>o(e))},[r]);return a.useLayoutEffect(()=>n.listen(s),[n,s]),a.createElement(ot,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Jt.displayName=`unstable_HistoryRouter`;var Yt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xt=a.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:o,unstable_mask:s,state:c,target:l,to:u,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:p,...m},h){let{basename:g,navigator:_,unstable_useTransitions:v}=a.useContext(G),y=typeof u==`string`&&Yt.test(u),b=ge(u,g);u=b.to;let x=Ae(u,{relative:r}),S=Y(),C=null;if(s){let e=B(s,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);g!==`/`&&(e.pathname=e.pathname===`/`?g:V([g,e.pathname])),C=_.createHref(e)}let[w,T,E]=Bt(n,m),D=rn(u,{replace:o,unstable_mask:s,state:c,target:l,preventScrollReset:d,relative:r,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:v});function O(t){e&&e(t),t.defaultPrevented||D(t)}let k=!(b.isExternal||i),A=a.createElement(`a`,{...m,...E,href:(k?C:void 0)||b.absoluteURL||x,onClick:k?O:e,ref:Gt(h,T),target:l,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?a.createElement(a.Fragment,null,A,a.createElement(Vt,{page:x})):A});Xt.displayName=`Link`;var Zt=a.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:o,viewTransition:s,children:c,...l},u){let d=X(o,{relative:l.relative}),f=Y(),p=a.useContext(W),{navigator:m,basename:h}=a.useContext(G),g=p!=null&&mn(d)&&s===!0,_=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,v=f.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,_=_.toLowerCase()),y&&h&&(y=z(y,h)||y);let b=_!==`/`&&_.endsWith(`/`)?_.length-1:_.length,x=v===_||!r&&v.startsWith(_)&&v.charAt(b)===`/`,S=y!=null&&(y===_||!r&&y.startsWith(_)&&y.charAt(_.length)===`/`),C={isActive:x,isPending:S,isTransitioning:g},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,g?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return a.createElement(Xt,{...l,"aria-current":w,className:T,ref:u,style:E,to:o,viewTransition:s},typeof c==`function`?c(C):c)});Zt.displayName=`NavLink`;var Qt=a.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:s=lt,action:c,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:p,...m},h)=>{let{unstable_useTransitions:g}=a.useContext(G),_=sn(),v=cn(c,{relative:u}),y=s.toLowerCase()===`get`?`get`:`post`,b=typeof c==`string`&&Yt.test(c);return a.createElement(`form`,{ref:h,method:y,action:v,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,c=r?.getAttribute(`formmethod`)||s,m=()=>_(r||e.currentTarget,{fetcherKey:t,method:c,navigate:n,replace:i,state:o,relative:u,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:p});g&&n!==!1?a.startTransition(()=>m()):m()},...m,"data-discover":!b&&e===`render`?`true`:void 0})});Qt.displayName=`Form`;function $t({getKey:e,storageKey:t,...n}){let r=a.useContext(Rt),{basename:i}=a.useContext(G),o=Y(),s=Qe();fn({getKey:e,storageKey:t});let c=a.useMemo(()=>{if(!r||!e)return null;let t=dn(o,s,i,e);return t===o.key?null:t},[]);if(!r||r.isSpaMode)return null;let l=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return a.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${l})(${wt(JSON.stringify(t||ln))}, ${wt(JSON.stringify(c))})`}})}$t.displayName=`ScrollRestoration`;function en(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tn(e){let t=a.useContext(U);return p(t,en(e)),t}function nn(e){let t=a.useContext(W);return p(t,en(e)),t}function rn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:o,relative:s,viewTransition:c,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let d=Ne(),f=Y(),p=X(e,{relative:s});return a.useCallback(m=>{if(gt(m,t)){m.preventDefault();let t=n===void 0?v(f)===v(p):n,h=()=>d(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:o,relative:s,viewTransition:c,unstable_defaultShouldRevalidate:l});u?a.startTransition(()=>h()):h()}},[f,d,p,n,r,i,t,e,o,s,c,l,u])}var an=0,on=()=>`__${String(++an)}__`;function sn(){let{router:e}=tn(`useSubmit`),{basename:t}=a.useContext(G),n=Xe(),r=e.fetch,i=e.navigate;return a.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=xt(e,t);a.navigate===!1?await r(a.fetcherKey||on(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function cn(e,{relative:t}={}){let{basename:n}=a.useContext(G),r=a.useContext(q);p(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),o={...X(e||`.`,{relative:t})},s=Y();if(e==null){o.search=s.search;let e=new URLSearchParams(o.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();o.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(o.pathname=o.pathname===`/`?n:V([n,o.pathname])),v(o)}var ln=`react-router-scroll-positions`,un={};function dn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:z(e.pathname,n)||e.pathname},t)),i??=e.key,i}function fn({getKey:e,storageKey:t}={}){let{router:n}=tn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=nn(`useScrollRestoration`),{basename:o}=a.useContext(G),s=Y(),c=Qe(),l=Ze();a.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),pn(a.useCallback(()=>{if(l.state===`idle`){let t=dn(s,c,o,e);un[t]=window.scrollY}try{sessionStorage.setItem(t||ln,JSON.stringify(un))}catch(e){m(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[l.state,e,o,s,c,t])),typeof document<`u`&&(a.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||ln);e&&(un=JSON.parse(e))}catch{}},[t]),a.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(un,()=>window.scrollY,e?(t,n)=>dn(t,n,o,e):void 0);return()=>t&&t()},[n,o,e]),a.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(s.hash){let e=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{m(!1,`"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[s,r,i]))}function pn(e,t){let{capture:n}=t||{};a.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function mn(e,{relative:t}={}){let n=a.useContext(xe);p(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=tn(`useViewTransitionState`),i=X(e,{relative:t});if(!n.isTransitioning)return!1;let o=z(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=z(n.nextLocation.pathname,r)||n.nextLocation.pathname;return L(i.pathname,s)!=null||L(i.pathname,o)!=null}var hn=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),gn=n(((e,t)=>{t.exports=hn()})),Q=gn();function _n(){return(0,Q.jsx)(`div`,{className:`bg-animation`,children:[`fa-plus`,`fa-minus`,`fa-xmark`,`fa-divide`,`fa-percent`,`fa-calculator`,`fa-plus`,`fa-minus`,`fa-xmark`,`fa-divide`].map((e,t)=>(0,Q.jsx)(`i`,{className:`fa-solid ${e} math-shape`},t))})}var vn=7,yn=`
  .iabacus-page {
    padding-top: calc(var(--nav-h) + 20px);
    min-height: 100vh;
    font-family: "Plus Jakarta Sans", "DM Sans", sans-serif;
  }
  .iabacus-page .app-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px 60px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 28px;
    align-items: start;
  }
  @media (max-width: 920px) {
    .iabacus-page .app-container { grid-template-columns: 1fr; gap: 20px; }
  }

  /* --- Abacus Area --- */
  .iabacus-page .abacus-area {
    background: var(--card-bg, rgba(255, 255, 255, 0.85));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 36px 28px;
    border-radius: 28px;
    border: 1px solid var(--border-light, rgba(255, 255, 255, 0.7));
    box-shadow: 0 20px 50px -12px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    position: relative;
    overflow: hidden;
  }

  /* Ambient Glow Aura */
  .iabacus-page .abacus-area::before {
    content: "";
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 340px;
    height: 200px;
    background: radial-gradient(circle, color-mix(in srgb, var(--primary-blue, #0056b3) 15%, transparent) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  /* Floating Live Value Badge */
  .iabacus-page .live-value {
    font-family: "Sora", sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text-light, #475569);
    text-transform: uppercase;
    letter-spacing: 1.2px;
    background: linear-gradient(135deg, rgba(240, 246, 255, 0.9), rgba(255, 255, 255, 0.95));
    border: 1px solid var(--border, #cbd5e1);
    border-radius: 50px;
    padding: 8px 26px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255,255,255,0.8);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
  .iabacus-page .live-value span {
    color: var(--primary-blue, #0056b3);
    font-size: 1.9rem;
    font-weight: 800;
    text-shadow: 0 2px 10px color-mix(in srgb, var(--primary-blue, #0056b3) 25%, transparent);
  }

  /* Toggle Switch Wrap */
  .iabacus-page .show-value-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    width: 100%;
    margin-top: 4px;
    position: relative;
    z-index: 1;
  }
  .iabacus-page .switch-pill {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
  }
  .iabacus-page .switch-pill input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .iabacus-page .slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: var(--border, #cbd5e1);
    transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 34px;
  }
  .iabacus-page .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  .iabacus-page .switch-pill input:checked + .slider {
    background-color: var(--primary-blue, #0056b3);
    box-shadow: 0 0 10px color-mix(in srgb, var(--primary-blue, #0056b3) 40%, transparent);
  }
  .iabacus-page .switch-pill input:checked + .slider:before {
    transform: translateX(20px);
  }
  .iabacus-page .show-value-wrap label {
    margin: 0;
    cursor: pointer;
    color: var(--text-dark, #0f172a);
    font-size: 0.88rem;
    font-weight: 600;
    user-select: none;
  }

  /* --- Abacus Frame & Beads --- */
  #abacus-wrapper {
    width: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    padding: 12px 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    position: relative;
    z-index: 1;
  }
  #abacus-wrapper::-webkit-scrollbar { display: none; }

  .iabacus-page .abacus-container {
    display: inline-flex;
    background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
    border: 10px solid #0f172a;
    padding: 18px 20px;
    border-radius: 24px;
    box-shadow: inset 0 4px 20px rgba(0,0,0,0.6), 0 16px 40px -10px rgba(15, 23, 42, 0.35);
    gap: 12px;
    position: relative;
  }

  .iabacus-page .acol {
    width: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* Chrome metallic Rods */
  .iabacus-page .acol::before {
    content: "";
    position: absolute;
    top: 0; bottom: 44px;
    left: 50%;
    width: 6px;
    background: linear-gradient(90deg, #475569 0%, #cbd5e1 45%, #ffffff 55%, #64748b 100%);
    transform: translateX(-50%);
    z-index: 0;
    border-radius: 3px;
    box-shadow: 1px 0 3px rgba(0,0,0,0.3);
  }

  /* Decimal point marker — sits in the gap to the left of the first decimal column */
  .iabacus-page .acol.dec-start::after {
    content: "";
    position: absolute;
    left: -11px;
    bottom: 52px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #f59e0b;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.9);
    z-index: 3;
  }

  /* Column Value Circles at Bottom */
  .iabacus-page .col-val {
    display: none;
    margin-top: 14px;
    font-family: "Sora", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #ffffff;
    z-index: 2;
    background: var(--primary, var(--primary-blue, #0056b3));
    width: 32px;
    height: 32px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255,255,255,0.4);
    box-shadow: 0 4px 12px color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 40%, transparent);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .iabacus-page .show-values .col-val { display: flex; }

  /* Divider Beam */
  .iabacus-page .abeam {
    width: 100%;
    height: 14px;
    background: linear-gradient(180deg, #d97706 0%, #b45309 60%, #78350f 100%);
    z-index: 1;
    margin: 8px 0;
    border-radius: 3px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.4);
    position: relative;
  }
  .iabacus-page .abeam::after {
    content: "";
    position: absolute;
    top: 50%; left: 0; right: 0;
    height: 1px;
    background: rgba(255,255,255,0.25);
    transform: translateY(-50%);
  }

  /* Glossy 3D Beads */
  .iabacus-page .abead {
    width: 50px;
    height: 28px;
    border-radius: 14px;
    background: radial-gradient(circle at 35% 30%, #10b981 0%, #059669 60%, #047857 100%);
    border: 1.5px solid #047857;
    z-index: 2;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 3px 5px rgba(255,255,255,0.4), inset 0 -3px 5px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.25);
  }
  .iabacus-page .abead:hover {
    filter: brightness(1.15);
    transform: scale(1.04);
  }
  /* Active Golden Glowing Beads */
  .iabacus-page .abead.active {
    background: radial-gradient(circle at 35% 30%, #fde047 0%, #f59e0b 60%, #d97706 100%);
    border-color: #b45309;
    box-shadow: inset 0 3px 5px rgba(255,255,255,0.6), inset 0 -3px 5px rgba(0,0,0,0.25), 0 0 16px rgba(245, 158, 11, 0.75);
  }
  .iabacus-page .upper-deck {
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .iabacus-page .upper-deck .abead.active {
    transform: translateY(28px);
  }
  .iabacus-page .lower-deck {
    height: 184px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 6px;
  }
  .iabacus-page .lower-deck .abead.active {
    transform: translateY(-24px);
  }

  /* --- Side Panel & Setup Panel --- */
  .iabacus-page .side-panel,
  .iabacus-page .setup-panel {
    background: var(--card-bg, rgba(255, 255, 255, 0.85));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 30px;
    border-radius: 28px;
    border: 1px solid var(--border-light, rgba(255, 255, 255, 0.7));
    box-shadow: 0 20px 50px -12px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.6);
  }
  .iabacus-page .setup-panel {
    max-width: 520px;
    margin: 0 auto;
  }

  /* Question Box */
  .iabacus-page .question-box {
    background: linear-gradient(135deg, rgba(240, 246, 255, 0.8), rgba(255, 255, 255, 0.9));
    border: 2px solid var(--border, #cbd5e1);
    border-radius: 20px;
    padding: 24px;
    font-family: "Sora", sans-serif;
    font-size: 2.1rem;
    font-weight: 800;
    text-align: right;
    margin-bottom: 20px;
    box-shadow: inset 0 2px 6px rgba(0,0,0,0.02), 0 8px 24px -6px rgba(0,0,0,0.05);
  }
  .iabacus-page .seq-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 0;
    color: var(--dark-blue, #0f172a);
    transition: all 0.3s ease;
  }
  .iabacus-page .seq-item.step-done {
    color: var(--primary, var(--primary-blue, #0056b3)) !important;
    text-shadow: 0 0 10px color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 40%, transparent);
    font-weight: bold;
    transform: scale(1.02);
  }
  .iabacus-page .seq-item.step-done span {
    color: var(--primary, var(--primary-blue, #0056b3)) !important;
  }
  .iabacus-page .seq-line {
    border-top: 3px solid var(--primary, var(--primary-blue, #0056b3));
    margin: 12px 0 8px;
    opacity: 0.4;
    border-radius: 2px;
  }
  .iabacus-page .question-box input {
    width: 130px;
    text-align: right;
    font-size: inherit;
    font-family: inherit;
    font-weight: 800;
    color: var(--primary, var(--primary-blue, #0056b3));
    background: transparent;
    border: none;
    border-bottom: 3px solid var(--primary, var(--primary-blue, #0056b3));
    outline: none;
    padding: 0 4px;
    border-radius: 0;
    margin: 0;
    transition: border-color 0.2s;
  }

  /* Action Buttons */
  .iabacus-page .btn {
    width: 100%;
    padding: 15px 30px;
    border-radius: 50px;
    border: none;
    font-family: "Sora", sans-serif;
    font-weight: 800;
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 12px;
    display: block;
    position: relative;
    overflow: hidden;
  }
  .iabacus-page .btn-check {
    background: var(--primary, var(--primary-blue, #0056b3));
    color: white;
    box-shadow: 0 8px 24px -4px color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 40%, transparent);
  }
  .iabacus-page .btn-check:hover {
    transform: translateY(-3px) scale(1.01);
    background: color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 90%, black);
    box-shadow: 0 12px 32px -4px color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 55%, transparent);
  }
  .iabacus-page .btn-skip {
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(8px);
    color: var(--primary, var(--primary-blue, #0056b3));
    border: 2px solid var(--primary, var(--primary-blue, #0056b3));
  }
  .iabacus-page .btn-skip:hover {
    background: color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 8%, white);
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.08);
  }
  .iabacus-page .btn-next {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    box-shadow: 0 8px 24px -4px rgba(16, 185, 129, 0.4);
  }
  .iabacus-page .btn-next:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 12px 32px -4px rgba(16, 185, 129, 0.55);
  }

  .iabacus-page .feedback {
    font-family: "Sora", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    text-align: center;
    padding: 6px 0;
    min-height: 28px;
    letter-spacing: 0.3px;
  }

  .iabacus-page .start-btn {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 50px;
    background: var(--primary, var(--primary-blue, #0056b3));
    color: white;
    font-family: "Sora", sans-serif;
    font-weight: 800;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 0 8px 24px -4px color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 40%, transparent);
    margin-top: 20px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .iabacus-page .start-btn:hover {
    transform: translateY(-3px) scale(1.01);
    background: color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 90%, black);
    box-shadow: 0 12px 32px -4px color-mix(in srgb, var(--primary, var(--primary-blue, #0056b3)) 55%, transparent);
  }
  .iabacus-page .start-btn:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 12px 32px -4px color-mix(in srgb, var(--primary-blue, #0056b3) 55%, transparent);
  }

  .iabacus-page .mode-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }
  .iabacus-page .mode-card {
    border: 2px solid var(--border, #cbd5e1);
    border-radius: 14px;
    padding: 14px 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s ease;
    background: rgba(255, 255, 255, 0.6);
  }
  .iabacus-page .mode-card:hover {
    border-color: var(--primary-blue, #0056b3);
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }
  .iabacus-page .mode-card.selected {
    border-color: var(--primary-blue, #0056b3);
    background: color-mix(in srgb, var(--primary-blue, #0056b3) 10%, white);
    box-shadow: 0 4px 16px -2px color-mix(in srgb, var(--primary-blue, #0056b3) 25%, transparent);
  }
  .iabacus-page .mode-name {
    font-family: "Sora", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--dark-blue, #0f172a);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Setup Panel Branding & Form Fields */
  .iabacus-page .setup-badge {
    display: inline-block;
    padding: 6px 18px;
    border-radius: 50px;
    background: color-mix(in srgb, var(--primary-blue, #0056b3) 10%, white);
    border: 1px solid color-mix(in srgb, var(--primary-blue, #0056b3) 25%, transparent);
    color: var(--primary-blue, #0056b3);
    font-family: "Sora", sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 12px;
  }
  .iabacus-page .setup-title {
    font-family: "Sora", sans-serif;
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--dark-blue, #0f172a);
    letter-spacing: -0.5px;
    margin: 0 0 4px 0;
  }

  .iabacus-page .setup-field-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
  .iabacus-page .setup-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: left;
  }
  .iabacus-page .setup-field label {
    font-family: "Sora", sans-serif;
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--primary-blue, #0056b3);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin: 0;
  }
  .iabacus-page .setup-field input[type="number"],
  .iabacus-page .setup-field select {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1.5px solid var(--border, #cbd5e1);
    background: rgba(255, 255, 255, 0.95);
    font-family: "Sora", sans-serif;
    font-weight: 700;
    font-size: 1.05rem;
    color: var(--dark-blue, #0f172a);
    outline: none;
    transition: all 0.2s ease;
  }
  .iabacus-page .setup-field input[type="number"]:focus,
  .iabacus-page .setup-field select:focus {
    border-color: var(--primary-blue, #0056b3);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-blue, #0056b3) 15%, transparent);
    background: #ffffff;
  }

  /* --- Start Button --- */
  .iabacus-page .start-btn {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 50px;
    /* Added a fallback color in case --primary is undefined */
    background: var(--primary-blue, #0056b3); 
    color: white;
    font-family: "Sora", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 0 6px 20px color-mix(in srgb, var(--primary-blue) 35%, transparent);
    margin-top: 10px;
    transition: all 0.2s;
  }
  .iabacus-page .start-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px color-mix(in srgb, var(--primary-blue) 45%, transparent);
  }
`;function $({title:e,prefix:t,questionGenerator:n,settingsConfig:r}){let[i,o]=(0,a.useState)(`setup`),[s,c]=(0,a.useState)({}),[l,u]=(0,a.useState)(``),[d,f]=(0,a.useState)(0),[p,m]=(0,a.useState)(``),[h,g]=(0,a.useState)(``),[_,v]=(0,a.useState)(!1),[y,b]=(0,a.useState)(!0),[x,S]=(0,a.useState)(!1),[C,w]=(0,a.useState)(0),[T,E]=(0,a.useState)(`easy`),[D,O]=(0,a.useState)(-1),k=(0,a.useRef)(null),A=(0,a.useRef)(null),j=(0,a.useRef)(()=>{}),M=e=>`${t}_${e}`,N=(e,t)=>{let n=localStorage.getItem(M(e));return n===null?t:n},P=e=>{let t=r.modes?.[e];if(!t)return;let n={};r.fields.forEach(e=>{n[e.id]=String(t[e.id]===void 0?e.defaultValue:t[e.id])}),c(n),E(e)};(0,a.useEffect)(()=>{let e={};r.fields.forEach(t=>{e[t.id]=N(t.id,String(t.defaultValue))}),c(e),r.modes&&P(`easy`)},[]);let ee=()=>{Object.entries(s).forEach(([e,t])=>{localStorage.setItem(M(e),String(t))})},F=(e,t)=>{let n=s[e];if(n===void 0||n===``)return t;let r=parseFloat(n);return isNaN(r)?n:r};(0,a.useEffect)(()=>{if(i!==`game`)return;let e=k.current;if(!e)return;e.innerHTML=``;let t=document.createElement(`div`);t.className=`abacus-container`;for(let e=0;e<vn;e++){let e=document.createElement(`div`);e.className=`acol`;let n=document.createElement(`div`);n.className=`upper-deck`;let r=document.createElement(`div`);r.className=`abead`,r.dataset.type=`heaven`,r.onclick=()=>{r.classList.toggle(`active`),j.current()},n.appendChild(r);let i=document.createElement(`div`);i.className=`abeam`;let a=document.createElement(`div`);a.className=`lower-deck`;for(let e=0;e<4;e++){let t=document.createElement(`div`);t.className=`abead`,t.dataset.type=`earth`,t.onclick=()=>{let n=e+1,r=t.classList.contains(`active`)?n-1:n;a.querySelectorAll(`.abead`).forEach((e,t)=>{t<r?e.classList.add(`active`):e.classList.remove(`active`)}),j.current()},a.appendChild(t)}e.appendChild(n),e.appendChild(i),e.appendChild(a);let o=document.createElement(`div`);o.className=`col-val`,o.innerText=`0`,e.appendChild(o),t.appendChild(e)}e.appendChild(t),I()},[i]);let I=e=>{let t=e===void 0?C:e,n=A.current;if(!n||!k.current)return;let r=k.current.querySelectorAll(`.acol`),i=0;r.forEach(e=>{parseInt(e.dataset.pow);let t=e.querySelectorAll(`.abead[data-type='heaven'].active`).length,n=e.querySelectorAll(`.abead[data-type='earth'].active`).length,r=t*5+n,a=e.querySelector(`.col-val`);a&&(a.innerText=r),i=i*10+r});let a=i;t>0?(a=i/10**t,n.innerText=a.toFixed(t)):n.innerText=i;let o=document.getElementById(`user-answer`);o&&(o.value=t>0?a.toFixed(t):a);let s=document.querySelectorAll(`.side-panel .seq-item`);if(s.length>1){let e=0,t=[];if(s.length===2)t.push(d);else for(let n=0;n<s.length-1;n++){let r=s[n],i=r.querySelector(`span:first-child`),a=r.querySelector(`span:last-child`);if(a){let r=parseFloat(a.innerText.replace(/,/g,``)),o=i?i.innerText.trim():``;n===0||o===``?e=r:o===`+`?e+=r:o===`-`?e-=r:o===`×`||o===`x`||o===`*`||o===`×`?e*=r:(o===`÷`||o===`/`||o===`÷`)&&(e/=r),t.push(e)}}i===0?O(-1):t.forEach((e,t)=>{Math.abs(a-e)<1e-4&&O(e=>Math.max(e,t))})}};j.current=I,(0,a.useEffect)(()=>{let e=document.querySelectorAll(`.side-panel .seq-item`);e.forEach((t,n)=>{n<=D&&n<e.length-1?t.classList.add(`step-done`):t.classList.remove(`step-done`)});let t=document.getElementById(`user-answer`);t&&A.current&&(t.value=A.current.innerText)},[D,l]);let L=e=>{k.current&&(k.current.querySelectorAll(`.abead`).forEach(e=>e.classList.remove(`active`)),I(e))};(0,a.useEffect)(()=>{let e=k.current;if(!e)return;let t=e.querySelectorAll(`.acol`);t.forEach((e,n)=>{e.classList.toggle(`dec-start`,C>0&&n===t.length-C)})},[C,i]);let R=()=>{let e=n(s,F);u(e.html),f(e.answer),w(e.decPlaces||0),m(``),g(``),v(!1),b(!0),O(-1),L(e.decPlaces||0),setTimeout(()=>{let e=document.getElementById(`user-answer`);e&&e.focus()},100)},te=()=>{let e=document.getElementById(`user-answer`);if(!e)return;let t=e.value,n=parseFloat(t);if(t===``||isNaN(n)){m(`Please type your answer in the box.`),g(`var(--error)`);return}let r=d,i=n;if(C>0){let e=10**C;i=Math.round(n*e),r=Math.round(d*e)}i===r?(m(`Correct! Great job.`),g(`var(--success)`),b(!1),v(!0)):(m(`Not quite. Check your calculation again.`),g(`var(--error)`),setTimeout(()=>{let e=document.getElementById(`user-answer`);e&&(e.focus(),e.select())},50))};return(0,a.useEffect)(()=>{let e=e=>{e.key===`Enter`&&document.getElementById(`user-answer`)&&(_?(e.preventDefault(),R()):(e.preventDefault(),te()))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[_,d,s,C]),i===`setup`?(0,Q.jsxs)(`div`,{className:`iabacus-page`,children:[(0,Q.jsx)(`style`,{children:yn}),(0,Q.jsx)(_n,{}),(0,Q.jsx)(`div`,{style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,Q.jsxs)(`div`,{className:`setup-panel`,children:[(0,Q.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`20px`},children:[(0,Q.jsx)(`div`,{className:`setup-badge`,children:`Abacus Practice`}),(0,Q.jsx)(`div`,{className:`setup-title`,children:e})]}),r.modes&&(0,Q.jsx)(`div`,{className:`mode-grid`,style:{marginBottom:`20px`},children:[`easy`,`hard`,`beast`].map(e=>(0,Q.jsx)(`div`,{className:`mode-card ${T===e?`selected`:``}`,onClick:()=>P(e),children:(0,Q.jsx)(`div`,{className:`mode-name`,children:e.charAt(0).toUpperCase()+e.slice(1)})},e))}),(0,Q.jsx)(`div`,{className:`setup-field-group`,children:r.fields.map(e=>(0,Q.jsxs)(`div`,{className:`setup-field`,children:[(0,Q.jsx)(`label`,{children:e.label}),e.type===`select`?(0,Q.jsx)(`select`,{value:s[e.id]||``,onChange:t=>c(n=>({...n,[e.id]:t.target.value})),children:e.options?.map(e=>(0,Q.jsx)(`option`,{value:e.value,children:e.label},e.value))}):(0,Q.jsx)(`input`,{type:`number`,value:s[e.id]||``,min:e.min,max:e.max,onChange:t=>c(n=>({...n,[e.id]:t.target.value}))})]},e.id))}),(0,Q.jsx)(`button`,{className:`start-btn`,onClick:()=>{ee(),o(`game`),setTimeout(()=>R(),100)},children:`Start Practice`})]})},`setup`)]}):(0,Q.jsxs)(`div`,{className:`iabacus-page`,children:[(0,Q.jsx)(`style`,{children:yn}),(0,Q.jsx)(_n,{}),(0,Q.jsxs)(`div`,{className:`app-container`,children:[(0,Q.jsxs)(`div`,{className:`abacus-area`,children:[(0,Q.jsx)(`div`,{ref:k,id:`abacus-wrapper`,className:x?`show-values`:``}),(0,Q.jsxs)(`div`,{className:`live-value`,id:`live-value-container`,style:{display:x?`flex`:`none`},children:[`Abacus Value:`,(0,Q.jsx)(`span`,{ref:A,children:`0`})]}),(0,Q.jsxs)(`div`,{className:`show-value-wrap`,children:[(0,Q.jsxs)(`label`,{className:`switch-pill`,children:[(0,Q.jsx)(`input`,{type:`checkbox`,id:`show-value-cb`,checked:x,onChange:e=>S(e.target.checked)}),(0,Q.jsx)(`span`,{className:`slider round`})]}),(0,Q.jsx)(`label`,{htmlFor:`show-value-cb`,children:`Show Abacus Value`})]})]}),(0,Q.jsxs)(`div`,{className:`side-panel`,children:[l&&(0,Q.jsx)(`div`,{className:`question-box`,dangerouslySetInnerHTML:{__html:l}}),y&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`button`,{className:`btn btn-check`,onClick:te,children:`CHECK ANSWER`}),(0,Q.jsx)(`button`,{className:`btn btn-skip`,onClick:R,children:`SKIP QUESTION`})]}),_&&(0,Q.jsx)(`button`,{className:`btn btn-next`,onClick:R,children:`NEXT QUESTION`}),(0,Q.jsx)(`div`,{className:`feedback`,style:{color:h},children:p}),(0,Q.jsx)(`button`,{className:`btn btn-skip`,onClick:()=>{o(`setup`),u(``)},style:{marginTop:`12px`},children:`← Back to Settings`})]})]},`game`)]})}var bn=e({default:()=>Cn});function xn(e,t){let n=parseInt(t(`digits`,2))||2,r=parseInt(t(`rows`,5))||5,i=0,a=``;for(let e=0;e<r;e++){let t=10**(n-1),r=10**n-1;n===1&&(t=1);let o=Math.floor(Math.random()*(r-t+1))+t,s;e===0?(s=`&nbsp;`,i+=o):Math.random()>.5&&i-o>=0?(s=`-`,i-=o):(s=`+`,i+=o),a+=`
      <div class="seq-item">
        <span style="color: var(--text-dark); font-weight: bold;">${s}</span>
        <span>${o}</span>
      </div>`}return a+=`<div class="seq-line"></div>
    <div class="seq-item" style="color: var(--text-dark); align-items: center;">
      <span>=</span>
      <input type="number" id="user-answer" placeholder="?" autocomplete="off">
    </div>`,{html:a,answer:i,decPlaces:0}}var Sn={fields:[{id:`digits`,label:`Digits (1-4)`,defaultValue:2,min:1,max:4},{id:`rows`,label:`Rows (Numbers)`,defaultValue:5,min:2,max:20}],modes:{easy:{digits:1,rows:3},hard:{digits:2,rows:6},beast:{digits:3,rows:10}}};function Cn(){return(0,Q.jsx)($,{title:`Add & Sub (Abacus)`,prefix:`iabacus-addsub`,questionGenerator:xn,settingsConfig:Sn})}var wn=e({default:()=>Dn});function Tn(e,t){let n=parseInt(t(`digits`,2))||2,r=parseInt(t(`rows`,5))||5,i=0,a=``;for(let e=0;e<r;e++){let t=10**(n-1),r=10**n-1;n===1&&(t=1);let o=Math.floor(Math.random()*(r-t+1))+t;i+=o,a+=`
      <div class="seq-item">
        <span style="color: var(--text-dark); font-weight: bold;">${e===0?`&nbsp;`:`+`}</span>
        <span>${o}</span>
      </div>`}return a+=`<div class="seq-line"></div>
    <div class="seq-item" style="color: var(--text-dark); align-items: center;">
      <span>=</span>
      <input type="number" id="user-answer" placeholder="?" autocomplete="off">
    </div>`,{html:a,answer:i,decPlaces:0}}var En={fields:[{id:`digits`,label:`Digits (1-4)`,defaultValue:2,min:1,max:4},{id:`rows`,label:`Rows (Numbers)`,defaultValue:5,min:2,max:20}],modes:{easy:{digits:1,rows:3},hard:{digits:2,rows:5},beast:{digits:3,rows:8}}};function Dn(){return(0,Q.jsx)($,{title:`Addition (Abacus)`,prefix:`iabacus-add`,questionGenerator:Tn,settingsConfig:En})}var On=e({default:()=>jn});function kn(e,t){let n=parseInt(t(`digits`,2))||2,r=parseInt(t(`rows`,5))||5,i=parseInt(t(`decPlaces`,2))||2,a=0,o=``;for(let e=0;e<r;e++){let t=10**(n+i-1),r=10**(n+i)-1;t>=r&&(t=10**2,r=10**3-1);let s=Math.floor(Math.random()*(r-t+1))+t;a+=s;let c=(s/10**i).toFixed(i);o+=`
      <div class="seq-item">
        <span style="color: var(--text-dark); font-weight: bold;">${e===0?`&nbsp;`:`+`}</span>
        <span>${c}</span>
      </div>`}let s=a/10**i;return o+=`<div class="seq-line"></div>
    <div class="seq-item" style="color: var(--text-dark); align-items: center;">
      <span>=</span>
      <input type="number" step="any" id="user-answer" placeholder="?" autocomplete="off">
    </div>`,{html:o,answer:s,decPlaces:i}}var An={fields:[{id:`digits`,label:`Whole Digits`,defaultValue:2,min:1,max:4},{id:`rows`,label:`Rows`,defaultValue:5,min:2,max:20},{id:`decPlaces`,label:`Decimal Places`,defaultValue:2,min:1,max:4}],modes:{easy:{digits:1,rows:3,decPlaces:1},hard:{digits:2,rows:5,decPlaces:2},beast:{digits:2,rows:8,decPlaces:3}}};function jn(){return(0,Q.jsx)($,{title:`Decimals (Abacus)`,prefix:`iabacus-decimals`,questionGenerator:kn,settingsConfig:An})}var Mn=e({default:()=>Fn});function Nn(e,t){let n=parseInt(t(`dividendDigits`,3))||3,r=parseInt(t(`divisorDigits`,1))||1;r>n&&(r=n);let i=10**(r-1),a=10**r-1,o=r===1?2:i,s=Math.floor(Math.random()*(a-o+1))+o,c=10**(n-1),l=10**n-1,u=Math.ceil(c/s),d=Math.floor(l/s);u>d&&(u=d);let f=Math.floor(Math.random()*(d-u+1))+u;return{html:`
    <div class="seq-item">
      <span style="color: transparent;">÷</span>
      <span>${(f*s).toLocaleString()}</span>
    </div>
    <div class="seq-item">
      <span style="color: var(--text-dark); font-weight: bold;">÷</span>
      <span>${s.toLocaleString()}</span>
    </div>
    <div class="seq-line"></div>
    <div class="seq-item" style="color: var(--text-dark); align-items: center;">
      <span>=</span>
      <input type="number" id="user-answer" placeholder="?" autocomplete="off">
    </div>`,answer:f,decPlaces:0}}var Pn={fields:[{id:`dividendDigits`,label:`Dividend Digits`,defaultValue:3,min:2,max:6},{id:`divisorDigits`,label:`Divisor Digits`,defaultValue:1,min:1,max:4}],modes:{easy:{dividendDigits:2,divisorDigits:1},hard:{dividendDigits:3,divisorDigits:2},beast:{dividendDigits:4,divisorDigits:2}}};function Fn(){return(0,Q.jsx)($,{title:`Division (Abacus)`,prefix:`iabacus-division`,questionGenerator:Nn,settingsConfig:Pn})}var In=e({default:()=>Rn}),Ln=[{path:`/interactive-abacus-addition`,label:`Addition`,icon:`fa-plus`,color:`#f59e0b`},{path:`/interactive-abacus-addsub`,label:`Add & Sub`,icon:`fa-plus-minus`,color:`#0ea5e9`},{path:`/interactive-abacus-multiply`,label:`Multiply`,icon:`fa-xmark`,color:`#8b5cf6`},{path:`/interactive-abacus-division`,label:`Division`,icon:`fa-divide`,color:`#10b981`},{path:`/interactive-abacus-decimals`,label:`Decimals`,icon:`fa-circle`,color:`#f43f5e`},{path:`/interactive-abacus-sqroots`,label:`Square Roots`,icon:`fa-square-root-variable`,color:`#6366f1`},{path:`/interactive-abacus-lcmhcf`,label:`LCM & HCF`,icon:`fa-layer-group`,color:`#f59e0b`},{path:`/interactive-abacus-percentage`,label:`Percentage`,icon:`fa-percent`,color:`#0ea5e9`}];function Rn(){let e=Ne();return(0,Q.jsxs)(`div`,{className:`page-wrap iabacus-page`,style:{paddingTop:`calc(var(--nav-h) + 20px)`,width:`100%`,display:`flex`,flexDirection:`column`,gap:`24px`,paddingBottom:`60px`,boxSizing:`border-box`},children:[(0,Q.jsx)(_n,{}),(0,Q.jsxs)(`div`,{className:`iabacus-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,Q.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Interactive Abacus`}),(0,Q.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`Interactive Abacus Tools`}),(0,Q.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:`Select a tool below to practice arithmetic operations with a visual abacus.`})]}),(0,Q.jsx)(`div`,{className:`iabacus-grid`,children:Ln.map(t=>(0,Q.jsxs)(`div`,{onClick:()=>e(t.path),className:`iabacus-card`,children:[(0,Q.jsx)(`div`,{className:`iabacus-card-icon`,style:{width:`48px`,height:`48px`,borderRadius:`14px`,background:t.color+`18`,color:t.color,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.4rem`,flexShrink:0},children:(0,Q.jsx)(`i`,{className:`fa-solid ${t.icon}`})}),(0,Q.jsxs)(`div`,{className:`iabacus-card-info`,style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,Q.jsx)(`h3`,{style:{fontSize:`1.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0,fontFamily:`Sora, sans-serif`},children:t.label}),(0,Q.jsxs)(`p`,{className:`iabacus-card-desc`,children:[`Interactive visual `,t.label.toLowerCase(),` practice.`]})]})]},t.label))})]})}var zn=e({default:()=>Wn});function Bn(e,t){return t?Bn(t,e%t):e}function Vn(e,t){return e*t/Bn(e,t)}function Hn(e,t){let n=t(`operation`,`lcm`),r=parseInt(t(`digits`,2))||2,i=10**(r-1),a=10**r-1;r===1&&(i=2);let o=Math.floor(Math.random()*(a-i+1))+i,s=Math.floor(Math.random()*(a-i+1))+i;o===s&&(s=s+1>a?s-1:s+1);let c=n===`lcm`?`LCM`:`HCF`,l=n===`lcm`?Vn(o,s):Bn(o,s);return{html:`
    <div class="question-label">Find the ${c} of:</div>
    <div class="seq-item" style="font-size: 2.2rem; justify-content: center; gap: 20px;">
      <span style="color: var(--primary);">${o.toLocaleString()}</span>
      <span style="color: var(--text-dark);">&amp;</span>
      <span style="color: var(--primary);">${s.toLocaleString()}</span>
    </div>
    <div class="seq-line" style="margin-top: 30px;"></div>
    <div class="seq-item" style="color: var(--text-dark); justify-content: center; align-items: center;">
      <span>=</span>
      <input type="number" id="user-answer" placeholder="?" autocomplete="off" style="text-align: center; margin-left: 10px;">
    </div>`,answer:l,decPlaces:0}}var Un={fields:[{id:`operation`,label:`Operation`,type:`select`,defaultValue:`lcm`,options:[{value:`lcm`,label:`LCM`},{value:`hcf`,label:`HCF`}]},{id:`digits`,label:`Number Size (Digits)`,defaultValue:2,min:1,max:4}],modes:{easy:{operation:`lcm`,digits:1},hard:{operation:`lcm`,digits:2},beast:{operation:`hcf`,digits:2}}};function Wn(){return(0,Q.jsx)($,{title:`LCM & HCF (Abacus)`,prefix:`iabacus-lcmhcf`,questionGenerator:Hn,settingsConfig:Un})}var Gn=e({default:()=>Jn});function Kn(e,t){let n=parseInt(t(`topDigits`,2))||2,r=parseInt(t(`bottomDigits`,1))||1,i=10**(n-1),a=10**n-1;n===1&&(i=1);let o=10**(r-1),s=10**r-1;r===1&&(o=1);let c=Math.floor(Math.random()*(a-i+1))+i,l=Math.floor(Math.random()*(s-o+1))+o,u=c*l;return{html:`
    <div class="seq-item">
      <span style="color: transparent;">&times;</span>
      <span>${c.toLocaleString()}</span>
    </div>
    <div class="seq-item">
      <span style="color: var(--text-dark); font-weight: bold;">&times;</span>
      <span>${l.toLocaleString()}</span>
    </div>
    <div class="seq-line"></div>
    <div class="seq-item" style="color: var(--text-dark); align-items: center;">
      <span>=</span>
      <input type="number" id="user-answer" placeholder="?" autocomplete="off">
    </div>`,answer:u,decPlaces:0}}var qn={fields:[{id:`topDigits`,label:`Top Digits`,defaultValue:2,min:1,max:5},{id:`bottomDigits`,label:`Bottom Digits`,defaultValue:1,min:1,max:4}],modes:{easy:{topDigits:1,bottomDigits:1},hard:{topDigits:2,bottomDigits:2},beast:{topDigits:3,bottomDigits:2}}};function Jn(){return(0,Q.jsx)($,{title:`Multiply (Abacus)`,prefix:`iabacus-multiply`,questionGenerator:Kn,settingsConfig:qn})}var Yn=e({default:()=>$n});function Xn(e,t){return t?Xn(t,e%t):e}function Zn(e,t){let n=parseInt(t(`baseDigits`,3))||3,r=[5,10,15,20,25,30,40,45,50,60,70,75,80,90],i=r[Math.floor(Math.random()*r.length)],a=100/Xn(i,100),o=10**(n-1),s=10**n-1;n===1&&(o=2);let c=Math.ceil(o/a),l=Math.floor(s/a);c>l&&(c=1,l=5);let u=(Math.floor(Math.random()*(l-c+1))+c)*a,d=i*u/100;return{html:`
    <div class="question-label">Calculate:</div>
    <div class="seq-item" style="font-size: 2.2rem; justify-content: center; gap: 15px;">
      <span style="color: var(--primary); font-weight: 900;">${i}%</span>
      <span style="color: var(--text-dark); font-size: 1.5rem; align-self: center;">of</span>
      <span style="color: var(--primary); font-weight: 900;">${u.toLocaleString()}</span>
    </div>
    <div class="seq-line" style="margin-top: 30px;"></div>
    <div class="seq-item" style="color: var(--text-dark); justify-content: center; align-items: center;">
      <span>=</span>
      <input type="number" id="user-answer" placeholder="?" autocomplete="off" style="text-align: center; margin-left: 10px;">
    </div>`,answer:d,decPlaces:0}}var Qn={fields:[{id:`baseDigits`,label:`Base Digits`,defaultValue:3,min:1,max:5}],modes:{easy:{baseDigits:2},hard:{baseDigits:3},beast:{baseDigits:4}}};function $n(){return(0,Q.jsx)($,{title:`Percentage (Abacus)`,prefix:`iabacus-percentage`,questionGenerator:Zn,settingsConfig:Qn})}var er=e({default:()=>rr});function tr(e,t){let n=parseInt(t(`rootDigits`,2))||2,r=10**(n-1),i=10**n-1;n===1&&(r=2);let a=Math.floor(Math.random()*(i-r+1))+r;return{html:`
    <div class="seq-item" style="font-size: 2.5rem; justify-content: center; margin-top: 40px;">
      <span style="color: var(--primary); margin-right: 10px;">&#8730;</span>
      <span>${(a*a).toLocaleString()}</span>
    </div>
    <div class="seq-line" style="margin-top: 40px;"></div>
    <div class="seq-item" style="color: var(--text-dark); justify-content: center; align-items: center;">
      <span>=</span>
      <input type="number" id="user-answer" placeholder="?" autocomplete="off" style="text-align: center; margin-left: 10px;">
    </div>`,answer:a,decPlaces:0}}var nr={fields:[{id:`rootDigits`,label:`Root Digits`,defaultValue:2,min:1,max:4}],modes:{easy:{rootDigits:1},hard:{rootDigits:2},beast:{rootDigits:3}}};function rr(){return(0,Q.jsx)($,{title:`Square Roots (Abacus)`,prefix:`iabacus-sqroots`,questionGenerator:tr,settingsConfig:nr})}export{Ne as _,In as a,i as b,wn as c,gn as d,qt as f,Y as g,st as h,zn as i,bn as l,at as m,Yn as n,Mn as o,it as p,Gn as r,On as s,er as t,_n as u,Fe as v,l as y};