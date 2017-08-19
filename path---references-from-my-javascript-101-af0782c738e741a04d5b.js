webpackJsonp([97],{"./node_modules/json-loader/index.js!./.cache/json/references-from-my-javascript-101.json":function(e,n){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>A week ago <a href="http://thanpol.as/">Thanasis</a> asked me to make a Javascript 101 for the <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/">SKG Node.js monthly meetup</a>. The trap? I had to present it a week after. :/ At first, it looked not such an easy task, since I hadn\'t have any slides or anything ready for it. Fuck it. Challenge accepted.</p>\n<p>I strongly believe that it’s the pressure that makes you a better professional let alone a better person. Life doesn’t wait. Let alone the community. Of course, I would be more pleased if I had the time to prepare a better presentation. But even this way I think it was a great experience. People liked it.</p>\n<p>Thanasis offered me even an easier solution. Take a ready presentation, study it and present it. Nah, I didn’t want it that way. I need it to be me. To have my own slides. My own talk. After all it’s me who had to present it. It had to had my style.</p>\n<p>Anyway, people asked for the <a href="http://slides.com/kostasbariotis/javascript-101">slides</a> and for some references. So here they are.</p>\n<br/>\n<iframe src="//slides.com/kostasbariotis/javascript-101/embed?style=light" width="100%" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<br/>\n<p>80% of the talk were studied by <a href="http://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691">Professional Javascript Developers from Nikolas Zakas</a>. I strongly recommend this book, but be aware it’s a \'heavy\' one. Even being quite old, it still has some neat advices and can be a great reference for the future.</p>\n<p>I asked <a href="https://twitter.com/adon1sk">Adonis</a> to borrow me his <a href="http://shop.oreilly.com/product/9780596517748.do">Javascript: The Good Parts</a> a week ago but still hasn’t remember it. I took a quick look on it online (using the previews) and stole some examples from there too. I would recommend it.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/">MDN</a> also helped me a lot, being in the first 10 results of Google searches, I always choose it before I dive deeper. (Still avoiding w3school even though I try to support them. Still can’t trust their source. :/)</p>\n<p>You can find Thanasis\'s slides <a href="https://speakerdeck.com/thanpolas/assets-on-the-cloud">here</a> of his <em>Assets on the Cloud</em> talk, which was amazing.</p>\n<p>Finaly, check out the photos(<a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/photos/26088965/">here</a>, <a href="https://www.flickr.com/photos/christosbacharakis/sets/72157652297259605/">here</a>) we took that night.</p>\n<p>If you were at the <a href="http://www.meetup.com/Thessaloniki-Node-js-Meetup/events/222016697/">meetup</a> and you liked my talk, please ping me on <a href="http://twitter.com/kbariotis">Twitter</a> with notices and suggestions.</p>\n<p>Thank you.</p>',excerpt:"A week ago  Thanasis  asked me to make a Javascript 101 for the  SKG Node.js monthly meetup . The trap? I had to present it a week after...",frontmatter:{date:"May 01, 2015",path:"/references-from-my-javascript-101/",tags:"javascript, skgnodejs, meetup, node.js",title:"References from my Javascript 101",draft:null}}},pathContext:{prev:{excerpt:"When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough...",html:'<p>When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough information to the debugger.</p>\n<p>I am a REST fan and I hope you are too. What basically REST tell us, is to use <a href="http://en.wikipedia.org/wiki/List_of_HTTP_status_codes">HTTP\'s error codes</a> for our API responses. E.g. when the user requests a particular row from our DB, using an identifier, and that row doesn\'t exists we should respond with a <code>404 Not Found</code> status code.</p>\n<p>Express.js has a <a href="http://expressjs.com/guide/error-handling.html">default error handler</a>. Basicaly it\'s just a middleware, with an extra argument, the <code>err</code> argument.</p>\n<p>On an Express.js request lifecycle, when an error occurs, we pass on to the next middleware with populated error variable, and the error handler triggers.</p>\n<p>Let\'s start with that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">/* We log the error internaly */</span>\n    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment" spellcheck="true">/*\n     * Remove Error\'s `stack` property. We don\'t want\n     * users to see this at the production env\n     */</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'env\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">delete</span> err<span class="token punctuation">.</span>stack<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\t<span class="token comment" spellcheck="true">/* Finaly respond to the request */</span>\n    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>statusCode <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Two are the most essential parts here. Logging the error and proper displaying it. So I am logging it using a <a href="https://github.com/winstonjs/winston">logger</a> module and passing it to the user, using the error\'s status code. I have predefined those status codes so I don\'t have to deal with them every time. How? Let\'s see.</p>\n<p>An error often consists of more than just an error code. We need a title, little more information and the stack trace on development environment. Instead of dealing with those information every time we create objects and only changing the bits we want each time. Here\'s a <code>Not Found</code> error object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">notFound</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> errorCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">\'The requested resource couldn\\\'t be found\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>errorCode <span class="token operator">=</span> errorCode <span class="token operator">||</span> <span class="token number">404</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We are inheriting the Node.js <code>Error</code> class and create a generic <code>Not Found</code> error object we can use every time we need one.</p>\n<p>So now we need to pass this to the Express.js error handler. So on an ordinary controller we do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">\'/customers/:id\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n\t<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">properSanitization</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\tsomeDBDriver<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \t<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \t<span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NotFound</span><span class="token punctuation">(</span><span class="token string">\'Entity with id: \'</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">\' couldn\\\'t be bound.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        \t<span class="token comment" spellcheck="true">/* ... */</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So now the error handler will take place and do it\'s magic.</p>\n<p>Often, in a more complex API will need more expressive status codes to express it\'s disfunctionalities. In that case, you can still respond with the proper status code but keep an internal error eode that makes sense on your application. So, in case a user tries to login with wrong credentials, send a 401 to the API consumer but keep an internal code, e.g. 4001 that means <strong>"Wrong Username/Password"</strong>. And that\'s what the <code>errorCode</code> is.</p>\n<p>Here\'s a simple <a href="http://github.com/kbariotis/throw.js">error collection</a> i\'ve wrote, to save you the hassle. Use it and send me your suggestions and/or notices.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/rest-api-error-handling-with-express-js/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-05-22T16:35:17.000Z",path:"/rest-api-error-handling-with-express-js/",tags:"node.js, rest, express.js, api",title:"REST API Error Handling with Express.js",draft:null}},next:{excerpt:"I haven't really gotten into  React.js  yet, even though I have heard about it about a year ago. It was this video,  about react-native  and how you can build native iOS apps  with Javascript, that really got me thinking. So, I started searching...",html:'<p>I haven\'t really gotten into <a href="https://facebook.github.io/react/">React.js</a> yet, even though I have heard about it about a year ago. It was this video, <a href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4">about react-native</a> and how you can build native iOS apps  with Javascript, that really got me thinking.</p>\n<p>So, I started searching around, reading the <a href="https://facebook.github.io/react/docs/getting-started.html">docs</a>, reading what others <a href="http://blog.reverberate.org/2014/02/react-demystified.html">think</a> <a href="http://blog.andrewray.me/reactjs-for-stupid-people/">of it</a> and playing with this <a href="https://github.com/RickWong/react-isomorphic-starterkit">amazing piece of code</a>. But before you go too deep, let me straighten out some facts for you.</p>\n<h2>What React isn\'t</h2>\n<p>React is not a complete framework, kit or anything else. From the homepage:</p>\n<blockquote>\n<p>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</p>\n</blockquote>\n<p>You won\'t be able to use it on it\'s own. React is a library. People refer to it as the <a href="http://blog.codinghorror.com/understanding-model-view-controller/"><strong>V</strong></a> from the <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"><strong>MVC</strong></a>. But even as is, it does a hell of amazing job. Here\'s why.</p>\n<h2>React Components</h2>\n<p>React consists of components. You may have already heard about <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> that  allow us to create custom HTML tags and include them anywhere on the outside world as easile as we include an <code>H1</code> tag. React components work just like this but can only be used inside the React ecosystem.</p>\n<p>Furthermore, Facebook implemented a <a href="http://facebook.github.io/jsx/">new syntax language</a> based on XML in order to compile their new XML based Components into vanilla Javascript. By doing this, we are able to write HTML inside Javascript and not being worry about it.</p>\n<p>What? Did I just say HTML inside Javascript? Isn\'t that against the whole MVC movement? Well sort of... But React\'s team thinks this wa,y we will be able to maintain our code more easily since it exists on fewer files. Newcomers will get their hands on our code more quickly.The new language JSX looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Lets talk a little bit more about the components. A component is basically a Javascript class that only knows how to render itself. A component can also contain child components it communicates with. This can help us write more modular code.</p>\n<p>Think of a <code>List</code> element. We will write a List component that will contain a <code>ListItem</code> component. Every time we need to display it, the <code>List</code> component will render a <code>&#x3C;ul/></code> tag with a bunch of <code>ListItem</code> components,, and each of these <code>ListItem</code>s will render <code>&#x3C;li/></code>, each with their information.</p>\n<p>But wait? Did you said... render... every time? Like every time someone adds something in the list we will rerender it?</p>\n<h2>Reconciliation</h2>\n<p>Enter the <a href="https://facebook.github.io/react/docs/reconciliation.html">Virtual DOM magic, or in React\'s terms, the Reconciliation</a>. The essence of React. React will not render directly to the DOM every time something changes. Instead, it will render to its own internal DOM (the Virtual DOM) and then  compute diffs on the real DOM. React makes only the appropriate changes to the DOM to reflect the new changes. We never have to interact with the DOM again. We may never even have to write external stylesheets. React <a href="http://facebook.github.io/react/tips/inline-styles.html">has you covered</a>.</p>\n<h2>Conclusion</h2>\n<p>I would suggest getting your hands on the React\'s documentation as fast as possible. There are a lot of concepts you need to understand in order to grasp its full potential.</p>\n<p>As I said, in the beginning, it was <a href="https://github.com/facebook/react-native">react-native</a> that forced me to play with React. But there are a <a href="http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/">lot</a> <a href="https://facebook.github.io/flux/">more</a> goodies to explore and I haven\'t play with all of them yet.\nUntil next time, take care!</p>\n<p><em>Please let me know if I missed or misunderstood something, since it\'s my second day using React. If you liked my article please share it. :)</em></p>\n<p><em>I have to thank <a href="http://mplewis.com/">Matthew Lewis</a> for reviewing this article. Thank you Matt.</em></p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/hands-on-react-js/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-03-29T17:25:06.000Z",path:"/hands-on-react-js/",tags:"reactjs, javascript, node.js",title:"Hands on React.js",draft:null}}}}}});
//# sourceMappingURL=path---references-from-my-javascript-101-af0782c738e741a04d5b.js.map