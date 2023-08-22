(()=>{"use strict";var e,r={325:()=>{const e=window.wp.blocks;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&(e[p]=t[p])}return e},r.apply(this,arguments)}const t=window.wp.element,p=window.wp.i18n,s=window.wp.blockEditor,{__}=wp.i18n,{registerBlockType:i}=wp.blocks;i("pmpro/account-membership-section",{title:__("PMPro Page: Account Memberships","paid-memberships-pro"),description:__("Dynamic page section to display the member's active membership information with links to view all membership options, update billing information, and change or cancel membership.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"groups"},keywords:[__("active","paid-memberships-pro"),__("member","paid-memberships-pro"),__("paid memberships pro","paid-memberships-pro"),__("pmpro","paid-memberships-pro"),__("purchases","paid-memberships-pro"),__("user","paid-memberships-pro")],supports:{},attributes:{title:{type:"string",default:__("My Memberships","paid-memberships-pro")}},edit(e){let{attributes:r,setAttributes:p}=e;return[(0,t.createElement)("div",{className:"pmpro-block-element"},(0,t.createElement)("span",{className:"pmpro-block-title"},__("Paid Memberships Pro","paid-memberships-pro")),(0,t.createElement)("span",{className:"pmpro-block-subtitle"},__("Membership Account: My Memberships","paid-memberships-pro")),(0,t.createElement)("input",{placeholder:__("No title will be shown.","paid-memberships-pro"),type:"text",value:r.title,class:"block-editor-plain-text",onChange:e=>{p({title:e.target.value})}}))]},save:()=>null});const o=JSON.parse('{"u2":"pmpro/account-links-section"}');(0,e.registerBlockType)(o.u2,{edit:function(e){let{attributes:i,setAttributes:o}=e;const a=(0,s.useBlockProps)({});return[(0,t.createElement)("div",r({className:"pmpro-block-element"},a),(0,t.createElement)("span",{className:"pmpro-block-title"},(0,p.__)("Paid Memberships Pro","paid-memberships-pro")),(0,t.createElement)("span",{className:"pmpro-block-subtitle"},(0,p.__)("Membership Account: Member Links","paid-memberships-pro")),(0,t.createElement)("input",{placeholder:(0,p.__)("No title will be shown.","paid-memberships-pro"),type:"text",value:i.title,class:"block-editor-plain-text",onChange:e=>{o({title:e.target.value})}}))]}})}},t={};function p(e){var s=t[e];if(void 0!==s)return s.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,p),i.exports}p.m=r,e=[],p.O=(r,t,s,i)=>{if(!t){var o=1/0;for(m=0;m<e.length;m++){t=e[m][0],s=e[m][1],i=e[m][2];for(var a=!0,n=0;n<t.length;n++)(!1&i||o>=i)&&Object.keys(p.O).every((e=>p.O[e](t[n])))?t.splice(n--,1):(a=!1,i<o&&(o=i));if(a){e.splice(m--,1);var l=s();void 0!==l&&(r=l)}}return r}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[t,s,i]},p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={34:0,41:0};p.O.j=r=>0===e[r];var r=(r,t)=>{var s,i,o=t[0],a=t[1],n=t[2],l=0;if(o.some((r=>0!==e[r]))){for(s in a)p.o(a,s)&&(p.m[s]=a[s]);if(n)var m=n(p)}for(r&&r(t);l<o.length;l++)i=o[l],p.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return p.O(m)},t=self.webpackChunkpaid_memberships_pro=self.webpackChunkpaid_memberships_pro||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=p.O(void 0,[41],(()=>p(325)));s=p.O(s)})();