webpackJsonp([174],{"./node_modules/json-loader/index.js!./.cache/json/common-concurrency-problems.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>A common problem to Computer Science is <a href="http://en.wikipedia.org/wiki/Concurrency_(computer_science)">Concurrency</a>. Most of the application we use today, use it in order to better utilise the hardware underneath them, especially when you are dealing with multicore systems.</p>\n<p>Now a few days ago I bumped into an interesting theory, <a href="http://en.wikipedia.org/wiki/Dining_philosophers_problem">Dining Philosophers Problem</a>. I remembered that we have heard about that problem at my <a href="http://www.it.teithe.gr/">university</a> but I had completely forgotten. I searched it a little bit on Wikipedia and through the references I found some excellent related problems that I would like to write here for feature references.</p>\n<ul>\n<li>\n<p><a href="http://en.wikipedia.org/wiki/Dining_philosophers_problem">Dining Philosophers Problem</a></p>\n</li>\n<li>\n<p><a href="http://en.wikipedia.org/wiki/Cigarette_smokers_problem">Cigarette Smokers Problem</a></p>\n</li>\n<li>\n<p><a href="http://en.wikipedia.org/wiki/Producers-consumers_problem">Producers Consumers Problem</a></p>\n</li>\n<li>\n<p><a href="http://en.wikipedia.org/wiki/Readers-writers_problem">Readers Writers Problem</a></p>\n</li>\n<li>\n<p><a href="http://en.wikipedia.org/wiki/Sleeping_barber_problem">Sleeping Barber Problem</a></p>\n</li>\n</ul>\n<p>Whether we are trying to make an algorithm faster or serve more request through our Web Server putting multiple machines on work is the only essential process. But problems occurs when we are trying to synchronise those machines. And this is where concurrency methods takes place.</p>\n<p>But concurrency is certainly not an easy technique and whether we are facing it in our day life or not, we should have some understanding of it, all it\'s forms it may appear and common solutions of our problem.</p>',excerpt:"A common problem to Computer Science is  Concurrency . Most of the application we use today, use it in order to better utilise the hardware...",frontmatter:{date:"March 15, 2015",path:"/common-concurrency-problems/",tags:"concurrency, dijkstra",title:"Common Concurrency Problems",draft:null}}},pathContext:{prev:{excerpt:"I haven't really gotten into  React.js  yet, even though I have heard about it about a year ago. It was this video,  about react-native  and how you can build native iOS apps  with Javascript, that really got me thinking. So, I started searching...",html:'<p>I haven\'t really gotten into <a href="https://facebook.github.io/react/">React.js</a> yet, even though I have heard about it about a year ago. It was this video, <a href="https://www.youtube.com/watch?v=KVZ-P-ZI6W4">about react-native</a> and how you can build native iOS apps  with Javascript, that really got me thinking.</p>\n<p>So, I started searching around, reading the <a href="https://facebook.github.io/react/docs/getting-started.html">docs</a>, reading what others <a href="http://blog.reverberate.org/2014/02/react-demystified.html">think</a> <a href="http://blog.andrewray.me/reactjs-for-stupid-people/">of it</a> and playing with this <a href="https://github.com/RickWong/react-isomorphic-starterkit">amazing piece of code</a>. But before you go too deep, let me straighten out some facts for you.</p>\n<h2>What React isn\'t</h2>\n<p>React is not a complete framework, kit or anything else. From the homepage:</p>\n<blockquote>\n<p>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</p>\n</blockquote>\n<p>You won\'t be able to use it on it\'s own. React is a library. People refer to it as the <a href="http://blog.codinghorror.com/understanding-model-view-controller/"><strong>V</strong></a> from the <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"><strong>MVC</strong></a>. But even as is, it does a hell of amazing job. Here\'s why.</p>\n<h2>React Components</h2>\n<p>React consists of components. You may have already heard about <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> that  allow us to create custom HTML tags and include them anywhere on the outside world as easile as we include an <code>H1</code> tag. React components work just like this but can only be used inside the React ecosystem.</p>\n<p>Furthermore, Facebook implemented a <a href="http://facebook.github.io/jsx/">new syntax language</a> based on XML in order to compile their new XML based Components into vanilla Javascript. By doing this, we are able to write HTML inside Javascript and not being worry about it.</p>\n<p>What? Did I just say HTML inside Javascript? Isn\'t that against the whole MVC movement? Well sort of... But React\'s team thinks this wa,y we will be able to maintain our code more easily since it exists on fewer files. Newcomers will get their hands on our code more quickly.The new language JSX looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n\t<span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span>\n    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Lets talk a little bit more about the components. A component is basically a Javascript class that only knows how to render itself. A component can also contain child components it communicates with. This can help us write more modular code.</p>\n<p>Think of a <code>List</code> element. We will write a List component that will contain a <code>ListItem</code> component. Every time we need to display it, the <code>List</code> component will render a <code>&#x3C;ul/></code> tag with a bunch of <code>ListItem</code> components,, and each of these <code>ListItem</code>s will render <code>&#x3C;li/></code>, each with their information.</p>\n<p>But wait? Did you said... render... every time? Like every time someone adds something in the list we will rerender it?</p>\n<h2>Reconciliation</h2>\n<p>Enter the <a href="https://facebook.github.io/react/docs/reconciliation.html">Virtual DOM magic, or in React\'s terms, the Reconciliation</a>. The essence of React. React will not render directly to the DOM every time something changes. Instead, it will render to its own internal DOM (the Virtual DOM) and then  compute diffs on the real DOM. React makes only the appropriate changes to the DOM to reflect the new changes. We never have to interact with the DOM again. We may never even have to write external stylesheets. React <a href="http://facebook.github.io/react/tips/inline-styles.html">has you covered</a>.</p>\n<h2>Conclusion</h2>\n<p>I would suggest getting your hands on the React\'s documentation as fast as possible. There are a lot of concepts you need to understand in order to grasp its full potential.</p>\n<p>As I said, in the beginning, it was <a href="https://github.com/facebook/react-native">react-native</a> that forced me to play with React. But there are a <a href="http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/">lot</a> <a href="https://facebook.github.io/flux/">more</a> goodies to explore and I haven\'t play with all of them yet.\nUntil next time, take care!</p>\n<p><em>Please let me know if I missed or misunderstood something, since it\'s my second day using React. If you liked my article please share it. :)</em></p>\n<p><em>I have to thank <a href="http://mplewis.com/">Matthew Lewis</a> for reviewing this article. Thank you Matt.</em></p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/hands-on-react-js/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-03-29T17:25:06.000Z",path:"/hands-on-react-js/",tags:"reactjs, javascript, node.js",title:"Hands on React.js",draft:null}},next:{excerpt:"This time i decided to post on  Medium  as being my favorite blogging platform for long time now. I am talking about the process of choosing a new tool in a world where every day something new is coming out. Checkit out. As always feedback, comments...",html:'<p>This time i decided to post on <a href="https://medium.com/">Medium</a> as being my favorite blogging platform for long time now.</p>\n<p>I am talking about the process of choosing a new tool in a world where every day something new is coming out.</p>\n<p>Checkit out. As always feedback, comments, notices are welcomed.</p>\n<h2><a href="https://medium.com/@kbariotis/choosing-your-next-best-tool-fba96eb19a7f">Choosing your next best tool</a></h2>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/choosing-your-next-tool/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-02-24T17:34:25.000Z",path:"/choosing-your-next-tool/",tags:"dev life, tools, medium",title:"Choosing your next best tool",draft:null}}}}}});
//# sourceMappingURL=path---common-concurrency-problems-f124c1f4b33c1e1fd36f.js.map