var e=Object.defineProperty;import{l as t,r as n,R as a,u as s,B as r,a as o,f as i,J as l,C as c,U as u,t as d,b as p,I as m,N as y,c as h,d as f,Q as b,W as g,e as w,T as v,g as k,h as x}from"./vendor.f7ab23b4.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var E=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];var T=[{inputs:[{internalType:"uint256",name:"_rate",type:"uint256"},{internalType:"address payable",name:"_wallet",type:"address"},{internalType:"contract ERC20",name:"_token",type:"address"},{internalType:"address",name:"_tokenWallet",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"purchaser",type:"address"},{indexed:!0,internalType:"address",name:"beneficiary",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensPurchased",type:"event"},{inputs:[{internalType:"address",name:"beneficiary",type:"address"}],name:"buyTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"remainingTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"wallet",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"weiRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],N={warn:t.warn,debug:t.debug,info:t.info,error:t.error,trace:t.trace,setLevel:t.setLevel};function C({className:e,counterClockwise:t,dashRatio:a,pathRadius:s,strokeWidth:r,style:o}){return n.exports.createElement("path",{className:e,style:Object.assign({},o,M({pathRadius:s,dashRatio:a,counterClockwise:t})),d:S({pathRadius:s,counterClockwise:t}),strokeWidth:r,fillOpacity:0})}function S({pathRadius:e,counterClockwise:t}){const n=t?1:0;return`\n      M 50,50\n      m 0,-${e}\n      a ${e},${e} ${n} 1 1 0,${2*e}\n      a ${e},${e} ${n} 1 1 0,-${2*e}\n    `}function M({counterClockwise:e,dashRatio:t,pathRadius:n}){const a=2*Math.PI*n,s=(1-t)*a;return{strokeDasharray:`${a}px ${a}px`,strokeDashoffset:`${e?-s:s}px`}}class P extends n.exports.Component{getBackgroundPadding(){return this.props.background?this.props.backgroundPadding:0}getPathRadius(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()}getPathRatio(){const{value:e,minValue:t,maxValue:n}=this.props;return(Math.min(Math.max(e,t),n)-t)/(n-t)}render(){const{circleRatio:e,className:t,classes:a,counterClockwise:s,styles:r,strokeWidth:o,text:i}=this.props,l=this.getPathRadius(),c=this.getPathRatio();return n.exports.createElement("svg",{className:`${a.root} ${t}`,style:r.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?n.exports.createElement("circle",{className:a.background,style:r.background,cx:50,cy:50,r:50}):null,n.exports.createElement(C,{className:a.trail,counterClockwise:s,dashRatio:e,pathRadius:l,strokeWidth:o,style:r.trail}),n.exports.createElement(C,{className:a.innertrail,counterClockwise:s,dashRatio:e,pathRadius:l,strokeWidth:o,style:r.trail}),n.exports.createElement(C,{className:a.path,counterClockwise:s,dashRatio:c*e,pathRadius:l,strokeWidth:o,style:r.path}),i?n.exports.createElement("text",{className:a.text,style:r.text,x:50,y:50},i):null)}}var R;function $({rotation:e,strokeLinecap:t,textColor:n,textSize:a,pathColor:s,pathTransition:r,pathTransitionDuration:o,trailColor:i,backgroundColor:l}){const c=null==e?void 0:`rotate(${e}turn)`,u=null==e?void 0:"center center";return{root:{},path:I({stroke:s,strokeLinecap:t,transform:c,transformOrigin:u,transition:r,transitionDuration:null==o?void 0:`${o}s`}),trail:I({stroke:i,strokeLinecap:t,transform:c,transformOrigin:u}),text:I({fill:n,fontSize:a}),background:I({fill:l})}}function I(e){return Object.keys(e).forEach((t=>{null==e[t]&&delete e[t]})),e}function L(){return a.createElement("p",null,"Donut Stones is an ERC20 cryptographic token created as solution to the problem of the limits of economic growth, and the traditional economic mechanisms of distrubuting value within a population. Partially inspired by the growing popular research on ",a.createElement("a",{className:"text-italic",href:"https://doughnuteconomics.org/about-doughnut-economics"},"doughnut economics by Kate Raworth")," that illlustrates many of the flaws in traditional growth-based economies. As these economies grow and scales, maginalised portions of the population become larger and increasingly neglected whilst environmental resoured become abused and increasingly degraded. Donut Stones (ⅅ) is a solution to this problem, and is designed to be a ",a.createElement("span",{className:"text-italic"},"secondary currency"),", to circulate alongside traditional fiat currencies such as GBP or USD. According to the Economic Policy Institute, as of 2019, the average wage of the top 1% was $758,434. However, the 1% is not necessarily a reference to top 1% of wage earners, but a reference to the top 1% of individuals by net worth, of which earned wages are only a fraction of the many factors that contribute to their wealth. Underlying this is the simple fact that money makes money, and so as more bank notes are printed, for example during the COVID-19 pandemic, this inequality actually worsens. So if we imagine the distribution of wealth within an economy as a doughut shape whereby the largest proportion of the population is concentrated at the center along with the most severe inequalities and basic human necessities, whilst excess wealth and environmental degrdation marks the perimeter, then ",a.createElement("span",{className:"text-bold text-italic"},"Donut Stones follows the inverse model")," concentrated at the center of the doughut, and becoming increasingly scarce and more tightly regulated towards the perimeter. Of course, to achieve this, the distribution, exchange and spending of Donut Stones must be very tightly regulated and a variable exchange where the price depends on the person exchanging. A cryptocurrency therefore may seem like a very odd choice of iplementation for any currency that requires such strict regulation. However, I actually believer that ERC20 tokens and smart contracts provide some very interesting and useful properties that could fit this use case very well. Donut Stones is still its very early stages, and so as of yet, no variable exchange rate or any of the other required infrastructure has been implemented, and so you can buy donutstones below completely free. To show your support for the project, leave a comment below or email me at ",a.createElement("a",{href:"mailto:info@donutstones.org",className:"text-italic"},"info@donutstones.org"),", and I will aim to keep this page updated.")}function F(){return a.createElement("p",null,a.createElement("h2",null,"🙄 TLDR:"),a.createElement("h3",null,"If your technically minded, follow the instructions below to make the purchase yourself. Alternatively just email me at ",a.createElement("a",{href:"mailto:info@donutstones.org",className:"text-italic"},"info@donutstones.org")," with a legitmate claim why you want these tokens, and ill do it for you and send you the wallet."),a.createElement("h2",null,"Technical instructions:"),a.createElement("h3",null," The main point to note here is that the smart contract for both the erc20 token and the crowdsale is hosted on the ",a.createElement("span",{className:"text-bold"},"rinkeby test network")," (Chain Id = 4) as opposed to the ethereum mainnet"),a.createElement("h4",null,"As such, you will need to have an ethereum account set up specifically on this network, and buy donut stones using that account. You can create an account on this network using metamask or most other ethereum wallet providers"),a.createElement("h4",null,"Its free to do this, and free to request ETH to your wallet address on this network, using ",a.createElement("a",{href:"https://faucet.rinkeby.io/"},"this site")),a.createElement("h2",null,"Either way, Donut stones are 100% free 🍩"),a.createElement("h4",null,"The small caveat here is that requesting ETH to your rinkeby wallet using the faucet is rate limited, so even though its free, you will only be able to buy a limited amount."))}function D({menuState:e}){return a.createElement("div",{className:"ds-card-text"},"home"===e&&a.createElement(L,null),"howToBuy"===e&&a.createElement(F,null))}function A(){return a.createElement("div",{className:"ds-logo"},a.createElement("span",null,a.createElement("span",{className:"ds-logo-caps"},"D"),"onut "),a.createElement("span",null,a.createElement("span",{className:"ds-logo-caps"},"S"),"tones "))}function O({menuState:e,setMenuState:t}){function n(t){return t===e?"active text-grey":"text-grey"}return a.createElement("div",{className:"ds-menu-buttons row"},a.createElement("div",{className:"col-xs-6"},a.createElement("button",{className:n("home"),onClick:()=>{t("home")}},"Home")),a.createElement("div",{className:"col-xs-6"},a.createElement("button",{className:n("howToBuy"),onClick:()=>{t("howToBuy")}},"How to buy or claim")))}((t,n,a)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a})(P,"symbol"!=typeof(R="defaultProps")?R+"":R,{background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",innertrail:"CircularProgressbar-trail CircularProgressbar-innertrail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""});const B="https://eth-rinkeby.alchemyapi.io/v2/jygflwgUGI3R3nTeuQK2bd3wLKcWxyHZ",H=({crowdsaleAddress:e})=>{const{library:t,chainId:m,account:y}=s(),[h,f]=n.exports.useState(""),[b,g]=n.exports.useState("0"),[w,v]=n.exports.useState(r.from("500")),[k,x]=n.exports.useState(r.from("3"));n.exports.useState(1);const[C,S]=n.exports.useState("home");var M=1,R=2573.54;const I=async function(){var e=document.getElementById("number-of-tokens-to-buy");e&&e.value&&(M=+e.value);const t=18,n=M*w.toNumber(),a=await i(n);try{await(async()=>{const e=await p.post("https://min-api.cryptocompare.com/data/price",{fsym:"ETH",tsyms:"GBP",sign:!0});R=e.data.GBP})()}catch(u){console.warn(u,`Fetch failed, defaulting to £${R}/ETH`)}const s=(+a*R).toFixed(t),r=(+a).toFixed(t),o=n.toFixed(t);var l=document.getElementById("number-of-tokens-to-buy-values");if(l){var c=`\n      <p>${String(o).substring(0,t)} <span class="text-blue">Wei</span> </p>\n      <p>${String(r).substring(0,t)} <span class="text-blue">ETH</span> </p>\n      <p>${String(s).substring(0,t)} <span class="text-blue">GBP</span> </p>\n      `;l.innerHTML=c}};n.exports.useEffect((()=>{try{N.warn("fetchCrowdsaleTokenInfo");const t=new l(B),n=new c(e,T,t);n.token().then(f).catch(N.error),n.remainingTokens().then((e=>g(r.from(e).toString()))).catch(N.error),n.rate().then((e=>v(e))).catch(N.error)}catch(t){N.error(t)}}),[t]);const{error:L,isLoading:F,data:H}=o(["token-info",h],(async()=>{N.warn("fetchTokenInfo");const t=new l(B),n=new c(h,E,t),a=new c(e,T,t),s=await n.name(),r=await n.symbol(),o=await n.decimals(),i=await n.totalSupply(),u=await a.remainingTokens(),d=await a.rate();return x(i.sub(u)),N.warn("token info",{name:s,symbol:r,decimals:o,totalSupply:i,remainingTokens:u,tokensSoldPerc:k}),{name:s,symbol:r,decimals:o,totalSupply:i,tokenRate:d,tokensSoldPerc:k}}),{enabled:""!==h});return Object.assign({name:"DonutStone",symbol:"DS",tokensSoldPerc:r.from("3"),tokenRate:r.from("500"),error:L},H),I(),a.createElement("div",{className:"ds-card"},a.createElement("div",{className:"ds-card-body row"},a.createElement("div",{className:"ds-main-column col-xs-10"},a.createElement(A,null),a.createElement(O,{menuState:C,setMenuState:S}),a.createElement(D,{menuState:C}),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-xs-6"},a.createElement("div",{className:"ds-progress-bar-wrapper"},a.createElement(P,{value:+k.toString().substring(0,1),text:`${k.toString().substring(0,1)}% sold`,strokeWidth:5,styles:$({textSize:"10px",strokeLinecap:"butt",pathColor:"#FFFFFF",textColor:"#FFFFFF"})})),a.createElement("span",{className:"text-orange text-xl"},"ⓘ"," "),a.createElement("a",{id:"etherscan-link",className:"text-grey italic",href:`https://rinkeby.etherscan.io/token/${h}`,target:"_blank"},a.createElement("span",null,"View contract on Etherscan"))),a.createElement("div",{className:"col-xs-6"},a.createElement("div",{className:"ds-checkout"},a.createElement("p",{className:"text-grey"},"Buy Donut Stones"),a.createElement("p",{className:"text-orange text-bold"},"🦊 Requires a metamask connection"),a.createElement("div",null,a.createElement("input",{onChange:I,onLoad:I,id:"number-of-tokens-to-buy",type:"number",placeholder:"1"}),a.createElement("button",{id:"number-of-tokens-to-buy-btn",onClick:async()=>{try{const n=(t||new l(B)).getSigner();if(!y)return void(await(async()=>{var e;if(null==(e=window.ethereum)?void 0:e.request)return window.ethereum.request({method:"eth_requestAccounts"});throw new Error("Please access https://metamask.io/ to install the Metamask extension on your browser")})());if(4!=m)throw new u(m||-1,[4]);const s={to:e,value:w.mul(M)};console.warn(s);const r=await n.sendTransaction(s);d.promise(r.wait(),{loading:"Transaction submitted. Wait for confirmation...",success:a.createElement("b",null,"Transaction confirmed!"),error:"Transaction failed. Check the console for details"})}catch(n){d.error("Transaction failed. Check the console for details"),console.error(n)}}},"ⅅ")),a.createElement("div",{id:"number-of-tokens-to-buy-values",className:"text-white typed-text"},a.createElement("p",null,a.createElement("span",{className:"text-blue"})," "),a.createElement("p",null,a.createElement("span",{className:"text-blue"})," "),a.createElement("p",null,a.createElement("span",{className:"text-blue"})," ")))))),a.createElement("div",{className:"col-xs-2 ds-side-column"},a.createElement("div",{className:"ds-vertical-line"}),a.createElement("div",{className:"ds-align-bottom"},a.createElement("div",{className:"ds-img"})))))},W=new m({supportedChainIds:[1,3,4,5,42,56,88,89,97,137,1337,80001]});function q(){const{connector:e,activate:t,deactivate:r,active:o,error:i,chainId:l}=s(),[c,d]=a.useState();a.useEffect((()=>{c&&c===e&&d(void 0)}),[c,e]);!function(e=!1){const{active:t,error:a,activate:r}=s();n.exports.useEffect((()=>{const{ethereum:n}=window;if(n&&n.on&&!t&&!a&&!e){const e=()=>{N.warn("Handling 'connect' event"),r(W)},t=e=>{N.warn("Handling 'chainChanged' event with payload",e),r(W)},a=e=>{N.warn("Handling 'accountsChanged' event with payload",e),e.length>0&&r(W)},s=e=>{N.warn("Handling 'networkChanged' event with payload",e),r(W)};return n.on("connect",e),n.on("chainChanged",t),n.on("accountsChanged",a),n.on("networkChanged",s),()=>{n.removeListener&&(n.removeListener("connect",e),n.removeListener("chainChanged",t),n.removeListener("accountsChanged",a),n.removeListener("networkChanged",s))}}}),[t,a,e,r])}(!function(){const{activate:e,active:t}=s(),[a,r]=n.exports.useState(!1);return n.exports.useEffect((()=>{W.isAuthorized().then((t=>{t?e(W,void 0,!0).catch((()=>{r(!0)})):r(!0)}))}),[]),n.exports.useEffect((()=>{!a&&t&&r(!0)}),[a,t]),a}()||!!c);const p=W===e,m=4!=l;return a.createElement("div",{className:"ds-connector text-xl"},!!i&&a.createElement("div",{className:"text-red"},`🦊 ${b=i,b instanceof y?"No Ethereum browser extension detected.":b instanceof u?"Unsupported network, please use the rinkeby test network.":b instanceof h||b instanceof f?"Please authorize this website to access your Ethereum account.":"An unknown error occurred. Check the console for more details."} 🚫`),m&&a.createElement("div",{className:"text-red"},"🦊 Please connect to the rinkeby test network 🚫"),p&&!Boolean(i)&&!m&&a.createElement("div",{className:"text-xl text-orange"},"Connected 🦊 ✅"),!p&&a.createElement("div",{id:"connect-btn",onClick:()=>{d(W),t(W)}},"Connect → 🦊"));var b}const j=new b;function V(e){const t=new k(e);return t.pollingInterval=12e3,t}function U(){return a.createElement(g,{getLibrary:V},a.createElement(w,{client:j},a.createElement("div",{className:"ds-container"},a.createElement("div",{className:"App pt-6 shadow-xl"},a.createElement(H,{crowdsaleAddress:"0x9244D4AC8ea8Ab5084a0E0279F77Fb42F41fCc5e"}))),a.createElement(q,null),a.createElement(v,{position:"top-right"})))}x.render(a.createElement(a.StrictMode,null,a.createElement(U,null)),document.getElementById("root"));
