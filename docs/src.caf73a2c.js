parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"/xJO":[function(require,module,exports) {
"use strict";function e(e,n){for(var t=[],r=[],o=arguments.length;o-- >2;)t.push(arguments[o]);for(;t.length;){var u=t.pop();if(u&&u.pop)for(o=u.length;o--;)t.push(u[o]);else null!=u&&!0!==u&&!1!==u&&r.push(u)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}function n(e,n,t,r){var o,u=[].map,l=r&&r.children[0]||null,i=l&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:u.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}}(l),a=[],f=!0,c=p(e),s=function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var u=o(e);return"function"==typeof u&&(u=u(g(n,c),r)),u&&u!==(t=g(n,c))&&!u.then&&h(c=m(n,p(t,u),c)),u}}(o,r[o]):e(n.concat(o),t[o]=p(t[o]),r[o]=p(r[o]));return r}([],c,p(n));return h(),s;function v(e){return"function"==typeof e?v(e(c,s)):null!=e?e:""}function d(){o=!o;var e=v(t);for(r&&!o&&(l=function e(n,t,r,o,u){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var l=function e(n,t){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName);var o=n.attributes;if(o){o.oncreate&&a.push(function(){o.oncreate(r)});for(var u=0;u<n.children.length;u++)r.appendChild(e(n.children[u]=v(n.children[u]),t));for(var l in o)b(r,l,o[l],null,t)}return r}(o,u);n.insertBefore(l,t),null!=r&&k(n,t,r),t=l}else if(null==r.nodeName)t.nodeValue=o;else{!function(e,n,t,r){for(var o in p(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var u=f?t.oncreate:t.onupdate;u&&a.push(function(){u(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var i={},c={},s=[],d=r.children,h=o.children,m=0;m<d.length;m++){s[m]=t.childNodes[m];var g=y(d[m]);null!=g&&(i[g]=[s[m],d[m]])}for(var m=0,N=0;N<h.length;){var g=y(d[m]),w=y(h[N]=v(h[N]));if(c[g])m++;else if(null==w||w!==y(d[m+1]))if(null==w||f)null==g&&(e(t,s[m],d[m],h[N],u),N++),m++;else{var x=i[w]||[];g===w?(e(t,x[0],x[1],h[N],u),m++):x[0]?e(t,t.insertBefore(x[0],s[m]),x[1],h[N],u):e(t,s[m],null,h[N],u),c[w]=h[N],N++}else null==g&&k(t,s[m],d[m]),m++}for(;m<d.length;)null==y(d[m])&&k(t,s[m],d[m]),m++;for(var m in i)c[m]||k(t,i[m][0],i[m][1])}return t}(r,l,i,i=e)),f=!1;a.length;)a.pop()()}function h(){o||(o=!0,setTimeout(d))}function p(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function m(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?m(e.slice(1),n,t[e[0]]):n,p(t,r)):n}function g(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function y(e){return e?e.key:null}function N(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)for(var u in p(r,t)){var l=null==t||null==t[u]?"":t[u];"-"===u[0]?e[n].setProperty(u,l):e[n][u]=l}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,N):e.removeEventListener(n,N)):n in e&&"list"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.h=e,exports.app=n;
},{}],"6y4U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Exit=exports.Move=exports.Enter=void 0,addEventListener("resize",u),addEventListener("scroll",u);var n=[];function t(n){n.parentNode.removeChild(n)}function e(n,t){Object.keys(t).forEach(function(e){n.style[e]=t[e]})}function r(t){n.indexOf(t)>-1||(n.push(t),setTimeout(function(){f(t)},0))}function o(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}function u(){n.forEach(f)}function i(n){var t=n._x,e=n._y;if(!t)return"translate(0, 0)";var r=f(n);return"translate("+Math.floor(t-r.x)+"px, "+Math.floor(e-r.y)+"px)"}function f(n){var t=n.getBoundingClientRect();return n._x=t.left,n._y=t.top,{x:t.left,y:t.top}}function c(n,t,r,o,u){var i=t.easing||"linear",f=t.time||300,c=t.delay||0;e(n,r),setTimeout(function(){requestAnimationFrame(function(){e(n,o),n.style.transition="all "+i+" "+f+"ms",setTimeout(function(){n.style.transition=null,u&&u()},f)})},c)}function a(n,t,e){"function"==typeof e&&(e=e()),c(n,t,e,Object.keys(e).reduce(function(n,t){return n[t]=null,n},{}),function(){f(n)})}function s(n,t){c(n,t,{transform:i(n)},{transform:null})}function l(n,t,e,r){"function"==typeof e&&(e=e()),o(n);var u=i(n);e.transform=u+(e.transform?" "+e.transform:""),c(n,t,{transform:u},e,r)}function p(){}function v(n,t){return n?t?function(e,r){return n&&n(e,r),t&&t(e,r),p}:n:t}function m(n){return function(t,e){var r=n(t||{});return e.filter(function(n){return!!n.attributes}).map(function(n){return["oncreate","onupdate","onremove"].forEach(function(t){n.attributes[t]=v(n.attributes[t],r[t])}),n})}}var x=m(function(n){return{oncreate:function(n){r(n)}}}),d=m(function(n){return{onupdate:function(t){s(t,n)}}}),y=m(function(n){return{onremove:function(e,r){r=r||function(){t(e)},l(e,n,n.css||{},!n.keep&&r)}}}),E=m(function(n){return{oncreate:function(t){a(t,n,n.css||{})}}});exports.Enter=E;var h=function(n,t){return d(n,x(null,t))};exports.Move=h;var b=function(n,t){return y(n,x(null,t))};exports.Exit=b;
},{}],"kLHG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.a=n,exports.abbr=e,exports.address=o,exports.area=u,exports.article=i,exports.aside=s,exports.audio=p,exports.b=c,exports.bdi=f,exports.bdo=x,exports.blockquote=a,exports.br=d,exports.button=l,exports.canvas=b,exports.caption=m,exports.cite=h,exports.code=g,exports.col=v,exports.colgroup=y,exports.data=k,exports.datalist=q,exports.dd=j,exports.del=w,exports.details=A,exports.dfn=_,exports.dialog=M,exports.div=O,exports.dl=P,exports.dt=z,exports.em=B,exports.embed=C,exports.fieldset=D,exports.figcaption=E,exports.figure=F,exports.footer=G,exports.form=H,exports.h1=I,exports.h2=J,exports.h3=K,exports.h4=L,exports.h5=N,exports.h6=Q,exports.header=R,exports.hr=S,exports.i=T,exports.iframe=U,exports.img=V,exports.input=W,exports.ins=X,exports.kbd=Y,exports.label=Z,exports.legend=$,exports.li=tt,exports.main=rt,exports.map=nt,exports.mark=et,exports.menu=ot,exports.menuitem=ut,exports.meter=it,exports.nav=st,exports.object=pt,exports.ol=ct,exports.optgroup=ft,exports.option=xt,exports.output=at,exports.p=dt,exports.param=lt,exports.pre=bt,exports.progress=mt,exports.q=ht,exports.rp=gt,exports.rt=vt,exports.rtc=yt,exports.ruby=kt,exports.s=qt,exports.samp=jt,exports.section=wt,exports.select=At,exports.small=_t,exports.source=Mt,exports.span=Ot,exports.strong=Pt,exports.sub=zt,exports.summary=Bt,exports.sup=Ct,exports.svg=Dt,exports.table=Et,exports.tbody=Ft,exports.td=Gt,exports.textarea=Ht,exports.tfoot=It,exports.th=Jt,exports.thead=Kt,exports.time=Lt,exports.tr=Nt,exports.track=Qt,exports.u=Rt,exports.ul=St,exports.video=Tt,exports.wbr=Ut;var t=require("hyperapp");function r(r){return function(n,e){return"object"!=typeof n||Array.isArray(n)?(0,t.h)(r,{},n):(0,t.h)(r,n,e)}}function n(t,n){return r("a")(t,n)}function e(t,n){return r("abbr")(t,n)}function o(t,n){return r("address")(t,n)}function u(t,n){return r("area")(t,n)}function i(t,n){return r("article")(t,n)}function s(t,n){return r("aside")(t,n)}function p(t,n){return r("audio")(t,n)}function c(t,n){return r("b")(t,n)}function f(t,n){return r("bdi")(t,n)}function x(t,n){return r("bdo")(t,n)}function a(t,n){return r("blockquote")(t,n)}function d(t,n){return r("br")(t,n)}function l(t,n){return r("button")(t,n)}function b(t,n){return r("canvas")(t,n)}function m(t,n){return r("caption")(t,n)}function h(t,n){return r("cite")(t,n)}function g(t,n){return r("code")(t,n)}function v(t,n){return r("col")(t,n)}function y(t,n){return r("colgroup")(t,n)}function k(t,n){return r("data")(t,n)}function q(t,n){return r("datalist")(t,n)}function j(t,n){return r("dd")(t,n)}function w(t,n){return r("del")(t,n)}function A(t,n){return r("details")(t,n)}function _(t,n){return r("dfn")(t,n)}function M(t,n){return r("dialog")(t,n)}function O(t,n){return r("div")(t,n)}function P(t,n){return r("dl")(t,n)}function z(t,n){return r("dt")(t,n)}function B(t,n){return r("em")(t,n)}function C(t,n){return r("embed")(t,n)}function D(t,n){return r("fieldset")(t,n)}function E(t,n){return r("figcaption")(t,n)}function F(t,n){return r("figure")(t,n)}function G(t,n){return r("footer")(t,n)}function H(t,n){return r("form")(t,n)}function I(t,n){return r("h1")(t,n)}function J(t,n){return r("h2")(t,n)}function K(t,n){return r("h3")(t,n)}function L(t,n){return r("h4")(t,n)}function N(t,n){return r("h5")(t,n)}function Q(t,n){return r("h6")(t,n)}function R(t,n){return r("header")(t,n)}function S(t,n){return r("hr")(t,n)}function T(t,n){return r("i")(t,n)}function U(t,n){return r("iframe")(t,n)}function V(t,n){return r("img")(t,n)}function W(t,n){return r("input")(t,n)}function X(t,n){return r("ins")(t,n)}function Y(t,n){return r("kbd")(t,n)}function Z(t,n){return r("label")(t,n)}function $(t,n){return r("legend")(t,n)}function tt(t,n){return r("li")(t,n)}function rt(t,n){return r("main")(t,n)}function nt(t,n){return r("map")(t,n)}function et(t,n){return r("mark")(t,n)}function ot(t,n){return r("menu")(t,n)}function ut(t,n){return r("menuitem")(t,n)}function it(t,n){return r("meter")(t,n)}function st(t,n){return r("nav")(t,n)}function pt(t,n){return r("object")(t,n)}function ct(t,n){return r("ol")(t,n)}function ft(t,n){return r("optgroup")(t,n)}function xt(t,n){return r("option")(t,n)}function at(t,n){return r("output")(t,n)}function dt(t,n){return r("p")(t,n)}function lt(t,n){return r("param")(t,n)}function bt(t,n){return r("pre")(t,n)}function mt(t,n){return r("progress")(t,n)}function ht(t,n){return r("q")(t,n)}function gt(t,n){return r("rp")(t,n)}function vt(t,n){return r("rt")(t,n)}function yt(t,n){return r("rtc")(t,n)}function kt(t,n){return r("ruby")(t,n)}function qt(t,n){return r("s")(t,n)}function jt(t,n){return r("samp")(t,n)}function wt(t,n){return r("section")(t,n)}function At(t,n){return r("select")(t,n)}function _t(t,n){return r("small")(t,n)}function Mt(t,n){return r("source")(t,n)}function Ot(t,n){return r("span")(t,n)}function Pt(t,n){return r("strong")(t,n)}function zt(t,n){return r("sub")(t,n)}function Bt(t,n){return r("summary")(t,n)}function Ct(t,n){return r("sup")(t,n)}function Dt(t,n){return r("svg")(t,n)}function Et(t,n){return r("table")(t,n)}function Ft(t,n){return r("tbody")(t,n)}function Gt(t,n){return r("td")(t,n)}function Ht(t,n){return r("textarea")(t,n)}function It(t,n){return r("tfoot")(t,n)}function Jt(t,n){return r("th")(t,n)}function Kt(t,n){return r("thead")(t,n)}function Lt(t,n){return r("time")(t,n)}function Nt(t,n){return r("tr")(t,n)}function Qt(t,n){return r("track")(t,n)}function Rt(t,n){return r("u")(t,n)}function St(t,n){return r("ul")(t,n)}function Tt(t,n){return r("video")(t,n)}function Ut(t,n){return r("wbr")(t,n)}
},{"hyperapp":"/xJO"}],"N9B+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{quote:"With self-discipline most anything is possible.",author:"Theodore Roosevelt"},{quote:"I look back on my life like a good day's work, it was done and I am satisfied with it.",author:"Grandma Moses"},{quote:"I certainly hope I'm not still answering child-star questions by the time I reach menopause.",author:"Christina Ricci"},{quote:"There's a consistency in my work that pops up independent of the limitations of the technology.",author:"Douglas Trumbull"},{quote:"Vegetarians are cool. All I eat are vegetarians - except for the occasional mountain lion steak.",author:"Ted Nugent"},{quote:"The enemy of society is middle class and the enemy of life is middle age.",author:"Orson Welles"},{quote:"Everything takes me longer than I expect. It's the sad truth about life.",author:"Donna Tartt"},{quote:"A reporter's ability to keep the bond of confidentiality often enables him to learn the hidden or secret aspects of government.",author:"Bob Woodward"},{quote:"If you want a vision of the future, imagine a boot stamping on a human face - forever.",author:"George Orwell"},{quote:"Maybe I'll be a feminist in my old age.",author:"Bjork"},{quote:"Education should prepare our minds to use its own powers of reason and conception rather than filling it with the accumulated misconceptions of the past.",author:"Bryant H. McGill"},{quote:"Maybe the body learns from dreams. Maybe the muscles, the neutrons, revitalize.",author:"Michael Zaslow"},{quote:"I do not recall a Jewish home without a book on the table.",author:"Elie Wiesel"},{quote:"Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.",author:"Henry Van Dyke"},{quote:"When I was in college, I was debating to try my hand at show business, or to become a professor. I just thought of the risk of not going into show business and always wondering if I would've had a chance. Because that's where my real heart was.",author:"Steve Martin"},{quote:"I'll love you, dear, I'll love you till China and Africa meet and the river jumps over the mountain and the salmon sing in the street.",author:"W. H. Auden"},{quote:"I have a lot of money stashed away, but I do live my life from day to day.",author:"Elton John"},{quote:"Look, I'm very much in favor of tax cuts, but not with borrowed money. And the problem that we've gotten into in recent years is spending programs with borrowed money, tax cuts with borrowed money, and at the end of the day that proves disastrous. And my view is I don't think we can play subtle policy here.",author:"Alan Greenspan"},{quote:"You take somebody that cries their goddam eyes out over phoney stuff in the movies, and nine times out of ten they're mean bastards at heart.",author:"J. D. Salinger"},{quote:"All objects, all phases of culture are alive. They have voices. They speak of their history and interrelatedness. And they are all talking at once!",author:"Camille Paglia"},{quote:"An inventor is simply a fellow who doesn't take his education too seriously.",author:"Charles Kettering"},{quote:"If people choose to live their life in a way that does not confront the more troubling aspects of their experience, that's fine, if it works for them. But it will probably make them uncomfortable if they come up against somebody like me. So they just shouldn't! They shouldn't read my work!",author:"Joyce Maynard"},{quote:"Art is the signature of civilizations.",author:"Beverly Sills"},{quote:"A sculptor wields The chisel, and the stricken marble grows To beauty.",author:"William C. Bryant"},{quote:"Travel aesthetics should be just as comfortable and practical as they are fashionable.",author:"Miguel Jontel Pimentel"},{quote:"If you have learned how to disagree without being disagreeable, then you have discovered the secrete of getting along - whether it be business, family relations, or life itself.",author:"Bernard Meltzer"},{quote:"The principle of the Gothic architecture is infinity made imaginable.",author:"Samuel Taylor Coleridge"},{quote:"Courage easily finds its own eloquence.",author:"Plautus"},{quote:"Labor, under their current leadership, want to be the Downtown Abbey party when it comes to educational opportunity. They think working class children should stick to the station in life they were born into - they should be happy to be recognized for being good with their hands and not presume to get above themselves.",author:"Michael Gove"},{quote:"My mom said, 'Don't get married. You're too young. Go out there and experience what life has to offer.' And I did.",author:"Emmitt Smith"},{quote:"In the forensic science course I took at university they used photographs of dead bodies. For ballistics they showed us a guy lying on the floor, and his head had burst.",author:"Denise Mina"},{quote:"The trouble with jogging is that the ice falls out of your glass.",author:"Martin Mull"},{quote:"A lot of people think I'm that guy in 'Betsy's Wedding', but I'm not. What it is for me is that, on some level, I connect with the character emotionally.",author:"Anthony LaPaglia"},{quote:"Bureaucracy gives birth to itself and then expects maternity benefits.",author:"Dale Dauten"},{quote:"The amazing thing now is that most of those so-called critics who were telling me to find my own voice seem to have lost theirs.",author:"Brian Lumley"},{quote:"Genuine forgiveness does not deny anger but faces it head-on.",author:"Alice Duer Miller"},{quote:"Pessimism leads to weakness, optimism to power.",author:"William James"},{quote:"I'd like to do a lot of things - whether in design or architecture or business.",author:"Caroline Wozniacki"},{quote:"'Therefore' is a word the poet must not know.",author:"Andre Gide"},{quote:"I know there is a Supreme Being who rules the affairs of men and whose goodness and mercy have always followed the American people, and I know He will not turn from us now if we humbly and reverently seek His powerful aid.",author:"Grover Cleveland"},{quote:"Markets rebounded quickly from morning jitters after the London Thursday terrorist bombing.",author:"Cliff Stearns"},{quote:"Technology is making design more exciting, with color, wallpaper, textures, fabrics that could never have been created without the technology.",author:"David Bromstad"},{quote:"The South is very beautiful but its beauty makes one sad because the lives that people live here, and have lived here, are so ugly.",author:"James Baldwin"},{quote:"I want to see far more decisions taken far closer to the patients, the passengers and the pupils. Far more power for locally and regionally elected politicians who understand best the needs of their areas. And far more say too for the dedicated staff at all levels in health and education.",author:"Charles Kennedy"},{quote:"So one reason the science educators panic at the first sign of public rebellion is that they fear exposure of the implicit religious content in what they are teaching.",author:"Phillip E. Johnson"},{quote:"I was sent to a finishing school, which didn't last long when mother found out how badly chaperoned we were. Then I 'came out' before going to a domestic science school.",author:"Mary Wesley"},{quote:"I tend to show everything I do to my family, to check they won't be offended.",author:"David Sedaris"},{quote:"Really I don't like human nature unless all candied over with art.",author:"Virginia Woolf"},{quote:"Controversy is part of the nature of art and creativity.",author:"Yoko Ono"},{quote:"It's a funny old world.",author:"Margaret Thatcher"},{quote:"Santa is our culture's only mythic figure truly believed in by a large percentage of the population. It's a fact that most of the true believers are under eight years old, and that's a pity.",author:"Chris Van Allsburg"},{quote:"Do not ever say that the desire to 'do good' by force is a good motive. Neither power-lust nor stupidity are good motives.",author:"Ayn Rand"},{quote:"Love can sometimes be magic. But magic can sometimes... just be an illusion.",author:"Javan"},{quote:"I put the costume on and said 'It's not very comfortable, but it looks amazing,' so it's all good.",author:"Chris Hemsworth"},{quote:"Solitude, though it may be silent as light, is like light, the mightiest of agencies for solitude is essential to man. All men come into this world alone and leave it alone.",author:"Thomas de Quincey"},{quote:"I would find myself laughing and wondering where these ideas came from. You can call it imagination, I suppose. But I was grateful for wherever they came from.",author:"Amy Tan"},{quote:"This truth is a remedy against spiritual pride, namely, that none should account himself better before God than others, though perhaps adorned with greater gifts, and endowments.",author:"Johann Arndt"},{quote:"I cannot say how strongly I object to people using other people's writing as research. Research is non-fiction, especially for horror, fantasy, science fiction. Do not take your research from other people's fiction. Just don't.",author:"Laurell K. Hamilton"},{quote:"It is cruel, you know, that music should be so beautiful. It has the beauty of loneliness of pain: of strength and freedom. The beauty of disappointment and never-satisfied love. The cruel beauty of nature and everlasting beauty of monotony.",author:"Benjamin Britten"},{quote:"Look, I want what's good for everybody. I want to promote good state education for all. I want to raise standards for all kids, irrespective of race and class but why can't they all just do what I say when I know I'm right?",author:"Arabella Weir"},{quote:"Each underestimates her own power and overestimates the other's.",author:"Deborah Tannen"},{quote:"I was lucky enough when it came to sports and work ethic to be taught some basics that continue to be important.",author:"Joe Namath"},{quote:"I'm actually not a big fan of the word hope. I think it's a depressing word. I don't want to hope - I want to know. Like I don't hope there's a God, I know there's a God.",author:"Kelly Clarkson"},{quote:"My parents have a wonderful marriage, for many years. But I can't commit myself for such a long time.",author:"Kim Wilde"},{quote:"We came from a family where we ran our own small business. Our dad made his own products. We made our own sausages, our own meatloafs, our own pickles. Dad had to do everything himself. He had to figure out how to finance his business.",author:"Marcy Kaptur"},{quote:"Above all, we must have great respect for these people who also suffer and who want to find their own way of correct living. On the other hand, to create a legal form of a kind of homosexual marriage, in reality, does not help these people.",author:"Joseph Ratzinger"},{quote:"The real 1960s began on the afternoon of November 22, 1963. It came to seem that Kennedy's murder opened some malign trap door in American culture, and the wild bats flapped out.",author:"Lance Morrow"},{quote:"Everybody's business is nobody's business, and nobody's business is my business.",author:"Clara Barton"},{quote:"I love Valentine's Day! I love it, I love it, I love it. I like having doors opened for me. My favorite romantic comedy is 'When Harry Met Sally.'",author:"Ginnifer Goodwin"},{quote:"There was nothing more important I could do than be supportive as a dad.",author:"Arne Duncan"},{quote:"An order of government, established by such an all-wise, powerful being, must be good and perfect, and must be calculated to promote the permanent peace, happiness, and well-being of all his subjects.",author:"Orson Pratt"},{quote:"We can close the gap and improve what happens in the classroom by using educational technology that is the same high quality everywhere.",author:"Major Owens"},{quote:"If the choice is between doing something supercool and having no one hear it and doing something equally cool and tricking people into putting it on the radio, I don't think the second option is some big sellout.",author:"Julian Casablancas"},{quote:"Married love between man and woman is bigger than oaths guarded by right of nature.",author:"Aeschylus"},{quote:"I seek to call America home to those principles that gave us birth.",author:"George McGovern"},{quote:"Effective communication is 20% what you know and 80% how you feel about what you know.",author:"Jim Rohn"},{quote:"I am sometimes a fox and sometimes a lion. The whole secret of government lies in knowing when to be the one or the other.",author:"Napoleon Bonaparte"},{quote:"I'm a feminist, but I think that romance has been taken away a bit for my generation. I think what people connect with in novels is this idea of an overpowering, encompassing love - and it being more important and special than anything and everything else.",author:"Emma Watson"},{quote:"Freedom in a commons brings ruin to all.",author:"Garrett Hardin"},{quote:"One of the lessons of history is that nothing is often a good thing to do and always a clever thing to say.",author:"Will Durant"},{quote:"Divorced men are more likely to meet their car payments than their child support obligations.",author:"Susan Faludi"},{quote:"Car designers are just going to have to come up with an automobile that outlasts the payments.",author:"Erma Bombeck"},{quote:"I went to a football school, which meant that I went to a university that served up education and was simultaneously operating a sports franchise.",author:"Susan Orlean"},{quote:"I think my first album opened a lot of doors for me to push the freedom of speech to the limit.",author:"Eminem"},{quote:"A Latin teacher told me I might make a good actress, and that stuck in my memory. I did some modeling, and Polanski gave me that small part.",author:"Jacqueline Bisset"},{quote:"In this situation I was constantly exposed to danger and death.",author:"Daniel Boone"},{quote:"We looked at each other standing on the podium, and I think we all were tearing up. But we had to keep it cool. I think we did. Then we let out a breath.",author:"Michael Irvin"},{quote:"Anybody under the age of forty knows hip-hop, gospel and R&ampB pretty well, and it's all a part of what we consider to be 'black music.' There is a natural synergy between the three.",author:"John Legend"},{quote:"Never be afraid to meet to the hilt the demand of either work, or friendship - two of life's major assets.",author:"Eleanor Robson Belmont"},{quote:"If your movies don't perform, they just stop calling you.",author:"Matt Damon"},{quote:"Reflect upon your present blessings of which every man has many - not on your past misfortunes, of which all men have some.",author:"Charles Dickens"},{quote:"I attach the greatest importance to an amplification of the peace efforts in the Middle East. I would also like to see a greater dialogue between the U.S. and the EU.",author:"Francois Hollande"},{quote:"The best of us must sometimes eat our words.",author:"J. K. Rowling"},{quote:"You cannot, in human experience, rush into the light. You have to go through the twilight into the broadening day before the noon comes and the full sun is upon the landscape.",author:"Woodrow Wilson"},{quote:"There is no worse screen to block out the Spirit than confidence in our own intelligence.",author:"John Calvin"},{quote:"I've got a very deep and abiding passion about education being far more than buildings and textbooks it's what children bring into school with them.",author:"Johann Lamont"},{quote:"I don't care half so much about making money as I do about making my point, and coming out ahead.",author:"Cornelius Vanderbilt"},{quote:"I didn't feel any remorse or sympathy if I injured a rival. I went over the top a few times but I never broke anyone's leg.",author:"Peter Storey"},{quote:"When the fabric of society is so rigid that it cannot change quickly enough, adjustments are achieved by social unrest and revolutions.",author:"John Boyd Orr"},{quote:"Sometimes you ask God for something and you don't know what you're asking.",author:"Mahalia Jackson"}];exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("hyperapp"),t=require("@hyperapp/transitions"),r=require("@hyperapp/html"),o=n(require("./quotes"));function n(e){return e&&e.__esModule?e:{default:e}}var u=function(e,o){return(0,t.Enter)({time:500,css:{opacity:0,position:"absolute",transform:"scale(0.1, 0.1)"}},(0,t.Exit)({time:500,css:{opacity:0,transform:"scale(2, 2)",color:"rgba(0, 0, 0, 0"}},[(0,r.blockquote)(e,[(0,r.p)(o.quote),(0,r.p)(o.author)])]))},a=function(e){return Math.floor(Math.random()*e)},i={quote:[{quote:"An inventor is simply a fellow who doesn't take his education too seriously.",author:"Charles Kettering"}],len:o.default.length},s={updateQuote:function(e){return{currentKey:e.currentKey+1,quote:[o.default[a(e.len)]]}}},c=function(e,t){return(0,r.div)({},[e.quote.map(function(r){return u({key:Date.now(),onclick:function(){return t.updateQuote(e)}},r)})])};(0,e.app)(i,s,c,document.body);
},{"hyperapp":"/xJO","@hyperapp/transitions":"6y4U","@hyperapp/html":"kLHG","./quotes":"N9B+"}]},{},["Focm"], null)
//# sourceMappingURL=src.caf73a2c.map