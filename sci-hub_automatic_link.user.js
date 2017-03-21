// ==UserScript==
// @name        sci-hub automatic link
// @namespace   http://blog.dorian-depriester.fr
// @description Automatically turns each DOI link into a new link to the corresponding document on sci-hub.cc
// @version     3
// @grant       none
// ==/UserScript==
window.addEventListener('load', function() {
    var els = document.getElementsByTagName("A");
    for(var i = 0, l = els.length; i < l; i++) {
       var el = els[i];
       el.href = el.href.replace(/^((http(s|):\/\/|www\.)|)(dx.|)doi\.org\//gim, 'http://sci-hub.cc/');
    }
}, false);   
