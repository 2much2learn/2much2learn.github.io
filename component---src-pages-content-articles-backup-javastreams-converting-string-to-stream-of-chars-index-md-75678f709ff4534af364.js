(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6zPd":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return m}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("7ljp");var s={templateKey:"article",published:!1,displayComments:!0,showAuthorInfo:!1,author:"narramadan",title:"Converting String to Stream of chars",description:"Converting String to Stream of chars",date:"2020-01-05T23:46:37.121Z",updated:"2020-01-05T23:46:37.121Z",cover:"../../../images/blog-banners/microservice-banner-1200x690.png",category:"javastreams",tags:["java","streams","featured"]},c={_frontmatter:s};function m(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.mdx)("wrapper",Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)("h2",null,"Intro"),Object(n.mdx)("p",null,"Java 8 introduced the Stream API, with functional-like operations for processing sequences. If you want to read more about it, have a look at this article."),Object(n.mdx)("p",null,"In this quick article, we’ll see how to convert a ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"String")," to a ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Stream")," of single characters."),Object(n.mdx)("h2",null,"Conversion Using chars()"),Object(n.mdx)("p",null,"The ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"String")," API has a new method – ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"chars()")," – with which we can obtain an instance of ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Stream")," from a String object. This simple API returns an instance of IntStream from the input String."),Object(n.mdx)("p",null,"Simply put, ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"IntStream")," contains an integer representation of the characters from the ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"String")," object:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"java"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-java"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-java"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"String")," testString ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"String"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"IntStream")," intStream ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," testString",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"chars"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"It’s possible to work with the integer representation of the characters without converting them to their ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Character")," equivalent. This can lead to some minor performance gains, as there will be no need to box each integer into a ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Character")," object."),Object(n.mdx)("p",null,"However, if we’re to display the characters for reading, we need to convert the integers to the human-friendly ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Character")," form:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"java"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-java"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-java"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Stream"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token generics"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Character"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))," characterStream ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," testString",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"chars"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"mapToObj"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"c ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"->")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"char"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," c",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("h2",null,"Conversion Using codePoints()"),Object(n.mdx)("p",null,"Alternatively, we can use the ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"codePoints()")," method to get an instance of ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"IntStream")," from a ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"String"),". The advantage of using this API is that Unicode supplementary characters can be handled effectively."),Object(n.mdx)("p",null,"Supplementary characters are represented by Unicode surrogate pairs and will be merged into a single codepoint. This way we can correctly process (and display) any Unicode symbol:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"java"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-java"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-java"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"IntStream")," intStream1 ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," testString",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"codePoints"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"We need to map the returned ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"IntStream")," to ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Stream<Character>")," to display it to users:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"java"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-java"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-java"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Stream"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token generics"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Character"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))," characterStream2 \n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," testString",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"codePoints"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"mapToObj"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"c ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"->")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"char"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," c",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("h2",null,"Conversion to a Stream of Single Character Strings"),Object(n.mdx)("p",null,"So far, we’ve been able to get a ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Stream")," of characters; what if we want a Stream of single character ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Strings")," instead?"),Object(n.mdx)("p",null,"Just as specified earlier in the article, we’ll use either the ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"codePoints()")," or ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"chars()")," methods to obtain an instance of IntStream that we can now map to ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Stream<String>"),"."),Object(n.mdx)("p",null,"The mapping process involves converting the integer values to their respective character equivalents first."),Object(n.mdx)("p",null,"Then we can use String.valueOf() or Character.toString() to convert the characters to a String object:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"java"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-java"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-java"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"Stream"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token generics"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"String"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))," stringStream ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," testString",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"codePoints"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"mapToObj"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"c ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"->")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"String"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"valueOf"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"char"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," c",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("h2",null,"Conclusion"),Object(n.mdx)("p",null,"In this quick tutorial, we learn to obtain a stream of Character from a String object by either calling ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"codePoints()")," or ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"chars()")," methods."),Object(n.mdx)("p",null,"This allows us to take full advantage of the ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Stream API")," – to conveniently and effectively manipulate characters."),Object(n.mdx)("p",null,"As always, code snippets can be found over on GitHub."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-content-articles-backup-javastreams-converting-string-to-stream-of-chars-index-md-75678f709ff4534af364.js.map