webpackJsonp([122],{"./node_modules/json-loader/index.js!./.cache/json/making-a-rest-api-discoverable.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:"<p>Making a discoverable API means thats some software would be able to traverse it, by only providing it's root endpoint. For example, my IDE could provide me all the endpoints, input schemas and responses of Github's API by putting in it's root, that is <code>https://api.github.com</code>.</p>\n<p>This can have some major advantages. Speed would be the absolute greatest, since I don't have to search through documentation and going back and forth their site. Also, in case of an endpoint changes it's name, the software will automatically adopt the new name.</p>\n<p>Now, all these are definitely good, but we don't see that much of API's making themselves discoverable. Why is that? Well, mostly because speed is not that much of an issue, since REST is pretty explanatory it self, you only have a few verbs to respond to, so each API's documentation wouldn't be that much. As for the breaking changes, well putting a Version number in front of each endpoint seems to work pretty good.</p>\n<p>The first thing that comes in mind when talking about discovering web services is Web Services Description Language(WSDL). Before the major adoption of REST principles, people would create APIs in different forms. And so a way to describe them was necessary. That's where WSDL would take action. REST on the other hand is not the same. When we hear an API is REST compliant, we know that uses the common HTTP verbs, can return/accept XML or JSON and respond with the known HTTP statuses codes. That is what REST APIs is all about.</p>\n<p>Nevertheless, I would say that machines that talk to each other, that are indeed able to discover each other's resources, is a tasty subject and I'm pretty sure that we will see it really soon. At the mean time, let's focus on making our APIs usable and understandable with bare eye.</p>\n<p>Here are some references you can use if you want to make your API's discoverable. You can check out these great specs about describing your API through it's responses. I am not sure how these can be widely adopted, but once they do, we should expect it to go big. Never used them, so I am expecting from you. Google's also has looked into this and came out with some really fascinated results, be sure to check them also.</p>\n<p><a href=\"http://micro-api.org/\">http://micro-api.org/</a>\n<a href=\"http://jsonapi.org/\">http://jsonapi.org/</a>\n<a href=\"http://www.odata.org/\">http://www.odata.org/</a>\n<a href=\"https://developers.google.com/discovery/\">https://developers.google.com/discovery/</a></p>",excerpt:"Making a discoverable API means thats some software would be able to traverse it, by only providing it's root endpoint. For example, my IDE...",frontmatter:{date:"August 24, 2015",path:"/making-a-rest-api-discoverable/",tags:"rest, api",title:"Making a REST API discoverable",draft:null}}},pathContext:{prev:{excerpt:"Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the   operator, even though the document didn't contain that field. But still it would return...",html:'<p>Today I lost a few hours trying to understand why a document that I was fetching through Mongoose, kept returning true against checking for a field with the <code>in</code> operator, even though the document didn\'t contain that field.</p>\n<p>But still it would return true:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'mongoose\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  Schema <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> exampleSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  someField<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  notExistingField<span class="token punctuation">:</span> String\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> versionKey<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'notExistingField\'</span> <span class="token keyword">in</span> document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* true */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The fact is that Mongoose will first comply the fetched document against the defined Schema in order for it\'s getters/setters functions to work. So even though, we can\'t see the <code>notExistingField</code>, the <code>in</code> operator will always return true.</p>\n<p>A solution is to change the checking and check for an undefined value, like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">/* We know that this document doesn\'t have the notExistingField in the DB */</span>\nexampleSchema<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'_id\'</span><span class="token punctuation">:</span> id\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> document<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* { someField: \'value\' } */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* undefined */</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>document<span class="token punctuation">[</span><span class="token string">\'notExistingField\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">/* false */</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Fixed.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/mongoose-objects-and-the-in-operator/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-08-31T17:51:38.000Z",path:"/mongoose-objects-and-the-in-operator/",tags:"mongodb, mongoose",title:"Mongoose objects and the IN operator",draft:null}},next:{excerpt:"You won’t rush an architect. You don’t want to see your house becoming dust at the next earthquake.  You won’t rush your hairdresser. You don’t want to leave that place with one ear. You won’t rush your dentist. You can’t handle the pain. You won’t...",html:"<p>You won’t rush an architect. You don’t want to see your house becoming dust at the next earthquake. </p>\n<p>You won’t rush your hairdresser. You don’t want to leave that place with one ear.</p>\n<p>You won’t rush your dentist. You can’t handle the pain.</p>\n<p>You won’t rush your local restaurant chef. You know good beef takes time to cook.</p>\n<p>You won’t rush your wife to deliver your baby in less than 9 months. Why would you?</p>\n<p>But you will rush your developer to build the next Facebook in 48 hours.</p>\n<p>It makes sense.</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/it-makes-sense/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-07-15T18:38:24.000Z",path:"/it-makes-sense/",tags:null,title:"It makes sense",draft:null}}}}}});
//# sourceMappingURL=path---making-a-rest-api-discoverable-c80e6a3932f6db6f0943.js.map