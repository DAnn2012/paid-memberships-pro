!function(){"use strict";var e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},t.apply(this,arguments)}var l=window.wp.element,n=window.wp.i18n,a=window.wp.blockEditor,o=window.wp.components,s=JSON.parse('{"u2":"pmpro/checkout-button"}');(0,e.registerBlockType)(s.u2,{edit:function(e){const s=(0,a.useBlockProps)({}),{attributes:r,setAttributes:c,isSelected:p}=e,{text:i,level:m,css_class:u}=r;return[(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(o.PanelBody,null,(0,l.createElement)(o.TextControl,{label:(0,n.__)("Button Text","paid-memberships-pro"),help:(0,n.__)("Text for checkout button","paid-memberships-pro"),value:i,onChange:e=>c({text:e})})),(0,l.createElement)(o.PanelBody,null,(0,l.createElement)(o.SelectControl,{label:(0,n.__)("Level","paid-memberships-pro"),help:(0,n.__)("The level to link to for checkout button","paid-memberships-pro"),value:m,onChange:e=>c({level:e}),options:window.pmpro.all_level_values_and_labels})),(0,l.createElement)(o.PanelBody,null,(0,l.createElement)(o.TextControl,{label:(0,n.__)("CSS Class","paid-memberships-pro"),help:(0,n.__)("Additional styling for checkout button","paid-memberships-pro"),value:u,onChange:e=>c({css_class:e})}))),(0,l.createElement)("div",s,r.isSelected&&(0,l.createElement)(Inspector,t({setAttributes:c},r)),(0,l.createElement)("div",{className:r.className},(0,l.createElement)("a",{className:r.css_class},r.text)),r.isSelected&&(0,l.createElement)("div",{className:"pmpro-block-element"},(0,l.createElement)(o.TextControl,{label:(0,n.__)("Button Text","paid-memberships-pro"),value:r.text,onChange:e=>c({text:e})}),(0,l.createElement)(o.SelectControl,{label:(0,n.__)("Membership Level","paid-memberships-pro"),value:r.level,onChange:e=>c({level:e}),options:window.pmpro.all_level_values_and_labels}),(0,l.createElement)(o.TextControl,{label:(0,n.__)("CSS Class","paid-memberships-pro"),value:r.css_class,onChange:e=>c({css_class:e})}))))]}})}();