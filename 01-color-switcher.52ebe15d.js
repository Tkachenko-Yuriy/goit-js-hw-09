const t={btnStartEl:document.querySelector("button[data-start]"),btnStopEl:document.querySelector("button[data-stop]"),bodyEl:document.body};let e=null;t.btnStopEl.setAttribute("disabled",!0),t.btnStartEl.addEventListener("click",(()=>{e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStopEl.hasAttribute("disabled")&&(t.btnStopEl.removeAttribute("disabled"),t.btnStartEl.setAttribute("disabled",!0))})),t.btnStopEl.addEventListener("click",(()=>{clearInterval(e),t.btnStartEl.hasAttribute("disabled")&&(t.btnStartEl.removeAttribute("disabled"),t.btnStopEl.setAttribute("disabled",!0))}));
//# sourceMappingURL=01-color-switcher.52ebe15d.js.map
