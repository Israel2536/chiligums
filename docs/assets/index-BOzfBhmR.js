(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const ac=()=>{};var Wi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},uc=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const i=r[e++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[e++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[e++],u=r[e++],l=r[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(d>>10)),t[n++]=String.fromCharCode(56320+(d&1023))}else{const o=r[e++],u=r[e++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const o=r[i],u=i+1<r.length,l=u?r[i+1]:0,d=i+2<r.length,f=d?r[i+2]:0,_=o>>2,w=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,P=f&63;d||(P=64,u||(R=64)),n.push(e[_],e[w],e[R],e[P])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(ua(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):uc(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const o=e[r.charAt(i++)],l=i<r.length?e[r.charAt(i)]:0;++i;const f=i<r.length?e[r.charAt(i)]:64;++i;const w=i<r.length?e[r.charAt(i)]:64;if(++i,o==null||l==null||f==null||w==null)throw new cc;const R=o<<2|l>>4;if(n.push(R),f!==64){const P=l<<4&240|f>>2;if(n.push(P),w!==64){const x=f<<6&192|w;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class cc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lc=function(r){const t=ua(r);return ca.encodeByteArray(t,!0)},Wn=function(r){return lc(r).replace(/\./g,"")},hc=function(r){try{return ca.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=()=>dc().__FIREBASE_DEFAULTS__,pc=()=>{if(typeof process>"u"||typeof Wi>"u")return;const r=Wi.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},mc=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&hc(r[1]);return t&&JSON.parse(t)},ws=()=>{try{return ac()||fc()||pc()||mc()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},gc=r=>ws()?.emulatorHosts?.[r],_c=r=>{const t=gc(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},la=()=>ws()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ec(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Wn(JSON.stringify(e)),Wn(JSON.stringify(u)),""].join(".")}const rn={};function vc(){const r={prod:[],emulator:[]};for(const t of Object.keys(rn))rn[t]?r.emulator.push(t):r.prod.push(t);return r}function Ic(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Yi=!1;function wc(r,t){if(typeof window>"u"||typeof document>"u"||!As(window.location.host)||rn[r]===t||rn[r]||Yi)return;rn[r]=t;function e(R){return`__firebase__banner__${R}`}const n="__firebase__banner",o=vc().prod.length>0;function u(){const R=document.getElementById(n);R&&R.remove()}function l(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function d(R,P){R.setAttribute("width","24"),R.setAttribute("id",P),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function f(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Yi=!0,u()},R}function _(R,P){R.setAttribute("id",P),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function w(){const R=Ic(n),P=e("text"),x=document.getElementById(P)||document.createElement("span"),O=e("learnmore"),D=document.getElementById(O)||document.createElement("a"),G=e("preprendIcon"),$=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const K=R.element;l(K),_(D,O);const _t=f();d($,G),K.append($,x,D,_t),document.body.appendChild(K)}o?(x.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){const r=ws()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cc(){return!Rc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sc(){try{return typeof indexedDB=="object"}catch{return!1}}function bc(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="FirebaseError";class xe extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Pc,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?Vc(o,n):"Error",l=`${this.serviceName}: ${u} (${i}).`;return new xe(i,l,n)}}function Vc(r,t){return r.replace(Dc,(e,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const Dc=/\{\$([^}]+)}/g;function Yn(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const i of e){if(!n.includes(i))return!1;const o=r[i],u=t[i];if(Xi(o)&&Xi(u)){if(!Yn(o,u))return!1}else if(o!==u)return!1}for(const i of n)if(!e.includes(i))return!1;return!0}function Xi(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(r){return r&&r._delegate?r._delegate:r}class cn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new yc;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Oc(t))try{this.getOrInitializeService({instanceIdentifier:ue})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ue){return this.instances.has(t)}getOptions(t=ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&u.resolve(i)}return i}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(n)??new Set;i.add(t),this.onInitCallbacks.set(n,i);const o=this.instances.get(n);return o&&t(o,n),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:xc(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=ue){return this.component?this.component.multipleInstances?t:ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xc(r){return r===ue?void 0:r}function Oc(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new kc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(q||(q={}));const Lc={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Fc=q.INFO,Bc={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Uc=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),i=Bc[t];if(i)console[i](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class da{constructor(t){this.name=t,this._logLevel=Fc,this._logHandler=Uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const qc=(r,t)=>t.some(e=>r instanceof e);let Ji,Zi;function jc(){return Ji||(Ji=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $c(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fa=new WeakMap,Jr=new WeakMap,pa=new WeakMap,jr=new WeakMap,Rs=new WeakMap;function zc(r){const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",u)},o=()=>{e(Ht(r.result)),i()},u=()=>{n(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&fa.set(e,r)}).catch(()=>{}),Rs.set(t,r),t}function Hc(r){if(Jr.has(r))return;const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",u),r.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",u),r.addEventListener("abort",u)});Jr.set(r,t)}let Zr={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Jr.get(r);if(t==="objectStoreNames")return r.objectStoreNames||pa.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ht(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Gc(r){Zr=r(Zr)}function Kc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call($r(this),t,...e);return pa.set(n,t.sort?t.sort():[t]),Ht(n)}:$c().includes(r)?function(...t){return r.apply($r(this),t),Ht(fa.get(this))}:function(...t){return Ht(r.apply($r(this),t))}}function Qc(r){return typeof r=="function"?Kc(r):(r instanceof IDBTransaction&&Hc(r),qc(r,jc())?new Proxy(r,Zr):r)}function Ht(r){if(r instanceof IDBRequest)return zc(r);if(jr.has(r))return jr.get(r);const t=Qc(r);return t!==r&&(jr.set(r,t),Rs.set(t,r)),t}const $r=r=>Rs.get(r);function Wc(r,t,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const u=indexedDB.open(r,t),l=Ht(u);return n&&u.addEventListener("upgradeneeded",d=>{n(Ht(u.result),d.oldVersion,d.newVersion,Ht(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Yc=["get","getKey","getAll","getAllKeys","count"],Xc=["put","add","delete","clear"],zr=new Map;function to(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(zr.get(t))return zr.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,i=Xc.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Yc.includes(e)))return;const o=async function(u,...l){const d=this.transaction(u,i?"readwrite":"readonly");let f=d.store;return n&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),i&&d.done]))[0]};return zr.set(t,o),o}Gc(r=>({...r,get:(t,e,n)=>to(t,e)||r.get(t,e,n),has:(t,e)=>!!to(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Zc(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Zc(r){return r.getComponent()?.type==="VERSION"}const ts="@firebase/app",eo="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new da("@firebase/app"),tl="@firebase/app-compat",el="@firebase/analytics-compat",nl="@firebase/analytics",rl="@firebase/app-check-compat",sl="@firebase/app-check",il="@firebase/auth",ol="@firebase/auth-compat",al="@firebase/database",ul="@firebase/data-connect",cl="@firebase/database-compat",ll="@firebase/functions",hl="@firebase/functions-compat",dl="@firebase/installations",fl="@firebase/installations-compat",pl="@firebase/messaging",ml="@firebase/messaging-compat",gl="@firebase/performance",_l="@firebase/performance-compat",yl="@firebase/remote-config",El="@firebase/remote-config-compat",Tl="@firebase/storage",vl="@firebase/storage-compat",Il="@firebase/firestore",wl="@firebase/ai",Al="@firebase/firestore-compat",Rl="firebase",Cl="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]",Sl={[ts]:"fire-core",[tl]:"fire-core-compat",[nl]:"fire-analytics",[el]:"fire-analytics-compat",[sl]:"fire-app-check",[rl]:"fire-app-check-compat",[il]:"fire-auth",[ol]:"fire-auth-compat",[al]:"fire-rtdb",[ul]:"fire-data-connect",[cl]:"fire-rtdb-compat",[ll]:"fire-fn",[hl]:"fire-fn-compat",[dl]:"fire-iid",[fl]:"fire-iid-compat",[pl]:"fire-fcm",[ml]:"fire-fcm-compat",[gl]:"fire-perf",[_l]:"fire-perf-compat",[yl]:"fire-rc",[El]:"fire-rc-compat",[Tl]:"fire-gcs",[vl]:"fire-gcs-compat",[Il]:"fire-fst",[Al]:"fire-fst-compat",[wl]:"fire-vertex","fire-js":"fire-js",[Rl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Map,bl=new Map,ns=new Map;function no(r,t){try{r.container.addComponent(t)}catch(e){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Jn(r){const t=r.name;if(ns.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;ns.set(t,r);for(const e of Xn.values())no(e,r);for(const e of bl.values())no(e,r);return!0}function Pl(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Vl(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new ha("app","Firebase",Dl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=Cl;function ma(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:es,automaticDataCollectionEnabled:!0,...t},i=n.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(e||(e=la()),!e)throw Gt.create("no-options");const o=Xn.get(i);if(o){if(Yn(e,o.options)&&Yn(n,o.config))return o;throw Gt.create("duplicate-app",{appName:i})}const u=new Mc(i);for(const d of ns.values())u.addComponent(d);const l=new Nl(e,n,u);return Xn.set(i,l),l}function xl(r=es){const t=Xn.get(r);if(!t&&r===es&&la())return ma();if(!t)throw Gt.create("no-app",{appName:r});return t}function ve(r,t,e){let n=Sl[r]??r;e&&(n+=`-${e}`);const i=n.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const u=[`Unable to register library "${n}" with version "${t}":`];i&&u.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(u.join(" "));return}Jn(new cn(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="firebase-heartbeat-database",Ml=1,ln="firebase-heartbeat-store";let Hr=null;function ga(){return Hr||(Hr=Wc(Ol,Ml,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(ln)}catch(e){console.warn(e)}}}}).catch(r=>{throw Gt.create("idb-open",{originalErrorMessage:r.message})})),Hr}async function Ll(r){try{const e=(await ga()).transaction(ln),n=await e.objectStore(ln).get(_a(r));return await e.done,n}catch(t){if(t instanceof xe)Ot.warn(t.message);else{const e=Gt.create("idb-get",{originalErrorMessage:t?.message});Ot.warn(e.message)}}}async function ro(r,t){try{const n=(await ga()).transaction(ln,"readwrite");await n.objectStore(ln).put(t,_a(r)),await n.done}catch(e){if(e instanceof xe)Ot.warn(e.message);else{const n=Gt.create("idb-set",{originalErrorMessage:e?.message});Ot.warn(n.message)}}}function _a(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=1024,Bl=30;class Ul{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jl(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=so();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>Bl){const i=$l(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Ot.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=so(),{heartbeatsToSend:e,unsentEntries:n}=ql(this._heartbeatsCache.heartbeats),i=Wn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ot.warn(t),""}}}function so(){return new Date().toISOString().substring(0,10)}function ql(r,t=Fl){const e=[];let n=r.slice();for(const i of r){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),io(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),io(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class jl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sc()?bc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ll(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return ro(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return ro(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function io(r){return Wn(JSON.stringify({version:2,heartbeats:r})).length}function $l(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(r){Jn(new cn("platform-logger",t=>new Jc(t),"PRIVATE")),Jn(new cn("heartbeat",t=>new Ul(t),"PRIVATE")),ve(ts,eo,r),ve(ts,eo,"esm2020"),ve("fire-js","")}zl("");var Hl="firebase",Gl="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve(Hl,Gl,"app");var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,ya;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function g(){}g.prototype=p.prototype,E.F=p.prototype,E.prototype=new g,E.prototype.constructor=E,E.D=function(T,y,I){for(var m=Array(arguments.length-2),It=2;It<arguments.length;It++)m[It-2]=arguments[It];return p.prototype[y].apply(T,m)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,g){g||(g=0);const T=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)T[y]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(y=0;y<16;++y)T[y]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=E.g[0],g=E.g[1],y=E.g[2];let I=E.g[3],m;m=p+(I^g&(y^I))+T[0]+3614090360&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(y^p&(g^y))+T[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=y+(g^I&(p^g))+T[2]+606105819&4294967295,y=I+(m<<17&4294967295|m>>>15),m=g+(p^y&(I^p))+T[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(I^g&(y^I))+T[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(y^p&(g^y))+T[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=y+(g^I&(p^g))+T[6]+2821735955&4294967295,y=I+(m<<17&4294967295|m>>>15),m=g+(p^y&(I^p))+T[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(I^g&(y^I))+T[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(y^p&(g^y))+T[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=y+(g^I&(p^g))+T[10]+4294925233&4294967295,y=I+(m<<17&4294967295|m>>>15),m=g+(p^y&(I^p))+T[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(I^g&(y^I))+T[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(y^p&(g^y))+T[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=y+(g^I&(p^g))+T[14]+2792965006&4294967295,y=I+(m<<17&4294967295|m>>>15),m=g+(p^y&(I^p))+T[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=p+(y^I&(g^y))+T[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^y&(p^g))+T[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(I^p))+T[11]+643717713&4294967295,y=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(y^I))+T[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^I&(g^y))+T[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^y&(p^g))+T[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(I^p))+T[15]+3634488961&4294967295,y=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(y^I))+T[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^I&(g^y))+T[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^y&(p^g))+T[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(I^p))+T[3]+4107603335&4294967295,y=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(y^I))+T[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(y^I&(g^y))+T[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^y&(p^g))+T[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=y+(p^g&(I^p))+T[7]+1735328473&4294967295,y=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(y^I))+T[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=p+(g^y^I)+T[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^y)+T[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=y+(I^p^g)+T[11]+1839030562&4294967295,y=I+(m<<16&4294967295|m>>>16),m=g+(y^I^p)+T[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^I)+T[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^y)+T[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=y+(I^p^g)+T[7]+4139469664&4294967295,y=I+(m<<16&4294967295|m>>>16),m=g+(y^I^p)+T[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^I)+T[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^y)+T[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=y+(I^p^g)+T[3]+3572445317&4294967295,y=I+(m<<16&4294967295|m>>>16),m=g+(y^I^p)+T[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(g^y^I)+T[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^y)+T[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=y+(I^p^g)+T[15]+530742520&4294967295,y=I+(m<<16&4294967295|m>>>16),m=g+(y^I^p)+T[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=p+(y^(g|~I))+T[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~y))+T[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=y+(p^(I|~g))+T[14]+2878612391&4294967295,y=I+(m<<15&4294967295|m>>>17),m=g+(I^(y|~p))+T[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~I))+T[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~y))+T[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=y+(p^(I|~g))+T[10]+4293915773&4294967295,y=I+(m<<15&4294967295|m>>>17),m=g+(I^(y|~p))+T[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~I))+T[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~y))+T[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=y+(p^(I|~g))+T[6]+2734768916&4294967295,y=I+(m<<15&4294967295|m>>>17),m=g+(I^(y|~p))+T[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=p+(y^(g|~I))+T[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~y))+T[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=y+(p^(I|~g))+T[2]+718787259&4294967295,y=I+(m<<15&4294967295|m>>>17),m=g+(I^(y|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.v=function(E,p){p===void 0&&(p=E.length);const g=p-this.blockSize,T=this.C;let y=this.h,I=0;for(;I<p;){if(y==0)for(;I<=g;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(T[y++]=E.charCodeAt(I++),y==this.blockSize){i(this,T),y=0;break}}else for(;I<p;)if(T[y++]=E[I++],y==this.blockSize){i(this,T),y=0;break}}this.h=y,this.o+=p},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;p=this.o*8;for(var g=E.length-8;g<E.length;++g)E[g]=p&255,p/=256;for(this.v(E),E=Array(16),p=0,g=0;g<4;++g)for(let T=0;T<32;T+=8)E[p++]=this.g[g]>>>T&255;return E};function o(E,p){var g=l;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=p(E)}function u(E,p){this.h=p;const g=[];let T=!0;for(let y=E.length-1;y>=0;y--){const I=E[y]|0;T&&I==p||(g[y]=I,T=!1)}this.g=g}var l={};function d(E){return-128<=E&&E<128?o(E,function(p){return new u([p|0],p<0?-1:0)}):new u([E|0],E<0?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(E<0)return D(f(-E));const p=[];let g=1;for(let T=0;E>=g;T++)p[T]=E/g|0,g*=4294967296;return new u(p,0)}function _(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(_(E.substring(1),p));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=f(Math.pow(p,8));let T=w;for(let I=0;I<E.length;I+=8){var y=Math.min(8,E.length-I);const m=parseInt(E.substring(I,I+y),p);y<8?(y=f(Math.pow(p,y)),T=T.j(y).add(f(m))):(T=T.j(g),T=T.add(f(m)))}return T}var w=d(0),R=d(1),P=d(16777216);r=u.prototype,r.m=function(){if(O(this))return-D(this).m();let E=0,p=1;for(let g=0;g<this.g.length;g++){const T=this.i(g);E+=(T>=0?T:4294967296+T)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(O(this))return"-"+D(this).toString(E);const p=f(Math.pow(E,6));var g=this;let T="";for(;;){const y=_t(g,p).g;g=G(g,y.j(p));let I=((g.g.length>0?g.g[0]:g.h)>>>0).toString(E);if(g=y,x(g))return I+T;for(;I.length<6;)I="0"+I;T=I+T}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(let p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function O(E){return E.h==-1}r.l=function(E){return E=G(this,E),O(E)?-1:x(E)?0:1};function D(E){const p=E.g.length,g=[];for(let T=0;T<p;T++)g[T]=~E.g[T];return new u(g,~E.h).add(R)}r.abs=function(){return O(this)?D(this):this},r.add=function(E){const p=Math.max(this.g.length,E.g.length),g=[];let T=0;for(let y=0;y<=p;y++){let I=T+(this.i(y)&65535)+(E.i(y)&65535),m=(I>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=m>>>16,I&=65535,m&=65535,g[y]=m<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(E,p){return E.add(D(p))}r.j=function(E){if(x(this)||x(E))return w;if(O(this))return O(E)?D(this).j(D(E)):D(D(this).j(E));if(O(E))return D(this.j(D(E)));if(this.l(P)<0&&E.l(P)<0)return f(this.m()*E.m());const p=this.g.length+E.g.length,g=[];for(var T=0;T<2*p;T++)g[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const I=this.i(T)>>>16,m=this.i(T)&65535,It=E.i(y)>>>16,ne=E.i(y)&65535;g[2*T+2*y]+=m*ne,$(g,2*T+2*y),g[2*T+2*y+1]+=I*ne,$(g,2*T+2*y+1),g[2*T+2*y+1]+=m*It,$(g,2*T+2*y+1),g[2*T+2*y+2]+=I*It,$(g,2*T+2*y+2)}for(E=0;E<p;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=p;E<2*p;E++)g[E]=0;return new u(g,0)};function $(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function K(E,p){this.g=E,this.h=p}function _t(E,p){if(x(p))throw Error("division by zero");if(x(E))return new K(w,w);if(O(E))return p=_t(D(E),p),new K(D(p.g),D(p.h));if(O(p))return p=_t(E,D(p)),new K(D(p.g),p.h);if(E.g.length>30){if(O(E)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,T=p;T.l(E)<=0;)g=vt(g),T=vt(T);var y=ut(g,1),I=ut(T,1);for(T=ut(T,2),g=ut(g,2);!x(T);){var m=I.add(T);m.l(E)<=0&&(y=y.add(g),I=m),T=ut(T,1),g=ut(g,1)}return p=G(E,y.j(p)),new K(y,p)}for(y=w;E.l(p)>=0;){for(g=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(g)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),I=f(g),m=I.j(p);O(m)||m.l(E)>0;)g-=T,I=f(g),m=I.j(p);x(I)&&(I=R),y=y.add(I),E=G(E,m)}return new K(y,E)}r.B=function(E){return _t(this,E).h},r.and=function(E){const p=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)&E.i(T);return new u(g,this.h&E.h)},r.or=function(E){const p=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)|E.i(T);return new u(g,this.h|E.h)},r.xor=function(E){const p=Math.max(this.g.length,E.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)^E.i(T);return new u(g,this.h^E.h)};function vt(E){const p=E.g.length+1,g=[];for(let T=0;T<p;T++)g[T]=E.i(T)<<1|E.i(T-1)>>>31;return new u(g,E.h)}function ut(E,p){const g=p>>5;p%=32;const T=E.g.length-g,y=[];for(let I=0;I<T;I++)y[I]=p>0?E.i(I+g)>>>p|E.i(I+g+1)<<32-p:E.i(I+g);return new u(y,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,ya=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Kt=u}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});var Mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ea,tn,Ta,zn,rs,va,Ia,wa;(function(){var r,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mn=="object"&&Mn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var c=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var v=s[h];if(!(v in c))break t;c=c[v]}s=s[s.length-1],h=c[s],a=a(h),a!=h&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var c=[],h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&c.push([h,a[h]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},u=this||self;function l(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function d(s,a,c){return s.call.apply(s.bind,arguments)}function f(s,a,c){return f=d,f.apply(null,arguments)}function _(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function w(s,a){function c(){}c.prototype=a.prototype,s.Z=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(h,v,A){for(var S=Array(arguments.length-2),F=2;F<arguments.length;F++)S[F-2]=arguments[F];return a.prototype[v].apply(h,S)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function P(s){const a=s.length;if(a>0){const c=Array(a);for(let h=0;h<a;h++)c[h]=s[h];return c}return[]}function x(s,a){for(let h=1;h<arguments.length;h++){const v=arguments[h];var c=typeof v;if(c=c!="object"?c:v?Array.isArray(v)?"array":c:"null",c=="array"||c=="object"&&typeof v.length=="number"){c=s.length||0;const A=v.length||0;s.length=c+A;for(let S=0;S<A;S++)s[c+S]=v[S]}else s.push(v)}}class O{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function D(s){u.setTimeout(()=>{throw s},0)}function G(){var s=E;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class ${constructor(){this.h=this.g=null}add(a,c){const h=K.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var K=new O(()=>new _t,s=>s.reset());class _t{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,ut=!1,E=new $,p=()=>{const s=Promise.resolve(void 0);vt=()=>{s.then(g)}};function g(){for(var s;s=G();){try{s.h.call(s.g)}catch(c){D(c)}var a=K;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}ut=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s})();function m(s){return/^[\s\xa0]*$/.test(s)}function It(s,a){y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}w(It,y),It.prototype.init=function(s,a){const c=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),Pu=0;function Vu(s,a,c,h,v){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=v,this.key=++Pu,this.da=this.fa=!1}function vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function In(s,a,c){for(const h in s)a.call(c,s[h],h,s)}function Du(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function Qs(s){const a={};for(const c in s)a[c]=s[c];return a}const Ws="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ys(s,a){let c,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(c in h)s[c]=h[c];for(let A=0;A<Ws.length;A++)c=Ws[A],Object.prototype.hasOwnProperty.call(h,c)&&(s[c]=h[c])}}function wn(s){this.src=s,this.g={},this.h=0}wn.prototype.add=function(s,a,c,h,v){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const S=Er(s,a,h,v);return S>-1?(a=s[S],c||(a.fa=!1)):(a=new Vu(a,this.src,A,!!h,v),a.fa=c,s.push(a)),a};function yr(s,a){const c=a.type;if(c in s.g){var h=s.g[c],v=Array.prototype.indexOf.call(h,a,void 0),A;(A=v>=0)&&Array.prototype.splice.call(h,v,1),A&&(vn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Er(s,a,c,h){for(let v=0;v<s.length;++v){const A=s[v];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==h)return v}return-1}var Tr="closure_lm_"+(Math.random()*1e6|0),vr={};function Xs(s,a,c,h,v){if(Array.isArray(a)){for(let A=0;A<a.length;A++)Xs(s,a[A],c,h,v);return null}return c=ti(c),s&&s[ne]?s.J(a,c,l(h)?!!h.capture:!1,v):Nu(s,a,c,!1,h,v)}function Nu(s,a,c,h,v,A){if(!a)throw Error("Invalid event type");const S=l(v)?!!v.capture:!!v;let F=wr(s);if(F||(s[Tr]=F=new wn(s)),c=F.add(a,c,h,S,A),c.proxy)return c;if(h=ku(),c.proxy=h,h.src=s,h.listener=c,s.addEventListener)I||(v=S),v===void 0&&(v=!1),s.addEventListener(a.toString(),h,v);else if(s.attachEvent)s.attachEvent(Zs(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function ku(){function s(c){return a.call(s.src,s.listener,c)}const a=xu;return s}function Js(s,a,c,h,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)Js(s,a[A],c,h,v);else h=l(h)?!!h.capture:!!h,c=ti(c),s&&s[ne]?(s=s.i,A=String(a).toString(),A in s.g&&(a=s.g[A],c=Er(a,c,h,v),c>-1&&(vn(a[c]),Array.prototype.splice.call(a,c,1),a.length==0&&(delete s.g[A],s.h--)))):s&&(s=wr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Er(a,c,h,v)),(c=s>-1?a[s]:null)&&Ir(c))}function Ir(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[ne])yr(a.i,s);else{var c=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(c,h,s.capture):a.detachEvent?a.detachEvent(Zs(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=wr(a))?(yr(c,s),c.h==0&&(c.src=null,a[Tr]=null)):vn(s)}}}function Zs(s){return s in vr?vr[s]:vr[s]="on"+s}function xu(s,a){if(s.da)s=!0;else{a=new It(a,this);const c=s.listener,h=s.ha||s.src;s.fa&&Ir(s),s=c.call(h,a)}return s}function wr(s){return s=s[Tr],s instanceof wn?s:null}var Ar="__closure_events_fn_"+(Math.random()*1e9>>>0);function ti(s){return typeof s=="function"?s:(s[Ar]||(s[Ar]=function(a){return s.handleEvent(a)}),s[Ar])}function ft(){T.call(this),this.i=new wn(this),this.M=this,this.G=null}w(ft,T),ft.prototype[ne]=!0,ft.prototype.removeEventListener=function(s,a,c,h){Js(this,s,a,c,h)};function yt(s,a){var c,h=s.G;if(h)for(c=[];h;h=h.G)c.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new y(a,s);else if(a instanceof y)a.target=a.target||s;else{var v=a;a=new y(h,s),Ys(a,v)}v=!0;let A,S;if(c)for(S=c.length-1;S>=0;S--)A=a.g=c[S],v=An(A,h,!0,a)&&v;if(A=a.g=s,v=An(A,h,!0,a)&&v,v=An(A,h,!1,a)&&v,c)for(S=0;S<c.length;S++)A=a.g=c[S],v=An(A,h,!1,a)&&v}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const c=s.g[a];for(let h=0;h<c.length;h++)vn(c[h]);delete s.g[a],s.h--}}this.G=null},ft.prototype.J=function(s,a,c,h){return this.i.add(String(s),a,!1,c,h)},ft.prototype.K=function(s,a,c,h){return this.i.add(String(s),a,!0,c,h)};function An(s,a,c,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let v=!0;for(let A=0;A<a.length;++A){const S=a[A];if(S&&!S.da&&S.capture==c){const F=S.listener,it=S.ha||S.src;S.fa&&yr(s.i,S),v=F.call(it,h)!==!1&&v}}return v&&!h.defaultPrevented}function Ou(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:u.setTimeout(s,a||0)}function ei(s){s.g=Ou(()=>{s.g=null,s.i&&(s.i=!1,ei(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Mu extends T{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ei(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(s){T.call(this),this.h=s,this.g={}}w(Fe,T);var ni=[];function ri(s){In(s.g,function(a,c){this.g.hasOwnProperty(c)&&Ir(a)},s),s.g={}}Fe.prototype.N=function(){Fe.Z.N.call(this),ri(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rr=u.JSON.stringify,Lu=u.JSON.parse,Fu=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function si(){}function ii(){}var Be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Cr(){y.call(this,"d")}w(Cr,y);function Sr(){y.call(this,"c")}w(Sr,y);var re={},oi=null;function Rn(){return oi=oi||new ft}re.Ia="serverreachability";function ai(s){y.call(this,re.Ia,s)}w(ai,y);function Ue(s){const a=Rn();yt(a,new ai(a))}re.STAT_EVENT="statevent";function ui(s,a){y.call(this,re.STAT_EVENT,s),this.stat=a}w(ui,y);function Et(s){const a=Rn();yt(a,new ui(a,s))}re.Ja="timingevent";function ci(s,a){y.call(this,re.Ja,s),this.size=a}w(ci,y);function qe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function je(){this.g=!0}je.prototype.ua=function(){this.g=!1};function Bu(s,a,c,h,v,A){s.info(function(){if(s.g)if(A){var S="",F=A.split("&");for(let H=0;H<F.length;H++){var it=F[H].split("=");if(it.length>1){const ct=it[0];it=it[1];const bt=ct.split("_");S=bt.length>=2&&bt[1]=="type"?S+(ct+"="+it+"&"):S+(ct+"=redacted&")}}}else S=null;else S=A;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+c+`
`+S})}function Uu(s,a,c,h,v,A,S){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+c+`
`+A+" "+S})}function pe(s,a,c,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+ju(s,c)+(h?" "+h:"")})}function qu(s,a){s.info(function(){return"TIMEOUT: "+a})}je.prototype.info=function(){};function ju(s,a){if(!s.g)return a;if(!a)return null;try{const A=JSON.parse(a);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var c=A[s];if(!(c.length<2)){var h=c[1];if(Array.isArray(h)&&!(h.length<1)){var v=h[0];if(v!="noop"&&v!="stop"&&v!="close")for(let S=1;S<h.length;S++)h[S]=""}}}}return Rr(A)}catch{return a}}var Cn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},li={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hi;function br(){}w(br,si),br.prototype.g=function(){return new XMLHttpRequest},hi=new br;function $e(s){return encodeURIComponent(String(s))}function $u(s){var a=1;s=s.split(":");const c=[];for(;a>0&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function Lt(s,a,c,h){this.j=s,this.i=a,this.l=c,this.S=h||1,this.V=new Fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new di}function di(){this.i=null,this.g="",this.h=!1}var fi={},Pr={};function Vr(s,a,c){s.M=1,s.A=bn(St(a)),s.u=c,s.R=!0,pi(s,null)}function pi(s,a){s.F=Date.now(),Sn(s),s.B=St(s.A);var c=s.B,h=s.S;Array.isArray(h)||(h=[String(h)]),Si(c.i,"t",h),s.C=0,c=s.j.L,s.h=new di,s.g=Hi(s.j,c?a:null,!s.u),s.P>0&&(s.O=new Mu(f(s.Y,s,s.g),s.P)),a=s.V,c=s.g,h=s.ba;var v="readystatechange";Array.isArray(v)||(v&&(ni[0]=v.toString()),v=ni);for(let A=0;A<v.length;A++){const S=Xs(c,v[A],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.J?Qs(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Ue(),Bu(s.i,s.v,s.B,s.l,s.S,s.u)}Lt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Ut(s)==3?a.j():this.Y(s)},Lt.prototype.Y=function(s){try{if(s==this.g)t:{const F=Ut(this.g),it=this.g.ya(),H=this.g.ca();if(!(F<3)&&(F!=3||this.g&&(this.h.h||this.g.la()||xi(this.g)))){this.K||F!=4||it==7||(it==8||H<=0?Ue(3):Ue(2)),Dr(this);var a=this.g.ca();this.X=a;var c=zu(this);if(this.o=a==200,Uu(this.i,this.v,this.B,this.l,this.S,F,a),this.o){if(this.U&&!this.L){e:{if(this.g){var h,v=this.g;if((h=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(h)){var A=h;break e}}A=null}if(s=A)pe(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Nr(this,s);else{this.o=!1,this.m=3,Et(12),se(this),ze(this);break t}}if(this.R){s=!0;let ct;for(;!this.K&&this.C<c.length;)if(ct=Hu(this,c),ct==Pr){F==4&&(this.m=4,Et(14),s=!1),pe(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==fi){this.m=4,Et(15),pe(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else pe(this.i,this.l,ct,null),Nr(this,ct);if(mi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),F!=4||c.length!=0||this.h.h||(this.m=1,Et(16),s=!1),this.o=this.o&&s,!s)pe(this.i,this.l,c,"[Invalid Chunked Response]"),se(this),ze(this);else if(c.length>0&&!this.W){this.W=!0;var S=this.j;S.g==this&&S.aa&&!S.P&&(S.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Ur(S),S.P=!0,Et(11))}}else pe(this.i,this.l,c,null),Nr(this,c);F==4&&se(this),this.o&&!this.K&&(F==4?qi(this.j,this):(this.o=!1,Sn(this)))}else ic(this.g),a==400&&c.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),se(this),ze(this)}}}catch{}finally{}};function zu(s){if(!mi(s))return s.g.la();const a=xi(s.g);if(a==="")return"";let c="";const h=a.length,v=Ut(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return se(s),ze(s),"";s.h.i=new u.TextDecoder}for(let A=0;A<h;A++)s.h.h=!0,c+=s.h.i.decode(a[A],{stream:!(v&&A==h-1)});return a.length=0,s.h.g+=c,s.C=0,s.h.g}function mi(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Hu(s,a){var c=s.C,h=a.indexOf(`
`,c);return h==-1?Pr:(c=Number(a.substring(c,h)),isNaN(c)?fi:(h+=1,h+c>a.length?Pr:(a=a.slice(h,h+c),s.C=h+c,a)))}Lt.prototype.cancel=function(){this.K=!0,se(this)};function Sn(s){s.T=Date.now()+s.H,gi(s,s.H)}function gi(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=qe(f(s.aa,s),a)}function Dr(s){s.D&&(u.clearTimeout(s.D),s.D=null)}Lt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(qu(this.i,this.B),this.M!=2&&(Ue(),Et(17)),se(this),this.m=2,ze(this)):gi(this,this.T-s)};function ze(s){s.j.I==0||s.K||qi(s.j,s)}function se(s){Dr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,ri(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Nr(s,a){try{var c=s.j;if(c.I!=0&&(c.g==s||kr(c.h,s))){if(!s.L&&kr(c.h,s)&&c.I==3){try{var h=c.Ba.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)kn(c),Dn(c);else break t;Br(c),Et(18)}}else c.xa=v[1],0<c.xa-c.K&&v[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=qe(f(c.Va,c),6e3));Ei(c.h)<=1&&c.ta&&(c.ta=void 0)}else oe(c,11)}else if((s.L||c.g==s)&&kn(c),!m(a))for(v=c.Ba.g.parse(a),a=0;a<v.length;a++){let H=v[a];const ct=H[0];if(!(ct<=c.K))if(c.K=ct,H=H[1],c.I==2)if(H[0]=="c"){c.M=H[1],c.ba=H[2];const bt=H[3];bt!=null&&(c.ka=bt,c.j.info("VER="+c.ka));const ae=H[4];ae!=null&&(c.za=ae,c.j.info("SVER="+c.za));const qt=H[5];qt!=null&&typeof qt=="number"&&qt>0&&(h=1.5*qt,c.O=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const jt=s.g;if(jt){const On=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(On){var A=h.h;A.g||On.indexOf("spdy")==-1&&On.indexOf("quic")==-1&&On.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(xr(A,A.h),A.h=null))}if(h.G){const qr=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;qr&&(h.wa=qr,Q(h.J,h.G,qr))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),h=c;var S=s;if(h.na=zi(h,h.L?h.ba:null,h.W),S.L){Ti(h.h,S);var F=S,it=h.O;it&&(F.H=it),F.D&&(Dr(F),Sn(F)),h.g=S}else Bi(h);c.i.length>0&&Nn(c)}else H[0]!="stop"&&H[0]!="close"||oe(c,7);else c.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?oe(c,7):Fr(c):H[0]!="noop"&&c.l&&c.l.qa(H),c.A=0)}}Ue(4)}catch{}}var Gu=class{constructor(s,a){this.g=s,this.map=a}};function _i(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ei(s){return s.h?1:s.g?s.g.size:0}function kr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function xr(s,a){s.g?s.g.add(a):s.h=a}function Ti(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}_i.prototype.cancel=function(){if(this.i=vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function vi(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.G);return a}return P(s.i)}var Ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ku(s,a){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const h=s[c].indexOf("=");let v,A=null;h>=0?(v=s[c].substring(0,h),A=s[c].substring(h+1)):v=s[c],a(v,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ft(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Ft?(this.l=s.l,He(this,s.j),this.o=s.o,this.g=s.g,Ge(this,s.u),this.h=s.h,Or(this,bi(s.i)),this.m=s.m):s&&(a=String(s).match(Ii))?(this.l=!1,He(this,a[1]||"",!0),this.o=Ke(a[2]||""),this.g=Ke(a[3]||"",!0),Ge(this,a[4]),this.h=Ke(a[5]||"",!0),Or(this,a[6]||"",!0),this.m=Ke(a[7]||"")):(this.l=!1,this.i=new We(null,this.l))}Ft.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Qe(a,wi,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Qe(a,wi,!0),"@"),s.push($e(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Qe(c,c.charAt(0)=="/"?Yu:Wu,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Qe(c,Ju)),s.join("")},Ft.prototype.resolve=function(s){const a=St(this);let c=!!s.j;c?He(a,s.j):c=!!s.o,c?a.o=s.o:c=!!s.g,c?a.g=s.g:c=s.u!=null;var h=s.h;if(c)Ge(a,s.u);else if(c=!!s.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var v=a.h.lastIndexOf("/");v!=-1&&(h=a.h.slice(0,v+1)+h)}if(v=h,v==".."||v==".")h="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){h=v.lastIndexOf("/",0)==0,v=v.split("/");const A=[];for(let S=0;S<v.length;){const F=v[S++];F=="."?h&&S==v.length&&A.push(""):F==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),h&&S==v.length&&A.push("")):(A.push(F),h=!0)}h=A.join("/")}else h=v}return c?a.h=h:c=s.i.toString()!=="",c?Or(a,bi(s.i)):c=!!s.m,c&&(a.m=s.m),a};function St(s){return new Ft(s)}function He(s,a,c){s.j=c?Ke(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Ge(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Or(s,a,c){a instanceof We?(s.i=a,Zu(s.i,s.l)):(c||(a=Qe(a,Xu)),s.i=new We(a,s.l))}function Q(s,a,c){s.i.set(a,c)}function bn(s){return Q(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Ke(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Qe(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Qu),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Qu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var wi=/[#\/\?@]/g,Wu=/[#\?:]/g,Yu=/[#\?]/g,Xu=/[#\?@]/g,Ju=/#/g;function We(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function ie(s){s.g||(s.g=new Map,s.h=0,s.i&&Ku(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}r=We.prototype,r.add=function(s,a){ie(this),this.i=null,s=me(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function Ai(s,a){ie(s),a=me(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ri(s,a){return ie(s),a=me(s,a),s.g.has(a)}r.forEach=function(s,a){ie(this),this.g.forEach(function(c,h){c.forEach(function(v){s.call(a,v,h,this)},this)},this)};function Ci(s,a){ie(s);let c=[];if(typeof a=="string")Ri(s,a)&&(c=c.concat(s.g.get(me(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)c=c.concat(s[a]);return c}r.set=function(s,a){return ie(this),this.i=null,s=me(this,s),Ri(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=Ci(this,s),s.length>0?String(s[0]):a):a};function Si(s,a,c){Ai(s,a),c.length>0&&(s.i=null,s.g.set(me(s,a),P(c)),s.h+=c.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let h=0;h<a.length;h++){var c=a[h];const v=$e(c);c=Ci(this,c);for(let A=0;A<c.length;A++){let S=v;c[A]!==""&&(S+="="+$e(c[A])),s.push(S)}}return this.i=s.join("&")};function bi(s){const a=new We;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function me(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Zu(s,a){a&&!s.j&&(ie(s),s.i=null,s.g.forEach(function(c,h){const v=h.toLowerCase();h!=v&&(Ai(this,h),Si(this,v,c))},s)),s.j=a}function tc(s,a){const c=new je;if(u.Image){const h=new Image;h.onload=_(Bt,c,"TestLoadImage: loaded",!0,a,h),h.onerror=_(Bt,c,"TestLoadImage: error",!1,a,h),h.onabort=_(Bt,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=_(Bt,c,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function ec(s,a){const c=new je,h=new AbortController,v=setTimeout(()=>{h.abort(),Bt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(A=>{clearTimeout(v),A.ok?Bt(c,"TestPingServer: ok",!0,a):Bt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Bt(c,"TestPingServer: error",!1,a)})}function Bt(s,a,c,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(c)}catch{}}function nc(){this.g=new Fu}function Mr(s){this.i=s.Sb||null,this.h=s.ab||!1}w(Mr,si),Mr.prototype.g=function(){return new Pn(this.i,this.h)};function Pn(s,a){ft.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(Pn,ft),r=Pn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Xe(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||u).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=0},r.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}r.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ye(this):Xe(this),this.readyState==3&&Pi(this)}},r.Oa=function(s){this.g&&(this.response=this.responseText=s,Ye(this))},r.Na=function(s){this.g&&(this.response=s,Ye(this))},r.ga=function(){this.g&&Ye(this)};function Ye(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Xe(s)}r.setRequestHeader=function(s,a){this.A.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Xe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Vi(s){let a="";return In(s,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function Lr(s,a,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=Vi(c),typeof s=="string"?c!=null&&$e(c):Q(s,a,c))}function J(s){ft.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(J,ft);var rc=/^https?$/i,sc=["POST","PUT"];r=J.prototype,r.Fa=function(s){this.H=s},r.ea=function(s,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hi.g(),this.g.onreadystatechange=R(f(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){Di(this,A);return}if(s=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)c.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())c.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),v=u.FormData&&s instanceof u.FormData,!(Array.prototype.indexOf.call(sc,a,void 0)>=0)||h||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of c)this.g.setRequestHeader(A,S);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){Di(this,A)}};function Di(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,Ni(s),Vn(s)}function Ni(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,yt(this,"complete"),yt(this,"abort"),Vn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vn(this,!0)),J.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?ki(this):this.Xa())},r.Xa=function(){ki(this)};function ki(s){if(s.h&&typeof o<"u"){if(s.v&&Ut(s)==4)setTimeout(s.Ca.bind(s),0);else if(yt(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const A=s.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var h;if(h=A===0){let S=String(s.D).match(Ii)[1]||null;!S&&u.self&&u.self.location&&(S=u.self.location.protocol.slice(0,-1)),h=!rc.test(S?S.toLowerCase():"")}c=h}if(c)yt(s,"complete"),yt(s,"success");else{s.o=6;try{var v=Ut(s)>2?s.g.statusText:""}catch{v=""}s.l=v+" ["+s.ca()+"]",Ni(s)}}finally{Vn(s)}}}}function Vn(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,a||yt(s,"ready");try{c.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}r.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Lu(a)}};function xi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ic(s){const a={};s=(s.g&&Ut(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(m(s[h]))continue;var c=$u(s[h]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[v]||[];a[v]=A,A.push(c)}Du(a,function(h){return h.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Oi(s){this.za=0,this.i=[],this.j=new je,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Je("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Je("baseRetryDelayMs",5e3,s),this.Za=Je("retryDelaySeedMs",1e4,s),this.Ta=Je("forwardChannelMaxRetries",2,s),this.va=Je("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new _i(s&&s.concurrentRequestLimit),this.Ba=new nc,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Oi.prototype,r.ka=8,r.I=1,r.connect=function(s,a,c,h){Et(0),this.W=s,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.J=zi(this,null,this.W),Nn(this)};function Fr(s){if(Mi(s),s.I==3){var a=s.V++,c=St(s.J);if(Q(c,"SID",s.M),Q(c,"RID",a),Q(c,"TYPE","terminate"),Ze(s,c),a=new Lt(s,s.j,a),a.M=2,a.A=bn(St(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.A.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.A,c=!0),c||(a.g=Hi(a.j,null),a.g.ea(a.A)),a.F=Date.now(),Sn(a)}$i(s)}function Dn(s){s.g&&(Ur(s),s.g.cancel(),s.g=null)}function Mi(s){Dn(s),s.v&&(u.clearTimeout(s.v),s.v=null),kn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&u.clearTimeout(s.m),s.m=null)}function Nn(s){if(!yi(s.h)&&!s.m){s.m=!0;var a=s.Ea;vt||p(),ut||(vt(),ut=!0),E.add(a,s),s.D=0}}function oc(s,a){return Ei(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=qe(f(s.Ea,s,a),ji(s,s.D)),s.D++,!0)}r.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const v=new Lt(this,this.j,s);let A=this.o;if(this.U&&(A?(A=Qs(A),Ys(A,this.U)):A=this.U),this.u!==null||this.R||(v.J=A,A=null),this.S)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,a>4096){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Fi(this,v,a),c=St(this.J),Q(c,"RID",s),Q(c,"CVER",22),this.G&&Q(c,"X-HTTP-Session-Id",this.G),Ze(this,c),A&&(this.R?a="headers="+$e(Vi(A))+"&"+a:this.u&&Lr(c,this.u,A)),xr(this.h,v),this.Ra&&Q(c,"TYPE","init"),this.S?(Q(c,"$req",a),Q(c,"SID","null"),v.U=!0,Vr(v,c,null)):Vr(v,c,a),this.I=2}}else this.I==3&&(s?Li(this,s):this.i.length==0||yi(this.h)||Li(this))};function Li(s,a){var c;a?c=a.l:c=s.V++;const h=St(s.J);Q(h,"SID",s.M),Q(h,"RID",c),Q(h,"AID",s.K),Ze(s,h),s.u&&s.o&&Lr(h,s.u,s.o),c=new Lt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Fi(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),xr(s.h,c),Vr(c,h,a)}function Ze(s,a){s.H&&In(s.H,function(c,h){Q(a,h,c)}),s.l&&In({},function(c,h){Q(a,h,c)})}function Fi(s,a,c){c=Math.min(s.i.length,c);const h=s.l?f(s.l.Ka,s.l,s):null;t:{var v=s.i;let F=-1;for(;;){const it=["count="+c];F==-1?c>0?(F=v[0].g,it.push("ofs="+F)):F=0:it.push("ofs="+F);let H=!0;for(let ct=0;ct<c;ct++){var A=v[ct].g;const bt=v[ct].map;if(A-=F,A<0)F=Math.max(0,v[ct].g-100),H=!1;else try{A="req"+A+"_"||"";try{var S=bt instanceof Map?bt:Object.entries(bt);for(const[ae,qt]of S){let jt=qt;l(qt)&&(jt=Rr(qt)),it.push(A+ae+"="+encodeURIComponent(jt))}}catch(ae){throw it.push(A+"type="+encodeURIComponent("_badmap")),ae}}catch{h&&h(bt)}}if(H){S=it.join("&");break t}}S=void 0}return s=s.i.splice(0,c),a.G=s,S}function Bi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;vt||p(),ut||(vt(),ut=!0),E.add(a,s),s.A=0}}function Br(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=qe(f(s.Da,s),ji(s,s.A)),s.A++,!0)}r.Da=function(){if(this.v=null,Ui(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=qe(f(this.Wa,this),s)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Dn(this),Ui(this))};function Ur(s){s.B!=null&&(u.clearTimeout(s.B),s.B=null)}function Ui(s){s.g=new Lt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=St(s.na);Q(a,"RID","rpc"),Q(a,"SID",s.M),Q(a,"AID",s.K),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&Q(a,"TO",s.ia),Q(a,"TYPE","xmlhttp"),Ze(s,a),s.u&&s.o&&Lr(a,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=bn(St(a)),c.u=null,c.R=!0,pi(c,s)}r.Va=function(){this.C!=null&&(this.C=null,Dn(this),Br(this),Et(19))};function kn(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function qi(s,a){var c=null;if(s.g==a){kn(s),Ur(s),s.g=null;var h=2}else if(kr(s.h,a))c=a.G,Ti(s.h,a),h=1;else return;if(s.I!=0){if(a.o)if(h==1){c=a.u?a.u.length:0,a=Date.now()-a.F;var v=s.D;h=Rn(),yt(h,new ci(h,c)),Nn(s)}else Bi(s);else if(v=a.m,v==3||v==0&&a.X>0||!(h==1&&oc(s,a)||h==2&&Br(s)))switch(c&&c.length>0&&(a=s.h,a.i=a.i.concat(c)),v){case 1:oe(s,5);break;case 4:oe(s,10);break;case 3:oe(s,6);break;default:oe(s,2)}}}function ji(s,a){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*a}function oe(s,a){if(s.j.info("Error code "+a),a==2){var c=f(s.bb,s),h=s.Ua;const v=!h;h=new Ft(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||He(h,"https"),bn(h),v?tc(h.toString(),c):ec(h.toString(),c)}else Et(2);s.I=0,s.l&&s.l.pa(a),$i(s),Mi(s)}r.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function $i(s){if(s.I=0,s.ja=[],s.l){const a=vi(s.h);(a.length!=0||s.i.length!=0)&&(x(s.ja,a),x(s.ja,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.oa()}}function zi(s,a,c){var h=c instanceof Ft?St(c):new Ft(c);if(h.g!="")a&&(h.g=a+"."+h.g),Ge(h,h.u);else{var v=u.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;const A=new Ft(null);h&&He(A,h),a&&(A.g=a),v&&Ge(A,v),c&&(A.h=c),h=A}return c=s.G,a=s.wa,c&&a&&Q(h,c,a),Q(h,"VER",s.ka),Ze(s,h),h}function Hi(s,a,c){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new J(new Mr({ab:c})):new J(s.ma),a.Fa(s.L),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gi(){}r=Gi.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function xn(){}xn.prototype.g=function(s,a){return new At(s,a)};function At(s,a){ft.call(this),this.g=new Oi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!m(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ge(this)}w(At,ft),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Fr(this.g)},At.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=Rr(s),s=c);a.i.push(new Gu(a.Ya++,s)),a.I==3&&Nn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,Fr(this.g),delete this.g,At.Z.N.call(this)};function Ki(s){Cr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}w(Ki,Cr);function Qi(){Sr.call(this),this.status=1}w(Qi,Sr);function ge(s){this.g=s}w(ge,Gi),ge.prototype.ra=function(){yt(this.g,"a")},ge.prototype.qa=function(s){yt(this.g,new Ki(s))},ge.prototype.pa=function(s){yt(this.g,new Qi)},ge.prototype.oa=function(){yt(this.g,"b")},xn.prototype.createWebChannel=xn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,wa=function(){return new xn},Ia=function(){return Rn()},va=re,rs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Cn.NO_ERROR=0,Cn.TIMEOUT=8,Cn.HTTP_ERROR=6,zn=Cn,li.COMPLETE="complete",Ta=li,ii.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",ft.prototype.listen=ft.prototype.J,tn=ii,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa,Ea=J}).apply(typeof Mn<"u"?Mn:typeof self<"u"?self:typeof window<"u"?window:{});const ao="@firebase/firestore",uo="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new da("@firebase/firestore");function _e(){return de.logLevel}function V(r,...t){if(de.logLevel<=q.DEBUG){const e=t.map(Cs);de.debug(`Firestore (${Oe}): ${r}`,...e)}}function Mt(r,...t){if(de.logLevel<=q.ERROR){const e=t.map(Cs);de.error(`Firestore (${Oe}): ${r}`,...e)}}function Se(r,...t){if(de.logLevel<=q.WARN){const e=t.map(Cs);de.warn(`Firestore (${Oe}): ${r}`,...e)}}function Cs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Aa(r,n,e)}function Aa(r,t,e){let n=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Mt(n),new Error(n)}function X(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Aa(t,i,n)}function j(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends xe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(mt.UNAUTHENTICATED)))}shutdown(){}}class Ql{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Wl{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let n=this.i;const i=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new le;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new le,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const d=o;t.enqueueRetryable((async()=>{await d.promise,await i(this.currentUser)}))},l=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((d=>l(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new le)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(X(typeof n.accessToken=="string",31837,{l:n}),new Ra(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new mt(t)}}class Yl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Xl{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Yl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class co{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const n=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new co(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new co(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Zl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function B(r,t){return r<t?-1:r>t?1:0}function ss(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const i=r.charAt(n),o=t.charAt(n);if(i!==o)return Gr(i)===Gr(o)?B(i,o):Gr(i)?1:-1}return B(r.length,t.length)}const th=55296,eh=57343;function Gr(r){const t=r.charCodeAt(0);return t>=th&&t<=eh}function be(r,t,e){return r.length===t.length&&r.every(((n,i)=>e(n,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="__name__";class Pt{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&L(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const n=Pt.isNumericId(t),i=Pt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):ss(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}}class Y extends Pt{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((i=>i.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const nh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Pt{construct(t,e,n){return new Tt(t,e,n)}static isValidIdentifier(t){return nh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lo}static keyField(){return new Tt([lo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,i+=2}else l==="`"?(u=!u,i++):l!=="."||u?(n+=l,i++):(o(),i++)}if(o(),u)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Y.fromString(t))}static fromName(t){return new k(Y.fromString(t).popFirst(5))}static empty(){return new k(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Y(t.slice()))}}function rh(r,t,e,n){if(t===!0&&n===!0)throw new N(b.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ho(r){if(k.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function sh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ih(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L(12329,{type:typeof r})}function is(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ih(r);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(r,t){const e={typeString:r};return t&&(e.value=t),e}function gn(r,t){if(!sh(r))throw new N(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const u=r[n];if(i&&typeof u!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new N(b.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=-62135596800,po=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*po);return new rt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<fo)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/po}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gn(t,rt._jsonSchema))return new rt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-fo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:st("string",rt._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static fromTimestamp(t){return new M(t)}static min(){return new M(new rt(0,0))}static max(){return new M(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=-1;function oh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=M.fromTimestamp(n===1e9?new rt(e+1,0):new rt(e,n));return new Yt(i,k.empty(),t)}function ah(r){return new Yt(r.readTime,r.key,hn)}class Yt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Yt(M.min(),k.empty(),hn)}static max(){return new Yt(M.max(),k.empty(),hn)}}function uh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(r){if(r.code!==b.FAILED_PRECONDITION||r.message!==ch)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,n)=>{e(t)}))}static reject(t){return new C(((e,n)=>{n(t)}))}static waitFor(t){return new C(((e,n)=>{let i=0,o=0,u=!1;t.forEach((l=>{++i,l.next((()=>{++o,u&&o===i&&e()}),(d=>n(d)))})),u=!0,o===i&&e()}))}static or(t){let e=C.resolve(!1);for(const n of t)e=e.next((i=>i?C.resolve(i):n()));return e}static forEach(t,e){const n=[];return t.forEach(((i,o)=>{n.push(e.call(this,i,o))})),this.waitFor(n)}static mapArray(t,e){return new C(((n,i)=>{const o=t.length,u=new Array(o);let l=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next((_=>{u[f]=_,++l,l===o&&n(u)}),(_=>i(_)))}}))}static doWhile(t,e){return new C(((n,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):n()};o()}))}}function hh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Me(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ar.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=-1;function ur(r){return r==null}function os(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="";function fh(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=mo(t)),t=ph(r.get(e),t);return mo(t)}function ph(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Sa:e+="";break;default:e+=o}}return e}function mo(r){return r+Sa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function _n(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function mh(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ln(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ln(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ln(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ln(this.root,t,this.comparator,!0)}}class Ln{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ht.RED,this.left=i??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ht(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(t){return new _o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class _o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new $t([])}unionWith(t){let e=new at(Tt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new $t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ba("Invalid base64 string: "+o):o}})(t);return new dt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const gh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(r){if(X(!!r,39018),typeof r=="string"){let t=0;const e=gh.exec(r);if(X(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:tt(r.seconds),nanos:tt(r.nanos)}}function tt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Jt(r){return typeof r=="string"?dt.fromBase64String(r):dt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="server_timestamp",Va="__type__",Da="__previous_value__",Na="__local_write_time__";function Ss(r){return(r?.mapValue?.fields||{})[Va]?.stringValue===Pa}function cr(r){const t=r.mapValue.fields[Da];return Ss(t)?cr(t):t}function dn(r){const t=Xt(r.mapValue.fields[Na].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e,n,i,o,u,l,d,f,_){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=_}}const Zn="(default)";class fn{constructor(t,e){this.projectId=t,this.database=e||Zn}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(t){return t instanceof fn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="__type__",Eh="__max__",Fn={mapValue:{}},Th="__vector__",as="value";function Zt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ss(r)?4:Ih(r)?9007199254740991:vh(r)?10:11:L(28295,{value:r})}function kt(r,t){if(r===t)return!0;const e=Zt(r);if(e!==Zt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return dn(r).isEqual(dn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Xt(i.timestampValue),l=Xt(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,o){return Jt(i.bytesValue).isEqual(Jt(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)})(r,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=tt(i.doubleValue),l=tt(o.doubleValue);return u===l?os(u)===os(l):isNaN(u)&&isNaN(l)}return!1})(r,t);case 9:return be(r.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(go(u)!==go(l))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(l[d]===void 0||!kt(u[d],l[d])))return!1;return!0})(r,t);default:return L(52216,{left:r})}}function pn(r,t){return(r.values||[]).find((e=>kt(e,t)))!==void 0}function Pe(r,t){if(r===t)return 0;const e=Zt(r),n=Zt(t);if(e!==n)return B(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return(function(o,u){const l=tt(o.integerValue||o.doubleValue),d=tt(u.integerValue||u.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1})(r,t);case 3:return yo(r.timestampValue,t.timestampValue);case 4:return yo(dn(r),dn(t));case 5:return ss(r.stringValue,t.stringValue);case 6:return(function(o,u){const l=Jt(o),d=Jt(u);return l.compareTo(d)})(r.bytesValue,t.bytesValue);case 7:return(function(o,u){const l=o.split("/"),d=u.split("/");for(let f=0;f<l.length&&f<d.length;f++){const _=B(l[f],d[f]);if(_!==0)return _}return B(l.length,d.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,u){const l=B(tt(o.latitude),tt(u.latitude));return l!==0?l:B(tt(o.longitude),tt(u.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Eo(r.arrayValue,t.arrayValue);case 10:return(function(o,u){const l=o.fields||{},d=u.fields||{},f=l[as]?.arrayValue,_=d[as]?.arrayValue,w=B(f?.values?.length||0,_?.values?.length||0);return w!==0?w:Eo(f,_)})(r.mapValue,t.mapValue);case 11:return(function(o,u){if(o===Fn.mapValue&&u===Fn.mapValue)return 0;if(o===Fn.mapValue)return 1;if(u===Fn.mapValue)return-1;const l=o.fields||{},d=Object.keys(l),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const R=ss(d[w],_[w]);if(R!==0)return R;const P=Pe(l[d[w]],f[_[w]]);if(P!==0)return P}return B(d.length,_.length)})(r.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function yo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=Xt(r),n=Xt(t),i=B(e.seconds,n.seconds);return i!==0?i:B(e.nanos,n.nanos)}function Eo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Pe(e[i],n[i]);if(o)return o}return B(e.length,n.length)}function Ve(r){return us(r)}function us(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Xt(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return Jt(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return k.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=us(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${us(e.fields[u])}`;return i+"}"})(r.mapValue):L(61005,{value:r})}function Hn(r){switch(Zt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=cr(r);return t?16+Hn(t):16;case 5:return 2*r.stringValue.length;case 6:return Jt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,o)=>i+Hn(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return _n(n.fields,((o,u)=>{i+=o.length+Hn(u)})),i})(r.mapValue);default:throw L(13486,{value:r})}}function cs(r){return!!r&&"integerValue"in r}function bs(r){return!!r&&"arrayValue"in r}function To(r){return!!r&&"nullValue"in r}function vo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Kr(r){return!!r&&"mapValue"in r}function vh(r){return(r?.mapValue?.fields||{})[yh]?.stringValue===Th}function sn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return _n(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=sn(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(r.arrayValue.values[e]);return t}return{...r}}function Ih(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Eh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.value=t}static empty(){return new Vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Kr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=Tt.emptyPath(),n={},i=[];t.forEach(((u,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,n,i),n={},i=[],e=l.popLast()}u?n[l.lastSegment()]=sn(u):i.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Kr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Kr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){_n(e,((i,o)=>t[i]=o));for(const i of n)delete t[i]}clone(){return new Vt(sn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,i,o,u,l){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new gt(t,0,M.min(),M.min(),M.min(),Vt.empty(),0)}static newFoundDocument(t,e,n,i){return new gt(t,1,e,M.min(),n,i,0)}static newNoDocument(t,e){return new gt(t,2,e,M.min(),M.min(),Vt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,M.min(),M.min(),Vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.position=t,this.inclusive=e}}function Io(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=k.comparator(k.fromName(u.referenceValue),e.key):n=Pe(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function wo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!kt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e="asc"){this.field=t,this.dir=e}}function wh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{}class ot extends ka{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Rh(t,e,n):e==="array-contains"?new bh(t,n):e==="in"?new Ph(t,n):e==="not-in"?new Vh(t,n):e==="array-contains-any"?new Dh(t,n):new ot(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ch(t,n):new Sh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Pe(e,this.value)):e!==null&&Zt(this.value)===Zt(e)&&this.matchesComparison(Pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends ka{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new xt(t,e)}matches(t){return xa(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xa(r){return r.op==="and"}function Oa(r){return Ah(r)&&xa(r)}function Ah(r){for(const t of r.filters)if(t instanceof xt)return!1;return!0}function ls(r){if(r instanceof ot)return r.field.canonicalString()+r.op.toString()+Ve(r.value);if(Oa(r))return r.filters.map((t=>ls(t))).join(",");{const t=r.filters.map((e=>ls(e))).join(",");return`${r.op}(${t})`}}function Ma(r,t){return r instanceof ot?(function(n,i){return i instanceof ot&&n.op===i.op&&n.field.isEqual(i.field)&&kt(n.value,i.value)})(r,t):r instanceof xt?(function(n,i){return i instanceof xt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,u,l)=>o&&Ma(u,i.filters[l])),!0):!1})(r,t):void L(19439)}function La(r){return r instanceof ot?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ve(e.value)}`})(r):r instanceof xt?(function(e){return e.op.toString()+" {"+e.getFilters().map(La).join(" ,")+"}"})(r):"Filter"}class Rh extends ot{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ch extends ot{constructor(t,e){super(t,"in",e),this.keys=Fa("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Sh extends ot{constructor(t,e){super(t,"not-in",e),this.keys=Fa("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Fa(r,t){return(t.arrayValue?.values||[]).map((e=>k.fromName(e.referenceValue)))}class bh extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bs(e)&&pn(e.arrayValue,this.value)}}class Ph extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&pn(this.value.arrayValue,e)}}class Vh extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!pn(this.value.arrayValue,e)}}class Dh extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>pn(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e=null,n=[],i=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=l,this.Te=null}}function Ao(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Nh(r,t,e,n,i,o,u)}function Ps(r){const t=j(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>ls(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),ur(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Ve(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Ve(n))).join(",")),t.Te=e}return t.Te}function Vs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!wh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ma(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!wo(r.startAt,t.startAt)&&wo(r.endAt,t.endAt)}function hs(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e=null,n=[],i=[],o=null,u="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kh(r,t,e,n,i,o,u,l){return new lr(r,t,e,n,i,o,u,l)}function Ba(r){return new lr(r)}function Ro(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function xh(r){return r.collectionGroup!==null}function on(r){const t=j(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new at(Tt.comparator);return u.filters.forEach((d=>{d.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new er(o,n))})),e.has(Tt.keyField().canonicalString())||t.Ie.push(new er(Tt.keyField(),n))}return t.Ie}function Nt(r){const t=j(r);return t.Ee||(t.Ee=Oh(t,on(r))),t.Ee}function Oh(r,t){if(r.limitType==="F")return Ao(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new er(i.field,o)}));const e=r.endAt?new tr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new tr(r.startAt.position,r.startAt.inclusive):null;return Ao(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ds(r,t,e){return new lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function hr(r,t){return Vs(Nt(r),Nt(t))&&r.limitType===t.limitType}function Ua(r){return`${Ps(Nt(r))}|lt:${r.limitType}`}function ye(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((i=>La(i))).join(", ")}]`),ur(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Ve(i))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Ve(i))).join(",")),`Target(${n})`})(Nt(r))}; limitType=${r.limitType})`}function dr(r,t){return t.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):k.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,i){for(const o of on(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(r,t)&&(function(n,i){return!(n.startAt&&!(function(u,l,d){const f=Io(u,l,d);return u.inclusive?f<=0:f<0})(n.startAt,on(n),i)||n.endAt&&!(function(u,l,d){const f=Io(u,l,d);return u.inclusive?f>=0:f>0})(n.endAt,on(n),i))})(r,t)}function Mh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qa(r){return(t,e)=>{let n=!1;for(const i of on(r)){const o=Lh(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Lh(r,t,e){const n=r.field.isKeyField()?k.comparator(t.key,e.key):(function(o,u,l){const d=u.data.field(o),f=l.data.field(o);return d!==null&&f!==null?Pe(d,f):L(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_n(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return mh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new et(k.comparator);function te(){return Fh}const ja=new et(k.comparator);function en(...r){let t=ja;for(const e of r)t=t.insert(e.key,e);return t}function Bh(r){let t=ja;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ce(){return an()}function $a(){return an()}function an(){return new fe((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Uh=new at(k.comparator);function z(...r){let t=Uh;for(const e of r)t=t.add(e);return t}const qh=new at(B);function jh(){return qh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:os(t)?"-0":t}}function zh(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function Hh(r,t,e){return r instanceof fs?(function(i,o){const u={fields:{[Va]:{stringValue:Pa},[Na]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ss(o)&&(o=cr(o)),o&&(u.fields[Da]=o),{mapValue:u}})(e,t):r instanceof nr?za(r,t):r instanceof rr?Ha(r,t):(function(i,o){const u=Kh(i,o),l=Co(u)+Co(i.Ae);return cs(u)&&cs(i.Ae)?zh(l):$h(i.serializer,l)})(r,t)}function Gh(r,t,e){return r instanceof nr?za(r,t):r instanceof rr?Ha(r,t):e}function Kh(r,t){return r instanceof ps?(function(n){return cs(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class fs extends fr{}class nr extends fr{constructor(t){super(),this.elements=t}}function za(r,t){const e=Ga(t);for(const n of r.elements)e.some((i=>kt(i,n)))||e.push(n);return{arrayValue:{values:e}}}class rr extends fr{constructor(t){super(),this.elements=t}}function Ha(r,t){let e=Ga(t);for(const n of r.elements)e=e.filter((i=>!kt(i,n)));return{arrayValue:{values:e}}}class ps extends fr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Co(r){return tt(r.integerValue||r.doubleValue)}function Ga(r){return bs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Qh(r,t){return r.field.isEqual(t.field)&&(function(n,i){return n instanceof nr&&i instanceof nr||n instanceof rr&&i instanceof rr?be(n.elements,i.elements,kt):n instanceof ps&&i instanceof ps?kt(n.Ae,i.Ae):n instanceof fs&&i instanceof fs})(r.transform,t.transform)}class he{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new he}static exists(t){return new he(void 0,t)}static updateTime(t){return new he(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ds{}function Ka(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Yh(r.key,he.none()):new Ns(r.key,r.data,he.none());{const e=r.data,n=Vt.empty();let i=new at(Tt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new pr(r.key,n,new $t(i.toArray()),he.none())}}function Wh(r,t,e){r instanceof Ns?(function(i,o,u){const l=i.value.clone(),d=bo(i.fieldTransforms,o,u.transformResults);l.setAll(d),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()})(r,t,e):r instanceof pr?(function(i,o,u){if(!Gn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const l=bo(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Qa(i)),d.setAll(l),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(r,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function un(r,t,e,n){return r instanceof Ns?(function(o,u,l,d){if(!Gn(o.precondition,u))return l;const f=o.value.clone(),_=Po(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(r,t,e,n):r instanceof pr?(function(o,u,l,d){if(!Gn(o.precondition,u))return l;const f=Po(o.fieldTransforms,d,u),_=u.data;return _.setAll(Qa(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w=>w.field)))})(r,t,e,n):(function(o,u,l){return Gn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l})(r,t,e)}function So(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&be(n,i,((o,u)=>Qh(o,u)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Ns extends Ds{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends Ds{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Qa(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function bo(r,t,e){const n=new Map;X(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,l=t.data.field(o.field);n.set(o.field,Gh(u,l,e[i]))}return n}function Po(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Hh(o,u,t))}return n}class Yh extends Ds{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Wh(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=un(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=un(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=$a();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(i.key)?null:l;const d=Ka(u,l);d!==null&&n.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(M.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),z())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,((e,n)=>So(e,n)))&&be(this.baseMutations,t.baseMutations,((e,n)=>So(e,n)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,U;function Wa(r){if(r===void 0)return Mt("GRPC error has no .code"),b.UNKNOWN;switch(r){case nt.OK:return b.OK;case nt.CANCELLED:return b.CANCELLED;case nt.UNKNOWN:return b.UNKNOWN;case nt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case nt.INTERNAL:return b.INTERNAL;case nt.UNAVAILABLE:return b.UNAVAILABLE;case nt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case nt.NOT_FOUND:return b.NOT_FOUND;case nt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case nt.ABORTED:return b.ABORTED;case nt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case nt.DATA_LOSS:return b.DATA_LOSS;default:return L(39323,{code:r})}}(U=nt||(nt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Kt([4294967295,4294967295],0);function Vo(r){const t=td().encode(r),e=new ya;return e.update(t),new Uint8Array(e.digest())}function Do(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,n],0),new Kt([i,o],0)]}class ks{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(n<0)throw new nn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Kt.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(Kt.fromNumber(n)));return i.compare(ed)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Vo(t),[n,i]=Do(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(n,i,o);if(!this.we(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ks(o,i,e);return n.forEach((l=>u.insert(l))),u}insert(t){if(this.ge===0)return;const e=Vo(t),[n,i]=Do(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(n,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,yn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new mr(M.min(),i,new et(B),te(),z())}}class yn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new yn(n,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e,n,i){this.be=t,this.removedTargetIds=e,this.key=n,this.De=i}}class Ya{constructor(t,e){this.targetId=t,this.Ce=e}}class Xa{constructor(t,e,n=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class No{constructor(){this.ve=0,this.Fe=ko(),this.Me=dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=z(),e=z(),n=z();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L(38017,{changeType:o})}})),new yn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=ko()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nd{constructor(t){this.Ge=t,this.ze=new Map,this.je=te(),this.Je=Bn(),this.He=Bn(),this.Ye=new et(B)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((n,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,n=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(hs(o))if(n===0){const u=new k(o.path);this.et(e,u,gt.newNoDocument(u,M.min()))}else X(n===1,20013,{expectedCount:n});else{const u=this._t(e);if(u!==n){const l=this.ut(t),d=l?this.ct(l,t,u):1;if(d!==0){this.it(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,l;try{u=Jt(n).toUint8Array()}catch(d){if(d instanceof ba)return Se("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new ks(u,i,o)}catch(d){return Se(d instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.ge===0?null:l}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let i=0;return n.forEach((o=>{const u=this.Ge.ht(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,u)=>{const l=this.ot(u);if(l){if(o.current&&hs(l.target)){const d=new k(l.target.path);this.It(d).has(u)||this.Et(u,d)||this.et(u,d,gt.newNoDocument(d,t))}o.Be&&(e.set(u,o.ke()),o.qe())}}));let n=z();this.He.forEach(((o,u)=>{let l=!0;u.forEachWhile((d=>{const f=this.ot(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(n=n.add(o))})),this.je.forEach(((o,u)=>u.setReadTime(t)));const i=new mr(t,e,this.Ye,this.je,n);return this.je=te(),this.Je=Bn(),this.He=Bn(),this.Ye=new et(B),i}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new No,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new at(B),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new at(B),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new No),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Bn(){return new et(k.comparator)}function ko(){return new et(k.comparator)}const rd={asc:"ASCENDING",desc:"DESCENDING"},sd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},id={and:"AND",or:"OR"};class od{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ms(r,t){return r.useProto3Json||ur(t)?t:{value:t}}function ad(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ud(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Ie(r){return X(!!r,49232),M.fromTimestamp((function(e){const n=Xt(e);return new rt(n.seconds,n.nanos)})(r))}function cd(r,t){return gs(r,t).canonicalString()}function gs(r,t){const e=(function(i){return new Y(["projects",i.projectId,"databases",i.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Ja(r){const t=Y.fromString(r);return X(ru(t),10190,{key:t.toString()}),t}function Qr(r,t){const e=Ja(t);if(e.get(1)!==r.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k(tu(e))}function Za(r,t){return cd(r.databaseId,t)}function ld(r){const t=Ja(r);return t.length===4?Y.emptyPath():tu(t)}function xo(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function tu(r){return X(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function hd(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,_){return f.useProto3Json?(X(_===void 0||typeof _=="string",58123),dt.fromBase64String(_||"")):(X(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),dt.fromUint8Array(_||new Uint8Array))})(r,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&(function(f){const _=f.code===void 0?b.UNKNOWN:Wa(f.code);return new N(_,f.message||"")})(u);e=new Xa(n,i,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Qr(r,n.document.name),o=Ie(n.document.updateTime),u=n.document.createTime?Ie(n.document.createTime):M.min(),l=new Vt({mapValue:{fields:n.document.fields}}),d=gt.newFoundDocument(i,o,u,l),f=n.targetIds||[],_=n.removedTargetIds||[];e=new Kn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Qr(r,n.document),o=n.readTime?Ie(n.readTime):M.min(),u=gt.newNoDocument(i,o),l=n.removedTargetIds||[];e=new Kn([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Qr(r,n.document),o=n.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return L(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Zh(i,o),l=n.targetId;e=new Ya(l,u)}}return e}function dd(r,t){return{documents:[Za(r,t.path)]}}function fd(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Za(r,i);const o=(function(f){if(f.length!==0)return nu(xt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(f){if(f.length!==0)return f.map((_=>(function(R){return{field:Ee(R.field),direction:gd(R.dir)}})(_)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=ms(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:e,parent:i}}function pd(r){let t=ld(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){X(n===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(w){const R=eu(w);return R instanceof xt&&Oa(R)?R.getFilters():[R]})(e.where));let u=[];e.orderBy&&(u=(function(w){return w.map((R=>(function(x){return new er(Te(x.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(R)))})(e.orderBy));let l=null;e.limit&&(l=(function(w){let R;return R=typeof w=="object"?w.value:w,ur(R)?null:R})(e.limit));let d=null;e.startAt&&(d=(function(w){const R=!!w.before,P=w.values||[];return new tr(P,R)})(e.startAt));let f=null;return e.endAt&&(f=(function(w){const R=!w.before,P=w.values||[];return new tr(P,R)})(e.endAt)),kh(t,i,u,o,l,"F",d,f)}function md(r,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function eu(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Te(e.unaryFilter.field);return ot.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Te(e.unaryFilter.field);return ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Te(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Te(e.unaryFilter.field);return ot.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(r):r.fieldFilter!==void 0?(function(e){return ot.create(Te(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return xt.create(e.compositeFilter.filters.map((n=>eu(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(r):L(30097,{filter:r})}function gd(r){return rd[r]}function _d(r){return sd[r]}function yd(r){return id[r]}function Ee(r){return{fieldPath:r.canonicalString()}}function Te(r){return Tt.fromServerFormat(r.fieldPath)}function nu(r){return r instanceof ot?(function(e){if(e.op==="=="){if(vo(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NAN"}};if(To(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vo(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NAN"}};if(To(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(e.field),op:_d(e.op),value:e.value}}})(r):r instanceof xt?(function(e){const n=e.getFilters().map((i=>nu(i)));return n.length===1?n[0]:{compositeFilter:{op:yd(e.op),filters:n}}})(r):L(54877,{filter:r})}function ru(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,n,i,o=M.min(),u=M.min(),l=dt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this.yt=t}}function Td(r){const t=pd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ds(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.Cn=new Id}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Yt.min())}updateCollectionGroup(t,e,n){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Id{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new at(Y.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new at(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},su=41943040;class wt{static withCacheSize(t){return new wt(t,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(su,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new De(0)}static cr(){return new De(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="LruGarbageCollector",wd=1048576;function Lo([r,t],[e,n]){const i=B(r,e);return i===0?B(t,n):i}class Ad{constructor(t){this.Ir=t,this.buffer=new at(Lo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Lo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Rd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){V(Mo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Me(e)?V(Mo,"Ignoring IndexedDB error during garbage collection: ",e):await or(e)}await this.Vr(3e5)}))}}class Cd{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(ar.ce);const n=new Ad(e);return this.mr.forEachTarget(t,(i=>n.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>n.Ar(i))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Oo)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oo):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,i,o,u,l,d,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,u=Date.now(),this.nthSequenceNumber(t,i)))).next((w=>(n=w,l=Date.now(),this.removeTargets(t,n,e)))).next((w=>(o=w,d=Date.now(),this.removeOrphanedDocuments(t,n)))).next((w=>(f=Date.now(),_e()<=q.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(l-u)+`ms
	Removed ${o} targets in `+(d-l)+`ms
	Removed ${w} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w}))))}}function Sd(r,t){return new Cd(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.changes=new fe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?C.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(n!==null&&un(n.mutation,i,$t.empty(),rt.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,z()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=z()){const i=ce();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((o=>{let u=en();return o.forEach(((l,d)=>{u=u.insert(l,d.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const n=ce();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,z())))}populateOverlays(t,e,n){const i=[];return n.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,l)=>{e.set(u,l)}))}))}computeViews(t,e,n,i){let o=te();const u=an(),l=(function(){return an()})();return e.forEach(((d,f)=>{const _=n.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof pr)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),un(_.mutation,f,_.mutation.getFieldMask(),rt.now())):u.set(f.key,$t.empty())})),this.recalculateAndSaveOverlays(t,o).next((d=>(d.forEach(((f,_)=>u.set(f,_))),e.forEach(((f,_)=>l.set(f,new Pd(_,u.get(f)??null)))),l)))}recalculateAndSaveOverlays(t,e){const n=an();let i=new et(((u,l)=>u-l)),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const l of u)l.keys().forEach((d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||$t.empty();_=l.applyToLocalView(f,_),n.set(d,_);const w=(i.get(l.batchId)||z()).add(d);i=i.insert(l.batchId,w)}))})).next((()=>{const u=[],l=i.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),f=d.key,_=d.value,w=$a();_.forEach((R=>{if(!o.has(R)){const P=Ka(e.get(R),n.get(R));P!==null&&w.set(R,P),o=o.add(R)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return C.waitFor(u)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,i){return(function(u){return k.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):C.resolve(ce());let l=hn,d=o;return u.next((f=>C.forEach(f,((_,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next((R=>{d=d.insert(_,R)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,d,f,z()))).next((_=>({batchId:l,changes:Bh(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next((n=>{let i=en();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=en();return this.indexManager.getCollectionParents(t,o).next((l=>C.forEach(l,(d=>{const f=(function(w,R){return new lr(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next((_=>{_.forEach(((w,R)=>{u=u.insert(w,R)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((u=>{o.forEach(((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))}));let l=en();return u.forEach(((d,f)=>{const _=o.get(d);_!==void 0&&un(_.mutation,f,$t.empty(),rt.now()),dr(e,f)&&(l=l.insert(d,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return C.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Ie(i.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Td(i.bundledQuery),readTime:Ie(i.readTime)}})(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.overlays=new et(k.comparator),this.qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ce();return C.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((i,o)=>{this.St(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(n)),C.resolve()}getOverlaysForCollection(t,e,n){const i=ce(),o=e.length+1,u=new k(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const d=l.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new et(((f,_)=>f-_));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=ce(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=ce(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((f,_)=>l.set(f,_))),!(l.size()>=i)););return C.resolve(l)}St(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Jh(e,n));let o=this.qr.get(e);o===void 0&&(o=z(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.Qr=new at(lt.$r),this.Ur=new at(lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new lt(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Gr(new lt(t,e))}zr(t,e){t.forEach((n=>this.removeReference(n,e)))}jr(t){const e=new k(new Y([])),n=new lt(e,t),i=new lt(e,t+1),o=[];return this.Ur.forEachInRange([n,i],(u=>{this.Gr(u),o.push(u.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new k(new Y([])),n=new lt(e,t),i=new lt(e,t+1);let o=z();return this.Ur.forEachInRange([n,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new lt(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class lt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return k.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new at(lt.$r)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Xh(o,e,n,i);this.mutationQueue.push(u);for(const l of i)this.Zr=this.Zr.add(new lt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ei(n),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?dh:this.tr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new lt(e,0),i=new lt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],(u=>{const l=this.Xr(u.Yr);o.push(l)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new at(B);return e.forEach((i=>{const o=new lt(i,0),u=new lt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,u],(l=>{n=n.add(l.Yr)}))})),C.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;k.isDocumentKey(o)||(o=o.child(""));const u=new lt(new k(o),0);let l=new at(B);return this.Zr.forEachWhile((d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(l=l.add(d.Yr)),!0)}),u),C.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((n=>{const i=this.Xr(n);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){X(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return C.forEach(e.mutations,(i=>{const o=new lt(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=n}))}ir(t){}containsKey(t,e){const n=new lt(e,0),i=this.Zr.firstAfterOrEqual(n);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.ri=t,this.docs=(function(){return new et(k.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return C.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=te();return e.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))})),C.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=te();const u=e.path,l=new k(u.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||uh(ah(_),n)<=0||(i.has(_.key)||dr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L(9500)}ii(t,e){return C.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Md(this)}getSize(t){return C.resolve(this.size)}}class Md extends bd{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(n)})),C.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t){this.persistence=t,this.si=new fe((e=>Ps(e)),Vs),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.oi=0,this._i=new xs,this.targetCount=0,this.ai=De.ur()}forEachTarget(t,e){return this.si.forEach(((n,i)=>e(i))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),C.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new De(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Pr(e),C.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.si.forEach(((u,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.si.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)})),C.waitFor(o).next((()=>i))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return C.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),C.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return C.resolve(n)}containsKey(t,e){return C.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e){this.ui={},this.overlays={},this.ci=new ar(0),this.li=!1,this.li=!0,this.hi=new kd,this.referenceDelegate=t(this),this.Pi=new Ld(this),this.indexManager=new vd,this.remoteDocumentCache=(function(i){return new Od(i)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new Ed(e),this.Ii=new Dd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Nd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new xd(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){V("MemoryPersistence","Starting transaction:",t);const i=new Fd(this.ci.next());return this.referenceDelegate.Ei(),n(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return C.or(Object.values(this.ui).map((n=>()=>n.containsKey(t,e))))}}class Fd extends lh{constructor(t){super(),this.currentSequenceNumber=t}}class Os{constructor(t){this.persistence=t,this.Ri=new xs,this.Vi=null}static mi(t){return new Os(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),C.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,(n=>{const i=k.fromPath(n);return this.gi(t,i).next((o=>{o||e.removeEntry(i,M.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return C.or([()=>C.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class sr{constructor(t,e){this.persistence=t,this.pi=new fe((n=>fh(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=Sd(this,e)}static mi(t,e){return new sr(t,e)}Ei(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((i=>n+i))))}wr(t){let e=0;return this.pr(t,(n=>{e++})).next((()=>e))}pr(t,e){return C.forEach(this.pi,((n,i)=>this.br(t,n,i).next((o=>o?C.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(u=>this.br(t,u,e).next((l=>{l||(n++,o.removeEntry(u,M.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),C.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),C.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Hn(t.data.value)),e}br(t,e,n){return C.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return C.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=i}static As(t,e){let n=z(),i=z();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ms(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Cc()?8:hh(Ac())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ys(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ws(t,e,i,n).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new Bd;return this.Ss(t,e,u).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,u,l.size)}))})).next((()=>o.result))}bs(t,e,n,i){return n.documentReadCount<this.fs?(_e()<=q.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(_e()<=q.DEBUG&&V("QueryEngine","Query:",ye(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(_e()<=q.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):C.resolve())}ys(t,e){if(Ro(e))return C.resolve(null);let n=Nt(e);return this.indexManager.getIndexType(t,n).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=ds(e,null,"F"),n=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const u=z(...o);return this.ps.getDocuments(t,u).next((l=>this.indexManager.getMinOffset(t,n).next((d=>{const f=this.Ds(e,l);return this.Cs(e,f,u,d.readTime)?this.ys(t,ds(e,null,"F")):this.vs(t,f,e,d)}))))})))))}ws(t,e,n,i){return Ro(e)||i.isEqual(M.min())?C.resolve(null):this.ps.getDocuments(t,n).next((o=>{const u=this.Ds(e,o);return this.Cs(e,u,n,i)?C.resolve(null):(_e()<=q.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ye(e)),this.vs(t,u,e,oh(i,hn)).next((l=>l)))}))}Ds(t,e){let n=new at(qa(t));return e.forEach(((i,o)=>{dr(t,o)&&(n=n.add(o))})),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,n){return _e()<=q.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ye(e)),this.ps.getDocumentsMatchingQuery(t,e,Yt.min(),n)}vs(t,e,n,i){return this.ps.getDocumentsMatchingQuery(t,n,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="LocalStore",qd=3e8;class jd{constructor(t,e,n,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new et(B),this.xs=new fe((o=>Ps(o)),Vs),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function $d(r,t,e,n){return new jd(r,t,e,n)}async function ou(r,t){const e=j(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const u=[],l=[];let d=z();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next((f=>({Ls:f,removedBatchIds:u,addedBatchIds:l})))}))}))}function au(r){const t=j(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function zd(r,t){const e=j(r),n=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const l=[];t.targetChanges.forEach(((_,w)=>{const R=i.get(w);if(!R)return;l.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,w).next((()=>e.Pi.addMatchingKeys(o,_.addedDocuments,w))));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?P=P.withResumeToken(dt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,n)),i=i.insert(w,P),(function(O,D,G){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=qd?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(R,P,_)&&l.push(e.Pi.updateTargetData(o,P))}));let d=te(),f=z();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),l.push(Hd(o,u,t.documentUpdates).next((_=>{d=_.ks,f=_.qs}))),!n.isEqual(M.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next((w=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n)));l.push(_)}return C.waitFor(l).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,d,f))).next((()=>d))})).then((o=>(e.Ms=i,o)))}function Hd(r,t,e){let n=z(),i=z();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let u=te();return e.forEach(((l,d)=>{const f=o.get(l);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),d.isNoDocument()&&d.version.isEqual(M.min())?(t.removeEntry(l,d.readTime),u=u.insert(l,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(l,d)):V(Ls,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",d.version)})),{ks:u,qs:i}}))}function Gd(r,t){const e=j(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return e.Pi.getTargetData(n,t).next((o=>o?(i=o,C.resolve(i)):e.Pi.allocateTargetId(n).next((u=>(i=new zt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=e.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n}))}async function _s(r,t,e){const n=j(r),i=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(u=>n.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!Me(u))throw u;V(Ls,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ms=n.Ms.remove(t),n.xs.delete(i.target)}function Fo(r,t,e){const n=j(r);let i=M.min(),o=z();return n.persistence.runTransaction("Execute query","readwrite",(u=>(function(d,f,_){const w=j(d),R=w.xs.get(_);return R!==void 0?C.resolve(w.Ms.get(R)):w.Pi.getTargetData(f,_)})(n,u,Nt(t)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(u,l.targetId).next((d=>{o=d}))})).next((()=>n.Fs.getDocumentsMatchingQuery(u,t,e?i:M.min(),e?o:z()))).next((l=>(Kd(n,Mh(t),l),{documents:l,Qs:o})))))}function Kd(r,t,e){let n=r.Os.get(t)||M.min();e.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.Os.set(t,n)}class Bo{constructor(){this.activeTargetIds=jh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qd{constructor(){this.Mo=new Bo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Bo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="ConnectivityMonitor";class qo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(Uo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){V(Uo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=null;function ys(){return Un===null?Un=(function(){return 268435456+Math.round(2147483648*Math.random())})():Un++,"0x"+Un.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="RestConnection",Yd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xd{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Zn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(t,e,n,i,o){const u=ys(),l=this.zo(t,e.toUriEncodedString());V(Wr,`Sending RPC '${t}' ${u}:`,l,n);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,i,o);const{host:f}=new URL(l),_=As(f);return this.Jo(t,l,d,n,_).then((w=>(V(Wr,`Received RPC '${t}' ${u}: `,w),w)),(w=>{throw Se(Wr,`RPC '${t}' ${u} failed with error: `,w,"url: ",l,"request:",n),w}))}Ho(t,e,n,i,o,u){return this.Go(t,e,n,i,o)}jo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Oe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),n&&n.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const n=Yd[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Zd extends Xd{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const u=ys();return new Promise(((l,d)=>{const f=new Ea;f.setWithCredentials(!0),f.listenOnce(Ta.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case zn.NO_ERROR:const w=f.getResponseJson();V(pt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),l(w);break;case zn.TIMEOUT:V(pt,`RPC '${t}' ${u} timed out`),d(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const R=f.getStatus();if(V(pt,`RPC '${t}' ${u} failed with status:`,R,"response text:",f.getResponseText()),R>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const x=P?.error;if(x&&x.status&&x.message){const O=(function(G){const $=G.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf($)>=0?$:b.UNKNOWN})(x.status);d(new N(O,x.message))}else d(new N(b.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new N(b.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:u,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{V(pt,`RPC '${t}' ${u} completed.`)}}));const _=JSON.stringify(i);V(pt,`RPC '${t}' ${u} sending request:`,i),f.send(e,"POST",_,n,15)}))}T_(t,e,n){const i=ys(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=wa(),l=Ia(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");V(pt,`Creating RPC '${t}' stream ${i}: ${_}`,d);const w=u.createWebChannel(_,d);this.I_(w);let R=!1,P=!1;const x=new Jd({Yo:D=>{P?V(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(V(pt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),V(pt,`RPC '${t}' stream ${i} sending:`,D),w.send(D))},Zo:()=>w.close()}),O=(D,G,$)=>{D.listen(G,(K=>{try{$(K)}catch(_t){setTimeout((()=>{throw _t}),0)}}))};return O(w,tn.EventType.OPEN,(()=>{P||(V(pt,`RPC '${t}' stream ${i} transport opened.`),x.o_())})),O(w,tn.EventType.CLOSE,(()=>{P||(P=!0,V(pt,`RPC '${t}' stream ${i} transport closed`),x.a_(),this.E_(w))})),O(w,tn.EventType.ERROR,(D=>{P||(P=!0,Se(pt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),x.a_(new N(b.UNAVAILABLE,"The operation could not be completed")))})),O(w,tn.EventType.MESSAGE,(D=>{if(!P){const G=D.data[0];X(!!G,16349);const $=G,K=$?.error||$[0]?.error;if(K){V(pt,`RPC '${t}' stream ${i} received error:`,K);const _t=K.status;let vt=(function(p){const g=nt[p];if(g!==void 0)return Wa(g)})(_t),ut=K.message;vt===void 0&&(vt=b.INTERNAL,ut="Unknown error status: "+_t+" with message "+K.message),P=!0,x.a_(new N(vt,ut)),w.close()}else V(pt,`RPC '${t}' stream ${i} received:`,G),x.u_(G)}})),O(l,va.STAT_EVENT,(D=>{D.stat===rs.PROXY?V(pt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===rs.NOPROXY&&V(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{x.__()}),0),x}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Yr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(r){return new od(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="PersistentStream";class tf{constructor(t,e,n,i,o,u,l,d){this.Mi=t,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new cu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Mt(e.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.D_===e&&this.G_(n,i)}),(n=>{t((()=>{const i=new N(b.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)}))}))}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{n((()=>this.z_(i)))})),this.stream.onMessage((i=>{n((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return V(jo,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(V(jo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ef extends tf{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=hd(this.serializer,t),n=(function(o){if(!("targetChange"in o))return M.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?M.min():u.readTime?Ie(u.readTime):M.min()})(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=xo(this.serializer),e.addTarget=(function(o,u){let l;const d=u.target;if(l=hs(d)?{documents:dd(o,d)}:{query:fd(o,d).ft},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=ud(o,u.resumeToken);const f=ms(o,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(M.min())>0){l.readTime=ad(o,u.snapshotVersion.toTimestamp());const f=ms(o,u.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,t);const n=md(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=xo(this.serializer),e.removeTarget=t,this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{}class rf extends nf{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Go(t,gs(e,n),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())}))}Ho(t,e,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,l])=>this.connection.Ho(t,gs(e,n),i,u,l,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(b.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class sf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mt(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="RemoteStore";class of{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((u=>{n.enqueueAndForget((async()=>{Tn(this)&&(V(Ne,"Restarting streams for network reachability change."),await(async function(d){const f=j(d);f.Ea.add(4),await En(f),f.Ra.set("Unknown"),f.Ea.delete(4),await gr(f)})(this))}))})),this.Ra=new sf(n,i)}}async function gr(r){if(Tn(r))for(const t of r.da)await t(!0)}async function En(r){for(const t of r.da)await t(!1)}function lu(r,t){const e=j(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),qs(e)?Us(e):Le(e).O_()&&Bs(e,t))}function Fs(r,t){const e=j(r),n=Le(e);e.Ia.delete(t),n.O_()&&hu(e,t),e.Ia.size===0&&(n.O_()?n.L_():Tn(e)&&e.Ra.set("Unknown"))}function Bs(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Le(r).Y_(t)}function hu(r,t){r.Va.Ue(t),Le(r).Z_(t)}function Us(r){r.Va=new nd({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Le(r).start(),r.Ra.ua()}function qs(r){return Tn(r)&&!Le(r).x_()&&r.Ia.size>0}function Tn(r){return j(r).Ea.size===0}function du(r){r.Va=void 0}async function af(r){r.Ra.set("Online")}async function uf(r){r.Ia.forEach(((t,e)=>{Bs(r,t)}))}async function cf(r,t){du(r),qs(r)?(r.Ra.ha(t),Us(r)):r.Ra.set("Unknown")}async function lf(r,t,e){if(r.Ra.set("Online"),t instanceof Xa&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const l of o.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,u),i.Ia.delete(l),i.Va.removeTarget(l))})(r,t)}catch(n){V(Ne,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await $o(r,n)}else if(t instanceof Kn?r.Va.Ze(t):t instanceof Ya?r.Va.st(t):r.Va.tt(t),!e.isEqual(M.min()))try{const n=await au(r.localStore);e.compareTo(n)>=0&&await(function(o,u){const l=o.Va.Tt(u);return l.targetChanges.forEach(((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.Ia.get(f);_&&o.Ia.set(f,_.withResumeToken(d.resumeToken,u))}})),l.targetMismatches.forEach(((d,f)=>{const _=o.Ia.get(d);if(!_)return;o.Ia.set(d,_.withResumeToken(dt.EMPTY_BYTE_STRING,_.snapshotVersion)),hu(o,d);const w=new zt(_.target,d,f,_.sequenceNumber);Bs(o,w)})),o.remoteSyncer.applyRemoteEvent(l)})(r,e)}catch(n){V(Ne,"Failed to raise snapshot:",n),await $o(r,n)}}async function $o(r,t,e){if(!Me(t))throw t;r.Ea.add(1),await En(r),r.Ra.set("Offline"),e||(e=()=>au(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{V(Ne,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await gr(r)}))}async function zo(r,t){const e=j(r);e.asyncQueue.verifyOperationInProgress(),V(Ne,"RemoteStore received new credentials");const n=Tn(e);e.Ea.add(3),await En(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await gr(e)}async function hf(r,t){const e=j(r);t?(e.Ea.delete(2),await gr(e)):t||(e.Ea.add(2),await En(e),e.Ra.set("Unknown"))}function Le(r){return r.ma||(r.ma=(function(e,n,i){const o=j(e);return o.sa(),new ef(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Xo:af.bind(null,r),t_:uf.bind(null,r),r_:cf.bind(null,r),H_:lf.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),qs(r)?Us(r):r.Ra.set("Unknown")):(await r.ma.stop(),du(r))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,l=new js(t,e,u,i,o);return l.start(n),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fu(r,t){if(Mt("AsyncQueue",`${t}: ${r}`),Me(r))return new N(b.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static emptySet(t){return new we(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||k.comparator(e.key,n.key):(e,n)=>k.comparator(e.key,n.key),this.keyedMap=en(),this.sortedSet=new et(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new we;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.ga=new et(k.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ke{constructor(t,e,n,i,o,u,l,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach((l=>{u.push({type:0,doc:l})})),new ke(t,e,we.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class ff{constructor(){this.queries=Go(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const i=j(e),o=i.queries;i.queries=Go(),o.forEach(((u,l)=>{for(const d of l.Sa)d.onError(n)}))})(this,new N(b.ABORTED,"Firestore shutting down"))}}function Go(){return new fe((r=>Ua(r)),hr)}async function pf(r,t){const e=j(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(n=2):(o=new df,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const l=fu(u,`Initialization of query '${ye(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&$s(e)}async function mf(r,t){const e=j(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.Sa.indexOf(t);u>=0&&(o.Sa.splice(u,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function gf(r,t){const e=j(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const l of u.Sa)l.Fa(i)&&(n=!0);u.wa=i}}n&&$s(e)}function _f(r,t,e){const n=j(r),i=n.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);n.queries.delete(t)}function $s(r){r.Ca.forEach((t=>{t.next()}))}var Es,Ko;(Ko=Es||(Es={})).Ma="default",Ko.Cache="cache";class yf{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new ke(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Es.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t){this.key=t}}class mu{constructor(t){this.key=t}}class Ef{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=qa(t),this.tu=new we(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Ho,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,l=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,w)=>{const R=i.get(_),P=dr(this.query,w)?w:null,x=!!R&&this.mutatedKeys.has(R.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;R&&P?R.data.isEqual(P.data)?x!==O&&(n.track({type:3,doc:P}),D=!0):this.su(R,P)||(n.track({type:2,doc:P}),D=!0,(d&&this.eu(P,d)>0||f&&this.eu(P,f)<0)&&(l=!0)):!R&&P?(n.track({type:0,doc:P}),D=!0):R&&!P&&(n.track({type:1,doc:R}),D=!0,(d||f)&&(l=!0)),D&&(P?(u=u.add(P),o=O?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{tu:u,iu:n,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const u=t.iu.ya();u.sort(((_,w)=>(function(P,x){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:D})}};return O(P)-O(x)})(_.type,w.type)||this.eu(_.doc,w.doc))),this.ou(n),i=i??!1;const l=e&&!i?this._u():[],d=this.Xa.size===0&&this.current&&!i?1:0,f=d!==this.Za;return this.Za=d,u.length!==0||f?{snapshot:new ke(this.query,t.tu,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ho,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=z(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const e=[];return t.forEach((n=>{this.Xa.has(n)||e.push(new mu(n))})),this.Xa.forEach((n=>{t.has(n)||e.push(new pu(n))})),e}cu(t){this.Ya=t.Qs,this.Xa=z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return ke.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zs="SyncEngine";class Tf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class vf{constructor(t){this.key=t,this.hu=!1}}class If{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new fe((l=>Ua(l)),hr),this.Iu=new Map,this.Eu=new Set,this.du=new et(k.comparator),this.Au=new Map,this.Ru=new xs,this.Vu={},this.mu=new Map,this.fu=De.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wf(r,t,e=!0){const n=Tu(r);let i;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await gu(n,t,e,!0),i}async function Af(r,t){const e=Tu(r);await gu(e,t,!0,!1)}async function gu(r,t,e,n){const i=await Gd(r.localStore,Nt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await Rf(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&lu(r.remoteStore,i),l}async function Rf(r,t,e,n,i){r.pu=(w,R,P)=>(async function(O,D,G,$){let K=D.view.ru(G);K.Cs&&(K=await Fo(O.localStore,D.query,!1).then((({documents:E})=>D.view.ru(E,K))));const _t=$&&$.targetChanges.get(D.targetId),vt=$&&$.targetMismatches.get(D.targetId)!=null,ut=D.view.applyChanges(K,O.isPrimaryClient,_t,vt);return Wo(O,D.targetId,ut.au),ut.snapshot})(r,w,R,P);const o=await Fo(r.localStore,t,!0),u=new Ef(t,o.Qs),l=u.ru(o.documents),d=yn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(l,r.isPrimaryClient,d);Wo(r,e,f.au);const _=new Tf(t,e,u);return r.Tu.set(t,_),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),f.snapshot}async function Cf(r,t,e){const n=j(r),i=n.Tu.get(t),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter((u=>!hr(u,t)))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await _s(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Fs(n.remoteStore,i.targetId),Ts(n,i.targetId)})).catch(or)):(Ts(n,i.targetId),await _s(n.localStore,i.targetId,!0))}async function Sf(r,t){const e=j(r),n=e.Tu.get(t),i=e.Iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Fs(e.remoteStore,n.targetId))}async function _u(r,t){const e=j(r);try{const n=await zd(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Au.get(o);u&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?X(u.hu,14607):i.removedDocuments.size>0&&(X(u.hu,42227),u.hu=!1))})),await Eu(e,n,t)}catch(n){await or(n)}}function Qo(r,t,e){const n=j(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Tu.forEach(((o,u)=>{const l=u.view.va(t);l.snapshot&&i.push(l.snapshot)})),(function(u,l){const d=j(u);d.onlineState=l;let f=!1;d.queries.forEach(((_,w)=>{for(const R of w.Sa)R.va(l)&&(f=!0)})),f&&$s(d)})(n.eventManager,t),i.length&&n.Pu.H_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function bf(r,t,e){const n=j(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Au.get(t),o=i&&i.key;if(o){let u=new et(k.comparator);u=u.insert(o,gt.newNoDocument(o,M.min()));const l=z().add(o),d=new mr(M.min(),new Map,new et(B),u,l);await _u(n,d),n.du=n.du.remove(o),n.Au.delete(t),Hs(n)}else await _s(n.localStore,t,!1).then((()=>Ts(n,t,e))).catch(or)}function Ts(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((n=>{r.Ru.containsKey(n)||yu(r,n)}))}function yu(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Fs(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Hs(r))}function Wo(r,t,e){for(const n of e)n instanceof pu?(r.Ru.addReference(n.key,t),Pf(r,n)):n instanceof mu?(V(zs,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||yu(r,n.key)):L(19791,{wu:n})}function Pf(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(V(zs,"New document in limbo: "+e),r.Eu.add(n),Hs(r))}function Hs(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new k(Y.fromString(t)),n=r.fu.next();r.Au.set(n,new vf(e)),r.du=r.du.insert(e,n),lu(r.remoteStore,new zt(Nt(Ba(e.path)),n,"TargetPurposeLimboResolution",ar.ce))}}async function Eu(r,t,e){const n=j(r),i=[],o=[],u=[];n.Tu.isEmpty()||(n.Tu.forEach(((l,d)=>{u.push(n.pu(d,t,e).then((f=>{if((f||e)&&n.isPrimaryClient){const _=f?!f.fromCache:e?.targetChanges.get(d.targetId)?.current;n.sharedClientState.updateQueryState(d.targetId,_?"current":"not-current")}if(f){i.push(f);const _=Ms.As(d.targetId,f);o.push(_)}})))})),await Promise.all(u),n.Pu.H_(i),await(async function(d,f){const _=j(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>C.forEach(f,(R=>C.forEach(R.Es,(P=>_.persistence.referenceDelegate.addReference(w,R.targetId,P))).next((()=>C.forEach(R.ds,(P=>_.persistence.referenceDelegate.removeReference(w,R.targetId,P)))))))))}catch(w){if(!Me(w))throw w;V(Ls,"Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const P=_.Ms.get(R),x=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(x);_.Ms=_.Ms.insert(R,O)}}})(n.localStore,o))}async function Vf(r,t){const e=j(r);if(!e.currentUser.isEqual(t)){V(zs,"User change. New user:",t.toKey());const n=await ou(e.localStore,t);e.currentUser=t,(function(o,u){o.mu.forEach((l=>{l.forEach((d=>{d.reject(new N(b.CANCELLED,u))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Eu(e,n.Ls)}}function Df(r,t){const e=j(r),n=e.Au.get(t);if(n&&n.hu)return z().add(n.key);{let i=z();const o=e.Iu.get(t);if(!o)return i;for(const u of o){const l=e.Tu.get(u);i=i.unionWith(l.view.nu)}return i}}function Tu(r){const t=j(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Df.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bf.bind(null,t),t.Pu.H_=gf.bind(null,t.eventManager),t.Pu.yu=_f.bind(null,t.eventManager),t}class ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=uu(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return $d(this.persistence,new Ud,t.initialUser,this.serializer)}Cu(t){return new iu(Os.mi,this.serializer)}Du(t){return new Qd}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ir.provider={build:()=>new ir};class Nf extends ir{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){X(this.persistence.referenceDelegate instanceof sr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Rd(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new iu((n=>sr.mi(n,e)),this.serializer)}}class vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Qo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vf.bind(null,this.syncEngine),await hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new ff})()}createDatastore(t){const e=uu(t.databaseInfo.databaseId),n=(function(o){return new Zd(o)})(t.databaseInfo);return(function(o,u,l,d){return new rf(o,u,l,d)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,i,o,u,l){return new of(n,i,o,u,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>Qo(this.syncEngine,e,0)),(function(){return qo.v()?new qo:new Wd})())}createSyncEngine(t,e){return(function(i,o,u,l,d,f,_){const w=new If(i,o,u,l,d,f);return _&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const n=j(e);V(Ne,"RemoteStore shutting down."),n.Ea.add(5),await En(n),n.Aa.shutdown(),n.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}vs.provider={build:()=>new vs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Mt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="FirestoreClient";class xf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=Ca.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async u=>{V(ee,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(n,(u=>(V(ee,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=fu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Xr(r,t){r.asyncQueue.verifyOperationInProgress(),V(ee,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await ou(t.localStore,i),n=i)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function Yo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Of(r);V(ee,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>zo(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>zo(t.remoteStore,i))),r._onlineComponents=t}async function Of(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(ee,"Using user provided OfflineComponentProvider");try{await Xr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Se("Error using user provided cache. Falling back to memory cache: "+e),await Xr(r,new ir)}}else V(ee,"Using default OfflineComponentProvider"),await Xr(r,new Nf(void 0));return r._offlineComponents}async function Mf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(ee,"Using user provided OnlineComponentProvider"),await Yo(r,r._uninitializedComponentsProvider._online)):(V(ee,"Using default OnlineComponentProvider"),await Yo(r,new vs))),r._onlineComponents}async function Lf(r){const t=await Mf(r),e=t.eventManager;return e.onListen=wf.bind(null,t.syncEngine),e.onUnlisten=Cf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Af.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Sf.bind(null,t.syncEngine),e}function Ff(r,t,e={}){const n=new le;return r.asyncQueue.enqueueAndForget((async()=>(function(o,u,l,d,f){const _=new kf({next:R=>{_.Nu(),u.enqueueAndForget((()=>mf(o,w))),R.fromCache&&d.source==="server"?f.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new yf(l,_,{includeMetadataChanges:!0,qa:!0});return pf(o,w)})(await Lf(r),r.asyncQueue,t,e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firestore.googleapis.com",Jo=!0;class Zo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Iu,this.ssl=Jo}else this.host=t.host,this.ssl=t.ssl??Jo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=su;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<wd)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}rh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vu(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Gs{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Kl;switch(n.type){case"firstParty":return new Xl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Xo.get(e);n&&(V("ComponentProvider","Removing Datastore"),Xo.delete(e),n.terminate())})(this),Promise.resolve()}}function Bf(r,t,e,n={}){r=is(r,Gs);const i=As(t),o=r._getSettings(),u={...o,emulatorOptions:r._getEmulatorOptions()},l=`${t}:${e}`;i&&(Ec(`https://${l}`),wc("Firestore",!0)),o.host!==Iu&&o.host!==l&&Se("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:l,ssl:i,emulatorOptions:n};if(!Yn(d,u)&&(r._setSettings(d),n.mockUserToken)){let f,_;if(typeof n.mockUserToken=="string")f=n.mockUserToken,_=mt.MOCK_USER;else{f=Tc(n.mockUserToken,r._app?.options.projectId);const w=n.mockUserToken.sub||n.mockUserToken.user_id;if(!w)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new mt(w)}r._authCredentials=new Ql(new Ra(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new _r(this.firestore,t,this._query)}}class Rt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(gn(e,Rt._jsonSchema))return new Rt(t,n||null,new k(Y.fromString(e.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:st("string",Rt._jsonSchemaVersion),referencePath:st("string")};class Ae extends _r{constructor(t,e,n){super(t,e,Ba(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new k(t))}withConverter(t){return new Ae(this.firestore,t,this._path)}}function Uf(r,t,...e){if(r=Nc(r),r instanceof Gs){const n=Y.fromString(t,...e);return ho(n),new Ae(r,null,n)}{if(!(r instanceof Rt||r instanceof Ae))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return ho(n),new Ae(r.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="AsyncQueue";class ea{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new cu(this,"async_queue_retry"),this._c=()=>{const n=Yr();n&&V(ta,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Yr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new le;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Me(t))throw t;V(ta,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((n=>{throw this.nc=n,this.rc=!1,Mt("INTERNAL UNHANDLED ERROR: ",na(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=js.createAndSchedule(this,t,e,n,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:na(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function na(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class wu extends Gs{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new ea,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ea(t),this._firestoreClient=void 0,await t}}}function qf(r,t){const e=typeof r=="object"?r:xl(),n=typeof r=="string"?r:Zn,i=Pl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=_c("firestore");o&&Bf(i,...o)}return i}function jf(r){if(r._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$f(r),r._firestoreClient}function $f(r){const t=r._freezeSettings(),e=(function(i,o,u,l){return new _h(i,o,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,vu(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new xf(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dt(dt.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Dt(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gn(t,Dt._jsonSchema))return Dt.fromBase64String(t.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:st("string",Dt._jsonSchemaVersion),bytes:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(t){if(gn(t,Qt._jsonSchema))return new Qt(t.latitude,t.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:st("string",Qt._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gn(t,Wt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Wt(t.vectorValues);throw new N(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:st("string",Wt._jsonSchemaVersion),vectorValues:st("object")};const zf=new RegExp("[~\\*/\\[\\]]");function Hf(r,t,e){if(t.search(zf)>=0)throw ra(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new Au(...t.split("."))._internalPath}catch{throw ra(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function ra(r,t,e,n,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new N(b.INVALID_ARGUMENT,o+r+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Gf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Cu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Gf extends Ru{data(){return super.data()}}function Cu(r,t){return typeof t=="string"?Hf(r,t):t instanceof Au?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qf{convertValue(t,e="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return _n(t,((i,o)=>{n[i]=this.convertValue(o,e)})),n}convertVectorValue(t){const e=t.fields?.[as].arrayValue?.values?.map((n=>tt(n.doubleValue)));return new Wt(e)}convertGeoPoint(t){return new Qt(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=cr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(dn(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);X(ru(n),9688,{name:t});const i=new fn(n.get(1),n.get(3)),o=new k(n.popFirst(5));return i.isEqual(e)||Mt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class qn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Re extends Ru{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Cu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Re._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Re._jsonSchemaVersion="firestore/documentSnapshot/1.0",Re._jsonSchema={type:st("string",Re._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class Qn extends Re{data(t={}){return super.data(t)}}class Ce{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new qn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Qn(this._firestore,this._userDataWriter,n.key,n,new qn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((l=>{const d=new Qn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const d=new Qn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return l.type!==0&&(f=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),_=u.indexOf(l.doc.key)),{type:Wf(l.type),doc:d,oldIndex:f,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ce._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ca.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Wf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:r})}}Ce._jsonSchemaVersion="firestore/querySnapshot/1.0",Ce._jsonSchema={type:st("string",Ce._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};class Yf extends Qf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function Xf(r){r=is(r,_r);const t=is(r.firestore,wu),e=jf(t),n=new Yf(t);return Kf(r._query),Ff(e,r._query).then((i=>new Ce(t,n,r,i)))}(function(t,e=!0){(function(i){Oe=i})(kl),Jn(new cn("firestore",((n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),l=new wu(new Wl(n.getProvider("auth-internal")),new Jl(u,n.getProvider("app-check-internal")),(function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(f.options.projectId,_)})(u,i),u);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),ve(ao,uo,t),ve(ao,uo,"esm2020")})();(function(){const r=document.getElementById("simpleSplash");if(!r)return;const t=1e3,e=500;let n=null;function i(){r.classList.remove("hidden"),r.style.pointerEvents="all";const l=r.querySelector("img");l&&l.setAttribute("aria-hidden","false")}function o(){requestAnimationFrame(()=>{r.classList.add("hidden"),r.style.pointerEvents="none"}),setTimeout(()=>{r&&r.parentNode&&r.parentNode.removeChild(r)},e+40)}i(),n=setTimeout(o,t),window.__skipSplash=function(){clearTimeout(n),o()};const u=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)");u&&u.matches&&(clearTimeout(n),n=setTimeout(o,Math.min(600,t)))})();const sa="chiligums_seen_intro_v1";function Jf({force:r=!1,message:t=null}={}){try{if(!r&&localStorage.getItem(sa)==="true")return}catch(d){console.warn("localStorage not available:",d)}if(document.querySelector(".intro-modal"))return;const e=document.createElement("div");e.className="intro-modal",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.innerHTML=`
    <div class="intro-modal__card" role="document">
      <button class="intro-close" aria-label="Cerrar">×</button>
      <h2>Cómo usar los puntos</h2>
      <p>${Zf(t||"Pulsa en cualquier pin del mapa para ver la información del punto de venta.")}</p>
      <div class="intro-actions">
        <button class="intro-ok">Entendido</button>
      </div>
    </div>`,document.body.appendChild(e);const n=e.querySelector(".intro-ok"),i=e.querySelector(".intro-close"),o=e.querySelector(".intro-skip-checkbox");n.focus();function u(){e&&(document.body.removeChild(e),document.removeEventListener("keydown",l))}function l(d){d.key==="Escape"&&u()}n.addEventListener("click",()=>{if(o&&o.checked)try{localStorage.setItem(sa,"true")}catch(d){console.warn("localStorage fail",d)}u()}),i.addEventListener("click",()=>{u()}),e.addEventListener("click",d=>{d.target===e&&u()}),document.addEventListener("keydown",l)}function Zf(r){return String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function tp(){Jf({force:!1})}const ep={apiKey:"AIzaSyBtnkqK0cq137PH_mJdaBeK55MPSHAXQ34",authDomain:"chiligums-map.firebaseapp.com",projectId:"chiligums-map",storageBucket:"chiligums-map.appspot.com",messagingSenderId:"207156196903",appId:"1:207156196903:web:546c8a59be8f7eac360002",measurementId:"G-3LVL8XNYBW"},np=ma(ep),rp=qf(np);mapboxgl.accessToken="pk.eyJ1IjoiYW5kcm8xMTUwIiwiYSI6ImNtZzQ4YjVudjByanUybnFiNXg4dHB4bmoifQ._SZZ_tvydofhnFu1FO_mAA";const Ks=[-78.1474059,.0429804],Z=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v12",center:Ks,zoom:14});Z.addControl(new mapboxgl.NavigationControl);function ia(){document.getElementById("mapLoader").style.display="flex"}function oa(){document.getElementById("mapLoader").style.display="none"}class sp{onAdd(t){this._map=t,this._btn=document.createElement("button"),this._btn.className="mapboxgl-ctrl-icon",this._btn.type="button",this._btn.title="Centrar en Cayambe",this._btn.textContent="🎯",this._btn.onclick=()=>{t.flyTo({center:Ks,zoom:14,speed:1.2})};const e=document.createElement("div");return e.className="mapboxgl-ctrl-group mapboxgl-ctrl",e.appendChild(this._btn),e}onRemove(){this._btn.parentNode.removeChild(this._btn),this._map=void 0}}Z.addControl(new sp,"top-right");const W=document.createElement("div");W.id="customPopup";W.style.position="absolute";W.style.transform="translate(-50%, -140%)";W.style.display="none";W.style.zIndex="999";Z.getContainer().appendChild(W);let Is=[],Ct=null,mn=null;async function Su(){(await Xf(Uf(rp,"puntos_venta"))).forEach(t=>{const e=t.data(),n=[e.lng,e.lat],i=new mapboxgl.Marker({color:"orange"}).setLngLat(n).addTo(Z);Is.push(i),i.getElement().addEventListener("click",async()=>{let o=`https://www.google.com/maps/dir/?api=1&destination=${e.lat},${e.lng}`;const u=document.querySelector("#pickupTemplate .popup-card").cloneNode(!0);u.querySelector(".popup-title").textContent=e.nombre??"Punto de venta",u.querySelector(".popup-desc").textContent=e.direccion??"",u.querySelector(".popup-btn").textContent="🚗 Ir con Google Maps",u.querySelector(".popup-btn").addEventListener("click",()=>{window.open(o,"_blank")});const l=u.querySelector(".popup-close");l&&l.addEventListener("click",()=>{W.style.display="none",mn=null});const d=u.cloneNode(!0);d.style.position="absolute",d.style.visibility="hidden",d.style.display="block",document.body.appendChild(d);const f=d.offsetHeight||200;d.remove();const w=Z.getContainer().clientHeight||Z.getCanvas().clientHeight,R=Z.project(n),x=w*.6-R.y,O=Z.project(Z.getCenter()),D={x:O.x,y:O.y-x},G=Z.unproject([D.x,D.y]);mn=n,Z.easeTo({center:G,duration:600,easing:$=>$}),Z.once("moveend",()=>{W.innerHTML="",W.appendChild(u);const $=Z.project(n);W.style.left=$.x+"px",W.style.top=$.y-f*.9+"px",W.style.display="block"}),navigator.geolocation&&navigator.geolocation.getCurrentPosition($=>{o+=`&origin=${$.coords.latitude},${$.coords.longitude}`})})})}function bu(){Is.forEach(r=>r.remove()),Is=[],Ct&&(Ct.remove(),Ct=null),W.style.display="none",mn=null}function aa(r,t){const n=`https://wa.me/593964031010?text=${encodeURIComponent("Hola, quiero hacer un pedido desde esta ubicación:")}%0AUbicación: https://maps.google.com/?q=${r},${t}`,i=document.querySelector("#deliveryTemplate .popup-card").cloneNode(!0);i.querySelector(".popup-title").textContent="Tu ubicación",i.querySelector(".popup-desc").innerHTML="Haz clic en el botón para pedir por WhatsApp. 👋 <br/>También puedes mover el pin para ajustar tu ubicación.",i.querySelector(".popup-btn").textContent="📲 Pedir por WhatsApp",i.querySelector(".popup-btn").addEventListener("click",()=>{window.open(n,"_blank")});const o=i.querySelector(".popup-close");o&&o.addEventListener("click",()=>{W.style.display="none"}),W.innerHTML="",W.appendChild(i);const u=Z.project([t,r]);W.style.left=u.x+"px",W.style.top=u.y+"px",W.style.display="block"}function ip(){return new Promise(r=>{bu(),navigator.geolocation.getCurrentPosition(t=>{const e=t.coords.latitude,n=t.coords.longitude;Ct&&Ct.remove(),Ct=new mapboxgl.Marker({color:"red",draggable:!0}).setLngLat([n,e]).addTo(Z),Z.flyTo({center:[n,e],zoom:15,offset:[0,10],speed:1.2}),aa(e,n);const i=document.createElement("div");i.innerText="🚩 Arrástrame",i.style.position="absolute",i.style.background="#fff",i.style.color="#111",i.style.padding="4px 8px",i.style.borderRadius="6px",i.style.fontSize="12px",i.style.fontWeight="600",i.style.boxShadow="0 2px 6px rgba(0,0,0,0.25)",i.style.transform="translate(-50%, -160%)",i.style.whiteSpace="nowrap",Ct.getElement().appendChild(i),setTimeout(()=>i.remove(),5e3),Ct.on("dragend",()=>{const u=Ct.getLngLat();aa(u.lat,u.lng),Z.flyTo({center:[u.lng,u.lat],zoom:15,offset:[0,10],speed:.6})}),r()},()=>{alert("No se pudo obtener la ubicación. Activa el GPS."),r()})})}Z.on("load",()=>{Su(),tp()});Z.on("move",()=>{if(W.style.display==="block"){const r=W.querySelector(".popup-card");if(r&&Ct){const t=Ct.getLngLat(),e=Z.project([t.lng,t.lat]);W.style.left=e.x+"px",W.style.top=e.y+"px"}else if(r&&mn){const t=Z.project(mn),e=r.offsetHeight||200;W.style.left=t.x+"px",W.style.top=t.y-e*.9+"px"}}});const jn=document.getElementById("pickupBtn"),$n=document.getElementById("deliveryBtn");jn&&$n&&(jn.addEventListener("click",()=>{jn.classList.add("active"),$n.classList.remove("active"),ia(),setTimeout(()=>{bu(),Z.flyTo({center:Ks,zoom:14,speed:1.2}),Su(),oa()},1500)}),$n.addEventListener("click",()=>{$n.classList.add("active"),jn.classList.remove("active"),ia(),ip().finally(()=>oa())}));
