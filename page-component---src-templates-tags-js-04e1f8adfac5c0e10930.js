webpackJsonp([2],{"./src/components/CommaSeparatedTags.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/react/react.js"),n=l(s),r=a("./node_modules/gatsby-link/index.js"),o=l(r),d=function(e){var t=e.tags;return n.default.createElement("div",{className:"tags"},"Talking about:"," ",t&&t.split(", ").map(function(e,t,a){return n.default.createElement("span",null,n.default.createElement(o.default,{to:"/tag/"+e+"/"},e),t<a.length-1?", ":"")}))};t.default=d,e.exports=t.default},"./src/components/Link.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.children,a=e.className,l=e.to;return r.default.createElement(d.default,{className:["link"].concat(a||[]).join(" "),to:l},t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=a("./node_modules/react/react.js"),r=l(n),o=a("./node_modules/gatsby-link/index.js"),d=l(o);e.exports=t.default},"./src/components/MenuWithLogo.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/react/react.js"),n=l(s),r=a("./node_modules/gatsby-link/index.js"),o=l(r),d=a("./src/assets/images/avatar.jpg"),u=function(e){return n.default.createElement("nav",{className:"navbar navbar-default"},n.default.createElement("div",{className:"image-placeholder"}),n.default.createElement("div",{className:"container"},n.default.createElement("div",{className:"navbar-header hidden-xs"},n.default.createElement(o.default,{to:"/",className:"navbar-brand header-logo",itemProp:"name"},n.default.createElement("img",{className:"header-avatar",src:d,alt:"Kostas Bariotis"})),n.default.createElement("h1",null,"Kostas Bariotis"),n.default.createElement("p",null,"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.")),n.default.createElement("div",{className:"navbar-header"},n.default.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#main-menu"},n.default.createElement("span",{className:"sr-only"},"Toggle navigation"),n.default.createElement("span",{className:"icon-bar"}),n.default.createElement("span",{className:"icon-bar"}),n.default.createElement("span",{className:"icon-bar"}))),n.default.createElement("div",{className:"collapse navbar-collapse",id:"main-menu"},n.default.createElement("ul",{className:"nav navbar-nav navbar-right"},n.default.createElement("li",null,n.default.createElement(o.default,{to:"/"},"HOME")),n.default.createElement("li",null,n.default.createElement(o.default,{to:"/about"},"ABOUT")))),n.default.createElement("div",{className:"navbar-header visible-xs"},n.default.createElement(o.default,{to:"/",className:"navbar-brand header-logo",itemProp:"name"},n.default.createElement("img",{className:"header-avatar",src:d,alt:"Kostas Bariotis"})),n.default.createElement("h1",null,"Kostas Bariotis"),n.default.createElement("p",null,"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more."))))};t.default=u,e.exports=t.default},"./src/components/Posts.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/react/react.js"),n=l(s),r=a("./node_modules/gatsby-link/index.js"),o=l(r),d=a("./node_modules/dateformat/lib/dateformat.js"),u=l(d),c=a("./src/components/CommaSeparatedTags.js"),i=l(c),m=function(e){var t=e.posts;return n.default.createElement("div",null,t.filter(function(e){return e.frontmatter.title.length>0}).filter(function(e){return!e.frontmatter.draft}).map(function(e,t){return n.default.createElement("article",{className:"post",key:t},n.default.createElement("header",{className:"header post-head"},n.default.createElement("h1",{className:"post-title"},n.default.createElement(o.default,{to:e.frontmatter.path},e.frontmatter.title))),n.default.createElement("time",{className:"post-date",dateTime:(0,u.default)(e.frontmatter.date,"isoDateTime")},(0,u.default)(e.frontmatter.date,"dd mmmm yyyy")),n.default.createElement("section",{className:"post-excerpt"},n.default.createElement("p",null,e.excerpt," ",n.default.createElement(o.default,{className:"read-more",to:e.frontmatter.path},"»"))),n.default.createElement("footer",{className:"post-meta"},n.default.createElement(i.default,{tags:e.frontmatter.tags})))}))};t.default=m,e.exports=t.default},"./src/components/TagsPagination.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("./node_modules/react/react.js"),n=l(s),r=a("./node_modules/gatsby-link/index.js"),o=l(r),d=function(e){var t=e.tag,a=e.page,l=e.pagesSum;return n.default.createElement("header",{className:"header extra-pagination inner text-center"},n.default.createElement("nav",{className:"pagination",role:"navigation"},2===a&&n.default.createElement(o.default,{className:"newer-posts",to:"/tag/"+t+"/"},n.default.createElement("span",{"aria-hidden":"true"},"←")," Newer Posts"),a>2&&n.default.createElement(o.default,{className:"newer-posts",to:"/tag/"+t+"/page/"+(a-1)+"/"},n.default.createElement("span",{"aria-hidden":"true"},"←")," Newer Posts"),n.default.createElement("span",{className:"page-number"},"Page "+a+" of "+l),a<l&&n.default.createElement(o.default,{className:"older-posts",to:"/tag/"+t+"/page/"+(a+1)+"/"},"Older Posts ",n.default.createElement("span",{"aria-hidden":"true"},"→"))))};t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/node_modules/babel-preset-env/lib/index.js","/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/node_modules/babel-preset-stage-0/lib/index.js","/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/tags.js':function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.pathContext,a=t.posts,l=t.tag,s=t.pagesSum,n=t.page;return r.default.createElement("section",{className:"main-content"},r.default.createElement(m.default,null),r.default.createElement("section",{className:"blog container tags-collection"},r.default.createElement("div",{className:"medium-8 medium-offset-2"},r.default.createElement("header",{className:"header"},r.default.createElement("h1",{className:"tag-title tag-page-title"},l)),r.default.createElement("section",{className:"tag-meta"},"A ",a.length," posts collection"),r.default.createElement("div",{className:"posts"},r.default.createElement(p.default,{page:n,pagesSum:s,tag:l}),r.default.createElement(b.default,null),r.default.createElement(c.default,{posts:a}),r.default.createElement(b.default,null),r.default.createElement(p.default,{page:n,pagesSum:s,tag:l})))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=a("./node_modules/react/react.js"),r=l(n),o=a("./node_modules/gatsby-link/index.js"),d=(l(o),a("./src/components/Link.js")),u=(l(d),a("./src/components/Posts.js")),c=l(u),i=a("./src/components/MenuWithLogo.js"),m=l(i),f=a("./src/components/TagsPagination.js"),p=l(f),g=a("./src/components/Separator.js"),b=l(g);e.exports=t.default}});
//# sourceMappingURL=page-component---src-templates-tags-js-04e1f8adfac5c0e10930.js.map