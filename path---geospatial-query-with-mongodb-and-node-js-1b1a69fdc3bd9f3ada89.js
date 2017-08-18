webpackJsonp([145],{"./node_modules/json-loader/index.js!./.cache/json/geospatial-query-with-mongodb-and-node-js.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>Hasn\'t been a long time when i started working with <a title="Wearetech.io" href="http://wearetech.io" target="_blank">Wearetech.io</a> and my first challenge was on. Sweet!</p>\n<p>If you want to learn more about Wearetech.io, check the <a title="Wearetech.io" href="http://wearetech.io" target="_blank">site</a> and our <a title="Wearetech.io on Github" href="https://github.com/WeAreTech/wearetech.io" target="_blank">Github repo</a>.</p>\n<p>Now on the fun part. We have a use case where an individual would be able to register on our site as a City Curator.</p>\n<p>He could search for his City and if he wouldn’t find it in our database he would register it. When the next candidate comes in, he searches for his place and if it would be inside a 10 kilometers range of an already registered city we would deny it, since we wouldn’t want to have city calendars overlapping with each other.</p>\n<p>When <a title="Thanasis Polychronakis on Twitter" href="http://twitter.com/thanpolas" target="_blank">Thanasis </a>started building Wearetech.io he decided to go with MongoDB. So in order to create the above scenario, <a title="MongoDB Geospatial Queries" href="http://docs.mongodb.org/manual/applications/geospatial-indexes/" target="_blank">MongoDB Geospatial Queries</a> to the rescue!</p>\n<p>MongoDB supports two types of <a title="Geospatial Queries on Wikipedia" href="http://en.wikipedia.org/wiki/Spatial_query" target="_blank">Geospatial Queries</a> indexing.</p>\n<ul>\n\t<li>The spherical (<a title="2dSphere Indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2dsphere/" target="_blank">2dSphere</a>), that would allow you to store shapes made of points (coordinates) and then make comparisons with them like intersection, etc.</li>\n\t<li>The flat (<a title="2d indexes on MongoDB" href="http://docs.mongodb.org/manual/core/2d/" target="_blank">2d</a>), that would store single points and then come up with their distances.</li>\n</ul>\nYour choice will affect your development a lot down the road, so think wisely.\n<p>Now on the code side, we will use Mongoose to shape our models. Here\'s the most simple one.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> mongoose     <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> Schema     <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> CitySchema   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  geo<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token punctuation">[</span>Number<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    index<span class="token punctuation">:</span> <span class="token string">\'2d\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">\'City\'</span><span class="token punctuation">,</span> CitySchema<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now we can start populating our DB like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> City <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app/models/city\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> cityModel     <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">City</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>name <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">;</span> \ncityModel<span class="token punctuation">.</span>geo    <span class="token operator">=</span> <span class="token punctuation">[</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng <span class="token punctuation">]</span><span class="token punctuation">;</span> \n\ncityModel<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>And now on the fun part</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> distance <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">6371</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> query <span class="token operator">=</span> City<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">\'geo\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  $near<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>\n    req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>lng\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  $maxDistance<span class="token punctuation">:</span> distance\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nquery<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>city<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Cant save: Found city:\'</span> <span class="token operator">+</span> city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Our distance is in radians metric system and you can find more on how to calculate it <a title="Convert to radians" href="http://docs.mongodb.org/manual/tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes/" target="_blank">here</a>.</p>\n<p><em>Due to recent Heroku pricing changes, this demo has broke. Still haven\'t find the time to fix it. :(</em>\nHere is a <a title="MongoDB Geospatial Queries PoC" href="https://damp-everglades-7521.herokuapp.com/" target="_blank">demo </a>of it. Try searching your City. If it\'s available register it and then try to find a place inside a 10 kilometers range of your previeus registered City.</p>\n<p>Hope you will find it interesting. Comments?</p>',excerpt:"Hasn't been a long time when i started working with  Wearetech.io  and my first challenge was on. Sweet! If you want to learn more about...",frontmatter:{date:"October 30, 2014",path:"/geospatial-query-with-mongodb-and-node-js/",tags:"node.js, mongodb, wearetech.io",title:"Geospatial Query with MongoDB and Node.js",draft:null}}},pathContext:{prev:{excerpt:"Magento comes with a lot of Javascript. It uses  Prototype.js ,  Scriptaculus  and custom libraries written be the Varien people. No doubt that these libraries are old and I hardly use 'em on my themes, but they are very tight to the Magento theme...",html:'<p>Magento comes with a lot of Javascript. It uses <a href="http://prototypejs.org/">Prototype.js</a>, <a href="https://github.com/madrobby/scriptaculous">Scriptaculus</a> and custom libraries written be the Varien people. No doubt that these libraries are old and I hardly use \'em on my themes, but they are very tight to the Magento theme ecosystem and we should be careful when we mess with them.</p>\n<p>A modern website\'s home page is very important and we should focus at it\'s load time a lot. Magento\'s home page is indeed a CMS page and loads some of those scripts there too.</p>\n<p>Magento Layout\'s system has also done a nice job when it comes to what scripts to load where. Something that bothers me is the load of these scripts on CMS pages where by my experience they are not so useful there except from some standard places.</p>\n<p>So what we do? Say we created our <a href="http://www.magentocommerce.com/wiki/4_-_themes_and_template_customization/0_-_theming_in_magento/designing-for-magento">custom theme</a>. Let\'s remove those script completely from CMS pages including our home page, which is a CMS page.</p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0"?></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0.1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cms_page</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reference</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reference</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>prototype/prototype.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>lib/ccard.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>prototype/validation.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/builder.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/effects.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/dragdrop.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/controls.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/slider.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>varien/js.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>varien/form.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>varien/menu.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>mage/translate.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>reference</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>reference</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cms_page</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>But now we are going to have problems and Dev Console will turn red. Some blocks are not functioning.</p>\n<p>First the search block on top of our page. It\'s a form that uses the Validation module and also the Autocomplete feature. Let\'s remove those by opening the <code>catalogsearch/form.mini.phtml</code> file (after we have copied it on our theme\'s folder) and remove the <code>&#x3C;script>...&#x3C;/script></code>.</p>\n<p>We also have the Translator, which translates Javascript strings. We don\'t going to need it either on our CMS pages. We open <code>page/html/head.phtml</code> and we are removing the <code>&#x3C;?php echo $this->helper(\'core/js\')->getTranslatorScript() ?></code> definition.</p>\n<p>But that\'s not all. A lot of widgets that we may have include on our CMS pages, may use some Javascript as well. The new products list widgets, which is located at <code>catalog/product/widget/new/content/new.[list|grid].phtml</code> uses the <code>setLocation</code> function for the Add To Card button. Let\'s remove that by replacing the button with an anchor. Like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code>&lt;a title="<span class="token prolog">&lt;?php echo $this->__(\'Add to Cart\') ?></span>" class="button btn-cart" href="<span class="token prolog">&lt;?php echo $this->getAddToCartUrl($_product) ?></span>">\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token prolog">&lt;?php echo $this->__(\'Add to Cart\') ?></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Header\'s menu will also not drop it\'s submenu, but why not replace it with a <a href="http://codepen.io/search?q=mega+menu&#x26;limit=all&#x26;depth=everything&#x26;show_forks=false">CSS strictly mega menu</a>?</p>\n<p>So keep in mind that you may have other files that may disfunction. Find what those files are and figure out how to remove it\'s Magento JS dependencies.</p>\n<p>Removing Magento\'s JS and all it\'s dependencies from your theme completely will absolutely be the wisest road to take. But it\'s trivial and will cost you time and effort. Start small.</p>\n<p>The new RWD theme follows the same philosophy but it has more widgets (newsletter subscription form on the footer). So be careful there too.</p>\n<p>The results? Well we certainly got rid of 12 (~500K) Javascript files and more importantly from our home page, where we may have fancy jQuery sliders and other mambo jambo tricks. Also Magento loads these scripts in the HEAD of our tree which blocks the rendering of the rest of our page. Only pros here!</p>\n<p>Hit me on <a href="http://twitter.com/kbariotis">Twitter</a> if you have similar technics that you use and want to share.</p>',
id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/removing-js-scripts-from-cms-pages/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2014-12-14T18:12:56.000Z",path:"/removing-js-scripts-from-cms-pages/",tags:"magento, prototype.js, cms, load time, performance",title:"Removing JS from Magento CMS Pages",draft:null}},next:{excerpt:"Recently, my colleague  Yannis Rizos , tweeted me about a  book . Its title was somehow offensive and didn't look quite interesting at first. But once i started browsing it, i catch some really good points and decided to start from the beginning...",html:'<p>Recently, my colleague <a title="Yannis Rizos on Twitter.com" href="http://twitter.com/yrizos" target="_blank">Yannis Rizos</a>, tweeted me about a <a href="http://samizdat.mines.edu/howto/HowToBeAProgrammer.html" target="_blank" title="How to Be a Programmer">book</a>. Its title was somehow offensive and didn\'t look quite interesting at first.</p>\n<p>But once i started browsing it, i catch some really good points and decided to start from the beginning.</p>\n<p>Written by <a title="Robert L Read" href="http://c2.com/cgi/wiki?RobertlRead" target="_blank"><span class="firstname">Robert</span> <span class="othername">L</span> <span class="surname">Read</span></a>, it\'s a free essay, ~100 pages long.</p>\n<p>It is listing all the borrows and challenges a programmer will face and must pass in order to become a programmer.</p>\n<p>Starts with the most essential skill of a programmer, debugging. How to debug and some of the most trivial bugs you will eventually find in your code.</p>\n<p>It goes on with more skills like motivation, evolution, how to stress test, be a team player and communicate effectively with every type of people involved in this industry.</p>\n<p>It is divided in 3 chapters, Beginner, Intermediate and Advanced and every chapter contains a few paragraphs for every concept.</p>\n<p>I was really amazed by this essay and i would surely recommended to every beginner, junior, mid-senior professional programmer. I guess senior would already know these stuffs.</p>\n<p>What are you favorite recent reads?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/how-to-be-a-programmer-by-robert-l-read/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-10-25T10:54:21.000Z",path:"/how-to-be-a-programmer-by-robert-l-read/",tags:"clean code, code, programmers, debugging",title:"How To Be A Programmer by Robert L Read",draft:null}}}}}});
//# sourceMappingURL=path---geospatial-query-with-mongodb-and-node-js-1b1a69fdc3bd9f3ada89.js.map