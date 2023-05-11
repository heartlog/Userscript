// ==UserScript==
// @name         unload
// @namespace    https://heartlog.github.io/
// @version      0.1
// @description  try to take over the world!
// @author       Heartlog
// @run-at       document-start
// @match        https://manganato.com/*/*
// @match        https://chapmanganelo.com/manga-*/chapter-*
// @grant         GM_setValue
// @grant         GM_addStyle
// @grant         GM_deleteValue
// @grant         GM_getValue
// @grant         GM_info
// ==/UserScript==

(function() {
    'use strict';
    // Block all images on client side
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
    images[i].src = 'none';
    images[i].style.display = 'none';
    }

})()