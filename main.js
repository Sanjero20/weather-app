(()=>{"use strict";const e=document.querySelector(".weather-data"),t=document.getElementById("weather-template"),n=document.querySelector('input[name="location"]'),o=document.querySelector(".search-bar"),r=document.querySelector(".weather-info"),a=document.querySelector(".loader"),c=document.querySelector(".weather-data");function i(){a.classList.add("hide"),c.classList.remove("hide")}o.addEventListener("submit",(s=>{s.preventDefault();const d=n.value;""!==d&&(n.value="",r.classList.remove("hide"),o.classList.add("adjust"),c.classList.add("hide"),a.classList.remove("hide"),function(n){(async function(e){const t=`http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=35c2fabe2299aa17c5051b992e8f52bd`,n=await fetch(t),o=await n.json();if(200!==o.cod)throw new Error(o.message);return o})(n).then((n=>{i(),function(n){e.innerHTML="";const o=document.importNode(t.content,!0),r=o.querySelector(".location"),a=o.querySelector(".temp"),c=o.querySelector(".type"),i=o.querySelector(".icon"),s=o.querySelector(".description");r.textContent=`${n.name}, ${n.sys.country}`;const d=function(e){return(e-273).toFixed(1)}(n.main.temp);a.innerHTML=`${d}&deg;C`,c.textContent=n.weather[0].main,s.textContent=n.weather[0].description;const u=`http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`;i.src=u,e.appendChild(o)}(n)})).catch((t=>{i(),function(t){e.innerHTML="";const n=document.createElement("p");n.classList.add("error-msg"),n.textContent=t,e.appendChild(n)}(t)}))}(d))}))})();