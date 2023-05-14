// ==UserScript==
// @name         batoto screenshot ♥️
// @namespace    https://heartlog.github.com
// @version      0.3
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        https://bato.to/chapter/*
// @match        https://bato.to/title/*/*
// ==/UserScript==

(function() {
    'use strict';
    // URL
    var PUrl = location.href;
    PixRedi(PUrl);
})
();


function PixRedi(FinUrl) {
  var PixReady = "https://api.pikwy.com/?tkn=125&d=3000&u=" + FinUrl + "&fs=1&w=530&h=812&s=100&z=100&f=jpg&rt=raw";
  location.href = PixReady;
}
/*
Reference for API parameters
- tkn : default token is 125
- d : delay (range 0-6000)
- u : URL adress of webpage
- fs : Full screen 1 is on & 0 is off
- w : width (if increase quality increase)
- h : height (if increase quality increase)
- s : scale (if decreased quality decrease)
- z : zoom (if decreased contant will appear small)
- f : format png, jpg, html
- rt : responsetype (raw, json, html, jweb)
*/