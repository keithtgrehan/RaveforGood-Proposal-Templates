(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();(async()=>{const t=await(await fetch("/".replace(/\/$/,"")+"/proposal-data.json")).json(),r=e=>document.getElementById(e),a=(e,o)=>{const i=r(e);i&&(i.innerHTML=o)},s=(e,o)=>{const i=r(e);i&&(i.textContent=o)};document.title=t.meta.pageTitle,s("export-bar-label",t.meta.exportBarLabel),s("export-btn-label",t.meta.exportBtnLabel),s("masthead-org",t.masthead.org),a("masthead-meta",`${t.masthead.dateLine}<br/>${t.masthead.docType}`),s("hero-label",t.hero.label),r("hero-title").innerHTML=t.hero.titleMain.join("<br/>")+`
<em>× ${t.hero.titleVenue.join("<br/>")}</em>`,a("hero-tagline",`${t.hero.tagline}<br/>${t.hero.taglineSub}`),s("hero-address-label",t.hero.addressLabel),a("hero-address",`${t.hero.addressName}<br/>${t.hero.addressCity}`),s("hero-address-sub",t.hero.addressStreet);const d=r("body-grid");t.sections.forEach(e=>{const o=document.createElement("div");if(o.className="body-section",e.formatList){const i=e.formatList.map(n=>`<li>${n}</li>`).join(""),l=e.formatList2.map(n=>`<li>${n}</li>`).join("");o.innerHTML=`
              <div class="section-label">${e.label}</div>
              <div class="section-heading">${e.heading}</div>
              <ul class="format-list">${i}</ul>
              <p class="section-body"><span class="format-subhead">${e.formatSubhead}</span></p>
              <ul class="format-list">${l}</ul>
            `}else if(e.bodyLines){const i=e.bodyLines.map(l=>`<p class="section-body">${l}</p>`).join("");o.innerHTML=`
              <div class="section-label">${e.label}</div>
              <div class="section-heading">${e.heading}</div>
              ${i}
            `}else{const i=e.bodySuffixHighlight?e.bodySuffix.replace(e.bodySuffixHighlight,`<strong>${e.bodySuffixHighlight}</strong>`):e.bodySuffix?`<strong>${e.bodySuffix}</strong>`:"";o.innerHTML=`
              <div class="section-label">${e.label}</div>
              <div class="section-heading">${e.heading}</div>
              <p class="section-body">
                ${e.body}
                ${i?`<br/><br/>${i}`:""}
              </p>
            `}d.appendChild(o)}),s("p1-page-num",t.page1Footer.pageNum),s("p1-identity",t.page1Footer.identity),s("footer-url-1",t.meta.footerUrl),s("track-title",t.trackRecord.title),s("track-subtitle",t.trackRecord.subtitle),r("flyers-col").innerHTML=t.events.map(e=>`<div class="flyer-wrap">
             <img src="${e.flyer}" alt="${e.flyerAlt}" class="flyer-img"/>
           </div>`).join("");const m=r("events-list");t.events.forEach(e=>{const o=document.createElement("div");o.className="event-entry",o.innerHTML=`
            <span class="event-index">${e.index}</span>
            <div class="event-details">
              <div class="event-name">${e.name}</div>
              <div class="event-meta">${e.metaLines.join("<br/>")}</div>
            </div>
          `,m.appendChild(o)}),s("stats-label",t.stats.label),r("stats-grid").innerHTML=t.stats.items.map(e=>`<div class="stat-item">
             <div class="stat-num">${e.num}</div>
             <div class="stat-label">${e.label}</div>
           </div>`).join(""),s("stats-note",t.stats.note);const b=r("lower-grid");t.lowerSections.forEach((e,o)=>{const i=document.createElement("div");i.className="lower-section"+(o===2?" lower-section--cta":"");let l=`<div class="lower-label">${e.label}</div>`;if(e.paragraphs)e.paragraphs.forEach(n=>{const f=n.subhead?`<span class="lower-subhead">${n.subhead}</span> `:"",c=n.text.replace(/\n/g,"<br/>");l+=`<p class="lower-body">${f}${c}</p>`});else if(e.items){const n=[],f=()=>{n.length&&(l+=`<ul class="lower-list">${n.map(c=>`<li>${c}</li>`).join("")}</ul>`,n.length=0)};e.items.forEach(c=>{c.type==="subhead"?(f(),l+=`<p class="lower-body"><span class="lower-subhead">${c.text}</span></p>`):n.push(c.text)}),f()}i.innerHTML=l,b.appendChild(i)}),s("contact-label",t.contact.label),r("contact-grid").innerHTML=t.contact.items.map(e=>e.href?`<div class="contact-item"><a href="${e.href}" target="_blank">${e.text}</a></div>`:`<div class="contact-item">${e.text}</div>`).join(""),s("p2-page-num",t.page2Footer.pageNum),s("p2-identity",t.page2Footer.identity),s("footer-url-2",t.meta.footerUrl)})();
