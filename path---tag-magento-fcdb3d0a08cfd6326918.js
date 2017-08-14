webpackJsonp([53],{"./node_modules/json-loader/index.js!./.cache/json/tag-magento.json":function(a,n){a.exports={pathContext:{posts:[{excerpt:"Magento comes with a lot of Javascript. It uses  Prototype.js ,  Scriptaculus  and custom libraries written be the Varien people. No doubt that these libraries are old and I hardly use 'em on my themes, but they are very tight to the Magento theme...",html:'<p>Magento comes with a lot of Javascript. It uses <a href="http://prototypejs.org/">Prototype.js</a>, <a href="https://github.com/madrobby/scriptaculous">Scriptaculus</a> and custom libraries written be the Varien people. No doubt that these libraries are old and I hardly use \'em on my themes, but they are very tight to the Magento theme ecosystem and we should be careful when we mess with them.</p>\n<p>A modern website\'s home page is very important and we should focus at it\'s load time a lot. Magento\'s home page is indeed a CMS page and loads some of those scripts there too.</p>\n<p>Magento Layout\'s system has also done a nice job when it comes to what scripts to load where. Something that bothers me is the load of these scripts on CMS pages where by my experience they are not so useful there except from some standard places.</p>\n<p>So what we do? Say we created our <a href="http://www.magentocommerce.com/wiki/4_-_themes_and_template_customization/0_-_theming_in_magento/designing-for-magento">custom theme</a>. Let\'s remove those script completely from CMS pages including our home page, which is a CMS page.</p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0"?></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0.1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cms_page</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reference</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reference</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>prototype/prototype.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>lib/ccard.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>prototype/validation.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/builder.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/effects.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/dragdrop.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/controls.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>scriptaculous/slider.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>varien/js.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>varien/form.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>varien/menu.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>removeItem<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>mage/translate.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>action</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>reference</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>reference</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cms_page</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>But now we are going to have problems and Dev Console will turn red. Some blocks are not functioning.</p>\n<p>First the search block on top of our page. It\'s a form that uses the Validation module and also the Autocomplete feature. Let\'s remove those by opening the <code>catalogsearch/form.mini.phtml</code> file (after we have copied it on our theme\'s folder) and remove the <code>&#x3C;script>...&#x3C;/script></code>.</p>\n<p>We also have the Translator, which translates Javascript strings. We don\'t going to need it either on our CMS pages. We open <code>page/html/head.phtml</code> and we are removing the <code>&#x3C;?php echo $this->helper(\'core/js\')->getTranslatorScript() ?></code> definition.</p>\n<p>But that\'s not all. A lot of widgets that we may have include on our CMS pages, may use some Javascript as well. The new products list widgets, which is located at <code>catalog/product/widget/new/content/new.[list|grid].phtml</code> uses the <code>setLocation</code> function for the Add To Card button. Let\'s remove that by replacing the button with an anchor. Like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code>&lt;a title="<span class="token prolog">&lt;?php echo $this->__(\'Add to Cart\') ?></span>" class="button btn-cart" href="<span class="token prolog">&lt;?php echo $this->getAddToCartUrl($_product) ?></span>">\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token prolog">&lt;?php echo $this->__(\'Add to Cart\') ?></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Header\'s menu will also not drop it\'s submenu, but why not replace it with a <a href="http://codepen.io/search?q=mega+menu&#x26;limit=all&#x26;depth=everything&#x26;show_forks=false">CSS strictly mega menu</a>?</p>\n<p>So keep in mind that you may have other files that may disfunction. Find what those files are and figure out how to remove it\'s Magento JS dependencies.</p>\n<p>Removing Magento\'s JS and all it\'s dependencies from your theme completely will absolutely be the wisest road to take. But it\'s trivial and will cost you time and effort. Start small.</p>\n<p>The new RWD theme follows the same philosophy but it has more widgets (newsletter subscription form on the footer). So be careful there too.</p>\n<p>The results? Well we certainly got rid of 12 (~500K) Javascript files and more importantly from our home page, where we may have fancy jQuery sliders and other mambo jambo tricks. Also Magento loads these scripts in the HEAD of our tree which blocks the rendering of the rest of our page. Only pros here!</p>\n<p>Hit me on <a href="http://twitter.com/kbariotis">Twitter</a> if you have similar technics that you use and want to share.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/removing-js-scripts-from-cms-pages/index.md absPath of file >>> MarkdownRemark",timeToRead:4,frontmatter:{date:"2014-12-14T18:12:56.000Z",path:"/removing-js-scripts-from-cms-pages",tags:"magento, prototype.js, cms, load time, performance",title:"Removing JS from Magento CMS Pages",draft:null}},{excerpt:"I am introducing  Stargento.com  to the  Magento  community. I am looking forward for your thoughts and feedback. Hit me on  Twitter . This is a meta-post for a post i wrote on  Medium . Thoughts?",html:'<p>I am introducing <a title="Stargento is an online PHP Sandbox and a Magento playground" href="http://stargento.com" target="_blank">Stargento.com</a> to the <a title="Magento" href="http://magentocommerce.com/" target="_blank">Magento</a> community. I am looking forward for your thoughts and feedback.</p>\n<p>Hit me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter</a>.</p>\n<p>This is a meta-post for a post i wrote on <a href="https://medium.com/@kbariotis/introducing-stargento-com-d7b202f2a55d">Medium</a>. Thoughts?</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/introducing-stargento-com/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-09-24T16:16:00.000Z",path:"/introducing-stargento-com",tags:"stargento.com, magento",title:"Introducing Stargento.com",draft:null}},{excerpt:"Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it's still the number one e-commerce solution. It's proven. So, i wanted to talk a little about how i maintaining my Magento projects. 1) I am keeping...",html:'<p>Magento is hard. No doubt about it. But this is not an excuse. Beside that (and a few other issues) it\'s still the number one e-commerce solution. It\'s proven.</p>\n<p>So, i wanted to talk a little about how i maintaining my Magento projects.</p>\n<p><strong>1) I am keeping everything under version control</strong></p>\n<p>Magento\'s folder structure brings a lot of frustration. An extension can place it\'s files almost anywhere it\'s developer wants. It can be in base package theme either in package default theme. It can be in media folder for permanent files you want to keep under control either in /js folder for Javascript global libraries.</p>\n<p>Keeping a .gitignore with all the Project\'s specific files is almost impossible.</p>\n<p>Also, you can\'t carry with you your Project\'s modules, except using <a title="Composer with Magento" href="https://github.com/magento-hackathon/magento-composer-installer" target="_blank">Composer with Magento </a>which it\'s also complicate to work with. (Still struggling with it on Windows)</p>\n<p>So, what i do is keep everything under version control, except temporary files like cache, logs, etc. etc.</p>\n<p><strong>2) Never touch core files</strong></p>\n<p>By never touching core files like in folders:</p>\n<ul>\n\t<li>app/code/core</li>\n\t<li>app/locale/</li>\n\t<li>app/design/frontend/(base|default|rwd)</li>\n\t<li>app/design/adminhtml/</li>\n\t<li>js/ (initial folders only)</li>\n\t<li>lib/ (initial folders only)</li>\n\t<li>skin/frontend/(base|default|rwd)</li>\n\t<li>includes/</li>\n</ul>\nyou make sure that, when a feature release is out, you can just copy paste above you project and everything still works fine.\n<p>Keeping your Magento always up to date can save you from big disasters. I must make sure that feature releases wont be a pain to get.</p>\n<p><strong>3) Extend everything</strong></p>\n<p>In case you need to extend a Magento\'s core functionality or make it behave different, you are covered.</p>\n<p>Magento\'s team had a purpose and only one. To make the most extensible e-commerce framework out there. They even sacrifice performance on this purpose. Now, some may argue that that was stupid or they didn\'t success after all. I will have to disagree with both.</p>\n<p>Magento is a true PHP OOP project, powered by the most powerful framework, the <a title="Zend Framework" href="http://framework.zend.com/" target="_blank">Zend Framework</a>.</p>\n<p>As about performance, these days you have a lot of tools in order to create a fast website. You may be hosted at an AWS super server, use fast caching methods, etc, etc.</p>\n<p><strong>4) Keep a local Magento with stuff i use a lot</strong></p>\n<p>After a few projects, i realized that a lot of processes were repeated again and again. The same modules i will installed on every fresh Magento install, the same configuration i would do. So i keep a private(yet!) Magento repository were i have all of my Modules and a clean Database dump with my configuration set.</p>\n<p>How do you deal with your Magento projects? Share your tactics and technics with me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">Twitter </a>or bellow in the comments.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/maintaining-a-magento-code-base/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-09-08T17:23:58.000Z",path:"/maintaining-a-magento-code-base",tags:"magento, code base, e-commerce",title:"Maintaining a Magento code base",draft:null}},{excerpt:"Last week an unusual bug really got me some time until i figured out. Common symptoms are Magento not creating your product's images cache without a reason or when trying to upload product's image and an error says 'Memory limit reached'. A lot of...",html:'<p>Last week an unusual bug really got me some time until i figured out.</p>\n<p>Common symptoms are Magento not creating your product\'s images cache without a reason or when trying to upload product\'s image and an error says \'Memory limit reached\'.</p>\n<p>A lot of resources on the Internet says that you have to increase your PHP\'s memory limit. But when i checked my PHP\'s configuration i noticed that memory limit was to -1, which means that a s<a title="PHP Docs : Memory Limit" href="http://php.net/manual/en/ini.core.php#ini.memory-limit" target="_blank">cript is allowed to allocate all your available memory</a>. Hmm, that\'s interesting. Hmmm, that\'s interesting.</p>\n<p>I followed the stacktrace and i found this (lib/Varien/Image/Adapter/Gd2.php):</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function">_isMemoryLimitReached</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token variable">$limit</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token function">_convertToByte</span><span class="token punctuation">(</span><span class="token function">ini_get</span><span class="token punctuation">(</span><span class="token string">\'memory_limit\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token variable">$size</span> <span class="token operator">=</span> <span class="token function">getimagesize</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span>_fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token variable">$requiredMemory</span> <span class="token operator">=</span> <span class="token variable">$size</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token variable">$size</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">memory_get_usage</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token variable">$requiredMemory</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> <span class="token variable">$limit</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>\n\n<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function">_convertToByte</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">stripos</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">,</span> <span class="token string">\'M\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token function">stripos</span><span class="token punctuation">(</span><span class="token variable">$memoryValue</span><span class="token punctuation">,</span> <span class="token string">\'KB\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span><span class="token variable">$memoryValue</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>There you have it. The author here doesn\'t check for when memory_limit is set to -1. Instead he assumes that it will be always set to form of XXM or XXKB.</p>\n<p>So in case you have bumped into the above symptoms check out that your PHP\'s memory limit is not set to infinite.</p>',
id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/magentovarien-lib-php-memory_limit-1-bug/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-30T13:21:24.000Z",path:"/magentovarien-lib-php-memory_limit-1-bug",tags:"magento",title:"Magento(Varien lib) & PHP memory_limit -1 bug",draft:null}}],tag:"magento",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-magento-fcdb3d0a08cfd6326918.js.map