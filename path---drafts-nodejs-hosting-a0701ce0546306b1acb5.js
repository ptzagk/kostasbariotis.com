webpackJsonp([164],{"./node_modules/json-loader/index.js!./.cache/json/drafts-nodejs-hosting.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p><a href="https://arukas.io/en/">https://arukas.io/en/</a>\n<a href="https://zeit.co/now">https://zeit.co/now</a>\n<a href="http://www.evennode.com/">http://www.evennode.com/</a>\n<a href="http://surge.sh/">http://surge.sh/</a>\n<a href="https://www.nodechef.com">https://www.nodechef.com</a></p>',excerpt:"https://arukas.io/en/ \n https://zeit.co/now \n http://www.evennode.com/ \n http://surge.sh/ \n https://www.nodechef.com",frontmatter:{date:"May 23, 2015",path:"/drafts/nodejs-hosting/",tags:null,title:"Nodejs hosting",draft:!0}}},pathContext:{prev:{excerpt:"",html:"",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/secrets-of-mongo-shell/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-06-11T00:00:00.000Z",path:"/drafts/secrets-of-mongo-shell/",tags:null,title:"Secrets of Mongo Shell",draft:!0}},next:{excerpt:"When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough...",html:'<p>When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough information to the debugger.</p>\n<p>I am a REST fan and I hope you are too. What basically REST tell us, is to use <a href="http://en.wikipedia.org/wiki/List_of_HTTP_status_codes">HTTP\'s error codes</a> for our API responses. E.g. when the user requests a particular row from our DB, using an identifier, and that row doesn\'t exists we should respond with a <code>404 Not Found</code> status code.</p>\n<p>Express.js has a <a href="http://expressjs.com/guide/error-handling.html">default error handler</a>. Basicaly it\'s just a middleware, with an extra argument, the <code>err</code> argument.</p>\n<p>On an Express.js request lifecycle, when an error occurs, we pass on to the next middleware with populated error variable, and the error handler triggers.</p>\n<p>Let\'s start with that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">/* We log the error internaly */</span>\n    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment" spellcheck="true">/*\n     * Remove Error\'s `stack` property. We don\'t want\n     * users to see this at the production env\n     */</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'env\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">delete</span> err<span class="token punctuation">.</span>stack<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\t<span class="token comment" spellcheck="true">/* Finaly respond to the request */</span>\n    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>statusCode <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Two are the most essential parts here. Logging the error and proper displaying it. So I am logging it using a <a href="https://github.com/winstonjs/winston">logger</a> module and passing it to the user, using the error\'s status code. I have predefined those status codes so I don\'t have to deal with them every time. How? Let\'s see.</p>\n<p>An error often consists of more than just an error code. We need a title, little more information and the stack trace on development environment. Instead of dealing with those information every time we create objects and only changing the bits we want each time. Here\'s a <code>Not Found</code> error object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">notFound</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> errorCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">\'The requested resource couldn\\\'t be found\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>errorCode <span class="token operator">=</span> errorCode <span class="token operator">||</span> <span class="token number">404</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We are inheriting the Node.js <code>Error</code> class and create a generic <code>Not Found</code> error object we can use every time we need one.</p>\n<p>So now we need to pass this to the Express.js error handler. So on an ordinary controller we do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">\'/customers/:id\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n\t<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">properSanitization</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\tsomeDBDriver<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \t<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \t<span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NotFound</span><span class="token punctuation">(</span><span class="token string">\'Entity with id: \'</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">\' couldn\\\'t be bound.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        \t<span class="token comment" spellcheck="true">/* ... */</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So now the error handler will take place and do it\'s magic.</p>\n<p>Often, in a more complex API will need more expressive status codes to express it\'s disfunctionalities. In that case, you can still respond with the proper status code but keep an internal error eode that makes sense on your application. So, in case a user tries to login with wrong credentials, send a 401 to the API consumer but keep an internal code, e.g. 4001 that means <strong>"Wrong Username/Password"</strong>. And that\'s what the <code>errorCode</code> is.</p>\n<p>Here\'s a simple <a href="http://github.com/kbariotis/throw.js">error collection</a> i\'ve wrote, to save you the hassle. Use it and send me your suggestions and/or notices.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/rest-api-error-handling-with-express-js/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-05-22T16:35:17.000Z",path:"/rest-api-error-handling-with-express-js/",tags:"node.js, rest, express.js, api",title:"REST API Error Handling with Express.js",draft:null}}}}}});
//# sourceMappingURL=path---drafts-nodejs-hosting-a0701ce0546306b1acb5.js.map