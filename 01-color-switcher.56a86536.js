!function(){var t,e=document.querySelector("body"),n=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");function o(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}n.addEventListener("click",(function(){n.disabled=!0,a.disabled=!1,t=setInterval(o,1e3)})),a.addEventListener("click",(function(){n.disabled=!1,a.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.56a86536.js.map
