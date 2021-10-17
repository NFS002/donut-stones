var e=Object.defineProperty;import{l as t,I as n,u as a,r,R as s,f as o,W as i,N as l,U as c,a as u,b as d,B as p,c as m,J as y,C as h,t as b,d as f,Q as g,e as w,g as v,h as x,T as E,i as k}from"./vendor.09706670.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var T=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];var N=[{inputs:[{internalType:"uint256",name:"_rate",type:"uint256"},{internalType:"address payable",name:"_wallet",type:"address"},{internalType:"contract ERC20",name:"_token",type:"address"},{internalType:"address",name:"_tokenWallet",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"purchaser",type:"address"},{indexed:!0,internalType:"address",name:"beneficiary",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensPurchased",type:"event"},{inputs:[{internalType:"address",name:"beneficiary",type:"address"}],name:"buyTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"remainingTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"wallet",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"weiRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],C={warn:t.warn,debug:t.debug,info:t.info,error:t.error,trace:t.trace,setLevel:t.setLevel};const M=new n({supportedChainIds:[1,3,4,5,42,56,88,89,97,137,1337,80001]});function S(){const{activate:e,active:t}=a(),[n,s]=r.exports.useState(!1);return r.exports.useEffect((()=>{M.isAuthorized().then((t=>{t?e(M,void 0,!0).catch((()=>{s(!0)})):s(!0)}))}),[]),r.exports.useEffect((()=>{!n&&t&&s(!0)}),[n,t]),n}function P(e=!1){const{active:t,error:n,activate:s}=a();r.exports.useEffect((()=>{const{ethereum:a}=window;if(a&&a.on&&!t&&!n&&!e){const e=()=>{C.warn("Handling 'connect' event"),s(M)},t=e=>{C.warn("Handling 'chainChanged' event with payload",e),s(M)},n=e=>{C.warn("Handling 'accountsChanged' event with payload",e),e.length>0&&s(M)},r=e=>{C.warn("Handling 'networkChanged' event with payload",e),s(M)};return a.on("connect",e),a.on("chainChanged",t),a.on("accountsChanged",n),a.on("networkChanged",r),()=>{a.removeListener&&(a.removeListener("connect",e),a.removeListener("chainChanged",t),a.removeListener("accountsChanged",n),a.removeListener("networkChanged",r))}}}),[t,n,e,s])}function R(){const e=a(),{connector:t,activate:n,deactivate:r,active:o,error:i}=e,[l,c]=s.useState();s.useEffect((()=>{l&&l===t&&c(void 0)}),[l,t]);P(!S()||!!l);const u=M===t;return s.createElement("div",{className:"flex flex-row w-full ml-4 mr-4"},u&&s.createElement("div",{className:"uppercase font-bold text-xl text-orange"},"Connected 🦊 ✅"),!u&&s.createElement("div",{id:"connect-btn",className:"uppercase font-bold text-xl p-2",onClick:()=>{c(M),n(M)}},"Connect  → 🦊"))}function $(){const{account:e}=a();return s.createElement("div",{className:"uppercase text-blue"},s.createElement("span",null,null===e?"-":e?` ${e.substring(0,6)}...`:""))}function F(){const{account:e,library:t,chainId:n}=a(),[r,i]=s.useState();return s.useEffect((()=>{if(e&&t){let n=!1;return t.getBalance(e).then((e=>{n||i(e)})).catch((()=>{n||i(null)})),()=>{n=!0,i(void 0)}}}),[e,t,n]),s.createElement("div",{className:"uppercase"},s.createElement("span",null,null===r?"Error":r?`Ξ${o(r).substring(0,6)}`:""))}function L(e){const t=new i(e);return t.pollingInterval=12e3,t}function I(){const e=a(),{connector:t,activate:n,deactivate:r,active:o,error:i}=e,[p,m]=s.useState();s.useEffect((()=>{p&&p===t&&m(void 0)}),[p,t]);return P(!S()||!!p),s.createElement("div",{id:"account-info",className:"mb-2 shadow-lg navbar rounded"},s.createElement("div",{className:"flex-1 px-2 mx-2"},s.createElement("div",{className:"flex flex-row w-full ml-4 mr-4"},s.createElement(R,null),s.createElement("div",null,!!i&&s.createElement("h4",{style:{marginTop:"1rem",marginBottom:"0"}},function(e){return e instanceof l?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof c?"You're connected to an unsupported network.":e instanceof u||e instanceof d?"Please authorize this website to access your Ethereum account.":(C.error(e),"An unknown error occurred. Check the console for more details.")}(i))))),s.createElement("div",{className:"flex-none hidden px-2 mx-2 lg:flex"},s.createElement("div",{className:"flex items-stretch"},s.createElement($,null),s.createElement(F,null))))}function O({className:e,counterClockwise:t,dashRatio:n,pathRadius:a,strokeWidth:s,style:o}){return r.exports.createElement("path",{className:e,style:Object.assign({},o,A({pathRadius:a,dashRatio:n,counterClockwise:t})),d:W({pathRadius:a,counterClockwise:t}),strokeWidth:s,fillOpacity:0})}function W({pathRadius:e,counterClockwise:t}){const n=t?1:0;return`\n      M 50,50\n      m 0,-${e}\n      a ${e},${e} ${n} 1 1 0,${2*e}\n      a ${e},${e} ${n} 1 1 0,-${2*e}\n    `}function A({counterClockwise:e,dashRatio:t,pathRadius:n}){const a=2*Math.PI*n,r=(1-t)*a;return{strokeDasharray:`${a}px ${a}px`,strokeDashoffset:`${e?-r:r}px`}}class B extends r.exports.Component{getBackgroundPadding(){return this.props.background?this.props.backgroundPadding:0}getPathRadius(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()}getPathRatio(){const{value:e,minValue:t,maxValue:n}=this.props;return(Math.min(Math.max(e,t),n)-t)/(n-t)}render(){const{circleRatio:e,className:t,classes:n,counterClockwise:a,styles:s,strokeWidth:o,text:i}=this.props,l=this.getPathRadius(),c=this.getPathRatio();return r.exports.createElement("svg",{className:`${n.root} ${t}`,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?r.exports.createElement("circle",{className:n.background,style:s.background,cx:50,cy:50,r:50}):null,r.exports.createElement(O,{className:n.trail,counterClockwise:a,dashRatio:e,pathRadius:l,strokeWidth:o,style:s.trail}),r.exports.createElement(O,{className:n.innertrail,counterClockwise:a,dashRatio:e,pathRadius:l,strokeWidth:o,style:s.trail}),r.exports.createElement(O,{className:n.path,counterClockwise:a,dashRatio:c*e,pathRadius:l,strokeWidth:o,style:s.path}),i?r.exports.createElement("text",{className:n.text,style:s.text,x:50,y:50},i):null)}}var D;function q({rotation:e,strokeLinecap:t,textColor:n,textSize:a,pathColor:r,pathTransition:s,pathTransitionDuration:o,trailColor:i,backgroundColor:l}){const c=null==e?void 0:`rotate(${e}turn)`,u=null==e?void 0:"center center";return{root:{},path:H({stroke:r,strokeLinecap:t,transform:c,transformOrigin:u,transition:s,transitionDuration:null==o?void 0:`${o}s`}),trail:H({stroke:i,strokeLinecap:t,transform:c,transformOrigin:u}),text:H({fill:n,fontSize:a}),background:H({fill:l})}}function H(e){return Object.keys(e).forEach((t=>{null==e[t]&&delete e[t]})),e}((t,n,a)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a})(B,"symbol"!=typeof(D="defaultProps")?D+"":D,{background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",innertrail:"CircularProgressbar-trail CircularProgressbar-innertrail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""});const j="https://eth-rinkeby.alchemyapi.io/v2/jygflwgUGI3R3nTeuQK2bd3wLKcWxyHZ",V=({crowdsaleAddress:e})=>{const{library:t,chainId:n,account:l}=a(),[c,u]=r.exports.useState(""),[d,g]=r.exports.useState("0"),[w,v]=r.exports.useState(p.from("500")),[x,E]=r.exports.useState(p.from("3"));r.exports.useState(1);var k=1,M=2573.54;const S=async function(){var e=document.getElementById("number-of-tokens-to-buy");e&&e.value&&(k=+e.value);const t=18,n=k*w.toNumber(),a=await o(n);await(async()=>{const e=await f.post("https://min-api.cryptocompare.com/data/price",{fsym:"ETH",tsyms:"GBP",sign:!0});M=e.data.GBP})();const r=(+a*M).toFixed(t),s=(+a).toFixed(t),i=n.toFixed(t);var l=document.getElementById("number-of-tokens-to-buy-values");if(l){var c=`\n      <p>= ${String(i).substring(0,t)} <span class="text-blue">Wei</span> </p>\n      <p>= ${String(s).substring(0,t)} <span class="text-blue">ETH</span> </p>\n      <p>≈ ${String(r).substring(0,t)} <span class="text-blue">GBP</span> </p>\n      `;l.innerHTML=c}};r.exports.useEffect((()=>{try{C.warn("fetchCrowdsaleTokenInfo");const n=t||new y(j),a=new h(e,N,n);a.token().then(u).catch(C.error),a.remainingTokens().then((e=>g(p.from(e).toString()))).catch(C.error),a.rate().then((e=>v(e))).catch(C.error)}catch(n){C.error(n)}}),[t]);const{error:P,isLoading:R,data:$}=m(["token-info",c],(async()=>{C.warn("fetchTokenInfo");const t=window.ethereum?new i(window.ethereum):new y(j),n=new h(c,T,t),a=new h(e,N,t),r=await n.name(),s=await n.symbol(),o=await n.decimals(),l=await n.totalSupply(),u=await a.remainingTokens(),d=await a.rate();return E(l.sub(u)),C.warn("token info",{name:r,symbol:s,decimals:o,totalSupply:l,remainingTokens:u,tokensSoldPerc:x}),{name:r,symbol:s,decimals:o,totalSupply:l,tokenRate:d,tokensSoldPerc:x}}),{enabled:""!==c});return Object.assign({name:"DonutStone",symbol:"DS",tokensSoldPerc:p.from("3"),tokenRate:p.from("500"),error:P},$),S(),s.createElement(s.Fragment,null,s.createElement(I,null),s.createElement(s.Fragment,null,s.createElement("div",{className:"card shadow-2xl main-card rounded"},s.createElement("div",{className:"card-body grid grid-rows-3 grid-cols-5"},s.createElement("div",{className:"row-span-1 col-span-4"},s.createElement("div",{className:"card-text col-span-4 row-span-1 text-grey text-lg"},s.createElement("p",null,"Donut Stones is an ERC20 cryptographic token created as the"," ",s.createElement("span",{className:"italic"},"antidote")," to the traditional economic mechanisms of distrubuting value. It was inspired by the growing popular research on the 'doughnut economy' by Kate Raworth that illlustrates many of the flaws in traditional economies that rely on perpertual growth, and is not only sustainable model but increasingly neglects maginalised portions of the population. The idea behind Donut Stones (⅊) is a secondary currency, to circulate alongside traditional fiat currencies such as GBP, but which the exchange is regulated, and which can only be"," ",s.createElement("span",{className:"italic"},"spent")," at a predefined subset of institutions that offer essential goods and services. If we imagine the distribution of wealth as a doughut shape whereby the most severe inequalities and the most basic human necessities are most concentrated at the center and excess wealth and environmental degrdationm marks the perimeter, then Donut Stones provide the inverse model, concentrated at the center of the doughut, and becoming increasingly scarce and more tightly regulated towards the perimeter. To show your support for the project, anyone may currently buy or exchange Donut Stones. Alternatively, you may formally request them by sending an email to email@domain.com, quoting your ethererum address, and amount you would like to request. Of course any words of support or feedback will aso be greatly appreciated, and I will aim to keep this page updated.",s.createElement("br",null),"If you are interested to find out more about the specificities of how this token may practically integrates into the modern economy,"," ",s.createElement("a",{id:"whitepaper-link",href:"https://dumacollective.com/404"},"you can read the whitepaper here.")))),s.createElement("div",{className:"card-side row-span-3 col-span-1"},s.createElement("div",{className:"divider divider-vertical"})),s.createElement("div",{className:"col-span-2 row-span-1"},s.createElement("div",{className:"circular-progress-bar-parent-wrapper"},s.createElement("div",{className:"card-bottom"},s.createElement("div",{className:"circular-progress-bar-wrapper"},s.createElement(B,{value:+x.toString().substring(0,1),text:`${x.toString().substring(0,1)}% sold`,strokeWidth:5,styles:q({textSize:"10px",strokeLinecap:"butt",pathColor:"#FFFFFF",textColor:"#FFFFFF"})}))),s.createElement("a",{id:"etherscan-link",className:"text-grey italic",href:`https://rinkeby.etherscan.io/token/${c}`,target:"_blank"},s.createElement("span",{className:"text-orange font-bold text-xl"},"ⓘ"," "),"View contract on Etherscan"))),s.createElement("div",{className:"col-span-2 row-span-1"},s.createElement("div",{className:"card-bottom-wrapper"},s.createElement("div",{className:"card-bottom"},s.createElement("div",{className:"text-lg"},s.createElement("p",{className:"pl-1 pb-1 text-grey"},"Buy Donut Stones ",s.createElement("span",{className:"text-2xl"},"⅊")),s.createElement("p",{className:"text-white pb-2"},"(Requires a ",s.createElement("span",{className:"text-orange"},"Metamask")," ","connection)")),s.createElement("div",null,s.createElement("input",{onChange:S,onLoad:S,id:"number-of-tokens-to-buy",type:"number",placeholder:"1",className:"input shadow-lg rounded-r-none text-grey"}),s.createElement("button",{id:"number-of-tokens-to-buy-btn",onClick:async()=>{const n=(t||new y(j)).getSigner();try{if(!l)return void(await(async()=>{var e;if(null==(e=window.ethereum)?void 0:e.request)return window.ethereum.request({method:"eth_requestAccounts"});throw new Error("Please access https://metamask.io/ to install the Metamask extension on your browser")})());const t={to:e,value:w.mul(k)};console.warn(t);const a=await n.sendTransaction(t);b.promise(a.wait(),{loading:"Transaction submitted. Wait for confirmation...",success:s.createElement("b",null,"Transaction confirmed!"),error:"Transaction failed. Check the console for details"})}catch(a){console.error(a)}},className:"absolute shadow-lg rounded-l-none btn"},"=>")),s.createElement("div",{id:"number-of-tokens-to-buy-values",className:"pt-3 text-xl text-white typed-text"},s.createElement("p",null," ",s.createElement("span",{className:"text-blue"})," "),s.createElement("p",null," ",s.createElement("span",{className:"text-blue"})," "),s.createElement("p",null," ",s.createElement("span",{className:"text-blue"})," ")))))))))};const _=new g;function z(){return s.createElement(w,{getLibrary:L},s.createElement(v,{client:_},s.createElement("div",{className:"container"},s.createElement("div",{className:"App pt-6 shadow-xl"},s.createElement(V,{crowdsaleAddress:"0x9244D4AC8ea8Ab5084a0E0279F77Fb42F41fCc5e"}))),s.createElement(x.exports.ReactQueryDevtools,{initialIsOpen:!1}),s.createElement(E,{position:"top-right"})))}k.render(s.createElement(s.StrictMode,null,s.createElement(z,null)),document.getElementById("root"));
