(function(e){function t(t){for(var n,l,o=t[0],r=t[1],i=t[2],b=0,p=[];b<o.length;b++)l=o[b],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,o=1;o<c.length;o++){var r=c[o];0!==s[r]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},s={app:0},a=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=r;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0158":function(e,t,c){e.exports=c.p+"img/card.5f3d67be.png"},"04fe":function(e,t,c){"use strict";c("9317")},"083d":function(e,t,c){},1771:function(e,t,c){var n={"./fonts/pfdintextcomppro-light.ttf":"3ff5","./fonts/pfdintextcomppro-medium.ttf":"fc33","./img/bg-pop.png":"d68f","./img/card.png":"0158","./img/email-popup/envelope.png":"4184","./img/email-popup/envelope@2x.png":"d92b","./img/game/no-icon-white.svg":"371f","./img/game/no-icon.svg":"ef6e","./img/game/yes-icon-white.svg":"3376","./img/game/yes-icon.svg":"ca28","./img/logo.png":"4ffd","./img/main-bg.png":"7d4a","./img/popup-rule/popup-first-rule.png":"7842","./img/popup-rule/popup-second-rule.png":"6041","./img/popup-rule/popup-third-rule.png":"8c35","./scss/fonts.scss":"d624","./scss/global.scss":"b751","./scss/mixins.scss":"083d"};function s(e){var t=a(e);return c(t)}function a(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id="1771"},3143:function(e,t,c){"use strict";c("c115")},3376:function(e,t,c){e.exports=c.p+"img/yes-icon-white.2c7a9a43.svg"},"371f":function(e,t,c){e.exports=c.p+"img/no-icon-white.323e36a7.svg"},"3bb9":function(e,t,c){},"3ff5":function(e,t,c){e.exports=c.p+"fonts/pfdintextcomppro-light.65f11231.ttf"},4184:function(e,t,c){e.exports=c.p+"img/envelope.88d3c2ec.png"},"4b0f":function(e,t,c){},"4ffd":function(e,t,c){e.exports=c.p+"img/logo.48380c60.png"},"56d7":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),s=c("4ffd"),a=c.n(s);const l=Object(n["r"])(window.innerWidth),o=()=>{l.value=window.innerWidth};window.addEventListener("resize",o);const r=Object(n["c"])(()=>l.value<=1100?"md":"lg");var i=r;const u=Object(n["q"])({state:null}),b={setState(e){u.state=e}};let p,d;const j=Object(n["q"])({minutes:0,seconds:0}),O=()=>{clearInterval(p),p=void 0};function v(e){d||(d=e||(()=>console.log("null callback"))),p=setInterval(()=>{j.minutes||j.seconds?j.minutes&&!j.seconds?(j.minutes-=1,j.seconds=59):j.seconds-=1:(clearInterval(p),e&&"function"===typeof e?e():d())},1e3)}const m=Object(n["q"])({name:(i.value,""),data:[]}),f={setPopupName(e){m.name=e},setPopupData(e){m.data=e}},g=e=>(Object(n["p"])("data-v-2b0aeb1a"),e=e(),Object(n["o"])(),e),h={class:"the-footer"},y={class:"contacts-block"},x={class:"left"},_=["href"],k=["href"],L={key:0,class:"client-info"},w={class:"right"},T=g(()=>Object(n["h"])("p",null," Служба поддержки: ",-1)),C=["href","textContent"],S=["href","textContent"],M={class:"ooc-copyright"};var A={__name:"AppFooter",setup(e){const t=Object(n["c"])(()=>{const e=new Date;return e.getFullYear()});return(e,c)=>(Object(n["n"])(),Object(n["g"])("footer",h,[Object(n["h"])("div",y,[Object(n["h"])("div",x,[Object(n["h"])("a",{href:Object(n["v"])(u).state.gameRulesLink.value,class:"rules-link",target:"_blank"}," Правила акции ",8,_),Object(n["h"])("a",{href:Object(n["v"])(u).state.gamePolicyLink.value,class:"rules-link",target:"_blank"}," Политика обработки персональных данных ",8,k),Object(n["v"])(u).state.footerLegalInfo.value?(Object(n["n"])(),Object(n["g"])("p",L,Object(n["u"])(Object(n["v"])(u).state.footerLegalInfo.value),1)):Object(n["f"])("",!0)]),Object(n["h"])("div",w,[T,Object(n["h"])("a",{href:"tel:"+Object(n["v"])(u).state.footerPhone.value,class:"support-link phone",textContent:Object(n["u"])(Object(n["v"])(u).state.footerPhone.value)},null,8,C),Object(n["h"])("a",{href:"mailto:"+Object(n["v"])(u).state.footerEmail.value,class:"support-link",textContent:Object(n["u"])(Object(n["v"])(u).state.footerEmail.value)},null,8,S),Object(n["h"])("p",M," © "+Object(n["u"])(Object(n["v"])(t))+". All rights reserved. ",1)])])]))}},I=(c("ec4a"),c("6b0d")),P=c.n(I);const $=P()(A,[["__scopeId","data-v-2b0aeb1a"]]);var q=$,H=(c("14d9"),c("0158")),z=c.n(H),G=c("c8b5"),E=c.n(G);const N=["disabled"],V=["href"];var D={__name:"AppButton",props:{type:{type:String,default:"red",validator(e){return["blue","red","game_no","game_yes"].includes(e)}},linkHref:{type:String,default:""},btnDisabled:{type:Boolean,default:!1}},setup(e){return(t,c)=>e.linkHref?(Object(n["n"])(),Object(n["g"])("a",{key:1,role:"button",class:"app-button",href:e.linkHref,target:"_blank"},[Object(n["t"])(t.$slots,"default",{},()=>[Object(n["i"])(" Перейти ")])],8,V)):(Object(n["n"])(),Object(n["g"])("button",{key:0,class:Object(n["k"])("app-button app-button--"+e.type),disabled:e.btnDisabled},[Object(n["t"])(t.$slots,"default")],10,N))}};c("3143");const X=P()(D,[["__scopeId","data-v-ee008066"]]);var Y=X;const R={src:z.a,alt:"game",class:"fake-game"},B={class:"the-game"},F={class:"cards"},U={class:"card-number"},W=["src"],J={class:"bottom"},Z=["innerHTML"],K={class:"controls"},Q={class:"progress-bar-border"};var ee={__name:"TheGame",props:{list:{type:Array,default:()=>[]},isGameActive:{type:Boolean,default:!1}},setup(e){const t=e,c=Object(n["r"])([...t.list].sort(()=>Math.random()-.5)),s=Object(n["r"])(1),a=Object(n["r"])([]),l=e=>{const t=document.querySelector(".the-game");e.nextSibling.childNodes.length&&e.nextSibling.classList.remove("_rotate"),a.value.push({questionId:c.value[s.value-1].questionId,answer:t.classList.contains("tinder_love")?"yes":"no"}),s.value<c.value.length?s.value+=1:(O(),document.body.style.overflowY="hidden",f.setPopupName("email"),f.setPopupData(a.value))},o=()=>{const e=document.querySelectorAll(".tinder--card"),t=document.querySelector(".the-game");e.forEach(e=>{const c=new E.a(e);c.on("pan",c=>{if(e.classList.add("moving"),0===c.deltaX)return;if(0===c.center.x&&0===c.center.y)return;t.classList.toggle("tinder_love",c.deltaX>0),t.classList.toggle("tinder_nope",c.deltaX<0);const n=.03*c.deltaX,s=c.deltaY/80,a=n*s;c.target.style.transform="translate("+c.deltaX+"px, "+c.deltaY+"px) rotate("+a+"deg)"}),c.on("panend",c=>{e.classList.remove("moving");const n=document.body.clientWidth,s=Math.abs(c.deltaX)<80||Math.abs(c.velocityX)<.5;if(c.target.classList.toggle("removed",!s),s)c.target.style.transform="";else{const s=Math.max(Math.abs(c.velocityX)*n,n),a=c.deltaX>0?s:-s,o=Math.abs(c.velocityY)*n,r=c.deltaY>0?o:-o,i=.03*c.deltaX,u=c.deltaY/80,b=i*u;c.target.style.transform="translate("+a+"px, "+(r+c.deltaY)+"px) rotate("+b+"deg)",l(e),t.classList.remove("tinder_love"),t.classList.remove("tinder_nope")}})})},r=e=>{const t=t=>{const c=document.querySelectorAll(".tinder--card"),n=document.querySelector(".the-game"),a=1.5*document.body.clientWidth;if(!c.length)return;const o=c[s.value-1];e?(n.classList.add("tinder_love"),o.style.transform=`translate(${a}px, -100px) rotate(-30deg)`):(n.classList.add("tinder_nope"),o.style.transform=`translate(-${a}px, -100px) rotate(30deg)`),l(o),n.classList.remove("tinder_love"),n.classList.remove("tinder_nope"),t.preventDefault()};return t},i=r(!0),u=r(!1);return Object(n["m"])(()=>{o()}),(e,a)=>(Object(n["n"])(),Object(n["g"])(n["a"],null,[Object(n["z"])(Object(n["h"])("img",R,null,512),[[n["x"],!t.isGameActive]]),Object(n["z"])(Object(n["h"])("div",B,[Object(n["h"])("ul",F,[(Object(n["n"])(!0),Object(n["g"])(n["a"],null,Object(n["s"])(c.value,(e,t)=>(Object(n["n"])(),Object(n["g"])("li",{key:t,class:Object(n["k"])(["tinder--card","_card"+(t+1),{_pink:t%2!==0,_rotate:0!==t}]),style:Object(n["l"])({zIndex:c.value.length-t})},[Object(n["h"])("p",U,Object(n["u"])(t+1>=10?"":0)+Object(n["u"])(t+1),1),Object(n["h"])("img",{src:e.image.value,alt:"image",class:"card-img"},null,8,W)],6))),128))]),Object(n["h"])("div",J,[Object(n["h"])("div",{class:"text",innerHTML:c.value[s.value-1].text.value},null,8,Z),Object(n["h"])("div",K,[Object(n["j"])(Y,{id:"nope",type:"game_no",onClick:Object(n["v"])(u)},null,8,["onClick"]),Object(n["j"])(Y,{id:"love",type:"game_yes",onClick:Object(n["v"])(i)},null,8,["onClick"])]),Object(n["h"])("div",Q,[Object(n["h"])("div",{class:"the-bar",style:Object(n["l"])({width:s.value*(100/c.value.length)+"%"})},null,4)])])],512),[[n["x"],t.isGameActive]])],64))}};c("04fe");const te=P()(ee,[["__scopeId","data-v-60bc26c2"]]);var ce=te;const ne={class:"info-block"},se=["textContent"],ae=["textContent"];var le={__name:"InfoBlock",props:{btnDisabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const c=e;return(e,s)=>(Object(n["n"])(),Object(n["g"])("div",ne,[Object(n["h"])("h1",{class:"title",textContent:Object(n["u"])(Object(n["v"])(u).state.h1.value)},null,8,se),Object(n["h"])("p",{class:"text",textContent:Object(n["u"])(Object(n["v"])(u).state.description.value)},null,8,ae),Object(n["j"])(Y,{class:"button","btn-disabled":c.btnDisabled,onClick:s[0]||(s[0]=e=>t("click"))},{default:Object(n["y"])(()=>[Object(n["i"])(" Как играть? ")]),_:1},8,["btn-disabled"])]))}};c("dd7c");const oe=P()(le,[["__scopeId","data-v-0e3cbb10"]]);var re=oe,ie=c("71ba");const ue=e=>(Object(n["p"])("data-v-564740bc"),e=e(),Object(n["o"])(),e),be={class:"the-rules"},pe={class:"list"},de={class:"number"},je=["innerHTML"],Oe=ue(()=>Object(n["h"])("h4",{class:"one-attempt"}," У вас есть только одна попытка! ",-1));var ve={__name:"TheRules",emits:["click"],setup(e,{emit:t}){const c=["минуту","минуты","минут"],s=["вопрос","вопроса","вопросов"],a=["Свайпайте влево или жмите красную кнопку, если перед вами миф. Свайпайте право или жмите синюю кнопку, если это правда.",`Ответьте на&nbsp; ${u.state.questionsList.length}&nbsp;${Object(ie["a"])(s,u.state.questionsList.length)} за&nbsp;${u.state.timeMinutes.value}&nbsp;${Object(ie["a"])(c,u.state.timeMinutes.value)}`,`Получите до&nbsp;${u.state.maxPossibleScore.value} баллов и&nbsp;участвуйте в&nbsp;розыгрыше призов.`];return(e,c)=>(Object(n["n"])(),Object(n["g"])("div",be,[Object(n["h"])("ul",pe,[(Object(n["n"])(),Object(n["g"])(n["a"],null,Object(n["s"])(a,(e,t)=>Object(n["h"])("li",{key:t,class:"item"},[Object(n["h"])("p",de," 0"+Object(n["u"])(t+1),1),Object(n["h"])("p",{class:"text",innerHTML:e},null,8,je)])),64))]),Oe,Object(n["j"])(Y,{class:"button",onClick:c[0]||(c[0]=e=>t("click"))},{default:Object(n["y"])(()=>[Object(n["i"])(" Начать игру ")]),_:1})]))}};c("b04a");const me=P()(ve,[["__scopeId","data-v-564740bc"]]);var fe=me;const ge={class:"app-popup"},he={class:"content"};function ye(e,t){return Object(n["n"])(),Object(n["g"])("div",ge,[Object(n["h"])("div",he,[Object(n["t"])(e.$slots,"default",{},void 0,!0)])])}c("a542");const xe={},_e=P()(xe,[["render",ye],["__scopeId","data-v-59b3203b"]]);var ke=_e;function Le(e){return c("1771")("./"+e)}const we={class:"popup-rule"},Te={class:"left"},Ce={class:"title"},Se={class:"number"},Me=["innerHTML"],Ae={class:"right"},Ie=["src","alt"];var Pe={__name:"PopupRule",emits:["start-game"],setup(e,{emit:t}){const c=["минуту","минуты","минут"],s=["вопрос","вопроса","вопросов"],a=Object(n["r"])("first"),l={first:{nextStep:"second",title:"Как играть",number:"01",text:"Свайпайте влево или жмите красную кнопку, если перед вами миф. Свайпайте право или жмите синюю кнопку, если это правда.",image:Le("img/popup-rule/popup-first-rule.png"),buttonType:"next"},second:{nextStep:"third",title:"Как играть",number:"02",text:`Ответьте на&nbsp;все ${u.state.questionsList.length}&nbsp;${Object(ie["a"])(s,u.state.questionsList.length)} за&nbsp;${u.state.timeMinutes.value}&nbsp;${Object(ie["a"])(c,u.state.timeMinutes.value)}.`,image:Le("img/popup-rule/popup-second-rule.png"),buttonType:"next"},third:{title:"Как играть",number:"03",text:`<p style="margin-bottom: 14px;">Получите до&nbsp;${u.state.maxPossibleScore.value} баллов и&nbsp;участвуйте в&nbsp;розыгрыше призов.</p><p>У&nbsp;вас&nbsp;есть&nbsp;только&nbsp;одна&nbsp;попытка!</p>`,image:Le("img/popup-rule/popup-third-rule.png"),buttonType:"play"}},o=Object(n["c"])(()=>l[a.value]),r=e=>{e?a.value=e:(f.setPopupName(""),t("start-game"))};return(e,t)=>(Object(n["n"])(),Object(n["e"])(ke,null,{default:Object(n["y"])(()=>[Object(n["h"])("div",we,[Object(n["h"])("div",Te,[Object(n["h"])("div",Ce,Object(n["u"])(Object(n["v"])(o).title),1),Object(n["h"])("div",Se,Object(n["u"])(Object(n["v"])(o).number),1),Object(n["h"])("div",{class:"text",innerHTML:Object(n["v"])(o).text},null,8,Me),Object(n["j"])(Y,{class:"next-button",type:"next"===Object(n["v"])(o).buttonType?"blue":"red",onClick:t[0]||(t[0]=e=>r(Object(n["v"])(o).nextStep))},{default:Object(n["y"])(()=>[Object(n["i"])(Object(n["u"])("next"===Object(n["v"])(o).buttonType?"Далее":"Начать игру"),1)]),_:1},8,["type"])]),Object(n["h"])("div",Ae,[Object(n["h"])("img",{src:Object(n["v"])(o).image,alt:Object(n["v"])(o).text},null,8,Ie)])])]),_:1}))}};c("9234");const $e=P()(Pe,[["__scopeId","data-v-175593dc"]]);var qe=$e,He=c("4184"),ze=c.n(He),Ge=async function(e){let t;try{const c=await fetch("api/save_game/",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});t=c.ok?await c.json():{isOLd:Math.random()>.5}}catch(c){console.log(c),t={isOLd:!1}}return t};const Ee={class:"app-input"},Ne=["type","placeholder","value","autocomplete"],Ve=["innerHTML"];var De={__name:"AppInput",props:{type:{type:String,default:"text"},modelValue:{type:String,default:""},placeholder:{type:String,default:""},errorText:{type:String,default:""},rule:{type:Function,default:void 0},maxLength:{type:Number,default:1/0,validator(e){return 1/0}}},emits:["update:modelValue","clear-error"],setup(e,{emit:t}){const c=e,s=Object(n["c"])(()=>{let e=c.modelValue;return c.rule&&(e=c.rule(e)),c.maxLength&&(e=e.slice(0,c.maxLength)),e}),a=Object(n["c"])(()=>"password"===c.type?"current-password":"email"===c.type?"email":null);return(t,c)=>(Object(n["n"])(),Object(n["g"])("div",Ee,[Object(n["h"])("input",{class:Object(n["k"])(["input",{"_input-error":e.errorText}]),type:e.type,placeholder:e.placeholder,value:Object(n["v"])(s),autocomplete:Object(n["v"])(a),onInput:c[0]||(c[0]=e=>t.$emit("update:modelValue",e.target.value)),onFocus:c[1]||(c[1]=e=>t.$emit("clear-error"))},null,42,Ne),Object(n["j"])(n["b"],{name:"fade"},{default:Object(n["y"])(()=>[Object(n["z"])(Object(n["h"])("div",{class:"error-text",innerHTML:e.errorText},null,8,Ve),[[n["x"],e.errorText]])]),_:1})]))}};c("b0e2");const Xe=P()(De,[["__scopeId","data-v-a083ab4c"]]);var Ye=Xe;const Re={src:ze.a,alt:"конверт",class:"envelope"},Be=["innerHTML"],Fe={class:"get-email-block"},Ue={class:"input"},We={class:"legal"},Je={class:"result-block"},Ze={class:"text-block"},Ke=["innerHTML"],Qe={key:0,class:"server-error"};var et={__name:"EmailPopup",setup(e){const t=Object(n["q"])({email:"",error:!1,agreementCheck:!1,adsCheck:!0,rule:e=>e.replace(/\s/g,""),serverError:!1}),c=Object(n["r"])(""),s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=Object(n["c"])(()=>c.value&&c.value.isOld?"Вы&nbsp;уже&nbsp;играли!":c.value&&!c.value.isOld?"Спасибо за участие!":"Оставьте свою почту, чтобы получить подарок!"),l=Object(n["c"])(()=>c.value.isOld?"Проверьте свою почту: мы&nbsp;отправили вам письмо с&nbsp;призом.":"Проверьте письмо с&nbsp;инструкцией на&nbsp;вашей почте."),o=()=>{t.serverError=!1,s.test(t.email.trim())?Ge({email:t.email.trim(),answers:m.data}).then(e=>{e?c.value=e:t.serverError=!0}):t.error=!0};return(e,s)=>(Object(n["n"])(),Object(n["e"])(ke,null,{default:Object(n["y"])(()=>[Object(n["h"])("div",{class:Object(n["k"])(["email-popup",{_success:c.value}])},[Object(n["z"])(Object(n["h"])("img",Re,null,512),[[n["x"],c.value]]),Object(n["h"])("h2",{class:"title",innerHTML:Object(n["v"])(a)},null,8,Be),Object(n["h"])("div",{class:Object(n["k"])(["form-block",{_isOld:c.value.isOld}])},[Object(n["z"])(Object(n["h"])("div",Fe,[Object(n["h"])("div",Ue,[Object(n["j"])(Ye,{modelValue:t.email,"onUpdate:modelValue":s[0]||(s[0]=e=>t.email=e),rule:t.rule,errorText:!0===t.error?"Введите верный адрес":"",placeholder:"Введите свой email",type:"text",onClearError:s[1]||(s[1]=e=>t.error=!1)},null,8,["modelValue","rule","errorText"]),Object(n["j"])(Y,{class:"submit",disabled:!t.adsCheck||!t.agreementCheck,onClick:o},{default:Object(n["y"])(()=>[Object(n["i"])(" Подписаться на рассылку ")]),_:1},8,["disabled"])]),Object(n["h"])("div",We,[Object(n["h"])("label",{class:Object(n["k"])(["label",{_checked:t.agreementCheck}])},[Object(n["i"])(" Я подтверждаю, что согласен на обработку персональных данных. "),Object(n["z"])(Object(n["h"])("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>t.agreementCheck=e),type:"checkbox",class:"check"},null,512),[[n["w"],t.agreementCheck]])],2),Object(n["h"])("label",{class:Object(n["k"])(["label",{_checked:t.adsCheck}])},[Object(n["i"])(" Согласен получать рекламную информацию и специальные предложения любыми путями, в том числе с использованием средств связи. "),Object(n["z"])(Object(n["h"])("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>t.adsCheck=e),type:"checkbox",class:"check"},null,512),[[n["w"],t.adsCheck]])],2)])],512),[[n["x"],!c.value]]),Object(n["z"])(Object(n["h"])("div",Je,[Object(n["h"])("div",Ze,[Object(n["h"])("p",{class:"result-subtitle",innerHTML:Object(n["v"])(l)},null,8,Ke)])],512),[[n["x"],c.value]])],2),t.serverError?(Object(n["n"])(),Object(n["g"])("div",Qe," Что-то пошло не так... Попробуйте позже ")):Object(n["f"])("",!0)],2)]),_:1}))}};c("8899");const tt=P()(et,[["__scopeId","data-v-01919e7a"]]);var ct=tt;const nt={key:0,class:"inform-block"},st={class:"time"};var at={__name:"timerBlock",props:{isTimerVisible:{type:Boolean,default:!1}},setup(e){const t=e;return(e,c)=>t.isTimerVisible?(Object(n["n"])(),Object(n["g"])("div",nt,[Object(n["h"])("div",st," 0"+Object(n["u"])(Object(n["v"])(j).minutes)+":"+Object(n["u"])(Object(n["v"])(j).seconds>=10?Object(n["v"])(j).seconds:"0"+Object(n["v"])(j).seconds),1)])):Object(n["f"])("",!0)}};c("666c");const lt=P()(at,[["__scopeId","data-v-f92d2a3c"]]);var ot=lt;const rt=e=>(Object(n["p"])("data-v-3fdcb898"),e=e(),Object(n["o"])(),e),it={class:"wrapper"},ut={class:"main"},bt=rt(()=>Object(n["h"])("a",{href:"https://github.com/NicholasSolo",class:"logo-link",target:"_blank"},[Object(n["h"])("img",{src:a.a,class:"logo",alt:"logo"})],-1)),pt={class:"app-container container"};var dt={__name:"App",setup(e){b.setState(window.state),j.minutes=u.state.timeMinutes.value,j.seconds=u.state.timeSeconds.value;const t=Object(n["q"])({isRulesActive:!1,isGameActive:!1}),c=u.state.questionsList,s=Object(n["c"])(()=>!t.isRulesActive&&!t.isGameActive&&"lg"!==i.value||"lg"===i.value),a=Object(n["c"])(()=>t.isRulesActive),l=Object(n["c"])(()=>("lg"===i.value||t.isGameActive)&&!!c.length),o=()=>{"lg"===i.value?f.setPopupName("rules"):"md"===i.value&&(t.isRulesActive=!0)},r=()=>{"lg"!==i.value&&(t.isRulesActive=!1),t.isGameActive=!0,v(()=>{f.setPopupName("email"),document.body.style.overflowY="hidden"})};return(e,i)=>(Object(n["n"])(),Object(n["g"])("div",it,["rules"===Object(n["v"])(m).name?(Object(n["n"])(),Object(n["e"])(qe,{key:0,onStartGame:r})):Object(n["f"])("",!0),"email"===Object(n["v"])(m).name?(Object(n["n"])(),Object(n["e"])(ct,{key:1})):Object(n["f"])("",!0),Object(n["h"])("main",ut,[Object(n["h"])("header",{class:Object(n["k"])(["app-container","header",{_game:t.isGameActive}])},[bt,Object(n["j"])(ot,{"is-timer-visible":t.isGameActive},null,8,["is-timer-visible"])],2),Object(n["h"])("div",pt,[Object(n["z"])(Object(n["j"])(re,{"btn-disabled":t.isGameActive,onClick:o},null,8,["btn-disabled"]),[[n["x"],Object(n["v"])(s)]]),Object(n["z"])(Object(n["j"])(fe,{onClick:r},null,512),[[n["x"],Object(n["v"])(a)]]),Object(n["v"])(l)?(Object(n["n"])(),Object(n["e"])(ce,{key:0,list:Object(n["v"])(c),"is-game-active":t.isGameActive},null,8,["list","is-game-active"])):Object(n["f"])("",!0)])]),Object(n["j"])(q)]))}};c("697d");const jt=P()(dt,[["__scopeId","data-v-3fdcb898"]]);var Ot=jt;c("b751");Object(n["d"])(Ot).mount("#app")},5772:function(e,t,c){},6041:function(e,t,c){e.exports=c.p+"img/popup-second-rule.aafcaddd.png"},"666c":function(e,t,c){"use strict";c("5772")},"697d":function(e,t,c){"use strict";c("dff4")},"6bf6":function(e,t,c){},7842:function(e,t,c){e.exports=c.p+"img/popup-first-rule.4dc58848.png"},"7d4a":function(e,t,c){e.exports=c.p+"img/main-bg.ea51ac86.png"},8899:function(e,t,c){"use strict";c("b101")},"8c35":function(e,t,c){e.exports=c.p+"img/popup-third-rule.b0c76e9a.png"},9234:function(e,t,c){"use strict";c("6bf6")},9317:function(e,t,c){},a542:function(e,t,c){"use strict";c("ec8d")},b04a:function(e,t,c){"use strict";c("eedc")},b0e2:function(e,t,c){"use strict";c("3bb9")},b101:function(e,t,c){},b751:function(e,t,c){},c115:function(e,t,c){},ca28:function(e,t,c){e.exports=c.p+"img/yes-icon.a76c4f4a.svg"},d624:function(e,t,c){},d68f:function(e,t,c){e.exports=c.p+"img/bg-pop.f81d90b9.png"},d92b:function(e,t,c){e.exports=c.p+"img/envelope@2x.5463fad8.png"},dd7c:function(e,t,c){"use strict";c("4b0f")},dff4:function(e,t,c){},ec4a:function(e,t,c){"use strict";c("f49e")},ec8d:function(e,t,c){},eedc:function(e,t,c){},ef6e:function(e,t,c){e.exports=c.p+"img/no-icon.9cd8ff9d.svg"},f49e:function(e,t,c){},fc33:function(e,t,c){e.exports=c.p+"fonts/pfdintextcomppro-medium.97529197.ttf"}});