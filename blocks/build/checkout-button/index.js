(()=>{var e={942:(e,t)=>{var l;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=o(e,s(l)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)r.call(e,l)&&e[l]&&(t=o(t,l));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},t={};function l(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,l),s.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},t.apply(this,arguments)}const r=window.wp.element;var n=l(942),s=l.n(n);const o=window.wp.i18n,a=window.wp.blockEditor,i=window.wp.components,c=window.wp.data,p=JSON.parse('{"UU":"pmpro/checkout-button"}');(0,e.registerBlockType)(p.UU,{icon:{background:"#FFFFFF",foreground:"#1A688B",src:"button"},edit:function(e){const l=[{value:0,label:(0,o.__)("Choose a level","paid-memberships-pro")}].concat(pmpro.all_level_values_and_labels),{attributes:n,setAttributes:p,className:m}=e,{textAlign:u,placeholder:d,style:b,text:_,level:v,css_class:g,selected_membership_level:h}=n;if(v&&v.length>0&&(p({selected_membership_level:v}),delete n.level),g&&g.length>0){const e=g.replace(/\bpmpro_btn\b/g,"").trim(),t=s()(m,e);p({className:t}),delete n.css_class}const y=(0,c.useSelect)((t=>{const{getBlockParents:l,getBlockName:r}=t("core/block-editor");return l(e.clientId).map((e=>r(e))).includes("pmpro/single-level")}),[e.clientId]),f=(0,a.__experimentalUseBorderProps)(n),w=(0,a.__experimentalUseColorProps)(n),x=(0,a.__experimentalGetSpacingClassesAndStyles)(n),k=(0,a.useBlockProps)(),N=s()("wp-block-buttons",{[`has-text-align-${u}`]:u}),C=s()("wp-block-button");return[(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:N},(0,r.createElement)("div",{className:C},!y&&(0,r.createElement)(a.InspectorControls,null,(0,r.createElement)(i.PanelBody,{title:(0,o.__)("Checkout Button Settings","paid-memberships-pro"),initialOpen:!0},(0,r.createElement)(i.SelectControl,{label:(0,o.__)("Choose a Level","paid-memberships-pro"),value:h,options:l,onChange:e=>p({selected_membership_level:e})}))),(0,r.createElement)(a.BlockControls,null,(0,r.createElement)(a.AlignmentControl,{value:u,onChange:e=>{p({textAlign:e})}})),(0,r.createElement)(a.RichText,t({},k,{allowedFormats:[],"aria-label":(0,o.__)("Button text","paid-memberships-pro"),placeholder:d||(0,o.__)("Buy Now","paid-memberships-pro"),value:_,onChange:e=>{p({text:e})},withoutInteractiveFormatting:!0,className:s()(m,"wp-block-button__link",k.className,w.className,f.className,{"no-border-radius":0===b?.border?.radius},(0,a.__experimentalGetElementClassName)("button")),style:{...k.style,...f.style,...w.style,...x.style,textAlign:u},identifier:"text"})))))]},save:function({attributes:e,className:l}){const{textAlign:n,style:o,text:i}=e,c=a.useBlockProps.save(),p=(0,a.__experimentalGetBorderClassesAndStyles)(e),m=(0,a.__experimentalGetColorClassesAndStyles)(e),u=(0,a.__experimentalGetSpacingClassesAndStyles)(e),d=s()("wp-block-button__link",c.className,m.className,p.className,{[`has-text-align-${n}`]:n,"no-border-radius":0===o?.border?.radius},(0,a.__experimentalGetElementClassName)("button")),b={...c.style,...p.style,...m.style,...u.style},_=s()("wp-block-buttons",{[`has-text-align-${n}`]:n}),v=s()("wp-block-button");return(0,r.createElement)("div",{className:_},(0,r.createElement)("div",{className:v},(0,r.createElement)(a.RichText.Content,t({},c,{tagName:"a",className:d,href:(g=e.selected_membership_level,pmpro.checkout_url+"?pmpro_level="+g),style:b,value:i}))));var g}})})()})();