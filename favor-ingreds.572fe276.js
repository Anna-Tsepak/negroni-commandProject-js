!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var a=r("1DJp7"),i=document.querySelector(".main"),o=document.querySelector(".favor-ingreds__list"),s=document.querySelector(".modal2");"favor-ingreds"===o.dataset.page&&i.classList.add("visually-hidden");var l="localIngredient",d=JSON.parse(localStorage.getItem(l));var c=d.map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.strIngredient,n=e.strType;return e.strABV,e.strAlcohol,e.strDescription,'<li class="ingreds__item">\n          <h3 class="ingreds__item__title">'.concat(t,'</h3>\n          <p class="ingreds__item__descript">').concat(n,'</p>\n          <div class="btn-container">\n            <button type="button" class="btn-rusty btn-ingred" data-name="').concat(t,'">\n              Learn more\n            </button>\n            <button type="button" class="btn-transpar btn-ingred" data-ingred="').concat(t,'">\n              Remove<span class="btn-transpar-heart"><svg class="btn__icon" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z" fill="#FD5103"/>\n<path d="M9.50005 15.2101L8.38493 14.2447C4.42433 10.8291 1.80957 8.57639 1.80957 5.81172C1.80957 3.55903 3.67067 1.78906 6.03933 1.78906C7.37748 1.78906 8.66178 2.38149 9.50005 3.31767C10.3383 2.38149 11.6226 1.78906 12.9608 1.78906C15.3294 1.78906 17.1905 3.55903 17.1905 5.81172C17.1905 8.57639 14.5758 10.8291 10.6152 14.252L9.50005 15.2101Z" fill="#FCFCFC"/>\n</svg>\n</span>\n            </button>\n          </div>\n        </li>')}(e)}));o.innerHTML=c.join(""),o.addEventListener("click",(function(e){if(!e.target.classList.contains("btn-transpar"))return;var t=e.target.dataset.ingred;console.dir(t),function(e){if(!localStorage.getItem(l))return;var t=[],n=!0,r=!1,a=void 0;try{for(var i,o=d[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;s.strIngredient!==e&&t.push(s)}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}localStorage.removeItem(l),localStorage.setItem(l,JSON.stringify(t))}(t),location.reload()})),o.addEventListener("click",(function(e){var t=e.target.dataset.name;(0,a.getElement)(t).then((function(e){(0,a.clearMarkupModal)(s),s.classList.remove("is-hidden");var t=e.ingredients,n=(0,a.createIngredientMarkup)(t);(0,a.add)(n),window.addEventListener("keydown",a.onEscapeBtnPush),s.querySelector(".modalw2--blockbutton--add").innerHTML=""})),e.target.classList.contains("btn-rusty")&&(s.classList.remove("is-hidden"),console.log("Nikita modal opened"))}))}();
//# sourceMappingURL=favor-ingreds.572fe276.js.map