webpackJsonp([13],{"./node_modules/json-loader/index.js!./.cache/json/the-configuration-service.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>While we were moving towards the <a href="http://martinfowler.com/microservices/">Microservices</a> path at <a href="https://goodvid.io">Goodvidio</a>, we were in the need of keeping in a central place the configuration of our system. Thus, we created the <em>Configuration Service</em>.</p>\n<p>The <em>Configuration Service</em> exposes a REST API (like all of our services) and provides a place to store configuration variables and values to all of our developers. Each Service of our infrastructure can have a record stored in the <em>Configuration Service</em>. Those records will then be consumed and manipulated by a front end screen, so that even non technical people can alter their values.</p>\n<p>As a developer that I am working in a feature and I want to make use of the <em>Configuration Service</em>, I must first make sure that there isn\'t already a record for the Service that I work on and if there isn\'t I have to create it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>GET /v1/configurations/ONBOARDING</code></pre>\n      </div>\n<p>If the above call return an empty array, I can create it by <code>POST</code>ing a body:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"_id"</span><span class="token operator">:</span> <span class="token string">"ONBOARDING"</span><span class="token punctuation">,</span>\n  <span class="token property">"configuration"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"free_trial_duration"</span> <span class="token operator">:</span> <span class="token string">"43800"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This way we keep all the configuration of our System in a central place and even the marketing team can decide some day to change the duration of the free trial period.</p>\n<p>That means fewer deployments, thus faster involvement.</p>',excerpt:"While we were moving towards the  Microservices  path at  Goodvidio , we were in the need of keeping in a central place the configuration of...",frontmatter:{date:"November 13, 2015",path:"/the-configuration-service/",tags:"Microservices",title:"The Configuration Service",draft:null}}},pathContext:{prev:{excerpt:"Last week, me and Goodvidio's CTO sit down to come up with a solution. We were in a need of an auditing service that will track down every movement inside our system. Searching in Google we didn't find any real world example either any useful...",html:"<p>Last week, me and Goodvidio's CTO sit down to come up with a solution. We were in a need of an auditing service that will track down every movement inside our system.</p>\n<p>Searching in Google we didn't find any real world example either any useful information as we expected. We had only our experience from the various systems we've used and how they are implementing such things. But again, we had never meet an isolated auditing service. That was our goal.</p>\n<p>Here are my notes from the meeting.</p>\n<ul>\n<li>Our goal was to track down actions happens anywhere in the system</li>\n<li>We should track the action, the actor of that action(whether it's an actual user or another service) and a lot of metadata about the action.</li>\n<li>Actions are application level logic. This means that each of our applications (otherwise services) define their actions that want our service to track. There are no limitations, validations or anything like that. There are rules that must be followed but other than that, you are free to track what ever you want.</li>\n<li>We found a solution to allow the presenter of the audits to not have to render the message it self, instead we are generating a message directly from the data we receive so the presenter can take ready messages to display. Of course, it has the choice to rerender them itself.</li>\n</ul>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/our-auditing-service/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-11-15T00:00:00.000Z",path:"/drafts/our-auditing-service/",tags:null,title:"Our auditing service",draft:!0}},next:{excerpt:"User stories  are a part of every agile driven process that teams usually follow. Often, even a developer can be called to write a story, based on a business requirement, that will eventually be called to develop it. Here's an example: As a Developer...",html:'<p><a href="https://en.wikipedia.org/wiki/User_story">User stories</a> are a part of every agile driven process that teams usually follow.</p>\n<p>Often, even a developer can be called to write a story, based on a business requirement, that will eventually be called to develop it. Here\'s an example:</p>\n<p><em>As a Developer, I want to be able to filter Blog Posts by Category ID, so I can display a filtered table.</em></p>\n<p>But one can easily be distracted and write a story based on their understanding of how consumers are using their code. Much like product owners.</p>\n<p>Before you start, talk to your consumers. See how their are using your code or your REST API. Ask them for feedback and for possible hard times they have with it.</p>\n<p>Then, write your user stories, based on that.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/user-stories/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2015-10-22T17:03:09.000Z",path:"/user-stories/",tags:null,title:"User Stories as in User Stories",draft:null}}}}}});
//# sourceMappingURL=path---the-configuration-service-8c6a0096aa2408b7d0af.js.map