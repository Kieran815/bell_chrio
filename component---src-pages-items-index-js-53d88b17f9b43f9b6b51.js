(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+xWQ":function(e,a,t){"use strict";var r=t("q1tI"),c=t.n(r),n=t("Wbzz"),s=t("tRbT"),i=t("30+C"),o=t("oa/T"),l=t("Ie8z"),d=t("ofer"),m=t("ucgz");a.a=Object(m.a)({cardMedia:{height:"200px"}})((function(e){var a=e.classes;return c.a.createElement(s.a,{container:!0,direction:"row",alignItems:"flex-start",justify:"center"},e.items.map((function(e){var t=e.node,r=t.excerpt,m=t.frontmatter,u=m.path,p=m.title,b=m.image.publicURL;return c.a.createElement(s.a,{item:!0,xs:12,md:6,key:u},c.a.createElement(i.a,{style:{margin:"0.5em"}},c.a.createElement(l.a,{className:a.cardMedia,image:Object(n.d)(b)}),c.a.createElement(o.a,null,c.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},c.a.createElement(n.a,{to:u},p)),c.a.createElement(d.a,{component:"p"},r))))})))}))},"30+C":function(e,a,t){"use strict";var r=t("wx14"),c=t("Ff2n"),n=t("q1tI"),s=t("iuhU"),i=t("kKAo"),o=t("H2TA"),l=n.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.raised,d=void 0!==l&&l,m=Object(c.a)(e,["classes","className","raised"]);return n.createElement(i.a,Object(r.a)({className:Object(s.a)(t.root,o),elevation:d?8:1,ref:a},m))}));a.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"50B7":function(e,a,t){"use strict";var r=t("wx14"),c=t("Ff2n"),n=t("q1tI"),s=t("iuhU"),i=t("H2TA"),o=t("ofer"),l=n.forwardRef((function(e,a){var t=e.action,i=e.avatar,l=e.classes,d=e.className,m=e.component,u=void 0===m?"div":m,p=e.disableTypography,b=void 0!==p&&p,f=e.subheader,v=e.subheaderTypographyProps,g=e.title,h=e.titleTypographyProps,y=Object(c.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),j=g;null==j||j.type===o.a||b||(j=n.createElement(o.a,Object(r.a)({variant:i?"body2":"h5",className:l.title,component:"span",display:"block"},h),j));var O=f;return null==O||O.type===o.a||b||(O=n.createElement(o.a,Object(r.a)({variant:i?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},v),O)),n.createElement(u,Object(r.a)({className:Object(s.a)(l.root,d),ref:a},y),i&&n.createElement("div",{className:l.avatar},i),n.createElement("div",{className:l.content},j,O),t&&n.createElement("div",{className:l.action},t))}));a.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(l)},Ie8z:function(e,a,t){"use strict";var r=t("wx14"),c=t("Ff2n"),n=t("q1tI"),s=t("iuhU"),i=t("H2TA"),o=["video","audio","picture","iframe","img"],l=n.forwardRef((function(e,a){var t=e.children,i=e.classes,l=e.className,d=e.component,m=void 0===d?"div":d,u=e.image,p=e.src,b=e.style,f=Object(c.a)(e,["children","classes","className","component","image","src","style"]),v=-1!==o.indexOf(m),g=!v&&u?Object(r.a)({backgroundImage:'url("'.concat(u,'")')},b):b;return n.createElement(m,Object(r.a)({className:Object(s.a)(i.root,l,v&&i.media,-1!=="picture img".indexOf(m)&&i.img),ref:a,style:g,src:v?u||p:void 0},f),t)}));a.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},QS3V:function(e,a,t){"use strict";var r=t("q1tI"),c=t.n(r),n=t("30+C"),s=t("50B7"),i=t("oa/T"),o=t("wx14"),l=t("Ff2n"),d=t("iuhU"),m=t("H2TA"),u=r.forwardRef((function(e,a){var t=e.disableSpacing,c=void 0!==t&&t,n=e.classes,s=e.className,i=Object(l.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(o.a)({className:Object(d.a)(n.root,s,!c&&n.spacing),ref:a},i))})),p=Object(m.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(u),b=t("ucgz");a.a=Object(b.a)({cardActions:{float:"right"}})((function(e){var a=e.children,t=e.classes,r=e.title,o=e.subheader,l=e.avatar,d=e.action,m=e.style,u=void 0===m?{}:m;return c.a.createElement(n.a,{style:u},c.a.createElement(s.a,{avatar:l||null,title:r,subheader:o||null}),c.a.createElement(i.a,null,a),c.a.createElement(p,{className:t.cardActions},d))}))},"oa/T":function(e,a,t){"use strict";var r=t("wx14"),c=t("Ff2n"),n=t("q1tI"),s=t("iuhU"),i=t("H2TA"),o=n.forwardRef((function(e,a){var t=e.classes,i=e.className,o=e.component,l=void 0===o?"div":o,d=Object(c.a)(e,["classes","className","component"]);return n.createElement(l,Object(r.a)({className:Object(s.a)(t.root,i),ref:a},d))}));a.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},p5bM:function(e,a,t){"use strict";t.r(a);var r=t("5C0Z"),c=t("q1tI"),n=t.n(c),s=t("EYWl"),i=t("uVCN"),o=t("+xWQ"),l=t("QS3V");a.default=Object(r.a)((function(e){var a=e.data.allMarkdownRemark.edges;return n.a.createElement(i.a,null,n.a.createElement(s.a,{title:"Health & Wellness Products"}),n.a.createElement(l.a,{title:"Health & Wellness Products"},n.a.createElement(o.a,{items:a})))}))}}]);
//# sourceMappingURL=component---src-pages-items-index-js-53d88b17f9b43f9b6b51.js.map