// ==UserScript==
// @name        sci-hub automatic link
// @namespace   http://blog.dorian-depriester.fr
// @description Automatically turns each DOI link into a new link to the corresponding document on sci-hub.cc
// @version     1
// @grant       none
// ==/UserScript==
var els = document.getElementsByTagName("A");
for(var i = 0, l = els.length; i < l; i++) {
    var el = els[i];
    el.href = el.href.replace(/\S*dx\.doi\.org\//gmi, 'http://sci-hub.cc/');
}
