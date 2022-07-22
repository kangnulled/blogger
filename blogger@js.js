/**
 * Minified by jsDelivr using Terser v5.7.1.
 * Original file: /gh/NiaDzgn/blogger@js/toc.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function mbtTOC(){var e=i=headlength=gethead=0;for(headlength=document.getElementById("post-toc").getElementsByTagName("h2").length,i=0;i<headlength;i++)gethead=document.getElementById("post-toc").getElementsByTagName("h2")[i].textContent,document.getElementById("post-toc").getElementsByTagName("h2")[i].setAttribute("id","point"+i),e="<li><a href='#point"+i+"'>"+gethead+"</a></li>",document.getElementById("mbtTOC").innerHTML+=e}function mbtToggle(){var e=document.getElementById("mbtTOC");"none"===e.style.display?e.style.display="block":e.style.display="none"}
//# sourceMappingURL=/sm/6038c6500b543c7c3eb1c0ce4c0adc3f37ef1efdac14df167e41257b52877f85.map