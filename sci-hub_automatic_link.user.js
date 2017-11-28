// ==UserScript==
// @name        sci-hub automatic link
// @website     http://blog.dorian-depriester.fr
// @author      Dorian Depriester
// @description Automatically turns each DOI link into a new link to the corresponding document on sci-hub.cc
// @downloadURL https://github.com/DorianDepriester/doi2scihub/raw/master/sci-hub_automatic_link.user.js
// @supportURL  https://github.com/DorianDepriester/doi2scihub/issues
// @version     5.1
// @grant       none
// @match       *://*/*
// @exclude     http*://*.google.*
// @exclude     http*://*.stackexchange.com/*
// @exclude     http*://*.stackoverflow.com/*
// @exclude     http*://*.superuser.com/*
// @exclude     http*://*.askubuntu.com/*
// @exclude     http*://*.reddit.com/*
// @run-at      document-idle
// ==/UserScript==
window.addEventListener('load', function() {
   var els = document.getElementsByTagName("A");
   for(var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      el.href = el.href.replace(/^((http(s|):\/\/|www\.)|)(dx.|)doi\.org\//gim, 'http://sci-hub.bz/');
   }
}, false);
