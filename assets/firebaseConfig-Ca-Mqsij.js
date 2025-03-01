var Es={};/**
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
 */const _o=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},_u=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,c=l?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,v=o>>2,w=(o&3)<<4|c>>4;let S=(c&15)<<2|g>>6,V=g&63;f||(V=64,l||(S=64)),i.push(e[v],e[w],e[S],e[V])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(_o(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_u(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||g==null||w==null)throw new yu;const S=o<<2|c>>4;if(i.push(S),g!==64){const V=c<<4&240|g>>2;if(i.push(V),w!==64){const D=g<<6&192|w;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eu=function(n){const t=_o(n);return yo.encodeByteArray(t,!0)},Nn=function(n){return Eu(n).replace(/\./g,"")},Tu=function(n){try{return yo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Iu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vu=()=>Iu().__FIREBASE_DEFAULTS__,Au=()=>{if(typeof process>"u"||typeof Es>"u")return;const n=Es.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Tu(n[1]);return t&&JSON.parse(t)},Xr=()=>{try{return vu()||Au()||wu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ru=n=>{var t,e;return(e=(t=Xr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Pu=n=>{const t=Ru(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Eo=()=>{var n;return(n=Xr())===null||n===void 0?void 0:n.config};/**
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
 */class Su{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Cu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nn(JSON.stringify(e)),Nn(JSON.stringify(l)),""].join(".")}/**
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
 */function bu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vu(){var n;const t=(n=Xr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Du(){return!Vu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nu(){try{return typeof indexedDB=="object"}catch{return!1}}function ku(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ou="FirebaseError";class ye extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Ou,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?Mu(o,i):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new ye(s,c,i)}}function Mu(n,t){return n.replace(xu,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const xu=/\{\$([^}]+)}/g;function kr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],l=t[s];if(Ts(o)&&Ts(l)){if(!kr(o,l))return!1}else if(o!==l)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function Ts(n){return n!==null&&typeof n=="object"}/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}class He{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Lu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Su;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uu(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&l.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fu(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fu(n){return n===Qt?void 0:n}function Uu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Lu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const ju={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},$u=F.INFO,zu={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},qu=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=zu[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Io{constructor(t){this.name=t,this._logLevel=$u,this._logHandler=qu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ju[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Hu=(n,t)=>t.some(e=>n instanceof e);let Is,vs;function Gu(){return Is||(Is=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ku(){return vs||(vs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vo=new WeakMap,Or=new WeakMap,Ao=new WeakMap,Pr=new WeakMap,Yr=new WeakMap;function Wu(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Lt(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&vo.set(e,n)}).catch(()=>{}),Yr.set(t,n),t}function Qu(n){if(Or.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Or.set(n,t)}let Mr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Or.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ao.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Lt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Xu(n){Mr=n(Mr)}function Yu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Sr(this),t,...e);return Ao.set(i,t.sort?t.sort():[t]),Lt(i)}:Ku().includes(n)?function(...t){return n.apply(Sr(this),t),Lt(vo.get(this))}:function(...t){return Lt(n.apply(Sr(this),t))}}function Ju(n){return typeof n=="function"?Yu(n):(n instanceof IDBTransaction&&Qu(n),Hu(n,Gu())?new Proxy(n,Mr):n)}function Lt(n){if(n instanceof IDBRequest)return Wu(n);if(Pr.has(n))return Pr.get(n);const t=Ju(n);return t!==n&&(Pr.set(n,t),Yr.set(t,n)),t}const Sr=n=>Yr.get(n);function Zu(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),c=Lt(l);return i&&l.addEventListener("upgradeneeded",f=>{i(Lt(l.result),f.oldVersion,f.newVersion,Lt(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const tl=["get","getKey","getAll","getAllKeys","count"],el=["put","add","delete","clear"],Cr=new Map;function As(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Cr.get(t))return Cr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=el.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||tl.includes(e)))return;const o=async function(l,...c){const f=this.transaction(l,s?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(c.shift())),(await Promise.all([g[e](...c),s&&f.done]))[0]};return Cr.set(t,o),o}Xu(n=>({...n,get:(t,e,i)=>As(t,e)||n.get(t,e,i),has:(t,e)=>!!As(t,e)||n.has(t,e)}));/**
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
 */class nl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function rl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xr="@firebase/app",ws="0.11.1";/**
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
 */const Nt=new Io("@firebase/app"),il="@firebase/app-compat",sl="@firebase/analytics-compat",ol="@firebase/analytics",al="@firebase/app-check-compat",ul="@firebase/app-check",ll="@firebase/auth",cl="@firebase/auth-compat",hl="@firebase/database",fl="@firebase/data-connect",dl="@firebase/database-compat",pl="@firebase/functions",ml="@firebase/functions-compat",gl="@firebase/installations",_l="@firebase/installations-compat",yl="@firebase/messaging",El="@firebase/messaging-compat",Tl="@firebase/performance",Il="@firebase/performance-compat",vl="@firebase/remote-config",Al="@firebase/remote-config-compat",wl="@firebase/storage",Rl="@firebase/storage-compat",Pl="@firebase/firestore",Sl="@firebase/vertexai",Cl="@firebase/firestore-compat",bl="firebase",Vl="11.3.1";/**
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
 */const Lr="[DEFAULT]",Dl={[xr]:"fire-core",[il]:"fire-core-compat",[ol]:"fire-analytics",[sl]:"fire-analytics-compat",[ul]:"fire-app-check",[al]:"fire-app-check-compat",[ll]:"fire-auth",[cl]:"fire-auth-compat",[hl]:"fire-rtdb",[fl]:"fire-data-connect",[dl]:"fire-rtdb-compat",[pl]:"fire-fn",[ml]:"fire-fn-compat",[gl]:"fire-iid",[_l]:"fire-iid-compat",[yl]:"fire-fcm",[El]:"fire-fcm-compat",[Tl]:"fire-perf",[Il]:"fire-perf-compat",[vl]:"fire-rc",[Al]:"fire-rc-compat",[wl]:"fire-gcs",[Rl]:"fire-gcs-compat",[Pl]:"fire-fst",[Cl]:"fire-fst-compat",[Sl]:"fire-vertex","fire-js":"fire-js",[bl]:"fire-js-all"};/**
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
 */const kn=new Map,Nl=new Map,Fr=new Map;function Rs(n,t){try{n.container.addComponent(t)}catch(e){Nt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function On(n){const t=n.name;if(Fr.has(t))return Nt.debug(`There were multiple attempts to register component ${t}.`),!1;Fr.set(t,n);for(const e of kn.values())Rs(e,n);for(const e of Nl.values())Rs(e,n);return!0}function kl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ol(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ml={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new To("app","Firebase",Ml);/**
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
 */class xl{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Ll=Vl;function wo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Lr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(e||(e=Eo()),!e)throw Ft.create("no-options");const o=kn.get(s);if(o){if(kr(e,o.options)&&kr(i,o.config))return o;throw Ft.create("duplicate-app",{appName:s})}const l=new Bu(s);for(const f of Fr.values())l.addComponent(f);const c=new xl(e,i,l);return kn.set(s,c),c}function Fl(n=Lr){const t=kn.get(n);if(!t&&n===Lr&&Eo())return wo();if(!t)throw Ft.create("no-app",{appName:n});return t}function he(n,t,e){var i;let s=(i=Dl[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}On(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Ul="firebase-heartbeat-database",Bl=1,Ge="firebase-heartbeat-store";let br=null;function Ro(){return br||(br=Zu(Ul,Bl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ge)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),br}async function jl(n){try{const e=(await Ro()).transaction(Ge),i=await e.objectStore(Ge).get(Po(n));return await e.done,i}catch(t){if(t instanceof ye)Nt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nt.warn(e.message)}}}async function Ps(n,t){try{const i=(await Ro()).transaction(Ge,"readwrite");await i.objectStore(Ge).put(t,Po(n)),await i.done}catch(e){if(e instanceof ye)Nt.warn(e.message);else{const i=Ft.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(i.message)}}}function Po(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $l=1024,zl=30;class ql{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gl(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ss();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>zl){const l=Kl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Nt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ss(),{heartbeatsToSend:i,unsentEntries:s}=Hl(this._heartbeatsCache.heartbeats),o=Nn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Nt.warn(e),""}}}function Ss(){return new Date().toISOString().substring(0,10)}function Hl(n,t=$l){const e=[];let i=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),Cs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Cs(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Gl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nu()?ku().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await jl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Cs(n){return Nn(JSON.stringify({version:2,heartbeats:n})).length}function Kl(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function Wl(n){On(new He("platform-logger",t=>new nl(t),"PRIVATE")),On(new He("heartbeat",t=>new ql(t),"PRIVATE")),he(xr,ws,n),he(xr,ws,"esm2017"),he("fire-js","")}Wl("");var Ql="firebase",Xl="11.3.1";/**
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
 */he(Ql,Xl,"app");var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function m(){}m.prototype=d.prototype,E.D=d.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(_,y,I){for(var p=Array(arguments.length-2),St=2;St<arguments.length;St++)p[St-2]=arguments[St];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,m){m||(m=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=E.g[0],m=E.g[1],y=E.g[2];var I=E.g[3],p=d+(I^m&(y^I))+_[0]+3614090360&4294967295;d=m+(p<<7&4294967295|p>>>25),p=I+(y^d&(m^y))+_[1]+3905402710&4294967295,I=d+(p<<12&4294967295|p>>>20),p=y+(m^I&(d^m))+_[2]+606105819&4294967295,y=I+(p<<17&4294967295|p>>>15),p=m+(d^y&(I^d))+_[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(I^m&(y^I))+_[4]+4118548399&4294967295,d=m+(p<<7&4294967295|p>>>25),p=I+(y^d&(m^y))+_[5]+1200080426&4294967295,I=d+(p<<12&4294967295|p>>>20),p=y+(m^I&(d^m))+_[6]+2821735955&4294967295,y=I+(p<<17&4294967295|p>>>15),p=m+(d^y&(I^d))+_[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(I^m&(y^I))+_[8]+1770035416&4294967295,d=m+(p<<7&4294967295|p>>>25),p=I+(y^d&(m^y))+_[9]+2336552879&4294967295,I=d+(p<<12&4294967295|p>>>20),p=y+(m^I&(d^m))+_[10]+4294925233&4294967295,y=I+(p<<17&4294967295|p>>>15),p=m+(d^y&(I^d))+_[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(I^m&(y^I))+_[12]+1804603682&4294967295,d=m+(p<<7&4294967295|p>>>25),p=I+(y^d&(m^y))+_[13]+4254626195&4294967295,I=d+(p<<12&4294967295|p>>>20),p=y+(m^I&(d^m))+_[14]+2792965006&4294967295,y=I+(p<<17&4294967295|p>>>15),p=m+(d^y&(I^d))+_[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(y^I&(m^y))+_[1]+4129170786&4294967295,d=m+(p<<5&4294967295|p>>>27),p=I+(m^y&(d^m))+_[6]+3225465664&4294967295,I=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(I^d))+_[11]+643717713&4294967295,y=I+(p<<14&4294967295|p>>>18),p=m+(I^d&(y^I))+_[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^I&(m^y))+_[5]+3593408605&4294967295,d=m+(p<<5&4294967295|p>>>27),p=I+(m^y&(d^m))+_[10]+38016083&4294967295,I=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(I^d))+_[15]+3634488961&4294967295,y=I+(p<<14&4294967295|p>>>18),p=m+(I^d&(y^I))+_[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^I&(m^y))+_[9]+568446438&4294967295,d=m+(p<<5&4294967295|p>>>27),p=I+(m^y&(d^m))+_[14]+3275163606&4294967295,I=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(I^d))+_[3]+4107603335&4294967295,y=I+(p<<14&4294967295|p>>>18),p=m+(I^d&(y^I))+_[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^I&(m^y))+_[13]+2850285829&4294967295,d=m+(p<<5&4294967295|p>>>27),p=I+(m^y&(d^m))+_[2]+4243563512&4294967295,I=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(I^d))+_[7]+1735328473&4294967295,y=I+(p<<14&4294967295|p>>>18),p=m+(I^d&(y^I))+_[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(m^y^I)+_[5]+4294588738&4294967295,d=m+(p<<4&4294967295|p>>>28),p=I+(d^m^y)+_[8]+2272392833&4294967295,I=d+(p<<11&4294967295|p>>>21),p=y+(I^d^m)+_[11]+1839030562&4294967295,y=I+(p<<16&4294967295|p>>>16),p=m+(y^I^d)+_[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^I)+_[1]+2763975236&4294967295,d=m+(p<<4&4294967295|p>>>28),p=I+(d^m^y)+_[4]+1272893353&4294967295,I=d+(p<<11&4294967295|p>>>21),p=y+(I^d^m)+_[7]+4139469664&4294967295,y=I+(p<<16&4294967295|p>>>16),p=m+(y^I^d)+_[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^I)+_[13]+681279174&4294967295,d=m+(p<<4&4294967295|p>>>28),p=I+(d^m^y)+_[0]+3936430074&4294967295,I=d+(p<<11&4294967295|p>>>21),p=y+(I^d^m)+_[3]+3572445317&4294967295,y=I+(p<<16&4294967295|p>>>16),p=m+(y^I^d)+_[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^I)+_[9]+3654602809&4294967295,d=m+(p<<4&4294967295|p>>>28),p=I+(d^m^y)+_[12]+3873151461&4294967295,I=d+(p<<11&4294967295|p>>>21),p=y+(I^d^m)+_[15]+530742520&4294967295,y=I+(p<<16&4294967295|p>>>16),p=m+(y^I^d)+_[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(y^(m|~I))+_[0]+4096336452&4294967295,d=m+(p<<6&4294967295|p>>>26),p=I+(m^(d|~y))+_[7]+1126891415&4294967295,I=d+(p<<10&4294967295|p>>>22),p=y+(d^(I|~m))+_[14]+2878612391&4294967295,y=I+(p<<15&4294967295|p>>>17),p=m+(I^(y|~d))+_[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~I))+_[12]+1700485571&4294967295,d=m+(p<<6&4294967295|p>>>26),p=I+(m^(d|~y))+_[3]+2399980690&4294967295,I=d+(p<<10&4294967295|p>>>22),p=y+(d^(I|~m))+_[10]+4293915773&4294967295,y=I+(p<<15&4294967295|p>>>17),p=m+(I^(y|~d))+_[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~I))+_[8]+1873313359&4294967295,d=m+(p<<6&4294967295|p>>>26),p=I+(m^(d|~y))+_[15]+4264355552&4294967295,I=d+(p<<10&4294967295|p>>>22),p=y+(d^(I|~m))+_[6]+2734768916&4294967295,y=I+(p<<15&4294967295|p>>>17),p=m+(I^(y|~d))+_[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~I))+_[4]+4149444226&4294967295,d=m+(p<<6&4294967295|p>>>26),p=I+(m^(d|~y))+_[11]+3174756917&4294967295,I=d+(p<<10&4294967295|p>>>22),p=y+(d^(I|~m))+_[2]+718787259&4294967295,y=I+(p<<15&4294967295|p>>>17),p=m+(I^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+I&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var m=d-this.blockSize,_=this.B,y=this.h,I=0;I<d;){if(y==0)for(;I<=m;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<d;)if(_[y++]=E.charCodeAt(I++),y==this.blockSize){s(this,_),y=0;break}}else for(;I<d;)if(_[y++]=E[I++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var m=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=m&255,m/=256;for(this.u(E),E=Array(16),d=m=0;4>d;++d)for(var _=0;32>_;_+=8)E[m++]=this.g[d]>>>_&255;return E};function o(E,d){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=d(E)}function l(E,d){this.h=d;for(var m=[],_=!0,y=E.length-1;0<=y;y--){var I=E[y]|0;_&&I==d||(m[y]=I,_=!1)}this.g=m}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new l([d|0],0>d?-1:0)}):new l([E|0],0>E?-1:0)}function g(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(g(-E));for(var d=[],m=1,_=0;E>=m;_++)d[_]=E/m|0,m*=4294967296;return new l(d,0)}function v(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(v(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=g(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var I=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+I),d);8>I?(I=g(Math.pow(d,I)),_=_.j(I).add(g(p))):(_=_.j(m),_=_.add(g(p)))}return _}var w=f(0),S=f(1),V=f(16777216);n=l.prototype,n.m=function(){if(M(this))return-N(this).m();for(var E=0,d=1,m=0;m<this.g.length;m++){var _=this.i(m);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(M(this))return"-"+N(this).toString(E);for(var d=g(Math.pow(E,6)),m=this,_="";;){var y=ot(m,d).g;m=G(m,y.j(d));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=y,D(m))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=G(this,E),M(E)?-1:D(E)?0:1};function N(E){for(var d=E.g.length,m=[],_=0;_<d;_++)m[_]=~E.g[_];return new l(m,~E.h).add(S)}n.abs=function(){return M(this)?N(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0,y=0;y<=d;y++){var I=_+(this.i(y)&65535)+(E.i(y)&65535),p=(I>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,I&=65535,p&=65535,m[y]=p<<16|I}return new l(m,m[m.length-1]&-2147483648?-1:0)};function G(E,d){return E.add(N(d))}n.j=function(E){if(D(this)||D(E))return w;if(M(this))return M(E)?N(this).j(N(E)):N(N(this).j(E));if(M(E))return N(this.j(N(E)));if(0>this.l(V)&&0>E.l(V))return g(this.m()*E.m());for(var d=this.g.length+E.g.length,m=[],_=0;_<2*d;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var I=this.i(_)>>>16,p=this.i(_)&65535,St=E.i(y)>>>16,Ie=E.i(y)&65535;m[2*_+2*y]+=p*Ie,H(m,2*_+2*y),m[2*_+2*y+1]+=I*Ie,H(m,2*_+2*y+1),m[2*_+2*y+1]+=p*St,H(m,2*_+2*y+1),m[2*_+2*y+2]+=I*St,H(m,2*_+2*y+2)}for(_=0;_<d;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=d;_<2*d;_++)m[_]=0;return new l(m,0)};function H(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function K(E,d){this.g=E,this.h=d}function ot(E,d){if(D(d))throw Error("division by zero");if(D(E))return new K(w,w);if(M(E))return d=ot(N(E),d),new K(N(d.g),N(d.h));if(M(d))return d=ot(E,N(d)),new K(N(d.g),d.h);if(30<E.g.length){if(M(E)||M(d))throw Error("slowDivide_ only works with positive integers.");for(var m=S,_=d;0>=_.l(E);)m=qt(m),_=qt(_);var y=gt(m,1),I=gt(_,1);for(_=gt(_,2),m=gt(m,2);!D(_);){var p=I.add(_);0>=p.l(E)&&(y=y.add(m),I=p),_=gt(_,1),m=gt(m,1)}return d=G(E,y.j(d)),new K(y,d)}for(y=w;0<=E.l(d);){for(m=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=g(m),p=I.j(d);M(p)||0<p.l(E);)m-=_,I=g(m),p=I.j(d);D(I)&&(I=S),y=y.add(I),E=G(E,p)}return new K(y,E)}n.A=function(E){return ot(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)&E.i(_);return new l(m,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)|E.i(_);return new l(m,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)^E.i(_);return new l(m,this.h^E.h)};function qt(E){for(var d=E.g.length+1,m=[],_=0;_<d;_++)m[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(m,E.h)}function gt(E,d){var m=d>>5;d%=32;for(var _=E.g.length-m,y=[],I=0;I<_;I++)y[I]=0<d?E.i(I+m)>>>d|E.i(I+m+1)<<32-d:E.i(I+m);return new l(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=g,l.fromString=v,Jr=l}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});var An=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var So,Ue,Co,Cn,Ur,bo,Vo,Do;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,u){return r==Array.prototype||r==Object.prototype||(r[a]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof An=="object"&&An];for(var a=0;a<r.length;++a){var u=r[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var u=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var T=r[h];if(!(T in u))break t;u=u[T]}r=r[r.length-1],h=u[r],a=a(h),a!=h&&a!=null&&t(u,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var u=0,h=!1,T={next:function(){if(!h&&u<r.length){var A=u++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function g(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function v(r,a,u){return r.call.apply(r.bind,arguments)}function w(r,a,u){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),r.apply(a,T)}}return function(){return r.apply(a,arguments)}}function S(r,a,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,S.apply(null,arguments)}function V(r,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function D(r,a){function u(){}u.prototype=a.prototype,r.aa=a.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(h,T,A){for(var C=Array(arguments.length-2),j=2;j<arguments.length;j++)C[j-2]=arguments[j];return a.prototype[T].apply(h,C)}}function M(r){const a=r.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=r[h];return u}return[]}function N(r,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(f(h)){const T=r.length||0,A=h.length||0;r.length=T+A;for(let C=0;C<A;C++)r[T+C]=h[C]}else r.push(h)}}class G{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(r){return/^[\s\xa0]*$/.test(r)}function K(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function ot(r){return ot[" "](r),r}ot[" "]=function(){};var qt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function gt(r,a,u){for(const h in r)a.call(u,r[h],h,r)}function E(r,a){for(const u in r)a.call(void 0,r[u],u,r)}function d(r){const a={};for(const u in r)a[u]=r[u];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let u,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(u in h)r[u]=h[u];for(let A=0;A<m.length;A++)u=m[A],Object.prototype.hasOwnProperty.call(h,u)&&(r[u]=h[u])}}function y(r){var a=1;r=r.split(":");const u=[];for(;0<a&&r.length;)u.push(r.shift()),a--;return r.length&&u.push(r.join(":")),u}function I(r){c.setTimeout(()=>{throw r},0)}function p(){var r=nr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class St{constructor(){this.h=this.g=null}add(a,u){const h=Ie.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var Ie=new G(()=>new xa,r=>r.reset());class xa{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,Ae=!1,nr=new St,Ei=()=>{const r=c.Promise.resolve(void 0);ve=()=>{r.then(La)}};var La=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(u){I(u)}var a=Ie;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Ae=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Fa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return r}();function we(r,a){if(at.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(qt){t:{try{ot(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else u=="mouseover"?a=r.fromElement:u=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Ua[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&we.aa.h.call(this)}}D(we,at);var Ua={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),Ba=0;function ja(r,a,u,h,T){this.listener=r,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=T,this.key=++Ba,this.da=this.fa=!1}function sn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function on(r){this.src=r,this.g={},this.h=0}on.prototype.add=function(r,a,u,h,T){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var C=ir(r,a,h,T);return-1<C?(a=r[C],u||(a.fa=!1)):(a=new ja(a,this.src,A,!!h,T),a.fa=u,r.push(a)),a};function rr(r,a){var u=a.type;if(u in r.g){var h=r.g[u],T=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(h,T,1),A&&(sn(a),r.g[u].length==0&&(delete r.g[u],r.h--))}}function ir(r,a,u,h){for(var T=0;T<r.length;++T){var A=r[T];if(!A.da&&A.listener==a&&A.capture==!!u&&A.ha==h)return T}return-1}var sr="closure_lm_"+(1e6*Math.random()|0),or={};function Ti(r,a,u,h,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Ti(r,a[A],u,h,T);return null}return u=Ai(u),r&&r[rn]?r.K(a,u,g(h)?!!h.capture:!1,T):$a(r,a,u,!1,h,T)}function $a(r,a,u,h,T,A){if(!a)throw Error("Invalid event type");var C=g(T)?!!T.capture:!!T,j=ur(r);if(j||(r[sr]=j=new on(r)),u=j.add(a,u,h,C,A),u.proxy)return u;if(h=za(),u.proxy=h,h.src=r,h.listener=u,r.addEventListener)Fa||(T=C),T===void 0&&(T=!1),r.addEventListener(a.toString(),h,T);else if(r.attachEvent)r.attachEvent(vi(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function za(){function r(u){return a.call(r.src,r.listener,u)}const a=qa;return r}function Ii(r,a,u,h,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ii(r,a[A],u,h,T);else h=g(h)?!!h.capture:!!h,u=Ai(u),r&&r[rn]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],u=ir(A,u,h,T),-1<u&&(sn(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=ur(r))&&(a=r.g[a.toString()],r=-1,a&&(r=ir(a,u,h,T)),(u=-1<r?a[r]:null)&&ar(u))}function ar(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[rn])rr(a.i,r);else{var u=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(u,h,r.capture):a.detachEvent?a.detachEvent(vi(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=ur(a))?(rr(u,r),u.h==0&&(u.src=null,a[sr]=null)):sn(r)}}}function vi(r){return r in or?or[r]:or[r]="on"+r}function qa(r,a){if(r.da)r=!0;else{a=new we(a,this);var u=r.listener,h=r.ha||r.src;r.fa&&ar(r),r=u.call(h,a)}return r}function ur(r){return r=r[sr],r instanceof on?r:null}var lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ai(r){return typeof r=="function"?r:(r[lr]||(r[lr]=function(a){return r.handleEvent(a)}),r[lr])}function ut(){kt.call(this),this.i=new on(this),this.M=this,this.F=null}D(ut,kt),ut.prototype[rn]=!0,ut.prototype.removeEventListener=function(r,a,u,h){Ii(this,r,a,u,h)};function pt(r,a){var u,h=r.F;if(h)for(u=[];h;h=h.F)u.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new at(a,r);else if(a instanceof at)a.target=a.target||r;else{var T=a;a=new at(h,r),_(a,T)}if(T=!0,u)for(var A=u.length-1;0<=A;A--){var C=a.g=u[A];T=an(C,h,!0,a)&&T}if(C=a.g=r,T=an(C,h,!0,a)&&T,T=an(C,h,!1,a)&&T,u)for(A=0;A<u.length;A++)C=a.g=u[A],T=an(C,h,!1,a)&&T}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var u=r.g[a],h=0;h<u.length;h++)sn(u[h]);delete r.g[a],r.h--}}this.F=null},ut.prototype.K=function(r,a,u,h){return this.i.add(String(r),a,!1,u,h)},ut.prototype.L=function(r,a,u,h){return this.i.add(String(r),a,!0,u,h)};function an(r,a,u,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==u){var j=C.listener,et=C.ha||C.src;C.fa&&rr(r.i,C),T=j.call(et,h)!==!1&&T}}return T&&!h.defaultPrevented}function wi(r,a,u){if(typeof r=="function")u&&(r=S(r,u));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Ri(r){r.g=wi(()=>{r.g=null,r.i&&(r.i=!1,Ri(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Ha extends kt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ri(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(r){kt.call(this),this.h=r,this.g={}}D(Re,kt);var Pi=[];function Si(r){gt(r.g,function(a,u){this.g.hasOwnProperty(u)&&ar(a)},r),r.g={}}Re.prototype.N=function(){Re.aa.N.call(this),Si(this)},Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cr=c.JSON.stringify,Ga=c.JSON.parse,Ka=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function hr(){}hr.prototype.h=null;function Ci(r){return r.h||(r.h=r.i())}function bi(){}var Pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fr(){at.call(this,"d")}D(fr,at);function dr(){at.call(this,"c")}D(dr,at);var Ht={},Vi=null;function un(){return Vi=Vi||new ut}Ht.La="serverreachability";function Di(r){at.call(this,Ht.La,r)}D(Di,at);function Se(r){const a=un();pt(a,new Di(a))}Ht.STAT_EVENT="statevent";function Ni(r,a){at.call(this,Ht.STAT_EVENT,r),this.stat=a}D(Ni,at);function mt(r){const a=un();pt(a,new Ni(a,r))}Ht.Ma="timingevent";function ki(r,a){at.call(this,Ht.Ma,r),this.size=a}D(ki,at);function Ce(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function be(){this.g=!0}be.prototype.xa=function(){this.g=!1};function Wa(r,a,u,h,T,A){r.info(function(){if(r.g)if(A)for(var C="",j=A.split("&"),et=0;et<j.length;et++){var U=j[et].split("=");if(1<U.length){var lt=U[0];U=U[1];var ct=lt.split("_");C=2<=ct.length&&ct[1]=="type"?C+(lt+"="+U+"&"):C+(lt+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+u+`
`+C})}function Qa(r,a,u,h,T,A,C){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+u+`
`+A+" "+C})}function se(r,a,u,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Ya(r,u)+(h?" "+h:"")})}function Xa(r,a){r.info(function(){return"TIMEOUT: "+a})}be.prototype.info=function(){};function Ya(r,a){if(!r.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var h=u[r];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return cr(u)}catch{return a}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pr;function cn(){}D(cn,hr),cn.prototype.g=function(){return new XMLHttpRequest},cn.prototype.i=function(){return{}},pr=new cn;function Ot(r,a,u,h){this.j=r,this.i=a,this.l=u,this.R=h||1,this.U=new Re(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mi}function Mi(){this.i=null,this.g="",this.h=!1}var xi={},mr={};function gr(r,a,u){r.L=1,r.v=pn(Ct(a)),r.m=u,r.P=!0,Li(r,null)}function Li(r,a){r.F=Date.now(),hn(r),r.A=Ct(r.v);var u=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),Yi(u.i,"t",h),r.C=0,u=r.j.J,r.h=new Mi,r.g=ms(r.j,u?a:null,!r.m),0<r.O&&(r.M=new Ha(S(r.Y,r,r.g),r.O)),a=r.U,u=r.g,h=r.ca;var T="readystatechange";Array.isArray(T)||(T&&(Pi[0]=T.toString()),T=Pi);for(var A=0;A<T.length;A++){var C=Ti(u,T[A],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Se(),Wa(r.i,r.u,r.A,r.l,r.R,r.m)}Ot.prototype.ca=function(r){r=r.target;const a=this.M;a&&bt(r)==3?a.j():this.Y(r)},Ot.prototype.Y=function(r){try{if(r==this.g)t:{const ct=bt(this.g);var a=this.g.Ba();const ue=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||is(this.g)))){this.J||ct!=4||a==7||(a==8||0>=ue?Se(3):Se(2)),_r(this);var u=this.g.Z();this.X=u;e:if(Fi(this)){var h=is(this.g);r="";var T=h.length,A=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Ve(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==T-1)});h.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=u==200,Qa(this.i,this.u,this.A,this.l,this.R,ct,u),this.o){if(this.T&&!this.K){e:{if(this.g){var j,et=this.g;if((j=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(j)){var U=j;break e}}U=null}if(u=U)se(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yr(this,u);else{this.o=!1,this.s=3,mt(12),Gt(this),Ve(this);break t}}if(this.P){u=!0;let Tt;for(;!this.J&&this.C<C.length;)if(Tt=Ja(this,C),Tt==mr){ct==4&&(this.s=4,mt(14),u=!1),se(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==xi){this.s=4,mt(15),se(this.i,this.l,C,"[Invalid Chunk]"),u=!1;break}else se(this.i,this.l,Tt,null),yr(this,Tt);if(Fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||C.length!=0||this.h.h||(this.s=1,mt(16),u=!1),this.o=this.o&&u,!u)se(this.i,this.l,C,"[Invalid Chunked Response]"),Gt(this),Ve(this);else if(0<C.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),wr(lt),lt.M=!0,mt(11))}}else se(this.i,this.l,C,null),yr(this,C);ct==4&&Gt(this),this.o&&!this.J&&(ct==4?hs(this.j,this):(this.o=!1,hn(this)))}else mu(this.g),u==400&&0<C.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Gt(this),Ve(this)}}}catch{}finally{}};function Fi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Ja(r,a){var u=r.C,h=a.indexOf(`
`,u);return h==-1?mr:(u=Number(a.substring(u,h)),isNaN(u)?xi:(h+=1,h+u>a.length?mr:(a=a.slice(h,h+u),r.C=h+u,a)))}Ot.prototype.cancel=function(){this.J=!0,Gt(this)};function hn(r){r.S=Date.now()+r.I,Ui(r,r.I)}function Ui(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ce(S(r.ba,r),a)}function _r(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Ot.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Xa(this.i,this.A),this.L!=2&&(Se(),mt(17)),Gt(this),this.s=2,Ve(this)):Ui(this,this.S-r)};function Ve(r){r.j.G==0||r.J||hs(r.j,r)}function Gt(r){_r(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Si(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function yr(r,a){try{var u=r.j;if(u.G!=0&&(u.g==r||Er(u.h,r))){if(!r.K&&Er(u.h,r)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)Tn(u),yn(u);else break t;Ar(u),mt(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ce(S(u.Za,u),6e3));if(1>=$i(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Wt(u,11)}else if((r.K||u.g==r)&&Tn(u),!H(a))for(T=u.Da.g.parse(a),a=0;a<T.length;a++){let U=T[a];if(u.T=U[0],U=U[1],u.G==2)if(U[0]=="c"){u.K=U[1],u.ia=U[2];const lt=U[3];lt!=null&&(u.la=lt,u.j.info("VER="+u.la));const ct=U[4];ct!=null&&(u.Aa=ct,u.j.info("SVER="+u.Aa));const ue=U[5];ue!=null&&typeof ue=="number"&&0<ue&&(h=1.5*ue,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const Tt=r.g;if(Tt){const vn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vn){var A=h.h;A.g||vn.indexOf("spdy")==-1&&vn.indexOf("quic")==-1&&vn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Tr(A,A.h),A.h=null))}if(h.D){const Rr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Rr&&(h.ya=Rr,z(h.I,h.D,Rr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var C=r;if(h.qa=ps(h,h.J?h.ia:null,h.W),C.K){zi(h.h,C);var j=C,et=h.L;et&&(j.I=et),j.B&&(_r(j),hn(j)),h.g=C}else ls(h);0<u.i.length&&En(u)}else U[0]!="stop"&&U[0]!="close"||Wt(u,7);else u.G==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?Wt(u,7):vr(u):U[0]!="noop"&&u.l&&u.l.ta(U),u.v=0)}}Se(4)}catch{}}var Za=class{constructor(r,a){this.g=r,this.map=a}};function Bi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ji(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function $i(r){return r.h?1:r.g?r.g.size:0}function Er(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Tr(r,a){r.g?r.g.add(a):r.h=a}function zi(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Bi.prototype.cancel=function(){if(this.i=qi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function qi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const u of r.g.values())a=a.concat(u.D);return a}return M(r.i)}function tu(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],u=r.length,h=0;h<u;h++)a.push(r[h]);return a}a=[],u=0;for(h in r)a[u++]=r[h];return a}function eu(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var u=0;u<r;u++)a.push(u);return a}a=[],u=0;for(const h in r)a[u++]=h;return a}}}function Hi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var u=eu(r),h=tu(r),T=h.length,A=0;A<T;A++)a.call(void 0,h[A],u&&u[A],r)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nu(r,a){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var h=r[u].indexOf("="),T=null;if(0<=h){var A=r[u].substring(0,h);T=r[u].substring(h+1)}else A=r[u];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Kt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Kt){this.h=r.h,fn(this,r.j),this.o=r.o,this.g=r.g,dn(this,r.s),this.l=r.l;var a=r.i,u=new ke;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Ki(this,u),this.m=r.m}else r&&(a=String(r).match(Gi))?(this.h=!1,fn(this,a[1]||"",!0),this.o=De(a[2]||""),this.g=De(a[3]||"",!0),dn(this,a[4]),this.l=De(a[5]||"",!0),Ki(this,a[6]||"",!0),this.m=De(a[7]||"")):(this.h=!1,this.i=new ke(null,this.h))}Kt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Ne(a,Wi,!0),":");var u=this.g;return(u||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Ne(a,Wi,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Ne(u,u.charAt(0)=="/"?su:iu,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Ne(u,au)),r.join("")};function Ct(r){return new Kt(r)}function fn(r,a,u){r.j=u?De(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function dn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function Ki(r,a,u){a instanceof ke?(r.i=a,uu(r.i,r.h)):(u||(a=Ne(a,ou)),r.i=new ke(a,r.h))}function z(r,a,u){r.i.set(a,u)}function pn(r){return z(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function De(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ne(r,a,u){return typeof r=="string"?(r=encodeURI(r).replace(a,ru),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function ru(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Wi=/[#\/\?@]/g,iu=/[#\?:]/g,su=/[#\?]/g,ou=/[#\?@]/g,au=/#/g;function ke(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Mt(r){r.g||(r.g=new Map,r.h=0,r.i&&nu(r.i,function(a,u){r.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=ke.prototype,n.add=function(r,a){Mt(this),this.i=null,r=oe(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(a),this.h+=1,this};function Qi(r,a){Mt(r),a=oe(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Xi(r,a){return Mt(r),a=oe(r,a),r.g.has(a)}n.forEach=function(r,a){Mt(this),this.g.forEach(function(u,h){u.forEach(function(T){r.call(a,T,h,this)},this)},this)},n.na=function(){Mt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const T=r[h];for(let A=0;A<T.length;A++)u.push(a[h])}return u},n.V=function(r){Mt(this);let a=[];if(typeof r=="string")Xi(this,r)&&(a=a.concat(this.g.get(oe(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)a=a.concat(r[u])}return a},n.set=function(r,a){return Mt(this),this.i=null,r=oe(this,r),Xi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Yi(r,a,u){Qi(r,a),0<u.length&&(r.i=null,r.g.set(oe(r,a),M(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const A=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var T=A;C[h]!==""&&(T+="="+encodeURIComponent(String(C[h]))),r.push(T)}}return this.i=r.join("&")};function oe(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function uu(r,a){a&&!r.j&&(Mt(r),r.i=null,r.g.forEach(function(u,h){var T=h.toLowerCase();h!=T&&(Qi(this,h),Yi(this,T,u))},r)),r.j=a}function lu(r,a){const u=new be;if(c.Image){const h=new Image;h.onload=V(xt,u,"TestLoadImage: loaded",!0,a,h),h.onerror=V(xt,u,"TestLoadImage: error",!1,a,h),h.onabort=V(xt,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=V(xt,u,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function cu(r,a){const u=new be,h=new AbortController,T=setTimeout(()=>{h.abort(),xt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(T),A.ok?xt(u,"TestPingServer: ok",!0,a):xt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),xt(u,"TestPingServer: error",!1,a)})}function xt(r,a,u,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(u)}catch{}}function hu(){this.g=new Ka}function fu(r,a,u){const h=u||"";try{Hi(r,function(T,A){let C=T;g(T)&&(C=cr(T)),a.push(h+A+"="+encodeURIComponent(C))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function mn(r){this.l=r.Ub||null,this.j=r.eb||!1}D(mn,hr),mn.prototype.g=function(){return new gn(this.l,this.j)},mn.prototype.i=function(r){return function(){return r}}({});function gn(r,a){ut.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(gn,ut),n=gn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Me(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Me(this)),this.g&&(this.readyState=3,Me(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ji(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ji(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Oe(this):Me(this),this.readyState==3&&Ji(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Oe(this))},n.Qa=function(r){this.g&&(this.response=r,Oe(this))},n.ga=function(){this.g&&Oe(this)};function Oe(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Me(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=a.next();return r.join(`\r
`)};function Me(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Zi(r){let a="";return gt(r,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Ir(r,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=Zi(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):z(r,a,u))}function W(r){ut.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(W,ut);var du=/^https?$/i,pu=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pr.g(),this.v=this.o?Ci(this.o):Ci(pr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){ts(this,A);return}if(r=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)u.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())u.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(pu,a,void 0))||h||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of u)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rs(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){ts(this,A)}};function ts(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,es(r),_n(r)}function es(r){r.A||(r.A=!0,pt(r,"complete"),pt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,pt(this,"complete"),pt(this,"abort"),_n(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_n(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ns(this):this.bb())},n.bb=function(){ns(this)};function ns(r){if(r.h&&typeof l<"u"&&(!r.v[1]||bt(r)!=4||r.Z()!=2)){if(r.u&&bt(r)==4)wi(r.Ea,0,r);else if(pt(r,"readystatechange"),bt(r)==4){r.h=!1;try{const C=r.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=C===0){var T=String(r.D).match(Gi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!du.test(T?T.toLowerCase():"")}u=h}if(u)pt(r,"complete"),pt(r,"success");else{r.m=6;try{var A=2<bt(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",es(r)}}finally{_n(r)}}}}function _n(r,a){if(r.g){rs(r);const u=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||pt(r,"ready");try{u.onreadystatechange=h}catch{}}}function rs(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function bt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Ga(a)}};function is(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function mu(r){const a={};r=(r.g&&2<=bt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(H(r[h]))continue;var u=y(r[h]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=a[T]||[];a[T]=A,A.push(u)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xe(r,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||a}function ss(r){this.Aa=0,this.i=[],this.j=new be,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xe("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xe("baseRetryDelayMs",5e3,r),this.cb=xe("retryDelaySeedMs",1e4,r),this.Wa=xe("forwardChannelMaxRetries",2,r),this.wa=xe("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(r&&r.concurrentRequestLimit),this.Da=new hu,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ss.prototype,n.la=8,n.G=1,n.connect=function(r,a,u,h){mt(0),this.W=r,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=ps(this,null,this.W),En(this)};function vr(r){if(os(r),r.G==3){var a=r.U++,u=Ct(r.I);if(z(u,"SID",r.K),z(u,"RID",a),z(u,"TYPE","terminate"),Le(r,u),a=new Ot(r,r.j,a),a.L=2,a.v=pn(Ct(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=ms(a.j,null),a.g.ea(a.v)),a.F=Date.now(),hn(a)}ds(r)}function yn(r){r.g&&(wr(r),r.g.cancel(),r.g=null)}function os(r){yn(r),r.u&&(c.clearTimeout(r.u),r.u=null),Tn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function En(r){if(!ji(r.h)&&!r.s){r.s=!0;var a=r.Ga;ve||Ei(),Ae||(ve(),Ae=!0),nr.add(a,r),r.B=0}}function gu(r,a){return $i(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ce(S(r.Ga,r,a),fs(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const T=new Ot(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=us(this,T,a),u=Ct(this.I),z(u,"RID",r),z(u,"CVER",22),this.D&&z(u,"X-HTTP-Session-Id",this.D),Le(this,u),A&&(this.O?a="headers="+encodeURIComponent(String(Zi(A)))+"&"+a:this.m&&Ir(u,this.m,A)),Tr(this.h,T),this.Ua&&z(u,"TYPE","init"),this.P?(z(u,"$req",a),z(u,"SID","null"),T.T=!0,gr(T,u,null)):gr(T,u,a),this.G=2}}else this.G==3&&(r?as(this,r):this.i.length==0||ji(this.h)||as(this))};function as(r,a){var u;a?u=a.l:u=r.U++;const h=Ct(r.I);z(h,"SID",r.K),z(h,"RID",u),z(h,"AID",r.T),Le(r,h),r.m&&r.o&&Ir(h,r.m,r.o),u=new Ot(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),a&&(r.i=a.D.concat(r.i)),a=us(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Tr(r.h,u),gr(u,h,a)}function Le(r,a){r.H&&gt(r.H,function(u,h){z(a,h,u)}),r.l&&Hi({},function(u,h){z(a,h,u)})}function us(r,a,u){u=Math.min(r.i.length,u);var h=r.l?S(r.l.Na,r.l,r):null;t:{var T=r.i;let A=-1;for(;;){const C=["count="+u];A==-1?0<u?(A=T[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let j=!0;for(let et=0;et<u;et++){let U=T[et].g;const lt=T[et].map;if(U-=A,0>U)A=Math.max(0,T[et].g-100),j=!1;else try{fu(lt,C,"req"+U+"_")}catch{h&&h(lt)}}if(j){h=C.join("&");break t}}}return r=r.i.splice(0,u),a.D=r,h}function ls(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;ve||Ei(),Ae||(ve(),Ae=!0),nr.add(a,r),r.v=0}}function Ar(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ce(S(r.Fa,r),fs(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,cs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ce(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),yn(this),cs(this))};function wr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function cs(r){r.g=new Ot(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Ct(r.qa);z(a,"RID","rpc"),z(a,"SID",r.K),z(a,"AID",r.T),z(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&z(a,"TO",r.ja),z(a,"TYPE","xmlhttp"),Le(r,a),r.m&&r.o&&Ir(a,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=pn(Ct(a)),u.m=null,u.P=!0,Li(u,r)}n.Za=function(){this.C!=null&&(this.C=null,yn(this),Ar(this),mt(19))};function Tn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function hs(r,a){var u=null;if(r.g==a){Tn(r),wr(r),r.g=null;var h=2}else if(Er(r.h,a))u=a.D,zi(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var T=r.B;h=un(),pt(h,new ki(h,u)),En(r)}else ls(r);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&gu(r,a)||h==2&&Ar(r)))switch(u&&0<u.length&&(a=r.h,a.i=a.i.concat(u)),T){case 1:Wt(r,5);break;case 4:Wt(r,10);break;case 3:Wt(r,6);break;default:Wt(r,2)}}}function fs(r,a){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*a}function Wt(r,a){if(r.j.info("Error code "+a),a==2){var u=S(r.fb,r),h=r.Xa;const T=!h;h=new Kt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||fn(h,"https"),pn(h),T?lu(h.toString(),u):cu(h.toString(),u)}else mt(2);r.G=0,r.l&&r.l.sa(a),ds(r),os(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function ds(r){if(r.G=0,r.ka=[],r.l){const a=qi(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,M(r.i),r.i.length=0),r.l.ra()}}function ps(r,a,u){var h=u instanceof Kt?Ct(u):new Kt(u);if(h.g!="")a&&(h.g=a+"."+h.g),dn(h,h.s);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new Kt(null);h&&fn(A,h),a&&(A.g=a),T&&dn(A,T),u&&(A.l=u),h=A}return u=r.D,a=r.ya,u&&a&&z(h,u,a),z(h,"VER",r.la),Le(r,h),h}function ms(r,a,u){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new W(new mn({eb:u})):new W(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gs(){}n=gs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function In(){}In.prototype.g=function(r,a){return new Et(r,a)};function Et(r,a){ut.call(this),this.g=new ss(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!H(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new ae(this)}D(Et,ut),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){vr(this.g)},Et.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=cr(r),r=u);a.i.push(new Za(a.Ya++,r)),a.G==3&&En(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,Et.aa.N.call(this)};function _s(r){fr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const u in a){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}D(_s,fr);function ys(){dr.call(this),this.status=1}D(ys,dr);function ae(r){this.g=r}D(ae,gs),ae.prototype.ua=function(){pt(this.g,"a")},ae.prototype.ta=function(r){pt(this.g,new _s(r))},ae.prototype.sa=function(r){pt(this.g,new ys)},ae.prototype.ra=function(){pt(this.g,"b")},In.prototype.createWebChannel=In.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Do=function(){return new In},Vo=function(){return un()},bo=Ht,Ur={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Cn=ln,Oi.COMPLETE="complete",Co=Oi,bi.EventType=Pe,Pe.OPEN="a",Pe.CLOSE="b",Pe.ERROR="c",Pe.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ue=bi,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,So=W}).apply(typeof An<"u"?An:typeof self<"u"?self:typeof window<"u"?window:{});const Vs="@firebase/firestore",Ds="4.7.8";/**
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
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Ee="11.3.1";/**
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
 */const Zt=new Io("@firebase/firestore");function le(){return Zt.logLevel}function b(n,...t){if(Zt.logLevel<=F.DEBUG){const e=t.map(Zr);Zt.debug(`Firestore (${Ee}): ${n}`,...e)}}function te(n,...t){if(Zt.logLevel<=F.ERROR){const e=t.map(Zr);Zt.error(`Firestore (${Ee}): ${n}`,...e)}}function Kn(n,...t){if(Zt.logLevel<=F.WARN){const e=t.map(Zr);Zt.warn(`Firestore (${Ee}): ${n}`,...e)}}function Zr(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function x(n="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+n;throw te(t),new Error(t)}function X(n,t){n||x()}function $(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class No{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class Jl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zl{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Yt,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Yt)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string"),new No(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new ft(t)}}class tc{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ec{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new tc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ns{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nc{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ol(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){X(this.o===void 0);const i=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ns(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new Ns(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class ko{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=rc(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%62))}return i}}function B(n,t){return n<t?-1:n>t?1:0}function de(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */const ks=-62135596800,Os=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*Os);return new tt(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ks)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Os}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ks;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new tt(0,0))}static max(){return new q(new tt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ms="__name__";class wt{constructor(t,e,i){e===void 0?e=0:e>t.length&&x(),i===void 0?i=t.length-e:i>t.length-e&&x(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return wt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wt?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=wt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const i=wt.isNumericId(t),s=wt.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?wt.extractNumericId(t).compare(wt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jr.fromString(t.substring(4,t.length-2))}}class Q extends wt{construct(t,e,i){return new Q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const ic=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends wt{construct(t,e,i){return new it(t,e,i)}static isValidIdentifier(t){return ic.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ms}static keyField(){return new it([Ms])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(i+=c,s++):(o(),s++)}if(o(),l)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}/**
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
 */const Ke=-1;function sc(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(i===1e9?new tt(e+1,0):new tt(e,i));return new Bt(s,O.empty(),t)}function oc(n){return new Bt(n.readTime,n.key,Ke)}class Bt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Bt(q.min(),O.empty(),Ke)}static max(){return new Bt(q.max(),O.empty(),Ke)}}function ac(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
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
 */const uc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ti(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==uc)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},f=>i(f))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,l=new Array(o);let c=0;for(let f=0;f<o;f++){const g=f;e(t[g]).next(v=>{l[g]=v,++c,c===o&&i(l)},v=>s(v))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function cc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Je(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ei{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.oe(i),this._e=i=>e.writeSequenceNumber(i))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}ei.ae=-1;/**
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
 */const ni=-1;function ri(n){return n==null}function Mn(n){return n===0&&1/n==-1/0}function hc(n){return typeof n=="number"&&Number.isInteger(n)&&!Mn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Oo="";function fc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=xs(t)),t=dc(n.get(e),t);return xs(t)}function dc(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Oo:e+="";break;default:e+=o}}return e}function xs(n){return n+Oo+""}/**
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
 */function Ls(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Te(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Mo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wn(this.root,t,this.comparator,!0)}}class wn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??nt.RED,this.left=s??nt.EMPTY,this.right=o??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new nt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,i,s,o){return this}insert(t,e,i){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fs(this.data.getIterator())}getIteratorFrom(t){return new Fs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Fs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new At([])}unionWith(t){let e=new st(it.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class pc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pc("Invalid base64 string: "+o):o}}(t);return new Rt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const mc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(X(!!n),typeof n=="string"){let t=0;const e=mc.exec(n);if(X(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pe(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
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
 */const xo="server_timestamp",Lo="__type__",Fo="__previous_value__",Uo="__local_write_time__";function ii(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Lo])===null||e===void 0?void 0:e.stringValue)===xo}function si(n){const t=n.mapValue.fields[Fo];return ii(t)?si(t):t}function xn(n){const t=ee(n.mapValue.fields[Uo].timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class gc{constructor(t,e,i,s,o,l,c,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=g}}const Ln="(default)";class Fn{constructor(t,e){this.projectId=t,this.database=e||Ln}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database===Ln}isEqual(t){return t instanceof Fn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Bo="__type__",jo="__max__",Rn={mapValue:{fields:{__type__:{stringValue:jo}}}},$o="__vector__",Br="value";function ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ii(n)?4:yc(n)?9007199254740991:_c(n)?10:11:x()}function Pt(n,t){if(n===t)return!0;const e=ne(n);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return xn(n).isEqual(xn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=ee(s.timestampValue),c=ee(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return pe(s.bytesValue).isEqual(pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=rt(s.doubleValue),c=rt(o.doubleValue);return l===c?Mn(l)===Mn(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return de(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ls(l)!==Ls(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!Pt(l[f],c[f])))return!1;return!0}(n,t);default:return x()}}function We(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function me(n,t){if(n===t)return 0;const e=ne(n),i=ne(t);if(e!==i)return B(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=rt(o.integerValue||o.doubleValue),f=rt(l.integerValue||l.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return Us(n.timestampValue,t.timestampValue);case 4:return Us(xn(n),xn(t));case 5:return B(n.stringValue,t.stringValue);case 6:return function(o,l){const c=pe(o),f=pe(l);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),f=l.split("/");for(let g=0;g<c.length&&g<f.length;g++){const v=B(c[g],f[g]);if(v!==0)return v}return B(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=B(rt(o.latitude),rt(l.latitude));return c!==0?c:B(rt(o.longitude),rt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Bs(n.arrayValue,t.arrayValue);case 10:return function(o,l){var c,f,g,v;const w=o.fields||{},S=l.fields||{},V=(c=w[Br])===null||c===void 0?void 0:c.arrayValue,D=(f=S[Br])===null||f===void 0?void 0:f.arrayValue,M=B(((g=V==null?void 0:V.values)===null||g===void 0?void 0:g.length)||0,((v=D==null?void 0:D.values)===null||v===void 0?void 0:v.length)||0);return M!==0?M:Bs(V,D)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===Rn.mapValue&&l===Rn.mapValue)return 0;if(o===Rn.mapValue)return 1;if(l===Rn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),g=l.fields||{},v=Object.keys(g);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const S=B(f[w],v[w]);if(S!==0)return S;const V=me(c[f[w]],g[v[w]]);if(V!==0)return V}return B(f.length,v.length)}(n.mapValue,t.mapValue);default:throw x()}}function Us(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ee(n),i=ee(t),s=B(e.seconds,i.seconds);return s!==0?s:B(e.nanos,i.nanos)}function Bs(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=me(e[s],i[s]);if(o)return o}return B(e.length,i.length)}function ge(n){return jr(n)}function jr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ee(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=jr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${jr(e.fields[l])}`;return s+"}"}(n.mapValue):x()}function bn(n){switch(ne(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=si(n);return t?16+bn(t):16;case 5:return 2*n.stringValue.length;case 6:return pe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,o)=>s+bn(o),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return Te(i.fields,(o,l)=>{s+=o.length+bn(l)}),s}(n.mapValue);default:throw x()}}function $r(n){return!!n&&"integerValue"in n}function oi(n){return!!n&&"arrayValue"in n}function Vn(n){return!!n&&"mapValue"in n}function _c(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Bo])===null||e===void 0?void 0:e.stringValue)===$o}function Be(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Te(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Be(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Be(n.arrayValue.values[e]);return t}return Object.assign({},n)}function yc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===jo}/**
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
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Vn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Be(e)}setAll(t){let e=it.emptyPath(),i={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}l?i[c.lastSegment()]=Be(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Vn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Vn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Te(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new vt(Be(this.value))}}function zo(n){const t=[];return Te(n.fields,(e,i)=>{const s=new it([e]);if(Vn(i)){const o=zo(i.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new At(t)}/**
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
 */class It{constructor(t,e,i,s,o,l,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new It(t,0,q.min(),q.min(),q.min(),vt.empty(),0)}static newFoundDocument(t,e,i,s){return new It(t,1,e,q.min(),i,s,0)}static newNoDocument(t,e){return new It(t,2,e,q.min(),q.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,q.min(),q.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Un{constructor(t,e){this.position=t,this.inclusive=e}}function js(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?i=O.comparator(O.fromName(l.referenceValue),e.key):i=me(l,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function $s(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Bn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ec(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class qo{}class Z extends qo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Ic(t,e,i):e==="array-contains"?new wc(t,i):e==="in"?new Rc(t,i):e==="not-in"?new Pc(t,i):e==="array-contains-any"?new Sc(t,i):new Z(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new vc(t,i):new Ac(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(me(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends qo{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new jt(t,e)}matches(t){return Ho(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ho(n){return n.op==="and"}function Go(n){return Tc(n)&&Ho(n)}function Tc(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function zr(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+ge(n.value);if(Go(n))return n.filters.map(t=>zr(t)).join(",");{const t=n.filters.map(e=>zr(e)).join(",");return`${n.op}(${t})`}}function Ko(n,t){return n instanceof Z?function(i,s){return s instanceof Z&&i.op===s.op&&i.field.isEqual(s.field)&&Pt(i.value,s.value)}(n,t):n instanceof jt?function(i,s){return s instanceof jt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,l,c)=>o&&Ko(l,s.filters[c]),!0):!1}(n,t):void x()}function Wo(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(Wo).join(" ,")+"}"}(n):"Filter"}class Ic extends Z{constructor(t,e,i){super(t,e,i),this.key=O.fromName(i.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class vc extends Z{constructor(t,e){super(t,"in",e),this.keys=Qo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ac extends Z{constructor(t,e){super(t,"not-in",e),this.keys=Qo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Qo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>O.fromName(i.referenceValue))}class wc extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oi(e)&&We(e.arrayValue,this.value)}}class Rc extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&We(this.value.arrayValue,e)}}class Pc extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(We(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!We(this.value.arrayValue,e)}}class Sc extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>We(this.value.arrayValue,i))}}/**
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
 */class Cc{constructor(t,e=null,i=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.le=null}}function zs(n,t=null,e=[],i=[],s=null,o=null,l=null){return new Cc(n,t,e,i,s,o,l)}function ai(n){const t=$(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>zr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),ri(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ge(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ge(i)).join(",")),t.le=e}return t.le}function ui(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ec(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ko(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$s(n.startAt,t.startAt)&&$s(n.endAt,t.endAt)}/**
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
 */class Wn{constructor(t,e=null,i=[],s=[],o=null,l="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function bc(n,t,e,i,s,o,l,c){return new Wn(n,t,e,i,s,o,l,c)}function Vc(n){return new Wn(n)}function qs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dc(n){return n.collectionGroup!==null}function je(n){const t=$(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new st(it.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Bn(o,i))}),e.has(it.keyField().canonicalString())||t.he.push(new Bn(it.keyField(),i))}return t.he}function Jt(n){const t=$(n);return t.Pe||(t.Pe=Nc(t,je(n))),t.Pe}function Nc(n,t){if(n.limitType==="F")return zs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Bn(s.field,o)});const e=n.endAt?new Un(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Un(n.startAt.position,n.startAt.inclusive):null;return zs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function qr(n,t,e){return new Wn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Xo(n,t){return ui(Jt(n),Jt(t))&&n.limitType===t.limitType}function Yo(n){return`${ai(Jt(n))}|lt:${n.limitType}`}function Fe(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Wo(s)).join(", ")}]`),ri(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ge(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ge(s)).join(",")),`Target(${i})`}(Jt(n))}; limitType=${n.limitType})`}function li(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):O.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of je(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(l,c,f){const g=js(l,c,f);return l.inclusive?g<=0:g<0}(i.startAt,je(i),s)||i.endAt&&!function(l,c,f){const g=js(l,c,f);return l.inclusive?g>=0:g>0}(i.endAt,je(i),s))}(n,t)}function kc(n){return(t,e)=>{let i=!1;for(const s of je(n)){const o=Oc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Oc(n,t,e){const i=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,l,c){const f=l.data.field(o),g=c.data.field(o);return f!==null&&g!==null?me(f,g):x()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return x()}}/**
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
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Te(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return Mo(this.inner)}size(){return this.innerSize}}/**
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
 */const Mc=new yt(O.comparator);function jn(){return Mc}const Jo=new yt(O.comparator);function Pn(...n){let t=Jo;for(const e of n)t=t.insert(e.key,e);return t}function Zo(n){let t=Jo;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Xt(){return $e()}function ta(){return $e()}function $e(){return new re(n=>n.toString(),(n,t)=>n.isEqual(t))}const xc=new yt(O.comparator),Lc=new st(O.comparator);function dt(...n){let t=Lc;for(const e of n)t=t.add(e);return t}const Fc=new st(B);function Uc(){return Fc}/**
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
 */function ci(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mn(t)?"-0":t}}function ea(n){return{integerValue:""+n}}function Bc(n,t){return hc(t)?ea(t):ci(n,t)}/**
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
 */class Qn{constructor(){this._=void 0}}function jc(n,t,e){return n instanceof $n?function(s,o){const l={fields:{[Lo]:{stringValue:xo},[Uo]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ii(o)&&(o=si(o)),o&&(l.fields[Fo]=o),{mapValue:l}}(e,t):n instanceof Qe?ra(n,t):n instanceof Xe?ia(n,t):function(s,o){const l=na(s,o),c=Hs(l)+Hs(s.Ie);return $r(l)&&$r(s.Ie)?ea(c):ci(s.serializer,c)}(n,t)}function $c(n,t,e){return n instanceof Qe?ra(n,t):n instanceof Xe?ia(n,t):e}function na(n,t){return n instanceof zn?function(i){return $r(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class $n extends Qn{}class Qe extends Qn{constructor(t){super(),this.elements=t}}function ra(n,t){const e=sa(t);for(const i of n.elements)e.some(s=>Pt(s,i))||e.push(i);return{arrayValue:{values:e}}}class Xe extends Qn{constructor(t){super(),this.elements=t}}function ia(n,t){let e=sa(t);for(const i of n.elements)e=e.filter(s=>!Pt(s,i));return{arrayValue:{values:e}}}class zn extends Qn{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Hs(n){return rt(n.integerValue||n.doubleValue)}function sa(n){return oi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Qe&&s instanceof Qe||i instanceof Xe&&s instanceof Xe?de(i.elements,s.elements,Pt):i instanceof zn&&s instanceof zn?Pt(i.Ie,s.Ie):i instanceof $n&&s instanceof $n}(n.transform,t.transform)}class qc{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Dn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Xn{}function oa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ua(n.key,Vt.none()):new Ze(n.key,n.data,Vt.none());{const e=n.data,i=vt.empty();let s=new st(it.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?i.delete(o):i.set(o,l),s=s.add(o)}return new ie(n.key,i,new At(s.toArray()),Vt.none())}}function Hc(n,t,e){n instanceof Ze?function(s,o,l){const c=s.value.clone(),f=Ks(s.fieldTransforms,o,l.transformResults);c.setAll(f),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ie?function(s,o,l){if(!Dn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=Ks(s.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(aa(s)),f.setAll(c),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function ze(n,t,e,i){return n instanceof Ze?function(o,l,c,f){if(!Dn(o.precondition,l))return c;const g=o.value.clone(),v=Ws(o.fieldTransforms,f,l);return g.setAll(v),l.convertToFoundDocument(l.version,g).setHasLocalMutations(),null}(n,t,e,i):n instanceof ie?function(o,l,c,f){if(!Dn(o.precondition,l))return c;const g=Ws(o.fieldTransforms,f,l),v=l.data;return v.setAll(aa(o)),v.setAll(g),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,l,c){return Dn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function Gc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=na(i.transform,s||null);o!=null&&(e===null&&(e=vt.empty()),e.set(i.field,o))}return e||null}function Gs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&de(i,s,(o,l)=>zc(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ze extends Xn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ie extends Xn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function aa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ks(n,t,e){const i=new Map;X(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);i.set(o.field,$c(l,c,e[s]))}return i}function Ws(n,t,e){const i=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);i.set(s.field,jc(o,l,t))}return i}class ua extends Xn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kc extends Xn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Hc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=ta();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const f=oa(l,c);f!==null&&i.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(q.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&de(this.mutations,t.mutations,(e,i)=>Gs(e,i))&&de(this.baseMutations,t.baseMutations,(e,i)=>Gs(e,i))}}class hi{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){X(t.mutations.length===i.length);let s=function(){return xc}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,i[l].version);return new hi(t,e,i,s)}}/**
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
 */class Qc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Y,L;function Xc(n){switch(n){case P.OK:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return x()}}function Yc(n){if(n===void 0)return te("GRPC error has no .code"),P.UNKNOWN;switch(n){case Y.OK:return P.OK;case Y.CANCELLED:return P.CANCELLED;case Y.UNKNOWN:return P.UNKNOWN;case Y.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Y.INTERNAL:return P.INTERNAL;case Y.UNAVAILABLE:return P.UNAVAILABLE;case Y.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Y.NOT_FOUND:return P.NOT_FOUND;case Y.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Y.ABORTED:return P.ABORTED;case Y.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Y.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(L=Y||(Y={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Jr([4294967295,4294967295],0);class Jc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Hr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function th(n,t){return Hr(n,t.toTimestamp())}function fe(n){return X(!!n),q.fromTimestamp(function(e){const i=ee(e);return new tt(i.seconds,i.nanos)}(n))}function la(n,t){return Gr(n,t).canonicalString()}function Gr(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function eh(n){const t=Q.fromString(n);return X(lh(t)),t}function Kr(n,t){return la(n.databaseId,t.path)}function nh(n){const t=eh(n);return t.length===4?Q.emptyPath():ih(t)}function rh(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ih(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Qs(n,t,e){return{name:Kr(n,t),fields:e.value.mapValue.fields}}function sh(n,t){let e;if(t instanceof Ze)e={update:Qs(n,t.key,t.value)};else if(t instanceof ua)e={delete:Kr(n,t.key)};else if(t instanceof ie)e={update:Qs(n,t.key,t.data),updateMask:uh(t.fieldMask)};else{if(!(t instanceof Kc))return x();e={verify:Kr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,l){const c=l.transform;if(c instanceof $n)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qe)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xe)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zn)return{fieldPath:l.field.canonicalString(),increment:c.Ie};throw x()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:th(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function oh(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?fe(s.updateTime):fe(o);return l.isEqual(q.min())&&(l=fe(o)),new qc(l,s.transformResults||[])}(e,t))):[]}function ah(n){let t=nh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){X(i===1);const v=e.from[0];v.allDescendants?s=v.collectionId:t=t.child(v.collectionId)}let o=[];e.where&&(o=function(w){const S=ca(w);return S instanceof jt&&Go(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(w){return w.map(S=>function(D){return new Bn(ce(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(w){let S;return S=typeof w=="object"?w.value:w,ri(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(w){const S=!!w.before,V=w.values||[];return new Un(V,S)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const S=!w.before,V=w.values||[];return new Un(V,S)}(e.endAt)),bc(t,s,l,o,c,"F",f,g)}function ca(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ce(e.unaryFilter.field);return Z.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ce(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ce(e.unaryFilter.field);return Z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=ce(e.unaryFilter.field);return Z.create(l,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(ce(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(i=>ca(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function ce(n){return it.fromServerFormat(n.fieldPath)}function uh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function lh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ch{constructor(t){this.Tt=t}}function hh(n){const t=ah({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qr(t,t.limit,"L"):t}/**
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
 */class fh{constructor(){this.Tn=new dh}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Bt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Bt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class dh{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new st(Q.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new st(Q.comparator)).toArray()}}/**
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
 */const Xs={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ha=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
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
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(ha,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
 */class _e{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new _e(0)}static Un(){return new _e(-1)}}/**
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
 */const Ys="LruGarbageCollector",ph=1048576;function Js([n,t],[e,i]){const s=B(n,e);return s===0?B(t,i):s}class mh{constructor(t){this.Hn=t,this.buffer=new st(Js),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();Js(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class gh{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){b(Ys,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Je(e)?b(Ys,"Ignoring IndexedDB error during garbage collection: ",e):await ti(e)}await this.er(3e5)})}}class _h{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(i=>Math.floor(e/100*i))}nthSequenceNumber(t,e){if(e===0)return R.resolve(ei.ae);const i=new mh(e);return this.tr.forEachTarget(t,s=>i.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>i.Zn(s))).next(()=>i.maxValue)}removeTargets(t,e,i){return this.tr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Xs)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xs):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let i,s,o,l,c,f,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,l=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(i=w,c=Date.now(),this.removeTargets(t,i,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,i))).next(w=>(g=Date.now(),le()<=F.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-v}ms
	Determined least recently used ${s} in `+(c-l)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${w} documents in `+(g-f)+`ms
Total Duration: ${g-v}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function yh(n,t){return new _h(n,t)}/**
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
 */class Eh{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Th{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Ih{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&ze(i.mutation,s,At.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,dt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=dt()){const s=Xt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let l=Pn();return o.forEach((c,f)=>{l=l.insert(c,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const i=Xt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,dt()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,i,s){let o=jn();const l=$e(),c=function(){return $e()}();return e.forEach((f,g)=>{const v=i.get(g.key);s.has(g.key)&&(v===void 0||v.mutation instanceof ie)?o=o.insert(g.key,g):v!==void 0?(l.set(g.key,v.mutation.getFieldMask()),ze(v.mutation,g,v.mutation.getFieldMask(),tt.now())):l.set(g.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((g,v)=>l.set(g,v)),e.forEach((g,v)=>{var w;return c.set(g,new Th(v,(w=l.get(g))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=$e();let s=new yt((l,c)=>l-c),o=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(f=>{const g=e.get(f);if(g===null)return;let v=i.get(f)||At.empty();v=c.applyToLocalView(g,v),i.set(f,v);const w=(s.get(c.batchId)||dt()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),g=f.key,v=f.value,w=ta();v.forEach(S=>{if(!o.has(S)){const V=oa(e.get(S),i.get(S));V!==null&&w.set(S,V),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,g,w))}return R.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(l){return O.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Dc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Xt());let c=Ke,f=o;return l.next(g=>R.forEach(g,(v,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(v)?R.resolve():this.remoteDocumentCache.getEntry(t,v).next(S=>{f=f.insert(v,S)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,f,g,dt())).next(v=>({batchId:c,changes:Zo(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(i=>{let s=Pn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let l=Pn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const g=function(w,S){return new Wn(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,i,s).next(v=>{v.forEach((w,S)=>{l=l.insert(w,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(l=>{o.forEach((f,g)=>{const v=g.getKey();l.get(v)===null&&(l=l.insert(v,It.newInvalidDocument(v)))});let c=Pn();return l.forEach((f,g)=>{const v=o.get(f);v!==void 0&&ze(v.mutation,g,At.empty(),tt.now()),li(e,g)&&(c=c.insert(f,g))}),c})}}/**
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
 */class vh{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:fe(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:hh(s.bundledQuery),readTime:fe(s.readTime)}}(e)),R.resolve()}}/**
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
 */class Ah{constructor(){this.overlays=new yt(O.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Xt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Rr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Xt(),o=e.length+1,l=new O(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const f=c.getNext().value,g=f.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new yt((g,v)=>g-v);const l=this.overlays.getIterator();for(;l.hasNext();){const g=l.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>i){let v=o.get(g.largestBatchId);v===null&&(v=Xt(),o=o.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const c=Xt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,v)=>c.set(g,v)),!(c.size()>=s)););return R.resolve(c)}Et(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const l=this.Rr.get(s.largestBatchId).delete(i.key);this.Rr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(i.key,new Qc(e,i));let o=this.Rr.get(e);o===void 0&&(o=dt(),this.Rr.set(e,o)),this.Rr.set(e,o.add(i.key))}}/**
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
 */class wh{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class fi{constructor(){this.Vr=new st(J.mr),this.gr=new st(J.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const i=new J(t,e);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.wr(new J(t,e))}Sr(t,e){t.forEach(i=>this.removeReference(i,e))}br(t){const e=new O(new Q([])),i=new J(e,t),s=new J(e,t+1),o=[];return this.gr.forEachInRange([i,s],l=>{this.wr(l),o.push(l.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new O(new Q([])),i=new J(e,t),s=new J(e,t+1);let o=dt();return this.gr.forEachInRange([i,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new J(t,0),i=this.Vr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class J{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return O.comparator(t.key,e.key)||B(t.Cr,e.Cr)}static pr(t,e){return B(t.Cr,e.Cr)||O.comparator(t.key,e.key)}}/**
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
 */class Rh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new st(J.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Wc(o,e,i,s);this.mutationQueue.push(l);for(const c of s)this.Mr=this.Mr.add(new J(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Nr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?ni:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new J(e,0),s=new J(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([i,s],l=>{const c=this.Or(l.Cr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new st(B);return e.forEach(s=>{const o=new J(s,0),l=new J(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,l],c=>{i=i.add(c.Cr)})}),R.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;O.isDocumentKey(o)||(o=o.child(""));const l=new J(new O(o),0);let c=new st(B);return this.Mr.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(c=c.add(f.Cr)),!0)},l),R.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(i=>{const s=this.Or(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){X(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return R.forEach(e.mutations,s=>{const o=new J(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=i})}qn(t){}containsKey(t,e){const i=new J(e,0),s=this.Mr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Ph{constructor(t){this.kr=t,this.docs=function(){return new yt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,l=this.kr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let i=jn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():It.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=jn();const l=e.path,c=new O(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:g,value:{document:v}}=f.getNext();if(!l.isPrefixOf(g.path))break;g.path.length>l.length+1||ac(oc(v),i)<=0||(s.has(v.key)||li(e,v))&&(o=o.insert(v.key,v.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){x()}qr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Sh(this)}getSize(t){return R.resolve(this.size)}}class Sh extends Eh{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class Ch{constructor(t){this.persistence=t,this.Qr=new re(e=>ai(e),ui),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.$r=0,this.Kr=new fi,this.targetCount=0,this.Ur=_e.Kn()}forEachTarget(t,e){return this.Qr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new _e(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.br(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Qr.forEach((l,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Qr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Qr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Kr.yr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Kr.Sr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Kr.br(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Kr.vr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Kr.containsKey(e))}}/**
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
 */class fa{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new ei(0),this.zr=!1,this.zr=!0,this.jr=new wh,this.referenceDelegate=t(this),this.Hr=new Ch(this),this.indexManager=new fh,this.remoteDocumentCache=function(s){return new Ph(s)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new ch(e),this.Yr=new vh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ah,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Wr[t.toKey()];return i||(i=new Rh(e,this.referenceDelegate),this.Wr[t.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,i){b("MemoryPersistence","Starting transaction:",t);const s=new bh(this.Gr.next());return this.referenceDelegate.Zr(),i(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(i=>()=>i.containsKey(t,e)))}}class bh extends lc{constructor(t){super(),this.currentSequenceNumber=t}}class di{constructor(t){this.persistence=t,this.ti=new fi,this.ni=null}static ri(t){return new di(t)}get ii(){if(this.ni)return this.ni;throw x()}addReference(t,e,i){return this.ti.addReference(i,e),this.ii.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.ti.removeReference(i,e),this.ii.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,i=>{const s=O.fromPath(i);return this.si(t,s).next(o=>{o||e.removeEntry(s,q.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(i=>{i?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class qn{constructor(t,e){this.persistence=t,this.oi=new re(i=>fc(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=yh(this,e)}static ri(t,e){return new qn(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>e.next(s=>i+s))}sr(t){let e=0;return this.rr(t,i=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(i,s)=>this.ar(t,i,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,l=>this.ar(t,l,e).next(c=>{c||(i++,o.removeEntry(l,q.min()))})).next(()=>o.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.oi.set(i,t.currentSequenceNumber),R.resolve()}removeReference(t,e,i){return this.oi.set(i,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=bn(t.data.value)),e}ar(t,e,i){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return R.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class pi{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Hi=i,this.Ji=s}static Yi(t,e){let i=dt(),s=dt();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new pi(t,e.fromCache,i,s)}}/**
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
 */class Vh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Dh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Du()?8:cc(bu())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.rs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ss(t,e,s,i).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Vh;return this._s(t,e,l).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,l,c.size)})}).next(()=>o.result)}us(t,e,i,s){return i.documentReadCount<this.es?(le()<=F.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",Fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(le()<=F.DEBUG&&b("QueryEngine","Query:",Fe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ts*s?(le()<=F.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",Fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Jt(e))):R.resolve())}rs(t,e){if(qs(e))return R.resolve(null);let i=Jt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=qr(e,null,"F"),i=Jt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const l=dt(...o);return this.ns.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const g=this.cs(e,c);return this.ls(e,g,l,f.readTime)?this.rs(t,qr(e,null,"F")):this.hs(t,g,e,f)}))})))}ss(t,e,i,s){return qs(e)||s.isEqual(q.min())?R.resolve(null):this.ns.getDocuments(t,i).next(o=>{const l=this.cs(e,o);return this.ls(e,l,i,s)?R.resolve(null):(le()<=F.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fe(e)),this.hs(t,l,e,sc(s,Ke)).next(c=>c))})}cs(t,e){let i=new st(kc(t));return e.forEach((s,o)=>{li(t,o)&&(i=i.add(o))}),i}ls(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,i){return le()<=F.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Fe(e)),this.ns.getDocumentsMatchingQuery(t,e,Bt.min(),i)}hs(t,e,i,s){return this.ns.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */const Nh="LocalStore";class kh{constructor(t,e,i,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new yt(B),this.Is=new re(o=>ai(o),ui),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(i)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ih(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Oh(n,t,e,i){return new kh(n,t,e,i)}async function da(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const l=[],c=[];let f=dt();for(const g of s){l.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}for(const g of o){c.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}return e.localDocuments.getDocuments(i,f).next(g=>({Rs:g,removedBatchIds:l,addedBatchIds:c}))})})}function Mh(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,f,g,v){const w=g.batch,S=w.keys();let V=R.resolve();return S.forEach(D=>{V=V.next(()=>v.getEntry(f,D)).next(M=>{const N=g.docVersions.get(D);X(N!==null),M.version.compareTo(N)<0&&(w.applyToRemoteDocument(M,g),M.isValidDocument()&&(M.setReadTime(g.commitVersion),v.addEntry(M)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=dt();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(f=f.add(c.batch.mutations[g].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function xh(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Lh(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=ni),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Zs{constructor(){this.activeTargetIds=Uc()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fh{constructor(){this.ho=new Zs,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,i){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Zs,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Uh{To(t){}shutdown(){}}/**
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
 */const to="ConnectivityMonitor";class eo{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){b(to,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){b(to,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sn=null;function Wr(){return Sn===null?Sn=function(){return 268435456+Math.round(2147483648*Math.random())}():Sn++,"0x"+Sn.toString(16)}/**
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
 */const Vr="RestConnection",Bh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jh{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database===Ln?`project_id=${i}`:`project_id=${i}&database_id=${s}`}So(t,e,i,s,o){const l=Wr(),c=this.bo(t,e.toUriEncodedString());b(Vr,`Sending RPC '${t}' ${l}:`,c,i);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,s,o),this.vo(t,c,f,i).then(g=>(b(Vr,`Received RPC '${t}' ${l}: `,g),g),g=>{throw Kn(Vr,`RPC '${t}' ${l} failed with error: `,g,"url: ",c,"request:",i),g})}Co(t,e,i,s,o,l){return this.So(t,e,i,s,o)}Do(t,e,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const i=Bh[t];return`${this.po}/v1/${e}:${i}`}terminate(){}}/**
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
 */class $h{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const ht="WebChannelConnection";class zh extends jh{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,i,s){const o=Wr();return new Promise((l,c)=>{const f=new So;f.setWithCredentials(!0),f.listenOnce(Co.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Cn.NO_ERROR:const v=f.getResponseJson();b(ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(v)),l(v);break;case Cn.TIMEOUT:b(ht,`RPC '${t}' ${o} timed out`),c(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case Cn.HTTP_ERROR:const w=f.getStatus();if(b(ht,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const V=S==null?void 0:S.error;if(V&&V.status&&V.message){const D=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(V.status);c(new k(D,V.message))}else c(new k(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new k(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{b(ht,`RPC '${t}' ${o} completed.`)}});const g=JSON.stringify(s);b(ht,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",g,i,15)})}Wo(t,e,i){const s=Wr(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=Do(),c=Vo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const v=o.join("");b(ht,`Creating RPC '${t}' stream ${s}: ${v}`,f);const w=l.createWebChannel(v,f);let S=!1,V=!1;const D=new $h({Fo:N=>{V?b(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(b(ht,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),b(ht,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},Mo:()=>w.close()}),M=(N,G,H)=>{N.listen(G,K=>{try{H(K)}catch(ot){setTimeout(()=>{throw ot},0)}})};return M(w,Ue.EventType.OPEN,()=>{V||(b(ht,`RPC '${t}' stream ${s} transport opened.`),D.Qo())}),M(w,Ue.EventType.CLOSE,()=>{V||(V=!0,b(ht,`RPC '${t}' stream ${s} transport closed`),D.Ko())}),M(w,Ue.EventType.ERROR,N=>{V||(V=!0,Kn(ht,`RPC '${t}' stream ${s} transport errored:`,N),D.Ko(new k(P.UNAVAILABLE,"The operation could not be completed")))}),M(w,Ue.EventType.MESSAGE,N=>{var G;if(!V){const H=N.data[0];X(!!H);const K=H,ot=(K==null?void 0:K.error)||((G=K[0])===null||G===void 0?void 0:G.error);if(ot){b(ht,`RPC '${t}' stream ${s} received error:`,ot);const qt=ot.status;let gt=function(m){const _=Y[m];if(_!==void 0)return Yc(_)}(qt),E=ot.message;gt===void 0&&(gt=P.INTERNAL,E="Unknown error status: "+qt+" with message "+ot.message),V=!0,D.Ko(new k(gt,E)),w.close()}else b(ht,`RPC '${t}' stream ${s} received:`,H),D.Uo(H)}}),M(c,bo.STAT_EVENT,N=>{N.stat===Ur.PROXY?b(ht,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Ur.NOPROXY&&b(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Dr(){return typeof document<"u"?document:null}/**
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
 */function Yn(n){return new Jc(n,!0)}/**
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
 */class pa{constructor(t,e,i=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=i,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-i);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const no="PersistentStream";class qh{constructor(t,e,i,s,o,l,c,f){this.Ti=t,this.n_=i,this.r_=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new pa(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.i_===e&&this.V_(i,s)},i=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(s)})})}V_(t,e){const i=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{i(()=>this.m_(s))}),this.stream.onMessage(s=>{i(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return b(no,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(b(no,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hh extends qh{constructor(t,e,i,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,l),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=oh(t.writeResults,t.commitTime),i=fe(t.commitTime);return this.listener.v_(i,e)}C_(){const t={};t.database=rh(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>sh(this.serializer,i))};this.I_(e)}}/**
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
 */class Gh{}class Kh extends Gh{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.So(t,Gr(e,i),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}Co(t,e,i,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Co(t,Gr(e,i),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new k(P.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Wh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(te(e),this.N_=!1):b("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const tn="RemoteStore";class Qh{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(l=>{i.enqueueAndForget(async()=>{nn(this)&&(b(tn,"Restarting streams for network reachability change."),await async function(f){const g=$(f);g.W_.add(4),await en(g),g.j_.set("Unknown"),g.W_.delete(4),await Jn(g)}(this))})}),this.j_=new Wh(i,s)}}async function Jn(n){if(nn(n))for(const t of n.G_)await t(!0)}async function en(n){for(const t of n.G_)await t(!1)}function nn(n){return $(n).W_.size===0}async function ma(n,t,e){if(!Je(t))throw t;n.W_.add(1),await en(n),n.j_.set("Offline"),e||(e=()=>xh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b(tn,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await Jn(n)})}function ga(n,t){return t().catch(e=>ma(n,e,t))}async function Zn(n){const t=$(n),e=$t(t);let i=t.K_.length>0?t.K_[t.K_.length-1].batchId:ni;for(;Xh(t);)try{const s=await Lh(t.localStore,i);if(s===null){t.K_.length===0&&e.P_();break}i=s.batchId,Yh(t,s)}catch(s){await ma(t,s)}_a(t)&&ya(t)}function Xh(n){return nn(n)&&n.K_.length<10}function Yh(n,t){n.K_.push(t);const e=$t(n);e.c_()&&e.S_&&e.b_(t.mutations)}function _a(n){return nn(n)&&!$t(n).u_()&&n.K_.length>0}function ya(n){$t(n).start()}async function Jh(n){$t(n).C_()}async function Zh(n){const t=$t(n);for(const e of n.K_)t.b_(e.mutations)}async function tf(n,t,e){const i=n.K_.shift(),s=hi.from(i,t,e);await ga(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zn(n)}async function ef(n,t){t&&$t(n).S_&&await async function(i,s){if(function(l){return Xc(l)&&l!==P.ABORTED}(s.code)){const o=i.K_.shift();$t(i).h_(),await ga(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Zn(i)}}(n,t),_a(n)&&ya(n)}async function ro(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),b(tn,"RemoteStore received new credentials");const i=nn(e);e.W_.add(3),await en(e),i&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Jn(e)}async function nf(n,t){const e=$(n);t?(e.W_.delete(2),await Jn(e)):t||(e.W_.add(2),await en(e),e.j_.set("Unknown"))}function $t(n){return n.Y_||(n.Y_=function(e,i,s){const o=$(e);return o.M_(),new Hh(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Jh.bind(null,n),Lo:ef.bind(null,n),D_:Zh.bind(null,n),v_:tf.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await Zn(n)):(await n.Y_.stop(),n.K_.length>0&&(b(tn,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class mi{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const l=Date.now()+i,c=new mi(t,e,l,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ea(n,t){if(te("AsyncQueue",`${t}: ${n}`),Je(n))return new k(P.UNAVAILABLE,`${t}: ${n}`);throw n}class rf{constructor(){this.queries=io(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,i){const s=$(e),o=s.queries;s.queries=io(),o.forEach((l,c)=>{for(const f of c.ta)f.onError(i)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function io(){return new re(n=>Yo(n),Xo)}function sf(n){n.ia.forEach(t=>{t.next()})}var so,oo;(oo=so||(so={}))._a="default",oo.Cache="cache";const of="SyncEngine";class af{constructor(t,e,i,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new re(c=>Yo(c),Xo),this.qa=new Map,this.Qa=new Set,this.$a=new yt(O.comparator),this.Ka=new Map,this.Ua=new fi,this.Wa={},this.Ga=new Map,this.za=_e.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function uf(n,t,e){const i=ff(n);try{const s=await function(l,c){const f=$(l),g=tt.now(),v=c.reduce((V,D)=>V.add(D.key),dt());let w,S;return f.persistence.runTransaction("Locally write mutations","readwrite",V=>{let D=jn(),M=dt();return f.ds.getEntries(V,v).next(N=>{D=N,D.forEach((G,H)=>{H.isValidDocument()||(M=M.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(V,D)).next(N=>{w=N;const G=[];for(const H of c){const K=Gc(H,w.get(H.key).overlayedDocument);K!=null&&G.push(new ie(H.key,K,zo(K.value.mapValue),Vt.exists(!0)))}return f.mutationQueue.addMutationBatch(V,g,G,c)}).next(N=>{S=N;const G=N.applyToLocalDocumentSet(w,M);return f.documentOverlayCache.saveOverlays(V,N.batchId,G)})}).then(()=>({batchId:S.batchId,changes:Zo(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(l,c,f){let g=l.Wa[l.currentUser.toKey()];g||(g=new yt(B)),g=g.insert(c,f),l.Wa[l.currentUser.toKey()]=g}(i,s.batchId,e),await tr(i,s.changes),await Zn(i.remoteStore)}catch(s){const o=Ea(s,"Failed to persist write");e.reject(o)}}function ao(n,t,e){const i=$(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ka.forEach((o,l)=>{const c=l.view.sa(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const f=$(l);f.onlineState=c;let g=!1;f.queries.forEach((v,w)=>{for(const S of w.ta)S.sa(c)&&(g=!0)}),g&&sf(f)}(i.eventManager,t),s.length&&i.La.p_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function lf(n,t){const e=$(n),i=t.batch.batchId;try{const s=await Mh(e.localStore,t);Ia(e,i,null),Ta(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await tr(e,s)}catch(s){await ti(s)}}async function cf(n,t,e){const i=$(n);try{const s=await function(l,c){const f=$(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return f.mutationQueue.lookupMutationBatch(g,c).next(w=>(X(w!==null),v=w.keys(),f.mutationQueue.removeMutationBatch(g,w))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,v,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>f.localDocuments.getDocuments(g,v))})}(i.localStore,t);Ia(i,t,e),Ta(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await tr(i,s)}catch(s){await ti(s)}}function Ta(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Ia(n,t,e){const i=$(n);let s=i.Wa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Wa[i.currentUser.toKey()]=s}}async function tr(n,t,e){const i=$(n),s=[],o=[],l=[];i.ka.isEmpty()||(i.ka.forEach((c,f)=>{l.push(i.Ha(f,t,e).then(g=>{var v;if((g||e)&&i.isPrimaryClient){const w=g?!g.fromCache:(v=void 0)===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=pi.Yi(f.targetId,g);o.push(w)}}))}),await Promise.all(l),i.La.p_(s),await async function(f,g){const v=$(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(g,S=>R.forEach(S.Hi,V=>v.persistence.referenceDelegate.addReference(w,S.targetId,V)).next(()=>R.forEach(S.Ji,V=>v.persistence.referenceDelegate.removeReference(w,S.targetId,V)))))}catch(w){if(!Je(w))throw w;b(Nh,"Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const V=v.Ts.get(S),D=V.snapshotVersion,M=V.withLastLimboFreeSnapshotVersion(D);v.Ts=v.Ts.insert(S,M)}}}(i.localStore,o))}async function hf(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){b(of,"User change. New user:",t.toKey());const i=await da(e.localStore,t);e.currentUser=t,function(o,l){o.Ga.forEach(c=>{c.forEach(f=>{f.reject(new k(P.CANCELLED,l))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await tr(e,i.Rs)}}function ff(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cf.bind(null,t),t}class Hn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Yn(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Oh(this.persistence,new Dh,t.initialUser,this.serializer)}Xa(t){return new fa(di.ri,this.serializer)}Za(t){return new Fh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hn.provider={build:()=>new Hn};class df extends Hn{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){X(this.persistence.referenceDelegate instanceof qn);const i=this.persistence.referenceDelegate.garbageCollector;return new gh(i,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new fa(i=>qn.ri(i,e),this.serializer)}}class Qr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ao(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=hf.bind(null,this.syncEngine),await nf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rf}()}createDatastore(t){const e=Yn(t.databaseInfo.databaseId),i=function(o){return new zh(o)}(t.databaseInfo);return function(o,l,c,f){return new Kh(o,l,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,l,c){return new Qh(i,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ao(this.syncEngine,e,0),function(){return eo.D()?new eo:new Uh}())}createSyncEngine(t,e){return function(s,o,l,c,f,g,v){const w=new af(s,o,l,c,f,g);return v&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);b(tn,"RemoteStore shutting down."),o.W_.add(5),await en(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Qr.provider={build:()=>new Qr};/**
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
 */const zt="FirestoreClient";class pf{constructor(t,e,i,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=ko.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async l=>{b(zt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(i,l=>(b(zt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ea(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Nr(n,t){n.asyncQueue.verifyOperationInProgress(),b(zt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await da(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function uo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await mf(n);b(zt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>ro(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ro(t.remoteStore,s)),n._onlineComponents=t}async function mf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b(zt,"Using user provided OfflineComponentProvider");try{await Nr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Kn("Error using user provided cache. Falling back to memory cache: "+e),await Nr(n,new Hn)}}else b(zt,"Using default OfflineComponentProvider"),await Nr(n,new df(void 0));return n._offlineComponents}async function gf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b(zt,"Using user provided OnlineComponentProvider"),await uo(n,n._uninitializedComponentsProvider._online)):(b(zt,"Using default OnlineComponentProvider"),await uo(n,new Qr))),n._onlineComponents}function _f(n){return gf(n).then(t=>t.syncEngine)}/**
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
 */function va(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const lo=new Map;/**
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
 */function Aa(n,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function yf(n,t,e,i){if(t===!0&&i===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function co(n){if(!O.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ho(n){if(O.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function wa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gi(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const Ra="firestore.googleapis.com",fo=!0;class po{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ra,this.ssl=fo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:fo;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ha;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ph)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=va((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class er{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new po({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new po(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Yl;switch(i.type){case"firstParty":return new ec(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=lo.get(e);i&&(b("ComponentProvider","Removing Datastore"),lo.delete(e),i.terminate())}(this),Promise.resolve()}}function Ef(n,t,e,i={}){var s;const o=(n=wa(n,er))._getSettings(),l=`${t}:${e}`;if(o.host!==Ra&&o.host!==l&&Kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ft.MOCK_USER;else{c=Cu(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ft(g)}n._authCredentials=new Jl(new No(c,f))}}/**
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
 */class _i{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new _i(this.firestore,t,this._query)}}class Dt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class Ut extends _i{constructor(t,e,i){super(t,e,Vc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new O(t))}withConverter(t){return new Ut(this.firestore,t,this._path)}}function Ff(n,t,...e){if(n=qe(n),Aa("collection","path",t),n instanceof er){const i=Q.fromString(t,...e);return ho(i),new Ut(n,null,i)}{if(!(n instanceof Dt||n instanceof Ut))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return ho(i),new Ut(n.firestore,null,i)}}function Tf(n,t,...e){if(n=qe(n),arguments.length===1&&(t=ko.newId()),Aa("doc","path",t),n instanceof er){const i=Q.fromString(t,...e);return co(i),new Dt(n,null,new O(i))}{if(!(n instanceof Dt||n instanceof Ut))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return co(i),new Dt(n.firestore,n instanceof Ut?n.converter:null,new O(i))}}/**
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
 */const mo="AsyncQueue";class go{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new pa(this,"async_queue_retry"),this.Su=()=>{const i=Dr();i&&b(mo,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=t;const e=Dr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Dr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Yt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Je(t))throw t;b(mo,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(i=>{this.gu=i,this.pu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw te("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.pu=!1,i))));return this.bu=e,e}enqueueAfterDelay(t,e,i){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=mi.createAndSchedule(this,t,e,i,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&x()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Pa extends er{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new go,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new go(t),this._firestoreClient=void 0,await t}}}function If(n,t){const e=typeof n=="object"?n:Fl(),i=typeof n=="string"?n:Ln,s=kl(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Pu("firestore");o&&Ef(s,...o)}return s}function vf(n){if(n._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Af(n),n._firestoreClient}function Af(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,g,v){return new gc(c,f,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,va(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new pf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class Ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ye(Rt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ye(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Sa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ca{constructor(t){this._methodName=t}}/**
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
 */class ba{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
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
 */class Va{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const wf=/^__.*__$/;class Rf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ie(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ze(t,this.data,e,this.fieldTransforms)}}function Da(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class yi{constructor(t,e,i,s,o,l){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new yi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:i,Qu:!1});return s.$u(t),s}Ku(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:i,Qu:!1});return s.Bu(),s}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Gn(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Da(this.Lu)&&wf.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Pf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Yn(t)}ju(t,e,i,s=!1){return new yi({Lu:t,methodName:e,zu:i,path:it.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sf(n){const t=n._freezeSettings(),e=Yn(n._databaseId);return new Pf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Cf(n,t,e,i,s,o={}){const l=n.ju(o.merge||o.mergeFields?2:0,t,e,s);Ma("Data must be an object, but it was:",l,i);const c=ka(i,l);let f,g;if(o.merge)f=new At(l.fieldMask),g=l.fieldTransforms;else if(o.mergeFields){const v=[];for(const w of o.mergeFields){const S=bf(t,w,e);if(!l.contains(S))throw new k(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Nf(v,S)||v.push(S)}f=new At(v),g=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,g=l.fieldTransforms;return new Rf(new vt(c),f,g)}function Na(n,t){if(Oa(n=qe(n)))return Ma("Unsupported field value:",t,n),ka(n,t);if(n instanceof Ca)return function(i,s){if(!Da(s.Lu))throw s.Wu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(i,s){const o=[];let l=0;for(const c of i){let f=Na(c,s.Uu(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=qe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Bc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=tt.fromDate(i);return{timestampValue:Hr(s.serializer,o)}}if(i instanceof tt){const o=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Hr(s.serializer,o)}}if(i instanceof ba)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ye)return{bytesValue:Zc(s.serializer,i._byteString)};if(i instanceof Dt){const o=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(o))throw s.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:la(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Va)return function(l,c){return{mapValue:{fields:{[Bo]:{stringValue:$o},[Br]:{arrayValue:{values:l.toArray().map(g=>{if(typeof g!="number")throw c.Wu("VectorValues must only contain numeric values.");return ci(c.serializer,g)})}}}}}}(i,s);throw s.Wu(`Unsupported field value: ${gi(i)}`)}(n,t)}function ka(n,t){const e={};return Mo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Te(n,(i,s)=>{const o=Na(s,t.qu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Oa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof ba||n instanceof Ye||n instanceof Dt||n instanceof Ca||n instanceof Va)}function Ma(n,t,e){if(!Oa(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=gi(e);throw i==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+i)}}function bf(n,t,e){if((t=qe(t))instanceof Sa)return t._internalPath;if(typeof t=="string")return Df(n,t);throw Gn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Vf=new RegExp("[~\\*/\\[\\]]");function Df(n,t,e){if(t.search(Vf)>=0)throw Gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Sa(...t.split("."))._internalPath}catch{throw Gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Gn(n,t,e,i,s){const o=i&&!i.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${i}`),l&&(f+=` in document ${s}`),f+=")"),new k(P.INVALID_ARGUMENT,c+n+f)}function Nf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function kf(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function Uf(n,t){const e=wa(n.firestore,Pa),i=Tf(n),s=kf(n.converter,t);return Of(e,[Cf(Sf(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Vt.exists(!1))]).then(()=>i)}function Of(n,t){return function(i,s){const o=new Yt;return i.asyncQueue.enqueueAndForget(async()=>uf(await _f(i),s,o)),o.promise}(vf(n),t)}(function(t,e=!0){(function(s){Ee=s})(Ll),On(new He("firestore",(i,{instanceIdentifier:s,options:o})=>{const l=i.getProvider("app").getImmediate(),c=new Pa(new Zl(i.getProvider("auth-internal")),new nc(l,i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(g.options.projectId,v)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),he(Vs,Ds,t),he(Vs,Ds,"esm2017")})();const Mf={apiKey:"AIzaSyC33pGn15z...",authDomain:"webhunt-1cf89.firebaseapp.com",projectId:"webhunt-1cf89",storageBucket:"webhunt-1cf89.firebasestorage.app",messagingSenderId:"1054381684302",appId:"1:1054381684302:web:11d2b658b7e7f602d4751f",measurementId:"G-568ZGYCVNE"},xf=wo(Mf),Bf=If(xf);export{Uf as a,Ff as c,Bf as d};
