(()=>{"use strict";const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}const r=window.wp.element,o=window.wp.i18n,s=window.wp.blockEditor,i=JSON.parse('{"UU":"pmpro/account-membership-section"}');(0,e.registerBlockType)(i.UU,{icon:{background:"#FFFFFF",foreground:"#1A688B",src:"groups"},edit:function({attributes:e,setAttributes:i}){const n=(0,s.useBlockProps)({});return[(0,r.createElement)("div",t({className:"pmpro-block-element"},n),(0,r.createElement)("span",{className:"pmpro-block-title"},(0,o.__)("Paid Memberships Pro","paid-memberships-pro")),(0,r.createElement)("span",{className:"pmpro-block-subtitle"},(0,o.__)("Membership Account: My Memberships","paid-memberships-pro")),(0,r.createElement)("input",{placeholder:(0,o.__)("No title will be shown.","paid-memberships-pro"),type:"text",value:e.title,className:"block-editor-plain-text",onChange:e=>{i({title:e.target.value})}}))]}})})();