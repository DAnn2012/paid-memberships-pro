!function(){"use strict";var e=window.wp.blocks;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}var n=window.wp.element,t=window.wp.i18n,r=window.wp.components,o=window.wp.blockEditor,s=JSON.parse('{"u2":"pmpro/membership-excluded"}');(0,e.registerBlockType)(s.u2,{icon:{background:"#FFFFFF",foreground:"#1A688B",src:"hidden"},edit:function(e){const s=(0,o.useBlockProps)({}),a=[{value:0,label:"Non-Members"}].concat(pmpro.all_level_values_and_labels),{attributes:{levels:c,uid:i,show_noaccess:p},setAttributes:m,isSelected:u}=e;if(""===i){var d=Math.random()+"";m({uid:d})}function b(e){const l=a.map((e=>e.value+""));m({levels:e?l:[]})}var v=a.map((function(e){return[(0,n.createElement)(r.CheckboxControl,{label:e.label,checked:c.some((l=>l==e.value)),onChange:function(l){if(l&&!c.some((l=>l==e.value))){const l=c.slice();l.push(e.value+""),m({levels:l})}else if(!l&&c.some((l=>l==e.value))){const l=c.filter((l=>l!=e.value));m({levels:l})}}})]}));return[u&&(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(r.PanelBody,null,(0,n.createElement)("p",null,(0,n.createElement)("strong",null,(0,t.__)("Which membership levels should this block be hidden from?","paid-memberships-pro"))),(0,n.createElement)("p",null,(0,t.__)("Select","paid-memberships-pro")," ",(0,n.createElement)("a",{href:"#",onClick:e=>{e.preventDefault(),b(!0)}},(0,t.__)("All","paid-memberships-pro"))," | ",(0,n.createElement)("a",{href:"#",onClick:e=>{e.preventDefault(),b(!1)}},(0,t.__)("None","paid-memberships-pro"))),(0,n.createElement)("div",{class:"pmpro-block-inspector-scrollable"},v))),(0,n.createElement)("div",l({className:"pmpro-block-require-membership-element"},s),(0,n.createElement)("span",{className:"pmpro-block-title"},(0,t.__)("Membership Excluded","paid-memberships-pro")),(0,n.createElement)(o.InnerBlocks,{templateLock:!1}))]},save:function(){const e=o.useBlockProps.save();return(0,n.createElement)("div",e,(0,n.createElement)(o.InnerBlocks.Content,null))}})}();