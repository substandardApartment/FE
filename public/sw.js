if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"ad26988c2a57d23387b299e1c6a8c728"},{url:"/_next/static/MvxW8EKQuQIwI4xfez7LY/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/MvxW8EKQuQIwI4xfez7LY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-5b99b7b810106a9a.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/231-3ff93dee526cde39.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/817-c45f68d3072ffa4e.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/app/_not-found/page-8b5a577bdc95d911.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/app/layout-edddb8c9d367140a.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/app/news/layout-149efd4208baa0e6.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/app/news/page-57f1c2a49faac218.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/app/not-found-6505e29c9b5239ac.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/app/page-a05b0d7fce354520.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/app/reports/layout-b97284969144ca0d.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/app/reports/page-396d31a7df45faa3.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/fd9d1056-7bc9ff4f93636638.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/main-22b578a2351cabc6.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/main-app-cfb05510040ba618.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-702725dbe998fa5f.js",revision:"MvxW8EKQuQIwI4xfez7LY"},{url:"/_next/static/css/333d81b7db0e6117.css",revision:"333d81b7db0e6117"},{url:"/_next/static/media/DropDown.d6e7946e.svg",revision:"2a9f4942f296b63b1cb240a20a9e3ad7"},{url:"/_next/static/media/DropDownOut.0c036d2f.svg",revision:"0c960c2849bef6ff5088bd056649cfdf"},{url:"/_next/static/media/DropdownCheck.5161d6e5.svg",revision:"9d16e83f11be5a796b11c251787d454c"},{url:"/_next/static/media/MapMarker.2b41dd18.svg",revision:"d875c0ea2551a1aa6de140806f01edfe"},{url:"/_next/static/media/MapSearch.b037c9b9.svg",revision:"87ddbe656eb5de9901a88d6f6f6a58e8"},{url:"/_next/static/media/Pretendard-Black.4aeaaf12.woff2",revision:"4aeaaf12"},{url:"/_next/static/media/Pretendard-Bold.e00e15f4.woff2",revision:"e00e15f4"},{url:"/_next/static/media/Pretendard-ExtraBold.dd3e76c5.woff2",revision:"dd3e76c5"},{url:"/_next/static/media/Pretendard-ExtraLight.b6885b7a.woff2",revision:"b6885b7a"},{url:"/_next/static/media/Pretendard-Medium.12f0acdc.woff2",revision:"12f0acdc"},{url:"/_next/static/media/Pretendard-Regular.119cf01b.woff2",revision:"119cf01b"},{url:"/_next/static/media/Pretendard-SemiBold.cfa29e4f.woff2",revision:"cfa29e4f"},{url:"/_next/static/media/Pretendard-Thin.fc2b22d5.woff2",revision:"fc2b22d5"},{url:"/_next/static/media/Search.6180e32c.svg",revision:"18f9d538464ba491b2981237eaad8482"},{url:"/_next/static/media/clickMarker.7235d82f.svg",revision:"c64ab5bf206dbeef4ec135efdb8425f3"},{url:"/_next/static/media/closeModal.92383e20.svg",revision:"e9d0a30d4d83b2e85cffdda3d946f389"},{url:"/icons/icon-192x192.png",revision:"21134c239e0b61e0389b9b4fd08e93bc"},{url:"/icons/icon-256x256.png",revision:"46c00b8ac774d1c9ff8a0b0f519dd9eb"},{url:"/icons/icon-384x384.png",revision:"1d6186a4d02106b3f3d0d4e69cc3ddf9"},{url:"/icons/icon-512x512.png",revision:"c211aaa0bfa983ee56dc9f4aa8759e8a"},{url:"/icons/splashscreens/ipad_splash.png",revision:"0c8efb54600ec4dc4d83cdc3f4c5c314"},{url:"/icons/splashscreens/ipadpro1_splash.png",revision:"e2cfbb0333141c469fd79e7af70a1f1e"},{url:"/icons/splashscreens/ipadpro2_splash.png",revision:"7866ff16b7824db4ed83f097d33835ed"},{url:"/icons/splashscreens/ipadpro3_splash.png",revision:"1c3341373b28acd300e13a26d3a84841"},{url:"/icons/splashscreens/iphone5_splash.png",revision:"b9e3fa1df6caf3130400779b90647c3b"},{url:"/icons/splashscreens/iphone6_splash.png",revision:"0d496646d03500ba7bfcbdcd5f19bd94"},{url:"/icons/splashscreens/iphoneplus_splash.png",revision:"b1a26dd679d342e2d19bdc34a81c10cc"},{url:"/icons/splashscreens/iphonex_splash.png",revision:"59e45a7d6841efd08271b1a76b36793e"},{url:"/icons/splashscreens/iphonexr_splash.png",revision:"b89247edd66dc5b5c76233465a6dc992"},{url:"/icons/splashscreens/iphonexsmax_splash.png",revision:"71d6926578aa3073836a9d98607e79e4"},{url:"/manifest.json",revision:"b948a91ea9e9eb46508064fd111176f0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));