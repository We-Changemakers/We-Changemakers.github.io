(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+Gwt":function(e,t,a){},"/zXL":function(e,t,a){e.exports=a.p+"static/sustainability_2020_06_27-34decc3f81231e67753fb93e8b1103da.jpg"},"0kZm":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a.n(n);a("3wMm");function r(e){var t=e.children;return o.a.createElement("button",{className:"wgs-button"},o.a.createElement("span",{className:"wgs-button-inner"},t))}},"3wMm":function(e,t,a){},"9QBy":function(e,t,a){e.exports=a.p+"static/flower_sale-8a85bf035b6cfa5c5eda551aa8e7b59a.jpg"},Js6W:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a("q1tI"),o=a.n(n),r=a("VPB4"),l=(a("AauV"),a("hX0p"));function i(e){var t=e.pageContext.index;return o.a.createElement(r.a,{data:l.a,index:t,urlRoot:"highlights"})}},JsjD:function(e,t,a){e.exports=a.p+"static/skyline-fcedc967278c7328b7ec43403e422298.jpg"},VCS1:function(e,t,a){},VPB4:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),o=a.n(n),r=(a("VCS1"),a("0kZm"));function l(e){var t=e.target,a=e.target.querySelector(".wgs-dialogue-title"),n=e.target.querySelector(".wgs-dialogue-main-content");if(t.scrollTop<window.innerHeight-176){var o=t.scrollTop/(window.innerHeight-176);a.style.transform="translateY("+116*o+"px) scale("+1/(1+o)+")",n.style.overflowY="hidden",n.style.transform="translateY("+(64*o-64)+"px)"}else a.style.transform="translateY(116px) scale(0.5)",n.style.overflowY="auto",n.style.transform="translateY(0px)"}function i(e){var t=e.data,a=e.index;Object(n.useEffect)((function(){return document.body.style.overflowY="hidden",document.querySelector('.wgs-dialogue[data-index="'+a+'"]').addEventListener("scroll",l),function(){var e;document.body.style.overflowY="unset",null===(e=document.querySelector('.wgs-dialogue[data-index="'+a+'"]'))||void 0===e||e.removeEventListener("scroll",l)}}));var i=t.icon,s=t.bio,c=t.title,d=t.header,u=t.url;return o.a.createElement("div",{className:"wgs-dialogue","data-index":a},o.a.createElement("div",{className:"wgs-dialogue-content",style:{backgroundImage:"url("+d+")"}},o.a.createElement("div",{className:"wgs-dialogue-header"},o.a.createElement("div",{className:"wgs-dialogue-titlebox"},o.a.createElement("h1",{className:"wgs-dialogue-title"},c))),o.a.createElement("main",{className:"wgs-dialogue-main"},o.a.createElement("div",{class:"wgs-dialogue-main-content"},o.a.createElement("p",{className:"wgs-dialogue-bio"},s),u?o.a.createElement("a",{href:u,target:"_blank",rel:"noreferrer noopener"},o.a.createElement(r.a,null,"Visit Website")):o.a.createElement(o.a.Fragment,null)))),o.a.createElement("div",{className:"wgs-dialogue-icon"},o.a.createElement("img",{src:i,alt:c+" Icon"})),o.a.createElement("div",{className:"wgs-dialogue-fab-bg"}))}a("+Gwt");var s=a("Wbzz"),c=a("JsjD"),d=a.n(c);function u(e){var t=e.data,a=e.urlRoot,r=e.index;function l(e){var t=e.target,n=t.getBoundingClientRect(),o=t.querySelectorAll(".wgs-dialogue");if(t.scrollLeft%n.width==0){var l=t.scrollLeft/window.innerWidth,i=Number(o[l].getAttribute("data-index"));i!==r&&(console.log("changing page to ",i),console.log("index is set to ",r),console.log("scroll position is ",t.scrollLeft),console.log("\n\n\n"),Object(s.navigate)("/"+a+"/"+i))}}return r=Number(r),Object(n.useEffect)((function(){var e=document.querySelector(".dm-scroll-container");return e.scrollLeft=r*window.innerWidth,e.addEventListener("scroll",l),function(){e.removeEventListener("scroll",l)}})),o.a.createElement("div",{className:"dm-scroll-parent"},o.a.createElement("div",{className:"dm-scroll-container",style:{backgroundImage:"linear-gradient(90deg, rgba(24, 174, 232, 0.75), rgba(19, 198, 163, 0.75)), url("+d.a+")"}},t.map((function(e,t){return o.a.createElement(i,{data:e,key:t,index:t})}))),o.a.createElement("div",{className:"wgs-dialogue-fab-bar"},o.a.createElement("button",{className:"wgs-fab wgs-fab-small wgs-dialogue-sharebutton",onClick:function(){if(navigator.share)navigator.share({url:document.location.href,title:t[r].title+" | Vancouver Changemakers"});else{var e=document.createElement("input");e.value=document.location.href,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e),alert("Copied URL to clipboard")}}},o.a.createElement("span",{className:"wgs-fab-inner"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48px",height:"48px"},o.a.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}))),o.a.createElement("mwc-ripple",null)),o.a.createElement("button",{className:"wgs-fab wgs-fab-small",onClick:function(){document.querySelector(".dm-scroll-container").scrollTo({top:0,left:document.querySelector(".dm-scroll-container").scrollLeft-window.innerWidth,behavior:"smooth"})}},o.a.createElement("span",{className:"wgs-fab-inner"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"48px",height:"48px"},o.a.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))),o.a.createElement("mwc-ripple",null)),o.a.createElement("button",{className:"wgs-fab wgs-fab-big",onClick:function(){document.querySelector('.wgs-dialogue[data-index="'+r+'"]').scrollTo({top:window.innerHeight-176,left:0,behavior:"smooth"})}},o.a.createElement("span",{className:"wgs-fab-inner"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48px",height:"48px"},o.a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),o.a.createElement("span",{className:"wgs-fab-text"},"Open")),o.a.createElement("mwc-ripple",{primary:!0})),o.a.createElement("button",{className:"wgs-fab wgs-fab-small",onClick:function(){document.querySelector(".dm-scroll-container").scrollTo({top:0,left:document.querySelector(".dm-scroll-container").scrollLeft+window.innerWidth,behavior:"smooth"})}},o.a.createElement("span",{className:"wgs-fab-inner"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"48px",height:"48px"},o.a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))),o.a.createElement("mwc-ripple",null))))}},hX0p:function(e,t,a){"use strict";var n=a("qcH+"),o=a.n(n),r=a("JsjD"),l=a.n(r),i=a("/zXL"),s=a.n(i),c=a("9QBy"),d=a.n(c),u=[{title:"Holiday Sale",tagline:"E-Commerce fundraiser for the lookout society over the holidays",icon:o.a,bio:"The ongoing COVID-19 pandemic has made fundraising incredibly challenging. Despite that, we were able to move to an E-Commerce model to raise money for the Lookout Society with cards designed by various group members with various holiday-related phrases (Happy Holidays, Merry Christmas, Season's Greetings, Happy Happy Hanukkah, etc). We promoted this effort through our social media pages and emails to friends and family. Cards could be requested through Instagram DM, by email, or from the new shop page on our website. Once the request has been recieved, delivery location and money e-transfer was organized. In the end, we managed to raise $205 with this fundraiser, and build valuable skills, knowledge, and infrastructure for future online fundraisers we plan to do for much of 2021.",url:null,header:o.a},{title:"Digital Change",tagline:"Social media efforts to continue changing the world during a pandemic",icon:s.a,bio:"With a global pandemic disrupting our fundraising plans, we took to social media and the internet to continue to make a change when in-person fundraising was off the table. The first major effort we took was putting a greater focus on our social media. With a new, informational post format, and a new design, we began building an audience and sharing information. The other major effort was the creation of this website to allow for a single place to share upcoming events, fundraisers, and information on what we have done in the past. This new digital presence has been extremely important in everything we've done since the beginning of the pandemic, including a holiday card sale.",url:null,header:l.a},{title:"Flower Sale",tagline:"Valentine's Day flower sale for covenant house",icon:d.a,bio:"",url:null,header:d.a}];t.a=u},"qcH+":function(e,t,a){e.exports=a.p+"static/0-d415ab6a2e6d32711990917c008677a5.jpg"}}]);
//# sourceMappingURL=component---src-components-dialogue-pages-highlights-js-7b142ad21c313cde5e98.js.map