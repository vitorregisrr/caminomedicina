if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,o)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=o(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-56079563"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7qK9SqL16vAeoG9efco3K/_buildManifest.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/7qK9SqL16vAeoG9efco3K/_ssgManifest.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/0b7b90cd.71129a5e4ef3148753a4.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/11.e94c52347618f87de247.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/2dd8024639213757075864c624e37c2da904a9c5.24f12a6f9816d548f1d0.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/commons.90539dfa7e096e9859da.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/framework.bf5ed108d6c23a237d21.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/main-9c2ebe9ef7cf2536b11f.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/pages/%5Bslug%5D-1a40859c4cb760fe8bd6.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/pages/_app-eb366ebf648bd6d52b40.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/pages/_error-b0c917444a28f7373222.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/pages/index-2e7752cf672b1c72815a.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/polyfills-8a9ca68ce2f6a778e0e3.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/_next/static/chunks/webpack-61f257774d1f6b0de11d.js",revision:"7qK9SqL16vAeoG9efco3K"},{url:"/img/hero-illustration.png",revision:"97169bc3867d9b3b531b93ddb1bed784"},{url:"/img/icon-512.png",revision:"b7bd3d2a47bced5bcb5ff65c723eb9da"},{url:"/manifest.json",revision:"7c81fd8349d58d85770f100a5a25f20a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{requestWillFetch:async({request:e})=>(Request(),console.log("production"),e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
